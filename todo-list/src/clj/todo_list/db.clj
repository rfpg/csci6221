(ns todo-list.db
  (:require [clojure.java.jdbc :as jdbc]))

(def db-spec {:classname "org.sqlite.JDBC"
              :subprotocol "sqlite"
              :subname "tasks.db"})

(defn create-tasks-table []
  (jdbc/db-do-commands db-spec
                       (jdbc/create-table-ddl :tasks
                                              [:id "TEXT PRIMARY KEY"]
                                              [:name "TEXT"]
                                              [:date "TEXT"]
                                              [:assignee "TEXT"]
                                              [:status "TEXT"])))

(defn get-tasks []
  (jdbc/query db-spec ["SELECT * FROM tasks"]))

(defn add-task [task]
  (jdbc/insert! db-spec :tasks task))

(defn update-task [task]
  (jdbc/update! db-spec :tasks {:name (:name task)
                                :date (:date task)
                                :assignee (:assignee task)
                                :status (:status task)}
                ["id = ?" (:id task)]))

(defn delete-task [id]
  (jdbc/delete! db-spec :tasks ["id = ?" id]))
