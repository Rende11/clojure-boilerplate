(ns ui.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [ui.index.core :as index]
            [ui.index.model]
            ))

(defn mount-root []
  (rf/dispatch-sync [:tasks/initialize])
  (reagent/render [index/page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(comment
  (println 123)
  (js/alert "Hello")
  (js/console.log "ololo"))
