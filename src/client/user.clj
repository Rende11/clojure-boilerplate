(ns client.user
  (:require [cider-nrepl.main]
            [figwheel-sidecar.repl-api :as repl]))


(defn -main [& arg]
  (println "Starting nrepl...")
  (cider-nrepl.main/init
   ["cider.nrepl/cider-middleware"
    "cider.piggieback/wrap-cljs-repl"]))


(def figwheel-options
  {:figwheel-options {:css-dirs ["resources/public/css"]
                      :builds-to-start ["development"]}
   :all-builds  [{:id "development"
                  :source-paths ["src/client"]
                  :compiler
                  {:main "client.dev"
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
