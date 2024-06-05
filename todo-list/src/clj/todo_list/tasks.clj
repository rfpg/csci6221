(ns todo-list.tasks
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]))

(defonce tasks-file "tasks.edn")

(defn read-tasks []
  (if (.exists (io/file tasks-file))
    (with-open [r (io/reader tasks-file)]
      (edn/read r))
    []))

(defn write-tasks [tasks]
  (with-open [w (io/writer tasks-file)]
    (binding [*out* w]
      (prn tasks))))

(defn add-task [task]
  (let [tasks (read-tasks)]
    (write-tasks (conj tasks task))))

(defn remove-task [task]
  (let [tasks (read-tasks)]
    (write-tasks (remove #(= task %) tasks))))

(defn edit-task [old-task new-task]
  (let [tasks (read-tasks)]
    (write-tasks (map #(if (= old-task %) new-task %) tasks))))
