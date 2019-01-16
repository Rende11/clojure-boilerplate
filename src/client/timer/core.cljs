(ns client.timer.core
  (:require [reagent.core :as reagent]
            [markdown.core :as md]
            [cumulo-util.build :as cumilo]))

(defn readme-component []
  (let [state (reagent/atom {})]
    (fn []
      [:div {:style {:margin "30px auto"}
             :dangerouslySetInnerHTML
             {:__html (->
                       (cumilo/inline-resource "README.md")
                       (md/md->html
                        :code-style
                        #(str "class=\"text-secondary" % "\"")))}}])))

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
