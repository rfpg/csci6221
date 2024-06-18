(ns todo-list.gui
  (:require [seesaw.core :as seesaw]
            [seesaw.list :as list]
            [todo-list.core :as core]))

(defn update-list [tasks-list tasks]
  (seesaw/config! tasks-list :model (mapv (fn [task]
                                            (str (if (:completed task) "[x] " "[ ] ") (:task task)))
                                          tasks)))

(defn show-task-manager []
  (let [tasks (atom (core/load-tasks))
        tasks-list (list/list)
        add-task-fn (fn []
                      (let [task (seesaw/input "Enter new task:")]
                        (when task
                          #_{:clj-kondo/ignore [:invalid-arity]}
                          (swap! tasks core/add-task task)
                          (core/save-tasks @tasks)
                          (update-list tasks-list @tasks))))
        remove-task-fn (fn []
                         (let [selected (seesaw/selection tasks-list)]
                           (when selected
                             (let [index (.indexOf (seesaw/items tasks-list) selected)]
                               #_{:clj-kondo/ignore [:invalid-arity]}
                               (swap! tasks core/remove-task index)
                               (core/save-tasks @tasks)
                               (update-list tasks-list @tasks)))))
        toggle-task-fn (fn []
                         (let [selected (seesaw/selection tasks-list)]
                           (when selected
                             (let [index (.indexOf (seesaw/items tasks-list) selected)]
                               (swap! tasks core/update-status index)
                               (core/save-tasks @tasks)
                               (update-list tasks-list @tasks)))))]

    (update-list tasks-list @tasks)
    (seesaw/invoke-later
     (seesaw/frame :title "Task Manager"
                   :content (seesaw/vertical-panel
                             :items [(seesaw/scrollable tasks-list)
                                     (seesaw/horizontal-panel
                                      :items [(seesaw/button :text "Add Task" :listen [:action add-task-fn])
                                              (seesaw/button :text "Remove Task" :listen [:action remove-task-fn])
                                              (seesaw/button :text "Toggle Task Status" :listen [:action toggle-task-fn])])])
                   :on-close :exit
                   :pack? true
                   :visible? true))))

(defn -main [& args]
  (show-task-manager))