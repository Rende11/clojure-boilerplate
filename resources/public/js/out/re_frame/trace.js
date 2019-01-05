// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__35502){
var map__35503 = p__35502;
var map__35503__$1 = (((((!((map__35503 == null))))?(((((map__35503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35503):map__35503);
var operation = cljs.core.get.call(null,map__35503__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__35503__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__35503__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__35503__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4047__auto__ = child_of;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__35505_35517 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__35506_35518 = null;
var count__35507_35519 = (0);
var i__35508_35520 = (0);
while(true){
if((i__35508_35520 < count__35507_35519)){
var vec__35509_35521 = cljs.core._nth.call(null,chunk__35506_35518,i__35508_35520);
var k_35522 = cljs.core.nth.call(null,vec__35509_35521,(0),null);
var cb_35523 = cljs.core.nth.call(null,vec__35509_35521,(1),null);
try{cb_35523.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e35512){var e_35524 = e35512;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_35522,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_35524);
}

var G__35525 = seq__35505_35517;
var G__35526 = chunk__35506_35518;
var G__35527 = count__35507_35519;
var G__35528 = (i__35508_35520 + (1));
seq__35505_35517 = G__35525;
chunk__35506_35518 = G__35526;
count__35507_35519 = G__35527;
i__35508_35520 = G__35528;
continue;
} else {
var temp__5720__auto___35529 = cljs.core.seq.call(null,seq__35505_35517);
if(temp__5720__auto___35529){
var seq__35505_35530__$1 = temp__5720__auto___35529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35505_35530__$1)){
var c__4461__auto___35531 = cljs.core.chunk_first.call(null,seq__35505_35530__$1);
var G__35532 = cljs.core.chunk_rest.call(null,seq__35505_35530__$1);
var G__35533 = c__4461__auto___35531;
var G__35534 = cljs.core.count.call(null,c__4461__auto___35531);
var G__35535 = (0);
seq__35505_35517 = G__35532;
chunk__35506_35518 = G__35533;
count__35507_35519 = G__35534;
i__35508_35520 = G__35535;
continue;
} else {
var vec__35513_35536 = cljs.core.first.call(null,seq__35505_35530__$1);
var k_35537 = cljs.core.nth.call(null,vec__35513_35536,(0),null);
var cb_35538 = cljs.core.nth.call(null,vec__35513_35536,(1),null);
try{cb_35538.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e35516){var e_35539 = e35516;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_35537,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_35539);
}

var G__35540 = cljs.core.next.call(null,seq__35505_35530__$1);
var G__35541 = null;
var G__35542 = (0);
var G__35543 = (0);
seq__35505_35517 = G__35540;
chunk__35506_35518 = G__35541;
count__35507_35519 = G__35542;
i__35508_35520 = G__35543;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
