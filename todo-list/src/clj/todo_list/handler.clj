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
    (let [task-data (:body req)
          new-task (tasks/add-task task-data)] ; Call add-task to create and return the new task
      (println "Received new task:" task-data)
      (response/response new-task))) ; Return the newly created task as the response
  
 (DELETE "/tasks/:id" [id]
   (do 
     (println "Deleting task with ID:" id) ;; Log the ID
     (tasks/remove-task id) 
     (response/response {:status :success})))
   
(PUT "/tasks/:id" [id :as {params :body}]
  (let [updates (dissoc params :id)]
    (println "Updating task with ID:" id "with data:" updates)
    (if (tasks/update-task id updates)
      (response/response {:status :success})
      (response/status 404 {:error "Task not found"})))))

(def app
  (-> (wrap-defaults app-routes app-defaults)
      (wrap-json-body {:keywords? true})  ; This converts JSON keys to Clojure keywords
      (wrap-json-response)  ; Ensure responses are converted back to JSON
      (wrap-cors :access-control-allow-origin [#"http://localhost:3449"]
                 :access-control-allow-methods [:get :post :put :delete])))

(defn -main []
  (run-jetty app {:port 3000}))