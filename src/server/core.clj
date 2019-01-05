(ns server.core
  (:require [org.httpkit.server :as http]
            [bidi.ring :as bidi]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :as res]))


(defn index-handler [request]
  (-> (res/file-response "./resources/public/index.html")
      (res/header "Content-Type" "text/html; charset=utf-8")))

(defn about-handler [request]
  (-> (res/file-response "./resources/public/pages/about.html")
      (res/header "Content-Type" "text/html; charset=utf-8")))

(def routes ["/" [["" index-handler]
                  ["about" about-handler]
                  ["" (bidi/resources {:prefix "public/"})]]])
(def app
  (-> routes
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
   "add hanler funcs")
  "add env port var")

