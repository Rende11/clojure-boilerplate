(ns ui.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [ui.dev]
            [ui.model :as model]
            [ui.view :as view]))

(defn mount-root []
  (rf/dispatch-sync [::model/initialize])
  (reagent/render [view/page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(comment
  (println 123)
  (js/alert "Hello")
  (js/console.log "ololo"))
