// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37561){
var map__37562 = p__37561;
var map__37562__$1 = (((((!((map__37562 == null))))?(((((map__37562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37562):map__37562);
var m = map__37562__$1;
var n = cljs.core.get.call(null,map__37562__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37562__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37564_37586 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37565_37587 = null;
var count__37566_37588 = (0);
var i__37567_37589 = (0);
while(true){
if((i__37567_37589 < count__37566_37588)){
var f_37590 = cljs.core._nth.call(null,chunk__37565_37587,i__37567_37589);
cljs.core.println.call(null,"  ",f_37590);


var G__37591 = seq__37564_37586;
var G__37592 = chunk__37565_37587;
var G__37593 = count__37566_37588;
var G__37594 = (i__37567_37589 + (1));
seq__37564_37586 = G__37591;
chunk__37565_37587 = G__37592;
count__37566_37588 = G__37593;
i__37567_37589 = G__37594;
continue;
} else {
var temp__5720__auto___37595 = cljs.core.seq.call(null,seq__37564_37586);
if(temp__5720__auto___37595){
var seq__37564_37596__$1 = temp__5720__auto___37595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37564_37596__$1)){
var c__4461__auto___37597 = cljs.core.chunk_first.call(null,seq__37564_37596__$1);
var G__37598 = cljs.core.chunk_rest.call(null,seq__37564_37596__$1);
var G__37599 = c__4461__auto___37597;
var G__37600 = cljs.core.count.call(null,c__4461__auto___37597);
var G__37601 = (0);
seq__37564_37586 = G__37598;
chunk__37565_37587 = G__37599;
count__37566_37588 = G__37600;
i__37567_37589 = G__37601;
continue;
} else {
var f_37602 = cljs.core.first.call(null,seq__37564_37596__$1);
cljs.core.println.call(null,"  ",f_37602);


var G__37603 = cljs.core.next.call(null,seq__37564_37596__$1);
var G__37604 = null;
var G__37605 = (0);
var G__37606 = (0);
seq__37564_37586 = G__37603;
chunk__37565_37587 = G__37604;
count__37566_37588 = G__37605;
i__37567_37589 = G__37606;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37607 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37607);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37607)))?cljs.core.second.call(null,arglists_37607):arglists_37607));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37568_37608 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37569_37609 = null;
var count__37570_37610 = (0);
var i__37571_37611 = (0);
while(true){
if((i__37571_37611 < count__37570_37610)){
var vec__37572_37612 = cljs.core._nth.call(null,chunk__37569_37609,i__37571_37611);
var name_37613 = cljs.core.nth.call(null,vec__37572_37612,(0),null);
var map__37575_37614 = cljs.core.nth.call(null,vec__37572_37612,(1),null);
var map__37575_37615__$1 = (((((!((map__37575_37614 == null))))?(((((map__37575_37614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37575_37614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37575_37614):map__37575_37614);
var doc_37616 = cljs.core.get.call(null,map__37575_37615__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37617 = cljs.core.get.call(null,map__37575_37615__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37613);

cljs.core.println.call(null," ",arglists_37617);

if(cljs.core.truth_(doc_37616)){
cljs.core.println.call(null," ",doc_37616);
} else {
}


var G__37618 = seq__37568_37608;
var G__37619 = chunk__37569_37609;
var G__37620 = count__37570_37610;
var G__37621 = (i__37571_37611 + (1));
seq__37568_37608 = G__37618;
chunk__37569_37609 = G__37619;
count__37570_37610 = G__37620;
i__37571_37611 = G__37621;
continue;
} else {
var temp__5720__auto___37622 = cljs.core.seq.call(null,seq__37568_37608);
if(temp__5720__auto___37622){
var seq__37568_37623__$1 = temp__5720__auto___37622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37568_37623__$1)){
var c__4461__auto___37624 = cljs.core.chunk_first.call(null,seq__37568_37623__$1);
var G__37625 = cljs.core.chunk_rest.call(null,seq__37568_37623__$1);
var G__37626 = c__4461__auto___37624;
var G__37627 = cljs.core.count.call(null,c__4461__auto___37624);
var G__37628 = (0);
seq__37568_37608 = G__37625;
chunk__37569_37609 = G__37626;
count__37570_37610 = G__37627;
i__37571_37611 = G__37628;
continue;
} else {
var vec__37577_37629 = cljs.core.first.call(null,seq__37568_37623__$1);
var name_37630 = cljs.core.nth.call(null,vec__37577_37629,(0),null);
var map__37580_37631 = cljs.core.nth.call(null,vec__37577_37629,(1),null);
var map__37580_37632__$1 = (((((!((map__37580_37631 == null))))?(((((map__37580_37631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37580_37631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37580_37631):map__37580_37631);
var doc_37633 = cljs.core.get.call(null,map__37580_37632__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37634 = cljs.core.get.call(null,map__37580_37632__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37630);

cljs.core.println.call(null," ",arglists_37634);

if(cljs.core.truth_(doc_37633)){
cljs.core.println.call(null," ",doc_37633);
} else {
}


var G__37635 = cljs.core.next.call(null,seq__37568_37623__$1);
var G__37636 = null;
var G__37637 = (0);
var G__37638 = (0);
seq__37568_37608 = G__37635;
chunk__37569_37609 = G__37636;
count__37570_37610 = G__37637;
i__37571_37611 = G__37638;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__37582 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37583 = null;
var count__37584 = (0);
var i__37585 = (0);
while(true){
if((i__37585 < count__37584)){
var role = cljs.core._nth.call(null,chunk__37583,i__37585);
var temp__5720__auto___37639__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___37639__$1)){
var spec_37640 = temp__5720__auto___37639__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37640));
} else {
}


var G__37641 = seq__37582;
var G__37642 = chunk__37583;
var G__37643 = count__37584;
var G__37644 = (i__37585 + (1));
seq__37582 = G__37641;
chunk__37583 = G__37642;
count__37584 = G__37643;
i__37585 = G__37644;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__37582);
if(temp__5720__auto____$1){
var seq__37582__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37582__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__37582__$1);
var G__37645 = cljs.core.chunk_rest.call(null,seq__37582__$1);
var G__37646 = c__4461__auto__;
var G__37647 = cljs.core.count.call(null,c__4461__auto__);
var G__37648 = (0);
seq__37582 = G__37645;
chunk__37583 = G__37646;
count__37584 = G__37647;
i__37585 = G__37648;
continue;
} else {
var role = cljs.core.first.call(null,seq__37582__$1);
var temp__5720__auto___37649__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___37649__$2)){
var spec_37650 = temp__5720__auto___37649__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37650));
} else {
}


var G__37651 = cljs.core.next.call(null,seq__37582__$1);
var G__37652 = null;
var G__37653 = (0);
var G__37654 = (0);
seq__37582 = G__37651;
chunk__37583 = G__37652;
count__37584 = G__37653;
i__37585 = G__37654;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
