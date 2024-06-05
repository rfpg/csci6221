(ns todo-list.core
  (:require [reagent.core :as reagent]
            [ajax.core :refer [GET POST DELETE PUT]]
            [cljs.reader :refer [read-string]]))

(defonce tasks (reagent/atom []))

(defn fetch-tasks []
  (GET "/tasks"
    {:handler #(reset! tasks (read-string %))
     :error-handler #(js/console.error "Failed to fetch tasks")}))

(defn add-task [task]
  (POST "/tasks"
    {:params task
     :handler #(swap! tasks conj task)
     :error-handler #(js/console.error "Failed to add task")}))

(defn remove-task [task]
  (DELETE "/tasks"
    {:params task
     :handler (fn []
                (reset! tasks (remove (fn [t] (= (:task t) (:task task))) @tasks)))
     :error-handler #(js/console.error "Failed to remove task")}))

(defn edit-task [old-task new-task]
  (PUT "/tasks"
    {:params {:old-task old-task :new-task new-task}
     :handler (fn []
                (reset! tasks (map (fn [t] (if (= (:task t) old-task) new-task t)) @tasks)))
     :error-handler #(js/console.error "Failed to edit task")}))

(defn task-item [task]
  [:div.task
   [:span (:task task)]
   [:span "Due: " (:due-date task)]
   [:span "Assigned to: " (clojure.string/join ", " (:people task))]
   [:button {:on-click #(remove-task task)} "Remove"]
   [:button {:on-click #(edit-task (:task task)
                                   (assoc task :task (str (:task task) " (edited)")))} "Edit"]])

(defn column [status]
  [:div.column
   [:h2 status]
   (for [task (filter #(= (:status %) status) @tasks)]
     ^{:key (:task task)} [task-item task])])

(defn task-form []
  (let [task (reagent/atom {:task "" :due-date "" :people [] :status "Todo"})]
    (fn []
      [:div
       [:input {:type "text" :placeholder "Task" :value (:task @task)
                :on-change #(swap! task assoc :task (-> % .-target .-value))}]
       [:input {:type "date" :placeholder "Due Date" :value (:due-date @task)
                :on-change #(swap! task assoc :due-date (-> % .-target .-value))}]
       [:input {:type "text" :placeholder "Assign to (comma separated)" :value (clojure.string/join ", " (:people @task))
                :on-change #(swap! task assoc :people (-> % .-target .-value (clojure.string/split #",\s*")))}]
       [:select {:value (:status @task)
                 :on-change #(swap! task assoc :status (-> % .-target .-value))}
        [:option {:value "Todo"} "Todo"]
        [:option {:value "In Progress"} "In Progress"]
        [:option {:value "Done"} "Done"]]
       [:button {:on-click #(add-task @task)} "Add Task"]])))

(defn main-component []
  [:div
   [:h1 "Kanban Task Manager"]
   [task-form]
   [:div.board
    [column "Todo"]
    [column "In Progress"]
    [column "Done"]]])

(defn ^:export init []
  (fetch-tasks)
  (reagent/render [main-component] (.getElementById js/document "app")))
