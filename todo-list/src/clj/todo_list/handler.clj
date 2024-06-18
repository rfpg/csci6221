(ns todo-list.handler
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :as response]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [todo-list.tasks :as tasks] ; Ensure this namespace is correctly required
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.cors :refer [wrap-cors]]))

(def app-defaults
  (assoc-in site-defaults [:security :anti-forgery] false))

(defroutes app-routes
  (GET "/" [] (response/resource-response "index.html" {:root "public"}))
  (GET "/tasks" []
    (let [tasks-list (tasks/read-tasks)] ; Correct the local variable to avoid naming conflict
      (println "Closure sucks")
      (-> (response/response tasks-list)
          (response/content-type "application/json"))))

  (POST "/tasks" req
    (let [task-data (:body req)] ; Extracting parsed JSON from the request body
      (println "Received new task:" task-data) ; Log to verify the incoming data
      (tasks/add-task task-data) ; Assuming add-task can handle the Clojure map directly
      (response/response {:status "success" :task task-data}))) ; Return some response

  (DELETE "/tasks" {params :params}
    (tasks/remove-task (:id params))
    (response/response {:status :success}))

  (PUT "/tasks" {params :params}
    (let [{:keys [id status]} params]
      (tasks/update-task-status id status)
      (response/response {:status :success :task (first (filter #(= id (:id %)) @tasks/tasks))}))) ; Ensure correct reference to tasks atom
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (wrap-defaults app-routes app-defaults)
      (wrap-json-body {:keywords? true})  ; This converts JSON keys to Clojure keywords
      (wrap-json-response)  ; Ensure responses are converted back to JSON
      (wrap-cors :access-control-allow-origin [#"http://localhost:3449"]
                 :access-control-allow-methods [:get :post :put :delete])))

(defn -main []
  (run-jetty app {:port 3000}))
