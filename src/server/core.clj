(ns server.core
  (:require [org.httpkit.server :as http]
            [server.handlers :as handlers]
            [bidi.ring :as bidi]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(def app
  (-> handlers/routes
      bidi/make-handler
      (wrap-defaults site-defaults)))

(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn start-server []
  (reset! server (http/run-server app {:port 8081})))

(defn -main []
  (start-server))

(comment
  (def stop (stop-server))
  (def start (start-server))
  (def restart (do (stop-server)
                   (start-server))))

(comment
  (router/match-route routes "/index")
  (router/match-route routes "/about")
  (prn
   "add env port var"))

