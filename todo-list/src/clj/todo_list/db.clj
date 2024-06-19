(ns todo-list.db
  (:require [clojure.java.jdbc :as jdbc]))

(def db-spec {:classname "org.sqlite.JDBC"
              :subprotocol "sqlite"
              :subname "/Users/maryamkhanoom/csci6221/todo-list/tasks.db"})

(defn get-tasks []
  (jdbc/query db-spec ["SELECT * FROM tasks"]))

(defn add-task [task]
  (try
    (jdbc/with-db-transaction [t-con db-spec]
      ;; Insert the task and retrieve the generated key.
      (let [keys (jdbc/insert! t-con :tasks task
                               {:return-keys true})]
        ;; Retrieve the inserted task with its new ID.
        (jdbc/query t-con ["SELECT * FROM tasks WHERE id = ?" (:id keys)])))
    (catch Exception e
      (println "Failed to add task:" (.getMessage e))
      nil)))  ; Return nil on failure, optionally handle this more gracefully.

(defn update-task [task]
  (try
    (jdbc/with-db-transaction [t-con db-spec]
      (println "Updating task in DB:" task)
      (jdbc/update! t-con :tasks
                    {:name (:name task)
                     :date (:date task)
                     :assignee (:assignee task)
                     :status (:status task)}
                    ["id = ?" (:id task)])
      (println "Task updated successfully")
      task)  ; Return the updated task.
    (catch Exception e
      (println "Failed to update task:" (.getMessage e))
      nil)))  ; Return nil on failure.

(defn delete-task [id]
  (try
    (jdbc/with-db-transaction [t-con db-spec]
      (jdbc/delete! t-con :tasks ["id = ?" id])
      {:status "success"})
    (catch Exception e
      (println "Failed to delete task:" (.getMessage e))
      {:status "error" :message "Failed to delete task"})))
