(ns user
  (:require [cider-nrepl.main]
            [app.core :as app]))

(defn start-nrepl []
  (println "Starting nrepl...")
  (cider-nrepl.main/init
   ["refactor-nrepl.middleware/wrap-refactor"
    "cider.nrepl/cider-middleware"]))

(defn start-server []
  (app/start-server))

(defn start-all []
  (start-server)
  (start-nrepl))

(defn -main [& args]
  (start-nrepl))
