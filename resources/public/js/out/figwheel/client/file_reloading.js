// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36098_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36098_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36099 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36100 = null;
var count__36101 = (0);
var i__36102 = (0);
while(true){
if((i__36102 < count__36101)){
var n = cljs.core._nth.call(null,chunk__36100,i__36102);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36103 = seq__36099;
var G__36104 = chunk__36100;
var G__36105 = count__36101;
var G__36106 = (i__36102 + (1));
seq__36099 = G__36103;
chunk__36100 = G__36104;
count__36101 = G__36105;
i__36102 = G__36106;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36099);
if(temp__5720__auto__){
var seq__36099__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36099__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__36099__$1);
var G__36107 = cljs.core.chunk_rest.call(null,seq__36099__$1);
var G__36108 = c__4461__auto__;
var G__36109 = cljs.core.count.call(null,c__4461__auto__);
var G__36110 = (0);
seq__36099 = G__36107;
chunk__36100 = G__36108;
count__36101 = G__36109;
i__36102 = G__36110;
continue;
} else {
var n = cljs.core.first.call(null,seq__36099__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36111 = cljs.core.next.call(null,seq__36099__$1);
var G__36112 = null;
var G__36113 = (0);
var G__36114 = (0);
seq__36099 = G__36111;
chunk__36100 = G__36112;
count__36101 = G__36113;
i__36102 = G__36114;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__36115){
var vec__36116 = p__36115;
var _ = cljs.core.nth.call(null,vec__36116,(0),null);
var v = cljs.core.nth.call(null,vec__36116,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__36119){
var vec__36120 = p__36119;
var k = cljs.core.nth.call(null,vec__36120,(0),null);
var v = cljs.core.nth.call(null,vec__36120,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36132_36140 = cljs.core.seq.call(null,deps);
var chunk__36133_36141 = null;
var count__36134_36142 = (0);
var i__36135_36143 = (0);
while(true){
if((i__36135_36143 < count__36134_36142)){
var dep_36144 = cljs.core._nth.call(null,chunk__36133_36141,i__36135_36143);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_36144;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36144));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36144,(depth + (1)),state);
} else {
}


var G__36145 = seq__36132_36140;
var G__36146 = chunk__36133_36141;
var G__36147 = count__36134_36142;
var G__36148 = (i__36135_36143 + (1));
seq__36132_36140 = G__36145;
chunk__36133_36141 = G__36146;
count__36134_36142 = G__36147;
i__36135_36143 = G__36148;
continue;
} else {
var temp__5720__auto___36149 = cljs.core.seq.call(null,seq__36132_36140);
if(temp__5720__auto___36149){
var seq__36132_36150__$1 = temp__5720__auto___36149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36132_36150__$1)){
var c__4461__auto___36151 = cljs.core.chunk_first.call(null,seq__36132_36150__$1);
var G__36152 = cljs.core.chunk_rest.call(null,seq__36132_36150__$1);
var G__36153 = c__4461__auto___36151;
var G__36154 = cljs.core.count.call(null,c__4461__auto___36151);
var G__36155 = (0);
seq__36132_36140 = G__36152;
chunk__36133_36141 = G__36153;
count__36134_36142 = G__36154;
i__36135_36143 = G__36155;
continue;
} else {
var dep_36156 = cljs.core.first.call(null,seq__36132_36150__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_36156;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36156));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36156,(depth + (1)),state);
} else {
}


var G__36157 = cljs.core.next.call(null,seq__36132_36150__$1);
var G__36158 = null;
var G__36159 = (0);
var G__36160 = (0);
seq__36132_36140 = G__36157;
chunk__36133_36141 = G__36158;
count__36134_36142 = G__36159;
i__36135_36143 = G__36160;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36136){
var vec__36137 = p__36136;
var seq__36138 = cljs.core.seq.call(null,vec__36137);
var first__36139 = cljs.core.first.call(null,seq__36138);
var seq__36138__$1 = cljs.core.next.call(null,seq__36138);
var x = first__36139;
var xs = seq__36138__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36137,seq__36138,first__36139,seq__36138__$1,x,xs,get_deps__$1){
return (function (p1__36123_SHARP_){
return clojure.set.difference.call(null,p1__36123_SHARP_,x);
});})(vec__36137,seq__36138,first__36139,seq__36138__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36161 = cljs.core.seq.call(null,provides);
var chunk__36162 = null;
var count__36163 = (0);
var i__36164 = (0);
while(true){
if((i__36164 < count__36163)){
var prov = cljs.core._nth.call(null,chunk__36162,i__36164);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36165_36173 = cljs.core.seq.call(null,requires);
var chunk__36166_36174 = null;
var count__36167_36175 = (0);
var i__36168_36176 = (0);
while(true){
if((i__36168_36176 < count__36167_36175)){
var req_36177 = cljs.core._nth.call(null,chunk__36166_36174,i__36168_36176);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36177,prov);


var G__36178 = seq__36165_36173;
var G__36179 = chunk__36166_36174;
var G__36180 = count__36167_36175;
var G__36181 = (i__36168_36176 + (1));
seq__36165_36173 = G__36178;
chunk__36166_36174 = G__36179;
count__36167_36175 = G__36180;
i__36168_36176 = G__36181;
continue;
} else {
var temp__5720__auto___36182 = cljs.core.seq.call(null,seq__36165_36173);
if(temp__5720__auto___36182){
var seq__36165_36183__$1 = temp__5720__auto___36182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36165_36183__$1)){
var c__4461__auto___36184 = cljs.core.chunk_first.call(null,seq__36165_36183__$1);
var G__36185 = cljs.core.chunk_rest.call(null,seq__36165_36183__$1);
var G__36186 = c__4461__auto___36184;
var G__36187 = cljs.core.count.call(null,c__4461__auto___36184);
var G__36188 = (0);
seq__36165_36173 = G__36185;
chunk__36166_36174 = G__36186;
count__36167_36175 = G__36187;
i__36168_36176 = G__36188;
continue;
} else {
var req_36189 = cljs.core.first.call(null,seq__36165_36183__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36189,prov);


var G__36190 = cljs.core.next.call(null,seq__36165_36183__$1);
var G__36191 = null;
var G__36192 = (0);
var G__36193 = (0);
seq__36165_36173 = G__36190;
chunk__36166_36174 = G__36191;
count__36167_36175 = G__36192;
i__36168_36176 = G__36193;
continue;
}
} else {
}
}
break;
}


var G__36194 = seq__36161;
var G__36195 = chunk__36162;
var G__36196 = count__36163;
var G__36197 = (i__36164 + (1));
seq__36161 = G__36194;
chunk__36162 = G__36195;
count__36163 = G__36196;
i__36164 = G__36197;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36161);
if(temp__5720__auto__){
var seq__36161__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36161__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__36161__$1);
var G__36198 = cljs.core.chunk_rest.call(null,seq__36161__$1);
var G__36199 = c__4461__auto__;
var G__36200 = cljs.core.count.call(null,c__4461__auto__);
var G__36201 = (0);
seq__36161 = G__36198;
chunk__36162 = G__36199;
count__36163 = G__36200;
i__36164 = G__36201;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36161__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36169_36202 = cljs.core.seq.call(null,requires);
var chunk__36170_36203 = null;
var count__36171_36204 = (0);
var i__36172_36205 = (0);
while(true){
if((i__36172_36205 < count__36171_36204)){
var req_36206 = cljs.core._nth.call(null,chunk__36170_36203,i__36172_36205);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36206,prov);


var G__36207 = seq__36169_36202;
var G__36208 = chunk__36170_36203;
var G__36209 = count__36171_36204;
var G__36210 = (i__36172_36205 + (1));
seq__36169_36202 = G__36207;
chunk__36170_36203 = G__36208;
count__36171_36204 = G__36209;
i__36172_36205 = G__36210;
continue;
} else {
var temp__5720__auto___36211__$1 = cljs.core.seq.call(null,seq__36169_36202);
if(temp__5720__auto___36211__$1){
var seq__36169_36212__$1 = temp__5720__auto___36211__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36169_36212__$1)){
var c__4461__auto___36213 = cljs.core.chunk_first.call(null,seq__36169_36212__$1);
var G__36214 = cljs.core.chunk_rest.call(null,seq__36169_36212__$1);
var G__36215 = c__4461__auto___36213;
var G__36216 = cljs.core.count.call(null,c__4461__auto___36213);
var G__36217 = (0);
seq__36169_36202 = G__36214;
chunk__36170_36203 = G__36215;
count__36171_36204 = G__36216;
i__36172_36205 = G__36217;
continue;
} else {
var req_36218 = cljs.core.first.call(null,seq__36169_36212__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36218,prov);


var G__36219 = cljs.core.next.call(null,seq__36169_36212__$1);
var G__36220 = null;
var G__36221 = (0);
var G__36222 = (0);
seq__36169_36202 = G__36219;
chunk__36170_36203 = G__36220;
count__36171_36204 = G__36221;
i__36172_36205 = G__36222;
continue;
}
} else {
}
}
break;
}


var G__36223 = cljs.core.next.call(null,seq__36161__$1);
var G__36224 = null;
var G__36225 = (0);
var G__36226 = (0);
seq__36161 = G__36223;
chunk__36162 = G__36224;
count__36163 = G__36225;
i__36164 = G__36226;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36227_36231 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36228_36232 = null;
var count__36229_36233 = (0);
var i__36230_36234 = (0);
while(true){
if((i__36230_36234 < count__36229_36233)){
var ns_36235 = cljs.core._nth.call(null,chunk__36228_36232,i__36230_36234);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36235);


var G__36236 = seq__36227_36231;
var G__36237 = chunk__36228_36232;
var G__36238 = count__36229_36233;
var G__36239 = (i__36230_36234 + (1));
seq__36227_36231 = G__36236;
chunk__36228_36232 = G__36237;
count__36229_36233 = G__36238;
i__36230_36234 = G__36239;
continue;
} else {
var temp__5720__auto___36240 = cljs.core.seq.call(null,seq__36227_36231);
if(temp__5720__auto___36240){
var seq__36227_36241__$1 = temp__5720__auto___36240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36227_36241__$1)){
var c__4461__auto___36242 = cljs.core.chunk_first.call(null,seq__36227_36241__$1);
var G__36243 = cljs.core.chunk_rest.call(null,seq__36227_36241__$1);
var G__36244 = c__4461__auto___36242;
var G__36245 = cljs.core.count.call(null,c__4461__auto___36242);
var G__36246 = (0);
seq__36227_36231 = G__36243;
chunk__36228_36232 = G__36244;
count__36229_36233 = G__36245;
i__36230_36234 = G__36246;
continue;
} else {
var ns_36247 = cljs.core.first.call(null,seq__36227_36241__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36247);


var G__36248 = cljs.core.next.call(null,seq__36227_36241__$1);
var G__36249 = null;
var G__36250 = (0);
var G__36251 = (0);
seq__36227_36231 = G__36248;
chunk__36228_36232 = G__36249;
count__36229_36233 = G__36250;
i__36230_36234 = G__36251;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36252__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36253__i = 0, G__36253__a = new Array(arguments.length -  0);
while (G__36253__i < G__36253__a.length) {G__36253__a[G__36253__i] = arguments[G__36253__i + 0]; ++G__36253__i;}
  args = new cljs.core.IndexedSeq(G__36253__a,0,null);
} 
return G__36252__delegate.call(this,args);};
G__36252.cljs$lang$maxFixedArity = 0;
G__36252.cljs$lang$applyTo = (function (arglist__36254){
var args = cljs.core.seq(arglist__36254);
return G__36252__delegate(args);
});
G__36252.cljs$core$IFn$_invoke$arity$variadic = G__36252__delegate;
return G__36252;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__36255_SHARP_,p2__36256_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36255_SHARP_)),p2__36256_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__36257_SHARP_,p2__36258_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36257_SHARP_),p2__36258_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36259 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36259.addCallback(((function (G__36259){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36259))
);

G__36259.addErrback(((function (G__36259){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36259))
);

return G__36259;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36260){if((e36260 instanceof Error)){
var e = e36260;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36260;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36261){if((e36261 instanceof Error)){
var e = e36261;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36261;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36262 = cljs.core._EQ_;
var expr__36263 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36262.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36263))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36262.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36263))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36262.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36263))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__36262,expr__36263){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36262,expr__36263))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36265,callback){
var map__36266 = p__36265;
var map__36266__$1 = (((((!((map__36266 == null))))?(((((map__36266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36266):map__36266);
var file_msg = map__36266__$1;
var request_url = cljs.core.get.call(null,map__36266__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__36266,map__36266__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36266,map__36266__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__){
return (function (state_36304){
var state_val_36305 = (state_36304[(1)]);
if((state_val_36305 === (7))){
var inst_36300 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
var statearr_36306_36332 = state_36304__$1;
(statearr_36306_36332[(2)] = inst_36300);

(statearr_36306_36332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (1))){
var state_36304__$1 = state_36304;
var statearr_36307_36333 = state_36304__$1;
(statearr_36307_36333[(2)] = null);

(statearr_36307_36333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (4))){
var inst_36270 = (state_36304[(7)]);
var inst_36270__$1 = (state_36304[(2)]);
var state_36304__$1 = (function (){var statearr_36308 = state_36304;
(statearr_36308[(7)] = inst_36270__$1);

return statearr_36308;
})();
if(cljs.core.truth_(inst_36270__$1)){
var statearr_36309_36334 = state_36304__$1;
(statearr_36309_36334[(1)] = (5));

} else {
var statearr_36310_36335 = state_36304__$1;
(statearr_36310_36335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (15))){
var inst_36285 = (state_36304[(8)]);
var inst_36283 = (state_36304[(9)]);
var inst_36287 = inst_36285.call(null,inst_36283);
var state_36304__$1 = state_36304;
var statearr_36311_36336 = state_36304__$1;
(statearr_36311_36336[(2)] = inst_36287);

(statearr_36311_36336[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (13))){
var inst_36294 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
var statearr_36312_36337 = state_36304__$1;
(statearr_36312_36337[(2)] = inst_36294);

(statearr_36312_36337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (6))){
var state_36304__$1 = state_36304;
var statearr_36313_36338 = state_36304__$1;
(statearr_36313_36338[(2)] = null);

(statearr_36313_36338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (17))){
var inst_36291 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
var statearr_36314_36339 = state_36304__$1;
(statearr_36314_36339[(2)] = inst_36291);

(statearr_36314_36339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (3))){
var inst_36302 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36304__$1,inst_36302);
} else {
if((state_val_36305 === (12))){
var state_36304__$1 = state_36304;
var statearr_36315_36340 = state_36304__$1;
(statearr_36315_36340[(2)] = null);

(statearr_36315_36340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (2))){
var state_36304__$1 = state_36304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36304__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36305 === (11))){
var inst_36275 = (state_36304[(10)]);
var inst_36281 = figwheel.client.file_reloading.blocking_load.call(null,inst_36275);
var state_36304__$1 = state_36304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36304__$1,(14),inst_36281);
} else {
if((state_val_36305 === (9))){
var inst_36275 = (state_36304[(10)]);
var state_36304__$1 = state_36304;
if(cljs.core.truth_(inst_36275)){
var statearr_36316_36341 = state_36304__$1;
(statearr_36316_36341[(1)] = (11));

} else {
var statearr_36317_36342 = state_36304__$1;
(statearr_36317_36342[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (5))){
var inst_36276 = (state_36304[(11)]);
var inst_36270 = (state_36304[(7)]);
var inst_36275 = cljs.core.nth.call(null,inst_36270,(0),null);
var inst_36276__$1 = cljs.core.nth.call(null,inst_36270,(1),null);
var state_36304__$1 = (function (){var statearr_36318 = state_36304;
(statearr_36318[(10)] = inst_36275);

(statearr_36318[(11)] = inst_36276__$1);

return statearr_36318;
})();
if(cljs.core.truth_(inst_36276__$1)){
var statearr_36319_36343 = state_36304__$1;
(statearr_36319_36343[(1)] = (8));

} else {
var statearr_36320_36344 = state_36304__$1;
(statearr_36320_36344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (14))){
var inst_36285 = (state_36304[(8)]);
var inst_36275 = (state_36304[(10)]);
var inst_36283 = (state_36304[(2)]);
var inst_36284 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36285__$1 = cljs.core.get.call(null,inst_36284,inst_36275);
var state_36304__$1 = (function (){var statearr_36321 = state_36304;
(statearr_36321[(8)] = inst_36285__$1);

(statearr_36321[(9)] = inst_36283);

return statearr_36321;
})();
if(cljs.core.truth_(inst_36285__$1)){
var statearr_36322_36345 = state_36304__$1;
(statearr_36322_36345[(1)] = (15));

} else {
var statearr_36323_36346 = state_36304__$1;
(statearr_36323_36346[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (16))){
var inst_36283 = (state_36304[(9)]);
var inst_36289 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36283);
var state_36304__$1 = state_36304;
var statearr_36324_36347 = state_36304__$1;
(statearr_36324_36347[(2)] = inst_36289);

(statearr_36324_36347[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (10))){
var inst_36296 = (state_36304[(2)]);
var state_36304__$1 = (function (){var statearr_36325 = state_36304;
(statearr_36325[(12)] = inst_36296);

return statearr_36325;
})();
var statearr_36326_36348 = state_36304__$1;
(statearr_36326_36348[(2)] = null);

(statearr_36326_36348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (8))){
var inst_36276 = (state_36304[(11)]);
var inst_36278 = eval(inst_36276);
var state_36304__$1 = state_36304;
var statearr_36327_36349 = state_36304__$1;
(statearr_36327_36349[(2)] = inst_36278);

(statearr_36327_36349[(1)] = (10));


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
});})(c__31513__auto__))
;
return ((function (switch__31418__auto__,c__31513__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31419__auto__ = null;
var figwheel$client$file_reloading$state_machine__31419__auto____0 = (function (){
var statearr_36328 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36328[(0)] = figwheel$client$file_reloading$state_machine__31419__auto__);

(statearr_36328[(1)] = (1));

return statearr_36328;
});
var figwheel$client$file_reloading$state_machine__31419__auto____1 = (function (state_36304){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_36304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e36329){if((e36329 instanceof Object)){
var ex__31422__auto__ = e36329;
var statearr_36330_36350 = state_36304;
(statearr_36330_36350[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36351 = state_36304;
state_36304 = G__36351;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31419__auto__ = function(state_36304){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31419__auto____1.call(this,state_36304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31419__auto____0;
figwheel$client$file_reloading$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31419__auto____1;
return figwheel$client$file_reloading$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__))
})();
var state__31515__auto__ = (function (){var statearr_36331 = f__31514__auto__.call(null);
(statearr_36331[(6)] = c__31513__auto__);

return statearr_36331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__))
);

return c__31513__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36353 = arguments.length;
switch (G__36353) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36355,callback){
var map__36356 = p__36355;
var map__36356__$1 = (((((!((map__36356 == null))))?(((((map__36356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36356):map__36356);
var file_msg = map__36356__$1;
var namespace = cljs.core.get.call(null,map__36356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36356,map__36356__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36356,map__36356__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36358){
var map__36359 = p__36358;
var map__36359__$1 = (((((!((map__36359 == null))))?(((((map__36359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36359):map__36359);
var file_msg = map__36359__$1;
var namespace = cljs.core.get.call(null,map__36359__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36361){
var map__36362 = p__36361;
var map__36362__$1 = (((((!((map__36362 == null))))?(((((map__36362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36362):map__36362);
var file_msg = map__36362__$1;
var namespace = cljs.core.get.call(null,map__36362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36364,callback){
var map__36365 = p__36364;
var map__36365__$1 = (((((!((map__36365 == null))))?(((((map__36365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36365):map__36365);
var file_msg = map__36365__$1;
var request_url = cljs.core.get.call(null,map__36365__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36365__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31513__auto___36415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___36415,out){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___36415,out){
return (function (state_36400){
var state_val_36401 = (state_36400[(1)]);
if((state_val_36401 === (1))){
var inst_36374 = cljs.core.seq.call(null,files);
var inst_36375 = cljs.core.first.call(null,inst_36374);
var inst_36376 = cljs.core.next.call(null,inst_36374);
var inst_36377 = files;
var state_36400__$1 = (function (){var statearr_36402 = state_36400;
(statearr_36402[(7)] = inst_36375);

(statearr_36402[(8)] = inst_36376);

(statearr_36402[(9)] = inst_36377);

return statearr_36402;
})();
var statearr_36403_36416 = state_36400__$1;
(statearr_36403_36416[(2)] = null);

(statearr_36403_36416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (2))){
var inst_36377 = (state_36400[(9)]);
var inst_36383 = (state_36400[(10)]);
var inst_36382 = cljs.core.seq.call(null,inst_36377);
var inst_36383__$1 = cljs.core.first.call(null,inst_36382);
var inst_36384 = cljs.core.next.call(null,inst_36382);
var inst_36385 = (inst_36383__$1 == null);
var inst_36386 = cljs.core.not.call(null,inst_36385);
var state_36400__$1 = (function (){var statearr_36404 = state_36400;
(statearr_36404[(11)] = inst_36384);

(statearr_36404[(10)] = inst_36383__$1);

return statearr_36404;
})();
if(inst_36386){
var statearr_36405_36417 = state_36400__$1;
(statearr_36405_36417[(1)] = (4));

} else {
var statearr_36406_36418 = state_36400__$1;
(statearr_36406_36418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (3))){
var inst_36398 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36400__$1,inst_36398);
} else {
if((state_val_36401 === (4))){
var inst_36383 = (state_36400[(10)]);
var inst_36388 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36383);
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36400__$1,(7),inst_36388);
} else {
if((state_val_36401 === (5))){
var inst_36394 = cljs.core.async.close_BANG_.call(null,out);
var state_36400__$1 = state_36400;
var statearr_36407_36419 = state_36400__$1;
(statearr_36407_36419[(2)] = inst_36394);

(statearr_36407_36419[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (6))){
var inst_36396 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
var statearr_36408_36420 = state_36400__$1;
(statearr_36408_36420[(2)] = inst_36396);

(statearr_36408_36420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (7))){
var inst_36384 = (state_36400[(11)]);
var inst_36390 = (state_36400[(2)]);
var inst_36391 = cljs.core.async.put_BANG_.call(null,out,inst_36390);
var inst_36377 = inst_36384;
var state_36400__$1 = (function (){var statearr_36409 = state_36400;
(statearr_36409[(9)] = inst_36377);

(statearr_36409[(12)] = inst_36391);

return statearr_36409;
})();
var statearr_36410_36421 = state_36400__$1;
(statearr_36410_36421[(2)] = null);

(statearr_36410_36421[(1)] = (2));


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
});})(c__31513__auto___36415,out))
;
return ((function (switch__31418__auto__,c__31513__auto___36415,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____0 = (function (){
var statearr_36411 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36411[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__);

(statearr_36411[(1)] = (1));

return statearr_36411;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____1 = (function (state_36400){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_36400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e36412){if((e36412 instanceof Object)){
var ex__31422__auto__ = e36412;
var statearr_36413_36422 = state_36400;
(statearr_36413_36422[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36423 = state_36400;
state_36400 = G__36423;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__ = function(state_36400){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____1.call(this,state_36400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___36415,out))
})();
var state__31515__auto__ = (function (){var statearr_36414 = f__31514__auto__.call(null);
(statearr_36414[(6)] = c__31513__auto___36415);

return statearr_36414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___36415,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36424,opts){
var map__36425 = p__36424;
var map__36425__$1 = (((((!((map__36425 == null))))?(((((map__36425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36425):map__36425);
var eval_body = cljs.core.get.call(null,map__36425__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36425__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36427){var e = e36427;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36428_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36428_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36429){
var vec__36430 = p__36429;
var k = cljs.core.nth.call(null,vec__36430,(0),null);
var v = cljs.core.nth.call(null,vec__36430,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36433){
var vec__36434 = p__36433;
var k = cljs.core.nth.call(null,vec__36434,(0),null);
var v = cljs.core.nth.call(null,vec__36434,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36440,p__36441){
var map__36442 = p__36440;
var map__36442__$1 = (((((!((map__36442 == null))))?(((((map__36442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36442):map__36442);
var opts = map__36442__$1;
var before_jsload = cljs.core.get.call(null,map__36442__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36442__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36442__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36443 = p__36441;
var map__36443__$1 = (((((!((map__36443 == null))))?(((((map__36443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36443):map__36443);
var msg = map__36443__$1;
var files = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36597){
var state_val_36598 = (state_36597[(1)]);
if((state_val_36598 === (7))){
var inst_36460 = (state_36597[(7)]);
var inst_36459 = (state_36597[(8)]);
var inst_36458 = (state_36597[(9)]);
var inst_36457 = (state_36597[(10)]);
var inst_36465 = cljs.core._nth.call(null,inst_36458,inst_36460);
var inst_36466 = figwheel.client.file_reloading.eval_body.call(null,inst_36465,opts);
var inst_36467 = (inst_36460 + (1));
var tmp36599 = inst_36459;
var tmp36600 = inst_36458;
var tmp36601 = inst_36457;
var inst_36457__$1 = tmp36601;
var inst_36458__$1 = tmp36600;
var inst_36459__$1 = tmp36599;
var inst_36460__$1 = inst_36467;
var state_36597__$1 = (function (){var statearr_36602 = state_36597;
(statearr_36602[(11)] = inst_36466);

(statearr_36602[(7)] = inst_36460__$1);

(statearr_36602[(8)] = inst_36459__$1);

(statearr_36602[(9)] = inst_36458__$1);

(statearr_36602[(10)] = inst_36457__$1);

return statearr_36602;
})();
var statearr_36603_36686 = state_36597__$1;
(statearr_36603_36686[(2)] = null);

(statearr_36603_36686[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (20))){
var inst_36500 = (state_36597[(12)]);
var inst_36508 = figwheel.client.file_reloading.sort_files.call(null,inst_36500);
var state_36597__$1 = state_36597;
var statearr_36604_36687 = state_36597__$1;
(statearr_36604_36687[(2)] = inst_36508);

(statearr_36604_36687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (27))){
var state_36597__$1 = state_36597;
var statearr_36605_36688 = state_36597__$1;
(statearr_36605_36688[(2)] = null);

(statearr_36605_36688[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (1))){
var inst_36449 = (state_36597[(13)]);
var inst_36446 = before_jsload.call(null,files);
var inst_36447 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36448 = (function (){return ((function (inst_36449,inst_36446,inst_36447,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36437_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36437_SHARP_);
});
;})(inst_36449,inst_36446,inst_36447,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36449__$1 = cljs.core.filter.call(null,inst_36448,files);
var inst_36450 = cljs.core.not_empty.call(null,inst_36449__$1);
var state_36597__$1 = (function (){var statearr_36606 = state_36597;
(statearr_36606[(14)] = inst_36447);

(statearr_36606[(15)] = inst_36446);

(statearr_36606[(13)] = inst_36449__$1);

return statearr_36606;
})();
if(cljs.core.truth_(inst_36450)){
var statearr_36607_36689 = state_36597__$1;
(statearr_36607_36689[(1)] = (2));

} else {
var statearr_36608_36690 = state_36597__$1;
(statearr_36608_36690[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (24))){
var state_36597__$1 = state_36597;
var statearr_36609_36691 = state_36597__$1;
(statearr_36609_36691[(2)] = null);

(statearr_36609_36691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (39))){
var inst_36550 = (state_36597[(16)]);
var state_36597__$1 = state_36597;
var statearr_36610_36692 = state_36597__$1;
(statearr_36610_36692[(2)] = inst_36550);

(statearr_36610_36692[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (46))){
var inst_36592 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36611_36693 = state_36597__$1;
(statearr_36611_36693[(2)] = inst_36592);

(statearr_36611_36693[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (4))){
var inst_36494 = (state_36597[(2)]);
var inst_36495 = cljs.core.List.EMPTY;
var inst_36496 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36495);
var inst_36497 = (function (){return ((function (inst_36494,inst_36495,inst_36496,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36438_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36438_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36438_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36438_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_36494,inst_36495,inst_36496,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36498 = cljs.core.filter.call(null,inst_36497,files);
var inst_36499 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36500 = cljs.core.concat.call(null,inst_36498,inst_36499);
var state_36597__$1 = (function (){var statearr_36612 = state_36597;
(statearr_36612[(17)] = inst_36494);

(statearr_36612[(18)] = inst_36496);

(statearr_36612[(12)] = inst_36500);

return statearr_36612;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36613_36694 = state_36597__$1;
(statearr_36613_36694[(1)] = (16));

} else {
var statearr_36614_36695 = state_36597__$1;
(statearr_36614_36695[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (15))){
var inst_36484 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36615_36696 = state_36597__$1;
(statearr_36615_36696[(2)] = inst_36484);

(statearr_36615_36696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (21))){
var inst_36510 = (state_36597[(19)]);
var inst_36510__$1 = (state_36597[(2)]);
var inst_36511 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36510__$1);
var state_36597__$1 = (function (){var statearr_36616 = state_36597;
(statearr_36616[(19)] = inst_36510__$1);

return statearr_36616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36597__$1,(22),inst_36511);
} else {
if((state_val_36598 === (31))){
var inst_36595 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36597__$1,inst_36595);
} else {
if((state_val_36598 === (32))){
var inst_36550 = (state_36597[(16)]);
var inst_36555 = inst_36550.cljs$lang$protocol_mask$partition0$;
var inst_36556 = (inst_36555 & (64));
var inst_36557 = inst_36550.cljs$core$ISeq$;
var inst_36558 = (cljs.core.PROTOCOL_SENTINEL === inst_36557);
var inst_36559 = ((inst_36556) || (inst_36558));
var state_36597__$1 = state_36597;
if(cljs.core.truth_(inst_36559)){
var statearr_36617_36697 = state_36597__$1;
(statearr_36617_36697[(1)] = (35));

} else {
var statearr_36618_36698 = state_36597__$1;
(statearr_36618_36698[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (40))){
var inst_36572 = (state_36597[(20)]);
var inst_36571 = (state_36597[(2)]);
var inst_36572__$1 = cljs.core.get.call(null,inst_36571,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36573 = cljs.core.get.call(null,inst_36571,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36574 = cljs.core.not_empty.call(null,inst_36572__$1);
var state_36597__$1 = (function (){var statearr_36619 = state_36597;
(statearr_36619[(21)] = inst_36573);

(statearr_36619[(20)] = inst_36572__$1);

return statearr_36619;
})();
if(cljs.core.truth_(inst_36574)){
var statearr_36620_36699 = state_36597__$1;
(statearr_36620_36699[(1)] = (41));

} else {
var statearr_36621_36700 = state_36597__$1;
(statearr_36621_36700[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (33))){
var state_36597__$1 = state_36597;
var statearr_36622_36701 = state_36597__$1;
(statearr_36622_36701[(2)] = false);

(statearr_36622_36701[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (13))){
var inst_36470 = (state_36597[(22)]);
var inst_36474 = cljs.core.chunk_first.call(null,inst_36470);
var inst_36475 = cljs.core.chunk_rest.call(null,inst_36470);
var inst_36476 = cljs.core.count.call(null,inst_36474);
var inst_36457 = inst_36475;
var inst_36458 = inst_36474;
var inst_36459 = inst_36476;
var inst_36460 = (0);
var state_36597__$1 = (function (){var statearr_36623 = state_36597;
(statearr_36623[(7)] = inst_36460);

(statearr_36623[(8)] = inst_36459);

(statearr_36623[(9)] = inst_36458);

(statearr_36623[(10)] = inst_36457);

return statearr_36623;
})();
var statearr_36624_36702 = state_36597__$1;
(statearr_36624_36702[(2)] = null);

(statearr_36624_36702[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (22))){
var inst_36510 = (state_36597[(19)]);
var inst_36514 = (state_36597[(23)]);
var inst_36518 = (state_36597[(24)]);
var inst_36513 = (state_36597[(25)]);
var inst_36513__$1 = (state_36597[(2)]);
var inst_36514__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36513__$1);
var inst_36515 = (function (){var all_files = inst_36510;
var res_SINGLEQUOTE_ = inst_36513__$1;
var res = inst_36514__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36510,inst_36514,inst_36518,inst_36513,inst_36513__$1,inst_36514__$1,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36439_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36439_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36510,inst_36514,inst_36518,inst_36513,inst_36513__$1,inst_36514__$1,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36516 = cljs.core.filter.call(null,inst_36515,inst_36513__$1);
var inst_36517 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36518__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36517);
var inst_36519 = cljs.core.not_empty.call(null,inst_36518__$1);
var state_36597__$1 = (function (){var statearr_36625 = state_36597;
(statearr_36625[(26)] = inst_36516);

(statearr_36625[(23)] = inst_36514__$1);

(statearr_36625[(24)] = inst_36518__$1);

(statearr_36625[(25)] = inst_36513__$1);

return statearr_36625;
})();
if(cljs.core.truth_(inst_36519)){
var statearr_36626_36703 = state_36597__$1;
(statearr_36626_36703[(1)] = (23));

} else {
var statearr_36627_36704 = state_36597__$1;
(statearr_36627_36704[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (36))){
var state_36597__$1 = state_36597;
var statearr_36628_36705 = state_36597__$1;
(statearr_36628_36705[(2)] = false);

(statearr_36628_36705[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (41))){
var inst_36572 = (state_36597[(20)]);
var inst_36576 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36577 = cljs.core.map.call(null,inst_36576,inst_36572);
var inst_36578 = cljs.core.pr_str.call(null,inst_36577);
var inst_36579 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36578)].join('');
var inst_36580 = figwheel.client.utils.log.call(null,inst_36579);
var state_36597__$1 = state_36597;
var statearr_36629_36706 = state_36597__$1;
(statearr_36629_36706[(2)] = inst_36580);

(statearr_36629_36706[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (43))){
var inst_36573 = (state_36597[(21)]);
var inst_36583 = (state_36597[(2)]);
var inst_36584 = cljs.core.not_empty.call(null,inst_36573);
var state_36597__$1 = (function (){var statearr_36630 = state_36597;
(statearr_36630[(27)] = inst_36583);

return statearr_36630;
})();
if(cljs.core.truth_(inst_36584)){
var statearr_36631_36707 = state_36597__$1;
(statearr_36631_36707[(1)] = (44));

} else {
var statearr_36632_36708 = state_36597__$1;
(statearr_36632_36708[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (29))){
var inst_36516 = (state_36597[(26)]);
var inst_36550 = (state_36597[(16)]);
var inst_36510 = (state_36597[(19)]);
var inst_36514 = (state_36597[(23)]);
var inst_36518 = (state_36597[(24)]);
var inst_36513 = (state_36597[(25)]);
var inst_36546 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36549 = (function (){var all_files = inst_36510;
var res_SINGLEQUOTE_ = inst_36513;
var res = inst_36514;
var files_not_loaded = inst_36516;
var dependencies_that_loaded = inst_36518;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36516,inst_36550,inst_36510,inst_36514,inst_36518,inst_36513,inst_36546,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36548){
var map__36633 = p__36548;
var map__36633__$1 = (((((!((map__36633 == null))))?(((((map__36633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36633):map__36633);
var namespace = cljs.core.get.call(null,map__36633__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36516,inst_36550,inst_36510,inst_36514,inst_36518,inst_36513,inst_36546,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36550__$1 = cljs.core.group_by.call(null,inst_36549,inst_36516);
var inst_36552 = (inst_36550__$1 == null);
var inst_36553 = cljs.core.not.call(null,inst_36552);
var state_36597__$1 = (function (){var statearr_36635 = state_36597;
(statearr_36635[(16)] = inst_36550__$1);

(statearr_36635[(28)] = inst_36546);

return statearr_36635;
})();
if(inst_36553){
var statearr_36636_36709 = state_36597__$1;
(statearr_36636_36709[(1)] = (32));

} else {
var statearr_36637_36710 = state_36597__$1;
(statearr_36637_36710[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (44))){
var inst_36573 = (state_36597[(21)]);
var inst_36586 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36573);
var inst_36587 = cljs.core.pr_str.call(null,inst_36586);
var inst_36588 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36587)].join('');
var inst_36589 = figwheel.client.utils.log.call(null,inst_36588);
var state_36597__$1 = state_36597;
var statearr_36638_36711 = state_36597__$1;
(statearr_36638_36711[(2)] = inst_36589);

(statearr_36638_36711[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (6))){
var inst_36491 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36639_36712 = state_36597__$1;
(statearr_36639_36712[(2)] = inst_36491);

(statearr_36639_36712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (28))){
var inst_36516 = (state_36597[(26)]);
var inst_36543 = (state_36597[(2)]);
var inst_36544 = cljs.core.not_empty.call(null,inst_36516);
var state_36597__$1 = (function (){var statearr_36640 = state_36597;
(statearr_36640[(29)] = inst_36543);

return statearr_36640;
})();
if(cljs.core.truth_(inst_36544)){
var statearr_36641_36713 = state_36597__$1;
(statearr_36641_36713[(1)] = (29));

} else {
var statearr_36642_36714 = state_36597__$1;
(statearr_36642_36714[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (25))){
var inst_36514 = (state_36597[(23)]);
var inst_36530 = (state_36597[(2)]);
var inst_36531 = cljs.core.not_empty.call(null,inst_36514);
var state_36597__$1 = (function (){var statearr_36643 = state_36597;
(statearr_36643[(30)] = inst_36530);

return statearr_36643;
})();
if(cljs.core.truth_(inst_36531)){
var statearr_36644_36715 = state_36597__$1;
(statearr_36644_36715[(1)] = (26));

} else {
var statearr_36645_36716 = state_36597__$1;
(statearr_36645_36716[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (34))){
var inst_36566 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
if(cljs.core.truth_(inst_36566)){
var statearr_36646_36717 = state_36597__$1;
(statearr_36646_36717[(1)] = (38));

} else {
var statearr_36647_36718 = state_36597__$1;
(statearr_36647_36718[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (17))){
var state_36597__$1 = state_36597;
var statearr_36648_36719 = state_36597__$1;
(statearr_36648_36719[(2)] = recompile_dependents);

(statearr_36648_36719[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (3))){
var state_36597__$1 = state_36597;
var statearr_36649_36720 = state_36597__$1;
(statearr_36649_36720[(2)] = null);

(statearr_36649_36720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (12))){
var inst_36487 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36650_36721 = state_36597__$1;
(statearr_36650_36721[(2)] = inst_36487);

(statearr_36650_36721[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (2))){
var inst_36449 = (state_36597[(13)]);
var inst_36456 = cljs.core.seq.call(null,inst_36449);
var inst_36457 = inst_36456;
var inst_36458 = null;
var inst_36459 = (0);
var inst_36460 = (0);
var state_36597__$1 = (function (){var statearr_36651 = state_36597;
(statearr_36651[(7)] = inst_36460);

(statearr_36651[(8)] = inst_36459);

(statearr_36651[(9)] = inst_36458);

(statearr_36651[(10)] = inst_36457);

return statearr_36651;
})();
var statearr_36652_36722 = state_36597__$1;
(statearr_36652_36722[(2)] = null);

(statearr_36652_36722[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (23))){
var inst_36516 = (state_36597[(26)]);
var inst_36510 = (state_36597[(19)]);
var inst_36514 = (state_36597[(23)]);
var inst_36518 = (state_36597[(24)]);
var inst_36513 = (state_36597[(25)]);
var inst_36521 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36523 = (function (){var all_files = inst_36510;
var res_SINGLEQUOTE_ = inst_36513;
var res = inst_36514;
var files_not_loaded = inst_36516;
var dependencies_that_loaded = inst_36518;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36516,inst_36510,inst_36514,inst_36518,inst_36513,inst_36521,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36522){
var map__36653 = p__36522;
var map__36653__$1 = (((((!((map__36653 == null))))?(((((map__36653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36653):map__36653);
var request_url = cljs.core.get.call(null,map__36653__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36516,inst_36510,inst_36514,inst_36518,inst_36513,inst_36521,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36524 = cljs.core.reverse.call(null,inst_36518);
var inst_36525 = cljs.core.map.call(null,inst_36523,inst_36524);
var inst_36526 = cljs.core.pr_str.call(null,inst_36525);
var inst_36527 = figwheel.client.utils.log.call(null,inst_36526);
var state_36597__$1 = (function (){var statearr_36655 = state_36597;
(statearr_36655[(31)] = inst_36521);

return statearr_36655;
})();
var statearr_36656_36723 = state_36597__$1;
(statearr_36656_36723[(2)] = inst_36527);

(statearr_36656_36723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (35))){
var state_36597__$1 = state_36597;
var statearr_36657_36724 = state_36597__$1;
(statearr_36657_36724[(2)] = true);

(statearr_36657_36724[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (19))){
var inst_36500 = (state_36597[(12)]);
var inst_36506 = figwheel.client.file_reloading.expand_files.call(null,inst_36500);
var state_36597__$1 = state_36597;
var statearr_36658_36725 = state_36597__$1;
(statearr_36658_36725[(2)] = inst_36506);

(statearr_36658_36725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (11))){
var state_36597__$1 = state_36597;
var statearr_36659_36726 = state_36597__$1;
(statearr_36659_36726[(2)] = null);

(statearr_36659_36726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (9))){
var inst_36489 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36660_36727 = state_36597__$1;
(statearr_36660_36727[(2)] = inst_36489);

(statearr_36660_36727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (5))){
var inst_36460 = (state_36597[(7)]);
var inst_36459 = (state_36597[(8)]);
var inst_36462 = (inst_36460 < inst_36459);
var inst_36463 = inst_36462;
var state_36597__$1 = state_36597;
if(cljs.core.truth_(inst_36463)){
var statearr_36661_36728 = state_36597__$1;
(statearr_36661_36728[(1)] = (7));

} else {
var statearr_36662_36729 = state_36597__$1;
(statearr_36662_36729[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (14))){
var inst_36470 = (state_36597[(22)]);
var inst_36479 = cljs.core.first.call(null,inst_36470);
var inst_36480 = figwheel.client.file_reloading.eval_body.call(null,inst_36479,opts);
var inst_36481 = cljs.core.next.call(null,inst_36470);
var inst_36457 = inst_36481;
var inst_36458 = null;
var inst_36459 = (0);
var inst_36460 = (0);
var state_36597__$1 = (function (){var statearr_36663 = state_36597;
(statearr_36663[(32)] = inst_36480);

(statearr_36663[(7)] = inst_36460);

(statearr_36663[(8)] = inst_36459);

(statearr_36663[(9)] = inst_36458);

(statearr_36663[(10)] = inst_36457);

return statearr_36663;
})();
var statearr_36664_36730 = state_36597__$1;
(statearr_36664_36730[(2)] = null);

(statearr_36664_36730[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (45))){
var state_36597__$1 = state_36597;
var statearr_36665_36731 = state_36597__$1;
(statearr_36665_36731[(2)] = null);

(statearr_36665_36731[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (26))){
var inst_36516 = (state_36597[(26)]);
var inst_36510 = (state_36597[(19)]);
var inst_36514 = (state_36597[(23)]);
var inst_36518 = (state_36597[(24)]);
var inst_36513 = (state_36597[(25)]);
var inst_36533 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36535 = (function (){var all_files = inst_36510;
var res_SINGLEQUOTE_ = inst_36513;
var res = inst_36514;
var files_not_loaded = inst_36516;
var dependencies_that_loaded = inst_36518;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36516,inst_36510,inst_36514,inst_36518,inst_36513,inst_36533,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36534){
var map__36666 = p__36534;
var map__36666__$1 = (((((!((map__36666 == null))))?(((((map__36666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36666):map__36666);
var namespace = cljs.core.get.call(null,map__36666__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36666__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36516,inst_36510,inst_36514,inst_36518,inst_36513,inst_36533,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36536 = cljs.core.map.call(null,inst_36535,inst_36514);
var inst_36537 = cljs.core.pr_str.call(null,inst_36536);
var inst_36538 = figwheel.client.utils.log.call(null,inst_36537);
var inst_36539 = (function (){var all_files = inst_36510;
var res_SINGLEQUOTE_ = inst_36513;
var res = inst_36514;
var files_not_loaded = inst_36516;
var dependencies_that_loaded = inst_36518;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36516,inst_36510,inst_36514,inst_36518,inst_36513,inst_36533,inst_36535,inst_36536,inst_36537,inst_36538,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36516,inst_36510,inst_36514,inst_36518,inst_36513,inst_36533,inst_36535,inst_36536,inst_36537,inst_36538,state_val_36598,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36540 = setTimeout(inst_36539,(10));
var state_36597__$1 = (function (){var statearr_36668 = state_36597;
(statearr_36668[(33)] = inst_36533);

(statearr_36668[(34)] = inst_36538);

return statearr_36668;
})();
var statearr_36669_36732 = state_36597__$1;
(statearr_36669_36732[(2)] = inst_36540);

(statearr_36669_36732[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (16))){
var state_36597__$1 = state_36597;
var statearr_36670_36733 = state_36597__$1;
(statearr_36670_36733[(2)] = reload_dependents);

(statearr_36670_36733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (38))){
var inst_36550 = (state_36597[(16)]);
var inst_36568 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36550);
var state_36597__$1 = state_36597;
var statearr_36671_36734 = state_36597__$1;
(statearr_36671_36734[(2)] = inst_36568);

(statearr_36671_36734[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (30))){
var state_36597__$1 = state_36597;
var statearr_36672_36735 = state_36597__$1;
(statearr_36672_36735[(2)] = null);

(statearr_36672_36735[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (10))){
var inst_36470 = (state_36597[(22)]);
var inst_36472 = cljs.core.chunked_seq_QMARK_.call(null,inst_36470);
var state_36597__$1 = state_36597;
if(inst_36472){
var statearr_36673_36736 = state_36597__$1;
(statearr_36673_36736[(1)] = (13));

} else {
var statearr_36674_36737 = state_36597__$1;
(statearr_36674_36737[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (18))){
var inst_36504 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
if(cljs.core.truth_(inst_36504)){
var statearr_36675_36738 = state_36597__$1;
(statearr_36675_36738[(1)] = (19));

} else {
var statearr_36676_36739 = state_36597__$1;
(statearr_36676_36739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (42))){
var state_36597__$1 = state_36597;
var statearr_36677_36740 = state_36597__$1;
(statearr_36677_36740[(2)] = null);

(statearr_36677_36740[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (37))){
var inst_36563 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36678_36741 = state_36597__$1;
(statearr_36678_36741[(2)] = inst_36563);

(statearr_36678_36741[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (8))){
var inst_36470 = (state_36597[(22)]);
var inst_36457 = (state_36597[(10)]);
var inst_36470__$1 = cljs.core.seq.call(null,inst_36457);
var state_36597__$1 = (function (){var statearr_36679 = state_36597;
(statearr_36679[(22)] = inst_36470__$1);

return statearr_36679;
})();
if(inst_36470__$1){
var statearr_36680_36742 = state_36597__$1;
(statearr_36680_36742[(1)] = (10));

} else {
var statearr_36681_36743 = state_36597__$1;
(statearr_36681_36743[(1)] = (11));

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
});})(c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31418__auto__,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____0 = (function (){
var statearr_36682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36682[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__);

(statearr_36682[(1)] = (1));

return statearr_36682;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____1 = (function (state_36597){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_36597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e36683){if((e36683 instanceof Object)){
var ex__31422__auto__ = e36683;
var statearr_36684_36744 = state_36597;
(statearr_36684_36744[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36745 = state_36597;
state_36597 = G__36745;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__ = function(state_36597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____1.call(this,state_36597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31515__auto__ = (function (){var statearr_36685 = f__31514__auto__.call(null);
(statearr_36685[(6)] = c__31513__auto__);

return statearr_36685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__,map__36442,map__36442__$1,opts,before_jsload,on_jsload,reload_dependents,map__36443,map__36443__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31513__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36748,link){
var map__36749 = p__36748;
var map__36749__$1 = (((((!((map__36749 == null))))?(((((map__36749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36749):map__36749);
var file = cljs.core.get.call(null,map__36749__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__36749,map__36749__$1,file){
return (function (p1__36746_SHARP_,p2__36747_SHARP_){
if(cljs.core._EQ_.call(null,p1__36746_SHARP_,p2__36747_SHARP_)){
return p1__36746_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__36749,map__36749__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36752){
var map__36753 = p__36752;
var map__36753__$1 = (((((!((map__36753 == null))))?(((((map__36753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36753):map__36753);
var match_length = cljs.core.get.call(null,map__36753__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36753__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36751_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36751_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36755_SHARP_,p2__36756_SHARP_){
return cljs.core.assoc.call(null,p1__36755_SHARP_,cljs.core.get.call(null,p2__36756_SHARP_,key),p2__36756_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36757 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36757);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36757);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36758,p__36759){
var map__36760 = p__36758;
var map__36760__$1 = (((((!((map__36760 == null))))?(((((map__36760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36760):map__36760);
var on_cssload = cljs.core.get.call(null,map__36760__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36761 = p__36759;
var map__36761__$1 = (((((!((map__36761 == null))))?(((((map__36761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36761):map__36761);
var files_msg = map__36761__$1;
var files = cljs.core.get.call(null,map__36761__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
