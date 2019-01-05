(ns client.core
  (:require [reagent.core :as reagent]))

(defn basic []
  [:div
   [:p "Andrew Mounted"]])

(defn ^:export main []
  (reagent/render [basic]
                  (.getElementById js/document "app")))


(comment
  (js/alert "Hello")
  (js/console.log "ololo"))
