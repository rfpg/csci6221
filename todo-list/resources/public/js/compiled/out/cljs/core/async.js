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
var G__42553 = arguments.length;
switch (G__42553) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42554 = (function (f,blockable,meta42555){
this.f = f;
this.blockable = blockable;
this.meta42555 = meta42555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42556,meta42555__$1){
var self__ = this;
var _42556__$1 = this;
return (new cljs.core.async.t_cljs$core$async42554(self__.f,self__.blockable,meta42555__$1));
}));

(cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42556){
var self__ = this;
var _42556__$1 = this;
return self__.meta42555;
}));

(cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42555","meta42555",264750294,null)], null);
}));

(cljs.core.async.t_cljs$core$async42554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42554");

(cljs.core.async.t_cljs$core$async42554.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async42554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42554.
 */
cljs.core.async.__GT_t_cljs$core$async42554 = (function cljs$core$async$__GT_t_cljs$core$async42554(f__$1,blockable__$1,meta42555){
return (new cljs.core.async.t_cljs$core$async42554(f__$1,blockable__$1,meta42555));
});

}

return (new cljs.core.async.t_cljs$core$async42554(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42560 = arguments.length;
switch (G__42560) {
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
var G__42563 = arguments.length;
switch (G__42563) {
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
var G__42566 = arguments.length;
switch (G__42566) {
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
var val_42568 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42568);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_42568);
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
var G__42570 = arguments.length;
switch (G__42570) {
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
var n__4648__auto___42572 = n;
var x_42573 = (0);
while(true){
if((x_42573 < n__4648__auto___42572)){
(a[x_42573] = (0));

var G__42574 = (x_42573 + (1));
x_42573 = G__42574;
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

var G__42575 = (i + (1));
i = G__42575;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42576 = (function (flag,meta42577){
this.flag = flag;
this.meta42577 = meta42577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42578,meta42577__$1){
var self__ = this;
var _42578__$1 = this;
return (new cljs.core.async.t_cljs$core$async42576(self__.flag,meta42577__$1));
}));

(cljs.core.async.t_cljs$core$async42576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42578){
var self__ = this;
var _42578__$1 = this;
return self__.meta42577;
}));

(cljs.core.async.t_cljs$core$async42576.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async42576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42577","meta42577",1691169908,null)], null);
}));

(cljs.core.async.t_cljs$core$async42576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42576");

(cljs.core.async.t_cljs$core$async42576.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async42576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42576.
 */
cljs.core.async.__GT_t_cljs$core$async42576 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42576(flag__$1,meta42577){
return (new cljs.core.async.t_cljs$core$async42576(flag__$1,meta42577));
});

}

return (new cljs.core.async.t_cljs$core$async42576(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42579 = (function (flag,cb,meta42580){
this.flag = flag;
this.cb = cb;
this.meta42580 = meta42580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42581,meta42580__$1){
var self__ = this;
var _42581__$1 = this;
return (new cljs.core.async.t_cljs$core$async42579(self__.flag,self__.cb,meta42580__$1));
}));

(cljs.core.async.t_cljs$core$async42579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42581){
var self__ = this;
var _42581__$1 = this;
return self__.meta42580;
}));

(cljs.core.async.t_cljs$core$async42579.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async42579.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42580","meta42580",-361754575,null)], null);
}));

(cljs.core.async.t_cljs$core$async42579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42579");

(cljs.core.async.t_cljs$core$async42579.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async42579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42579.
 */
cljs.core.async.__GT_t_cljs$core$async42579 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42579(flag__$1,cb__$1,meta42580){
return (new cljs.core.async.t_cljs$core$async42579(flag__$1,cb__$1,meta42580));
});

}

return (new cljs.core.async.t_cljs$core$async42579(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42582_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42582_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42583_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42583_SHARP_,port], null));
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
var G__42584 = (i + (1));
i = G__42584;
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
var len__4771__auto___42589 = arguments.length;
var i__4772__auto___42590 = (0);
while(true){
if((i__4772__auto___42590 < len__4771__auto___42589)){
args__4777__auto__.push((arguments[i__4772__auto___42590]));

var G__42591 = (i__4772__auto___42590 + (1));
i__4772__auto___42590 = G__42591;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42587){
var map__42588 = p__42587;
var map__42588__$1 = cljs.core.__destructure_map.call(null,map__42588);
var opts = map__42588__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42585){
var G__42586 = cljs.core.first.call(null,seq42585);
var seq42585__$1 = cljs.core.next.call(null,seq42585);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42586,seq42585__$1);
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
var G__42593 = arguments.length;
switch (G__42593) {
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
var c__26126__auto___42639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_42617){
var state_val_42618 = (state_42617[(1)]);
if((state_val_42618 === (7))){
var inst_42613 = (state_42617[(2)]);
var state_42617__$1 = state_42617;
var statearr_42619_42640 = state_42617__$1;
(statearr_42619_42640[(2)] = inst_42613);

(statearr_42619_42640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (1))){
var state_42617__$1 = state_42617;
var statearr_42620_42641 = state_42617__$1;
(statearr_42620_42641[(2)] = null);

(statearr_42620_42641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (4))){
var inst_42596 = (state_42617[(7)]);
var inst_42596__$1 = (state_42617[(2)]);
var inst_42597 = (inst_42596__$1 == null);
var state_42617__$1 = (function (){var statearr_42621 = state_42617;
(statearr_42621[(7)] = inst_42596__$1);

return statearr_42621;
})();
if(cljs.core.truth_(inst_42597)){
var statearr_42622_42642 = state_42617__$1;
(statearr_42622_42642[(1)] = (5));

} else {
var statearr_42623_42643 = state_42617__$1;
(statearr_42623_42643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (13))){
var state_42617__$1 = state_42617;
var statearr_42624_42644 = state_42617__$1;
(statearr_42624_42644[(2)] = null);

(statearr_42624_42644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (6))){
var inst_42596 = (state_42617[(7)]);
var state_42617__$1 = state_42617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42617__$1,(11),to,inst_42596);
} else {
if((state_val_42618 === (3))){
var inst_42615 = (state_42617[(2)]);
var state_42617__$1 = state_42617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42617__$1,inst_42615);
} else {
if((state_val_42618 === (12))){
var state_42617__$1 = state_42617;
var statearr_42625_42645 = state_42617__$1;
(statearr_42625_42645[(2)] = null);

(statearr_42625_42645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (2))){
var state_42617__$1 = state_42617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42617__$1,(4),from);
} else {
if((state_val_42618 === (11))){
var inst_42606 = (state_42617[(2)]);
var state_42617__$1 = state_42617;
if(cljs.core.truth_(inst_42606)){
var statearr_42626_42646 = state_42617__$1;
(statearr_42626_42646[(1)] = (12));

} else {
var statearr_42627_42647 = state_42617__$1;
(statearr_42627_42647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (9))){
var state_42617__$1 = state_42617;
var statearr_42628_42648 = state_42617__$1;
(statearr_42628_42648[(2)] = null);

(statearr_42628_42648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (5))){
var state_42617__$1 = state_42617;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42629_42649 = state_42617__$1;
(statearr_42629_42649[(1)] = (8));

} else {
var statearr_42630_42650 = state_42617__$1;
(statearr_42630_42650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (14))){
var inst_42611 = (state_42617[(2)]);
var state_42617__$1 = state_42617;
var statearr_42631_42651 = state_42617__$1;
(statearr_42631_42651[(2)] = inst_42611);

(statearr_42631_42651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (10))){
var inst_42603 = (state_42617[(2)]);
var state_42617__$1 = state_42617;
var statearr_42632_42652 = state_42617__$1;
(statearr_42632_42652[(2)] = inst_42603);

(statearr_42632_42652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (8))){
var inst_42600 = cljs.core.async.close_BANG_.call(null,to);
var state_42617__$1 = state_42617;
var statearr_42633_42653 = state_42617__$1;
(statearr_42633_42653[(2)] = inst_42600);

(statearr_42633_42653[(1)] = (10));


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
var statearr_42634 = [null,null,null,null,null,null,null,null];
(statearr_42634[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_42634[(1)] = (1));

return statearr_42634;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_42617){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_42617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e42635){if((e42635 instanceof Object)){
var ex__26035__auto__ = e42635;
var statearr_42636_42654 = state_42617;
(statearr_42636_42654[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42655 = state_42617;
state_42617 = G__42655;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_42617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_42617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_42637 = f__26127__auto__.call(null);
(statearr_42637[(6)] = c__26126__auto___42639);

return statearr_42637;
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
var process__$1 = (function (p__42656){
var vec__42657 = p__42656;
var v = cljs.core.nth.call(null,vec__42657,(0),null);
var p = cljs.core.nth.call(null,vec__42657,(1),null);
var job = vec__42657;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26126__auto___42828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_42664){
var state_val_42665 = (state_42664[(1)]);
if((state_val_42665 === (1))){
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42664__$1,(2),res,v);
} else {
if((state_val_42665 === (2))){
var inst_42661 = (state_42664[(2)]);
var inst_42662 = cljs.core.async.close_BANG_.call(null,res);
var state_42664__$1 = (function (){var statearr_42666 = state_42664;
(statearr_42666[(7)] = inst_42661);

return statearr_42666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42664__$1,inst_42662);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0 = (function (){
var statearr_42667 = [null,null,null,null,null,null,null,null];
(statearr_42667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__);

(statearr_42667[(1)] = (1));

return statearr_42667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1 = (function (state_42664){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_42664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e42668){if((e42668 instanceof Object)){
var ex__26035__auto__ = e42668;
var statearr_42669_42829 = state_42664;
(statearr_42669_42829[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42830 = state_42664;
state_42664 = G__42830;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = function(state_42664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1.call(this,state_42664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_42670 = f__26127__auto__.call(null);
(statearr_42670[(6)] = c__26126__auto___42828);

return statearr_42670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__42671){
var vec__42672 = p__42671;
var v = cljs.core.nth.call(null,vec__42672,(0),null);
var p = cljs.core.nth.call(null,vec__42672,(1),null);
var job = vec__42672;
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
var n__4648__auto___42831 = n;
var __42832 = (0);
while(true){
if((__42832 < n__4648__auto___42831)){
var G__42675_42833 = type;
var G__42675_42834__$1 = (((G__42675_42833 instanceof cljs.core.Keyword))?G__42675_42833.fqn:null);
switch (G__42675_42834__$1) {
case "compute":
var c__26126__auto___42836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42832,c__26126__auto___42836,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async){
return (function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = ((function (__42832,c__26126__auto___42836,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async){
return (function (state_42688){
var state_val_42689 = (state_42688[(1)]);
if((state_val_42689 === (1))){
var state_42688__$1 = state_42688;
var statearr_42690_42837 = state_42688__$1;
(statearr_42690_42837[(2)] = null);

(statearr_42690_42837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (2))){
var state_42688__$1 = state_42688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42688__$1,(4),jobs);
} else {
if((state_val_42689 === (3))){
var inst_42686 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42688__$1,inst_42686);
} else {
if((state_val_42689 === (4))){
var inst_42678 = (state_42688[(2)]);
var inst_42679 = process__$1.call(null,inst_42678);
var state_42688__$1 = state_42688;
if(cljs.core.truth_(inst_42679)){
var statearr_42691_42838 = state_42688__$1;
(statearr_42691_42838[(1)] = (5));

} else {
var statearr_42692_42839 = state_42688__$1;
(statearr_42692_42839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (5))){
var state_42688__$1 = state_42688;
var statearr_42693_42840 = state_42688__$1;
(statearr_42693_42840[(2)] = null);

(statearr_42693_42840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (6))){
var state_42688__$1 = state_42688;
var statearr_42694_42841 = state_42688__$1;
(statearr_42694_42841[(2)] = null);

(statearr_42694_42841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (7))){
var inst_42684 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
var statearr_42695_42842 = state_42688__$1;
(statearr_42695_42842[(2)] = inst_42684);

(statearr_42695_42842[(1)] = (3));


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
});})(__42832,c__26126__auto___42836,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async))
;
return ((function (__42832,switch__26031__auto__,c__26126__auto___42836,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0 = (function (){
var statearr_42696 = [null,null,null,null,null,null,null];
(statearr_42696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__);

(statearr_42696[(1)] = (1));

return statearr_42696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1 = (function (state_42688){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_42688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e42697){if((e42697 instanceof Object)){
var ex__26035__auto__ = e42697;
var statearr_42698_42843 = state_42688;
(statearr_42698_42843[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42844 = state_42688;
state_42688 = G__42844;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = function(state_42688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1.call(this,state_42688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__;
})()
;})(__42832,switch__26031__auto__,c__26126__auto___42836,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async))
})();
var state__26128__auto__ = (function (){var statearr_42699 = f__26127__auto__.call(null);
(statearr_42699[(6)] = c__26126__auto___42836);

return statearr_42699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
});})(__42832,c__26126__auto___42836,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async))
);


break;
case "async":
var c__26126__auto___42845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42832,c__26126__auto___42845,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async){
return (function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = ((function (__42832,c__26126__auto___42845,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async){
return (function (state_42712){
var state_val_42713 = (state_42712[(1)]);
if((state_val_42713 === (1))){
var state_42712__$1 = state_42712;
var statearr_42714_42846 = state_42712__$1;
(statearr_42714_42846[(2)] = null);

(statearr_42714_42846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (2))){
var state_42712__$1 = state_42712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42712__$1,(4),jobs);
} else {
if((state_val_42713 === (3))){
var inst_42710 = (state_42712[(2)]);
var state_42712__$1 = state_42712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42712__$1,inst_42710);
} else {
if((state_val_42713 === (4))){
var inst_42702 = (state_42712[(2)]);
var inst_42703 = async.call(null,inst_42702);
var state_42712__$1 = state_42712;
if(cljs.core.truth_(inst_42703)){
var statearr_42715_42847 = state_42712__$1;
(statearr_42715_42847[(1)] = (5));

} else {
var statearr_42716_42848 = state_42712__$1;
(statearr_42716_42848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (5))){
var state_42712__$1 = state_42712;
var statearr_42717_42849 = state_42712__$1;
(statearr_42717_42849[(2)] = null);

(statearr_42717_42849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (6))){
var state_42712__$1 = state_42712;
var statearr_42718_42850 = state_42712__$1;
(statearr_42718_42850[(2)] = null);

(statearr_42718_42850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (7))){
var inst_42708 = (state_42712[(2)]);
var state_42712__$1 = state_42712;
var statearr_42719_42851 = state_42712__$1;
(statearr_42719_42851[(2)] = inst_42708);

(statearr_42719_42851[(1)] = (3));


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
});})(__42832,c__26126__auto___42845,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async))
;
return ((function (__42832,switch__26031__auto__,c__26126__auto___42845,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0 = (function (){
var statearr_42720 = [null,null,null,null,null,null,null];
(statearr_42720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__);

(statearr_42720[(1)] = (1));

return statearr_42720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1 = (function (state_42712){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_42712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e42721){if((e42721 instanceof Object)){
var ex__26035__auto__ = e42721;
var statearr_42722_42852 = state_42712;
(statearr_42722_42852[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42853 = state_42712;
state_42712 = G__42853;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = function(state_42712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1.call(this,state_42712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__;
})()
;})(__42832,switch__26031__auto__,c__26126__auto___42845,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async))
})();
var state__26128__auto__ = (function (){var statearr_42723 = f__26127__auto__.call(null);
(statearr_42723[(6)] = c__26126__auto___42845);

return statearr_42723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
});})(__42832,c__26126__auto___42845,G__42675_42833,G__42675_42834__$1,n__4648__auto___42831,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42675_42834__$1)].join('')));

}

var G__42854 = (__42832 + (1));
__42832 = G__42854;
continue;
} else {
}
break;
}

var c__26126__auto___42855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_42745){
var state_val_42746 = (state_42745[(1)]);
if((state_val_42746 === (7))){
var inst_42741 = (state_42745[(2)]);
var state_42745__$1 = state_42745;
var statearr_42747_42856 = state_42745__$1;
(statearr_42747_42856[(2)] = inst_42741);

(statearr_42747_42856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (1))){
var state_42745__$1 = state_42745;
var statearr_42748_42857 = state_42745__$1;
(statearr_42748_42857[(2)] = null);

(statearr_42748_42857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (4))){
var inst_42726 = (state_42745[(7)]);
var inst_42726__$1 = (state_42745[(2)]);
var inst_42727 = (inst_42726__$1 == null);
var state_42745__$1 = (function (){var statearr_42749 = state_42745;
(statearr_42749[(7)] = inst_42726__$1);

return statearr_42749;
})();
if(cljs.core.truth_(inst_42727)){
var statearr_42750_42858 = state_42745__$1;
(statearr_42750_42858[(1)] = (5));

} else {
var statearr_42751_42859 = state_42745__$1;
(statearr_42751_42859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (6))){
var inst_42726 = (state_42745[(7)]);
var inst_42731 = (state_42745[(8)]);
var inst_42731__$1 = cljs.core.async.chan.call(null,(1));
var inst_42732 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42733 = [inst_42726,inst_42731__$1];
var inst_42734 = (new cljs.core.PersistentVector(null,2,(5),inst_42732,inst_42733,null));
var state_42745__$1 = (function (){var statearr_42752 = state_42745;
(statearr_42752[(8)] = inst_42731__$1);

return statearr_42752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42745__$1,(8),jobs,inst_42734);
} else {
if((state_val_42746 === (3))){
var inst_42743 = (state_42745[(2)]);
var state_42745__$1 = state_42745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42745__$1,inst_42743);
} else {
if((state_val_42746 === (2))){
var state_42745__$1 = state_42745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42745__$1,(4),from);
} else {
if((state_val_42746 === (9))){
var inst_42738 = (state_42745[(2)]);
var state_42745__$1 = (function (){var statearr_42753 = state_42745;
(statearr_42753[(9)] = inst_42738);

return statearr_42753;
})();
var statearr_42754_42860 = state_42745__$1;
(statearr_42754_42860[(2)] = null);

(statearr_42754_42860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (5))){
var inst_42729 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42745__$1 = state_42745;
var statearr_42755_42861 = state_42745__$1;
(statearr_42755_42861[(2)] = inst_42729);

(statearr_42755_42861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (8))){
var inst_42731 = (state_42745[(8)]);
var inst_42736 = (state_42745[(2)]);
var state_42745__$1 = (function (){var statearr_42756 = state_42745;
(statearr_42756[(10)] = inst_42736);

return statearr_42756;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42745__$1,(9),results,inst_42731);
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
var statearr_42757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__);

(statearr_42757[(1)] = (1));

return statearr_42757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1 = (function (state_42745){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_42745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e42758){if((e42758 instanceof Object)){
var ex__26035__auto__ = e42758;
var statearr_42759_42862 = state_42745;
(statearr_42759_42862[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42863 = state_42745;
state_42745 = G__42863;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = function(state_42745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1.call(this,state_42745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_42760 = f__26127__auto__.call(null);
(statearr_42760[(6)] = c__26126__auto___42855);

return statearr_42760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_42798){
var state_val_42799 = (state_42798[(1)]);
if((state_val_42799 === (7))){
var inst_42794 = (state_42798[(2)]);
var state_42798__$1 = state_42798;
var statearr_42800_42864 = state_42798__$1;
(statearr_42800_42864[(2)] = inst_42794);

(statearr_42800_42864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (20))){
var state_42798__$1 = state_42798;
var statearr_42801_42865 = state_42798__$1;
(statearr_42801_42865[(2)] = null);

(statearr_42801_42865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (1))){
var state_42798__$1 = state_42798;
var statearr_42802_42866 = state_42798__$1;
(statearr_42802_42866[(2)] = null);

(statearr_42802_42866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (4))){
var inst_42763 = (state_42798[(7)]);
var inst_42763__$1 = (state_42798[(2)]);
var inst_42764 = (inst_42763__$1 == null);
var state_42798__$1 = (function (){var statearr_42803 = state_42798;
(statearr_42803[(7)] = inst_42763__$1);

return statearr_42803;
})();
if(cljs.core.truth_(inst_42764)){
var statearr_42804_42867 = state_42798__$1;
(statearr_42804_42867[(1)] = (5));

} else {
var statearr_42805_42868 = state_42798__$1;
(statearr_42805_42868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (15))){
var inst_42776 = (state_42798[(8)]);
var state_42798__$1 = state_42798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42798__$1,(18),to,inst_42776);
} else {
if((state_val_42799 === (21))){
var inst_42789 = (state_42798[(2)]);
var state_42798__$1 = state_42798;
var statearr_42806_42869 = state_42798__$1;
(statearr_42806_42869[(2)] = inst_42789);

(statearr_42806_42869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (13))){
var inst_42791 = (state_42798[(2)]);
var state_42798__$1 = (function (){var statearr_42807 = state_42798;
(statearr_42807[(9)] = inst_42791);

return statearr_42807;
})();
var statearr_42808_42870 = state_42798__$1;
(statearr_42808_42870[(2)] = null);

(statearr_42808_42870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (6))){
var inst_42763 = (state_42798[(7)]);
var state_42798__$1 = state_42798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42798__$1,(11),inst_42763);
} else {
if((state_val_42799 === (17))){
var inst_42784 = (state_42798[(2)]);
var state_42798__$1 = state_42798;
if(cljs.core.truth_(inst_42784)){
var statearr_42809_42871 = state_42798__$1;
(statearr_42809_42871[(1)] = (19));

} else {
var statearr_42810_42872 = state_42798__$1;
(statearr_42810_42872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (3))){
var inst_42796 = (state_42798[(2)]);
var state_42798__$1 = state_42798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42798__$1,inst_42796);
} else {
if((state_val_42799 === (12))){
var inst_42773 = (state_42798[(10)]);
var state_42798__$1 = state_42798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42798__$1,(14),inst_42773);
} else {
if((state_val_42799 === (2))){
var state_42798__$1 = state_42798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42798__$1,(4),results);
} else {
if((state_val_42799 === (19))){
var state_42798__$1 = state_42798;
var statearr_42811_42873 = state_42798__$1;
(statearr_42811_42873[(2)] = null);

(statearr_42811_42873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (11))){
var inst_42773 = (state_42798[(2)]);
var state_42798__$1 = (function (){var statearr_42812 = state_42798;
(statearr_42812[(10)] = inst_42773);

return statearr_42812;
})();
var statearr_42813_42874 = state_42798__$1;
(statearr_42813_42874[(2)] = null);

(statearr_42813_42874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (9))){
var state_42798__$1 = state_42798;
var statearr_42814_42875 = state_42798__$1;
(statearr_42814_42875[(2)] = null);

(statearr_42814_42875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (5))){
var state_42798__$1 = state_42798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42815_42876 = state_42798__$1;
(statearr_42815_42876[(1)] = (8));

} else {
var statearr_42816_42877 = state_42798__$1;
(statearr_42816_42877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (14))){
var inst_42776 = (state_42798[(8)]);
var inst_42776__$1 = (state_42798[(2)]);
var inst_42777 = (inst_42776__$1 == null);
var inst_42778 = cljs.core.not.call(null,inst_42777);
var state_42798__$1 = (function (){var statearr_42817 = state_42798;
(statearr_42817[(8)] = inst_42776__$1);

return statearr_42817;
})();
if(inst_42778){
var statearr_42818_42878 = state_42798__$1;
(statearr_42818_42878[(1)] = (15));

} else {
var statearr_42819_42879 = state_42798__$1;
(statearr_42819_42879[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (16))){
var state_42798__$1 = state_42798;
var statearr_42820_42880 = state_42798__$1;
(statearr_42820_42880[(2)] = false);

(statearr_42820_42880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (10))){
var inst_42770 = (state_42798[(2)]);
var state_42798__$1 = state_42798;
var statearr_42821_42881 = state_42798__$1;
(statearr_42821_42881[(2)] = inst_42770);

(statearr_42821_42881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (18))){
var inst_42781 = (state_42798[(2)]);
var state_42798__$1 = state_42798;
var statearr_42822_42882 = state_42798__$1;
(statearr_42822_42882[(2)] = inst_42781);

(statearr_42822_42882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42799 === (8))){
var inst_42767 = cljs.core.async.close_BANG_.call(null,to);
var state_42798__$1 = state_42798;
var statearr_42823_42883 = state_42798__$1;
(statearr_42823_42883[(2)] = inst_42767);

(statearr_42823_42883[(1)] = (10));


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
var statearr_42824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__);

(statearr_42824[(1)] = (1));

return statearr_42824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1 = (function (state_42798){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_42798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e42825){if((e42825 instanceof Object)){
var ex__26035__auto__ = e42825;
var statearr_42826_42884 = state_42798;
(statearr_42826_42884[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42885 = state_42798;
state_42798 = G__42885;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__ = function(state_42798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1.call(this,state_42798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_42827 = f__26127__auto__.call(null);
(statearr_42827[(6)] = c__26126__auto__);

return statearr_42827;
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
var G__42887 = arguments.length;
switch (G__42887) {
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
var G__42890 = arguments.length;
switch (G__42890) {
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
var G__42893 = arguments.length;
switch (G__42893) {
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
var c__26126__auto___42942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_42919){
var state_val_42920 = (state_42919[(1)]);
if((state_val_42920 === (7))){
var inst_42915 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42921_42943 = state_42919__$1;
(statearr_42921_42943[(2)] = inst_42915);

(statearr_42921_42943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (1))){
var state_42919__$1 = state_42919;
var statearr_42922_42944 = state_42919__$1;
(statearr_42922_42944[(2)] = null);

(statearr_42922_42944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (4))){
var inst_42896 = (state_42919[(7)]);
var inst_42896__$1 = (state_42919[(2)]);
var inst_42897 = (inst_42896__$1 == null);
var state_42919__$1 = (function (){var statearr_42923 = state_42919;
(statearr_42923[(7)] = inst_42896__$1);

return statearr_42923;
})();
if(cljs.core.truth_(inst_42897)){
var statearr_42924_42945 = state_42919__$1;
(statearr_42924_42945[(1)] = (5));

} else {
var statearr_42925_42946 = state_42919__$1;
(statearr_42925_42946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (13))){
var state_42919__$1 = state_42919;
var statearr_42926_42947 = state_42919__$1;
(statearr_42926_42947[(2)] = null);

(statearr_42926_42947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (6))){
var inst_42896 = (state_42919[(7)]);
var inst_42902 = p.call(null,inst_42896);
var state_42919__$1 = state_42919;
if(cljs.core.truth_(inst_42902)){
var statearr_42927_42948 = state_42919__$1;
(statearr_42927_42948[(1)] = (9));

} else {
var statearr_42928_42949 = state_42919__$1;
(statearr_42928_42949[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (3))){
var inst_42917 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42919__$1,inst_42917);
} else {
if((state_val_42920 === (12))){
var state_42919__$1 = state_42919;
var statearr_42929_42950 = state_42919__$1;
(statearr_42929_42950[(2)] = null);

(statearr_42929_42950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (2))){
var state_42919__$1 = state_42919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42919__$1,(4),ch);
} else {
if((state_val_42920 === (11))){
var inst_42896 = (state_42919[(7)]);
var inst_42906 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42919__$1,(8),inst_42906,inst_42896);
} else {
if((state_val_42920 === (9))){
var state_42919__$1 = state_42919;
var statearr_42930_42951 = state_42919__$1;
(statearr_42930_42951[(2)] = tc);

(statearr_42930_42951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (5))){
var inst_42899 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42900 = cljs.core.async.close_BANG_.call(null,fc);
var state_42919__$1 = (function (){var statearr_42931 = state_42919;
(statearr_42931[(8)] = inst_42899);

return statearr_42931;
})();
var statearr_42932_42952 = state_42919__$1;
(statearr_42932_42952[(2)] = inst_42900);

(statearr_42932_42952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (14))){
var inst_42913 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42933_42953 = state_42919__$1;
(statearr_42933_42953[(2)] = inst_42913);

(statearr_42933_42953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (10))){
var state_42919__$1 = state_42919;
var statearr_42934_42954 = state_42919__$1;
(statearr_42934_42954[(2)] = fc);

(statearr_42934_42954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (8))){
var inst_42908 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
if(cljs.core.truth_(inst_42908)){
var statearr_42935_42955 = state_42919__$1;
(statearr_42935_42955[(1)] = (12));

} else {
var statearr_42936_42956 = state_42919__$1;
(statearr_42936_42956[(1)] = (13));

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
var statearr_42937 = [null,null,null,null,null,null,null,null,null];
(statearr_42937[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_42937[(1)] = (1));

return statearr_42937;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_42919){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_42919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e42938){if((e42938 instanceof Object)){
var ex__26035__auto__ = e42938;
var statearr_42939_42957 = state_42919;
(statearr_42939_42957[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42958 = state_42919;
state_42919 = G__42958;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_42919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_42919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_42940 = f__26127__auto__.call(null);
(statearr_42940[(6)] = c__26126__auto___42942);

return statearr_42940;
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
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_42979){
var state_val_42980 = (state_42979[(1)]);
if((state_val_42980 === (7))){
var inst_42975 = (state_42979[(2)]);
var state_42979__$1 = state_42979;
var statearr_42981_42999 = state_42979__$1;
(statearr_42981_42999[(2)] = inst_42975);

(statearr_42981_42999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42980 === (1))){
var inst_42959 = init;
var state_42979__$1 = (function (){var statearr_42982 = state_42979;
(statearr_42982[(7)] = inst_42959);

return statearr_42982;
})();
var statearr_42983_43000 = state_42979__$1;
(statearr_42983_43000[(2)] = null);

(statearr_42983_43000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42980 === (4))){
var inst_42962 = (state_42979[(8)]);
var inst_42962__$1 = (state_42979[(2)]);
var inst_42963 = (inst_42962__$1 == null);
var state_42979__$1 = (function (){var statearr_42984 = state_42979;
(statearr_42984[(8)] = inst_42962__$1);

return statearr_42984;
})();
if(cljs.core.truth_(inst_42963)){
var statearr_42985_43001 = state_42979__$1;
(statearr_42985_43001[(1)] = (5));

} else {
var statearr_42986_43002 = state_42979__$1;
(statearr_42986_43002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42980 === (6))){
var inst_42959 = (state_42979[(7)]);
var inst_42962 = (state_42979[(8)]);
var inst_42966 = (state_42979[(9)]);
var inst_42966__$1 = f.call(null,inst_42959,inst_42962);
var inst_42967 = cljs.core.reduced_QMARK_.call(null,inst_42966__$1);
var state_42979__$1 = (function (){var statearr_42987 = state_42979;
(statearr_42987[(9)] = inst_42966__$1);

return statearr_42987;
})();
if(inst_42967){
var statearr_42988_43003 = state_42979__$1;
(statearr_42988_43003[(1)] = (8));

} else {
var statearr_42989_43004 = state_42979__$1;
(statearr_42989_43004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42980 === (3))){
var inst_42977 = (state_42979[(2)]);
var state_42979__$1 = state_42979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42979__$1,inst_42977);
} else {
if((state_val_42980 === (2))){
var state_42979__$1 = state_42979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42979__$1,(4),ch);
} else {
if((state_val_42980 === (9))){
var inst_42966 = (state_42979[(9)]);
var inst_42959 = inst_42966;
var state_42979__$1 = (function (){var statearr_42990 = state_42979;
(statearr_42990[(7)] = inst_42959);

return statearr_42990;
})();
var statearr_42991_43005 = state_42979__$1;
(statearr_42991_43005[(2)] = null);

(statearr_42991_43005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42980 === (5))){
var inst_42959 = (state_42979[(7)]);
var state_42979__$1 = state_42979;
var statearr_42992_43006 = state_42979__$1;
(statearr_42992_43006[(2)] = inst_42959);

(statearr_42992_43006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42980 === (10))){
var inst_42973 = (state_42979[(2)]);
var state_42979__$1 = state_42979;
var statearr_42993_43007 = state_42979__$1;
(statearr_42993_43007[(2)] = inst_42973);

(statearr_42993_43007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42980 === (8))){
var inst_42966 = (state_42979[(9)]);
var inst_42969 = cljs.core.deref.call(null,inst_42966);
var state_42979__$1 = state_42979;
var statearr_42994_43008 = state_42979__$1;
(statearr_42994_43008[(2)] = inst_42969);

(statearr_42994_43008[(1)] = (10));


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
var statearr_42995 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42995[(0)] = cljs$core$async$reduce_$_state_machine__26032__auto__);

(statearr_42995[(1)] = (1));

return statearr_42995;
});
var cljs$core$async$reduce_$_state_machine__26032__auto____1 = (function (state_42979){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_42979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e42996){if((e42996 instanceof Object)){
var ex__26035__auto__ = e42996;
var statearr_42997_43009 = state_42979;
(statearr_42997_43009[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43010 = state_42979;
state_42979 = G__43010;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26032__auto__ = function(state_42979){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26032__auto____1.call(this,state_42979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26032__auto____0;
cljs$core$async$reduce_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26032__auto____1;
return cljs$core$async$reduce_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_42998 = f__26127__auto__.call(null);
(statearr_42998[(6)] = c__26126__auto__);

return statearr_42998;
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
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_43016){
var state_val_43017 = (state_43016[(1)]);
if((state_val_43017 === (1))){
var inst_43011 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_43016__$1 = state_43016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43016__$1,(2),inst_43011);
} else {
if((state_val_43017 === (2))){
var inst_43013 = (state_43016[(2)]);
var inst_43014 = f__$1.call(null,inst_43013);
var state_43016__$1 = state_43016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43016__$1,inst_43014);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26032__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26032__auto____0 = (function (){
var statearr_43018 = [null,null,null,null,null,null,null];
(statearr_43018[(0)] = cljs$core$async$transduce_$_state_machine__26032__auto__);

(statearr_43018[(1)] = (1));

return statearr_43018;
});
var cljs$core$async$transduce_$_state_machine__26032__auto____1 = (function (state_43016){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_43016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e43019){if((e43019 instanceof Object)){
var ex__26035__auto__ = e43019;
var statearr_43020_43022 = state_43016;
(statearr_43020_43022[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43023 = state_43016;
state_43016 = G__43023;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26032__auto__ = function(state_43016){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26032__auto____1.call(this,state_43016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26032__auto____0;
cljs$core$async$transduce_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26032__auto____1;
return cljs$core$async$transduce_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_43021 = f__26127__auto__.call(null);
(statearr_43021[(6)] = c__26126__auto__);

return statearr_43021;
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
var G__43025 = arguments.length;
switch (G__43025) {
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
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_43050){
var state_val_43051 = (state_43050[(1)]);
if((state_val_43051 === (7))){
var inst_43032 = (state_43050[(2)]);
var state_43050__$1 = state_43050;
var statearr_43052_43073 = state_43050__$1;
(statearr_43052_43073[(2)] = inst_43032);

(statearr_43052_43073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (1))){
var inst_43026 = cljs.core.seq.call(null,coll);
var inst_43027 = inst_43026;
var state_43050__$1 = (function (){var statearr_43053 = state_43050;
(statearr_43053[(7)] = inst_43027);

return statearr_43053;
})();
var statearr_43054_43074 = state_43050__$1;
(statearr_43054_43074[(2)] = null);

(statearr_43054_43074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (4))){
var inst_43027 = (state_43050[(7)]);
var inst_43030 = cljs.core.first.call(null,inst_43027);
var state_43050__$1 = state_43050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43050__$1,(7),ch,inst_43030);
} else {
if((state_val_43051 === (13))){
var inst_43044 = (state_43050[(2)]);
var state_43050__$1 = state_43050;
var statearr_43055_43075 = state_43050__$1;
(statearr_43055_43075[(2)] = inst_43044);

(statearr_43055_43075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (6))){
var inst_43035 = (state_43050[(2)]);
var state_43050__$1 = state_43050;
if(cljs.core.truth_(inst_43035)){
var statearr_43056_43076 = state_43050__$1;
(statearr_43056_43076[(1)] = (8));

} else {
var statearr_43057_43077 = state_43050__$1;
(statearr_43057_43077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (3))){
var inst_43048 = (state_43050[(2)]);
var state_43050__$1 = state_43050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43050__$1,inst_43048);
} else {
if((state_val_43051 === (12))){
var state_43050__$1 = state_43050;
var statearr_43058_43078 = state_43050__$1;
(statearr_43058_43078[(2)] = null);

(statearr_43058_43078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (2))){
var inst_43027 = (state_43050[(7)]);
var state_43050__$1 = state_43050;
if(cljs.core.truth_(inst_43027)){
var statearr_43059_43079 = state_43050__$1;
(statearr_43059_43079[(1)] = (4));

} else {
var statearr_43060_43080 = state_43050__$1;
(statearr_43060_43080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (11))){
var inst_43041 = cljs.core.async.close_BANG_.call(null,ch);
var state_43050__$1 = state_43050;
var statearr_43061_43081 = state_43050__$1;
(statearr_43061_43081[(2)] = inst_43041);

(statearr_43061_43081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (9))){
var state_43050__$1 = state_43050;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43062_43082 = state_43050__$1;
(statearr_43062_43082[(1)] = (11));

} else {
var statearr_43063_43083 = state_43050__$1;
(statearr_43063_43083[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (5))){
var inst_43027 = (state_43050[(7)]);
var state_43050__$1 = state_43050;
var statearr_43064_43084 = state_43050__$1;
(statearr_43064_43084[(2)] = inst_43027);

(statearr_43064_43084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (10))){
var inst_43046 = (state_43050[(2)]);
var state_43050__$1 = state_43050;
var statearr_43065_43085 = state_43050__$1;
(statearr_43065_43085[(2)] = inst_43046);

(statearr_43065_43085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (8))){
var inst_43027 = (state_43050[(7)]);
var inst_43037 = cljs.core.next.call(null,inst_43027);
var inst_43027__$1 = inst_43037;
var state_43050__$1 = (function (){var statearr_43066 = state_43050;
(statearr_43066[(7)] = inst_43027__$1);

return statearr_43066;
})();
var statearr_43067_43086 = state_43050__$1;
(statearr_43067_43086[(2)] = null);

(statearr_43067_43086[(1)] = (2));


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
var statearr_43068 = [null,null,null,null,null,null,null,null];
(statearr_43068[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_43068[(1)] = (1));

return statearr_43068;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_43050){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_43050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e43069){if((e43069 instanceof Object)){
var ex__26035__auto__ = e43069;
var statearr_43070_43087 = state_43050;
(statearr_43070_43087[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43088 = state_43050;
state_43050 = G__43088;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_43050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_43050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_43071 = f__26127__auto__.call(null);
(statearr_43071[(6)] = c__26126__auto__);

return statearr_43071;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_43089 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_43089.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43090 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_43090.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43091 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_43091.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43092 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_43092.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43093 = (function (ch,cs,meta43094){
this.ch = ch;
this.cs = cs;
this.meta43094 = meta43094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43095,meta43094__$1){
var self__ = this;
var _43095__$1 = this;
return (new cljs.core.async.t_cljs$core$async43093(self__.ch,self__.cs,meta43094__$1));
}));

(cljs.core.async.t_cljs$core$async43093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43095){
var self__ = this;
var _43095__$1 = this;
return self__.meta43094;
}));

(cljs.core.async.t_cljs$core$async43093.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43093.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43093.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43093.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43093.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43094","meta43094",565988560,null)], null);
}));

(cljs.core.async.t_cljs$core$async43093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43093");

(cljs.core.async.t_cljs$core$async43093.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async43093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43093.
 */
cljs.core.async.__GT_t_cljs$core$async43093 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43093(ch__$1,cs__$1,meta43094){
return (new cljs.core.async.t_cljs$core$async43093(ch__$1,cs__$1,meta43094));
});

}

return (new cljs.core.async.t_cljs$core$async43093(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26126__auto___43315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_43230){
var state_val_43231 = (state_43230[(1)]);
if((state_val_43231 === (7))){
var inst_43226 = (state_43230[(2)]);
var state_43230__$1 = state_43230;
var statearr_43232_43316 = state_43230__$1;
(statearr_43232_43316[(2)] = inst_43226);

(statearr_43232_43316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (20))){
var inst_43129 = (state_43230[(7)]);
var inst_43141 = cljs.core.first.call(null,inst_43129);
var inst_43142 = cljs.core.nth.call(null,inst_43141,(0),null);
var inst_43143 = cljs.core.nth.call(null,inst_43141,(1),null);
var state_43230__$1 = (function (){var statearr_43233 = state_43230;
(statearr_43233[(8)] = inst_43142);

return statearr_43233;
})();
if(cljs.core.truth_(inst_43143)){
var statearr_43234_43317 = state_43230__$1;
(statearr_43234_43317[(1)] = (22));

} else {
var statearr_43235_43318 = state_43230__$1;
(statearr_43235_43318[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (27))){
var inst_43173 = (state_43230[(9)]);
var inst_43178 = (state_43230[(10)]);
var inst_43171 = (state_43230[(11)]);
var inst_43098 = (state_43230[(12)]);
var inst_43178__$1 = cljs.core._nth.call(null,inst_43171,inst_43173);
var inst_43179 = cljs.core.async.put_BANG_.call(null,inst_43178__$1,inst_43098,done);
var state_43230__$1 = (function (){var statearr_43236 = state_43230;
(statearr_43236[(10)] = inst_43178__$1);

return statearr_43236;
})();
if(cljs.core.truth_(inst_43179)){
var statearr_43237_43319 = state_43230__$1;
(statearr_43237_43319[(1)] = (30));

} else {
var statearr_43238_43320 = state_43230__$1;
(statearr_43238_43320[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (1))){
var state_43230__$1 = state_43230;
var statearr_43239_43321 = state_43230__$1;
(statearr_43239_43321[(2)] = null);

(statearr_43239_43321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (24))){
var inst_43129 = (state_43230[(7)]);
var inst_43148 = (state_43230[(2)]);
var inst_43149 = cljs.core.next.call(null,inst_43129);
var inst_43107 = inst_43149;
var inst_43108 = null;
var inst_43109 = (0);
var inst_43110 = (0);
var state_43230__$1 = (function (){var statearr_43240 = state_43230;
(statearr_43240[(13)] = inst_43109);

(statearr_43240[(14)] = inst_43110);

(statearr_43240[(15)] = inst_43108);

(statearr_43240[(16)] = inst_43107);

(statearr_43240[(17)] = inst_43148);

return statearr_43240;
})();
var statearr_43241_43322 = state_43230__$1;
(statearr_43241_43322[(2)] = null);

(statearr_43241_43322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (39))){
var state_43230__$1 = state_43230;
var statearr_43245_43323 = state_43230__$1;
(statearr_43245_43323[(2)] = null);

(statearr_43245_43323[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (4))){
var inst_43098 = (state_43230[(12)]);
var inst_43098__$1 = (state_43230[(2)]);
var inst_43099 = (inst_43098__$1 == null);
var state_43230__$1 = (function (){var statearr_43246 = state_43230;
(statearr_43246[(12)] = inst_43098__$1);

return statearr_43246;
})();
if(cljs.core.truth_(inst_43099)){
var statearr_43247_43324 = state_43230__$1;
(statearr_43247_43324[(1)] = (5));

} else {
var statearr_43248_43325 = state_43230__$1;
(statearr_43248_43325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (15))){
var inst_43109 = (state_43230[(13)]);
var inst_43110 = (state_43230[(14)]);
var inst_43108 = (state_43230[(15)]);
var inst_43107 = (state_43230[(16)]);
var inst_43125 = (state_43230[(2)]);
var inst_43126 = (inst_43110 + (1));
var tmp43242 = inst_43109;
var tmp43243 = inst_43108;
var tmp43244 = inst_43107;
var inst_43107__$1 = tmp43244;
var inst_43108__$1 = tmp43243;
var inst_43109__$1 = tmp43242;
var inst_43110__$1 = inst_43126;
var state_43230__$1 = (function (){var statearr_43249 = state_43230;
(statearr_43249[(13)] = inst_43109__$1);

(statearr_43249[(18)] = inst_43125);

(statearr_43249[(14)] = inst_43110__$1);

(statearr_43249[(15)] = inst_43108__$1);

(statearr_43249[(16)] = inst_43107__$1);

return statearr_43249;
})();
var statearr_43250_43326 = state_43230__$1;
(statearr_43250_43326[(2)] = null);

(statearr_43250_43326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (21))){
var inst_43152 = (state_43230[(2)]);
var state_43230__$1 = state_43230;
var statearr_43254_43327 = state_43230__$1;
(statearr_43254_43327[(2)] = inst_43152);

(statearr_43254_43327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (31))){
var inst_43178 = (state_43230[(10)]);
var inst_43182 = done.call(null,null);
var inst_43183 = cljs.core.async.untap_STAR_.call(null,m,inst_43178);
var state_43230__$1 = (function (){var statearr_43255 = state_43230;
(statearr_43255[(19)] = inst_43182);

return statearr_43255;
})();
var statearr_43256_43328 = state_43230__$1;
(statearr_43256_43328[(2)] = inst_43183);

(statearr_43256_43328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (32))){
var inst_43173 = (state_43230[(9)]);
var inst_43172 = (state_43230[(20)]);
var inst_43171 = (state_43230[(11)]);
var inst_43170 = (state_43230[(21)]);
var inst_43185 = (state_43230[(2)]);
var inst_43186 = (inst_43173 + (1));
var tmp43251 = inst_43172;
var tmp43252 = inst_43171;
var tmp43253 = inst_43170;
var inst_43170__$1 = tmp43253;
var inst_43171__$1 = tmp43252;
var inst_43172__$1 = tmp43251;
var inst_43173__$1 = inst_43186;
var state_43230__$1 = (function (){var statearr_43257 = state_43230;
(statearr_43257[(9)] = inst_43173__$1);

(statearr_43257[(20)] = inst_43172__$1);

(statearr_43257[(11)] = inst_43171__$1);

(statearr_43257[(21)] = inst_43170__$1);

(statearr_43257[(22)] = inst_43185);

return statearr_43257;
})();
var statearr_43258_43329 = state_43230__$1;
(statearr_43258_43329[(2)] = null);

(statearr_43258_43329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (40))){
var inst_43198 = (state_43230[(23)]);
var inst_43202 = done.call(null,null);
var inst_43203 = cljs.core.async.untap_STAR_.call(null,m,inst_43198);
var state_43230__$1 = (function (){var statearr_43259 = state_43230;
(statearr_43259[(24)] = inst_43202);

return statearr_43259;
})();
var statearr_43260_43330 = state_43230__$1;
(statearr_43260_43330[(2)] = inst_43203);

(statearr_43260_43330[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (33))){
var inst_43189 = (state_43230[(25)]);
var inst_43191 = cljs.core.chunked_seq_QMARK_.call(null,inst_43189);
var state_43230__$1 = state_43230;
if(inst_43191){
var statearr_43261_43331 = state_43230__$1;
(statearr_43261_43331[(1)] = (36));

} else {
var statearr_43262_43332 = state_43230__$1;
(statearr_43262_43332[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (13))){
var inst_43119 = (state_43230[(26)]);
var inst_43122 = cljs.core.async.close_BANG_.call(null,inst_43119);
var state_43230__$1 = state_43230;
var statearr_43263_43333 = state_43230__$1;
(statearr_43263_43333[(2)] = inst_43122);

(statearr_43263_43333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (22))){
var inst_43142 = (state_43230[(8)]);
var inst_43145 = cljs.core.async.close_BANG_.call(null,inst_43142);
var state_43230__$1 = state_43230;
var statearr_43264_43334 = state_43230__$1;
(statearr_43264_43334[(2)] = inst_43145);

(statearr_43264_43334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (36))){
var inst_43189 = (state_43230[(25)]);
var inst_43193 = cljs.core.chunk_first.call(null,inst_43189);
var inst_43194 = cljs.core.chunk_rest.call(null,inst_43189);
var inst_43195 = cljs.core.count.call(null,inst_43193);
var inst_43170 = inst_43194;
var inst_43171 = inst_43193;
var inst_43172 = inst_43195;
var inst_43173 = (0);
var state_43230__$1 = (function (){var statearr_43265 = state_43230;
(statearr_43265[(9)] = inst_43173);

(statearr_43265[(20)] = inst_43172);

(statearr_43265[(11)] = inst_43171);

(statearr_43265[(21)] = inst_43170);

return statearr_43265;
})();
var statearr_43266_43335 = state_43230__$1;
(statearr_43266_43335[(2)] = null);

(statearr_43266_43335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (41))){
var inst_43189 = (state_43230[(25)]);
var inst_43205 = (state_43230[(2)]);
var inst_43206 = cljs.core.next.call(null,inst_43189);
var inst_43170 = inst_43206;
var inst_43171 = null;
var inst_43172 = (0);
var inst_43173 = (0);
var state_43230__$1 = (function (){var statearr_43267 = state_43230;
(statearr_43267[(9)] = inst_43173);

(statearr_43267[(20)] = inst_43172);

(statearr_43267[(11)] = inst_43171);

(statearr_43267[(21)] = inst_43170);

(statearr_43267[(27)] = inst_43205);

return statearr_43267;
})();
var statearr_43268_43336 = state_43230__$1;
(statearr_43268_43336[(2)] = null);

(statearr_43268_43336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (43))){
var state_43230__$1 = state_43230;
var statearr_43269_43337 = state_43230__$1;
(statearr_43269_43337[(2)] = null);

(statearr_43269_43337[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (29))){
var inst_43214 = (state_43230[(2)]);
var state_43230__$1 = state_43230;
var statearr_43270_43338 = state_43230__$1;
(statearr_43270_43338[(2)] = inst_43214);

(statearr_43270_43338[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (44))){
var inst_43223 = (state_43230[(2)]);
var state_43230__$1 = (function (){var statearr_43271 = state_43230;
(statearr_43271[(28)] = inst_43223);

return statearr_43271;
})();
var statearr_43272_43339 = state_43230__$1;
(statearr_43272_43339[(2)] = null);

(statearr_43272_43339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (6))){
var inst_43162 = (state_43230[(29)]);
var inst_43161 = cljs.core.deref.call(null,cs);
var inst_43162__$1 = cljs.core.keys.call(null,inst_43161);
var inst_43163 = cljs.core.count.call(null,inst_43162__$1);
var inst_43164 = cljs.core.reset_BANG_.call(null,dctr,inst_43163);
var inst_43169 = cljs.core.seq.call(null,inst_43162__$1);
var inst_43170 = inst_43169;
var inst_43171 = null;
var inst_43172 = (0);
var inst_43173 = (0);
var state_43230__$1 = (function (){var statearr_43273 = state_43230;
(statearr_43273[(9)] = inst_43173);

(statearr_43273[(20)] = inst_43172);

(statearr_43273[(11)] = inst_43171);

(statearr_43273[(30)] = inst_43164);

(statearr_43273[(21)] = inst_43170);

(statearr_43273[(29)] = inst_43162__$1);

return statearr_43273;
})();
var statearr_43274_43340 = state_43230__$1;
(statearr_43274_43340[(2)] = null);

(statearr_43274_43340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (28))){
var inst_43189 = (state_43230[(25)]);
var inst_43170 = (state_43230[(21)]);
var inst_43189__$1 = cljs.core.seq.call(null,inst_43170);
var state_43230__$1 = (function (){var statearr_43275 = state_43230;
(statearr_43275[(25)] = inst_43189__$1);

return statearr_43275;
})();
if(inst_43189__$1){
var statearr_43276_43341 = state_43230__$1;
(statearr_43276_43341[(1)] = (33));

} else {
var statearr_43277_43342 = state_43230__$1;
(statearr_43277_43342[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (25))){
var inst_43173 = (state_43230[(9)]);
var inst_43172 = (state_43230[(20)]);
var inst_43175 = (inst_43173 < inst_43172);
var inst_43176 = inst_43175;
var state_43230__$1 = state_43230;
if(cljs.core.truth_(inst_43176)){
var statearr_43278_43343 = state_43230__$1;
(statearr_43278_43343[(1)] = (27));

} else {
var statearr_43279_43344 = state_43230__$1;
(statearr_43279_43344[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (34))){
var state_43230__$1 = state_43230;
var statearr_43280_43345 = state_43230__$1;
(statearr_43280_43345[(2)] = null);

(statearr_43280_43345[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (17))){
var state_43230__$1 = state_43230;
var statearr_43281_43346 = state_43230__$1;
(statearr_43281_43346[(2)] = null);

(statearr_43281_43346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (3))){
var inst_43228 = (state_43230[(2)]);
var state_43230__$1 = state_43230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43230__$1,inst_43228);
} else {
if((state_val_43231 === (12))){
var inst_43157 = (state_43230[(2)]);
var state_43230__$1 = state_43230;
var statearr_43282_43347 = state_43230__$1;
(statearr_43282_43347[(2)] = inst_43157);

(statearr_43282_43347[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (2))){
var state_43230__$1 = state_43230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43230__$1,(4),ch);
} else {
if((state_val_43231 === (23))){
var state_43230__$1 = state_43230;
var statearr_43283_43348 = state_43230__$1;
(statearr_43283_43348[(2)] = null);

(statearr_43283_43348[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (35))){
var inst_43212 = (state_43230[(2)]);
var state_43230__$1 = state_43230;
var statearr_43284_43349 = state_43230__$1;
(statearr_43284_43349[(2)] = inst_43212);

(statearr_43284_43349[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (19))){
var inst_43129 = (state_43230[(7)]);
var inst_43133 = cljs.core.chunk_first.call(null,inst_43129);
var inst_43134 = cljs.core.chunk_rest.call(null,inst_43129);
var inst_43135 = cljs.core.count.call(null,inst_43133);
var inst_43107 = inst_43134;
var inst_43108 = inst_43133;
var inst_43109 = inst_43135;
var inst_43110 = (0);
var state_43230__$1 = (function (){var statearr_43285 = state_43230;
(statearr_43285[(13)] = inst_43109);

(statearr_43285[(14)] = inst_43110);

(statearr_43285[(15)] = inst_43108);

(statearr_43285[(16)] = inst_43107);

return statearr_43285;
})();
var statearr_43286_43350 = state_43230__$1;
(statearr_43286_43350[(2)] = null);

(statearr_43286_43350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (11))){
var inst_43107 = (state_43230[(16)]);
var inst_43129 = (state_43230[(7)]);
var inst_43129__$1 = cljs.core.seq.call(null,inst_43107);
var state_43230__$1 = (function (){var statearr_43287 = state_43230;
(statearr_43287[(7)] = inst_43129__$1);

return statearr_43287;
})();
if(inst_43129__$1){
var statearr_43288_43351 = state_43230__$1;
(statearr_43288_43351[(1)] = (16));

} else {
var statearr_43289_43352 = state_43230__$1;
(statearr_43289_43352[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (9))){
var inst_43159 = (state_43230[(2)]);
var state_43230__$1 = state_43230;
var statearr_43290_43353 = state_43230__$1;
(statearr_43290_43353[(2)] = inst_43159);

(statearr_43290_43353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (5))){
var inst_43105 = cljs.core.deref.call(null,cs);
var inst_43106 = cljs.core.seq.call(null,inst_43105);
var inst_43107 = inst_43106;
var inst_43108 = null;
var inst_43109 = (0);
var inst_43110 = (0);
var state_43230__$1 = (function (){var statearr_43291 = state_43230;
(statearr_43291[(13)] = inst_43109);

(statearr_43291[(14)] = inst_43110);

(statearr_43291[(15)] = inst_43108);

(statearr_43291[(16)] = inst_43107);

return statearr_43291;
})();
var statearr_43292_43354 = state_43230__$1;
(statearr_43292_43354[(2)] = null);

(statearr_43292_43354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (14))){
var state_43230__$1 = state_43230;
var statearr_43293_43355 = state_43230__$1;
(statearr_43293_43355[(2)] = null);

(statearr_43293_43355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (45))){
var inst_43220 = (state_43230[(2)]);
var state_43230__$1 = state_43230;
var statearr_43294_43356 = state_43230__$1;
(statearr_43294_43356[(2)] = inst_43220);

(statearr_43294_43356[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (26))){
var inst_43162 = (state_43230[(29)]);
var inst_43216 = (state_43230[(2)]);
var inst_43217 = cljs.core.seq.call(null,inst_43162);
var state_43230__$1 = (function (){var statearr_43295 = state_43230;
(statearr_43295[(31)] = inst_43216);

return statearr_43295;
})();
if(inst_43217){
var statearr_43296_43357 = state_43230__$1;
(statearr_43296_43357[(1)] = (42));

} else {
var statearr_43297_43358 = state_43230__$1;
(statearr_43297_43358[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (16))){
var inst_43129 = (state_43230[(7)]);
var inst_43131 = cljs.core.chunked_seq_QMARK_.call(null,inst_43129);
var state_43230__$1 = state_43230;
if(inst_43131){
var statearr_43298_43359 = state_43230__$1;
(statearr_43298_43359[(1)] = (19));

} else {
var statearr_43299_43360 = state_43230__$1;
(statearr_43299_43360[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (38))){
var inst_43209 = (state_43230[(2)]);
var state_43230__$1 = state_43230;
var statearr_43300_43361 = state_43230__$1;
(statearr_43300_43361[(2)] = inst_43209);

(statearr_43300_43361[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (30))){
var state_43230__$1 = state_43230;
var statearr_43301_43362 = state_43230__$1;
(statearr_43301_43362[(2)] = null);

(statearr_43301_43362[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (10))){
var inst_43110 = (state_43230[(14)]);
var inst_43108 = (state_43230[(15)]);
var inst_43118 = cljs.core._nth.call(null,inst_43108,inst_43110);
var inst_43119 = cljs.core.nth.call(null,inst_43118,(0),null);
var inst_43120 = cljs.core.nth.call(null,inst_43118,(1),null);
var state_43230__$1 = (function (){var statearr_43302 = state_43230;
(statearr_43302[(26)] = inst_43119);

return statearr_43302;
})();
if(cljs.core.truth_(inst_43120)){
var statearr_43303_43363 = state_43230__$1;
(statearr_43303_43363[(1)] = (13));

} else {
var statearr_43304_43364 = state_43230__$1;
(statearr_43304_43364[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (18))){
var inst_43155 = (state_43230[(2)]);
var state_43230__$1 = state_43230;
var statearr_43305_43365 = state_43230__$1;
(statearr_43305_43365[(2)] = inst_43155);

(statearr_43305_43365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (42))){
var state_43230__$1 = state_43230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43230__$1,(45),dchan);
} else {
if((state_val_43231 === (37))){
var inst_43189 = (state_43230[(25)]);
var inst_43198 = (state_43230[(23)]);
var inst_43098 = (state_43230[(12)]);
var inst_43198__$1 = cljs.core.first.call(null,inst_43189);
var inst_43199 = cljs.core.async.put_BANG_.call(null,inst_43198__$1,inst_43098,done);
var state_43230__$1 = (function (){var statearr_43306 = state_43230;
(statearr_43306[(23)] = inst_43198__$1);

return statearr_43306;
})();
if(cljs.core.truth_(inst_43199)){
var statearr_43307_43366 = state_43230__$1;
(statearr_43307_43366[(1)] = (39));

} else {
var statearr_43308_43367 = state_43230__$1;
(statearr_43308_43367[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43231 === (8))){
var inst_43109 = (state_43230[(13)]);
var inst_43110 = (state_43230[(14)]);
var inst_43112 = (inst_43110 < inst_43109);
var inst_43113 = inst_43112;
var state_43230__$1 = state_43230;
if(cljs.core.truth_(inst_43113)){
var statearr_43309_43368 = state_43230__$1;
(statearr_43309_43368[(1)] = (10));

} else {
var statearr_43310_43369 = state_43230__$1;
(statearr_43310_43369[(1)] = (11));

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
var statearr_43311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43311[(0)] = cljs$core$async$mult_$_state_machine__26032__auto__);

(statearr_43311[(1)] = (1));

return statearr_43311;
});
var cljs$core$async$mult_$_state_machine__26032__auto____1 = (function (state_43230){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_43230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e43312){if((e43312 instanceof Object)){
var ex__26035__auto__ = e43312;
var statearr_43313_43370 = state_43230;
(statearr_43313_43370[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43371 = state_43230;
state_43230 = G__43371;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26032__auto__ = function(state_43230){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26032__auto____1.call(this,state_43230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26032__auto____0;
cljs$core$async$mult_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26032__auto____1;
return cljs$core$async$mult_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_43314 = f__26127__auto__.call(null);
(statearr_43314[(6)] = c__26126__auto___43315);

return statearr_43314;
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
var G__43373 = arguments.length;
switch (G__43373) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_43375 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_43375.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43376 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_43376.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43377 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43377.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43378 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_43378.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43379 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43379.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___43389 = arguments.length;
var i__4772__auto___43390 = (0);
while(true){
if((i__4772__auto___43390 < len__4771__auto___43389)){
args__4777__auto__.push((arguments[i__4772__auto___43390]));

var G__43391 = (i__4772__auto___43390 + (1));
i__4772__auto___43390 = G__43391;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43384){
var map__43385 = p__43384;
var map__43385__$1 = cljs.core.__destructure_map.call(null,map__43385);
var opts = map__43385__$1;
var statearr_43386_43392 = state;
(statearr_43386_43392[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_43387_43393 = state;
(statearr_43387_43393[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43388_43394 = state;
(statearr_43388_43394[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43380){
var G__43381 = cljs.core.first.call(null,seq43380);
var seq43380__$1 = cljs.core.next.call(null,seq43380);
var G__43382 = cljs.core.first.call(null,seq43380__$1);
var seq43380__$2 = cljs.core.next.call(null,seq43380__$1);
var G__43383 = cljs.core.first.call(null,seq43380__$2);
var seq43380__$3 = cljs.core.next.call(null,seq43380__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43381,G__43382,G__43383,seq43380__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43395 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43396){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43396 = meta43396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43397,meta43396__$1){
var self__ = this;
var _43397__$1 = this;
return (new cljs.core.async.t_cljs$core$async43395(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43396__$1));
}));

(cljs.core.async.t_cljs$core$async43395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43397){
var self__ = this;
var _43397__$1 = this;
return self__.meta43396;
}));

(cljs.core.async.t_cljs$core$async43395.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43395.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43395.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43395.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43395.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43395.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43395.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43396","meta43396",-2067544155,null)], null);
}));

(cljs.core.async.t_cljs$core$async43395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43395");

(cljs.core.async.t_cljs$core$async43395.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async43395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43395.
 */
cljs.core.async.__GT_t_cljs$core$async43395 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43395(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43396){
return (new cljs.core.async.t_cljs$core$async43395(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43396));
});

}

return (new cljs.core.async.t_cljs$core$async43395(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26126__auto___43494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_43459){
var state_val_43460 = (state_43459[(1)]);
if((state_val_43460 === (7))){
var inst_43455 = (state_43459[(2)]);
var state_43459__$1 = state_43459;
var statearr_43461_43495 = state_43459__$1;
(statearr_43461_43495[(2)] = inst_43455);

(statearr_43461_43495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (20))){
var inst_43449 = (state_43459[(2)]);
var state_43459__$1 = state_43459;
var statearr_43462_43496 = state_43459__$1;
(statearr_43462_43496[(2)] = inst_43449);

(statearr_43462_43496[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (1))){
var inst_43401 = calc_state.call(null);
var inst_43402 = cljs.core.__destructure_map.call(null,inst_43401);
var inst_43403 = cljs.core.get.call(null,inst_43402,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43404 = cljs.core.get.call(null,inst_43402,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43405 = cljs.core.get.call(null,inst_43402,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43406 = inst_43401;
var state_43459__$1 = (function (){var statearr_43463 = state_43459;
(statearr_43463[(7)] = inst_43405);

(statearr_43463[(8)] = inst_43403);

(statearr_43463[(9)] = inst_43404);

(statearr_43463[(10)] = inst_43406);

return statearr_43463;
})();
var statearr_43464_43497 = state_43459__$1;
(statearr_43464_43497[(2)] = null);

(statearr_43464_43497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (4))){
var inst_43419 = (state_43459[(11)]);
var inst_43418 = (state_43459[(12)]);
var inst_43417 = (state_43459[(2)]);
var inst_43418__$1 = cljs.core.nth.call(null,inst_43417,(0),null);
var inst_43419__$1 = cljs.core.nth.call(null,inst_43417,(1),null);
var inst_43420 = (inst_43418__$1 == null);
var inst_43421 = cljs.core._EQ_.call(null,inst_43419__$1,change);
var inst_43422 = ((inst_43420) || (inst_43421));
var state_43459__$1 = (function (){var statearr_43465 = state_43459;
(statearr_43465[(11)] = inst_43419__$1);

(statearr_43465[(12)] = inst_43418__$1);

return statearr_43465;
})();
if(cljs.core.truth_(inst_43422)){
var statearr_43466_43498 = state_43459__$1;
(statearr_43466_43498[(1)] = (5));

} else {
var statearr_43467_43499 = state_43459__$1;
(statearr_43467_43499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (15))){
var inst_43409 = (state_43459[(13)]);
var inst_43406 = inst_43409;
var state_43459__$1 = (function (){var statearr_43468 = state_43459;
(statearr_43468[(10)] = inst_43406);

return statearr_43468;
})();
var statearr_43469_43500 = state_43459__$1;
(statearr_43469_43500[(2)] = null);

(statearr_43469_43500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (13))){
var inst_43441 = (state_43459[(2)]);
var state_43459__$1 = state_43459;
if(cljs.core.truth_(inst_43441)){
var statearr_43470_43501 = state_43459__$1;
(statearr_43470_43501[(1)] = (14));

} else {
var statearr_43471_43502 = state_43459__$1;
(statearr_43471_43502[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (6))){
var inst_43419 = (state_43459[(11)]);
var inst_43410 = (state_43459[(14)]);
var inst_43433 = (state_43459[(15)]);
var inst_43433__$1 = inst_43410.call(null,inst_43419);
var state_43459__$1 = (function (){var statearr_43472 = state_43459;
(statearr_43472[(15)] = inst_43433__$1);

return statearr_43472;
})();
if(cljs.core.truth_(inst_43433__$1)){
var statearr_43473_43503 = state_43459__$1;
(statearr_43473_43503[(1)] = (11));

} else {
var statearr_43474_43504 = state_43459__$1;
(statearr_43474_43504[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (17))){
var inst_43444 = (state_43459[(2)]);
var state_43459__$1 = state_43459;
if(cljs.core.truth_(inst_43444)){
var statearr_43475_43505 = state_43459__$1;
(statearr_43475_43505[(1)] = (18));

} else {
var statearr_43476_43506 = state_43459__$1;
(statearr_43476_43506[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (3))){
var inst_43457 = (state_43459[(2)]);
var state_43459__$1 = state_43459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43459__$1,inst_43457);
} else {
if((state_val_43460 === (12))){
var inst_43419 = (state_43459[(11)]);
var inst_43410 = (state_43459[(14)]);
var inst_43411 = (state_43459[(16)]);
var inst_43436 = cljs.core.empty_QMARK_.call(null,inst_43410);
var inst_43437 = inst_43411.call(null,inst_43419);
var inst_43438 = cljs.core.not.call(null,inst_43437);
var inst_43439 = ((inst_43436) && (inst_43438));
var state_43459__$1 = state_43459;
var statearr_43477_43507 = state_43459__$1;
(statearr_43477_43507[(2)] = inst_43439);

(statearr_43477_43507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (2))){
var inst_43409 = (state_43459[(13)]);
var inst_43406 = (state_43459[(10)]);
var inst_43409__$1 = cljs.core.__destructure_map.call(null,inst_43406);
var inst_43410 = cljs.core.get.call(null,inst_43409__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43411 = cljs.core.get.call(null,inst_43409__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43412 = cljs.core.get.call(null,inst_43409__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43459__$1 = (function (){var statearr_43478 = state_43459;
(statearr_43478[(14)] = inst_43410);

(statearr_43478[(13)] = inst_43409__$1);

(statearr_43478[(16)] = inst_43411);

return statearr_43478;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43459__$1,(4),inst_43412);
} else {
if((state_val_43460 === (19))){
var state_43459__$1 = state_43459;
var statearr_43479_43508 = state_43459__$1;
(statearr_43479_43508[(2)] = null);

(statearr_43479_43508[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (11))){
var inst_43433 = (state_43459[(15)]);
var state_43459__$1 = state_43459;
var statearr_43480_43509 = state_43459__$1;
(statearr_43480_43509[(2)] = inst_43433);

(statearr_43480_43509[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (9))){
var state_43459__$1 = state_43459;
var statearr_43481_43510 = state_43459__$1;
(statearr_43481_43510[(2)] = null);

(statearr_43481_43510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (5))){
var inst_43418 = (state_43459[(12)]);
var inst_43424 = (inst_43418 == null);
var state_43459__$1 = state_43459;
if(cljs.core.truth_(inst_43424)){
var statearr_43482_43511 = state_43459__$1;
(statearr_43482_43511[(1)] = (8));

} else {
var statearr_43483_43512 = state_43459__$1;
(statearr_43483_43512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (14))){
var inst_43418 = (state_43459[(12)]);
var state_43459__$1 = state_43459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43459__$1,(17),out,inst_43418);
} else {
if((state_val_43460 === (16))){
var inst_43453 = (state_43459[(2)]);
var state_43459__$1 = state_43459;
var statearr_43484_43513 = state_43459__$1;
(statearr_43484_43513[(2)] = inst_43453);

(statearr_43484_43513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (10))){
var inst_43429 = (state_43459[(2)]);
var inst_43430 = calc_state.call(null);
var inst_43406 = inst_43430;
var state_43459__$1 = (function (){var statearr_43485 = state_43459;
(statearr_43485[(10)] = inst_43406);

(statearr_43485[(17)] = inst_43429);

return statearr_43485;
})();
var statearr_43486_43514 = state_43459__$1;
(statearr_43486_43514[(2)] = null);

(statearr_43486_43514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (18))){
var inst_43409 = (state_43459[(13)]);
var inst_43406 = inst_43409;
var state_43459__$1 = (function (){var statearr_43487 = state_43459;
(statearr_43487[(10)] = inst_43406);

return statearr_43487;
})();
var statearr_43488_43515 = state_43459__$1;
(statearr_43488_43515[(2)] = null);

(statearr_43488_43515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43460 === (8))){
var inst_43419 = (state_43459[(11)]);
var inst_43426 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43419);
var state_43459__$1 = state_43459;
var statearr_43489_43516 = state_43459__$1;
(statearr_43489_43516[(2)] = inst_43426);

(statearr_43489_43516[(1)] = (10));


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
var statearr_43490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43490[(0)] = cljs$core$async$mix_$_state_machine__26032__auto__);

(statearr_43490[(1)] = (1));

return statearr_43490;
});
var cljs$core$async$mix_$_state_machine__26032__auto____1 = (function (state_43459){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_43459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e43491){if((e43491 instanceof Object)){
var ex__26035__auto__ = e43491;
var statearr_43492_43517 = state_43459;
(statearr_43492_43517[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43518 = state_43459;
state_43459 = G__43518;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26032__auto__ = function(state_43459){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26032__auto____1.call(this,state_43459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26032__auto____0;
cljs$core$async$mix_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26032__auto____1;
return cljs$core$async$mix_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_43493 = f__26127__auto__.call(null);
(statearr_43493[(6)] = c__26126__auto___43494);

return statearr_43493;
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

var cljs$core$async$Pub$sub_STAR_$dyn_43521 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_43521.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_43522 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_43522.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_43523 = (function() {
var G__43524 = null;
var G__43524__1 = (function (p){
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
var G__43524__2 = (function (p,v){
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
G__43524 = function(p,v){
switch(arguments.length){
case 1:
return G__43524__1.call(this,p);
case 2:
return G__43524__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43524.cljs$core$IFn$_invoke$arity$1 = G__43524__1;
G__43524.cljs$core$IFn$_invoke$arity$2 = G__43524__2;
return G__43524;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43520 = arguments.length;
switch (G__43520) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43523.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43523.call(null,p,v);
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
var G__43528 = arguments.length;
switch (G__43528) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__43526_SHARP_){
if(cljs.core.truth_(p1__43526_SHARP_.call(null,topic))){
return p1__43526_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43526_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43529 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43530){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43530 = meta43530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43531,meta43530__$1){
var self__ = this;
var _43531__$1 = this;
return (new cljs.core.async.t_cljs$core$async43529(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43530__$1));
}));

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43531){
var self__ = this;
var _43531__$1 = this;
return self__.meta43530;
}));

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43530","meta43530",-2140630587,null)], null);
}));

(cljs.core.async.t_cljs$core$async43529.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43529");

(cljs.core.async.t_cljs$core$async43529.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async43529");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43529.
 */
cljs.core.async.__GT_t_cljs$core$async43529 = (function cljs$core$async$__GT_t_cljs$core$async43529(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43530){
return (new cljs.core.async.t_cljs$core$async43529(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43530));
});

}

return (new cljs.core.async.t_cljs$core$async43529(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26126__auto___43649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_43603){
var state_val_43604 = (state_43603[(1)]);
if((state_val_43604 === (7))){
var inst_43599 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43605_43650 = state_43603__$1;
(statearr_43605_43650[(2)] = inst_43599);

(statearr_43605_43650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (20))){
var state_43603__$1 = state_43603;
var statearr_43606_43651 = state_43603__$1;
(statearr_43606_43651[(2)] = null);

(statearr_43606_43651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (1))){
var state_43603__$1 = state_43603;
var statearr_43607_43652 = state_43603__$1;
(statearr_43607_43652[(2)] = null);

(statearr_43607_43652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (24))){
var inst_43582 = (state_43603[(7)]);
var inst_43591 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43582);
var state_43603__$1 = state_43603;
var statearr_43608_43653 = state_43603__$1;
(statearr_43608_43653[(2)] = inst_43591);

(statearr_43608_43653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (4))){
var inst_43534 = (state_43603[(8)]);
var inst_43534__$1 = (state_43603[(2)]);
var inst_43535 = (inst_43534__$1 == null);
var state_43603__$1 = (function (){var statearr_43609 = state_43603;
(statearr_43609[(8)] = inst_43534__$1);

return statearr_43609;
})();
if(cljs.core.truth_(inst_43535)){
var statearr_43610_43654 = state_43603__$1;
(statearr_43610_43654[(1)] = (5));

} else {
var statearr_43611_43655 = state_43603__$1;
(statearr_43611_43655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (15))){
var inst_43576 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43612_43656 = state_43603__$1;
(statearr_43612_43656[(2)] = inst_43576);

(statearr_43612_43656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (21))){
var inst_43596 = (state_43603[(2)]);
var state_43603__$1 = (function (){var statearr_43613 = state_43603;
(statearr_43613[(9)] = inst_43596);

return statearr_43613;
})();
var statearr_43614_43657 = state_43603__$1;
(statearr_43614_43657[(2)] = null);

(statearr_43614_43657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (13))){
var inst_43558 = (state_43603[(10)]);
var inst_43560 = cljs.core.chunked_seq_QMARK_.call(null,inst_43558);
var state_43603__$1 = state_43603;
if(inst_43560){
var statearr_43615_43658 = state_43603__$1;
(statearr_43615_43658[(1)] = (16));

} else {
var statearr_43616_43659 = state_43603__$1;
(statearr_43616_43659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (22))){
var inst_43588 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
if(cljs.core.truth_(inst_43588)){
var statearr_43617_43660 = state_43603__$1;
(statearr_43617_43660[(1)] = (23));

} else {
var statearr_43618_43661 = state_43603__$1;
(statearr_43618_43661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (6))){
var inst_43534 = (state_43603[(8)]);
var inst_43584 = (state_43603[(11)]);
var inst_43582 = (state_43603[(7)]);
var inst_43582__$1 = topic_fn.call(null,inst_43534);
var inst_43583 = cljs.core.deref.call(null,mults);
var inst_43584__$1 = cljs.core.get.call(null,inst_43583,inst_43582__$1);
var state_43603__$1 = (function (){var statearr_43619 = state_43603;
(statearr_43619[(11)] = inst_43584__$1);

(statearr_43619[(7)] = inst_43582__$1);

return statearr_43619;
})();
if(cljs.core.truth_(inst_43584__$1)){
var statearr_43620_43662 = state_43603__$1;
(statearr_43620_43662[(1)] = (19));

} else {
var statearr_43621_43663 = state_43603__$1;
(statearr_43621_43663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (25))){
var inst_43593 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43622_43664 = state_43603__$1;
(statearr_43622_43664[(2)] = inst_43593);

(statearr_43622_43664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (17))){
var inst_43558 = (state_43603[(10)]);
var inst_43567 = cljs.core.first.call(null,inst_43558);
var inst_43568 = cljs.core.async.muxch_STAR_.call(null,inst_43567);
var inst_43569 = cljs.core.async.close_BANG_.call(null,inst_43568);
var inst_43570 = cljs.core.next.call(null,inst_43558);
var inst_43544 = inst_43570;
var inst_43545 = null;
var inst_43546 = (0);
var inst_43547 = (0);
var state_43603__$1 = (function (){var statearr_43623 = state_43603;
(statearr_43623[(12)] = inst_43546);

(statearr_43623[(13)] = inst_43569);

(statearr_43623[(14)] = inst_43547);

(statearr_43623[(15)] = inst_43545);

(statearr_43623[(16)] = inst_43544);

return statearr_43623;
})();
var statearr_43624_43665 = state_43603__$1;
(statearr_43624_43665[(2)] = null);

(statearr_43624_43665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (3))){
var inst_43601 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43603__$1,inst_43601);
} else {
if((state_val_43604 === (12))){
var inst_43578 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43625_43666 = state_43603__$1;
(statearr_43625_43666[(2)] = inst_43578);

(statearr_43625_43666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (2))){
var state_43603__$1 = state_43603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43603__$1,(4),ch);
} else {
if((state_val_43604 === (23))){
var state_43603__$1 = state_43603;
var statearr_43626_43667 = state_43603__$1;
(statearr_43626_43667[(2)] = null);

(statearr_43626_43667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (19))){
var inst_43534 = (state_43603[(8)]);
var inst_43584 = (state_43603[(11)]);
var inst_43586 = cljs.core.async.muxch_STAR_.call(null,inst_43584);
var state_43603__$1 = state_43603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43603__$1,(22),inst_43586,inst_43534);
} else {
if((state_val_43604 === (11))){
var inst_43558 = (state_43603[(10)]);
var inst_43544 = (state_43603[(16)]);
var inst_43558__$1 = cljs.core.seq.call(null,inst_43544);
var state_43603__$1 = (function (){var statearr_43627 = state_43603;
(statearr_43627[(10)] = inst_43558__$1);

return statearr_43627;
})();
if(inst_43558__$1){
var statearr_43628_43668 = state_43603__$1;
(statearr_43628_43668[(1)] = (13));

} else {
var statearr_43629_43669 = state_43603__$1;
(statearr_43629_43669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (9))){
var inst_43580 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43630_43670 = state_43603__$1;
(statearr_43630_43670[(2)] = inst_43580);

(statearr_43630_43670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (5))){
var inst_43541 = cljs.core.deref.call(null,mults);
var inst_43542 = cljs.core.vals.call(null,inst_43541);
var inst_43543 = cljs.core.seq.call(null,inst_43542);
var inst_43544 = inst_43543;
var inst_43545 = null;
var inst_43546 = (0);
var inst_43547 = (0);
var state_43603__$1 = (function (){var statearr_43631 = state_43603;
(statearr_43631[(12)] = inst_43546);

(statearr_43631[(14)] = inst_43547);

(statearr_43631[(15)] = inst_43545);

(statearr_43631[(16)] = inst_43544);

return statearr_43631;
})();
var statearr_43632_43671 = state_43603__$1;
(statearr_43632_43671[(2)] = null);

(statearr_43632_43671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (14))){
var state_43603__$1 = state_43603;
var statearr_43636_43672 = state_43603__$1;
(statearr_43636_43672[(2)] = null);

(statearr_43636_43672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (16))){
var inst_43558 = (state_43603[(10)]);
var inst_43562 = cljs.core.chunk_first.call(null,inst_43558);
var inst_43563 = cljs.core.chunk_rest.call(null,inst_43558);
var inst_43564 = cljs.core.count.call(null,inst_43562);
var inst_43544 = inst_43563;
var inst_43545 = inst_43562;
var inst_43546 = inst_43564;
var inst_43547 = (0);
var state_43603__$1 = (function (){var statearr_43637 = state_43603;
(statearr_43637[(12)] = inst_43546);

(statearr_43637[(14)] = inst_43547);

(statearr_43637[(15)] = inst_43545);

(statearr_43637[(16)] = inst_43544);

return statearr_43637;
})();
var statearr_43638_43673 = state_43603__$1;
(statearr_43638_43673[(2)] = null);

(statearr_43638_43673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (10))){
var inst_43546 = (state_43603[(12)]);
var inst_43547 = (state_43603[(14)]);
var inst_43545 = (state_43603[(15)]);
var inst_43544 = (state_43603[(16)]);
var inst_43552 = cljs.core._nth.call(null,inst_43545,inst_43547);
var inst_43553 = cljs.core.async.muxch_STAR_.call(null,inst_43552);
var inst_43554 = cljs.core.async.close_BANG_.call(null,inst_43553);
var inst_43555 = (inst_43547 + (1));
var tmp43633 = inst_43546;
var tmp43634 = inst_43545;
var tmp43635 = inst_43544;
var inst_43544__$1 = tmp43635;
var inst_43545__$1 = tmp43634;
var inst_43546__$1 = tmp43633;
var inst_43547__$1 = inst_43555;
var state_43603__$1 = (function (){var statearr_43639 = state_43603;
(statearr_43639[(12)] = inst_43546__$1);

(statearr_43639[(14)] = inst_43547__$1);

(statearr_43639[(17)] = inst_43554);

(statearr_43639[(15)] = inst_43545__$1);

(statearr_43639[(16)] = inst_43544__$1);

return statearr_43639;
})();
var statearr_43640_43674 = state_43603__$1;
(statearr_43640_43674[(2)] = null);

(statearr_43640_43674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (18))){
var inst_43573 = (state_43603[(2)]);
var state_43603__$1 = state_43603;
var statearr_43641_43675 = state_43603__$1;
(statearr_43641_43675[(2)] = inst_43573);

(statearr_43641_43675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43604 === (8))){
var inst_43546 = (state_43603[(12)]);
var inst_43547 = (state_43603[(14)]);
var inst_43549 = (inst_43547 < inst_43546);
var inst_43550 = inst_43549;
var state_43603__$1 = state_43603;
if(cljs.core.truth_(inst_43550)){
var statearr_43642_43676 = state_43603__$1;
(statearr_43642_43676[(1)] = (10));

} else {
var statearr_43643_43677 = state_43603__$1;
(statearr_43643_43677[(1)] = (11));

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
var statearr_43644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43644[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_43644[(1)] = (1));

return statearr_43644;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_43603){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_43603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e43645){if((e43645 instanceof Object)){
var ex__26035__auto__ = e43645;
var statearr_43646_43678 = state_43603;
(statearr_43646_43678[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43679 = state_43603;
state_43603 = G__43679;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_43603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_43603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_43647 = f__26127__auto__.call(null);
(statearr_43647[(6)] = c__26126__auto___43649);

return statearr_43647;
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
var G__43681 = arguments.length;
switch (G__43681) {
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
var G__43684 = arguments.length;
switch (G__43684) {
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
var G__43687 = arguments.length;
switch (G__43687) {
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
var c__26126__auto___43754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_43726){
var state_val_43727 = (state_43726[(1)]);
if((state_val_43727 === (7))){
var state_43726__$1 = state_43726;
var statearr_43728_43755 = state_43726__$1;
(statearr_43728_43755[(2)] = null);

(statearr_43728_43755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (1))){
var state_43726__$1 = state_43726;
var statearr_43729_43756 = state_43726__$1;
(statearr_43729_43756[(2)] = null);

(statearr_43729_43756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (4))){
var inst_43690 = (state_43726[(7)]);
var inst_43692 = (inst_43690 < cnt);
var state_43726__$1 = state_43726;
if(cljs.core.truth_(inst_43692)){
var statearr_43730_43757 = state_43726__$1;
(statearr_43730_43757[(1)] = (6));

} else {
var statearr_43731_43758 = state_43726__$1;
(statearr_43731_43758[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (15))){
var inst_43722 = (state_43726[(2)]);
var state_43726__$1 = state_43726;
var statearr_43732_43759 = state_43726__$1;
(statearr_43732_43759[(2)] = inst_43722);

(statearr_43732_43759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (13))){
var inst_43715 = cljs.core.async.close_BANG_.call(null,out);
var state_43726__$1 = state_43726;
var statearr_43733_43760 = state_43726__$1;
(statearr_43733_43760[(2)] = inst_43715);

(statearr_43733_43760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (6))){
var state_43726__$1 = state_43726;
var statearr_43734_43761 = state_43726__$1;
(statearr_43734_43761[(2)] = null);

(statearr_43734_43761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (3))){
var inst_43724 = (state_43726[(2)]);
var state_43726__$1 = state_43726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43726__$1,inst_43724);
} else {
if((state_val_43727 === (12))){
var inst_43712 = (state_43726[(8)]);
var inst_43712__$1 = (state_43726[(2)]);
var inst_43713 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43712__$1);
var state_43726__$1 = (function (){var statearr_43735 = state_43726;
(statearr_43735[(8)] = inst_43712__$1);

return statearr_43735;
})();
if(cljs.core.truth_(inst_43713)){
var statearr_43736_43762 = state_43726__$1;
(statearr_43736_43762[(1)] = (13));

} else {
var statearr_43737_43763 = state_43726__$1;
(statearr_43737_43763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (2))){
var inst_43689 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43690 = (0);
var state_43726__$1 = (function (){var statearr_43738 = state_43726;
(statearr_43738[(9)] = inst_43689);

(statearr_43738[(7)] = inst_43690);

return statearr_43738;
})();
var statearr_43739_43764 = state_43726__$1;
(statearr_43739_43764[(2)] = null);

(statearr_43739_43764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (11))){
var inst_43690 = (state_43726[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43726,(10),Object,null,(9));
var inst_43699 = chs__$1.call(null,inst_43690);
var inst_43700 = done.call(null,inst_43690);
var inst_43701 = cljs.core.async.take_BANG_.call(null,inst_43699,inst_43700);
var state_43726__$1 = state_43726;
var statearr_43740_43765 = state_43726__$1;
(statearr_43740_43765[(2)] = inst_43701);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43726__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (9))){
var inst_43690 = (state_43726[(7)]);
var inst_43703 = (state_43726[(2)]);
var inst_43704 = (inst_43690 + (1));
var inst_43690__$1 = inst_43704;
var state_43726__$1 = (function (){var statearr_43741 = state_43726;
(statearr_43741[(10)] = inst_43703);

(statearr_43741[(7)] = inst_43690__$1);

return statearr_43741;
})();
var statearr_43742_43766 = state_43726__$1;
(statearr_43742_43766[(2)] = null);

(statearr_43742_43766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (5))){
var inst_43710 = (state_43726[(2)]);
var state_43726__$1 = (function (){var statearr_43743 = state_43726;
(statearr_43743[(11)] = inst_43710);

return statearr_43743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43726__$1,(12),dchan);
} else {
if((state_val_43727 === (14))){
var inst_43712 = (state_43726[(8)]);
var inst_43717 = cljs.core.apply.call(null,f,inst_43712);
var state_43726__$1 = state_43726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43726__$1,(16),out,inst_43717);
} else {
if((state_val_43727 === (16))){
var inst_43719 = (state_43726[(2)]);
var state_43726__$1 = (function (){var statearr_43744 = state_43726;
(statearr_43744[(12)] = inst_43719);

return statearr_43744;
})();
var statearr_43745_43767 = state_43726__$1;
(statearr_43745_43767[(2)] = null);

(statearr_43745_43767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (10))){
var inst_43694 = (state_43726[(2)]);
var inst_43695 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43726__$1 = (function (){var statearr_43746 = state_43726;
(statearr_43746[(13)] = inst_43694);

return statearr_43746;
})();
var statearr_43747_43768 = state_43726__$1;
(statearr_43747_43768[(2)] = inst_43695);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43726__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (8))){
var inst_43708 = (state_43726[(2)]);
var state_43726__$1 = state_43726;
var statearr_43748_43769 = state_43726__$1;
(statearr_43748_43769[(2)] = inst_43708);

(statearr_43748_43769[(1)] = (5));


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
var statearr_43749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43749[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_43749[(1)] = (1));

return statearr_43749;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_43726){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_43726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e43750){if((e43750 instanceof Object)){
var ex__26035__auto__ = e43750;
var statearr_43751_43770 = state_43726;
(statearr_43751_43770[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43771 = state_43726;
state_43726 = G__43771;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_43726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_43726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_43752 = f__26127__auto__.call(null);
(statearr_43752[(6)] = c__26126__auto___43754);

return statearr_43752;
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
var G__43774 = arguments.length;
switch (G__43774) {
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
var c__26126__auto___43828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_43806){
var state_val_43807 = (state_43806[(1)]);
if((state_val_43807 === (7))){
var inst_43785 = (state_43806[(7)]);
var inst_43786 = (state_43806[(8)]);
var inst_43785__$1 = (state_43806[(2)]);
var inst_43786__$1 = cljs.core.nth.call(null,inst_43785__$1,(0),null);
var inst_43787 = cljs.core.nth.call(null,inst_43785__$1,(1),null);
var inst_43788 = (inst_43786__$1 == null);
var state_43806__$1 = (function (){var statearr_43808 = state_43806;
(statearr_43808[(9)] = inst_43787);

(statearr_43808[(7)] = inst_43785__$1);

(statearr_43808[(8)] = inst_43786__$1);

return statearr_43808;
})();
if(cljs.core.truth_(inst_43788)){
var statearr_43809_43829 = state_43806__$1;
(statearr_43809_43829[(1)] = (8));

} else {
var statearr_43810_43830 = state_43806__$1;
(statearr_43810_43830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (1))){
var inst_43775 = cljs.core.vec.call(null,chs);
var inst_43776 = inst_43775;
var state_43806__$1 = (function (){var statearr_43811 = state_43806;
(statearr_43811[(10)] = inst_43776);

return statearr_43811;
})();
var statearr_43812_43831 = state_43806__$1;
(statearr_43812_43831[(2)] = null);

(statearr_43812_43831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (4))){
var inst_43776 = (state_43806[(10)]);
var state_43806__$1 = state_43806;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43806__$1,(7),inst_43776);
} else {
if((state_val_43807 === (6))){
var inst_43802 = (state_43806[(2)]);
var state_43806__$1 = state_43806;
var statearr_43813_43832 = state_43806__$1;
(statearr_43813_43832[(2)] = inst_43802);

(statearr_43813_43832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (3))){
var inst_43804 = (state_43806[(2)]);
var state_43806__$1 = state_43806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43806__$1,inst_43804);
} else {
if((state_val_43807 === (2))){
var inst_43776 = (state_43806[(10)]);
var inst_43778 = cljs.core.count.call(null,inst_43776);
var inst_43779 = (inst_43778 > (0));
var state_43806__$1 = state_43806;
if(cljs.core.truth_(inst_43779)){
var statearr_43815_43833 = state_43806__$1;
(statearr_43815_43833[(1)] = (4));

} else {
var statearr_43816_43834 = state_43806__$1;
(statearr_43816_43834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (11))){
var inst_43776 = (state_43806[(10)]);
var inst_43795 = (state_43806[(2)]);
var tmp43814 = inst_43776;
var inst_43776__$1 = tmp43814;
var state_43806__$1 = (function (){var statearr_43817 = state_43806;
(statearr_43817[(11)] = inst_43795);

(statearr_43817[(10)] = inst_43776__$1);

return statearr_43817;
})();
var statearr_43818_43835 = state_43806__$1;
(statearr_43818_43835[(2)] = null);

(statearr_43818_43835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (9))){
var inst_43786 = (state_43806[(8)]);
var state_43806__$1 = state_43806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43806__$1,(11),out,inst_43786);
} else {
if((state_val_43807 === (5))){
var inst_43800 = cljs.core.async.close_BANG_.call(null,out);
var state_43806__$1 = state_43806;
var statearr_43819_43836 = state_43806__$1;
(statearr_43819_43836[(2)] = inst_43800);

(statearr_43819_43836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (10))){
var inst_43798 = (state_43806[(2)]);
var state_43806__$1 = state_43806;
var statearr_43820_43837 = state_43806__$1;
(statearr_43820_43837[(2)] = inst_43798);

(statearr_43820_43837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (8))){
var inst_43787 = (state_43806[(9)]);
var inst_43776 = (state_43806[(10)]);
var inst_43785 = (state_43806[(7)]);
var inst_43786 = (state_43806[(8)]);
var inst_43790 = (function (){var cs = inst_43776;
var vec__43781 = inst_43785;
var v = inst_43786;
var c = inst_43787;
return (function (p1__43772_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43772_SHARP_);
});
})();
var inst_43791 = cljs.core.filterv.call(null,inst_43790,inst_43776);
var inst_43776__$1 = inst_43791;
var state_43806__$1 = (function (){var statearr_43821 = state_43806;
(statearr_43821[(10)] = inst_43776__$1);

return statearr_43821;
})();
var statearr_43822_43838 = state_43806__$1;
(statearr_43822_43838[(2)] = null);

(statearr_43822_43838[(1)] = (2));


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
var statearr_43823 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43823[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_43823[(1)] = (1));

return statearr_43823;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_43806){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_43806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e43824){if((e43824 instanceof Object)){
var ex__26035__auto__ = e43824;
var statearr_43825_43839 = state_43806;
(statearr_43825_43839[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43840 = state_43806;
state_43806 = G__43840;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_43806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_43806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_43826 = f__26127__auto__.call(null);
(statearr_43826[(6)] = c__26126__auto___43828);

return statearr_43826;
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
var G__43842 = arguments.length;
switch (G__43842) {
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
var c__26126__auto___43887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_43866){
var state_val_43867 = (state_43866[(1)]);
if((state_val_43867 === (7))){
var inst_43848 = (state_43866[(7)]);
var inst_43848__$1 = (state_43866[(2)]);
var inst_43849 = (inst_43848__$1 == null);
var inst_43850 = cljs.core.not.call(null,inst_43849);
var state_43866__$1 = (function (){var statearr_43868 = state_43866;
(statearr_43868[(7)] = inst_43848__$1);

return statearr_43868;
})();
if(inst_43850){
var statearr_43869_43888 = state_43866__$1;
(statearr_43869_43888[(1)] = (8));

} else {
var statearr_43870_43889 = state_43866__$1;
(statearr_43870_43889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (1))){
var inst_43843 = (0);
var state_43866__$1 = (function (){var statearr_43871 = state_43866;
(statearr_43871[(8)] = inst_43843);

return statearr_43871;
})();
var statearr_43872_43890 = state_43866__$1;
(statearr_43872_43890[(2)] = null);

(statearr_43872_43890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (4))){
var state_43866__$1 = state_43866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43866__$1,(7),ch);
} else {
if((state_val_43867 === (6))){
var inst_43861 = (state_43866[(2)]);
var state_43866__$1 = state_43866;
var statearr_43873_43891 = state_43866__$1;
(statearr_43873_43891[(2)] = inst_43861);

(statearr_43873_43891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (3))){
var inst_43863 = (state_43866[(2)]);
var inst_43864 = cljs.core.async.close_BANG_.call(null,out);
var state_43866__$1 = (function (){var statearr_43874 = state_43866;
(statearr_43874[(9)] = inst_43863);

return statearr_43874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43866__$1,inst_43864);
} else {
if((state_val_43867 === (2))){
var inst_43843 = (state_43866[(8)]);
var inst_43845 = (inst_43843 < n);
var state_43866__$1 = state_43866;
if(cljs.core.truth_(inst_43845)){
var statearr_43875_43892 = state_43866__$1;
(statearr_43875_43892[(1)] = (4));

} else {
var statearr_43876_43893 = state_43866__$1;
(statearr_43876_43893[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (11))){
var inst_43843 = (state_43866[(8)]);
var inst_43853 = (state_43866[(2)]);
var inst_43854 = (inst_43843 + (1));
var inst_43843__$1 = inst_43854;
var state_43866__$1 = (function (){var statearr_43877 = state_43866;
(statearr_43877[(10)] = inst_43853);

(statearr_43877[(8)] = inst_43843__$1);

return statearr_43877;
})();
var statearr_43878_43894 = state_43866__$1;
(statearr_43878_43894[(2)] = null);

(statearr_43878_43894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (9))){
var state_43866__$1 = state_43866;
var statearr_43879_43895 = state_43866__$1;
(statearr_43879_43895[(2)] = null);

(statearr_43879_43895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (5))){
var state_43866__$1 = state_43866;
var statearr_43880_43896 = state_43866__$1;
(statearr_43880_43896[(2)] = null);

(statearr_43880_43896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (10))){
var inst_43858 = (state_43866[(2)]);
var state_43866__$1 = state_43866;
var statearr_43881_43897 = state_43866__$1;
(statearr_43881_43897[(2)] = inst_43858);

(statearr_43881_43897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (8))){
var inst_43848 = (state_43866[(7)]);
var state_43866__$1 = state_43866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43866__$1,(11),out,inst_43848);
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
var statearr_43882 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43882[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_43882[(1)] = (1));

return statearr_43882;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_43866){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_43866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e43883){if((e43883 instanceof Object)){
var ex__26035__auto__ = e43883;
var statearr_43884_43898 = state_43866;
(statearr_43884_43898[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43899 = state_43866;
state_43866 = G__43899;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_43866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_43866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_43885 = f__26127__auto__.call(null);
(statearr_43885[(6)] = c__26126__auto___43887);

return statearr_43885;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43901 = (function (f,ch,meta43902){
this.f = f;
this.ch = ch;
this.meta43902 = meta43902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43903,meta43902__$1){
var self__ = this;
var _43903__$1 = this;
return (new cljs.core.async.t_cljs$core$async43901(self__.f,self__.ch,meta43902__$1));
}));

(cljs.core.async.t_cljs$core$async43901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43903){
var self__ = this;
var _43903__$1 = this;
return self__.meta43902;
}));

(cljs.core.async.t_cljs$core$async43901.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async43901.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async43901.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43904 = (function (f,ch,meta43902,_,fn1,meta43905){
this.f = f;
this.ch = ch;
this.meta43902 = meta43902;
this._ = _;
this.fn1 = fn1;
this.meta43905 = meta43905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43906,meta43905__$1){
var self__ = this;
var _43906__$1 = this;
return (new cljs.core.async.t_cljs$core$async43904(self__.f,self__.ch,self__.meta43902,self__._,self__.fn1,meta43905__$1));
}));

(cljs.core.async.t_cljs$core$async43904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43906){
var self__ = this;
var _43906__$1 = this;
return self__.meta43905;
}));

(cljs.core.async.t_cljs$core$async43904.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43904.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__43900_SHARP_){
return f1.call(null,(((p1__43900_SHARP_ == null))?null:self__.f.call(null,p1__43900_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async43904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43902","meta43902",655997279,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43901","cljs.core.async/t_cljs$core$async43901",625086834,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43905","meta43905",-303866072,null)], null);
}));

(cljs.core.async.t_cljs$core$async43904.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43904");

(cljs.core.async.t_cljs$core$async43904.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async43904");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43904.
 */
cljs.core.async.__GT_t_cljs$core$async43904 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43904(f__$1,ch__$1,meta43902__$1,___$2,fn1__$1,meta43905){
return (new cljs.core.async.t_cljs$core$async43904(f__$1,ch__$1,meta43902__$1,___$2,fn1__$1,meta43905));
});

}

return (new cljs.core.async.t_cljs$core$async43904(self__.f,self__.ch,self__.meta43902,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async43901.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43902","meta43902",655997279,null)], null);
}));

(cljs.core.async.t_cljs$core$async43901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43901");

(cljs.core.async.t_cljs$core$async43901.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async43901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43901.
 */
cljs.core.async.__GT_t_cljs$core$async43901 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43901(f__$1,ch__$1,meta43902){
return (new cljs.core.async.t_cljs$core$async43901(f__$1,ch__$1,meta43902));
});

}

return (new cljs.core.async.t_cljs$core$async43901(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43907 = (function (f,ch,meta43908){
this.f = f;
this.ch = ch;
this.meta43908 = meta43908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43909,meta43908__$1){
var self__ = this;
var _43909__$1 = this;
return (new cljs.core.async.t_cljs$core$async43907(self__.f,self__.ch,meta43908__$1));
}));

(cljs.core.async.t_cljs$core$async43907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43909){
var self__ = this;
var _43909__$1 = this;
return self__.meta43908;
}));

(cljs.core.async.t_cljs$core$async43907.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async43907.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43907.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async43907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43908","meta43908",1785564619,null)], null);
}));

(cljs.core.async.t_cljs$core$async43907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43907");

(cljs.core.async.t_cljs$core$async43907.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async43907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43907.
 */
cljs.core.async.__GT_t_cljs$core$async43907 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43907(f__$1,ch__$1,meta43908){
return (new cljs.core.async.t_cljs$core$async43907(f__$1,ch__$1,meta43908));
});

}

return (new cljs.core.async.t_cljs$core$async43907(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43910 = (function (p,ch,meta43911){
this.p = p;
this.ch = ch;
this.meta43911 = meta43911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43912,meta43911__$1){
var self__ = this;
var _43912__$1 = this;
return (new cljs.core.async.t_cljs$core$async43910(self__.p,self__.ch,meta43911__$1));
}));

(cljs.core.async.t_cljs$core$async43910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43912){
var self__ = this;
var _43912__$1 = this;
return self__.meta43911;
}));

(cljs.core.async.t_cljs$core$async43910.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async43910.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async43910.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43910.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43911","meta43911",-1825460228,null)], null);
}));

(cljs.core.async.t_cljs$core$async43910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43910");

(cljs.core.async.t_cljs$core$async43910.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async43910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43910.
 */
cljs.core.async.__GT_t_cljs$core$async43910 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43910(p__$1,ch__$1,meta43911){
return (new cljs.core.async.t_cljs$core$async43910(p__$1,ch__$1,meta43911));
});

}

return (new cljs.core.async.t_cljs$core$async43910(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43914 = arguments.length;
switch (G__43914) {
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
var c__26126__auto___43954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_43935){
var state_val_43936 = (state_43935[(1)]);
if((state_val_43936 === (7))){
var inst_43931 = (state_43935[(2)]);
var state_43935__$1 = state_43935;
var statearr_43937_43955 = state_43935__$1;
(statearr_43937_43955[(2)] = inst_43931);

(statearr_43937_43955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (1))){
var state_43935__$1 = state_43935;
var statearr_43938_43956 = state_43935__$1;
(statearr_43938_43956[(2)] = null);

(statearr_43938_43956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (4))){
var inst_43917 = (state_43935[(7)]);
var inst_43917__$1 = (state_43935[(2)]);
var inst_43918 = (inst_43917__$1 == null);
var state_43935__$1 = (function (){var statearr_43939 = state_43935;
(statearr_43939[(7)] = inst_43917__$1);

return statearr_43939;
})();
if(cljs.core.truth_(inst_43918)){
var statearr_43940_43957 = state_43935__$1;
(statearr_43940_43957[(1)] = (5));

} else {
var statearr_43941_43958 = state_43935__$1;
(statearr_43941_43958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (6))){
var inst_43917 = (state_43935[(7)]);
var inst_43922 = p.call(null,inst_43917);
var state_43935__$1 = state_43935;
if(cljs.core.truth_(inst_43922)){
var statearr_43942_43959 = state_43935__$1;
(statearr_43942_43959[(1)] = (8));

} else {
var statearr_43943_43960 = state_43935__$1;
(statearr_43943_43960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (3))){
var inst_43933 = (state_43935[(2)]);
var state_43935__$1 = state_43935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43935__$1,inst_43933);
} else {
if((state_val_43936 === (2))){
var state_43935__$1 = state_43935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43935__$1,(4),ch);
} else {
if((state_val_43936 === (11))){
var inst_43925 = (state_43935[(2)]);
var state_43935__$1 = state_43935;
var statearr_43944_43961 = state_43935__$1;
(statearr_43944_43961[(2)] = inst_43925);

(statearr_43944_43961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (9))){
var state_43935__$1 = state_43935;
var statearr_43945_43962 = state_43935__$1;
(statearr_43945_43962[(2)] = null);

(statearr_43945_43962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (5))){
var inst_43920 = cljs.core.async.close_BANG_.call(null,out);
var state_43935__$1 = state_43935;
var statearr_43946_43963 = state_43935__$1;
(statearr_43946_43963[(2)] = inst_43920);

(statearr_43946_43963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (10))){
var inst_43928 = (state_43935[(2)]);
var state_43935__$1 = (function (){var statearr_43947 = state_43935;
(statearr_43947[(8)] = inst_43928);

return statearr_43947;
})();
var statearr_43948_43964 = state_43935__$1;
(statearr_43948_43964[(2)] = null);

(statearr_43948_43964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (8))){
var inst_43917 = (state_43935[(7)]);
var state_43935__$1 = state_43935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43935__$1,(11),out,inst_43917);
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
var statearr_43949 = [null,null,null,null,null,null,null,null,null];
(statearr_43949[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_43949[(1)] = (1));

return statearr_43949;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_43935){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_43935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e43950){if((e43950 instanceof Object)){
var ex__26035__auto__ = e43950;
var statearr_43951_43965 = state_43935;
(statearr_43951_43965[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43966 = state_43935;
state_43935 = G__43966;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_43935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_43935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_43952 = f__26127__auto__.call(null);
(statearr_43952[(6)] = c__26126__auto___43954);

return statearr_43952;
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
var G__43968 = arguments.length;
switch (G__43968) {
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
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_44031){
var state_val_44032 = (state_44031[(1)]);
if((state_val_44032 === (7))){
var inst_44027 = (state_44031[(2)]);
var state_44031__$1 = state_44031;
var statearr_44033_44071 = state_44031__$1;
(statearr_44033_44071[(2)] = inst_44027);

(statearr_44033_44071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (20))){
var inst_43997 = (state_44031[(7)]);
var inst_44008 = (state_44031[(2)]);
var inst_44009 = cljs.core.next.call(null,inst_43997);
var inst_43983 = inst_44009;
var inst_43984 = null;
var inst_43985 = (0);
var inst_43986 = (0);
var state_44031__$1 = (function (){var statearr_44034 = state_44031;
(statearr_44034[(8)] = inst_44008);

(statearr_44034[(9)] = inst_43984);

(statearr_44034[(10)] = inst_43985);

(statearr_44034[(11)] = inst_43983);

(statearr_44034[(12)] = inst_43986);

return statearr_44034;
})();
var statearr_44035_44072 = state_44031__$1;
(statearr_44035_44072[(2)] = null);

(statearr_44035_44072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (1))){
var state_44031__$1 = state_44031;
var statearr_44036_44073 = state_44031__$1;
(statearr_44036_44073[(2)] = null);

(statearr_44036_44073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (4))){
var inst_43972 = (state_44031[(13)]);
var inst_43972__$1 = (state_44031[(2)]);
var inst_43973 = (inst_43972__$1 == null);
var state_44031__$1 = (function (){var statearr_44037 = state_44031;
(statearr_44037[(13)] = inst_43972__$1);

return statearr_44037;
})();
if(cljs.core.truth_(inst_43973)){
var statearr_44038_44074 = state_44031__$1;
(statearr_44038_44074[(1)] = (5));

} else {
var statearr_44039_44075 = state_44031__$1;
(statearr_44039_44075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (15))){
var state_44031__$1 = state_44031;
var statearr_44043_44076 = state_44031__$1;
(statearr_44043_44076[(2)] = null);

(statearr_44043_44076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (21))){
var state_44031__$1 = state_44031;
var statearr_44044_44077 = state_44031__$1;
(statearr_44044_44077[(2)] = null);

(statearr_44044_44077[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (13))){
var inst_43984 = (state_44031[(9)]);
var inst_43985 = (state_44031[(10)]);
var inst_43983 = (state_44031[(11)]);
var inst_43986 = (state_44031[(12)]);
var inst_43993 = (state_44031[(2)]);
var inst_43994 = (inst_43986 + (1));
var tmp44040 = inst_43984;
var tmp44041 = inst_43985;
var tmp44042 = inst_43983;
var inst_43983__$1 = tmp44042;
var inst_43984__$1 = tmp44040;
var inst_43985__$1 = tmp44041;
var inst_43986__$1 = inst_43994;
var state_44031__$1 = (function (){var statearr_44045 = state_44031;
(statearr_44045[(9)] = inst_43984__$1);

(statearr_44045[(10)] = inst_43985__$1);

(statearr_44045[(11)] = inst_43983__$1);

(statearr_44045[(12)] = inst_43986__$1);

(statearr_44045[(14)] = inst_43993);

return statearr_44045;
})();
var statearr_44046_44078 = state_44031__$1;
(statearr_44046_44078[(2)] = null);

(statearr_44046_44078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (22))){
var state_44031__$1 = state_44031;
var statearr_44047_44079 = state_44031__$1;
(statearr_44047_44079[(2)] = null);

(statearr_44047_44079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (6))){
var inst_43972 = (state_44031[(13)]);
var inst_43981 = f.call(null,inst_43972);
var inst_43982 = cljs.core.seq.call(null,inst_43981);
var inst_43983 = inst_43982;
var inst_43984 = null;
var inst_43985 = (0);
var inst_43986 = (0);
var state_44031__$1 = (function (){var statearr_44048 = state_44031;
(statearr_44048[(9)] = inst_43984);

(statearr_44048[(10)] = inst_43985);

(statearr_44048[(11)] = inst_43983);

(statearr_44048[(12)] = inst_43986);

return statearr_44048;
})();
var statearr_44049_44080 = state_44031__$1;
(statearr_44049_44080[(2)] = null);

(statearr_44049_44080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (17))){
var inst_43997 = (state_44031[(7)]);
var inst_44001 = cljs.core.chunk_first.call(null,inst_43997);
var inst_44002 = cljs.core.chunk_rest.call(null,inst_43997);
var inst_44003 = cljs.core.count.call(null,inst_44001);
var inst_43983 = inst_44002;
var inst_43984 = inst_44001;
var inst_43985 = inst_44003;
var inst_43986 = (0);
var state_44031__$1 = (function (){var statearr_44050 = state_44031;
(statearr_44050[(9)] = inst_43984);

(statearr_44050[(10)] = inst_43985);

(statearr_44050[(11)] = inst_43983);

(statearr_44050[(12)] = inst_43986);

return statearr_44050;
})();
var statearr_44051_44081 = state_44031__$1;
(statearr_44051_44081[(2)] = null);

(statearr_44051_44081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (3))){
var inst_44029 = (state_44031[(2)]);
var state_44031__$1 = state_44031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44031__$1,inst_44029);
} else {
if((state_val_44032 === (12))){
var inst_44017 = (state_44031[(2)]);
var state_44031__$1 = state_44031;
var statearr_44052_44082 = state_44031__$1;
(statearr_44052_44082[(2)] = inst_44017);

(statearr_44052_44082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (2))){
var state_44031__$1 = state_44031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44031__$1,(4),in$);
} else {
if((state_val_44032 === (23))){
var inst_44025 = (state_44031[(2)]);
var state_44031__$1 = state_44031;
var statearr_44053_44083 = state_44031__$1;
(statearr_44053_44083[(2)] = inst_44025);

(statearr_44053_44083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (19))){
var inst_44012 = (state_44031[(2)]);
var state_44031__$1 = state_44031;
var statearr_44054_44084 = state_44031__$1;
(statearr_44054_44084[(2)] = inst_44012);

(statearr_44054_44084[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (11))){
var inst_43997 = (state_44031[(7)]);
var inst_43983 = (state_44031[(11)]);
var inst_43997__$1 = cljs.core.seq.call(null,inst_43983);
var state_44031__$1 = (function (){var statearr_44055 = state_44031;
(statearr_44055[(7)] = inst_43997__$1);

return statearr_44055;
})();
if(inst_43997__$1){
var statearr_44056_44085 = state_44031__$1;
(statearr_44056_44085[(1)] = (14));

} else {
var statearr_44057_44086 = state_44031__$1;
(statearr_44057_44086[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (9))){
var inst_44019 = (state_44031[(2)]);
var inst_44020 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_44031__$1 = (function (){var statearr_44058 = state_44031;
(statearr_44058[(15)] = inst_44019);

return statearr_44058;
})();
if(cljs.core.truth_(inst_44020)){
var statearr_44059_44087 = state_44031__$1;
(statearr_44059_44087[(1)] = (21));

} else {
var statearr_44060_44088 = state_44031__$1;
(statearr_44060_44088[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (5))){
var inst_43975 = cljs.core.async.close_BANG_.call(null,out);
var state_44031__$1 = state_44031;
var statearr_44061_44089 = state_44031__$1;
(statearr_44061_44089[(2)] = inst_43975);

(statearr_44061_44089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (14))){
var inst_43997 = (state_44031[(7)]);
var inst_43999 = cljs.core.chunked_seq_QMARK_.call(null,inst_43997);
var state_44031__$1 = state_44031;
if(inst_43999){
var statearr_44062_44090 = state_44031__$1;
(statearr_44062_44090[(1)] = (17));

} else {
var statearr_44063_44091 = state_44031__$1;
(statearr_44063_44091[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (16))){
var inst_44015 = (state_44031[(2)]);
var state_44031__$1 = state_44031;
var statearr_44064_44092 = state_44031__$1;
(statearr_44064_44092[(2)] = inst_44015);

(statearr_44064_44092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (10))){
var inst_43984 = (state_44031[(9)]);
var inst_43986 = (state_44031[(12)]);
var inst_43991 = cljs.core._nth.call(null,inst_43984,inst_43986);
var state_44031__$1 = state_44031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44031__$1,(13),out,inst_43991);
} else {
if((state_val_44032 === (18))){
var inst_43997 = (state_44031[(7)]);
var inst_44006 = cljs.core.first.call(null,inst_43997);
var state_44031__$1 = state_44031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44031__$1,(20),out,inst_44006);
} else {
if((state_val_44032 === (8))){
var inst_43985 = (state_44031[(10)]);
var inst_43986 = (state_44031[(12)]);
var inst_43988 = (inst_43986 < inst_43985);
var inst_43989 = inst_43988;
var state_44031__$1 = state_44031;
if(cljs.core.truth_(inst_43989)){
var statearr_44065_44093 = state_44031__$1;
(statearr_44065_44093[(1)] = (10));

} else {
var statearr_44066_44094 = state_44031__$1;
(statearr_44066_44094[(1)] = (11));

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
var statearr_44067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44067[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__);

(statearr_44067[(1)] = (1));

return statearr_44067;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____1 = (function (state_44031){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_44031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e44068){if((e44068 instanceof Object)){
var ex__26035__auto__ = e44068;
var statearr_44069_44095 = state_44031;
(statearr_44069_44095[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44096 = state_44031;
state_44031 = G__44096;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__ = function(state_44031){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____1.call(this,state_44031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26032__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_44070 = f__26127__auto__.call(null);
(statearr_44070[(6)] = c__26126__auto__);

return statearr_44070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44098 = arguments.length;
switch (G__44098) {
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
var G__44101 = arguments.length;
switch (G__44101) {
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
var G__44104 = arguments.length;
switch (G__44104) {
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
var c__26126__auto___44151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_44128){
var state_val_44129 = (state_44128[(1)]);
if((state_val_44129 === (7))){
var inst_44123 = (state_44128[(2)]);
var state_44128__$1 = state_44128;
var statearr_44130_44152 = state_44128__$1;
(statearr_44130_44152[(2)] = inst_44123);

(statearr_44130_44152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (1))){
var inst_44105 = null;
var state_44128__$1 = (function (){var statearr_44131 = state_44128;
(statearr_44131[(7)] = inst_44105);

return statearr_44131;
})();
var statearr_44132_44153 = state_44128__$1;
(statearr_44132_44153[(2)] = null);

(statearr_44132_44153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (4))){
var inst_44108 = (state_44128[(8)]);
var inst_44108__$1 = (state_44128[(2)]);
var inst_44109 = (inst_44108__$1 == null);
var inst_44110 = cljs.core.not.call(null,inst_44109);
var state_44128__$1 = (function (){var statearr_44133 = state_44128;
(statearr_44133[(8)] = inst_44108__$1);

return statearr_44133;
})();
if(inst_44110){
var statearr_44134_44154 = state_44128__$1;
(statearr_44134_44154[(1)] = (5));

} else {
var statearr_44135_44155 = state_44128__$1;
(statearr_44135_44155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (6))){
var state_44128__$1 = state_44128;
var statearr_44136_44156 = state_44128__$1;
(statearr_44136_44156[(2)] = null);

(statearr_44136_44156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (3))){
var inst_44125 = (state_44128[(2)]);
var inst_44126 = cljs.core.async.close_BANG_.call(null,out);
var state_44128__$1 = (function (){var statearr_44137 = state_44128;
(statearr_44137[(9)] = inst_44125);

return statearr_44137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44128__$1,inst_44126);
} else {
if((state_val_44129 === (2))){
var state_44128__$1 = state_44128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44128__$1,(4),ch);
} else {
if((state_val_44129 === (11))){
var inst_44108 = (state_44128[(8)]);
var inst_44117 = (state_44128[(2)]);
var inst_44105 = inst_44108;
var state_44128__$1 = (function (){var statearr_44138 = state_44128;
(statearr_44138[(7)] = inst_44105);

(statearr_44138[(10)] = inst_44117);

return statearr_44138;
})();
var statearr_44139_44157 = state_44128__$1;
(statearr_44139_44157[(2)] = null);

(statearr_44139_44157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (9))){
var inst_44108 = (state_44128[(8)]);
var state_44128__$1 = state_44128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44128__$1,(11),out,inst_44108);
} else {
if((state_val_44129 === (5))){
var inst_44105 = (state_44128[(7)]);
var inst_44108 = (state_44128[(8)]);
var inst_44112 = cljs.core._EQ_.call(null,inst_44108,inst_44105);
var state_44128__$1 = state_44128;
if(inst_44112){
var statearr_44141_44158 = state_44128__$1;
(statearr_44141_44158[(1)] = (8));

} else {
var statearr_44142_44159 = state_44128__$1;
(statearr_44142_44159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (10))){
var inst_44120 = (state_44128[(2)]);
var state_44128__$1 = state_44128;
var statearr_44143_44160 = state_44128__$1;
(statearr_44143_44160[(2)] = inst_44120);

(statearr_44143_44160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (8))){
var inst_44105 = (state_44128[(7)]);
var tmp44140 = inst_44105;
var inst_44105__$1 = tmp44140;
var state_44128__$1 = (function (){var statearr_44144 = state_44128;
(statearr_44144[(7)] = inst_44105__$1);

return statearr_44144;
})();
var statearr_44145_44161 = state_44128__$1;
(statearr_44145_44161[(2)] = null);

(statearr_44145_44161[(1)] = (2));


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
var statearr_44146 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44146[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_44146[(1)] = (1));

return statearr_44146;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_44128){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_44128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e44147){if((e44147 instanceof Object)){
var ex__26035__auto__ = e44147;
var statearr_44148_44162 = state_44128;
(statearr_44148_44162[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44163 = state_44128;
state_44128 = G__44163;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_44128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_44128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_44149 = f__26127__auto__.call(null);
(statearr_44149[(6)] = c__26126__auto___44151);

return statearr_44149;
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
var G__44165 = arguments.length;
switch (G__44165) {
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
var c__26126__auto___44231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_44203){
var state_val_44204 = (state_44203[(1)]);
if((state_val_44204 === (7))){
var inst_44199 = (state_44203[(2)]);
var state_44203__$1 = state_44203;
var statearr_44205_44232 = state_44203__$1;
(statearr_44205_44232[(2)] = inst_44199);

(statearr_44205_44232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (1))){
var inst_44166 = (new Array(n));
var inst_44167 = inst_44166;
var inst_44168 = (0);
var state_44203__$1 = (function (){var statearr_44206 = state_44203;
(statearr_44206[(7)] = inst_44167);

(statearr_44206[(8)] = inst_44168);

return statearr_44206;
})();
var statearr_44207_44233 = state_44203__$1;
(statearr_44207_44233[(2)] = null);

(statearr_44207_44233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (4))){
var inst_44171 = (state_44203[(9)]);
var inst_44171__$1 = (state_44203[(2)]);
var inst_44172 = (inst_44171__$1 == null);
var inst_44173 = cljs.core.not.call(null,inst_44172);
var state_44203__$1 = (function (){var statearr_44208 = state_44203;
(statearr_44208[(9)] = inst_44171__$1);

return statearr_44208;
})();
if(inst_44173){
var statearr_44209_44234 = state_44203__$1;
(statearr_44209_44234[(1)] = (5));

} else {
var statearr_44210_44235 = state_44203__$1;
(statearr_44210_44235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (15))){
var inst_44193 = (state_44203[(2)]);
var state_44203__$1 = state_44203;
var statearr_44211_44236 = state_44203__$1;
(statearr_44211_44236[(2)] = inst_44193);

(statearr_44211_44236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (13))){
var state_44203__$1 = state_44203;
var statearr_44212_44237 = state_44203__$1;
(statearr_44212_44237[(2)] = null);

(statearr_44212_44237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (6))){
var inst_44168 = (state_44203[(8)]);
var inst_44189 = (inst_44168 > (0));
var state_44203__$1 = state_44203;
if(cljs.core.truth_(inst_44189)){
var statearr_44213_44238 = state_44203__$1;
(statearr_44213_44238[(1)] = (12));

} else {
var statearr_44214_44239 = state_44203__$1;
(statearr_44214_44239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (3))){
var inst_44201 = (state_44203[(2)]);
var state_44203__$1 = state_44203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44203__$1,inst_44201);
} else {
if((state_val_44204 === (12))){
var inst_44167 = (state_44203[(7)]);
var inst_44191 = cljs.core.vec.call(null,inst_44167);
var state_44203__$1 = state_44203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44203__$1,(15),out,inst_44191);
} else {
if((state_val_44204 === (2))){
var state_44203__$1 = state_44203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44203__$1,(4),ch);
} else {
if((state_val_44204 === (11))){
var inst_44183 = (state_44203[(2)]);
var inst_44184 = (new Array(n));
var inst_44167 = inst_44184;
var inst_44168 = (0);
var state_44203__$1 = (function (){var statearr_44215 = state_44203;
(statearr_44215[(10)] = inst_44183);

(statearr_44215[(7)] = inst_44167);

(statearr_44215[(8)] = inst_44168);

return statearr_44215;
})();
var statearr_44216_44240 = state_44203__$1;
(statearr_44216_44240[(2)] = null);

(statearr_44216_44240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (9))){
var inst_44167 = (state_44203[(7)]);
var inst_44181 = cljs.core.vec.call(null,inst_44167);
var state_44203__$1 = state_44203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44203__$1,(11),out,inst_44181);
} else {
if((state_val_44204 === (5))){
var inst_44167 = (state_44203[(7)]);
var inst_44168 = (state_44203[(8)]);
var inst_44176 = (state_44203[(11)]);
var inst_44171 = (state_44203[(9)]);
var inst_44175 = (inst_44167[inst_44168] = inst_44171);
var inst_44176__$1 = (inst_44168 + (1));
var inst_44177 = (inst_44176__$1 < n);
var state_44203__$1 = (function (){var statearr_44217 = state_44203;
(statearr_44217[(12)] = inst_44175);

(statearr_44217[(11)] = inst_44176__$1);

return statearr_44217;
})();
if(cljs.core.truth_(inst_44177)){
var statearr_44218_44241 = state_44203__$1;
(statearr_44218_44241[(1)] = (8));

} else {
var statearr_44219_44242 = state_44203__$1;
(statearr_44219_44242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (14))){
var inst_44196 = (state_44203[(2)]);
var inst_44197 = cljs.core.async.close_BANG_.call(null,out);
var state_44203__$1 = (function (){var statearr_44221 = state_44203;
(statearr_44221[(13)] = inst_44196);

return statearr_44221;
})();
var statearr_44222_44243 = state_44203__$1;
(statearr_44222_44243[(2)] = inst_44197);

(statearr_44222_44243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (10))){
var inst_44187 = (state_44203[(2)]);
var state_44203__$1 = state_44203;
var statearr_44223_44244 = state_44203__$1;
(statearr_44223_44244[(2)] = inst_44187);

(statearr_44223_44244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (8))){
var inst_44167 = (state_44203[(7)]);
var inst_44176 = (state_44203[(11)]);
var tmp44220 = inst_44167;
var inst_44167__$1 = tmp44220;
var inst_44168 = inst_44176;
var state_44203__$1 = (function (){var statearr_44224 = state_44203;
(statearr_44224[(7)] = inst_44167__$1);

(statearr_44224[(8)] = inst_44168);

return statearr_44224;
})();
var statearr_44225_44245 = state_44203__$1;
(statearr_44225_44245[(2)] = null);

(statearr_44225_44245[(1)] = (2));


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
var statearr_44226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44226[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_44226[(1)] = (1));

return statearr_44226;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_44203){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_44203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e44227){if((e44227 instanceof Object)){
var ex__26035__auto__ = e44227;
var statearr_44228_44246 = state_44203;
(statearr_44228_44246[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44247 = state_44203;
state_44203 = G__44247;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_44203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_44203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_44229 = f__26127__auto__.call(null);
(statearr_44229[(6)] = c__26126__auto___44231);

return statearr_44229;
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
var G__44249 = arguments.length;
switch (G__44249) {
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
var c__26126__auto___44319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_44291){
var state_val_44292 = (state_44291[(1)]);
if((state_val_44292 === (7))){
var inst_44287 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
var statearr_44293_44320 = state_44291__$1;
(statearr_44293_44320[(2)] = inst_44287);

(statearr_44293_44320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (1))){
var inst_44250 = [];
var inst_44251 = inst_44250;
var inst_44252 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44291__$1 = (function (){var statearr_44294 = state_44291;
(statearr_44294[(7)] = inst_44252);

(statearr_44294[(8)] = inst_44251);

return statearr_44294;
})();
var statearr_44295_44321 = state_44291__$1;
(statearr_44295_44321[(2)] = null);

(statearr_44295_44321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (4))){
var inst_44255 = (state_44291[(9)]);
var inst_44255__$1 = (state_44291[(2)]);
var inst_44256 = (inst_44255__$1 == null);
var inst_44257 = cljs.core.not.call(null,inst_44256);
var state_44291__$1 = (function (){var statearr_44296 = state_44291;
(statearr_44296[(9)] = inst_44255__$1);

return statearr_44296;
})();
if(inst_44257){
var statearr_44297_44322 = state_44291__$1;
(statearr_44297_44322[(1)] = (5));

} else {
var statearr_44298_44323 = state_44291__$1;
(statearr_44298_44323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (15))){
var inst_44281 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
var statearr_44299_44324 = state_44291__$1;
(statearr_44299_44324[(2)] = inst_44281);

(statearr_44299_44324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (13))){
var state_44291__$1 = state_44291;
var statearr_44300_44325 = state_44291__$1;
(statearr_44300_44325[(2)] = null);

(statearr_44300_44325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (6))){
var inst_44251 = (state_44291[(8)]);
var inst_44276 = inst_44251.length;
var inst_44277 = (inst_44276 > (0));
var state_44291__$1 = state_44291;
if(cljs.core.truth_(inst_44277)){
var statearr_44301_44326 = state_44291__$1;
(statearr_44301_44326[(1)] = (12));

} else {
var statearr_44302_44327 = state_44291__$1;
(statearr_44302_44327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (3))){
var inst_44289 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44291__$1,inst_44289);
} else {
if((state_val_44292 === (12))){
var inst_44251 = (state_44291[(8)]);
var inst_44279 = cljs.core.vec.call(null,inst_44251);
var state_44291__$1 = state_44291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44291__$1,(15),out,inst_44279);
} else {
if((state_val_44292 === (2))){
var state_44291__$1 = state_44291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44291__$1,(4),ch);
} else {
if((state_val_44292 === (11))){
var inst_44255 = (state_44291[(9)]);
var inst_44259 = (state_44291[(10)]);
var inst_44269 = (state_44291[(2)]);
var inst_44270 = [];
var inst_44271 = inst_44270.push(inst_44255);
var inst_44251 = inst_44270;
var inst_44252 = inst_44259;
var state_44291__$1 = (function (){var statearr_44303 = state_44291;
(statearr_44303[(11)] = inst_44271);

(statearr_44303[(12)] = inst_44269);

(statearr_44303[(7)] = inst_44252);

(statearr_44303[(8)] = inst_44251);

return statearr_44303;
})();
var statearr_44304_44328 = state_44291__$1;
(statearr_44304_44328[(2)] = null);

(statearr_44304_44328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (9))){
var inst_44251 = (state_44291[(8)]);
var inst_44267 = cljs.core.vec.call(null,inst_44251);
var state_44291__$1 = state_44291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44291__$1,(11),out,inst_44267);
} else {
if((state_val_44292 === (5))){
var inst_44255 = (state_44291[(9)]);
var inst_44259 = (state_44291[(10)]);
var inst_44252 = (state_44291[(7)]);
var inst_44259__$1 = f.call(null,inst_44255);
var inst_44260 = cljs.core._EQ_.call(null,inst_44259__$1,inst_44252);
var inst_44261 = cljs.core.keyword_identical_QMARK_.call(null,inst_44252,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44262 = ((inst_44260) || (inst_44261));
var state_44291__$1 = (function (){var statearr_44305 = state_44291;
(statearr_44305[(10)] = inst_44259__$1);

return statearr_44305;
})();
if(cljs.core.truth_(inst_44262)){
var statearr_44306_44329 = state_44291__$1;
(statearr_44306_44329[(1)] = (8));

} else {
var statearr_44307_44330 = state_44291__$1;
(statearr_44307_44330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (14))){
var inst_44284 = (state_44291[(2)]);
var inst_44285 = cljs.core.async.close_BANG_.call(null,out);
var state_44291__$1 = (function (){var statearr_44309 = state_44291;
(statearr_44309[(13)] = inst_44284);

return statearr_44309;
})();
var statearr_44310_44331 = state_44291__$1;
(statearr_44310_44331[(2)] = inst_44285);

(statearr_44310_44331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (10))){
var inst_44274 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
var statearr_44311_44332 = state_44291__$1;
(statearr_44311_44332[(2)] = inst_44274);

(statearr_44311_44332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (8))){
var inst_44255 = (state_44291[(9)]);
var inst_44259 = (state_44291[(10)]);
var inst_44251 = (state_44291[(8)]);
var inst_44264 = inst_44251.push(inst_44255);
var tmp44308 = inst_44251;
var inst_44251__$1 = tmp44308;
var inst_44252 = inst_44259;
var state_44291__$1 = (function (){var statearr_44312 = state_44291;
(statearr_44312[(14)] = inst_44264);

(statearr_44312[(7)] = inst_44252);

(statearr_44312[(8)] = inst_44251__$1);

return statearr_44312;
})();
var statearr_44313_44333 = state_44291__$1;
(statearr_44313_44333[(2)] = null);

(statearr_44313_44333[(1)] = (2));


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
var statearr_44314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44314[(0)] = cljs$core$async$state_machine__26032__auto__);

(statearr_44314[(1)] = (1));

return statearr_44314;
});
var cljs$core$async$state_machine__26032__auto____1 = (function (state_44291){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_44291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e44315){if((e44315 instanceof Object)){
var ex__26035__auto__ = e44315;
var statearr_44316_44334 = state_44291;
(statearr_44316_44334[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44335 = state_44291;
state_44291 = G__44335;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
cljs$core$async$state_machine__26032__auto__ = function(state_44291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26032__auto____1.call(this,state_44291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26032__auto____0;
cljs$core$async$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26032__auto____1;
return cljs$core$async$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_44317 = f__26127__auto__.call(null);
(statearr_44317[(6)] = c__26126__auto___44319);

return statearr_44317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1718651919355
