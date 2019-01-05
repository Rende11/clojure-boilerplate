// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31573 = arguments.length;
switch (G__31573) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31574 = (function (f,blockable,meta31575){
this.f = f;
this.blockable = blockable;
this.meta31575 = meta31575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31576,meta31575__$1){
var self__ = this;
var _31576__$1 = this;
return (new cljs.core.async.t_cljs$core$async31574(self__.f,self__.blockable,meta31575__$1));
});

cljs.core.async.t_cljs$core$async31574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31576){
var self__ = this;
var _31576__$1 = this;
return self__.meta31575;
});

cljs.core.async.t_cljs$core$async31574.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31574.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31575","meta31575",-947071552,null)], null);
});

cljs.core.async.t_cljs$core$async31574.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31574";

cljs.core.async.t_cljs$core$async31574.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31574");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31574.
 */
cljs.core.async.__GT_t_cljs$core$async31574 = (function cljs$core$async$__GT_t_cljs$core$async31574(f__$1,blockable__$1,meta31575){
return (new cljs.core.async.t_cljs$core$async31574(f__$1,blockable__$1,meta31575));
});

}

return (new cljs.core.async.t_cljs$core$async31574(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31580 = arguments.length;
switch (G__31580) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31583 = arguments.length;
switch (G__31583) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31586 = arguments.length;
switch (G__31586) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31588 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31588);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31588,ret){
return (function (){
return fn1.call(null,val_31588);
});})(val_31588,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31590 = arguments.length;
switch (G__31590) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___31592 = n;
var x_31593 = (0);
while(true){
if((x_31593 < n__4518__auto___31592)){
(a[x_31593] = (0));

var G__31594 = (x_31593 + (1));
x_31593 = G__31594;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31595 = (i + (1));
i = G__31595;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31596 = (function (flag,meta31597){
this.flag = flag;
this.meta31597 = meta31597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31598,meta31597__$1){
var self__ = this;
var _31598__$1 = this;
return (new cljs.core.async.t_cljs$core$async31596(self__.flag,meta31597__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31598){
var self__ = this;
var _31598__$1 = this;
return self__.meta31597;
});})(flag))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31596.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31597","meta31597",98521996,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31596";

cljs.core.async.t_cljs$core$async31596.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31596");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31596.
 */
cljs.core.async.__GT_t_cljs$core$async31596 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31596(flag__$1,meta31597){
return (new cljs.core.async.t_cljs$core$async31596(flag__$1,meta31597));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31596(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31599 = (function (flag,cb,meta31600){
this.flag = flag;
this.cb = cb;
this.meta31600 = meta31600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31601,meta31600__$1){
var self__ = this;
var _31601__$1 = this;
return (new cljs.core.async.t_cljs$core$async31599(self__.flag,self__.cb,meta31600__$1));
});

cljs.core.async.t_cljs$core$async31599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31601){
var self__ = this;
var _31601__$1 = this;
return self__.meta31600;
});

cljs.core.async.t_cljs$core$async31599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31600","meta31600",1169658132,null)], null);
});

cljs.core.async.t_cljs$core$async31599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31599";

cljs.core.async.t_cljs$core$async31599.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31599");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31599.
 */
cljs.core.async.__GT_t_cljs$core$async31599 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31599(flag__$1,cb__$1,meta31600){
return (new cljs.core.async.t_cljs$core$async31599(flag__$1,cb__$1,meta31600));
});

}

return (new cljs.core.async.t_cljs$core$async31599(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31602_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31602_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31603_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31603_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31604 = (i + (1));
i = G__31604;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31610 = arguments.length;
var i__4642__auto___31611 = (0);
while(true){
if((i__4642__auto___31611 < len__4641__auto___31610)){
args__4647__auto__.push((arguments[i__4642__auto___31611]));

var G__31612 = (i__4642__auto___31611 + (1));
i__4642__auto___31611 = G__31612;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31607){
var map__31608 = p__31607;
var map__31608__$1 = (((((!((map__31608 == null))))?(((((map__31608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31608):map__31608);
var opts = map__31608__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31605){
var G__31606 = cljs.core.first.call(null,seq31605);
var seq31605__$1 = cljs.core.next.call(null,seq31605);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31606,seq31605__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31614 = arguments.length;
switch (G__31614) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31513__auto___31660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___31660){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___31660){
return (function (state_31638){
var state_val_31639 = (state_31638[(1)]);
if((state_val_31639 === (7))){
var inst_31634 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31640_31661 = state_31638__$1;
(statearr_31640_31661[(2)] = inst_31634);

(statearr_31640_31661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (1))){
var state_31638__$1 = state_31638;
var statearr_31641_31662 = state_31638__$1;
(statearr_31641_31662[(2)] = null);

(statearr_31641_31662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (4))){
var inst_31617 = (state_31638[(7)]);
var inst_31617__$1 = (state_31638[(2)]);
var inst_31618 = (inst_31617__$1 == null);
var state_31638__$1 = (function (){var statearr_31642 = state_31638;
(statearr_31642[(7)] = inst_31617__$1);

return statearr_31642;
})();
if(cljs.core.truth_(inst_31618)){
var statearr_31643_31663 = state_31638__$1;
(statearr_31643_31663[(1)] = (5));

} else {
var statearr_31644_31664 = state_31638__$1;
(statearr_31644_31664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (13))){
var state_31638__$1 = state_31638;
var statearr_31645_31665 = state_31638__$1;
(statearr_31645_31665[(2)] = null);

(statearr_31645_31665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (6))){
var inst_31617 = (state_31638[(7)]);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31638__$1,(11),to,inst_31617);
} else {
if((state_val_31639 === (3))){
var inst_31636 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31638__$1,inst_31636);
} else {
if((state_val_31639 === (12))){
var state_31638__$1 = state_31638;
var statearr_31646_31666 = state_31638__$1;
(statearr_31646_31666[(2)] = null);

(statearr_31646_31666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (2))){
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(4),from);
} else {
if((state_val_31639 === (11))){
var inst_31627 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
if(cljs.core.truth_(inst_31627)){
var statearr_31647_31667 = state_31638__$1;
(statearr_31647_31667[(1)] = (12));

} else {
var statearr_31648_31668 = state_31638__$1;
(statearr_31648_31668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (9))){
var state_31638__$1 = state_31638;
var statearr_31649_31669 = state_31638__$1;
(statearr_31649_31669[(2)] = null);

(statearr_31649_31669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (5))){
var state_31638__$1 = state_31638;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31650_31670 = state_31638__$1;
(statearr_31650_31670[(1)] = (8));

} else {
var statearr_31651_31671 = state_31638__$1;
(statearr_31651_31671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (14))){
var inst_31632 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31652_31672 = state_31638__$1;
(statearr_31652_31672[(2)] = inst_31632);

(statearr_31652_31672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (10))){
var inst_31624 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31653_31673 = state_31638__$1;
(statearr_31653_31673[(2)] = inst_31624);

(statearr_31653_31673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (8))){
var inst_31621 = cljs.core.async.close_BANG_.call(null,to);
var state_31638__$1 = state_31638;
var statearr_31654_31674 = state_31638__$1;
(statearr_31654_31674[(2)] = inst_31621);

(statearr_31654_31674[(1)] = (10));


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
});})(c__31513__auto___31660))
;
return ((function (switch__31418__auto__,c__31513__auto___31660){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_31655 = [null,null,null,null,null,null,null,null];
(statearr_31655[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_31655[(1)] = (1));

return statearr_31655;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_31638){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_31638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e31656){if((e31656 instanceof Object)){
var ex__31422__auto__ = e31656;
var statearr_31657_31675 = state_31638;
(statearr_31657_31675[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31676 = state_31638;
state_31638 = G__31676;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_31638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_31638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___31660))
})();
var state__31515__auto__ = (function (){var statearr_31658 = f__31514__auto__.call(null);
(statearr_31658[(6)] = c__31513__auto___31660);

return statearr_31658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___31660))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31677){
var vec__31678 = p__31677;
var v = cljs.core.nth.call(null,vec__31678,(0),null);
var p = cljs.core.nth.call(null,vec__31678,(1),null);
var job = vec__31678;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31513__auto___31849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___31849,res,vec__31678,v,p,job,jobs,results){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___31849,res,vec__31678,v,p,job,jobs,results){
return (function (state_31685){
var state_val_31686 = (state_31685[(1)]);
if((state_val_31686 === (1))){
var state_31685__$1 = state_31685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31685__$1,(2),res,v);
} else {
if((state_val_31686 === (2))){
var inst_31682 = (state_31685[(2)]);
var inst_31683 = cljs.core.async.close_BANG_.call(null,res);
var state_31685__$1 = (function (){var statearr_31687 = state_31685;
(statearr_31687[(7)] = inst_31682);

return statearr_31687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31685__$1,inst_31683);
} else {
return null;
}
}
});})(c__31513__auto___31849,res,vec__31678,v,p,job,jobs,results))
;
return ((function (switch__31418__auto__,c__31513__auto___31849,res,vec__31678,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_31688 = [null,null,null,null,null,null,null,null];
(statearr_31688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__);

(statearr_31688[(1)] = (1));

return statearr_31688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1 = (function (state_31685){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_31685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e31689){if((e31689 instanceof Object)){
var ex__31422__auto__ = e31689;
var statearr_31690_31850 = state_31685;
(statearr_31690_31850[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31851 = state_31685;
state_31685 = G__31851;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = function(state_31685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1.call(this,state_31685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___31849,res,vec__31678,v,p,job,jobs,results))
})();
var state__31515__auto__ = (function (){var statearr_31691 = f__31514__auto__.call(null);
(statearr_31691[(6)] = c__31513__auto___31849);

return statearr_31691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___31849,res,vec__31678,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31692){
var vec__31693 = p__31692;
var v = cljs.core.nth.call(null,vec__31693,(0),null);
var p = cljs.core.nth.call(null,vec__31693,(1),null);
var job = vec__31693;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___31852 = n;
var __31853 = (0);
while(true){
if((__31853 < n__4518__auto___31852)){
var G__31696_31854 = type;
var G__31696_31855__$1 = (((G__31696_31854 instanceof cljs.core.Keyword))?G__31696_31854.fqn:null);
switch (G__31696_31855__$1) {
case "compute":
var c__31513__auto___31857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31853,c__31513__auto___31857,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (__31853,c__31513__auto___31857,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async){
return (function (state_31709){
var state_val_31710 = (state_31709[(1)]);
if((state_val_31710 === (1))){
var state_31709__$1 = state_31709;
var statearr_31711_31858 = state_31709__$1;
(statearr_31711_31858[(2)] = null);

(statearr_31711_31858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (2))){
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(4),jobs);
} else {
if((state_val_31710 === (3))){
var inst_31707 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31709__$1,inst_31707);
} else {
if((state_val_31710 === (4))){
var inst_31699 = (state_31709[(2)]);
var inst_31700 = process.call(null,inst_31699);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31700)){
var statearr_31712_31859 = state_31709__$1;
(statearr_31712_31859[(1)] = (5));

} else {
var statearr_31713_31860 = state_31709__$1;
(statearr_31713_31860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (5))){
var state_31709__$1 = state_31709;
var statearr_31714_31861 = state_31709__$1;
(statearr_31714_31861[(2)] = null);

(statearr_31714_31861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (6))){
var state_31709__$1 = state_31709;
var statearr_31715_31862 = state_31709__$1;
(statearr_31715_31862[(2)] = null);

(statearr_31715_31862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (7))){
var inst_31705 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31716_31863 = state_31709__$1;
(statearr_31716_31863[(2)] = inst_31705);

(statearr_31716_31863[(1)] = (3));


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
});})(__31853,c__31513__auto___31857,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async))
;
return ((function (__31853,switch__31418__auto__,c__31513__auto___31857,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_31717 = [null,null,null,null,null,null,null];
(statearr_31717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__);

(statearr_31717[(1)] = (1));

return statearr_31717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1 = (function (state_31709){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_31709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e31718){if((e31718 instanceof Object)){
var ex__31422__auto__ = e31718;
var statearr_31719_31864 = state_31709;
(statearr_31719_31864[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31865 = state_31709;
state_31709 = G__31865;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = function(state_31709){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1.call(this,state_31709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__;
})()
;})(__31853,switch__31418__auto__,c__31513__auto___31857,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async))
})();
var state__31515__auto__ = (function (){var statearr_31720 = f__31514__auto__.call(null);
(statearr_31720[(6)] = c__31513__auto___31857);

return statearr_31720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(__31853,c__31513__auto___31857,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async))
);


break;
case "async":
var c__31513__auto___31866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31853,c__31513__auto___31866,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (__31853,c__31513__auto___31866,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async){
return (function (state_31733){
var state_val_31734 = (state_31733[(1)]);
if((state_val_31734 === (1))){
var state_31733__$1 = state_31733;
var statearr_31735_31867 = state_31733__$1;
(statearr_31735_31867[(2)] = null);

(statearr_31735_31867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (2))){
var state_31733__$1 = state_31733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31733__$1,(4),jobs);
} else {
if((state_val_31734 === (3))){
var inst_31731 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31733__$1,inst_31731);
} else {
if((state_val_31734 === (4))){
var inst_31723 = (state_31733[(2)]);
var inst_31724 = async.call(null,inst_31723);
var state_31733__$1 = state_31733;
if(cljs.core.truth_(inst_31724)){
var statearr_31736_31868 = state_31733__$1;
(statearr_31736_31868[(1)] = (5));

} else {
var statearr_31737_31869 = state_31733__$1;
(statearr_31737_31869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (5))){
var state_31733__$1 = state_31733;
var statearr_31738_31870 = state_31733__$1;
(statearr_31738_31870[(2)] = null);

(statearr_31738_31870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (6))){
var state_31733__$1 = state_31733;
var statearr_31739_31871 = state_31733__$1;
(statearr_31739_31871[(2)] = null);

(statearr_31739_31871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (7))){
var inst_31729 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31740_31872 = state_31733__$1;
(statearr_31740_31872[(2)] = inst_31729);

(statearr_31740_31872[(1)] = (3));


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
});})(__31853,c__31513__auto___31866,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async))
;
return ((function (__31853,switch__31418__auto__,c__31513__auto___31866,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_31741 = [null,null,null,null,null,null,null];
(statearr_31741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__);

(statearr_31741[(1)] = (1));

return statearr_31741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1 = (function (state_31733){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_31733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e31742){if((e31742 instanceof Object)){
var ex__31422__auto__ = e31742;
var statearr_31743_31873 = state_31733;
(statearr_31743_31873[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31874 = state_31733;
state_31733 = G__31874;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = function(state_31733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1.call(this,state_31733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__;
})()
;})(__31853,switch__31418__auto__,c__31513__auto___31866,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async))
})();
var state__31515__auto__ = (function (){var statearr_31744 = f__31514__auto__.call(null);
(statearr_31744[(6)] = c__31513__auto___31866);

return statearr_31744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(__31853,c__31513__auto___31866,G__31696_31854,G__31696_31855__$1,n__4518__auto___31852,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31696_31855__$1)].join('')));

}

var G__31875 = (__31853 + (1));
__31853 = G__31875;
continue;
} else {
}
break;
}

var c__31513__auto___31876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___31876,jobs,results,process,async){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___31876,jobs,results,process,async){
return (function (state_31766){
var state_val_31767 = (state_31766[(1)]);
if((state_val_31767 === (7))){
var inst_31762 = (state_31766[(2)]);
var state_31766__$1 = state_31766;
var statearr_31768_31877 = state_31766__$1;
(statearr_31768_31877[(2)] = inst_31762);

(statearr_31768_31877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31767 === (1))){
var state_31766__$1 = state_31766;
var statearr_31769_31878 = state_31766__$1;
(statearr_31769_31878[(2)] = null);

(statearr_31769_31878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31767 === (4))){
var inst_31747 = (state_31766[(7)]);
var inst_31747__$1 = (state_31766[(2)]);
var inst_31748 = (inst_31747__$1 == null);
var state_31766__$1 = (function (){var statearr_31770 = state_31766;
(statearr_31770[(7)] = inst_31747__$1);

return statearr_31770;
})();
if(cljs.core.truth_(inst_31748)){
var statearr_31771_31879 = state_31766__$1;
(statearr_31771_31879[(1)] = (5));

} else {
var statearr_31772_31880 = state_31766__$1;
(statearr_31772_31880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31767 === (6))){
var inst_31752 = (state_31766[(8)]);
var inst_31747 = (state_31766[(7)]);
var inst_31752__$1 = cljs.core.async.chan.call(null,(1));
var inst_31753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31754 = [inst_31747,inst_31752__$1];
var inst_31755 = (new cljs.core.PersistentVector(null,2,(5),inst_31753,inst_31754,null));
var state_31766__$1 = (function (){var statearr_31773 = state_31766;
(statearr_31773[(8)] = inst_31752__$1);

return statearr_31773;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31766__$1,(8),jobs,inst_31755);
} else {
if((state_val_31767 === (3))){
var inst_31764 = (state_31766[(2)]);
var state_31766__$1 = state_31766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31766__$1,inst_31764);
} else {
if((state_val_31767 === (2))){
var state_31766__$1 = state_31766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31766__$1,(4),from);
} else {
if((state_val_31767 === (9))){
var inst_31759 = (state_31766[(2)]);
var state_31766__$1 = (function (){var statearr_31774 = state_31766;
(statearr_31774[(9)] = inst_31759);

return statearr_31774;
})();
var statearr_31775_31881 = state_31766__$1;
(statearr_31775_31881[(2)] = null);

(statearr_31775_31881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31767 === (5))){
var inst_31750 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31766__$1 = state_31766;
var statearr_31776_31882 = state_31766__$1;
(statearr_31776_31882[(2)] = inst_31750);

(statearr_31776_31882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31767 === (8))){
var inst_31752 = (state_31766[(8)]);
var inst_31757 = (state_31766[(2)]);
var state_31766__$1 = (function (){var statearr_31777 = state_31766;
(statearr_31777[(10)] = inst_31757);

return statearr_31777;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31766__$1,(9),results,inst_31752);
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
});})(c__31513__auto___31876,jobs,results,process,async))
;
return ((function (switch__31418__auto__,c__31513__auto___31876,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_31778 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__);

(statearr_31778[(1)] = (1));

return statearr_31778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1 = (function (state_31766){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_31766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e31779){if((e31779 instanceof Object)){
var ex__31422__auto__ = e31779;
var statearr_31780_31883 = state_31766;
(statearr_31780_31883[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31884 = state_31766;
state_31766 = G__31884;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = function(state_31766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1.call(this,state_31766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___31876,jobs,results,process,async))
})();
var state__31515__auto__ = (function (){var statearr_31781 = f__31514__auto__.call(null);
(statearr_31781[(6)] = c__31513__auto___31876);

return statearr_31781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___31876,jobs,results,process,async))
);


var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__,jobs,results,process,async){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__,jobs,results,process,async){
return (function (state_31819){
var state_val_31820 = (state_31819[(1)]);
if((state_val_31820 === (7))){
var inst_31815 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31821_31885 = state_31819__$1;
(statearr_31821_31885[(2)] = inst_31815);

(statearr_31821_31885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (20))){
var state_31819__$1 = state_31819;
var statearr_31822_31886 = state_31819__$1;
(statearr_31822_31886[(2)] = null);

(statearr_31822_31886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (1))){
var state_31819__$1 = state_31819;
var statearr_31823_31887 = state_31819__$1;
(statearr_31823_31887[(2)] = null);

(statearr_31823_31887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (4))){
var inst_31784 = (state_31819[(7)]);
var inst_31784__$1 = (state_31819[(2)]);
var inst_31785 = (inst_31784__$1 == null);
var state_31819__$1 = (function (){var statearr_31824 = state_31819;
(statearr_31824[(7)] = inst_31784__$1);

return statearr_31824;
})();
if(cljs.core.truth_(inst_31785)){
var statearr_31825_31888 = state_31819__$1;
(statearr_31825_31888[(1)] = (5));

} else {
var statearr_31826_31889 = state_31819__$1;
(statearr_31826_31889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (15))){
var inst_31797 = (state_31819[(8)]);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31819__$1,(18),to,inst_31797);
} else {
if((state_val_31820 === (21))){
var inst_31810 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31827_31890 = state_31819__$1;
(statearr_31827_31890[(2)] = inst_31810);

(statearr_31827_31890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (13))){
var inst_31812 = (state_31819[(2)]);
var state_31819__$1 = (function (){var statearr_31828 = state_31819;
(statearr_31828[(9)] = inst_31812);

return statearr_31828;
})();
var statearr_31829_31891 = state_31819__$1;
(statearr_31829_31891[(2)] = null);

(statearr_31829_31891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (6))){
var inst_31784 = (state_31819[(7)]);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(11),inst_31784);
} else {
if((state_val_31820 === (17))){
var inst_31805 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
if(cljs.core.truth_(inst_31805)){
var statearr_31830_31892 = state_31819__$1;
(statearr_31830_31892[(1)] = (19));

} else {
var statearr_31831_31893 = state_31819__$1;
(statearr_31831_31893[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (3))){
var inst_31817 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31819__$1,inst_31817);
} else {
if((state_val_31820 === (12))){
var inst_31794 = (state_31819[(10)]);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(14),inst_31794);
} else {
if((state_val_31820 === (2))){
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(4),results);
} else {
if((state_val_31820 === (19))){
var state_31819__$1 = state_31819;
var statearr_31832_31894 = state_31819__$1;
(statearr_31832_31894[(2)] = null);

(statearr_31832_31894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (11))){
var inst_31794 = (state_31819[(2)]);
var state_31819__$1 = (function (){var statearr_31833 = state_31819;
(statearr_31833[(10)] = inst_31794);

return statearr_31833;
})();
var statearr_31834_31895 = state_31819__$1;
(statearr_31834_31895[(2)] = null);

(statearr_31834_31895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (9))){
var state_31819__$1 = state_31819;
var statearr_31835_31896 = state_31819__$1;
(statearr_31835_31896[(2)] = null);

(statearr_31835_31896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (5))){
var state_31819__$1 = state_31819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31836_31897 = state_31819__$1;
(statearr_31836_31897[(1)] = (8));

} else {
var statearr_31837_31898 = state_31819__$1;
(statearr_31837_31898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (14))){
var inst_31797 = (state_31819[(8)]);
var inst_31799 = (state_31819[(11)]);
var inst_31797__$1 = (state_31819[(2)]);
var inst_31798 = (inst_31797__$1 == null);
var inst_31799__$1 = cljs.core.not.call(null,inst_31798);
var state_31819__$1 = (function (){var statearr_31838 = state_31819;
(statearr_31838[(8)] = inst_31797__$1);

(statearr_31838[(11)] = inst_31799__$1);

return statearr_31838;
})();
if(inst_31799__$1){
var statearr_31839_31899 = state_31819__$1;
(statearr_31839_31899[(1)] = (15));

} else {
var statearr_31840_31900 = state_31819__$1;
(statearr_31840_31900[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (16))){
var inst_31799 = (state_31819[(11)]);
var state_31819__$1 = state_31819;
var statearr_31841_31901 = state_31819__$1;
(statearr_31841_31901[(2)] = inst_31799);

(statearr_31841_31901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (10))){
var inst_31791 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31842_31902 = state_31819__$1;
(statearr_31842_31902[(2)] = inst_31791);

(statearr_31842_31902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (18))){
var inst_31802 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31843_31903 = state_31819__$1;
(statearr_31843_31903[(2)] = inst_31802);

(statearr_31843_31903[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (8))){
var inst_31788 = cljs.core.async.close_BANG_.call(null,to);
var state_31819__$1 = state_31819;
var statearr_31844_31904 = state_31819__$1;
(statearr_31844_31904[(2)] = inst_31788);

(statearr_31844_31904[(1)] = (10));


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
});})(c__31513__auto__,jobs,results,process,async))
;
return ((function (switch__31418__auto__,c__31513__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_31845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__);

(statearr_31845[(1)] = (1));

return statearr_31845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1 = (function (state_31819){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_31819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e31846){if((e31846 instanceof Object)){
var ex__31422__auto__ = e31846;
var statearr_31847_31905 = state_31819;
(statearr_31847_31905[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31906 = state_31819;
state_31819 = G__31906;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = function(state_31819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1.call(this,state_31819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__,jobs,results,process,async))
})();
var state__31515__auto__ = (function (){var statearr_31848 = f__31514__auto__.call(null);
(statearr_31848[(6)] = c__31513__auto__);

return statearr_31848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__,jobs,results,process,async))
);

return c__31513__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31908 = arguments.length;
switch (G__31908) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31911 = arguments.length;
switch (G__31911) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31914 = arguments.length;
switch (G__31914) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31513__auto___31963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___31963,tc,fc){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___31963,tc,fc){
return (function (state_31940){
var state_val_31941 = (state_31940[(1)]);
if((state_val_31941 === (7))){
var inst_31936 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31942_31964 = state_31940__$1;
(statearr_31942_31964[(2)] = inst_31936);

(statearr_31942_31964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (1))){
var state_31940__$1 = state_31940;
var statearr_31943_31965 = state_31940__$1;
(statearr_31943_31965[(2)] = null);

(statearr_31943_31965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (4))){
var inst_31917 = (state_31940[(7)]);
var inst_31917__$1 = (state_31940[(2)]);
var inst_31918 = (inst_31917__$1 == null);
var state_31940__$1 = (function (){var statearr_31944 = state_31940;
(statearr_31944[(7)] = inst_31917__$1);

return statearr_31944;
})();
if(cljs.core.truth_(inst_31918)){
var statearr_31945_31966 = state_31940__$1;
(statearr_31945_31966[(1)] = (5));

} else {
var statearr_31946_31967 = state_31940__$1;
(statearr_31946_31967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (13))){
var state_31940__$1 = state_31940;
var statearr_31947_31968 = state_31940__$1;
(statearr_31947_31968[(2)] = null);

(statearr_31947_31968[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (6))){
var inst_31917 = (state_31940[(7)]);
var inst_31923 = p.call(null,inst_31917);
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31923)){
var statearr_31948_31969 = state_31940__$1;
(statearr_31948_31969[(1)] = (9));

} else {
var statearr_31949_31970 = state_31940__$1;
(statearr_31949_31970[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (3))){
var inst_31938 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31940__$1,inst_31938);
} else {
if((state_val_31941 === (12))){
var state_31940__$1 = state_31940;
var statearr_31950_31971 = state_31940__$1;
(statearr_31950_31971[(2)] = null);

(statearr_31950_31971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (2))){
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31940__$1,(4),ch);
} else {
if((state_val_31941 === (11))){
var inst_31917 = (state_31940[(7)]);
var inst_31927 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31940__$1,(8),inst_31927,inst_31917);
} else {
if((state_val_31941 === (9))){
var state_31940__$1 = state_31940;
var statearr_31951_31972 = state_31940__$1;
(statearr_31951_31972[(2)] = tc);

(statearr_31951_31972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (5))){
var inst_31920 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31921 = cljs.core.async.close_BANG_.call(null,fc);
var state_31940__$1 = (function (){var statearr_31952 = state_31940;
(statearr_31952[(8)] = inst_31920);

return statearr_31952;
})();
var statearr_31953_31973 = state_31940__$1;
(statearr_31953_31973[(2)] = inst_31921);

(statearr_31953_31973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (14))){
var inst_31934 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31954_31974 = state_31940__$1;
(statearr_31954_31974[(2)] = inst_31934);

(statearr_31954_31974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (10))){
var state_31940__$1 = state_31940;
var statearr_31955_31975 = state_31940__$1;
(statearr_31955_31975[(2)] = fc);

(statearr_31955_31975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31941 === (8))){
var inst_31929 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31929)){
var statearr_31956_31976 = state_31940__$1;
(statearr_31956_31976[(1)] = (12));

} else {
var statearr_31957_31977 = state_31940__$1;
(statearr_31957_31977[(1)] = (13));

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
});})(c__31513__auto___31963,tc,fc))
;
return ((function (switch__31418__auto__,c__31513__auto___31963,tc,fc){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_31958 = [null,null,null,null,null,null,null,null,null];
(statearr_31958[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_31958[(1)] = (1));

return statearr_31958;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_31940){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_31940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e31959){if((e31959 instanceof Object)){
var ex__31422__auto__ = e31959;
var statearr_31960_31978 = state_31940;
(statearr_31960_31978[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31979 = state_31940;
state_31940 = G__31979;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_31940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_31940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___31963,tc,fc))
})();
var state__31515__auto__ = (function (){var statearr_31961 = f__31514__auto__.call(null);
(statearr_31961[(6)] = c__31513__auto___31963);

return statearr_31961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___31963,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__){
return (function (state_32000){
var state_val_32001 = (state_32000[(1)]);
if((state_val_32001 === (7))){
var inst_31996 = (state_32000[(2)]);
var state_32000__$1 = state_32000;
var statearr_32002_32020 = state_32000__$1;
(statearr_32002_32020[(2)] = inst_31996);

(statearr_32002_32020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (1))){
var inst_31980 = init;
var state_32000__$1 = (function (){var statearr_32003 = state_32000;
(statearr_32003[(7)] = inst_31980);

return statearr_32003;
})();
var statearr_32004_32021 = state_32000__$1;
(statearr_32004_32021[(2)] = null);

(statearr_32004_32021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (4))){
var inst_31983 = (state_32000[(8)]);
var inst_31983__$1 = (state_32000[(2)]);
var inst_31984 = (inst_31983__$1 == null);
var state_32000__$1 = (function (){var statearr_32005 = state_32000;
(statearr_32005[(8)] = inst_31983__$1);

return statearr_32005;
})();
if(cljs.core.truth_(inst_31984)){
var statearr_32006_32022 = state_32000__$1;
(statearr_32006_32022[(1)] = (5));

} else {
var statearr_32007_32023 = state_32000__$1;
(statearr_32007_32023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (6))){
var inst_31987 = (state_32000[(9)]);
var inst_31980 = (state_32000[(7)]);
var inst_31983 = (state_32000[(8)]);
var inst_31987__$1 = f.call(null,inst_31980,inst_31983);
var inst_31988 = cljs.core.reduced_QMARK_.call(null,inst_31987__$1);
var state_32000__$1 = (function (){var statearr_32008 = state_32000;
(statearr_32008[(9)] = inst_31987__$1);

return statearr_32008;
})();
if(inst_31988){
var statearr_32009_32024 = state_32000__$1;
(statearr_32009_32024[(1)] = (8));

} else {
var statearr_32010_32025 = state_32000__$1;
(statearr_32010_32025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (3))){
var inst_31998 = (state_32000[(2)]);
var state_32000__$1 = state_32000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32000__$1,inst_31998);
} else {
if((state_val_32001 === (2))){
var state_32000__$1 = state_32000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32000__$1,(4),ch);
} else {
if((state_val_32001 === (9))){
var inst_31987 = (state_32000[(9)]);
var inst_31980 = inst_31987;
var state_32000__$1 = (function (){var statearr_32011 = state_32000;
(statearr_32011[(7)] = inst_31980);

return statearr_32011;
})();
var statearr_32012_32026 = state_32000__$1;
(statearr_32012_32026[(2)] = null);

(statearr_32012_32026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (5))){
var inst_31980 = (state_32000[(7)]);
var state_32000__$1 = state_32000;
var statearr_32013_32027 = state_32000__$1;
(statearr_32013_32027[(2)] = inst_31980);

(statearr_32013_32027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (10))){
var inst_31994 = (state_32000[(2)]);
var state_32000__$1 = state_32000;
var statearr_32014_32028 = state_32000__$1;
(statearr_32014_32028[(2)] = inst_31994);

(statearr_32014_32028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (8))){
var inst_31987 = (state_32000[(9)]);
var inst_31990 = cljs.core.deref.call(null,inst_31987);
var state_32000__$1 = state_32000;
var statearr_32015_32029 = state_32000__$1;
(statearr_32015_32029[(2)] = inst_31990);

(statearr_32015_32029[(1)] = (10));


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
});})(c__31513__auto__))
;
return ((function (switch__31418__auto__,c__31513__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31419__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31419__auto____0 = (function (){
var statearr_32016 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32016[(0)] = cljs$core$async$reduce_$_state_machine__31419__auto__);

(statearr_32016[(1)] = (1));

return statearr_32016;
});
var cljs$core$async$reduce_$_state_machine__31419__auto____1 = (function (state_32000){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_32000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e32017){if((e32017 instanceof Object)){
var ex__31422__auto__ = e32017;
var statearr_32018_32030 = state_32000;
(statearr_32018_32030[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32031 = state_32000;
state_32000 = G__32031;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31419__auto__ = function(state_32000){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31419__auto____1.call(this,state_32000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31419__auto____0;
cljs$core$async$reduce_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31419__auto____1;
return cljs$core$async$reduce_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__))
})();
var state__31515__auto__ = (function (){var statearr_32019 = f__31514__auto__.call(null);
(statearr_32019[(6)] = c__31513__auto__);

return statearr_32019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__))
);

return c__31513__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__,f__$1){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__,f__$1){
return (function (state_32037){
var state_val_32038 = (state_32037[(1)]);
if((state_val_32038 === (1))){
var inst_32032 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32037__$1 = state_32037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32037__$1,(2),inst_32032);
} else {
if((state_val_32038 === (2))){
var inst_32034 = (state_32037[(2)]);
var inst_32035 = f__$1.call(null,inst_32034);
var state_32037__$1 = state_32037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32037__$1,inst_32035);
} else {
return null;
}
}
});})(c__31513__auto__,f__$1))
;
return ((function (switch__31418__auto__,c__31513__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31419__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31419__auto____0 = (function (){
var statearr_32039 = [null,null,null,null,null,null,null];
(statearr_32039[(0)] = cljs$core$async$transduce_$_state_machine__31419__auto__);

(statearr_32039[(1)] = (1));

return statearr_32039;
});
var cljs$core$async$transduce_$_state_machine__31419__auto____1 = (function (state_32037){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_32037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e32040){if((e32040 instanceof Object)){
var ex__31422__auto__ = e32040;
var statearr_32041_32043 = state_32037;
(statearr_32041_32043[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32044 = state_32037;
state_32037 = G__32044;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31419__auto__ = function(state_32037){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31419__auto____1.call(this,state_32037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31419__auto____0;
cljs$core$async$transduce_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31419__auto____1;
return cljs$core$async$transduce_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__,f__$1))
})();
var state__31515__auto__ = (function (){var statearr_32042 = f__31514__auto__.call(null);
(statearr_32042[(6)] = c__31513__auto__);

return statearr_32042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__,f__$1))
);

return c__31513__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32046 = arguments.length;
switch (G__32046) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__){
return (function (state_32071){
var state_val_32072 = (state_32071[(1)]);
if((state_val_32072 === (7))){
var inst_32053 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32073_32094 = state_32071__$1;
(statearr_32073_32094[(2)] = inst_32053);

(statearr_32073_32094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (1))){
var inst_32047 = cljs.core.seq.call(null,coll);
var inst_32048 = inst_32047;
var state_32071__$1 = (function (){var statearr_32074 = state_32071;
(statearr_32074[(7)] = inst_32048);

return statearr_32074;
})();
var statearr_32075_32095 = state_32071__$1;
(statearr_32075_32095[(2)] = null);

(statearr_32075_32095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (4))){
var inst_32048 = (state_32071[(7)]);
var inst_32051 = cljs.core.first.call(null,inst_32048);
var state_32071__$1 = state_32071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32071__$1,(7),ch,inst_32051);
} else {
if((state_val_32072 === (13))){
var inst_32065 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32076_32096 = state_32071__$1;
(statearr_32076_32096[(2)] = inst_32065);

(statearr_32076_32096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (6))){
var inst_32056 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
if(cljs.core.truth_(inst_32056)){
var statearr_32077_32097 = state_32071__$1;
(statearr_32077_32097[(1)] = (8));

} else {
var statearr_32078_32098 = state_32071__$1;
(statearr_32078_32098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (3))){
var inst_32069 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32071__$1,inst_32069);
} else {
if((state_val_32072 === (12))){
var state_32071__$1 = state_32071;
var statearr_32079_32099 = state_32071__$1;
(statearr_32079_32099[(2)] = null);

(statearr_32079_32099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (2))){
var inst_32048 = (state_32071[(7)]);
var state_32071__$1 = state_32071;
if(cljs.core.truth_(inst_32048)){
var statearr_32080_32100 = state_32071__$1;
(statearr_32080_32100[(1)] = (4));

} else {
var statearr_32081_32101 = state_32071__$1;
(statearr_32081_32101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (11))){
var inst_32062 = cljs.core.async.close_BANG_.call(null,ch);
var state_32071__$1 = state_32071;
var statearr_32082_32102 = state_32071__$1;
(statearr_32082_32102[(2)] = inst_32062);

(statearr_32082_32102[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (9))){
var state_32071__$1 = state_32071;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32083_32103 = state_32071__$1;
(statearr_32083_32103[(1)] = (11));

} else {
var statearr_32084_32104 = state_32071__$1;
(statearr_32084_32104[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (5))){
var inst_32048 = (state_32071[(7)]);
var state_32071__$1 = state_32071;
var statearr_32085_32105 = state_32071__$1;
(statearr_32085_32105[(2)] = inst_32048);

(statearr_32085_32105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (10))){
var inst_32067 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32086_32106 = state_32071__$1;
(statearr_32086_32106[(2)] = inst_32067);

(statearr_32086_32106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (8))){
var inst_32048 = (state_32071[(7)]);
var inst_32058 = cljs.core.next.call(null,inst_32048);
var inst_32048__$1 = inst_32058;
var state_32071__$1 = (function (){var statearr_32087 = state_32071;
(statearr_32087[(7)] = inst_32048__$1);

return statearr_32087;
})();
var statearr_32088_32107 = state_32071__$1;
(statearr_32088_32107[(2)] = null);

(statearr_32088_32107[(1)] = (2));


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
});})(c__31513__auto__))
;
return ((function (switch__31418__auto__,c__31513__auto__){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_32089 = [null,null,null,null,null,null,null,null];
(statearr_32089[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_32089[(1)] = (1));

return statearr_32089;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_32071){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_32071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e32090){if((e32090 instanceof Object)){
var ex__31422__auto__ = e32090;
var statearr_32091_32108 = state_32071;
(statearr_32091_32108[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32109 = state_32071;
state_32071 = G__32109;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_32071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_32071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__))
})();
var state__31515__auto__ = (function (){var statearr_32092 = f__31514__auto__.call(null);
(statearr_32092[(6)] = c__31513__auto__);

return statearr_32092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__))
);

return c__31513__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32110 = (function (ch,cs,meta32111){
this.ch = ch;
this.cs = cs;
this.meta32111 = meta32111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32112,meta32111__$1){
var self__ = this;
var _32112__$1 = this;
return (new cljs.core.async.t_cljs$core$async32110(self__.ch,self__.cs,meta32111__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32112){
var self__ = this;
var _32112__$1 = this;
return self__.meta32111;
});})(cs))
;

cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32110.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32110.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32111","meta32111",2017421518,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32110";

cljs.core.async.t_cljs$core$async32110.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32110");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32110.
 */
cljs.core.async.__GT_t_cljs$core$async32110 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32110(ch__$1,cs__$1,meta32111){
return (new cljs.core.async.t_cljs$core$async32110(ch__$1,cs__$1,meta32111));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32110(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31513__auto___32332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___32332,cs,m,dchan,dctr,done){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___32332,cs,m,dchan,dctr,done){
return (function (state_32247){
var state_val_32248 = (state_32247[(1)]);
if((state_val_32248 === (7))){
var inst_32243 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32249_32333 = state_32247__$1;
(statearr_32249_32333[(2)] = inst_32243);

(statearr_32249_32333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (20))){
var inst_32146 = (state_32247[(7)]);
var inst_32158 = cljs.core.first.call(null,inst_32146);
var inst_32159 = cljs.core.nth.call(null,inst_32158,(0),null);
var inst_32160 = cljs.core.nth.call(null,inst_32158,(1),null);
var state_32247__$1 = (function (){var statearr_32250 = state_32247;
(statearr_32250[(8)] = inst_32159);

return statearr_32250;
})();
if(cljs.core.truth_(inst_32160)){
var statearr_32251_32334 = state_32247__$1;
(statearr_32251_32334[(1)] = (22));

} else {
var statearr_32252_32335 = state_32247__$1;
(statearr_32252_32335[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (27))){
var inst_32195 = (state_32247[(9)]);
var inst_32188 = (state_32247[(10)]);
var inst_32115 = (state_32247[(11)]);
var inst_32190 = (state_32247[(12)]);
var inst_32195__$1 = cljs.core._nth.call(null,inst_32188,inst_32190);
var inst_32196 = cljs.core.async.put_BANG_.call(null,inst_32195__$1,inst_32115,done);
var state_32247__$1 = (function (){var statearr_32253 = state_32247;
(statearr_32253[(9)] = inst_32195__$1);

return statearr_32253;
})();
if(cljs.core.truth_(inst_32196)){
var statearr_32254_32336 = state_32247__$1;
(statearr_32254_32336[(1)] = (30));

} else {
var statearr_32255_32337 = state_32247__$1;
(statearr_32255_32337[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (1))){
var state_32247__$1 = state_32247;
var statearr_32256_32338 = state_32247__$1;
(statearr_32256_32338[(2)] = null);

(statearr_32256_32338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (24))){
var inst_32146 = (state_32247[(7)]);
var inst_32165 = (state_32247[(2)]);
var inst_32166 = cljs.core.next.call(null,inst_32146);
var inst_32124 = inst_32166;
var inst_32125 = null;
var inst_32126 = (0);
var inst_32127 = (0);
var state_32247__$1 = (function (){var statearr_32257 = state_32247;
(statearr_32257[(13)] = inst_32127);

(statearr_32257[(14)] = inst_32124);

(statearr_32257[(15)] = inst_32126);

(statearr_32257[(16)] = inst_32165);

(statearr_32257[(17)] = inst_32125);

return statearr_32257;
})();
var statearr_32258_32339 = state_32247__$1;
(statearr_32258_32339[(2)] = null);

(statearr_32258_32339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (39))){
var state_32247__$1 = state_32247;
var statearr_32262_32340 = state_32247__$1;
(statearr_32262_32340[(2)] = null);

(statearr_32262_32340[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (4))){
var inst_32115 = (state_32247[(11)]);
var inst_32115__$1 = (state_32247[(2)]);
var inst_32116 = (inst_32115__$1 == null);
var state_32247__$1 = (function (){var statearr_32263 = state_32247;
(statearr_32263[(11)] = inst_32115__$1);

return statearr_32263;
})();
if(cljs.core.truth_(inst_32116)){
var statearr_32264_32341 = state_32247__$1;
(statearr_32264_32341[(1)] = (5));

} else {
var statearr_32265_32342 = state_32247__$1;
(statearr_32265_32342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (15))){
var inst_32127 = (state_32247[(13)]);
var inst_32124 = (state_32247[(14)]);
var inst_32126 = (state_32247[(15)]);
var inst_32125 = (state_32247[(17)]);
var inst_32142 = (state_32247[(2)]);
var inst_32143 = (inst_32127 + (1));
var tmp32259 = inst_32124;
var tmp32260 = inst_32126;
var tmp32261 = inst_32125;
var inst_32124__$1 = tmp32259;
var inst_32125__$1 = tmp32261;
var inst_32126__$1 = tmp32260;
var inst_32127__$1 = inst_32143;
var state_32247__$1 = (function (){var statearr_32266 = state_32247;
(statearr_32266[(18)] = inst_32142);

(statearr_32266[(13)] = inst_32127__$1);

(statearr_32266[(14)] = inst_32124__$1);

(statearr_32266[(15)] = inst_32126__$1);

(statearr_32266[(17)] = inst_32125__$1);

return statearr_32266;
})();
var statearr_32267_32343 = state_32247__$1;
(statearr_32267_32343[(2)] = null);

(statearr_32267_32343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (21))){
var inst_32169 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32271_32344 = state_32247__$1;
(statearr_32271_32344[(2)] = inst_32169);

(statearr_32271_32344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (31))){
var inst_32195 = (state_32247[(9)]);
var inst_32199 = done.call(null,null);
var inst_32200 = cljs.core.async.untap_STAR_.call(null,m,inst_32195);
var state_32247__$1 = (function (){var statearr_32272 = state_32247;
(statearr_32272[(19)] = inst_32199);

return statearr_32272;
})();
var statearr_32273_32345 = state_32247__$1;
(statearr_32273_32345[(2)] = inst_32200);

(statearr_32273_32345[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (32))){
var inst_32188 = (state_32247[(10)]);
var inst_32187 = (state_32247[(20)]);
var inst_32189 = (state_32247[(21)]);
var inst_32190 = (state_32247[(12)]);
var inst_32202 = (state_32247[(2)]);
var inst_32203 = (inst_32190 + (1));
var tmp32268 = inst_32188;
var tmp32269 = inst_32187;
var tmp32270 = inst_32189;
var inst_32187__$1 = tmp32269;
var inst_32188__$1 = tmp32268;
var inst_32189__$1 = tmp32270;
var inst_32190__$1 = inst_32203;
var state_32247__$1 = (function (){var statearr_32274 = state_32247;
(statearr_32274[(10)] = inst_32188__$1);

(statearr_32274[(20)] = inst_32187__$1);

(statearr_32274[(21)] = inst_32189__$1);

(statearr_32274[(22)] = inst_32202);

(statearr_32274[(12)] = inst_32190__$1);

return statearr_32274;
})();
var statearr_32275_32346 = state_32247__$1;
(statearr_32275_32346[(2)] = null);

(statearr_32275_32346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (40))){
var inst_32215 = (state_32247[(23)]);
var inst_32219 = done.call(null,null);
var inst_32220 = cljs.core.async.untap_STAR_.call(null,m,inst_32215);
var state_32247__$1 = (function (){var statearr_32276 = state_32247;
(statearr_32276[(24)] = inst_32219);

return statearr_32276;
})();
var statearr_32277_32347 = state_32247__$1;
(statearr_32277_32347[(2)] = inst_32220);

(statearr_32277_32347[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (33))){
var inst_32206 = (state_32247[(25)]);
var inst_32208 = cljs.core.chunked_seq_QMARK_.call(null,inst_32206);
var state_32247__$1 = state_32247;
if(inst_32208){
var statearr_32278_32348 = state_32247__$1;
(statearr_32278_32348[(1)] = (36));

} else {
var statearr_32279_32349 = state_32247__$1;
(statearr_32279_32349[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (13))){
var inst_32136 = (state_32247[(26)]);
var inst_32139 = cljs.core.async.close_BANG_.call(null,inst_32136);
var state_32247__$1 = state_32247;
var statearr_32280_32350 = state_32247__$1;
(statearr_32280_32350[(2)] = inst_32139);

(statearr_32280_32350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (22))){
var inst_32159 = (state_32247[(8)]);
var inst_32162 = cljs.core.async.close_BANG_.call(null,inst_32159);
var state_32247__$1 = state_32247;
var statearr_32281_32351 = state_32247__$1;
(statearr_32281_32351[(2)] = inst_32162);

(statearr_32281_32351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (36))){
var inst_32206 = (state_32247[(25)]);
var inst_32210 = cljs.core.chunk_first.call(null,inst_32206);
var inst_32211 = cljs.core.chunk_rest.call(null,inst_32206);
var inst_32212 = cljs.core.count.call(null,inst_32210);
var inst_32187 = inst_32211;
var inst_32188 = inst_32210;
var inst_32189 = inst_32212;
var inst_32190 = (0);
var state_32247__$1 = (function (){var statearr_32282 = state_32247;
(statearr_32282[(10)] = inst_32188);

(statearr_32282[(20)] = inst_32187);

(statearr_32282[(21)] = inst_32189);

(statearr_32282[(12)] = inst_32190);

return statearr_32282;
})();
var statearr_32283_32352 = state_32247__$1;
(statearr_32283_32352[(2)] = null);

(statearr_32283_32352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (41))){
var inst_32206 = (state_32247[(25)]);
var inst_32222 = (state_32247[(2)]);
var inst_32223 = cljs.core.next.call(null,inst_32206);
var inst_32187 = inst_32223;
var inst_32188 = null;
var inst_32189 = (0);
var inst_32190 = (0);
var state_32247__$1 = (function (){var statearr_32284 = state_32247;
(statearr_32284[(10)] = inst_32188);

(statearr_32284[(20)] = inst_32187);

(statearr_32284[(27)] = inst_32222);

(statearr_32284[(21)] = inst_32189);

(statearr_32284[(12)] = inst_32190);

return statearr_32284;
})();
var statearr_32285_32353 = state_32247__$1;
(statearr_32285_32353[(2)] = null);

(statearr_32285_32353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (43))){
var state_32247__$1 = state_32247;
var statearr_32286_32354 = state_32247__$1;
(statearr_32286_32354[(2)] = null);

(statearr_32286_32354[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (29))){
var inst_32231 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32287_32355 = state_32247__$1;
(statearr_32287_32355[(2)] = inst_32231);

(statearr_32287_32355[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (44))){
var inst_32240 = (state_32247[(2)]);
var state_32247__$1 = (function (){var statearr_32288 = state_32247;
(statearr_32288[(28)] = inst_32240);

return statearr_32288;
})();
var statearr_32289_32356 = state_32247__$1;
(statearr_32289_32356[(2)] = null);

(statearr_32289_32356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (6))){
var inst_32179 = (state_32247[(29)]);
var inst_32178 = cljs.core.deref.call(null,cs);
var inst_32179__$1 = cljs.core.keys.call(null,inst_32178);
var inst_32180 = cljs.core.count.call(null,inst_32179__$1);
var inst_32181 = cljs.core.reset_BANG_.call(null,dctr,inst_32180);
var inst_32186 = cljs.core.seq.call(null,inst_32179__$1);
var inst_32187 = inst_32186;
var inst_32188 = null;
var inst_32189 = (0);
var inst_32190 = (0);
var state_32247__$1 = (function (){var statearr_32290 = state_32247;
(statearr_32290[(29)] = inst_32179__$1);

(statearr_32290[(10)] = inst_32188);

(statearr_32290[(30)] = inst_32181);

(statearr_32290[(20)] = inst_32187);

(statearr_32290[(21)] = inst_32189);

(statearr_32290[(12)] = inst_32190);

return statearr_32290;
})();
var statearr_32291_32357 = state_32247__$1;
(statearr_32291_32357[(2)] = null);

(statearr_32291_32357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (28))){
var inst_32187 = (state_32247[(20)]);
var inst_32206 = (state_32247[(25)]);
var inst_32206__$1 = cljs.core.seq.call(null,inst_32187);
var state_32247__$1 = (function (){var statearr_32292 = state_32247;
(statearr_32292[(25)] = inst_32206__$1);

return statearr_32292;
})();
if(inst_32206__$1){
var statearr_32293_32358 = state_32247__$1;
(statearr_32293_32358[(1)] = (33));

} else {
var statearr_32294_32359 = state_32247__$1;
(statearr_32294_32359[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (25))){
var inst_32189 = (state_32247[(21)]);
var inst_32190 = (state_32247[(12)]);
var inst_32192 = (inst_32190 < inst_32189);
var inst_32193 = inst_32192;
var state_32247__$1 = state_32247;
if(cljs.core.truth_(inst_32193)){
var statearr_32295_32360 = state_32247__$1;
(statearr_32295_32360[(1)] = (27));

} else {
var statearr_32296_32361 = state_32247__$1;
(statearr_32296_32361[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (34))){
var state_32247__$1 = state_32247;
var statearr_32297_32362 = state_32247__$1;
(statearr_32297_32362[(2)] = null);

(statearr_32297_32362[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (17))){
var state_32247__$1 = state_32247;
var statearr_32298_32363 = state_32247__$1;
(statearr_32298_32363[(2)] = null);

(statearr_32298_32363[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (3))){
var inst_32245 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32247__$1,inst_32245);
} else {
if((state_val_32248 === (12))){
var inst_32174 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32299_32364 = state_32247__$1;
(statearr_32299_32364[(2)] = inst_32174);

(statearr_32299_32364[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (2))){
var state_32247__$1 = state_32247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32247__$1,(4),ch);
} else {
if((state_val_32248 === (23))){
var state_32247__$1 = state_32247;
var statearr_32300_32365 = state_32247__$1;
(statearr_32300_32365[(2)] = null);

(statearr_32300_32365[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (35))){
var inst_32229 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32301_32366 = state_32247__$1;
(statearr_32301_32366[(2)] = inst_32229);

(statearr_32301_32366[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (19))){
var inst_32146 = (state_32247[(7)]);
var inst_32150 = cljs.core.chunk_first.call(null,inst_32146);
var inst_32151 = cljs.core.chunk_rest.call(null,inst_32146);
var inst_32152 = cljs.core.count.call(null,inst_32150);
var inst_32124 = inst_32151;
var inst_32125 = inst_32150;
var inst_32126 = inst_32152;
var inst_32127 = (0);
var state_32247__$1 = (function (){var statearr_32302 = state_32247;
(statearr_32302[(13)] = inst_32127);

(statearr_32302[(14)] = inst_32124);

(statearr_32302[(15)] = inst_32126);

(statearr_32302[(17)] = inst_32125);

return statearr_32302;
})();
var statearr_32303_32367 = state_32247__$1;
(statearr_32303_32367[(2)] = null);

(statearr_32303_32367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (11))){
var inst_32124 = (state_32247[(14)]);
var inst_32146 = (state_32247[(7)]);
var inst_32146__$1 = cljs.core.seq.call(null,inst_32124);
var state_32247__$1 = (function (){var statearr_32304 = state_32247;
(statearr_32304[(7)] = inst_32146__$1);

return statearr_32304;
})();
if(inst_32146__$1){
var statearr_32305_32368 = state_32247__$1;
(statearr_32305_32368[(1)] = (16));

} else {
var statearr_32306_32369 = state_32247__$1;
(statearr_32306_32369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (9))){
var inst_32176 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32307_32370 = state_32247__$1;
(statearr_32307_32370[(2)] = inst_32176);

(statearr_32307_32370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (5))){
var inst_32122 = cljs.core.deref.call(null,cs);
var inst_32123 = cljs.core.seq.call(null,inst_32122);
var inst_32124 = inst_32123;
var inst_32125 = null;
var inst_32126 = (0);
var inst_32127 = (0);
var state_32247__$1 = (function (){var statearr_32308 = state_32247;
(statearr_32308[(13)] = inst_32127);

(statearr_32308[(14)] = inst_32124);

(statearr_32308[(15)] = inst_32126);

(statearr_32308[(17)] = inst_32125);

return statearr_32308;
})();
var statearr_32309_32371 = state_32247__$1;
(statearr_32309_32371[(2)] = null);

(statearr_32309_32371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (14))){
var state_32247__$1 = state_32247;
var statearr_32310_32372 = state_32247__$1;
(statearr_32310_32372[(2)] = null);

(statearr_32310_32372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (45))){
var inst_32237 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32311_32373 = state_32247__$1;
(statearr_32311_32373[(2)] = inst_32237);

(statearr_32311_32373[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (26))){
var inst_32179 = (state_32247[(29)]);
var inst_32233 = (state_32247[(2)]);
var inst_32234 = cljs.core.seq.call(null,inst_32179);
var state_32247__$1 = (function (){var statearr_32312 = state_32247;
(statearr_32312[(31)] = inst_32233);

return statearr_32312;
})();
if(inst_32234){
var statearr_32313_32374 = state_32247__$1;
(statearr_32313_32374[(1)] = (42));

} else {
var statearr_32314_32375 = state_32247__$1;
(statearr_32314_32375[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (16))){
var inst_32146 = (state_32247[(7)]);
var inst_32148 = cljs.core.chunked_seq_QMARK_.call(null,inst_32146);
var state_32247__$1 = state_32247;
if(inst_32148){
var statearr_32315_32376 = state_32247__$1;
(statearr_32315_32376[(1)] = (19));

} else {
var statearr_32316_32377 = state_32247__$1;
(statearr_32316_32377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (38))){
var inst_32226 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32317_32378 = state_32247__$1;
(statearr_32317_32378[(2)] = inst_32226);

(statearr_32317_32378[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (30))){
var state_32247__$1 = state_32247;
var statearr_32318_32379 = state_32247__$1;
(statearr_32318_32379[(2)] = null);

(statearr_32318_32379[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (10))){
var inst_32127 = (state_32247[(13)]);
var inst_32125 = (state_32247[(17)]);
var inst_32135 = cljs.core._nth.call(null,inst_32125,inst_32127);
var inst_32136 = cljs.core.nth.call(null,inst_32135,(0),null);
var inst_32137 = cljs.core.nth.call(null,inst_32135,(1),null);
var state_32247__$1 = (function (){var statearr_32319 = state_32247;
(statearr_32319[(26)] = inst_32136);

return statearr_32319;
})();
if(cljs.core.truth_(inst_32137)){
var statearr_32320_32380 = state_32247__$1;
(statearr_32320_32380[(1)] = (13));

} else {
var statearr_32321_32381 = state_32247__$1;
(statearr_32321_32381[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (18))){
var inst_32172 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32322_32382 = state_32247__$1;
(statearr_32322_32382[(2)] = inst_32172);

(statearr_32322_32382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (42))){
var state_32247__$1 = state_32247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32247__$1,(45),dchan);
} else {
if((state_val_32248 === (37))){
var inst_32215 = (state_32247[(23)]);
var inst_32206 = (state_32247[(25)]);
var inst_32115 = (state_32247[(11)]);
var inst_32215__$1 = cljs.core.first.call(null,inst_32206);
var inst_32216 = cljs.core.async.put_BANG_.call(null,inst_32215__$1,inst_32115,done);
var state_32247__$1 = (function (){var statearr_32323 = state_32247;
(statearr_32323[(23)] = inst_32215__$1);

return statearr_32323;
})();
if(cljs.core.truth_(inst_32216)){
var statearr_32324_32383 = state_32247__$1;
(statearr_32324_32383[(1)] = (39));

} else {
var statearr_32325_32384 = state_32247__$1;
(statearr_32325_32384[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (8))){
var inst_32127 = (state_32247[(13)]);
var inst_32126 = (state_32247[(15)]);
var inst_32129 = (inst_32127 < inst_32126);
var inst_32130 = inst_32129;
var state_32247__$1 = state_32247;
if(cljs.core.truth_(inst_32130)){
var statearr_32326_32385 = state_32247__$1;
(statearr_32326_32385[(1)] = (10));

} else {
var statearr_32327_32386 = state_32247__$1;
(statearr_32327_32386[(1)] = (11));

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
});})(c__31513__auto___32332,cs,m,dchan,dctr,done))
;
return ((function (switch__31418__auto__,c__31513__auto___32332,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31419__auto__ = null;
var cljs$core$async$mult_$_state_machine__31419__auto____0 = (function (){
var statearr_32328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32328[(0)] = cljs$core$async$mult_$_state_machine__31419__auto__);

(statearr_32328[(1)] = (1));

return statearr_32328;
});
var cljs$core$async$mult_$_state_machine__31419__auto____1 = (function (state_32247){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_32247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e32329){if((e32329 instanceof Object)){
var ex__31422__auto__ = e32329;
var statearr_32330_32387 = state_32247;
(statearr_32330_32387[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32388 = state_32247;
state_32247 = G__32388;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31419__auto__ = function(state_32247){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31419__auto____1.call(this,state_32247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31419__auto____0;
cljs$core$async$mult_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31419__auto____1;
return cljs$core$async$mult_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___32332,cs,m,dchan,dctr,done))
})();
var state__31515__auto__ = (function (){var statearr_32331 = f__31514__auto__.call(null);
(statearr_32331[(6)] = c__31513__auto___32332);

return statearr_32331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___32332,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32390 = arguments.length;
switch (G__32390) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32402 = arguments.length;
var i__4642__auto___32403 = (0);
while(true){
if((i__4642__auto___32403 < len__4641__auto___32402)){
args__4647__auto__.push((arguments[i__4642__auto___32403]));

var G__32404 = (i__4642__auto___32403 + (1));
i__4642__auto___32403 = G__32404;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32396){
var map__32397 = p__32396;
var map__32397__$1 = (((((!((map__32397 == null))))?(((((map__32397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32397):map__32397);
var opts = map__32397__$1;
var statearr_32399_32405 = state;
(statearr_32399_32405[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__32397,map__32397__$1,opts){
return (function (val){
var statearr_32400_32406 = state;
(statearr_32400_32406[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32397,map__32397__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32401_32407 = state;
(statearr_32401_32407[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32392){
var G__32393 = cljs.core.first.call(null,seq32392);
var seq32392__$1 = cljs.core.next.call(null,seq32392);
var G__32394 = cljs.core.first.call(null,seq32392__$1);
var seq32392__$2 = cljs.core.next.call(null,seq32392__$1);
var G__32395 = cljs.core.first.call(null,seq32392__$2);
var seq32392__$3 = cljs.core.next.call(null,seq32392__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32393,G__32394,G__32395,seq32392__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32408 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32409){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32409 = meta32409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32410,meta32409__$1){
var self__ = this;
var _32410__$1 = this;
return (new cljs.core.async.t_cljs$core$async32408(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32409__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32410){
var self__ = this;
var _32410__$1 = this;
return self__.meta32409;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32408.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32409","meta32409",1909839005,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32408";

cljs.core.async.t_cljs$core$async32408.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32408");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32408.
 */
cljs.core.async.__GT_t_cljs$core$async32408 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32408(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32409){
return (new cljs.core.async.t_cljs$core$async32408(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32409));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32408(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31513__auto___32572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___32572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___32572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32512){
var state_val_32513 = (state_32512[(1)]);
if((state_val_32513 === (7))){
var inst_32427 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
var statearr_32514_32573 = state_32512__$1;
(statearr_32514_32573[(2)] = inst_32427);

(statearr_32514_32573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (20))){
var inst_32439 = (state_32512[(7)]);
var state_32512__$1 = state_32512;
var statearr_32515_32574 = state_32512__$1;
(statearr_32515_32574[(2)] = inst_32439);

(statearr_32515_32574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (27))){
var state_32512__$1 = state_32512;
var statearr_32516_32575 = state_32512__$1;
(statearr_32516_32575[(2)] = null);

(statearr_32516_32575[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (1))){
var inst_32414 = (state_32512[(8)]);
var inst_32414__$1 = calc_state.call(null);
var inst_32416 = (inst_32414__$1 == null);
var inst_32417 = cljs.core.not.call(null,inst_32416);
var state_32512__$1 = (function (){var statearr_32517 = state_32512;
(statearr_32517[(8)] = inst_32414__$1);

return statearr_32517;
})();
if(inst_32417){
var statearr_32518_32576 = state_32512__$1;
(statearr_32518_32576[(1)] = (2));

} else {
var statearr_32519_32577 = state_32512__$1;
(statearr_32519_32577[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (24))){
var inst_32463 = (state_32512[(9)]);
var inst_32472 = (state_32512[(10)]);
var inst_32486 = (state_32512[(11)]);
var inst_32486__$1 = inst_32463.call(null,inst_32472);
var state_32512__$1 = (function (){var statearr_32520 = state_32512;
(statearr_32520[(11)] = inst_32486__$1);

return statearr_32520;
})();
if(cljs.core.truth_(inst_32486__$1)){
var statearr_32521_32578 = state_32512__$1;
(statearr_32521_32578[(1)] = (29));

} else {
var statearr_32522_32579 = state_32512__$1;
(statearr_32522_32579[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (4))){
var inst_32430 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
if(cljs.core.truth_(inst_32430)){
var statearr_32523_32580 = state_32512__$1;
(statearr_32523_32580[(1)] = (8));

} else {
var statearr_32524_32581 = state_32512__$1;
(statearr_32524_32581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (15))){
var inst_32457 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
if(cljs.core.truth_(inst_32457)){
var statearr_32525_32582 = state_32512__$1;
(statearr_32525_32582[(1)] = (19));

} else {
var statearr_32526_32583 = state_32512__$1;
(statearr_32526_32583[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (21))){
var inst_32462 = (state_32512[(12)]);
var inst_32462__$1 = (state_32512[(2)]);
var inst_32463 = cljs.core.get.call(null,inst_32462__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32464 = cljs.core.get.call(null,inst_32462__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32465 = cljs.core.get.call(null,inst_32462__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32512__$1 = (function (){var statearr_32527 = state_32512;
(statearr_32527[(12)] = inst_32462__$1);

(statearr_32527[(13)] = inst_32464);

(statearr_32527[(9)] = inst_32463);

return statearr_32527;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32512__$1,(22),inst_32465);
} else {
if((state_val_32513 === (31))){
var inst_32494 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
if(cljs.core.truth_(inst_32494)){
var statearr_32528_32584 = state_32512__$1;
(statearr_32528_32584[(1)] = (32));

} else {
var statearr_32529_32585 = state_32512__$1;
(statearr_32529_32585[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (32))){
var inst_32471 = (state_32512[(14)]);
var state_32512__$1 = state_32512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32512__$1,(35),out,inst_32471);
} else {
if((state_val_32513 === (33))){
var inst_32462 = (state_32512[(12)]);
var inst_32439 = inst_32462;
var state_32512__$1 = (function (){var statearr_32530 = state_32512;
(statearr_32530[(7)] = inst_32439);

return statearr_32530;
})();
var statearr_32531_32586 = state_32512__$1;
(statearr_32531_32586[(2)] = null);

(statearr_32531_32586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (13))){
var inst_32439 = (state_32512[(7)]);
var inst_32446 = inst_32439.cljs$lang$protocol_mask$partition0$;
var inst_32447 = (inst_32446 & (64));
var inst_32448 = inst_32439.cljs$core$ISeq$;
var inst_32449 = (cljs.core.PROTOCOL_SENTINEL === inst_32448);
var inst_32450 = ((inst_32447) || (inst_32449));
var state_32512__$1 = state_32512;
if(cljs.core.truth_(inst_32450)){
var statearr_32532_32587 = state_32512__$1;
(statearr_32532_32587[(1)] = (16));

} else {
var statearr_32533_32588 = state_32512__$1;
(statearr_32533_32588[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (22))){
var inst_32471 = (state_32512[(14)]);
var inst_32472 = (state_32512[(10)]);
var inst_32470 = (state_32512[(2)]);
var inst_32471__$1 = cljs.core.nth.call(null,inst_32470,(0),null);
var inst_32472__$1 = cljs.core.nth.call(null,inst_32470,(1),null);
var inst_32473 = (inst_32471__$1 == null);
var inst_32474 = cljs.core._EQ_.call(null,inst_32472__$1,change);
var inst_32475 = ((inst_32473) || (inst_32474));
var state_32512__$1 = (function (){var statearr_32534 = state_32512;
(statearr_32534[(14)] = inst_32471__$1);

(statearr_32534[(10)] = inst_32472__$1);

return statearr_32534;
})();
if(cljs.core.truth_(inst_32475)){
var statearr_32535_32589 = state_32512__$1;
(statearr_32535_32589[(1)] = (23));

} else {
var statearr_32536_32590 = state_32512__$1;
(statearr_32536_32590[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (36))){
var inst_32462 = (state_32512[(12)]);
var inst_32439 = inst_32462;
var state_32512__$1 = (function (){var statearr_32537 = state_32512;
(statearr_32537[(7)] = inst_32439);

return statearr_32537;
})();
var statearr_32538_32591 = state_32512__$1;
(statearr_32538_32591[(2)] = null);

(statearr_32538_32591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (29))){
var inst_32486 = (state_32512[(11)]);
var state_32512__$1 = state_32512;
var statearr_32539_32592 = state_32512__$1;
(statearr_32539_32592[(2)] = inst_32486);

(statearr_32539_32592[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (6))){
var state_32512__$1 = state_32512;
var statearr_32540_32593 = state_32512__$1;
(statearr_32540_32593[(2)] = false);

(statearr_32540_32593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (28))){
var inst_32482 = (state_32512[(2)]);
var inst_32483 = calc_state.call(null);
var inst_32439 = inst_32483;
var state_32512__$1 = (function (){var statearr_32541 = state_32512;
(statearr_32541[(7)] = inst_32439);

(statearr_32541[(15)] = inst_32482);

return statearr_32541;
})();
var statearr_32542_32594 = state_32512__$1;
(statearr_32542_32594[(2)] = null);

(statearr_32542_32594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (25))){
var inst_32508 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
var statearr_32543_32595 = state_32512__$1;
(statearr_32543_32595[(2)] = inst_32508);

(statearr_32543_32595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (34))){
var inst_32506 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
var statearr_32544_32596 = state_32512__$1;
(statearr_32544_32596[(2)] = inst_32506);

(statearr_32544_32596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (17))){
var state_32512__$1 = state_32512;
var statearr_32545_32597 = state_32512__$1;
(statearr_32545_32597[(2)] = false);

(statearr_32545_32597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (3))){
var state_32512__$1 = state_32512;
var statearr_32546_32598 = state_32512__$1;
(statearr_32546_32598[(2)] = false);

(statearr_32546_32598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (12))){
var inst_32510 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32512__$1,inst_32510);
} else {
if((state_val_32513 === (2))){
var inst_32414 = (state_32512[(8)]);
var inst_32419 = inst_32414.cljs$lang$protocol_mask$partition0$;
var inst_32420 = (inst_32419 & (64));
var inst_32421 = inst_32414.cljs$core$ISeq$;
var inst_32422 = (cljs.core.PROTOCOL_SENTINEL === inst_32421);
var inst_32423 = ((inst_32420) || (inst_32422));
var state_32512__$1 = state_32512;
if(cljs.core.truth_(inst_32423)){
var statearr_32547_32599 = state_32512__$1;
(statearr_32547_32599[(1)] = (5));

} else {
var statearr_32548_32600 = state_32512__$1;
(statearr_32548_32600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (23))){
var inst_32471 = (state_32512[(14)]);
var inst_32477 = (inst_32471 == null);
var state_32512__$1 = state_32512;
if(cljs.core.truth_(inst_32477)){
var statearr_32549_32601 = state_32512__$1;
(statearr_32549_32601[(1)] = (26));

} else {
var statearr_32550_32602 = state_32512__$1;
(statearr_32550_32602[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (35))){
var inst_32497 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
if(cljs.core.truth_(inst_32497)){
var statearr_32551_32603 = state_32512__$1;
(statearr_32551_32603[(1)] = (36));

} else {
var statearr_32552_32604 = state_32512__$1;
(statearr_32552_32604[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (19))){
var inst_32439 = (state_32512[(7)]);
var inst_32459 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32439);
var state_32512__$1 = state_32512;
var statearr_32553_32605 = state_32512__$1;
(statearr_32553_32605[(2)] = inst_32459);

(statearr_32553_32605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (11))){
var inst_32439 = (state_32512[(7)]);
var inst_32443 = (inst_32439 == null);
var inst_32444 = cljs.core.not.call(null,inst_32443);
var state_32512__$1 = state_32512;
if(inst_32444){
var statearr_32554_32606 = state_32512__$1;
(statearr_32554_32606[(1)] = (13));

} else {
var statearr_32555_32607 = state_32512__$1;
(statearr_32555_32607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (9))){
var inst_32414 = (state_32512[(8)]);
var state_32512__$1 = state_32512;
var statearr_32556_32608 = state_32512__$1;
(statearr_32556_32608[(2)] = inst_32414);

(statearr_32556_32608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (5))){
var state_32512__$1 = state_32512;
var statearr_32557_32609 = state_32512__$1;
(statearr_32557_32609[(2)] = true);

(statearr_32557_32609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (14))){
var state_32512__$1 = state_32512;
var statearr_32558_32610 = state_32512__$1;
(statearr_32558_32610[(2)] = false);

(statearr_32558_32610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (26))){
var inst_32472 = (state_32512[(10)]);
var inst_32479 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32472);
var state_32512__$1 = state_32512;
var statearr_32559_32611 = state_32512__$1;
(statearr_32559_32611[(2)] = inst_32479);

(statearr_32559_32611[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (16))){
var state_32512__$1 = state_32512;
var statearr_32560_32612 = state_32512__$1;
(statearr_32560_32612[(2)] = true);

(statearr_32560_32612[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (38))){
var inst_32502 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
var statearr_32561_32613 = state_32512__$1;
(statearr_32561_32613[(2)] = inst_32502);

(statearr_32561_32613[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (30))){
var inst_32464 = (state_32512[(13)]);
var inst_32463 = (state_32512[(9)]);
var inst_32472 = (state_32512[(10)]);
var inst_32489 = cljs.core.empty_QMARK_.call(null,inst_32463);
var inst_32490 = inst_32464.call(null,inst_32472);
var inst_32491 = cljs.core.not.call(null,inst_32490);
var inst_32492 = ((inst_32489) && (inst_32491));
var state_32512__$1 = state_32512;
var statearr_32562_32614 = state_32512__$1;
(statearr_32562_32614[(2)] = inst_32492);

(statearr_32562_32614[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (10))){
var inst_32414 = (state_32512[(8)]);
var inst_32435 = (state_32512[(2)]);
var inst_32436 = cljs.core.get.call(null,inst_32435,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32437 = cljs.core.get.call(null,inst_32435,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32438 = cljs.core.get.call(null,inst_32435,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32439 = inst_32414;
var state_32512__$1 = (function (){var statearr_32563 = state_32512;
(statearr_32563[(16)] = inst_32436);

(statearr_32563[(17)] = inst_32437);

(statearr_32563[(7)] = inst_32439);

(statearr_32563[(18)] = inst_32438);

return statearr_32563;
})();
var statearr_32564_32615 = state_32512__$1;
(statearr_32564_32615[(2)] = null);

(statearr_32564_32615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (18))){
var inst_32454 = (state_32512[(2)]);
var state_32512__$1 = state_32512;
var statearr_32565_32616 = state_32512__$1;
(statearr_32565_32616[(2)] = inst_32454);

(statearr_32565_32616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (37))){
var state_32512__$1 = state_32512;
var statearr_32566_32617 = state_32512__$1;
(statearr_32566_32617[(2)] = null);

(statearr_32566_32617[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32513 === (8))){
var inst_32414 = (state_32512[(8)]);
var inst_32432 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32414);
var state_32512__$1 = state_32512;
var statearr_32567_32618 = state_32512__$1;
(statearr_32567_32618[(2)] = inst_32432);

(statearr_32567_32618[(1)] = (10));


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
});})(c__31513__auto___32572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31418__auto__,c__31513__auto___32572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31419__auto__ = null;
var cljs$core$async$mix_$_state_machine__31419__auto____0 = (function (){
var statearr_32568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32568[(0)] = cljs$core$async$mix_$_state_machine__31419__auto__);

(statearr_32568[(1)] = (1));

return statearr_32568;
});
var cljs$core$async$mix_$_state_machine__31419__auto____1 = (function (state_32512){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_32512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e32569){if((e32569 instanceof Object)){
var ex__31422__auto__ = e32569;
var statearr_32570_32619 = state_32512;
(statearr_32570_32619[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32620 = state_32512;
state_32512 = G__32620;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31419__auto__ = function(state_32512){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31419__auto____1.call(this,state_32512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31419__auto____0;
cljs$core$async$mix_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31419__auto____1;
return cljs$core$async$mix_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___32572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31515__auto__ = (function (){var statearr_32571 = f__31514__auto__.call(null);
(statearr_32571[(6)] = c__31513__auto___32572);

return statearr_32571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___32572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32622 = arguments.length;
switch (G__32622) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32626 = arguments.length;
switch (G__32626) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__32624_SHARP_){
if(cljs.core.truth_(p1__32624_SHARP_.call(null,topic))){
return p1__32624_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32624_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32627 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32628){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32628 = meta32628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32629,meta32628__$1){
var self__ = this;
var _32629__$1 = this;
return (new cljs.core.async.t_cljs$core$async32627(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32628__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32629){
var self__ = this;
var _32629__$1 = this;
return self__.meta32628;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32627.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32628","meta32628",-456206605,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32627";

cljs.core.async.t_cljs$core$async32627.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32627");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32627.
 */
cljs.core.async.__GT_t_cljs$core$async32627 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32627(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32628){
return (new cljs.core.async.t_cljs$core$async32627(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32628));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32627(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31513__auto___32747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___32747,mults,ensure_mult,p){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___32747,mults,ensure_mult,p){
return (function (state_32701){
var state_val_32702 = (state_32701[(1)]);
if((state_val_32702 === (7))){
var inst_32697 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32703_32748 = state_32701__$1;
(statearr_32703_32748[(2)] = inst_32697);

(statearr_32703_32748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (20))){
var state_32701__$1 = state_32701;
var statearr_32704_32749 = state_32701__$1;
(statearr_32704_32749[(2)] = null);

(statearr_32704_32749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (1))){
var state_32701__$1 = state_32701;
var statearr_32705_32750 = state_32701__$1;
(statearr_32705_32750[(2)] = null);

(statearr_32705_32750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (24))){
var inst_32680 = (state_32701[(7)]);
var inst_32689 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32680);
var state_32701__$1 = state_32701;
var statearr_32706_32751 = state_32701__$1;
(statearr_32706_32751[(2)] = inst_32689);

(statearr_32706_32751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (4))){
var inst_32632 = (state_32701[(8)]);
var inst_32632__$1 = (state_32701[(2)]);
var inst_32633 = (inst_32632__$1 == null);
var state_32701__$1 = (function (){var statearr_32707 = state_32701;
(statearr_32707[(8)] = inst_32632__$1);

return statearr_32707;
})();
if(cljs.core.truth_(inst_32633)){
var statearr_32708_32752 = state_32701__$1;
(statearr_32708_32752[(1)] = (5));

} else {
var statearr_32709_32753 = state_32701__$1;
(statearr_32709_32753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (15))){
var inst_32674 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32710_32754 = state_32701__$1;
(statearr_32710_32754[(2)] = inst_32674);

(statearr_32710_32754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (21))){
var inst_32694 = (state_32701[(2)]);
var state_32701__$1 = (function (){var statearr_32711 = state_32701;
(statearr_32711[(9)] = inst_32694);

return statearr_32711;
})();
var statearr_32712_32755 = state_32701__$1;
(statearr_32712_32755[(2)] = null);

(statearr_32712_32755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (13))){
var inst_32656 = (state_32701[(10)]);
var inst_32658 = cljs.core.chunked_seq_QMARK_.call(null,inst_32656);
var state_32701__$1 = state_32701;
if(inst_32658){
var statearr_32713_32756 = state_32701__$1;
(statearr_32713_32756[(1)] = (16));

} else {
var statearr_32714_32757 = state_32701__$1;
(statearr_32714_32757[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (22))){
var inst_32686 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
if(cljs.core.truth_(inst_32686)){
var statearr_32715_32758 = state_32701__$1;
(statearr_32715_32758[(1)] = (23));

} else {
var statearr_32716_32759 = state_32701__$1;
(statearr_32716_32759[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (6))){
var inst_32682 = (state_32701[(11)]);
var inst_32632 = (state_32701[(8)]);
var inst_32680 = (state_32701[(7)]);
var inst_32680__$1 = topic_fn.call(null,inst_32632);
var inst_32681 = cljs.core.deref.call(null,mults);
var inst_32682__$1 = cljs.core.get.call(null,inst_32681,inst_32680__$1);
var state_32701__$1 = (function (){var statearr_32717 = state_32701;
(statearr_32717[(11)] = inst_32682__$1);

(statearr_32717[(7)] = inst_32680__$1);

return statearr_32717;
})();
if(cljs.core.truth_(inst_32682__$1)){
var statearr_32718_32760 = state_32701__$1;
(statearr_32718_32760[(1)] = (19));

} else {
var statearr_32719_32761 = state_32701__$1;
(statearr_32719_32761[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (25))){
var inst_32691 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32720_32762 = state_32701__$1;
(statearr_32720_32762[(2)] = inst_32691);

(statearr_32720_32762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (17))){
var inst_32656 = (state_32701[(10)]);
var inst_32665 = cljs.core.first.call(null,inst_32656);
var inst_32666 = cljs.core.async.muxch_STAR_.call(null,inst_32665);
var inst_32667 = cljs.core.async.close_BANG_.call(null,inst_32666);
var inst_32668 = cljs.core.next.call(null,inst_32656);
var inst_32642 = inst_32668;
var inst_32643 = null;
var inst_32644 = (0);
var inst_32645 = (0);
var state_32701__$1 = (function (){var statearr_32721 = state_32701;
(statearr_32721[(12)] = inst_32667);

(statearr_32721[(13)] = inst_32644);

(statearr_32721[(14)] = inst_32642);

(statearr_32721[(15)] = inst_32645);

(statearr_32721[(16)] = inst_32643);

return statearr_32721;
})();
var statearr_32722_32763 = state_32701__$1;
(statearr_32722_32763[(2)] = null);

(statearr_32722_32763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (3))){
var inst_32699 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32701__$1,inst_32699);
} else {
if((state_val_32702 === (12))){
var inst_32676 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32723_32764 = state_32701__$1;
(statearr_32723_32764[(2)] = inst_32676);

(statearr_32723_32764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (2))){
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32701__$1,(4),ch);
} else {
if((state_val_32702 === (23))){
var state_32701__$1 = state_32701;
var statearr_32724_32765 = state_32701__$1;
(statearr_32724_32765[(2)] = null);

(statearr_32724_32765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (19))){
var inst_32682 = (state_32701[(11)]);
var inst_32632 = (state_32701[(8)]);
var inst_32684 = cljs.core.async.muxch_STAR_.call(null,inst_32682);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32701__$1,(22),inst_32684,inst_32632);
} else {
if((state_val_32702 === (11))){
var inst_32656 = (state_32701[(10)]);
var inst_32642 = (state_32701[(14)]);
var inst_32656__$1 = cljs.core.seq.call(null,inst_32642);
var state_32701__$1 = (function (){var statearr_32725 = state_32701;
(statearr_32725[(10)] = inst_32656__$1);

return statearr_32725;
})();
if(inst_32656__$1){
var statearr_32726_32766 = state_32701__$1;
(statearr_32726_32766[(1)] = (13));

} else {
var statearr_32727_32767 = state_32701__$1;
(statearr_32727_32767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (9))){
var inst_32678 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32728_32768 = state_32701__$1;
(statearr_32728_32768[(2)] = inst_32678);

(statearr_32728_32768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (5))){
var inst_32639 = cljs.core.deref.call(null,mults);
var inst_32640 = cljs.core.vals.call(null,inst_32639);
var inst_32641 = cljs.core.seq.call(null,inst_32640);
var inst_32642 = inst_32641;
var inst_32643 = null;
var inst_32644 = (0);
var inst_32645 = (0);
var state_32701__$1 = (function (){var statearr_32729 = state_32701;
(statearr_32729[(13)] = inst_32644);

(statearr_32729[(14)] = inst_32642);

(statearr_32729[(15)] = inst_32645);

(statearr_32729[(16)] = inst_32643);

return statearr_32729;
})();
var statearr_32730_32769 = state_32701__$1;
(statearr_32730_32769[(2)] = null);

(statearr_32730_32769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (14))){
var state_32701__$1 = state_32701;
var statearr_32734_32770 = state_32701__$1;
(statearr_32734_32770[(2)] = null);

(statearr_32734_32770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (16))){
var inst_32656 = (state_32701[(10)]);
var inst_32660 = cljs.core.chunk_first.call(null,inst_32656);
var inst_32661 = cljs.core.chunk_rest.call(null,inst_32656);
var inst_32662 = cljs.core.count.call(null,inst_32660);
var inst_32642 = inst_32661;
var inst_32643 = inst_32660;
var inst_32644 = inst_32662;
var inst_32645 = (0);
var state_32701__$1 = (function (){var statearr_32735 = state_32701;
(statearr_32735[(13)] = inst_32644);

(statearr_32735[(14)] = inst_32642);

(statearr_32735[(15)] = inst_32645);

(statearr_32735[(16)] = inst_32643);

return statearr_32735;
})();
var statearr_32736_32771 = state_32701__$1;
(statearr_32736_32771[(2)] = null);

(statearr_32736_32771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (10))){
var inst_32644 = (state_32701[(13)]);
var inst_32642 = (state_32701[(14)]);
var inst_32645 = (state_32701[(15)]);
var inst_32643 = (state_32701[(16)]);
var inst_32650 = cljs.core._nth.call(null,inst_32643,inst_32645);
var inst_32651 = cljs.core.async.muxch_STAR_.call(null,inst_32650);
var inst_32652 = cljs.core.async.close_BANG_.call(null,inst_32651);
var inst_32653 = (inst_32645 + (1));
var tmp32731 = inst_32644;
var tmp32732 = inst_32642;
var tmp32733 = inst_32643;
var inst_32642__$1 = tmp32732;
var inst_32643__$1 = tmp32733;
var inst_32644__$1 = tmp32731;
var inst_32645__$1 = inst_32653;
var state_32701__$1 = (function (){var statearr_32737 = state_32701;
(statearr_32737[(13)] = inst_32644__$1);

(statearr_32737[(17)] = inst_32652);

(statearr_32737[(14)] = inst_32642__$1);

(statearr_32737[(15)] = inst_32645__$1);

(statearr_32737[(16)] = inst_32643__$1);

return statearr_32737;
})();
var statearr_32738_32772 = state_32701__$1;
(statearr_32738_32772[(2)] = null);

(statearr_32738_32772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (18))){
var inst_32671 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32739_32773 = state_32701__$1;
(statearr_32739_32773[(2)] = inst_32671);

(statearr_32739_32773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (8))){
var inst_32644 = (state_32701[(13)]);
var inst_32645 = (state_32701[(15)]);
var inst_32647 = (inst_32645 < inst_32644);
var inst_32648 = inst_32647;
var state_32701__$1 = state_32701;
if(cljs.core.truth_(inst_32648)){
var statearr_32740_32774 = state_32701__$1;
(statearr_32740_32774[(1)] = (10));

} else {
var statearr_32741_32775 = state_32701__$1;
(statearr_32741_32775[(1)] = (11));

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
});})(c__31513__auto___32747,mults,ensure_mult,p))
;
return ((function (switch__31418__auto__,c__31513__auto___32747,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_32742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32742[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_32742[(1)] = (1));

return statearr_32742;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_32701){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_32701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e32743){if((e32743 instanceof Object)){
var ex__31422__auto__ = e32743;
var statearr_32744_32776 = state_32701;
(statearr_32744_32776[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32777 = state_32701;
state_32701 = G__32777;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_32701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_32701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___32747,mults,ensure_mult,p))
})();
var state__31515__auto__ = (function (){var statearr_32745 = f__31514__auto__.call(null);
(statearr_32745[(6)] = c__31513__auto___32747);

return statearr_32745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___32747,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32779 = arguments.length;
switch (G__32779) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32782 = arguments.length;
switch (G__32782) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32785 = arguments.length;
switch (G__32785) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31513__auto___32852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___32852,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___32852,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32824){
var state_val_32825 = (state_32824[(1)]);
if((state_val_32825 === (7))){
var state_32824__$1 = state_32824;
var statearr_32826_32853 = state_32824__$1;
(statearr_32826_32853[(2)] = null);

(statearr_32826_32853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (1))){
var state_32824__$1 = state_32824;
var statearr_32827_32854 = state_32824__$1;
(statearr_32827_32854[(2)] = null);

(statearr_32827_32854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (4))){
var inst_32788 = (state_32824[(7)]);
var inst_32790 = (inst_32788 < cnt);
var state_32824__$1 = state_32824;
if(cljs.core.truth_(inst_32790)){
var statearr_32828_32855 = state_32824__$1;
(statearr_32828_32855[(1)] = (6));

} else {
var statearr_32829_32856 = state_32824__$1;
(statearr_32829_32856[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (15))){
var inst_32820 = (state_32824[(2)]);
var state_32824__$1 = state_32824;
var statearr_32830_32857 = state_32824__$1;
(statearr_32830_32857[(2)] = inst_32820);

(statearr_32830_32857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (13))){
var inst_32813 = cljs.core.async.close_BANG_.call(null,out);
var state_32824__$1 = state_32824;
var statearr_32831_32858 = state_32824__$1;
(statearr_32831_32858[(2)] = inst_32813);

(statearr_32831_32858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (6))){
var state_32824__$1 = state_32824;
var statearr_32832_32859 = state_32824__$1;
(statearr_32832_32859[(2)] = null);

(statearr_32832_32859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (3))){
var inst_32822 = (state_32824[(2)]);
var state_32824__$1 = state_32824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32824__$1,inst_32822);
} else {
if((state_val_32825 === (12))){
var inst_32810 = (state_32824[(8)]);
var inst_32810__$1 = (state_32824[(2)]);
var inst_32811 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32810__$1);
var state_32824__$1 = (function (){var statearr_32833 = state_32824;
(statearr_32833[(8)] = inst_32810__$1);

return statearr_32833;
})();
if(cljs.core.truth_(inst_32811)){
var statearr_32834_32860 = state_32824__$1;
(statearr_32834_32860[(1)] = (13));

} else {
var statearr_32835_32861 = state_32824__$1;
(statearr_32835_32861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (2))){
var inst_32787 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32788 = (0);
var state_32824__$1 = (function (){var statearr_32836 = state_32824;
(statearr_32836[(9)] = inst_32787);

(statearr_32836[(7)] = inst_32788);

return statearr_32836;
})();
var statearr_32837_32862 = state_32824__$1;
(statearr_32837_32862[(2)] = null);

(statearr_32837_32862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (11))){
var inst_32788 = (state_32824[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32824,(10),Object,null,(9));
var inst_32797 = chs__$1.call(null,inst_32788);
var inst_32798 = done.call(null,inst_32788);
var inst_32799 = cljs.core.async.take_BANG_.call(null,inst_32797,inst_32798);
var state_32824__$1 = state_32824;
var statearr_32838_32863 = state_32824__$1;
(statearr_32838_32863[(2)] = inst_32799);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32824__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (9))){
var inst_32788 = (state_32824[(7)]);
var inst_32801 = (state_32824[(2)]);
var inst_32802 = (inst_32788 + (1));
var inst_32788__$1 = inst_32802;
var state_32824__$1 = (function (){var statearr_32839 = state_32824;
(statearr_32839[(7)] = inst_32788__$1);

(statearr_32839[(10)] = inst_32801);

return statearr_32839;
})();
var statearr_32840_32864 = state_32824__$1;
(statearr_32840_32864[(2)] = null);

(statearr_32840_32864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (5))){
var inst_32808 = (state_32824[(2)]);
var state_32824__$1 = (function (){var statearr_32841 = state_32824;
(statearr_32841[(11)] = inst_32808);

return statearr_32841;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32824__$1,(12),dchan);
} else {
if((state_val_32825 === (14))){
var inst_32810 = (state_32824[(8)]);
var inst_32815 = cljs.core.apply.call(null,f,inst_32810);
var state_32824__$1 = state_32824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32824__$1,(16),out,inst_32815);
} else {
if((state_val_32825 === (16))){
var inst_32817 = (state_32824[(2)]);
var state_32824__$1 = (function (){var statearr_32842 = state_32824;
(statearr_32842[(12)] = inst_32817);

return statearr_32842;
})();
var statearr_32843_32865 = state_32824__$1;
(statearr_32843_32865[(2)] = null);

(statearr_32843_32865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (10))){
var inst_32792 = (state_32824[(2)]);
var inst_32793 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32824__$1 = (function (){var statearr_32844 = state_32824;
(statearr_32844[(13)] = inst_32792);

return statearr_32844;
})();
var statearr_32845_32866 = state_32824__$1;
(statearr_32845_32866[(2)] = inst_32793);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32824__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (8))){
var inst_32806 = (state_32824[(2)]);
var state_32824__$1 = state_32824;
var statearr_32846_32867 = state_32824__$1;
(statearr_32846_32867[(2)] = inst_32806);

(statearr_32846_32867[(1)] = (5));


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
});})(c__31513__auto___32852,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31418__auto__,c__31513__auto___32852,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_32847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32847[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_32847[(1)] = (1));

return statearr_32847;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_32824){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_32824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e32848){if((e32848 instanceof Object)){
var ex__31422__auto__ = e32848;
var statearr_32849_32868 = state_32824;
(statearr_32849_32868[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32869 = state_32824;
state_32824 = G__32869;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_32824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_32824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___32852,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31515__auto__ = (function (){var statearr_32850 = f__31514__auto__.call(null);
(statearr_32850[(6)] = c__31513__auto___32852);

return statearr_32850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___32852,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32872 = arguments.length;
switch (G__32872) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31513__auto___32926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___32926,out){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___32926,out){
return (function (state_32904){
var state_val_32905 = (state_32904[(1)]);
if((state_val_32905 === (7))){
var inst_32883 = (state_32904[(7)]);
var inst_32884 = (state_32904[(8)]);
var inst_32883__$1 = (state_32904[(2)]);
var inst_32884__$1 = cljs.core.nth.call(null,inst_32883__$1,(0),null);
var inst_32885 = cljs.core.nth.call(null,inst_32883__$1,(1),null);
var inst_32886 = (inst_32884__$1 == null);
var state_32904__$1 = (function (){var statearr_32906 = state_32904;
(statearr_32906[(9)] = inst_32885);

(statearr_32906[(7)] = inst_32883__$1);

(statearr_32906[(8)] = inst_32884__$1);

return statearr_32906;
})();
if(cljs.core.truth_(inst_32886)){
var statearr_32907_32927 = state_32904__$1;
(statearr_32907_32927[(1)] = (8));

} else {
var statearr_32908_32928 = state_32904__$1;
(statearr_32908_32928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (1))){
var inst_32873 = cljs.core.vec.call(null,chs);
var inst_32874 = inst_32873;
var state_32904__$1 = (function (){var statearr_32909 = state_32904;
(statearr_32909[(10)] = inst_32874);

return statearr_32909;
})();
var statearr_32910_32929 = state_32904__$1;
(statearr_32910_32929[(2)] = null);

(statearr_32910_32929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (4))){
var inst_32874 = (state_32904[(10)]);
var state_32904__$1 = state_32904;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32904__$1,(7),inst_32874);
} else {
if((state_val_32905 === (6))){
var inst_32900 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32911_32930 = state_32904__$1;
(statearr_32911_32930[(2)] = inst_32900);

(statearr_32911_32930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (3))){
var inst_32902 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32904__$1,inst_32902);
} else {
if((state_val_32905 === (2))){
var inst_32874 = (state_32904[(10)]);
var inst_32876 = cljs.core.count.call(null,inst_32874);
var inst_32877 = (inst_32876 > (0));
var state_32904__$1 = state_32904;
if(cljs.core.truth_(inst_32877)){
var statearr_32913_32931 = state_32904__$1;
(statearr_32913_32931[(1)] = (4));

} else {
var statearr_32914_32932 = state_32904__$1;
(statearr_32914_32932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (11))){
var inst_32874 = (state_32904[(10)]);
var inst_32893 = (state_32904[(2)]);
var tmp32912 = inst_32874;
var inst_32874__$1 = tmp32912;
var state_32904__$1 = (function (){var statearr_32915 = state_32904;
(statearr_32915[(11)] = inst_32893);

(statearr_32915[(10)] = inst_32874__$1);

return statearr_32915;
})();
var statearr_32916_32933 = state_32904__$1;
(statearr_32916_32933[(2)] = null);

(statearr_32916_32933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (9))){
var inst_32884 = (state_32904[(8)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32904__$1,(11),out,inst_32884);
} else {
if((state_val_32905 === (5))){
var inst_32898 = cljs.core.async.close_BANG_.call(null,out);
var state_32904__$1 = state_32904;
var statearr_32917_32934 = state_32904__$1;
(statearr_32917_32934[(2)] = inst_32898);

(statearr_32917_32934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (10))){
var inst_32896 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32918_32935 = state_32904__$1;
(statearr_32918_32935[(2)] = inst_32896);

(statearr_32918_32935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (8))){
var inst_32885 = (state_32904[(9)]);
var inst_32883 = (state_32904[(7)]);
var inst_32874 = (state_32904[(10)]);
var inst_32884 = (state_32904[(8)]);
var inst_32888 = (function (){var cs = inst_32874;
var vec__32879 = inst_32883;
var v = inst_32884;
var c = inst_32885;
return ((function (cs,vec__32879,v,c,inst_32885,inst_32883,inst_32874,inst_32884,state_val_32905,c__31513__auto___32926,out){
return (function (p1__32870_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32870_SHARP_);
});
;})(cs,vec__32879,v,c,inst_32885,inst_32883,inst_32874,inst_32884,state_val_32905,c__31513__auto___32926,out))
})();
var inst_32889 = cljs.core.filterv.call(null,inst_32888,inst_32874);
var inst_32874__$1 = inst_32889;
var state_32904__$1 = (function (){var statearr_32919 = state_32904;
(statearr_32919[(10)] = inst_32874__$1);

return statearr_32919;
})();
var statearr_32920_32936 = state_32904__$1;
(statearr_32920_32936[(2)] = null);

(statearr_32920_32936[(1)] = (2));


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
});})(c__31513__auto___32926,out))
;
return ((function (switch__31418__auto__,c__31513__auto___32926,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_32921 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32921[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_32921[(1)] = (1));

return statearr_32921;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_32904){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_32904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e32922){if((e32922 instanceof Object)){
var ex__31422__auto__ = e32922;
var statearr_32923_32937 = state_32904;
(statearr_32923_32937[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32938 = state_32904;
state_32904 = G__32938;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_32904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_32904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___32926,out))
})();
var state__31515__auto__ = (function (){var statearr_32924 = f__31514__auto__.call(null);
(statearr_32924[(6)] = c__31513__auto___32926);

return statearr_32924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___32926,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32940 = arguments.length;
switch (G__32940) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31513__auto___32985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___32985,out){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___32985,out){
return (function (state_32964){
var state_val_32965 = (state_32964[(1)]);
if((state_val_32965 === (7))){
var inst_32946 = (state_32964[(7)]);
var inst_32946__$1 = (state_32964[(2)]);
var inst_32947 = (inst_32946__$1 == null);
var inst_32948 = cljs.core.not.call(null,inst_32947);
var state_32964__$1 = (function (){var statearr_32966 = state_32964;
(statearr_32966[(7)] = inst_32946__$1);

return statearr_32966;
})();
if(inst_32948){
var statearr_32967_32986 = state_32964__$1;
(statearr_32967_32986[(1)] = (8));

} else {
var statearr_32968_32987 = state_32964__$1;
(statearr_32968_32987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (1))){
var inst_32941 = (0);
var state_32964__$1 = (function (){var statearr_32969 = state_32964;
(statearr_32969[(8)] = inst_32941);

return statearr_32969;
})();
var statearr_32970_32988 = state_32964__$1;
(statearr_32970_32988[(2)] = null);

(statearr_32970_32988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (4))){
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32964__$1,(7),ch);
} else {
if((state_val_32965 === (6))){
var inst_32959 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_32971_32989 = state_32964__$1;
(statearr_32971_32989[(2)] = inst_32959);

(statearr_32971_32989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (3))){
var inst_32961 = (state_32964[(2)]);
var inst_32962 = cljs.core.async.close_BANG_.call(null,out);
var state_32964__$1 = (function (){var statearr_32972 = state_32964;
(statearr_32972[(9)] = inst_32961);

return statearr_32972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32964__$1,inst_32962);
} else {
if((state_val_32965 === (2))){
var inst_32941 = (state_32964[(8)]);
var inst_32943 = (inst_32941 < n);
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32943)){
var statearr_32973_32990 = state_32964__$1;
(statearr_32973_32990[(1)] = (4));

} else {
var statearr_32974_32991 = state_32964__$1;
(statearr_32974_32991[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (11))){
var inst_32941 = (state_32964[(8)]);
var inst_32951 = (state_32964[(2)]);
var inst_32952 = (inst_32941 + (1));
var inst_32941__$1 = inst_32952;
var state_32964__$1 = (function (){var statearr_32975 = state_32964;
(statearr_32975[(8)] = inst_32941__$1);

(statearr_32975[(10)] = inst_32951);

return statearr_32975;
})();
var statearr_32976_32992 = state_32964__$1;
(statearr_32976_32992[(2)] = null);

(statearr_32976_32992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (9))){
var state_32964__$1 = state_32964;
var statearr_32977_32993 = state_32964__$1;
(statearr_32977_32993[(2)] = null);

(statearr_32977_32993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (5))){
var state_32964__$1 = state_32964;
var statearr_32978_32994 = state_32964__$1;
(statearr_32978_32994[(2)] = null);

(statearr_32978_32994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (10))){
var inst_32956 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_32979_32995 = state_32964__$1;
(statearr_32979_32995[(2)] = inst_32956);

(statearr_32979_32995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (8))){
var inst_32946 = (state_32964[(7)]);
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32964__$1,(11),out,inst_32946);
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
});})(c__31513__auto___32985,out))
;
return ((function (switch__31418__auto__,c__31513__auto___32985,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_32980 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32980[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_32980[(1)] = (1));

return statearr_32980;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_32964){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_32964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e32981){if((e32981 instanceof Object)){
var ex__31422__auto__ = e32981;
var statearr_32982_32996 = state_32964;
(statearr_32982_32996[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32997 = state_32964;
state_32964 = G__32997;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_32964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_32964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___32985,out))
})();
var state__31515__auto__ = (function (){var statearr_32983 = f__31514__auto__.call(null);
(statearr_32983[(6)] = c__31513__auto___32985);

return statearr_32983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___32985,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32999 = (function (f,ch,meta33000){
this.f = f;
this.ch = ch;
this.meta33000 = meta33000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33001,meta33000__$1){
var self__ = this;
var _33001__$1 = this;
return (new cljs.core.async.t_cljs$core$async32999(self__.f,self__.ch,meta33000__$1));
});

cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33001){
var self__ = this;
var _33001__$1 = this;
return self__.meta33000;
});

cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33002 = (function (f,ch,meta33000,_,fn1,meta33003){
this.f = f;
this.ch = ch;
this.meta33000 = meta33000;
this._ = _;
this.fn1 = fn1;
this.meta33003 = meta33003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33004,meta33003__$1){
var self__ = this;
var _33004__$1 = this;
return (new cljs.core.async.t_cljs$core$async33002(self__.f,self__.ch,self__.meta33000,self__._,self__.fn1,meta33003__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33004){
var self__ = this;
var _33004__$1 = this;
return self__.meta33003;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33002.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32998_SHARP_){
return f1.call(null,(((p1__32998_SHARP_ == null))?null:self__.f.call(null,p1__32998_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33002.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33000","meta33000",1845282059,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32999","cljs.core.async/t_cljs$core$async32999",-512314169,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33003","meta33003",1992060504,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33002";

cljs.core.async.t_cljs$core$async33002.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33002");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33002.
 */
cljs.core.async.__GT_t_cljs$core$async33002 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33002(f__$1,ch__$1,meta33000__$1,___$2,fn1__$1,meta33003){
return (new cljs.core.async.t_cljs$core$async33002(f__$1,ch__$1,meta33000__$1,___$2,fn1__$1,meta33003));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33002(self__.f,self__.ch,self__.meta33000,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33000","meta33000",1845282059,null)], null);
});

cljs.core.async.t_cljs$core$async32999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32999";

cljs.core.async.t_cljs$core$async32999.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32999");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32999.
 */
cljs.core.async.__GT_t_cljs$core$async32999 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32999(f__$1,ch__$1,meta33000){
return (new cljs.core.async.t_cljs$core$async32999(f__$1,ch__$1,meta33000));
});

}

return (new cljs.core.async.t_cljs$core$async32999(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33005 = (function (f,ch,meta33006){
this.f = f;
this.ch = ch;
this.meta33006 = meta33006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33007,meta33006__$1){
var self__ = this;
var _33007__$1 = this;
return (new cljs.core.async.t_cljs$core$async33005(self__.f,self__.ch,meta33006__$1));
});

cljs.core.async.t_cljs$core$async33005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33007){
var self__ = this;
var _33007__$1 = this;
return self__.meta33006;
});

cljs.core.async.t_cljs$core$async33005.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33005.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33005.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33006","meta33006",-721957965,null)], null);
});

cljs.core.async.t_cljs$core$async33005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33005";

cljs.core.async.t_cljs$core$async33005.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33005");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33005.
 */
cljs.core.async.__GT_t_cljs$core$async33005 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33005(f__$1,ch__$1,meta33006){
return (new cljs.core.async.t_cljs$core$async33005(f__$1,ch__$1,meta33006));
});

}

return (new cljs.core.async.t_cljs$core$async33005(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33008 = (function (p,ch,meta33009){
this.p = p;
this.ch = ch;
this.meta33009 = meta33009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33010,meta33009__$1){
var self__ = this;
var _33010__$1 = this;
return (new cljs.core.async.t_cljs$core$async33008(self__.p,self__.ch,meta33009__$1));
});

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33010){
var self__ = this;
var _33010__$1 = this;
return self__.meta33009;
});

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33009","meta33009",-581503541,null)], null);
});

cljs.core.async.t_cljs$core$async33008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33008";

cljs.core.async.t_cljs$core$async33008.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33008");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33008.
 */
cljs.core.async.__GT_t_cljs$core$async33008 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33008(p__$1,ch__$1,meta33009){
return (new cljs.core.async.t_cljs$core$async33008(p__$1,ch__$1,meta33009));
});

}

return (new cljs.core.async.t_cljs$core$async33008(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33012 = arguments.length;
switch (G__33012) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31513__auto___33052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___33052,out){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___33052,out){
return (function (state_33033){
var state_val_33034 = (state_33033[(1)]);
if((state_val_33034 === (7))){
var inst_33029 = (state_33033[(2)]);
var state_33033__$1 = state_33033;
var statearr_33035_33053 = state_33033__$1;
(statearr_33035_33053[(2)] = inst_33029);

(statearr_33035_33053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (1))){
var state_33033__$1 = state_33033;
var statearr_33036_33054 = state_33033__$1;
(statearr_33036_33054[(2)] = null);

(statearr_33036_33054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (4))){
var inst_33015 = (state_33033[(7)]);
var inst_33015__$1 = (state_33033[(2)]);
var inst_33016 = (inst_33015__$1 == null);
var state_33033__$1 = (function (){var statearr_33037 = state_33033;
(statearr_33037[(7)] = inst_33015__$1);

return statearr_33037;
})();
if(cljs.core.truth_(inst_33016)){
var statearr_33038_33055 = state_33033__$1;
(statearr_33038_33055[(1)] = (5));

} else {
var statearr_33039_33056 = state_33033__$1;
(statearr_33039_33056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (6))){
var inst_33015 = (state_33033[(7)]);
var inst_33020 = p.call(null,inst_33015);
var state_33033__$1 = state_33033;
if(cljs.core.truth_(inst_33020)){
var statearr_33040_33057 = state_33033__$1;
(statearr_33040_33057[(1)] = (8));

} else {
var statearr_33041_33058 = state_33033__$1;
(statearr_33041_33058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (3))){
var inst_33031 = (state_33033[(2)]);
var state_33033__$1 = state_33033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33033__$1,inst_33031);
} else {
if((state_val_33034 === (2))){
var state_33033__$1 = state_33033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33033__$1,(4),ch);
} else {
if((state_val_33034 === (11))){
var inst_33023 = (state_33033[(2)]);
var state_33033__$1 = state_33033;
var statearr_33042_33059 = state_33033__$1;
(statearr_33042_33059[(2)] = inst_33023);

(statearr_33042_33059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (9))){
var state_33033__$1 = state_33033;
var statearr_33043_33060 = state_33033__$1;
(statearr_33043_33060[(2)] = null);

(statearr_33043_33060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (5))){
var inst_33018 = cljs.core.async.close_BANG_.call(null,out);
var state_33033__$1 = state_33033;
var statearr_33044_33061 = state_33033__$1;
(statearr_33044_33061[(2)] = inst_33018);

(statearr_33044_33061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (10))){
var inst_33026 = (state_33033[(2)]);
var state_33033__$1 = (function (){var statearr_33045 = state_33033;
(statearr_33045[(8)] = inst_33026);

return statearr_33045;
})();
var statearr_33046_33062 = state_33033__$1;
(statearr_33046_33062[(2)] = null);

(statearr_33046_33062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (8))){
var inst_33015 = (state_33033[(7)]);
var state_33033__$1 = state_33033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33033__$1,(11),out,inst_33015);
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
});})(c__31513__auto___33052,out))
;
return ((function (switch__31418__auto__,c__31513__auto___33052,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_33047 = [null,null,null,null,null,null,null,null,null];
(statearr_33047[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_33047[(1)] = (1));

return statearr_33047;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_33033){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_33033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e33048){if((e33048 instanceof Object)){
var ex__31422__auto__ = e33048;
var statearr_33049_33063 = state_33033;
(statearr_33049_33063[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33064 = state_33033;
state_33033 = G__33064;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_33033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_33033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___33052,out))
})();
var state__31515__auto__ = (function (){var statearr_33050 = f__31514__auto__.call(null);
(statearr_33050[(6)] = c__31513__auto___33052);

return statearr_33050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___33052,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33066 = arguments.length;
switch (G__33066) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto__){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto__){
return (function (state_33129){
var state_val_33130 = (state_33129[(1)]);
if((state_val_33130 === (7))){
var inst_33125 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33131_33169 = state_33129__$1;
(statearr_33131_33169[(2)] = inst_33125);

(statearr_33131_33169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (20))){
var inst_33095 = (state_33129[(7)]);
var inst_33106 = (state_33129[(2)]);
var inst_33107 = cljs.core.next.call(null,inst_33095);
var inst_33081 = inst_33107;
var inst_33082 = null;
var inst_33083 = (0);
var inst_33084 = (0);
var state_33129__$1 = (function (){var statearr_33132 = state_33129;
(statearr_33132[(8)] = inst_33083);

(statearr_33132[(9)] = inst_33081);

(statearr_33132[(10)] = inst_33082);

(statearr_33132[(11)] = inst_33106);

(statearr_33132[(12)] = inst_33084);

return statearr_33132;
})();
var statearr_33133_33170 = state_33129__$1;
(statearr_33133_33170[(2)] = null);

(statearr_33133_33170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (1))){
var state_33129__$1 = state_33129;
var statearr_33134_33171 = state_33129__$1;
(statearr_33134_33171[(2)] = null);

(statearr_33134_33171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (4))){
var inst_33070 = (state_33129[(13)]);
var inst_33070__$1 = (state_33129[(2)]);
var inst_33071 = (inst_33070__$1 == null);
var state_33129__$1 = (function (){var statearr_33135 = state_33129;
(statearr_33135[(13)] = inst_33070__$1);

return statearr_33135;
})();
if(cljs.core.truth_(inst_33071)){
var statearr_33136_33172 = state_33129__$1;
(statearr_33136_33172[(1)] = (5));

} else {
var statearr_33137_33173 = state_33129__$1;
(statearr_33137_33173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (15))){
var state_33129__$1 = state_33129;
var statearr_33141_33174 = state_33129__$1;
(statearr_33141_33174[(2)] = null);

(statearr_33141_33174[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (21))){
var state_33129__$1 = state_33129;
var statearr_33142_33175 = state_33129__$1;
(statearr_33142_33175[(2)] = null);

(statearr_33142_33175[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (13))){
var inst_33083 = (state_33129[(8)]);
var inst_33081 = (state_33129[(9)]);
var inst_33082 = (state_33129[(10)]);
var inst_33084 = (state_33129[(12)]);
var inst_33091 = (state_33129[(2)]);
var inst_33092 = (inst_33084 + (1));
var tmp33138 = inst_33083;
var tmp33139 = inst_33081;
var tmp33140 = inst_33082;
var inst_33081__$1 = tmp33139;
var inst_33082__$1 = tmp33140;
var inst_33083__$1 = tmp33138;
var inst_33084__$1 = inst_33092;
var state_33129__$1 = (function (){var statearr_33143 = state_33129;
(statearr_33143[(8)] = inst_33083__$1);

(statearr_33143[(9)] = inst_33081__$1);

(statearr_33143[(10)] = inst_33082__$1);

(statearr_33143[(12)] = inst_33084__$1);

(statearr_33143[(14)] = inst_33091);

return statearr_33143;
})();
var statearr_33144_33176 = state_33129__$1;
(statearr_33144_33176[(2)] = null);

(statearr_33144_33176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (22))){
var state_33129__$1 = state_33129;
var statearr_33145_33177 = state_33129__$1;
(statearr_33145_33177[(2)] = null);

(statearr_33145_33177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (6))){
var inst_33070 = (state_33129[(13)]);
var inst_33079 = f.call(null,inst_33070);
var inst_33080 = cljs.core.seq.call(null,inst_33079);
var inst_33081 = inst_33080;
var inst_33082 = null;
var inst_33083 = (0);
var inst_33084 = (0);
var state_33129__$1 = (function (){var statearr_33146 = state_33129;
(statearr_33146[(8)] = inst_33083);

(statearr_33146[(9)] = inst_33081);

(statearr_33146[(10)] = inst_33082);

(statearr_33146[(12)] = inst_33084);

return statearr_33146;
})();
var statearr_33147_33178 = state_33129__$1;
(statearr_33147_33178[(2)] = null);

(statearr_33147_33178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (17))){
var inst_33095 = (state_33129[(7)]);
var inst_33099 = cljs.core.chunk_first.call(null,inst_33095);
var inst_33100 = cljs.core.chunk_rest.call(null,inst_33095);
var inst_33101 = cljs.core.count.call(null,inst_33099);
var inst_33081 = inst_33100;
var inst_33082 = inst_33099;
var inst_33083 = inst_33101;
var inst_33084 = (0);
var state_33129__$1 = (function (){var statearr_33148 = state_33129;
(statearr_33148[(8)] = inst_33083);

(statearr_33148[(9)] = inst_33081);

(statearr_33148[(10)] = inst_33082);

(statearr_33148[(12)] = inst_33084);

return statearr_33148;
})();
var statearr_33149_33179 = state_33129__$1;
(statearr_33149_33179[(2)] = null);

(statearr_33149_33179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (3))){
var inst_33127 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33129__$1,inst_33127);
} else {
if((state_val_33130 === (12))){
var inst_33115 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33150_33180 = state_33129__$1;
(statearr_33150_33180[(2)] = inst_33115);

(statearr_33150_33180[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (2))){
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33129__$1,(4),in$);
} else {
if((state_val_33130 === (23))){
var inst_33123 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33151_33181 = state_33129__$1;
(statearr_33151_33181[(2)] = inst_33123);

(statearr_33151_33181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (19))){
var inst_33110 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33152_33182 = state_33129__$1;
(statearr_33152_33182[(2)] = inst_33110);

(statearr_33152_33182[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (11))){
var inst_33095 = (state_33129[(7)]);
var inst_33081 = (state_33129[(9)]);
var inst_33095__$1 = cljs.core.seq.call(null,inst_33081);
var state_33129__$1 = (function (){var statearr_33153 = state_33129;
(statearr_33153[(7)] = inst_33095__$1);

return statearr_33153;
})();
if(inst_33095__$1){
var statearr_33154_33183 = state_33129__$1;
(statearr_33154_33183[(1)] = (14));

} else {
var statearr_33155_33184 = state_33129__$1;
(statearr_33155_33184[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (9))){
var inst_33117 = (state_33129[(2)]);
var inst_33118 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33129__$1 = (function (){var statearr_33156 = state_33129;
(statearr_33156[(15)] = inst_33117);

return statearr_33156;
})();
if(cljs.core.truth_(inst_33118)){
var statearr_33157_33185 = state_33129__$1;
(statearr_33157_33185[(1)] = (21));

} else {
var statearr_33158_33186 = state_33129__$1;
(statearr_33158_33186[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (5))){
var inst_33073 = cljs.core.async.close_BANG_.call(null,out);
var state_33129__$1 = state_33129;
var statearr_33159_33187 = state_33129__$1;
(statearr_33159_33187[(2)] = inst_33073);

(statearr_33159_33187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (14))){
var inst_33095 = (state_33129[(7)]);
var inst_33097 = cljs.core.chunked_seq_QMARK_.call(null,inst_33095);
var state_33129__$1 = state_33129;
if(inst_33097){
var statearr_33160_33188 = state_33129__$1;
(statearr_33160_33188[(1)] = (17));

} else {
var statearr_33161_33189 = state_33129__$1;
(statearr_33161_33189[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (16))){
var inst_33113 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33162_33190 = state_33129__$1;
(statearr_33162_33190[(2)] = inst_33113);

(statearr_33162_33190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (10))){
var inst_33082 = (state_33129[(10)]);
var inst_33084 = (state_33129[(12)]);
var inst_33089 = cljs.core._nth.call(null,inst_33082,inst_33084);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33129__$1,(13),out,inst_33089);
} else {
if((state_val_33130 === (18))){
var inst_33095 = (state_33129[(7)]);
var inst_33104 = cljs.core.first.call(null,inst_33095);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33129__$1,(20),out,inst_33104);
} else {
if((state_val_33130 === (8))){
var inst_33083 = (state_33129[(8)]);
var inst_33084 = (state_33129[(12)]);
var inst_33086 = (inst_33084 < inst_33083);
var inst_33087 = inst_33086;
var state_33129__$1 = state_33129;
if(cljs.core.truth_(inst_33087)){
var statearr_33163_33191 = state_33129__$1;
(statearr_33163_33191[(1)] = (10));

} else {
var statearr_33164_33192 = state_33129__$1;
(statearr_33164_33192[(1)] = (11));

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
});})(c__31513__auto__))
;
return ((function (switch__31418__auto__,c__31513__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_33165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33165[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__);

(statearr_33165[(1)] = (1));

return statearr_33165;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____1 = (function (state_33129){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_33129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e33166){if((e33166 instanceof Object)){
var ex__31422__auto__ = e33166;
var statearr_33167_33193 = state_33129;
(statearr_33167_33193[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33194 = state_33129;
state_33129 = G__33194;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__ = function(state_33129){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____1.call(this,state_33129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto__))
})();
var state__31515__auto__ = (function (){var statearr_33168 = f__31514__auto__.call(null);
(statearr_33168[(6)] = c__31513__auto__);

return statearr_33168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto__))
);

return c__31513__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33196 = arguments.length;
switch (G__33196) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33199 = arguments.length;
switch (G__33199) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33202 = arguments.length;
switch (G__33202) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31513__auto___33249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___33249,out){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___33249,out){
return (function (state_33226){
var state_val_33227 = (state_33226[(1)]);
if((state_val_33227 === (7))){
var inst_33221 = (state_33226[(2)]);
var state_33226__$1 = state_33226;
var statearr_33228_33250 = state_33226__$1;
(statearr_33228_33250[(2)] = inst_33221);

(statearr_33228_33250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33227 === (1))){
var inst_33203 = null;
var state_33226__$1 = (function (){var statearr_33229 = state_33226;
(statearr_33229[(7)] = inst_33203);

return statearr_33229;
})();
var statearr_33230_33251 = state_33226__$1;
(statearr_33230_33251[(2)] = null);

(statearr_33230_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33227 === (4))){
var inst_33206 = (state_33226[(8)]);
var inst_33206__$1 = (state_33226[(2)]);
var inst_33207 = (inst_33206__$1 == null);
var inst_33208 = cljs.core.not.call(null,inst_33207);
var state_33226__$1 = (function (){var statearr_33231 = state_33226;
(statearr_33231[(8)] = inst_33206__$1);

return statearr_33231;
})();
if(inst_33208){
var statearr_33232_33252 = state_33226__$1;
(statearr_33232_33252[(1)] = (5));

} else {
var statearr_33233_33253 = state_33226__$1;
(statearr_33233_33253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33227 === (6))){
var state_33226__$1 = state_33226;
var statearr_33234_33254 = state_33226__$1;
(statearr_33234_33254[(2)] = null);

(statearr_33234_33254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33227 === (3))){
var inst_33223 = (state_33226[(2)]);
var inst_33224 = cljs.core.async.close_BANG_.call(null,out);
var state_33226__$1 = (function (){var statearr_33235 = state_33226;
(statearr_33235[(9)] = inst_33223);

return statearr_33235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33226__$1,inst_33224);
} else {
if((state_val_33227 === (2))){
var state_33226__$1 = state_33226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33226__$1,(4),ch);
} else {
if((state_val_33227 === (11))){
var inst_33206 = (state_33226[(8)]);
var inst_33215 = (state_33226[(2)]);
var inst_33203 = inst_33206;
var state_33226__$1 = (function (){var statearr_33236 = state_33226;
(statearr_33236[(10)] = inst_33215);

(statearr_33236[(7)] = inst_33203);

return statearr_33236;
})();
var statearr_33237_33255 = state_33226__$1;
(statearr_33237_33255[(2)] = null);

(statearr_33237_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33227 === (9))){
var inst_33206 = (state_33226[(8)]);
var state_33226__$1 = state_33226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33226__$1,(11),out,inst_33206);
} else {
if((state_val_33227 === (5))){
var inst_33203 = (state_33226[(7)]);
var inst_33206 = (state_33226[(8)]);
var inst_33210 = cljs.core._EQ_.call(null,inst_33206,inst_33203);
var state_33226__$1 = state_33226;
if(inst_33210){
var statearr_33239_33256 = state_33226__$1;
(statearr_33239_33256[(1)] = (8));

} else {
var statearr_33240_33257 = state_33226__$1;
(statearr_33240_33257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33227 === (10))){
var inst_33218 = (state_33226[(2)]);
var state_33226__$1 = state_33226;
var statearr_33241_33258 = state_33226__$1;
(statearr_33241_33258[(2)] = inst_33218);

(statearr_33241_33258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33227 === (8))){
var inst_33203 = (state_33226[(7)]);
var tmp33238 = inst_33203;
var inst_33203__$1 = tmp33238;
var state_33226__$1 = (function (){var statearr_33242 = state_33226;
(statearr_33242[(7)] = inst_33203__$1);

return statearr_33242;
})();
var statearr_33243_33259 = state_33226__$1;
(statearr_33243_33259[(2)] = null);

(statearr_33243_33259[(1)] = (2));


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
});})(c__31513__auto___33249,out))
;
return ((function (switch__31418__auto__,c__31513__auto___33249,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_33244 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33244[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_33244[(1)] = (1));

return statearr_33244;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_33226){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_33226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e33245){if((e33245 instanceof Object)){
var ex__31422__auto__ = e33245;
var statearr_33246_33260 = state_33226;
(statearr_33246_33260[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33261 = state_33226;
state_33226 = G__33261;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_33226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_33226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___33249,out))
})();
var state__31515__auto__ = (function (){var statearr_33247 = f__31514__auto__.call(null);
(statearr_33247[(6)] = c__31513__auto___33249);

return statearr_33247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___33249,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33263 = arguments.length;
switch (G__33263) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31513__auto___33329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___33329,out){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___33329,out){
return (function (state_33301){
var state_val_33302 = (state_33301[(1)]);
if((state_val_33302 === (7))){
var inst_33297 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33303_33330 = state_33301__$1;
(statearr_33303_33330[(2)] = inst_33297);

(statearr_33303_33330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (1))){
var inst_33264 = (new Array(n));
var inst_33265 = inst_33264;
var inst_33266 = (0);
var state_33301__$1 = (function (){var statearr_33304 = state_33301;
(statearr_33304[(7)] = inst_33266);

(statearr_33304[(8)] = inst_33265);

return statearr_33304;
})();
var statearr_33305_33331 = state_33301__$1;
(statearr_33305_33331[(2)] = null);

(statearr_33305_33331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (4))){
var inst_33269 = (state_33301[(9)]);
var inst_33269__$1 = (state_33301[(2)]);
var inst_33270 = (inst_33269__$1 == null);
var inst_33271 = cljs.core.not.call(null,inst_33270);
var state_33301__$1 = (function (){var statearr_33306 = state_33301;
(statearr_33306[(9)] = inst_33269__$1);

return statearr_33306;
})();
if(inst_33271){
var statearr_33307_33332 = state_33301__$1;
(statearr_33307_33332[(1)] = (5));

} else {
var statearr_33308_33333 = state_33301__$1;
(statearr_33308_33333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (15))){
var inst_33291 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33309_33334 = state_33301__$1;
(statearr_33309_33334[(2)] = inst_33291);

(statearr_33309_33334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (13))){
var state_33301__$1 = state_33301;
var statearr_33310_33335 = state_33301__$1;
(statearr_33310_33335[(2)] = null);

(statearr_33310_33335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (6))){
var inst_33266 = (state_33301[(7)]);
var inst_33287 = (inst_33266 > (0));
var state_33301__$1 = state_33301;
if(cljs.core.truth_(inst_33287)){
var statearr_33311_33336 = state_33301__$1;
(statearr_33311_33336[(1)] = (12));

} else {
var statearr_33312_33337 = state_33301__$1;
(statearr_33312_33337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (3))){
var inst_33299 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33301__$1,inst_33299);
} else {
if((state_val_33302 === (12))){
var inst_33265 = (state_33301[(8)]);
var inst_33289 = cljs.core.vec.call(null,inst_33265);
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33301__$1,(15),out,inst_33289);
} else {
if((state_val_33302 === (2))){
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33301__$1,(4),ch);
} else {
if((state_val_33302 === (11))){
var inst_33281 = (state_33301[(2)]);
var inst_33282 = (new Array(n));
var inst_33265 = inst_33282;
var inst_33266 = (0);
var state_33301__$1 = (function (){var statearr_33313 = state_33301;
(statearr_33313[(7)] = inst_33266);

(statearr_33313[(10)] = inst_33281);

(statearr_33313[(8)] = inst_33265);

return statearr_33313;
})();
var statearr_33314_33338 = state_33301__$1;
(statearr_33314_33338[(2)] = null);

(statearr_33314_33338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (9))){
var inst_33265 = (state_33301[(8)]);
var inst_33279 = cljs.core.vec.call(null,inst_33265);
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33301__$1,(11),out,inst_33279);
} else {
if((state_val_33302 === (5))){
var inst_33269 = (state_33301[(9)]);
var inst_33266 = (state_33301[(7)]);
var inst_33274 = (state_33301[(11)]);
var inst_33265 = (state_33301[(8)]);
var inst_33273 = (inst_33265[inst_33266] = inst_33269);
var inst_33274__$1 = (inst_33266 + (1));
var inst_33275 = (inst_33274__$1 < n);
var state_33301__$1 = (function (){var statearr_33315 = state_33301;
(statearr_33315[(11)] = inst_33274__$1);

(statearr_33315[(12)] = inst_33273);

return statearr_33315;
})();
if(cljs.core.truth_(inst_33275)){
var statearr_33316_33339 = state_33301__$1;
(statearr_33316_33339[(1)] = (8));

} else {
var statearr_33317_33340 = state_33301__$1;
(statearr_33317_33340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (14))){
var inst_33294 = (state_33301[(2)]);
var inst_33295 = cljs.core.async.close_BANG_.call(null,out);
var state_33301__$1 = (function (){var statearr_33319 = state_33301;
(statearr_33319[(13)] = inst_33294);

return statearr_33319;
})();
var statearr_33320_33341 = state_33301__$1;
(statearr_33320_33341[(2)] = inst_33295);

(statearr_33320_33341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (10))){
var inst_33285 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33321_33342 = state_33301__$1;
(statearr_33321_33342[(2)] = inst_33285);

(statearr_33321_33342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (8))){
var inst_33274 = (state_33301[(11)]);
var inst_33265 = (state_33301[(8)]);
var tmp33318 = inst_33265;
var inst_33265__$1 = tmp33318;
var inst_33266 = inst_33274;
var state_33301__$1 = (function (){var statearr_33322 = state_33301;
(statearr_33322[(7)] = inst_33266);

(statearr_33322[(8)] = inst_33265__$1);

return statearr_33322;
})();
var statearr_33323_33343 = state_33301__$1;
(statearr_33323_33343[(2)] = null);

(statearr_33323_33343[(1)] = (2));


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
});})(c__31513__auto___33329,out))
;
return ((function (switch__31418__auto__,c__31513__auto___33329,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_33324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33324[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_33324[(1)] = (1));

return statearr_33324;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_33301){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_33301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e33325){if((e33325 instanceof Object)){
var ex__31422__auto__ = e33325;
var statearr_33326_33344 = state_33301;
(statearr_33326_33344[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33345 = state_33301;
state_33301 = G__33345;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_33301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_33301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___33329,out))
})();
var state__31515__auto__ = (function (){var statearr_33327 = f__31514__auto__.call(null);
(statearr_33327[(6)] = c__31513__auto___33329);

return statearr_33327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___33329,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33347 = arguments.length;
switch (G__33347) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31513__auto___33417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31513__auto___33417,out){
return (function (){
var f__31514__auto__ = (function (){var switch__31418__auto__ = ((function (c__31513__auto___33417,out){
return (function (state_33389){
var state_val_33390 = (state_33389[(1)]);
if((state_val_33390 === (7))){
var inst_33385 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33391_33418 = state_33389__$1;
(statearr_33391_33418[(2)] = inst_33385);

(statearr_33391_33418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (1))){
var inst_33348 = [];
var inst_33349 = inst_33348;
var inst_33350 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33389__$1 = (function (){var statearr_33392 = state_33389;
(statearr_33392[(7)] = inst_33350);

(statearr_33392[(8)] = inst_33349);

return statearr_33392;
})();
var statearr_33393_33419 = state_33389__$1;
(statearr_33393_33419[(2)] = null);

(statearr_33393_33419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (4))){
var inst_33353 = (state_33389[(9)]);
var inst_33353__$1 = (state_33389[(2)]);
var inst_33354 = (inst_33353__$1 == null);
var inst_33355 = cljs.core.not.call(null,inst_33354);
var state_33389__$1 = (function (){var statearr_33394 = state_33389;
(statearr_33394[(9)] = inst_33353__$1);

return statearr_33394;
})();
if(inst_33355){
var statearr_33395_33420 = state_33389__$1;
(statearr_33395_33420[(1)] = (5));

} else {
var statearr_33396_33421 = state_33389__$1;
(statearr_33396_33421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (15))){
var inst_33379 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33397_33422 = state_33389__$1;
(statearr_33397_33422[(2)] = inst_33379);

(statearr_33397_33422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (13))){
var state_33389__$1 = state_33389;
var statearr_33398_33423 = state_33389__$1;
(statearr_33398_33423[(2)] = null);

(statearr_33398_33423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (6))){
var inst_33349 = (state_33389[(8)]);
var inst_33374 = inst_33349.length;
var inst_33375 = (inst_33374 > (0));
var state_33389__$1 = state_33389;
if(cljs.core.truth_(inst_33375)){
var statearr_33399_33424 = state_33389__$1;
(statearr_33399_33424[(1)] = (12));

} else {
var statearr_33400_33425 = state_33389__$1;
(statearr_33400_33425[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (3))){
var inst_33387 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33389__$1,inst_33387);
} else {
if((state_val_33390 === (12))){
var inst_33349 = (state_33389[(8)]);
var inst_33377 = cljs.core.vec.call(null,inst_33349);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33389__$1,(15),out,inst_33377);
} else {
if((state_val_33390 === (2))){
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33389__$1,(4),ch);
} else {
if((state_val_33390 === (11))){
var inst_33353 = (state_33389[(9)]);
var inst_33357 = (state_33389[(10)]);
var inst_33367 = (state_33389[(2)]);
var inst_33368 = [];
var inst_33369 = inst_33368.push(inst_33353);
var inst_33349 = inst_33368;
var inst_33350 = inst_33357;
var state_33389__$1 = (function (){var statearr_33401 = state_33389;
(statearr_33401[(11)] = inst_33367);

(statearr_33401[(7)] = inst_33350);

(statearr_33401[(12)] = inst_33369);

(statearr_33401[(8)] = inst_33349);

return statearr_33401;
})();
var statearr_33402_33426 = state_33389__$1;
(statearr_33402_33426[(2)] = null);

(statearr_33402_33426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (9))){
var inst_33349 = (state_33389[(8)]);
var inst_33365 = cljs.core.vec.call(null,inst_33349);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33389__$1,(11),out,inst_33365);
} else {
if((state_val_33390 === (5))){
var inst_33350 = (state_33389[(7)]);
var inst_33353 = (state_33389[(9)]);
var inst_33357 = (state_33389[(10)]);
var inst_33357__$1 = f.call(null,inst_33353);
var inst_33358 = cljs.core._EQ_.call(null,inst_33357__$1,inst_33350);
var inst_33359 = cljs.core.keyword_identical_QMARK_.call(null,inst_33350,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33360 = ((inst_33358) || (inst_33359));
var state_33389__$1 = (function (){var statearr_33403 = state_33389;
(statearr_33403[(10)] = inst_33357__$1);

return statearr_33403;
})();
if(cljs.core.truth_(inst_33360)){
var statearr_33404_33427 = state_33389__$1;
(statearr_33404_33427[(1)] = (8));

} else {
var statearr_33405_33428 = state_33389__$1;
(statearr_33405_33428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (14))){
var inst_33382 = (state_33389[(2)]);
var inst_33383 = cljs.core.async.close_BANG_.call(null,out);
var state_33389__$1 = (function (){var statearr_33407 = state_33389;
(statearr_33407[(13)] = inst_33382);

return statearr_33407;
})();
var statearr_33408_33429 = state_33389__$1;
(statearr_33408_33429[(2)] = inst_33383);

(statearr_33408_33429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (10))){
var inst_33372 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33409_33430 = state_33389__$1;
(statearr_33409_33430[(2)] = inst_33372);

(statearr_33409_33430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (8))){
var inst_33353 = (state_33389[(9)]);
var inst_33357 = (state_33389[(10)]);
var inst_33349 = (state_33389[(8)]);
var inst_33362 = inst_33349.push(inst_33353);
var tmp33406 = inst_33349;
var inst_33349__$1 = tmp33406;
var inst_33350 = inst_33357;
var state_33389__$1 = (function (){var statearr_33410 = state_33389;
(statearr_33410[(7)] = inst_33350);

(statearr_33410[(14)] = inst_33362);

(statearr_33410[(8)] = inst_33349__$1);

return statearr_33410;
})();
var statearr_33411_33431 = state_33389__$1;
(statearr_33411_33431[(2)] = null);

(statearr_33411_33431[(1)] = (2));


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
});})(c__31513__auto___33417,out))
;
return ((function (switch__31418__auto__,c__31513__auto___33417,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_33412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33412[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_33412[(1)] = (1));

return statearr_33412;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_33389){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_33389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e33413){if((e33413 instanceof Object)){
var ex__31422__auto__ = e33413;
var statearr_33414_33432 = state_33389;
(statearr_33414_33432[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33433 = state_33389;
state_33389 = G__33433;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_33389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_33389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31513__auto___33417,out))
})();
var state__31515__auto__ = (function (){var statearr_33415 = f__31514__auto__.call(null);
(statearr_33415[(6)] = c__31513__auto___33417);

return statearr_33415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31515__auto__);
});})(c__31513__auto___33417,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
