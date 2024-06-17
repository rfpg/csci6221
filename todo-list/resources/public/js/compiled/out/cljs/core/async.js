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
var G__26186 = arguments.length;
switch (G__26186) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26187 = (function (f,blockable,meta26188){
this.f = f;
this.blockable = blockable;
this.meta26188 = meta26188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26189,meta26188__$1){
var self__ = this;
var _26189__$1 = this;
return (new cljs.core.async.t_cljs$core$async26187(self__.f,self__.blockable,meta26188__$1));
}));

(cljs.core.async.t_cljs$core$async26187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26189){
var self__ = this;
var _26189__$1 = this;
return self__.meta26188;
}));

(cljs.core.async.t_cljs$core$async26187.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26188","meta26188",-1921571978,null)], null);
}));

(cljs.core.async.t_cljs$core$async26187.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26187");

(cljs.core.async.t_cljs$core$async26187.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26187");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26187.
 */
cljs.core.async.__GT_t_cljs$core$async26187 = (function cljs$core$async$__GT_t_cljs$core$async26187(f__$1,blockable__$1,meta26188){
return (new cljs.core.async.t_cljs$core$async26187(f__$1,blockable__$1,meta26188));
});

}

return (new cljs.core.async.t_cljs$core$async26187(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26193 = arguments.length;
switch (G__26193) {
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
var G__26196 = arguments.length;
switch (G__26196) {
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
var G__26199 = arguments.length;
switch (G__26199) {
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
var val_26201 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26201);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26201);
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
var G__26203 = arguments.length;
switch (G__26203) {
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
var n__4648__auto___26205 = n;
var x_26206 = (0);
while(true){
if((x_26206 < n__4648__auto___26205)){
(a[x_26206] = (0));

var G__26207 = (x_26206 + (1));
x_26206 = G__26207;
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

var G__26208 = (i + (1));
i = G__26208;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26209 = (function (flag,meta26210){
this.flag = flag;
this.meta26210 = meta26210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26211,meta26210__$1){
var self__ = this;
var _26211__$1 = this;
return (new cljs.core.async.t_cljs$core$async26209(self__.flag,meta26210__$1));
}));

(cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26211){
var self__ = this;
var _26211__$1 = this;
return self__.meta26210;
}));

(cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26210","meta26210",1267560916,null)], null);
}));

(cljs.core.async.t_cljs$core$async26209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26209");

(cljs.core.async.t_cljs$core$async26209.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26209.
 */
cljs.core.async.__GT_t_cljs$core$async26209 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26209(flag__$1,meta26210){
return (new cljs.core.async.t_cljs$core$async26209(flag__$1,meta26210));
});

}

return (new cljs.core.async.t_cljs$core$async26209(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26212 = (function (flag,cb,meta26213){
this.flag = flag;
this.cb = cb;
this.meta26213 = meta26213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26214,meta26213__$1){
var self__ = this;
var _26214__$1 = this;
return (new cljs.core.async.t_cljs$core$async26212(self__.flag,self__.cb,meta26213__$1));
}));

(cljs.core.async.t_cljs$core$async26212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26214){
var self__ = this;
var _26214__$1 = this;
return self__.meta26213;
}));

(cljs.core.async.t_cljs$core$async26212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26213","meta26213",-1018950058,null)], null);
}));

(cljs.core.async.t_cljs$core$async26212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26212");

(cljs.core.async.t_cljs$core$async26212.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26212.
 */
cljs.core.async.__GT_t_cljs$core$async26212 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26212(flag__$1,cb__$1,meta26213){
return (new cljs.core.async.t_cljs$core$async26212(flag__$1,cb__$1,meta26213));
});

}

return (new cljs.core.async.t_cljs$core$async26212(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26215_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26215_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26216_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26216_SHARP_,port], null));
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
var G__26217 = (i + (1));
i = G__26217;
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
var len__4771__auto___26222 = arguments.length;
var i__4772__auto___26223 = (0);
while(true){
if((i__4772__auto___26223 < len__4771__auto___26222)){
args__4777__auto__.push((arguments[i__4772__auto___26223]));

var G__26224 = (i__4772__auto___26223 + (1));
i__4772__auto___26223 = G__26224;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26220){
var map__26221 = p__26220;
var map__26221__$1 = cljs.core.__destructure_map.call(null,map__26221);
var opts = map__26221__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26218){
var G__26219 = cljs.core.first.call(null,seq26218);
var seq26218__$1 = cljs.core.next.call(null,seq26218);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26219,seq26218__$1);
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
var G__26226 = arguments.length;
switch (G__26226) {
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
var c__26126__auto___26272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_26250){
var state_val_26251 = (state_26250[(1)]);
if((state_val_26251 === (7))){
var inst_26246 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
var statearr_26252_26273 = state_26250__$1;
(statearr_26252_26273[(2)] = inst_26246);

(statearr_26252_26273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (1))){
var state_26250__$1 = state_26250;
var statearr_26253_26274 = state_26250__$1;
(statearr_26253_26274[(2)] = null);

(statearr_26253_26274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (4))){
var inst_26229 = (state_26250[(7)]);
var inst_26229__$1 = (state_26250[(2)]);
var inst_26230 = (inst_26229__$1 == null);
var state_26250__$1 = (function (){var statearr_26254 = state_26250;
(statearr_26254[(7)] = inst_26229__$1);

return statearr_26254;
})();
if(cljs.core.truth_(inst_26230)){
var statearr_26255_26275 = state_26250__$1;
(statearr_26255_26275[(1)] = (5));

} else {
var statearr_26256_26276 = state_26250__$1;
(statearr_26256_26276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (13))){
var state_26250__$1 = state_26250;
var statearr_26257_26277 = state_26250__$1;
(statearr_26257_26277[(2)] = null);

(statearr_26257_26277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (6))){
var inst_26229 = (state_26250[(7)]);
var state_26250__$1 = state_26250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26250__$1,(11),to,inst_26229);
} else {
if((state_val_26251 === (3))){
var inst_26248 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26250__$1,inst_26248);
} else {
if((state_val_26251 === (12))){
var state_26250__$1 = state_26250;
var statearr_26258_26278 = state_26250__$1;
(statearr_26258_26278[(2)] = null);

(statearr_26258_26278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (2))){
var state_26250__$1 = state_26250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26250__$1,(4),from);
} else {
if((state_val_26251 === (11))){
var inst_26239 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
if(cljs.core.truth_(inst_26239)){
var statearr_26259_26279 = state_26250__$1;
(statearr_26259_26279[(1)] = (12));

} else {
var statearr_26260_26280 = state_26250__$1;
(statearr_26260_26280[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (9))){
var state_26250__$1 = state_26250;
var statearr_26261_26281 = state_26250__$1;
(statearr_26261_26281[(2)] = null);

(statearr_26261_26281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (5))){
var state_26250__$1 = state_26250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26262_26282 = state_26250__$1;
(statearr_26262_26282[(1)] = (8));

} else {
var statearr_26263_26283 = state_26250__$1;
(statearr_26263_26283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (14))){
var inst_26244 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
var statearr_26264_26284 = state_26250__$1;
(statearr_26264_26284[(2)] = inst_26244);

(statearr_26264_26284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (10))){
var inst_26236 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
var statearr_26265_26285 = state_26250__$1;
(statearr_26265_26285[(2)] = inst_26236);

(statearr_26265_26285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (8))){
var inst_26233 = cljs.core.async.close_BANG_.call(null,to);
var state_26250__$1 = state_26250;
var statearr_26266_26286 = state_26250__$1;
(statearr_26266_26286[(2)] = inst_26233);

(statearr_26266_26286[(1)] = (10));


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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_26267 = [null,null,null,null,null,null,null,null];
(statearr_26267[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_26267[(1)] = (1));

return statearr_26267;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_26250){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26268){if((e26268 instanceof Object)){
var ex__26035__auto__ = e26268;
var statearr_26269_26287 = state_26250;
(statearr_26269_26287[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26288 = state_26250;
state_26250 = G__26288;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_26250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_26250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_26270 = f__26127__auto__.call(null);
(statearr_26270[(6)] = c__26126__auto___26272);

return statearr_26270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
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
var process = (function (p__26289){
var vec__26290 = p__26289;
var v = cljs.core.nth.call(null,vec__26290,(0),null);
var p = cljs.core.nth.call(null,vec__26290,(1),null);
var job = vec__26290;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26126__auto___26461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_26297){
var state_val_26298 = (state_26297[(1)]);
if((state_val_26298 === (1))){
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26297__$1,(2),res,v);
} else {
if((state_val_26298 === (2))){
var inst_26294 = (state_26297[(2)]);
var inst_26295 = cljs.core.async.close_BANG_.call(null,res);
var state_26297__$1 = (function (){var statearr_26299 = state_26297;
(statearr_26299[(7)] = inst_26294);

return statearr_26299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26297__$1,inst_26295);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0 = (function (){
var statearr_26300 = [null,null,null,null,null,null,null,null];
(statearr_26300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__);

(statearr_26300[(1)] = (1));

return statearr_26300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1 = (function (state_26297){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26301){if((e26301 instanceof Object)){
var ex__26035__auto__ = e26301;
var statearr_26302_26462 = state_26297;
(statearr_26302_26462[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26463 = state_26297;
state_26297 = G__26463;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = function(state_26297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1.call(this,state_26297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_26303 = f__26127__auto__.call(null);
(statearr_26303[(6)] = c__26126__auto___26461);

return statearr_26303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26304){
var vec__26305 = p__26304;
var v = cljs.core.nth.call(null,vec__26305,(0),null);
var p = cljs.core.nth.call(null,vec__26305,(1),null);
var job = vec__26305;
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
var n__4648__auto___26464 = n;
var __26465 = (0);
while(true){
if((__26465 < n__4648__auto___26464)){
var G__26308_26466 = type;
var G__26308_26467__$1 = (((G__26308_26466 instanceof cljs.core.Keyword))?G__26308_26466.fqn:null);
switch (G__26308_26467__$1) {
case "compute":
var c__26126__auto___26469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26465,c__26126__auto___26469,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async){
return (function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = ((function (__26465,c__26126__auto___26469,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async){
return (function (state_26321){
var state_val_26322 = (state_26321[(1)]);
if((state_val_26322 === (1))){
var state_26321__$1 = state_26321;
var statearr_26323_26470 = state_26321__$1;
(statearr_26323_26470[(2)] = null);

(statearr_26323_26470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26322 === (2))){
var state_26321__$1 = state_26321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26321__$1,(4),jobs);
} else {
if((state_val_26322 === (3))){
var inst_26319 = (state_26321[(2)]);
var state_26321__$1 = state_26321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26321__$1,inst_26319);
} else {
if((state_val_26322 === (4))){
var inst_26311 = (state_26321[(2)]);
var inst_26312 = process.call(null,inst_26311);
var state_26321__$1 = state_26321;
if(cljs.core.truth_(inst_26312)){
var statearr_26324_26471 = state_26321__$1;
(statearr_26324_26471[(1)] = (5));

} else {
var statearr_26325_26472 = state_26321__$1;
(statearr_26325_26472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26322 === (5))){
var state_26321__$1 = state_26321;
var statearr_26326_26473 = state_26321__$1;
(statearr_26326_26473[(2)] = null);

(statearr_26326_26473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26322 === (6))){
var state_26321__$1 = state_26321;
var statearr_26327_26474 = state_26321__$1;
(statearr_26327_26474[(2)] = null);

(statearr_26327_26474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26322 === (7))){
var inst_26317 = (state_26321[(2)]);
var state_26321__$1 = state_26321;
var statearr_26328_26475 = state_26321__$1;
(statearr_26328_26475[(2)] = inst_26317);

(statearr_26328_26475[(1)] = (3));


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
});})(__26465,c__26126__auto___26469,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async))
;
return ((function (__26465,switch__26031__auto__,c__26126__auto___26469,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0 = (function (){
var statearr_26329 = [null,null,null,null,null,null,null];
(statearr_26329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__);

(statearr_26329[(1)] = (1));

return statearr_26329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1 = (function (state_26321){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26330){if((e26330 instanceof Object)){
var ex__26035__auto__ = e26330;
var statearr_26331_26476 = state_26321;
(statearr_26331_26476[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26477 = state_26321;
state_26321 = G__26477;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = function(state_26321){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1.call(this,state_26321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__;
})()
;})(__26465,switch__26031__auto__,c__26126__auto___26469,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async))
})();
var state__26128__auto__ = (function (){var statearr_26332 = f__26127__auto__.call(null);
(statearr_26332[(6)] = c__26126__auto___26469);

return statearr_26332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
});})(__26465,c__26126__auto___26469,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async))
);


break;
case "async":
var c__26126__auto___26478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26465,c__26126__auto___26478,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async){
return (function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = ((function (__26465,c__26126__auto___26478,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async){
return (function (state_26345){
var state_val_26346 = (state_26345[(1)]);
if((state_val_26346 === (1))){
var state_26345__$1 = state_26345;
var statearr_26347_26479 = state_26345__$1;
(statearr_26347_26479[(2)] = null);

(statearr_26347_26479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (2))){
var state_26345__$1 = state_26345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26345__$1,(4),jobs);
} else {
if((state_val_26346 === (3))){
var inst_26343 = (state_26345[(2)]);
var state_26345__$1 = state_26345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26345__$1,inst_26343);
} else {
if((state_val_26346 === (4))){
var inst_26335 = (state_26345[(2)]);
var inst_26336 = async.call(null,inst_26335);
var state_26345__$1 = state_26345;
if(cljs.core.truth_(inst_26336)){
var statearr_26348_26480 = state_26345__$1;
(statearr_26348_26480[(1)] = (5));

} else {
var statearr_26349_26481 = state_26345__$1;
(statearr_26349_26481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (5))){
var state_26345__$1 = state_26345;
var statearr_26350_26482 = state_26345__$1;
(statearr_26350_26482[(2)] = null);

(statearr_26350_26482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (6))){
var state_26345__$1 = state_26345;
var statearr_26351_26483 = state_26345__$1;
(statearr_26351_26483[(2)] = null);

(statearr_26351_26483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (7))){
var inst_26341 = (state_26345[(2)]);
var state_26345__$1 = state_26345;
var statearr_26352_26484 = state_26345__$1;
(statearr_26352_26484[(2)] = inst_26341);

(statearr_26352_26484[(1)] = (3));


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
});})(__26465,c__26126__auto___26478,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async))
;
return ((function (__26465,switch__26031__auto__,c__26126__auto___26478,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0 = (function (){
var statearr_26353 = [null,null,null,null,null,null,null];
(statearr_26353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__);

(statearr_26353[(1)] = (1));

return statearr_26353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1 = (function (state_26345){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26354){if((e26354 instanceof Object)){
var ex__26035__auto__ = e26354;
var statearr_26355_26485 = state_26345;
(statearr_26355_26485[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26486 = state_26345;
state_26345 = G__26486;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = function(state_26345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1.call(this,state_26345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__;
})()
;})(__26465,switch__26031__auto__,c__26126__auto___26478,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async))
})();
var state__26128__auto__ = (function (){var statearr_26356 = f__26127__auto__.call(null);
(statearr_26356[(6)] = c__26126__auto___26478);

return statearr_26356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
});})(__26465,c__26126__auto___26478,G__26308_26466,G__26308_26467__$1,n__4648__auto___26464,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26308_26467__$1)].join('')));

}

var G__26487 = (__26465 + (1));
__26465 = G__26487;
continue;
} else {
}
break;
}

var c__26126__auto___26488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_26378){
var state_val_26379 = (state_26378[(1)]);
if((state_val_26379 === (7))){
var inst_26374 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26380_26489 = state_26378__$1;
(statearr_26380_26489[(2)] = inst_26374);

(statearr_26380_26489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (1))){
var state_26378__$1 = state_26378;
var statearr_26381_26490 = state_26378__$1;
(statearr_26381_26490[(2)] = null);

(statearr_26381_26490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (4))){
var inst_26359 = (state_26378[(7)]);
var inst_26359__$1 = (state_26378[(2)]);
var inst_26360 = (inst_26359__$1 == null);
var state_26378__$1 = (function (){var statearr_26382 = state_26378;
(statearr_26382[(7)] = inst_26359__$1);

return statearr_26382;
})();
if(cljs.core.truth_(inst_26360)){
var statearr_26383_26491 = state_26378__$1;
(statearr_26383_26491[(1)] = (5));

} else {
var statearr_26384_26492 = state_26378__$1;
(statearr_26384_26492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (6))){
var inst_26364 = (state_26378[(8)]);
var inst_26359 = (state_26378[(7)]);
var inst_26364__$1 = cljs.core.async.chan.call(null,(1));
var inst_26365 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26366 = [inst_26359,inst_26364__$1];
var inst_26367 = (new cljs.core.PersistentVector(null,2,(5),inst_26365,inst_26366,null));
var state_26378__$1 = (function (){var statearr_26385 = state_26378;
(statearr_26385[(8)] = inst_26364__$1);

return statearr_26385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26378__$1,(8),jobs,inst_26367);
} else {
if((state_val_26379 === (3))){
var inst_26376 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26378__$1,inst_26376);
} else {
if((state_val_26379 === (2))){
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26378__$1,(4),from);
} else {
if((state_val_26379 === (9))){
var inst_26371 = (state_26378[(2)]);
var state_26378__$1 = (function (){var statearr_26386 = state_26378;
(statearr_26386[(9)] = inst_26371);

return statearr_26386;
})();
var statearr_26387_26493 = state_26378__$1;
(statearr_26387_26493[(2)] = null);

(statearr_26387_26493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (5))){
var inst_26362 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26378__$1 = state_26378;
var statearr_26388_26494 = state_26378__$1;
(statearr_26388_26494[(2)] = inst_26362);

(statearr_26388_26494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (8))){
var inst_26364 = (state_26378[(8)]);
var inst_26369 = (state_26378[(2)]);
var state_26378__$1 = (function (){var statearr_26389 = state_26378;
(statearr_26389[(10)] = inst_26369);

return statearr_26389;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26378__$1,(9),results,inst_26364);
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
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0 = (function (){
var statearr_26390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__);

(statearr_26390[(1)] = (1));

return statearr_26390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1 = (function (state_26378){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26391){if((e26391 instanceof Object)){
var ex__26035__auto__ = e26391;
var statearr_26392_26495 = state_26378;
(statearr_26392_26495[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26496 = state_26378;
state_26378 = G__26496;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = function(state_26378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1.call(this,state_26378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_26393 = f__26127__auto__.call(null);
(statearr_26393[(6)] = c__26126__auto___26488);

return statearr_26393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_26431){
var state_val_26432 = (state_26431[(1)]);
if((state_val_26432 === (7))){
var inst_26427 = (state_26431[(2)]);
var state_26431__$1 = state_26431;
var statearr_26433_26497 = state_26431__$1;
(statearr_26433_26497[(2)] = inst_26427);

(statearr_26433_26497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (20))){
var state_26431__$1 = state_26431;
var statearr_26434_26498 = state_26431__$1;
(statearr_26434_26498[(2)] = null);

(statearr_26434_26498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (1))){
var state_26431__$1 = state_26431;
var statearr_26435_26499 = state_26431__$1;
(statearr_26435_26499[(2)] = null);

(statearr_26435_26499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (4))){
var inst_26396 = (state_26431[(7)]);
var inst_26396__$1 = (state_26431[(2)]);
var inst_26397 = (inst_26396__$1 == null);
var state_26431__$1 = (function (){var statearr_26436 = state_26431;
(statearr_26436[(7)] = inst_26396__$1);

return statearr_26436;
})();
if(cljs.core.truth_(inst_26397)){
var statearr_26437_26500 = state_26431__$1;
(statearr_26437_26500[(1)] = (5));

} else {
var statearr_26438_26501 = state_26431__$1;
(statearr_26438_26501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (15))){
var inst_26409 = (state_26431[(8)]);
var state_26431__$1 = state_26431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26431__$1,(18),to,inst_26409);
} else {
if((state_val_26432 === (21))){
var inst_26422 = (state_26431[(2)]);
var state_26431__$1 = state_26431;
var statearr_26439_26502 = state_26431__$1;
(statearr_26439_26502[(2)] = inst_26422);

(statearr_26439_26502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (13))){
var inst_26424 = (state_26431[(2)]);
var state_26431__$1 = (function (){var statearr_26440 = state_26431;
(statearr_26440[(9)] = inst_26424);

return statearr_26440;
})();
var statearr_26441_26503 = state_26431__$1;
(statearr_26441_26503[(2)] = null);

(statearr_26441_26503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (6))){
var inst_26396 = (state_26431[(7)]);
var state_26431__$1 = state_26431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26431__$1,(11),inst_26396);
} else {
if((state_val_26432 === (17))){
var inst_26417 = (state_26431[(2)]);
var state_26431__$1 = state_26431;
if(cljs.core.truth_(inst_26417)){
var statearr_26442_26504 = state_26431__$1;
(statearr_26442_26504[(1)] = (19));

} else {
var statearr_26443_26505 = state_26431__$1;
(statearr_26443_26505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (3))){
var inst_26429 = (state_26431[(2)]);
var state_26431__$1 = state_26431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26431__$1,inst_26429);
} else {
if((state_val_26432 === (12))){
var inst_26406 = (state_26431[(10)]);
var state_26431__$1 = state_26431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26431__$1,(14),inst_26406);
} else {
if((state_val_26432 === (2))){
var state_26431__$1 = state_26431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26431__$1,(4),results);
} else {
if((state_val_26432 === (19))){
var state_26431__$1 = state_26431;
var statearr_26444_26506 = state_26431__$1;
(statearr_26444_26506[(2)] = null);

(statearr_26444_26506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (11))){
var inst_26406 = (state_26431[(2)]);
var state_26431__$1 = (function (){var statearr_26445 = state_26431;
(statearr_26445[(10)] = inst_26406);

return statearr_26445;
})();
var statearr_26446_26507 = state_26431__$1;
(statearr_26446_26507[(2)] = null);

(statearr_26446_26507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (9))){
var state_26431__$1 = state_26431;
var statearr_26447_26508 = state_26431__$1;
(statearr_26447_26508[(2)] = null);

(statearr_26447_26508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (5))){
var state_26431__$1 = state_26431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26448_26509 = state_26431__$1;
(statearr_26448_26509[(1)] = (8));

} else {
var statearr_26449_26510 = state_26431__$1;
(statearr_26449_26510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (14))){
var inst_26409 = (state_26431[(8)]);
var inst_26409__$1 = (state_26431[(2)]);
var inst_26410 = (inst_26409__$1 == null);
var inst_26411 = cljs.core.not.call(null,inst_26410);
var state_26431__$1 = (function (){var statearr_26450 = state_26431;
(statearr_26450[(8)] = inst_26409__$1);

return statearr_26450;
})();
if(inst_26411){
var statearr_26451_26511 = state_26431__$1;
(statearr_26451_26511[(1)] = (15));

} else {
var statearr_26452_26512 = state_26431__$1;
(statearr_26452_26512[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (16))){
var state_26431__$1 = state_26431;
var statearr_26453_26513 = state_26431__$1;
(statearr_26453_26513[(2)] = false);

(statearr_26453_26513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (10))){
var inst_26403 = (state_26431[(2)]);
var state_26431__$1 = state_26431;
var statearr_26454_26514 = state_26431__$1;
(statearr_26454_26514[(2)] = inst_26403);

(statearr_26454_26514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (18))){
var inst_26414 = (state_26431[(2)]);
var state_26431__$1 = state_26431;
var statearr_26455_26515 = state_26431__$1;
(statearr_26455_26515[(2)] = inst_26414);

(statearr_26455_26515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26432 === (8))){
var inst_26400 = cljs.core.async.close_BANG_.call(null,to);
var state_26431__$1 = state_26431;
var statearr_26456_26516 = state_26431__$1;
(statearr_26456_26516[(2)] = inst_26400);

(statearr_26456_26516[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0 = (function (){
var statearr_26457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26457[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__);

(statearr_26457[(1)] = (1));

return statearr_26457;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1 = (function (state_26431){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26458){if((e26458 instanceof Object)){
var ex__26035__auto__ = e26458;
var statearr_26459_26517 = state_26431;
(statearr_26459_26517[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26518 = state_26431;
state_26431 = G__26518;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = function(state_26431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1.call(this,state_26431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_26460 = f__26127__auto__.call(null);
(statearr_26460[(6)] = c__26126__auto__);

return statearr_26460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
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
var G__26520 = arguments.length;
switch (G__26520) {
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
var G__26523 = arguments.length;
switch (G__26523) {
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
var G__26526 = arguments.length;
switch (G__26526) {
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
var c__26126__auto___26575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_26552){
var state_val_26553 = (state_26552[(1)]);
if((state_val_26553 === (7))){
var inst_26548 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
var statearr_26554_26576 = state_26552__$1;
(statearr_26554_26576[(2)] = inst_26548);

(statearr_26554_26576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (1))){
var state_26552__$1 = state_26552;
var statearr_26555_26577 = state_26552__$1;
(statearr_26555_26577[(2)] = null);

(statearr_26555_26577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (4))){
var inst_26529 = (state_26552[(7)]);
var inst_26529__$1 = (state_26552[(2)]);
var inst_26530 = (inst_26529__$1 == null);
var state_26552__$1 = (function (){var statearr_26556 = state_26552;
(statearr_26556[(7)] = inst_26529__$1);

return statearr_26556;
})();
if(cljs.core.truth_(inst_26530)){
var statearr_26557_26578 = state_26552__$1;
(statearr_26557_26578[(1)] = (5));

} else {
var statearr_26558_26579 = state_26552__$1;
(statearr_26558_26579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (13))){
var state_26552__$1 = state_26552;
var statearr_26559_26580 = state_26552__$1;
(statearr_26559_26580[(2)] = null);

(statearr_26559_26580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (6))){
var inst_26529 = (state_26552[(7)]);
var inst_26535 = p.call(null,inst_26529);
var state_26552__$1 = state_26552;
if(cljs.core.truth_(inst_26535)){
var statearr_26560_26581 = state_26552__$1;
(statearr_26560_26581[(1)] = (9));

} else {
var statearr_26561_26582 = state_26552__$1;
(statearr_26561_26582[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (3))){
var inst_26550 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26552__$1,inst_26550);
} else {
if((state_val_26553 === (12))){
var state_26552__$1 = state_26552;
var statearr_26562_26583 = state_26552__$1;
(statearr_26562_26583[(2)] = null);

(statearr_26562_26583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (2))){
var state_26552__$1 = state_26552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26552__$1,(4),ch);
} else {
if((state_val_26553 === (11))){
var inst_26529 = (state_26552[(7)]);
var inst_26539 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26552__$1,(8),inst_26539,inst_26529);
} else {
if((state_val_26553 === (9))){
var state_26552__$1 = state_26552;
var statearr_26563_26584 = state_26552__$1;
(statearr_26563_26584[(2)] = tc);

(statearr_26563_26584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (5))){
var inst_26532 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26533 = cljs.core.async.close_BANG_.call(null,fc);
var state_26552__$1 = (function (){var statearr_26564 = state_26552;
(statearr_26564[(8)] = inst_26532);

return statearr_26564;
})();
var statearr_26565_26585 = state_26552__$1;
(statearr_26565_26585[(2)] = inst_26533);

(statearr_26565_26585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (14))){
var inst_26546 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
var statearr_26566_26586 = state_26552__$1;
(statearr_26566_26586[(2)] = inst_26546);

(statearr_26566_26586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (10))){
var state_26552__$1 = state_26552;
var statearr_26567_26587 = state_26552__$1;
(statearr_26567_26587[(2)] = fc);

(statearr_26567_26587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (8))){
var inst_26541 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
if(cljs.core.truth_(inst_26541)){
var statearr_26568_26588 = state_26552__$1;
(statearr_26568_26588[(1)] = (12));

} else {
var statearr_26569_26589 = state_26552__$1;
(statearr_26569_26589[(1)] = (13));

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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_26570 = [null,null,null,null,null,null,null,null,null];
(statearr_26570[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_26570[(1)] = (1));

return statearr_26570;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_26552){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26571){if((e26571 instanceof Object)){
var ex__26035__auto__ = e26571;
var statearr_26572_26590 = state_26552;
(statearr_26572_26590[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26591 = state_26552;
state_26552 = G__26591;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_26552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_26552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_26573 = f__26127__auto__.call(null);
(statearr_26573[(6)] = c__26126__auto___26575);

return statearr_26573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
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
var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (7))){
var inst_26608 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26614_26632 = state_26612__$1;
(statearr_26614_26632[(2)] = inst_26608);

(statearr_26614_26632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (1))){
var inst_26592 = init;
var state_26612__$1 = (function (){var statearr_26615 = state_26612;
(statearr_26615[(7)] = inst_26592);

return statearr_26615;
})();
var statearr_26616_26633 = state_26612__$1;
(statearr_26616_26633[(2)] = null);

(statearr_26616_26633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (4))){
var inst_26595 = (state_26612[(8)]);
var inst_26595__$1 = (state_26612[(2)]);
var inst_26596 = (inst_26595__$1 == null);
var state_26612__$1 = (function (){var statearr_26617 = state_26612;
(statearr_26617[(8)] = inst_26595__$1);

return statearr_26617;
})();
if(cljs.core.truth_(inst_26596)){
var statearr_26618_26634 = state_26612__$1;
(statearr_26618_26634[(1)] = (5));

} else {
var statearr_26619_26635 = state_26612__$1;
(statearr_26619_26635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (6))){
var inst_26592 = (state_26612[(7)]);
var inst_26595 = (state_26612[(8)]);
var inst_26599 = (state_26612[(9)]);
var inst_26599__$1 = f.call(null,inst_26592,inst_26595);
var inst_26600 = cljs.core.reduced_QMARK_.call(null,inst_26599__$1);
var state_26612__$1 = (function (){var statearr_26620 = state_26612;
(statearr_26620[(9)] = inst_26599__$1);

return statearr_26620;
})();
if(inst_26600){
var statearr_26621_26636 = state_26612__$1;
(statearr_26621_26636[(1)] = (8));

} else {
var statearr_26622_26637 = state_26612__$1;
(statearr_26622_26637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (3))){
var inst_26610 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26612__$1,inst_26610);
} else {
if((state_val_26613 === (2))){
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26612__$1,(4),ch);
} else {
if((state_val_26613 === (9))){
var inst_26599 = (state_26612[(9)]);
var inst_26592 = inst_26599;
var state_26612__$1 = (function (){var statearr_26623 = state_26612;
(statearr_26623[(7)] = inst_26592);

return statearr_26623;
})();
var statearr_26624_26638 = state_26612__$1;
(statearr_26624_26638[(2)] = null);

(statearr_26624_26638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (5))){
var inst_26592 = (state_26612[(7)]);
var state_26612__$1 = state_26612;
var statearr_26625_26639 = state_26612__$1;
(statearr_26625_26639[(2)] = inst_26592);

(statearr_26625_26639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (10))){
var inst_26606 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26626_26640 = state_26612__$1;
(statearr_26626_26640[(2)] = inst_26606);

(statearr_26626_26640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (8))){
var inst_26599 = (state_26612[(9)]);
var inst_26602 = cljs.core.deref.call(null,inst_26599);
var state_26612__$1 = state_26612;
var statearr_26627_26641 = state_26612__$1;
(statearr_26627_26641[(2)] = inst_26602);

(statearr_26627_26641[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__26032__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26032__auto____0 = (function (){
var statearr_26628 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26628[(0)] = cljs$core$async$reduce_$_state_machine__26032__auto__);

(statearr_26628[(1)] = (1));

return statearr_26628;
});
var cljs$core$async$reduce_$_state_machine__26032__auto____1 = (function (state_26612){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26629){if((e26629 instanceof Object)){
var ex__26035__auto__ = e26629;
var statearr_26630_26642 = state_26612;
(statearr_26630_26642[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26643 = state_26612;
state_26612 = G__26643;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26032__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26032__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26032__auto____0;
cljs$core$async$reduce_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26032__auto____1;
return cljs$core$async$reduce_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_26631 = f__26127__auto__.call(null);
(statearr_26631[(6)] = c__26126__auto__);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_26649){
var state_val_26650 = (state_26649[(1)]);
if((state_val_26650 === (1))){
var inst_26644 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26649__$1,(2),inst_26644);
} else {
if((state_val_26650 === (2))){
var inst_26646 = (state_26649[(2)]);
var inst_26647 = f__$1.call(null,inst_26646);
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26649__$1,inst_26647);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26032__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26032__auto____0 = (function (){
var statearr_26651 = [null,null,null,null,null,null,null];
(statearr_26651[(0)] = cljs$core$async$transduce_$_state_machine__26032__auto__);

(statearr_26651[(1)] = (1));

return statearr_26651;
});
var cljs$core$async$transduce_$_state_machine__26032__auto____1 = (function (state_26649){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26652){if((e26652 instanceof Object)){
var ex__26035__auto__ = e26652;
var statearr_26653_26655 = state_26649;
(statearr_26653_26655[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26656 = state_26649;
state_26649 = G__26656;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26032__auto__ = function(state_26649){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26032__auto____1.call(this,state_26649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26032__auto____0;
cljs$core$async$transduce_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26032__auto____1;
return cljs$core$async$transduce_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_26654 = f__26127__auto__.call(null);
(statearr_26654[(6)] = c__26126__auto__);

return statearr_26654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
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
var G__26658 = arguments.length;
switch (G__26658) {
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
var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_26683){
var state_val_26684 = (state_26683[(1)]);
if((state_val_26684 === (7))){
var inst_26665 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
var statearr_26685_26706 = state_26683__$1;
(statearr_26685_26706[(2)] = inst_26665);

(statearr_26685_26706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (1))){
var inst_26659 = cljs.core.seq.call(null,coll);
var inst_26660 = inst_26659;
var state_26683__$1 = (function (){var statearr_26686 = state_26683;
(statearr_26686[(7)] = inst_26660);

return statearr_26686;
})();
var statearr_26687_26707 = state_26683__$1;
(statearr_26687_26707[(2)] = null);

(statearr_26687_26707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (4))){
var inst_26660 = (state_26683[(7)]);
var inst_26663 = cljs.core.first.call(null,inst_26660);
var state_26683__$1 = state_26683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26683__$1,(7),ch,inst_26663);
} else {
if((state_val_26684 === (13))){
var inst_26677 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
var statearr_26688_26708 = state_26683__$1;
(statearr_26688_26708[(2)] = inst_26677);

(statearr_26688_26708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (6))){
var inst_26668 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
if(cljs.core.truth_(inst_26668)){
var statearr_26689_26709 = state_26683__$1;
(statearr_26689_26709[(1)] = (8));

} else {
var statearr_26690_26710 = state_26683__$1;
(statearr_26690_26710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (3))){
var inst_26681 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26683__$1,inst_26681);
} else {
if((state_val_26684 === (12))){
var state_26683__$1 = state_26683;
var statearr_26691_26711 = state_26683__$1;
(statearr_26691_26711[(2)] = null);

(statearr_26691_26711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (2))){
var inst_26660 = (state_26683[(7)]);
var state_26683__$1 = state_26683;
if(cljs.core.truth_(inst_26660)){
var statearr_26692_26712 = state_26683__$1;
(statearr_26692_26712[(1)] = (4));

} else {
var statearr_26693_26713 = state_26683__$1;
(statearr_26693_26713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (11))){
var inst_26674 = cljs.core.async.close_BANG_.call(null,ch);
var state_26683__$1 = state_26683;
var statearr_26694_26714 = state_26683__$1;
(statearr_26694_26714[(2)] = inst_26674);

(statearr_26694_26714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (9))){
var state_26683__$1 = state_26683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26695_26715 = state_26683__$1;
(statearr_26695_26715[(1)] = (11));

} else {
var statearr_26696_26716 = state_26683__$1;
(statearr_26696_26716[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (5))){
var inst_26660 = (state_26683[(7)]);
var state_26683__$1 = state_26683;
var statearr_26697_26717 = state_26683__$1;
(statearr_26697_26717[(2)] = inst_26660);

(statearr_26697_26717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (10))){
var inst_26679 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
var statearr_26698_26718 = state_26683__$1;
(statearr_26698_26718[(2)] = inst_26679);

(statearr_26698_26718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (8))){
var inst_26660 = (state_26683[(7)]);
var inst_26670 = cljs.core.next.call(null,inst_26660);
var inst_26660__$1 = inst_26670;
var state_26683__$1 = (function (){var statearr_26699 = state_26683;
(statearr_26699[(7)] = inst_26660__$1);

return statearr_26699;
})();
var statearr_26700_26719 = state_26683__$1;
(statearr_26700_26719[(2)] = null);

(statearr_26700_26719[(1)] = (2));


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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_26701 = [null,null,null,null,null,null,null,null];
(statearr_26701[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_26701[(1)] = (1));

return statearr_26701;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_26683){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26702){if((e26702 instanceof Object)){
var ex__26035__auto__ = e26702;
var statearr_26703_26720 = state_26683;
(statearr_26703_26720[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26721 = state_26683;
state_26683 = G__26721;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_26683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_26683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_26704 = f__26127__auto__.call(null);
(statearr_26704[(6)] = c__26126__auto__);

return statearr_26704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_26722 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_26722.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_26723 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_26723.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_26724 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_26724.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_26725 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_26725.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26726 = (function (ch,cs,meta26727){
this.ch = ch;
this.cs = cs;
this.meta26727 = meta26727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26728,meta26727__$1){
var self__ = this;
var _26728__$1 = this;
return (new cljs.core.async.t_cljs$core$async26726(self__.ch,self__.cs,meta26727__$1));
}));

(cljs.core.async.t_cljs$core$async26726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26728){
var self__ = this;
var _26728__$1 = this;
return self__.meta26727;
}));

(cljs.core.async.t_cljs$core$async26726.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26726.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26726.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async26726.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async26726.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async26726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26727","meta26727",-1571314034,null)], null);
}));

(cljs.core.async.t_cljs$core$async26726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26726");

(cljs.core.async.t_cljs$core$async26726.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26726.
 */
cljs.core.async.__GT_t_cljs$core$async26726 = (function cljs$core$async$mult_$___GT_t_cljs$core$async26726(ch__$1,cs__$1,meta26727){
return (new cljs.core.async.t_cljs$core$async26726(ch__$1,cs__$1,meta26727));
});

}

return (new cljs.core.async.t_cljs$core$async26726(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26126__auto___26948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_26863){
var state_val_26864 = (state_26863[(1)]);
if((state_val_26864 === (7))){
var inst_26859 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26865_26949 = state_26863__$1;
(statearr_26865_26949[(2)] = inst_26859);

(statearr_26865_26949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (20))){
var inst_26762 = (state_26863[(7)]);
var inst_26774 = cljs.core.first.call(null,inst_26762);
var inst_26775 = cljs.core.nth.call(null,inst_26774,(0),null);
var inst_26776 = cljs.core.nth.call(null,inst_26774,(1),null);
var state_26863__$1 = (function (){var statearr_26866 = state_26863;
(statearr_26866[(8)] = inst_26775);

return statearr_26866;
})();
if(cljs.core.truth_(inst_26776)){
var statearr_26867_26950 = state_26863__$1;
(statearr_26867_26950[(1)] = (22));

} else {
var statearr_26868_26951 = state_26863__$1;
(statearr_26868_26951[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (27))){
var inst_26731 = (state_26863[(9)]);
var inst_26804 = (state_26863[(10)]);
var inst_26811 = (state_26863[(11)]);
var inst_26806 = (state_26863[(12)]);
var inst_26811__$1 = cljs.core._nth.call(null,inst_26804,inst_26806);
var inst_26812 = cljs.core.async.put_BANG_.call(null,inst_26811__$1,inst_26731,done);
var state_26863__$1 = (function (){var statearr_26869 = state_26863;
(statearr_26869[(11)] = inst_26811__$1);

return statearr_26869;
})();
if(cljs.core.truth_(inst_26812)){
var statearr_26870_26952 = state_26863__$1;
(statearr_26870_26952[(1)] = (30));

} else {
var statearr_26871_26953 = state_26863__$1;
(statearr_26871_26953[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (1))){
var state_26863__$1 = state_26863;
var statearr_26872_26954 = state_26863__$1;
(statearr_26872_26954[(2)] = null);

(statearr_26872_26954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (24))){
var inst_26762 = (state_26863[(7)]);
var inst_26781 = (state_26863[(2)]);
var inst_26782 = cljs.core.next.call(null,inst_26762);
var inst_26740 = inst_26782;
var inst_26741 = null;
var inst_26742 = (0);
var inst_26743 = (0);
var state_26863__$1 = (function (){var statearr_26873 = state_26863;
(statearr_26873[(13)] = inst_26743);

(statearr_26873[(14)] = inst_26741);

(statearr_26873[(15)] = inst_26740);

(statearr_26873[(16)] = inst_26781);

(statearr_26873[(17)] = inst_26742);

return statearr_26873;
})();
var statearr_26874_26955 = state_26863__$1;
(statearr_26874_26955[(2)] = null);

(statearr_26874_26955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (39))){
var state_26863__$1 = state_26863;
var statearr_26878_26956 = state_26863__$1;
(statearr_26878_26956[(2)] = null);

(statearr_26878_26956[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (4))){
var inst_26731 = (state_26863[(9)]);
var inst_26731__$1 = (state_26863[(2)]);
var inst_26732 = (inst_26731__$1 == null);
var state_26863__$1 = (function (){var statearr_26879 = state_26863;
(statearr_26879[(9)] = inst_26731__$1);

return statearr_26879;
})();
if(cljs.core.truth_(inst_26732)){
var statearr_26880_26957 = state_26863__$1;
(statearr_26880_26957[(1)] = (5));

} else {
var statearr_26881_26958 = state_26863__$1;
(statearr_26881_26958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (15))){
var inst_26743 = (state_26863[(13)]);
var inst_26741 = (state_26863[(14)]);
var inst_26740 = (state_26863[(15)]);
var inst_26742 = (state_26863[(17)]);
var inst_26758 = (state_26863[(2)]);
var inst_26759 = (inst_26743 + (1));
var tmp26875 = inst_26741;
var tmp26876 = inst_26740;
var tmp26877 = inst_26742;
var inst_26740__$1 = tmp26876;
var inst_26741__$1 = tmp26875;
var inst_26742__$1 = tmp26877;
var inst_26743__$1 = inst_26759;
var state_26863__$1 = (function (){var statearr_26882 = state_26863;
(statearr_26882[(13)] = inst_26743__$1);

(statearr_26882[(14)] = inst_26741__$1);

(statearr_26882[(15)] = inst_26740__$1);

(statearr_26882[(17)] = inst_26742__$1);

(statearr_26882[(18)] = inst_26758);

return statearr_26882;
})();
var statearr_26883_26959 = state_26863__$1;
(statearr_26883_26959[(2)] = null);

(statearr_26883_26959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (21))){
var inst_26785 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26887_26960 = state_26863__$1;
(statearr_26887_26960[(2)] = inst_26785);

(statearr_26887_26960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (31))){
var inst_26811 = (state_26863[(11)]);
var inst_26815 = done.call(null,null);
var inst_26816 = cljs.core.async.untap_STAR_.call(null,m,inst_26811);
var state_26863__$1 = (function (){var statearr_26888 = state_26863;
(statearr_26888[(19)] = inst_26815);

return statearr_26888;
})();
var statearr_26889_26961 = state_26863__$1;
(statearr_26889_26961[(2)] = inst_26816);

(statearr_26889_26961[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (32))){
var inst_26804 = (state_26863[(10)]);
var inst_26805 = (state_26863[(20)]);
var inst_26806 = (state_26863[(12)]);
var inst_26803 = (state_26863[(21)]);
var inst_26818 = (state_26863[(2)]);
var inst_26819 = (inst_26806 + (1));
var tmp26884 = inst_26804;
var tmp26885 = inst_26805;
var tmp26886 = inst_26803;
var inst_26803__$1 = tmp26886;
var inst_26804__$1 = tmp26884;
var inst_26805__$1 = tmp26885;
var inst_26806__$1 = inst_26819;
var state_26863__$1 = (function (){var statearr_26890 = state_26863;
(statearr_26890[(22)] = inst_26818);

(statearr_26890[(10)] = inst_26804__$1);

(statearr_26890[(20)] = inst_26805__$1);

(statearr_26890[(12)] = inst_26806__$1);

(statearr_26890[(21)] = inst_26803__$1);

return statearr_26890;
})();
var statearr_26891_26962 = state_26863__$1;
(statearr_26891_26962[(2)] = null);

(statearr_26891_26962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (40))){
var inst_26831 = (state_26863[(23)]);
var inst_26835 = done.call(null,null);
var inst_26836 = cljs.core.async.untap_STAR_.call(null,m,inst_26831);
var state_26863__$1 = (function (){var statearr_26892 = state_26863;
(statearr_26892[(24)] = inst_26835);

return statearr_26892;
})();
var statearr_26893_26963 = state_26863__$1;
(statearr_26893_26963[(2)] = inst_26836);

(statearr_26893_26963[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (33))){
var inst_26822 = (state_26863[(25)]);
var inst_26824 = cljs.core.chunked_seq_QMARK_.call(null,inst_26822);
var state_26863__$1 = state_26863;
if(inst_26824){
var statearr_26894_26964 = state_26863__$1;
(statearr_26894_26964[(1)] = (36));

} else {
var statearr_26895_26965 = state_26863__$1;
(statearr_26895_26965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (13))){
var inst_26752 = (state_26863[(26)]);
var inst_26755 = cljs.core.async.close_BANG_.call(null,inst_26752);
var state_26863__$1 = state_26863;
var statearr_26896_26966 = state_26863__$1;
(statearr_26896_26966[(2)] = inst_26755);

(statearr_26896_26966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (22))){
var inst_26775 = (state_26863[(8)]);
var inst_26778 = cljs.core.async.close_BANG_.call(null,inst_26775);
var state_26863__$1 = state_26863;
var statearr_26897_26967 = state_26863__$1;
(statearr_26897_26967[(2)] = inst_26778);

(statearr_26897_26967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (36))){
var inst_26822 = (state_26863[(25)]);
var inst_26826 = cljs.core.chunk_first.call(null,inst_26822);
var inst_26827 = cljs.core.chunk_rest.call(null,inst_26822);
var inst_26828 = cljs.core.count.call(null,inst_26826);
var inst_26803 = inst_26827;
var inst_26804 = inst_26826;
var inst_26805 = inst_26828;
var inst_26806 = (0);
var state_26863__$1 = (function (){var statearr_26898 = state_26863;
(statearr_26898[(10)] = inst_26804);

(statearr_26898[(20)] = inst_26805);

(statearr_26898[(12)] = inst_26806);

(statearr_26898[(21)] = inst_26803);

return statearr_26898;
})();
var statearr_26899_26968 = state_26863__$1;
(statearr_26899_26968[(2)] = null);

(statearr_26899_26968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (41))){
var inst_26822 = (state_26863[(25)]);
var inst_26838 = (state_26863[(2)]);
var inst_26839 = cljs.core.next.call(null,inst_26822);
var inst_26803 = inst_26839;
var inst_26804 = null;
var inst_26805 = (0);
var inst_26806 = (0);
var state_26863__$1 = (function (){var statearr_26900 = state_26863;
(statearr_26900[(10)] = inst_26804);

(statearr_26900[(27)] = inst_26838);

(statearr_26900[(20)] = inst_26805);

(statearr_26900[(12)] = inst_26806);

(statearr_26900[(21)] = inst_26803);

return statearr_26900;
})();
var statearr_26901_26969 = state_26863__$1;
(statearr_26901_26969[(2)] = null);

(statearr_26901_26969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (43))){
var state_26863__$1 = state_26863;
var statearr_26902_26970 = state_26863__$1;
(statearr_26902_26970[(2)] = null);

(statearr_26902_26970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (29))){
var inst_26847 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26903_26971 = state_26863__$1;
(statearr_26903_26971[(2)] = inst_26847);

(statearr_26903_26971[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (44))){
var inst_26856 = (state_26863[(2)]);
var state_26863__$1 = (function (){var statearr_26904 = state_26863;
(statearr_26904[(28)] = inst_26856);

return statearr_26904;
})();
var statearr_26905_26972 = state_26863__$1;
(statearr_26905_26972[(2)] = null);

(statearr_26905_26972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (6))){
var inst_26795 = (state_26863[(29)]);
var inst_26794 = cljs.core.deref.call(null,cs);
var inst_26795__$1 = cljs.core.keys.call(null,inst_26794);
var inst_26796 = cljs.core.count.call(null,inst_26795__$1);
var inst_26797 = cljs.core.reset_BANG_.call(null,dctr,inst_26796);
var inst_26802 = cljs.core.seq.call(null,inst_26795__$1);
var inst_26803 = inst_26802;
var inst_26804 = null;
var inst_26805 = (0);
var inst_26806 = (0);
var state_26863__$1 = (function (){var statearr_26906 = state_26863;
(statearr_26906[(29)] = inst_26795__$1);

(statearr_26906[(30)] = inst_26797);

(statearr_26906[(10)] = inst_26804);

(statearr_26906[(20)] = inst_26805);

(statearr_26906[(12)] = inst_26806);

(statearr_26906[(21)] = inst_26803);

return statearr_26906;
})();
var statearr_26907_26973 = state_26863__$1;
(statearr_26907_26973[(2)] = null);

(statearr_26907_26973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (28))){
var inst_26822 = (state_26863[(25)]);
var inst_26803 = (state_26863[(21)]);
var inst_26822__$1 = cljs.core.seq.call(null,inst_26803);
var state_26863__$1 = (function (){var statearr_26908 = state_26863;
(statearr_26908[(25)] = inst_26822__$1);

return statearr_26908;
})();
if(inst_26822__$1){
var statearr_26909_26974 = state_26863__$1;
(statearr_26909_26974[(1)] = (33));

} else {
var statearr_26910_26975 = state_26863__$1;
(statearr_26910_26975[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (25))){
var inst_26805 = (state_26863[(20)]);
var inst_26806 = (state_26863[(12)]);
var inst_26808 = (inst_26806 < inst_26805);
var inst_26809 = inst_26808;
var state_26863__$1 = state_26863;
if(cljs.core.truth_(inst_26809)){
var statearr_26911_26976 = state_26863__$1;
(statearr_26911_26976[(1)] = (27));

} else {
var statearr_26912_26977 = state_26863__$1;
(statearr_26912_26977[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (34))){
var state_26863__$1 = state_26863;
var statearr_26913_26978 = state_26863__$1;
(statearr_26913_26978[(2)] = null);

(statearr_26913_26978[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (17))){
var state_26863__$1 = state_26863;
var statearr_26914_26979 = state_26863__$1;
(statearr_26914_26979[(2)] = null);

(statearr_26914_26979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (3))){
var inst_26861 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26863__$1,inst_26861);
} else {
if((state_val_26864 === (12))){
var inst_26790 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26915_26980 = state_26863__$1;
(statearr_26915_26980[(2)] = inst_26790);

(statearr_26915_26980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (2))){
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26863__$1,(4),ch);
} else {
if((state_val_26864 === (23))){
var state_26863__$1 = state_26863;
var statearr_26916_26981 = state_26863__$1;
(statearr_26916_26981[(2)] = null);

(statearr_26916_26981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (35))){
var inst_26845 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26917_26982 = state_26863__$1;
(statearr_26917_26982[(2)] = inst_26845);

(statearr_26917_26982[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (19))){
var inst_26762 = (state_26863[(7)]);
var inst_26766 = cljs.core.chunk_first.call(null,inst_26762);
var inst_26767 = cljs.core.chunk_rest.call(null,inst_26762);
var inst_26768 = cljs.core.count.call(null,inst_26766);
var inst_26740 = inst_26767;
var inst_26741 = inst_26766;
var inst_26742 = inst_26768;
var inst_26743 = (0);
var state_26863__$1 = (function (){var statearr_26918 = state_26863;
(statearr_26918[(13)] = inst_26743);

(statearr_26918[(14)] = inst_26741);

(statearr_26918[(15)] = inst_26740);

(statearr_26918[(17)] = inst_26742);

return statearr_26918;
})();
var statearr_26919_26983 = state_26863__$1;
(statearr_26919_26983[(2)] = null);

(statearr_26919_26983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (11))){
var inst_26762 = (state_26863[(7)]);
var inst_26740 = (state_26863[(15)]);
var inst_26762__$1 = cljs.core.seq.call(null,inst_26740);
var state_26863__$1 = (function (){var statearr_26920 = state_26863;
(statearr_26920[(7)] = inst_26762__$1);

return statearr_26920;
})();
if(inst_26762__$1){
var statearr_26921_26984 = state_26863__$1;
(statearr_26921_26984[(1)] = (16));

} else {
var statearr_26922_26985 = state_26863__$1;
(statearr_26922_26985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (9))){
var inst_26792 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26923_26986 = state_26863__$1;
(statearr_26923_26986[(2)] = inst_26792);

(statearr_26923_26986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (5))){
var inst_26738 = cljs.core.deref.call(null,cs);
var inst_26739 = cljs.core.seq.call(null,inst_26738);
var inst_26740 = inst_26739;
var inst_26741 = null;
var inst_26742 = (0);
var inst_26743 = (0);
var state_26863__$1 = (function (){var statearr_26924 = state_26863;
(statearr_26924[(13)] = inst_26743);

(statearr_26924[(14)] = inst_26741);

(statearr_26924[(15)] = inst_26740);

(statearr_26924[(17)] = inst_26742);

return statearr_26924;
})();
var statearr_26925_26987 = state_26863__$1;
(statearr_26925_26987[(2)] = null);

(statearr_26925_26987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (14))){
var state_26863__$1 = state_26863;
var statearr_26926_26988 = state_26863__$1;
(statearr_26926_26988[(2)] = null);

(statearr_26926_26988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (45))){
var inst_26853 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26927_26989 = state_26863__$1;
(statearr_26927_26989[(2)] = inst_26853);

(statearr_26927_26989[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (26))){
var inst_26795 = (state_26863[(29)]);
var inst_26849 = (state_26863[(2)]);
var inst_26850 = cljs.core.seq.call(null,inst_26795);
var state_26863__$1 = (function (){var statearr_26928 = state_26863;
(statearr_26928[(31)] = inst_26849);

return statearr_26928;
})();
if(inst_26850){
var statearr_26929_26990 = state_26863__$1;
(statearr_26929_26990[(1)] = (42));

} else {
var statearr_26930_26991 = state_26863__$1;
(statearr_26930_26991[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (16))){
var inst_26762 = (state_26863[(7)]);
var inst_26764 = cljs.core.chunked_seq_QMARK_.call(null,inst_26762);
var state_26863__$1 = state_26863;
if(inst_26764){
var statearr_26931_26992 = state_26863__$1;
(statearr_26931_26992[(1)] = (19));

} else {
var statearr_26932_26993 = state_26863__$1;
(statearr_26932_26993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (38))){
var inst_26842 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26933_26994 = state_26863__$1;
(statearr_26933_26994[(2)] = inst_26842);

(statearr_26933_26994[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (30))){
var state_26863__$1 = state_26863;
var statearr_26934_26995 = state_26863__$1;
(statearr_26934_26995[(2)] = null);

(statearr_26934_26995[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (10))){
var inst_26743 = (state_26863[(13)]);
var inst_26741 = (state_26863[(14)]);
var inst_26751 = cljs.core._nth.call(null,inst_26741,inst_26743);
var inst_26752 = cljs.core.nth.call(null,inst_26751,(0),null);
var inst_26753 = cljs.core.nth.call(null,inst_26751,(1),null);
var state_26863__$1 = (function (){var statearr_26935 = state_26863;
(statearr_26935[(26)] = inst_26752);

return statearr_26935;
})();
if(cljs.core.truth_(inst_26753)){
var statearr_26936_26996 = state_26863__$1;
(statearr_26936_26996[(1)] = (13));

} else {
var statearr_26937_26997 = state_26863__$1;
(statearr_26937_26997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (18))){
var inst_26788 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26938_26998 = state_26863__$1;
(statearr_26938_26998[(2)] = inst_26788);

(statearr_26938_26998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (42))){
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26863__$1,(45),dchan);
} else {
if((state_val_26864 === (37))){
var inst_26731 = (state_26863[(9)]);
var inst_26831 = (state_26863[(23)]);
var inst_26822 = (state_26863[(25)]);
var inst_26831__$1 = cljs.core.first.call(null,inst_26822);
var inst_26832 = cljs.core.async.put_BANG_.call(null,inst_26831__$1,inst_26731,done);
var state_26863__$1 = (function (){var statearr_26939 = state_26863;
(statearr_26939[(23)] = inst_26831__$1);

return statearr_26939;
})();
if(cljs.core.truth_(inst_26832)){
var statearr_26940_26999 = state_26863__$1;
(statearr_26940_26999[(1)] = (39));

} else {
var statearr_26941_27000 = state_26863__$1;
(statearr_26941_27000[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (8))){
var inst_26743 = (state_26863[(13)]);
var inst_26742 = (state_26863[(17)]);
var inst_26745 = (inst_26743 < inst_26742);
var inst_26746 = inst_26745;
var state_26863__$1 = state_26863;
if(cljs.core.truth_(inst_26746)){
var statearr_26942_27001 = state_26863__$1;
(statearr_26942_27001[(1)] = (10));

} else {
var statearr_26943_27002 = state_26863__$1;
(statearr_26943_27002[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26032__auto__ = null;
var cljs$core$async$mult_$_state_machine__26032__auto____0 = (function (){
var statearr_26944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26944[(0)] = cljs$core$async$mult_$_state_machine__26032__auto__);

(statearr_26944[(1)] = (1));

return statearr_26944;
});
var cljs$core$async$mult_$_state_machine__26032__auto____1 = (function (state_26863){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_26863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e26945){if((e26945 instanceof Object)){
var ex__26035__auto__ = e26945;
var statearr_26946_27003 = state_26863;
(statearr_26946_27003[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27004 = state_26863;
state_26863 = G__27004;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26032__auto__ = function(state_26863){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26032__auto____1.call(this,state_26863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26032__auto____0;
cljs$core$async$mult_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26032__auto____1;
return cljs$core$async$mult_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_26947 = f__26127__auto__.call(null);
(statearr_26947[(6)] = c__26126__auto___26948);

return statearr_26947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
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
var G__27006 = arguments.length;
switch (G__27006) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_27008 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_27008.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27009 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_27009.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27010 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27010.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27011 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_27011.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27012 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27012.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27022 = arguments.length;
var i__4772__auto___27023 = (0);
while(true){
if((i__4772__auto___27023 < len__4771__auto___27022)){
args__4777__auto__.push((arguments[i__4772__auto___27023]));

var G__27024 = (i__4772__auto___27023 + (1));
i__4772__auto___27023 = G__27024;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27017){
var map__27018 = p__27017;
var map__27018__$1 = cljs.core.__destructure_map.call(null,map__27018);
var opts = map__27018__$1;
var statearr_27019_27025 = state;
(statearr_27019_27025[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27020_27026 = state;
(statearr_27020_27026[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_27021_27027 = state;
(statearr_27021_27027[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27013){
var G__27014 = cljs.core.first.call(null,seq27013);
var seq27013__$1 = cljs.core.next.call(null,seq27013);
var G__27015 = cljs.core.first.call(null,seq27013__$1);
var seq27013__$2 = cljs.core.next.call(null,seq27013__$1);
var G__27016 = cljs.core.first.call(null,seq27013__$2);
var seq27013__$3 = cljs.core.next.call(null,seq27013__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27014,G__27015,G__27016,seq27013__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27028 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27029){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27029 = meta27029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27030,meta27029__$1){
var self__ = this;
var _27030__$1 = this;
return (new cljs.core.async.t_cljs$core$async27028(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27029__$1));
}));

(cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27030){
var self__ = this;
var _27030__$1 = this;
return self__.meta27029;
}));

(cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27029","meta27029",810428606,null)], null);
}));

(cljs.core.async.t_cljs$core$async27028.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27028");

(cljs.core.async.t_cljs$core$async27028.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27028");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27028.
 */
cljs.core.async.__GT_t_cljs$core$async27028 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27028(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27029){
return (new cljs.core.async.t_cljs$core$async27028(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27029));
});

}

return (new cljs.core.async.t_cljs$core$async27028(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26126__auto___27127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_27092){
var state_val_27093 = (state_27092[(1)]);
if((state_val_27093 === (7))){
var inst_27088 = (state_27092[(2)]);
var state_27092__$1 = state_27092;
var statearr_27094_27128 = state_27092__$1;
(statearr_27094_27128[(2)] = inst_27088);

(statearr_27094_27128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (20))){
var inst_27082 = (state_27092[(2)]);
var state_27092__$1 = state_27092;
var statearr_27095_27129 = state_27092__$1;
(statearr_27095_27129[(2)] = inst_27082);

(statearr_27095_27129[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (1))){
var inst_27034 = calc_state.call(null);
var inst_27035 = cljs.core.__destructure_map.call(null,inst_27034);
var inst_27036 = cljs.core.get.call(null,inst_27035,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27037 = cljs.core.get.call(null,inst_27035,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27038 = cljs.core.get.call(null,inst_27035,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27039 = inst_27034;
var state_27092__$1 = (function (){var statearr_27096 = state_27092;
(statearr_27096[(7)] = inst_27037);

(statearr_27096[(8)] = inst_27039);

(statearr_27096[(9)] = inst_27038);

(statearr_27096[(10)] = inst_27036);

return statearr_27096;
})();
var statearr_27097_27130 = state_27092__$1;
(statearr_27097_27130[(2)] = null);

(statearr_27097_27130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (4))){
var inst_27052 = (state_27092[(11)]);
var inst_27051 = (state_27092[(12)]);
var inst_27050 = (state_27092[(2)]);
var inst_27051__$1 = cljs.core.nth.call(null,inst_27050,(0),null);
var inst_27052__$1 = cljs.core.nth.call(null,inst_27050,(1),null);
var inst_27053 = (inst_27051__$1 == null);
var inst_27054 = cljs.core._EQ_.call(null,inst_27052__$1,change);
var inst_27055 = ((inst_27053) || (inst_27054));
var state_27092__$1 = (function (){var statearr_27098 = state_27092;
(statearr_27098[(11)] = inst_27052__$1);

(statearr_27098[(12)] = inst_27051__$1);

return statearr_27098;
})();
if(cljs.core.truth_(inst_27055)){
var statearr_27099_27131 = state_27092__$1;
(statearr_27099_27131[(1)] = (5));

} else {
var statearr_27100_27132 = state_27092__$1;
(statearr_27100_27132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (15))){
var inst_27042 = (state_27092[(13)]);
var inst_27039 = inst_27042;
var state_27092__$1 = (function (){var statearr_27101 = state_27092;
(statearr_27101[(8)] = inst_27039);

return statearr_27101;
})();
var statearr_27102_27133 = state_27092__$1;
(statearr_27102_27133[(2)] = null);

(statearr_27102_27133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (13))){
var inst_27074 = (state_27092[(2)]);
var state_27092__$1 = state_27092;
if(cljs.core.truth_(inst_27074)){
var statearr_27103_27134 = state_27092__$1;
(statearr_27103_27134[(1)] = (14));

} else {
var statearr_27104_27135 = state_27092__$1;
(statearr_27104_27135[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (6))){
var inst_27052 = (state_27092[(11)]);
var inst_27066 = (state_27092[(14)]);
var inst_27043 = (state_27092[(15)]);
var inst_27066__$1 = inst_27043.call(null,inst_27052);
var state_27092__$1 = (function (){var statearr_27105 = state_27092;
(statearr_27105[(14)] = inst_27066__$1);

return statearr_27105;
})();
if(cljs.core.truth_(inst_27066__$1)){
var statearr_27106_27136 = state_27092__$1;
(statearr_27106_27136[(1)] = (11));

} else {
var statearr_27107_27137 = state_27092__$1;
(statearr_27107_27137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (17))){
var inst_27077 = (state_27092[(2)]);
var state_27092__$1 = state_27092;
if(cljs.core.truth_(inst_27077)){
var statearr_27108_27138 = state_27092__$1;
(statearr_27108_27138[(1)] = (18));

} else {
var statearr_27109_27139 = state_27092__$1;
(statearr_27109_27139[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (3))){
var inst_27090 = (state_27092[(2)]);
var state_27092__$1 = state_27092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27092__$1,inst_27090);
} else {
if((state_val_27093 === (12))){
var inst_27052 = (state_27092[(11)]);
var inst_27044 = (state_27092[(16)]);
var inst_27043 = (state_27092[(15)]);
var inst_27069 = cljs.core.empty_QMARK_.call(null,inst_27043);
var inst_27070 = inst_27044.call(null,inst_27052);
var inst_27071 = cljs.core.not.call(null,inst_27070);
var inst_27072 = ((inst_27069) && (inst_27071));
var state_27092__$1 = state_27092;
var statearr_27110_27140 = state_27092__$1;
(statearr_27110_27140[(2)] = inst_27072);

(statearr_27110_27140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (2))){
var inst_27042 = (state_27092[(13)]);
var inst_27039 = (state_27092[(8)]);
var inst_27042__$1 = cljs.core.__destructure_map.call(null,inst_27039);
var inst_27043 = cljs.core.get.call(null,inst_27042__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27044 = cljs.core.get.call(null,inst_27042__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27045 = cljs.core.get.call(null,inst_27042__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27092__$1 = (function (){var statearr_27111 = state_27092;
(statearr_27111[(13)] = inst_27042__$1);

(statearr_27111[(16)] = inst_27044);

(statearr_27111[(15)] = inst_27043);

return statearr_27111;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27092__$1,(4),inst_27045);
} else {
if((state_val_27093 === (19))){
var state_27092__$1 = state_27092;
var statearr_27112_27141 = state_27092__$1;
(statearr_27112_27141[(2)] = null);

(statearr_27112_27141[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (11))){
var inst_27066 = (state_27092[(14)]);
var state_27092__$1 = state_27092;
var statearr_27113_27142 = state_27092__$1;
(statearr_27113_27142[(2)] = inst_27066);

(statearr_27113_27142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (9))){
var state_27092__$1 = state_27092;
var statearr_27114_27143 = state_27092__$1;
(statearr_27114_27143[(2)] = null);

(statearr_27114_27143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (5))){
var inst_27051 = (state_27092[(12)]);
var inst_27057 = (inst_27051 == null);
var state_27092__$1 = state_27092;
if(cljs.core.truth_(inst_27057)){
var statearr_27115_27144 = state_27092__$1;
(statearr_27115_27144[(1)] = (8));

} else {
var statearr_27116_27145 = state_27092__$1;
(statearr_27116_27145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (14))){
var inst_27051 = (state_27092[(12)]);
var state_27092__$1 = state_27092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27092__$1,(17),out,inst_27051);
} else {
if((state_val_27093 === (16))){
var inst_27086 = (state_27092[(2)]);
var state_27092__$1 = state_27092;
var statearr_27117_27146 = state_27092__$1;
(statearr_27117_27146[(2)] = inst_27086);

(statearr_27117_27146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (10))){
var inst_27062 = (state_27092[(2)]);
var inst_27063 = calc_state.call(null);
var inst_27039 = inst_27063;
var state_27092__$1 = (function (){var statearr_27118 = state_27092;
(statearr_27118[(17)] = inst_27062);

(statearr_27118[(8)] = inst_27039);

return statearr_27118;
})();
var statearr_27119_27147 = state_27092__$1;
(statearr_27119_27147[(2)] = null);

(statearr_27119_27147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (18))){
var inst_27042 = (state_27092[(13)]);
var inst_27039 = inst_27042;
var state_27092__$1 = (function (){var statearr_27120 = state_27092;
(statearr_27120[(8)] = inst_27039);

return statearr_27120;
})();
var statearr_27121_27148 = state_27092__$1;
(statearr_27121_27148[(2)] = null);

(statearr_27121_27148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (8))){
var inst_27052 = (state_27092[(11)]);
var inst_27059 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27052);
var state_27092__$1 = state_27092;
var statearr_27122_27149 = state_27092__$1;
(statearr_27122_27149[(2)] = inst_27059);

(statearr_27122_27149[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__26032__auto__ = null;
var cljs$core$async$mix_$_state_machine__26032__auto____0 = (function (){
var statearr_27123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27123[(0)] = cljs$core$async$mix_$_state_machine__26032__auto__);

(statearr_27123[(1)] = (1));

return statearr_27123;
});
var cljs$core$async$mix_$_state_machine__26032__auto____1 = (function (state_27092){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_27092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e27124){if((e27124 instanceof Object)){
var ex__26035__auto__ = e27124;
var statearr_27125_27150 = state_27092;
(statearr_27125_27150[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27151 = state_27092;
state_27092 = G__27151;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26032__auto__ = function(state_27092){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26032__auto____1.call(this,state_27092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26032__auto____0;
cljs$core$async$mix_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26032__auto____1;
return cljs$core$async$mix_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_27126 = f__26127__auto__.call(null);
(statearr_27126[(6)] = c__26126__auto___27127);

return statearr_27126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_27154 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_27154.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27155 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_27155.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27156 = (function() {
var G__27157 = null;
var G__27157__1 = (function (p){
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
var G__27157__2 = (function (p,v){
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
G__27157 = function(p,v){
switch(arguments.length){
case 1:
return G__27157__1.call(this,p);
case 2:
return G__27157__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27157.cljs$core$IFn$_invoke$arity$1 = G__27157__1;
G__27157.cljs$core$IFn$_invoke$arity$2 = G__27157__2;
return G__27157;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27153 = arguments.length;
switch (G__27153) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27156.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27156.call(null,p,v);
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
var G__27161 = arguments.length;
switch (G__27161) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27159_SHARP_){
if(cljs.core.truth_(p1__27159_SHARP_.call(null,topic))){
return p1__27159_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27159_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27162 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27163){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27163 = meta27163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27164,meta27163__$1){
var self__ = this;
var _27164__$1 = this;
return (new cljs.core.async.t_cljs$core$async27162(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27163__$1));
}));

(cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27164){
var self__ = this;
var _27164__$1 = this;
return self__.meta27163;
}));

(cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27163","meta27163",-1431600261,null)], null);
}));

(cljs.core.async.t_cljs$core$async27162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27162");

(cljs.core.async.t_cljs$core$async27162.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27162.
 */
cljs.core.async.__GT_t_cljs$core$async27162 = (function cljs$core$async$__GT_t_cljs$core$async27162(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27163){
return (new cljs.core.async.t_cljs$core$async27162(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27163));
});

}

return (new cljs.core.async.t_cljs$core$async27162(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26126__auto___27282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_27236){
var state_val_27237 = (state_27236[(1)]);
if((state_val_27237 === (7))){
var inst_27232 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
var statearr_27238_27283 = state_27236__$1;
(statearr_27238_27283[(2)] = inst_27232);

(statearr_27238_27283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (20))){
var state_27236__$1 = state_27236;
var statearr_27239_27284 = state_27236__$1;
(statearr_27239_27284[(2)] = null);

(statearr_27239_27284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (1))){
var state_27236__$1 = state_27236;
var statearr_27240_27285 = state_27236__$1;
(statearr_27240_27285[(2)] = null);

(statearr_27240_27285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (24))){
var inst_27215 = (state_27236[(7)]);
var inst_27224 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27215);
var state_27236__$1 = state_27236;
var statearr_27241_27286 = state_27236__$1;
(statearr_27241_27286[(2)] = inst_27224);

(statearr_27241_27286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (4))){
var inst_27167 = (state_27236[(8)]);
var inst_27167__$1 = (state_27236[(2)]);
var inst_27168 = (inst_27167__$1 == null);
var state_27236__$1 = (function (){var statearr_27242 = state_27236;
(statearr_27242[(8)] = inst_27167__$1);

return statearr_27242;
})();
if(cljs.core.truth_(inst_27168)){
var statearr_27243_27287 = state_27236__$1;
(statearr_27243_27287[(1)] = (5));

} else {
var statearr_27244_27288 = state_27236__$1;
(statearr_27244_27288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (15))){
var inst_27209 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
var statearr_27245_27289 = state_27236__$1;
(statearr_27245_27289[(2)] = inst_27209);

(statearr_27245_27289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (21))){
var inst_27229 = (state_27236[(2)]);
var state_27236__$1 = (function (){var statearr_27246 = state_27236;
(statearr_27246[(9)] = inst_27229);

return statearr_27246;
})();
var statearr_27247_27290 = state_27236__$1;
(statearr_27247_27290[(2)] = null);

(statearr_27247_27290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (13))){
var inst_27191 = (state_27236[(10)]);
var inst_27193 = cljs.core.chunked_seq_QMARK_.call(null,inst_27191);
var state_27236__$1 = state_27236;
if(inst_27193){
var statearr_27248_27291 = state_27236__$1;
(statearr_27248_27291[(1)] = (16));

} else {
var statearr_27249_27292 = state_27236__$1;
(statearr_27249_27292[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (22))){
var inst_27221 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
if(cljs.core.truth_(inst_27221)){
var statearr_27250_27293 = state_27236__$1;
(statearr_27250_27293[(1)] = (23));

} else {
var statearr_27251_27294 = state_27236__$1;
(statearr_27251_27294[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (6))){
var inst_27217 = (state_27236[(11)]);
var inst_27167 = (state_27236[(8)]);
var inst_27215 = (state_27236[(7)]);
var inst_27215__$1 = topic_fn.call(null,inst_27167);
var inst_27216 = cljs.core.deref.call(null,mults);
var inst_27217__$1 = cljs.core.get.call(null,inst_27216,inst_27215__$1);
var state_27236__$1 = (function (){var statearr_27252 = state_27236;
(statearr_27252[(11)] = inst_27217__$1);

(statearr_27252[(7)] = inst_27215__$1);

return statearr_27252;
})();
if(cljs.core.truth_(inst_27217__$1)){
var statearr_27253_27295 = state_27236__$1;
(statearr_27253_27295[(1)] = (19));

} else {
var statearr_27254_27296 = state_27236__$1;
(statearr_27254_27296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (25))){
var inst_27226 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
var statearr_27255_27297 = state_27236__$1;
(statearr_27255_27297[(2)] = inst_27226);

(statearr_27255_27297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (17))){
var inst_27191 = (state_27236[(10)]);
var inst_27200 = cljs.core.first.call(null,inst_27191);
var inst_27201 = cljs.core.async.muxch_STAR_.call(null,inst_27200);
var inst_27202 = cljs.core.async.close_BANG_.call(null,inst_27201);
var inst_27203 = cljs.core.next.call(null,inst_27191);
var inst_27177 = inst_27203;
var inst_27178 = null;
var inst_27179 = (0);
var inst_27180 = (0);
var state_27236__$1 = (function (){var statearr_27256 = state_27236;
(statearr_27256[(12)] = inst_27179);

(statearr_27256[(13)] = inst_27178);

(statearr_27256[(14)] = inst_27202);

(statearr_27256[(15)] = inst_27180);

(statearr_27256[(16)] = inst_27177);

return statearr_27256;
})();
var statearr_27257_27298 = state_27236__$1;
(statearr_27257_27298[(2)] = null);

(statearr_27257_27298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (3))){
var inst_27234 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27236__$1,inst_27234);
} else {
if((state_val_27237 === (12))){
var inst_27211 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
var statearr_27258_27299 = state_27236__$1;
(statearr_27258_27299[(2)] = inst_27211);

(statearr_27258_27299[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (2))){
var state_27236__$1 = state_27236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27236__$1,(4),ch);
} else {
if((state_val_27237 === (23))){
var state_27236__$1 = state_27236;
var statearr_27259_27300 = state_27236__$1;
(statearr_27259_27300[(2)] = null);

(statearr_27259_27300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (19))){
var inst_27217 = (state_27236[(11)]);
var inst_27167 = (state_27236[(8)]);
var inst_27219 = cljs.core.async.muxch_STAR_.call(null,inst_27217);
var state_27236__$1 = state_27236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27236__$1,(22),inst_27219,inst_27167);
} else {
if((state_val_27237 === (11))){
var inst_27191 = (state_27236[(10)]);
var inst_27177 = (state_27236[(16)]);
var inst_27191__$1 = cljs.core.seq.call(null,inst_27177);
var state_27236__$1 = (function (){var statearr_27260 = state_27236;
(statearr_27260[(10)] = inst_27191__$1);

return statearr_27260;
})();
if(inst_27191__$1){
var statearr_27261_27301 = state_27236__$1;
(statearr_27261_27301[(1)] = (13));

} else {
var statearr_27262_27302 = state_27236__$1;
(statearr_27262_27302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (9))){
var inst_27213 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
var statearr_27263_27303 = state_27236__$1;
(statearr_27263_27303[(2)] = inst_27213);

(statearr_27263_27303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (5))){
var inst_27174 = cljs.core.deref.call(null,mults);
var inst_27175 = cljs.core.vals.call(null,inst_27174);
var inst_27176 = cljs.core.seq.call(null,inst_27175);
var inst_27177 = inst_27176;
var inst_27178 = null;
var inst_27179 = (0);
var inst_27180 = (0);
var state_27236__$1 = (function (){var statearr_27264 = state_27236;
(statearr_27264[(12)] = inst_27179);

(statearr_27264[(13)] = inst_27178);

(statearr_27264[(15)] = inst_27180);

(statearr_27264[(16)] = inst_27177);

return statearr_27264;
})();
var statearr_27265_27304 = state_27236__$1;
(statearr_27265_27304[(2)] = null);

(statearr_27265_27304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (14))){
var state_27236__$1 = state_27236;
var statearr_27269_27305 = state_27236__$1;
(statearr_27269_27305[(2)] = null);

(statearr_27269_27305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (16))){
var inst_27191 = (state_27236[(10)]);
var inst_27195 = cljs.core.chunk_first.call(null,inst_27191);
var inst_27196 = cljs.core.chunk_rest.call(null,inst_27191);
var inst_27197 = cljs.core.count.call(null,inst_27195);
var inst_27177 = inst_27196;
var inst_27178 = inst_27195;
var inst_27179 = inst_27197;
var inst_27180 = (0);
var state_27236__$1 = (function (){var statearr_27270 = state_27236;
(statearr_27270[(12)] = inst_27179);

(statearr_27270[(13)] = inst_27178);

(statearr_27270[(15)] = inst_27180);

(statearr_27270[(16)] = inst_27177);

return statearr_27270;
})();
var statearr_27271_27306 = state_27236__$1;
(statearr_27271_27306[(2)] = null);

(statearr_27271_27306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (10))){
var inst_27179 = (state_27236[(12)]);
var inst_27178 = (state_27236[(13)]);
var inst_27180 = (state_27236[(15)]);
var inst_27177 = (state_27236[(16)]);
var inst_27185 = cljs.core._nth.call(null,inst_27178,inst_27180);
var inst_27186 = cljs.core.async.muxch_STAR_.call(null,inst_27185);
var inst_27187 = cljs.core.async.close_BANG_.call(null,inst_27186);
var inst_27188 = (inst_27180 + (1));
var tmp27266 = inst_27179;
var tmp27267 = inst_27178;
var tmp27268 = inst_27177;
var inst_27177__$1 = tmp27268;
var inst_27178__$1 = tmp27267;
var inst_27179__$1 = tmp27266;
var inst_27180__$1 = inst_27188;
var state_27236__$1 = (function (){var statearr_27272 = state_27236;
(statearr_27272[(12)] = inst_27179__$1);

(statearr_27272[(13)] = inst_27178__$1);

(statearr_27272[(15)] = inst_27180__$1);

(statearr_27272[(17)] = inst_27187);

(statearr_27272[(16)] = inst_27177__$1);

return statearr_27272;
})();
var statearr_27273_27307 = state_27236__$1;
(statearr_27273_27307[(2)] = null);

(statearr_27273_27307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (18))){
var inst_27206 = (state_27236[(2)]);
var state_27236__$1 = state_27236;
var statearr_27274_27308 = state_27236__$1;
(statearr_27274_27308[(2)] = inst_27206);

(statearr_27274_27308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27237 === (8))){
var inst_27179 = (state_27236[(12)]);
var inst_27180 = (state_27236[(15)]);
var inst_27182 = (inst_27180 < inst_27179);
var inst_27183 = inst_27182;
var state_27236__$1 = state_27236;
if(cljs.core.truth_(inst_27183)){
var statearr_27275_27309 = state_27236__$1;
(statearr_27275_27309[(1)] = (10));

} else {
var statearr_27276_27310 = state_27236__$1;
(statearr_27276_27310[(1)] = (11));

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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_27277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27277[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_27277[(1)] = (1));

return statearr_27277;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_27236){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_27236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e27278){if((e27278 instanceof Object)){
var ex__26035__auto__ = e27278;
var statearr_27279_27311 = state_27236;
(statearr_27279_27311[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27312 = state_27236;
state_27236 = G__27312;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_27236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_27236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_27280 = f__26127__auto__.call(null);
(statearr_27280[(6)] = c__26126__auto___27282);

return statearr_27280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
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
var G__27314 = arguments.length;
switch (G__27314) {
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
var G__27317 = arguments.length;
switch (G__27317) {
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
var G__27320 = arguments.length;
switch (G__27320) {
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
var c__26126__auto___27387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_27359){
var state_val_27360 = (state_27359[(1)]);
if((state_val_27360 === (7))){
var state_27359__$1 = state_27359;
var statearr_27361_27388 = state_27359__$1;
(statearr_27361_27388[(2)] = null);

(statearr_27361_27388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (1))){
var state_27359__$1 = state_27359;
var statearr_27362_27389 = state_27359__$1;
(statearr_27362_27389[(2)] = null);

(statearr_27362_27389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (4))){
var inst_27323 = (state_27359[(7)]);
var inst_27325 = (inst_27323 < cnt);
var state_27359__$1 = state_27359;
if(cljs.core.truth_(inst_27325)){
var statearr_27363_27390 = state_27359__$1;
(statearr_27363_27390[(1)] = (6));

} else {
var statearr_27364_27391 = state_27359__$1;
(statearr_27364_27391[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (15))){
var inst_27355 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27365_27392 = state_27359__$1;
(statearr_27365_27392[(2)] = inst_27355);

(statearr_27365_27392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (13))){
var inst_27348 = cljs.core.async.close_BANG_.call(null,out);
var state_27359__$1 = state_27359;
var statearr_27366_27393 = state_27359__$1;
(statearr_27366_27393[(2)] = inst_27348);

(statearr_27366_27393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (6))){
var state_27359__$1 = state_27359;
var statearr_27367_27394 = state_27359__$1;
(statearr_27367_27394[(2)] = null);

(statearr_27367_27394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (3))){
var inst_27357 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27359__$1,inst_27357);
} else {
if((state_val_27360 === (12))){
var inst_27345 = (state_27359[(8)]);
var inst_27345__$1 = (state_27359[(2)]);
var inst_27346 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27345__$1);
var state_27359__$1 = (function (){var statearr_27368 = state_27359;
(statearr_27368[(8)] = inst_27345__$1);

return statearr_27368;
})();
if(cljs.core.truth_(inst_27346)){
var statearr_27369_27395 = state_27359__$1;
(statearr_27369_27395[(1)] = (13));

} else {
var statearr_27370_27396 = state_27359__$1;
(statearr_27370_27396[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (2))){
var inst_27322 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27323 = (0);
var state_27359__$1 = (function (){var statearr_27371 = state_27359;
(statearr_27371[(9)] = inst_27322);

(statearr_27371[(7)] = inst_27323);

return statearr_27371;
})();
var statearr_27372_27397 = state_27359__$1;
(statearr_27372_27397[(2)] = null);

(statearr_27372_27397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (11))){
var inst_27323 = (state_27359[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27359,(10),Object,null,(9));
var inst_27332 = chs__$1.call(null,inst_27323);
var inst_27333 = done.call(null,inst_27323);
var inst_27334 = cljs.core.async.take_BANG_.call(null,inst_27332,inst_27333);
var state_27359__$1 = state_27359;
var statearr_27373_27398 = state_27359__$1;
(statearr_27373_27398[(2)] = inst_27334);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27359__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (9))){
var inst_27323 = (state_27359[(7)]);
var inst_27336 = (state_27359[(2)]);
var inst_27337 = (inst_27323 + (1));
var inst_27323__$1 = inst_27337;
var state_27359__$1 = (function (){var statearr_27374 = state_27359;
(statearr_27374[(10)] = inst_27336);

(statearr_27374[(7)] = inst_27323__$1);

return statearr_27374;
})();
var statearr_27375_27399 = state_27359__$1;
(statearr_27375_27399[(2)] = null);

(statearr_27375_27399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (5))){
var inst_27343 = (state_27359[(2)]);
var state_27359__$1 = (function (){var statearr_27376 = state_27359;
(statearr_27376[(11)] = inst_27343);

return statearr_27376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27359__$1,(12),dchan);
} else {
if((state_val_27360 === (14))){
var inst_27345 = (state_27359[(8)]);
var inst_27350 = cljs.core.apply.call(null,f,inst_27345);
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27359__$1,(16),out,inst_27350);
} else {
if((state_val_27360 === (16))){
var inst_27352 = (state_27359[(2)]);
var state_27359__$1 = (function (){var statearr_27377 = state_27359;
(statearr_27377[(12)] = inst_27352);

return statearr_27377;
})();
var statearr_27378_27400 = state_27359__$1;
(statearr_27378_27400[(2)] = null);

(statearr_27378_27400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (10))){
var inst_27327 = (state_27359[(2)]);
var inst_27328 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27359__$1 = (function (){var statearr_27379 = state_27359;
(statearr_27379[(13)] = inst_27327);

return statearr_27379;
})();
var statearr_27380_27401 = state_27359__$1;
(statearr_27380_27401[(2)] = inst_27328);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27359__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (8))){
var inst_27341 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27381_27402 = state_27359__$1;
(statearr_27381_27402[(2)] = inst_27341);

(statearr_27381_27402[(1)] = (5));


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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_27382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27382[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_27382[(1)] = (1));

return statearr_27382;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_27359){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_27359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e27383){if((e27383 instanceof Object)){
var ex__26035__auto__ = e27383;
var statearr_27384_27403 = state_27359;
(statearr_27384_27403[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27404 = state_27359;
state_27359 = G__27404;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_27359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_27359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_27385 = f__26127__auto__.call(null);
(statearr_27385[(6)] = c__26126__auto___27387);

return statearr_27385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
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
var G__27407 = arguments.length;
switch (G__27407) {
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
var c__26126__auto___27461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_27439){
var state_val_27440 = (state_27439[(1)]);
if((state_val_27440 === (7))){
var inst_27418 = (state_27439[(7)]);
var inst_27419 = (state_27439[(8)]);
var inst_27418__$1 = (state_27439[(2)]);
var inst_27419__$1 = cljs.core.nth.call(null,inst_27418__$1,(0),null);
var inst_27420 = cljs.core.nth.call(null,inst_27418__$1,(1),null);
var inst_27421 = (inst_27419__$1 == null);
var state_27439__$1 = (function (){var statearr_27441 = state_27439;
(statearr_27441[(9)] = inst_27420);

(statearr_27441[(7)] = inst_27418__$1);

(statearr_27441[(8)] = inst_27419__$1);

return statearr_27441;
})();
if(cljs.core.truth_(inst_27421)){
var statearr_27442_27462 = state_27439__$1;
(statearr_27442_27462[(1)] = (8));

} else {
var statearr_27443_27463 = state_27439__$1;
(statearr_27443_27463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (1))){
var inst_27408 = cljs.core.vec.call(null,chs);
var inst_27409 = inst_27408;
var state_27439__$1 = (function (){var statearr_27444 = state_27439;
(statearr_27444[(10)] = inst_27409);

return statearr_27444;
})();
var statearr_27445_27464 = state_27439__$1;
(statearr_27445_27464[(2)] = null);

(statearr_27445_27464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (4))){
var inst_27409 = (state_27439[(10)]);
var state_27439__$1 = state_27439;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27439__$1,(7),inst_27409);
} else {
if((state_val_27440 === (6))){
var inst_27435 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
var statearr_27446_27465 = state_27439__$1;
(statearr_27446_27465[(2)] = inst_27435);

(statearr_27446_27465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (3))){
var inst_27437 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27439__$1,inst_27437);
} else {
if((state_val_27440 === (2))){
var inst_27409 = (state_27439[(10)]);
var inst_27411 = cljs.core.count.call(null,inst_27409);
var inst_27412 = (inst_27411 > (0));
var state_27439__$1 = state_27439;
if(cljs.core.truth_(inst_27412)){
var statearr_27448_27466 = state_27439__$1;
(statearr_27448_27466[(1)] = (4));

} else {
var statearr_27449_27467 = state_27439__$1;
(statearr_27449_27467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (11))){
var inst_27409 = (state_27439[(10)]);
var inst_27428 = (state_27439[(2)]);
var tmp27447 = inst_27409;
var inst_27409__$1 = tmp27447;
var state_27439__$1 = (function (){var statearr_27450 = state_27439;
(statearr_27450[(11)] = inst_27428);

(statearr_27450[(10)] = inst_27409__$1);

return statearr_27450;
})();
var statearr_27451_27468 = state_27439__$1;
(statearr_27451_27468[(2)] = null);

(statearr_27451_27468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (9))){
var inst_27419 = (state_27439[(8)]);
var state_27439__$1 = state_27439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27439__$1,(11),out,inst_27419);
} else {
if((state_val_27440 === (5))){
var inst_27433 = cljs.core.async.close_BANG_.call(null,out);
var state_27439__$1 = state_27439;
var statearr_27452_27469 = state_27439__$1;
(statearr_27452_27469[(2)] = inst_27433);

(statearr_27452_27469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (10))){
var inst_27431 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
var statearr_27453_27470 = state_27439__$1;
(statearr_27453_27470[(2)] = inst_27431);

(statearr_27453_27470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (8))){
var inst_27420 = (state_27439[(9)]);
var inst_27418 = (state_27439[(7)]);
var inst_27409 = (state_27439[(10)]);
var inst_27419 = (state_27439[(8)]);
var inst_27423 = (function (){var cs = inst_27409;
var vec__27414 = inst_27418;
var v = inst_27419;
var c = inst_27420;
return (function (p1__27405_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27405_SHARP_);
});
})();
var inst_27424 = cljs.core.filterv.call(null,inst_27423,inst_27409);
var inst_27409__$1 = inst_27424;
var state_27439__$1 = (function (){var statearr_27454 = state_27439;
(statearr_27454[(10)] = inst_27409__$1);

return statearr_27454;
})();
var statearr_27455_27471 = state_27439__$1;
(statearr_27455_27471[(2)] = null);

(statearr_27455_27471[(1)] = (2));


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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_27456 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27456[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_27456[(1)] = (1));

return statearr_27456;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_27439){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_27439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e27457){if((e27457 instanceof Object)){
var ex__26035__auto__ = e27457;
var statearr_27458_27472 = state_27439;
(statearr_27458_27472[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27473 = state_27439;
state_27439 = G__27473;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_27439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_27439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_27459 = f__26127__auto__.call(null);
(statearr_27459[(6)] = c__26126__auto___27461);

return statearr_27459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
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
var G__27475 = arguments.length;
switch (G__27475) {
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
var c__26126__auto___27520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_27499){
var state_val_27500 = (state_27499[(1)]);
if((state_val_27500 === (7))){
var inst_27481 = (state_27499[(7)]);
var inst_27481__$1 = (state_27499[(2)]);
var inst_27482 = (inst_27481__$1 == null);
var inst_27483 = cljs.core.not.call(null,inst_27482);
var state_27499__$1 = (function (){var statearr_27501 = state_27499;
(statearr_27501[(7)] = inst_27481__$1);

return statearr_27501;
})();
if(inst_27483){
var statearr_27502_27521 = state_27499__$1;
(statearr_27502_27521[(1)] = (8));

} else {
var statearr_27503_27522 = state_27499__$1;
(statearr_27503_27522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (1))){
var inst_27476 = (0);
var state_27499__$1 = (function (){var statearr_27504 = state_27499;
(statearr_27504[(8)] = inst_27476);

return statearr_27504;
})();
var statearr_27505_27523 = state_27499__$1;
(statearr_27505_27523[(2)] = null);

(statearr_27505_27523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (4))){
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27499__$1,(7),ch);
} else {
if((state_val_27500 === (6))){
var inst_27494 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27506_27524 = state_27499__$1;
(statearr_27506_27524[(2)] = inst_27494);

(statearr_27506_27524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (3))){
var inst_27496 = (state_27499[(2)]);
var inst_27497 = cljs.core.async.close_BANG_.call(null,out);
var state_27499__$1 = (function (){var statearr_27507 = state_27499;
(statearr_27507[(9)] = inst_27496);

return statearr_27507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27499__$1,inst_27497);
} else {
if((state_val_27500 === (2))){
var inst_27476 = (state_27499[(8)]);
var inst_27478 = (inst_27476 < n);
var state_27499__$1 = state_27499;
if(cljs.core.truth_(inst_27478)){
var statearr_27508_27525 = state_27499__$1;
(statearr_27508_27525[(1)] = (4));

} else {
var statearr_27509_27526 = state_27499__$1;
(statearr_27509_27526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (11))){
var inst_27476 = (state_27499[(8)]);
var inst_27486 = (state_27499[(2)]);
var inst_27487 = (inst_27476 + (1));
var inst_27476__$1 = inst_27487;
var state_27499__$1 = (function (){var statearr_27510 = state_27499;
(statearr_27510[(8)] = inst_27476__$1);

(statearr_27510[(10)] = inst_27486);

return statearr_27510;
})();
var statearr_27511_27527 = state_27499__$1;
(statearr_27511_27527[(2)] = null);

(statearr_27511_27527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (9))){
var state_27499__$1 = state_27499;
var statearr_27512_27528 = state_27499__$1;
(statearr_27512_27528[(2)] = null);

(statearr_27512_27528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (5))){
var state_27499__$1 = state_27499;
var statearr_27513_27529 = state_27499__$1;
(statearr_27513_27529[(2)] = null);

(statearr_27513_27529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (10))){
var inst_27491 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27514_27530 = state_27499__$1;
(statearr_27514_27530[(2)] = inst_27491);

(statearr_27514_27530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (8))){
var inst_27481 = (state_27499[(7)]);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27499__$1,(11),out,inst_27481);
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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_27515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27515[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_27515[(1)] = (1));

return statearr_27515;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_27499){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_27499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e27516){if((e27516 instanceof Object)){
var ex__26035__auto__ = e27516;
var statearr_27517_27531 = state_27499;
(statearr_27517_27531[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27532 = state_27499;
state_27499 = G__27532;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_27499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_27499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_27518 = f__26127__auto__.call(null);
(statearr_27518[(6)] = c__26126__auto___27520);

return statearr_27518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27534 = (function (f,ch,meta27535){
this.f = f;
this.ch = ch;
this.meta27535 = meta27535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27536,meta27535__$1){
var self__ = this;
var _27536__$1 = this;
return (new cljs.core.async.t_cljs$core$async27534(self__.f,self__.ch,meta27535__$1));
}));

(cljs.core.async.t_cljs$core$async27534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27536){
var self__ = this;
var _27536__$1 = this;
return self__.meta27535;
}));

(cljs.core.async.t_cljs$core$async27534.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27534.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27534.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27537 = (function (f,ch,meta27535,_,fn1,meta27538){
this.f = f;
this.ch = ch;
this.meta27535 = meta27535;
this._ = _;
this.fn1 = fn1;
this.meta27538 = meta27538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27539,meta27538__$1){
var self__ = this;
var _27539__$1 = this;
return (new cljs.core.async.t_cljs$core$async27537(self__.f,self__.ch,self__.meta27535,self__._,self__.fn1,meta27538__$1));
}));

(cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27539){
var self__ = this;
var _27539__$1 = this;
return self__.meta27538;
}));

(cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__27533_SHARP_){
return f1.call(null,(((p1__27533_SHARP_ == null))?null:self__.f.call(null,p1__27533_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async27537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27535","meta27535",544307308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27534","cljs.core.async/t_cljs$core$async27534",258008753,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27538","meta27538",1913477731,null)], null);
}));

(cljs.core.async.t_cljs$core$async27537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27537");

(cljs.core.async.t_cljs$core$async27537.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27537.
 */
cljs.core.async.__GT_t_cljs$core$async27537 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27537(f__$1,ch__$1,meta27535__$1,___$2,fn1__$1,meta27538){
return (new cljs.core.async.t_cljs$core$async27537(f__$1,ch__$1,meta27535__$1,___$2,fn1__$1,meta27538));
});

}

return (new cljs.core.async.t_cljs$core$async27537(self__.f,self__.ch,self__.meta27535,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async27534.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async27534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27535","meta27535",544307308,null)], null);
}));

(cljs.core.async.t_cljs$core$async27534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27534");

(cljs.core.async.t_cljs$core$async27534.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27534.
 */
cljs.core.async.__GT_t_cljs$core$async27534 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27534(f__$1,ch__$1,meta27535){
return (new cljs.core.async.t_cljs$core$async27534(f__$1,ch__$1,meta27535));
});

}

return (new cljs.core.async.t_cljs$core$async27534(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27540 = (function (f,ch,meta27541){
this.f = f;
this.ch = ch;
this.meta27541 = meta27541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27542,meta27541__$1){
var self__ = this;
var _27542__$1 = this;
return (new cljs.core.async.t_cljs$core$async27540(self__.f,self__.ch,meta27541__$1));
}));

(cljs.core.async.t_cljs$core$async27540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27542){
var self__ = this;
var _27542__$1 = this;
return self__.meta27541;
}));

(cljs.core.async.t_cljs$core$async27540.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27540.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27540.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async27540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27541","meta27541",67179304,null)], null);
}));

(cljs.core.async.t_cljs$core$async27540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27540");

(cljs.core.async.t_cljs$core$async27540.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27540.
 */
cljs.core.async.__GT_t_cljs$core$async27540 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27540(f__$1,ch__$1,meta27541){
return (new cljs.core.async.t_cljs$core$async27540(f__$1,ch__$1,meta27541));
});

}

return (new cljs.core.async.t_cljs$core$async27540(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27543 = (function (p,ch,meta27544){
this.p = p;
this.ch = ch;
this.meta27544 = meta27544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27545,meta27544__$1){
var self__ = this;
var _27545__$1 = this;
return (new cljs.core.async.t_cljs$core$async27543(self__.p,self__.ch,meta27544__$1));
}));

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27545){
var self__ = this;
var _27545__$1 = this;
return self__.meta27544;
}));

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async27543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27544","meta27544",1342978798,null)], null);
}));

(cljs.core.async.t_cljs$core$async27543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27543");

(cljs.core.async.t_cljs$core$async27543.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async27543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27543.
 */
cljs.core.async.__GT_t_cljs$core$async27543 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27543(p__$1,ch__$1,meta27544){
return (new cljs.core.async.t_cljs$core$async27543(p__$1,ch__$1,meta27544));
});

}

return (new cljs.core.async.t_cljs$core$async27543(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27547 = arguments.length;
switch (G__27547) {
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
var c__26126__auto___27587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_27568){
var state_val_27569 = (state_27568[(1)]);
if((state_val_27569 === (7))){
var inst_27564 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27570_27588 = state_27568__$1;
(statearr_27570_27588[(2)] = inst_27564);

(statearr_27570_27588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (1))){
var state_27568__$1 = state_27568;
var statearr_27571_27589 = state_27568__$1;
(statearr_27571_27589[(2)] = null);

(statearr_27571_27589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (4))){
var inst_27550 = (state_27568[(7)]);
var inst_27550__$1 = (state_27568[(2)]);
var inst_27551 = (inst_27550__$1 == null);
var state_27568__$1 = (function (){var statearr_27572 = state_27568;
(statearr_27572[(7)] = inst_27550__$1);

return statearr_27572;
})();
if(cljs.core.truth_(inst_27551)){
var statearr_27573_27590 = state_27568__$1;
(statearr_27573_27590[(1)] = (5));

} else {
var statearr_27574_27591 = state_27568__$1;
(statearr_27574_27591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (6))){
var inst_27550 = (state_27568[(7)]);
var inst_27555 = p.call(null,inst_27550);
var state_27568__$1 = state_27568;
if(cljs.core.truth_(inst_27555)){
var statearr_27575_27592 = state_27568__$1;
(statearr_27575_27592[(1)] = (8));

} else {
var statearr_27576_27593 = state_27568__$1;
(statearr_27576_27593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (3))){
var inst_27566 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27568__$1,inst_27566);
} else {
if((state_val_27569 === (2))){
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27568__$1,(4),ch);
} else {
if((state_val_27569 === (11))){
var inst_27558 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27577_27594 = state_27568__$1;
(statearr_27577_27594[(2)] = inst_27558);

(statearr_27577_27594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (9))){
var state_27568__$1 = state_27568;
var statearr_27578_27595 = state_27568__$1;
(statearr_27578_27595[(2)] = null);

(statearr_27578_27595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (5))){
var inst_27553 = cljs.core.async.close_BANG_.call(null,out);
var state_27568__$1 = state_27568;
var statearr_27579_27596 = state_27568__$1;
(statearr_27579_27596[(2)] = inst_27553);

(statearr_27579_27596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (10))){
var inst_27561 = (state_27568[(2)]);
var state_27568__$1 = (function (){var statearr_27580 = state_27568;
(statearr_27580[(8)] = inst_27561);

return statearr_27580;
})();
var statearr_27581_27597 = state_27568__$1;
(statearr_27581_27597[(2)] = null);

(statearr_27581_27597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (8))){
var inst_27550 = (state_27568[(7)]);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27568__$1,(11),out,inst_27550);
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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_27582 = [null,null,null,null,null,null,null,null,null];
(statearr_27582[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_27582[(1)] = (1));

return statearr_27582;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_27568){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_27568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e27583){if((e27583 instanceof Object)){
var ex__26035__auto__ = e27583;
var statearr_27584_27598 = state_27568;
(statearr_27584_27598[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27599 = state_27568;
state_27568 = G__27599;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_27568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_27568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_27585 = f__26127__auto__.call(null);
(statearr_27585[(6)] = c__26126__auto___27587);

return statearr_27585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27601 = arguments.length;
switch (G__27601) {
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
var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_27664){
var state_val_27665 = (state_27664[(1)]);
if((state_val_27665 === (7))){
var inst_27660 = (state_27664[(2)]);
var state_27664__$1 = state_27664;
var statearr_27666_27704 = state_27664__$1;
(statearr_27666_27704[(2)] = inst_27660);

(statearr_27666_27704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (20))){
var inst_27630 = (state_27664[(7)]);
var inst_27641 = (state_27664[(2)]);
var inst_27642 = cljs.core.next.call(null,inst_27630);
var inst_27616 = inst_27642;
var inst_27617 = null;
var inst_27618 = (0);
var inst_27619 = (0);
var state_27664__$1 = (function (){var statearr_27667 = state_27664;
(statearr_27667[(8)] = inst_27617);

(statearr_27667[(9)] = inst_27619);

(statearr_27667[(10)] = inst_27616);

(statearr_27667[(11)] = inst_27618);

(statearr_27667[(12)] = inst_27641);

return statearr_27667;
})();
var statearr_27668_27705 = state_27664__$1;
(statearr_27668_27705[(2)] = null);

(statearr_27668_27705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (1))){
var state_27664__$1 = state_27664;
var statearr_27669_27706 = state_27664__$1;
(statearr_27669_27706[(2)] = null);

(statearr_27669_27706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (4))){
var inst_27605 = (state_27664[(13)]);
var inst_27605__$1 = (state_27664[(2)]);
var inst_27606 = (inst_27605__$1 == null);
var state_27664__$1 = (function (){var statearr_27670 = state_27664;
(statearr_27670[(13)] = inst_27605__$1);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27606)){
var statearr_27671_27707 = state_27664__$1;
(statearr_27671_27707[(1)] = (5));

} else {
var statearr_27672_27708 = state_27664__$1;
(statearr_27672_27708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (15))){
var state_27664__$1 = state_27664;
var statearr_27676_27709 = state_27664__$1;
(statearr_27676_27709[(2)] = null);

(statearr_27676_27709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (21))){
var state_27664__$1 = state_27664;
var statearr_27677_27710 = state_27664__$1;
(statearr_27677_27710[(2)] = null);

(statearr_27677_27710[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (13))){
var inst_27617 = (state_27664[(8)]);
var inst_27619 = (state_27664[(9)]);
var inst_27616 = (state_27664[(10)]);
var inst_27618 = (state_27664[(11)]);
var inst_27626 = (state_27664[(2)]);
var inst_27627 = (inst_27619 + (1));
var tmp27673 = inst_27617;
var tmp27674 = inst_27616;
var tmp27675 = inst_27618;
var inst_27616__$1 = tmp27674;
var inst_27617__$1 = tmp27673;
var inst_27618__$1 = tmp27675;
var inst_27619__$1 = inst_27627;
var state_27664__$1 = (function (){var statearr_27678 = state_27664;
(statearr_27678[(8)] = inst_27617__$1);

(statearr_27678[(9)] = inst_27619__$1);

(statearr_27678[(10)] = inst_27616__$1);

(statearr_27678[(11)] = inst_27618__$1);

(statearr_27678[(14)] = inst_27626);

return statearr_27678;
})();
var statearr_27679_27711 = state_27664__$1;
(statearr_27679_27711[(2)] = null);

(statearr_27679_27711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (22))){
var state_27664__$1 = state_27664;
var statearr_27680_27712 = state_27664__$1;
(statearr_27680_27712[(2)] = null);

(statearr_27680_27712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (6))){
var inst_27605 = (state_27664[(13)]);
var inst_27614 = f.call(null,inst_27605);
var inst_27615 = cljs.core.seq.call(null,inst_27614);
var inst_27616 = inst_27615;
var inst_27617 = null;
var inst_27618 = (0);
var inst_27619 = (0);
var state_27664__$1 = (function (){var statearr_27681 = state_27664;
(statearr_27681[(8)] = inst_27617);

(statearr_27681[(9)] = inst_27619);

(statearr_27681[(10)] = inst_27616);

(statearr_27681[(11)] = inst_27618);

return statearr_27681;
})();
var statearr_27682_27713 = state_27664__$1;
(statearr_27682_27713[(2)] = null);

(statearr_27682_27713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (17))){
var inst_27630 = (state_27664[(7)]);
var inst_27634 = cljs.core.chunk_first.call(null,inst_27630);
var inst_27635 = cljs.core.chunk_rest.call(null,inst_27630);
var inst_27636 = cljs.core.count.call(null,inst_27634);
var inst_27616 = inst_27635;
var inst_27617 = inst_27634;
var inst_27618 = inst_27636;
var inst_27619 = (0);
var state_27664__$1 = (function (){var statearr_27683 = state_27664;
(statearr_27683[(8)] = inst_27617);

(statearr_27683[(9)] = inst_27619);

(statearr_27683[(10)] = inst_27616);

(statearr_27683[(11)] = inst_27618);

return statearr_27683;
})();
var statearr_27684_27714 = state_27664__$1;
(statearr_27684_27714[(2)] = null);

(statearr_27684_27714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (3))){
var inst_27662 = (state_27664[(2)]);
var state_27664__$1 = state_27664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27664__$1,inst_27662);
} else {
if((state_val_27665 === (12))){
var inst_27650 = (state_27664[(2)]);
var state_27664__$1 = state_27664;
var statearr_27685_27715 = state_27664__$1;
(statearr_27685_27715[(2)] = inst_27650);

(statearr_27685_27715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (2))){
var state_27664__$1 = state_27664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27664__$1,(4),in$);
} else {
if((state_val_27665 === (23))){
var inst_27658 = (state_27664[(2)]);
var state_27664__$1 = state_27664;
var statearr_27686_27716 = state_27664__$1;
(statearr_27686_27716[(2)] = inst_27658);

(statearr_27686_27716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (19))){
var inst_27645 = (state_27664[(2)]);
var state_27664__$1 = state_27664;
var statearr_27687_27717 = state_27664__$1;
(statearr_27687_27717[(2)] = inst_27645);

(statearr_27687_27717[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (11))){
var inst_27616 = (state_27664[(10)]);
var inst_27630 = (state_27664[(7)]);
var inst_27630__$1 = cljs.core.seq.call(null,inst_27616);
var state_27664__$1 = (function (){var statearr_27688 = state_27664;
(statearr_27688[(7)] = inst_27630__$1);

return statearr_27688;
})();
if(inst_27630__$1){
var statearr_27689_27718 = state_27664__$1;
(statearr_27689_27718[(1)] = (14));

} else {
var statearr_27690_27719 = state_27664__$1;
(statearr_27690_27719[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (9))){
var inst_27652 = (state_27664[(2)]);
var inst_27653 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27664__$1 = (function (){var statearr_27691 = state_27664;
(statearr_27691[(15)] = inst_27652);

return statearr_27691;
})();
if(cljs.core.truth_(inst_27653)){
var statearr_27692_27720 = state_27664__$1;
(statearr_27692_27720[(1)] = (21));

} else {
var statearr_27693_27721 = state_27664__$1;
(statearr_27693_27721[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (5))){
var inst_27608 = cljs.core.async.close_BANG_.call(null,out);
var state_27664__$1 = state_27664;
var statearr_27694_27722 = state_27664__$1;
(statearr_27694_27722[(2)] = inst_27608);

(statearr_27694_27722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (14))){
var inst_27630 = (state_27664[(7)]);
var inst_27632 = cljs.core.chunked_seq_QMARK_.call(null,inst_27630);
var state_27664__$1 = state_27664;
if(inst_27632){
var statearr_27695_27723 = state_27664__$1;
(statearr_27695_27723[(1)] = (17));

} else {
var statearr_27696_27724 = state_27664__$1;
(statearr_27696_27724[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (16))){
var inst_27648 = (state_27664[(2)]);
var state_27664__$1 = state_27664;
var statearr_27697_27725 = state_27664__$1;
(statearr_27697_27725[(2)] = inst_27648);

(statearr_27697_27725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (10))){
var inst_27617 = (state_27664[(8)]);
var inst_27619 = (state_27664[(9)]);
var inst_27624 = cljs.core._nth.call(null,inst_27617,inst_27619);
var state_27664__$1 = state_27664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27664__$1,(13),out,inst_27624);
} else {
if((state_val_27665 === (18))){
var inst_27630 = (state_27664[(7)]);
var inst_27639 = cljs.core.first.call(null,inst_27630);
var state_27664__$1 = state_27664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27664__$1,(20),out,inst_27639);
} else {
if((state_val_27665 === (8))){
var inst_27619 = (state_27664[(9)]);
var inst_27618 = (state_27664[(11)]);
var inst_27621 = (inst_27619 < inst_27618);
var inst_27622 = inst_27621;
var state_27664__$1 = state_27664;
if(cljs.core.truth_(inst_27622)){
var statearr_27698_27726 = state_27664__$1;
(statearr_27698_27726[(1)] = (10));

} else {
var statearr_27699_27727 = state_27664__$1;
(statearr_27699_27727[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____0 = (function (){
var statearr_27700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27700[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__);

(statearr_27700[(1)] = (1));

return statearr_27700;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____1 = (function (state_27664){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_27664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e27701){if((e27701 instanceof Object)){
var ex__26035__auto__ = e27701;
var statearr_27702_27728 = state_27664;
(statearr_27702_27728[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27729 = state_27664;
state_27664 = G__27729;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__ = function(state_27664){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____1.call(this,state_27664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_27703 = f__26127__auto__.call(null);
(statearr_27703[(6)] = c__26126__auto__);

return statearr_27703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27731 = arguments.length;
switch (G__27731) {
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
var G__27734 = arguments.length;
switch (G__27734) {
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
var G__27737 = arguments.length;
switch (G__27737) {
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
var c__26126__auto___27784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_27761){
var state_val_27762 = (state_27761[(1)]);
if((state_val_27762 === (7))){
var inst_27756 = (state_27761[(2)]);
var state_27761__$1 = state_27761;
var statearr_27763_27785 = state_27761__$1;
(statearr_27763_27785[(2)] = inst_27756);

(statearr_27763_27785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27762 === (1))){
var inst_27738 = null;
var state_27761__$1 = (function (){var statearr_27764 = state_27761;
(statearr_27764[(7)] = inst_27738);

return statearr_27764;
})();
var statearr_27765_27786 = state_27761__$1;
(statearr_27765_27786[(2)] = null);

(statearr_27765_27786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27762 === (4))){
var inst_27741 = (state_27761[(8)]);
var inst_27741__$1 = (state_27761[(2)]);
var inst_27742 = (inst_27741__$1 == null);
var inst_27743 = cljs.core.not.call(null,inst_27742);
var state_27761__$1 = (function (){var statearr_27766 = state_27761;
(statearr_27766[(8)] = inst_27741__$1);

return statearr_27766;
})();
if(inst_27743){
var statearr_27767_27787 = state_27761__$1;
(statearr_27767_27787[(1)] = (5));

} else {
var statearr_27768_27788 = state_27761__$1;
(statearr_27768_27788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27762 === (6))){
var state_27761__$1 = state_27761;
var statearr_27769_27789 = state_27761__$1;
(statearr_27769_27789[(2)] = null);

(statearr_27769_27789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27762 === (3))){
var inst_27758 = (state_27761[(2)]);
var inst_27759 = cljs.core.async.close_BANG_.call(null,out);
var state_27761__$1 = (function (){var statearr_27770 = state_27761;
(statearr_27770[(9)] = inst_27758);

return statearr_27770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27761__$1,inst_27759);
} else {
if((state_val_27762 === (2))){
var state_27761__$1 = state_27761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27761__$1,(4),ch);
} else {
if((state_val_27762 === (11))){
var inst_27741 = (state_27761[(8)]);
var inst_27750 = (state_27761[(2)]);
var inst_27738 = inst_27741;
var state_27761__$1 = (function (){var statearr_27771 = state_27761;
(statearr_27771[(7)] = inst_27738);

(statearr_27771[(10)] = inst_27750);

return statearr_27771;
})();
var statearr_27772_27790 = state_27761__$1;
(statearr_27772_27790[(2)] = null);

(statearr_27772_27790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27762 === (9))){
var inst_27741 = (state_27761[(8)]);
var state_27761__$1 = state_27761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27761__$1,(11),out,inst_27741);
} else {
if((state_val_27762 === (5))){
var inst_27741 = (state_27761[(8)]);
var inst_27738 = (state_27761[(7)]);
var inst_27745 = cljs.core._EQ_.call(null,inst_27741,inst_27738);
var state_27761__$1 = state_27761;
if(inst_27745){
var statearr_27774_27791 = state_27761__$1;
(statearr_27774_27791[(1)] = (8));

} else {
var statearr_27775_27792 = state_27761__$1;
(statearr_27775_27792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27762 === (10))){
var inst_27753 = (state_27761[(2)]);
var state_27761__$1 = state_27761;
var statearr_27776_27793 = state_27761__$1;
(statearr_27776_27793[(2)] = inst_27753);

(statearr_27776_27793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27762 === (8))){
var inst_27738 = (state_27761[(7)]);
var tmp27773 = inst_27738;
var inst_27738__$1 = tmp27773;
var state_27761__$1 = (function (){var statearr_27777 = state_27761;
(statearr_27777[(7)] = inst_27738__$1);

return statearr_27777;
})();
var statearr_27778_27794 = state_27761__$1;
(statearr_27778_27794[(2)] = null);

(statearr_27778_27794[(1)] = (2));


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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_27779 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27779[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_27779[(1)] = (1));

return statearr_27779;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_27761){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_27761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e27780){if((e27780 instanceof Object)){
var ex__26035__auto__ = e27780;
var statearr_27781_27795 = state_27761;
(statearr_27781_27795[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27796 = state_27761;
state_27761 = G__27796;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_27761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_27761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_27782 = f__26127__auto__.call(null);
(statearr_27782[(6)] = c__26126__auto___27784);

return statearr_27782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27798 = arguments.length;
switch (G__27798) {
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
var c__26126__auto___27864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_27836){
var state_val_27837 = (state_27836[(1)]);
if((state_val_27837 === (7))){
var inst_27832 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27838_27865 = state_27836__$1;
(statearr_27838_27865[(2)] = inst_27832);

(statearr_27838_27865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (1))){
var inst_27799 = (new Array(n));
var inst_27800 = inst_27799;
var inst_27801 = (0);
var state_27836__$1 = (function (){var statearr_27839 = state_27836;
(statearr_27839[(7)] = inst_27800);

(statearr_27839[(8)] = inst_27801);

return statearr_27839;
})();
var statearr_27840_27866 = state_27836__$1;
(statearr_27840_27866[(2)] = null);

(statearr_27840_27866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (4))){
var inst_27804 = (state_27836[(9)]);
var inst_27804__$1 = (state_27836[(2)]);
var inst_27805 = (inst_27804__$1 == null);
var inst_27806 = cljs.core.not.call(null,inst_27805);
var state_27836__$1 = (function (){var statearr_27841 = state_27836;
(statearr_27841[(9)] = inst_27804__$1);

return statearr_27841;
})();
if(inst_27806){
var statearr_27842_27867 = state_27836__$1;
(statearr_27842_27867[(1)] = (5));

} else {
var statearr_27843_27868 = state_27836__$1;
(statearr_27843_27868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (15))){
var inst_27826 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27844_27869 = state_27836__$1;
(statearr_27844_27869[(2)] = inst_27826);

(statearr_27844_27869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (13))){
var state_27836__$1 = state_27836;
var statearr_27845_27870 = state_27836__$1;
(statearr_27845_27870[(2)] = null);

(statearr_27845_27870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (6))){
var inst_27801 = (state_27836[(8)]);
var inst_27822 = (inst_27801 > (0));
var state_27836__$1 = state_27836;
if(cljs.core.truth_(inst_27822)){
var statearr_27846_27871 = state_27836__$1;
(statearr_27846_27871[(1)] = (12));

} else {
var statearr_27847_27872 = state_27836__$1;
(statearr_27847_27872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (3))){
var inst_27834 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27836__$1,inst_27834);
} else {
if((state_val_27837 === (12))){
var inst_27800 = (state_27836[(7)]);
var inst_27824 = cljs.core.vec.call(null,inst_27800);
var state_27836__$1 = state_27836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27836__$1,(15),out,inst_27824);
} else {
if((state_val_27837 === (2))){
var state_27836__$1 = state_27836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27836__$1,(4),ch);
} else {
if((state_val_27837 === (11))){
var inst_27816 = (state_27836[(2)]);
var inst_27817 = (new Array(n));
var inst_27800 = inst_27817;
var inst_27801 = (0);
var state_27836__$1 = (function (){var statearr_27848 = state_27836;
(statearr_27848[(7)] = inst_27800);

(statearr_27848[(10)] = inst_27816);

(statearr_27848[(8)] = inst_27801);

return statearr_27848;
})();
var statearr_27849_27873 = state_27836__$1;
(statearr_27849_27873[(2)] = null);

(statearr_27849_27873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (9))){
var inst_27800 = (state_27836[(7)]);
var inst_27814 = cljs.core.vec.call(null,inst_27800);
var state_27836__$1 = state_27836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27836__$1,(11),out,inst_27814);
} else {
if((state_val_27837 === (5))){
var inst_27804 = (state_27836[(9)]);
var inst_27800 = (state_27836[(7)]);
var inst_27801 = (state_27836[(8)]);
var inst_27809 = (state_27836[(11)]);
var inst_27808 = (inst_27800[inst_27801] = inst_27804);
var inst_27809__$1 = (inst_27801 + (1));
var inst_27810 = (inst_27809__$1 < n);
var state_27836__$1 = (function (){var statearr_27850 = state_27836;
(statearr_27850[(11)] = inst_27809__$1);

(statearr_27850[(12)] = inst_27808);

return statearr_27850;
})();
if(cljs.core.truth_(inst_27810)){
var statearr_27851_27874 = state_27836__$1;
(statearr_27851_27874[(1)] = (8));

} else {
var statearr_27852_27875 = state_27836__$1;
(statearr_27852_27875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (14))){
var inst_27829 = (state_27836[(2)]);
var inst_27830 = cljs.core.async.close_BANG_.call(null,out);
var state_27836__$1 = (function (){var statearr_27854 = state_27836;
(statearr_27854[(13)] = inst_27829);

return statearr_27854;
})();
var statearr_27855_27876 = state_27836__$1;
(statearr_27855_27876[(2)] = inst_27830);

(statearr_27855_27876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (10))){
var inst_27820 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27856_27877 = state_27836__$1;
(statearr_27856_27877[(2)] = inst_27820);

(statearr_27856_27877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (8))){
var inst_27800 = (state_27836[(7)]);
var inst_27809 = (state_27836[(11)]);
var tmp27853 = inst_27800;
var inst_27800__$1 = tmp27853;
var inst_27801 = inst_27809;
var state_27836__$1 = (function (){var statearr_27857 = state_27836;
(statearr_27857[(7)] = inst_27800__$1);

(statearr_27857[(8)] = inst_27801);

return statearr_27857;
})();
var statearr_27858_27878 = state_27836__$1;
(statearr_27858_27878[(2)] = null);

(statearr_27858_27878[(1)] = (2));


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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_27859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27859[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_27859[(1)] = (1));

return statearr_27859;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_27836){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_27836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e27860){if((e27860 instanceof Object)){
var ex__26035__auto__ = e27860;
var statearr_27861_27879 = state_27836;
(statearr_27861_27879[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27880 = state_27836;
state_27836 = G__27880;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_27836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_27836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_27862 = f__26127__auto__.call(null);
(statearr_27862[(6)] = c__26126__auto___27864);

return statearr_27862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27882 = arguments.length;
switch (G__27882) {
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
var c__26126__auto___27952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_27924){
var state_val_27925 = (state_27924[(1)]);
if((state_val_27925 === (7))){
var inst_27920 = (state_27924[(2)]);
var state_27924__$1 = state_27924;
var statearr_27926_27953 = state_27924__$1;
(statearr_27926_27953[(2)] = inst_27920);

(statearr_27926_27953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27925 === (1))){
var inst_27883 = [];
var inst_27884 = inst_27883;
var inst_27885 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27924__$1 = (function (){var statearr_27927 = state_27924;
(statearr_27927[(7)] = inst_27884);

(statearr_27927[(8)] = inst_27885);

return statearr_27927;
})();
var statearr_27928_27954 = state_27924__$1;
(statearr_27928_27954[(2)] = null);

(statearr_27928_27954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27925 === (4))){
var inst_27888 = (state_27924[(9)]);
var inst_27888__$1 = (state_27924[(2)]);
var inst_27889 = (inst_27888__$1 == null);
var inst_27890 = cljs.core.not.call(null,inst_27889);
var state_27924__$1 = (function (){var statearr_27929 = state_27924;
(statearr_27929[(9)] = inst_27888__$1);

return statearr_27929;
})();
if(inst_27890){
var statearr_27930_27955 = state_27924__$1;
(statearr_27930_27955[(1)] = (5));

} else {
var statearr_27931_27956 = state_27924__$1;
(statearr_27931_27956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27925 === (15))){
var inst_27914 = (state_27924[(2)]);
var state_27924__$1 = state_27924;
var statearr_27932_27957 = state_27924__$1;
(statearr_27932_27957[(2)] = inst_27914);

(statearr_27932_27957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27925 === (13))){
var state_27924__$1 = state_27924;
var statearr_27933_27958 = state_27924__$1;
(statearr_27933_27958[(2)] = null);

(statearr_27933_27958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27925 === (6))){
var inst_27884 = (state_27924[(7)]);
var inst_27909 = inst_27884.length;
var inst_27910 = (inst_27909 > (0));
var state_27924__$1 = state_27924;
if(cljs.core.truth_(inst_27910)){
var statearr_27934_27959 = state_27924__$1;
(statearr_27934_27959[(1)] = (12));

} else {
var statearr_27935_27960 = state_27924__$1;
(statearr_27935_27960[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27925 === (3))){
var inst_27922 = (state_27924[(2)]);
var state_27924__$1 = state_27924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27924__$1,inst_27922);
} else {
if((state_val_27925 === (12))){
var inst_27884 = (state_27924[(7)]);
var inst_27912 = cljs.core.vec.call(null,inst_27884);
var state_27924__$1 = state_27924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27924__$1,(15),out,inst_27912);
} else {
if((state_val_27925 === (2))){
var state_27924__$1 = state_27924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27924__$1,(4),ch);
} else {
if((state_val_27925 === (11))){
var inst_27892 = (state_27924[(10)]);
var inst_27888 = (state_27924[(9)]);
var inst_27902 = (state_27924[(2)]);
var inst_27903 = [];
var inst_27904 = inst_27903.push(inst_27888);
var inst_27884 = inst_27903;
var inst_27885 = inst_27892;
var state_27924__$1 = (function (){var statearr_27936 = state_27924;
(statearr_27936[(7)] = inst_27884);

(statearr_27936[(8)] = inst_27885);

(statearr_27936[(11)] = inst_27902);

(statearr_27936[(12)] = inst_27904);

return statearr_27936;
})();
var statearr_27937_27961 = state_27924__$1;
(statearr_27937_27961[(2)] = null);

(statearr_27937_27961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27925 === (9))){
var inst_27884 = (state_27924[(7)]);
var inst_27900 = cljs.core.vec.call(null,inst_27884);
var state_27924__$1 = state_27924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27924__$1,(11),out,inst_27900);
} else {
if((state_val_27925 === (5))){
var inst_27885 = (state_27924[(8)]);
var inst_27892 = (state_27924[(10)]);
var inst_27888 = (state_27924[(9)]);
var inst_27892__$1 = f.call(null,inst_27888);
var inst_27893 = cljs.core._EQ_.call(null,inst_27892__$1,inst_27885);
var inst_27894 = cljs.core.keyword_identical_QMARK_.call(null,inst_27885,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27895 = ((inst_27893) || (inst_27894));
var state_27924__$1 = (function (){var statearr_27938 = state_27924;
(statearr_27938[(10)] = inst_27892__$1);

return statearr_27938;
})();
if(cljs.core.truth_(inst_27895)){
var statearr_27939_27962 = state_27924__$1;
(statearr_27939_27962[(1)] = (8));

} else {
var statearr_27940_27963 = state_27924__$1;
(statearr_27940_27963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27925 === (14))){
var inst_27917 = (state_27924[(2)]);
var inst_27918 = cljs.core.async.close_BANG_.call(null,out);
var state_27924__$1 = (function (){var statearr_27942 = state_27924;
(statearr_27942[(13)] = inst_27917);

return statearr_27942;
})();
var statearr_27943_27964 = state_27924__$1;
(statearr_27943_27964[(2)] = inst_27918);

(statearr_27943_27964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27925 === (10))){
var inst_27907 = (state_27924[(2)]);
var state_27924__$1 = state_27924;
var statearr_27944_27965 = state_27924__$1;
(statearr_27944_27965[(2)] = inst_27907);

(statearr_27944_27965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27925 === (8))){
var inst_27884 = (state_27924[(7)]);
var inst_27892 = (state_27924[(10)]);
var inst_27888 = (state_27924[(9)]);
var inst_27897 = inst_27884.push(inst_27888);
var tmp27941 = inst_27884;
var inst_27884__$1 = tmp27941;
var inst_27885 = inst_27892;
var state_27924__$1 = (function (){var statearr_27945 = state_27924;
(statearr_27945[(7)] = inst_27884__$1);

(statearr_27945[(8)] = inst_27885);

(statearr_27945[(14)] = inst_27897);

return statearr_27945;
})();
var statearr_27946_27966 = state_27924__$1;
(statearr_27946_27966[(2)] = null);

(statearr_27946_27966[(1)] = (2));


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
var cljs$core$async$state_machine__26032__auto__ = null;
var cljs$core$async$state_machine__26032__auto____0 = (function (){
var statearr_27947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27947[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_27947[(1)] = (1));

return statearr_27947;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_27924){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_27924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e27948){if((e27948 instanceof Object)){
var ex__26035__auto__ = e27948;
var statearr_27949_27967 = state_27924;
(statearr_27949_27967[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27968 = state_27924;
state_27924 = G__27968;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_27924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_27924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_27950 = f__26127__auto__.call(null);
(statearr_27950[(6)] = c__26126__auto___27952);

return statearr_27950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1718650405518
