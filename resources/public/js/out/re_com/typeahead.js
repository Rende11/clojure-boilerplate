// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__33529){
var map__33530 = p__33529;
var map__33530__$1 = (((((!((map__33530 == null))))?(((((map__33530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33530):map__33530);
var args = map__33530__$1;
var on_change = cljs.core.get.call(null,map__33530__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__33530__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33530__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__33530__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__33530__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__33530__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__33530__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__33532 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4047__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__33532,external_model_value);
} else {
return G__33532;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__33533,event){
var map__33534 = p__33533;
var map__33534__$1 = (((((!((map__33534 == null))))?(((((map__33534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33534):map__33534);
var state = map__33534__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33534__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__33534__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__33536 = event;
var G__33536__$1 = (((G__33536 instanceof cljs.core.Keyword))?G__33536.fqn:null);
switch (G__33536__$1) {
case "input-text-blurred":
var and__4036__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__4036__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__4047__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33536__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__33538,event){
var map__33539 = p__33538;
var map__33539__$1 = (((((!((map__33539 == null))))?(((((map__33539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33539):map__33539);
var state = map__33539__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33539__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__33541 = event;
var G__33541__$1 = (((G__33541 instanceof cljs.core.Keyword))?G__33541.fqn:null);
switch (G__33541__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__33543,new_value){
var map__33544 = p__33543;
var map__33544__$1 = (((((!((map__33544 == null))))?(((((map__33544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33544):map__33544);
var state = map__33544__$1;
var on_change = cljs.core.get.call(null,map__33544__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__33546,suggestion){
var map__33547 = p__33546;
var map__33547__$1 = (((((!((map__33547 == null))))?(((((map__33547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33547):map__33547);
var state = map__33547__$1;
var suggestion_to_string = cljs.core.get.call(null,map__33547__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__33549 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__33549,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__33549;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__33550,index){
var map__33551 = p__33550;
var map__33551__$1 = (((((!((map__33551 == null))))?(((((map__33551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33551):map__33551);
var state = map__33551__$1;
var suggestions = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__33553 = state;
var G__33553__$1 = cljs.core.assoc.call(null,G__33553,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__33553__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__33553__$1,suggestion):G__33553__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__33553__$2,suggestion);
} else {
return G__33553__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__33554,index){
var map__33555 = p__33554;
var map__33555__$1 = (((((!((map__33555 == null))))?(((((map__33555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33555):map__33555);
var state = map__33555__$1;
var suggestions = cljs.core.get.call(null,map__33555__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__33557){
var map__33558 = p__33557;
var map__33558__$1 = (((((!((map__33558 == null))))?(((((map__33558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33558):map__33558);
var state = map__33558__$1;
var suggestion_active_index = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33560 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__33560,suggestion_active_index);
} else {
return G__33560;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__33561){
var map__33562 = p__33561;
var map__33562__$1 = (((((!((map__33562 == null))))?(((((map__33562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33562):map__33562);
var state = map__33562__$1;
var suggestions = cljs.core.get.call(null,map__33562__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__33562__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33564 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__33564,re_com.typeahead.wrap.call(null,((function (){var or__4047__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__33564;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__33565){
var map__33566 = p__33565;
var map__33566__$1 = (((((!((map__33566 == null))))?(((((map__33566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33566):map__33566);
var state = map__33566__$1;
var suggestions = cljs.core.get.call(null,map__33566__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__33566__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33568 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__33568,re_com.typeahead.wrap.call(null,((function (){var or__4047__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__33568;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__33569 = state;
var G__33569__$1 = re_com.typeahead.clear_suggestions.call(null,G__33569)
;
var G__33569__$2 = cljs.core.assoc.call(null,G__33569__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__33569__$2,null);
} else {
return G__33569__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__33570){
var map__33571 = p__33570;
var map__33571__$1 = (((((!((map__33571 == null))))?(((((map__33571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33571):map__33571);
var state = map__33571__$1;
var input_text = cljs.core.get.call(null,map__33571__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__33571__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__33573 = state;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__4036__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__4036__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__33573,input_text);
} else {
return G__33573;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5718__auto__ = data_source.call(null,text,(function (p1__33574_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__33574_SHARP_);
}));
if(cljs.core.truth_(temp__5718__auto__)){
var return_value = temp__5718__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__){
return (function (state_33591){
var state_val_33592 = (state_33591[(1)]);
if((state_val_33592 === (1))){
var state_33591__$1 = state_33591;
var statearr_33593_33605 = state_33591__$1;
(statearr_33593_33605[(2)] = null);

(statearr_33593_33605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (2))){
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33591__$1,(4),c_search);
} else {
if((state_val_33592 === (3))){
var inst_33589 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33591__$1,inst_33589);
} else {
if((state_val_33592 === (4))){
var inst_33577 = (state_33591[(7)]);
var inst_33577__$1 = (state_33591[(2)]);
var inst_33578 = cljs.core.deref.call(null,state_atom);
var inst_33579 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_33578);
var inst_33580 = cljs.core._EQ_.call(null,"",inst_33577__$1);
var state_33591__$1 = (function (){var statearr_33594 = state_33591;
(statearr_33594[(8)] = inst_33579);

(statearr_33594[(7)] = inst_33577__$1);

return statearr_33594;
})();
if(inst_33580){
var statearr_33595_33606 = state_33591__$1;
(statearr_33595_33606[(1)] = (5));

} else {
var statearr_33596_33607 = state_33591__$1;
(statearr_33596_33607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (5))){
var inst_33582 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_33591__$1 = state_33591;
var statearr_33597_33608 = state_33591__$1;
(statearr_33597_33608[(2)] = inst_33582);

(statearr_33597_33608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (6))){
var inst_33579 = (state_33591[(8)]);
var inst_33577 = (state_33591[(7)]);
var inst_33584 = re_com.typeahead.search_data_source_BANG_.call(null,inst_33579,state_atom,inst_33577);
var state_33591__$1 = state_33591;
var statearr_33598_33609 = state_33591__$1;
(statearr_33598_33609[(2)] = inst_33584);

(statearr_33598_33609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (7))){
var inst_33586 = (state_33591[(2)]);
var state_33591__$1 = (function (){var statearr_33599 = state_33591;
(statearr_33599[(9)] = inst_33586);

return statearr_33599;
})();
var statearr_33600_33610 = state_33591__$1;
(statearr_33600_33610[(2)] = null);

(statearr_33600_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31513__auto__))
;
return ((function (switch__31418__auto__,c__31513__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto____0 = (function (){
var statearr_33601 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33601[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto__);

(statearr_33601[(1)] = (1));

return statearr_33601;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto____1 = (function (state_33591){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_33591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e33602){if((e33602 instanceof Object)){
var ex__31422__auto__ = e33602;
var statearr_33603_33611 = state_33591;
(statearr_33603_33611[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33612 = state_33591;
state_33591 = G__33612;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto__ = function(state_33591){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto____1.call(this,state_33591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__))
})();
var state__31515__auto__ = (function (){var statearr_33604 = f__31514__auto__.call(null);
(statearr_33604[(6)] = c__31513__auto__);

return statearr_33604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__))
);

return c__31513__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__33614 = cljs.core.deref.call(null,state_atom);
var map__33614__$1 = (((((!((map__33614 == null))))?(((((map__33614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33614):map__33614);
var state = map__33614__$1;
var input_text = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__33614,map__33614__$1,state,input_text,c_input){
return (function (p1__33613_SHARP_){
var G__33616 = p1__33613_SHARP_;
var G__33616__$1 = cljs.core.assoc.call(null,G__33616,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__33616__$1,new_text);
} else {
return G__33616__$1;
}
});})(map__33614,map__33614__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__33617 = cljs.core._EQ_;
var expr__33618 = event.which;
if(cljs.core.truth_(pred__33617.call(null,goog.events.KeyCodes.UP,expr__33618))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__33617.call(null,goog.events.KeyCodes.DOWN,expr__33618))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__33617.call(null,goog.events.KeyCodes.ENTER,expr__33618))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__33617.call(null,goog.events.KeyCodes.ESC,expr__33618))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__33617.call(null,goog.events.KeyCodes.TAB,expr__33618))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33642 = arguments.length;
var i__4642__auto___33643 = (0);
while(true){
if((i__4642__auto___33643 < len__4641__auto___33642)){
args__4647__auto__.push((arguments[i__4642__auto___33643]));

var G__33644 = (i__4642__auto___33643 + (1));
i__4642__auto___33643 = G__33644;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__33622){
var map__33623 = p__33622;
var map__33623__$1 = (((((!((map__33623 == null))))?(((((map__33623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33623):map__33623);
var args = map__33623__$1;
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__33625 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__33625__$1 = (((((!((map__33625 == null))))?(((((map__33625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33625):map__33625);
var state = map__33625__$1;
var c_search = cljs.core.get.call(null,map__33625__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__33625__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args){
return (function() { 
var G__33645__delegate = function (p__33627){
var map__33628 = p__33627;
var map__33628__$1 = (((((!((map__33628 == null))))?(((((map__33628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33628):map__33628);
var args__$1 = map__33628__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__33628__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__33630 = cljs.core.deref.call(null,state_atom);
var map__33630__$1 = (((((!((map__33630 == null))))?(((((map__33630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33630):map__33630);
var state__$1 = map__33630__$1;
var suggestions = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__4047__auto__ = width;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4434__auto__ = ((function (map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args){
return (function re_com$typeahead$iter__33632(s__33633){
return (new cljs.core.LazySeq(null,((function (map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args){
return (function (){
var s__33633__$1 = s__33633;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33633__$1);
if(temp__5720__auto__){
var s__33633__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33633__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__33633__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__33635 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__33634 = (0);
while(true){
if((i__33634 < size__4433__auto__)){
var vec__33636 = cljs.core._nth.call(null,c__4432__auto__,i__33634);
var i = cljs.core.nth.call(null,vec__33636,(0),null);
var s = cljs.core.nth.call(null,vec__33636,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__33635,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__33634,selected_QMARK_,vec__33636,i,s,c__4432__auto__,size__4433__auto__,b__33635,s__33633__$2,temp__5720__auto__,map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__33634,selected_QMARK_,vec__33636,i,s,c__4432__auto__,size__4433__auto__,b__33635,s__33633__$2,temp__5720__auto__,map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__33634,selected_QMARK_,vec__33636,i,s,c__4432__auto__,size__4433__auto__,b__33635,s__33633__$2,temp__5720__auto__,map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args){
return (function (p1__33620_SHARP_){
p1__33620_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__33634,selected_QMARK_,vec__33636,i,s,c__4432__auto__,size__4433__auto__,b__33635,s__33633__$2,temp__5720__auto__,map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__33646 = (i__33634 + (1));
i__33634 = G__33646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33635),re_com$typeahead$iter__33632.call(null,cljs.core.chunk_rest.call(null,s__33633__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33635),null);
}
} else {
var vec__33639 = cljs.core.first.call(null,s__33633__$2);
var i = cljs.core.nth.call(null,vec__33639,(0),null);
var s = cljs.core.nth.call(null,vec__33639,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__33639,i,s,s__33633__$2,temp__5720__auto__,map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__33639,i,s,s__33633__$2,temp__5720__auto__,map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__33639,i,s,s__33633__$2,temp__5720__auto__,map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args){
return (function (p1__33620_SHARP_){
p1__33620_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__33639,i,s,s__33633__$2,temp__5720__auto__,map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__33632.call(null,cljs.core.rest.call(null,s__33633__$2)));
}
} else {
return null;
}
break;
}
});})(map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args))
,null,null));
});})(map__33630,map__33630__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33628,map__33628__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args))
;
return iter__4434__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__33645 = function (var_args){
var p__33627 = null;
if (arguments.length > 0) {
var G__33647__i = 0, G__33647__a = new Array(arguments.length -  0);
while (G__33647__i < G__33647__a.length) {G__33647__a[G__33647__i] = arguments[G__33647__i + 0]; ++G__33647__i;}
  p__33627 = new cljs.core.IndexedSeq(G__33647__a,0,null);
} 
return G__33645__delegate.call(this,p__33627);};
G__33645.cljs$lang$maxFixedArity = 0;
G__33645.cljs$lang$applyTo = (function (arglist__33648){
var p__33627 = cljs.core.seq(arglist__33648);
return G__33645__delegate(p__33627);
});
G__33645.cljs$core$IFn$_invoke$arity$variadic = G__33645__delegate;
return G__33645;
})()
;
;})(map__33625,map__33625__$1,state,c_search,c_input,state_atom,input_text_model,map__33623,map__33623__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq33621){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33621));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__31513__auto___33729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___33729,out){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___33729,out){
return (function (state_33699){
var state_val_33700 = (state_33699[(1)]);
if((state_val_33700 === (7))){
var inst_33654 = (state_33699[(2)]);
var state_33699__$1 = state_33699;
var statearr_33701_33730 = state_33699__$1;
(statearr_33701_33730[(2)] = inst_33654);

(statearr_33701_33730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (1))){
var inst_33649 = null;
var state_33699__$1 = (function (){var statearr_33702 = state_33699;
(statearr_33702[(7)] = inst_33649);

return statearr_33702;
})();
var statearr_33703_33731 = state_33699__$1;
(statearr_33703_33731[(2)] = null);

(statearr_33703_33731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (4))){
var state_33699__$1 = state_33699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33699__$1,(7),in$);
} else {
if((state_val_33700 === (15))){
var inst_33684 = (state_33699[(2)]);
var state_33699__$1 = (function (){var statearr_33704 = state_33699;
(statearr_33704[(8)] = inst_33684);

return statearr_33704;
})();
var statearr_33705_33732 = state_33699__$1;
(statearr_33705_33732[(2)] = null);

(statearr_33705_33732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (13))){
var inst_33672 = (state_33699[(9)]);
var inst_33686 = cljs.core._EQ_.call(null,inst_33672,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_33699__$1 = state_33699;
if(inst_33686){
var statearr_33706_33733 = state_33699__$1;
(statearr_33706_33733[(1)] = (16));

} else {
var statearr_33707_33734 = state_33699__$1;
(statearr_33707_33734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (6))){
var inst_33658 = (state_33699[(10)]);
var inst_33657 = (state_33699[(2)]);
var inst_33658__$1 = cljs.core.async.timeout.call(null,ms);
var inst_33666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33667 = [in$,inst_33658__$1];
var inst_33668 = (new cljs.core.PersistentVector(null,2,(5),inst_33666,inst_33667,null));
var state_33699__$1 = (function (){var statearr_33708 = state_33699;
(statearr_33708[(10)] = inst_33658__$1);

(statearr_33708[(11)] = inst_33657);

return statearr_33708;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33699__$1,(8),inst_33668);
} else {
if((state_val_33700 === (17))){
var state_33699__$1 = state_33699;
var statearr_33709_33735 = state_33699__$1;
(statearr_33709_33735[(2)] = null);

(statearr_33709_33735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (3))){
var inst_33697 = (state_33699[(2)]);
var state_33699__$1 = state_33699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33699__$1,inst_33697);
} else {
if((state_val_33700 === (12))){
var inst_33657 = (state_33699[(11)]);
var state_33699__$1 = state_33699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33699__$1,(15),out,inst_33657);
} else {
if((state_val_33700 === (2))){
var inst_33649 = (state_33699[(7)]);
var inst_33651 = (inst_33649 == null);
var state_33699__$1 = state_33699;
if(cljs.core.truth_(inst_33651)){
var statearr_33710_33736 = state_33699__$1;
(statearr_33710_33736[(1)] = (4));

} else {
var statearr_33711_33737 = state_33699__$1;
(statearr_33711_33737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (11))){
var inst_33694 = (state_33699[(2)]);
var inst_33649 = inst_33694;
var state_33699__$1 = (function (){var statearr_33712 = state_33699;
(statearr_33712[(7)] = inst_33649);

return statearr_33712;
})();
var statearr_33713_33738 = state_33699__$1;
(statearr_33713_33738[(2)] = null);

(statearr_33713_33738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (9))){
var inst_33670 = (state_33699[(12)]);
var inst_33678 = cljs.core.nth.call(null,inst_33670,(0),null);
var inst_33679 = cljs.core.nth.call(null,inst_33670,(1),null);
var state_33699__$1 = (function (){var statearr_33714 = state_33699;
(statearr_33714[(13)] = inst_33679);

return statearr_33714;
})();
var statearr_33715_33739 = state_33699__$1;
(statearr_33715_33739[(2)] = inst_33678);

(statearr_33715_33739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (5))){
var inst_33649 = (state_33699[(7)]);
var state_33699__$1 = state_33699;
var statearr_33716_33740 = state_33699__$1;
(statearr_33716_33740[(2)] = inst_33649);

(statearr_33716_33740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (14))){
var inst_33692 = (state_33699[(2)]);
var state_33699__$1 = state_33699;
var statearr_33717_33741 = state_33699__$1;
(statearr_33717_33741[(2)] = inst_33692);

(statearr_33717_33741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (16))){
var inst_33671 = (state_33699[(14)]);
var state_33699__$1 = state_33699;
var statearr_33718_33742 = state_33699__$1;
(statearr_33718_33742[(2)] = inst_33671);

(statearr_33718_33742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (10))){
var inst_33658 = (state_33699[(10)]);
var inst_33672 = (state_33699[(9)]);
var inst_33681 = cljs.core._EQ_.call(null,inst_33672,inst_33658);
var state_33699__$1 = state_33699;
if(inst_33681){
var statearr_33719_33743 = state_33699__$1;
(statearr_33719_33743[(1)] = (12));

} else {
var statearr_33720_33744 = state_33699__$1;
(statearr_33720_33744[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (18))){
var inst_33690 = (state_33699[(2)]);
var state_33699__$1 = state_33699;
var statearr_33721_33745 = state_33699__$1;
(statearr_33721_33745[(2)] = inst_33690);

(statearr_33721_33745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (8))){
var inst_33670 = (state_33699[(12)]);
var inst_33672 = (state_33699[(9)]);
var inst_33670__$1 = (state_33699[(2)]);
var inst_33671 = cljs.core.nth.call(null,inst_33670__$1,(0),null);
var inst_33672__$1 = cljs.core.nth.call(null,inst_33670__$1,(1),null);
var inst_33673 = cljs.core._EQ_.call(null,inst_33672__$1,in$);
var state_33699__$1 = (function (){var statearr_33722 = state_33699;
(statearr_33722[(12)] = inst_33670__$1);

(statearr_33722[(14)] = inst_33671);

(statearr_33722[(9)] = inst_33672__$1);

return statearr_33722;
})();
if(inst_33673){
var statearr_33723_33746 = state_33699__$1;
(statearr_33723_33746[(1)] = (9));

} else {
var statearr_33724_33747 = state_33699__$1;
(statearr_33724_33747[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31513__auto___33729,out))
;
return ((function (switch__31418__auto__,c__31513__auto___33729,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__31419__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__31419__auto____0 = (function (){
var statearr_33725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33725[(0)] = re_com$typeahead$debounce_$_state_machine__31419__auto__);

(statearr_33725[(1)] = (1));

return statearr_33725;
});
var re_com$typeahead$debounce_$_state_machine__31419__auto____1 = (function (state_33699){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_33699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e33726){if((e33726 instanceof Object)){
var ex__31422__auto__ = e33726;
var statearr_33727_33748 = state_33699;
(statearr_33727_33748[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33749 = state_33699;
state_33699 = G__33749;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__31419__auto__ = function(state_33699){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__31419__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__31419__auto____1.call(this,state_33699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__31419__auto____0;
re_com$typeahead$debounce_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__31419__auto____1;
return re_com$typeahead$debounce_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___33729,out))
})();
var state__31515__auto__ = (function (){var statearr_33728 = f__31514__auto__.call(null);
(statearr_33728[(6)] = c__31513__auto___33729);

return statearr_33728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___33729,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map
