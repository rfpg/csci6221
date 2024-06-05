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
    {:params {:task task}
     :handler #(swap! tasks conj {:task task})
     :error-handler #(js/console.error "Failed to add task")}))

(defn remove-task [task]
  (DELETE "/tasks"
    {:params {:task task}
     :handler (fn []
                (reset! tasks (remove (fn [t] (= (:task t) task)) @tasks)))
     :error-handler #(js/console.error "Failed to remove task")}))

(defn edit-task [old-task new-task]
  (PUT "/tasks"
    {:params {:old-task old-task :new-task new-task}
     :handler (fn []
                (reset! tasks (map (fn [t] (if (= (:task t) old-task) {:task new-task} t)) @tasks)))
     :error-handler #(js/console.error "Failed to edit task")}))

(defn task-item [task]
  [:div
   [:span (:task task)]
   [:button {:on-click #(remove-task (:task task))} "Remove"]
   [:button {:on-click #(edit-task (:task task) (str (:task task) " (edited)"))} "Edit"]])

(defn task-list []
  [:div
   (for [task @tasks]
     ^{:key (:task task)} [task-item task])])

(defn main-component []
  [:div
   [:h1 "Todo List"]
   [:input {:type "text" :ref #(set! (.-value %) "")}]
   [:button {:on-click #(add-task (.-value (.-input (reagent/dom-node %))))} "Add"]
   [task-list]])

(defn ^:export init []
  (fetch-tasks)
  (reagent/render [main-component] (.getElementById js/document "app")))
