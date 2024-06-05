(ns todo-list.core
  (:gen-class)
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]))

(def task-file "tasks.edn")

(defn add-task [tasks task]
  (conj tasks task))

(defn view-tasks [tasks]
  (doseq [[index task] (map-indexed vector tasks)]
    (println (str (inc index) ". " (if (:completed task) "[x] " "[ ] ") (:task task)))))

(defn valid-index? [index tasks]
  (and (>= index 0) (< index (count tasks))))

(defn update-status [tasks task-index]
  (if (valid-index? task-index tasks)
    (update-in tasks [task-index :completed] not)
    (do (println "Invalid task number.") tasks)))

(defn remove-task [tasks task-index]
  (if (valid-index? task-index tasks)
    (vec (concat (subvec tasks 0 task-index) (subvec tasks (inc task-index))))
    (do (println "Invalid task number.") tasks)))

(defn save-tasks [tasks]
  (with-open [w (io/writer task-file)]
    (binding [*out* w]
      (prn tasks))))

(defn load-tasks []
  (if (.exists (io/file task-file))
    (with-open [r (io/reader task-file)]
      (edn/read (java.io.PushbackReader. r)))
    []))

(defn -main [& args]
  (loop [tasks (load-tasks)]
    (println "\nTo-Do List Application")
    (println "1. Add Task")
    (println "2. View Tasks")
    (println "3. Update Task Status")
    (println "4. Remove Task")
    (println "5. Save and Exit")
    (print "Choose an option: ")
    (flush)
    (let [choice (read-line)]
      (cond
        (= choice "1")
        (do (print "Enter task: ")
            (flush)
            (let [task (read-line)]
              (recur (add-task tasks {:task task :due-date nil :completed false}))))

        (= choice "2")
        (do (view-tasks tasks)
            (recur tasks))

        (= choice "3")
        (do (print "Enter task number to update status: ")
            (flush)
            (let [index (dec (Integer. (read-line)))]
              (recur (update-status tasks index))))

        (= choice "4")
        (do (print "Enter task number to remove: ")
            (flush)
            (let [index (dec (Integer. (read-line)))]
              (recur (remove-task tasks index))))

        (= choice "5")
        (do (save-tasks tasks)
            (println "Tasks saved. Exiting.")
            (System/exit 0))

        :else
        (do (println "Invalid choice. Try again.")
            (recur tasks))))))

