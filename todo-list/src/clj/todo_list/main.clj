(ns todo-list.main
  (:gen-class)
  (:require [todo-list.handler :as handler]))

(defn -main []
  (handler/-main))
