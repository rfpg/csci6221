(ns todo-list.handler
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :as response]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [todo-list.tasks :as tasks]))

(defroutes app-routes
  (GET "/" [] (response/resource-response "index.html" {:root "public"}))
  (GET "/tasks" [] (response/response (pr-str (tasks/read-tasks))))
  (POST "/tasks" {params :params}
    (tasks/add-task params)
    (response/response "Task added"))
  (DELETE "/tasks" {params :params}
    (tasks/remove-task (:task params))
    (response/response "Task removed"))
  (PUT "/tasks" {params :params}
    (let [{:keys [task status]} params]
      (tasks/update-task-status task status)
      (response/response "Task updated")))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (wrap-json-response
   (wrap-json-body
    (wrap-defaults app-routes site-defaults))))
