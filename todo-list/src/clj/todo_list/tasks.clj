(ns todo-list.tasks
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]))

(def tasks-file "resources/tasks.edn")

(defn read-tasks []
  (with-open [r (io/reader tasks-file)]
    (edn/read r)))

(defn write-tasks [tasks]
  (with-open [w (io/writer tasks-file)]
    (binding [*out* w]
      (prn tasks))))

(defn add-task [task]
  (let [tasks (read-tasks)]
    (write-tasks (conj tasks task))))

(defn remove-task [task]
  (let [tasks (read-tasks)]
    (write-tasks (remove #(= (:task %) (:task task)) tasks))))

(defn edit-task [old-task new-task]
  (let [tasks (read-tasks)]
    (write-tasks (map (fn [t] (if (= (:task t) (:task old-task)) new-task t)) tasks))))