(ns client.main.core
  (:require [reagent.core :as reagent]))

(defn readme-component []
  (fn []
    [:div {:style {:margin "30px auto"}}
     [:h1 "Hello clojure"]]))

(defn basic []
  [:div
   [readme-component]])

(defn ^:export main []
  (reagent/render [basic]
                  (.getElementById js/document "app")))

(comment
  (println 123)
  (js/alert "Hello")
  (js/console.log "ololo"))
