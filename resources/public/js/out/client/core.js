// Compiled by ClojureScript 1.10.439 {}
goog.provide('client.core');
goog.require('cljs.core');
goog.require('reagent.core');
client.core.basic = (function client$core$basic(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Andrew Mounted"], null)], null);
});
client.core.main = (function client$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.basic], null),document.getElementById("app"));
});
goog.exportSymbol('client.core.main', client.core.main);

//# sourceMappingURL=core.js.map
