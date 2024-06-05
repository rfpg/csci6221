(ns todo-list.handler
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :as response]
            [todo-list.tasks :as tasks]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [todo-list.tasks :refer [read-tasks write-tasks add-task remove-task edit-task]]))

(defroutes app-routes
  (GET "/" [] (response/resource-response "index.html" {:root "public"}))
  (GET "/tasks" [] (response/response (prn-str (read-tasks))))
  (POST "/tasks" {params :params}
    (let [task (:task params)]
      (add-task task)
      (response/response "Task added")))
  (DELETE "/tasks" {params :params}
    (let [task (:task params)]
      (remove-task task)
      (response/response "Task removed")))
  (PUT "/tasks" {params :params}
    (let [{:keys [old-task new-task]} params]
      (edit-task old-task new-task)
      (response/response "Task edited")))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (wrap-json-response
   (wrap-json-body
    (wrap-defaults app-routes site-defaults))))
