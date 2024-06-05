(ns todo-list.core
  (:require [reagent.core :as reagent]
            [reagent.dom :as dom]
            [ajax.core :refer [GET POST DELETE PUT]]))

(defonce tasks (reagent/atom []))
(defonce new-task (reagent/atom {:task "" :due-date "" :people ""}))

(defn fetch-tasks []
  (GET "/tasks"
    {:handler (fn [response]
                (js/console.log "Tasks fetched:" response)
                (reset! tasks (vec response)))
     :error-handler #(js/console.error "Failed to fetch tasks" %)}))

(defn add-task []
  (POST "/tasks"
    {:params @new-task
     :handler (fn [response]
                (js/console.log "Task added:" response)
                (fetch-tasks)
                (reset! new-task {:task "" :due-date "" :people ""}))
     :error-handler #(js/console.error "Failed to add task" %)}))

(defn remove-task [task]
  (DELETE "/tasks"
    {:params {:task task}
     :handler (fn [response]
                (js/console.log "Task removed:" response)
                (fetch-tasks))
     :error-handler #(js/console.error "Failed to remove task" %)}))

(defn edit-task [old-task new-task]
  (PUT "/tasks"
    {:params {:old-task old-task :new-task new-task}
     :handler (fn [response]
                (js/console.log "Task edited:" response)
                (fetch-tasks))
     :error-handler #(js/console.error "Failed to edit task" %)}))

(defn task-form []
  [:div.task-form
   [:input {:type "text"
            :placeholder "Task"
            :value (:task @new-task)
            :on-change #(swap! new-task assoc :task (-> % .-target .-value))}]
   [:input {:type "date"
            :value (:due-date @new-task)
            :on-change #(swap! new-task assoc :due-date (-> % .-target .-value))}]
   [:input {:type "text"
            :placeholder "People"
            :value (:people @new-task)
            :on-change #(swap! new-task assoc :people (-> % .-target .-value))}]
   [:button {:on-click add-task} "Add Task"]])

(defn task-item [task]
  [:div.task-item
   [:span (:task task)]
   [:span (:due-date task)]
   [:span (:people task)]
   [:button {:on-click #(remove-task (:task task))} "Remove"]
   [:button {:on-click #(edit-task (:task task) "new-task-name")} "Edit"]])

(defn task-list []
  [:div
   [:h2 "Tasks"]
   [task-form]
   (for [task @tasks]
     ^{:key (:task task)}
     [task-item task])])

(defn mount-root []
  (fetch-tasks)
  (dom/render
   [task-list]
   (.getElementById js/document "app")))

(defn init []
  (mount-root))

(init)
