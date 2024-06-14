(ns todo-list.handler
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :as response]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [todo-list.tasks :as tasks]
            [todo-list.db :as db]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.cors :refer [wrap-cors]]))

(defroutes app-routes
  (GET "/" [] (response/resource-response "index.html" {:root "public"}))
  (GET "/tasks" []
    (let [tasks (tasks/read-tasks)]
      (println "Fetched tasks:" tasks)
      (-> (response/response tasks)
          (response/content-type "application/json"))))
  (POST "/tasks" {params :params}
    (tasks/add-task params)
    (response/response "Task added"))
  (DELETE "/tasks" {params :params}
    (tasks/remove-task (:id params))
    (response/response "Task removed"))
  (PUT "/tasks" {params :params}
    (let [{:keys [id status]} params]
      (tasks/update-task-status id status)
      (response/response "Task updated")))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (wrap-defaults app-routes site-defaults)
      (wrap-json-response)
      (wrap-json-body)
      (wrap-cors :access-control-allow-origin [#"http://localhost:3449"]
                 :access-control-allow-methods [:get :post :put :delete])))

(defn -main []
  (db/create-tasks-table)
  (run-jetty app {:port 3000}))
