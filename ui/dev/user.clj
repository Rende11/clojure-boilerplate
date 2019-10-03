(ns user
  (:require [cider-nrepl.main]
            [figwheel-sidecar.repl-api :as repl]))


(defn -main [& args]
  (println "Starting nrepl...")
  (cider-nrepl.main/init
   ["cider.nrepl/cider-middleware"
    "cider.piggieback/wrap-cljs-repl"]))


#_(def figwheel-options
  {:figwheel-options {:css-dirs        ["resources/public/css"]
                      :builds-to-start ["dev"]}
   :all-builds       [{:id           "dev"
                       :source-paths ["ui/src/ui"]
                       :compiler
                       {:main          "ui.dev"
                        :asset-path    "/js/out"
                        :output-to     "resources/public/js/app.js"
                        :output-dir    "resources/public/js/out"
                        :source-map    true
                        :optimizations :none
                        :pretty-print  true}}]})

(def figwheel-options
  {:figwheel-options {:css-dirs ["resources/public/css"]
                      :builds-to-start ["dev"]}
   :all-builds  [{:id "dev"
                  :source-paths ["ui/src/ui"]
                  :compiler
                  {:main "ui.dev"
                   :asset-path "/js/out"
                   :output-to "resources/public/js/app.js"
                   :output-dir "resources/public/js/out"
                   :source-map "resources/public/js/map.js.map"
                   :optimizations :advanced
                   :pretty-print  true}}]})

(defn start []
  (repl/start-figwheel! figwheel-options)
  (repl/cljs-repl))
(comment
  (start))

