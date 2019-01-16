(ns server.core
  (:require [org.httpkit.server :as http]
            [server.handlers :as handlers]
            [bidi.ring :as bidi]
            [config.core :as config]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(def app
  (-> handlers/routes
      bidi/make-handler
      (wrap-defaults site-defaults)))

(defonce config (config/load-env))
(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn start-server []
  (reset! server (http/run-server app {:port (:port config)})))

(defn -main []
  (start-server))

(comment
  (def stop (stop-server))
  (def start (start-server))
  (def restart (do (stop-server)
                   (start-server))))

(comment
  (prn (:port (config/load-env)))
  (prn "add env port var"))

