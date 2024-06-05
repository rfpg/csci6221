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
var G__24226 = arguments.length;
switch (G__24226) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24227 = (function (f,blockable,meta24228){
this.f = f;
this.blockable = blockable;
this.meta24228 = meta24228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24229,meta24228__$1){
var self__ = this;
var _24229__$1 = this;
return (new cljs.core.async.t_cljs$core$async24227(self__.f,self__.blockable,meta24228__$1));
}));

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24229){
var self__ = this;
var _24229__$1 = this;
return self__.meta24228;
}));

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24228","meta24228",-1289536701,null)], null);
}));

(cljs.core.async.t_cljs$core$async24227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24227");

(cljs.core.async.t_cljs$core$async24227.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24227.
 */
cljs.core.async.__GT_t_cljs$core$async24227 = (function cljs$core$async$__GT_t_cljs$core$async24227(f__$1,blockable__$1,meta24228){
return (new cljs.core.async.t_cljs$core$async24227(f__$1,blockable__$1,meta24228));
});

}

return (new cljs.core.async.t_cljs$core$async24227(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24233 = arguments.length;
switch (G__24233) {
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
var G__24236 = arguments.length;
switch (G__24236) {
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
var G__24239 = arguments.length;
switch (G__24239) {
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
var val_24241 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24241);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_24241);
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
var G__24243 = arguments.length;
switch (G__24243) {
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
var n__4648__auto___24245 = n;
var x_24246 = (0);
while(true){
if((x_24246 < n__4648__auto___24245)){
(a[x_24246] = (0));

var G__24247 = (x_24246 + (1));
x_24246 = G__24247;
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

var G__24248 = (i + (1));
i = G__24248;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24249 = (function (flag,meta24250){
this.flag = flag;
this.meta24250 = meta24250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24251,meta24250__$1){
var self__ = this;
var _24251__$1 = this;
return (new cljs.core.async.t_cljs$core$async24249(self__.flag,meta24250__$1));
}));

(cljs.core.async.t_cljs$core$async24249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24251){
var self__ = this;
var _24251__$1 = this;
return self__.meta24250;
}));

(cljs.core.async.t_cljs$core$async24249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24250","meta24250",-2071258259,null)], null);
}));

(cljs.core.async.t_cljs$core$async24249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24249");

(cljs.core.async.t_cljs$core$async24249.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24249.
 */
cljs.core.async.__GT_t_cljs$core$async24249 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24249(flag__$1,meta24250){
return (new cljs.core.async.t_cljs$core$async24249(flag__$1,meta24250));
});

}

return (new cljs.core.async.t_cljs$core$async24249(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24252 = (function (flag,cb,meta24253){
this.flag = flag;
this.cb = cb;
this.meta24253 = meta24253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24254,meta24253__$1){
var self__ = this;
var _24254__$1 = this;
return (new cljs.core.async.t_cljs$core$async24252(self__.flag,self__.cb,meta24253__$1));
}));

(cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24254){
var self__ = this;
var _24254__$1 = this;
return self__.meta24253;
}));

(cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24253","meta24253",-2016409042,null)], null);
}));

(cljs.core.async.t_cljs$core$async24252.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24252");

(cljs.core.async.t_cljs$core$async24252.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24252");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24252.
 */
cljs.core.async.__GT_t_cljs$core$async24252 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24252(flag__$1,cb__$1,meta24253){
return (new cljs.core.async.t_cljs$core$async24252(flag__$1,cb__$1,meta24253));
});

}

return (new cljs.core.async.t_cljs$core$async24252(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24255_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24255_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24256_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24256_SHARP_,port], null));
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
var G__24257 = (i + (1));
i = G__24257;
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
var len__4771__auto___24262 = arguments.length;
var i__4772__auto___24263 = (0);
while(true){
if((i__4772__auto___24263 < len__4771__auto___24262)){
args__4777__auto__.push((arguments[i__4772__auto___24263]));

var G__24264 = (i__4772__auto___24263 + (1));
i__4772__auto___24263 = G__24264;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24260){
var map__24261 = p__24260;
var map__24261__$1 = cljs.core.__destructure_map.call(null,map__24261);
var opts = map__24261__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24258){
var G__24259 = cljs.core.first.call(null,seq24258);
var seq24258__$1 = cljs.core.next.call(null,seq24258);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24259,seq24258__$1);
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
var G__24266 = arguments.length;
switch (G__24266) {
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
var c__24166__auto___24312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_24290){
var state_val_24291 = (state_24290[(1)]);
if((state_val_24291 === (7))){
var inst_24286 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24292_24313 = state_24290__$1;
(statearr_24292_24313[(2)] = inst_24286);

(statearr_24292_24313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (1))){
var state_24290__$1 = state_24290;
var statearr_24293_24314 = state_24290__$1;
(statearr_24293_24314[(2)] = null);

(statearr_24293_24314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (4))){
var inst_24269 = (state_24290[(7)]);
var inst_24269__$1 = (state_24290[(2)]);
var inst_24270 = (inst_24269__$1 == null);
var state_24290__$1 = (function (){var statearr_24294 = state_24290;
(statearr_24294[(7)] = inst_24269__$1);

return statearr_24294;
})();
if(cljs.core.truth_(inst_24270)){
var statearr_24295_24315 = state_24290__$1;
(statearr_24295_24315[(1)] = (5));

} else {
var statearr_24296_24316 = state_24290__$1;
(statearr_24296_24316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (13))){
var state_24290__$1 = state_24290;
var statearr_24297_24317 = state_24290__$1;
(statearr_24297_24317[(2)] = null);

(statearr_24297_24317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (6))){
var inst_24269 = (state_24290[(7)]);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24290__$1,(11),to,inst_24269);
} else {
if((state_val_24291 === (3))){
var inst_24288 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24290__$1,inst_24288);
} else {
if((state_val_24291 === (12))){
var state_24290__$1 = state_24290;
var statearr_24298_24318 = state_24290__$1;
(statearr_24298_24318[(2)] = null);

(statearr_24298_24318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (2))){
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(4),from);
} else {
if((state_val_24291 === (11))){
var inst_24279 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
if(cljs.core.truth_(inst_24279)){
var statearr_24299_24319 = state_24290__$1;
(statearr_24299_24319[(1)] = (12));

} else {
var statearr_24300_24320 = state_24290__$1;
(statearr_24300_24320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (9))){
var state_24290__$1 = state_24290;
var statearr_24301_24321 = state_24290__$1;
(statearr_24301_24321[(2)] = null);

(statearr_24301_24321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (5))){
var state_24290__$1 = state_24290;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24302_24322 = state_24290__$1;
(statearr_24302_24322[(1)] = (8));

} else {
var statearr_24303_24323 = state_24290__$1;
(statearr_24303_24323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (14))){
var inst_24284 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24304_24324 = state_24290__$1;
(statearr_24304_24324[(2)] = inst_24284);

(statearr_24304_24324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (10))){
var inst_24276 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24305_24325 = state_24290__$1;
(statearr_24305_24325[(2)] = inst_24276);

(statearr_24305_24325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (8))){
var inst_24273 = cljs.core.async.close_BANG_.call(null,to);
var state_24290__$1 = state_24290;
var statearr_24306_24326 = state_24290__$1;
(statearr_24306_24326[(2)] = inst_24273);

(statearr_24306_24326[(1)] = (10));


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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_24307 = [null,null,null,null,null,null,null,null];
(statearr_24307[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_24307[(1)] = (1));

return statearr_24307;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_24290){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24308){if((e24308 instanceof Object)){
var ex__24075__auto__ = e24308;
var statearr_24309_24327 = state_24290;
(statearr_24309_24327[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24328 = state_24290;
state_24290 = G__24328;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_24290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_24290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_24310 = f__24167__auto__.call(null);
(statearr_24310[(6)] = c__24166__auto___24312);

return statearr_24310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
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
var process = (function (p__24329){
var vec__24330 = p__24329;
var v = cljs.core.nth.call(null,vec__24330,(0),null);
var p = cljs.core.nth.call(null,vec__24330,(1),null);
var job = vec__24330;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24166__auto___24501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_24337){
var state_val_24338 = (state_24337[(1)]);
if((state_val_24338 === (1))){
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24337__$1,(2),res,v);
} else {
if((state_val_24338 === (2))){
var inst_24334 = (state_24337[(2)]);
var inst_24335 = cljs.core.async.close_BANG_.call(null,res);
var state_24337__$1 = (function (){var statearr_24339 = state_24337;
(statearr_24339[(7)] = inst_24334);

return statearr_24339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24337__$1,inst_24335);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0 = (function (){
var statearr_24340 = [null,null,null,null,null,null,null,null];
(statearr_24340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__);

(statearr_24340[(1)] = (1));

return statearr_24340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1 = (function (state_24337){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24341){if((e24341 instanceof Object)){
var ex__24075__auto__ = e24341;
var statearr_24342_24502 = state_24337;
(statearr_24342_24502[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24503 = state_24337;
state_24337 = G__24503;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__ = function(state_24337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1.call(this,state_24337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_24343 = f__24167__auto__.call(null);
(statearr_24343[(6)] = c__24166__auto___24501);

return statearr_24343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__24344){
var vec__24345 = p__24344;
var v = cljs.core.nth.call(null,vec__24345,(0),null);
var p = cljs.core.nth.call(null,vec__24345,(1),null);
var job = vec__24345;
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
var n__4648__auto___24504 = n;
var __24505 = (0);
while(true){
if((__24505 < n__4648__auto___24504)){
var G__24348_24506 = type;
var G__24348_24507__$1 = (((G__24348_24506 instanceof cljs.core.Keyword))?G__24348_24506.fqn:null);
switch (G__24348_24507__$1) {
case "compute":
var c__24166__auto___24509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24505,c__24166__auto___24509,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async){
return (function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = ((function (__24505,c__24166__auto___24509,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async){
return (function (state_24361){
var state_val_24362 = (state_24361[(1)]);
if((state_val_24362 === (1))){
var state_24361__$1 = state_24361;
var statearr_24363_24510 = state_24361__$1;
(statearr_24363_24510[(2)] = null);

(statearr_24363_24510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24362 === (2))){
var state_24361__$1 = state_24361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24361__$1,(4),jobs);
} else {
if((state_val_24362 === (3))){
var inst_24359 = (state_24361[(2)]);
var state_24361__$1 = state_24361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24361__$1,inst_24359);
} else {
if((state_val_24362 === (4))){
var inst_24351 = (state_24361[(2)]);
var inst_24352 = process.call(null,inst_24351);
var state_24361__$1 = state_24361;
if(cljs.core.truth_(inst_24352)){
var statearr_24364_24511 = state_24361__$1;
(statearr_24364_24511[(1)] = (5));

} else {
var statearr_24365_24512 = state_24361__$1;
(statearr_24365_24512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24362 === (5))){
var state_24361__$1 = state_24361;
var statearr_24366_24513 = state_24361__$1;
(statearr_24366_24513[(2)] = null);

(statearr_24366_24513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24362 === (6))){
var state_24361__$1 = state_24361;
var statearr_24367_24514 = state_24361__$1;
(statearr_24367_24514[(2)] = null);

(statearr_24367_24514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24362 === (7))){
var inst_24357 = (state_24361[(2)]);
var state_24361__$1 = state_24361;
var statearr_24368_24515 = state_24361__$1;
(statearr_24368_24515[(2)] = inst_24357);

(statearr_24368_24515[(1)] = (3));


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
});})(__24505,c__24166__auto___24509,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async))
;
return ((function (__24505,switch__24071__auto__,c__24166__auto___24509,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0 = (function (){
var statearr_24369 = [null,null,null,null,null,null,null];
(statearr_24369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__);

(statearr_24369[(1)] = (1));

return statearr_24369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1 = (function (state_24361){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24370){if((e24370 instanceof Object)){
var ex__24075__auto__ = e24370;
var statearr_24371_24516 = state_24361;
(statearr_24371_24516[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24517 = state_24361;
state_24361 = G__24517;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__ = function(state_24361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1.call(this,state_24361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__;
})()
;})(__24505,switch__24071__auto__,c__24166__auto___24509,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async))
})();
var state__24168__auto__ = (function (){var statearr_24372 = f__24167__auto__.call(null);
(statearr_24372[(6)] = c__24166__auto___24509);

return statearr_24372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
});})(__24505,c__24166__auto___24509,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async))
);


break;
case "async":
var c__24166__auto___24518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24505,c__24166__auto___24518,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async){
return (function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = ((function (__24505,c__24166__auto___24518,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async){
return (function (state_24385){
var state_val_24386 = (state_24385[(1)]);
if((state_val_24386 === (1))){
var state_24385__$1 = state_24385;
var statearr_24387_24519 = state_24385__$1;
(statearr_24387_24519[(2)] = null);

(statearr_24387_24519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24386 === (2))){
var state_24385__$1 = state_24385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24385__$1,(4),jobs);
} else {
if((state_val_24386 === (3))){
var inst_24383 = (state_24385[(2)]);
var state_24385__$1 = state_24385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24385__$1,inst_24383);
} else {
if((state_val_24386 === (4))){
var inst_24375 = (state_24385[(2)]);
var inst_24376 = async.call(null,inst_24375);
var state_24385__$1 = state_24385;
if(cljs.core.truth_(inst_24376)){
var statearr_24388_24520 = state_24385__$1;
(statearr_24388_24520[(1)] = (5));

} else {
var statearr_24389_24521 = state_24385__$1;
(statearr_24389_24521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24386 === (5))){
var state_24385__$1 = state_24385;
var statearr_24390_24522 = state_24385__$1;
(statearr_24390_24522[(2)] = null);

(statearr_24390_24522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24386 === (6))){
var state_24385__$1 = state_24385;
var statearr_24391_24523 = state_24385__$1;
(statearr_24391_24523[(2)] = null);

(statearr_24391_24523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24386 === (7))){
var inst_24381 = (state_24385[(2)]);
var state_24385__$1 = state_24385;
var statearr_24392_24524 = state_24385__$1;
(statearr_24392_24524[(2)] = inst_24381);

(statearr_24392_24524[(1)] = (3));


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
});})(__24505,c__24166__auto___24518,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async))
;
return ((function (__24505,switch__24071__auto__,c__24166__auto___24518,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0 = (function (){
var statearr_24393 = [null,null,null,null,null,null,null];
(statearr_24393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__);

(statearr_24393[(1)] = (1));

return statearr_24393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1 = (function (state_24385){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24394){if((e24394 instanceof Object)){
var ex__24075__auto__ = e24394;
var statearr_24395_24525 = state_24385;
(statearr_24395_24525[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24526 = state_24385;
state_24385 = G__24526;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__ = function(state_24385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1.call(this,state_24385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__;
})()
;})(__24505,switch__24071__auto__,c__24166__auto___24518,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async))
})();
var state__24168__auto__ = (function (){var statearr_24396 = f__24167__auto__.call(null);
(statearr_24396[(6)] = c__24166__auto___24518);

return statearr_24396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
});})(__24505,c__24166__auto___24518,G__24348_24506,G__24348_24507__$1,n__4648__auto___24504,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24348_24507__$1)].join('')));

}

var G__24527 = (__24505 + (1));
__24505 = G__24527;
continue;
} else {
}
break;
}

var c__24166__auto___24528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_24418){
var state_val_24419 = (state_24418[(1)]);
if((state_val_24419 === (7))){
var inst_24414 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
var statearr_24420_24529 = state_24418__$1;
(statearr_24420_24529[(2)] = inst_24414);

(statearr_24420_24529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (1))){
var state_24418__$1 = state_24418;
var statearr_24421_24530 = state_24418__$1;
(statearr_24421_24530[(2)] = null);

(statearr_24421_24530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (4))){
var inst_24399 = (state_24418[(7)]);
var inst_24399__$1 = (state_24418[(2)]);
var inst_24400 = (inst_24399__$1 == null);
var state_24418__$1 = (function (){var statearr_24422 = state_24418;
(statearr_24422[(7)] = inst_24399__$1);

return statearr_24422;
})();
if(cljs.core.truth_(inst_24400)){
var statearr_24423_24531 = state_24418__$1;
(statearr_24423_24531[(1)] = (5));

} else {
var statearr_24424_24532 = state_24418__$1;
(statearr_24424_24532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (6))){
var inst_24404 = (state_24418[(8)]);
var inst_24399 = (state_24418[(7)]);
var inst_24404__$1 = cljs.core.async.chan.call(null,(1));
var inst_24405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24406 = [inst_24399,inst_24404__$1];
var inst_24407 = (new cljs.core.PersistentVector(null,2,(5),inst_24405,inst_24406,null));
var state_24418__$1 = (function (){var statearr_24425 = state_24418;
(statearr_24425[(8)] = inst_24404__$1);

return statearr_24425;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24418__$1,(8),jobs,inst_24407);
} else {
if((state_val_24419 === (3))){
var inst_24416 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24418__$1,inst_24416);
} else {
if((state_val_24419 === (2))){
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24418__$1,(4),from);
} else {
if((state_val_24419 === (9))){
var inst_24411 = (state_24418[(2)]);
var state_24418__$1 = (function (){var statearr_24426 = state_24418;
(statearr_24426[(9)] = inst_24411);

return statearr_24426;
})();
var statearr_24427_24533 = state_24418__$1;
(statearr_24427_24533[(2)] = null);

(statearr_24427_24533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (5))){
var inst_24402 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24418__$1 = state_24418;
var statearr_24428_24534 = state_24418__$1;
(statearr_24428_24534[(2)] = inst_24402);

(statearr_24428_24534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (8))){
var inst_24404 = (state_24418[(8)]);
var inst_24409 = (state_24418[(2)]);
var state_24418__$1 = (function (){var statearr_24429 = state_24418;
(statearr_24429[(10)] = inst_24409);

return statearr_24429;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24418__$1,(9),results,inst_24404);
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
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0 = (function (){
var statearr_24430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__);

(statearr_24430[(1)] = (1));

return statearr_24430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1 = (function (state_24418){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24431){if((e24431 instanceof Object)){
var ex__24075__auto__ = e24431;
var statearr_24432_24535 = state_24418;
(statearr_24432_24535[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24536 = state_24418;
state_24418 = G__24536;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__ = function(state_24418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1.call(this,state_24418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_24433 = f__24167__auto__.call(null);
(statearr_24433[(6)] = c__24166__auto___24528);

return statearr_24433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));


var c__24166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_24471){
var state_val_24472 = (state_24471[(1)]);
if((state_val_24472 === (7))){
var inst_24467 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
var statearr_24473_24537 = state_24471__$1;
(statearr_24473_24537[(2)] = inst_24467);

(statearr_24473_24537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (20))){
var state_24471__$1 = state_24471;
var statearr_24474_24538 = state_24471__$1;
(statearr_24474_24538[(2)] = null);

(statearr_24474_24538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (1))){
var state_24471__$1 = state_24471;
var statearr_24475_24539 = state_24471__$1;
(statearr_24475_24539[(2)] = null);

(statearr_24475_24539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (4))){
var inst_24436 = (state_24471[(7)]);
var inst_24436__$1 = (state_24471[(2)]);
var inst_24437 = (inst_24436__$1 == null);
var state_24471__$1 = (function (){var statearr_24476 = state_24471;
(statearr_24476[(7)] = inst_24436__$1);

return statearr_24476;
})();
if(cljs.core.truth_(inst_24437)){
var statearr_24477_24540 = state_24471__$1;
(statearr_24477_24540[(1)] = (5));

} else {
var statearr_24478_24541 = state_24471__$1;
(statearr_24478_24541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (15))){
var inst_24449 = (state_24471[(8)]);
var state_24471__$1 = state_24471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24471__$1,(18),to,inst_24449);
} else {
if((state_val_24472 === (21))){
var inst_24462 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
var statearr_24479_24542 = state_24471__$1;
(statearr_24479_24542[(2)] = inst_24462);

(statearr_24479_24542[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (13))){
var inst_24464 = (state_24471[(2)]);
var state_24471__$1 = (function (){var statearr_24480 = state_24471;
(statearr_24480[(9)] = inst_24464);

return statearr_24480;
})();
var statearr_24481_24543 = state_24471__$1;
(statearr_24481_24543[(2)] = null);

(statearr_24481_24543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (6))){
var inst_24436 = (state_24471[(7)]);
var state_24471__$1 = state_24471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24471__$1,(11),inst_24436);
} else {
if((state_val_24472 === (17))){
var inst_24457 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
if(cljs.core.truth_(inst_24457)){
var statearr_24482_24544 = state_24471__$1;
(statearr_24482_24544[(1)] = (19));

} else {
var statearr_24483_24545 = state_24471__$1;
(statearr_24483_24545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (3))){
var inst_24469 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24471__$1,inst_24469);
} else {
if((state_val_24472 === (12))){
var inst_24446 = (state_24471[(10)]);
var state_24471__$1 = state_24471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24471__$1,(14),inst_24446);
} else {
if((state_val_24472 === (2))){
var state_24471__$1 = state_24471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24471__$1,(4),results);
} else {
if((state_val_24472 === (19))){
var state_24471__$1 = state_24471;
var statearr_24484_24546 = state_24471__$1;
(statearr_24484_24546[(2)] = null);

(statearr_24484_24546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (11))){
var inst_24446 = (state_24471[(2)]);
var state_24471__$1 = (function (){var statearr_24485 = state_24471;
(statearr_24485[(10)] = inst_24446);

return statearr_24485;
})();
var statearr_24486_24547 = state_24471__$1;
(statearr_24486_24547[(2)] = null);

(statearr_24486_24547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (9))){
var state_24471__$1 = state_24471;
var statearr_24487_24548 = state_24471__$1;
(statearr_24487_24548[(2)] = null);

(statearr_24487_24548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (5))){
var state_24471__$1 = state_24471;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24488_24549 = state_24471__$1;
(statearr_24488_24549[(1)] = (8));

} else {
var statearr_24489_24550 = state_24471__$1;
(statearr_24489_24550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (14))){
var inst_24449 = (state_24471[(8)]);
var inst_24449__$1 = (state_24471[(2)]);
var inst_24450 = (inst_24449__$1 == null);
var inst_24451 = cljs.core.not.call(null,inst_24450);
var state_24471__$1 = (function (){var statearr_24490 = state_24471;
(statearr_24490[(8)] = inst_24449__$1);

return statearr_24490;
})();
if(inst_24451){
var statearr_24491_24551 = state_24471__$1;
(statearr_24491_24551[(1)] = (15));

} else {
var statearr_24492_24552 = state_24471__$1;
(statearr_24492_24552[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (16))){
var state_24471__$1 = state_24471;
var statearr_24493_24553 = state_24471__$1;
(statearr_24493_24553[(2)] = false);

(statearr_24493_24553[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (10))){
var inst_24443 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
var statearr_24494_24554 = state_24471__$1;
(statearr_24494_24554[(2)] = inst_24443);

(statearr_24494_24554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (18))){
var inst_24454 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
var statearr_24495_24555 = state_24471__$1;
(statearr_24495_24555[(2)] = inst_24454);

(statearr_24495_24555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (8))){
var inst_24440 = cljs.core.async.close_BANG_.call(null,to);
var state_24471__$1 = state_24471;
var statearr_24496_24556 = state_24471__$1;
(statearr_24496_24556[(2)] = inst_24440);

(statearr_24496_24556[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0 = (function (){
var statearr_24497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__);

(statearr_24497[(1)] = (1));

return statearr_24497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1 = (function (state_24471){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24498){if((e24498 instanceof Object)){
var ex__24075__auto__ = e24498;
var statearr_24499_24557 = state_24471;
(statearr_24499_24557[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24558 = state_24471;
state_24471 = G__24558;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__ = function(state_24471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1.call(this,state_24471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_24500 = f__24167__auto__.call(null);
(statearr_24500[(6)] = c__24166__auto__);

return statearr_24500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));

return c__24166__auto__;
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
var G__24560 = arguments.length;
switch (G__24560) {
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
var G__24563 = arguments.length;
switch (G__24563) {
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
var G__24566 = arguments.length;
switch (G__24566) {
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
var c__24166__auto___24615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_24592){
var state_val_24593 = (state_24592[(1)]);
if((state_val_24593 === (7))){
var inst_24588 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
var statearr_24594_24616 = state_24592__$1;
(statearr_24594_24616[(2)] = inst_24588);

(statearr_24594_24616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (1))){
var state_24592__$1 = state_24592;
var statearr_24595_24617 = state_24592__$1;
(statearr_24595_24617[(2)] = null);

(statearr_24595_24617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (4))){
var inst_24569 = (state_24592[(7)]);
var inst_24569__$1 = (state_24592[(2)]);
var inst_24570 = (inst_24569__$1 == null);
var state_24592__$1 = (function (){var statearr_24596 = state_24592;
(statearr_24596[(7)] = inst_24569__$1);

return statearr_24596;
})();
if(cljs.core.truth_(inst_24570)){
var statearr_24597_24618 = state_24592__$1;
(statearr_24597_24618[(1)] = (5));

} else {
var statearr_24598_24619 = state_24592__$1;
(statearr_24598_24619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (13))){
var state_24592__$1 = state_24592;
var statearr_24599_24620 = state_24592__$1;
(statearr_24599_24620[(2)] = null);

(statearr_24599_24620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (6))){
var inst_24569 = (state_24592[(7)]);
var inst_24575 = p.call(null,inst_24569);
var state_24592__$1 = state_24592;
if(cljs.core.truth_(inst_24575)){
var statearr_24600_24621 = state_24592__$1;
(statearr_24600_24621[(1)] = (9));

} else {
var statearr_24601_24622 = state_24592__$1;
(statearr_24601_24622[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (3))){
var inst_24590 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24592__$1,inst_24590);
} else {
if((state_val_24593 === (12))){
var state_24592__$1 = state_24592;
var statearr_24602_24623 = state_24592__$1;
(statearr_24602_24623[(2)] = null);

(statearr_24602_24623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (2))){
var state_24592__$1 = state_24592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24592__$1,(4),ch);
} else {
if((state_val_24593 === (11))){
var inst_24569 = (state_24592[(7)]);
var inst_24579 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24592__$1,(8),inst_24579,inst_24569);
} else {
if((state_val_24593 === (9))){
var state_24592__$1 = state_24592;
var statearr_24603_24624 = state_24592__$1;
(statearr_24603_24624[(2)] = tc);

(statearr_24603_24624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (5))){
var inst_24572 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24573 = cljs.core.async.close_BANG_.call(null,fc);
var state_24592__$1 = (function (){var statearr_24604 = state_24592;
(statearr_24604[(8)] = inst_24572);

return statearr_24604;
})();
var statearr_24605_24625 = state_24592__$1;
(statearr_24605_24625[(2)] = inst_24573);

(statearr_24605_24625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (14))){
var inst_24586 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
var statearr_24606_24626 = state_24592__$1;
(statearr_24606_24626[(2)] = inst_24586);

(statearr_24606_24626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (10))){
var state_24592__$1 = state_24592;
var statearr_24607_24627 = state_24592__$1;
(statearr_24607_24627[(2)] = fc);

(statearr_24607_24627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24593 === (8))){
var inst_24581 = (state_24592[(2)]);
var state_24592__$1 = state_24592;
if(cljs.core.truth_(inst_24581)){
var statearr_24608_24628 = state_24592__$1;
(statearr_24608_24628[(1)] = (12));

} else {
var statearr_24609_24629 = state_24592__$1;
(statearr_24609_24629[(1)] = (13));

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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_24610 = [null,null,null,null,null,null,null,null,null];
(statearr_24610[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_24610[(1)] = (1));

return statearr_24610;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_24592){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24611){if((e24611 instanceof Object)){
var ex__24075__auto__ = e24611;
var statearr_24612_24630 = state_24592;
(statearr_24612_24630[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24631 = state_24592;
state_24592 = G__24631;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_24592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_24592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_24613 = f__24167__auto__.call(null);
(statearr_24613[(6)] = c__24166__auto___24615);

return statearr_24613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
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
var c__24166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_24652){
var state_val_24653 = (state_24652[(1)]);
if((state_val_24653 === (7))){
var inst_24648 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
var statearr_24654_24672 = state_24652__$1;
(statearr_24654_24672[(2)] = inst_24648);

(statearr_24654_24672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (1))){
var inst_24632 = init;
var state_24652__$1 = (function (){var statearr_24655 = state_24652;
(statearr_24655[(7)] = inst_24632);

return statearr_24655;
})();
var statearr_24656_24673 = state_24652__$1;
(statearr_24656_24673[(2)] = null);

(statearr_24656_24673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (4))){
var inst_24635 = (state_24652[(8)]);
var inst_24635__$1 = (state_24652[(2)]);
var inst_24636 = (inst_24635__$1 == null);
var state_24652__$1 = (function (){var statearr_24657 = state_24652;
(statearr_24657[(8)] = inst_24635__$1);

return statearr_24657;
})();
if(cljs.core.truth_(inst_24636)){
var statearr_24658_24674 = state_24652__$1;
(statearr_24658_24674[(1)] = (5));

} else {
var statearr_24659_24675 = state_24652__$1;
(statearr_24659_24675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (6))){
var inst_24632 = (state_24652[(7)]);
var inst_24639 = (state_24652[(9)]);
var inst_24635 = (state_24652[(8)]);
var inst_24639__$1 = f.call(null,inst_24632,inst_24635);
var inst_24640 = cljs.core.reduced_QMARK_.call(null,inst_24639__$1);
var state_24652__$1 = (function (){var statearr_24660 = state_24652;
(statearr_24660[(9)] = inst_24639__$1);

return statearr_24660;
})();
if(inst_24640){
var statearr_24661_24676 = state_24652__$1;
(statearr_24661_24676[(1)] = (8));

} else {
var statearr_24662_24677 = state_24652__$1;
(statearr_24662_24677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (3))){
var inst_24650 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24652__$1,inst_24650);
} else {
if((state_val_24653 === (2))){
var state_24652__$1 = state_24652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24652__$1,(4),ch);
} else {
if((state_val_24653 === (9))){
var inst_24639 = (state_24652[(9)]);
var inst_24632 = inst_24639;
var state_24652__$1 = (function (){var statearr_24663 = state_24652;
(statearr_24663[(7)] = inst_24632);

return statearr_24663;
})();
var statearr_24664_24678 = state_24652__$1;
(statearr_24664_24678[(2)] = null);

(statearr_24664_24678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (5))){
var inst_24632 = (state_24652[(7)]);
var state_24652__$1 = state_24652;
var statearr_24665_24679 = state_24652__$1;
(statearr_24665_24679[(2)] = inst_24632);

(statearr_24665_24679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (10))){
var inst_24646 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
var statearr_24666_24680 = state_24652__$1;
(statearr_24666_24680[(2)] = inst_24646);

(statearr_24666_24680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24653 === (8))){
var inst_24639 = (state_24652[(9)]);
var inst_24642 = cljs.core.deref.call(null,inst_24639);
var state_24652__$1 = state_24652;
var statearr_24667_24681 = state_24652__$1;
(statearr_24667_24681[(2)] = inst_24642);

(statearr_24667_24681[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__24072__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24072__auto____0 = (function (){
var statearr_24668 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24668[(0)] = cljs$core$async$reduce_$_state_machine__24072__auto__);

(statearr_24668[(1)] = (1));

return statearr_24668;
});
var cljs$core$async$reduce_$_state_machine__24072__auto____1 = (function (state_24652){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24669){if((e24669 instanceof Object)){
var ex__24075__auto__ = e24669;
var statearr_24670_24682 = state_24652;
(statearr_24670_24682[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24683 = state_24652;
state_24652 = G__24683;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24072__auto__ = function(state_24652){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24072__auto____1.call(this,state_24652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24072__auto____0;
cljs$core$async$reduce_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24072__auto____1;
return cljs$core$async$reduce_$_state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_24671 = f__24167__auto__.call(null);
(statearr_24671[(6)] = c__24166__auto__);

return statearr_24671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));

return c__24166__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_24689){
var state_val_24690 = (state_24689[(1)]);
if((state_val_24690 === (1))){
var inst_24684 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24689__$1 = state_24689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24689__$1,(2),inst_24684);
} else {
if((state_val_24690 === (2))){
var inst_24686 = (state_24689[(2)]);
var inst_24687 = f__$1.call(null,inst_24686);
var state_24689__$1 = state_24689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24689__$1,inst_24687);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24072__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24072__auto____0 = (function (){
var statearr_24691 = [null,null,null,null,null,null,null];
(statearr_24691[(0)] = cljs$core$async$transduce_$_state_machine__24072__auto__);

(statearr_24691[(1)] = (1));

return statearr_24691;
});
var cljs$core$async$transduce_$_state_machine__24072__auto____1 = (function (state_24689){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24692){if((e24692 instanceof Object)){
var ex__24075__auto__ = e24692;
var statearr_24693_24695 = state_24689;
(statearr_24693_24695[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24696 = state_24689;
state_24689 = G__24696;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24072__auto__ = function(state_24689){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24072__auto____1.call(this,state_24689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24072__auto____0;
cljs$core$async$transduce_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24072__auto____1;
return cljs$core$async$transduce_$_state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_24694 = f__24167__auto__.call(null);
(statearr_24694[(6)] = c__24166__auto__);

return statearr_24694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));

return c__24166__auto__;
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
var G__24698 = arguments.length;
switch (G__24698) {
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
var c__24166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_24723){
var state_val_24724 = (state_24723[(1)]);
if((state_val_24724 === (7))){
var inst_24705 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
var statearr_24725_24746 = state_24723__$1;
(statearr_24725_24746[(2)] = inst_24705);

(statearr_24725_24746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (1))){
var inst_24699 = cljs.core.seq.call(null,coll);
var inst_24700 = inst_24699;
var state_24723__$1 = (function (){var statearr_24726 = state_24723;
(statearr_24726[(7)] = inst_24700);

return statearr_24726;
})();
var statearr_24727_24747 = state_24723__$1;
(statearr_24727_24747[(2)] = null);

(statearr_24727_24747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (4))){
var inst_24700 = (state_24723[(7)]);
var inst_24703 = cljs.core.first.call(null,inst_24700);
var state_24723__$1 = state_24723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24723__$1,(7),ch,inst_24703);
} else {
if((state_val_24724 === (13))){
var inst_24717 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
var statearr_24728_24748 = state_24723__$1;
(statearr_24728_24748[(2)] = inst_24717);

(statearr_24728_24748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (6))){
var inst_24708 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
if(cljs.core.truth_(inst_24708)){
var statearr_24729_24749 = state_24723__$1;
(statearr_24729_24749[(1)] = (8));

} else {
var statearr_24730_24750 = state_24723__$1;
(statearr_24730_24750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (3))){
var inst_24721 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24723__$1,inst_24721);
} else {
if((state_val_24724 === (12))){
var state_24723__$1 = state_24723;
var statearr_24731_24751 = state_24723__$1;
(statearr_24731_24751[(2)] = null);

(statearr_24731_24751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (2))){
var inst_24700 = (state_24723[(7)]);
var state_24723__$1 = state_24723;
if(cljs.core.truth_(inst_24700)){
var statearr_24732_24752 = state_24723__$1;
(statearr_24732_24752[(1)] = (4));

} else {
var statearr_24733_24753 = state_24723__$1;
(statearr_24733_24753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (11))){
var inst_24714 = cljs.core.async.close_BANG_.call(null,ch);
var state_24723__$1 = state_24723;
var statearr_24734_24754 = state_24723__$1;
(statearr_24734_24754[(2)] = inst_24714);

(statearr_24734_24754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (9))){
var state_24723__$1 = state_24723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24735_24755 = state_24723__$1;
(statearr_24735_24755[(1)] = (11));

} else {
var statearr_24736_24756 = state_24723__$1;
(statearr_24736_24756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (5))){
var inst_24700 = (state_24723[(7)]);
var state_24723__$1 = state_24723;
var statearr_24737_24757 = state_24723__$1;
(statearr_24737_24757[(2)] = inst_24700);

(statearr_24737_24757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (10))){
var inst_24719 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
var statearr_24738_24758 = state_24723__$1;
(statearr_24738_24758[(2)] = inst_24719);

(statearr_24738_24758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (8))){
var inst_24700 = (state_24723[(7)]);
var inst_24710 = cljs.core.next.call(null,inst_24700);
var inst_24700__$1 = inst_24710;
var state_24723__$1 = (function (){var statearr_24739 = state_24723;
(statearr_24739[(7)] = inst_24700__$1);

return statearr_24739;
})();
var statearr_24740_24759 = state_24723__$1;
(statearr_24740_24759[(2)] = null);

(statearr_24740_24759[(1)] = (2));


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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_24741 = [null,null,null,null,null,null,null,null];
(statearr_24741[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_24741[(1)] = (1));

return statearr_24741;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_24723){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24742){if((e24742 instanceof Object)){
var ex__24075__auto__ = e24742;
var statearr_24743_24760 = state_24723;
(statearr_24743_24760[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24761 = state_24723;
state_24723 = G__24761;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_24723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_24723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_24744 = f__24167__auto__.call(null);
(statearr_24744[(6)] = c__24166__auto__);

return statearr_24744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));

return c__24166__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_24762 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_24762.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_24763 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_24763.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_24764 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_24764.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_24765 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_24765.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24766 = (function (ch,cs,meta24767){
this.ch = ch;
this.cs = cs;
this.meta24767 = meta24767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24768,meta24767__$1){
var self__ = this;
var _24768__$1 = this;
return (new cljs.core.async.t_cljs$core$async24766(self__.ch,self__.cs,meta24767__$1));
}));

(cljs.core.async.t_cljs$core$async24766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24768){
var self__ = this;
var _24768__$1 = this;
return self__.meta24767;
}));

(cljs.core.async.t_cljs$core$async24766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24766.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24766.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24766.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24766.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24767","meta24767",-789710009,null)], null);
}));

(cljs.core.async.t_cljs$core$async24766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24766");

(cljs.core.async.t_cljs$core$async24766.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24766.
 */
cljs.core.async.__GT_t_cljs$core$async24766 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24766(ch__$1,cs__$1,meta24767){
return (new cljs.core.async.t_cljs$core$async24766(ch__$1,cs__$1,meta24767));
});

}

return (new cljs.core.async.t_cljs$core$async24766(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24166__auto___24988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_24903){
var state_val_24904 = (state_24903[(1)]);
if((state_val_24904 === (7))){
var inst_24899 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
var statearr_24905_24989 = state_24903__$1;
(statearr_24905_24989[(2)] = inst_24899);

(statearr_24905_24989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (20))){
var inst_24802 = (state_24903[(7)]);
var inst_24814 = cljs.core.first.call(null,inst_24802);
var inst_24815 = cljs.core.nth.call(null,inst_24814,(0),null);
var inst_24816 = cljs.core.nth.call(null,inst_24814,(1),null);
var state_24903__$1 = (function (){var statearr_24906 = state_24903;
(statearr_24906[(8)] = inst_24815);

return statearr_24906;
})();
if(cljs.core.truth_(inst_24816)){
var statearr_24907_24990 = state_24903__$1;
(statearr_24907_24990[(1)] = (22));

} else {
var statearr_24908_24991 = state_24903__$1;
(statearr_24908_24991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (27))){
var inst_24851 = (state_24903[(9)]);
var inst_24844 = (state_24903[(10)]);
var inst_24771 = (state_24903[(11)]);
var inst_24846 = (state_24903[(12)]);
var inst_24851__$1 = cljs.core._nth.call(null,inst_24844,inst_24846);
var inst_24852 = cljs.core.async.put_BANG_.call(null,inst_24851__$1,inst_24771,done);
var state_24903__$1 = (function (){var statearr_24909 = state_24903;
(statearr_24909[(9)] = inst_24851__$1);

return statearr_24909;
})();
if(cljs.core.truth_(inst_24852)){
var statearr_24910_24992 = state_24903__$1;
(statearr_24910_24992[(1)] = (30));

} else {
var statearr_24911_24993 = state_24903__$1;
(statearr_24911_24993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (1))){
var state_24903__$1 = state_24903;
var statearr_24912_24994 = state_24903__$1;
(statearr_24912_24994[(2)] = null);

(statearr_24912_24994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (24))){
var inst_24802 = (state_24903[(7)]);
var inst_24821 = (state_24903[(2)]);
var inst_24822 = cljs.core.next.call(null,inst_24802);
var inst_24780 = inst_24822;
var inst_24781 = null;
var inst_24782 = (0);
var inst_24783 = (0);
var state_24903__$1 = (function (){var statearr_24913 = state_24903;
(statearr_24913[(13)] = inst_24782);

(statearr_24913[(14)] = inst_24783);

(statearr_24913[(15)] = inst_24780);

(statearr_24913[(16)] = inst_24821);

(statearr_24913[(17)] = inst_24781);

return statearr_24913;
})();
var statearr_24914_24995 = state_24903__$1;
(statearr_24914_24995[(2)] = null);

(statearr_24914_24995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (39))){
var state_24903__$1 = state_24903;
var statearr_24918_24996 = state_24903__$1;
(statearr_24918_24996[(2)] = null);

(statearr_24918_24996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (4))){
var inst_24771 = (state_24903[(11)]);
var inst_24771__$1 = (state_24903[(2)]);
var inst_24772 = (inst_24771__$1 == null);
var state_24903__$1 = (function (){var statearr_24919 = state_24903;
(statearr_24919[(11)] = inst_24771__$1);

return statearr_24919;
})();
if(cljs.core.truth_(inst_24772)){
var statearr_24920_24997 = state_24903__$1;
(statearr_24920_24997[(1)] = (5));

} else {
var statearr_24921_24998 = state_24903__$1;
(statearr_24921_24998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (15))){
var inst_24782 = (state_24903[(13)]);
var inst_24783 = (state_24903[(14)]);
var inst_24780 = (state_24903[(15)]);
var inst_24781 = (state_24903[(17)]);
var inst_24798 = (state_24903[(2)]);
var inst_24799 = (inst_24783 + (1));
var tmp24915 = inst_24782;
var tmp24916 = inst_24780;
var tmp24917 = inst_24781;
var inst_24780__$1 = tmp24916;
var inst_24781__$1 = tmp24917;
var inst_24782__$1 = tmp24915;
var inst_24783__$1 = inst_24799;
var state_24903__$1 = (function (){var statearr_24922 = state_24903;
(statearr_24922[(13)] = inst_24782__$1);

(statearr_24922[(14)] = inst_24783__$1);

(statearr_24922[(15)] = inst_24780__$1);

(statearr_24922[(17)] = inst_24781__$1);

(statearr_24922[(18)] = inst_24798);

return statearr_24922;
})();
var statearr_24923_24999 = state_24903__$1;
(statearr_24923_24999[(2)] = null);

(statearr_24923_24999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (21))){
var inst_24825 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
var statearr_24927_25000 = state_24903__$1;
(statearr_24927_25000[(2)] = inst_24825);

(statearr_24927_25000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (31))){
var inst_24851 = (state_24903[(9)]);
var inst_24855 = done.call(null,null);
var inst_24856 = cljs.core.async.untap_STAR_.call(null,m,inst_24851);
var state_24903__$1 = (function (){var statearr_24928 = state_24903;
(statearr_24928[(19)] = inst_24855);

return statearr_24928;
})();
var statearr_24929_25001 = state_24903__$1;
(statearr_24929_25001[(2)] = inst_24856);

(statearr_24929_25001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (32))){
var inst_24844 = (state_24903[(10)]);
var inst_24845 = (state_24903[(20)]);
var inst_24846 = (state_24903[(12)]);
var inst_24843 = (state_24903[(21)]);
var inst_24858 = (state_24903[(2)]);
var inst_24859 = (inst_24846 + (1));
var tmp24924 = inst_24844;
var tmp24925 = inst_24845;
var tmp24926 = inst_24843;
var inst_24843__$1 = tmp24926;
var inst_24844__$1 = tmp24924;
var inst_24845__$1 = tmp24925;
var inst_24846__$1 = inst_24859;
var state_24903__$1 = (function (){var statearr_24930 = state_24903;
(statearr_24930[(22)] = inst_24858);

(statearr_24930[(10)] = inst_24844__$1);

(statearr_24930[(20)] = inst_24845__$1);

(statearr_24930[(12)] = inst_24846__$1);

(statearr_24930[(21)] = inst_24843__$1);

return statearr_24930;
})();
var statearr_24931_25002 = state_24903__$1;
(statearr_24931_25002[(2)] = null);

(statearr_24931_25002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (40))){
var inst_24871 = (state_24903[(23)]);
var inst_24875 = done.call(null,null);
var inst_24876 = cljs.core.async.untap_STAR_.call(null,m,inst_24871);
var state_24903__$1 = (function (){var statearr_24932 = state_24903;
(statearr_24932[(24)] = inst_24875);

return statearr_24932;
})();
var statearr_24933_25003 = state_24903__$1;
(statearr_24933_25003[(2)] = inst_24876);

(statearr_24933_25003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (33))){
var inst_24862 = (state_24903[(25)]);
var inst_24864 = cljs.core.chunked_seq_QMARK_.call(null,inst_24862);
var state_24903__$1 = state_24903;
if(inst_24864){
var statearr_24934_25004 = state_24903__$1;
(statearr_24934_25004[(1)] = (36));

} else {
var statearr_24935_25005 = state_24903__$1;
(statearr_24935_25005[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (13))){
var inst_24792 = (state_24903[(26)]);
var inst_24795 = cljs.core.async.close_BANG_.call(null,inst_24792);
var state_24903__$1 = state_24903;
var statearr_24936_25006 = state_24903__$1;
(statearr_24936_25006[(2)] = inst_24795);

(statearr_24936_25006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (22))){
var inst_24815 = (state_24903[(8)]);
var inst_24818 = cljs.core.async.close_BANG_.call(null,inst_24815);
var state_24903__$1 = state_24903;
var statearr_24937_25007 = state_24903__$1;
(statearr_24937_25007[(2)] = inst_24818);

(statearr_24937_25007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (36))){
var inst_24862 = (state_24903[(25)]);
var inst_24866 = cljs.core.chunk_first.call(null,inst_24862);
var inst_24867 = cljs.core.chunk_rest.call(null,inst_24862);
var inst_24868 = cljs.core.count.call(null,inst_24866);
var inst_24843 = inst_24867;
var inst_24844 = inst_24866;
var inst_24845 = inst_24868;
var inst_24846 = (0);
var state_24903__$1 = (function (){var statearr_24938 = state_24903;
(statearr_24938[(10)] = inst_24844);

(statearr_24938[(20)] = inst_24845);

(statearr_24938[(12)] = inst_24846);

(statearr_24938[(21)] = inst_24843);

return statearr_24938;
})();
var statearr_24939_25008 = state_24903__$1;
(statearr_24939_25008[(2)] = null);

(statearr_24939_25008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (41))){
var inst_24862 = (state_24903[(25)]);
var inst_24878 = (state_24903[(2)]);
var inst_24879 = cljs.core.next.call(null,inst_24862);
var inst_24843 = inst_24879;
var inst_24844 = null;
var inst_24845 = (0);
var inst_24846 = (0);
var state_24903__$1 = (function (){var statearr_24940 = state_24903;
(statearr_24940[(10)] = inst_24844);

(statearr_24940[(27)] = inst_24878);

(statearr_24940[(20)] = inst_24845);

(statearr_24940[(12)] = inst_24846);

(statearr_24940[(21)] = inst_24843);

return statearr_24940;
})();
var statearr_24941_25009 = state_24903__$1;
(statearr_24941_25009[(2)] = null);

(statearr_24941_25009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (43))){
var state_24903__$1 = state_24903;
var statearr_24942_25010 = state_24903__$1;
(statearr_24942_25010[(2)] = null);

(statearr_24942_25010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (29))){
var inst_24887 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
var statearr_24943_25011 = state_24903__$1;
(statearr_24943_25011[(2)] = inst_24887);

(statearr_24943_25011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (44))){
var inst_24896 = (state_24903[(2)]);
var state_24903__$1 = (function (){var statearr_24944 = state_24903;
(statearr_24944[(28)] = inst_24896);

return statearr_24944;
})();
var statearr_24945_25012 = state_24903__$1;
(statearr_24945_25012[(2)] = null);

(statearr_24945_25012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (6))){
var inst_24835 = (state_24903[(29)]);
var inst_24834 = cljs.core.deref.call(null,cs);
var inst_24835__$1 = cljs.core.keys.call(null,inst_24834);
var inst_24836 = cljs.core.count.call(null,inst_24835__$1);
var inst_24837 = cljs.core.reset_BANG_.call(null,dctr,inst_24836);
var inst_24842 = cljs.core.seq.call(null,inst_24835__$1);
var inst_24843 = inst_24842;
var inst_24844 = null;
var inst_24845 = (0);
var inst_24846 = (0);
var state_24903__$1 = (function (){var statearr_24946 = state_24903;
(statearr_24946[(29)] = inst_24835__$1);

(statearr_24946[(10)] = inst_24844);

(statearr_24946[(20)] = inst_24845);

(statearr_24946[(12)] = inst_24846);

(statearr_24946[(30)] = inst_24837);

(statearr_24946[(21)] = inst_24843);

return statearr_24946;
})();
var statearr_24947_25013 = state_24903__$1;
(statearr_24947_25013[(2)] = null);

(statearr_24947_25013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (28))){
var inst_24843 = (state_24903[(21)]);
var inst_24862 = (state_24903[(25)]);
var inst_24862__$1 = cljs.core.seq.call(null,inst_24843);
var state_24903__$1 = (function (){var statearr_24948 = state_24903;
(statearr_24948[(25)] = inst_24862__$1);

return statearr_24948;
})();
if(inst_24862__$1){
var statearr_24949_25014 = state_24903__$1;
(statearr_24949_25014[(1)] = (33));

} else {
var statearr_24950_25015 = state_24903__$1;
(statearr_24950_25015[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (25))){
var inst_24845 = (state_24903[(20)]);
var inst_24846 = (state_24903[(12)]);
var inst_24848 = (inst_24846 < inst_24845);
var inst_24849 = inst_24848;
var state_24903__$1 = state_24903;
if(cljs.core.truth_(inst_24849)){
var statearr_24951_25016 = state_24903__$1;
(statearr_24951_25016[(1)] = (27));

} else {
var statearr_24952_25017 = state_24903__$1;
(statearr_24952_25017[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (34))){
var state_24903__$1 = state_24903;
var statearr_24953_25018 = state_24903__$1;
(statearr_24953_25018[(2)] = null);

(statearr_24953_25018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (17))){
var state_24903__$1 = state_24903;
var statearr_24954_25019 = state_24903__$1;
(statearr_24954_25019[(2)] = null);

(statearr_24954_25019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (3))){
var inst_24901 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24903__$1,inst_24901);
} else {
if((state_val_24904 === (12))){
var inst_24830 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
var statearr_24955_25020 = state_24903__$1;
(statearr_24955_25020[(2)] = inst_24830);

(statearr_24955_25020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (2))){
var state_24903__$1 = state_24903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24903__$1,(4),ch);
} else {
if((state_val_24904 === (23))){
var state_24903__$1 = state_24903;
var statearr_24956_25021 = state_24903__$1;
(statearr_24956_25021[(2)] = null);

(statearr_24956_25021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (35))){
var inst_24885 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
var statearr_24957_25022 = state_24903__$1;
(statearr_24957_25022[(2)] = inst_24885);

(statearr_24957_25022[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (19))){
var inst_24802 = (state_24903[(7)]);
var inst_24806 = cljs.core.chunk_first.call(null,inst_24802);
var inst_24807 = cljs.core.chunk_rest.call(null,inst_24802);
var inst_24808 = cljs.core.count.call(null,inst_24806);
var inst_24780 = inst_24807;
var inst_24781 = inst_24806;
var inst_24782 = inst_24808;
var inst_24783 = (0);
var state_24903__$1 = (function (){var statearr_24958 = state_24903;
(statearr_24958[(13)] = inst_24782);

(statearr_24958[(14)] = inst_24783);

(statearr_24958[(15)] = inst_24780);

(statearr_24958[(17)] = inst_24781);

return statearr_24958;
})();
var statearr_24959_25023 = state_24903__$1;
(statearr_24959_25023[(2)] = null);

(statearr_24959_25023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (11))){
var inst_24780 = (state_24903[(15)]);
var inst_24802 = (state_24903[(7)]);
var inst_24802__$1 = cljs.core.seq.call(null,inst_24780);
var state_24903__$1 = (function (){var statearr_24960 = state_24903;
(statearr_24960[(7)] = inst_24802__$1);

return statearr_24960;
})();
if(inst_24802__$1){
var statearr_24961_25024 = state_24903__$1;
(statearr_24961_25024[(1)] = (16));

} else {
var statearr_24962_25025 = state_24903__$1;
(statearr_24962_25025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (9))){
var inst_24832 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
var statearr_24963_25026 = state_24903__$1;
(statearr_24963_25026[(2)] = inst_24832);

(statearr_24963_25026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (5))){
var inst_24778 = cljs.core.deref.call(null,cs);
var inst_24779 = cljs.core.seq.call(null,inst_24778);
var inst_24780 = inst_24779;
var inst_24781 = null;
var inst_24782 = (0);
var inst_24783 = (0);
var state_24903__$1 = (function (){var statearr_24964 = state_24903;
(statearr_24964[(13)] = inst_24782);

(statearr_24964[(14)] = inst_24783);

(statearr_24964[(15)] = inst_24780);

(statearr_24964[(17)] = inst_24781);

return statearr_24964;
})();
var statearr_24965_25027 = state_24903__$1;
(statearr_24965_25027[(2)] = null);

(statearr_24965_25027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (14))){
var state_24903__$1 = state_24903;
var statearr_24966_25028 = state_24903__$1;
(statearr_24966_25028[(2)] = null);

(statearr_24966_25028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (45))){
var inst_24893 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
var statearr_24967_25029 = state_24903__$1;
(statearr_24967_25029[(2)] = inst_24893);

(statearr_24967_25029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (26))){
var inst_24835 = (state_24903[(29)]);
var inst_24889 = (state_24903[(2)]);
var inst_24890 = cljs.core.seq.call(null,inst_24835);
var state_24903__$1 = (function (){var statearr_24968 = state_24903;
(statearr_24968[(31)] = inst_24889);

return statearr_24968;
})();
if(inst_24890){
var statearr_24969_25030 = state_24903__$1;
(statearr_24969_25030[(1)] = (42));

} else {
var statearr_24970_25031 = state_24903__$1;
(statearr_24970_25031[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (16))){
var inst_24802 = (state_24903[(7)]);
var inst_24804 = cljs.core.chunked_seq_QMARK_.call(null,inst_24802);
var state_24903__$1 = state_24903;
if(inst_24804){
var statearr_24971_25032 = state_24903__$1;
(statearr_24971_25032[(1)] = (19));

} else {
var statearr_24972_25033 = state_24903__$1;
(statearr_24972_25033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (38))){
var inst_24882 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
var statearr_24973_25034 = state_24903__$1;
(statearr_24973_25034[(2)] = inst_24882);

(statearr_24973_25034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (30))){
var state_24903__$1 = state_24903;
var statearr_24974_25035 = state_24903__$1;
(statearr_24974_25035[(2)] = null);

(statearr_24974_25035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (10))){
var inst_24783 = (state_24903[(14)]);
var inst_24781 = (state_24903[(17)]);
var inst_24791 = cljs.core._nth.call(null,inst_24781,inst_24783);
var inst_24792 = cljs.core.nth.call(null,inst_24791,(0),null);
var inst_24793 = cljs.core.nth.call(null,inst_24791,(1),null);
var state_24903__$1 = (function (){var statearr_24975 = state_24903;
(statearr_24975[(26)] = inst_24792);

return statearr_24975;
})();
if(cljs.core.truth_(inst_24793)){
var statearr_24976_25036 = state_24903__$1;
(statearr_24976_25036[(1)] = (13));

} else {
var statearr_24977_25037 = state_24903__$1;
(statearr_24977_25037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (18))){
var inst_24828 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
var statearr_24978_25038 = state_24903__$1;
(statearr_24978_25038[(2)] = inst_24828);

(statearr_24978_25038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (42))){
var state_24903__$1 = state_24903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24903__$1,(45),dchan);
} else {
if((state_val_24904 === (37))){
var inst_24771 = (state_24903[(11)]);
var inst_24871 = (state_24903[(23)]);
var inst_24862 = (state_24903[(25)]);
var inst_24871__$1 = cljs.core.first.call(null,inst_24862);
var inst_24872 = cljs.core.async.put_BANG_.call(null,inst_24871__$1,inst_24771,done);
var state_24903__$1 = (function (){var statearr_24979 = state_24903;
(statearr_24979[(23)] = inst_24871__$1);

return statearr_24979;
})();
if(cljs.core.truth_(inst_24872)){
var statearr_24980_25039 = state_24903__$1;
(statearr_24980_25039[(1)] = (39));

} else {
var statearr_24981_25040 = state_24903__$1;
(statearr_24981_25040[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (8))){
var inst_24782 = (state_24903[(13)]);
var inst_24783 = (state_24903[(14)]);
var inst_24785 = (inst_24783 < inst_24782);
var inst_24786 = inst_24785;
var state_24903__$1 = state_24903;
if(cljs.core.truth_(inst_24786)){
var statearr_24982_25041 = state_24903__$1;
(statearr_24982_25041[(1)] = (10));

} else {
var statearr_24983_25042 = state_24903__$1;
(statearr_24983_25042[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__24072__auto__ = null;
var cljs$core$async$mult_$_state_machine__24072__auto____0 = (function (){
var statearr_24984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24984[(0)] = cljs$core$async$mult_$_state_machine__24072__auto__);

(statearr_24984[(1)] = (1));

return statearr_24984;
});
var cljs$core$async$mult_$_state_machine__24072__auto____1 = (function (state_24903){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_24903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e24985){if((e24985 instanceof Object)){
var ex__24075__auto__ = e24985;
var statearr_24986_25043 = state_24903;
(statearr_24986_25043[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25044 = state_24903;
state_24903 = G__25044;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24072__auto__ = function(state_24903){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24072__auto____1.call(this,state_24903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24072__auto____0;
cljs$core$async$mult_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24072__auto____1;
return cljs$core$async$mult_$_state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_24987 = f__24167__auto__.call(null);
(statearr_24987[(6)] = c__24166__auto___24988);

return statearr_24987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
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
var G__25046 = arguments.length;
switch (G__25046) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_25048 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_25048.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25049 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_25049.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25050 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25050.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25051 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_25051.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25052 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25052.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25062 = arguments.length;
var i__4772__auto___25063 = (0);
while(true){
if((i__4772__auto___25063 < len__4771__auto___25062)){
args__4777__auto__.push((arguments[i__4772__auto___25063]));

var G__25064 = (i__4772__auto___25063 + (1));
i__4772__auto___25063 = G__25064;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25057){
var map__25058 = p__25057;
var map__25058__$1 = cljs.core.__destructure_map.call(null,map__25058);
var opts = map__25058__$1;
var statearr_25059_25065 = state;
(statearr_25059_25065[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25060_25066 = state;
(statearr_25060_25066[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25061_25067 = state;
(statearr_25061_25067[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25053){
var G__25054 = cljs.core.first.call(null,seq25053);
var seq25053__$1 = cljs.core.next.call(null,seq25053);
var G__25055 = cljs.core.first.call(null,seq25053__$1);
var seq25053__$2 = cljs.core.next.call(null,seq25053__$1);
var G__25056 = cljs.core.first.call(null,seq25053__$2);
var seq25053__$3 = cljs.core.next.call(null,seq25053__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25054,G__25055,G__25056,seq25053__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25068 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25069){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25069 = meta25069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25070,meta25069__$1){
var self__ = this;
var _25070__$1 = this;
return (new cljs.core.async.t_cljs$core$async25068(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25069__$1));
}));

(cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25070){
var self__ = this;
var _25070__$1 = this;
return self__.meta25069;
}));

(cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25068.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25069","meta25069",-1917869082,null)], null);
}));

(cljs.core.async.t_cljs$core$async25068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25068");

(cljs.core.async.t_cljs$core$async25068.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25068.
 */
cljs.core.async.__GT_t_cljs$core$async25068 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25068(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25069){
return (new cljs.core.async.t_cljs$core$async25068(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25069));
});

}

return (new cljs.core.async.t_cljs$core$async25068(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24166__auto___25167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_25132){
var state_val_25133 = (state_25132[(1)]);
if((state_val_25133 === (7))){
var inst_25128 = (state_25132[(2)]);
var state_25132__$1 = state_25132;
var statearr_25134_25168 = state_25132__$1;
(statearr_25134_25168[(2)] = inst_25128);

(statearr_25134_25168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (20))){
var inst_25122 = (state_25132[(2)]);
var state_25132__$1 = state_25132;
var statearr_25135_25169 = state_25132__$1;
(statearr_25135_25169[(2)] = inst_25122);

(statearr_25135_25169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (1))){
var inst_25074 = calc_state.call(null);
var inst_25075 = cljs.core.__destructure_map.call(null,inst_25074);
var inst_25076 = cljs.core.get.call(null,inst_25075,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25077 = cljs.core.get.call(null,inst_25075,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25078 = cljs.core.get.call(null,inst_25075,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25079 = inst_25074;
var state_25132__$1 = (function (){var statearr_25136 = state_25132;
(statearr_25136[(7)] = inst_25076);

(statearr_25136[(8)] = inst_25079);

(statearr_25136[(9)] = inst_25077);

(statearr_25136[(10)] = inst_25078);

return statearr_25136;
})();
var statearr_25137_25170 = state_25132__$1;
(statearr_25137_25170[(2)] = null);

(statearr_25137_25170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (4))){
var inst_25092 = (state_25132[(11)]);
var inst_25091 = (state_25132[(12)]);
var inst_25090 = (state_25132[(2)]);
var inst_25091__$1 = cljs.core.nth.call(null,inst_25090,(0),null);
var inst_25092__$1 = cljs.core.nth.call(null,inst_25090,(1),null);
var inst_25093 = (inst_25091__$1 == null);
var inst_25094 = cljs.core._EQ_.call(null,inst_25092__$1,change);
var inst_25095 = ((inst_25093) || (inst_25094));
var state_25132__$1 = (function (){var statearr_25138 = state_25132;
(statearr_25138[(11)] = inst_25092__$1);

(statearr_25138[(12)] = inst_25091__$1);

return statearr_25138;
})();
if(cljs.core.truth_(inst_25095)){
var statearr_25139_25171 = state_25132__$1;
(statearr_25139_25171[(1)] = (5));

} else {
var statearr_25140_25172 = state_25132__$1;
(statearr_25140_25172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (15))){
var inst_25082 = (state_25132[(13)]);
var inst_25079 = inst_25082;
var state_25132__$1 = (function (){var statearr_25141 = state_25132;
(statearr_25141[(8)] = inst_25079);

return statearr_25141;
})();
var statearr_25142_25173 = state_25132__$1;
(statearr_25142_25173[(2)] = null);

(statearr_25142_25173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (13))){
var inst_25114 = (state_25132[(2)]);
var state_25132__$1 = state_25132;
if(cljs.core.truth_(inst_25114)){
var statearr_25143_25174 = state_25132__$1;
(statearr_25143_25174[(1)] = (14));

} else {
var statearr_25144_25175 = state_25132__$1;
(statearr_25144_25175[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (6))){
var inst_25092 = (state_25132[(11)]);
var inst_25106 = (state_25132[(14)]);
var inst_25083 = (state_25132[(15)]);
var inst_25106__$1 = inst_25083.call(null,inst_25092);
var state_25132__$1 = (function (){var statearr_25145 = state_25132;
(statearr_25145[(14)] = inst_25106__$1);

return statearr_25145;
})();
if(cljs.core.truth_(inst_25106__$1)){
var statearr_25146_25176 = state_25132__$1;
(statearr_25146_25176[(1)] = (11));

} else {
var statearr_25147_25177 = state_25132__$1;
(statearr_25147_25177[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (17))){
var inst_25117 = (state_25132[(2)]);
var state_25132__$1 = state_25132;
if(cljs.core.truth_(inst_25117)){
var statearr_25148_25178 = state_25132__$1;
(statearr_25148_25178[(1)] = (18));

} else {
var statearr_25149_25179 = state_25132__$1;
(statearr_25149_25179[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (3))){
var inst_25130 = (state_25132[(2)]);
var state_25132__$1 = state_25132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25132__$1,inst_25130);
} else {
if((state_val_25133 === (12))){
var inst_25092 = (state_25132[(11)]);
var inst_25084 = (state_25132[(16)]);
var inst_25083 = (state_25132[(15)]);
var inst_25109 = cljs.core.empty_QMARK_.call(null,inst_25083);
var inst_25110 = inst_25084.call(null,inst_25092);
var inst_25111 = cljs.core.not.call(null,inst_25110);
var inst_25112 = ((inst_25109) && (inst_25111));
var state_25132__$1 = state_25132;
var statearr_25150_25180 = state_25132__$1;
(statearr_25150_25180[(2)] = inst_25112);

(statearr_25150_25180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (2))){
var inst_25079 = (state_25132[(8)]);
var inst_25082 = (state_25132[(13)]);
var inst_25082__$1 = cljs.core.__destructure_map.call(null,inst_25079);
var inst_25083 = cljs.core.get.call(null,inst_25082__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25084 = cljs.core.get.call(null,inst_25082__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25085 = cljs.core.get.call(null,inst_25082__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25132__$1 = (function (){var statearr_25151 = state_25132;
(statearr_25151[(16)] = inst_25084);

(statearr_25151[(15)] = inst_25083);

(statearr_25151[(13)] = inst_25082__$1);

return statearr_25151;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25132__$1,(4),inst_25085);
} else {
if((state_val_25133 === (19))){
var state_25132__$1 = state_25132;
var statearr_25152_25181 = state_25132__$1;
(statearr_25152_25181[(2)] = null);

(statearr_25152_25181[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (11))){
var inst_25106 = (state_25132[(14)]);
var state_25132__$1 = state_25132;
var statearr_25153_25182 = state_25132__$1;
(statearr_25153_25182[(2)] = inst_25106);

(statearr_25153_25182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (9))){
var state_25132__$1 = state_25132;
var statearr_25154_25183 = state_25132__$1;
(statearr_25154_25183[(2)] = null);

(statearr_25154_25183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (5))){
var inst_25091 = (state_25132[(12)]);
var inst_25097 = (inst_25091 == null);
var state_25132__$1 = state_25132;
if(cljs.core.truth_(inst_25097)){
var statearr_25155_25184 = state_25132__$1;
(statearr_25155_25184[(1)] = (8));

} else {
var statearr_25156_25185 = state_25132__$1;
(statearr_25156_25185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (14))){
var inst_25091 = (state_25132[(12)]);
var state_25132__$1 = state_25132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25132__$1,(17),out,inst_25091);
} else {
if((state_val_25133 === (16))){
var inst_25126 = (state_25132[(2)]);
var state_25132__$1 = state_25132;
var statearr_25157_25186 = state_25132__$1;
(statearr_25157_25186[(2)] = inst_25126);

(statearr_25157_25186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (10))){
var inst_25102 = (state_25132[(2)]);
var inst_25103 = calc_state.call(null);
var inst_25079 = inst_25103;
var state_25132__$1 = (function (){var statearr_25158 = state_25132;
(statearr_25158[(8)] = inst_25079);

(statearr_25158[(17)] = inst_25102);

return statearr_25158;
})();
var statearr_25159_25187 = state_25132__$1;
(statearr_25159_25187[(2)] = null);

(statearr_25159_25187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (18))){
var inst_25082 = (state_25132[(13)]);
var inst_25079 = inst_25082;
var state_25132__$1 = (function (){var statearr_25160 = state_25132;
(statearr_25160[(8)] = inst_25079);

return statearr_25160;
})();
var statearr_25161_25188 = state_25132__$1;
(statearr_25161_25188[(2)] = null);

(statearr_25161_25188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (8))){
var inst_25092 = (state_25132[(11)]);
var inst_25099 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25092);
var state_25132__$1 = state_25132;
var statearr_25162_25189 = state_25132__$1;
(statearr_25162_25189[(2)] = inst_25099);

(statearr_25162_25189[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__24072__auto__ = null;
var cljs$core$async$mix_$_state_machine__24072__auto____0 = (function (){
var statearr_25163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25163[(0)] = cljs$core$async$mix_$_state_machine__24072__auto__);

(statearr_25163[(1)] = (1));

return statearr_25163;
});
var cljs$core$async$mix_$_state_machine__24072__auto____1 = (function (state_25132){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_25132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e25164){if((e25164 instanceof Object)){
var ex__24075__auto__ = e25164;
var statearr_25165_25190 = state_25132;
(statearr_25165_25190[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25191 = state_25132;
state_25132 = G__25191;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24072__auto__ = function(state_25132){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24072__auto____1.call(this,state_25132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24072__auto____0;
cljs$core$async$mix_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24072__auto____1;
return cljs$core$async$mix_$_state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_25166 = f__24167__auto__.call(null);
(statearr_25166[(6)] = c__24166__auto___25167);

return statearr_25166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_25194 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_25194.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25195 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_25195.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25196 = (function() {
var G__25197 = null;
var G__25197__1 = (function (p){
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
var G__25197__2 = (function (p,v){
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
G__25197 = function(p,v){
switch(arguments.length){
case 1:
return G__25197__1.call(this,p);
case 2:
return G__25197__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25197.cljs$core$IFn$_invoke$arity$1 = G__25197__1;
G__25197.cljs$core$IFn$_invoke$arity$2 = G__25197__2;
return G__25197;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25193 = arguments.length;
switch (G__25193) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25196.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25196.call(null,p,v);
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
var G__25201 = arguments.length;
switch (G__25201) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__25199_SHARP_){
if(cljs.core.truth_(p1__25199_SHARP_.call(null,topic))){
return p1__25199_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25199_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25202 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25203){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25203 = meta25203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25204,meta25203__$1){
var self__ = this;
var _25204__$1 = this;
return (new cljs.core.async.t_cljs$core$async25202(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25203__$1));
}));

(cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25204){
var self__ = this;
var _25204__$1 = this;
return self__.meta25203;
}));

(cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25203","meta25203",1936734506,null)], null);
}));

(cljs.core.async.t_cljs$core$async25202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25202");

(cljs.core.async.t_cljs$core$async25202.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25202.
 */
cljs.core.async.__GT_t_cljs$core$async25202 = (function cljs$core$async$__GT_t_cljs$core$async25202(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25203){
return (new cljs.core.async.t_cljs$core$async25202(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25203));
});

}

return (new cljs.core.async.t_cljs$core$async25202(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24166__auto___25322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_25276){
var state_val_25277 = (state_25276[(1)]);
if((state_val_25277 === (7))){
var inst_25272 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25278_25323 = state_25276__$1;
(statearr_25278_25323[(2)] = inst_25272);

(statearr_25278_25323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (20))){
var state_25276__$1 = state_25276;
var statearr_25279_25324 = state_25276__$1;
(statearr_25279_25324[(2)] = null);

(statearr_25279_25324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (1))){
var state_25276__$1 = state_25276;
var statearr_25280_25325 = state_25276__$1;
(statearr_25280_25325[(2)] = null);

(statearr_25280_25325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (24))){
var inst_25255 = (state_25276[(7)]);
var inst_25264 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25255);
var state_25276__$1 = state_25276;
var statearr_25281_25326 = state_25276__$1;
(statearr_25281_25326[(2)] = inst_25264);

(statearr_25281_25326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (4))){
var inst_25207 = (state_25276[(8)]);
var inst_25207__$1 = (state_25276[(2)]);
var inst_25208 = (inst_25207__$1 == null);
var state_25276__$1 = (function (){var statearr_25282 = state_25276;
(statearr_25282[(8)] = inst_25207__$1);

return statearr_25282;
})();
if(cljs.core.truth_(inst_25208)){
var statearr_25283_25327 = state_25276__$1;
(statearr_25283_25327[(1)] = (5));

} else {
var statearr_25284_25328 = state_25276__$1;
(statearr_25284_25328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (15))){
var inst_25249 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25285_25329 = state_25276__$1;
(statearr_25285_25329[(2)] = inst_25249);

(statearr_25285_25329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (21))){
var inst_25269 = (state_25276[(2)]);
var state_25276__$1 = (function (){var statearr_25286 = state_25276;
(statearr_25286[(9)] = inst_25269);

return statearr_25286;
})();
var statearr_25287_25330 = state_25276__$1;
(statearr_25287_25330[(2)] = null);

(statearr_25287_25330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (13))){
var inst_25231 = (state_25276[(10)]);
var inst_25233 = cljs.core.chunked_seq_QMARK_.call(null,inst_25231);
var state_25276__$1 = state_25276;
if(inst_25233){
var statearr_25288_25331 = state_25276__$1;
(statearr_25288_25331[(1)] = (16));

} else {
var statearr_25289_25332 = state_25276__$1;
(statearr_25289_25332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (22))){
var inst_25261 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
if(cljs.core.truth_(inst_25261)){
var statearr_25290_25333 = state_25276__$1;
(statearr_25290_25333[(1)] = (23));

} else {
var statearr_25291_25334 = state_25276__$1;
(statearr_25291_25334[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (6))){
var inst_25257 = (state_25276[(11)]);
var inst_25207 = (state_25276[(8)]);
var inst_25255 = (state_25276[(7)]);
var inst_25255__$1 = topic_fn.call(null,inst_25207);
var inst_25256 = cljs.core.deref.call(null,mults);
var inst_25257__$1 = cljs.core.get.call(null,inst_25256,inst_25255__$1);
var state_25276__$1 = (function (){var statearr_25292 = state_25276;
(statearr_25292[(11)] = inst_25257__$1);

(statearr_25292[(7)] = inst_25255__$1);

return statearr_25292;
})();
if(cljs.core.truth_(inst_25257__$1)){
var statearr_25293_25335 = state_25276__$1;
(statearr_25293_25335[(1)] = (19));

} else {
var statearr_25294_25336 = state_25276__$1;
(statearr_25294_25336[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (25))){
var inst_25266 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25295_25337 = state_25276__$1;
(statearr_25295_25337[(2)] = inst_25266);

(statearr_25295_25337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (17))){
var inst_25231 = (state_25276[(10)]);
var inst_25240 = cljs.core.first.call(null,inst_25231);
var inst_25241 = cljs.core.async.muxch_STAR_.call(null,inst_25240);
var inst_25242 = cljs.core.async.close_BANG_.call(null,inst_25241);
var inst_25243 = cljs.core.next.call(null,inst_25231);
var inst_25217 = inst_25243;
var inst_25218 = null;
var inst_25219 = (0);
var inst_25220 = (0);
var state_25276__$1 = (function (){var statearr_25296 = state_25276;
(statearr_25296[(12)] = inst_25242);

(statearr_25296[(13)] = inst_25219);

(statearr_25296[(14)] = inst_25217);

(statearr_25296[(15)] = inst_25218);

(statearr_25296[(16)] = inst_25220);

return statearr_25296;
})();
var statearr_25297_25338 = state_25276__$1;
(statearr_25297_25338[(2)] = null);

(statearr_25297_25338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (3))){
var inst_25274 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25276__$1,inst_25274);
} else {
if((state_val_25277 === (12))){
var inst_25251 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25298_25339 = state_25276__$1;
(statearr_25298_25339[(2)] = inst_25251);

(statearr_25298_25339[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (2))){
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25276__$1,(4),ch);
} else {
if((state_val_25277 === (23))){
var state_25276__$1 = state_25276;
var statearr_25299_25340 = state_25276__$1;
(statearr_25299_25340[(2)] = null);

(statearr_25299_25340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (19))){
var inst_25257 = (state_25276[(11)]);
var inst_25207 = (state_25276[(8)]);
var inst_25259 = cljs.core.async.muxch_STAR_.call(null,inst_25257);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25276__$1,(22),inst_25259,inst_25207);
} else {
if((state_val_25277 === (11))){
var inst_25217 = (state_25276[(14)]);
var inst_25231 = (state_25276[(10)]);
var inst_25231__$1 = cljs.core.seq.call(null,inst_25217);
var state_25276__$1 = (function (){var statearr_25300 = state_25276;
(statearr_25300[(10)] = inst_25231__$1);

return statearr_25300;
})();
if(inst_25231__$1){
var statearr_25301_25341 = state_25276__$1;
(statearr_25301_25341[(1)] = (13));

} else {
var statearr_25302_25342 = state_25276__$1;
(statearr_25302_25342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (9))){
var inst_25253 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25303_25343 = state_25276__$1;
(statearr_25303_25343[(2)] = inst_25253);

(statearr_25303_25343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (5))){
var inst_25214 = cljs.core.deref.call(null,mults);
var inst_25215 = cljs.core.vals.call(null,inst_25214);
var inst_25216 = cljs.core.seq.call(null,inst_25215);
var inst_25217 = inst_25216;
var inst_25218 = null;
var inst_25219 = (0);
var inst_25220 = (0);
var state_25276__$1 = (function (){var statearr_25304 = state_25276;
(statearr_25304[(13)] = inst_25219);

(statearr_25304[(14)] = inst_25217);

(statearr_25304[(15)] = inst_25218);

(statearr_25304[(16)] = inst_25220);

return statearr_25304;
})();
var statearr_25305_25344 = state_25276__$1;
(statearr_25305_25344[(2)] = null);

(statearr_25305_25344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (14))){
var state_25276__$1 = state_25276;
var statearr_25309_25345 = state_25276__$1;
(statearr_25309_25345[(2)] = null);

(statearr_25309_25345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (16))){
var inst_25231 = (state_25276[(10)]);
var inst_25235 = cljs.core.chunk_first.call(null,inst_25231);
var inst_25236 = cljs.core.chunk_rest.call(null,inst_25231);
var inst_25237 = cljs.core.count.call(null,inst_25235);
var inst_25217 = inst_25236;
var inst_25218 = inst_25235;
var inst_25219 = inst_25237;
var inst_25220 = (0);
var state_25276__$1 = (function (){var statearr_25310 = state_25276;
(statearr_25310[(13)] = inst_25219);

(statearr_25310[(14)] = inst_25217);

(statearr_25310[(15)] = inst_25218);

(statearr_25310[(16)] = inst_25220);

return statearr_25310;
})();
var statearr_25311_25346 = state_25276__$1;
(statearr_25311_25346[(2)] = null);

(statearr_25311_25346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (10))){
var inst_25219 = (state_25276[(13)]);
var inst_25217 = (state_25276[(14)]);
var inst_25218 = (state_25276[(15)]);
var inst_25220 = (state_25276[(16)]);
var inst_25225 = cljs.core._nth.call(null,inst_25218,inst_25220);
var inst_25226 = cljs.core.async.muxch_STAR_.call(null,inst_25225);
var inst_25227 = cljs.core.async.close_BANG_.call(null,inst_25226);
var inst_25228 = (inst_25220 + (1));
var tmp25306 = inst_25219;
var tmp25307 = inst_25217;
var tmp25308 = inst_25218;
var inst_25217__$1 = tmp25307;
var inst_25218__$1 = tmp25308;
var inst_25219__$1 = tmp25306;
var inst_25220__$1 = inst_25228;
var state_25276__$1 = (function (){var statearr_25312 = state_25276;
(statearr_25312[(17)] = inst_25227);

(statearr_25312[(13)] = inst_25219__$1);

(statearr_25312[(14)] = inst_25217__$1);

(statearr_25312[(15)] = inst_25218__$1);

(statearr_25312[(16)] = inst_25220__$1);

return statearr_25312;
})();
var statearr_25313_25347 = state_25276__$1;
(statearr_25313_25347[(2)] = null);

(statearr_25313_25347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (18))){
var inst_25246 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25314_25348 = state_25276__$1;
(statearr_25314_25348[(2)] = inst_25246);

(statearr_25314_25348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (8))){
var inst_25219 = (state_25276[(13)]);
var inst_25220 = (state_25276[(16)]);
var inst_25222 = (inst_25220 < inst_25219);
var inst_25223 = inst_25222;
var state_25276__$1 = state_25276;
if(cljs.core.truth_(inst_25223)){
var statearr_25315_25349 = state_25276__$1;
(statearr_25315_25349[(1)] = (10));

} else {
var statearr_25316_25350 = state_25276__$1;
(statearr_25316_25350[(1)] = (11));

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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_25317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25317[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_25317[(1)] = (1));

return statearr_25317;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_25276){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_25276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e25318){if((e25318 instanceof Object)){
var ex__24075__auto__ = e25318;
var statearr_25319_25351 = state_25276;
(statearr_25319_25351[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25352 = state_25276;
state_25276 = G__25352;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_25276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_25276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_25320 = f__24167__auto__.call(null);
(statearr_25320[(6)] = c__24166__auto___25322);

return statearr_25320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
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
var G__25354 = arguments.length;
switch (G__25354) {
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
var G__25357 = arguments.length;
switch (G__25357) {
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
var G__25360 = arguments.length;
switch (G__25360) {
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
var c__24166__auto___25427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_25399){
var state_val_25400 = (state_25399[(1)]);
if((state_val_25400 === (7))){
var state_25399__$1 = state_25399;
var statearr_25401_25428 = state_25399__$1;
(statearr_25401_25428[(2)] = null);

(statearr_25401_25428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (1))){
var state_25399__$1 = state_25399;
var statearr_25402_25429 = state_25399__$1;
(statearr_25402_25429[(2)] = null);

(statearr_25402_25429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (4))){
var inst_25363 = (state_25399[(7)]);
var inst_25365 = (inst_25363 < cnt);
var state_25399__$1 = state_25399;
if(cljs.core.truth_(inst_25365)){
var statearr_25403_25430 = state_25399__$1;
(statearr_25403_25430[(1)] = (6));

} else {
var statearr_25404_25431 = state_25399__$1;
(statearr_25404_25431[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (15))){
var inst_25395 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25405_25432 = state_25399__$1;
(statearr_25405_25432[(2)] = inst_25395);

(statearr_25405_25432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (13))){
var inst_25388 = cljs.core.async.close_BANG_.call(null,out);
var state_25399__$1 = state_25399;
var statearr_25406_25433 = state_25399__$1;
(statearr_25406_25433[(2)] = inst_25388);

(statearr_25406_25433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (6))){
var state_25399__$1 = state_25399;
var statearr_25407_25434 = state_25399__$1;
(statearr_25407_25434[(2)] = null);

(statearr_25407_25434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (3))){
var inst_25397 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25399__$1,inst_25397);
} else {
if((state_val_25400 === (12))){
var inst_25385 = (state_25399[(8)]);
var inst_25385__$1 = (state_25399[(2)]);
var inst_25386 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25385__$1);
var state_25399__$1 = (function (){var statearr_25408 = state_25399;
(statearr_25408[(8)] = inst_25385__$1);

return statearr_25408;
})();
if(cljs.core.truth_(inst_25386)){
var statearr_25409_25435 = state_25399__$1;
(statearr_25409_25435[(1)] = (13));

} else {
var statearr_25410_25436 = state_25399__$1;
(statearr_25410_25436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (2))){
var inst_25362 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25363 = (0);
var state_25399__$1 = (function (){var statearr_25411 = state_25399;
(statearr_25411[(9)] = inst_25362);

(statearr_25411[(7)] = inst_25363);

return statearr_25411;
})();
var statearr_25412_25437 = state_25399__$1;
(statearr_25412_25437[(2)] = null);

(statearr_25412_25437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (11))){
var inst_25363 = (state_25399[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25399,(10),Object,null,(9));
var inst_25372 = chs__$1.call(null,inst_25363);
var inst_25373 = done.call(null,inst_25363);
var inst_25374 = cljs.core.async.take_BANG_.call(null,inst_25372,inst_25373);
var state_25399__$1 = state_25399;
var statearr_25413_25438 = state_25399__$1;
(statearr_25413_25438[(2)] = inst_25374);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25399__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (9))){
var inst_25363 = (state_25399[(7)]);
var inst_25376 = (state_25399[(2)]);
var inst_25377 = (inst_25363 + (1));
var inst_25363__$1 = inst_25377;
var state_25399__$1 = (function (){var statearr_25414 = state_25399;
(statearr_25414[(7)] = inst_25363__$1);

(statearr_25414[(10)] = inst_25376);

return statearr_25414;
})();
var statearr_25415_25439 = state_25399__$1;
(statearr_25415_25439[(2)] = null);

(statearr_25415_25439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (5))){
var inst_25383 = (state_25399[(2)]);
var state_25399__$1 = (function (){var statearr_25416 = state_25399;
(statearr_25416[(11)] = inst_25383);

return statearr_25416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25399__$1,(12),dchan);
} else {
if((state_val_25400 === (14))){
var inst_25385 = (state_25399[(8)]);
var inst_25390 = cljs.core.apply.call(null,f,inst_25385);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25399__$1,(16),out,inst_25390);
} else {
if((state_val_25400 === (16))){
var inst_25392 = (state_25399[(2)]);
var state_25399__$1 = (function (){var statearr_25417 = state_25399;
(statearr_25417[(12)] = inst_25392);

return statearr_25417;
})();
var statearr_25418_25440 = state_25399__$1;
(statearr_25418_25440[(2)] = null);

(statearr_25418_25440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (10))){
var inst_25367 = (state_25399[(2)]);
var inst_25368 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25399__$1 = (function (){var statearr_25419 = state_25399;
(statearr_25419[(13)] = inst_25367);

return statearr_25419;
})();
var statearr_25420_25441 = state_25399__$1;
(statearr_25420_25441[(2)] = inst_25368);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25399__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (8))){
var inst_25381 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25421_25442 = state_25399__$1;
(statearr_25421_25442[(2)] = inst_25381);

(statearr_25421_25442[(1)] = (5));


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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_25422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25422[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_25422[(1)] = (1));

return statearr_25422;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_25399){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_25399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e25423){if((e25423 instanceof Object)){
var ex__24075__auto__ = e25423;
var statearr_25424_25443 = state_25399;
(statearr_25424_25443[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25444 = state_25399;
state_25399 = G__25444;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_25399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_25399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_25425 = f__24167__auto__.call(null);
(statearr_25425[(6)] = c__24166__auto___25427);

return statearr_25425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
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
var G__25447 = arguments.length;
switch (G__25447) {
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
var c__24166__auto___25501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_25479){
var state_val_25480 = (state_25479[(1)]);
if((state_val_25480 === (7))){
var inst_25458 = (state_25479[(7)]);
var inst_25459 = (state_25479[(8)]);
var inst_25458__$1 = (state_25479[(2)]);
var inst_25459__$1 = cljs.core.nth.call(null,inst_25458__$1,(0),null);
var inst_25460 = cljs.core.nth.call(null,inst_25458__$1,(1),null);
var inst_25461 = (inst_25459__$1 == null);
var state_25479__$1 = (function (){var statearr_25481 = state_25479;
(statearr_25481[(7)] = inst_25458__$1);

(statearr_25481[(8)] = inst_25459__$1);

(statearr_25481[(9)] = inst_25460);

return statearr_25481;
})();
if(cljs.core.truth_(inst_25461)){
var statearr_25482_25502 = state_25479__$1;
(statearr_25482_25502[(1)] = (8));

} else {
var statearr_25483_25503 = state_25479__$1;
(statearr_25483_25503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (1))){
var inst_25448 = cljs.core.vec.call(null,chs);
var inst_25449 = inst_25448;
var state_25479__$1 = (function (){var statearr_25484 = state_25479;
(statearr_25484[(10)] = inst_25449);

return statearr_25484;
})();
var statearr_25485_25504 = state_25479__$1;
(statearr_25485_25504[(2)] = null);

(statearr_25485_25504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (4))){
var inst_25449 = (state_25479[(10)]);
var state_25479__$1 = state_25479;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25479__$1,(7),inst_25449);
} else {
if((state_val_25480 === (6))){
var inst_25475 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25486_25505 = state_25479__$1;
(statearr_25486_25505[(2)] = inst_25475);

(statearr_25486_25505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (3))){
var inst_25477 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25479__$1,inst_25477);
} else {
if((state_val_25480 === (2))){
var inst_25449 = (state_25479[(10)]);
var inst_25451 = cljs.core.count.call(null,inst_25449);
var inst_25452 = (inst_25451 > (0));
var state_25479__$1 = state_25479;
if(cljs.core.truth_(inst_25452)){
var statearr_25488_25506 = state_25479__$1;
(statearr_25488_25506[(1)] = (4));

} else {
var statearr_25489_25507 = state_25479__$1;
(statearr_25489_25507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (11))){
var inst_25449 = (state_25479[(10)]);
var inst_25468 = (state_25479[(2)]);
var tmp25487 = inst_25449;
var inst_25449__$1 = tmp25487;
var state_25479__$1 = (function (){var statearr_25490 = state_25479;
(statearr_25490[(11)] = inst_25468);

(statearr_25490[(10)] = inst_25449__$1);

return statearr_25490;
})();
var statearr_25491_25508 = state_25479__$1;
(statearr_25491_25508[(2)] = null);

(statearr_25491_25508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (9))){
var inst_25459 = (state_25479[(8)]);
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25479__$1,(11),out,inst_25459);
} else {
if((state_val_25480 === (5))){
var inst_25473 = cljs.core.async.close_BANG_.call(null,out);
var state_25479__$1 = state_25479;
var statearr_25492_25509 = state_25479__$1;
(statearr_25492_25509[(2)] = inst_25473);

(statearr_25492_25509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (10))){
var inst_25471 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25493_25510 = state_25479__$1;
(statearr_25493_25510[(2)] = inst_25471);

(statearr_25493_25510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (8))){
var inst_25458 = (state_25479[(7)]);
var inst_25459 = (state_25479[(8)]);
var inst_25460 = (state_25479[(9)]);
var inst_25449 = (state_25479[(10)]);
var inst_25463 = (function (){var cs = inst_25449;
var vec__25454 = inst_25458;
var v = inst_25459;
var c = inst_25460;
return (function (p1__25445_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25445_SHARP_);
});
})();
var inst_25464 = cljs.core.filterv.call(null,inst_25463,inst_25449);
var inst_25449__$1 = inst_25464;
var state_25479__$1 = (function (){var statearr_25494 = state_25479;
(statearr_25494[(10)] = inst_25449__$1);

return statearr_25494;
})();
var statearr_25495_25511 = state_25479__$1;
(statearr_25495_25511[(2)] = null);

(statearr_25495_25511[(1)] = (2));


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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_25496 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25496[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_25496[(1)] = (1));

return statearr_25496;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_25479){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_25479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e25497){if((e25497 instanceof Object)){
var ex__24075__auto__ = e25497;
var statearr_25498_25512 = state_25479;
(statearr_25498_25512[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25513 = state_25479;
state_25479 = G__25513;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_25479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_25479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_25499 = f__24167__auto__.call(null);
(statearr_25499[(6)] = c__24166__auto___25501);

return statearr_25499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
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
var G__25515 = arguments.length;
switch (G__25515) {
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
var c__24166__auto___25560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_25539){
var state_val_25540 = (state_25539[(1)]);
if((state_val_25540 === (7))){
var inst_25521 = (state_25539[(7)]);
var inst_25521__$1 = (state_25539[(2)]);
var inst_25522 = (inst_25521__$1 == null);
var inst_25523 = cljs.core.not.call(null,inst_25522);
var state_25539__$1 = (function (){var statearr_25541 = state_25539;
(statearr_25541[(7)] = inst_25521__$1);

return statearr_25541;
})();
if(inst_25523){
var statearr_25542_25561 = state_25539__$1;
(statearr_25542_25561[(1)] = (8));

} else {
var statearr_25543_25562 = state_25539__$1;
(statearr_25543_25562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (1))){
var inst_25516 = (0);
var state_25539__$1 = (function (){var statearr_25544 = state_25539;
(statearr_25544[(8)] = inst_25516);

return statearr_25544;
})();
var statearr_25545_25563 = state_25539__$1;
(statearr_25545_25563[(2)] = null);

(statearr_25545_25563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (4))){
var state_25539__$1 = state_25539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25539__$1,(7),ch);
} else {
if((state_val_25540 === (6))){
var inst_25534 = (state_25539[(2)]);
var state_25539__$1 = state_25539;
var statearr_25546_25564 = state_25539__$1;
(statearr_25546_25564[(2)] = inst_25534);

(statearr_25546_25564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (3))){
var inst_25536 = (state_25539[(2)]);
var inst_25537 = cljs.core.async.close_BANG_.call(null,out);
var state_25539__$1 = (function (){var statearr_25547 = state_25539;
(statearr_25547[(9)] = inst_25536);

return statearr_25547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25539__$1,inst_25537);
} else {
if((state_val_25540 === (2))){
var inst_25516 = (state_25539[(8)]);
var inst_25518 = (inst_25516 < n);
var state_25539__$1 = state_25539;
if(cljs.core.truth_(inst_25518)){
var statearr_25548_25565 = state_25539__$1;
(statearr_25548_25565[(1)] = (4));

} else {
var statearr_25549_25566 = state_25539__$1;
(statearr_25549_25566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (11))){
var inst_25516 = (state_25539[(8)]);
var inst_25526 = (state_25539[(2)]);
var inst_25527 = (inst_25516 + (1));
var inst_25516__$1 = inst_25527;
var state_25539__$1 = (function (){var statearr_25550 = state_25539;
(statearr_25550[(8)] = inst_25516__$1);

(statearr_25550[(10)] = inst_25526);

return statearr_25550;
})();
var statearr_25551_25567 = state_25539__$1;
(statearr_25551_25567[(2)] = null);

(statearr_25551_25567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (9))){
var state_25539__$1 = state_25539;
var statearr_25552_25568 = state_25539__$1;
(statearr_25552_25568[(2)] = null);

(statearr_25552_25568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (5))){
var state_25539__$1 = state_25539;
var statearr_25553_25569 = state_25539__$1;
(statearr_25553_25569[(2)] = null);

(statearr_25553_25569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (10))){
var inst_25531 = (state_25539[(2)]);
var state_25539__$1 = state_25539;
var statearr_25554_25570 = state_25539__$1;
(statearr_25554_25570[(2)] = inst_25531);

(statearr_25554_25570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (8))){
var inst_25521 = (state_25539[(7)]);
var state_25539__$1 = state_25539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25539__$1,(11),out,inst_25521);
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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_25555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25555[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_25555[(1)] = (1));

return statearr_25555;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_25539){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_25539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e25556){if((e25556 instanceof Object)){
var ex__24075__auto__ = e25556;
var statearr_25557_25571 = state_25539;
(statearr_25557_25571[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25572 = state_25539;
state_25539 = G__25572;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_25539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_25539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_25558 = f__24167__auto__.call(null);
(statearr_25558[(6)] = c__24166__auto___25560);

return statearr_25558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25574 = (function (f,ch,meta25575){
this.f = f;
this.ch = ch;
this.meta25575 = meta25575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25576,meta25575__$1){
var self__ = this;
var _25576__$1 = this;
return (new cljs.core.async.t_cljs$core$async25574(self__.f,self__.ch,meta25575__$1));
}));

(cljs.core.async.t_cljs$core$async25574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25576){
var self__ = this;
var _25576__$1 = this;
return self__.meta25575;
}));

(cljs.core.async.t_cljs$core$async25574.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25574.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25574.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25574.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25574.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25577 = (function (f,ch,meta25575,_,fn1,meta25578){
this.f = f;
this.ch = ch;
this.meta25575 = meta25575;
this._ = _;
this.fn1 = fn1;
this.meta25578 = meta25578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25579,meta25578__$1){
var self__ = this;
var _25579__$1 = this;
return (new cljs.core.async.t_cljs$core$async25577(self__.f,self__.ch,self__.meta25575,self__._,self__.fn1,meta25578__$1));
}));

(cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25579){
var self__ = this;
var _25579__$1 = this;
return self__.meta25578;
}));

(cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__25573_SHARP_){
return f1.call(null,(((p1__25573_SHARP_ == null))?null:self__.f.call(null,p1__25573_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async25577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25575","meta25575",-1880011283,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25574","cljs.core.async/t_cljs$core$async25574",394479681,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25578","meta25578",184539122,null)], null);
}));

(cljs.core.async.t_cljs$core$async25577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25577");

(cljs.core.async.t_cljs$core$async25577.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25577.
 */
cljs.core.async.__GT_t_cljs$core$async25577 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25577(f__$1,ch__$1,meta25575__$1,___$2,fn1__$1,meta25578){
return (new cljs.core.async.t_cljs$core$async25577(f__$1,ch__$1,meta25575__$1,___$2,fn1__$1,meta25578));
});

}

return (new cljs.core.async.t_cljs$core$async25577(self__.f,self__.ch,self__.meta25575,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async25574.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25574.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25575","meta25575",-1880011283,null)], null);
}));

(cljs.core.async.t_cljs$core$async25574.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25574");

(cljs.core.async.t_cljs$core$async25574.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25574");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25574.
 */
cljs.core.async.__GT_t_cljs$core$async25574 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25574(f__$1,ch__$1,meta25575){
return (new cljs.core.async.t_cljs$core$async25574(f__$1,ch__$1,meta25575));
});

}

return (new cljs.core.async.t_cljs$core$async25574(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25580 = (function (f,ch,meta25581){
this.f = f;
this.ch = ch;
this.meta25581 = meta25581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25582,meta25581__$1){
var self__ = this;
var _25582__$1 = this;
return (new cljs.core.async.t_cljs$core$async25580(self__.f,self__.ch,meta25581__$1));
}));

(cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25582){
var self__ = this;
var _25582__$1 = this;
return self__.meta25581;
}));

(cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async25580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25581","meta25581",1959096932,null)], null);
}));

(cljs.core.async.t_cljs$core$async25580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25580");

(cljs.core.async.t_cljs$core$async25580.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25580.
 */
cljs.core.async.__GT_t_cljs$core$async25580 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25580(f__$1,ch__$1,meta25581){
return (new cljs.core.async.t_cljs$core$async25580(f__$1,ch__$1,meta25581));
});

}

return (new cljs.core.async.t_cljs$core$async25580(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25583 = (function (p,ch,meta25584){
this.p = p;
this.ch = ch;
this.meta25584 = meta25584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25585,meta25584__$1){
var self__ = this;
var _25585__$1 = this;
return (new cljs.core.async.t_cljs$core$async25583(self__.p,self__.ch,meta25584__$1));
}));

(cljs.core.async.t_cljs$core$async25583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25585){
var self__ = this;
var _25585__$1 = this;
return self__.meta25584;
}));

(cljs.core.async.t_cljs$core$async25583.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25583.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25583.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25583.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25583.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25583.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25583.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25584","meta25584",26666239,null)], null);
}));

(cljs.core.async.t_cljs$core$async25583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25583");

(cljs.core.async.t_cljs$core$async25583.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25583.
 */
cljs.core.async.__GT_t_cljs$core$async25583 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25583(p__$1,ch__$1,meta25584){
return (new cljs.core.async.t_cljs$core$async25583(p__$1,ch__$1,meta25584));
});

}

return (new cljs.core.async.t_cljs$core$async25583(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25587 = arguments.length;
switch (G__25587) {
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
var c__24166__auto___25627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_25608){
var state_val_25609 = (state_25608[(1)]);
if((state_val_25609 === (7))){
var inst_25604 = (state_25608[(2)]);
var state_25608__$1 = state_25608;
var statearr_25610_25628 = state_25608__$1;
(statearr_25610_25628[(2)] = inst_25604);

(statearr_25610_25628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (1))){
var state_25608__$1 = state_25608;
var statearr_25611_25629 = state_25608__$1;
(statearr_25611_25629[(2)] = null);

(statearr_25611_25629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (4))){
var inst_25590 = (state_25608[(7)]);
var inst_25590__$1 = (state_25608[(2)]);
var inst_25591 = (inst_25590__$1 == null);
var state_25608__$1 = (function (){var statearr_25612 = state_25608;
(statearr_25612[(7)] = inst_25590__$1);

return statearr_25612;
})();
if(cljs.core.truth_(inst_25591)){
var statearr_25613_25630 = state_25608__$1;
(statearr_25613_25630[(1)] = (5));

} else {
var statearr_25614_25631 = state_25608__$1;
(statearr_25614_25631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (6))){
var inst_25590 = (state_25608[(7)]);
var inst_25595 = p.call(null,inst_25590);
var state_25608__$1 = state_25608;
if(cljs.core.truth_(inst_25595)){
var statearr_25615_25632 = state_25608__$1;
(statearr_25615_25632[(1)] = (8));

} else {
var statearr_25616_25633 = state_25608__$1;
(statearr_25616_25633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (3))){
var inst_25606 = (state_25608[(2)]);
var state_25608__$1 = state_25608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25608__$1,inst_25606);
} else {
if((state_val_25609 === (2))){
var state_25608__$1 = state_25608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25608__$1,(4),ch);
} else {
if((state_val_25609 === (11))){
var inst_25598 = (state_25608[(2)]);
var state_25608__$1 = state_25608;
var statearr_25617_25634 = state_25608__$1;
(statearr_25617_25634[(2)] = inst_25598);

(statearr_25617_25634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (9))){
var state_25608__$1 = state_25608;
var statearr_25618_25635 = state_25608__$1;
(statearr_25618_25635[(2)] = null);

(statearr_25618_25635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (5))){
var inst_25593 = cljs.core.async.close_BANG_.call(null,out);
var state_25608__$1 = state_25608;
var statearr_25619_25636 = state_25608__$1;
(statearr_25619_25636[(2)] = inst_25593);

(statearr_25619_25636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (10))){
var inst_25601 = (state_25608[(2)]);
var state_25608__$1 = (function (){var statearr_25620 = state_25608;
(statearr_25620[(8)] = inst_25601);

return statearr_25620;
})();
var statearr_25621_25637 = state_25608__$1;
(statearr_25621_25637[(2)] = null);

(statearr_25621_25637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (8))){
var inst_25590 = (state_25608[(7)]);
var state_25608__$1 = state_25608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25608__$1,(11),out,inst_25590);
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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_25622 = [null,null,null,null,null,null,null,null,null];
(statearr_25622[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_25622[(1)] = (1));

return statearr_25622;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_25608){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_25608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e25623){if((e25623 instanceof Object)){
var ex__24075__auto__ = e25623;
var statearr_25624_25638 = state_25608;
(statearr_25624_25638[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25639 = state_25608;
state_25608 = G__25639;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_25608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_25608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_25625 = f__24167__auto__.call(null);
(statearr_25625[(6)] = c__24166__auto___25627);

return statearr_25625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25641 = arguments.length;
switch (G__25641) {
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
var c__24166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_25704){
var state_val_25705 = (state_25704[(1)]);
if((state_val_25705 === (7))){
var inst_25700 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25706_25744 = state_25704__$1;
(statearr_25706_25744[(2)] = inst_25700);

(statearr_25706_25744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (20))){
var inst_25670 = (state_25704[(7)]);
var inst_25681 = (state_25704[(2)]);
var inst_25682 = cljs.core.next.call(null,inst_25670);
var inst_25656 = inst_25682;
var inst_25657 = null;
var inst_25658 = (0);
var inst_25659 = (0);
var state_25704__$1 = (function (){var statearr_25707 = state_25704;
(statearr_25707[(8)] = inst_25658);

(statearr_25707[(9)] = inst_25657);

(statearr_25707[(10)] = inst_25659);

(statearr_25707[(11)] = inst_25681);

(statearr_25707[(12)] = inst_25656);

return statearr_25707;
})();
var statearr_25708_25745 = state_25704__$1;
(statearr_25708_25745[(2)] = null);

(statearr_25708_25745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (1))){
var state_25704__$1 = state_25704;
var statearr_25709_25746 = state_25704__$1;
(statearr_25709_25746[(2)] = null);

(statearr_25709_25746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (4))){
var inst_25645 = (state_25704[(13)]);
var inst_25645__$1 = (state_25704[(2)]);
var inst_25646 = (inst_25645__$1 == null);
var state_25704__$1 = (function (){var statearr_25710 = state_25704;
(statearr_25710[(13)] = inst_25645__$1);

return statearr_25710;
})();
if(cljs.core.truth_(inst_25646)){
var statearr_25711_25747 = state_25704__$1;
(statearr_25711_25747[(1)] = (5));

} else {
var statearr_25712_25748 = state_25704__$1;
(statearr_25712_25748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (15))){
var state_25704__$1 = state_25704;
var statearr_25716_25749 = state_25704__$1;
(statearr_25716_25749[(2)] = null);

(statearr_25716_25749[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (21))){
var state_25704__$1 = state_25704;
var statearr_25717_25750 = state_25704__$1;
(statearr_25717_25750[(2)] = null);

(statearr_25717_25750[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (13))){
var inst_25658 = (state_25704[(8)]);
var inst_25657 = (state_25704[(9)]);
var inst_25659 = (state_25704[(10)]);
var inst_25656 = (state_25704[(12)]);
var inst_25666 = (state_25704[(2)]);
var inst_25667 = (inst_25659 + (1));
var tmp25713 = inst_25658;
var tmp25714 = inst_25657;
var tmp25715 = inst_25656;
var inst_25656__$1 = tmp25715;
var inst_25657__$1 = tmp25714;
var inst_25658__$1 = tmp25713;
var inst_25659__$1 = inst_25667;
var state_25704__$1 = (function (){var statearr_25718 = state_25704;
(statearr_25718[(8)] = inst_25658__$1);

(statearr_25718[(9)] = inst_25657__$1);

(statearr_25718[(10)] = inst_25659__$1);

(statearr_25718[(14)] = inst_25666);

(statearr_25718[(12)] = inst_25656__$1);

return statearr_25718;
})();
var statearr_25719_25751 = state_25704__$1;
(statearr_25719_25751[(2)] = null);

(statearr_25719_25751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (22))){
var state_25704__$1 = state_25704;
var statearr_25720_25752 = state_25704__$1;
(statearr_25720_25752[(2)] = null);

(statearr_25720_25752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (6))){
var inst_25645 = (state_25704[(13)]);
var inst_25654 = f.call(null,inst_25645);
var inst_25655 = cljs.core.seq.call(null,inst_25654);
var inst_25656 = inst_25655;
var inst_25657 = null;
var inst_25658 = (0);
var inst_25659 = (0);
var state_25704__$1 = (function (){var statearr_25721 = state_25704;
(statearr_25721[(8)] = inst_25658);

(statearr_25721[(9)] = inst_25657);

(statearr_25721[(10)] = inst_25659);

(statearr_25721[(12)] = inst_25656);

return statearr_25721;
})();
var statearr_25722_25753 = state_25704__$1;
(statearr_25722_25753[(2)] = null);

(statearr_25722_25753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (17))){
var inst_25670 = (state_25704[(7)]);
var inst_25674 = cljs.core.chunk_first.call(null,inst_25670);
var inst_25675 = cljs.core.chunk_rest.call(null,inst_25670);
var inst_25676 = cljs.core.count.call(null,inst_25674);
var inst_25656 = inst_25675;
var inst_25657 = inst_25674;
var inst_25658 = inst_25676;
var inst_25659 = (0);
var state_25704__$1 = (function (){var statearr_25723 = state_25704;
(statearr_25723[(8)] = inst_25658);

(statearr_25723[(9)] = inst_25657);

(statearr_25723[(10)] = inst_25659);

(statearr_25723[(12)] = inst_25656);

return statearr_25723;
})();
var statearr_25724_25754 = state_25704__$1;
(statearr_25724_25754[(2)] = null);

(statearr_25724_25754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (3))){
var inst_25702 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25704__$1,inst_25702);
} else {
if((state_val_25705 === (12))){
var inst_25690 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25725_25755 = state_25704__$1;
(statearr_25725_25755[(2)] = inst_25690);

(statearr_25725_25755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (2))){
var state_25704__$1 = state_25704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25704__$1,(4),in$);
} else {
if((state_val_25705 === (23))){
var inst_25698 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25726_25756 = state_25704__$1;
(statearr_25726_25756[(2)] = inst_25698);

(statearr_25726_25756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (19))){
var inst_25685 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25727_25757 = state_25704__$1;
(statearr_25727_25757[(2)] = inst_25685);

(statearr_25727_25757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (11))){
var inst_25670 = (state_25704[(7)]);
var inst_25656 = (state_25704[(12)]);
var inst_25670__$1 = cljs.core.seq.call(null,inst_25656);
var state_25704__$1 = (function (){var statearr_25728 = state_25704;
(statearr_25728[(7)] = inst_25670__$1);

return statearr_25728;
})();
if(inst_25670__$1){
var statearr_25729_25758 = state_25704__$1;
(statearr_25729_25758[(1)] = (14));

} else {
var statearr_25730_25759 = state_25704__$1;
(statearr_25730_25759[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (9))){
var inst_25692 = (state_25704[(2)]);
var inst_25693 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25704__$1 = (function (){var statearr_25731 = state_25704;
(statearr_25731[(15)] = inst_25692);

return statearr_25731;
})();
if(cljs.core.truth_(inst_25693)){
var statearr_25732_25760 = state_25704__$1;
(statearr_25732_25760[(1)] = (21));

} else {
var statearr_25733_25761 = state_25704__$1;
(statearr_25733_25761[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (5))){
var inst_25648 = cljs.core.async.close_BANG_.call(null,out);
var state_25704__$1 = state_25704;
var statearr_25734_25762 = state_25704__$1;
(statearr_25734_25762[(2)] = inst_25648);

(statearr_25734_25762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (14))){
var inst_25670 = (state_25704[(7)]);
var inst_25672 = cljs.core.chunked_seq_QMARK_.call(null,inst_25670);
var state_25704__$1 = state_25704;
if(inst_25672){
var statearr_25735_25763 = state_25704__$1;
(statearr_25735_25763[(1)] = (17));

} else {
var statearr_25736_25764 = state_25704__$1;
(statearr_25736_25764[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (16))){
var inst_25688 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25737_25765 = state_25704__$1;
(statearr_25737_25765[(2)] = inst_25688);

(statearr_25737_25765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (10))){
var inst_25657 = (state_25704[(9)]);
var inst_25659 = (state_25704[(10)]);
var inst_25664 = cljs.core._nth.call(null,inst_25657,inst_25659);
var state_25704__$1 = state_25704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25704__$1,(13),out,inst_25664);
} else {
if((state_val_25705 === (18))){
var inst_25670 = (state_25704[(7)]);
var inst_25679 = cljs.core.first.call(null,inst_25670);
var state_25704__$1 = state_25704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25704__$1,(20),out,inst_25679);
} else {
if((state_val_25705 === (8))){
var inst_25658 = (state_25704[(8)]);
var inst_25659 = (state_25704[(10)]);
var inst_25661 = (inst_25659 < inst_25658);
var inst_25662 = inst_25661;
var state_25704__$1 = state_25704;
if(cljs.core.truth_(inst_25662)){
var statearr_25738_25766 = state_25704__$1;
(statearr_25738_25766[(1)] = (10));

} else {
var statearr_25739_25767 = state_25704__$1;
(statearr_25739_25767[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__24072__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24072__auto____0 = (function (){
var statearr_25740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25740[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24072__auto__);

(statearr_25740[(1)] = (1));

return statearr_25740;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24072__auto____1 = (function (state_25704){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_25704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e25741){if((e25741 instanceof Object)){
var ex__24075__auto__ = e25741;
var statearr_25742_25768 = state_25704;
(statearr_25742_25768[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25769 = state_25704;
state_25704 = G__25769;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24072__auto__ = function(state_25704){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24072__auto____1.call(this,state_25704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_25743 = f__24167__auto__.call(null);
(statearr_25743[(6)] = c__24166__auto__);

return statearr_25743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));

return c__24166__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25771 = arguments.length;
switch (G__25771) {
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
var G__25774 = arguments.length;
switch (G__25774) {
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
var G__25777 = arguments.length;
switch (G__25777) {
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
var c__24166__auto___25824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_25801){
var state_val_25802 = (state_25801[(1)]);
if((state_val_25802 === (7))){
var inst_25796 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25803_25825 = state_25801__$1;
(statearr_25803_25825[(2)] = inst_25796);

(statearr_25803_25825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (1))){
var inst_25778 = null;
var state_25801__$1 = (function (){var statearr_25804 = state_25801;
(statearr_25804[(7)] = inst_25778);

return statearr_25804;
})();
var statearr_25805_25826 = state_25801__$1;
(statearr_25805_25826[(2)] = null);

(statearr_25805_25826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (4))){
var inst_25781 = (state_25801[(8)]);
var inst_25781__$1 = (state_25801[(2)]);
var inst_25782 = (inst_25781__$1 == null);
var inst_25783 = cljs.core.not.call(null,inst_25782);
var state_25801__$1 = (function (){var statearr_25806 = state_25801;
(statearr_25806[(8)] = inst_25781__$1);

return statearr_25806;
})();
if(inst_25783){
var statearr_25807_25827 = state_25801__$1;
(statearr_25807_25827[(1)] = (5));

} else {
var statearr_25808_25828 = state_25801__$1;
(statearr_25808_25828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (6))){
var state_25801__$1 = state_25801;
var statearr_25809_25829 = state_25801__$1;
(statearr_25809_25829[(2)] = null);

(statearr_25809_25829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (3))){
var inst_25798 = (state_25801[(2)]);
var inst_25799 = cljs.core.async.close_BANG_.call(null,out);
var state_25801__$1 = (function (){var statearr_25810 = state_25801;
(statearr_25810[(9)] = inst_25798);

return statearr_25810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25801__$1,inst_25799);
} else {
if((state_val_25802 === (2))){
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25801__$1,(4),ch);
} else {
if((state_val_25802 === (11))){
var inst_25781 = (state_25801[(8)]);
var inst_25790 = (state_25801[(2)]);
var inst_25778 = inst_25781;
var state_25801__$1 = (function (){var statearr_25811 = state_25801;
(statearr_25811[(7)] = inst_25778);

(statearr_25811[(10)] = inst_25790);

return statearr_25811;
})();
var statearr_25812_25830 = state_25801__$1;
(statearr_25812_25830[(2)] = null);

(statearr_25812_25830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (9))){
var inst_25781 = (state_25801[(8)]);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25801__$1,(11),out,inst_25781);
} else {
if((state_val_25802 === (5))){
var inst_25781 = (state_25801[(8)]);
var inst_25778 = (state_25801[(7)]);
var inst_25785 = cljs.core._EQ_.call(null,inst_25781,inst_25778);
var state_25801__$1 = state_25801;
if(inst_25785){
var statearr_25814_25831 = state_25801__$1;
(statearr_25814_25831[(1)] = (8));

} else {
var statearr_25815_25832 = state_25801__$1;
(statearr_25815_25832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (10))){
var inst_25793 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25816_25833 = state_25801__$1;
(statearr_25816_25833[(2)] = inst_25793);

(statearr_25816_25833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (8))){
var inst_25778 = (state_25801[(7)]);
var tmp25813 = inst_25778;
var inst_25778__$1 = tmp25813;
var state_25801__$1 = (function (){var statearr_25817 = state_25801;
(statearr_25817[(7)] = inst_25778__$1);

return statearr_25817;
})();
var statearr_25818_25834 = state_25801__$1;
(statearr_25818_25834[(2)] = null);

(statearr_25818_25834[(1)] = (2));


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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_25819 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25819[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_25819[(1)] = (1));

return statearr_25819;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_25801){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_25801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e25820){if((e25820 instanceof Object)){
var ex__24075__auto__ = e25820;
var statearr_25821_25835 = state_25801;
(statearr_25821_25835[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25836 = state_25801;
state_25801 = G__25836;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_25801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_25801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_25822 = f__24167__auto__.call(null);
(statearr_25822[(6)] = c__24166__auto___25824);

return statearr_25822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25838 = arguments.length;
switch (G__25838) {
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
var c__24166__auto___25904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_25876){
var state_val_25877 = (state_25876[(1)]);
if((state_val_25877 === (7))){
var inst_25872 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25878_25905 = state_25876__$1;
(statearr_25878_25905[(2)] = inst_25872);

(statearr_25878_25905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (1))){
var inst_25839 = (new Array(n));
var inst_25840 = inst_25839;
var inst_25841 = (0);
var state_25876__$1 = (function (){var statearr_25879 = state_25876;
(statearr_25879[(7)] = inst_25840);

(statearr_25879[(8)] = inst_25841);

return statearr_25879;
})();
var statearr_25880_25906 = state_25876__$1;
(statearr_25880_25906[(2)] = null);

(statearr_25880_25906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (4))){
var inst_25844 = (state_25876[(9)]);
var inst_25844__$1 = (state_25876[(2)]);
var inst_25845 = (inst_25844__$1 == null);
var inst_25846 = cljs.core.not.call(null,inst_25845);
var state_25876__$1 = (function (){var statearr_25881 = state_25876;
(statearr_25881[(9)] = inst_25844__$1);

return statearr_25881;
})();
if(inst_25846){
var statearr_25882_25907 = state_25876__$1;
(statearr_25882_25907[(1)] = (5));

} else {
var statearr_25883_25908 = state_25876__$1;
(statearr_25883_25908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (15))){
var inst_25866 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25884_25909 = state_25876__$1;
(statearr_25884_25909[(2)] = inst_25866);

(statearr_25884_25909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (13))){
var state_25876__$1 = state_25876;
var statearr_25885_25910 = state_25876__$1;
(statearr_25885_25910[(2)] = null);

(statearr_25885_25910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (6))){
var inst_25841 = (state_25876[(8)]);
var inst_25862 = (inst_25841 > (0));
var state_25876__$1 = state_25876;
if(cljs.core.truth_(inst_25862)){
var statearr_25886_25911 = state_25876__$1;
(statearr_25886_25911[(1)] = (12));

} else {
var statearr_25887_25912 = state_25876__$1;
(statearr_25887_25912[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (3))){
var inst_25874 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25876__$1,inst_25874);
} else {
if((state_val_25877 === (12))){
var inst_25840 = (state_25876[(7)]);
var inst_25864 = cljs.core.vec.call(null,inst_25840);
var state_25876__$1 = state_25876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25876__$1,(15),out,inst_25864);
} else {
if((state_val_25877 === (2))){
var state_25876__$1 = state_25876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25876__$1,(4),ch);
} else {
if((state_val_25877 === (11))){
var inst_25856 = (state_25876[(2)]);
var inst_25857 = (new Array(n));
var inst_25840 = inst_25857;
var inst_25841 = (0);
var state_25876__$1 = (function (){var statearr_25888 = state_25876;
(statearr_25888[(7)] = inst_25840);

(statearr_25888[(8)] = inst_25841);

(statearr_25888[(10)] = inst_25856);

return statearr_25888;
})();
var statearr_25889_25913 = state_25876__$1;
(statearr_25889_25913[(2)] = null);

(statearr_25889_25913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (9))){
var inst_25840 = (state_25876[(7)]);
var inst_25854 = cljs.core.vec.call(null,inst_25840);
var state_25876__$1 = state_25876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25876__$1,(11),out,inst_25854);
} else {
if((state_val_25877 === (5))){
var inst_25840 = (state_25876[(7)]);
var inst_25849 = (state_25876[(11)]);
var inst_25841 = (state_25876[(8)]);
var inst_25844 = (state_25876[(9)]);
var inst_25848 = (inst_25840[inst_25841] = inst_25844);
var inst_25849__$1 = (inst_25841 + (1));
var inst_25850 = (inst_25849__$1 < n);
var state_25876__$1 = (function (){var statearr_25890 = state_25876;
(statearr_25890[(11)] = inst_25849__$1);

(statearr_25890[(12)] = inst_25848);

return statearr_25890;
})();
if(cljs.core.truth_(inst_25850)){
var statearr_25891_25914 = state_25876__$1;
(statearr_25891_25914[(1)] = (8));

} else {
var statearr_25892_25915 = state_25876__$1;
(statearr_25892_25915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (14))){
var inst_25869 = (state_25876[(2)]);
var inst_25870 = cljs.core.async.close_BANG_.call(null,out);
var state_25876__$1 = (function (){var statearr_25894 = state_25876;
(statearr_25894[(13)] = inst_25869);

return statearr_25894;
})();
var statearr_25895_25916 = state_25876__$1;
(statearr_25895_25916[(2)] = inst_25870);

(statearr_25895_25916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (10))){
var inst_25860 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25896_25917 = state_25876__$1;
(statearr_25896_25917[(2)] = inst_25860);

(statearr_25896_25917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (8))){
var inst_25840 = (state_25876[(7)]);
var inst_25849 = (state_25876[(11)]);
var tmp25893 = inst_25840;
var inst_25840__$1 = tmp25893;
var inst_25841 = inst_25849;
var state_25876__$1 = (function (){var statearr_25897 = state_25876;
(statearr_25897[(7)] = inst_25840__$1);

(statearr_25897[(8)] = inst_25841);

return statearr_25897;
})();
var statearr_25898_25918 = state_25876__$1;
(statearr_25898_25918[(2)] = null);

(statearr_25898_25918[(1)] = (2));


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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_25899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25899[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_25899[(1)] = (1));

return statearr_25899;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_25876){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_25876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e25900){if((e25900 instanceof Object)){
var ex__24075__auto__ = e25900;
var statearr_25901_25919 = state_25876;
(statearr_25901_25919[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25920 = state_25876;
state_25876 = G__25920;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_25876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_25876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_25902 = f__24167__auto__.call(null);
(statearr_25902[(6)] = c__24166__auto___25904);

return statearr_25902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25922 = arguments.length;
switch (G__25922) {
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
var c__24166__auto___25992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_25964){
var state_val_25965 = (state_25964[(1)]);
if((state_val_25965 === (7))){
var inst_25960 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
var statearr_25966_25993 = state_25964__$1;
(statearr_25966_25993[(2)] = inst_25960);

(statearr_25966_25993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (1))){
var inst_25923 = [];
var inst_25924 = inst_25923;
var inst_25925 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25964__$1 = (function (){var statearr_25967 = state_25964;
(statearr_25967[(7)] = inst_25924);

(statearr_25967[(8)] = inst_25925);

return statearr_25967;
})();
var statearr_25968_25994 = state_25964__$1;
(statearr_25968_25994[(2)] = null);

(statearr_25968_25994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (4))){
var inst_25928 = (state_25964[(9)]);
var inst_25928__$1 = (state_25964[(2)]);
var inst_25929 = (inst_25928__$1 == null);
var inst_25930 = cljs.core.not.call(null,inst_25929);
var state_25964__$1 = (function (){var statearr_25969 = state_25964;
(statearr_25969[(9)] = inst_25928__$1);

return statearr_25969;
})();
if(inst_25930){
var statearr_25970_25995 = state_25964__$1;
(statearr_25970_25995[(1)] = (5));

} else {
var statearr_25971_25996 = state_25964__$1;
(statearr_25971_25996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (15))){
var inst_25954 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
var statearr_25972_25997 = state_25964__$1;
(statearr_25972_25997[(2)] = inst_25954);

(statearr_25972_25997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (13))){
var state_25964__$1 = state_25964;
var statearr_25973_25998 = state_25964__$1;
(statearr_25973_25998[(2)] = null);

(statearr_25973_25998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (6))){
var inst_25924 = (state_25964[(7)]);
var inst_25949 = inst_25924.length;
var inst_25950 = (inst_25949 > (0));
var state_25964__$1 = state_25964;
if(cljs.core.truth_(inst_25950)){
var statearr_25974_25999 = state_25964__$1;
(statearr_25974_25999[(1)] = (12));

} else {
var statearr_25975_26000 = state_25964__$1;
(statearr_25975_26000[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (3))){
var inst_25962 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25964__$1,inst_25962);
} else {
if((state_val_25965 === (12))){
var inst_25924 = (state_25964[(7)]);
var inst_25952 = cljs.core.vec.call(null,inst_25924);
var state_25964__$1 = state_25964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25964__$1,(15),out,inst_25952);
} else {
if((state_val_25965 === (2))){
var state_25964__$1 = state_25964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25964__$1,(4),ch);
} else {
if((state_val_25965 === (11))){
var inst_25932 = (state_25964[(10)]);
var inst_25928 = (state_25964[(9)]);
var inst_25942 = (state_25964[(2)]);
var inst_25943 = [];
var inst_25944 = inst_25943.push(inst_25928);
var inst_25924 = inst_25943;
var inst_25925 = inst_25932;
var state_25964__$1 = (function (){var statearr_25976 = state_25964;
(statearr_25976[(7)] = inst_25924);

(statearr_25976[(11)] = inst_25942);

(statearr_25976[(12)] = inst_25944);

(statearr_25976[(8)] = inst_25925);

return statearr_25976;
})();
var statearr_25977_26001 = state_25964__$1;
(statearr_25977_26001[(2)] = null);

(statearr_25977_26001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (9))){
var inst_25924 = (state_25964[(7)]);
var inst_25940 = cljs.core.vec.call(null,inst_25924);
var state_25964__$1 = state_25964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25964__$1,(11),out,inst_25940);
} else {
if((state_val_25965 === (5))){
var inst_25932 = (state_25964[(10)]);
var inst_25928 = (state_25964[(9)]);
var inst_25925 = (state_25964[(8)]);
var inst_25932__$1 = f.call(null,inst_25928);
var inst_25933 = cljs.core._EQ_.call(null,inst_25932__$1,inst_25925);
var inst_25934 = cljs.core.keyword_identical_QMARK_.call(null,inst_25925,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25935 = ((inst_25933) || (inst_25934));
var state_25964__$1 = (function (){var statearr_25978 = state_25964;
(statearr_25978[(10)] = inst_25932__$1);

return statearr_25978;
})();
if(cljs.core.truth_(inst_25935)){
var statearr_25979_26002 = state_25964__$1;
(statearr_25979_26002[(1)] = (8));

} else {
var statearr_25980_26003 = state_25964__$1;
(statearr_25980_26003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (14))){
var inst_25957 = (state_25964[(2)]);
var inst_25958 = cljs.core.async.close_BANG_.call(null,out);
var state_25964__$1 = (function (){var statearr_25982 = state_25964;
(statearr_25982[(13)] = inst_25957);

return statearr_25982;
})();
var statearr_25983_26004 = state_25964__$1;
(statearr_25983_26004[(2)] = inst_25958);

(statearr_25983_26004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (10))){
var inst_25947 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
var statearr_25984_26005 = state_25964__$1;
(statearr_25984_26005[(2)] = inst_25947);

(statearr_25984_26005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (8))){
var inst_25932 = (state_25964[(10)]);
var inst_25924 = (state_25964[(7)]);
var inst_25928 = (state_25964[(9)]);
var inst_25937 = inst_25924.push(inst_25928);
var tmp25981 = inst_25924;
var inst_25924__$1 = tmp25981;
var inst_25925 = inst_25932;
var state_25964__$1 = (function (){var statearr_25985 = state_25964;
(statearr_25985[(14)] = inst_25937);

(statearr_25985[(7)] = inst_25924__$1);

(statearr_25985[(8)] = inst_25925);

return statearr_25985;
})();
var statearr_25986_26006 = state_25964__$1;
(statearr_25986_26006[(2)] = null);

(statearr_25986_26006[(1)] = (2));


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
var cljs$core$async$state_machine__24072__auto__ = null;
var cljs$core$async$state_machine__24072__auto____0 = (function (){
var statearr_25987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25987[(0)] = cljs$core$async$state_machine__24072__auto__);

(statearr_25987[(1)] = (1));

return statearr_25987;
});
var cljs$core$async$state_machine__24072__auto____1 = (function (state_25964){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_25964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e25988){if((e25988 instanceof Object)){
var ex__24075__auto__ = e25988;
var statearr_25989_26007 = state_25964;
(statearr_25989_26007[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26008 = state_25964;
state_25964 = G__26008;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
cljs$core$async$state_machine__24072__auto__ = function(state_25964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24072__auto____1.call(this,state_25964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24072__auto____0;
cljs$core$async$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24072__auto____1;
return cljs$core$async$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_25990 = f__24167__auto__.call(null);
(statearr_25990[(6)] = c__24166__auto___25992);

return statearr_25990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1717626495665
