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
var G__26077 = arguments.length;
switch (G__26077) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26078 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26078 = (function (f,blockable,meta26079){
this.f = f;
this.blockable = blockable;
this.meta26079 = meta26079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26080,meta26079__$1){
var self__ = this;
var _26080__$1 = this;
return (new cljs.core.async.t_cljs$core$async26078(self__.f,self__.blockable,meta26079__$1));
}));

(cljs.core.async.t_cljs$core$async26078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26080){
var self__ = this;
var _26080__$1 = this;
return self__.meta26079;
}));

(cljs.core.async.t_cljs$core$async26078.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26079","meta26079",-1166238005,null)], null);
}));

(cljs.core.async.t_cljs$core$async26078.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26078");

(cljs.core.async.t_cljs$core$async26078.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26078");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26078.
 */
cljs.core.async.__GT_t_cljs$core$async26078 = (function cljs$core$async$__GT_t_cljs$core$async26078(f__$1,blockable__$1,meta26079){
return (new cljs.core.async.t_cljs$core$async26078(f__$1,blockable__$1,meta26079));
});

}

return (new cljs.core.async.t_cljs$core$async26078(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26084 = arguments.length;
switch (G__26084) {
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
var G__26087 = arguments.length;
switch (G__26087) {
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
var G__26090 = arguments.length;
switch (G__26090) {
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
var val_26092 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26092);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26092);
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
var G__26094 = arguments.length;
switch (G__26094) {
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
var n__4648__auto___26096 = n;
var x_26097 = (0);
while(true){
if((x_26097 < n__4648__auto___26096)){
(a[x_26097] = (0));

var G__26098 = (x_26097 + (1));
x_26097 = G__26098;
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

var G__26099 = (i + (1));
i = G__26099;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26100 = (function (flag,meta26101){
this.flag = flag;
this.meta26101 = meta26101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26102,meta26101__$1){
var self__ = this;
var _26102__$1 = this;
return (new cljs.core.async.t_cljs$core$async26100(self__.flag,meta26101__$1));
}));

(cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26102){
var self__ = this;
var _26102__$1 = this;
return self__.meta26101;
}));

(cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26101","meta26101",647331714,null)], null);
}));

(cljs.core.async.t_cljs$core$async26100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26100");

(cljs.core.async.t_cljs$core$async26100.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26100.
 */
cljs.core.async.__GT_t_cljs$core$async26100 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26100(flag__$1,meta26101){
return (new cljs.core.async.t_cljs$core$async26100(flag__$1,meta26101));
});

}

return (new cljs.core.async.t_cljs$core$async26100(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26103 = (function (flag,cb,meta26104){
this.flag = flag;
this.cb = cb;
this.meta26104 = meta26104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26105,meta26104__$1){
var self__ = this;
var _26105__$1 = this;
return (new cljs.core.async.t_cljs$core$async26103(self__.flag,self__.cb,meta26104__$1));
}));

(cljs.core.async.t_cljs$core$async26103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26105){
var self__ = this;
var _26105__$1 = this;
return self__.meta26104;
}));

(cljs.core.async.t_cljs$core$async26103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26104","meta26104",1420219231,null)], null);
}));

(cljs.core.async.t_cljs$core$async26103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26103");

(cljs.core.async.t_cljs$core$async26103.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26103.
 */
cljs.core.async.__GT_t_cljs$core$async26103 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26103(flag__$1,cb__$1,meta26104){
return (new cljs.core.async.t_cljs$core$async26103(flag__$1,cb__$1,meta26104));
});

}

return (new cljs.core.async.t_cljs$core$async26103(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26106_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26106_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26107_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26107_SHARP_,port], null));
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
var G__26108 = (i + (1));
i = G__26108;
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
var len__4771__auto___26113 = arguments.length;
var i__4772__auto___26114 = (0);
while(true){
if((i__4772__auto___26114 < len__4771__auto___26113)){
args__4777__auto__.push((arguments[i__4772__auto___26114]));

var G__26115 = (i__4772__auto___26114 + (1));
i__4772__auto___26114 = G__26115;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26111){
var map__26112 = p__26111;
var map__26112__$1 = cljs.core.__destructure_map.call(null,map__26112);
var opts = map__26112__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26109){
var G__26110 = cljs.core.first.call(null,seq26109);
var seq26109__$1 = cljs.core.next.call(null,seq26109);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26110,seq26109__$1);
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
var G__26117 = arguments.length;
switch (G__26117) {
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
var c__26017__auto___26163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_26141){
var state_val_26142 = (state_26141[(1)]);
if((state_val_26142 === (7))){
var inst_26137 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
var statearr_26143_26164 = state_26141__$1;
(statearr_26143_26164[(2)] = inst_26137);

(statearr_26143_26164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (1))){
var state_26141__$1 = state_26141;
var statearr_26144_26165 = state_26141__$1;
(statearr_26144_26165[(2)] = null);

(statearr_26144_26165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (4))){
var inst_26120 = (state_26141[(7)]);
var inst_26120__$1 = (state_26141[(2)]);
var inst_26121 = (inst_26120__$1 == null);
var state_26141__$1 = (function (){var statearr_26145 = state_26141;
(statearr_26145[(7)] = inst_26120__$1);

return statearr_26145;
})();
if(cljs.core.truth_(inst_26121)){
var statearr_26146_26166 = state_26141__$1;
(statearr_26146_26166[(1)] = (5));

} else {
var statearr_26147_26167 = state_26141__$1;
(statearr_26147_26167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (13))){
var state_26141__$1 = state_26141;
var statearr_26148_26168 = state_26141__$1;
(statearr_26148_26168[(2)] = null);

(statearr_26148_26168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (6))){
var inst_26120 = (state_26141[(7)]);
var state_26141__$1 = state_26141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26141__$1,(11),to,inst_26120);
} else {
if((state_val_26142 === (3))){
var inst_26139 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26141__$1,inst_26139);
} else {
if((state_val_26142 === (12))){
var state_26141__$1 = state_26141;
var statearr_26149_26169 = state_26141__$1;
(statearr_26149_26169[(2)] = null);

(statearr_26149_26169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (2))){
var state_26141__$1 = state_26141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26141__$1,(4),from);
} else {
if((state_val_26142 === (11))){
var inst_26130 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
if(cljs.core.truth_(inst_26130)){
var statearr_26150_26170 = state_26141__$1;
(statearr_26150_26170[(1)] = (12));

} else {
var statearr_26151_26171 = state_26141__$1;
(statearr_26151_26171[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (9))){
var state_26141__$1 = state_26141;
var statearr_26152_26172 = state_26141__$1;
(statearr_26152_26172[(2)] = null);

(statearr_26152_26172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (5))){
var state_26141__$1 = state_26141;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26153_26173 = state_26141__$1;
(statearr_26153_26173[(1)] = (8));

} else {
var statearr_26154_26174 = state_26141__$1;
(statearr_26154_26174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (14))){
var inst_26135 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
var statearr_26155_26175 = state_26141__$1;
(statearr_26155_26175[(2)] = inst_26135);

(statearr_26155_26175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (10))){
var inst_26127 = (state_26141[(2)]);
var state_26141__$1 = state_26141;
var statearr_26156_26176 = state_26141__$1;
(statearr_26156_26176[(2)] = inst_26127);

(statearr_26156_26176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26142 === (8))){
var inst_26124 = cljs.core.async.close_BANG_.call(null,to);
var state_26141__$1 = state_26141;
var statearr_26157_26177 = state_26141__$1;
(statearr_26157_26177[(2)] = inst_26124);

(statearr_26157_26177[(1)] = (10));


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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_26158 = [null,null,null,null,null,null,null,null];
(statearr_26158[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_26158[(1)] = (1));

return statearr_26158;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_26141){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26159){if((e26159 instanceof Object)){
var ex__25926__auto__ = e26159;
var statearr_26160_26178 = state_26141;
(statearr_26160_26178[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26179 = state_26141;
state_26141 = G__26179;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_26141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_26141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_26161 = f__26018__auto__.call(null);
(statearr_26161[(6)] = c__26017__auto___26163);

return statearr_26161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
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
var process = (function (p__26180){
var vec__26181 = p__26180;
var v = cljs.core.nth.call(null,vec__26181,(0),null);
var p = cljs.core.nth.call(null,vec__26181,(1),null);
var job = vec__26181;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26017__auto___26352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_26188){
var state_val_26189 = (state_26188[(1)]);
if((state_val_26189 === (1))){
var state_26188__$1 = state_26188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26188__$1,(2),res,v);
} else {
if((state_val_26189 === (2))){
var inst_26185 = (state_26188[(2)]);
var inst_26186 = cljs.core.async.close_BANG_.call(null,res);
var state_26188__$1 = (function (){var statearr_26190 = state_26188;
(statearr_26190[(7)] = inst_26185);

return statearr_26190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26188__$1,inst_26186);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0 = (function (){
var statearr_26191 = [null,null,null,null,null,null,null,null];
(statearr_26191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__);

(statearr_26191[(1)] = (1));

return statearr_26191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1 = (function (state_26188){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26192){if((e26192 instanceof Object)){
var ex__25926__auto__ = e26192;
var statearr_26193_26353 = state_26188;
(statearr_26193_26353[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26354 = state_26188;
state_26188 = G__26354;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__ = function(state_26188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1.call(this,state_26188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_26194 = f__26018__auto__.call(null);
(statearr_26194[(6)] = c__26017__auto___26352);

return statearr_26194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26195){
var vec__26196 = p__26195;
var v = cljs.core.nth.call(null,vec__26196,(0),null);
var p = cljs.core.nth.call(null,vec__26196,(1),null);
var job = vec__26196;
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
var n__4648__auto___26355 = n;
var __26356 = (0);
while(true){
if((__26356 < n__4648__auto___26355)){
var G__26199_26357 = type;
var G__26199_26358__$1 = (((G__26199_26357 instanceof cljs.core.Keyword))?G__26199_26357.fqn:null);
switch (G__26199_26358__$1) {
case "compute":
var c__26017__auto___26360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26356,c__26017__auto___26360,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async){
return (function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = ((function (__26356,c__26017__auto___26360,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async){
return (function (state_26212){
var state_val_26213 = (state_26212[(1)]);
if((state_val_26213 === (1))){
var state_26212__$1 = state_26212;
var statearr_26214_26361 = state_26212__$1;
(statearr_26214_26361[(2)] = null);

(statearr_26214_26361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (2))){
var state_26212__$1 = state_26212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26212__$1,(4),jobs);
} else {
if((state_val_26213 === (3))){
var inst_26210 = (state_26212[(2)]);
var state_26212__$1 = state_26212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26212__$1,inst_26210);
} else {
if((state_val_26213 === (4))){
var inst_26202 = (state_26212[(2)]);
var inst_26203 = process.call(null,inst_26202);
var state_26212__$1 = state_26212;
if(cljs.core.truth_(inst_26203)){
var statearr_26215_26362 = state_26212__$1;
(statearr_26215_26362[(1)] = (5));

} else {
var statearr_26216_26363 = state_26212__$1;
(statearr_26216_26363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (5))){
var state_26212__$1 = state_26212;
var statearr_26217_26364 = state_26212__$1;
(statearr_26217_26364[(2)] = null);

(statearr_26217_26364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (6))){
var state_26212__$1 = state_26212;
var statearr_26218_26365 = state_26212__$1;
(statearr_26218_26365[(2)] = null);

(statearr_26218_26365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (7))){
var inst_26208 = (state_26212[(2)]);
var state_26212__$1 = state_26212;
var statearr_26219_26366 = state_26212__$1;
(statearr_26219_26366[(2)] = inst_26208);

(statearr_26219_26366[(1)] = (3));


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
});})(__26356,c__26017__auto___26360,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async))
;
return ((function (__26356,switch__25922__auto__,c__26017__auto___26360,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0 = (function (){
var statearr_26220 = [null,null,null,null,null,null,null];
(statearr_26220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__);

(statearr_26220[(1)] = (1));

return statearr_26220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1 = (function (state_26212){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26221){if((e26221 instanceof Object)){
var ex__25926__auto__ = e26221;
var statearr_26222_26367 = state_26212;
(statearr_26222_26367[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26368 = state_26212;
state_26212 = G__26368;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__ = function(state_26212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1.call(this,state_26212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__;
})()
;})(__26356,switch__25922__auto__,c__26017__auto___26360,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async))
})();
var state__26019__auto__ = (function (){var statearr_26223 = f__26018__auto__.call(null);
(statearr_26223[(6)] = c__26017__auto___26360);

return statearr_26223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(__26356,c__26017__auto___26360,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async))
);


break;
case "async":
var c__26017__auto___26369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26356,c__26017__auto___26369,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async){
return (function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = ((function (__26356,c__26017__auto___26369,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async){
return (function (state_26236){
var state_val_26237 = (state_26236[(1)]);
if((state_val_26237 === (1))){
var state_26236__$1 = state_26236;
var statearr_26238_26370 = state_26236__$1;
(statearr_26238_26370[(2)] = null);

(statearr_26238_26370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (2))){
var state_26236__$1 = state_26236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26236__$1,(4),jobs);
} else {
if((state_val_26237 === (3))){
var inst_26234 = (state_26236[(2)]);
var state_26236__$1 = state_26236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26236__$1,inst_26234);
} else {
if((state_val_26237 === (4))){
var inst_26226 = (state_26236[(2)]);
var inst_26227 = async.call(null,inst_26226);
var state_26236__$1 = state_26236;
if(cljs.core.truth_(inst_26227)){
var statearr_26239_26371 = state_26236__$1;
(statearr_26239_26371[(1)] = (5));

} else {
var statearr_26240_26372 = state_26236__$1;
(statearr_26240_26372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (5))){
var state_26236__$1 = state_26236;
var statearr_26241_26373 = state_26236__$1;
(statearr_26241_26373[(2)] = null);

(statearr_26241_26373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (6))){
var state_26236__$1 = state_26236;
var statearr_26242_26374 = state_26236__$1;
(statearr_26242_26374[(2)] = null);

(statearr_26242_26374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (7))){
var inst_26232 = (state_26236[(2)]);
var state_26236__$1 = state_26236;
var statearr_26243_26375 = state_26236__$1;
(statearr_26243_26375[(2)] = inst_26232);

(statearr_26243_26375[(1)] = (3));


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
});})(__26356,c__26017__auto___26369,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async))
;
return ((function (__26356,switch__25922__auto__,c__26017__auto___26369,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0 = (function (){
var statearr_26244 = [null,null,null,null,null,null,null];
(statearr_26244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__);

(statearr_26244[(1)] = (1));

return statearr_26244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1 = (function (state_26236){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26245){if((e26245 instanceof Object)){
var ex__25926__auto__ = e26245;
var statearr_26246_26376 = state_26236;
(statearr_26246_26376[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26377 = state_26236;
state_26236 = G__26377;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__ = function(state_26236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1.call(this,state_26236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__;
})()
;})(__26356,switch__25922__auto__,c__26017__auto___26369,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async))
})();
var state__26019__auto__ = (function (){var statearr_26247 = f__26018__auto__.call(null);
(statearr_26247[(6)] = c__26017__auto___26369);

return statearr_26247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(__26356,c__26017__auto___26369,G__26199_26357,G__26199_26358__$1,n__4648__auto___26355,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26199_26358__$1)].join('')));

}

var G__26378 = (__26356 + (1));
__26356 = G__26378;
continue;
} else {
}
break;
}

var c__26017__auto___26379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_26269){
var state_val_26270 = (state_26269[(1)]);
if((state_val_26270 === (7))){
var inst_26265 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26271_26380 = state_26269__$1;
(statearr_26271_26380[(2)] = inst_26265);

(statearr_26271_26380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (1))){
var state_26269__$1 = state_26269;
var statearr_26272_26381 = state_26269__$1;
(statearr_26272_26381[(2)] = null);

(statearr_26272_26381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (4))){
var inst_26250 = (state_26269[(7)]);
var inst_26250__$1 = (state_26269[(2)]);
var inst_26251 = (inst_26250__$1 == null);
var state_26269__$1 = (function (){var statearr_26273 = state_26269;
(statearr_26273[(7)] = inst_26250__$1);

return statearr_26273;
})();
if(cljs.core.truth_(inst_26251)){
var statearr_26274_26382 = state_26269__$1;
(statearr_26274_26382[(1)] = (5));

} else {
var statearr_26275_26383 = state_26269__$1;
(statearr_26275_26383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (6))){
var inst_26250 = (state_26269[(7)]);
var inst_26255 = (state_26269[(8)]);
var inst_26255__$1 = cljs.core.async.chan.call(null,(1));
var inst_26256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26257 = [inst_26250,inst_26255__$1];
var inst_26258 = (new cljs.core.PersistentVector(null,2,(5),inst_26256,inst_26257,null));
var state_26269__$1 = (function (){var statearr_26276 = state_26269;
(statearr_26276[(8)] = inst_26255__$1);

return statearr_26276;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26269__$1,(8),jobs,inst_26258);
} else {
if((state_val_26270 === (3))){
var inst_26267 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26269__$1,inst_26267);
} else {
if((state_val_26270 === (2))){
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26269__$1,(4),from);
} else {
if((state_val_26270 === (9))){
var inst_26262 = (state_26269[(2)]);
var state_26269__$1 = (function (){var statearr_26277 = state_26269;
(statearr_26277[(9)] = inst_26262);

return statearr_26277;
})();
var statearr_26278_26384 = state_26269__$1;
(statearr_26278_26384[(2)] = null);

(statearr_26278_26384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (5))){
var inst_26253 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26269__$1 = state_26269;
var statearr_26279_26385 = state_26269__$1;
(statearr_26279_26385[(2)] = inst_26253);

(statearr_26279_26385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (8))){
var inst_26255 = (state_26269[(8)]);
var inst_26260 = (state_26269[(2)]);
var state_26269__$1 = (function (){var statearr_26280 = state_26269;
(statearr_26280[(10)] = inst_26260);

return statearr_26280;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26269__$1,(9),results,inst_26255);
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
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0 = (function (){
var statearr_26281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__);

(statearr_26281[(1)] = (1));

return statearr_26281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1 = (function (state_26269){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26282){if((e26282 instanceof Object)){
var ex__25926__auto__ = e26282;
var statearr_26283_26386 = state_26269;
(statearr_26283_26386[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26387 = state_26269;
state_26269 = G__26387;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__ = function(state_26269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1.call(this,state_26269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_26284 = f__26018__auto__.call(null);
(statearr_26284[(6)] = c__26017__auto___26379);

return statearr_26284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));


var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_26322){
var state_val_26323 = (state_26322[(1)]);
if((state_val_26323 === (7))){
var inst_26318 = (state_26322[(2)]);
var state_26322__$1 = state_26322;
var statearr_26324_26388 = state_26322__$1;
(statearr_26324_26388[(2)] = inst_26318);

(statearr_26324_26388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (20))){
var state_26322__$1 = state_26322;
var statearr_26325_26389 = state_26322__$1;
(statearr_26325_26389[(2)] = null);

(statearr_26325_26389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (1))){
var state_26322__$1 = state_26322;
var statearr_26326_26390 = state_26322__$1;
(statearr_26326_26390[(2)] = null);

(statearr_26326_26390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (4))){
var inst_26287 = (state_26322[(7)]);
var inst_26287__$1 = (state_26322[(2)]);
var inst_26288 = (inst_26287__$1 == null);
var state_26322__$1 = (function (){var statearr_26327 = state_26322;
(statearr_26327[(7)] = inst_26287__$1);

return statearr_26327;
})();
if(cljs.core.truth_(inst_26288)){
var statearr_26328_26391 = state_26322__$1;
(statearr_26328_26391[(1)] = (5));

} else {
var statearr_26329_26392 = state_26322__$1;
(statearr_26329_26392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (15))){
var inst_26300 = (state_26322[(8)]);
var state_26322__$1 = state_26322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26322__$1,(18),to,inst_26300);
} else {
if((state_val_26323 === (21))){
var inst_26313 = (state_26322[(2)]);
var state_26322__$1 = state_26322;
var statearr_26330_26393 = state_26322__$1;
(statearr_26330_26393[(2)] = inst_26313);

(statearr_26330_26393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (13))){
var inst_26315 = (state_26322[(2)]);
var state_26322__$1 = (function (){var statearr_26331 = state_26322;
(statearr_26331[(9)] = inst_26315);

return statearr_26331;
})();
var statearr_26332_26394 = state_26322__$1;
(statearr_26332_26394[(2)] = null);

(statearr_26332_26394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (6))){
var inst_26287 = (state_26322[(7)]);
var state_26322__$1 = state_26322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,(11),inst_26287);
} else {
if((state_val_26323 === (17))){
var inst_26308 = (state_26322[(2)]);
var state_26322__$1 = state_26322;
if(cljs.core.truth_(inst_26308)){
var statearr_26333_26395 = state_26322__$1;
(statearr_26333_26395[(1)] = (19));

} else {
var statearr_26334_26396 = state_26322__$1;
(statearr_26334_26396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (3))){
var inst_26320 = (state_26322[(2)]);
var state_26322__$1 = state_26322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26322__$1,inst_26320);
} else {
if((state_val_26323 === (12))){
var inst_26297 = (state_26322[(10)]);
var state_26322__$1 = state_26322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,(14),inst_26297);
} else {
if((state_val_26323 === (2))){
var state_26322__$1 = state_26322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,(4),results);
} else {
if((state_val_26323 === (19))){
var state_26322__$1 = state_26322;
var statearr_26335_26397 = state_26322__$1;
(statearr_26335_26397[(2)] = null);

(statearr_26335_26397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (11))){
var inst_26297 = (state_26322[(2)]);
var state_26322__$1 = (function (){var statearr_26336 = state_26322;
(statearr_26336[(10)] = inst_26297);

return statearr_26336;
})();
var statearr_26337_26398 = state_26322__$1;
(statearr_26337_26398[(2)] = null);

(statearr_26337_26398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (9))){
var state_26322__$1 = state_26322;
var statearr_26338_26399 = state_26322__$1;
(statearr_26338_26399[(2)] = null);

(statearr_26338_26399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (5))){
var state_26322__$1 = state_26322;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26339_26400 = state_26322__$1;
(statearr_26339_26400[(1)] = (8));

} else {
var statearr_26340_26401 = state_26322__$1;
(statearr_26340_26401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (14))){
var inst_26300 = (state_26322[(8)]);
var inst_26300__$1 = (state_26322[(2)]);
var inst_26301 = (inst_26300__$1 == null);
var inst_26302 = cljs.core.not.call(null,inst_26301);
var state_26322__$1 = (function (){var statearr_26341 = state_26322;
(statearr_26341[(8)] = inst_26300__$1);

return statearr_26341;
})();
if(inst_26302){
var statearr_26342_26402 = state_26322__$1;
(statearr_26342_26402[(1)] = (15));

} else {
var statearr_26343_26403 = state_26322__$1;
(statearr_26343_26403[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (16))){
var state_26322__$1 = state_26322;
var statearr_26344_26404 = state_26322__$1;
(statearr_26344_26404[(2)] = false);

(statearr_26344_26404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (10))){
var inst_26294 = (state_26322[(2)]);
var state_26322__$1 = state_26322;
var statearr_26345_26405 = state_26322__$1;
(statearr_26345_26405[(2)] = inst_26294);

(statearr_26345_26405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (18))){
var inst_26305 = (state_26322[(2)]);
var state_26322__$1 = state_26322;
var statearr_26346_26406 = state_26322__$1;
(statearr_26346_26406[(2)] = inst_26305);

(statearr_26346_26406[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (8))){
var inst_26291 = cljs.core.async.close_BANG_.call(null,to);
var state_26322__$1 = state_26322;
var statearr_26347_26407 = state_26322__$1;
(statearr_26347_26407[(2)] = inst_26291);

(statearr_26347_26407[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0 = (function (){
var statearr_26348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__);

(statearr_26348[(1)] = (1));

return statearr_26348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1 = (function (state_26322){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26349){if((e26349 instanceof Object)){
var ex__25926__auto__ = e26349;
var statearr_26350_26408 = state_26322;
(statearr_26350_26408[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26409 = state_26322;
state_26322 = G__26409;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__ = function(state_26322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1.call(this,state_26322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_26351 = f__26018__auto__.call(null);
(statearr_26351[(6)] = c__26017__auto__);

return statearr_26351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));

return c__26017__auto__;
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
var G__26411 = arguments.length;
switch (G__26411) {
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
var G__26414 = arguments.length;
switch (G__26414) {
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
var G__26417 = arguments.length;
switch (G__26417) {
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
var c__26017__auto___26466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_26443){
var state_val_26444 = (state_26443[(1)]);
if((state_val_26444 === (7))){
var inst_26439 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26445_26467 = state_26443__$1;
(statearr_26445_26467[(2)] = inst_26439);

(statearr_26445_26467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (1))){
var state_26443__$1 = state_26443;
var statearr_26446_26468 = state_26443__$1;
(statearr_26446_26468[(2)] = null);

(statearr_26446_26468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (4))){
var inst_26420 = (state_26443[(7)]);
var inst_26420__$1 = (state_26443[(2)]);
var inst_26421 = (inst_26420__$1 == null);
var state_26443__$1 = (function (){var statearr_26447 = state_26443;
(statearr_26447[(7)] = inst_26420__$1);

return statearr_26447;
})();
if(cljs.core.truth_(inst_26421)){
var statearr_26448_26469 = state_26443__$1;
(statearr_26448_26469[(1)] = (5));

} else {
var statearr_26449_26470 = state_26443__$1;
(statearr_26449_26470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (13))){
var state_26443__$1 = state_26443;
var statearr_26450_26471 = state_26443__$1;
(statearr_26450_26471[(2)] = null);

(statearr_26450_26471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (6))){
var inst_26420 = (state_26443[(7)]);
var inst_26426 = p.call(null,inst_26420);
var state_26443__$1 = state_26443;
if(cljs.core.truth_(inst_26426)){
var statearr_26451_26472 = state_26443__$1;
(statearr_26451_26472[(1)] = (9));

} else {
var statearr_26452_26473 = state_26443__$1;
(statearr_26452_26473[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (3))){
var inst_26441 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26443__$1,inst_26441);
} else {
if((state_val_26444 === (12))){
var state_26443__$1 = state_26443;
var statearr_26453_26474 = state_26443__$1;
(statearr_26453_26474[(2)] = null);

(statearr_26453_26474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (2))){
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26443__$1,(4),ch);
} else {
if((state_val_26444 === (11))){
var inst_26420 = (state_26443[(7)]);
var inst_26430 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26443__$1,(8),inst_26430,inst_26420);
} else {
if((state_val_26444 === (9))){
var state_26443__$1 = state_26443;
var statearr_26454_26475 = state_26443__$1;
(statearr_26454_26475[(2)] = tc);

(statearr_26454_26475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (5))){
var inst_26423 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26424 = cljs.core.async.close_BANG_.call(null,fc);
var state_26443__$1 = (function (){var statearr_26455 = state_26443;
(statearr_26455[(8)] = inst_26423);

return statearr_26455;
})();
var statearr_26456_26476 = state_26443__$1;
(statearr_26456_26476[(2)] = inst_26424);

(statearr_26456_26476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (14))){
var inst_26437 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26457_26477 = state_26443__$1;
(statearr_26457_26477[(2)] = inst_26437);

(statearr_26457_26477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (10))){
var state_26443__$1 = state_26443;
var statearr_26458_26478 = state_26443__$1;
(statearr_26458_26478[(2)] = fc);

(statearr_26458_26478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (8))){
var inst_26432 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
if(cljs.core.truth_(inst_26432)){
var statearr_26459_26479 = state_26443__$1;
(statearr_26459_26479[(1)] = (12));

} else {
var statearr_26460_26480 = state_26443__$1;
(statearr_26460_26480[(1)] = (13));

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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_26461 = [null,null,null,null,null,null,null,null,null];
(statearr_26461[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_26461[(1)] = (1));

return statearr_26461;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_26443){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26462){if((e26462 instanceof Object)){
var ex__25926__auto__ = e26462;
var statearr_26463_26481 = state_26443;
(statearr_26463_26481[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26482 = state_26443;
state_26443 = G__26482;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_26443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_26443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_26464 = f__26018__auto__.call(null);
(statearr_26464[(6)] = c__26017__auto___26466);

return statearr_26464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
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
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_26503){
var state_val_26504 = (state_26503[(1)]);
if((state_val_26504 === (7))){
var inst_26499 = (state_26503[(2)]);
var state_26503__$1 = state_26503;
var statearr_26505_26523 = state_26503__$1;
(statearr_26505_26523[(2)] = inst_26499);

(statearr_26505_26523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (1))){
var inst_26483 = init;
var state_26503__$1 = (function (){var statearr_26506 = state_26503;
(statearr_26506[(7)] = inst_26483);

return statearr_26506;
})();
var statearr_26507_26524 = state_26503__$1;
(statearr_26507_26524[(2)] = null);

(statearr_26507_26524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (4))){
var inst_26486 = (state_26503[(8)]);
var inst_26486__$1 = (state_26503[(2)]);
var inst_26487 = (inst_26486__$1 == null);
var state_26503__$1 = (function (){var statearr_26508 = state_26503;
(statearr_26508[(8)] = inst_26486__$1);

return statearr_26508;
})();
if(cljs.core.truth_(inst_26487)){
var statearr_26509_26525 = state_26503__$1;
(statearr_26509_26525[(1)] = (5));

} else {
var statearr_26510_26526 = state_26503__$1;
(statearr_26510_26526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (6))){
var inst_26483 = (state_26503[(7)]);
var inst_26490 = (state_26503[(9)]);
var inst_26486 = (state_26503[(8)]);
var inst_26490__$1 = f.call(null,inst_26483,inst_26486);
var inst_26491 = cljs.core.reduced_QMARK_.call(null,inst_26490__$1);
var state_26503__$1 = (function (){var statearr_26511 = state_26503;
(statearr_26511[(9)] = inst_26490__$1);

return statearr_26511;
})();
if(inst_26491){
var statearr_26512_26527 = state_26503__$1;
(statearr_26512_26527[(1)] = (8));

} else {
var statearr_26513_26528 = state_26503__$1;
(statearr_26513_26528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (3))){
var inst_26501 = (state_26503[(2)]);
var state_26503__$1 = state_26503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26503__$1,inst_26501);
} else {
if((state_val_26504 === (2))){
var state_26503__$1 = state_26503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26503__$1,(4),ch);
} else {
if((state_val_26504 === (9))){
var inst_26490 = (state_26503[(9)]);
var inst_26483 = inst_26490;
var state_26503__$1 = (function (){var statearr_26514 = state_26503;
(statearr_26514[(7)] = inst_26483);

return statearr_26514;
})();
var statearr_26515_26529 = state_26503__$1;
(statearr_26515_26529[(2)] = null);

(statearr_26515_26529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (5))){
var inst_26483 = (state_26503[(7)]);
var state_26503__$1 = state_26503;
var statearr_26516_26530 = state_26503__$1;
(statearr_26516_26530[(2)] = inst_26483);

(statearr_26516_26530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (10))){
var inst_26497 = (state_26503[(2)]);
var state_26503__$1 = state_26503;
var statearr_26517_26531 = state_26503__$1;
(statearr_26517_26531[(2)] = inst_26497);

(statearr_26517_26531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (8))){
var inst_26490 = (state_26503[(9)]);
var inst_26493 = cljs.core.deref.call(null,inst_26490);
var state_26503__$1 = state_26503;
var statearr_26518_26532 = state_26503__$1;
(statearr_26518_26532[(2)] = inst_26493);

(statearr_26518_26532[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__25923__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25923__auto____0 = (function (){
var statearr_26519 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26519[(0)] = cljs$core$async$reduce_$_state_machine__25923__auto__);

(statearr_26519[(1)] = (1));

return statearr_26519;
});
var cljs$core$async$reduce_$_state_machine__25923__auto____1 = (function (state_26503){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26520){if((e26520 instanceof Object)){
var ex__25926__auto__ = e26520;
var statearr_26521_26533 = state_26503;
(statearr_26521_26533[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26534 = state_26503;
state_26503 = G__26534;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25923__auto__ = function(state_26503){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25923__auto____1.call(this,state_26503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25923__auto____0;
cljs$core$async$reduce_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25923__auto____1;
return cljs$core$async$reduce_$_state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_26522 = f__26018__auto__.call(null);
(statearr_26522[(6)] = c__26017__auto__);

return statearr_26522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));

return c__26017__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_26540){
var state_val_26541 = (state_26540[(1)]);
if((state_val_26541 === (1))){
var inst_26535 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26540__$1 = state_26540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26540__$1,(2),inst_26535);
} else {
if((state_val_26541 === (2))){
var inst_26537 = (state_26540[(2)]);
var inst_26538 = f__$1.call(null,inst_26537);
var state_26540__$1 = state_26540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26540__$1,inst_26538);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__25923__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25923__auto____0 = (function (){
var statearr_26542 = [null,null,null,null,null,null,null];
(statearr_26542[(0)] = cljs$core$async$transduce_$_state_machine__25923__auto__);

(statearr_26542[(1)] = (1));

return statearr_26542;
});
var cljs$core$async$transduce_$_state_machine__25923__auto____1 = (function (state_26540){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26543){if((e26543 instanceof Object)){
var ex__25926__auto__ = e26543;
var statearr_26544_26546 = state_26540;
(statearr_26544_26546[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26547 = state_26540;
state_26540 = G__26547;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25923__auto__ = function(state_26540){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25923__auto____1.call(this,state_26540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25923__auto____0;
cljs$core$async$transduce_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25923__auto____1;
return cljs$core$async$transduce_$_state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_26545 = f__26018__auto__.call(null);
(statearr_26545[(6)] = c__26017__auto__);

return statearr_26545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));

return c__26017__auto__;
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
var G__26549 = arguments.length;
switch (G__26549) {
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
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_26574){
var state_val_26575 = (state_26574[(1)]);
if((state_val_26575 === (7))){
var inst_26556 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26576_26597 = state_26574__$1;
(statearr_26576_26597[(2)] = inst_26556);

(statearr_26576_26597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (1))){
var inst_26550 = cljs.core.seq.call(null,coll);
var inst_26551 = inst_26550;
var state_26574__$1 = (function (){var statearr_26577 = state_26574;
(statearr_26577[(7)] = inst_26551);

return statearr_26577;
})();
var statearr_26578_26598 = state_26574__$1;
(statearr_26578_26598[(2)] = null);

(statearr_26578_26598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (4))){
var inst_26551 = (state_26574[(7)]);
var inst_26554 = cljs.core.first.call(null,inst_26551);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26574__$1,(7),ch,inst_26554);
} else {
if((state_val_26575 === (13))){
var inst_26568 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26579_26599 = state_26574__$1;
(statearr_26579_26599[(2)] = inst_26568);

(statearr_26579_26599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (6))){
var inst_26559 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26559)){
var statearr_26580_26600 = state_26574__$1;
(statearr_26580_26600[(1)] = (8));

} else {
var statearr_26581_26601 = state_26574__$1;
(statearr_26581_26601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (3))){
var inst_26572 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26574__$1,inst_26572);
} else {
if((state_val_26575 === (12))){
var state_26574__$1 = state_26574;
var statearr_26582_26602 = state_26574__$1;
(statearr_26582_26602[(2)] = null);

(statearr_26582_26602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (2))){
var inst_26551 = (state_26574[(7)]);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26551)){
var statearr_26583_26603 = state_26574__$1;
(statearr_26583_26603[(1)] = (4));

} else {
var statearr_26584_26604 = state_26574__$1;
(statearr_26584_26604[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (11))){
var inst_26565 = cljs.core.async.close_BANG_.call(null,ch);
var state_26574__$1 = state_26574;
var statearr_26585_26605 = state_26574__$1;
(statearr_26585_26605[(2)] = inst_26565);

(statearr_26585_26605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (9))){
var state_26574__$1 = state_26574;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26586_26606 = state_26574__$1;
(statearr_26586_26606[(1)] = (11));

} else {
var statearr_26587_26607 = state_26574__$1;
(statearr_26587_26607[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (5))){
var inst_26551 = (state_26574[(7)]);
var state_26574__$1 = state_26574;
var statearr_26588_26608 = state_26574__$1;
(statearr_26588_26608[(2)] = inst_26551);

(statearr_26588_26608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (10))){
var inst_26570 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26589_26609 = state_26574__$1;
(statearr_26589_26609[(2)] = inst_26570);

(statearr_26589_26609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (8))){
var inst_26551 = (state_26574[(7)]);
var inst_26561 = cljs.core.next.call(null,inst_26551);
var inst_26551__$1 = inst_26561;
var state_26574__$1 = (function (){var statearr_26590 = state_26574;
(statearr_26590[(7)] = inst_26551__$1);

return statearr_26590;
})();
var statearr_26591_26610 = state_26574__$1;
(statearr_26591_26610[(2)] = null);

(statearr_26591_26610[(1)] = (2));


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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_26592 = [null,null,null,null,null,null,null,null];
(statearr_26592[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_26592[(1)] = (1));

return statearr_26592;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_26574){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26593){if((e26593 instanceof Object)){
var ex__25926__auto__ = e26593;
var statearr_26594_26611 = state_26574;
(statearr_26594_26611[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26612 = state_26574;
state_26574 = G__26612;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_26574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_26574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_26595 = f__26018__auto__.call(null);
(statearr_26595[(6)] = c__26017__auto__);

return statearr_26595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));

return c__26017__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_26613 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_26613.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_26614 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_26614.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_26615 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_26615.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_26616 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_26616.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26617 = (function (ch,cs,meta26618){
this.ch = ch;
this.cs = cs;
this.meta26618 = meta26618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26619,meta26618__$1){
var self__ = this;
var _26619__$1 = this;
return (new cljs.core.async.t_cljs$core$async26617(self__.ch,self__.cs,meta26618__$1));
}));

(cljs.core.async.t_cljs$core$async26617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26619){
var self__ = this;
var _26619__$1 = this;
return self__.meta26618;
}));

(cljs.core.async.t_cljs$core$async26617.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26617.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26617.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26617.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async26617.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async26617.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async26617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26618","meta26618",452239667,null)], null);
}));

(cljs.core.async.t_cljs$core$async26617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26617");

(cljs.core.async.t_cljs$core$async26617.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26617.
 */
cljs.core.async.__GT_t_cljs$core$async26617 = (function cljs$core$async$mult_$___GT_t_cljs$core$async26617(ch__$1,cs__$1,meta26618){
return (new cljs.core.async.t_cljs$core$async26617(ch__$1,cs__$1,meta26618));
});

}

return (new cljs.core.async.t_cljs$core$async26617(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26017__auto___26839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_26754){
var state_val_26755 = (state_26754[(1)]);
if((state_val_26755 === (7))){
var inst_26750 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26756_26840 = state_26754__$1;
(statearr_26756_26840[(2)] = inst_26750);

(statearr_26756_26840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (20))){
var inst_26653 = (state_26754[(7)]);
var inst_26665 = cljs.core.first.call(null,inst_26653);
var inst_26666 = cljs.core.nth.call(null,inst_26665,(0),null);
var inst_26667 = cljs.core.nth.call(null,inst_26665,(1),null);
var state_26754__$1 = (function (){var statearr_26757 = state_26754;
(statearr_26757[(8)] = inst_26666);

return statearr_26757;
})();
if(cljs.core.truth_(inst_26667)){
var statearr_26758_26841 = state_26754__$1;
(statearr_26758_26841[(1)] = (22));

} else {
var statearr_26759_26842 = state_26754__$1;
(statearr_26759_26842[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (27))){
var inst_26702 = (state_26754[(9)]);
var inst_26695 = (state_26754[(10)]);
var inst_26622 = (state_26754[(11)]);
var inst_26697 = (state_26754[(12)]);
var inst_26702__$1 = cljs.core._nth.call(null,inst_26695,inst_26697);
var inst_26703 = cljs.core.async.put_BANG_.call(null,inst_26702__$1,inst_26622,done);
var state_26754__$1 = (function (){var statearr_26760 = state_26754;
(statearr_26760[(9)] = inst_26702__$1);

return statearr_26760;
})();
if(cljs.core.truth_(inst_26703)){
var statearr_26761_26843 = state_26754__$1;
(statearr_26761_26843[(1)] = (30));

} else {
var statearr_26762_26844 = state_26754__$1;
(statearr_26762_26844[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (1))){
var state_26754__$1 = state_26754;
var statearr_26763_26845 = state_26754__$1;
(statearr_26763_26845[(2)] = null);

(statearr_26763_26845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (24))){
var inst_26653 = (state_26754[(7)]);
var inst_26672 = (state_26754[(2)]);
var inst_26673 = cljs.core.next.call(null,inst_26653);
var inst_26631 = inst_26673;
var inst_26632 = null;
var inst_26633 = (0);
var inst_26634 = (0);
var state_26754__$1 = (function (){var statearr_26764 = state_26754;
(statearr_26764[(13)] = inst_26633);

(statearr_26764[(14)] = inst_26632);

(statearr_26764[(15)] = inst_26634);

(statearr_26764[(16)] = inst_26631);

(statearr_26764[(17)] = inst_26672);

return statearr_26764;
})();
var statearr_26765_26846 = state_26754__$1;
(statearr_26765_26846[(2)] = null);

(statearr_26765_26846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (39))){
var state_26754__$1 = state_26754;
var statearr_26769_26847 = state_26754__$1;
(statearr_26769_26847[(2)] = null);

(statearr_26769_26847[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (4))){
var inst_26622 = (state_26754[(11)]);
var inst_26622__$1 = (state_26754[(2)]);
var inst_26623 = (inst_26622__$1 == null);
var state_26754__$1 = (function (){var statearr_26770 = state_26754;
(statearr_26770[(11)] = inst_26622__$1);

return statearr_26770;
})();
if(cljs.core.truth_(inst_26623)){
var statearr_26771_26848 = state_26754__$1;
(statearr_26771_26848[(1)] = (5));

} else {
var statearr_26772_26849 = state_26754__$1;
(statearr_26772_26849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (15))){
var inst_26633 = (state_26754[(13)]);
var inst_26632 = (state_26754[(14)]);
var inst_26634 = (state_26754[(15)]);
var inst_26631 = (state_26754[(16)]);
var inst_26649 = (state_26754[(2)]);
var inst_26650 = (inst_26634 + (1));
var tmp26766 = inst_26633;
var tmp26767 = inst_26632;
var tmp26768 = inst_26631;
var inst_26631__$1 = tmp26768;
var inst_26632__$1 = tmp26767;
var inst_26633__$1 = tmp26766;
var inst_26634__$1 = inst_26650;
var state_26754__$1 = (function (){var statearr_26773 = state_26754;
(statearr_26773[(13)] = inst_26633__$1);

(statearr_26773[(14)] = inst_26632__$1);

(statearr_26773[(15)] = inst_26634__$1);

(statearr_26773[(16)] = inst_26631__$1);

(statearr_26773[(18)] = inst_26649);

return statearr_26773;
})();
var statearr_26774_26850 = state_26754__$1;
(statearr_26774_26850[(2)] = null);

(statearr_26774_26850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (21))){
var inst_26676 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26778_26851 = state_26754__$1;
(statearr_26778_26851[(2)] = inst_26676);

(statearr_26778_26851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (31))){
var inst_26702 = (state_26754[(9)]);
var inst_26706 = done.call(null,null);
var inst_26707 = cljs.core.async.untap_STAR_.call(null,m,inst_26702);
var state_26754__$1 = (function (){var statearr_26779 = state_26754;
(statearr_26779[(19)] = inst_26706);

return statearr_26779;
})();
var statearr_26780_26852 = state_26754__$1;
(statearr_26780_26852[(2)] = inst_26707);

(statearr_26780_26852[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (32))){
var inst_26695 = (state_26754[(10)]);
var inst_26696 = (state_26754[(20)]);
var inst_26694 = (state_26754[(21)]);
var inst_26697 = (state_26754[(12)]);
var inst_26709 = (state_26754[(2)]);
var inst_26710 = (inst_26697 + (1));
var tmp26775 = inst_26695;
var tmp26776 = inst_26696;
var tmp26777 = inst_26694;
var inst_26694__$1 = tmp26777;
var inst_26695__$1 = tmp26775;
var inst_26696__$1 = tmp26776;
var inst_26697__$1 = inst_26710;
var state_26754__$1 = (function (){var statearr_26781 = state_26754;
(statearr_26781[(22)] = inst_26709);

(statearr_26781[(10)] = inst_26695__$1);

(statearr_26781[(20)] = inst_26696__$1);

(statearr_26781[(21)] = inst_26694__$1);

(statearr_26781[(12)] = inst_26697__$1);

return statearr_26781;
})();
var statearr_26782_26853 = state_26754__$1;
(statearr_26782_26853[(2)] = null);

(statearr_26782_26853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (40))){
var inst_26722 = (state_26754[(23)]);
var inst_26726 = done.call(null,null);
var inst_26727 = cljs.core.async.untap_STAR_.call(null,m,inst_26722);
var state_26754__$1 = (function (){var statearr_26783 = state_26754;
(statearr_26783[(24)] = inst_26726);

return statearr_26783;
})();
var statearr_26784_26854 = state_26754__$1;
(statearr_26784_26854[(2)] = inst_26727);

(statearr_26784_26854[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (33))){
var inst_26713 = (state_26754[(25)]);
var inst_26715 = cljs.core.chunked_seq_QMARK_.call(null,inst_26713);
var state_26754__$1 = state_26754;
if(inst_26715){
var statearr_26785_26855 = state_26754__$1;
(statearr_26785_26855[(1)] = (36));

} else {
var statearr_26786_26856 = state_26754__$1;
(statearr_26786_26856[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (13))){
var inst_26643 = (state_26754[(26)]);
var inst_26646 = cljs.core.async.close_BANG_.call(null,inst_26643);
var state_26754__$1 = state_26754;
var statearr_26787_26857 = state_26754__$1;
(statearr_26787_26857[(2)] = inst_26646);

(statearr_26787_26857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (22))){
var inst_26666 = (state_26754[(8)]);
var inst_26669 = cljs.core.async.close_BANG_.call(null,inst_26666);
var state_26754__$1 = state_26754;
var statearr_26788_26858 = state_26754__$1;
(statearr_26788_26858[(2)] = inst_26669);

(statearr_26788_26858[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (36))){
var inst_26713 = (state_26754[(25)]);
var inst_26717 = cljs.core.chunk_first.call(null,inst_26713);
var inst_26718 = cljs.core.chunk_rest.call(null,inst_26713);
var inst_26719 = cljs.core.count.call(null,inst_26717);
var inst_26694 = inst_26718;
var inst_26695 = inst_26717;
var inst_26696 = inst_26719;
var inst_26697 = (0);
var state_26754__$1 = (function (){var statearr_26789 = state_26754;
(statearr_26789[(10)] = inst_26695);

(statearr_26789[(20)] = inst_26696);

(statearr_26789[(21)] = inst_26694);

(statearr_26789[(12)] = inst_26697);

return statearr_26789;
})();
var statearr_26790_26859 = state_26754__$1;
(statearr_26790_26859[(2)] = null);

(statearr_26790_26859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (41))){
var inst_26713 = (state_26754[(25)]);
var inst_26729 = (state_26754[(2)]);
var inst_26730 = cljs.core.next.call(null,inst_26713);
var inst_26694 = inst_26730;
var inst_26695 = null;
var inst_26696 = (0);
var inst_26697 = (0);
var state_26754__$1 = (function (){var statearr_26791 = state_26754;
(statearr_26791[(10)] = inst_26695);

(statearr_26791[(27)] = inst_26729);

(statearr_26791[(20)] = inst_26696);

(statearr_26791[(21)] = inst_26694);

(statearr_26791[(12)] = inst_26697);

return statearr_26791;
})();
var statearr_26792_26860 = state_26754__$1;
(statearr_26792_26860[(2)] = null);

(statearr_26792_26860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (43))){
var state_26754__$1 = state_26754;
var statearr_26793_26861 = state_26754__$1;
(statearr_26793_26861[(2)] = null);

(statearr_26793_26861[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (29))){
var inst_26738 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26794_26862 = state_26754__$1;
(statearr_26794_26862[(2)] = inst_26738);

(statearr_26794_26862[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (44))){
var inst_26747 = (state_26754[(2)]);
var state_26754__$1 = (function (){var statearr_26795 = state_26754;
(statearr_26795[(28)] = inst_26747);

return statearr_26795;
})();
var statearr_26796_26863 = state_26754__$1;
(statearr_26796_26863[(2)] = null);

(statearr_26796_26863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (6))){
var inst_26686 = (state_26754[(29)]);
var inst_26685 = cljs.core.deref.call(null,cs);
var inst_26686__$1 = cljs.core.keys.call(null,inst_26685);
var inst_26687 = cljs.core.count.call(null,inst_26686__$1);
var inst_26688 = cljs.core.reset_BANG_.call(null,dctr,inst_26687);
var inst_26693 = cljs.core.seq.call(null,inst_26686__$1);
var inst_26694 = inst_26693;
var inst_26695 = null;
var inst_26696 = (0);
var inst_26697 = (0);
var state_26754__$1 = (function (){var statearr_26797 = state_26754;
(statearr_26797[(29)] = inst_26686__$1);

(statearr_26797[(10)] = inst_26695);

(statearr_26797[(20)] = inst_26696);

(statearr_26797[(21)] = inst_26694);

(statearr_26797[(12)] = inst_26697);

(statearr_26797[(30)] = inst_26688);

return statearr_26797;
})();
var statearr_26798_26864 = state_26754__$1;
(statearr_26798_26864[(2)] = null);

(statearr_26798_26864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (28))){
var inst_26713 = (state_26754[(25)]);
var inst_26694 = (state_26754[(21)]);
var inst_26713__$1 = cljs.core.seq.call(null,inst_26694);
var state_26754__$1 = (function (){var statearr_26799 = state_26754;
(statearr_26799[(25)] = inst_26713__$1);

return statearr_26799;
})();
if(inst_26713__$1){
var statearr_26800_26865 = state_26754__$1;
(statearr_26800_26865[(1)] = (33));

} else {
var statearr_26801_26866 = state_26754__$1;
(statearr_26801_26866[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (25))){
var inst_26696 = (state_26754[(20)]);
var inst_26697 = (state_26754[(12)]);
var inst_26699 = (inst_26697 < inst_26696);
var inst_26700 = inst_26699;
var state_26754__$1 = state_26754;
if(cljs.core.truth_(inst_26700)){
var statearr_26802_26867 = state_26754__$1;
(statearr_26802_26867[(1)] = (27));

} else {
var statearr_26803_26868 = state_26754__$1;
(statearr_26803_26868[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (34))){
var state_26754__$1 = state_26754;
var statearr_26804_26869 = state_26754__$1;
(statearr_26804_26869[(2)] = null);

(statearr_26804_26869[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (17))){
var state_26754__$1 = state_26754;
var statearr_26805_26870 = state_26754__$1;
(statearr_26805_26870[(2)] = null);

(statearr_26805_26870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (3))){
var inst_26752 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26754__$1,inst_26752);
} else {
if((state_val_26755 === (12))){
var inst_26681 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26806_26871 = state_26754__$1;
(statearr_26806_26871[(2)] = inst_26681);

(statearr_26806_26871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (2))){
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(4),ch);
} else {
if((state_val_26755 === (23))){
var state_26754__$1 = state_26754;
var statearr_26807_26872 = state_26754__$1;
(statearr_26807_26872[(2)] = null);

(statearr_26807_26872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (35))){
var inst_26736 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26808_26873 = state_26754__$1;
(statearr_26808_26873[(2)] = inst_26736);

(statearr_26808_26873[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (19))){
var inst_26653 = (state_26754[(7)]);
var inst_26657 = cljs.core.chunk_first.call(null,inst_26653);
var inst_26658 = cljs.core.chunk_rest.call(null,inst_26653);
var inst_26659 = cljs.core.count.call(null,inst_26657);
var inst_26631 = inst_26658;
var inst_26632 = inst_26657;
var inst_26633 = inst_26659;
var inst_26634 = (0);
var state_26754__$1 = (function (){var statearr_26809 = state_26754;
(statearr_26809[(13)] = inst_26633);

(statearr_26809[(14)] = inst_26632);

(statearr_26809[(15)] = inst_26634);

(statearr_26809[(16)] = inst_26631);

return statearr_26809;
})();
var statearr_26810_26874 = state_26754__$1;
(statearr_26810_26874[(2)] = null);

(statearr_26810_26874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (11))){
var inst_26653 = (state_26754[(7)]);
var inst_26631 = (state_26754[(16)]);
var inst_26653__$1 = cljs.core.seq.call(null,inst_26631);
var state_26754__$1 = (function (){var statearr_26811 = state_26754;
(statearr_26811[(7)] = inst_26653__$1);

return statearr_26811;
})();
if(inst_26653__$1){
var statearr_26812_26875 = state_26754__$1;
(statearr_26812_26875[(1)] = (16));

} else {
var statearr_26813_26876 = state_26754__$1;
(statearr_26813_26876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (9))){
var inst_26683 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26814_26877 = state_26754__$1;
(statearr_26814_26877[(2)] = inst_26683);

(statearr_26814_26877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (5))){
var inst_26629 = cljs.core.deref.call(null,cs);
var inst_26630 = cljs.core.seq.call(null,inst_26629);
var inst_26631 = inst_26630;
var inst_26632 = null;
var inst_26633 = (0);
var inst_26634 = (0);
var state_26754__$1 = (function (){var statearr_26815 = state_26754;
(statearr_26815[(13)] = inst_26633);

(statearr_26815[(14)] = inst_26632);

(statearr_26815[(15)] = inst_26634);

(statearr_26815[(16)] = inst_26631);

return statearr_26815;
})();
var statearr_26816_26878 = state_26754__$1;
(statearr_26816_26878[(2)] = null);

(statearr_26816_26878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (14))){
var state_26754__$1 = state_26754;
var statearr_26817_26879 = state_26754__$1;
(statearr_26817_26879[(2)] = null);

(statearr_26817_26879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (45))){
var inst_26744 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26818_26880 = state_26754__$1;
(statearr_26818_26880[(2)] = inst_26744);

(statearr_26818_26880[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (26))){
var inst_26686 = (state_26754[(29)]);
var inst_26740 = (state_26754[(2)]);
var inst_26741 = cljs.core.seq.call(null,inst_26686);
var state_26754__$1 = (function (){var statearr_26819 = state_26754;
(statearr_26819[(31)] = inst_26740);

return statearr_26819;
})();
if(inst_26741){
var statearr_26820_26881 = state_26754__$1;
(statearr_26820_26881[(1)] = (42));

} else {
var statearr_26821_26882 = state_26754__$1;
(statearr_26821_26882[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (16))){
var inst_26653 = (state_26754[(7)]);
var inst_26655 = cljs.core.chunked_seq_QMARK_.call(null,inst_26653);
var state_26754__$1 = state_26754;
if(inst_26655){
var statearr_26822_26883 = state_26754__$1;
(statearr_26822_26883[(1)] = (19));

} else {
var statearr_26823_26884 = state_26754__$1;
(statearr_26823_26884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (38))){
var inst_26733 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26824_26885 = state_26754__$1;
(statearr_26824_26885[(2)] = inst_26733);

(statearr_26824_26885[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (30))){
var state_26754__$1 = state_26754;
var statearr_26825_26886 = state_26754__$1;
(statearr_26825_26886[(2)] = null);

(statearr_26825_26886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (10))){
var inst_26632 = (state_26754[(14)]);
var inst_26634 = (state_26754[(15)]);
var inst_26642 = cljs.core._nth.call(null,inst_26632,inst_26634);
var inst_26643 = cljs.core.nth.call(null,inst_26642,(0),null);
var inst_26644 = cljs.core.nth.call(null,inst_26642,(1),null);
var state_26754__$1 = (function (){var statearr_26826 = state_26754;
(statearr_26826[(26)] = inst_26643);

return statearr_26826;
})();
if(cljs.core.truth_(inst_26644)){
var statearr_26827_26887 = state_26754__$1;
(statearr_26827_26887[(1)] = (13));

} else {
var statearr_26828_26888 = state_26754__$1;
(statearr_26828_26888[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (18))){
var inst_26679 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26829_26889 = state_26754__$1;
(statearr_26829_26889[(2)] = inst_26679);

(statearr_26829_26889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (42))){
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(45),dchan);
} else {
if((state_val_26755 === (37))){
var inst_26722 = (state_26754[(23)]);
var inst_26713 = (state_26754[(25)]);
var inst_26622 = (state_26754[(11)]);
var inst_26722__$1 = cljs.core.first.call(null,inst_26713);
var inst_26723 = cljs.core.async.put_BANG_.call(null,inst_26722__$1,inst_26622,done);
var state_26754__$1 = (function (){var statearr_26830 = state_26754;
(statearr_26830[(23)] = inst_26722__$1);

return statearr_26830;
})();
if(cljs.core.truth_(inst_26723)){
var statearr_26831_26890 = state_26754__$1;
(statearr_26831_26890[(1)] = (39));

} else {
var statearr_26832_26891 = state_26754__$1;
(statearr_26832_26891[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (8))){
var inst_26633 = (state_26754[(13)]);
var inst_26634 = (state_26754[(15)]);
var inst_26636 = (inst_26634 < inst_26633);
var inst_26637 = inst_26636;
var state_26754__$1 = state_26754;
if(cljs.core.truth_(inst_26637)){
var statearr_26833_26892 = state_26754__$1;
(statearr_26833_26892[(1)] = (10));

} else {
var statearr_26834_26893 = state_26754__$1;
(statearr_26834_26893[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__25923__auto__ = null;
var cljs$core$async$mult_$_state_machine__25923__auto____0 = (function (){
var statearr_26835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26835[(0)] = cljs$core$async$mult_$_state_machine__25923__auto__);

(statearr_26835[(1)] = (1));

return statearr_26835;
});
var cljs$core$async$mult_$_state_machine__25923__auto____1 = (function (state_26754){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e26836){if((e26836 instanceof Object)){
var ex__25926__auto__ = e26836;
var statearr_26837_26894 = state_26754;
(statearr_26837_26894[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26895 = state_26754;
state_26754 = G__26895;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25923__auto__ = function(state_26754){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25923__auto____1.call(this,state_26754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25923__auto____0;
cljs$core$async$mult_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25923__auto____1;
return cljs$core$async$mult_$_state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_26838 = f__26018__auto__.call(null);
(statearr_26838[(6)] = c__26017__auto___26839);

return statearr_26838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
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
var G__26897 = arguments.length;
switch (G__26897) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_26899 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_26899.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_26900 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_26900.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_26901 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_26901.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_26902 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_26902.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_26903 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_26903.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___26913 = arguments.length;
var i__4772__auto___26914 = (0);
while(true){
if((i__4772__auto___26914 < len__4771__auto___26913)){
args__4777__auto__.push((arguments[i__4772__auto___26914]));

var G__26915 = (i__4772__auto___26914 + (1));
i__4772__auto___26914 = G__26915;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26908){
var map__26909 = p__26908;
var map__26909__$1 = cljs.core.__destructure_map.call(null,map__26909);
var opts = map__26909__$1;
var statearr_26910_26916 = state;
(statearr_26910_26916[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_26911_26917 = state;
(statearr_26911_26917[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_26912_26918 = state;
(statearr_26912_26918[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26904){
var G__26905 = cljs.core.first.call(null,seq26904);
var seq26904__$1 = cljs.core.next.call(null,seq26904);
var G__26906 = cljs.core.first.call(null,seq26904__$1);
var seq26904__$2 = cljs.core.next.call(null,seq26904__$1);
var G__26907 = cljs.core.first.call(null,seq26904__$2);
var seq26904__$3 = cljs.core.next.call(null,seq26904__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26905,G__26906,G__26907,seq26904__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26919 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26920){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26920 = meta26920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26921,meta26920__$1){
var self__ = this;
var _26921__$1 = this;
return (new cljs.core.async.t_cljs$core$async26919(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26920__$1));
}));

(cljs.core.async.t_cljs$core$async26919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26921){
var self__ = this;
var _26921__$1 = this;
return self__.meta26920;
}));

(cljs.core.async.t_cljs$core$async26919.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async26919.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26919.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26919.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26919.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26919.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26919.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26920","meta26920",1764841823,null)], null);
}));

(cljs.core.async.t_cljs$core$async26919.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26919");

(cljs.core.async.t_cljs$core$async26919.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26919");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26919.
 */
cljs.core.async.__GT_t_cljs$core$async26919 = (function cljs$core$async$mix_$___GT_t_cljs$core$async26919(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26920){
return (new cljs.core.async.t_cljs$core$async26919(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26920));
});

}

return (new cljs.core.async.t_cljs$core$async26919(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26017__auto___27018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_26983){
var state_val_26984 = (state_26983[(1)]);
if((state_val_26984 === (7))){
var inst_26979 = (state_26983[(2)]);
var state_26983__$1 = state_26983;
var statearr_26985_27019 = state_26983__$1;
(statearr_26985_27019[(2)] = inst_26979);

(statearr_26985_27019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (20))){
var inst_26973 = (state_26983[(2)]);
var state_26983__$1 = state_26983;
var statearr_26986_27020 = state_26983__$1;
(statearr_26986_27020[(2)] = inst_26973);

(statearr_26986_27020[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (1))){
var inst_26925 = calc_state.call(null);
var inst_26926 = cljs.core.__destructure_map.call(null,inst_26925);
var inst_26927 = cljs.core.get.call(null,inst_26926,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26928 = cljs.core.get.call(null,inst_26926,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26929 = cljs.core.get.call(null,inst_26926,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26930 = inst_26925;
var state_26983__$1 = (function (){var statearr_26987 = state_26983;
(statearr_26987[(7)] = inst_26927);

(statearr_26987[(8)] = inst_26928);

(statearr_26987[(9)] = inst_26929);

(statearr_26987[(10)] = inst_26930);

return statearr_26987;
})();
var statearr_26988_27021 = state_26983__$1;
(statearr_26988_27021[(2)] = null);

(statearr_26988_27021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (4))){
var inst_26942 = (state_26983[(11)]);
var inst_26943 = (state_26983[(12)]);
var inst_26941 = (state_26983[(2)]);
var inst_26942__$1 = cljs.core.nth.call(null,inst_26941,(0),null);
var inst_26943__$1 = cljs.core.nth.call(null,inst_26941,(1),null);
var inst_26944 = (inst_26942__$1 == null);
var inst_26945 = cljs.core._EQ_.call(null,inst_26943__$1,change);
var inst_26946 = ((inst_26944) || (inst_26945));
var state_26983__$1 = (function (){var statearr_26989 = state_26983;
(statearr_26989[(11)] = inst_26942__$1);

(statearr_26989[(12)] = inst_26943__$1);

return statearr_26989;
})();
if(cljs.core.truth_(inst_26946)){
var statearr_26990_27022 = state_26983__$1;
(statearr_26990_27022[(1)] = (5));

} else {
var statearr_26991_27023 = state_26983__$1;
(statearr_26991_27023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (15))){
var inst_26933 = (state_26983[(13)]);
var inst_26930 = inst_26933;
var state_26983__$1 = (function (){var statearr_26992 = state_26983;
(statearr_26992[(10)] = inst_26930);

return statearr_26992;
})();
var statearr_26993_27024 = state_26983__$1;
(statearr_26993_27024[(2)] = null);

(statearr_26993_27024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (13))){
var inst_26965 = (state_26983[(2)]);
var state_26983__$1 = state_26983;
if(cljs.core.truth_(inst_26965)){
var statearr_26994_27025 = state_26983__$1;
(statearr_26994_27025[(1)] = (14));

} else {
var statearr_26995_27026 = state_26983__$1;
(statearr_26995_27026[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (6))){
var inst_26943 = (state_26983[(12)]);
var inst_26934 = (state_26983[(14)]);
var inst_26957 = (state_26983[(15)]);
var inst_26957__$1 = inst_26934.call(null,inst_26943);
var state_26983__$1 = (function (){var statearr_26996 = state_26983;
(statearr_26996[(15)] = inst_26957__$1);

return statearr_26996;
})();
if(cljs.core.truth_(inst_26957__$1)){
var statearr_26997_27027 = state_26983__$1;
(statearr_26997_27027[(1)] = (11));

} else {
var statearr_26998_27028 = state_26983__$1;
(statearr_26998_27028[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (17))){
var inst_26968 = (state_26983[(2)]);
var state_26983__$1 = state_26983;
if(cljs.core.truth_(inst_26968)){
var statearr_26999_27029 = state_26983__$1;
(statearr_26999_27029[(1)] = (18));

} else {
var statearr_27000_27030 = state_26983__$1;
(statearr_27000_27030[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (3))){
var inst_26981 = (state_26983[(2)]);
var state_26983__$1 = state_26983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26983__$1,inst_26981);
} else {
if((state_val_26984 === (12))){
var inst_26943 = (state_26983[(12)]);
var inst_26934 = (state_26983[(14)]);
var inst_26935 = (state_26983[(16)]);
var inst_26960 = cljs.core.empty_QMARK_.call(null,inst_26934);
var inst_26961 = inst_26935.call(null,inst_26943);
var inst_26962 = cljs.core.not.call(null,inst_26961);
var inst_26963 = ((inst_26960) && (inst_26962));
var state_26983__$1 = state_26983;
var statearr_27001_27031 = state_26983__$1;
(statearr_27001_27031[(2)] = inst_26963);

(statearr_27001_27031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (2))){
var inst_26933 = (state_26983[(13)]);
var inst_26930 = (state_26983[(10)]);
var inst_26933__$1 = cljs.core.__destructure_map.call(null,inst_26930);
var inst_26934 = cljs.core.get.call(null,inst_26933__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26935 = cljs.core.get.call(null,inst_26933__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26936 = cljs.core.get.call(null,inst_26933__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26983__$1 = (function (){var statearr_27002 = state_26983;
(statearr_27002[(14)] = inst_26934);

(statearr_27002[(13)] = inst_26933__$1);

(statearr_27002[(16)] = inst_26935);

return statearr_27002;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26983__$1,(4),inst_26936);
} else {
if((state_val_26984 === (19))){
var state_26983__$1 = state_26983;
var statearr_27003_27032 = state_26983__$1;
(statearr_27003_27032[(2)] = null);

(statearr_27003_27032[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (11))){
var inst_26957 = (state_26983[(15)]);
var state_26983__$1 = state_26983;
var statearr_27004_27033 = state_26983__$1;
(statearr_27004_27033[(2)] = inst_26957);

(statearr_27004_27033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (9))){
var state_26983__$1 = state_26983;
var statearr_27005_27034 = state_26983__$1;
(statearr_27005_27034[(2)] = null);

(statearr_27005_27034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (5))){
var inst_26942 = (state_26983[(11)]);
var inst_26948 = (inst_26942 == null);
var state_26983__$1 = state_26983;
if(cljs.core.truth_(inst_26948)){
var statearr_27006_27035 = state_26983__$1;
(statearr_27006_27035[(1)] = (8));

} else {
var statearr_27007_27036 = state_26983__$1;
(statearr_27007_27036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (14))){
var inst_26942 = (state_26983[(11)]);
var state_26983__$1 = state_26983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26983__$1,(17),out,inst_26942);
} else {
if((state_val_26984 === (16))){
var inst_26977 = (state_26983[(2)]);
var state_26983__$1 = state_26983;
var statearr_27008_27037 = state_26983__$1;
(statearr_27008_27037[(2)] = inst_26977);

(statearr_27008_27037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (10))){
var inst_26953 = (state_26983[(2)]);
var inst_26954 = calc_state.call(null);
var inst_26930 = inst_26954;
var state_26983__$1 = (function (){var statearr_27009 = state_26983;
(statearr_27009[(10)] = inst_26930);

(statearr_27009[(17)] = inst_26953);

return statearr_27009;
})();
var statearr_27010_27038 = state_26983__$1;
(statearr_27010_27038[(2)] = null);

(statearr_27010_27038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (18))){
var inst_26933 = (state_26983[(13)]);
var inst_26930 = inst_26933;
var state_26983__$1 = (function (){var statearr_27011 = state_26983;
(statearr_27011[(10)] = inst_26930);

return statearr_27011;
})();
var statearr_27012_27039 = state_26983__$1;
(statearr_27012_27039[(2)] = null);

(statearr_27012_27039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (8))){
var inst_26943 = (state_26983[(12)]);
var inst_26950 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26943);
var state_26983__$1 = state_26983;
var statearr_27013_27040 = state_26983__$1;
(statearr_27013_27040[(2)] = inst_26950);

(statearr_27013_27040[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__25923__auto__ = null;
var cljs$core$async$mix_$_state_machine__25923__auto____0 = (function (){
var statearr_27014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27014[(0)] = cljs$core$async$mix_$_state_machine__25923__auto__);

(statearr_27014[(1)] = (1));

return statearr_27014;
});
var cljs$core$async$mix_$_state_machine__25923__auto____1 = (function (state_26983){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_26983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e27015){if((e27015 instanceof Object)){
var ex__25926__auto__ = e27015;
var statearr_27016_27041 = state_26983;
(statearr_27016_27041[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27042 = state_26983;
state_26983 = G__27042;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25923__auto__ = function(state_26983){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25923__auto____1.call(this,state_26983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25923__auto____0;
cljs$core$async$mix_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25923__auto____1;
return cljs$core$async$mix_$_state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_27017 = f__26018__auto__.call(null);
(statearr_27017[(6)] = c__26017__auto___27018);

return statearr_27017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_27045 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_27045.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27046 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_27046.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27047 = (function() {
var G__27048 = null;
var G__27048__1 = (function (p){
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
var G__27048__2 = (function (p,v){
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
G__27048 = function(p,v){
switch(arguments.length){
case 1:
return G__27048__1.call(this,p);
case 2:
return G__27048__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27048.cljs$core$IFn$_invoke$arity$1 = G__27048__1;
G__27048.cljs$core$IFn$_invoke$arity$2 = G__27048__2;
return G__27048;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27044 = arguments.length;
switch (G__27044) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27047.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27047.call(null,p,v);
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
var G__27052 = arguments.length;
switch (G__27052) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27050_SHARP_){
if(cljs.core.truth_(p1__27050_SHARP_.call(null,topic))){
return p1__27050_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27050_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27053 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27054){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27054 = meta27054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27055,meta27054__$1){
var self__ = this;
var _27055__$1 = this;
return (new cljs.core.async.t_cljs$core$async27053(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27054__$1));
}));

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27055){
var self__ = this;
var _27055__$1 = this;
return self__.meta27054;
}));

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27054","meta27054",1366034725,null)], null);
}));

(cljs.core.async.t_cljs$core$async27053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27053");

(cljs.core.async.t_cljs$core$async27053.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27053.
 */
cljs.core.async.__GT_t_cljs$core$async27053 = (function cljs$core$async$__GT_t_cljs$core$async27053(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27054){
return (new cljs.core.async.t_cljs$core$async27053(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27054));
});

}

return (new cljs.core.async.t_cljs$core$async27053(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26017__auto___27173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_27127){
var state_val_27128 = (state_27127[(1)]);
if((state_val_27128 === (7))){
var inst_27123 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27129_27174 = state_27127__$1;
(statearr_27129_27174[(2)] = inst_27123);

(statearr_27129_27174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (20))){
var state_27127__$1 = state_27127;
var statearr_27130_27175 = state_27127__$1;
(statearr_27130_27175[(2)] = null);

(statearr_27130_27175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (1))){
var state_27127__$1 = state_27127;
var statearr_27131_27176 = state_27127__$1;
(statearr_27131_27176[(2)] = null);

(statearr_27131_27176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (24))){
var inst_27106 = (state_27127[(7)]);
var inst_27115 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27106);
var state_27127__$1 = state_27127;
var statearr_27132_27177 = state_27127__$1;
(statearr_27132_27177[(2)] = inst_27115);

(statearr_27132_27177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (4))){
var inst_27058 = (state_27127[(8)]);
var inst_27058__$1 = (state_27127[(2)]);
var inst_27059 = (inst_27058__$1 == null);
var state_27127__$1 = (function (){var statearr_27133 = state_27127;
(statearr_27133[(8)] = inst_27058__$1);

return statearr_27133;
})();
if(cljs.core.truth_(inst_27059)){
var statearr_27134_27178 = state_27127__$1;
(statearr_27134_27178[(1)] = (5));

} else {
var statearr_27135_27179 = state_27127__$1;
(statearr_27135_27179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (15))){
var inst_27100 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27136_27180 = state_27127__$1;
(statearr_27136_27180[(2)] = inst_27100);

(statearr_27136_27180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (21))){
var inst_27120 = (state_27127[(2)]);
var state_27127__$1 = (function (){var statearr_27137 = state_27127;
(statearr_27137[(9)] = inst_27120);

return statearr_27137;
})();
var statearr_27138_27181 = state_27127__$1;
(statearr_27138_27181[(2)] = null);

(statearr_27138_27181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (13))){
var inst_27082 = (state_27127[(10)]);
var inst_27084 = cljs.core.chunked_seq_QMARK_.call(null,inst_27082);
var state_27127__$1 = state_27127;
if(inst_27084){
var statearr_27139_27182 = state_27127__$1;
(statearr_27139_27182[(1)] = (16));

} else {
var statearr_27140_27183 = state_27127__$1;
(statearr_27140_27183[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (22))){
var inst_27112 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
if(cljs.core.truth_(inst_27112)){
var statearr_27141_27184 = state_27127__$1;
(statearr_27141_27184[(1)] = (23));

} else {
var statearr_27142_27185 = state_27127__$1;
(statearr_27142_27185[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (6))){
var inst_27108 = (state_27127[(11)]);
var inst_27058 = (state_27127[(8)]);
var inst_27106 = (state_27127[(7)]);
var inst_27106__$1 = topic_fn.call(null,inst_27058);
var inst_27107 = cljs.core.deref.call(null,mults);
var inst_27108__$1 = cljs.core.get.call(null,inst_27107,inst_27106__$1);
var state_27127__$1 = (function (){var statearr_27143 = state_27127;
(statearr_27143[(11)] = inst_27108__$1);

(statearr_27143[(7)] = inst_27106__$1);

return statearr_27143;
})();
if(cljs.core.truth_(inst_27108__$1)){
var statearr_27144_27186 = state_27127__$1;
(statearr_27144_27186[(1)] = (19));

} else {
var statearr_27145_27187 = state_27127__$1;
(statearr_27145_27187[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (25))){
var inst_27117 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27146_27188 = state_27127__$1;
(statearr_27146_27188[(2)] = inst_27117);

(statearr_27146_27188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (17))){
var inst_27082 = (state_27127[(10)]);
var inst_27091 = cljs.core.first.call(null,inst_27082);
var inst_27092 = cljs.core.async.muxch_STAR_.call(null,inst_27091);
var inst_27093 = cljs.core.async.close_BANG_.call(null,inst_27092);
var inst_27094 = cljs.core.next.call(null,inst_27082);
var inst_27068 = inst_27094;
var inst_27069 = null;
var inst_27070 = (0);
var inst_27071 = (0);
var state_27127__$1 = (function (){var statearr_27147 = state_27127;
(statearr_27147[(12)] = inst_27068);

(statearr_27147[(13)] = inst_27071);

(statearr_27147[(14)] = inst_27070);

(statearr_27147[(15)] = inst_27069);

(statearr_27147[(16)] = inst_27093);

return statearr_27147;
})();
var statearr_27148_27189 = state_27127__$1;
(statearr_27148_27189[(2)] = null);

(statearr_27148_27189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (3))){
var inst_27125 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27127__$1,inst_27125);
} else {
if((state_val_27128 === (12))){
var inst_27102 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27149_27190 = state_27127__$1;
(statearr_27149_27190[(2)] = inst_27102);

(statearr_27149_27190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (2))){
var state_27127__$1 = state_27127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27127__$1,(4),ch);
} else {
if((state_val_27128 === (23))){
var state_27127__$1 = state_27127;
var statearr_27150_27191 = state_27127__$1;
(statearr_27150_27191[(2)] = null);

(statearr_27150_27191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (19))){
var inst_27108 = (state_27127[(11)]);
var inst_27058 = (state_27127[(8)]);
var inst_27110 = cljs.core.async.muxch_STAR_.call(null,inst_27108);
var state_27127__$1 = state_27127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27127__$1,(22),inst_27110,inst_27058);
} else {
if((state_val_27128 === (11))){
var inst_27082 = (state_27127[(10)]);
var inst_27068 = (state_27127[(12)]);
var inst_27082__$1 = cljs.core.seq.call(null,inst_27068);
var state_27127__$1 = (function (){var statearr_27151 = state_27127;
(statearr_27151[(10)] = inst_27082__$1);

return statearr_27151;
})();
if(inst_27082__$1){
var statearr_27152_27192 = state_27127__$1;
(statearr_27152_27192[(1)] = (13));

} else {
var statearr_27153_27193 = state_27127__$1;
(statearr_27153_27193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (9))){
var inst_27104 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27154_27194 = state_27127__$1;
(statearr_27154_27194[(2)] = inst_27104);

(statearr_27154_27194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (5))){
var inst_27065 = cljs.core.deref.call(null,mults);
var inst_27066 = cljs.core.vals.call(null,inst_27065);
var inst_27067 = cljs.core.seq.call(null,inst_27066);
var inst_27068 = inst_27067;
var inst_27069 = null;
var inst_27070 = (0);
var inst_27071 = (0);
var state_27127__$1 = (function (){var statearr_27155 = state_27127;
(statearr_27155[(12)] = inst_27068);

(statearr_27155[(13)] = inst_27071);

(statearr_27155[(14)] = inst_27070);

(statearr_27155[(15)] = inst_27069);

return statearr_27155;
})();
var statearr_27156_27195 = state_27127__$1;
(statearr_27156_27195[(2)] = null);

(statearr_27156_27195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (14))){
var state_27127__$1 = state_27127;
var statearr_27160_27196 = state_27127__$1;
(statearr_27160_27196[(2)] = null);

(statearr_27160_27196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (16))){
var inst_27082 = (state_27127[(10)]);
var inst_27086 = cljs.core.chunk_first.call(null,inst_27082);
var inst_27087 = cljs.core.chunk_rest.call(null,inst_27082);
var inst_27088 = cljs.core.count.call(null,inst_27086);
var inst_27068 = inst_27087;
var inst_27069 = inst_27086;
var inst_27070 = inst_27088;
var inst_27071 = (0);
var state_27127__$1 = (function (){var statearr_27161 = state_27127;
(statearr_27161[(12)] = inst_27068);

(statearr_27161[(13)] = inst_27071);

(statearr_27161[(14)] = inst_27070);

(statearr_27161[(15)] = inst_27069);

return statearr_27161;
})();
var statearr_27162_27197 = state_27127__$1;
(statearr_27162_27197[(2)] = null);

(statearr_27162_27197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (10))){
var inst_27068 = (state_27127[(12)]);
var inst_27071 = (state_27127[(13)]);
var inst_27070 = (state_27127[(14)]);
var inst_27069 = (state_27127[(15)]);
var inst_27076 = cljs.core._nth.call(null,inst_27069,inst_27071);
var inst_27077 = cljs.core.async.muxch_STAR_.call(null,inst_27076);
var inst_27078 = cljs.core.async.close_BANG_.call(null,inst_27077);
var inst_27079 = (inst_27071 + (1));
var tmp27157 = inst_27068;
var tmp27158 = inst_27070;
var tmp27159 = inst_27069;
var inst_27068__$1 = tmp27157;
var inst_27069__$1 = tmp27159;
var inst_27070__$1 = tmp27158;
var inst_27071__$1 = inst_27079;
var state_27127__$1 = (function (){var statearr_27163 = state_27127;
(statearr_27163[(12)] = inst_27068__$1);

(statearr_27163[(13)] = inst_27071__$1);

(statearr_27163[(14)] = inst_27070__$1);

(statearr_27163[(15)] = inst_27069__$1);

(statearr_27163[(17)] = inst_27078);

return statearr_27163;
})();
var statearr_27164_27198 = state_27127__$1;
(statearr_27164_27198[(2)] = null);

(statearr_27164_27198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (18))){
var inst_27097 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27165_27199 = state_27127__$1;
(statearr_27165_27199[(2)] = inst_27097);

(statearr_27165_27199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (8))){
var inst_27071 = (state_27127[(13)]);
var inst_27070 = (state_27127[(14)]);
var inst_27073 = (inst_27071 < inst_27070);
var inst_27074 = inst_27073;
var state_27127__$1 = state_27127;
if(cljs.core.truth_(inst_27074)){
var statearr_27166_27200 = state_27127__$1;
(statearr_27166_27200[(1)] = (10));

} else {
var statearr_27167_27201 = state_27127__$1;
(statearr_27167_27201[(1)] = (11));

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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_27168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27168[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_27168[(1)] = (1));

return statearr_27168;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_27127){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_27127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e27169){if((e27169 instanceof Object)){
var ex__25926__auto__ = e27169;
var statearr_27170_27202 = state_27127;
(statearr_27170_27202[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27203 = state_27127;
state_27127 = G__27203;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_27127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_27127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_27171 = f__26018__auto__.call(null);
(statearr_27171[(6)] = c__26017__auto___27173);

return statearr_27171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
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
var G__27205 = arguments.length;
switch (G__27205) {
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
var G__27208 = arguments.length;
switch (G__27208) {
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
var G__27211 = arguments.length;
switch (G__27211) {
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
var c__26017__auto___27278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_27250){
var state_val_27251 = (state_27250[(1)]);
if((state_val_27251 === (7))){
var state_27250__$1 = state_27250;
var statearr_27252_27279 = state_27250__$1;
(statearr_27252_27279[(2)] = null);

(statearr_27252_27279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (1))){
var state_27250__$1 = state_27250;
var statearr_27253_27280 = state_27250__$1;
(statearr_27253_27280[(2)] = null);

(statearr_27253_27280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (4))){
var inst_27214 = (state_27250[(7)]);
var inst_27216 = (inst_27214 < cnt);
var state_27250__$1 = state_27250;
if(cljs.core.truth_(inst_27216)){
var statearr_27254_27281 = state_27250__$1;
(statearr_27254_27281[(1)] = (6));

} else {
var statearr_27255_27282 = state_27250__$1;
(statearr_27255_27282[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (15))){
var inst_27246 = (state_27250[(2)]);
var state_27250__$1 = state_27250;
var statearr_27256_27283 = state_27250__$1;
(statearr_27256_27283[(2)] = inst_27246);

(statearr_27256_27283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (13))){
var inst_27239 = cljs.core.async.close_BANG_.call(null,out);
var state_27250__$1 = state_27250;
var statearr_27257_27284 = state_27250__$1;
(statearr_27257_27284[(2)] = inst_27239);

(statearr_27257_27284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (6))){
var state_27250__$1 = state_27250;
var statearr_27258_27285 = state_27250__$1;
(statearr_27258_27285[(2)] = null);

(statearr_27258_27285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (3))){
var inst_27248 = (state_27250[(2)]);
var state_27250__$1 = state_27250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27250__$1,inst_27248);
} else {
if((state_val_27251 === (12))){
var inst_27236 = (state_27250[(8)]);
var inst_27236__$1 = (state_27250[(2)]);
var inst_27237 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27236__$1);
var state_27250__$1 = (function (){var statearr_27259 = state_27250;
(statearr_27259[(8)] = inst_27236__$1);

return statearr_27259;
})();
if(cljs.core.truth_(inst_27237)){
var statearr_27260_27286 = state_27250__$1;
(statearr_27260_27286[(1)] = (13));

} else {
var statearr_27261_27287 = state_27250__$1;
(statearr_27261_27287[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (2))){
var inst_27213 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27214 = (0);
var state_27250__$1 = (function (){var statearr_27262 = state_27250;
(statearr_27262[(9)] = inst_27213);

(statearr_27262[(7)] = inst_27214);

return statearr_27262;
})();
var statearr_27263_27288 = state_27250__$1;
(statearr_27263_27288[(2)] = null);

(statearr_27263_27288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (11))){
var inst_27214 = (state_27250[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27250,(10),Object,null,(9));
var inst_27223 = chs__$1.call(null,inst_27214);
var inst_27224 = done.call(null,inst_27214);
var inst_27225 = cljs.core.async.take_BANG_.call(null,inst_27223,inst_27224);
var state_27250__$1 = state_27250;
var statearr_27264_27289 = state_27250__$1;
(statearr_27264_27289[(2)] = inst_27225);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27250__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (9))){
var inst_27214 = (state_27250[(7)]);
var inst_27227 = (state_27250[(2)]);
var inst_27228 = (inst_27214 + (1));
var inst_27214__$1 = inst_27228;
var state_27250__$1 = (function (){var statearr_27265 = state_27250;
(statearr_27265[(10)] = inst_27227);

(statearr_27265[(7)] = inst_27214__$1);

return statearr_27265;
})();
var statearr_27266_27290 = state_27250__$1;
(statearr_27266_27290[(2)] = null);

(statearr_27266_27290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (5))){
var inst_27234 = (state_27250[(2)]);
var state_27250__$1 = (function (){var statearr_27267 = state_27250;
(statearr_27267[(11)] = inst_27234);

return statearr_27267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27250__$1,(12),dchan);
} else {
if((state_val_27251 === (14))){
var inst_27236 = (state_27250[(8)]);
var inst_27241 = cljs.core.apply.call(null,f,inst_27236);
var state_27250__$1 = state_27250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27250__$1,(16),out,inst_27241);
} else {
if((state_val_27251 === (16))){
var inst_27243 = (state_27250[(2)]);
var state_27250__$1 = (function (){var statearr_27268 = state_27250;
(statearr_27268[(12)] = inst_27243);

return statearr_27268;
})();
var statearr_27269_27291 = state_27250__$1;
(statearr_27269_27291[(2)] = null);

(statearr_27269_27291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (10))){
var inst_27218 = (state_27250[(2)]);
var inst_27219 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27250__$1 = (function (){var statearr_27270 = state_27250;
(statearr_27270[(13)] = inst_27218);

return statearr_27270;
})();
var statearr_27271_27292 = state_27250__$1;
(statearr_27271_27292[(2)] = inst_27219);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27250__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (8))){
var inst_27232 = (state_27250[(2)]);
var state_27250__$1 = state_27250;
var statearr_27272_27293 = state_27250__$1;
(statearr_27272_27293[(2)] = inst_27232);

(statearr_27272_27293[(1)] = (5));


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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_27273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27273[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_27273[(1)] = (1));

return statearr_27273;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_27250){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_27250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e27274){if((e27274 instanceof Object)){
var ex__25926__auto__ = e27274;
var statearr_27275_27294 = state_27250;
(statearr_27275_27294[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27295 = state_27250;
state_27250 = G__27295;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_27250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_27250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_27276 = f__26018__auto__.call(null);
(statearr_27276[(6)] = c__26017__auto___27278);

return statearr_27276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
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
var G__27298 = arguments.length;
switch (G__27298) {
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
var c__26017__auto___27352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_27330){
var state_val_27331 = (state_27330[(1)]);
if((state_val_27331 === (7))){
var inst_27309 = (state_27330[(7)]);
var inst_27310 = (state_27330[(8)]);
var inst_27309__$1 = (state_27330[(2)]);
var inst_27310__$1 = cljs.core.nth.call(null,inst_27309__$1,(0),null);
var inst_27311 = cljs.core.nth.call(null,inst_27309__$1,(1),null);
var inst_27312 = (inst_27310__$1 == null);
var state_27330__$1 = (function (){var statearr_27332 = state_27330;
(statearr_27332[(9)] = inst_27311);

(statearr_27332[(7)] = inst_27309__$1);

(statearr_27332[(8)] = inst_27310__$1);

return statearr_27332;
})();
if(cljs.core.truth_(inst_27312)){
var statearr_27333_27353 = state_27330__$1;
(statearr_27333_27353[(1)] = (8));

} else {
var statearr_27334_27354 = state_27330__$1;
(statearr_27334_27354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (1))){
var inst_27299 = cljs.core.vec.call(null,chs);
var inst_27300 = inst_27299;
var state_27330__$1 = (function (){var statearr_27335 = state_27330;
(statearr_27335[(10)] = inst_27300);

return statearr_27335;
})();
var statearr_27336_27355 = state_27330__$1;
(statearr_27336_27355[(2)] = null);

(statearr_27336_27355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (4))){
var inst_27300 = (state_27330[(10)]);
var state_27330__$1 = state_27330;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27330__$1,(7),inst_27300);
} else {
if((state_val_27331 === (6))){
var inst_27326 = (state_27330[(2)]);
var state_27330__$1 = state_27330;
var statearr_27337_27356 = state_27330__$1;
(statearr_27337_27356[(2)] = inst_27326);

(statearr_27337_27356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (3))){
var inst_27328 = (state_27330[(2)]);
var state_27330__$1 = state_27330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27330__$1,inst_27328);
} else {
if((state_val_27331 === (2))){
var inst_27300 = (state_27330[(10)]);
var inst_27302 = cljs.core.count.call(null,inst_27300);
var inst_27303 = (inst_27302 > (0));
var state_27330__$1 = state_27330;
if(cljs.core.truth_(inst_27303)){
var statearr_27339_27357 = state_27330__$1;
(statearr_27339_27357[(1)] = (4));

} else {
var statearr_27340_27358 = state_27330__$1;
(statearr_27340_27358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (11))){
var inst_27300 = (state_27330[(10)]);
var inst_27319 = (state_27330[(2)]);
var tmp27338 = inst_27300;
var inst_27300__$1 = tmp27338;
var state_27330__$1 = (function (){var statearr_27341 = state_27330;
(statearr_27341[(10)] = inst_27300__$1);

(statearr_27341[(11)] = inst_27319);

return statearr_27341;
})();
var statearr_27342_27359 = state_27330__$1;
(statearr_27342_27359[(2)] = null);

(statearr_27342_27359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (9))){
var inst_27310 = (state_27330[(8)]);
var state_27330__$1 = state_27330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27330__$1,(11),out,inst_27310);
} else {
if((state_val_27331 === (5))){
var inst_27324 = cljs.core.async.close_BANG_.call(null,out);
var state_27330__$1 = state_27330;
var statearr_27343_27360 = state_27330__$1;
(statearr_27343_27360[(2)] = inst_27324);

(statearr_27343_27360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (10))){
var inst_27322 = (state_27330[(2)]);
var state_27330__$1 = state_27330;
var statearr_27344_27361 = state_27330__$1;
(statearr_27344_27361[(2)] = inst_27322);

(statearr_27344_27361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (8))){
var inst_27311 = (state_27330[(9)]);
var inst_27300 = (state_27330[(10)]);
var inst_27309 = (state_27330[(7)]);
var inst_27310 = (state_27330[(8)]);
var inst_27314 = (function (){var cs = inst_27300;
var vec__27305 = inst_27309;
var v = inst_27310;
var c = inst_27311;
return (function (p1__27296_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27296_SHARP_);
});
})();
var inst_27315 = cljs.core.filterv.call(null,inst_27314,inst_27300);
var inst_27300__$1 = inst_27315;
var state_27330__$1 = (function (){var statearr_27345 = state_27330;
(statearr_27345[(10)] = inst_27300__$1);

return statearr_27345;
})();
var statearr_27346_27362 = state_27330__$1;
(statearr_27346_27362[(2)] = null);

(statearr_27346_27362[(1)] = (2));


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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_27347 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27347[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_27347[(1)] = (1));

return statearr_27347;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_27330){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_27330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e27348){if((e27348 instanceof Object)){
var ex__25926__auto__ = e27348;
var statearr_27349_27363 = state_27330;
(statearr_27349_27363[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27364 = state_27330;
state_27330 = G__27364;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_27330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_27330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_27350 = f__26018__auto__.call(null);
(statearr_27350[(6)] = c__26017__auto___27352);

return statearr_27350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
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
var G__27366 = arguments.length;
switch (G__27366) {
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
var c__26017__auto___27411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_27390){
var state_val_27391 = (state_27390[(1)]);
if((state_val_27391 === (7))){
var inst_27372 = (state_27390[(7)]);
var inst_27372__$1 = (state_27390[(2)]);
var inst_27373 = (inst_27372__$1 == null);
var inst_27374 = cljs.core.not.call(null,inst_27373);
var state_27390__$1 = (function (){var statearr_27392 = state_27390;
(statearr_27392[(7)] = inst_27372__$1);

return statearr_27392;
})();
if(inst_27374){
var statearr_27393_27412 = state_27390__$1;
(statearr_27393_27412[(1)] = (8));

} else {
var statearr_27394_27413 = state_27390__$1;
(statearr_27394_27413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (1))){
var inst_27367 = (0);
var state_27390__$1 = (function (){var statearr_27395 = state_27390;
(statearr_27395[(8)] = inst_27367);

return statearr_27395;
})();
var statearr_27396_27414 = state_27390__$1;
(statearr_27396_27414[(2)] = null);

(statearr_27396_27414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (4))){
var state_27390__$1 = state_27390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27390__$1,(7),ch);
} else {
if((state_val_27391 === (6))){
var inst_27385 = (state_27390[(2)]);
var state_27390__$1 = state_27390;
var statearr_27397_27415 = state_27390__$1;
(statearr_27397_27415[(2)] = inst_27385);

(statearr_27397_27415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (3))){
var inst_27387 = (state_27390[(2)]);
var inst_27388 = cljs.core.async.close_BANG_.call(null,out);
var state_27390__$1 = (function (){var statearr_27398 = state_27390;
(statearr_27398[(9)] = inst_27387);

return statearr_27398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27390__$1,inst_27388);
} else {
if((state_val_27391 === (2))){
var inst_27367 = (state_27390[(8)]);
var inst_27369 = (inst_27367 < n);
var state_27390__$1 = state_27390;
if(cljs.core.truth_(inst_27369)){
var statearr_27399_27416 = state_27390__$1;
(statearr_27399_27416[(1)] = (4));

} else {
var statearr_27400_27417 = state_27390__$1;
(statearr_27400_27417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (11))){
var inst_27367 = (state_27390[(8)]);
var inst_27377 = (state_27390[(2)]);
var inst_27378 = (inst_27367 + (1));
var inst_27367__$1 = inst_27378;
var state_27390__$1 = (function (){var statearr_27401 = state_27390;
(statearr_27401[(8)] = inst_27367__$1);

(statearr_27401[(10)] = inst_27377);

return statearr_27401;
})();
var statearr_27402_27418 = state_27390__$1;
(statearr_27402_27418[(2)] = null);

(statearr_27402_27418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (9))){
var state_27390__$1 = state_27390;
var statearr_27403_27419 = state_27390__$1;
(statearr_27403_27419[(2)] = null);

(statearr_27403_27419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (5))){
var state_27390__$1 = state_27390;
var statearr_27404_27420 = state_27390__$1;
(statearr_27404_27420[(2)] = null);

(statearr_27404_27420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (10))){
var inst_27382 = (state_27390[(2)]);
var state_27390__$1 = state_27390;
var statearr_27405_27421 = state_27390__$1;
(statearr_27405_27421[(2)] = inst_27382);

(statearr_27405_27421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (8))){
var inst_27372 = (state_27390[(7)]);
var state_27390__$1 = state_27390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27390__$1,(11),out,inst_27372);
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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_27406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27406[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_27406[(1)] = (1));

return statearr_27406;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_27390){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_27390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e27407){if((e27407 instanceof Object)){
var ex__25926__auto__ = e27407;
var statearr_27408_27422 = state_27390;
(statearr_27408_27422[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27423 = state_27390;
state_27390 = G__27423;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_27390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_27390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_27409 = f__26018__auto__.call(null);
(statearr_27409[(6)] = c__26017__auto___27411);

return statearr_27409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27425 = (function (f,ch,meta27426){
this.f = f;
this.ch = ch;
this.meta27426 = meta27426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27427,meta27426__$1){
var self__ = this;
var _27427__$1 = this;
return (new cljs.core.async.t_cljs$core$async27425(self__.f,self__.ch,meta27426__$1));
}));

(cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27427){
var self__ = this;
var _27427__$1 = this;
return self__.meta27426;
}));

(cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27428 = (function (f,ch,meta27426,_,fn1,meta27429){
this.f = f;
this.ch = ch;
this.meta27426 = meta27426;
this._ = _;
this.fn1 = fn1;
this.meta27429 = meta27429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27430,meta27429__$1){
var self__ = this;
var _27430__$1 = this;
return (new cljs.core.async.t_cljs$core$async27428(self__.f,self__.ch,self__.meta27426,self__._,self__.fn1,meta27429__$1));
}));

(cljs.core.async.t_cljs$core$async27428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27430){
var self__ = this;
var _27430__$1 = this;
return self__.meta27429;
}));

(cljs.core.async.t_cljs$core$async27428.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async27428.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__27424_SHARP_){
return f1.call(null,(((p1__27424_SHARP_ == null))?null:self__.f.call(null,p1__27424_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async27428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27426","meta27426",-29498427,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27425","cljs.core.async/t_cljs$core$async27425",2084944995,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27429","meta27429",54360341,null)], null);
}));

(cljs.core.async.t_cljs$core$async27428.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27428");

(cljs.core.async.t_cljs$core$async27428.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27428");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27428.
 */
cljs.core.async.__GT_t_cljs$core$async27428 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27428(f__$1,ch__$1,meta27426__$1,___$2,fn1__$1,meta27429){
return (new cljs.core.async.t_cljs$core$async27428(f__$1,ch__$1,meta27426__$1,___$2,fn1__$1,meta27429));
});

}

return (new cljs.core.async.t_cljs$core$async27428(self__.f,self__.ch,self__.meta27426,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async27425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27426","meta27426",-29498427,null)], null);
}));

(cljs.core.async.t_cljs$core$async27425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27425");

(cljs.core.async.t_cljs$core$async27425.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27425.
 */
cljs.core.async.__GT_t_cljs$core$async27425 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27425(f__$1,ch__$1,meta27426){
return (new cljs.core.async.t_cljs$core$async27425(f__$1,ch__$1,meta27426));
});

}

return (new cljs.core.async.t_cljs$core$async27425(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27431 = (function (f,ch,meta27432){
this.f = f;
this.ch = ch;
this.meta27432 = meta27432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27433,meta27432__$1){
var self__ = this;
var _27433__$1 = this;
return (new cljs.core.async.t_cljs$core$async27431(self__.f,self__.ch,meta27432__$1));
}));

(cljs.core.async.t_cljs$core$async27431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27433){
var self__ = this;
var _27433__$1 = this;
return self__.meta27432;
}));

(cljs.core.async.t_cljs$core$async27431.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27431.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27431.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async27431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27432","meta27432",660035551,null)], null);
}));

(cljs.core.async.t_cljs$core$async27431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27431");

(cljs.core.async.t_cljs$core$async27431.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27431.
 */
cljs.core.async.__GT_t_cljs$core$async27431 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27431(f__$1,ch__$1,meta27432){
return (new cljs.core.async.t_cljs$core$async27431(f__$1,ch__$1,meta27432));
});

}

return (new cljs.core.async.t_cljs$core$async27431(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27434 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27434 = (function (p,ch,meta27435){
this.p = p;
this.ch = ch;
this.meta27435 = meta27435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27436,meta27435__$1){
var self__ = this;
var _27436__$1 = this;
return (new cljs.core.async.t_cljs$core$async27434(self__.p,self__.ch,meta27435__$1));
}));

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27436){
var self__ = this;
var _27436__$1 = this;
return self__.meta27435;
}));

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async27434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27435","meta27435",1316785187,null)], null);
}));

(cljs.core.async.t_cljs$core$async27434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27434");

(cljs.core.async.t_cljs$core$async27434.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27434.
 */
cljs.core.async.__GT_t_cljs$core$async27434 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27434(p__$1,ch__$1,meta27435){
return (new cljs.core.async.t_cljs$core$async27434(p__$1,ch__$1,meta27435));
});

}

return (new cljs.core.async.t_cljs$core$async27434(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27438 = arguments.length;
switch (G__27438) {
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
var c__26017__auto___27478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_27459){
var state_val_27460 = (state_27459[(1)]);
if((state_val_27460 === (7))){
var inst_27455 = (state_27459[(2)]);
var state_27459__$1 = state_27459;
var statearr_27461_27479 = state_27459__$1;
(statearr_27461_27479[(2)] = inst_27455);

(statearr_27461_27479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (1))){
var state_27459__$1 = state_27459;
var statearr_27462_27480 = state_27459__$1;
(statearr_27462_27480[(2)] = null);

(statearr_27462_27480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (4))){
var inst_27441 = (state_27459[(7)]);
var inst_27441__$1 = (state_27459[(2)]);
var inst_27442 = (inst_27441__$1 == null);
var state_27459__$1 = (function (){var statearr_27463 = state_27459;
(statearr_27463[(7)] = inst_27441__$1);

return statearr_27463;
})();
if(cljs.core.truth_(inst_27442)){
var statearr_27464_27481 = state_27459__$1;
(statearr_27464_27481[(1)] = (5));

} else {
var statearr_27465_27482 = state_27459__$1;
(statearr_27465_27482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (6))){
var inst_27441 = (state_27459[(7)]);
var inst_27446 = p.call(null,inst_27441);
var state_27459__$1 = state_27459;
if(cljs.core.truth_(inst_27446)){
var statearr_27466_27483 = state_27459__$1;
(statearr_27466_27483[(1)] = (8));

} else {
var statearr_27467_27484 = state_27459__$1;
(statearr_27467_27484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (3))){
var inst_27457 = (state_27459[(2)]);
var state_27459__$1 = state_27459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27459__$1,inst_27457);
} else {
if((state_val_27460 === (2))){
var state_27459__$1 = state_27459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27459__$1,(4),ch);
} else {
if((state_val_27460 === (11))){
var inst_27449 = (state_27459[(2)]);
var state_27459__$1 = state_27459;
var statearr_27468_27485 = state_27459__$1;
(statearr_27468_27485[(2)] = inst_27449);

(statearr_27468_27485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (9))){
var state_27459__$1 = state_27459;
var statearr_27469_27486 = state_27459__$1;
(statearr_27469_27486[(2)] = null);

(statearr_27469_27486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (5))){
var inst_27444 = cljs.core.async.close_BANG_.call(null,out);
var state_27459__$1 = state_27459;
var statearr_27470_27487 = state_27459__$1;
(statearr_27470_27487[(2)] = inst_27444);

(statearr_27470_27487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (10))){
var inst_27452 = (state_27459[(2)]);
var state_27459__$1 = (function (){var statearr_27471 = state_27459;
(statearr_27471[(8)] = inst_27452);

return statearr_27471;
})();
var statearr_27472_27488 = state_27459__$1;
(statearr_27472_27488[(2)] = null);

(statearr_27472_27488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (8))){
var inst_27441 = (state_27459[(7)]);
var state_27459__$1 = state_27459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27459__$1,(11),out,inst_27441);
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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_27473 = [null,null,null,null,null,null,null,null,null];
(statearr_27473[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_27473[(1)] = (1));

return statearr_27473;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_27459){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_27459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e27474){if((e27474 instanceof Object)){
var ex__25926__auto__ = e27474;
var statearr_27475_27489 = state_27459;
(statearr_27475_27489[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27490 = state_27459;
state_27459 = G__27490;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_27459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_27459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_27476 = f__26018__auto__.call(null);
(statearr_27476[(6)] = c__26017__auto___27478);

return statearr_27476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27492 = arguments.length;
switch (G__27492) {
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
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_27555){
var state_val_27556 = (state_27555[(1)]);
if((state_val_27556 === (7))){
var inst_27551 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27557_27595 = state_27555__$1;
(statearr_27557_27595[(2)] = inst_27551);

(statearr_27557_27595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (20))){
var inst_27521 = (state_27555[(7)]);
var inst_27532 = (state_27555[(2)]);
var inst_27533 = cljs.core.next.call(null,inst_27521);
var inst_27507 = inst_27533;
var inst_27508 = null;
var inst_27509 = (0);
var inst_27510 = (0);
var state_27555__$1 = (function (){var statearr_27558 = state_27555;
(statearr_27558[(8)] = inst_27508);

(statearr_27558[(9)] = inst_27510);

(statearr_27558[(10)] = inst_27507);

(statearr_27558[(11)] = inst_27509);

(statearr_27558[(12)] = inst_27532);

return statearr_27558;
})();
var statearr_27559_27596 = state_27555__$1;
(statearr_27559_27596[(2)] = null);

(statearr_27559_27596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (1))){
var state_27555__$1 = state_27555;
var statearr_27560_27597 = state_27555__$1;
(statearr_27560_27597[(2)] = null);

(statearr_27560_27597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (4))){
var inst_27496 = (state_27555[(13)]);
var inst_27496__$1 = (state_27555[(2)]);
var inst_27497 = (inst_27496__$1 == null);
var state_27555__$1 = (function (){var statearr_27561 = state_27555;
(statearr_27561[(13)] = inst_27496__$1);

return statearr_27561;
})();
if(cljs.core.truth_(inst_27497)){
var statearr_27562_27598 = state_27555__$1;
(statearr_27562_27598[(1)] = (5));

} else {
var statearr_27563_27599 = state_27555__$1;
(statearr_27563_27599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (15))){
var state_27555__$1 = state_27555;
var statearr_27567_27600 = state_27555__$1;
(statearr_27567_27600[(2)] = null);

(statearr_27567_27600[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (21))){
var state_27555__$1 = state_27555;
var statearr_27568_27601 = state_27555__$1;
(statearr_27568_27601[(2)] = null);

(statearr_27568_27601[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (13))){
var inst_27508 = (state_27555[(8)]);
var inst_27510 = (state_27555[(9)]);
var inst_27507 = (state_27555[(10)]);
var inst_27509 = (state_27555[(11)]);
var inst_27517 = (state_27555[(2)]);
var inst_27518 = (inst_27510 + (1));
var tmp27564 = inst_27508;
var tmp27565 = inst_27507;
var tmp27566 = inst_27509;
var inst_27507__$1 = tmp27565;
var inst_27508__$1 = tmp27564;
var inst_27509__$1 = tmp27566;
var inst_27510__$1 = inst_27518;
var state_27555__$1 = (function (){var statearr_27569 = state_27555;
(statearr_27569[(14)] = inst_27517);

(statearr_27569[(8)] = inst_27508__$1);

(statearr_27569[(9)] = inst_27510__$1);

(statearr_27569[(10)] = inst_27507__$1);

(statearr_27569[(11)] = inst_27509__$1);

return statearr_27569;
})();
var statearr_27570_27602 = state_27555__$1;
(statearr_27570_27602[(2)] = null);

(statearr_27570_27602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (22))){
var state_27555__$1 = state_27555;
var statearr_27571_27603 = state_27555__$1;
(statearr_27571_27603[(2)] = null);

(statearr_27571_27603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (6))){
var inst_27496 = (state_27555[(13)]);
var inst_27505 = f.call(null,inst_27496);
var inst_27506 = cljs.core.seq.call(null,inst_27505);
var inst_27507 = inst_27506;
var inst_27508 = null;
var inst_27509 = (0);
var inst_27510 = (0);
var state_27555__$1 = (function (){var statearr_27572 = state_27555;
(statearr_27572[(8)] = inst_27508);

(statearr_27572[(9)] = inst_27510);

(statearr_27572[(10)] = inst_27507);

(statearr_27572[(11)] = inst_27509);

return statearr_27572;
})();
var statearr_27573_27604 = state_27555__$1;
(statearr_27573_27604[(2)] = null);

(statearr_27573_27604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (17))){
var inst_27521 = (state_27555[(7)]);
var inst_27525 = cljs.core.chunk_first.call(null,inst_27521);
var inst_27526 = cljs.core.chunk_rest.call(null,inst_27521);
var inst_27527 = cljs.core.count.call(null,inst_27525);
var inst_27507 = inst_27526;
var inst_27508 = inst_27525;
var inst_27509 = inst_27527;
var inst_27510 = (0);
var state_27555__$1 = (function (){var statearr_27574 = state_27555;
(statearr_27574[(8)] = inst_27508);

(statearr_27574[(9)] = inst_27510);

(statearr_27574[(10)] = inst_27507);

(statearr_27574[(11)] = inst_27509);

return statearr_27574;
})();
var statearr_27575_27605 = state_27555__$1;
(statearr_27575_27605[(2)] = null);

(statearr_27575_27605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (3))){
var inst_27553 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27555__$1,inst_27553);
} else {
if((state_val_27556 === (12))){
var inst_27541 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27576_27606 = state_27555__$1;
(statearr_27576_27606[(2)] = inst_27541);

(statearr_27576_27606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (2))){
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27555__$1,(4),in$);
} else {
if((state_val_27556 === (23))){
var inst_27549 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27577_27607 = state_27555__$1;
(statearr_27577_27607[(2)] = inst_27549);

(statearr_27577_27607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (19))){
var inst_27536 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27578_27608 = state_27555__$1;
(statearr_27578_27608[(2)] = inst_27536);

(statearr_27578_27608[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (11))){
var inst_27521 = (state_27555[(7)]);
var inst_27507 = (state_27555[(10)]);
var inst_27521__$1 = cljs.core.seq.call(null,inst_27507);
var state_27555__$1 = (function (){var statearr_27579 = state_27555;
(statearr_27579[(7)] = inst_27521__$1);

return statearr_27579;
})();
if(inst_27521__$1){
var statearr_27580_27609 = state_27555__$1;
(statearr_27580_27609[(1)] = (14));

} else {
var statearr_27581_27610 = state_27555__$1;
(statearr_27581_27610[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (9))){
var inst_27543 = (state_27555[(2)]);
var inst_27544 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27555__$1 = (function (){var statearr_27582 = state_27555;
(statearr_27582[(15)] = inst_27543);

return statearr_27582;
})();
if(cljs.core.truth_(inst_27544)){
var statearr_27583_27611 = state_27555__$1;
(statearr_27583_27611[(1)] = (21));

} else {
var statearr_27584_27612 = state_27555__$1;
(statearr_27584_27612[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (5))){
var inst_27499 = cljs.core.async.close_BANG_.call(null,out);
var state_27555__$1 = state_27555;
var statearr_27585_27613 = state_27555__$1;
(statearr_27585_27613[(2)] = inst_27499);

(statearr_27585_27613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (14))){
var inst_27521 = (state_27555[(7)]);
var inst_27523 = cljs.core.chunked_seq_QMARK_.call(null,inst_27521);
var state_27555__$1 = state_27555;
if(inst_27523){
var statearr_27586_27614 = state_27555__$1;
(statearr_27586_27614[(1)] = (17));

} else {
var statearr_27587_27615 = state_27555__$1;
(statearr_27587_27615[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (16))){
var inst_27539 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27588_27616 = state_27555__$1;
(statearr_27588_27616[(2)] = inst_27539);

(statearr_27588_27616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (10))){
var inst_27508 = (state_27555[(8)]);
var inst_27510 = (state_27555[(9)]);
var inst_27515 = cljs.core._nth.call(null,inst_27508,inst_27510);
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27555__$1,(13),out,inst_27515);
} else {
if((state_val_27556 === (18))){
var inst_27521 = (state_27555[(7)]);
var inst_27530 = cljs.core.first.call(null,inst_27521);
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27555__$1,(20),out,inst_27530);
} else {
if((state_val_27556 === (8))){
var inst_27510 = (state_27555[(9)]);
var inst_27509 = (state_27555[(11)]);
var inst_27512 = (inst_27510 < inst_27509);
var inst_27513 = inst_27512;
var state_27555__$1 = state_27555;
if(cljs.core.truth_(inst_27513)){
var statearr_27589_27617 = state_27555__$1;
(statearr_27589_27617[(1)] = (10));

} else {
var statearr_27590_27618 = state_27555__$1;
(statearr_27590_27618[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__25923__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25923__auto____0 = (function (){
var statearr_27591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27591[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25923__auto__);

(statearr_27591[(1)] = (1));

return statearr_27591;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25923__auto____1 = (function (state_27555){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_27555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e27592){if((e27592 instanceof Object)){
var ex__25926__auto__ = e27592;
var statearr_27593_27619 = state_27555;
(statearr_27593_27619[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27620 = state_27555;
state_27555 = G__27620;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25923__auto__ = function(state_27555){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25923__auto____1.call(this,state_27555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25923__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25923__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_27594 = f__26018__auto__.call(null);
(statearr_27594[(6)] = c__26017__auto__);

return statearr_27594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));

return c__26017__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27622 = arguments.length;
switch (G__27622) {
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
var G__27625 = arguments.length;
switch (G__27625) {
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
var G__27628 = arguments.length;
switch (G__27628) {
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
var c__26017__auto___27675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_27652){
var state_val_27653 = (state_27652[(1)]);
if((state_val_27653 === (7))){
var inst_27647 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
var statearr_27654_27676 = state_27652__$1;
(statearr_27654_27676[(2)] = inst_27647);

(statearr_27654_27676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (1))){
var inst_27629 = null;
var state_27652__$1 = (function (){var statearr_27655 = state_27652;
(statearr_27655[(7)] = inst_27629);

return statearr_27655;
})();
var statearr_27656_27677 = state_27652__$1;
(statearr_27656_27677[(2)] = null);

(statearr_27656_27677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (4))){
var inst_27632 = (state_27652[(8)]);
var inst_27632__$1 = (state_27652[(2)]);
var inst_27633 = (inst_27632__$1 == null);
var inst_27634 = cljs.core.not.call(null,inst_27633);
var state_27652__$1 = (function (){var statearr_27657 = state_27652;
(statearr_27657[(8)] = inst_27632__$1);

return statearr_27657;
})();
if(inst_27634){
var statearr_27658_27678 = state_27652__$1;
(statearr_27658_27678[(1)] = (5));

} else {
var statearr_27659_27679 = state_27652__$1;
(statearr_27659_27679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (6))){
var state_27652__$1 = state_27652;
var statearr_27660_27680 = state_27652__$1;
(statearr_27660_27680[(2)] = null);

(statearr_27660_27680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (3))){
var inst_27649 = (state_27652[(2)]);
var inst_27650 = cljs.core.async.close_BANG_.call(null,out);
var state_27652__$1 = (function (){var statearr_27661 = state_27652;
(statearr_27661[(9)] = inst_27649);

return statearr_27661;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27652__$1,inst_27650);
} else {
if((state_val_27653 === (2))){
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27652__$1,(4),ch);
} else {
if((state_val_27653 === (11))){
var inst_27632 = (state_27652[(8)]);
var inst_27641 = (state_27652[(2)]);
var inst_27629 = inst_27632;
var state_27652__$1 = (function (){var statearr_27662 = state_27652;
(statearr_27662[(10)] = inst_27641);

(statearr_27662[(7)] = inst_27629);

return statearr_27662;
})();
var statearr_27663_27681 = state_27652__$1;
(statearr_27663_27681[(2)] = null);

(statearr_27663_27681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (9))){
var inst_27632 = (state_27652[(8)]);
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27652__$1,(11),out,inst_27632);
} else {
if((state_val_27653 === (5))){
var inst_27632 = (state_27652[(8)]);
var inst_27629 = (state_27652[(7)]);
var inst_27636 = cljs.core._EQ_.call(null,inst_27632,inst_27629);
var state_27652__$1 = state_27652;
if(inst_27636){
var statearr_27665_27682 = state_27652__$1;
(statearr_27665_27682[(1)] = (8));

} else {
var statearr_27666_27683 = state_27652__$1;
(statearr_27666_27683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (10))){
var inst_27644 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
var statearr_27667_27684 = state_27652__$1;
(statearr_27667_27684[(2)] = inst_27644);

(statearr_27667_27684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (8))){
var inst_27629 = (state_27652[(7)]);
var tmp27664 = inst_27629;
var inst_27629__$1 = tmp27664;
var state_27652__$1 = (function (){var statearr_27668 = state_27652;
(statearr_27668[(7)] = inst_27629__$1);

return statearr_27668;
})();
var statearr_27669_27685 = state_27652__$1;
(statearr_27669_27685[(2)] = null);

(statearr_27669_27685[(1)] = (2));


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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_27670 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27670[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_27670[(1)] = (1));

return statearr_27670;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_27652){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_27652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e27671){if((e27671 instanceof Object)){
var ex__25926__auto__ = e27671;
var statearr_27672_27686 = state_27652;
(statearr_27672_27686[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27687 = state_27652;
state_27652 = G__27687;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_27652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_27652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_27673 = f__26018__auto__.call(null);
(statearr_27673[(6)] = c__26017__auto___27675);

return statearr_27673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27689 = arguments.length;
switch (G__27689) {
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
var c__26017__auto___27755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_27727){
var state_val_27728 = (state_27727[(1)]);
if((state_val_27728 === (7))){
var inst_27723 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27729_27756 = state_27727__$1;
(statearr_27729_27756[(2)] = inst_27723);

(statearr_27729_27756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (1))){
var inst_27690 = (new Array(n));
var inst_27691 = inst_27690;
var inst_27692 = (0);
var state_27727__$1 = (function (){var statearr_27730 = state_27727;
(statearr_27730[(7)] = inst_27691);

(statearr_27730[(8)] = inst_27692);

return statearr_27730;
})();
var statearr_27731_27757 = state_27727__$1;
(statearr_27731_27757[(2)] = null);

(statearr_27731_27757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (4))){
var inst_27695 = (state_27727[(9)]);
var inst_27695__$1 = (state_27727[(2)]);
var inst_27696 = (inst_27695__$1 == null);
var inst_27697 = cljs.core.not.call(null,inst_27696);
var state_27727__$1 = (function (){var statearr_27732 = state_27727;
(statearr_27732[(9)] = inst_27695__$1);

return statearr_27732;
})();
if(inst_27697){
var statearr_27733_27758 = state_27727__$1;
(statearr_27733_27758[(1)] = (5));

} else {
var statearr_27734_27759 = state_27727__$1;
(statearr_27734_27759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (15))){
var inst_27717 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27735_27760 = state_27727__$1;
(statearr_27735_27760[(2)] = inst_27717);

(statearr_27735_27760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (13))){
var state_27727__$1 = state_27727;
var statearr_27736_27761 = state_27727__$1;
(statearr_27736_27761[(2)] = null);

(statearr_27736_27761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (6))){
var inst_27692 = (state_27727[(8)]);
var inst_27713 = (inst_27692 > (0));
var state_27727__$1 = state_27727;
if(cljs.core.truth_(inst_27713)){
var statearr_27737_27762 = state_27727__$1;
(statearr_27737_27762[(1)] = (12));

} else {
var statearr_27738_27763 = state_27727__$1;
(statearr_27738_27763[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (3))){
var inst_27725 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27727__$1,inst_27725);
} else {
if((state_val_27728 === (12))){
var inst_27691 = (state_27727[(7)]);
var inst_27715 = cljs.core.vec.call(null,inst_27691);
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27727__$1,(15),out,inst_27715);
} else {
if((state_val_27728 === (2))){
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27727__$1,(4),ch);
} else {
if((state_val_27728 === (11))){
var inst_27707 = (state_27727[(2)]);
var inst_27708 = (new Array(n));
var inst_27691 = inst_27708;
var inst_27692 = (0);
var state_27727__$1 = (function (){var statearr_27739 = state_27727;
(statearr_27739[(7)] = inst_27691);

(statearr_27739[(8)] = inst_27692);

(statearr_27739[(10)] = inst_27707);

return statearr_27739;
})();
var statearr_27740_27764 = state_27727__$1;
(statearr_27740_27764[(2)] = null);

(statearr_27740_27764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (9))){
var inst_27691 = (state_27727[(7)]);
var inst_27705 = cljs.core.vec.call(null,inst_27691);
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27727__$1,(11),out,inst_27705);
} else {
if((state_val_27728 === (5))){
var inst_27691 = (state_27727[(7)]);
var inst_27692 = (state_27727[(8)]);
var inst_27700 = (state_27727[(11)]);
var inst_27695 = (state_27727[(9)]);
var inst_27699 = (inst_27691[inst_27692] = inst_27695);
var inst_27700__$1 = (inst_27692 + (1));
var inst_27701 = (inst_27700__$1 < n);
var state_27727__$1 = (function (){var statearr_27741 = state_27727;
(statearr_27741[(12)] = inst_27699);

(statearr_27741[(11)] = inst_27700__$1);

return statearr_27741;
})();
if(cljs.core.truth_(inst_27701)){
var statearr_27742_27765 = state_27727__$1;
(statearr_27742_27765[(1)] = (8));

} else {
var statearr_27743_27766 = state_27727__$1;
(statearr_27743_27766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (14))){
var inst_27720 = (state_27727[(2)]);
var inst_27721 = cljs.core.async.close_BANG_.call(null,out);
var state_27727__$1 = (function (){var statearr_27745 = state_27727;
(statearr_27745[(13)] = inst_27720);

return statearr_27745;
})();
var statearr_27746_27767 = state_27727__$1;
(statearr_27746_27767[(2)] = inst_27721);

(statearr_27746_27767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (10))){
var inst_27711 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27747_27768 = state_27727__$1;
(statearr_27747_27768[(2)] = inst_27711);

(statearr_27747_27768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (8))){
var inst_27691 = (state_27727[(7)]);
var inst_27700 = (state_27727[(11)]);
var tmp27744 = inst_27691;
var inst_27691__$1 = tmp27744;
var inst_27692 = inst_27700;
var state_27727__$1 = (function (){var statearr_27748 = state_27727;
(statearr_27748[(7)] = inst_27691__$1);

(statearr_27748[(8)] = inst_27692);

return statearr_27748;
})();
var statearr_27749_27769 = state_27727__$1;
(statearr_27749_27769[(2)] = null);

(statearr_27749_27769[(1)] = (2));


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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_27750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27750[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_27750[(1)] = (1));

return statearr_27750;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_27727){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_27727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e27751){if((e27751 instanceof Object)){
var ex__25926__auto__ = e27751;
var statearr_27752_27770 = state_27727;
(statearr_27752_27770[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27771 = state_27727;
state_27727 = G__27771;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_27727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_27727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_27753 = f__26018__auto__.call(null);
(statearr_27753[(6)] = c__26017__auto___27755);

return statearr_27753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27773 = arguments.length;
switch (G__27773) {
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
var c__26017__auto___27843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_27815){
var state_val_27816 = (state_27815[(1)]);
if((state_val_27816 === (7))){
var inst_27811 = (state_27815[(2)]);
var state_27815__$1 = state_27815;
var statearr_27817_27844 = state_27815__$1;
(statearr_27817_27844[(2)] = inst_27811);

(statearr_27817_27844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (1))){
var inst_27774 = [];
var inst_27775 = inst_27774;
var inst_27776 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27815__$1 = (function (){var statearr_27818 = state_27815;
(statearr_27818[(7)] = inst_27775);

(statearr_27818[(8)] = inst_27776);

return statearr_27818;
})();
var statearr_27819_27845 = state_27815__$1;
(statearr_27819_27845[(2)] = null);

(statearr_27819_27845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (4))){
var inst_27779 = (state_27815[(9)]);
var inst_27779__$1 = (state_27815[(2)]);
var inst_27780 = (inst_27779__$1 == null);
var inst_27781 = cljs.core.not.call(null,inst_27780);
var state_27815__$1 = (function (){var statearr_27820 = state_27815;
(statearr_27820[(9)] = inst_27779__$1);

return statearr_27820;
})();
if(inst_27781){
var statearr_27821_27846 = state_27815__$1;
(statearr_27821_27846[(1)] = (5));

} else {
var statearr_27822_27847 = state_27815__$1;
(statearr_27822_27847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (15))){
var inst_27805 = (state_27815[(2)]);
var state_27815__$1 = state_27815;
var statearr_27823_27848 = state_27815__$1;
(statearr_27823_27848[(2)] = inst_27805);

(statearr_27823_27848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (13))){
var state_27815__$1 = state_27815;
var statearr_27824_27849 = state_27815__$1;
(statearr_27824_27849[(2)] = null);

(statearr_27824_27849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (6))){
var inst_27775 = (state_27815[(7)]);
var inst_27800 = inst_27775.length;
var inst_27801 = (inst_27800 > (0));
var state_27815__$1 = state_27815;
if(cljs.core.truth_(inst_27801)){
var statearr_27825_27850 = state_27815__$1;
(statearr_27825_27850[(1)] = (12));

} else {
var statearr_27826_27851 = state_27815__$1;
(statearr_27826_27851[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (3))){
var inst_27813 = (state_27815[(2)]);
var state_27815__$1 = state_27815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27815__$1,inst_27813);
} else {
if((state_val_27816 === (12))){
var inst_27775 = (state_27815[(7)]);
var inst_27803 = cljs.core.vec.call(null,inst_27775);
var state_27815__$1 = state_27815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27815__$1,(15),out,inst_27803);
} else {
if((state_val_27816 === (2))){
var state_27815__$1 = state_27815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27815__$1,(4),ch);
} else {
if((state_val_27816 === (11))){
var inst_27779 = (state_27815[(9)]);
var inst_27783 = (state_27815[(10)]);
var inst_27793 = (state_27815[(2)]);
var inst_27794 = [];
var inst_27795 = inst_27794.push(inst_27779);
var inst_27775 = inst_27794;
var inst_27776 = inst_27783;
var state_27815__$1 = (function (){var statearr_27827 = state_27815;
(statearr_27827[(11)] = inst_27793);

(statearr_27827[(7)] = inst_27775);

(statearr_27827[(8)] = inst_27776);

(statearr_27827[(12)] = inst_27795);

return statearr_27827;
})();
var statearr_27828_27852 = state_27815__$1;
(statearr_27828_27852[(2)] = null);

(statearr_27828_27852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (9))){
var inst_27775 = (state_27815[(7)]);
var inst_27791 = cljs.core.vec.call(null,inst_27775);
var state_27815__$1 = state_27815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27815__$1,(11),out,inst_27791);
} else {
if((state_val_27816 === (5))){
var inst_27776 = (state_27815[(8)]);
var inst_27779 = (state_27815[(9)]);
var inst_27783 = (state_27815[(10)]);
var inst_27783__$1 = f.call(null,inst_27779);
var inst_27784 = cljs.core._EQ_.call(null,inst_27783__$1,inst_27776);
var inst_27785 = cljs.core.keyword_identical_QMARK_.call(null,inst_27776,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27786 = ((inst_27784) || (inst_27785));
var state_27815__$1 = (function (){var statearr_27829 = state_27815;
(statearr_27829[(10)] = inst_27783__$1);

return statearr_27829;
})();
if(cljs.core.truth_(inst_27786)){
var statearr_27830_27853 = state_27815__$1;
(statearr_27830_27853[(1)] = (8));

} else {
var statearr_27831_27854 = state_27815__$1;
(statearr_27831_27854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (14))){
var inst_27808 = (state_27815[(2)]);
var inst_27809 = cljs.core.async.close_BANG_.call(null,out);
var state_27815__$1 = (function (){var statearr_27833 = state_27815;
(statearr_27833[(13)] = inst_27808);

return statearr_27833;
})();
var statearr_27834_27855 = state_27815__$1;
(statearr_27834_27855[(2)] = inst_27809);

(statearr_27834_27855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (10))){
var inst_27798 = (state_27815[(2)]);
var state_27815__$1 = state_27815;
var statearr_27835_27856 = state_27815__$1;
(statearr_27835_27856[(2)] = inst_27798);

(statearr_27835_27856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (8))){
var inst_27775 = (state_27815[(7)]);
var inst_27779 = (state_27815[(9)]);
var inst_27783 = (state_27815[(10)]);
var inst_27788 = inst_27775.push(inst_27779);
var tmp27832 = inst_27775;
var inst_27775__$1 = tmp27832;
var inst_27776 = inst_27783;
var state_27815__$1 = (function (){var statearr_27836 = state_27815;
(statearr_27836[(7)] = inst_27775__$1);

(statearr_27836[(8)] = inst_27776);

(statearr_27836[(14)] = inst_27788);

return statearr_27836;
})();
var statearr_27837_27857 = state_27815__$1;
(statearr_27837_27857[(2)] = null);

(statearr_27837_27857[(1)] = (2));


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
var cljs$core$async$state_machine__25923__auto__ = null;
var cljs$core$async$state_machine__25923__auto____0 = (function (){
var statearr_27838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27838[(0)] = cljs$core$async$state_machine__25923__auto__);

(statearr_27838[(1)] = (1));

return statearr_27838;
});
var cljs$core$async$state_machine__25923__auto____1 = (function (state_27815){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_27815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e27839){if((e27839 instanceof Object)){
var ex__25926__auto__ = e27839;
var statearr_27840_27858 = state_27815;
(statearr_27840_27858[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27859 = state_27815;
state_27815 = G__27859;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
cljs$core$async$state_machine__25923__auto__ = function(state_27815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25923__auto____1.call(this,state_27815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25923__auto____0;
cljs$core$async$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25923__auto____1;
return cljs$core$async$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_27841 = f__26018__auto__.call(null);
(statearr_27841[(6)] = c__26017__auto___27843);

return statearr_27841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1717787130684
