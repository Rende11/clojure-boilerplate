// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__35643 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35644 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35644;

try{try{var seq__35645 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35646 = null;
var count__35647 = (0);
var i__35648 = (0);
while(true){
if((i__35648 < count__35647)){
var vec__35649 = cljs.core._nth.call(null,chunk__35646,i__35648);
var effect_key = cljs.core.nth.call(null,vec__35649,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35649,(1),null);
var temp__5718__auto___35665 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___35665)){
var effect_fn_35666 = temp__5718__auto___35665;
effect_fn_35666.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__35667 = seq__35645;
var G__35668 = chunk__35646;
var G__35669 = count__35647;
var G__35670 = (i__35648 + (1));
seq__35645 = G__35667;
chunk__35646 = G__35668;
count__35647 = G__35669;
i__35648 = G__35670;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35645);
if(temp__5720__auto__){
var seq__35645__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35645__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__35645__$1);
var G__35671 = cljs.core.chunk_rest.call(null,seq__35645__$1);
var G__35672 = c__4461__auto__;
var G__35673 = cljs.core.count.call(null,c__4461__auto__);
var G__35674 = (0);
seq__35645 = G__35671;
chunk__35646 = G__35672;
count__35647 = G__35673;
i__35648 = G__35674;
continue;
} else {
var vec__35652 = cljs.core.first.call(null,seq__35645__$1);
var effect_key = cljs.core.nth.call(null,vec__35652,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35652,(1),null);
var temp__5718__auto___35675 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___35675)){
var effect_fn_35676 = temp__5718__auto___35675;
effect_fn_35676.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__35677 = cljs.core.next.call(null,seq__35645__$1);
var G__35678 = null;
var G__35679 = (0);
var G__35680 = (0);
seq__35645 = G__35677;
chunk__35646 = G__35678;
count__35647 = G__35679;
i__35648 = G__35680;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__35480__auto___35681 = re_frame.interop.now.call(null);
var duration__35481__auto___35682 = (end__35480__auto___35681 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35481__auto___35682,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__35480__auto___35681);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35643;
}} else {
var seq__35655 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35656 = null;
var count__35657 = (0);
var i__35658 = (0);
while(true){
if((i__35658 < count__35657)){
var vec__35659 = cljs.core._nth.call(null,chunk__35656,i__35658);
var effect_key = cljs.core.nth.call(null,vec__35659,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35659,(1),null);
var temp__5718__auto___35683 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___35683)){
var effect_fn_35684 = temp__5718__auto___35683;
effect_fn_35684.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__35685 = seq__35655;
var G__35686 = chunk__35656;
var G__35687 = count__35657;
var G__35688 = (i__35658 + (1));
seq__35655 = G__35685;
chunk__35656 = G__35686;
count__35657 = G__35687;
i__35658 = G__35688;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35655);
if(temp__5720__auto__){
var seq__35655__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35655__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__35655__$1);
var G__35689 = cljs.core.chunk_rest.call(null,seq__35655__$1);
var G__35690 = c__4461__auto__;
var G__35691 = cljs.core.count.call(null,c__4461__auto__);
var G__35692 = (0);
seq__35655 = G__35689;
chunk__35656 = G__35690;
count__35657 = G__35691;
i__35658 = G__35692;
continue;
} else {
var vec__35662 = cljs.core.first.call(null,seq__35655__$1);
var effect_key = cljs.core.nth.call(null,vec__35662,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35662,(1),null);
var temp__5718__auto___35693 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___35693)){
var effect_fn_35694 = temp__5718__auto___35693;
effect_fn_35694.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__35695 = cljs.core.next.call(null,seq__35655__$1);
var G__35696 = null;
var G__35697 = (0);
var G__35698 = (0);
seq__35655 = G__35695;
chunk__35656 = G__35696;
count__35657 = G__35697;
i__35658 = G__35698;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__35699 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__35700 = null;
var count__35701 = (0);
var i__35702 = (0);
while(true){
if((i__35702 < count__35701)){
var map__35703 = cljs.core._nth.call(null,chunk__35700,i__35702);
var map__35703__$1 = (((((!((map__35703 == null))))?(((((map__35703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35703):map__35703);
var effect = map__35703__$1;
var ms = cljs.core.get.call(null,map__35703__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__35703__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__35699,chunk__35700,count__35701,i__35702,map__35703,map__35703__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__35699,chunk__35700,count__35701,i__35702,map__35703,map__35703__$1,effect,ms,dispatch))
,ms);
}


var G__35707 = seq__35699;
var G__35708 = chunk__35700;
var G__35709 = count__35701;
var G__35710 = (i__35702 + (1));
seq__35699 = G__35707;
chunk__35700 = G__35708;
count__35701 = G__35709;
i__35702 = G__35710;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35699);
if(temp__5720__auto__){
var seq__35699__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35699__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__35699__$1);
var G__35711 = cljs.core.chunk_rest.call(null,seq__35699__$1);
var G__35712 = c__4461__auto__;
var G__35713 = cljs.core.count.call(null,c__4461__auto__);
var G__35714 = (0);
seq__35699 = G__35711;
chunk__35700 = G__35712;
count__35701 = G__35713;
i__35702 = G__35714;
continue;
} else {
var map__35705 = cljs.core.first.call(null,seq__35699__$1);
var map__35705__$1 = (((((!((map__35705 == null))))?(((((map__35705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35705):map__35705);
var effect = map__35705__$1;
var ms = cljs.core.get.call(null,map__35705__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__35705__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__35699,chunk__35700,count__35701,i__35702,map__35705,map__35705__$1,effect,ms,dispatch,seq__35699__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__35699,chunk__35700,count__35701,i__35702,map__35705,map__35705__$1,effect,ms,dispatch,seq__35699__$1,temp__5720__auto__))
,ms);
}


var G__35715 = cljs.core.next.call(null,seq__35699__$1);
var G__35716 = null;
var G__35717 = (0);
var G__35718 = (0);
seq__35699 = G__35715;
chunk__35700 = G__35716;
count__35701 = G__35717;
i__35702 = G__35718;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__35719 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__35720 = null;
var count__35721 = (0);
var i__35722 = (0);
while(true){
if((i__35722 < count__35721)){
var event = cljs.core._nth.call(null,chunk__35720,i__35722);
re_frame.router.dispatch.call(null,event);


var G__35723 = seq__35719;
var G__35724 = chunk__35720;
var G__35725 = count__35721;
var G__35726 = (i__35722 + (1));
seq__35719 = G__35723;
chunk__35720 = G__35724;
count__35721 = G__35725;
i__35722 = G__35726;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35719);
if(temp__5720__auto__){
var seq__35719__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35719__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__35719__$1);
var G__35727 = cljs.core.chunk_rest.call(null,seq__35719__$1);
var G__35728 = c__4461__auto__;
var G__35729 = cljs.core.count.call(null,c__4461__auto__);
var G__35730 = (0);
seq__35719 = G__35727;
chunk__35720 = G__35728;
count__35721 = G__35729;
i__35722 = G__35730;
continue;
} else {
var event = cljs.core.first.call(null,seq__35719__$1);
re_frame.router.dispatch.call(null,event);


var G__35731 = cljs.core.next.call(null,seq__35719__$1);
var G__35732 = null;
var G__35733 = (0);
var G__35734 = (0);
seq__35719 = G__35731;
chunk__35720 = G__35732;
count__35721 = G__35733;
i__35722 = G__35734;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__35735 = cljs.core.seq.call(null,value);
var chunk__35736 = null;
var count__35737 = (0);
var i__35738 = (0);
while(true){
if((i__35738 < count__35737)){
var event = cljs.core._nth.call(null,chunk__35736,i__35738);
clear_event.call(null,event);


var G__35739 = seq__35735;
var G__35740 = chunk__35736;
var G__35741 = count__35737;
var G__35742 = (i__35738 + (1));
seq__35735 = G__35739;
chunk__35736 = G__35740;
count__35737 = G__35741;
i__35738 = G__35742;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35735);
if(temp__5720__auto__){
var seq__35735__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35735__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__35735__$1);
var G__35743 = cljs.core.chunk_rest.call(null,seq__35735__$1);
var G__35744 = c__4461__auto__;
var G__35745 = cljs.core.count.call(null,c__4461__auto__);
var G__35746 = (0);
seq__35735 = G__35743;
chunk__35736 = G__35744;
count__35737 = G__35745;
i__35738 = G__35746;
continue;
} else {
var event = cljs.core.first.call(null,seq__35735__$1);
clear_event.call(null,event);


var G__35747 = cljs.core.next.call(null,seq__35735__$1);
var G__35748 = null;
var G__35749 = (0);
var G__35750 = (0);
seq__35735 = G__35747;
chunk__35736 = G__35748;
count__35737 = G__35749;
i__35738 = G__35750;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
