(ns todo-list.tasks
  (:require [clojure.java.jdbc :as jdbc]
            [todo-list.db :as db]))

(defonce tasks (atom []))

(defn read-tasks []
  (try
    (let [result (db/get-tasks)]
      (reset! tasks result)
      (println "Tasks from DB:" result)  ; Log tasks to verify
      result)
    (catch Exception e
      (prn "Error reading tasks:" e)
      [])))

(defn add-task [task]
  (let [task-with-id (assoc task :id (str (java.util.UUID/randomUUID)))]
    (println "Adding task:" task-with-id)
    (db/add-task task-with-id) ; Assuming db/add-task saves the task to the database
    (swap! tasks conj task-with-id)
    (println "Current tasks:" @tasks)
    task-with-id)) ; Return the task with the new ID

(defn remove-task [id]
    (println "Removing task with ID:" id) ;; Log the ID 
    (jdbc/with-db-transaction [t-conn db/db-spec]
    (jdbc/delete! t-conn :tasks ["id=?" id])
    (swap! tasks (fn [ts] (remove #(= id (:id %)) ts)))))

(defn update-task [id updates]
  (try
    (let [result (jdbc/update! db/db-spec :tasks updates ["id = ?" id])]
      (if (zero? (first result))
        (do
          (println "No task found with ID:" id)
          false)
        true))
    (catch Exception e
      (println "Error updating task:" (.getMessage e))
      false)))
