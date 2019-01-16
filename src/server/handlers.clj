(ns server.handlers
  (:require [server.layout :as layout]
            [bidi.ring :as bidi]))

(defn index-handler [request]
  (layout/render "public/index.html" {:text "Simple text from template variable"}))

(defn home-handler [request]
  (layout/render "public/pages/home.html" {}))

(defn about-handler [request]
  (layout/render "public/pages/about.html" {}))

(def routes ["/" [["" index-handler]
                  ["home" home-handler]
                  ["about" about-handler]
                  ["" (bidi/resources {:prefix "public/"})]]])
