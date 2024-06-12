(ns todo-list.tasks
   (:require [clojure.edn :as edn]
             [clojure.java.io :as io]))

 (defonce tasks (atom []))

 (defn read-tasks []
   (try
     (reset! tasks (edn/read-string (slurp (io/resource "tasks.edn"))))
     @tasks
     (catch Exception e
       (prn "Error reading tasks:" e)
       [])))

 (defn write-tasks [tasks]
   (spit "resources/tasks.edn" (prn-str tasks)))

 (defn add-task [task]
   (swap! tasks conj task)
   (write-tasks @tasks))

 (defn remove-task [task]
   (swap! tasks (fn [ts] (remove #(= task (:task %)) ts)))
   (write-tasks @tasks))

 (defn update-task-status [task new-status]
   (swap! tasks (fn [ts]
                  (map #(if (= task (:task %))
                          (assoc % :status new-status)
                          %)
                       ts)))
   (write-tasks @tasks))
