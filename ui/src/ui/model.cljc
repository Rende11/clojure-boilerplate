(ns ui.model
  (:require [re-frame.core :as rf]))



(rf/reg-event-db
 ::initailize
 (fn [db _]
   (assoc db :counter 0)))


(rf/reg-sub
 (fn [db _]
   (get db :counter)))

