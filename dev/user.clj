(ns user
  (:require [cider-nrepl.main]
            [figwheel-sidecar.repl-api :as repl]))


(defn -main [& args]
  (println "Starting nrepl...")
  (cider-nrepl.main/init
   ["cider.nrepl/cider-middleware"
    "cider.piggieback/wrap-cljs-repl"]))


(def figwheel-options
  {:figwheel-options {:css-dirs ["resources/public/css"]
                      :builds-to-start ["main"]}
   :all-builds  [{:id "main"
                  :source-paths ["src/client/main"]
                  :compiler
                  {:main "client.main.dev"
                   :asset-path "/js/out"
                   :output-to "resources/public/js/app.js"
                   :output-dir "resources/public/js/out"
                   :source-map true
                   :optimizations :none
                   :pretty-print  true}}]})

(defn start []
  (repl/start-figwheel! figwheel-options)
  (repl/cljs-repl))


(comment
  (start))
