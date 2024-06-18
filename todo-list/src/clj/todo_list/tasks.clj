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
    (db/add-task task-with-id)
    (swap! tasks conj task-with-id)
    (println "Current tasks:" @tasks)))

(defn remove-task [id]
  (jdbc/with-db-transaction [t-conn db/db-spec]
    (jdbc/delete! t-conn :tasks ["id=?" id])
    (swap! tasks (fn [ts] (remove #(= id (:id %)) ts)))))

(defn update-task-status [id new-status]
  (jdbc/with-db-transaction [t-conn db/db-spec]
    (let [updated-task (jdbc/update! t-conn :tasks {"status" new-status} ["id=?" id])]
      (swap! tasks (fn [ts]
                     (map #(if (= id (:id %))
                             (assoc % :status new-status)
                             %)
                          ts)))
      updated-task)))
