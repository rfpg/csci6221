(ns todo-list.core
   (:require [reagent.core :as r]
             [reagent.dom :as dom]))

 (defonce tasks (r/atom []))
 (defonce current-task (r/atom nil))

 (defn add-task [task]
   (swap! tasks conj task))

 (defn remove-task [task]
   (swap! tasks #(remove #(= % task) %)))

 (defn edit-task [task updated-task]
   (swap! tasks #(mapv (fn [t] (if (= t task) updated-task t)) %)))

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
        [:button {:on-click #(add-task {:name @name :date @date :assignee @assignee :status @status})} "Add Task"]]))))

(defn task-item [task]
  (fn []
    [:div.task {:draggable true
                :on-drag-start #(reset! current-task task)}
     [:div.task-title (:name task)]
     [:div.task-detail (str "Due: " (:date task))]
     [:div.task-detail (str "Assigned to: " (:assignee task))]
     [:button.edit-button {:on-click #(do
                                        (reset! current-task task)
                                        (.open (js/document.getElementById "editModal")))} "Edit"]]))

(defn task-list [status]
  (let [tasks (filter #(= (:status %) status) @tasks)]
    [:div.tasks {:on-drag-over #(-> % .preventDefault)
                 :on-drop #(let [task @current-task]
                             (edit-task task (assoc task :status status))
                             (reset! current-task nil))}
     (for [task tasks]
       ^{:key (:name task)}
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
                               (edit-task @current-task {:name @name :date @date :assignee @assignee :status @status})
                               (reset! current-task nil)
                               (-> (js/document.getElementById "editModal") .close))} "Save"]]])))

(defn home-page []
  [:div
   [task-form]
   [task-board]
   [edit-modal]])

(defn mount-root []
  (dom/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
