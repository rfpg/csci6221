(defproject todo-list "0.1.0-SNAPSHOT"
  :description "A simple TODO list application"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.844"]
                 [reagent "1.1.0"]
                 [cljs-ajax "0.8.1"]
                 [compojure "1.6.2"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-json "0.5.0"]
                 [ring/ring-core "1.9.4"]
                 [ring/ring-jetty-adapter "1.9.4"]
                 [cljsjs/react "17.0.2-0"]
                 [cljsjs/react-dom "17.0.2-0"]
                 [com.github.seancorfield/next.jdbc "1.2.796"]
                 [org.clojure/java.jdbc "0.7.12"]
                 [org.xerial/sqlite-jdbc "3.36.0.3"]
                 [cheshire "5.10.0"]]
  :plugins [[lein-figwheel "0.5.20"]
            [lein-cljsbuild "1.1.7"]
            [lein-ring "0.12.5"]]
  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["resources"]
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]
  :cljsbuild
  {:builds
   {:dev
    {:source-paths ["src/cljs"]
     :figwheel {:on-jsload "todo-list.core/on-js-reload"}
     :compiler {:main todo-list.core
                :asset-path "js/compiled/out"
                :output-to "resources/public/js/compiled/todo_list.js"
                :output-dir "resources/public/js/compiled/out"
                :source-map true
                :optimizations :none
                :pretty-print true
                :source-map-timestamp true}}}}
  :figwheel
  {:css-dirs ["resources/public/css"]}
  :ring {:handler todo-list.handler/app}
  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.10"]
                                  [figwheel-sidecar "0.5.20"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   :source-paths ["src/dev"]
                   :plugins [[lein-figwheel "0.5.20"]]
                   :figwheel {:nrepl-port 7002}}})
