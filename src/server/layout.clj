(ns server.layout
  (:require
   [selmer.parser :as parser]
   [ring.util.http-response :refer [content-type ok]]))



(defn render
  [template & [params]]
  (-> (parser/render-file template params)
      (ok)
      (content-type "text/html; charset=utf-8")))


