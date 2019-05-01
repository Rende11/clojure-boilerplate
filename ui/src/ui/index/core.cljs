(ns ui.index.core
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [garden.core :as garden]
            [garden.selectors :as s]
            [day8.re-frame.async-flow-fx]
            [ui.index.model :as model]))


(defmulti get-change-status-text :status)
(defmethod get-change-status-text "open" [task] "close")
(defmethod get-change-status-text "done" [task] "reopen")


(def styles
  (garden/css [[:body {:background "#f5f5f5"}]
               [(s/> :.task:hover :.icon)
                {:display "block !important"}]
               [:.icon {:margin :auto
                        :font-size "20px"
                        :display "none !important"
                        :opacity 0.5}
                [:&:hover {:opacity 1}]]
               [:.content {:background :white
                           :box-shadow "0px 0px 20px -9px rgba(0,0,0,0.44)"
                           :padding "20px"}]
               [:ul {:list-style-type :none
                     :padding "0"
                     :margin "0"}]
               [:input.edit {:border :none
                             :border-bottom "1px solid black"
                             :outline "0"
                             :background :transparent}]
               [:button {:opacity 0.6
                         :transition-duration "0.4s"}
                [:&:hover {:opacity 1}]
                [:&:focus {:outline 0}]]
               [:.content {:width "600px"
                           :margin "auto"}
                [:div {:display :grid
                       :grid-gap "1am"
                       :grid-template-columns "3fr 0.25fr 0.25fr"}
                 [:.width-b {:display :contents}]]]
               [:.grey {:background-color :lightgrey
                       :color :white}]
               [:.sea {:background-color :lightseagreen
                       :color :white}]]))

(defn editable-task [task]
  (let [old-value (:text task)
        new-value (r/atom old-value)
        id (:id task)]
    (fn []
      [:div.task
       [:input.edit
        {:value @new-value
         :on-key-down #(when (= 13 (.-which %))
                         (rf/dispatch [:tasks/save id @new-value]))
         :on-change #(reset! new-value (-> % .-target .-value))}]
       [:div.icon
        [:i.far.fa-save {:on-click #(rf/dispatch [:tasks/save id @new-value])}]]
       [:div.icon
        [:i.far.fa-times-circle {:on-click #(rf/dispatch [:tasks/cancel id])}]]])))

(defn common-task [task]
  [:div.task
   [:div (merge {:on-click #(rf/dispatch [:tasks/edit (:id task)])}
                (when (= "done" (:status task))
                  {:style {:text-decoration :line-through}})) (:text task)]
   [:div.width-b.icon
    [:i {:class (case (get-change-status-text task)
                  "close" "far fa-check-circle"
                  "reopen" "fas fa-redo")
         :on-click #(rf/dispatch [:tasks/change-status (:id task)])}]]
   [:div.width-b.icon
    [:i.far.fa-trash-alt {:on-click #(rf/dispatch [:tasks/delete (:id task)])}]]])

(defn task-item [task]
  (let [id (:id task)]
    (if (:edited? task)
      [editable-task task]
      [common-task task])))


(defn page []
  (let [text (r/atom "")]
    (fn [props]
      (let [m @(rf/subscribe [:tasks/index])]
        [:div
         [:style styles]
         [:h1 {:style {:text-align :center}} "Hello Re-Frame!"]
         [:div.content
          [:ul
           (for [[id task] m]
             [:li {:key id}
              [task-item task]])]
          [:div
           [:input {:type        :text
                    :on-change   #(reset! text (-> % .-target .-value))
                    :on-key-down #(when (= 13 (.-which %))
                                    (rf/dispatch [:tasks/add @text])
                                    (reset! text ""))
                    :value       @text}]
           [:div {:style {:margin :auto}}
            [:i.fas.fa-plus
             {:on-click #(do
                           (rf/dispatch [:tasks/add @text])
                           (reset! text ""))
              :disabled (= "" @text)}]]]]]))))




