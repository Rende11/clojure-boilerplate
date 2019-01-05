// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e37849){if((e37849 instanceof Error)){
var e = e37849;
return "Error: Unable to stringify";
} else {
throw e37849;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37852 = arguments.length;
switch (G__37852) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37850_SHARP_){
if(typeof p1__37850_SHARP_ === 'string'){
return p1__37850_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37850_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37855 = arguments.length;
var i__4642__auto___37856 = (0);
while(true){
if((i__4642__auto___37856 < len__4641__auto___37855)){
args__4647__auto__.push((arguments[i__4642__auto___37856]));

var G__37857 = (i__4642__auto___37856 + (1));
i__4642__auto___37856 = G__37857;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37854){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37854));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37859 = arguments.length;
var i__4642__auto___37860 = (0);
while(true){
if((i__4642__auto___37860 < len__4641__auto___37859)){
args__4647__auto__.push((arguments[i__4642__auto___37860]));

var G__37861 = (i__4642__auto___37860 + (1));
i__4642__auto___37860 = G__37861;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37858){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37858));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37862){
var map__37863 = p__37862;
var map__37863__$1 = (((((!((map__37863 == null))))?(((((map__37863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37863):map__37863);
var message = cljs.core.get.call(null,map__37863__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37863__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31513__auto___37942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___37942,ch){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___37942,ch){
return (function (state_37914){
var state_val_37915 = (state_37914[(1)]);
if((state_val_37915 === (7))){
var inst_37910 = (state_37914[(2)]);
var state_37914__$1 = state_37914;
var statearr_37916_37943 = state_37914__$1;
(statearr_37916_37943[(2)] = inst_37910);

(statearr_37916_37943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (1))){
var state_37914__$1 = state_37914;
var statearr_37917_37944 = state_37914__$1;
(statearr_37917_37944[(2)] = null);

(statearr_37917_37944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (4))){
var inst_37867 = (state_37914[(7)]);
var inst_37867__$1 = (state_37914[(2)]);
var state_37914__$1 = (function (){var statearr_37918 = state_37914;
(statearr_37918[(7)] = inst_37867__$1);

return statearr_37918;
})();
if(cljs.core.truth_(inst_37867__$1)){
var statearr_37919_37945 = state_37914__$1;
(statearr_37919_37945[(1)] = (5));

} else {
var statearr_37920_37946 = state_37914__$1;
(statearr_37920_37946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (15))){
var inst_37874 = (state_37914[(8)]);
var inst_37889 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37874);
var inst_37890 = cljs.core.first.call(null,inst_37889);
var inst_37891 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37890);
var inst_37892 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37891)].join('');
var inst_37893 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37892);
var state_37914__$1 = state_37914;
var statearr_37921_37947 = state_37914__$1;
(statearr_37921_37947[(2)] = inst_37893);

(statearr_37921_37947[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (13))){
var inst_37898 = (state_37914[(2)]);
var state_37914__$1 = state_37914;
var statearr_37922_37948 = state_37914__$1;
(statearr_37922_37948[(2)] = inst_37898);

(statearr_37922_37948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (6))){
var state_37914__$1 = state_37914;
var statearr_37923_37949 = state_37914__$1;
(statearr_37923_37949[(2)] = null);

(statearr_37923_37949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (17))){
var inst_37896 = (state_37914[(2)]);
var state_37914__$1 = state_37914;
var statearr_37924_37950 = state_37914__$1;
(statearr_37924_37950[(2)] = inst_37896);

(statearr_37924_37950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (3))){
var inst_37912 = (state_37914[(2)]);
var state_37914__$1 = state_37914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37914__$1,inst_37912);
} else {
if((state_val_37915 === (12))){
var inst_37873 = (state_37914[(9)]);
var inst_37887 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37873,opts);
var state_37914__$1 = state_37914;
if(inst_37887){
var statearr_37925_37951 = state_37914__$1;
(statearr_37925_37951[(1)] = (15));

} else {
var statearr_37926_37952 = state_37914__$1;
(statearr_37926_37952[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (2))){
var state_37914__$1 = state_37914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37914__$1,(4),ch);
} else {
if((state_val_37915 === (11))){
var inst_37874 = (state_37914[(8)]);
var inst_37879 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37880 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37874);
var inst_37881 = cljs.core.async.timeout.call(null,(1000));
var inst_37882 = [inst_37880,inst_37881];
var inst_37883 = (new cljs.core.PersistentVector(null,2,(5),inst_37879,inst_37882,null));
var state_37914__$1 = state_37914;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37914__$1,(14),inst_37883);
} else {
if((state_val_37915 === (9))){
var inst_37874 = (state_37914[(8)]);
var inst_37900 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37901 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37874);
var inst_37902 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37901);
var inst_37903 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37902)].join('');
var inst_37904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37903);
var state_37914__$1 = (function (){var statearr_37927 = state_37914;
(statearr_37927[(10)] = inst_37900);

return statearr_37927;
})();
var statearr_37928_37953 = state_37914__$1;
(statearr_37928_37953[(2)] = inst_37904);

(statearr_37928_37953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (5))){
var inst_37867 = (state_37914[(7)]);
var inst_37869 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37870 = (new cljs.core.PersistentArrayMap(null,2,inst_37869,null));
var inst_37871 = (new cljs.core.PersistentHashSet(null,inst_37870,null));
var inst_37872 = figwheel.client.focus_msgs.call(null,inst_37871,inst_37867);
var inst_37873 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37872);
var inst_37874 = cljs.core.first.call(null,inst_37872);
var inst_37875 = figwheel.client.autoload_QMARK_.call(null);
var state_37914__$1 = (function (){var statearr_37929 = state_37914;
(statearr_37929[(8)] = inst_37874);

(statearr_37929[(9)] = inst_37873);

return statearr_37929;
})();
if(cljs.core.truth_(inst_37875)){
var statearr_37930_37954 = state_37914__$1;
(statearr_37930_37954[(1)] = (8));

} else {
var statearr_37931_37955 = state_37914__$1;
(statearr_37931_37955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (14))){
var inst_37885 = (state_37914[(2)]);
var state_37914__$1 = state_37914;
var statearr_37932_37956 = state_37914__$1;
(statearr_37932_37956[(2)] = inst_37885);

(statearr_37932_37956[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (16))){
var state_37914__$1 = state_37914;
var statearr_37933_37957 = state_37914__$1;
(statearr_37933_37957[(2)] = null);

(statearr_37933_37957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (10))){
var inst_37906 = (state_37914[(2)]);
var state_37914__$1 = (function (){var statearr_37934 = state_37914;
(statearr_37934[(11)] = inst_37906);

return statearr_37934;
})();
var statearr_37935_37958 = state_37914__$1;
(statearr_37935_37958[(2)] = null);

(statearr_37935_37958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37915 === (8))){
var inst_37873 = (state_37914[(9)]);
var inst_37877 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37873,opts);
var state_37914__$1 = state_37914;
if(cljs.core.truth_(inst_37877)){
var statearr_37936_37959 = state_37914__$1;
(statearr_37936_37959[(1)] = (11));

} else {
var statearr_37937_37960 = state_37914__$1;
(statearr_37937_37960[(1)] = (12));

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
});})(c__31513__auto___37942,ch))
;
return ((function (switch__31418__auto__,c__31513__auto___37942,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____0 = (function (){
var statearr_37938 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37938[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__);

(statearr_37938[(1)] = (1));

return statearr_37938;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____1 = (function (state_37914){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_37914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e37939){if((e37939 instanceof Object)){
var ex__31422__auto__ = e37939;
var statearr_37940_37961 = state_37914;
(statearr_37940_37961[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37962 = state_37914;
state_37914 = G__37962;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__ = function(state_37914){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____1.call(this,state_37914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___37942,ch))
})();
var state__31515__auto__ = (function (){var statearr_37941 = f__31514__auto__.call(null);
(statearr_37941[(6)] = c__31513__auto___37942);

return statearr_37941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___37942,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37963_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37963_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37969 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37969){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37965 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37966 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37967 = true;
var _STAR_print_fn_STAR__temp_val__37968 = ((function (_STAR_print_newline_STAR__orig_val__37965,_STAR_print_fn_STAR__orig_val__37966,_STAR_print_newline_STAR__temp_val__37967,sb,base_path_37969){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__37965,_STAR_print_fn_STAR__orig_val__37966,_STAR_print_newline_STAR__temp_val__37967,sb,base_path_37969))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37967;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37968;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37966;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37965;
}}catch (e37964){if((e37964 instanceof Error)){
var e = e37964;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37969], null));
} else {
var e = e37964;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37969))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37970){
var map__37971 = p__37970;
var map__37971__$1 = (((((!((map__37971 == null))))?(((((map__37971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37971):map__37971);
var opts = map__37971__$1;
var build_id = cljs.core.get.call(null,map__37971__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37971,map__37971__$1,opts,build_id){
return (function (p__37973){
var vec__37974 = p__37973;
var seq__37975 = cljs.core.seq.call(null,vec__37974);
var first__37976 = cljs.core.first.call(null,seq__37975);
var seq__37975__$1 = cljs.core.next.call(null,seq__37975);
var map__37977 = first__37976;
var map__37977__$1 = (((((!((map__37977 == null))))?(((((map__37977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37977):map__37977);
var msg = map__37977__$1;
var msg_name = cljs.core.get.call(null,map__37977__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37975__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37974,seq__37975,first__37976,seq__37975__$1,map__37977,map__37977__$1,msg,msg_name,_,map__37971,map__37971__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37974,seq__37975,first__37976,seq__37975__$1,map__37977,map__37977__$1,msg,msg_name,_,map__37971,map__37971__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37971,map__37971__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37979){
var vec__37980 = p__37979;
var seq__37981 = cljs.core.seq.call(null,vec__37980);
var first__37982 = cljs.core.first.call(null,seq__37981);
var seq__37981__$1 = cljs.core.next.call(null,seq__37981);
var map__37983 = first__37982;
var map__37983__$1 = (((((!((map__37983 == null))))?(((((map__37983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37983):map__37983);
var msg = map__37983__$1;
var msg_name = cljs.core.get.call(null,map__37983__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37981__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37985){
var map__37986 = p__37985;
var map__37986__$1 = (((((!((map__37986 == null))))?(((((map__37986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37986):map__37986);
var on_compile_warning = cljs.core.get.call(null,map__37986__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37986__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37986,map__37986__$1,on_compile_warning,on_compile_fail){
return (function (p__37988){
var vec__37989 = p__37988;
var seq__37990 = cljs.core.seq.call(null,vec__37989);
var first__37991 = cljs.core.first.call(null,seq__37990);
var seq__37990__$1 = cljs.core.next.call(null,seq__37990);
var map__37992 = first__37991;
var map__37992__$1 = (((((!((map__37992 == null))))?(((((map__37992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37992):map__37992);
var msg = map__37992__$1;
var msg_name = cljs.core.get.call(null,map__37992__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37990__$1;
var pred__37994 = cljs.core._EQ_;
var expr__37995 = msg_name;
if(cljs.core.truth_(pred__37994.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37995))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37994.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37995))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37986,map__37986__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__,msg_hist,msg_names,msg){
return (function (state_38084){
var state_val_38085 = (state_38084[(1)]);
if((state_val_38085 === (7))){
var inst_38004 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
if(cljs.core.truth_(inst_38004)){
var statearr_38086_38133 = state_38084__$1;
(statearr_38086_38133[(1)] = (8));

} else {
var statearr_38087_38134 = state_38084__$1;
(statearr_38087_38134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (20))){
var inst_38078 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38088_38135 = state_38084__$1;
(statearr_38088_38135[(2)] = inst_38078);

(statearr_38088_38135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (27))){
var inst_38074 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38089_38136 = state_38084__$1;
(statearr_38089_38136[(2)] = inst_38074);

(statearr_38089_38136[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (1))){
var inst_37997 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38084__$1 = state_38084;
if(cljs.core.truth_(inst_37997)){
var statearr_38090_38137 = state_38084__$1;
(statearr_38090_38137[(1)] = (2));

} else {
var statearr_38091_38138 = state_38084__$1;
(statearr_38091_38138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (24))){
var inst_38076 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38092_38139 = state_38084__$1;
(statearr_38092_38139[(2)] = inst_38076);

(statearr_38092_38139[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (4))){
var inst_38082 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38084__$1,inst_38082);
} else {
if((state_val_38085 === (15))){
var inst_38080 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38093_38140 = state_38084__$1;
(statearr_38093_38140[(2)] = inst_38080);

(statearr_38093_38140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (21))){
var inst_38033 = (state_38084[(2)]);
var inst_38034 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38035 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38034);
var state_38084__$1 = (function (){var statearr_38094 = state_38084;
(statearr_38094[(7)] = inst_38033);

return statearr_38094;
})();
var statearr_38095_38141 = state_38084__$1;
(statearr_38095_38141[(2)] = inst_38035);

(statearr_38095_38141[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (31))){
var inst_38063 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38084__$1 = state_38084;
if(inst_38063){
var statearr_38096_38142 = state_38084__$1;
(statearr_38096_38142[(1)] = (34));

} else {
var statearr_38097_38143 = state_38084__$1;
(statearr_38097_38143[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (32))){
var inst_38072 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38098_38144 = state_38084__$1;
(statearr_38098_38144[(2)] = inst_38072);

(statearr_38098_38144[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (33))){
var inst_38059 = (state_38084[(2)]);
var inst_38060 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38061 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38060);
var state_38084__$1 = (function (){var statearr_38099 = state_38084;
(statearr_38099[(8)] = inst_38059);

return statearr_38099;
})();
var statearr_38100_38145 = state_38084__$1;
(statearr_38100_38145[(2)] = inst_38061);

(statearr_38100_38145[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (13))){
var inst_38018 = figwheel.client.heads_up.clear.call(null);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38084__$1,(16),inst_38018);
} else {
if((state_val_38085 === (22))){
var inst_38039 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38040 = figwheel.client.heads_up.append_warning_message.call(null,inst_38039);
var state_38084__$1 = state_38084;
var statearr_38101_38146 = state_38084__$1;
(statearr_38101_38146[(2)] = inst_38040);

(statearr_38101_38146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (36))){
var inst_38070 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38102_38147 = state_38084__$1;
(statearr_38102_38147[(2)] = inst_38070);

(statearr_38102_38147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (29))){
var inst_38050 = (state_38084[(2)]);
var inst_38051 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38052 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38051);
var state_38084__$1 = (function (){var statearr_38103 = state_38084;
(statearr_38103[(9)] = inst_38050);

return statearr_38103;
})();
var statearr_38104_38148 = state_38084__$1;
(statearr_38104_38148[(2)] = inst_38052);

(statearr_38104_38148[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (6))){
var inst_37999 = (state_38084[(10)]);
var state_38084__$1 = state_38084;
var statearr_38105_38149 = state_38084__$1;
(statearr_38105_38149[(2)] = inst_37999);

(statearr_38105_38149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (28))){
var inst_38046 = (state_38084[(2)]);
var inst_38047 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38048 = figwheel.client.heads_up.display_warning.call(null,inst_38047);
var state_38084__$1 = (function (){var statearr_38106 = state_38084;
(statearr_38106[(11)] = inst_38046);

return statearr_38106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38084__$1,(29),inst_38048);
} else {
if((state_val_38085 === (25))){
var inst_38044 = figwheel.client.heads_up.clear.call(null);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38084__$1,(28),inst_38044);
} else {
if((state_val_38085 === (34))){
var inst_38065 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38084__$1,(37),inst_38065);
} else {
if((state_val_38085 === (17))){
var inst_38024 = (state_38084[(2)]);
var inst_38025 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38026 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38025);
var state_38084__$1 = (function (){var statearr_38107 = state_38084;
(statearr_38107[(12)] = inst_38024);

return statearr_38107;
})();
var statearr_38108_38150 = state_38084__$1;
(statearr_38108_38150[(2)] = inst_38026);

(statearr_38108_38150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (3))){
var inst_38016 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38084__$1 = state_38084;
if(inst_38016){
var statearr_38109_38151 = state_38084__$1;
(statearr_38109_38151[(1)] = (13));

} else {
var statearr_38110_38152 = state_38084__$1;
(statearr_38110_38152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (12))){
var inst_38012 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38111_38153 = state_38084__$1;
(statearr_38111_38153[(2)] = inst_38012);

(statearr_38111_38153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (2))){
var inst_37999 = (state_38084[(10)]);
var inst_37999__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38084__$1 = (function (){var statearr_38112 = state_38084;
(statearr_38112[(10)] = inst_37999__$1);

return statearr_38112;
})();
if(cljs.core.truth_(inst_37999__$1)){
var statearr_38113_38154 = state_38084__$1;
(statearr_38113_38154[(1)] = (5));

} else {
var statearr_38114_38155 = state_38084__$1;
(statearr_38114_38155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (23))){
var inst_38042 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38084__$1 = state_38084;
if(inst_38042){
var statearr_38115_38156 = state_38084__$1;
(statearr_38115_38156[(1)] = (25));

} else {
var statearr_38116_38157 = state_38084__$1;
(statearr_38116_38157[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (35))){
var state_38084__$1 = state_38084;
var statearr_38117_38158 = state_38084__$1;
(statearr_38117_38158[(2)] = null);

(statearr_38117_38158[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (19))){
var inst_38037 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38084__$1 = state_38084;
if(inst_38037){
var statearr_38118_38159 = state_38084__$1;
(statearr_38118_38159[(1)] = (22));

} else {
var statearr_38119_38160 = state_38084__$1;
(statearr_38119_38160[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (11))){
var inst_38008 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38120_38161 = state_38084__$1;
(statearr_38120_38161[(2)] = inst_38008);

(statearr_38120_38161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (9))){
var inst_38010 = figwheel.client.heads_up.clear.call(null);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38084__$1,(12),inst_38010);
} else {
if((state_val_38085 === (5))){
var inst_38001 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38084__$1 = state_38084;
var statearr_38121_38162 = state_38084__$1;
(statearr_38121_38162[(2)] = inst_38001);

(statearr_38121_38162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (14))){
var inst_38028 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38084__$1 = state_38084;
if(inst_38028){
var statearr_38122_38163 = state_38084__$1;
(statearr_38122_38163[(1)] = (18));

} else {
var statearr_38123_38164 = state_38084__$1;
(statearr_38123_38164[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (26))){
var inst_38054 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38084__$1 = state_38084;
if(inst_38054){
var statearr_38124_38165 = state_38084__$1;
(statearr_38124_38165[(1)] = (30));

} else {
var statearr_38125_38166 = state_38084__$1;
(statearr_38125_38166[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (16))){
var inst_38020 = (state_38084[(2)]);
var inst_38021 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38022 = figwheel.client.heads_up.display_exception.call(null,inst_38021);
var state_38084__$1 = (function (){var statearr_38126 = state_38084;
(statearr_38126[(13)] = inst_38020);

return statearr_38126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38084__$1,(17),inst_38022);
} else {
if((state_val_38085 === (30))){
var inst_38056 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38057 = figwheel.client.heads_up.display_warning.call(null,inst_38056);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38084__$1,(33),inst_38057);
} else {
if((state_val_38085 === (10))){
var inst_38014 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38127_38167 = state_38084__$1;
(statearr_38127_38167[(2)] = inst_38014);

(statearr_38127_38167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (18))){
var inst_38030 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38031 = figwheel.client.heads_up.display_exception.call(null,inst_38030);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38084__$1,(21),inst_38031);
} else {
if((state_val_38085 === (37))){
var inst_38067 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38128_38168 = state_38084__$1;
(statearr_38128_38168[(2)] = inst_38067);

(statearr_38128_38168[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (8))){
var inst_38006 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38084__$1,(11),inst_38006);
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
}
});})(c__31513__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31418__auto__,c__31513__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____0 = (function (){
var statearr_38129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38129[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__);

(statearr_38129[(1)] = (1));

return statearr_38129;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____1 = (function (state_38084){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38130){if((e38130 instanceof Object)){
var ex__31422__auto__ = e38130;
var statearr_38131_38169 = state_38084;
(statearr_38131_38169[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38170 = state_38084;
state_38084 = G__38170;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__ = function(state_38084){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____1.call(this,state_38084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__,msg_hist,msg_names,msg))
})();
var state__31515__auto__ = (function (){var statearr_38132 = f__31514__auto__.call(null);
(statearr_38132[(6)] = c__31513__auto__);

return statearr_38132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__,msg_hist,msg_names,msg))
);

return c__31513__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31513__auto___38199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___38199,ch){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___38199,ch){
return (function (state_38185){
var state_val_38186 = (state_38185[(1)]);
if((state_val_38186 === (1))){
var state_38185__$1 = state_38185;
var statearr_38187_38200 = state_38185__$1;
(statearr_38187_38200[(2)] = null);

(statearr_38187_38200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (2))){
var state_38185__$1 = state_38185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38185__$1,(4),ch);
} else {
if((state_val_38186 === (3))){
var inst_38183 = (state_38185[(2)]);
var state_38185__$1 = state_38185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38185__$1,inst_38183);
} else {
if((state_val_38186 === (4))){
var inst_38173 = (state_38185[(7)]);
var inst_38173__$1 = (state_38185[(2)]);
var state_38185__$1 = (function (){var statearr_38188 = state_38185;
(statearr_38188[(7)] = inst_38173__$1);

return statearr_38188;
})();
if(cljs.core.truth_(inst_38173__$1)){
var statearr_38189_38201 = state_38185__$1;
(statearr_38189_38201[(1)] = (5));

} else {
var statearr_38190_38202 = state_38185__$1;
(statearr_38190_38202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (5))){
var inst_38173 = (state_38185[(7)]);
var inst_38175 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38173);
var state_38185__$1 = state_38185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38185__$1,(8),inst_38175);
} else {
if((state_val_38186 === (6))){
var state_38185__$1 = state_38185;
var statearr_38191_38203 = state_38185__$1;
(statearr_38191_38203[(2)] = null);

(statearr_38191_38203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (7))){
var inst_38181 = (state_38185[(2)]);
var state_38185__$1 = state_38185;
var statearr_38192_38204 = state_38185__$1;
(statearr_38192_38204[(2)] = inst_38181);

(statearr_38192_38204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (8))){
var inst_38177 = (state_38185[(2)]);
var state_38185__$1 = (function (){var statearr_38193 = state_38185;
(statearr_38193[(8)] = inst_38177);

return statearr_38193;
})();
var statearr_38194_38205 = state_38185__$1;
(statearr_38194_38205[(2)] = null);

(statearr_38194_38205[(1)] = (2));


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
});})(c__31513__auto___38199,ch))
;
return ((function (switch__31418__auto__,c__31513__auto___38199,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31419__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31419__auto____0 = (function (){
var statearr_38195 = [null,null,null,null,null,null,null,null,null];
(statearr_38195[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31419__auto__);

(statearr_38195[(1)] = (1));

return statearr_38195;
});
var figwheel$client$heads_up_plugin_$_state_machine__31419__auto____1 = (function (state_38185){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38196){if((e38196 instanceof Object)){
var ex__31422__auto__ = e38196;
var statearr_38197_38206 = state_38185;
(statearr_38197_38206[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38207 = state_38185;
state_38185 = G__38207;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31419__auto__ = function(state_38185){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31419__auto____1.call(this,state_38185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31419__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31419__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___38199,ch))
})();
var state__31515__auto__ = (function (){var statearr_38198 = f__31514__auto__.call(null);
(statearr_38198[(6)] = c__31513__auto___38199);

return statearr_38198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___38199,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__){
return (function (state_38213){
var state_val_38214 = (state_38213[(1)]);
if((state_val_38214 === (1))){
var inst_38208 = cljs.core.async.timeout.call(null,(3000));
var state_38213__$1 = state_38213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38213__$1,(2),inst_38208);
} else {
if((state_val_38214 === (2))){
var inst_38210 = (state_38213[(2)]);
var inst_38211 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38213__$1 = (function (){var statearr_38215 = state_38213;
(statearr_38215[(7)] = inst_38210);

return statearr_38215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38213__$1,inst_38211);
} else {
return null;
}
}
});})(c__31513__auto__))
;
return ((function (switch__31418__auto__,c__31513__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____0 = (function (){
var statearr_38216 = [null,null,null,null,null,null,null,null];
(statearr_38216[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__);

(statearr_38216[(1)] = (1));

return statearr_38216;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____1 = (function (state_38213){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38217){if((e38217 instanceof Object)){
var ex__31422__auto__ = e38217;
var statearr_38218_38220 = state_38213;
(statearr_38218_38220[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38221 = state_38213;
state_38213 = G__38221;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__ = function(state_38213){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____1.call(this,state_38213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__))
})();
var state__31515__auto__ = (function (){var statearr_38219 = f__31514__auto__.call(null);
(statearr_38219[(6)] = c__31513__auto__);

return statearr_38219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__))
);

return c__31513__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__,figwheel_version,temp__5720__auto__){
return (function (state_38228){
var state_val_38229 = (state_38228[(1)]);
if((state_val_38229 === (1))){
var inst_38222 = cljs.core.async.timeout.call(null,(2000));
var state_38228__$1 = state_38228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38228__$1,(2),inst_38222);
} else {
if((state_val_38229 === (2))){
var inst_38224 = (state_38228[(2)]);
var inst_38225 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38226 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38225);
var state_38228__$1 = (function (){var statearr_38230 = state_38228;
(statearr_38230[(7)] = inst_38224);

return statearr_38230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38228__$1,inst_38226);
} else {
return null;
}
}
});})(c__31513__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__31418__auto__,c__31513__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto____0 = (function (){
var statearr_38231 = [null,null,null,null,null,null,null,null];
(statearr_38231[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto__);

(statearr_38231[(1)] = (1));

return statearr_38231;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto____1 = (function (state_38228){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38232){if((e38232 instanceof Object)){
var ex__31422__auto__ = e38232;
var statearr_38233_38235 = state_38228;
(statearr_38233_38235[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38236 = state_38228;
state_38228 = G__38236;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto__ = function(state_38228){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto____1.call(this,state_38228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__,figwheel_version,temp__5720__auto__))
})();
var state__31515__auto__ = (function (){var statearr_38234 = f__31514__auto__.call(null);
(statearr_38234[(6)] = c__31513__auto__);

return statearr_38234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__,figwheel_version,temp__5720__auto__))
);

return c__31513__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38237){
var map__38238 = p__38237;
var map__38238__$1 = (((((!((map__38238 == null))))?(((((map__38238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38238):map__38238);
var file = cljs.core.get.call(null,map__38238__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38238__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38238__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38240 = "";
var G__38240__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38240),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38240);
var G__38240__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38240__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38240__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38240__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38240__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38241){
var map__38242 = p__38241;
var map__38242__$1 = (((((!((map__38242 == null))))?(((((map__38242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38242):map__38242);
var ed = map__38242__$1;
var formatted_exception = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38244_38248 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38245_38249 = null;
var count__38246_38250 = (0);
var i__38247_38251 = (0);
while(true){
if((i__38247_38251 < count__38246_38250)){
var msg_38252 = cljs.core._nth.call(null,chunk__38245_38249,i__38247_38251);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38252);


var G__38253 = seq__38244_38248;
var G__38254 = chunk__38245_38249;
var G__38255 = count__38246_38250;
var G__38256 = (i__38247_38251 + (1));
seq__38244_38248 = G__38253;
chunk__38245_38249 = G__38254;
count__38246_38250 = G__38255;
i__38247_38251 = G__38256;
continue;
} else {
var temp__5720__auto___38257 = cljs.core.seq.call(null,seq__38244_38248);
if(temp__5720__auto___38257){
var seq__38244_38258__$1 = temp__5720__auto___38257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38244_38258__$1)){
var c__4461__auto___38259 = cljs.core.chunk_first.call(null,seq__38244_38258__$1);
var G__38260 = cljs.core.chunk_rest.call(null,seq__38244_38258__$1);
var G__38261 = c__4461__auto___38259;
var G__38262 = cljs.core.count.call(null,c__4461__auto___38259);
var G__38263 = (0);
seq__38244_38248 = G__38260;
chunk__38245_38249 = G__38261;
count__38246_38250 = G__38262;
i__38247_38251 = G__38263;
continue;
} else {
var msg_38264 = cljs.core.first.call(null,seq__38244_38258__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38264);


var G__38265 = cljs.core.next.call(null,seq__38244_38258__$1);
var G__38266 = null;
var G__38267 = (0);
var G__38268 = (0);
seq__38244_38248 = G__38265;
chunk__38245_38249 = G__38266;
count__38246_38250 = G__38267;
i__38247_38251 = G__38268;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38269){
var map__38270 = p__38269;
var map__38270__$1 = (((((!((map__38270 == null))))?(((((map__38270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38270):map__38270);
var w = map__38270__$1;
var message = cljs.core.get.call(null,map__38270__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,364,364,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,356,356,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38272 = cljs.core.seq.call(null,plugins);
var chunk__38273 = null;
var count__38274 = (0);
var i__38275 = (0);
while(true){
if((i__38275 < count__38274)){
var vec__38276 = cljs.core._nth.call(null,chunk__38273,i__38275);
var k = cljs.core.nth.call(null,vec__38276,(0),null);
var plugin = cljs.core.nth.call(null,vec__38276,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38282 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38272,chunk__38273,count__38274,i__38275,pl_38282,vec__38276,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38282.call(null,msg_hist);
});})(seq__38272,chunk__38273,count__38274,i__38275,pl_38282,vec__38276,k,plugin))
);
} else {
}


var G__38283 = seq__38272;
var G__38284 = chunk__38273;
var G__38285 = count__38274;
var G__38286 = (i__38275 + (1));
seq__38272 = G__38283;
chunk__38273 = G__38284;
count__38274 = G__38285;
i__38275 = G__38286;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38272);
if(temp__5720__auto__){
var seq__38272__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38272__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__38272__$1);
var G__38287 = cljs.core.chunk_rest.call(null,seq__38272__$1);
var G__38288 = c__4461__auto__;
var G__38289 = cljs.core.count.call(null,c__4461__auto__);
var G__38290 = (0);
seq__38272 = G__38287;
chunk__38273 = G__38288;
count__38274 = G__38289;
i__38275 = G__38290;
continue;
} else {
var vec__38279 = cljs.core.first.call(null,seq__38272__$1);
var k = cljs.core.nth.call(null,vec__38279,(0),null);
var plugin = cljs.core.nth.call(null,vec__38279,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38291 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38272,chunk__38273,count__38274,i__38275,pl_38291,vec__38279,k,plugin,seq__38272__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38291.call(null,msg_hist);
});})(seq__38272,chunk__38273,count__38274,i__38275,pl_38291,vec__38279,k,plugin,seq__38272__$1,temp__5720__auto__))
);
} else {
}


var G__38292 = cljs.core.next.call(null,seq__38272__$1);
var G__38293 = null;
var G__38294 = (0);
var G__38295 = (0);
seq__38272 = G__38292;
chunk__38273 = G__38293;
count__38274 = G__38294;
i__38275 = G__38295;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38297 = arguments.length;
switch (G__38297) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38298_38303 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38299_38304 = null;
var count__38300_38305 = (0);
var i__38301_38306 = (0);
while(true){
if((i__38301_38306 < count__38300_38305)){
var msg_38307 = cljs.core._nth.call(null,chunk__38299_38304,i__38301_38306);
figwheel.client.socket.handle_incoming_message.call(null,msg_38307);


var G__38308 = seq__38298_38303;
var G__38309 = chunk__38299_38304;
var G__38310 = count__38300_38305;
var G__38311 = (i__38301_38306 + (1));
seq__38298_38303 = G__38308;
chunk__38299_38304 = G__38309;
count__38300_38305 = G__38310;
i__38301_38306 = G__38311;
continue;
} else {
var temp__5720__auto___38312 = cljs.core.seq.call(null,seq__38298_38303);
if(temp__5720__auto___38312){
var seq__38298_38313__$1 = temp__5720__auto___38312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38298_38313__$1)){
var c__4461__auto___38314 = cljs.core.chunk_first.call(null,seq__38298_38313__$1);
var G__38315 = cljs.core.chunk_rest.call(null,seq__38298_38313__$1);
var G__38316 = c__4461__auto___38314;
var G__38317 = cljs.core.count.call(null,c__4461__auto___38314);
var G__38318 = (0);
seq__38298_38303 = G__38315;
chunk__38299_38304 = G__38316;
count__38300_38305 = G__38317;
i__38301_38306 = G__38318;
continue;
} else {
var msg_38319 = cljs.core.first.call(null,seq__38298_38313__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38319);


var G__38320 = cljs.core.next.call(null,seq__38298_38313__$1);
var G__38321 = null;
var G__38322 = (0);
var G__38323 = (0);
seq__38298_38303 = G__38320;
chunk__38299_38304 = G__38321;
count__38300_38305 = G__38322;
i__38301_38306 = G__38323;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38328 = arguments.length;
var i__4642__auto___38329 = (0);
while(true){
if((i__4642__auto___38329 < len__4641__auto___38328)){
args__4647__auto__.push((arguments[i__4642__auto___38329]));

var G__38330 = (i__4642__auto___38329 + (1));
i__4642__auto___38329 = G__38330;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38325){
var map__38326 = p__38325;
var map__38326__$1 = (((((!((map__38326 == null))))?(((((map__38326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38326):map__38326);
var opts = map__38326__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38324){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38324));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38331){if((e38331 instanceof Error)){
var e = e38331;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38331;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38332){
var map__38333 = p__38332;
var map__38333__$1 = (((((!((map__38333 == null))))?(((((map__38333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38333):map__38333);
var msg_name = cljs.core.get.call(null,map__38333__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
