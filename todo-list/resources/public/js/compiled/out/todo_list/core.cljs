(ns todo-list.core
  (:require [reagent.core :as reagent]
            [reagent.dom :as dom]
            [ajax.core :refer [GET POST DELETE PUT]]
            [cljs.reader :refer [read-string]]))

(defonce tasks (reagent/atom {:ready-to-start [] :in-progress [] :waiting-for-review [] :pending-deploy [] :done [] :stuck [] :blank []}))
(defonce new-task (reagent/atom {:task "" :due-date "" :people "" :status "ready-to-start"}))

(defn fetch-tasks []
  (GET "/tasks"
    {:handler (fn [response]
                (js/console.log "Tasks fetched:" response)
                (reset! tasks (group-by :status (read-string response))))
     :error-handler #(js/console.error "Failed to fetch tasks" %)}))

(defn add-task []
  (POST "/tasks"
    {:params @new-task
     :handler (fn [response]
                (fetch-tasks)
                (reset! new-task {:task "" :due-date "" :people "" :status "ready-to-start"}))
     :error-handler #(js/console.error "Failed to add task" %)}))

(defn delete-task [task]
  (DELETE "/tasks"
    {:params {:task (:task task)}
     :handler #(fetch-tasks)
     :error-handler #(js/console.error "Failed to delete task" %)}))

(defn update-task-status [task new-status]
  (PUT "/tasks"
    {:params {:task (:task task) :status new-status}
     :handler #(fetch-tasks)
     :error-handler #(js/console.error "Failed to update task status" %)}))

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
   [:select {:value (:status @new-task)
             :on-change #(swap! new-task assoc :status (-> % .-target .-value))}
    [:option {:value "ready-to-start"} "Ready to start"]
    [:option {:value "in-progress"} "In Progress"]
    [:option {:value "waiting-for-review"} "Waiting for review"]
    [:option {:value "pending-deploy"} "Pending Deploy"]
    [:option {:value "done"} "Done"]
    [:option {:value "stuck"} "Stuck"]
    [:option {:value "blank"} "Blank"]]
   [:button {:on-click add-task} "Add Task"]])

(defn task-item [task]
  [:div.task-item
   [:span (:task task) " (" (:due-date task) ") "]
   [:span "Assigned to: " (:people task) " "]
   [:button {:on-click #(delete-task task)} "Delete"]
   (when-not (= (:status task) "ready-to-start")
     [:button {:on-click #(update-task-status task "ready-to-start")} "Move to Ready to start"])
   (when-not (= (:status task) "in-progress")
     [:button {:on-click #(update-task-status task "in-progress")} "Move to In Progress"])
   (when-not (= (:status task) "waiting-for-review")
     [:button {:on-click #(update-task-status task "waiting-for-review")} "Move to Waiting for review"])
   (when-not (= (:status task) "pending-deploy")
     [:button {:on-click #(update-task-status task "pending-deploy")} "Move to Pending Deploy"])
   (when-not (= (:status task) "done")
     [:button {:on-click #(update-task-status task "done")} "Move to Done"])
   (when-not (= (:status task) "stuck")
     [:button {:on-click #(update-task-status task "stuck")} "Move to Stuck"])
   (when-not (= (:status task) "blank")
     [:button {:on-click #(update-task-status task "blank")} "Move to Blank"])])

(defn task-board []
  [:div.board
   [:div {:class "table"}
    [:div {:class "table-row"}
     [:div {:class "table-cell"} [:h2 "Ready to start / " (count (get @tasks :ready-to-start))]]
     [:div {:class "table-cell"} [:h2 "In Progress / " (count (get @tasks :in-progress))]]
     [:div {:class "table-cell"} [:h2 "Waiting for review / " (count (get @tasks :waiting-for-review))]]
     [:div {:class "table-cell"} [:h2 "Pending Deploy / " (count (get @tasks :pending-deploy))]]
     [:div {:class "table-cell"} [:h2 "Done / " (count (get @tasks :done))]]
     [:div {:class "table-cell"} [:h2 "Stuck / " (count (get @tasks :stuck))]]
     [:div {:class "table-cell"} [:h2 "Blank / " (count (get @tasks :blank))]]]
    [:div {:class "table-row"}
     [:div {:class "table-cell"} (for [task (get @tasks :ready-to-start)] ^{:key (:task task)} [task-item task])]
     [:div {:class "table-cell"} (for [task (get @tasks :in-progress)] ^{:key (:task task)} [task-item task])]
     [:div {:class "table-cell"} (for [task (get @tasks :waiting-for-review)] ^{:key (:task task)} [task-item task])]
     [:div {:class "table-cell"} (for [task (get @tasks :pending-deploy)] ^{:key (:task task)} [task-item task])]
     [:div {:class "table-cell"} (for [task (get @tasks :done)] ^{:key (:task task)} [task-item task])]
     [:div {:class "table-cell"} (for [task (get @tasks :stuck)] ^{:key (:task task)} [task-item task])]
     [:div {:class "table-cell"} (for [task (get @tasks :blank)] ^{:key (:task task)} [task-item task])]]]])

(defn mount-root []
  (fetch-tasks)
  (dom/render
   [:div
    [:h1 "Task Manager"]
    [task-form]
    [task-board]]
   (.getElementById js/document "app")))

(defn init []
  (mount-root))

(init)
