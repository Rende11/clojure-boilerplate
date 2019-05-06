(ns ui.index.model
  (:require [re-frame.core :as rf]))

;; TODO move to utils
(defonce id (atom 4))

(defn get-id []
  (swap! id inc))

(rf/reg-event-db
 :tasks/add
 (fn [db [_ text]]
   (let [id (get-id)]
     (assoc-in db [:index-data id] {:status "open" :text text :edited? false :id id}))))

(rf/reg-event-db
 :tasks/save
 (fn [db [_ id value]]
   db
   #_(update-in db [:index-data id] assoc :edited? false :text value)))

(rf/reg-event-db
 :tasks/cancel
 (fn [db [_ id old]]
   (update-in db [:index-data id] assoc :edited? false)))

(rf/reg-event-db
 :tasks/update
 (fn [db [_ id new-value]]
   (update-in db [:index-data id] assoc :text new-value)))

(def x
  {:a true
   :b false
   :c true})

(reduce-kv (fn [acc k _] (assoc acc k false)) {} x)

(rf/reg-event-db
 :tasks/edit
 (fn [db [_ id]]
   (-> (update db :index-data
               #(reduce-kv (fn [acc k v] (assoc acc k (assoc v :edited? false))) {} %))
       (update-in [:index-data id] assoc :edited? true))))

(rf/reg-event-db
 :tasks/delete
 (fn [db [_ id]]
   (update db :index-data dissoc id)))

(defmulti toggle-status identity)
(defmethod toggle-status "open" [status] "done")
(defmethod toggle-status "done" [status] "open")


(defn change-status [task]
  (update task :status toggle-status))

(rf/reg-event-db
 :tasks/change-status
 (fn [db [_ id]]
   (update-in db [:index-data id] change-status)))

(rf/reg-sub
 :tasks/index
 (fn [db _]
   (sort (:index-data db))))

(rf/reg-event-fx
 :tasks/initialize
 (fn [{db :db} _]
   {:db (assoc db :index-data {}
               #_{1 {:id 1 :text "One" :status "open" :edited? true}
                  2 {:id 2 :text "Two" :status "open" :edited? false}
                  3 {:id 3 :text "Three" :status "done" :edited? false}
                  4 {:id 4 :text "Four" :status "open" :edited? false}})}))

(->> (group-by :id [{:id 1 :text "One" :status "open" :edited? true}
                   {:id 2 :text "Two" :status "open" :edited? false}
                   {:id 3 :text "Three" :status "done" :edited? false}
                   {:id 4 :text "Four" :status "open" :edited? false}])
     (mapv #(first (second %))))




