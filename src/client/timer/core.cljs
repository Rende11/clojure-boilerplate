(ns client.timer.core
  (:require [reagent.core :as reagent]))

(defn counting-button [txt]
  (let [state (reagent/atom 4)] ;; state is accessible in the render function
    (fn [text1 text2]
      [:div
       [:button.green
        {:on-click #(swap! state inc)}
        (str text1 " " @state)]
       [:button.green
        {:on-click #(swap! state dec)}
        (str text2 " " @state)]])))

(defn basic []
  [:div
   [counting-button "plus" "minus"]
   [:p "Mounted"]])

(defn ^:export main []
  (reagent/render [basic]
                  (.getElementById js/document "app")))

(comment
  (println 123)
  (js/alert "Hello")
  (js/console.log "ololo"))
