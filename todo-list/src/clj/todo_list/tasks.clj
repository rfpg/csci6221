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
  (db/add-task task)
  (swap! tasks conj task)
  (let [result (db/get-tasks)]
    (println "Current tasks in the database:" result)))

(defn remove-task [id]
  (db/delete-task id)
  (swap! tasks (fn [ts] (remove #(= id (:id %)) ts))))

(defn update-task-status [id new-status]
  (let [task (first (filter #(= id (:id %)) @tasks))]
    (when task
      (db/update-task (assoc task :status new-status))
      (swap! tasks (fn [ts]
                     (map #(if (= id (:id %))
                             (assoc % :status new-status)
                             %)
                          ts))))))
