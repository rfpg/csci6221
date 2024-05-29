(ns todo-list.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [ajax.core :refer [GET POST PUT DELETE]]
            [cljs.reader :refer [read-string]]))

(defonce tasks (r/atom []))
(defonce current-task-id (r/atom nil))

(defn fetch-tasks []
  (GET "/tasks"
       {:handler #(reset! tasks (read-string %))
        :error-handler #(js/console.error "Failed to fetch tasks" %)}))

(defn add-task [task]
  (POST "/tasks"
        {:params task
         :handler #(do
                     (swap! tasks conj (assoc task :id (random-uuid)))
                     (js/console.log "Task added" %))
         :error-handler #(js/console.error "Failed to add task" %)}))

(defn remove-task [task-id]
  (let [new-tasks (remove #(= (:id %) task-id) @tasks)]
    (reset! tasks new-tasks)
    (DELETE "/tasks"
            {:params {:task task-id}
             :handler #(js/console.log "Task removed" %)
             :error-handler #(js/console.error "Failed to remove task" %)})))

(defn edit-task [task-id updated-task]
  (let [update-tasks (fn [tasks]
                       (mapv (fn [t] (if (= (:id t) task-id) (merge t updated-task) t)) tasks))]
    (swap! tasks update-tasks)
    (PUT "/tasks"
         {:params {:task task-id :status (:status updated-task)}
          :handler #(js/console.log "Task updated" %)
          :error-handler #(js/console.error "Failed to update task" %)})))

(defn task-form []
  (let [name (r/atom "")
        date (r/atom "")
        assignee (r/atom "")
        status (r/atom "ready-to-start")]
    (fn []
      [:div.task-form
       [:input {:type "text" :placeholder "Task Name" :value @name :on-change #(reset! name (-> % .-target .-value))}]
       [:input {:type "date" :value @date :on-change #(reset! date (-> % .-target .-value))}]
       [:input {:type "text" :placeholder "Assignee" :value @assignee :on-change #(reset! assignee (-> % .-target .-value))}]
       [:select {:value @status :on-change #(reset! status (-> % .-target .-value))}
        [:option {:value "ready-to-start"} "Ready to start"]
        [:option {:value "in-progress"} "In Progress"]
        [:option {:value "waiting-for-review"} "Waiting for review"]
        [:option {:value "pending-deploy"} "Pending Deploy"]
        [:option {:value "done"} "Done"]
        [:option {:value "stuck"} "Stuck"]
        [:option {:value "blank"} "Blank"]]
       [:button {:on-click #(add-task {:name @name :date @date :assignee @assignee :status @status})} "Add Task"]])))

(defn task-item [task]
  (fn []
    [:div.task {:draggable true
                :on-drag-start #(do
                                  (reset! current-task-id (:id task))
                                  (js/console.log "Drag start" (:id task)))}
     [:div.task-title (:name task)]
     [:div.task-detail (str "Due: " (:date task))]
     [:div.task-detail (str "Assigned to: " (:assignee task))]
     [:button.edit-button {:on-click #(do
                                        (reset! current-task-id (:id task))
                                        (.open (js/document.getElementById "editModal")))} "Edit"]]))

(defn task-list [status]
  (let [tasks-by-status (filter #(= (:status %) status) @tasks)]
    [:div.tasks {:on-drag-over #(do (.preventDefault %)
                                    (js/console.log "Drag over" status))
                 :on-drop #(let [task-id @current-task-id]
                             (js/console.log "Drop" status task-id)
                             (when task-id
                               (edit-task task-id {:status status})
                               (reset! current-task-id nil)))}
     (for [task tasks-by-status]
       ^{:key (:id task)}
       [task-item task])]))

(defn task-board []
  [:div.board
   [:div.column {:class "ready-to-start-column"}
    [:div.column-header "Ready to start"]
    [task-list "ready-to-start"]]
   [:div.column {:class "in-progress-column"}
    [:div.column-header "In Progress"]
    [task-list "in-progress"]]
   [:div.column {:class "waiting-for-review-column"}
    [:div.column-header "Waiting for review"]
    [task-list "waiting-for-review"]]
   [:div.column {:class "pending-deploy-column"}
    [:div.column-header "Pending Deploy"]
    [task-list "pending-deploy"]]
   [:div.column {:class "done-column"}
    [:div.column-header "Done"]
    [task-list "done"]]
   [:div.column {:class "stuck-column"}
    [:div.column-header "Stuck"]
    [task-list "stuck"]]
   [:div.column {:class "blank-column"}
    [:div.column-header "Blank"]
    [task-list "blank"]]])

(defn edit-modal []
  (let [name (r/atom "")
        date (r/atom "")
        assignee (r/atom "")
        status (r/atom "ready-to-start")]
    (fn []
      [:div.modal {:id "editModal"}
       [:div.modal-content
        [:span.close {:on-click #(-> (js/document.getElementById "editModal") .close)} "&times;"]
        [:h2 "Edit Task"]
        [:input {:type "text" :placeholder "Task Name" :value @name :on-change #(reset! name (-> % .-target .-value))}]
        [:input {:type "date" :value @date :on-change #(reset! date (-> % .-target .-value))}]
        [:input {:type "text" :placeholder "Assignee" :value @assignee :on-change #(reset! assignee (-> % .-target .-value))}]
        [:select {:value @status :on-change #(reset! status (-> % .-target .-value))}
         [:option {:value "ready-to-start"} "Ready to start"]
         [:option {:value "in-progress"} "In Progress"]
         [:option {:value "waiting-for-review"} "Waiting for review"]
         [:option {:value "pending-deploy"} "Pending Deploy"]
         [:option {:value "done"} "Done"]
         [:option {:value "stuck"} "Stuck"]
         [:option {:value "blank"} "Blank"]]
        [:button {:on-click #(do
                               (edit-task @current-task-id {:name @name :date @date :assignee @assignee :status @status})
                               (reset! current-task-id nil)
                               (-> (js/document.getElementById "editModal") .close))} "Save"]]])))

(defn home-page []
  [:div
   [task-form]
   [task-board]
   [edit-modal]])

(defn mount-root []
  (fetch-tasks)
  (dom/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))