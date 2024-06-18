// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25032 = arguments.length;
switch (G__25032) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25033 = (function (f,blockable,meta25034){
this.f = f;
this.blockable = blockable;
this.meta25034 = meta25034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25035,meta25034__$1){
var self__ = this;
var _25035__$1 = this;
return (new cljs.core.async.t_cljs$core$async25033(self__.f,self__.blockable,meta25034__$1));
}));

(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25035){
var self__ = this;
var _25035__$1 = this;
return self__.meta25034;
}));

(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25034","meta25034",1672650313,null)], null);
}));

(cljs.core.async.t_cljs$core$async25033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25033");

(cljs.core.async.t_cljs$core$async25033.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25033.
 */
cljs.core.async.__GT_t_cljs$core$async25033 = (function cljs$core$async$__GT_t_cljs$core$async25033(f__$1,blockable__$1,meta25034){
return (new cljs.core.async.t_cljs$core$async25033(f__$1,blockable__$1,meta25034));
});

}

return (new cljs.core.async.t_cljs$core$async25033(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
var G__25039 = arguments.length;
switch (G__25039) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25042 = arguments.length;
switch (G__25042) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__25045 = arguments.length;
switch (G__25045) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25047 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25047);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_25047);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__25049 = arguments.length;
switch (G__25049) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___25051 = n;
var x_25052 = (0);
while(true){
if((x_25052 < n__4648__auto___25051)){
(a[x_25052] = (0));

var G__25053 = (x_25052 + (1));
x_25052 = G__25053;
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

var G__25054 = (i + (1));
i = G__25054;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25055 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25055 = (function (flag,meta25056){
this.flag = flag;
this.meta25056 = meta25056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25057,meta25056__$1){
var self__ = this;
var _25057__$1 = this;
return (new cljs.core.async.t_cljs$core$async25055(self__.flag,meta25056__$1));
}));

(cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25057){
var self__ = this;
var _25057__$1 = this;
return self__.meta25056;
}));

(cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async25055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25056","meta25056",1318552678,null)], null);
}));

(cljs.core.async.t_cljs$core$async25055.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25055");

(cljs.core.async.t_cljs$core$async25055.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25055");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25055.
 */
cljs.core.async.__GT_t_cljs$core$async25055 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25055(flag__$1,meta25056){
return (new cljs.core.async.t_cljs$core$async25055(flag__$1,meta25056));
});

}

return (new cljs.core.async.t_cljs$core$async25055(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25058 = (function (flag,cb,meta25059){
this.flag = flag;
this.cb = cb;
this.meta25059 = meta25059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25060,meta25059__$1){
var self__ = this;
var _25060__$1 = this;
return (new cljs.core.async.t_cljs$core$async25058(self__.flag,self__.cb,meta25059__$1));
}));

(cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25060){
var self__ = this;
var _25060__$1 = this;
return self__.meta25059;
}));

(cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async25058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25059","meta25059",-948214575,null)], null);
}));

(cljs.core.async.t_cljs$core$async25058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25058");

(cljs.core.async.t_cljs$core$async25058.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25058.
 */
cljs.core.async.__GT_t_cljs$core$async25058 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25058(flag__$1,cb__$1,meta25059){
return (new cljs.core.async.t_cljs$core$async25058(flag__$1,cb__$1,meta25059));
});

}

return (new cljs.core.async.t_cljs$core$async25058(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25061_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25061_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25062_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25062_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25063 = (i + (1));
i = G__25063;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4149__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4777__auto__ = [];
var len__4771__auto___25068 = arguments.length;
var i__4772__auto___25069 = (0);
while(true){
if((i__4772__auto___25069 < len__4771__auto___25068)){
args__4777__auto__.push((arguments[i__4772__auto___25069]));

var G__25070 = (i__4772__auto___25069 + (1));
i__4772__auto___25069 = G__25070;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25066){
var map__25067 = p__25066;
var map__25067__$1 = cljs.core.__destructure_map.call(null,map__25067);
var opts = map__25067__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25064){
var G__25065 = cljs.core.first.call(null,seq25064);
var seq25064__$1 = cljs.core.next.call(null,seq25064);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25065,seq25064__$1);
}));

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
var G__25072 = arguments.length;
switch (G__25072) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24972__auto___25118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_25096){
var state_val_25097 = (state_25096[(1)]);
if((state_val_25097 === (7))){
var inst_25092 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25098_25119 = state_25096__$1;
(statearr_25098_25119[(2)] = inst_25092);

(statearr_25098_25119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (1))){
var state_25096__$1 = state_25096;
var statearr_25099_25120 = state_25096__$1;
(statearr_25099_25120[(2)] = null);

(statearr_25099_25120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (4))){
var inst_25075 = (state_25096[(7)]);
var inst_25075__$1 = (state_25096[(2)]);
var inst_25076 = (inst_25075__$1 == null);
var state_25096__$1 = (function (){var statearr_25100 = state_25096;
(statearr_25100[(7)] = inst_25075__$1);

return statearr_25100;
})();
if(cljs.core.truth_(inst_25076)){
var statearr_25101_25121 = state_25096__$1;
(statearr_25101_25121[(1)] = (5));

} else {
var statearr_25102_25122 = state_25096__$1;
(statearr_25102_25122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (13))){
var state_25096__$1 = state_25096;
var statearr_25103_25123 = state_25096__$1;
(statearr_25103_25123[(2)] = null);

(statearr_25103_25123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (6))){
var inst_25075 = (state_25096[(7)]);
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25096__$1,(11),to,inst_25075);
} else {
if((state_val_25097 === (3))){
var inst_25094 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25096__$1,inst_25094);
} else {
if((state_val_25097 === (12))){
var state_25096__$1 = state_25096;
var statearr_25104_25124 = state_25096__$1;
(statearr_25104_25124[(2)] = null);

(statearr_25104_25124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (2))){
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25096__$1,(4),from);
} else {
if((state_val_25097 === (11))){
var inst_25085 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
if(cljs.core.truth_(inst_25085)){
var statearr_25105_25125 = state_25096__$1;
(statearr_25105_25125[(1)] = (12));

} else {
var statearr_25106_25126 = state_25096__$1;
(statearr_25106_25126[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (9))){
var state_25096__$1 = state_25096;
var statearr_25107_25127 = state_25096__$1;
(statearr_25107_25127[(2)] = null);

(statearr_25107_25127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (5))){
var state_25096__$1 = state_25096;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25108_25128 = state_25096__$1;
(statearr_25108_25128[(1)] = (8));

} else {
var statearr_25109_25129 = state_25096__$1;
(statearr_25109_25129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (14))){
var inst_25090 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25110_25130 = state_25096__$1;
(statearr_25110_25130[(2)] = inst_25090);

(statearr_25110_25130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (10))){
var inst_25082 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25111_25131 = state_25096__$1;
(statearr_25111_25131[(2)] = inst_25082);

(statearr_25111_25131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (8))){
var inst_25079 = cljs.core.async.close_BANG_.call(null,to);
var state_25096__$1 = state_25096;
var statearr_25112_25132 = state_25096__$1;
(statearr_25112_25132[(2)] = inst_25079);

(statearr_25112_25132[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_25113 = [null,null,null,null,null,null,null,null];
(statearr_25113[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_25113[(1)] = (1));

return statearr_25113;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_25096){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25114){if((e25114 instanceof Object)){
var ex__24881__auto__ = e25114;
var statearr_25115_25133 = state_25096;
(statearr_25115_25133[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25134 = state_25096;
state_25096 = G__25134;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_25096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_25096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_25116 = f__24973__auto__.call(null);
(statearr_25116[(6)] = c__24972__auto___25118);

return statearr_25116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__25135){
var vec__25136 = p__25135;
var v = cljs.core.nth.call(null,vec__25136,(0),null);
var p = cljs.core.nth.call(null,vec__25136,(1),null);
var job = vec__25136;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24972__auto___25307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_25143){
var state_val_25144 = (state_25143[(1)]);
if((state_val_25144 === (1))){
var state_25143__$1 = state_25143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25143__$1,(2),res,v);
} else {
if((state_val_25144 === (2))){
var inst_25140 = (state_25143[(2)]);
var inst_25141 = cljs.core.async.close_BANG_.call(null,res);
var state_25143__$1 = (function (){var statearr_25145 = state_25143;
(statearr_25145[(7)] = inst_25140);

return statearr_25145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25143__$1,inst_25141);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0 = (function (){
var statearr_25146 = [null,null,null,null,null,null,null,null];
(statearr_25146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__);

(statearr_25146[(1)] = (1));

return statearr_25146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1 = (function (state_25143){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25147){if((e25147 instanceof Object)){
var ex__24881__auto__ = e25147;
var statearr_25148_25308 = state_25143;
(statearr_25148_25308[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25309 = state_25143;
state_25143 = G__25309;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__ = function(state_25143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1.call(this,state_25143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_25149 = f__24973__auto__.call(null);
(statearr_25149[(6)] = c__24972__auto___25307);

return statearr_25149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__25150){
var vec__25151 = p__25150;
var v = cljs.core.nth.call(null,vec__25151,(0),null);
var p = cljs.core.nth.call(null,vec__25151,(1),null);
var job = vec__25151;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4648__auto___25310 = n;
var __25311 = (0);
while(true){
if((__25311 < n__4648__auto___25310)){
var G__25154_25312 = type;
var G__25154_25313__$1 = (((G__25154_25312 instanceof cljs.core.Keyword))?G__25154_25312.fqn:null);
switch (G__25154_25313__$1) {
case "compute":
var c__24972__auto___25315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25311,c__24972__auto___25315,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async){
return (function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = ((function (__25311,c__24972__auto___25315,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async){
return (function (state_25167){
var state_val_25168 = (state_25167[(1)]);
if((state_val_25168 === (1))){
var state_25167__$1 = state_25167;
var statearr_25169_25316 = state_25167__$1;
(statearr_25169_25316[(2)] = null);

(statearr_25169_25316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (2))){
var state_25167__$1 = state_25167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25167__$1,(4),jobs);
} else {
if((state_val_25168 === (3))){
var inst_25165 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25167__$1,inst_25165);
} else {
if((state_val_25168 === (4))){
var inst_25157 = (state_25167[(2)]);
var inst_25158 = process.call(null,inst_25157);
var state_25167__$1 = state_25167;
if(cljs.core.truth_(inst_25158)){
var statearr_25170_25317 = state_25167__$1;
(statearr_25170_25317[(1)] = (5));

} else {
var statearr_25171_25318 = state_25167__$1;
(statearr_25171_25318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (5))){
var state_25167__$1 = state_25167;
var statearr_25172_25319 = state_25167__$1;
(statearr_25172_25319[(2)] = null);

(statearr_25172_25319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (6))){
var state_25167__$1 = state_25167;
var statearr_25173_25320 = state_25167__$1;
(statearr_25173_25320[(2)] = null);

(statearr_25173_25320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (7))){
var inst_25163 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25174_25321 = state_25167__$1;
(statearr_25174_25321[(2)] = inst_25163);

(statearr_25174_25321[(1)] = (3));


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
});})(__25311,c__24972__auto___25315,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async))
;
return ((function (__25311,switch__24877__auto__,c__24972__auto___25315,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0 = (function (){
var statearr_25175 = [null,null,null,null,null,null,null];
(statearr_25175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__);

(statearr_25175[(1)] = (1));

return statearr_25175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1 = (function (state_25167){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25176){if((e25176 instanceof Object)){
var ex__24881__auto__ = e25176;
var statearr_25177_25322 = state_25167;
(statearr_25177_25322[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25323 = state_25167;
state_25167 = G__25323;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__ = function(state_25167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1.call(this,state_25167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__;
})()
;})(__25311,switch__24877__auto__,c__24972__auto___25315,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async))
})();
var state__24974__auto__ = (function (){var statearr_25178 = f__24973__auto__.call(null);
(statearr_25178[(6)] = c__24972__auto___25315);

return statearr_25178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
});})(__25311,c__24972__auto___25315,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async))
);


break;
case "async":
var c__24972__auto___25324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25311,c__24972__auto___25324,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async){
return (function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = ((function (__25311,c__24972__auto___25324,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async){
return (function (state_25191){
var state_val_25192 = (state_25191[(1)]);
if((state_val_25192 === (1))){
var state_25191__$1 = state_25191;
var statearr_25193_25325 = state_25191__$1;
(statearr_25193_25325[(2)] = null);

(statearr_25193_25325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (2))){
var state_25191__$1 = state_25191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25191__$1,(4),jobs);
} else {
if((state_val_25192 === (3))){
var inst_25189 = (state_25191[(2)]);
var state_25191__$1 = state_25191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25191__$1,inst_25189);
} else {
if((state_val_25192 === (4))){
var inst_25181 = (state_25191[(2)]);
var inst_25182 = async.call(null,inst_25181);
var state_25191__$1 = state_25191;
if(cljs.core.truth_(inst_25182)){
var statearr_25194_25326 = state_25191__$1;
(statearr_25194_25326[(1)] = (5));

} else {
var statearr_25195_25327 = state_25191__$1;
(statearr_25195_25327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (5))){
var state_25191__$1 = state_25191;
var statearr_25196_25328 = state_25191__$1;
(statearr_25196_25328[(2)] = null);

(statearr_25196_25328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (6))){
var state_25191__$1 = state_25191;
var statearr_25197_25329 = state_25191__$1;
(statearr_25197_25329[(2)] = null);

(statearr_25197_25329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (7))){
var inst_25187 = (state_25191[(2)]);
var state_25191__$1 = state_25191;
var statearr_25198_25330 = state_25191__$1;
(statearr_25198_25330[(2)] = inst_25187);

(statearr_25198_25330[(1)] = (3));


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
});})(__25311,c__24972__auto___25324,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async))
;
return ((function (__25311,switch__24877__auto__,c__24972__auto___25324,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0 = (function (){
var statearr_25199 = [null,null,null,null,null,null,null];
(statearr_25199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__);

(statearr_25199[(1)] = (1));

return statearr_25199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1 = (function (state_25191){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25200){if((e25200 instanceof Object)){
var ex__24881__auto__ = e25200;
var statearr_25201_25331 = state_25191;
(statearr_25201_25331[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25332 = state_25191;
state_25191 = G__25332;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__ = function(state_25191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1.call(this,state_25191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__;
})()
;})(__25311,switch__24877__auto__,c__24972__auto___25324,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async))
})();
var state__24974__auto__ = (function (){var statearr_25202 = f__24973__auto__.call(null);
(statearr_25202[(6)] = c__24972__auto___25324);

return statearr_25202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
});})(__25311,c__24972__auto___25324,G__25154_25312,G__25154_25313__$1,n__4648__auto___25310,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25154_25313__$1)].join('')));

}

var G__25333 = (__25311 + (1));
__25311 = G__25333;
continue;
} else {
}
break;
}

var c__24972__auto___25334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_25224){
var state_val_25225 = (state_25224[(1)]);
if((state_val_25225 === (7))){
var inst_25220 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25226_25335 = state_25224__$1;
(statearr_25226_25335[(2)] = inst_25220);

(statearr_25226_25335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (1))){
var state_25224__$1 = state_25224;
var statearr_25227_25336 = state_25224__$1;
(statearr_25227_25336[(2)] = null);

(statearr_25227_25336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (4))){
var inst_25205 = (state_25224[(7)]);
var inst_25205__$1 = (state_25224[(2)]);
var inst_25206 = (inst_25205__$1 == null);
var state_25224__$1 = (function (){var statearr_25228 = state_25224;
(statearr_25228[(7)] = inst_25205__$1);

return statearr_25228;
})();
if(cljs.core.truth_(inst_25206)){
var statearr_25229_25337 = state_25224__$1;
(statearr_25229_25337[(1)] = (5));

} else {
var statearr_25230_25338 = state_25224__$1;
(statearr_25230_25338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (6))){
var inst_25210 = (state_25224[(8)]);
var inst_25205 = (state_25224[(7)]);
var inst_25210__$1 = cljs.core.async.chan.call(null,(1));
var inst_25211 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25212 = [inst_25205,inst_25210__$1];
var inst_25213 = (new cljs.core.PersistentVector(null,2,(5),inst_25211,inst_25212,null));
var state_25224__$1 = (function (){var statearr_25231 = state_25224;
(statearr_25231[(8)] = inst_25210__$1);

return statearr_25231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25224__$1,(8),jobs,inst_25213);
} else {
if((state_val_25225 === (3))){
var inst_25222 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25224__$1,inst_25222);
} else {
if((state_val_25225 === (2))){
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25224__$1,(4),from);
} else {
if((state_val_25225 === (9))){
var inst_25217 = (state_25224[(2)]);
var state_25224__$1 = (function (){var statearr_25232 = state_25224;
(statearr_25232[(9)] = inst_25217);

return statearr_25232;
})();
var statearr_25233_25339 = state_25224__$1;
(statearr_25233_25339[(2)] = null);

(statearr_25233_25339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (5))){
var inst_25208 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25224__$1 = state_25224;
var statearr_25234_25340 = state_25224__$1;
(statearr_25234_25340[(2)] = inst_25208);

(statearr_25234_25340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (8))){
var inst_25210 = (state_25224[(8)]);
var inst_25215 = (state_25224[(2)]);
var state_25224__$1 = (function (){var statearr_25235 = state_25224;
(statearr_25235[(10)] = inst_25215);

return statearr_25235;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25224__$1,(9),results,inst_25210);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0 = (function (){
var statearr_25236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__);

(statearr_25236[(1)] = (1));

return statearr_25236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1 = (function (state_25224){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25237){if((e25237 instanceof Object)){
var ex__24881__auto__ = e25237;
var statearr_25238_25341 = state_25224;
(statearr_25238_25341[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25342 = state_25224;
state_25224 = G__25342;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__ = function(state_25224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1.call(this,state_25224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_25239 = f__24973__auto__.call(null);
(statearr_25239[(6)] = c__24972__auto___25334);

return statearr_25239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


var c__24972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_25277){
var state_val_25278 = (state_25277[(1)]);
if((state_val_25278 === (7))){
var inst_25273 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
var statearr_25279_25343 = state_25277__$1;
(statearr_25279_25343[(2)] = inst_25273);

(statearr_25279_25343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (20))){
var state_25277__$1 = state_25277;
var statearr_25280_25344 = state_25277__$1;
(statearr_25280_25344[(2)] = null);

(statearr_25280_25344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (1))){
var state_25277__$1 = state_25277;
var statearr_25281_25345 = state_25277__$1;
(statearr_25281_25345[(2)] = null);

(statearr_25281_25345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (4))){
var inst_25242 = (state_25277[(7)]);
var inst_25242__$1 = (state_25277[(2)]);
var inst_25243 = (inst_25242__$1 == null);
var state_25277__$1 = (function (){var statearr_25282 = state_25277;
(statearr_25282[(7)] = inst_25242__$1);

return statearr_25282;
})();
if(cljs.core.truth_(inst_25243)){
var statearr_25283_25346 = state_25277__$1;
(statearr_25283_25346[(1)] = (5));

} else {
var statearr_25284_25347 = state_25277__$1;
(statearr_25284_25347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (15))){
var inst_25255 = (state_25277[(8)]);
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25277__$1,(18),to,inst_25255);
} else {
if((state_val_25278 === (21))){
var inst_25268 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
var statearr_25285_25348 = state_25277__$1;
(statearr_25285_25348[(2)] = inst_25268);

(statearr_25285_25348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (13))){
var inst_25270 = (state_25277[(2)]);
var state_25277__$1 = (function (){var statearr_25286 = state_25277;
(statearr_25286[(9)] = inst_25270);

return statearr_25286;
})();
var statearr_25287_25349 = state_25277__$1;
(statearr_25287_25349[(2)] = null);

(statearr_25287_25349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (6))){
var inst_25242 = (state_25277[(7)]);
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25277__$1,(11),inst_25242);
} else {
if((state_val_25278 === (17))){
var inst_25263 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
if(cljs.core.truth_(inst_25263)){
var statearr_25288_25350 = state_25277__$1;
(statearr_25288_25350[(1)] = (19));

} else {
var statearr_25289_25351 = state_25277__$1;
(statearr_25289_25351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (3))){
var inst_25275 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25277__$1,inst_25275);
} else {
if((state_val_25278 === (12))){
var inst_25252 = (state_25277[(10)]);
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25277__$1,(14),inst_25252);
} else {
if((state_val_25278 === (2))){
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25277__$1,(4),results);
} else {
if((state_val_25278 === (19))){
var state_25277__$1 = state_25277;
var statearr_25290_25352 = state_25277__$1;
(statearr_25290_25352[(2)] = null);

(statearr_25290_25352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (11))){
var inst_25252 = (state_25277[(2)]);
var state_25277__$1 = (function (){var statearr_25291 = state_25277;
(statearr_25291[(10)] = inst_25252);

return statearr_25291;
})();
var statearr_25292_25353 = state_25277__$1;
(statearr_25292_25353[(2)] = null);

(statearr_25292_25353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (9))){
var state_25277__$1 = state_25277;
var statearr_25293_25354 = state_25277__$1;
(statearr_25293_25354[(2)] = null);

(statearr_25293_25354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (5))){
var state_25277__$1 = state_25277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25294_25355 = state_25277__$1;
(statearr_25294_25355[(1)] = (8));

} else {
var statearr_25295_25356 = state_25277__$1;
(statearr_25295_25356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (14))){
var inst_25255 = (state_25277[(8)]);
var inst_25255__$1 = (state_25277[(2)]);
var inst_25256 = (inst_25255__$1 == null);
var inst_25257 = cljs.core.not.call(null,inst_25256);
var state_25277__$1 = (function (){var statearr_25296 = state_25277;
(statearr_25296[(8)] = inst_25255__$1);

return statearr_25296;
})();
if(inst_25257){
var statearr_25297_25357 = state_25277__$1;
(statearr_25297_25357[(1)] = (15));

} else {
var statearr_25298_25358 = state_25277__$1;
(statearr_25298_25358[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (16))){
var state_25277__$1 = state_25277;
var statearr_25299_25359 = state_25277__$1;
(statearr_25299_25359[(2)] = false);

(statearr_25299_25359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (10))){
var inst_25249 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
var statearr_25300_25360 = state_25277__$1;
(statearr_25300_25360[(2)] = inst_25249);

(statearr_25300_25360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (18))){
var inst_25260 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
var statearr_25301_25361 = state_25277__$1;
(statearr_25301_25361[(2)] = inst_25260);

(statearr_25301_25361[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (8))){
var inst_25246 = cljs.core.async.close_BANG_.call(null,to);
var state_25277__$1 = state_25277;
var statearr_25302_25362 = state_25277__$1;
(statearr_25302_25362[(2)] = inst_25246);

(statearr_25302_25362[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0 = (function (){
var statearr_25303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__);

(statearr_25303[(1)] = (1));

return statearr_25303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1 = (function (state_25277){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25304){if((e25304 instanceof Object)){
var ex__24881__auto__ = e25304;
var statearr_25305_25363 = state_25277;
(statearr_25305_25363[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25364 = state_25277;
state_25277 = G__25364;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__ = function(state_25277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1.call(this,state_25277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24878__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_25306 = f__24973__auto__.call(null);
(statearr_25306[(6)] = c__24972__auto__);

return statearr_25306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));

return c__24972__auto__;
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
var G__25366 = arguments.length;
switch (G__25366) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__25369 = arguments.length;
switch (G__25369) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__25372 = arguments.length;
switch (G__25372) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24972__auto___25421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_25398){
var state_val_25399 = (state_25398[(1)]);
if((state_val_25399 === (7))){
var inst_25394 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25400_25422 = state_25398__$1;
(statearr_25400_25422[(2)] = inst_25394);

(statearr_25400_25422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (1))){
var state_25398__$1 = state_25398;
var statearr_25401_25423 = state_25398__$1;
(statearr_25401_25423[(2)] = null);

(statearr_25401_25423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (4))){
var inst_25375 = (state_25398[(7)]);
var inst_25375__$1 = (state_25398[(2)]);
var inst_25376 = (inst_25375__$1 == null);
var state_25398__$1 = (function (){var statearr_25402 = state_25398;
(statearr_25402[(7)] = inst_25375__$1);

return statearr_25402;
})();
if(cljs.core.truth_(inst_25376)){
var statearr_25403_25424 = state_25398__$1;
(statearr_25403_25424[(1)] = (5));

} else {
var statearr_25404_25425 = state_25398__$1;
(statearr_25404_25425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (13))){
var state_25398__$1 = state_25398;
var statearr_25405_25426 = state_25398__$1;
(statearr_25405_25426[(2)] = null);

(statearr_25405_25426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (6))){
var inst_25375 = (state_25398[(7)]);
var inst_25381 = p.call(null,inst_25375);
var state_25398__$1 = state_25398;
if(cljs.core.truth_(inst_25381)){
var statearr_25406_25427 = state_25398__$1;
(statearr_25406_25427[(1)] = (9));

} else {
var statearr_25407_25428 = state_25398__$1;
(statearr_25407_25428[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (3))){
var inst_25396 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25398__$1,inst_25396);
} else {
if((state_val_25399 === (12))){
var state_25398__$1 = state_25398;
var statearr_25408_25429 = state_25398__$1;
(statearr_25408_25429[(2)] = null);

(statearr_25408_25429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (2))){
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25398__$1,(4),ch);
} else {
if((state_val_25399 === (11))){
var inst_25375 = (state_25398[(7)]);
var inst_25385 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25398__$1,(8),inst_25385,inst_25375);
} else {
if((state_val_25399 === (9))){
var state_25398__$1 = state_25398;
var statearr_25409_25430 = state_25398__$1;
(statearr_25409_25430[(2)] = tc);

(statearr_25409_25430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (5))){
var inst_25378 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25379 = cljs.core.async.close_BANG_.call(null,fc);
var state_25398__$1 = (function (){var statearr_25410 = state_25398;
(statearr_25410[(8)] = inst_25378);

return statearr_25410;
})();
var statearr_25411_25431 = state_25398__$1;
(statearr_25411_25431[(2)] = inst_25379);

(statearr_25411_25431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (14))){
var inst_25392 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25412_25432 = state_25398__$1;
(statearr_25412_25432[(2)] = inst_25392);

(statearr_25412_25432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (10))){
var state_25398__$1 = state_25398;
var statearr_25413_25433 = state_25398__$1;
(statearr_25413_25433[(2)] = fc);

(statearr_25413_25433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (8))){
var inst_25387 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
if(cljs.core.truth_(inst_25387)){
var statearr_25414_25434 = state_25398__$1;
(statearr_25414_25434[(1)] = (12));

} else {
var statearr_25415_25435 = state_25398__$1;
(statearr_25415_25435[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_25416 = [null,null,null,null,null,null,null,null,null];
(statearr_25416[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_25416[(1)] = (1));

return statearr_25416;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_25398){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25417){if((e25417 instanceof Object)){
var ex__24881__auto__ = e25417;
var statearr_25418_25436 = state_25398;
(statearr_25418_25436[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25437 = state_25398;
state_25398 = G__25437;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_25398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_25398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_25419 = f__24973__auto__.call(null);
(statearr_25419[(6)] = c__24972__auto___25421);

return statearr_25419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_25458){
var state_val_25459 = (state_25458[(1)]);
if((state_val_25459 === (7))){
var inst_25454 = (state_25458[(2)]);
var state_25458__$1 = state_25458;
var statearr_25460_25478 = state_25458__$1;
(statearr_25460_25478[(2)] = inst_25454);

(statearr_25460_25478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (1))){
var inst_25438 = init;
var state_25458__$1 = (function (){var statearr_25461 = state_25458;
(statearr_25461[(7)] = inst_25438);

return statearr_25461;
})();
var statearr_25462_25479 = state_25458__$1;
(statearr_25462_25479[(2)] = null);

(statearr_25462_25479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (4))){
var inst_25441 = (state_25458[(8)]);
var inst_25441__$1 = (state_25458[(2)]);
var inst_25442 = (inst_25441__$1 == null);
var state_25458__$1 = (function (){var statearr_25463 = state_25458;
(statearr_25463[(8)] = inst_25441__$1);

return statearr_25463;
})();
if(cljs.core.truth_(inst_25442)){
var statearr_25464_25480 = state_25458__$1;
(statearr_25464_25480[(1)] = (5));

} else {
var statearr_25465_25481 = state_25458__$1;
(statearr_25465_25481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (6))){
var inst_25441 = (state_25458[(8)]);
var inst_25445 = (state_25458[(9)]);
var inst_25438 = (state_25458[(7)]);
var inst_25445__$1 = f.call(null,inst_25438,inst_25441);
var inst_25446 = cljs.core.reduced_QMARK_.call(null,inst_25445__$1);
var state_25458__$1 = (function (){var statearr_25466 = state_25458;
(statearr_25466[(9)] = inst_25445__$1);

return statearr_25466;
})();
if(inst_25446){
var statearr_25467_25482 = state_25458__$1;
(statearr_25467_25482[(1)] = (8));

} else {
var statearr_25468_25483 = state_25458__$1;
(statearr_25468_25483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (3))){
var inst_25456 = (state_25458[(2)]);
var state_25458__$1 = state_25458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25458__$1,inst_25456);
} else {
if((state_val_25459 === (2))){
var state_25458__$1 = state_25458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25458__$1,(4),ch);
} else {
if((state_val_25459 === (9))){
var inst_25445 = (state_25458[(9)]);
var inst_25438 = inst_25445;
var state_25458__$1 = (function (){var statearr_25469 = state_25458;
(statearr_25469[(7)] = inst_25438);

return statearr_25469;
})();
var statearr_25470_25484 = state_25458__$1;
(statearr_25470_25484[(2)] = null);

(statearr_25470_25484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (5))){
var inst_25438 = (state_25458[(7)]);
var state_25458__$1 = state_25458;
var statearr_25471_25485 = state_25458__$1;
(statearr_25471_25485[(2)] = inst_25438);

(statearr_25471_25485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (10))){
var inst_25452 = (state_25458[(2)]);
var state_25458__$1 = state_25458;
var statearr_25472_25486 = state_25458__$1;
(statearr_25472_25486[(2)] = inst_25452);

(statearr_25472_25486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (8))){
var inst_25445 = (state_25458[(9)]);
var inst_25448 = cljs.core.deref.call(null,inst_25445);
var state_25458__$1 = state_25458;
var statearr_25473_25487 = state_25458__$1;
(statearr_25473_25487[(2)] = inst_25448);

(statearr_25473_25487[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__24878__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24878__auto____0 = (function (){
var statearr_25474 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25474[(0)] = cljs$core$async$reduce_$_state_machine__24878__auto__);

(statearr_25474[(1)] = (1));

return statearr_25474;
});
var cljs$core$async$reduce_$_state_machine__24878__auto____1 = (function (state_25458){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25475){if((e25475 instanceof Object)){
var ex__24881__auto__ = e25475;
var statearr_25476_25488 = state_25458;
(statearr_25476_25488[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25489 = state_25458;
state_25458 = G__25489;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24878__auto__ = function(state_25458){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24878__auto____1.call(this,state_25458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24878__auto____0;
cljs$core$async$reduce_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24878__auto____1;
return cljs$core$async$reduce_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_25477 = f__24973__auto__.call(null);
(statearr_25477[(6)] = c__24972__auto__);

return statearr_25477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));

return c__24972__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_25495){
var state_val_25496 = (state_25495[(1)]);
if((state_val_25496 === (1))){
var inst_25490 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(2),inst_25490);
} else {
if((state_val_25496 === (2))){
var inst_25492 = (state_25495[(2)]);
var inst_25493 = f__$1.call(null,inst_25492);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25495__$1,inst_25493);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24878__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24878__auto____0 = (function (){
var statearr_25497 = [null,null,null,null,null,null,null];
(statearr_25497[(0)] = cljs$core$async$transduce_$_state_machine__24878__auto__);

(statearr_25497[(1)] = (1));

return statearr_25497;
});
var cljs$core$async$transduce_$_state_machine__24878__auto____1 = (function (state_25495){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25498){if((e25498 instanceof Object)){
var ex__24881__auto__ = e25498;
var statearr_25499_25501 = state_25495;
(statearr_25499_25501[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25502 = state_25495;
state_25495 = G__25502;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24878__auto__ = function(state_25495){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24878__auto____1.call(this,state_25495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24878__auto____0;
cljs$core$async$transduce_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24878__auto____1;
return cljs$core$async$transduce_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_25500 = f__24973__auto__.call(null);
(statearr_25500[(6)] = c__24972__auto__);

return statearr_25500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));

return c__24972__auto__;
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
var G__25504 = arguments.length;
switch (G__25504) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_25529){
var state_val_25530 = (state_25529[(1)]);
if((state_val_25530 === (7))){
var inst_25511 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25531_25552 = state_25529__$1;
(statearr_25531_25552[(2)] = inst_25511);

(statearr_25531_25552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (1))){
var inst_25505 = cljs.core.seq.call(null,coll);
var inst_25506 = inst_25505;
var state_25529__$1 = (function (){var statearr_25532 = state_25529;
(statearr_25532[(7)] = inst_25506);

return statearr_25532;
})();
var statearr_25533_25553 = state_25529__$1;
(statearr_25533_25553[(2)] = null);

(statearr_25533_25553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (4))){
var inst_25506 = (state_25529[(7)]);
var inst_25509 = cljs.core.first.call(null,inst_25506);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25529__$1,(7),ch,inst_25509);
} else {
if((state_val_25530 === (13))){
var inst_25523 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25534_25554 = state_25529__$1;
(statearr_25534_25554[(2)] = inst_25523);

(statearr_25534_25554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (6))){
var inst_25514 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25514)){
var statearr_25535_25555 = state_25529__$1;
(statearr_25535_25555[(1)] = (8));

} else {
var statearr_25536_25556 = state_25529__$1;
(statearr_25536_25556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (3))){
var inst_25527 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25529__$1,inst_25527);
} else {
if((state_val_25530 === (12))){
var state_25529__$1 = state_25529;
var statearr_25537_25557 = state_25529__$1;
(statearr_25537_25557[(2)] = null);

(statearr_25537_25557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (2))){
var inst_25506 = (state_25529[(7)]);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25506)){
var statearr_25538_25558 = state_25529__$1;
(statearr_25538_25558[(1)] = (4));

} else {
var statearr_25539_25559 = state_25529__$1;
(statearr_25539_25559[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (11))){
var inst_25520 = cljs.core.async.close_BANG_.call(null,ch);
var state_25529__$1 = state_25529;
var statearr_25540_25560 = state_25529__$1;
(statearr_25540_25560[(2)] = inst_25520);

(statearr_25540_25560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (9))){
var state_25529__$1 = state_25529;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25541_25561 = state_25529__$1;
(statearr_25541_25561[(1)] = (11));

} else {
var statearr_25542_25562 = state_25529__$1;
(statearr_25542_25562[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (5))){
var inst_25506 = (state_25529[(7)]);
var state_25529__$1 = state_25529;
var statearr_25543_25563 = state_25529__$1;
(statearr_25543_25563[(2)] = inst_25506);

(statearr_25543_25563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (10))){
var inst_25525 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25544_25564 = state_25529__$1;
(statearr_25544_25564[(2)] = inst_25525);

(statearr_25544_25564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (8))){
var inst_25506 = (state_25529[(7)]);
var inst_25516 = cljs.core.next.call(null,inst_25506);
var inst_25506__$1 = inst_25516;
var state_25529__$1 = (function (){var statearr_25545 = state_25529;
(statearr_25545[(7)] = inst_25506__$1);

return statearr_25545;
})();
var statearr_25546_25565 = state_25529__$1;
(statearr_25546_25565[(2)] = null);

(statearr_25546_25565[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_25547 = [null,null,null,null,null,null,null,null];
(statearr_25547[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_25547[(1)] = (1));

return statearr_25547;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_25529){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25548){if((e25548 instanceof Object)){
var ex__24881__auto__ = e25548;
var statearr_25549_25566 = state_25529;
(statearr_25549_25566[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25567 = state_25529;
state_25529 = G__25567;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_25529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_25529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_25550 = f__24973__auto__.call(null);
(statearr_25550[(6)] = c__24972__auto__);

return statearr_25550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));

return c__24972__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mux$muxch_STAR_$dyn_25568 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,_);
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25568.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25569 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_25569.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25570 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_25570.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25571 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m);
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_25571.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25572 = (function (ch,cs,meta25573){
this.ch = ch;
this.cs = cs;
this.meta25573 = meta25573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25574,meta25573__$1){
var self__ = this;
var _25574__$1 = this;
return (new cljs.core.async.t_cljs$core$async25572(self__.ch,self__.cs,meta25573__$1));
}));

(cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25574){
var self__ = this;
var _25574__$1 = this;
return self__.meta25573;
}));

(cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25573","meta25573",-479512866,null)], null);
}));

(cljs.core.async.t_cljs$core$async25572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25572");

(cljs.core.async.t_cljs$core$async25572.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25572.
 */
cljs.core.async.__GT_t_cljs$core$async25572 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25572(ch__$1,cs__$1,meta25573){
return (new cljs.core.async.t_cljs$core$async25572(ch__$1,cs__$1,meta25573));
});

}

return (new cljs.core.async.t_cljs$core$async25572(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__24972__auto___25794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_25709){
var state_val_25710 = (state_25709[(1)]);
if((state_val_25710 === (7))){
var inst_25705 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25711_25795 = state_25709__$1;
(statearr_25711_25795[(2)] = inst_25705);

(statearr_25711_25795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (20))){
var inst_25608 = (state_25709[(7)]);
var inst_25620 = cljs.core.first.call(null,inst_25608);
var inst_25621 = cljs.core.nth.call(null,inst_25620,(0),null);
var inst_25622 = cljs.core.nth.call(null,inst_25620,(1),null);
var state_25709__$1 = (function (){var statearr_25712 = state_25709;
(statearr_25712[(8)] = inst_25621);

return statearr_25712;
})();
if(cljs.core.truth_(inst_25622)){
var statearr_25713_25796 = state_25709__$1;
(statearr_25713_25796[(1)] = (22));

} else {
var statearr_25714_25797 = state_25709__$1;
(statearr_25714_25797[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (27))){
var inst_25650 = (state_25709[(9)]);
var inst_25577 = (state_25709[(10)]);
var inst_25652 = (state_25709[(11)]);
var inst_25657 = (state_25709[(12)]);
var inst_25657__$1 = cljs.core._nth.call(null,inst_25650,inst_25652);
var inst_25658 = cljs.core.async.put_BANG_.call(null,inst_25657__$1,inst_25577,done);
var state_25709__$1 = (function (){var statearr_25715 = state_25709;
(statearr_25715[(12)] = inst_25657__$1);

return statearr_25715;
})();
if(cljs.core.truth_(inst_25658)){
var statearr_25716_25798 = state_25709__$1;
(statearr_25716_25798[(1)] = (30));

} else {
var statearr_25717_25799 = state_25709__$1;
(statearr_25717_25799[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (1))){
var state_25709__$1 = state_25709;
var statearr_25718_25800 = state_25709__$1;
(statearr_25718_25800[(2)] = null);

(statearr_25718_25800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (24))){
var inst_25608 = (state_25709[(7)]);
var inst_25627 = (state_25709[(2)]);
var inst_25628 = cljs.core.next.call(null,inst_25608);
var inst_25586 = inst_25628;
var inst_25587 = null;
var inst_25588 = (0);
var inst_25589 = (0);
var state_25709__$1 = (function (){var statearr_25719 = state_25709;
(statearr_25719[(13)] = inst_25587);

(statearr_25719[(14)] = inst_25586);

(statearr_25719[(15)] = inst_25627);

(statearr_25719[(16)] = inst_25588);

(statearr_25719[(17)] = inst_25589);

return statearr_25719;
})();
var statearr_25720_25801 = state_25709__$1;
(statearr_25720_25801[(2)] = null);

(statearr_25720_25801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (39))){
var state_25709__$1 = state_25709;
var statearr_25724_25802 = state_25709__$1;
(statearr_25724_25802[(2)] = null);

(statearr_25724_25802[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (4))){
var inst_25577 = (state_25709[(10)]);
var inst_25577__$1 = (state_25709[(2)]);
var inst_25578 = (inst_25577__$1 == null);
var state_25709__$1 = (function (){var statearr_25725 = state_25709;
(statearr_25725[(10)] = inst_25577__$1);

return statearr_25725;
})();
if(cljs.core.truth_(inst_25578)){
var statearr_25726_25803 = state_25709__$1;
(statearr_25726_25803[(1)] = (5));

} else {
var statearr_25727_25804 = state_25709__$1;
(statearr_25727_25804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (15))){
var inst_25587 = (state_25709[(13)]);
var inst_25586 = (state_25709[(14)]);
var inst_25588 = (state_25709[(16)]);
var inst_25589 = (state_25709[(17)]);
var inst_25604 = (state_25709[(2)]);
var inst_25605 = (inst_25589 + (1));
var tmp25721 = inst_25587;
var tmp25722 = inst_25586;
var tmp25723 = inst_25588;
var inst_25586__$1 = tmp25722;
var inst_25587__$1 = tmp25721;
var inst_25588__$1 = tmp25723;
var inst_25589__$1 = inst_25605;
var state_25709__$1 = (function (){var statearr_25728 = state_25709;
(statearr_25728[(18)] = inst_25604);

(statearr_25728[(13)] = inst_25587__$1);

(statearr_25728[(14)] = inst_25586__$1);

(statearr_25728[(16)] = inst_25588__$1);

(statearr_25728[(17)] = inst_25589__$1);

return statearr_25728;
})();
var statearr_25729_25805 = state_25709__$1;
(statearr_25729_25805[(2)] = null);

(statearr_25729_25805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (21))){
var inst_25631 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25733_25806 = state_25709__$1;
(statearr_25733_25806[(2)] = inst_25631);

(statearr_25733_25806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (31))){
var inst_25657 = (state_25709[(12)]);
var inst_25661 = done.call(null,null);
var inst_25662 = cljs.core.async.untap_STAR_.call(null,m,inst_25657);
var state_25709__$1 = (function (){var statearr_25734 = state_25709;
(statearr_25734[(19)] = inst_25661);

return statearr_25734;
})();
var statearr_25735_25807 = state_25709__$1;
(statearr_25735_25807[(2)] = inst_25662);

(statearr_25735_25807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (32))){
var inst_25649 = (state_25709[(20)]);
var inst_25650 = (state_25709[(9)]);
var inst_25651 = (state_25709[(21)]);
var inst_25652 = (state_25709[(11)]);
var inst_25664 = (state_25709[(2)]);
var inst_25665 = (inst_25652 + (1));
var tmp25730 = inst_25649;
var tmp25731 = inst_25650;
var tmp25732 = inst_25651;
var inst_25649__$1 = tmp25730;
var inst_25650__$1 = tmp25731;
var inst_25651__$1 = tmp25732;
var inst_25652__$1 = inst_25665;
var state_25709__$1 = (function (){var statearr_25736 = state_25709;
(statearr_25736[(20)] = inst_25649__$1);

(statearr_25736[(9)] = inst_25650__$1);

(statearr_25736[(21)] = inst_25651__$1);

(statearr_25736[(22)] = inst_25664);

(statearr_25736[(11)] = inst_25652__$1);

return statearr_25736;
})();
var statearr_25737_25808 = state_25709__$1;
(statearr_25737_25808[(2)] = null);

(statearr_25737_25808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (40))){
var inst_25677 = (state_25709[(23)]);
var inst_25681 = done.call(null,null);
var inst_25682 = cljs.core.async.untap_STAR_.call(null,m,inst_25677);
var state_25709__$1 = (function (){var statearr_25738 = state_25709;
(statearr_25738[(24)] = inst_25681);

return statearr_25738;
})();
var statearr_25739_25809 = state_25709__$1;
(statearr_25739_25809[(2)] = inst_25682);

(statearr_25739_25809[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (33))){
var inst_25668 = (state_25709[(25)]);
var inst_25670 = cljs.core.chunked_seq_QMARK_.call(null,inst_25668);
var state_25709__$1 = state_25709;
if(inst_25670){
var statearr_25740_25810 = state_25709__$1;
(statearr_25740_25810[(1)] = (36));

} else {
var statearr_25741_25811 = state_25709__$1;
(statearr_25741_25811[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (13))){
var inst_25598 = (state_25709[(26)]);
var inst_25601 = cljs.core.async.close_BANG_.call(null,inst_25598);
var state_25709__$1 = state_25709;
var statearr_25742_25812 = state_25709__$1;
(statearr_25742_25812[(2)] = inst_25601);

(statearr_25742_25812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (22))){
var inst_25621 = (state_25709[(8)]);
var inst_25624 = cljs.core.async.close_BANG_.call(null,inst_25621);
var state_25709__$1 = state_25709;
var statearr_25743_25813 = state_25709__$1;
(statearr_25743_25813[(2)] = inst_25624);

(statearr_25743_25813[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (36))){
var inst_25668 = (state_25709[(25)]);
var inst_25672 = cljs.core.chunk_first.call(null,inst_25668);
var inst_25673 = cljs.core.chunk_rest.call(null,inst_25668);
var inst_25674 = cljs.core.count.call(null,inst_25672);
var inst_25649 = inst_25673;
var inst_25650 = inst_25672;
var inst_25651 = inst_25674;
var inst_25652 = (0);
var state_25709__$1 = (function (){var statearr_25744 = state_25709;
(statearr_25744[(20)] = inst_25649);

(statearr_25744[(9)] = inst_25650);

(statearr_25744[(21)] = inst_25651);

(statearr_25744[(11)] = inst_25652);

return statearr_25744;
})();
var statearr_25745_25814 = state_25709__$1;
(statearr_25745_25814[(2)] = null);

(statearr_25745_25814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (41))){
var inst_25668 = (state_25709[(25)]);
var inst_25684 = (state_25709[(2)]);
var inst_25685 = cljs.core.next.call(null,inst_25668);
var inst_25649 = inst_25685;
var inst_25650 = null;
var inst_25651 = (0);
var inst_25652 = (0);
var state_25709__$1 = (function (){var statearr_25746 = state_25709;
(statearr_25746[(20)] = inst_25649);

(statearr_25746[(9)] = inst_25650);

(statearr_25746[(27)] = inst_25684);

(statearr_25746[(21)] = inst_25651);

(statearr_25746[(11)] = inst_25652);

return statearr_25746;
})();
var statearr_25747_25815 = state_25709__$1;
(statearr_25747_25815[(2)] = null);

(statearr_25747_25815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (43))){
var state_25709__$1 = state_25709;
var statearr_25748_25816 = state_25709__$1;
(statearr_25748_25816[(2)] = null);

(statearr_25748_25816[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (29))){
var inst_25693 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25749_25817 = state_25709__$1;
(statearr_25749_25817[(2)] = inst_25693);

(statearr_25749_25817[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (44))){
var inst_25702 = (state_25709[(2)]);
var state_25709__$1 = (function (){var statearr_25750 = state_25709;
(statearr_25750[(28)] = inst_25702);

return statearr_25750;
})();
var statearr_25751_25818 = state_25709__$1;
(statearr_25751_25818[(2)] = null);

(statearr_25751_25818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (6))){
var inst_25641 = (state_25709[(29)]);
var inst_25640 = cljs.core.deref.call(null,cs);
var inst_25641__$1 = cljs.core.keys.call(null,inst_25640);
var inst_25642 = cljs.core.count.call(null,inst_25641__$1);
var inst_25643 = cljs.core.reset_BANG_.call(null,dctr,inst_25642);
var inst_25648 = cljs.core.seq.call(null,inst_25641__$1);
var inst_25649 = inst_25648;
var inst_25650 = null;
var inst_25651 = (0);
var inst_25652 = (0);
var state_25709__$1 = (function (){var statearr_25752 = state_25709;
(statearr_25752[(20)] = inst_25649);

(statearr_25752[(9)] = inst_25650);

(statearr_25752[(30)] = inst_25643);

(statearr_25752[(21)] = inst_25651);

(statearr_25752[(11)] = inst_25652);

(statearr_25752[(29)] = inst_25641__$1);

return statearr_25752;
})();
var statearr_25753_25819 = state_25709__$1;
(statearr_25753_25819[(2)] = null);

(statearr_25753_25819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (28))){
var inst_25649 = (state_25709[(20)]);
var inst_25668 = (state_25709[(25)]);
var inst_25668__$1 = cljs.core.seq.call(null,inst_25649);
var state_25709__$1 = (function (){var statearr_25754 = state_25709;
(statearr_25754[(25)] = inst_25668__$1);

return statearr_25754;
})();
if(inst_25668__$1){
var statearr_25755_25820 = state_25709__$1;
(statearr_25755_25820[(1)] = (33));

} else {
var statearr_25756_25821 = state_25709__$1;
(statearr_25756_25821[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (25))){
var inst_25651 = (state_25709[(21)]);
var inst_25652 = (state_25709[(11)]);
var inst_25654 = (inst_25652 < inst_25651);
var inst_25655 = inst_25654;
var state_25709__$1 = state_25709;
if(cljs.core.truth_(inst_25655)){
var statearr_25757_25822 = state_25709__$1;
(statearr_25757_25822[(1)] = (27));

} else {
var statearr_25758_25823 = state_25709__$1;
(statearr_25758_25823[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (34))){
var state_25709__$1 = state_25709;
var statearr_25759_25824 = state_25709__$1;
(statearr_25759_25824[(2)] = null);

(statearr_25759_25824[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (17))){
var state_25709__$1 = state_25709;
var statearr_25760_25825 = state_25709__$1;
(statearr_25760_25825[(2)] = null);

(statearr_25760_25825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (3))){
var inst_25707 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25709__$1,inst_25707);
} else {
if((state_val_25710 === (12))){
var inst_25636 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25761_25826 = state_25709__$1;
(statearr_25761_25826[(2)] = inst_25636);

(statearr_25761_25826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (2))){
var state_25709__$1 = state_25709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25709__$1,(4),ch);
} else {
if((state_val_25710 === (23))){
var state_25709__$1 = state_25709;
var statearr_25762_25827 = state_25709__$1;
(statearr_25762_25827[(2)] = null);

(statearr_25762_25827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (35))){
var inst_25691 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25763_25828 = state_25709__$1;
(statearr_25763_25828[(2)] = inst_25691);

(statearr_25763_25828[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (19))){
var inst_25608 = (state_25709[(7)]);
var inst_25612 = cljs.core.chunk_first.call(null,inst_25608);
var inst_25613 = cljs.core.chunk_rest.call(null,inst_25608);
var inst_25614 = cljs.core.count.call(null,inst_25612);
var inst_25586 = inst_25613;
var inst_25587 = inst_25612;
var inst_25588 = inst_25614;
var inst_25589 = (0);
var state_25709__$1 = (function (){var statearr_25764 = state_25709;
(statearr_25764[(13)] = inst_25587);

(statearr_25764[(14)] = inst_25586);

(statearr_25764[(16)] = inst_25588);

(statearr_25764[(17)] = inst_25589);

return statearr_25764;
})();
var statearr_25765_25829 = state_25709__$1;
(statearr_25765_25829[(2)] = null);

(statearr_25765_25829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (11))){
var inst_25586 = (state_25709[(14)]);
var inst_25608 = (state_25709[(7)]);
var inst_25608__$1 = cljs.core.seq.call(null,inst_25586);
var state_25709__$1 = (function (){var statearr_25766 = state_25709;
(statearr_25766[(7)] = inst_25608__$1);

return statearr_25766;
})();
if(inst_25608__$1){
var statearr_25767_25830 = state_25709__$1;
(statearr_25767_25830[(1)] = (16));

} else {
var statearr_25768_25831 = state_25709__$1;
(statearr_25768_25831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (9))){
var inst_25638 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25769_25832 = state_25709__$1;
(statearr_25769_25832[(2)] = inst_25638);

(statearr_25769_25832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (5))){
var inst_25584 = cljs.core.deref.call(null,cs);
var inst_25585 = cljs.core.seq.call(null,inst_25584);
var inst_25586 = inst_25585;
var inst_25587 = null;
var inst_25588 = (0);
var inst_25589 = (0);
var state_25709__$1 = (function (){var statearr_25770 = state_25709;
(statearr_25770[(13)] = inst_25587);

(statearr_25770[(14)] = inst_25586);

(statearr_25770[(16)] = inst_25588);

(statearr_25770[(17)] = inst_25589);

return statearr_25770;
})();
var statearr_25771_25833 = state_25709__$1;
(statearr_25771_25833[(2)] = null);

(statearr_25771_25833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (14))){
var state_25709__$1 = state_25709;
var statearr_25772_25834 = state_25709__$1;
(statearr_25772_25834[(2)] = null);

(statearr_25772_25834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (45))){
var inst_25699 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25773_25835 = state_25709__$1;
(statearr_25773_25835[(2)] = inst_25699);

(statearr_25773_25835[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (26))){
var inst_25641 = (state_25709[(29)]);
var inst_25695 = (state_25709[(2)]);
var inst_25696 = cljs.core.seq.call(null,inst_25641);
var state_25709__$1 = (function (){var statearr_25774 = state_25709;
(statearr_25774[(31)] = inst_25695);

return statearr_25774;
})();
if(inst_25696){
var statearr_25775_25836 = state_25709__$1;
(statearr_25775_25836[(1)] = (42));

} else {
var statearr_25776_25837 = state_25709__$1;
(statearr_25776_25837[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (16))){
var inst_25608 = (state_25709[(7)]);
var inst_25610 = cljs.core.chunked_seq_QMARK_.call(null,inst_25608);
var state_25709__$1 = state_25709;
if(inst_25610){
var statearr_25777_25838 = state_25709__$1;
(statearr_25777_25838[(1)] = (19));

} else {
var statearr_25778_25839 = state_25709__$1;
(statearr_25778_25839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (38))){
var inst_25688 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25779_25840 = state_25709__$1;
(statearr_25779_25840[(2)] = inst_25688);

(statearr_25779_25840[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (30))){
var state_25709__$1 = state_25709;
var statearr_25780_25841 = state_25709__$1;
(statearr_25780_25841[(2)] = null);

(statearr_25780_25841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (10))){
var inst_25587 = (state_25709[(13)]);
var inst_25589 = (state_25709[(17)]);
var inst_25597 = cljs.core._nth.call(null,inst_25587,inst_25589);
var inst_25598 = cljs.core.nth.call(null,inst_25597,(0),null);
var inst_25599 = cljs.core.nth.call(null,inst_25597,(1),null);
var state_25709__$1 = (function (){var statearr_25781 = state_25709;
(statearr_25781[(26)] = inst_25598);

return statearr_25781;
})();
if(cljs.core.truth_(inst_25599)){
var statearr_25782_25842 = state_25709__$1;
(statearr_25782_25842[(1)] = (13));

} else {
var statearr_25783_25843 = state_25709__$1;
(statearr_25783_25843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (18))){
var inst_25634 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25784_25844 = state_25709__$1;
(statearr_25784_25844[(2)] = inst_25634);

(statearr_25784_25844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (42))){
var state_25709__$1 = state_25709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25709__$1,(45),dchan);
} else {
if((state_val_25710 === (37))){
var inst_25677 = (state_25709[(23)]);
var inst_25577 = (state_25709[(10)]);
var inst_25668 = (state_25709[(25)]);
var inst_25677__$1 = cljs.core.first.call(null,inst_25668);
var inst_25678 = cljs.core.async.put_BANG_.call(null,inst_25677__$1,inst_25577,done);
var state_25709__$1 = (function (){var statearr_25785 = state_25709;
(statearr_25785[(23)] = inst_25677__$1);

return statearr_25785;
})();
if(cljs.core.truth_(inst_25678)){
var statearr_25786_25845 = state_25709__$1;
(statearr_25786_25845[(1)] = (39));

} else {
var statearr_25787_25846 = state_25709__$1;
(statearr_25787_25846[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (8))){
var inst_25588 = (state_25709[(16)]);
var inst_25589 = (state_25709[(17)]);
var inst_25591 = (inst_25589 < inst_25588);
var inst_25592 = inst_25591;
var state_25709__$1 = state_25709;
if(cljs.core.truth_(inst_25592)){
var statearr_25788_25847 = state_25709__$1;
(statearr_25788_25847[(1)] = (10));

} else {
var statearr_25789_25848 = state_25709__$1;
(statearr_25789_25848[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__24878__auto__ = null;
var cljs$core$async$mult_$_state_machine__24878__auto____0 = (function (){
var statearr_25790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25790[(0)] = cljs$core$async$mult_$_state_machine__24878__auto__);

(statearr_25790[(1)] = (1));

return statearr_25790;
});
var cljs$core$async$mult_$_state_machine__24878__auto____1 = (function (state_25709){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25791){if((e25791 instanceof Object)){
var ex__24881__auto__ = e25791;
var statearr_25792_25849 = state_25709;
(statearr_25792_25849[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25850 = state_25709;
state_25709 = G__25850;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24878__auto__ = function(state_25709){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24878__auto____1.call(this,state_25709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24878__auto____0;
cljs$core$async$mult_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24878__auto____1;
return cljs$core$async$mult_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_25793 = f__24973__auto__.call(null);
(statearr_25793[(6)] = c__24972__auto___25794);

return statearr_25793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25852 = arguments.length;
switch (G__25852) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_25854 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_25854.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25855 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_25855.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25856 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m);
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25856.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25857 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,state_map);
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_25857.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25858 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,mode);
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25858.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25868 = arguments.length;
var i__4772__auto___25869 = (0);
while(true){
if((i__4772__auto___25869 < len__4771__auto___25868)){
args__4777__auto__.push((arguments[i__4772__auto___25869]));

var G__25870 = (i__4772__auto___25869 + (1));
i__4772__auto___25869 = G__25870;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25863){
var map__25864 = p__25863;
var map__25864__$1 = cljs.core.__destructure_map.call(null,map__25864);
var opts = map__25864__$1;
var statearr_25865_25871 = state;
(statearr_25865_25871[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25866_25872 = state;
(statearr_25866_25872[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25867_25873 = state;
(statearr_25867_25873[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25859){
var G__25860 = cljs.core.first.call(null,seq25859);
var seq25859__$1 = cljs.core.next.call(null,seq25859);
var G__25861 = cljs.core.first.call(null,seq25859__$1);
var seq25859__$2 = cljs.core.next.call(null,seq25859__$1);
var G__25862 = cljs.core.first.call(null,seq25859__$2);
var seq25859__$3 = cljs.core.next.call(null,seq25859__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25860,G__25861,G__25862,seq25859__$3);
}));

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
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25874 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25875){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25875 = meta25875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25876,meta25875__$1){
var self__ = this;
var _25876__$1 = this;
return (new cljs.core.async.t_cljs$core$async25874(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25875__$1));
}));

(cljs.core.async.t_cljs$core$async25874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25876){
var self__ = this;
var _25876__$1 = this;
return self__.meta25875;
}));

(cljs.core.async.t_cljs$core$async25874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25874.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25874.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25874.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25874.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25874.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25874.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25875","meta25875",-33859009,null)], null);
}));

(cljs.core.async.t_cljs$core$async25874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25874");

(cljs.core.async.t_cljs$core$async25874.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25874.
 */
cljs.core.async.__GT_t_cljs$core$async25874 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25874(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25875){
return (new cljs.core.async.t_cljs$core$async25874(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25875));
});

}

return (new cljs.core.async.t_cljs$core$async25874(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24972__auto___25973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_25938){
var state_val_25939 = (state_25938[(1)]);
if((state_val_25939 === (7))){
var inst_25934 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
var statearr_25940_25974 = state_25938__$1;
(statearr_25940_25974[(2)] = inst_25934);

(statearr_25940_25974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (20))){
var inst_25928 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
var statearr_25941_25975 = state_25938__$1;
(statearr_25941_25975[(2)] = inst_25928);

(statearr_25941_25975[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (1))){
var inst_25880 = calc_state.call(null);
var inst_25881 = cljs.core.__destructure_map.call(null,inst_25880);
var inst_25882 = cljs.core.get.call(null,inst_25881,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25883 = cljs.core.get.call(null,inst_25881,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25884 = cljs.core.get.call(null,inst_25881,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25885 = inst_25880;
var state_25938__$1 = (function (){var statearr_25942 = state_25938;
(statearr_25942[(7)] = inst_25885);

(statearr_25942[(8)] = inst_25884);

(statearr_25942[(9)] = inst_25883);

(statearr_25942[(10)] = inst_25882);

return statearr_25942;
})();
var statearr_25943_25976 = state_25938__$1;
(statearr_25943_25976[(2)] = null);

(statearr_25943_25976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (4))){
var inst_25898 = (state_25938[(11)]);
var inst_25897 = (state_25938[(12)]);
var inst_25896 = (state_25938[(2)]);
var inst_25897__$1 = cljs.core.nth.call(null,inst_25896,(0),null);
var inst_25898__$1 = cljs.core.nth.call(null,inst_25896,(1),null);
var inst_25899 = (inst_25897__$1 == null);
var inst_25900 = cljs.core._EQ_.call(null,inst_25898__$1,change);
var inst_25901 = ((inst_25899) || (inst_25900));
var state_25938__$1 = (function (){var statearr_25944 = state_25938;
(statearr_25944[(11)] = inst_25898__$1);

(statearr_25944[(12)] = inst_25897__$1);

return statearr_25944;
})();
if(cljs.core.truth_(inst_25901)){
var statearr_25945_25977 = state_25938__$1;
(statearr_25945_25977[(1)] = (5));

} else {
var statearr_25946_25978 = state_25938__$1;
(statearr_25946_25978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (15))){
var inst_25888 = (state_25938[(13)]);
var inst_25885 = inst_25888;
var state_25938__$1 = (function (){var statearr_25947 = state_25938;
(statearr_25947[(7)] = inst_25885);

return statearr_25947;
})();
var statearr_25948_25979 = state_25938__$1;
(statearr_25948_25979[(2)] = null);

(statearr_25948_25979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (13))){
var inst_25920 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
if(cljs.core.truth_(inst_25920)){
var statearr_25949_25980 = state_25938__$1;
(statearr_25949_25980[(1)] = (14));

} else {
var statearr_25950_25981 = state_25938__$1;
(statearr_25950_25981[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (6))){
var inst_25898 = (state_25938[(11)]);
var inst_25889 = (state_25938[(14)]);
var inst_25912 = (state_25938[(15)]);
var inst_25912__$1 = inst_25889.call(null,inst_25898);
var state_25938__$1 = (function (){var statearr_25951 = state_25938;
(statearr_25951[(15)] = inst_25912__$1);

return statearr_25951;
})();
if(cljs.core.truth_(inst_25912__$1)){
var statearr_25952_25982 = state_25938__$1;
(statearr_25952_25982[(1)] = (11));

} else {
var statearr_25953_25983 = state_25938__$1;
(statearr_25953_25983[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (17))){
var inst_25923 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
if(cljs.core.truth_(inst_25923)){
var statearr_25954_25984 = state_25938__$1;
(statearr_25954_25984[(1)] = (18));

} else {
var statearr_25955_25985 = state_25938__$1;
(statearr_25955_25985[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (3))){
var inst_25936 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25938__$1,inst_25936);
} else {
if((state_val_25939 === (12))){
var inst_25898 = (state_25938[(11)]);
var inst_25889 = (state_25938[(14)]);
var inst_25890 = (state_25938[(16)]);
var inst_25915 = cljs.core.empty_QMARK_.call(null,inst_25889);
var inst_25916 = inst_25890.call(null,inst_25898);
var inst_25917 = cljs.core.not.call(null,inst_25916);
var inst_25918 = ((inst_25915) && (inst_25917));
var state_25938__$1 = state_25938;
var statearr_25956_25986 = state_25938__$1;
(statearr_25956_25986[(2)] = inst_25918);

(statearr_25956_25986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (2))){
var inst_25885 = (state_25938[(7)]);
var inst_25888 = (state_25938[(13)]);
var inst_25888__$1 = cljs.core.__destructure_map.call(null,inst_25885);
var inst_25889 = cljs.core.get.call(null,inst_25888__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25890 = cljs.core.get.call(null,inst_25888__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25891 = cljs.core.get.call(null,inst_25888__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25938__$1 = (function (){var statearr_25957 = state_25938;
(statearr_25957[(14)] = inst_25889);

(statearr_25957[(16)] = inst_25890);

(statearr_25957[(13)] = inst_25888__$1);

return statearr_25957;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25938__$1,(4),inst_25891);
} else {
if((state_val_25939 === (19))){
var state_25938__$1 = state_25938;
var statearr_25958_25987 = state_25938__$1;
(statearr_25958_25987[(2)] = null);

(statearr_25958_25987[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (11))){
var inst_25912 = (state_25938[(15)]);
var state_25938__$1 = state_25938;
var statearr_25959_25988 = state_25938__$1;
(statearr_25959_25988[(2)] = inst_25912);

(statearr_25959_25988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (9))){
var state_25938__$1 = state_25938;
var statearr_25960_25989 = state_25938__$1;
(statearr_25960_25989[(2)] = null);

(statearr_25960_25989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (5))){
var inst_25897 = (state_25938[(12)]);
var inst_25903 = (inst_25897 == null);
var state_25938__$1 = state_25938;
if(cljs.core.truth_(inst_25903)){
var statearr_25961_25990 = state_25938__$1;
(statearr_25961_25990[(1)] = (8));

} else {
var statearr_25962_25991 = state_25938__$1;
(statearr_25962_25991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (14))){
var inst_25897 = (state_25938[(12)]);
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25938__$1,(17),out,inst_25897);
} else {
if((state_val_25939 === (16))){
var inst_25932 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
var statearr_25963_25992 = state_25938__$1;
(statearr_25963_25992[(2)] = inst_25932);

(statearr_25963_25992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (10))){
var inst_25908 = (state_25938[(2)]);
var inst_25909 = calc_state.call(null);
var inst_25885 = inst_25909;
var state_25938__$1 = (function (){var statearr_25964 = state_25938;
(statearr_25964[(7)] = inst_25885);

(statearr_25964[(17)] = inst_25908);

return statearr_25964;
})();
var statearr_25965_25993 = state_25938__$1;
(statearr_25965_25993[(2)] = null);

(statearr_25965_25993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (18))){
var inst_25888 = (state_25938[(13)]);
var inst_25885 = inst_25888;
var state_25938__$1 = (function (){var statearr_25966 = state_25938;
(statearr_25966[(7)] = inst_25885);

return statearr_25966;
})();
var statearr_25967_25994 = state_25938__$1;
(statearr_25967_25994[(2)] = null);

(statearr_25967_25994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (8))){
var inst_25898 = (state_25938[(11)]);
var inst_25905 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25898);
var state_25938__$1 = state_25938;
var statearr_25968_25995 = state_25938__$1;
(statearr_25968_25995[(2)] = inst_25905);

(statearr_25968_25995[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__24878__auto__ = null;
var cljs$core$async$mix_$_state_machine__24878__auto____0 = (function (){
var statearr_25969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25969[(0)] = cljs$core$async$mix_$_state_machine__24878__auto__);

(statearr_25969[(1)] = (1));

return statearr_25969;
});
var cljs$core$async$mix_$_state_machine__24878__auto____1 = (function (state_25938){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_25938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e25970){if((e25970 instanceof Object)){
var ex__24881__auto__ = e25970;
var statearr_25971_25996 = state_25938;
(statearr_25971_25996[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25997 = state_25938;
state_25938 = G__25997;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24878__auto__ = function(state_25938){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24878__auto____1.call(this,state_25938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24878__auto____0;
cljs$core$async$mix_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24878__auto____1;
return cljs$core$async$mix_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_25972 = f__24973__auto__.call(null);
(statearr_25972[(6)] = c__24972__auto___25973);

return statearr_25972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_26000 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_26000.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_26001 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v,ch);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_26001.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_26002 = (function() {
var G__26003 = null;
var G__26003__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__26003__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__26003 = function(p,v){
switch(arguments.length){
case 1:
return G__26003__1.call(this,p);
case 2:
return G__26003__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26003.cljs$core$IFn$_invoke$arity$1 = G__26003__1;
G__26003.cljs$core$IFn$_invoke$arity$2 = G__26003__2;
return G__26003;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25999 = arguments.length;
switch (G__25999) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26002.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26002.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__26007 = arguments.length;
switch (G__26007) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__26005_SHARP_){
if(cljs.core.truth_(p1__26005_SHARP_.call(null,topic))){
return p1__26005_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26005_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26008 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26009){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26009 = meta26009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26010,meta26009__$1){
var self__ = this;
var _26010__$1 = this;
return (new cljs.core.async.t_cljs$core$async26008(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26009__$1));
}));

(cljs.core.async.t_cljs$core$async26008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26010){
var self__ = this;
var _26010__$1 = this;
return self__.meta26009;
}));

(cljs.core.async.t_cljs$core$async26008.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26008.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26008.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async26008.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async26008.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async26008.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async26008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26009","meta26009",1998835795,null)], null);
}));

(cljs.core.async.t_cljs$core$async26008.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26008");

(cljs.core.async.t_cljs$core$async26008.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26008");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26008.
 */
cljs.core.async.__GT_t_cljs$core$async26008 = (function cljs$core$async$__GT_t_cljs$core$async26008(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26009){
return (new cljs.core.async.t_cljs$core$async26008(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26009));
});

}

return (new cljs.core.async.t_cljs$core$async26008(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24972__auto___26128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_26082){
var state_val_26083 = (state_26082[(1)]);
if((state_val_26083 === (7))){
var inst_26078 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
var statearr_26084_26129 = state_26082__$1;
(statearr_26084_26129[(2)] = inst_26078);

(statearr_26084_26129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (20))){
var state_26082__$1 = state_26082;
var statearr_26085_26130 = state_26082__$1;
(statearr_26085_26130[(2)] = null);

(statearr_26085_26130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (1))){
var state_26082__$1 = state_26082;
var statearr_26086_26131 = state_26082__$1;
(statearr_26086_26131[(2)] = null);

(statearr_26086_26131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (24))){
var inst_26061 = (state_26082[(7)]);
var inst_26070 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26061);
var state_26082__$1 = state_26082;
var statearr_26087_26132 = state_26082__$1;
(statearr_26087_26132[(2)] = inst_26070);

(statearr_26087_26132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (4))){
var inst_26013 = (state_26082[(8)]);
var inst_26013__$1 = (state_26082[(2)]);
var inst_26014 = (inst_26013__$1 == null);
var state_26082__$1 = (function (){var statearr_26088 = state_26082;
(statearr_26088[(8)] = inst_26013__$1);

return statearr_26088;
})();
if(cljs.core.truth_(inst_26014)){
var statearr_26089_26133 = state_26082__$1;
(statearr_26089_26133[(1)] = (5));

} else {
var statearr_26090_26134 = state_26082__$1;
(statearr_26090_26134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (15))){
var inst_26055 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
var statearr_26091_26135 = state_26082__$1;
(statearr_26091_26135[(2)] = inst_26055);

(statearr_26091_26135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (21))){
var inst_26075 = (state_26082[(2)]);
var state_26082__$1 = (function (){var statearr_26092 = state_26082;
(statearr_26092[(9)] = inst_26075);

return statearr_26092;
})();
var statearr_26093_26136 = state_26082__$1;
(statearr_26093_26136[(2)] = null);

(statearr_26093_26136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (13))){
var inst_26037 = (state_26082[(10)]);
var inst_26039 = cljs.core.chunked_seq_QMARK_.call(null,inst_26037);
var state_26082__$1 = state_26082;
if(inst_26039){
var statearr_26094_26137 = state_26082__$1;
(statearr_26094_26137[(1)] = (16));

} else {
var statearr_26095_26138 = state_26082__$1;
(statearr_26095_26138[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (22))){
var inst_26067 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
if(cljs.core.truth_(inst_26067)){
var statearr_26096_26139 = state_26082__$1;
(statearr_26096_26139[(1)] = (23));

} else {
var statearr_26097_26140 = state_26082__$1;
(statearr_26097_26140[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (6))){
var inst_26013 = (state_26082[(8)]);
var inst_26061 = (state_26082[(7)]);
var inst_26063 = (state_26082[(11)]);
var inst_26061__$1 = topic_fn.call(null,inst_26013);
var inst_26062 = cljs.core.deref.call(null,mults);
var inst_26063__$1 = cljs.core.get.call(null,inst_26062,inst_26061__$1);
var state_26082__$1 = (function (){var statearr_26098 = state_26082;
(statearr_26098[(7)] = inst_26061__$1);

(statearr_26098[(11)] = inst_26063__$1);

return statearr_26098;
})();
if(cljs.core.truth_(inst_26063__$1)){
var statearr_26099_26141 = state_26082__$1;
(statearr_26099_26141[(1)] = (19));

} else {
var statearr_26100_26142 = state_26082__$1;
(statearr_26100_26142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (25))){
var inst_26072 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
var statearr_26101_26143 = state_26082__$1;
(statearr_26101_26143[(2)] = inst_26072);

(statearr_26101_26143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (17))){
var inst_26037 = (state_26082[(10)]);
var inst_26046 = cljs.core.first.call(null,inst_26037);
var inst_26047 = cljs.core.async.muxch_STAR_.call(null,inst_26046);
var inst_26048 = cljs.core.async.close_BANG_.call(null,inst_26047);
var inst_26049 = cljs.core.next.call(null,inst_26037);
var inst_26023 = inst_26049;
var inst_26024 = null;
var inst_26025 = (0);
var inst_26026 = (0);
var state_26082__$1 = (function (){var statearr_26102 = state_26082;
(statearr_26102[(12)] = inst_26025);

(statearr_26102[(13)] = inst_26023);

(statearr_26102[(14)] = inst_26026);

(statearr_26102[(15)] = inst_26048);

(statearr_26102[(16)] = inst_26024);

return statearr_26102;
})();
var statearr_26103_26144 = state_26082__$1;
(statearr_26103_26144[(2)] = null);

(statearr_26103_26144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (3))){
var inst_26080 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26082__$1,inst_26080);
} else {
if((state_val_26083 === (12))){
var inst_26057 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
var statearr_26104_26145 = state_26082__$1;
(statearr_26104_26145[(2)] = inst_26057);

(statearr_26104_26145[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (2))){
var state_26082__$1 = state_26082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26082__$1,(4),ch);
} else {
if((state_val_26083 === (23))){
var state_26082__$1 = state_26082;
var statearr_26105_26146 = state_26082__$1;
(statearr_26105_26146[(2)] = null);

(statearr_26105_26146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (19))){
var inst_26013 = (state_26082[(8)]);
var inst_26063 = (state_26082[(11)]);
var inst_26065 = cljs.core.async.muxch_STAR_.call(null,inst_26063);
var state_26082__$1 = state_26082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26082__$1,(22),inst_26065,inst_26013);
} else {
if((state_val_26083 === (11))){
var inst_26023 = (state_26082[(13)]);
var inst_26037 = (state_26082[(10)]);
var inst_26037__$1 = cljs.core.seq.call(null,inst_26023);
var state_26082__$1 = (function (){var statearr_26106 = state_26082;
(statearr_26106[(10)] = inst_26037__$1);

return statearr_26106;
})();
if(inst_26037__$1){
var statearr_26107_26147 = state_26082__$1;
(statearr_26107_26147[(1)] = (13));

} else {
var statearr_26108_26148 = state_26082__$1;
(statearr_26108_26148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (9))){
var inst_26059 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
var statearr_26109_26149 = state_26082__$1;
(statearr_26109_26149[(2)] = inst_26059);

(statearr_26109_26149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (5))){
var inst_26020 = cljs.core.deref.call(null,mults);
var inst_26021 = cljs.core.vals.call(null,inst_26020);
var inst_26022 = cljs.core.seq.call(null,inst_26021);
var inst_26023 = inst_26022;
var inst_26024 = null;
var inst_26025 = (0);
var inst_26026 = (0);
var state_26082__$1 = (function (){var statearr_26110 = state_26082;
(statearr_26110[(12)] = inst_26025);

(statearr_26110[(13)] = inst_26023);

(statearr_26110[(14)] = inst_26026);

(statearr_26110[(16)] = inst_26024);

return statearr_26110;
})();
var statearr_26111_26150 = state_26082__$1;
(statearr_26111_26150[(2)] = null);

(statearr_26111_26150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (14))){
var state_26082__$1 = state_26082;
var statearr_26115_26151 = state_26082__$1;
(statearr_26115_26151[(2)] = null);

(statearr_26115_26151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (16))){
var inst_26037 = (state_26082[(10)]);
var inst_26041 = cljs.core.chunk_first.call(null,inst_26037);
var inst_26042 = cljs.core.chunk_rest.call(null,inst_26037);
var inst_26043 = cljs.core.count.call(null,inst_26041);
var inst_26023 = inst_26042;
var inst_26024 = inst_26041;
var inst_26025 = inst_26043;
var inst_26026 = (0);
var state_26082__$1 = (function (){var statearr_26116 = state_26082;
(statearr_26116[(12)] = inst_26025);

(statearr_26116[(13)] = inst_26023);

(statearr_26116[(14)] = inst_26026);

(statearr_26116[(16)] = inst_26024);

return statearr_26116;
})();
var statearr_26117_26152 = state_26082__$1;
(statearr_26117_26152[(2)] = null);

(statearr_26117_26152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (10))){
var inst_26025 = (state_26082[(12)]);
var inst_26023 = (state_26082[(13)]);
var inst_26026 = (state_26082[(14)]);
var inst_26024 = (state_26082[(16)]);
var inst_26031 = cljs.core._nth.call(null,inst_26024,inst_26026);
var inst_26032 = cljs.core.async.muxch_STAR_.call(null,inst_26031);
var inst_26033 = cljs.core.async.close_BANG_.call(null,inst_26032);
var inst_26034 = (inst_26026 + (1));
var tmp26112 = inst_26025;
var tmp26113 = inst_26023;
var tmp26114 = inst_26024;
var inst_26023__$1 = tmp26113;
var inst_26024__$1 = tmp26114;
var inst_26025__$1 = tmp26112;
var inst_26026__$1 = inst_26034;
var state_26082__$1 = (function (){var statearr_26118 = state_26082;
(statearr_26118[(12)] = inst_26025__$1);

(statearr_26118[(13)] = inst_26023__$1);

(statearr_26118[(14)] = inst_26026__$1);

(statearr_26118[(16)] = inst_26024__$1);

(statearr_26118[(17)] = inst_26033);

return statearr_26118;
})();
var statearr_26119_26153 = state_26082__$1;
(statearr_26119_26153[(2)] = null);

(statearr_26119_26153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (18))){
var inst_26052 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
var statearr_26120_26154 = state_26082__$1;
(statearr_26120_26154[(2)] = inst_26052);

(statearr_26120_26154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (8))){
var inst_26025 = (state_26082[(12)]);
var inst_26026 = (state_26082[(14)]);
var inst_26028 = (inst_26026 < inst_26025);
var inst_26029 = inst_26028;
var state_26082__$1 = state_26082;
if(cljs.core.truth_(inst_26029)){
var statearr_26121_26155 = state_26082__$1;
(statearr_26121_26155[(1)] = (10));

} else {
var statearr_26122_26156 = state_26082__$1;
(statearr_26122_26156[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_26123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26123[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_26123[(1)] = (1));

return statearr_26123;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_26082){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_26082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e26124){if((e26124 instanceof Object)){
var ex__24881__auto__ = e26124;
var statearr_26125_26157 = state_26082;
(statearr_26125_26157[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26158 = state_26082;
state_26082 = G__26158;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_26082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_26082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_26126 = f__24973__auto__.call(null);
(statearr_26126[(6)] = c__24972__auto___26128);

return statearr_26126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26160 = arguments.length;
switch (G__26160) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__26163 = arguments.length;
switch (G__26163) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__26166 = arguments.length;
switch (G__26166) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__24972__auto___26233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_26205){
var state_val_26206 = (state_26205[(1)]);
if((state_val_26206 === (7))){
var state_26205__$1 = state_26205;
var statearr_26207_26234 = state_26205__$1;
(statearr_26207_26234[(2)] = null);

(statearr_26207_26234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (1))){
var state_26205__$1 = state_26205;
var statearr_26208_26235 = state_26205__$1;
(statearr_26208_26235[(2)] = null);

(statearr_26208_26235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (4))){
var inst_26169 = (state_26205[(7)]);
var inst_26171 = (inst_26169 < cnt);
var state_26205__$1 = state_26205;
if(cljs.core.truth_(inst_26171)){
var statearr_26209_26236 = state_26205__$1;
(statearr_26209_26236[(1)] = (6));

} else {
var statearr_26210_26237 = state_26205__$1;
(statearr_26210_26237[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (15))){
var inst_26201 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
var statearr_26211_26238 = state_26205__$1;
(statearr_26211_26238[(2)] = inst_26201);

(statearr_26211_26238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (13))){
var inst_26194 = cljs.core.async.close_BANG_.call(null,out);
var state_26205__$1 = state_26205;
var statearr_26212_26239 = state_26205__$1;
(statearr_26212_26239[(2)] = inst_26194);

(statearr_26212_26239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (6))){
var state_26205__$1 = state_26205;
var statearr_26213_26240 = state_26205__$1;
(statearr_26213_26240[(2)] = null);

(statearr_26213_26240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (3))){
var inst_26203 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26205__$1,inst_26203);
} else {
if((state_val_26206 === (12))){
var inst_26191 = (state_26205[(8)]);
var inst_26191__$1 = (state_26205[(2)]);
var inst_26192 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26191__$1);
var state_26205__$1 = (function (){var statearr_26214 = state_26205;
(statearr_26214[(8)] = inst_26191__$1);

return statearr_26214;
})();
if(cljs.core.truth_(inst_26192)){
var statearr_26215_26241 = state_26205__$1;
(statearr_26215_26241[(1)] = (13));

} else {
var statearr_26216_26242 = state_26205__$1;
(statearr_26216_26242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (2))){
var inst_26168 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26169 = (0);
var state_26205__$1 = (function (){var statearr_26217 = state_26205;
(statearr_26217[(9)] = inst_26168);

(statearr_26217[(7)] = inst_26169);

return statearr_26217;
})();
var statearr_26218_26243 = state_26205__$1;
(statearr_26218_26243[(2)] = null);

(statearr_26218_26243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (11))){
var inst_26169 = (state_26205[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26205,(10),Object,null,(9));
var inst_26178 = chs__$1.call(null,inst_26169);
var inst_26179 = done.call(null,inst_26169);
var inst_26180 = cljs.core.async.take_BANG_.call(null,inst_26178,inst_26179);
var state_26205__$1 = state_26205;
var statearr_26219_26244 = state_26205__$1;
(statearr_26219_26244[(2)] = inst_26180);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (9))){
var inst_26169 = (state_26205[(7)]);
var inst_26182 = (state_26205[(2)]);
var inst_26183 = (inst_26169 + (1));
var inst_26169__$1 = inst_26183;
var state_26205__$1 = (function (){var statearr_26220 = state_26205;
(statearr_26220[(7)] = inst_26169__$1);

(statearr_26220[(10)] = inst_26182);

return statearr_26220;
})();
var statearr_26221_26245 = state_26205__$1;
(statearr_26221_26245[(2)] = null);

(statearr_26221_26245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (5))){
var inst_26189 = (state_26205[(2)]);
var state_26205__$1 = (function (){var statearr_26222 = state_26205;
(statearr_26222[(11)] = inst_26189);

return statearr_26222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26205__$1,(12),dchan);
} else {
if((state_val_26206 === (14))){
var inst_26191 = (state_26205[(8)]);
var inst_26196 = cljs.core.apply.call(null,f,inst_26191);
var state_26205__$1 = state_26205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26205__$1,(16),out,inst_26196);
} else {
if((state_val_26206 === (16))){
var inst_26198 = (state_26205[(2)]);
var state_26205__$1 = (function (){var statearr_26223 = state_26205;
(statearr_26223[(12)] = inst_26198);

return statearr_26223;
})();
var statearr_26224_26246 = state_26205__$1;
(statearr_26224_26246[(2)] = null);

(statearr_26224_26246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (10))){
var inst_26173 = (state_26205[(2)]);
var inst_26174 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26205__$1 = (function (){var statearr_26225 = state_26205;
(statearr_26225[(13)] = inst_26173);

return statearr_26225;
})();
var statearr_26226_26247 = state_26205__$1;
(statearr_26226_26247[(2)] = inst_26174);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (8))){
var inst_26187 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
var statearr_26227_26248 = state_26205__$1;
(statearr_26227_26248[(2)] = inst_26187);

(statearr_26227_26248[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_26228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26228[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_26228[(1)] = (1));

return statearr_26228;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_26205){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_26205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e26229){if((e26229 instanceof Object)){
var ex__24881__auto__ = e26229;
var statearr_26230_26249 = state_26205;
(statearr_26230_26249[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26250 = state_26205;
state_26205 = G__26250;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_26205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_26205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_26231 = f__24973__auto__.call(null);
(statearr_26231[(6)] = c__24972__auto___26233);

return statearr_26231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26253 = arguments.length;
switch (G__26253) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24972__auto___26307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_26285){
var state_val_26286 = (state_26285[(1)]);
if((state_val_26286 === (7))){
var inst_26265 = (state_26285[(7)]);
var inst_26264 = (state_26285[(8)]);
var inst_26264__$1 = (state_26285[(2)]);
var inst_26265__$1 = cljs.core.nth.call(null,inst_26264__$1,(0),null);
var inst_26266 = cljs.core.nth.call(null,inst_26264__$1,(1),null);
var inst_26267 = (inst_26265__$1 == null);
var state_26285__$1 = (function (){var statearr_26287 = state_26285;
(statearr_26287[(9)] = inst_26266);

(statearr_26287[(7)] = inst_26265__$1);

(statearr_26287[(8)] = inst_26264__$1);

return statearr_26287;
})();
if(cljs.core.truth_(inst_26267)){
var statearr_26288_26308 = state_26285__$1;
(statearr_26288_26308[(1)] = (8));

} else {
var statearr_26289_26309 = state_26285__$1;
(statearr_26289_26309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (1))){
var inst_26254 = cljs.core.vec.call(null,chs);
var inst_26255 = inst_26254;
var state_26285__$1 = (function (){var statearr_26290 = state_26285;
(statearr_26290[(10)] = inst_26255);

return statearr_26290;
})();
var statearr_26291_26310 = state_26285__$1;
(statearr_26291_26310[(2)] = null);

(statearr_26291_26310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (4))){
var inst_26255 = (state_26285[(10)]);
var state_26285__$1 = state_26285;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26285__$1,(7),inst_26255);
} else {
if((state_val_26286 === (6))){
var inst_26281 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
var statearr_26292_26311 = state_26285__$1;
(statearr_26292_26311[(2)] = inst_26281);

(statearr_26292_26311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (3))){
var inst_26283 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26285__$1,inst_26283);
} else {
if((state_val_26286 === (2))){
var inst_26255 = (state_26285[(10)]);
var inst_26257 = cljs.core.count.call(null,inst_26255);
var inst_26258 = (inst_26257 > (0));
var state_26285__$1 = state_26285;
if(cljs.core.truth_(inst_26258)){
var statearr_26294_26312 = state_26285__$1;
(statearr_26294_26312[(1)] = (4));

} else {
var statearr_26295_26313 = state_26285__$1;
(statearr_26295_26313[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (11))){
var inst_26255 = (state_26285[(10)]);
var inst_26274 = (state_26285[(2)]);
var tmp26293 = inst_26255;
var inst_26255__$1 = tmp26293;
var state_26285__$1 = (function (){var statearr_26296 = state_26285;
(statearr_26296[(10)] = inst_26255__$1);

(statearr_26296[(11)] = inst_26274);

return statearr_26296;
})();
var statearr_26297_26314 = state_26285__$1;
(statearr_26297_26314[(2)] = null);

(statearr_26297_26314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (9))){
var inst_26265 = (state_26285[(7)]);
var state_26285__$1 = state_26285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26285__$1,(11),out,inst_26265);
} else {
if((state_val_26286 === (5))){
var inst_26279 = cljs.core.async.close_BANG_.call(null,out);
var state_26285__$1 = state_26285;
var statearr_26298_26315 = state_26285__$1;
(statearr_26298_26315[(2)] = inst_26279);

(statearr_26298_26315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (10))){
var inst_26277 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
var statearr_26299_26316 = state_26285__$1;
(statearr_26299_26316[(2)] = inst_26277);

(statearr_26299_26316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (8))){
var inst_26255 = (state_26285[(10)]);
var inst_26266 = (state_26285[(9)]);
var inst_26265 = (state_26285[(7)]);
var inst_26264 = (state_26285[(8)]);
var inst_26269 = (function (){var cs = inst_26255;
var vec__26260 = inst_26264;
var v = inst_26265;
var c = inst_26266;
return (function (p1__26251_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26251_SHARP_);
});
})();
var inst_26270 = cljs.core.filterv.call(null,inst_26269,inst_26255);
var inst_26255__$1 = inst_26270;
var state_26285__$1 = (function (){var statearr_26300 = state_26285;
(statearr_26300[(10)] = inst_26255__$1);

return statearr_26300;
})();
var statearr_26301_26317 = state_26285__$1;
(statearr_26301_26317[(2)] = null);

(statearr_26301_26317[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_26302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26302[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_26302[(1)] = (1));

return statearr_26302;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_26285){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_26285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e26303){if((e26303 instanceof Object)){
var ex__24881__auto__ = e26303;
var statearr_26304_26318 = state_26285;
(statearr_26304_26318[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26319 = state_26285;
state_26285 = G__26319;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_26285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_26285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_26305 = f__24973__auto__.call(null);
(statearr_26305[(6)] = c__24972__auto___26307);

return statearr_26305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__26321 = arguments.length;
switch (G__26321) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24972__auto___26366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_26345){
var state_val_26346 = (state_26345[(1)]);
if((state_val_26346 === (7))){
var inst_26327 = (state_26345[(7)]);
var inst_26327__$1 = (state_26345[(2)]);
var inst_26328 = (inst_26327__$1 == null);
var inst_26329 = cljs.core.not.call(null,inst_26328);
var state_26345__$1 = (function (){var statearr_26347 = state_26345;
(statearr_26347[(7)] = inst_26327__$1);

return statearr_26347;
})();
if(inst_26329){
var statearr_26348_26367 = state_26345__$1;
(statearr_26348_26367[(1)] = (8));

} else {
var statearr_26349_26368 = state_26345__$1;
(statearr_26349_26368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (1))){
var inst_26322 = (0);
var state_26345__$1 = (function (){var statearr_26350 = state_26345;
(statearr_26350[(8)] = inst_26322);

return statearr_26350;
})();
var statearr_26351_26369 = state_26345__$1;
(statearr_26351_26369[(2)] = null);

(statearr_26351_26369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (4))){
var state_26345__$1 = state_26345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26345__$1,(7),ch);
} else {
if((state_val_26346 === (6))){
var inst_26340 = (state_26345[(2)]);
var state_26345__$1 = state_26345;
var statearr_26352_26370 = state_26345__$1;
(statearr_26352_26370[(2)] = inst_26340);

(statearr_26352_26370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (3))){
var inst_26342 = (state_26345[(2)]);
var inst_26343 = cljs.core.async.close_BANG_.call(null,out);
var state_26345__$1 = (function (){var statearr_26353 = state_26345;
(statearr_26353[(9)] = inst_26342);

return statearr_26353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26345__$1,inst_26343);
} else {
if((state_val_26346 === (2))){
var inst_26322 = (state_26345[(8)]);
var inst_26324 = (inst_26322 < n);
var state_26345__$1 = state_26345;
if(cljs.core.truth_(inst_26324)){
var statearr_26354_26371 = state_26345__$1;
(statearr_26354_26371[(1)] = (4));

} else {
var statearr_26355_26372 = state_26345__$1;
(statearr_26355_26372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (11))){
var inst_26322 = (state_26345[(8)]);
var inst_26332 = (state_26345[(2)]);
var inst_26333 = (inst_26322 + (1));
var inst_26322__$1 = inst_26333;
var state_26345__$1 = (function (){var statearr_26356 = state_26345;
(statearr_26356[(8)] = inst_26322__$1);

(statearr_26356[(10)] = inst_26332);

return statearr_26356;
})();
var statearr_26357_26373 = state_26345__$1;
(statearr_26357_26373[(2)] = null);

(statearr_26357_26373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (9))){
var state_26345__$1 = state_26345;
var statearr_26358_26374 = state_26345__$1;
(statearr_26358_26374[(2)] = null);

(statearr_26358_26374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (5))){
var state_26345__$1 = state_26345;
var statearr_26359_26375 = state_26345__$1;
(statearr_26359_26375[(2)] = null);

(statearr_26359_26375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (10))){
var inst_26337 = (state_26345[(2)]);
var state_26345__$1 = state_26345;
var statearr_26360_26376 = state_26345__$1;
(statearr_26360_26376[(2)] = inst_26337);

(statearr_26360_26376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (8))){
var inst_26327 = (state_26345[(7)]);
var state_26345__$1 = state_26345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26345__$1,(11),out,inst_26327);
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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_26361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26361[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_26361[(1)] = (1));

return statearr_26361;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_26345){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_26345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e26362){if((e26362 instanceof Object)){
var ex__24881__auto__ = e26362;
var statearr_26363_26377 = state_26345;
(statearr_26363_26377[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26378 = state_26345;
state_26345 = G__26378;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_26345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_26345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_26364 = f__24973__auto__.call(null);
(statearr_26364[(6)] = c__24972__auto___26366);

return statearr_26364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26380 = (function (f,ch,meta26381){
this.f = f;
this.ch = ch;
this.meta26381 = meta26381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26382,meta26381__$1){
var self__ = this;
var _26382__$1 = this;
return (new cljs.core.async.t_cljs$core$async26380(self__.f,self__.ch,meta26381__$1));
}));

(cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26382){
var self__ = this;
var _26382__$1 = this;
return self__.meta26381;
}));

(cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26383 = (function (f,ch,meta26381,_,fn1,meta26384){
this.f = f;
this.ch = ch;
this.meta26381 = meta26381;
this._ = _;
this.fn1 = fn1;
this.meta26384 = meta26384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26385,meta26384__$1){
var self__ = this;
var _26385__$1 = this;
return (new cljs.core.async.t_cljs$core$async26383(self__.f,self__.ch,self__.meta26381,self__._,self__.fn1,meta26384__$1));
}));

(cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26385){
var self__ = this;
var _26385__$1 = this;
return self__.meta26384;
}));

(cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__26379_SHARP_){
return f1.call(null,(((p1__26379_SHARP_ == null))?null:self__.f.call(null,p1__26379_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async26383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26381","meta26381",-560473441,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26380","cljs.core.async/t_cljs$core$async26380",-1088319272,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26384","meta26384",-553346828,null)], null);
}));

(cljs.core.async.t_cljs$core$async26383.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26383");

(cljs.core.async.t_cljs$core$async26383.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26383");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26383.
 */
cljs.core.async.__GT_t_cljs$core$async26383 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26383(f__$1,ch__$1,meta26381__$1,___$2,fn1__$1,meta26384){
return (new cljs.core.async.t_cljs$core$async26383(f__$1,ch__$1,meta26381__$1,___$2,fn1__$1,meta26384));
});

}

return (new cljs.core.async.t_cljs$core$async26383(self__.f,self__.ch,self__.meta26381,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26381","meta26381",-560473441,null)], null);
}));

(cljs.core.async.t_cljs$core$async26380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26380");

(cljs.core.async.t_cljs$core$async26380.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26380.
 */
cljs.core.async.__GT_t_cljs$core$async26380 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26380(f__$1,ch__$1,meta26381){
return (new cljs.core.async.t_cljs$core$async26380(f__$1,ch__$1,meta26381));
});

}

return (new cljs.core.async.t_cljs$core$async26380(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26386 = (function (f,ch,meta26387){
this.f = f;
this.ch = ch;
this.meta26387 = meta26387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26388,meta26387__$1){
var self__ = this;
var _26388__$1 = this;
return (new cljs.core.async.t_cljs$core$async26386(self__.f,self__.ch,meta26387__$1));
}));

(cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26388){
var self__ = this;
var _26388__$1 = this;
return self__.meta26387;
}));

(cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async26386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26387","meta26387",-669542641,null)], null);
}));

(cljs.core.async.t_cljs$core$async26386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26386");

(cljs.core.async.t_cljs$core$async26386.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26386.
 */
cljs.core.async.__GT_t_cljs$core$async26386 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26386(f__$1,ch__$1,meta26387){
return (new cljs.core.async.t_cljs$core$async26386(f__$1,ch__$1,meta26387));
});

}

return (new cljs.core.async.t_cljs$core$async26386(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26389 = (function (p,ch,meta26390){
this.p = p;
this.ch = ch;
this.meta26390 = meta26390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26391,meta26390__$1){
var self__ = this;
var _26391__$1 = this;
return (new cljs.core.async.t_cljs$core$async26389(self__.p,self__.ch,meta26390__$1));
}));

(cljs.core.async.t_cljs$core$async26389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26391){
var self__ = this;
var _26391__$1 = this;
return self__.meta26390;
}));

(cljs.core.async.t_cljs$core$async26389.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26389.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26389.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26390","meta26390",-674307224,null)], null);
}));

(cljs.core.async.t_cljs$core$async26389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26389");

(cljs.core.async.t_cljs$core$async26389.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26389.
 */
cljs.core.async.__GT_t_cljs$core$async26389 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26389(p__$1,ch__$1,meta26390){
return (new cljs.core.async.t_cljs$core$async26389(p__$1,ch__$1,meta26390));
});

}

return (new cljs.core.async.t_cljs$core$async26389(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26393 = arguments.length;
switch (G__26393) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24972__auto___26433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_26414){
var state_val_26415 = (state_26414[(1)]);
if((state_val_26415 === (7))){
var inst_26410 = (state_26414[(2)]);
var state_26414__$1 = state_26414;
var statearr_26416_26434 = state_26414__$1;
(statearr_26416_26434[(2)] = inst_26410);

(statearr_26416_26434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (1))){
var state_26414__$1 = state_26414;
var statearr_26417_26435 = state_26414__$1;
(statearr_26417_26435[(2)] = null);

(statearr_26417_26435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (4))){
var inst_26396 = (state_26414[(7)]);
var inst_26396__$1 = (state_26414[(2)]);
var inst_26397 = (inst_26396__$1 == null);
var state_26414__$1 = (function (){var statearr_26418 = state_26414;
(statearr_26418[(7)] = inst_26396__$1);

return statearr_26418;
})();
if(cljs.core.truth_(inst_26397)){
var statearr_26419_26436 = state_26414__$1;
(statearr_26419_26436[(1)] = (5));

} else {
var statearr_26420_26437 = state_26414__$1;
(statearr_26420_26437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (6))){
var inst_26396 = (state_26414[(7)]);
var inst_26401 = p.call(null,inst_26396);
var state_26414__$1 = state_26414;
if(cljs.core.truth_(inst_26401)){
var statearr_26421_26438 = state_26414__$1;
(statearr_26421_26438[(1)] = (8));

} else {
var statearr_26422_26439 = state_26414__$1;
(statearr_26422_26439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (3))){
var inst_26412 = (state_26414[(2)]);
var state_26414__$1 = state_26414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26414__$1,inst_26412);
} else {
if((state_val_26415 === (2))){
var state_26414__$1 = state_26414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26414__$1,(4),ch);
} else {
if((state_val_26415 === (11))){
var inst_26404 = (state_26414[(2)]);
var state_26414__$1 = state_26414;
var statearr_26423_26440 = state_26414__$1;
(statearr_26423_26440[(2)] = inst_26404);

(statearr_26423_26440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (9))){
var state_26414__$1 = state_26414;
var statearr_26424_26441 = state_26414__$1;
(statearr_26424_26441[(2)] = null);

(statearr_26424_26441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (5))){
var inst_26399 = cljs.core.async.close_BANG_.call(null,out);
var state_26414__$1 = state_26414;
var statearr_26425_26442 = state_26414__$1;
(statearr_26425_26442[(2)] = inst_26399);

(statearr_26425_26442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (10))){
var inst_26407 = (state_26414[(2)]);
var state_26414__$1 = (function (){var statearr_26426 = state_26414;
(statearr_26426[(8)] = inst_26407);

return statearr_26426;
})();
var statearr_26427_26443 = state_26414__$1;
(statearr_26427_26443[(2)] = null);

(statearr_26427_26443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (8))){
var inst_26396 = (state_26414[(7)]);
var state_26414__$1 = state_26414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26414__$1,(11),out,inst_26396);
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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_26428 = [null,null,null,null,null,null,null,null,null];
(statearr_26428[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_26428[(1)] = (1));

return statearr_26428;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_26414){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_26414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e26429){if((e26429 instanceof Object)){
var ex__24881__auto__ = e26429;
var statearr_26430_26444 = state_26414;
(statearr_26430_26444[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26445 = state_26414;
state_26414 = G__26445;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_26414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_26414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_26431 = f__24973__auto__.call(null);
(statearr_26431[(6)] = c__24972__auto___26433);

return statearr_26431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26447 = arguments.length;
switch (G__26447) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_26510){
var state_val_26511 = (state_26510[(1)]);
if((state_val_26511 === (7))){
var inst_26506 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26512_26550 = state_26510__$1;
(statearr_26512_26550[(2)] = inst_26506);

(statearr_26512_26550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (20))){
var inst_26476 = (state_26510[(7)]);
var inst_26487 = (state_26510[(2)]);
var inst_26488 = cljs.core.next.call(null,inst_26476);
var inst_26462 = inst_26488;
var inst_26463 = null;
var inst_26464 = (0);
var inst_26465 = (0);
var state_26510__$1 = (function (){var statearr_26513 = state_26510;
(statearr_26513[(8)] = inst_26487);

(statearr_26513[(9)] = inst_26464);

(statearr_26513[(10)] = inst_26463);

(statearr_26513[(11)] = inst_26462);

(statearr_26513[(12)] = inst_26465);

return statearr_26513;
})();
var statearr_26514_26551 = state_26510__$1;
(statearr_26514_26551[(2)] = null);

(statearr_26514_26551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (1))){
var state_26510__$1 = state_26510;
var statearr_26515_26552 = state_26510__$1;
(statearr_26515_26552[(2)] = null);

(statearr_26515_26552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (4))){
var inst_26451 = (state_26510[(13)]);
var inst_26451__$1 = (state_26510[(2)]);
var inst_26452 = (inst_26451__$1 == null);
var state_26510__$1 = (function (){var statearr_26516 = state_26510;
(statearr_26516[(13)] = inst_26451__$1);

return statearr_26516;
})();
if(cljs.core.truth_(inst_26452)){
var statearr_26517_26553 = state_26510__$1;
(statearr_26517_26553[(1)] = (5));

} else {
var statearr_26518_26554 = state_26510__$1;
(statearr_26518_26554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (15))){
var state_26510__$1 = state_26510;
var statearr_26522_26555 = state_26510__$1;
(statearr_26522_26555[(2)] = null);

(statearr_26522_26555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (21))){
var state_26510__$1 = state_26510;
var statearr_26523_26556 = state_26510__$1;
(statearr_26523_26556[(2)] = null);

(statearr_26523_26556[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (13))){
var inst_26464 = (state_26510[(9)]);
var inst_26463 = (state_26510[(10)]);
var inst_26462 = (state_26510[(11)]);
var inst_26465 = (state_26510[(12)]);
var inst_26472 = (state_26510[(2)]);
var inst_26473 = (inst_26465 + (1));
var tmp26519 = inst_26464;
var tmp26520 = inst_26463;
var tmp26521 = inst_26462;
var inst_26462__$1 = tmp26521;
var inst_26463__$1 = tmp26520;
var inst_26464__$1 = tmp26519;
var inst_26465__$1 = inst_26473;
var state_26510__$1 = (function (){var statearr_26524 = state_26510;
(statearr_26524[(9)] = inst_26464__$1);

(statearr_26524[(14)] = inst_26472);

(statearr_26524[(10)] = inst_26463__$1);

(statearr_26524[(11)] = inst_26462__$1);

(statearr_26524[(12)] = inst_26465__$1);

return statearr_26524;
})();
var statearr_26525_26557 = state_26510__$1;
(statearr_26525_26557[(2)] = null);

(statearr_26525_26557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (22))){
var state_26510__$1 = state_26510;
var statearr_26526_26558 = state_26510__$1;
(statearr_26526_26558[(2)] = null);

(statearr_26526_26558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (6))){
var inst_26451 = (state_26510[(13)]);
var inst_26460 = f.call(null,inst_26451);
var inst_26461 = cljs.core.seq.call(null,inst_26460);
var inst_26462 = inst_26461;
var inst_26463 = null;
var inst_26464 = (0);
var inst_26465 = (0);
var state_26510__$1 = (function (){var statearr_26527 = state_26510;
(statearr_26527[(9)] = inst_26464);

(statearr_26527[(10)] = inst_26463);

(statearr_26527[(11)] = inst_26462);

(statearr_26527[(12)] = inst_26465);

return statearr_26527;
})();
var statearr_26528_26559 = state_26510__$1;
(statearr_26528_26559[(2)] = null);

(statearr_26528_26559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (17))){
var inst_26476 = (state_26510[(7)]);
var inst_26480 = cljs.core.chunk_first.call(null,inst_26476);
var inst_26481 = cljs.core.chunk_rest.call(null,inst_26476);
var inst_26482 = cljs.core.count.call(null,inst_26480);
var inst_26462 = inst_26481;
var inst_26463 = inst_26480;
var inst_26464 = inst_26482;
var inst_26465 = (0);
var state_26510__$1 = (function (){var statearr_26529 = state_26510;
(statearr_26529[(9)] = inst_26464);

(statearr_26529[(10)] = inst_26463);

(statearr_26529[(11)] = inst_26462);

(statearr_26529[(12)] = inst_26465);

return statearr_26529;
})();
var statearr_26530_26560 = state_26510__$1;
(statearr_26530_26560[(2)] = null);

(statearr_26530_26560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (3))){
var inst_26508 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26510__$1,inst_26508);
} else {
if((state_val_26511 === (12))){
var inst_26496 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26531_26561 = state_26510__$1;
(statearr_26531_26561[(2)] = inst_26496);

(statearr_26531_26561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (2))){
var state_26510__$1 = state_26510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26510__$1,(4),in$);
} else {
if((state_val_26511 === (23))){
var inst_26504 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26532_26562 = state_26510__$1;
(statearr_26532_26562[(2)] = inst_26504);

(statearr_26532_26562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (19))){
var inst_26491 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26533_26563 = state_26510__$1;
(statearr_26533_26563[(2)] = inst_26491);

(statearr_26533_26563[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (11))){
var inst_26462 = (state_26510[(11)]);
var inst_26476 = (state_26510[(7)]);
var inst_26476__$1 = cljs.core.seq.call(null,inst_26462);
var state_26510__$1 = (function (){var statearr_26534 = state_26510;
(statearr_26534[(7)] = inst_26476__$1);

return statearr_26534;
})();
if(inst_26476__$1){
var statearr_26535_26564 = state_26510__$1;
(statearr_26535_26564[(1)] = (14));

} else {
var statearr_26536_26565 = state_26510__$1;
(statearr_26536_26565[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (9))){
var inst_26498 = (state_26510[(2)]);
var inst_26499 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26510__$1 = (function (){var statearr_26537 = state_26510;
(statearr_26537[(15)] = inst_26498);

return statearr_26537;
})();
if(cljs.core.truth_(inst_26499)){
var statearr_26538_26566 = state_26510__$1;
(statearr_26538_26566[(1)] = (21));

} else {
var statearr_26539_26567 = state_26510__$1;
(statearr_26539_26567[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (5))){
var inst_26454 = cljs.core.async.close_BANG_.call(null,out);
var state_26510__$1 = state_26510;
var statearr_26540_26568 = state_26510__$1;
(statearr_26540_26568[(2)] = inst_26454);

(statearr_26540_26568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (14))){
var inst_26476 = (state_26510[(7)]);
var inst_26478 = cljs.core.chunked_seq_QMARK_.call(null,inst_26476);
var state_26510__$1 = state_26510;
if(inst_26478){
var statearr_26541_26569 = state_26510__$1;
(statearr_26541_26569[(1)] = (17));

} else {
var statearr_26542_26570 = state_26510__$1;
(statearr_26542_26570[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (16))){
var inst_26494 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26543_26571 = state_26510__$1;
(statearr_26543_26571[(2)] = inst_26494);

(statearr_26543_26571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (10))){
var inst_26463 = (state_26510[(10)]);
var inst_26465 = (state_26510[(12)]);
var inst_26470 = cljs.core._nth.call(null,inst_26463,inst_26465);
var state_26510__$1 = state_26510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26510__$1,(13),out,inst_26470);
} else {
if((state_val_26511 === (18))){
var inst_26476 = (state_26510[(7)]);
var inst_26485 = cljs.core.first.call(null,inst_26476);
var state_26510__$1 = state_26510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26510__$1,(20),out,inst_26485);
} else {
if((state_val_26511 === (8))){
var inst_26464 = (state_26510[(9)]);
var inst_26465 = (state_26510[(12)]);
var inst_26467 = (inst_26465 < inst_26464);
var inst_26468 = inst_26467;
var state_26510__$1 = state_26510;
if(cljs.core.truth_(inst_26468)){
var statearr_26544_26572 = state_26510__$1;
(statearr_26544_26572[(1)] = (10));

} else {
var statearr_26545_26573 = state_26510__$1;
(statearr_26545_26573[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24878__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24878__auto____0 = (function (){
var statearr_26546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26546[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24878__auto__);

(statearr_26546[(1)] = (1));

return statearr_26546;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24878__auto____1 = (function (state_26510){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_26510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e26547){if((e26547 instanceof Object)){
var ex__24881__auto__ = e26547;
var statearr_26548_26574 = state_26510;
(statearr_26548_26574[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26575 = state_26510;
state_26510 = G__26575;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24878__auto__ = function(state_26510){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24878__auto____1.call(this,state_26510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24878__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24878__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_26549 = f__24973__auto__.call(null);
(statearr_26549[(6)] = c__24972__auto__);

return statearr_26549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));

return c__24972__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26577 = arguments.length;
switch (G__26577) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26580 = arguments.length;
switch (G__26580) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26583 = arguments.length;
switch (G__26583) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24972__auto___26630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_26607){
var state_val_26608 = (state_26607[(1)]);
if((state_val_26608 === (7))){
var inst_26602 = (state_26607[(2)]);
var state_26607__$1 = state_26607;
var statearr_26609_26631 = state_26607__$1;
(statearr_26609_26631[(2)] = inst_26602);

(statearr_26609_26631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (1))){
var inst_26584 = null;
var state_26607__$1 = (function (){var statearr_26610 = state_26607;
(statearr_26610[(7)] = inst_26584);

return statearr_26610;
})();
var statearr_26611_26632 = state_26607__$1;
(statearr_26611_26632[(2)] = null);

(statearr_26611_26632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (4))){
var inst_26587 = (state_26607[(8)]);
var inst_26587__$1 = (state_26607[(2)]);
var inst_26588 = (inst_26587__$1 == null);
var inst_26589 = cljs.core.not.call(null,inst_26588);
var state_26607__$1 = (function (){var statearr_26612 = state_26607;
(statearr_26612[(8)] = inst_26587__$1);

return statearr_26612;
})();
if(inst_26589){
var statearr_26613_26633 = state_26607__$1;
(statearr_26613_26633[(1)] = (5));

} else {
var statearr_26614_26634 = state_26607__$1;
(statearr_26614_26634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (6))){
var state_26607__$1 = state_26607;
var statearr_26615_26635 = state_26607__$1;
(statearr_26615_26635[(2)] = null);

(statearr_26615_26635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (3))){
var inst_26604 = (state_26607[(2)]);
var inst_26605 = cljs.core.async.close_BANG_.call(null,out);
var state_26607__$1 = (function (){var statearr_26616 = state_26607;
(statearr_26616[(9)] = inst_26604);

return statearr_26616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26607__$1,inst_26605);
} else {
if((state_val_26608 === (2))){
var state_26607__$1 = state_26607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26607__$1,(4),ch);
} else {
if((state_val_26608 === (11))){
var inst_26587 = (state_26607[(8)]);
var inst_26596 = (state_26607[(2)]);
var inst_26584 = inst_26587;
var state_26607__$1 = (function (){var statearr_26617 = state_26607;
(statearr_26617[(10)] = inst_26596);

(statearr_26617[(7)] = inst_26584);

return statearr_26617;
})();
var statearr_26618_26636 = state_26607__$1;
(statearr_26618_26636[(2)] = null);

(statearr_26618_26636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (9))){
var inst_26587 = (state_26607[(8)]);
var state_26607__$1 = state_26607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26607__$1,(11),out,inst_26587);
} else {
if((state_val_26608 === (5))){
var inst_26587 = (state_26607[(8)]);
var inst_26584 = (state_26607[(7)]);
var inst_26591 = cljs.core._EQ_.call(null,inst_26587,inst_26584);
var state_26607__$1 = state_26607;
if(inst_26591){
var statearr_26620_26637 = state_26607__$1;
(statearr_26620_26637[(1)] = (8));

} else {
var statearr_26621_26638 = state_26607__$1;
(statearr_26621_26638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (10))){
var inst_26599 = (state_26607[(2)]);
var state_26607__$1 = state_26607;
var statearr_26622_26639 = state_26607__$1;
(statearr_26622_26639[(2)] = inst_26599);

(statearr_26622_26639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26608 === (8))){
var inst_26584 = (state_26607[(7)]);
var tmp26619 = inst_26584;
var inst_26584__$1 = tmp26619;
var state_26607__$1 = (function (){var statearr_26623 = state_26607;
(statearr_26623[(7)] = inst_26584__$1);

return statearr_26623;
})();
var statearr_26624_26640 = state_26607__$1;
(statearr_26624_26640[(2)] = null);

(statearr_26624_26640[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_26625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26625[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_26625[(1)] = (1));

return statearr_26625;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_26607){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_26607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e26626){if((e26626 instanceof Object)){
var ex__24881__auto__ = e26626;
var statearr_26627_26641 = state_26607;
(statearr_26627_26641[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26642 = state_26607;
state_26607 = G__26642;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_26607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_26607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_26628 = f__24973__auto__.call(null);
(statearr_26628[(6)] = c__24972__auto___26630);

return statearr_26628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26644 = arguments.length;
switch (G__26644) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24972__auto___26710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_26682){
var state_val_26683 = (state_26682[(1)]);
if((state_val_26683 === (7))){
var inst_26678 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
var statearr_26684_26711 = state_26682__$1;
(statearr_26684_26711[(2)] = inst_26678);

(statearr_26684_26711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (1))){
var inst_26645 = (new Array(n));
var inst_26646 = inst_26645;
var inst_26647 = (0);
var state_26682__$1 = (function (){var statearr_26685 = state_26682;
(statearr_26685[(7)] = inst_26647);

(statearr_26685[(8)] = inst_26646);

return statearr_26685;
})();
var statearr_26686_26712 = state_26682__$1;
(statearr_26686_26712[(2)] = null);

(statearr_26686_26712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (4))){
var inst_26650 = (state_26682[(9)]);
var inst_26650__$1 = (state_26682[(2)]);
var inst_26651 = (inst_26650__$1 == null);
var inst_26652 = cljs.core.not.call(null,inst_26651);
var state_26682__$1 = (function (){var statearr_26687 = state_26682;
(statearr_26687[(9)] = inst_26650__$1);

return statearr_26687;
})();
if(inst_26652){
var statearr_26688_26713 = state_26682__$1;
(statearr_26688_26713[(1)] = (5));

} else {
var statearr_26689_26714 = state_26682__$1;
(statearr_26689_26714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (15))){
var inst_26672 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
var statearr_26690_26715 = state_26682__$1;
(statearr_26690_26715[(2)] = inst_26672);

(statearr_26690_26715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (13))){
var state_26682__$1 = state_26682;
var statearr_26691_26716 = state_26682__$1;
(statearr_26691_26716[(2)] = null);

(statearr_26691_26716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (6))){
var inst_26647 = (state_26682[(7)]);
var inst_26668 = (inst_26647 > (0));
var state_26682__$1 = state_26682;
if(cljs.core.truth_(inst_26668)){
var statearr_26692_26717 = state_26682__$1;
(statearr_26692_26717[(1)] = (12));

} else {
var statearr_26693_26718 = state_26682__$1;
(statearr_26693_26718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (3))){
var inst_26680 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26682__$1,inst_26680);
} else {
if((state_val_26683 === (12))){
var inst_26646 = (state_26682[(8)]);
var inst_26670 = cljs.core.vec.call(null,inst_26646);
var state_26682__$1 = state_26682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26682__$1,(15),out,inst_26670);
} else {
if((state_val_26683 === (2))){
var state_26682__$1 = state_26682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26682__$1,(4),ch);
} else {
if((state_val_26683 === (11))){
var inst_26662 = (state_26682[(2)]);
var inst_26663 = (new Array(n));
var inst_26646 = inst_26663;
var inst_26647 = (0);
var state_26682__$1 = (function (){var statearr_26694 = state_26682;
(statearr_26694[(7)] = inst_26647);

(statearr_26694[(10)] = inst_26662);

(statearr_26694[(8)] = inst_26646);

return statearr_26694;
})();
var statearr_26695_26719 = state_26682__$1;
(statearr_26695_26719[(2)] = null);

(statearr_26695_26719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (9))){
var inst_26646 = (state_26682[(8)]);
var inst_26660 = cljs.core.vec.call(null,inst_26646);
var state_26682__$1 = state_26682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26682__$1,(11),out,inst_26660);
} else {
if((state_val_26683 === (5))){
var inst_26647 = (state_26682[(7)]);
var inst_26650 = (state_26682[(9)]);
var inst_26655 = (state_26682[(11)]);
var inst_26646 = (state_26682[(8)]);
var inst_26654 = (inst_26646[inst_26647] = inst_26650);
var inst_26655__$1 = (inst_26647 + (1));
var inst_26656 = (inst_26655__$1 < n);
var state_26682__$1 = (function (){var statearr_26696 = state_26682;
(statearr_26696[(12)] = inst_26654);

(statearr_26696[(11)] = inst_26655__$1);

return statearr_26696;
})();
if(cljs.core.truth_(inst_26656)){
var statearr_26697_26720 = state_26682__$1;
(statearr_26697_26720[(1)] = (8));

} else {
var statearr_26698_26721 = state_26682__$1;
(statearr_26698_26721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (14))){
var inst_26675 = (state_26682[(2)]);
var inst_26676 = cljs.core.async.close_BANG_.call(null,out);
var state_26682__$1 = (function (){var statearr_26700 = state_26682;
(statearr_26700[(13)] = inst_26675);

return statearr_26700;
})();
var statearr_26701_26722 = state_26682__$1;
(statearr_26701_26722[(2)] = inst_26676);

(statearr_26701_26722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (10))){
var inst_26666 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
var statearr_26702_26723 = state_26682__$1;
(statearr_26702_26723[(2)] = inst_26666);

(statearr_26702_26723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (8))){
var inst_26655 = (state_26682[(11)]);
var inst_26646 = (state_26682[(8)]);
var tmp26699 = inst_26646;
var inst_26646__$1 = tmp26699;
var inst_26647 = inst_26655;
var state_26682__$1 = (function (){var statearr_26703 = state_26682;
(statearr_26703[(7)] = inst_26647);

(statearr_26703[(8)] = inst_26646__$1);

return statearr_26703;
})();
var statearr_26704_26724 = state_26682__$1;
(statearr_26704_26724[(2)] = null);

(statearr_26704_26724[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_26705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26705[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_26705[(1)] = (1));

return statearr_26705;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_26682){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_26682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e26706){if((e26706 instanceof Object)){
var ex__24881__auto__ = e26706;
var statearr_26707_26725 = state_26682;
(statearr_26707_26725[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26726 = state_26682;
state_26682 = G__26726;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_26682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_26682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_26708 = f__24973__auto__.call(null);
(statearr_26708[(6)] = c__24972__auto___26710);

return statearr_26708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26728 = arguments.length;
switch (G__26728) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24972__auto___26798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_26770){
var state_val_26771 = (state_26770[(1)]);
if((state_val_26771 === (7))){
var inst_26766 = (state_26770[(2)]);
var state_26770__$1 = state_26770;
var statearr_26772_26799 = state_26770__$1;
(statearr_26772_26799[(2)] = inst_26766);

(statearr_26772_26799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (1))){
var inst_26729 = [];
var inst_26730 = inst_26729;
var inst_26731 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26770__$1 = (function (){var statearr_26773 = state_26770;
(statearr_26773[(7)] = inst_26731);

(statearr_26773[(8)] = inst_26730);

return statearr_26773;
})();
var statearr_26774_26800 = state_26770__$1;
(statearr_26774_26800[(2)] = null);

(statearr_26774_26800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (4))){
var inst_26734 = (state_26770[(9)]);
var inst_26734__$1 = (state_26770[(2)]);
var inst_26735 = (inst_26734__$1 == null);
var inst_26736 = cljs.core.not.call(null,inst_26735);
var state_26770__$1 = (function (){var statearr_26775 = state_26770;
(statearr_26775[(9)] = inst_26734__$1);

return statearr_26775;
})();
if(inst_26736){
var statearr_26776_26801 = state_26770__$1;
(statearr_26776_26801[(1)] = (5));

} else {
var statearr_26777_26802 = state_26770__$1;
(statearr_26777_26802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (15))){
var inst_26760 = (state_26770[(2)]);
var state_26770__$1 = state_26770;
var statearr_26778_26803 = state_26770__$1;
(statearr_26778_26803[(2)] = inst_26760);

(statearr_26778_26803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (13))){
var state_26770__$1 = state_26770;
var statearr_26779_26804 = state_26770__$1;
(statearr_26779_26804[(2)] = null);

(statearr_26779_26804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (6))){
var inst_26730 = (state_26770[(8)]);
var inst_26755 = inst_26730.length;
var inst_26756 = (inst_26755 > (0));
var state_26770__$1 = state_26770;
if(cljs.core.truth_(inst_26756)){
var statearr_26780_26805 = state_26770__$1;
(statearr_26780_26805[(1)] = (12));

} else {
var statearr_26781_26806 = state_26770__$1;
(statearr_26781_26806[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (3))){
var inst_26768 = (state_26770[(2)]);
var state_26770__$1 = state_26770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26770__$1,inst_26768);
} else {
if((state_val_26771 === (12))){
var inst_26730 = (state_26770[(8)]);
var inst_26758 = cljs.core.vec.call(null,inst_26730);
var state_26770__$1 = state_26770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26770__$1,(15),out,inst_26758);
} else {
if((state_val_26771 === (2))){
var state_26770__$1 = state_26770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26770__$1,(4),ch);
} else {
if((state_val_26771 === (11))){
var inst_26738 = (state_26770[(10)]);
var inst_26734 = (state_26770[(9)]);
var inst_26748 = (state_26770[(2)]);
var inst_26749 = [];
var inst_26750 = inst_26749.push(inst_26734);
var inst_26730 = inst_26749;
var inst_26731 = inst_26738;
var state_26770__$1 = (function (){var statearr_26782 = state_26770;
(statearr_26782[(7)] = inst_26731);

(statearr_26782[(11)] = inst_26750);

(statearr_26782[(12)] = inst_26748);

(statearr_26782[(8)] = inst_26730);

return statearr_26782;
})();
var statearr_26783_26807 = state_26770__$1;
(statearr_26783_26807[(2)] = null);

(statearr_26783_26807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (9))){
var inst_26730 = (state_26770[(8)]);
var inst_26746 = cljs.core.vec.call(null,inst_26730);
var state_26770__$1 = state_26770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26770__$1,(11),out,inst_26746);
} else {
if((state_val_26771 === (5))){
var inst_26731 = (state_26770[(7)]);
var inst_26738 = (state_26770[(10)]);
var inst_26734 = (state_26770[(9)]);
var inst_26738__$1 = f.call(null,inst_26734);
var inst_26739 = cljs.core._EQ_.call(null,inst_26738__$1,inst_26731);
var inst_26740 = cljs.core.keyword_identical_QMARK_.call(null,inst_26731,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26741 = ((inst_26739) || (inst_26740));
var state_26770__$1 = (function (){var statearr_26784 = state_26770;
(statearr_26784[(10)] = inst_26738__$1);

return statearr_26784;
})();
if(cljs.core.truth_(inst_26741)){
var statearr_26785_26808 = state_26770__$1;
(statearr_26785_26808[(1)] = (8));

} else {
var statearr_26786_26809 = state_26770__$1;
(statearr_26786_26809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (14))){
var inst_26763 = (state_26770[(2)]);
var inst_26764 = cljs.core.async.close_BANG_.call(null,out);
var state_26770__$1 = (function (){var statearr_26788 = state_26770;
(statearr_26788[(13)] = inst_26763);

return statearr_26788;
})();
var statearr_26789_26810 = state_26770__$1;
(statearr_26789_26810[(2)] = inst_26764);

(statearr_26789_26810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (10))){
var inst_26753 = (state_26770[(2)]);
var state_26770__$1 = state_26770;
var statearr_26790_26811 = state_26770__$1;
(statearr_26790_26811[(2)] = inst_26753);

(statearr_26790_26811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (8))){
var inst_26738 = (state_26770[(10)]);
var inst_26734 = (state_26770[(9)]);
var inst_26730 = (state_26770[(8)]);
var inst_26743 = inst_26730.push(inst_26734);
var tmp26787 = inst_26730;
var inst_26730__$1 = tmp26787;
var inst_26731 = inst_26738;
var state_26770__$1 = (function (){var statearr_26791 = state_26770;
(statearr_26791[(7)] = inst_26731);

(statearr_26791[(14)] = inst_26743);

(statearr_26791[(8)] = inst_26730__$1);

return statearr_26791;
})();
var statearr_26792_26812 = state_26770__$1;
(statearr_26792_26812[(2)] = null);

(statearr_26792_26812[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24878__auto__ = null;
var cljs$core$async$state_machine__24878__auto____0 = (function (){
var statearr_26793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26793[(0)] = cljs$core$async$state_machine__24878__auto__);

(statearr_26793[(1)] = (1));

return statearr_26793;
});
var cljs$core$async$state_machine__24878__auto____1 = (function (state_26770){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_26770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e26794){if((e26794 instanceof Object)){
var ex__24881__auto__ = e26794;
var statearr_26795_26813 = state_26770;
(statearr_26795_26813[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26814 = state_26770;
state_26770 = G__26814;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
cljs$core$async$state_machine__24878__auto__ = function(state_26770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24878__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24878__auto____1.call(this,state_26770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24878__auto____0;
cljs$core$async$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24878__auto____1;
return cljs$core$async$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_26796 = f__24973__auto__.call(null);
(statearr_26796[(6)] = c__24972__auto___26798);

return statearr_26796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1718642481041
