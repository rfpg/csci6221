(ns todo-list.main
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [todo-list.handler :refer [app]]))

(defn -main [& args]
  (run-jetty app {:port 3000 :join? false}))
