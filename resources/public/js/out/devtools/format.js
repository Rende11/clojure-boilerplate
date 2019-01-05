// Compiled by ClojureScript 1.10.439 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._header[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._header["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._has_body[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._has_body["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._body[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._body["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27077 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27077["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27078 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27078["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27079 = temp__5718__auto____$2;
return (o27079["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27080 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27080["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27081 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27081["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27082 = temp__5718__auto____$2;
return (o27082["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27083 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27083["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27084 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27084["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27085 = temp__5718__auto____$2;
return (o27085["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27086 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27086["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27087 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27087["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27088 = temp__5718__auto____$2;
return (o27088["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27089 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27089["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27090 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27090["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27091 = temp__5718__auto____$2;
return (o27091["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27092 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27092["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27093 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27093["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27094 = temp__5718__auto____$2;
return (o27094["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27095 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27095["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27096 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27096["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27097 = temp__5718__auto____$2;
return (o27097["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27099 = arguments.length;
var i__4642__auto___27100 = (0);
while(true){
if((i__4642__auto___27100 < len__4641__auto___27099)){
args__4647__auto__.push((arguments[i__4642__auto___27100]));

var G__27101 = (i__4642__auto___27100 + (1));
i__4642__auto___27100 = G__27101;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq27098){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27098));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27103 = arguments.length;
var i__4642__auto___27104 = (0);
while(true){
if((i__4642__auto___27104 < len__4641__auto___27103)){
args__4647__auto__.push((arguments[i__4642__auto___27104]));

var G__27105 = (i__4642__auto___27104 + (1));
i__4642__auto___27104 = G__27105;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq27102){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27102));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27107 = arguments.length;
var i__4642__auto___27108 = (0);
while(true){
if((i__4642__auto___27108 < len__4641__auto___27107)){
args__4647__auto__.push((arguments[i__4642__auto___27108]));

var G__27109 = (i__4642__auto___27108 + (1));
i__4642__auto___27108 = G__27109;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq27106){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27106));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27111 = arguments.length;
var i__4642__auto___27112 = (0);
while(true){
if((i__4642__auto___27112 < len__4641__auto___27111)){
args__4647__auto__.push((arguments[i__4642__auto___27112]));

var G__27113 = (i__4642__auto___27112 + (1));
i__4642__auto___27112 = G__27113;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27110){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27110));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27115 = arguments.length;
var i__4642__auto___27116 = (0);
while(true){
if((i__4642__auto___27116 < len__4641__auto___27115)){
args__4647__auto__.push((arguments[i__4642__auto___27116]));

var G__27117 = (i__4642__auto___27116 + (1));
i__4642__auto___27116 = G__27117;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq27114){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27114));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27119 = arguments.length;
var i__4642__auto___27120 = (0);
while(true){
if((i__4642__auto___27120 < len__4641__auto___27119)){
args__4647__auto__.push((arguments[i__4642__auto___27120]));

var G__27121 = (i__4642__auto___27120 + (1));
i__4642__auto___27120 = G__27121;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq27118){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27118));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27123 = arguments.length;
var i__4642__auto___27124 = (0);
while(true){
if((i__4642__auto___27124 < len__4641__auto___27123)){
args__4647__auto__.push((arguments[i__4642__auto___27124]));

var G__27125 = (i__4642__auto___27124 + (1));
i__4642__auto___27124 = G__27125;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq27122){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27122));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27133 = arguments.length;
var i__4642__auto___27134 = (0);
while(true){
if((i__4642__auto___27134 < len__4641__auto___27133)){
args__4647__auto__.push((arguments[i__4642__auto___27134]));

var G__27135 = (i__4642__auto___27134 + (1));
i__4642__auto___27134 = G__27135;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27129){
var vec__27130 = p__27129;
var state_override = cljs.core.nth.call(null,vec__27130,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__27130,state_override){
return (function (p1__27126_SHARP_){
return cljs.core.merge.call(null,p1__27126_SHARP_,state_override);
});})(vec__27130,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq27127){
var G__27128 = cljs.core.first.call(null,seq27127);
var seq27127__$1 = cljs.core.next.call(null,seq27127);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27128,seq27127__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27137 = arguments.length;
var i__4642__auto___27138 = (0);
while(true){
if((i__4642__auto___27138 < len__4641__auto___27137)){
args__4647__auto__.push((arguments[i__4642__auto___27138]));

var G__27139 = (i__4642__auto___27138 + (1));
i__4642__auto___27138 = G__27139;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq27136){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27136));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___27142 = arguments.length;
var i__4642__auto___27143 = (0);
while(true){
if((i__4642__auto___27143 < len__4641__auto___27142)){
args__4647__auto__.push((arguments[i__4642__auto___27143]));

var G__27144 = (i__4642__auto___27143 + (1));
i__4642__auto___27143 = G__27144;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27140){
var G__27141 = cljs.core.first.call(null,seq27140);
var seq27140__$1 = cljs.core.next.call(null,seq27140);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27141,seq27140__$1);
});


//# sourceMappingURL=format.js.map
