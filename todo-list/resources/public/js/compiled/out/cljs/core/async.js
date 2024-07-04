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
var G__24831 = arguments.length;
switch (G__24831) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24832 = (function (f,blockable,meta24833){
this.f = f;
this.blockable = blockable;
this.meta24833 = meta24833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24834,meta24833__$1){
var self__ = this;
var _24834__$1 = this;
return (new cljs.core.async.t_cljs$core$async24832(self__.f,self__.blockable,meta24833__$1));
}));

(cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24834){
var self__ = this;
var _24834__$1 = this;
return self__.meta24833;
}));

(cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24833","meta24833",-1199976524,null)], null);
}));

(cljs.core.async.t_cljs$core$async24832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24832");

(cljs.core.async.t_cljs$core$async24832.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24832.
 */
cljs.core.async.__GT_t_cljs$core$async24832 = (function cljs$core$async$__GT_t_cljs$core$async24832(f__$1,blockable__$1,meta24833){
return (new cljs.core.async.t_cljs$core$async24832(f__$1,blockable__$1,meta24833));
});

}

return (new cljs.core.async.t_cljs$core$async24832(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24838 = arguments.length;
switch (G__24838) {
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
var G__24841 = arguments.length;
switch (G__24841) {
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
var G__24844 = arguments.length;
switch (G__24844) {
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
var val_24846 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24846);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_24846);
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
var G__24848 = arguments.length;
switch (G__24848) {
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
var n__4648__auto___24850 = n;
var x_24851 = (0);
while(true){
if((x_24851 < n__4648__auto___24850)){
(a[x_24851] = (0));

var G__24852 = (x_24851 + (1));
x_24851 = G__24852;
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

var G__24853 = (i + (1));
i = G__24853;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24854 = (function (flag,meta24855){
this.flag = flag;
this.meta24855 = meta24855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24856,meta24855__$1){
var self__ = this;
var _24856__$1 = this;
return (new cljs.core.async.t_cljs$core$async24854(self__.flag,meta24855__$1));
}));

(cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24856){
var self__ = this;
var _24856__$1 = this;
return self__.meta24855;
}));

(cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24855","meta24855",-1782144990,null)], null);
}));

(cljs.core.async.t_cljs$core$async24854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24854");

(cljs.core.async.t_cljs$core$async24854.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24854.
 */
cljs.core.async.__GT_t_cljs$core$async24854 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24854(flag__$1,meta24855){
return (new cljs.core.async.t_cljs$core$async24854(flag__$1,meta24855));
});

}

return (new cljs.core.async.t_cljs$core$async24854(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24857 = (function (flag,cb,meta24858){
this.flag = flag;
this.cb = cb;
this.meta24858 = meta24858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24859,meta24858__$1){
var self__ = this;
var _24859__$1 = this;
return (new cljs.core.async.t_cljs$core$async24857(self__.flag,self__.cb,meta24858__$1));
}));

(cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24859){
var self__ = this;
var _24859__$1 = this;
return self__.meta24858;
}));

(cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24858","meta24858",-1186882562,null)], null);
}));

(cljs.core.async.t_cljs$core$async24857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24857");

(cljs.core.async.t_cljs$core$async24857.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24857.
 */
cljs.core.async.__GT_t_cljs$core$async24857 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24857(flag__$1,cb__$1,meta24858){
return (new cljs.core.async.t_cljs$core$async24857(flag__$1,cb__$1,meta24858));
});

}

return (new cljs.core.async.t_cljs$core$async24857(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24860_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24860_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24861_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24861_SHARP_,port], null));
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
var G__24862 = (i + (1));
i = G__24862;
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
var len__4771__auto___24867 = arguments.length;
var i__4772__auto___24868 = (0);
while(true){
if((i__4772__auto___24868 < len__4771__auto___24867)){
args__4777__auto__.push((arguments[i__4772__auto___24868]));

var G__24869 = (i__4772__auto___24868 + (1));
i__4772__auto___24868 = G__24869;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24865){
var map__24866 = p__24865;
var map__24866__$1 = cljs.core.__destructure_map.call(null,map__24866);
var opts = map__24866__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24863){
var G__24864 = cljs.core.first.call(null,seq24863);
var seq24863__$1 = cljs.core.next.call(null,seq24863);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24864,seq24863__$1);
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
var G__24871 = arguments.length;
switch (G__24871) {
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
var c__24771__auto___24917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_24895){
var state_val_24896 = (state_24895[(1)]);
if((state_val_24896 === (7))){
var inst_24891 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24897_24918 = state_24895__$1;
(statearr_24897_24918[(2)] = inst_24891);

(statearr_24897_24918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (1))){
var state_24895__$1 = state_24895;
var statearr_24898_24919 = state_24895__$1;
(statearr_24898_24919[(2)] = null);

(statearr_24898_24919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (4))){
var inst_24874 = (state_24895[(7)]);
var inst_24874__$1 = (state_24895[(2)]);
var inst_24875 = (inst_24874__$1 == null);
var state_24895__$1 = (function (){var statearr_24899 = state_24895;
(statearr_24899[(7)] = inst_24874__$1);

return statearr_24899;
})();
if(cljs.core.truth_(inst_24875)){
var statearr_24900_24920 = state_24895__$1;
(statearr_24900_24920[(1)] = (5));

} else {
var statearr_24901_24921 = state_24895__$1;
(statearr_24901_24921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (13))){
var state_24895__$1 = state_24895;
var statearr_24902_24922 = state_24895__$1;
(statearr_24902_24922[(2)] = null);

(statearr_24902_24922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (6))){
var inst_24874 = (state_24895[(7)]);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24895__$1,(11),to,inst_24874);
} else {
if((state_val_24896 === (3))){
var inst_24893 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24895__$1,inst_24893);
} else {
if((state_val_24896 === (12))){
var state_24895__$1 = state_24895;
var statearr_24903_24923 = state_24895__$1;
(statearr_24903_24923[(2)] = null);

(statearr_24903_24923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (2))){
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(4),from);
} else {
if((state_val_24896 === (11))){
var inst_24884 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
if(cljs.core.truth_(inst_24884)){
var statearr_24904_24924 = state_24895__$1;
(statearr_24904_24924[(1)] = (12));

} else {
var statearr_24905_24925 = state_24895__$1;
(statearr_24905_24925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (9))){
var state_24895__$1 = state_24895;
var statearr_24906_24926 = state_24895__$1;
(statearr_24906_24926[(2)] = null);

(statearr_24906_24926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (5))){
var state_24895__$1 = state_24895;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24907_24927 = state_24895__$1;
(statearr_24907_24927[(1)] = (8));

} else {
var statearr_24908_24928 = state_24895__$1;
(statearr_24908_24928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (14))){
var inst_24889 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24909_24929 = state_24895__$1;
(statearr_24909_24929[(2)] = inst_24889);

(statearr_24909_24929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (10))){
var inst_24881 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24910_24930 = state_24895__$1;
(statearr_24910_24930[(2)] = inst_24881);

(statearr_24910_24930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (8))){
var inst_24878 = cljs.core.async.close_BANG_.call(null,to);
var state_24895__$1 = state_24895;
var statearr_24911_24931 = state_24895__$1;
(statearr_24911_24931[(2)] = inst_24878);

(statearr_24911_24931[(1)] = (10));


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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_24912 = [null,null,null,null,null,null,null,null];
(statearr_24912[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_24912[(1)] = (1));

return statearr_24912;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_24895){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_24895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e24913){if((e24913 instanceof Object)){
var ex__24680__auto__ = e24913;
var statearr_24914_24932 = state_24895;
(statearr_24914_24932[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24933 = state_24895;
state_24895 = G__24933;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_24895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_24895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_24915 = f__24772__auto__.call(null);
(statearr_24915[(6)] = c__24771__auto___24917);

return statearr_24915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
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
var process = (function (p__24934){
var vec__24935 = p__24934;
var v = cljs.core.nth.call(null,vec__24935,(0),null);
var p = cljs.core.nth.call(null,vec__24935,(1),null);
var job = vec__24935;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24771__auto___25106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_24942){
var state_val_24943 = (state_24942[(1)]);
if((state_val_24943 === (1))){
var state_24942__$1 = state_24942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24942__$1,(2),res,v);
} else {
if((state_val_24943 === (2))){
var inst_24939 = (state_24942[(2)]);
var inst_24940 = cljs.core.async.close_BANG_.call(null,res);
var state_24942__$1 = (function (){var statearr_24944 = state_24942;
(statearr_24944[(7)] = inst_24939);

return statearr_24944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24942__$1,inst_24940);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0 = (function (){
var statearr_24945 = [null,null,null,null,null,null,null,null];
(statearr_24945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__);

(statearr_24945[(1)] = (1));

return statearr_24945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1 = (function (state_24942){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_24942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e24946){if((e24946 instanceof Object)){
var ex__24680__auto__ = e24946;
var statearr_24947_25107 = state_24942;
(statearr_24947_25107[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25108 = state_24942;
state_24942 = G__25108;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__ = function(state_24942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1.call(this,state_24942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_24948 = f__24772__auto__.call(null);
(statearr_24948[(6)] = c__24771__auto___25106);

return statearr_24948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__24949){
var vec__24950 = p__24949;
var v = cljs.core.nth.call(null,vec__24950,(0),null);
var p = cljs.core.nth.call(null,vec__24950,(1),null);
var job = vec__24950;
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
var n__4648__auto___25109 = n;
var __25110 = (0);
while(true){
if((__25110 < n__4648__auto___25109)){
var G__24953_25111 = type;
var G__24953_25112__$1 = (((G__24953_25111 instanceof cljs.core.Keyword))?G__24953_25111.fqn:null);
switch (G__24953_25112__$1) {
case "compute":
var c__24771__auto___25114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25110,c__24771__auto___25114,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async){
return (function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = ((function (__25110,c__24771__auto___25114,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async){
return (function (state_24966){
var state_val_24967 = (state_24966[(1)]);
if((state_val_24967 === (1))){
var state_24966__$1 = state_24966;
var statearr_24968_25115 = state_24966__$1;
(statearr_24968_25115[(2)] = null);

(statearr_24968_25115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (2))){
var state_24966__$1 = state_24966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24966__$1,(4),jobs);
} else {
if((state_val_24967 === (3))){
var inst_24964 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24966__$1,inst_24964);
} else {
if((state_val_24967 === (4))){
var inst_24956 = (state_24966[(2)]);
var inst_24957 = process.call(null,inst_24956);
var state_24966__$1 = state_24966;
if(cljs.core.truth_(inst_24957)){
var statearr_24969_25116 = state_24966__$1;
(statearr_24969_25116[(1)] = (5));

} else {
var statearr_24970_25117 = state_24966__$1;
(statearr_24970_25117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (5))){
var state_24966__$1 = state_24966;
var statearr_24971_25118 = state_24966__$1;
(statearr_24971_25118[(2)] = null);

(statearr_24971_25118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (6))){
var state_24966__$1 = state_24966;
var statearr_24972_25119 = state_24966__$1;
(statearr_24972_25119[(2)] = null);

(statearr_24972_25119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (7))){
var inst_24962 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
var statearr_24973_25120 = state_24966__$1;
(statearr_24973_25120[(2)] = inst_24962);

(statearr_24973_25120[(1)] = (3));


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
});})(__25110,c__24771__auto___25114,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async))
;
return ((function (__25110,switch__24676__auto__,c__24771__auto___25114,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0 = (function (){
var statearr_24974 = [null,null,null,null,null,null,null];
(statearr_24974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__);

(statearr_24974[(1)] = (1));

return statearr_24974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1 = (function (state_24966){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_24966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e24975){if((e24975 instanceof Object)){
var ex__24680__auto__ = e24975;
var statearr_24976_25121 = state_24966;
(statearr_24976_25121[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25122 = state_24966;
state_24966 = G__25122;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__ = function(state_24966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1.call(this,state_24966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__;
})()
;})(__25110,switch__24676__auto__,c__24771__auto___25114,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async))
})();
var state__24773__auto__ = (function (){var statearr_24977 = f__24772__auto__.call(null);
(statearr_24977[(6)] = c__24771__auto___25114);

return statearr_24977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
});})(__25110,c__24771__auto___25114,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async))
);


break;
case "async":
var c__24771__auto___25123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25110,c__24771__auto___25123,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async){
return (function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = ((function (__25110,c__24771__auto___25123,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async){
return (function (state_24990){
var state_val_24991 = (state_24990[(1)]);
if((state_val_24991 === (1))){
var state_24990__$1 = state_24990;
var statearr_24992_25124 = state_24990__$1;
(statearr_24992_25124[(2)] = null);

(statearr_24992_25124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (2))){
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24990__$1,(4),jobs);
} else {
if((state_val_24991 === (3))){
var inst_24988 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24990__$1,inst_24988);
} else {
if((state_val_24991 === (4))){
var inst_24980 = (state_24990[(2)]);
var inst_24981 = async.call(null,inst_24980);
var state_24990__$1 = state_24990;
if(cljs.core.truth_(inst_24981)){
var statearr_24993_25125 = state_24990__$1;
(statearr_24993_25125[(1)] = (5));

} else {
var statearr_24994_25126 = state_24990__$1;
(statearr_24994_25126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (5))){
var state_24990__$1 = state_24990;
var statearr_24995_25127 = state_24990__$1;
(statearr_24995_25127[(2)] = null);

(statearr_24995_25127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (6))){
var state_24990__$1 = state_24990;
var statearr_24996_25128 = state_24990__$1;
(statearr_24996_25128[(2)] = null);

(statearr_24996_25128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (7))){
var inst_24986 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_24997_25129 = state_24990__$1;
(statearr_24997_25129[(2)] = inst_24986);

(statearr_24997_25129[(1)] = (3));


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
});})(__25110,c__24771__auto___25123,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async))
;
return ((function (__25110,switch__24676__auto__,c__24771__auto___25123,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0 = (function (){
var statearr_24998 = [null,null,null,null,null,null,null];
(statearr_24998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__);

(statearr_24998[(1)] = (1));

return statearr_24998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1 = (function (state_24990){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_24990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e24999){if((e24999 instanceof Object)){
var ex__24680__auto__ = e24999;
var statearr_25000_25130 = state_24990;
(statearr_25000_25130[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25131 = state_24990;
state_24990 = G__25131;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__ = function(state_24990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1.call(this,state_24990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__;
})()
;})(__25110,switch__24676__auto__,c__24771__auto___25123,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async))
})();
var state__24773__auto__ = (function (){var statearr_25001 = f__24772__auto__.call(null);
(statearr_25001[(6)] = c__24771__auto___25123);

return statearr_25001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
});})(__25110,c__24771__auto___25123,G__24953_25111,G__24953_25112__$1,n__4648__auto___25109,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24953_25112__$1)].join('')));

}

var G__25132 = (__25110 + (1));
__25110 = G__25132;
continue;
} else {
}
break;
}

var c__24771__auto___25133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_25023){
var state_val_25024 = (state_25023[(1)]);
if((state_val_25024 === (7))){
var inst_25019 = (state_25023[(2)]);
var state_25023__$1 = state_25023;
var statearr_25025_25134 = state_25023__$1;
(statearr_25025_25134[(2)] = inst_25019);

(statearr_25025_25134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25024 === (1))){
var state_25023__$1 = state_25023;
var statearr_25026_25135 = state_25023__$1;
(statearr_25026_25135[(2)] = null);

(statearr_25026_25135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25024 === (4))){
var inst_25004 = (state_25023[(7)]);
var inst_25004__$1 = (state_25023[(2)]);
var inst_25005 = (inst_25004__$1 == null);
var state_25023__$1 = (function (){var statearr_25027 = state_25023;
(statearr_25027[(7)] = inst_25004__$1);

return statearr_25027;
})();
if(cljs.core.truth_(inst_25005)){
var statearr_25028_25136 = state_25023__$1;
(statearr_25028_25136[(1)] = (5));

} else {
var statearr_25029_25137 = state_25023__$1;
(statearr_25029_25137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25024 === (6))){
var inst_25004 = (state_25023[(7)]);
var inst_25009 = (state_25023[(8)]);
var inst_25009__$1 = cljs.core.async.chan.call(null,(1));
var inst_25010 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25011 = [inst_25004,inst_25009__$1];
var inst_25012 = (new cljs.core.PersistentVector(null,2,(5),inst_25010,inst_25011,null));
var state_25023__$1 = (function (){var statearr_25030 = state_25023;
(statearr_25030[(8)] = inst_25009__$1);

return statearr_25030;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25023__$1,(8),jobs,inst_25012);
} else {
if((state_val_25024 === (3))){
var inst_25021 = (state_25023[(2)]);
var state_25023__$1 = state_25023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25023__$1,inst_25021);
} else {
if((state_val_25024 === (2))){
var state_25023__$1 = state_25023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25023__$1,(4),from);
} else {
if((state_val_25024 === (9))){
var inst_25016 = (state_25023[(2)]);
var state_25023__$1 = (function (){var statearr_25031 = state_25023;
(statearr_25031[(9)] = inst_25016);

return statearr_25031;
})();
var statearr_25032_25138 = state_25023__$1;
(statearr_25032_25138[(2)] = null);

(statearr_25032_25138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25024 === (5))){
var inst_25007 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25023__$1 = state_25023;
var statearr_25033_25139 = state_25023__$1;
(statearr_25033_25139[(2)] = inst_25007);

(statearr_25033_25139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25024 === (8))){
var inst_25009 = (state_25023[(8)]);
var inst_25014 = (state_25023[(2)]);
var state_25023__$1 = (function (){var statearr_25034 = state_25023;
(statearr_25034[(10)] = inst_25014);

return statearr_25034;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25023__$1,(9),results,inst_25009);
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
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0 = (function (){
var statearr_25035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__);

(statearr_25035[(1)] = (1));

return statearr_25035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1 = (function (state_25023){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_25023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e25036){if((e25036 instanceof Object)){
var ex__24680__auto__ = e25036;
var statearr_25037_25140 = state_25023;
(statearr_25037_25140[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25141 = state_25023;
state_25023 = G__25141;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__ = function(state_25023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1.call(this,state_25023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_25038 = f__24772__auto__.call(null);
(statearr_25038[(6)] = c__24771__auto___25133);

return statearr_25038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));


var c__24771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_25076){
var state_val_25077 = (state_25076[(1)]);
if((state_val_25077 === (7))){
var inst_25072 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
var statearr_25078_25142 = state_25076__$1;
(statearr_25078_25142[(2)] = inst_25072);

(statearr_25078_25142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (20))){
var state_25076__$1 = state_25076;
var statearr_25079_25143 = state_25076__$1;
(statearr_25079_25143[(2)] = null);

(statearr_25079_25143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (1))){
var state_25076__$1 = state_25076;
var statearr_25080_25144 = state_25076__$1;
(statearr_25080_25144[(2)] = null);

(statearr_25080_25144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (4))){
var inst_25041 = (state_25076[(7)]);
var inst_25041__$1 = (state_25076[(2)]);
var inst_25042 = (inst_25041__$1 == null);
var state_25076__$1 = (function (){var statearr_25081 = state_25076;
(statearr_25081[(7)] = inst_25041__$1);

return statearr_25081;
})();
if(cljs.core.truth_(inst_25042)){
var statearr_25082_25145 = state_25076__$1;
(statearr_25082_25145[(1)] = (5));

} else {
var statearr_25083_25146 = state_25076__$1;
(statearr_25083_25146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (15))){
var inst_25054 = (state_25076[(8)]);
var state_25076__$1 = state_25076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25076__$1,(18),to,inst_25054);
} else {
if((state_val_25077 === (21))){
var inst_25067 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
var statearr_25084_25147 = state_25076__$1;
(statearr_25084_25147[(2)] = inst_25067);

(statearr_25084_25147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (13))){
var inst_25069 = (state_25076[(2)]);
var state_25076__$1 = (function (){var statearr_25085 = state_25076;
(statearr_25085[(9)] = inst_25069);

return statearr_25085;
})();
var statearr_25086_25148 = state_25076__$1;
(statearr_25086_25148[(2)] = null);

(statearr_25086_25148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (6))){
var inst_25041 = (state_25076[(7)]);
var state_25076__$1 = state_25076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25076__$1,(11),inst_25041);
} else {
if((state_val_25077 === (17))){
var inst_25062 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
if(cljs.core.truth_(inst_25062)){
var statearr_25087_25149 = state_25076__$1;
(statearr_25087_25149[(1)] = (19));

} else {
var statearr_25088_25150 = state_25076__$1;
(statearr_25088_25150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (3))){
var inst_25074 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25076__$1,inst_25074);
} else {
if((state_val_25077 === (12))){
var inst_25051 = (state_25076[(10)]);
var state_25076__$1 = state_25076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25076__$1,(14),inst_25051);
} else {
if((state_val_25077 === (2))){
var state_25076__$1 = state_25076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25076__$1,(4),results);
} else {
if((state_val_25077 === (19))){
var state_25076__$1 = state_25076;
var statearr_25089_25151 = state_25076__$1;
(statearr_25089_25151[(2)] = null);

(statearr_25089_25151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (11))){
var inst_25051 = (state_25076[(2)]);
var state_25076__$1 = (function (){var statearr_25090 = state_25076;
(statearr_25090[(10)] = inst_25051);

return statearr_25090;
})();
var statearr_25091_25152 = state_25076__$1;
(statearr_25091_25152[(2)] = null);

(statearr_25091_25152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (9))){
var state_25076__$1 = state_25076;
var statearr_25092_25153 = state_25076__$1;
(statearr_25092_25153[(2)] = null);

(statearr_25092_25153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (5))){
var state_25076__$1 = state_25076;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25093_25154 = state_25076__$1;
(statearr_25093_25154[(1)] = (8));

} else {
var statearr_25094_25155 = state_25076__$1;
(statearr_25094_25155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (14))){
var inst_25054 = (state_25076[(8)]);
var inst_25054__$1 = (state_25076[(2)]);
var inst_25055 = (inst_25054__$1 == null);
var inst_25056 = cljs.core.not.call(null,inst_25055);
var state_25076__$1 = (function (){var statearr_25095 = state_25076;
(statearr_25095[(8)] = inst_25054__$1);

return statearr_25095;
})();
if(inst_25056){
var statearr_25096_25156 = state_25076__$1;
(statearr_25096_25156[(1)] = (15));

} else {
var statearr_25097_25157 = state_25076__$1;
(statearr_25097_25157[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (16))){
var state_25076__$1 = state_25076;
var statearr_25098_25158 = state_25076__$1;
(statearr_25098_25158[(2)] = false);

(statearr_25098_25158[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (10))){
var inst_25048 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
var statearr_25099_25159 = state_25076__$1;
(statearr_25099_25159[(2)] = inst_25048);

(statearr_25099_25159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (18))){
var inst_25059 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
var statearr_25100_25160 = state_25076__$1;
(statearr_25100_25160[(2)] = inst_25059);

(statearr_25100_25160[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (8))){
var inst_25045 = cljs.core.async.close_BANG_.call(null,to);
var state_25076__$1 = state_25076;
var statearr_25101_25161 = state_25076__$1;
(statearr_25101_25161[(2)] = inst_25045);

(statearr_25101_25161[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0 = (function (){
var statearr_25102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__);

(statearr_25102[(1)] = (1));

return statearr_25102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1 = (function (state_25076){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_25076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e25103){if((e25103 instanceof Object)){
var ex__24680__auto__ = e25103;
var statearr_25104_25162 = state_25076;
(statearr_25104_25162[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25163 = state_25076;
state_25076 = G__25163;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__ = function(state_25076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1.call(this,state_25076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_25105 = f__24772__auto__.call(null);
(statearr_25105[(6)] = c__24771__auto__);

return statearr_25105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));

return c__24771__auto__;
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
var G__25165 = arguments.length;
switch (G__25165) {
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
var G__25168 = arguments.length;
switch (G__25168) {
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
var G__25171 = arguments.length;
switch (G__25171) {
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
var c__24771__auto___25220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_25197){
var state_val_25198 = (state_25197[(1)]);
if((state_val_25198 === (7))){
var inst_25193 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
var statearr_25199_25221 = state_25197__$1;
(statearr_25199_25221[(2)] = inst_25193);

(statearr_25199_25221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25198 === (1))){
var state_25197__$1 = state_25197;
var statearr_25200_25222 = state_25197__$1;
(statearr_25200_25222[(2)] = null);

(statearr_25200_25222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25198 === (4))){
var inst_25174 = (state_25197[(7)]);
var inst_25174__$1 = (state_25197[(2)]);
var inst_25175 = (inst_25174__$1 == null);
var state_25197__$1 = (function (){var statearr_25201 = state_25197;
(statearr_25201[(7)] = inst_25174__$1);

return statearr_25201;
})();
if(cljs.core.truth_(inst_25175)){
var statearr_25202_25223 = state_25197__$1;
(statearr_25202_25223[(1)] = (5));

} else {
var statearr_25203_25224 = state_25197__$1;
(statearr_25203_25224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25198 === (13))){
var state_25197__$1 = state_25197;
var statearr_25204_25225 = state_25197__$1;
(statearr_25204_25225[(2)] = null);

(statearr_25204_25225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25198 === (6))){
var inst_25174 = (state_25197[(7)]);
var inst_25180 = p.call(null,inst_25174);
var state_25197__$1 = state_25197;
if(cljs.core.truth_(inst_25180)){
var statearr_25205_25226 = state_25197__$1;
(statearr_25205_25226[(1)] = (9));

} else {
var statearr_25206_25227 = state_25197__$1;
(statearr_25206_25227[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25198 === (3))){
var inst_25195 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25197__$1,inst_25195);
} else {
if((state_val_25198 === (12))){
var state_25197__$1 = state_25197;
var statearr_25207_25228 = state_25197__$1;
(statearr_25207_25228[(2)] = null);

(statearr_25207_25228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25198 === (2))){
var state_25197__$1 = state_25197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25197__$1,(4),ch);
} else {
if((state_val_25198 === (11))){
var inst_25174 = (state_25197[(7)]);
var inst_25184 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25197__$1,(8),inst_25184,inst_25174);
} else {
if((state_val_25198 === (9))){
var state_25197__$1 = state_25197;
var statearr_25208_25229 = state_25197__$1;
(statearr_25208_25229[(2)] = tc);

(statearr_25208_25229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25198 === (5))){
var inst_25177 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25178 = cljs.core.async.close_BANG_.call(null,fc);
var state_25197__$1 = (function (){var statearr_25209 = state_25197;
(statearr_25209[(8)] = inst_25177);

return statearr_25209;
})();
var statearr_25210_25230 = state_25197__$1;
(statearr_25210_25230[(2)] = inst_25178);

(statearr_25210_25230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25198 === (14))){
var inst_25191 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
var statearr_25211_25231 = state_25197__$1;
(statearr_25211_25231[(2)] = inst_25191);

(statearr_25211_25231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25198 === (10))){
var state_25197__$1 = state_25197;
var statearr_25212_25232 = state_25197__$1;
(statearr_25212_25232[(2)] = fc);

(statearr_25212_25232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25198 === (8))){
var inst_25186 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
if(cljs.core.truth_(inst_25186)){
var statearr_25213_25233 = state_25197__$1;
(statearr_25213_25233[(1)] = (12));

} else {
var statearr_25214_25234 = state_25197__$1;
(statearr_25214_25234[(1)] = (13));

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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_25215 = [null,null,null,null,null,null,null,null,null];
(statearr_25215[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_25215[(1)] = (1));

return statearr_25215;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_25197){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_25197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e25216){if((e25216 instanceof Object)){
var ex__24680__auto__ = e25216;
var statearr_25217_25235 = state_25197;
(statearr_25217_25235[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25236 = state_25197;
state_25197 = G__25236;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_25197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_25197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_25218 = f__24772__auto__.call(null);
(statearr_25218[(6)] = c__24771__auto___25220);

return statearr_25218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
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
var c__24771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_25257){
var state_val_25258 = (state_25257[(1)]);
if((state_val_25258 === (7))){
var inst_25253 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25259_25277 = state_25257__$1;
(statearr_25259_25277[(2)] = inst_25253);

(statearr_25259_25277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (1))){
var inst_25237 = init;
var state_25257__$1 = (function (){var statearr_25260 = state_25257;
(statearr_25260[(7)] = inst_25237);

return statearr_25260;
})();
var statearr_25261_25278 = state_25257__$1;
(statearr_25261_25278[(2)] = null);

(statearr_25261_25278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (4))){
var inst_25240 = (state_25257[(8)]);
var inst_25240__$1 = (state_25257[(2)]);
var inst_25241 = (inst_25240__$1 == null);
var state_25257__$1 = (function (){var statearr_25262 = state_25257;
(statearr_25262[(8)] = inst_25240__$1);

return statearr_25262;
})();
if(cljs.core.truth_(inst_25241)){
var statearr_25263_25279 = state_25257__$1;
(statearr_25263_25279[(1)] = (5));

} else {
var statearr_25264_25280 = state_25257__$1;
(statearr_25264_25280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (6))){
var inst_25244 = (state_25257[(9)]);
var inst_25237 = (state_25257[(7)]);
var inst_25240 = (state_25257[(8)]);
var inst_25244__$1 = f.call(null,inst_25237,inst_25240);
var inst_25245 = cljs.core.reduced_QMARK_.call(null,inst_25244__$1);
var state_25257__$1 = (function (){var statearr_25265 = state_25257;
(statearr_25265[(9)] = inst_25244__$1);

return statearr_25265;
})();
if(inst_25245){
var statearr_25266_25281 = state_25257__$1;
(statearr_25266_25281[(1)] = (8));

} else {
var statearr_25267_25282 = state_25257__$1;
(statearr_25267_25282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (3))){
var inst_25255 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25257__$1,inst_25255);
} else {
if((state_val_25258 === (2))){
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25257__$1,(4),ch);
} else {
if((state_val_25258 === (9))){
var inst_25244 = (state_25257[(9)]);
var inst_25237 = inst_25244;
var state_25257__$1 = (function (){var statearr_25268 = state_25257;
(statearr_25268[(7)] = inst_25237);

return statearr_25268;
})();
var statearr_25269_25283 = state_25257__$1;
(statearr_25269_25283[(2)] = null);

(statearr_25269_25283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (5))){
var inst_25237 = (state_25257[(7)]);
var state_25257__$1 = state_25257;
var statearr_25270_25284 = state_25257__$1;
(statearr_25270_25284[(2)] = inst_25237);

(statearr_25270_25284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (10))){
var inst_25251 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25271_25285 = state_25257__$1;
(statearr_25271_25285[(2)] = inst_25251);

(statearr_25271_25285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (8))){
var inst_25244 = (state_25257[(9)]);
var inst_25247 = cljs.core.deref.call(null,inst_25244);
var state_25257__$1 = state_25257;
var statearr_25272_25286 = state_25257__$1;
(statearr_25272_25286[(2)] = inst_25247);

(statearr_25272_25286[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__24677__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24677__auto____0 = (function (){
var statearr_25273 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25273[(0)] = cljs$core$async$reduce_$_state_machine__24677__auto__);

(statearr_25273[(1)] = (1));

return statearr_25273;
});
var cljs$core$async$reduce_$_state_machine__24677__auto____1 = (function (state_25257){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_25257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e25274){if((e25274 instanceof Object)){
var ex__24680__auto__ = e25274;
var statearr_25275_25287 = state_25257;
(statearr_25275_25287[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25288 = state_25257;
state_25257 = G__25288;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24677__auto__ = function(state_25257){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24677__auto____1.call(this,state_25257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24677__auto____0;
cljs$core$async$reduce_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24677__auto____1;
return cljs$core$async$reduce_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_25276 = f__24772__auto__.call(null);
(statearr_25276[(6)] = c__24771__auto__);

return statearr_25276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));

return c__24771__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_25294){
var state_val_25295 = (state_25294[(1)]);
if((state_val_25295 === (1))){
var inst_25289 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25294__$1 = state_25294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25294__$1,(2),inst_25289);
} else {
if((state_val_25295 === (2))){
var inst_25291 = (state_25294[(2)]);
var inst_25292 = f__$1.call(null,inst_25291);
var state_25294__$1 = state_25294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25294__$1,inst_25292);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24677__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24677__auto____0 = (function (){
var statearr_25296 = [null,null,null,null,null,null,null];
(statearr_25296[(0)] = cljs$core$async$transduce_$_state_machine__24677__auto__);

(statearr_25296[(1)] = (1));

return statearr_25296;
});
var cljs$core$async$transduce_$_state_machine__24677__auto____1 = (function (state_25294){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_25294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e25297){if((e25297 instanceof Object)){
var ex__24680__auto__ = e25297;
var statearr_25298_25300 = state_25294;
(statearr_25298_25300[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25301 = state_25294;
state_25294 = G__25301;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24677__auto__ = function(state_25294){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24677__auto____1.call(this,state_25294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24677__auto____0;
cljs$core$async$transduce_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24677__auto____1;
return cljs$core$async$transduce_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_25299 = f__24772__auto__.call(null);
(statearr_25299[(6)] = c__24771__auto__);

return statearr_25299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));

return c__24771__auto__;
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
var G__25303 = arguments.length;
switch (G__25303) {
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
var c__24771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_25328){
var state_val_25329 = (state_25328[(1)]);
if((state_val_25329 === (7))){
var inst_25310 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
var statearr_25330_25351 = state_25328__$1;
(statearr_25330_25351[(2)] = inst_25310);

(statearr_25330_25351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (1))){
var inst_25304 = cljs.core.seq.call(null,coll);
var inst_25305 = inst_25304;
var state_25328__$1 = (function (){var statearr_25331 = state_25328;
(statearr_25331[(7)] = inst_25305);

return statearr_25331;
})();
var statearr_25332_25352 = state_25328__$1;
(statearr_25332_25352[(2)] = null);

(statearr_25332_25352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (4))){
var inst_25305 = (state_25328[(7)]);
var inst_25308 = cljs.core.first.call(null,inst_25305);
var state_25328__$1 = state_25328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25328__$1,(7),ch,inst_25308);
} else {
if((state_val_25329 === (13))){
var inst_25322 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
var statearr_25333_25353 = state_25328__$1;
(statearr_25333_25353[(2)] = inst_25322);

(statearr_25333_25353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (6))){
var inst_25313 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
if(cljs.core.truth_(inst_25313)){
var statearr_25334_25354 = state_25328__$1;
(statearr_25334_25354[(1)] = (8));

} else {
var statearr_25335_25355 = state_25328__$1;
(statearr_25335_25355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (3))){
var inst_25326 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25328__$1,inst_25326);
} else {
if((state_val_25329 === (12))){
var state_25328__$1 = state_25328;
var statearr_25336_25356 = state_25328__$1;
(statearr_25336_25356[(2)] = null);

(statearr_25336_25356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (2))){
var inst_25305 = (state_25328[(7)]);
var state_25328__$1 = state_25328;
if(cljs.core.truth_(inst_25305)){
var statearr_25337_25357 = state_25328__$1;
(statearr_25337_25357[(1)] = (4));

} else {
var statearr_25338_25358 = state_25328__$1;
(statearr_25338_25358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (11))){
var inst_25319 = cljs.core.async.close_BANG_.call(null,ch);
var state_25328__$1 = state_25328;
var statearr_25339_25359 = state_25328__$1;
(statearr_25339_25359[(2)] = inst_25319);

(statearr_25339_25359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (9))){
var state_25328__$1 = state_25328;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25340_25360 = state_25328__$1;
(statearr_25340_25360[(1)] = (11));

} else {
var statearr_25341_25361 = state_25328__$1;
(statearr_25341_25361[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (5))){
var inst_25305 = (state_25328[(7)]);
var state_25328__$1 = state_25328;
var statearr_25342_25362 = state_25328__$1;
(statearr_25342_25362[(2)] = inst_25305);

(statearr_25342_25362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (10))){
var inst_25324 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
var statearr_25343_25363 = state_25328__$1;
(statearr_25343_25363[(2)] = inst_25324);

(statearr_25343_25363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (8))){
var inst_25305 = (state_25328[(7)]);
var inst_25315 = cljs.core.next.call(null,inst_25305);
var inst_25305__$1 = inst_25315;
var state_25328__$1 = (function (){var statearr_25344 = state_25328;
(statearr_25344[(7)] = inst_25305__$1);

return statearr_25344;
})();
var statearr_25345_25364 = state_25328__$1;
(statearr_25345_25364[(2)] = null);

(statearr_25345_25364[(1)] = (2));


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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_25346 = [null,null,null,null,null,null,null,null];
(statearr_25346[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_25346[(1)] = (1));

return statearr_25346;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_25328){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_25328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e25347){if((e25347 instanceof Object)){
var ex__24680__auto__ = e25347;
var statearr_25348_25365 = state_25328;
(statearr_25348_25365[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25366 = state_25328;
state_25328 = G__25366;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_25328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_25328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_25349 = f__24772__auto__.call(null);
(statearr_25349[(6)] = c__24771__auto__);

return statearr_25349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));

return c__24771__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_25367 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_25367.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25368 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_25368.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25369 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_25369.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25370 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_25370.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25371 = (function (ch,cs,meta25372){
this.ch = ch;
this.cs = cs;
this.meta25372 = meta25372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25373,meta25372__$1){
var self__ = this;
var _25373__$1 = this;
return (new cljs.core.async.t_cljs$core$async25371(self__.ch,self__.cs,meta25372__$1));
}));

(cljs.core.async.t_cljs$core$async25371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25373){
var self__ = this;
var _25373__$1 = this;
return self__.meta25372;
}));

(cljs.core.async.t_cljs$core$async25371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25371.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25371.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25371.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25371.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25372","meta25372",1054497876,null)], null);
}));

(cljs.core.async.t_cljs$core$async25371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25371");

(cljs.core.async.t_cljs$core$async25371.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25371.
 */
cljs.core.async.__GT_t_cljs$core$async25371 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25371(ch__$1,cs__$1,meta25372){
return (new cljs.core.async.t_cljs$core$async25371(ch__$1,cs__$1,meta25372));
});

}

return (new cljs.core.async.t_cljs$core$async25371(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24771__auto___25593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_25508){
var state_val_25509 = (state_25508[(1)]);
if((state_val_25509 === (7))){
var inst_25504 = (state_25508[(2)]);
var state_25508__$1 = state_25508;
var statearr_25510_25594 = state_25508__$1;
(statearr_25510_25594[(2)] = inst_25504);

(statearr_25510_25594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (20))){
var inst_25407 = (state_25508[(7)]);
var inst_25419 = cljs.core.first.call(null,inst_25407);
var inst_25420 = cljs.core.nth.call(null,inst_25419,(0),null);
var inst_25421 = cljs.core.nth.call(null,inst_25419,(1),null);
var state_25508__$1 = (function (){var statearr_25511 = state_25508;
(statearr_25511[(8)] = inst_25420);

return statearr_25511;
})();
if(cljs.core.truth_(inst_25421)){
var statearr_25512_25595 = state_25508__$1;
(statearr_25512_25595[(1)] = (22));

} else {
var statearr_25513_25596 = state_25508__$1;
(statearr_25513_25596[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (27))){
var inst_25456 = (state_25508[(9)]);
var inst_25376 = (state_25508[(10)]);
var inst_25451 = (state_25508[(11)]);
var inst_25449 = (state_25508[(12)]);
var inst_25456__$1 = cljs.core._nth.call(null,inst_25449,inst_25451);
var inst_25457 = cljs.core.async.put_BANG_.call(null,inst_25456__$1,inst_25376,done);
var state_25508__$1 = (function (){var statearr_25514 = state_25508;
(statearr_25514[(9)] = inst_25456__$1);

return statearr_25514;
})();
if(cljs.core.truth_(inst_25457)){
var statearr_25515_25597 = state_25508__$1;
(statearr_25515_25597[(1)] = (30));

} else {
var statearr_25516_25598 = state_25508__$1;
(statearr_25516_25598[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (1))){
var state_25508__$1 = state_25508;
var statearr_25517_25599 = state_25508__$1;
(statearr_25517_25599[(2)] = null);

(statearr_25517_25599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (24))){
var inst_25407 = (state_25508[(7)]);
var inst_25426 = (state_25508[(2)]);
var inst_25427 = cljs.core.next.call(null,inst_25407);
var inst_25385 = inst_25427;
var inst_25386 = null;
var inst_25387 = (0);
var inst_25388 = (0);
var state_25508__$1 = (function (){var statearr_25518 = state_25508;
(statearr_25518[(13)] = inst_25385);

(statearr_25518[(14)] = inst_25388);

(statearr_25518[(15)] = inst_25386);

(statearr_25518[(16)] = inst_25387);

(statearr_25518[(17)] = inst_25426);

return statearr_25518;
})();
var statearr_25519_25600 = state_25508__$1;
(statearr_25519_25600[(2)] = null);

(statearr_25519_25600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (39))){
var state_25508__$1 = state_25508;
var statearr_25523_25601 = state_25508__$1;
(statearr_25523_25601[(2)] = null);

(statearr_25523_25601[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (4))){
var inst_25376 = (state_25508[(10)]);
var inst_25376__$1 = (state_25508[(2)]);
var inst_25377 = (inst_25376__$1 == null);
var state_25508__$1 = (function (){var statearr_25524 = state_25508;
(statearr_25524[(10)] = inst_25376__$1);

return statearr_25524;
})();
if(cljs.core.truth_(inst_25377)){
var statearr_25525_25602 = state_25508__$1;
(statearr_25525_25602[(1)] = (5));

} else {
var statearr_25526_25603 = state_25508__$1;
(statearr_25526_25603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (15))){
var inst_25385 = (state_25508[(13)]);
var inst_25388 = (state_25508[(14)]);
var inst_25386 = (state_25508[(15)]);
var inst_25387 = (state_25508[(16)]);
var inst_25403 = (state_25508[(2)]);
var inst_25404 = (inst_25388 + (1));
var tmp25520 = inst_25385;
var tmp25521 = inst_25386;
var tmp25522 = inst_25387;
var inst_25385__$1 = tmp25520;
var inst_25386__$1 = tmp25521;
var inst_25387__$1 = tmp25522;
var inst_25388__$1 = inst_25404;
var state_25508__$1 = (function (){var statearr_25527 = state_25508;
(statearr_25527[(13)] = inst_25385__$1);

(statearr_25527[(14)] = inst_25388__$1);

(statearr_25527[(15)] = inst_25386__$1);

(statearr_25527[(16)] = inst_25387__$1);

(statearr_25527[(18)] = inst_25403);

return statearr_25527;
})();
var statearr_25528_25604 = state_25508__$1;
(statearr_25528_25604[(2)] = null);

(statearr_25528_25604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (21))){
var inst_25430 = (state_25508[(2)]);
var state_25508__$1 = state_25508;
var statearr_25532_25605 = state_25508__$1;
(statearr_25532_25605[(2)] = inst_25430);

(statearr_25532_25605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (31))){
var inst_25456 = (state_25508[(9)]);
var inst_25460 = done.call(null,null);
var inst_25461 = cljs.core.async.untap_STAR_.call(null,m,inst_25456);
var state_25508__$1 = (function (){var statearr_25533 = state_25508;
(statearr_25533[(19)] = inst_25460);

return statearr_25533;
})();
var statearr_25534_25606 = state_25508__$1;
(statearr_25534_25606[(2)] = inst_25461);

(statearr_25534_25606[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (32))){
var inst_25450 = (state_25508[(20)]);
var inst_25448 = (state_25508[(21)]);
var inst_25451 = (state_25508[(11)]);
var inst_25449 = (state_25508[(12)]);
var inst_25463 = (state_25508[(2)]);
var inst_25464 = (inst_25451 + (1));
var tmp25529 = inst_25450;
var tmp25530 = inst_25448;
var tmp25531 = inst_25449;
var inst_25448__$1 = tmp25530;
var inst_25449__$1 = tmp25531;
var inst_25450__$1 = tmp25529;
var inst_25451__$1 = inst_25464;
var state_25508__$1 = (function (){var statearr_25535 = state_25508;
(statearr_25535[(20)] = inst_25450__$1);

(statearr_25535[(21)] = inst_25448__$1);

(statearr_25535[(22)] = inst_25463);

(statearr_25535[(11)] = inst_25451__$1);

(statearr_25535[(12)] = inst_25449__$1);

return statearr_25535;
})();
var statearr_25536_25607 = state_25508__$1;
(statearr_25536_25607[(2)] = null);

(statearr_25536_25607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (40))){
var inst_25476 = (state_25508[(23)]);
var inst_25480 = done.call(null,null);
var inst_25481 = cljs.core.async.untap_STAR_.call(null,m,inst_25476);
var state_25508__$1 = (function (){var statearr_25537 = state_25508;
(statearr_25537[(24)] = inst_25480);

return statearr_25537;
})();
var statearr_25538_25608 = state_25508__$1;
(statearr_25538_25608[(2)] = inst_25481);

(statearr_25538_25608[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (33))){
var inst_25467 = (state_25508[(25)]);
var inst_25469 = cljs.core.chunked_seq_QMARK_.call(null,inst_25467);
var state_25508__$1 = state_25508;
if(inst_25469){
var statearr_25539_25609 = state_25508__$1;
(statearr_25539_25609[(1)] = (36));

} else {
var statearr_25540_25610 = state_25508__$1;
(statearr_25540_25610[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (13))){
var inst_25397 = (state_25508[(26)]);
var inst_25400 = cljs.core.async.close_BANG_.call(null,inst_25397);
var state_25508__$1 = state_25508;
var statearr_25541_25611 = state_25508__$1;
(statearr_25541_25611[(2)] = inst_25400);

(statearr_25541_25611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (22))){
var inst_25420 = (state_25508[(8)]);
var inst_25423 = cljs.core.async.close_BANG_.call(null,inst_25420);
var state_25508__$1 = state_25508;
var statearr_25542_25612 = state_25508__$1;
(statearr_25542_25612[(2)] = inst_25423);

(statearr_25542_25612[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (36))){
var inst_25467 = (state_25508[(25)]);
var inst_25471 = cljs.core.chunk_first.call(null,inst_25467);
var inst_25472 = cljs.core.chunk_rest.call(null,inst_25467);
var inst_25473 = cljs.core.count.call(null,inst_25471);
var inst_25448 = inst_25472;
var inst_25449 = inst_25471;
var inst_25450 = inst_25473;
var inst_25451 = (0);
var state_25508__$1 = (function (){var statearr_25543 = state_25508;
(statearr_25543[(20)] = inst_25450);

(statearr_25543[(21)] = inst_25448);

(statearr_25543[(11)] = inst_25451);

(statearr_25543[(12)] = inst_25449);

return statearr_25543;
})();
var statearr_25544_25613 = state_25508__$1;
(statearr_25544_25613[(2)] = null);

(statearr_25544_25613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (41))){
var inst_25467 = (state_25508[(25)]);
var inst_25483 = (state_25508[(2)]);
var inst_25484 = cljs.core.next.call(null,inst_25467);
var inst_25448 = inst_25484;
var inst_25449 = null;
var inst_25450 = (0);
var inst_25451 = (0);
var state_25508__$1 = (function (){var statearr_25545 = state_25508;
(statearr_25545[(20)] = inst_25450);

(statearr_25545[(21)] = inst_25448);

(statearr_25545[(27)] = inst_25483);

(statearr_25545[(11)] = inst_25451);

(statearr_25545[(12)] = inst_25449);

return statearr_25545;
})();
var statearr_25546_25614 = state_25508__$1;
(statearr_25546_25614[(2)] = null);

(statearr_25546_25614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (43))){
var state_25508__$1 = state_25508;
var statearr_25547_25615 = state_25508__$1;
(statearr_25547_25615[(2)] = null);

(statearr_25547_25615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (29))){
var inst_25492 = (state_25508[(2)]);
var state_25508__$1 = state_25508;
var statearr_25548_25616 = state_25508__$1;
(statearr_25548_25616[(2)] = inst_25492);

(statearr_25548_25616[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (44))){
var inst_25501 = (state_25508[(2)]);
var state_25508__$1 = (function (){var statearr_25549 = state_25508;
(statearr_25549[(28)] = inst_25501);

return statearr_25549;
})();
var statearr_25550_25617 = state_25508__$1;
(statearr_25550_25617[(2)] = null);

(statearr_25550_25617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (6))){
var inst_25440 = (state_25508[(29)]);
var inst_25439 = cljs.core.deref.call(null,cs);
var inst_25440__$1 = cljs.core.keys.call(null,inst_25439);
var inst_25441 = cljs.core.count.call(null,inst_25440__$1);
var inst_25442 = cljs.core.reset_BANG_.call(null,dctr,inst_25441);
var inst_25447 = cljs.core.seq.call(null,inst_25440__$1);
var inst_25448 = inst_25447;
var inst_25449 = null;
var inst_25450 = (0);
var inst_25451 = (0);
var state_25508__$1 = (function (){var statearr_25551 = state_25508;
(statearr_25551[(20)] = inst_25450);

(statearr_25551[(21)] = inst_25448);

(statearr_25551[(29)] = inst_25440__$1);

(statearr_25551[(30)] = inst_25442);

(statearr_25551[(11)] = inst_25451);

(statearr_25551[(12)] = inst_25449);

return statearr_25551;
})();
var statearr_25552_25618 = state_25508__$1;
(statearr_25552_25618[(2)] = null);

(statearr_25552_25618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (28))){
var inst_25448 = (state_25508[(21)]);
var inst_25467 = (state_25508[(25)]);
var inst_25467__$1 = cljs.core.seq.call(null,inst_25448);
var state_25508__$1 = (function (){var statearr_25553 = state_25508;
(statearr_25553[(25)] = inst_25467__$1);

return statearr_25553;
})();
if(inst_25467__$1){
var statearr_25554_25619 = state_25508__$1;
(statearr_25554_25619[(1)] = (33));

} else {
var statearr_25555_25620 = state_25508__$1;
(statearr_25555_25620[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (25))){
var inst_25450 = (state_25508[(20)]);
var inst_25451 = (state_25508[(11)]);
var inst_25453 = (inst_25451 < inst_25450);
var inst_25454 = inst_25453;
var state_25508__$1 = state_25508;
if(cljs.core.truth_(inst_25454)){
var statearr_25556_25621 = state_25508__$1;
(statearr_25556_25621[(1)] = (27));

} else {
var statearr_25557_25622 = state_25508__$1;
(statearr_25557_25622[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (34))){
var state_25508__$1 = state_25508;
var statearr_25558_25623 = state_25508__$1;
(statearr_25558_25623[(2)] = null);

(statearr_25558_25623[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (17))){
var state_25508__$1 = state_25508;
var statearr_25559_25624 = state_25508__$1;
(statearr_25559_25624[(2)] = null);

(statearr_25559_25624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (3))){
var inst_25506 = (state_25508[(2)]);
var state_25508__$1 = state_25508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25508__$1,inst_25506);
} else {
if((state_val_25509 === (12))){
var inst_25435 = (state_25508[(2)]);
var state_25508__$1 = state_25508;
var statearr_25560_25625 = state_25508__$1;
(statearr_25560_25625[(2)] = inst_25435);

(statearr_25560_25625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (2))){
var state_25508__$1 = state_25508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25508__$1,(4),ch);
} else {
if((state_val_25509 === (23))){
var state_25508__$1 = state_25508;
var statearr_25561_25626 = state_25508__$1;
(statearr_25561_25626[(2)] = null);

(statearr_25561_25626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (35))){
var inst_25490 = (state_25508[(2)]);
var state_25508__$1 = state_25508;
var statearr_25562_25627 = state_25508__$1;
(statearr_25562_25627[(2)] = inst_25490);

(statearr_25562_25627[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (19))){
var inst_25407 = (state_25508[(7)]);
var inst_25411 = cljs.core.chunk_first.call(null,inst_25407);
var inst_25412 = cljs.core.chunk_rest.call(null,inst_25407);
var inst_25413 = cljs.core.count.call(null,inst_25411);
var inst_25385 = inst_25412;
var inst_25386 = inst_25411;
var inst_25387 = inst_25413;
var inst_25388 = (0);
var state_25508__$1 = (function (){var statearr_25563 = state_25508;
(statearr_25563[(13)] = inst_25385);

(statearr_25563[(14)] = inst_25388);

(statearr_25563[(15)] = inst_25386);

(statearr_25563[(16)] = inst_25387);

return statearr_25563;
})();
var statearr_25564_25628 = state_25508__$1;
(statearr_25564_25628[(2)] = null);

(statearr_25564_25628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (11))){
var inst_25385 = (state_25508[(13)]);
var inst_25407 = (state_25508[(7)]);
var inst_25407__$1 = cljs.core.seq.call(null,inst_25385);
var state_25508__$1 = (function (){var statearr_25565 = state_25508;
(statearr_25565[(7)] = inst_25407__$1);

return statearr_25565;
})();
if(inst_25407__$1){
var statearr_25566_25629 = state_25508__$1;
(statearr_25566_25629[(1)] = (16));

} else {
var statearr_25567_25630 = state_25508__$1;
(statearr_25567_25630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (9))){
var inst_25437 = (state_25508[(2)]);
var state_25508__$1 = state_25508;
var statearr_25568_25631 = state_25508__$1;
(statearr_25568_25631[(2)] = inst_25437);

(statearr_25568_25631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (5))){
var inst_25383 = cljs.core.deref.call(null,cs);
var inst_25384 = cljs.core.seq.call(null,inst_25383);
var inst_25385 = inst_25384;
var inst_25386 = null;
var inst_25387 = (0);
var inst_25388 = (0);
var state_25508__$1 = (function (){var statearr_25569 = state_25508;
(statearr_25569[(13)] = inst_25385);

(statearr_25569[(14)] = inst_25388);

(statearr_25569[(15)] = inst_25386);

(statearr_25569[(16)] = inst_25387);

return statearr_25569;
})();
var statearr_25570_25632 = state_25508__$1;
(statearr_25570_25632[(2)] = null);

(statearr_25570_25632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (14))){
var state_25508__$1 = state_25508;
var statearr_25571_25633 = state_25508__$1;
(statearr_25571_25633[(2)] = null);

(statearr_25571_25633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (45))){
var inst_25498 = (state_25508[(2)]);
var state_25508__$1 = state_25508;
var statearr_25572_25634 = state_25508__$1;
(statearr_25572_25634[(2)] = inst_25498);

(statearr_25572_25634[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (26))){
var inst_25440 = (state_25508[(29)]);
var inst_25494 = (state_25508[(2)]);
var inst_25495 = cljs.core.seq.call(null,inst_25440);
var state_25508__$1 = (function (){var statearr_25573 = state_25508;
(statearr_25573[(31)] = inst_25494);

return statearr_25573;
})();
if(inst_25495){
var statearr_25574_25635 = state_25508__$1;
(statearr_25574_25635[(1)] = (42));

} else {
var statearr_25575_25636 = state_25508__$1;
(statearr_25575_25636[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (16))){
var inst_25407 = (state_25508[(7)]);
var inst_25409 = cljs.core.chunked_seq_QMARK_.call(null,inst_25407);
var state_25508__$1 = state_25508;
if(inst_25409){
var statearr_25576_25637 = state_25508__$1;
(statearr_25576_25637[(1)] = (19));

} else {
var statearr_25577_25638 = state_25508__$1;
(statearr_25577_25638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (38))){
var inst_25487 = (state_25508[(2)]);
var state_25508__$1 = state_25508;
var statearr_25578_25639 = state_25508__$1;
(statearr_25578_25639[(2)] = inst_25487);

(statearr_25578_25639[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (30))){
var state_25508__$1 = state_25508;
var statearr_25579_25640 = state_25508__$1;
(statearr_25579_25640[(2)] = null);

(statearr_25579_25640[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (10))){
var inst_25388 = (state_25508[(14)]);
var inst_25386 = (state_25508[(15)]);
var inst_25396 = cljs.core._nth.call(null,inst_25386,inst_25388);
var inst_25397 = cljs.core.nth.call(null,inst_25396,(0),null);
var inst_25398 = cljs.core.nth.call(null,inst_25396,(1),null);
var state_25508__$1 = (function (){var statearr_25580 = state_25508;
(statearr_25580[(26)] = inst_25397);

return statearr_25580;
})();
if(cljs.core.truth_(inst_25398)){
var statearr_25581_25641 = state_25508__$1;
(statearr_25581_25641[(1)] = (13));

} else {
var statearr_25582_25642 = state_25508__$1;
(statearr_25582_25642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (18))){
var inst_25433 = (state_25508[(2)]);
var state_25508__$1 = state_25508;
var statearr_25583_25643 = state_25508__$1;
(statearr_25583_25643[(2)] = inst_25433);

(statearr_25583_25643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (42))){
var state_25508__$1 = state_25508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25508__$1,(45),dchan);
} else {
if((state_val_25509 === (37))){
var inst_25376 = (state_25508[(10)]);
var inst_25467 = (state_25508[(25)]);
var inst_25476 = (state_25508[(23)]);
var inst_25476__$1 = cljs.core.first.call(null,inst_25467);
var inst_25477 = cljs.core.async.put_BANG_.call(null,inst_25476__$1,inst_25376,done);
var state_25508__$1 = (function (){var statearr_25584 = state_25508;
(statearr_25584[(23)] = inst_25476__$1);

return statearr_25584;
})();
if(cljs.core.truth_(inst_25477)){
var statearr_25585_25644 = state_25508__$1;
(statearr_25585_25644[(1)] = (39));

} else {
var statearr_25586_25645 = state_25508__$1;
(statearr_25586_25645[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25509 === (8))){
var inst_25388 = (state_25508[(14)]);
var inst_25387 = (state_25508[(16)]);
var inst_25390 = (inst_25388 < inst_25387);
var inst_25391 = inst_25390;
var state_25508__$1 = state_25508;
if(cljs.core.truth_(inst_25391)){
var statearr_25587_25646 = state_25508__$1;
(statearr_25587_25646[(1)] = (10));

} else {
var statearr_25588_25647 = state_25508__$1;
(statearr_25588_25647[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__24677__auto__ = null;
var cljs$core$async$mult_$_state_machine__24677__auto____0 = (function (){
var statearr_25589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25589[(0)] = cljs$core$async$mult_$_state_machine__24677__auto__);

(statearr_25589[(1)] = (1));

return statearr_25589;
});
var cljs$core$async$mult_$_state_machine__24677__auto____1 = (function (state_25508){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_25508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e25590){if((e25590 instanceof Object)){
var ex__24680__auto__ = e25590;
var statearr_25591_25648 = state_25508;
(statearr_25591_25648[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25649 = state_25508;
state_25508 = G__25649;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24677__auto__ = function(state_25508){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24677__auto____1.call(this,state_25508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24677__auto____0;
cljs$core$async$mult_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24677__auto____1;
return cljs$core$async$mult_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_25592 = f__24772__auto__.call(null);
(statearr_25592[(6)] = c__24771__auto___25593);

return statearr_25592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
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
var G__25651 = arguments.length;
switch (G__25651) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_25653 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_25653.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25654 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_25654.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25655 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25655.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25656 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_25656.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25657 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25657.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25667 = arguments.length;
var i__4772__auto___25668 = (0);
while(true){
if((i__4772__auto___25668 < len__4771__auto___25667)){
args__4777__auto__.push((arguments[i__4772__auto___25668]));

var G__25669 = (i__4772__auto___25668 + (1));
i__4772__auto___25668 = G__25669;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25662){
var map__25663 = p__25662;
var map__25663__$1 = cljs.core.__destructure_map.call(null,map__25663);
var opts = map__25663__$1;
var statearr_25664_25670 = state;
(statearr_25664_25670[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25665_25671 = state;
(statearr_25665_25671[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25666_25672 = state;
(statearr_25666_25672[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25658){
var G__25659 = cljs.core.first.call(null,seq25658);
var seq25658__$1 = cljs.core.next.call(null,seq25658);
var G__25660 = cljs.core.first.call(null,seq25658__$1);
var seq25658__$2 = cljs.core.next.call(null,seq25658__$1);
var G__25661 = cljs.core.first.call(null,seq25658__$2);
var seq25658__$3 = cljs.core.next.call(null,seq25658__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25659,G__25660,G__25661,seq25658__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25673 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25674){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25674 = meta25674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25675,meta25674__$1){
var self__ = this;
var _25675__$1 = this;
return (new cljs.core.async.t_cljs$core$async25673(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25674__$1));
}));

(cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25675){
var self__ = this;
var _25675__$1 = this;
return self__.meta25674;
}));

(cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25674","meta25674",1364409851,null)], null);
}));

(cljs.core.async.t_cljs$core$async25673.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25673");

(cljs.core.async.t_cljs$core$async25673.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25673");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25673.
 */
cljs.core.async.__GT_t_cljs$core$async25673 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25673(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25674){
return (new cljs.core.async.t_cljs$core$async25673(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25674));
});

}

return (new cljs.core.async.t_cljs$core$async25673(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24771__auto___25772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_25737){
var state_val_25738 = (state_25737[(1)]);
if((state_val_25738 === (7))){
var inst_25733 = (state_25737[(2)]);
var state_25737__$1 = state_25737;
var statearr_25739_25773 = state_25737__$1;
(statearr_25739_25773[(2)] = inst_25733);

(statearr_25739_25773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (20))){
var inst_25727 = (state_25737[(2)]);
var state_25737__$1 = state_25737;
var statearr_25740_25774 = state_25737__$1;
(statearr_25740_25774[(2)] = inst_25727);

(statearr_25740_25774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (1))){
var inst_25679 = calc_state.call(null);
var inst_25680 = cljs.core.__destructure_map.call(null,inst_25679);
var inst_25681 = cljs.core.get.call(null,inst_25680,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25682 = cljs.core.get.call(null,inst_25680,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25683 = cljs.core.get.call(null,inst_25680,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25684 = inst_25679;
var state_25737__$1 = (function (){var statearr_25741 = state_25737;
(statearr_25741[(7)] = inst_25684);

(statearr_25741[(8)] = inst_25682);

(statearr_25741[(9)] = inst_25681);

(statearr_25741[(10)] = inst_25683);

return statearr_25741;
})();
var statearr_25742_25775 = state_25737__$1;
(statearr_25742_25775[(2)] = null);

(statearr_25742_25775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (4))){
var inst_25697 = (state_25737[(11)]);
var inst_25696 = (state_25737[(12)]);
var inst_25695 = (state_25737[(2)]);
var inst_25696__$1 = cljs.core.nth.call(null,inst_25695,(0),null);
var inst_25697__$1 = cljs.core.nth.call(null,inst_25695,(1),null);
var inst_25698 = (inst_25696__$1 == null);
var inst_25699 = cljs.core._EQ_.call(null,inst_25697__$1,change);
var inst_25700 = ((inst_25698) || (inst_25699));
var state_25737__$1 = (function (){var statearr_25743 = state_25737;
(statearr_25743[(11)] = inst_25697__$1);

(statearr_25743[(12)] = inst_25696__$1);

return statearr_25743;
})();
if(cljs.core.truth_(inst_25700)){
var statearr_25744_25776 = state_25737__$1;
(statearr_25744_25776[(1)] = (5));

} else {
var statearr_25745_25777 = state_25737__$1;
(statearr_25745_25777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (15))){
var inst_25687 = (state_25737[(13)]);
var inst_25684 = inst_25687;
var state_25737__$1 = (function (){var statearr_25746 = state_25737;
(statearr_25746[(7)] = inst_25684);

return statearr_25746;
})();
var statearr_25747_25778 = state_25737__$1;
(statearr_25747_25778[(2)] = null);

(statearr_25747_25778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (13))){
var inst_25719 = (state_25737[(2)]);
var state_25737__$1 = state_25737;
if(cljs.core.truth_(inst_25719)){
var statearr_25748_25779 = state_25737__$1;
(statearr_25748_25779[(1)] = (14));

} else {
var statearr_25749_25780 = state_25737__$1;
(statearr_25749_25780[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (6))){
var inst_25711 = (state_25737[(14)]);
var inst_25697 = (state_25737[(11)]);
var inst_25688 = (state_25737[(15)]);
var inst_25711__$1 = inst_25688.call(null,inst_25697);
var state_25737__$1 = (function (){var statearr_25750 = state_25737;
(statearr_25750[(14)] = inst_25711__$1);

return statearr_25750;
})();
if(cljs.core.truth_(inst_25711__$1)){
var statearr_25751_25781 = state_25737__$1;
(statearr_25751_25781[(1)] = (11));

} else {
var statearr_25752_25782 = state_25737__$1;
(statearr_25752_25782[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (17))){
var inst_25722 = (state_25737[(2)]);
var state_25737__$1 = state_25737;
if(cljs.core.truth_(inst_25722)){
var statearr_25753_25783 = state_25737__$1;
(statearr_25753_25783[(1)] = (18));

} else {
var statearr_25754_25784 = state_25737__$1;
(statearr_25754_25784[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (3))){
var inst_25735 = (state_25737[(2)]);
var state_25737__$1 = state_25737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25737__$1,inst_25735);
} else {
if((state_val_25738 === (12))){
var inst_25697 = (state_25737[(11)]);
var inst_25689 = (state_25737[(16)]);
var inst_25688 = (state_25737[(15)]);
var inst_25714 = cljs.core.empty_QMARK_.call(null,inst_25688);
var inst_25715 = inst_25689.call(null,inst_25697);
var inst_25716 = cljs.core.not.call(null,inst_25715);
var inst_25717 = ((inst_25714) && (inst_25716));
var state_25737__$1 = state_25737;
var statearr_25755_25785 = state_25737__$1;
(statearr_25755_25785[(2)] = inst_25717);

(statearr_25755_25785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (2))){
var inst_25684 = (state_25737[(7)]);
var inst_25687 = (state_25737[(13)]);
var inst_25687__$1 = cljs.core.__destructure_map.call(null,inst_25684);
var inst_25688 = cljs.core.get.call(null,inst_25687__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25689 = cljs.core.get.call(null,inst_25687__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25690 = cljs.core.get.call(null,inst_25687__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25737__$1 = (function (){var statearr_25756 = state_25737;
(statearr_25756[(16)] = inst_25689);

(statearr_25756[(13)] = inst_25687__$1);

(statearr_25756[(15)] = inst_25688);

return statearr_25756;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25737__$1,(4),inst_25690);
} else {
if((state_val_25738 === (19))){
var state_25737__$1 = state_25737;
var statearr_25757_25786 = state_25737__$1;
(statearr_25757_25786[(2)] = null);

(statearr_25757_25786[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (11))){
var inst_25711 = (state_25737[(14)]);
var state_25737__$1 = state_25737;
var statearr_25758_25787 = state_25737__$1;
(statearr_25758_25787[(2)] = inst_25711);

(statearr_25758_25787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (9))){
var state_25737__$1 = state_25737;
var statearr_25759_25788 = state_25737__$1;
(statearr_25759_25788[(2)] = null);

(statearr_25759_25788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (5))){
var inst_25696 = (state_25737[(12)]);
var inst_25702 = (inst_25696 == null);
var state_25737__$1 = state_25737;
if(cljs.core.truth_(inst_25702)){
var statearr_25760_25789 = state_25737__$1;
(statearr_25760_25789[(1)] = (8));

} else {
var statearr_25761_25790 = state_25737__$1;
(statearr_25761_25790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (14))){
var inst_25696 = (state_25737[(12)]);
var state_25737__$1 = state_25737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25737__$1,(17),out,inst_25696);
} else {
if((state_val_25738 === (16))){
var inst_25731 = (state_25737[(2)]);
var state_25737__$1 = state_25737;
var statearr_25762_25791 = state_25737__$1;
(statearr_25762_25791[(2)] = inst_25731);

(statearr_25762_25791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (10))){
var inst_25707 = (state_25737[(2)]);
var inst_25708 = calc_state.call(null);
var inst_25684 = inst_25708;
var state_25737__$1 = (function (){var statearr_25763 = state_25737;
(statearr_25763[(7)] = inst_25684);

(statearr_25763[(17)] = inst_25707);

return statearr_25763;
})();
var statearr_25764_25792 = state_25737__$1;
(statearr_25764_25792[(2)] = null);

(statearr_25764_25792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (18))){
var inst_25687 = (state_25737[(13)]);
var inst_25684 = inst_25687;
var state_25737__$1 = (function (){var statearr_25765 = state_25737;
(statearr_25765[(7)] = inst_25684);

return statearr_25765;
})();
var statearr_25766_25793 = state_25737__$1;
(statearr_25766_25793[(2)] = null);

(statearr_25766_25793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25738 === (8))){
var inst_25697 = (state_25737[(11)]);
var inst_25704 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25697);
var state_25737__$1 = state_25737;
var statearr_25767_25794 = state_25737__$1;
(statearr_25767_25794[(2)] = inst_25704);

(statearr_25767_25794[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__24677__auto__ = null;
var cljs$core$async$mix_$_state_machine__24677__auto____0 = (function (){
var statearr_25768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25768[(0)] = cljs$core$async$mix_$_state_machine__24677__auto__);

(statearr_25768[(1)] = (1));

return statearr_25768;
});
var cljs$core$async$mix_$_state_machine__24677__auto____1 = (function (state_25737){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_25737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e25769){if((e25769 instanceof Object)){
var ex__24680__auto__ = e25769;
var statearr_25770_25795 = state_25737;
(statearr_25770_25795[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25796 = state_25737;
state_25737 = G__25796;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24677__auto__ = function(state_25737){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24677__auto____1.call(this,state_25737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24677__auto____0;
cljs$core$async$mix_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24677__auto____1;
return cljs$core$async$mix_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_25771 = f__24772__auto__.call(null);
(statearr_25771[(6)] = c__24771__auto___25772);

return statearr_25771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_25799 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_25799.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25800 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_25800.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25801 = (function() {
var G__25802 = null;
var G__25802__1 = (function (p){
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
var G__25802__2 = (function (p,v){
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
G__25802 = function(p,v){
switch(arguments.length){
case 1:
return G__25802__1.call(this,p);
case 2:
return G__25802__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25802.cljs$core$IFn$_invoke$arity$1 = G__25802__1;
G__25802.cljs$core$IFn$_invoke$arity$2 = G__25802__2;
return G__25802;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25798 = arguments.length;
switch (G__25798) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25801.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25801.call(null,p,v);
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
var G__25806 = arguments.length;
switch (G__25806) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__25804_SHARP_){
if(cljs.core.truth_(p1__25804_SHARP_.call(null,topic))){
return p1__25804_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25804_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25807 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25808){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25808 = meta25808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25809,meta25808__$1){
var self__ = this;
var _25809__$1 = this;
return (new cljs.core.async.t_cljs$core$async25807(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25808__$1));
}));

(cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25809){
var self__ = this;
var _25809__$1 = this;
return self__.meta25808;
}));

(cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25808","meta25808",-383097688,null)], null);
}));

(cljs.core.async.t_cljs$core$async25807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25807");

(cljs.core.async.t_cljs$core$async25807.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25807.
 */
cljs.core.async.__GT_t_cljs$core$async25807 = (function cljs$core$async$__GT_t_cljs$core$async25807(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25808){
return (new cljs.core.async.t_cljs$core$async25807(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25808));
});

}

return (new cljs.core.async.t_cljs$core$async25807(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24771__auto___25927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_25881){
var state_val_25882 = (state_25881[(1)]);
if((state_val_25882 === (7))){
var inst_25877 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
var statearr_25883_25928 = state_25881__$1;
(statearr_25883_25928[(2)] = inst_25877);

(statearr_25883_25928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (20))){
var state_25881__$1 = state_25881;
var statearr_25884_25929 = state_25881__$1;
(statearr_25884_25929[(2)] = null);

(statearr_25884_25929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (1))){
var state_25881__$1 = state_25881;
var statearr_25885_25930 = state_25881__$1;
(statearr_25885_25930[(2)] = null);

(statearr_25885_25930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (24))){
var inst_25860 = (state_25881[(7)]);
var inst_25869 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25860);
var state_25881__$1 = state_25881;
var statearr_25886_25931 = state_25881__$1;
(statearr_25886_25931[(2)] = inst_25869);

(statearr_25886_25931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (4))){
var inst_25812 = (state_25881[(8)]);
var inst_25812__$1 = (state_25881[(2)]);
var inst_25813 = (inst_25812__$1 == null);
var state_25881__$1 = (function (){var statearr_25887 = state_25881;
(statearr_25887[(8)] = inst_25812__$1);

return statearr_25887;
})();
if(cljs.core.truth_(inst_25813)){
var statearr_25888_25932 = state_25881__$1;
(statearr_25888_25932[(1)] = (5));

} else {
var statearr_25889_25933 = state_25881__$1;
(statearr_25889_25933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (15))){
var inst_25854 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
var statearr_25890_25934 = state_25881__$1;
(statearr_25890_25934[(2)] = inst_25854);

(statearr_25890_25934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (21))){
var inst_25874 = (state_25881[(2)]);
var state_25881__$1 = (function (){var statearr_25891 = state_25881;
(statearr_25891[(9)] = inst_25874);

return statearr_25891;
})();
var statearr_25892_25935 = state_25881__$1;
(statearr_25892_25935[(2)] = null);

(statearr_25892_25935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (13))){
var inst_25836 = (state_25881[(10)]);
var inst_25838 = cljs.core.chunked_seq_QMARK_.call(null,inst_25836);
var state_25881__$1 = state_25881;
if(inst_25838){
var statearr_25893_25936 = state_25881__$1;
(statearr_25893_25936[(1)] = (16));

} else {
var statearr_25894_25937 = state_25881__$1;
(statearr_25894_25937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (22))){
var inst_25866 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
if(cljs.core.truth_(inst_25866)){
var statearr_25895_25938 = state_25881__$1;
(statearr_25895_25938[(1)] = (23));

} else {
var statearr_25896_25939 = state_25881__$1;
(statearr_25896_25939[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (6))){
var inst_25812 = (state_25881[(8)]);
var inst_25860 = (state_25881[(7)]);
var inst_25862 = (state_25881[(11)]);
var inst_25860__$1 = topic_fn.call(null,inst_25812);
var inst_25861 = cljs.core.deref.call(null,mults);
var inst_25862__$1 = cljs.core.get.call(null,inst_25861,inst_25860__$1);
var state_25881__$1 = (function (){var statearr_25897 = state_25881;
(statearr_25897[(7)] = inst_25860__$1);

(statearr_25897[(11)] = inst_25862__$1);

return statearr_25897;
})();
if(cljs.core.truth_(inst_25862__$1)){
var statearr_25898_25940 = state_25881__$1;
(statearr_25898_25940[(1)] = (19));

} else {
var statearr_25899_25941 = state_25881__$1;
(statearr_25899_25941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (25))){
var inst_25871 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
var statearr_25900_25942 = state_25881__$1;
(statearr_25900_25942[(2)] = inst_25871);

(statearr_25900_25942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (17))){
var inst_25836 = (state_25881[(10)]);
var inst_25845 = cljs.core.first.call(null,inst_25836);
var inst_25846 = cljs.core.async.muxch_STAR_.call(null,inst_25845);
var inst_25847 = cljs.core.async.close_BANG_.call(null,inst_25846);
var inst_25848 = cljs.core.next.call(null,inst_25836);
var inst_25822 = inst_25848;
var inst_25823 = null;
var inst_25824 = (0);
var inst_25825 = (0);
var state_25881__$1 = (function (){var statearr_25901 = state_25881;
(statearr_25901[(12)] = inst_25847);

(statearr_25901[(13)] = inst_25824);

(statearr_25901[(14)] = inst_25823);

(statearr_25901[(15)] = inst_25822);

(statearr_25901[(16)] = inst_25825);

return statearr_25901;
})();
var statearr_25902_25943 = state_25881__$1;
(statearr_25902_25943[(2)] = null);

(statearr_25902_25943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (3))){
var inst_25879 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25881__$1,inst_25879);
} else {
if((state_val_25882 === (12))){
var inst_25856 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
var statearr_25903_25944 = state_25881__$1;
(statearr_25903_25944[(2)] = inst_25856);

(statearr_25903_25944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (2))){
var state_25881__$1 = state_25881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25881__$1,(4),ch);
} else {
if((state_val_25882 === (23))){
var state_25881__$1 = state_25881;
var statearr_25904_25945 = state_25881__$1;
(statearr_25904_25945[(2)] = null);

(statearr_25904_25945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (19))){
var inst_25812 = (state_25881[(8)]);
var inst_25862 = (state_25881[(11)]);
var inst_25864 = cljs.core.async.muxch_STAR_.call(null,inst_25862);
var state_25881__$1 = state_25881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25881__$1,(22),inst_25864,inst_25812);
} else {
if((state_val_25882 === (11))){
var inst_25822 = (state_25881[(15)]);
var inst_25836 = (state_25881[(10)]);
var inst_25836__$1 = cljs.core.seq.call(null,inst_25822);
var state_25881__$1 = (function (){var statearr_25905 = state_25881;
(statearr_25905[(10)] = inst_25836__$1);

return statearr_25905;
})();
if(inst_25836__$1){
var statearr_25906_25946 = state_25881__$1;
(statearr_25906_25946[(1)] = (13));

} else {
var statearr_25907_25947 = state_25881__$1;
(statearr_25907_25947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (9))){
var inst_25858 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
var statearr_25908_25948 = state_25881__$1;
(statearr_25908_25948[(2)] = inst_25858);

(statearr_25908_25948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (5))){
var inst_25819 = cljs.core.deref.call(null,mults);
var inst_25820 = cljs.core.vals.call(null,inst_25819);
var inst_25821 = cljs.core.seq.call(null,inst_25820);
var inst_25822 = inst_25821;
var inst_25823 = null;
var inst_25824 = (0);
var inst_25825 = (0);
var state_25881__$1 = (function (){var statearr_25909 = state_25881;
(statearr_25909[(13)] = inst_25824);

(statearr_25909[(14)] = inst_25823);

(statearr_25909[(15)] = inst_25822);

(statearr_25909[(16)] = inst_25825);

return statearr_25909;
})();
var statearr_25910_25949 = state_25881__$1;
(statearr_25910_25949[(2)] = null);

(statearr_25910_25949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (14))){
var state_25881__$1 = state_25881;
var statearr_25914_25950 = state_25881__$1;
(statearr_25914_25950[(2)] = null);

(statearr_25914_25950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (16))){
var inst_25836 = (state_25881[(10)]);
var inst_25840 = cljs.core.chunk_first.call(null,inst_25836);
var inst_25841 = cljs.core.chunk_rest.call(null,inst_25836);
var inst_25842 = cljs.core.count.call(null,inst_25840);
var inst_25822 = inst_25841;
var inst_25823 = inst_25840;
var inst_25824 = inst_25842;
var inst_25825 = (0);
var state_25881__$1 = (function (){var statearr_25915 = state_25881;
(statearr_25915[(13)] = inst_25824);

(statearr_25915[(14)] = inst_25823);

(statearr_25915[(15)] = inst_25822);

(statearr_25915[(16)] = inst_25825);

return statearr_25915;
})();
var statearr_25916_25951 = state_25881__$1;
(statearr_25916_25951[(2)] = null);

(statearr_25916_25951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (10))){
var inst_25824 = (state_25881[(13)]);
var inst_25823 = (state_25881[(14)]);
var inst_25822 = (state_25881[(15)]);
var inst_25825 = (state_25881[(16)]);
var inst_25830 = cljs.core._nth.call(null,inst_25823,inst_25825);
var inst_25831 = cljs.core.async.muxch_STAR_.call(null,inst_25830);
var inst_25832 = cljs.core.async.close_BANG_.call(null,inst_25831);
var inst_25833 = (inst_25825 + (1));
var tmp25911 = inst_25824;
var tmp25912 = inst_25823;
var tmp25913 = inst_25822;
var inst_25822__$1 = tmp25913;
var inst_25823__$1 = tmp25912;
var inst_25824__$1 = tmp25911;
var inst_25825__$1 = inst_25833;
var state_25881__$1 = (function (){var statearr_25917 = state_25881;
(statearr_25917[(17)] = inst_25832);

(statearr_25917[(13)] = inst_25824__$1);

(statearr_25917[(14)] = inst_25823__$1);

(statearr_25917[(15)] = inst_25822__$1);

(statearr_25917[(16)] = inst_25825__$1);

return statearr_25917;
})();
var statearr_25918_25952 = state_25881__$1;
(statearr_25918_25952[(2)] = null);

(statearr_25918_25952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (18))){
var inst_25851 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
var statearr_25919_25953 = state_25881__$1;
(statearr_25919_25953[(2)] = inst_25851);

(statearr_25919_25953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (8))){
var inst_25824 = (state_25881[(13)]);
var inst_25825 = (state_25881[(16)]);
var inst_25827 = (inst_25825 < inst_25824);
var inst_25828 = inst_25827;
var state_25881__$1 = state_25881;
if(cljs.core.truth_(inst_25828)){
var statearr_25920_25954 = state_25881__$1;
(statearr_25920_25954[(1)] = (10));

} else {
var statearr_25921_25955 = state_25881__$1;
(statearr_25921_25955[(1)] = (11));

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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_25922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25922[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_25922[(1)] = (1));

return statearr_25922;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_25881){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_25881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e25923){if((e25923 instanceof Object)){
var ex__24680__auto__ = e25923;
var statearr_25924_25956 = state_25881;
(statearr_25924_25956[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25957 = state_25881;
state_25881 = G__25957;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_25881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_25881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_25925 = f__24772__auto__.call(null);
(statearr_25925[(6)] = c__24771__auto___25927);

return statearr_25925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
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
var G__25959 = arguments.length;
switch (G__25959) {
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
var G__25962 = arguments.length;
switch (G__25962) {
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
var G__25965 = arguments.length;
switch (G__25965) {
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
var c__24771__auto___26032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_26004){
var state_val_26005 = (state_26004[(1)]);
if((state_val_26005 === (7))){
var state_26004__$1 = state_26004;
var statearr_26006_26033 = state_26004__$1;
(statearr_26006_26033[(2)] = null);

(statearr_26006_26033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (1))){
var state_26004__$1 = state_26004;
var statearr_26007_26034 = state_26004__$1;
(statearr_26007_26034[(2)] = null);

(statearr_26007_26034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (4))){
var inst_25968 = (state_26004[(7)]);
var inst_25970 = (inst_25968 < cnt);
var state_26004__$1 = state_26004;
if(cljs.core.truth_(inst_25970)){
var statearr_26008_26035 = state_26004__$1;
(statearr_26008_26035[(1)] = (6));

} else {
var statearr_26009_26036 = state_26004__$1;
(statearr_26009_26036[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (15))){
var inst_26000 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
var statearr_26010_26037 = state_26004__$1;
(statearr_26010_26037[(2)] = inst_26000);

(statearr_26010_26037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (13))){
var inst_25993 = cljs.core.async.close_BANG_.call(null,out);
var state_26004__$1 = state_26004;
var statearr_26011_26038 = state_26004__$1;
(statearr_26011_26038[(2)] = inst_25993);

(statearr_26011_26038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (6))){
var state_26004__$1 = state_26004;
var statearr_26012_26039 = state_26004__$1;
(statearr_26012_26039[(2)] = null);

(statearr_26012_26039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (3))){
var inst_26002 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26004__$1,inst_26002);
} else {
if((state_val_26005 === (12))){
var inst_25990 = (state_26004[(8)]);
var inst_25990__$1 = (state_26004[(2)]);
var inst_25991 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25990__$1);
var state_26004__$1 = (function (){var statearr_26013 = state_26004;
(statearr_26013[(8)] = inst_25990__$1);

return statearr_26013;
})();
if(cljs.core.truth_(inst_25991)){
var statearr_26014_26040 = state_26004__$1;
(statearr_26014_26040[(1)] = (13));

} else {
var statearr_26015_26041 = state_26004__$1;
(statearr_26015_26041[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (2))){
var inst_25967 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25968 = (0);
var state_26004__$1 = (function (){var statearr_26016 = state_26004;
(statearr_26016[(7)] = inst_25968);

(statearr_26016[(9)] = inst_25967);

return statearr_26016;
})();
var statearr_26017_26042 = state_26004__$1;
(statearr_26017_26042[(2)] = null);

(statearr_26017_26042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (11))){
var inst_25968 = (state_26004[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26004,(10),Object,null,(9));
var inst_25977 = chs__$1.call(null,inst_25968);
var inst_25978 = done.call(null,inst_25968);
var inst_25979 = cljs.core.async.take_BANG_.call(null,inst_25977,inst_25978);
var state_26004__$1 = state_26004;
var statearr_26018_26043 = state_26004__$1;
(statearr_26018_26043[(2)] = inst_25979);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26004__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (9))){
var inst_25968 = (state_26004[(7)]);
var inst_25981 = (state_26004[(2)]);
var inst_25982 = (inst_25968 + (1));
var inst_25968__$1 = inst_25982;
var state_26004__$1 = (function (){var statearr_26019 = state_26004;
(statearr_26019[(7)] = inst_25968__$1);

(statearr_26019[(10)] = inst_25981);

return statearr_26019;
})();
var statearr_26020_26044 = state_26004__$1;
(statearr_26020_26044[(2)] = null);

(statearr_26020_26044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (5))){
var inst_25988 = (state_26004[(2)]);
var state_26004__$1 = (function (){var statearr_26021 = state_26004;
(statearr_26021[(11)] = inst_25988);

return statearr_26021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26004__$1,(12),dchan);
} else {
if((state_val_26005 === (14))){
var inst_25990 = (state_26004[(8)]);
var inst_25995 = cljs.core.apply.call(null,f,inst_25990);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26004__$1,(16),out,inst_25995);
} else {
if((state_val_26005 === (16))){
var inst_25997 = (state_26004[(2)]);
var state_26004__$1 = (function (){var statearr_26022 = state_26004;
(statearr_26022[(12)] = inst_25997);

return statearr_26022;
})();
var statearr_26023_26045 = state_26004__$1;
(statearr_26023_26045[(2)] = null);

(statearr_26023_26045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (10))){
var inst_25972 = (state_26004[(2)]);
var inst_25973 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26004__$1 = (function (){var statearr_26024 = state_26004;
(statearr_26024[(13)] = inst_25972);

return statearr_26024;
})();
var statearr_26025_26046 = state_26004__$1;
(statearr_26025_26046[(2)] = inst_25973);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26004__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (8))){
var inst_25986 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
var statearr_26026_26047 = state_26004__$1;
(statearr_26026_26047[(2)] = inst_25986);

(statearr_26026_26047[(1)] = (5));


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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_26027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26027[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_26027[(1)] = (1));

return statearr_26027;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_26004){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_26004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e26028){if((e26028 instanceof Object)){
var ex__24680__auto__ = e26028;
var statearr_26029_26048 = state_26004;
(statearr_26029_26048[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26049 = state_26004;
state_26004 = G__26049;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_26004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_26004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_26030 = f__24772__auto__.call(null);
(statearr_26030[(6)] = c__24771__auto___26032);

return statearr_26030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
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
var G__26052 = arguments.length;
switch (G__26052) {
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
var c__24771__auto___26106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_26084){
var state_val_26085 = (state_26084[(1)]);
if((state_val_26085 === (7))){
var inst_26064 = (state_26084[(7)]);
var inst_26063 = (state_26084[(8)]);
var inst_26063__$1 = (state_26084[(2)]);
var inst_26064__$1 = cljs.core.nth.call(null,inst_26063__$1,(0),null);
var inst_26065 = cljs.core.nth.call(null,inst_26063__$1,(1),null);
var inst_26066 = (inst_26064__$1 == null);
var state_26084__$1 = (function (){var statearr_26086 = state_26084;
(statearr_26086[(9)] = inst_26065);

(statearr_26086[(7)] = inst_26064__$1);

(statearr_26086[(8)] = inst_26063__$1);

return statearr_26086;
})();
if(cljs.core.truth_(inst_26066)){
var statearr_26087_26107 = state_26084__$1;
(statearr_26087_26107[(1)] = (8));

} else {
var statearr_26088_26108 = state_26084__$1;
(statearr_26088_26108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (1))){
var inst_26053 = cljs.core.vec.call(null,chs);
var inst_26054 = inst_26053;
var state_26084__$1 = (function (){var statearr_26089 = state_26084;
(statearr_26089[(10)] = inst_26054);

return statearr_26089;
})();
var statearr_26090_26109 = state_26084__$1;
(statearr_26090_26109[(2)] = null);

(statearr_26090_26109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (4))){
var inst_26054 = (state_26084[(10)]);
var state_26084__$1 = state_26084;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26084__$1,(7),inst_26054);
} else {
if((state_val_26085 === (6))){
var inst_26080 = (state_26084[(2)]);
var state_26084__$1 = state_26084;
var statearr_26091_26110 = state_26084__$1;
(statearr_26091_26110[(2)] = inst_26080);

(statearr_26091_26110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (3))){
var inst_26082 = (state_26084[(2)]);
var state_26084__$1 = state_26084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26084__$1,inst_26082);
} else {
if((state_val_26085 === (2))){
var inst_26054 = (state_26084[(10)]);
var inst_26056 = cljs.core.count.call(null,inst_26054);
var inst_26057 = (inst_26056 > (0));
var state_26084__$1 = state_26084;
if(cljs.core.truth_(inst_26057)){
var statearr_26093_26111 = state_26084__$1;
(statearr_26093_26111[(1)] = (4));

} else {
var statearr_26094_26112 = state_26084__$1;
(statearr_26094_26112[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (11))){
var inst_26054 = (state_26084[(10)]);
var inst_26073 = (state_26084[(2)]);
var tmp26092 = inst_26054;
var inst_26054__$1 = tmp26092;
var state_26084__$1 = (function (){var statearr_26095 = state_26084;
(statearr_26095[(11)] = inst_26073);

(statearr_26095[(10)] = inst_26054__$1);

return statearr_26095;
})();
var statearr_26096_26113 = state_26084__$1;
(statearr_26096_26113[(2)] = null);

(statearr_26096_26113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (9))){
var inst_26064 = (state_26084[(7)]);
var state_26084__$1 = state_26084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26084__$1,(11),out,inst_26064);
} else {
if((state_val_26085 === (5))){
var inst_26078 = cljs.core.async.close_BANG_.call(null,out);
var state_26084__$1 = state_26084;
var statearr_26097_26114 = state_26084__$1;
(statearr_26097_26114[(2)] = inst_26078);

(statearr_26097_26114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (10))){
var inst_26076 = (state_26084[(2)]);
var state_26084__$1 = state_26084;
var statearr_26098_26115 = state_26084__$1;
(statearr_26098_26115[(2)] = inst_26076);

(statearr_26098_26115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (8))){
var inst_26054 = (state_26084[(10)]);
var inst_26065 = (state_26084[(9)]);
var inst_26064 = (state_26084[(7)]);
var inst_26063 = (state_26084[(8)]);
var inst_26068 = (function (){var cs = inst_26054;
var vec__26059 = inst_26063;
var v = inst_26064;
var c = inst_26065;
return (function (p1__26050_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26050_SHARP_);
});
})();
var inst_26069 = cljs.core.filterv.call(null,inst_26068,inst_26054);
var inst_26054__$1 = inst_26069;
var state_26084__$1 = (function (){var statearr_26099 = state_26084;
(statearr_26099[(10)] = inst_26054__$1);

return statearr_26099;
})();
var statearr_26100_26116 = state_26084__$1;
(statearr_26100_26116[(2)] = null);

(statearr_26100_26116[(1)] = (2));


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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_26101 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26101[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_26101[(1)] = (1));

return statearr_26101;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_26084){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_26084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e26102){if((e26102 instanceof Object)){
var ex__24680__auto__ = e26102;
var statearr_26103_26117 = state_26084;
(statearr_26103_26117[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26118 = state_26084;
state_26084 = G__26118;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_26084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_26084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_26104 = f__24772__auto__.call(null);
(statearr_26104[(6)] = c__24771__auto___26106);

return statearr_26104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
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
var G__26120 = arguments.length;
switch (G__26120) {
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
var c__24771__auto___26165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_26144){
var state_val_26145 = (state_26144[(1)]);
if((state_val_26145 === (7))){
var inst_26126 = (state_26144[(7)]);
var inst_26126__$1 = (state_26144[(2)]);
var inst_26127 = (inst_26126__$1 == null);
var inst_26128 = cljs.core.not.call(null,inst_26127);
var state_26144__$1 = (function (){var statearr_26146 = state_26144;
(statearr_26146[(7)] = inst_26126__$1);

return statearr_26146;
})();
if(inst_26128){
var statearr_26147_26166 = state_26144__$1;
(statearr_26147_26166[(1)] = (8));

} else {
var statearr_26148_26167 = state_26144__$1;
(statearr_26148_26167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26145 === (1))){
var inst_26121 = (0);
var state_26144__$1 = (function (){var statearr_26149 = state_26144;
(statearr_26149[(8)] = inst_26121);

return statearr_26149;
})();
var statearr_26150_26168 = state_26144__$1;
(statearr_26150_26168[(2)] = null);

(statearr_26150_26168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26145 === (4))){
var state_26144__$1 = state_26144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26144__$1,(7),ch);
} else {
if((state_val_26145 === (6))){
var inst_26139 = (state_26144[(2)]);
var state_26144__$1 = state_26144;
var statearr_26151_26169 = state_26144__$1;
(statearr_26151_26169[(2)] = inst_26139);

(statearr_26151_26169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26145 === (3))){
var inst_26141 = (state_26144[(2)]);
var inst_26142 = cljs.core.async.close_BANG_.call(null,out);
var state_26144__$1 = (function (){var statearr_26152 = state_26144;
(statearr_26152[(9)] = inst_26141);

return statearr_26152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26144__$1,inst_26142);
} else {
if((state_val_26145 === (2))){
var inst_26121 = (state_26144[(8)]);
var inst_26123 = (inst_26121 < n);
var state_26144__$1 = state_26144;
if(cljs.core.truth_(inst_26123)){
var statearr_26153_26170 = state_26144__$1;
(statearr_26153_26170[(1)] = (4));

} else {
var statearr_26154_26171 = state_26144__$1;
(statearr_26154_26171[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26145 === (11))){
var inst_26121 = (state_26144[(8)]);
var inst_26131 = (state_26144[(2)]);
var inst_26132 = (inst_26121 + (1));
var inst_26121__$1 = inst_26132;
var state_26144__$1 = (function (){var statearr_26155 = state_26144;
(statearr_26155[(10)] = inst_26131);

(statearr_26155[(8)] = inst_26121__$1);

return statearr_26155;
})();
var statearr_26156_26172 = state_26144__$1;
(statearr_26156_26172[(2)] = null);

(statearr_26156_26172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26145 === (9))){
var state_26144__$1 = state_26144;
var statearr_26157_26173 = state_26144__$1;
(statearr_26157_26173[(2)] = null);

(statearr_26157_26173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26145 === (5))){
var state_26144__$1 = state_26144;
var statearr_26158_26174 = state_26144__$1;
(statearr_26158_26174[(2)] = null);

(statearr_26158_26174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26145 === (10))){
var inst_26136 = (state_26144[(2)]);
var state_26144__$1 = state_26144;
var statearr_26159_26175 = state_26144__$1;
(statearr_26159_26175[(2)] = inst_26136);

(statearr_26159_26175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26145 === (8))){
var inst_26126 = (state_26144[(7)]);
var state_26144__$1 = state_26144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26144__$1,(11),out,inst_26126);
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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_26160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26160[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_26160[(1)] = (1));

return statearr_26160;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_26144){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_26144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e26161){if((e26161 instanceof Object)){
var ex__24680__auto__ = e26161;
var statearr_26162_26176 = state_26144;
(statearr_26162_26176[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26177 = state_26144;
state_26144 = G__26177;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_26144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_26144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_26163 = f__24772__auto__.call(null);
(statearr_26163[(6)] = c__24771__auto___26165);

return statearr_26163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26179 = (function (f,ch,meta26180){
this.f = f;
this.ch = ch;
this.meta26180 = meta26180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26181,meta26180__$1){
var self__ = this;
var _26181__$1 = this;
return (new cljs.core.async.t_cljs$core$async26179(self__.f,self__.ch,meta26180__$1));
}));

(cljs.core.async.t_cljs$core$async26179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26181){
var self__ = this;
var _26181__$1 = this;
return self__.meta26180;
}));

(cljs.core.async.t_cljs$core$async26179.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26179.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26179.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26182 = (function (f,ch,meta26180,_,fn1,meta26183){
this.f = f;
this.ch = ch;
this.meta26180 = meta26180;
this._ = _;
this.fn1 = fn1;
this.meta26183 = meta26183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26184,meta26183__$1){
var self__ = this;
var _26184__$1 = this;
return (new cljs.core.async.t_cljs$core$async26182(self__.f,self__.ch,self__.meta26180,self__._,self__.fn1,meta26183__$1));
}));

(cljs.core.async.t_cljs$core$async26182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26184){
var self__ = this;
var _26184__$1 = this;
return self__.meta26183;
}));

(cljs.core.async.t_cljs$core$async26182.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__26178_SHARP_){
return f1.call(null,(((p1__26178_SHARP_ == null))?null:self__.f.call(null,p1__26178_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async26182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26180","meta26180",2106726757,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26179","cljs.core.async/t_cljs$core$async26179",513294341,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26183","meta26183",-195755281,null)], null);
}));

(cljs.core.async.t_cljs$core$async26182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26182");

(cljs.core.async.t_cljs$core$async26182.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26182.
 */
cljs.core.async.__GT_t_cljs$core$async26182 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26182(f__$1,ch__$1,meta26180__$1,___$2,fn1__$1,meta26183){
return (new cljs.core.async.t_cljs$core$async26182(f__$1,ch__$1,meta26180__$1,___$2,fn1__$1,meta26183));
});

}

return (new cljs.core.async.t_cljs$core$async26182(self__.f,self__.ch,self__.meta26180,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async26179.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26180","meta26180",2106726757,null)], null);
}));

(cljs.core.async.t_cljs$core$async26179.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26179");

(cljs.core.async.t_cljs$core$async26179.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26179");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26179.
 */
cljs.core.async.__GT_t_cljs$core$async26179 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26179(f__$1,ch__$1,meta26180){
return (new cljs.core.async.t_cljs$core$async26179(f__$1,ch__$1,meta26180));
});

}

return (new cljs.core.async.t_cljs$core$async26179(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26185 = (function (f,ch,meta26186){
this.f = f;
this.ch = ch;
this.meta26186 = meta26186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26187,meta26186__$1){
var self__ = this;
var _26187__$1 = this;
return (new cljs.core.async.t_cljs$core$async26185(self__.f,self__.ch,meta26186__$1));
}));

(cljs.core.async.t_cljs$core$async26185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26187){
var self__ = this;
var _26187__$1 = this;
return self__.meta26186;
}));

(cljs.core.async.t_cljs$core$async26185.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26185.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26185.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26185.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26185.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26185.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async26185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26186","meta26186",-477930451,null)], null);
}));

(cljs.core.async.t_cljs$core$async26185.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26185");

(cljs.core.async.t_cljs$core$async26185.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26185");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26185.
 */
cljs.core.async.__GT_t_cljs$core$async26185 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26185(f__$1,ch__$1,meta26186){
return (new cljs.core.async.t_cljs$core$async26185(f__$1,ch__$1,meta26186));
});

}

return (new cljs.core.async.t_cljs$core$async26185(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26188 = (function (p,ch,meta26189){
this.p = p;
this.ch = ch;
this.meta26189 = meta26189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26190,meta26189__$1){
var self__ = this;
var _26190__$1 = this;
return (new cljs.core.async.t_cljs$core$async26188(self__.p,self__.ch,meta26189__$1));
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26190){
var self__ = this;
var _26190__$1 = this;
return self__.meta26189;
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26189","meta26189",-27392496,null)], null);
}));

(cljs.core.async.t_cljs$core$async26188.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26188");

(cljs.core.async.t_cljs$core$async26188.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async26188");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26188.
 */
cljs.core.async.__GT_t_cljs$core$async26188 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26188(p__$1,ch__$1,meta26189){
return (new cljs.core.async.t_cljs$core$async26188(p__$1,ch__$1,meta26189));
});

}

return (new cljs.core.async.t_cljs$core$async26188(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26192 = arguments.length;
switch (G__26192) {
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
var c__24771__auto___26232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_26213){
var state_val_26214 = (state_26213[(1)]);
if((state_val_26214 === (7))){
var inst_26209 = (state_26213[(2)]);
var state_26213__$1 = state_26213;
var statearr_26215_26233 = state_26213__$1;
(statearr_26215_26233[(2)] = inst_26209);

(statearr_26215_26233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (1))){
var state_26213__$1 = state_26213;
var statearr_26216_26234 = state_26213__$1;
(statearr_26216_26234[(2)] = null);

(statearr_26216_26234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (4))){
var inst_26195 = (state_26213[(7)]);
var inst_26195__$1 = (state_26213[(2)]);
var inst_26196 = (inst_26195__$1 == null);
var state_26213__$1 = (function (){var statearr_26217 = state_26213;
(statearr_26217[(7)] = inst_26195__$1);

return statearr_26217;
})();
if(cljs.core.truth_(inst_26196)){
var statearr_26218_26235 = state_26213__$1;
(statearr_26218_26235[(1)] = (5));

} else {
var statearr_26219_26236 = state_26213__$1;
(statearr_26219_26236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (6))){
var inst_26195 = (state_26213[(7)]);
var inst_26200 = p.call(null,inst_26195);
var state_26213__$1 = state_26213;
if(cljs.core.truth_(inst_26200)){
var statearr_26220_26237 = state_26213__$1;
(statearr_26220_26237[(1)] = (8));

} else {
var statearr_26221_26238 = state_26213__$1;
(statearr_26221_26238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (3))){
var inst_26211 = (state_26213[(2)]);
var state_26213__$1 = state_26213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26213__$1,inst_26211);
} else {
if((state_val_26214 === (2))){
var state_26213__$1 = state_26213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26213__$1,(4),ch);
} else {
if((state_val_26214 === (11))){
var inst_26203 = (state_26213[(2)]);
var state_26213__$1 = state_26213;
var statearr_26222_26239 = state_26213__$1;
(statearr_26222_26239[(2)] = inst_26203);

(statearr_26222_26239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (9))){
var state_26213__$1 = state_26213;
var statearr_26223_26240 = state_26213__$1;
(statearr_26223_26240[(2)] = null);

(statearr_26223_26240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (5))){
var inst_26198 = cljs.core.async.close_BANG_.call(null,out);
var state_26213__$1 = state_26213;
var statearr_26224_26241 = state_26213__$1;
(statearr_26224_26241[(2)] = inst_26198);

(statearr_26224_26241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (10))){
var inst_26206 = (state_26213[(2)]);
var state_26213__$1 = (function (){var statearr_26225 = state_26213;
(statearr_26225[(8)] = inst_26206);

return statearr_26225;
})();
var statearr_26226_26242 = state_26213__$1;
(statearr_26226_26242[(2)] = null);

(statearr_26226_26242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26214 === (8))){
var inst_26195 = (state_26213[(7)]);
var state_26213__$1 = state_26213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26213__$1,(11),out,inst_26195);
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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_26227 = [null,null,null,null,null,null,null,null,null];
(statearr_26227[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_26227[(1)] = (1));

return statearr_26227;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_26213){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_26213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e26228){if((e26228 instanceof Object)){
var ex__24680__auto__ = e26228;
var statearr_26229_26243 = state_26213;
(statearr_26229_26243[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26244 = state_26213;
state_26213 = G__26244;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_26213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_26213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_26230 = f__24772__auto__.call(null);
(statearr_26230[(6)] = c__24771__auto___26232);

return statearr_26230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26246 = arguments.length;
switch (G__26246) {
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
var c__24771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_26309){
var state_val_26310 = (state_26309[(1)]);
if((state_val_26310 === (7))){
var inst_26305 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26311_26349 = state_26309__$1;
(statearr_26311_26349[(2)] = inst_26305);

(statearr_26311_26349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (20))){
var inst_26275 = (state_26309[(7)]);
var inst_26286 = (state_26309[(2)]);
var inst_26287 = cljs.core.next.call(null,inst_26275);
var inst_26261 = inst_26287;
var inst_26262 = null;
var inst_26263 = (0);
var inst_26264 = (0);
var state_26309__$1 = (function (){var statearr_26312 = state_26309;
(statearr_26312[(8)] = inst_26262);

(statearr_26312[(9)] = inst_26286);

(statearr_26312[(10)] = inst_26261);

(statearr_26312[(11)] = inst_26263);

(statearr_26312[(12)] = inst_26264);

return statearr_26312;
})();
var statearr_26313_26350 = state_26309__$1;
(statearr_26313_26350[(2)] = null);

(statearr_26313_26350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (1))){
var state_26309__$1 = state_26309;
var statearr_26314_26351 = state_26309__$1;
(statearr_26314_26351[(2)] = null);

(statearr_26314_26351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (4))){
var inst_26250 = (state_26309[(13)]);
var inst_26250__$1 = (state_26309[(2)]);
var inst_26251 = (inst_26250__$1 == null);
var state_26309__$1 = (function (){var statearr_26315 = state_26309;
(statearr_26315[(13)] = inst_26250__$1);

return statearr_26315;
})();
if(cljs.core.truth_(inst_26251)){
var statearr_26316_26352 = state_26309__$1;
(statearr_26316_26352[(1)] = (5));

} else {
var statearr_26317_26353 = state_26309__$1;
(statearr_26317_26353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (15))){
var state_26309__$1 = state_26309;
var statearr_26321_26354 = state_26309__$1;
(statearr_26321_26354[(2)] = null);

(statearr_26321_26354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (21))){
var state_26309__$1 = state_26309;
var statearr_26322_26355 = state_26309__$1;
(statearr_26322_26355[(2)] = null);

(statearr_26322_26355[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (13))){
var inst_26262 = (state_26309[(8)]);
var inst_26261 = (state_26309[(10)]);
var inst_26263 = (state_26309[(11)]);
var inst_26264 = (state_26309[(12)]);
var inst_26271 = (state_26309[(2)]);
var inst_26272 = (inst_26264 + (1));
var tmp26318 = inst_26262;
var tmp26319 = inst_26261;
var tmp26320 = inst_26263;
var inst_26261__$1 = tmp26319;
var inst_26262__$1 = tmp26318;
var inst_26263__$1 = tmp26320;
var inst_26264__$1 = inst_26272;
var state_26309__$1 = (function (){var statearr_26323 = state_26309;
(statearr_26323[(8)] = inst_26262__$1);

(statearr_26323[(10)] = inst_26261__$1);

(statearr_26323[(11)] = inst_26263__$1);

(statearr_26323[(12)] = inst_26264__$1);

(statearr_26323[(14)] = inst_26271);

return statearr_26323;
})();
var statearr_26324_26356 = state_26309__$1;
(statearr_26324_26356[(2)] = null);

(statearr_26324_26356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (22))){
var state_26309__$1 = state_26309;
var statearr_26325_26357 = state_26309__$1;
(statearr_26325_26357[(2)] = null);

(statearr_26325_26357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (6))){
var inst_26250 = (state_26309[(13)]);
var inst_26259 = f.call(null,inst_26250);
var inst_26260 = cljs.core.seq.call(null,inst_26259);
var inst_26261 = inst_26260;
var inst_26262 = null;
var inst_26263 = (0);
var inst_26264 = (0);
var state_26309__$1 = (function (){var statearr_26326 = state_26309;
(statearr_26326[(8)] = inst_26262);

(statearr_26326[(10)] = inst_26261);

(statearr_26326[(11)] = inst_26263);

(statearr_26326[(12)] = inst_26264);

return statearr_26326;
})();
var statearr_26327_26358 = state_26309__$1;
(statearr_26327_26358[(2)] = null);

(statearr_26327_26358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (17))){
var inst_26275 = (state_26309[(7)]);
var inst_26279 = cljs.core.chunk_first.call(null,inst_26275);
var inst_26280 = cljs.core.chunk_rest.call(null,inst_26275);
var inst_26281 = cljs.core.count.call(null,inst_26279);
var inst_26261 = inst_26280;
var inst_26262 = inst_26279;
var inst_26263 = inst_26281;
var inst_26264 = (0);
var state_26309__$1 = (function (){var statearr_26328 = state_26309;
(statearr_26328[(8)] = inst_26262);

(statearr_26328[(10)] = inst_26261);

(statearr_26328[(11)] = inst_26263);

(statearr_26328[(12)] = inst_26264);

return statearr_26328;
})();
var statearr_26329_26359 = state_26309__$1;
(statearr_26329_26359[(2)] = null);

(statearr_26329_26359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (3))){
var inst_26307 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26309__$1,inst_26307);
} else {
if((state_val_26310 === (12))){
var inst_26295 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26330_26360 = state_26309__$1;
(statearr_26330_26360[(2)] = inst_26295);

(statearr_26330_26360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (2))){
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26309__$1,(4),in$);
} else {
if((state_val_26310 === (23))){
var inst_26303 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26331_26361 = state_26309__$1;
(statearr_26331_26361[(2)] = inst_26303);

(statearr_26331_26361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (19))){
var inst_26290 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26332_26362 = state_26309__$1;
(statearr_26332_26362[(2)] = inst_26290);

(statearr_26332_26362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (11))){
var inst_26275 = (state_26309[(7)]);
var inst_26261 = (state_26309[(10)]);
var inst_26275__$1 = cljs.core.seq.call(null,inst_26261);
var state_26309__$1 = (function (){var statearr_26333 = state_26309;
(statearr_26333[(7)] = inst_26275__$1);

return statearr_26333;
})();
if(inst_26275__$1){
var statearr_26334_26363 = state_26309__$1;
(statearr_26334_26363[(1)] = (14));

} else {
var statearr_26335_26364 = state_26309__$1;
(statearr_26335_26364[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (9))){
var inst_26297 = (state_26309[(2)]);
var inst_26298 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26309__$1 = (function (){var statearr_26336 = state_26309;
(statearr_26336[(15)] = inst_26297);

return statearr_26336;
})();
if(cljs.core.truth_(inst_26298)){
var statearr_26337_26365 = state_26309__$1;
(statearr_26337_26365[(1)] = (21));

} else {
var statearr_26338_26366 = state_26309__$1;
(statearr_26338_26366[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (5))){
var inst_26253 = cljs.core.async.close_BANG_.call(null,out);
var state_26309__$1 = state_26309;
var statearr_26339_26367 = state_26309__$1;
(statearr_26339_26367[(2)] = inst_26253);

(statearr_26339_26367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (14))){
var inst_26275 = (state_26309[(7)]);
var inst_26277 = cljs.core.chunked_seq_QMARK_.call(null,inst_26275);
var state_26309__$1 = state_26309;
if(inst_26277){
var statearr_26340_26368 = state_26309__$1;
(statearr_26340_26368[(1)] = (17));

} else {
var statearr_26341_26369 = state_26309__$1;
(statearr_26341_26369[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (16))){
var inst_26293 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26342_26370 = state_26309__$1;
(statearr_26342_26370[(2)] = inst_26293);

(statearr_26342_26370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (10))){
var inst_26262 = (state_26309[(8)]);
var inst_26264 = (state_26309[(12)]);
var inst_26269 = cljs.core._nth.call(null,inst_26262,inst_26264);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26309__$1,(13),out,inst_26269);
} else {
if((state_val_26310 === (18))){
var inst_26275 = (state_26309[(7)]);
var inst_26284 = cljs.core.first.call(null,inst_26275);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26309__$1,(20),out,inst_26284);
} else {
if((state_val_26310 === (8))){
var inst_26263 = (state_26309[(11)]);
var inst_26264 = (state_26309[(12)]);
var inst_26266 = (inst_26264 < inst_26263);
var inst_26267 = inst_26266;
var state_26309__$1 = state_26309;
if(cljs.core.truth_(inst_26267)){
var statearr_26343_26371 = state_26309__$1;
(statearr_26343_26371[(1)] = (10));

} else {
var statearr_26344_26372 = state_26309__$1;
(statearr_26344_26372[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__24677__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24677__auto____0 = (function (){
var statearr_26345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26345[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24677__auto__);

(statearr_26345[(1)] = (1));

return statearr_26345;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24677__auto____1 = (function (state_26309){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_26309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e26346){if((e26346 instanceof Object)){
var ex__24680__auto__ = e26346;
var statearr_26347_26373 = state_26309;
(statearr_26347_26373[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26374 = state_26309;
state_26309 = G__26374;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24677__auto__ = function(state_26309){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24677__auto____1.call(this,state_26309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24677__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24677__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_26348 = f__24772__auto__.call(null);
(statearr_26348[(6)] = c__24771__auto__);

return statearr_26348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));

return c__24771__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26376 = arguments.length;
switch (G__26376) {
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
var G__26379 = arguments.length;
switch (G__26379) {
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
var G__26382 = arguments.length;
switch (G__26382) {
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
var c__24771__auto___26429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_26406){
var state_val_26407 = (state_26406[(1)]);
if((state_val_26407 === (7))){
var inst_26401 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26408_26430 = state_26406__$1;
(statearr_26408_26430[(2)] = inst_26401);

(statearr_26408_26430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (1))){
var inst_26383 = null;
var state_26406__$1 = (function (){var statearr_26409 = state_26406;
(statearr_26409[(7)] = inst_26383);

return statearr_26409;
})();
var statearr_26410_26431 = state_26406__$1;
(statearr_26410_26431[(2)] = null);

(statearr_26410_26431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (4))){
var inst_26386 = (state_26406[(8)]);
var inst_26386__$1 = (state_26406[(2)]);
var inst_26387 = (inst_26386__$1 == null);
var inst_26388 = cljs.core.not.call(null,inst_26387);
var state_26406__$1 = (function (){var statearr_26411 = state_26406;
(statearr_26411[(8)] = inst_26386__$1);

return statearr_26411;
})();
if(inst_26388){
var statearr_26412_26432 = state_26406__$1;
(statearr_26412_26432[(1)] = (5));

} else {
var statearr_26413_26433 = state_26406__$1;
(statearr_26413_26433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (6))){
var state_26406__$1 = state_26406;
var statearr_26414_26434 = state_26406__$1;
(statearr_26414_26434[(2)] = null);

(statearr_26414_26434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (3))){
var inst_26403 = (state_26406[(2)]);
var inst_26404 = cljs.core.async.close_BANG_.call(null,out);
var state_26406__$1 = (function (){var statearr_26415 = state_26406;
(statearr_26415[(9)] = inst_26403);

return statearr_26415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26406__$1,inst_26404);
} else {
if((state_val_26407 === (2))){
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26406__$1,(4),ch);
} else {
if((state_val_26407 === (11))){
var inst_26386 = (state_26406[(8)]);
var inst_26395 = (state_26406[(2)]);
var inst_26383 = inst_26386;
var state_26406__$1 = (function (){var statearr_26416 = state_26406;
(statearr_26416[(7)] = inst_26383);

(statearr_26416[(10)] = inst_26395);

return statearr_26416;
})();
var statearr_26417_26435 = state_26406__$1;
(statearr_26417_26435[(2)] = null);

(statearr_26417_26435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (9))){
var inst_26386 = (state_26406[(8)]);
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26406__$1,(11),out,inst_26386);
} else {
if((state_val_26407 === (5))){
var inst_26386 = (state_26406[(8)]);
var inst_26383 = (state_26406[(7)]);
var inst_26390 = cljs.core._EQ_.call(null,inst_26386,inst_26383);
var state_26406__$1 = state_26406;
if(inst_26390){
var statearr_26419_26436 = state_26406__$1;
(statearr_26419_26436[(1)] = (8));

} else {
var statearr_26420_26437 = state_26406__$1;
(statearr_26420_26437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (10))){
var inst_26398 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26421_26438 = state_26406__$1;
(statearr_26421_26438[(2)] = inst_26398);

(statearr_26421_26438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (8))){
var inst_26383 = (state_26406[(7)]);
var tmp26418 = inst_26383;
var inst_26383__$1 = tmp26418;
var state_26406__$1 = (function (){var statearr_26422 = state_26406;
(statearr_26422[(7)] = inst_26383__$1);

return statearr_26422;
})();
var statearr_26423_26439 = state_26406__$1;
(statearr_26423_26439[(2)] = null);

(statearr_26423_26439[(1)] = (2));


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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_26424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26424[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_26424[(1)] = (1));

return statearr_26424;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_26406){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_26406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e26425){if((e26425 instanceof Object)){
var ex__24680__auto__ = e26425;
var statearr_26426_26440 = state_26406;
(statearr_26426_26440[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26441 = state_26406;
state_26406 = G__26441;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_26406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_26406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_26427 = f__24772__auto__.call(null);
(statearr_26427[(6)] = c__24771__auto___26429);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26443 = arguments.length;
switch (G__26443) {
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
var c__24771__auto___26509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_26481){
var state_val_26482 = (state_26481[(1)]);
if((state_val_26482 === (7))){
var inst_26477 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26483_26510 = state_26481__$1;
(statearr_26483_26510[(2)] = inst_26477);

(statearr_26483_26510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (1))){
var inst_26444 = (new Array(n));
var inst_26445 = inst_26444;
var inst_26446 = (0);
var state_26481__$1 = (function (){var statearr_26484 = state_26481;
(statearr_26484[(7)] = inst_26445);

(statearr_26484[(8)] = inst_26446);

return statearr_26484;
})();
var statearr_26485_26511 = state_26481__$1;
(statearr_26485_26511[(2)] = null);

(statearr_26485_26511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (4))){
var inst_26449 = (state_26481[(9)]);
var inst_26449__$1 = (state_26481[(2)]);
var inst_26450 = (inst_26449__$1 == null);
var inst_26451 = cljs.core.not.call(null,inst_26450);
var state_26481__$1 = (function (){var statearr_26486 = state_26481;
(statearr_26486[(9)] = inst_26449__$1);

return statearr_26486;
})();
if(inst_26451){
var statearr_26487_26512 = state_26481__$1;
(statearr_26487_26512[(1)] = (5));

} else {
var statearr_26488_26513 = state_26481__$1;
(statearr_26488_26513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (15))){
var inst_26471 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26489_26514 = state_26481__$1;
(statearr_26489_26514[(2)] = inst_26471);

(statearr_26489_26514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (13))){
var state_26481__$1 = state_26481;
var statearr_26490_26515 = state_26481__$1;
(statearr_26490_26515[(2)] = null);

(statearr_26490_26515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (6))){
var inst_26446 = (state_26481[(8)]);
var inst_26467 = (inst_26446 > (0));
var state_26481__$1 = state_26481;
if(cljs.core.truth_(inst_26467)){
var statearr_26491_26516 = state_26481__$1;
(statearr_26491_26516[(1)] = (12));

} else {
var statearr_26492_26517 = state_26481__$1;
(statearr_26492_26517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (3))){
var inst_26479 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26481__$1,inst_26479);
} else {
if((state_val_26482 === (12))){
var inst_26445 = (state_26481[(7)]);
var inst_26469 = cljs.core.vec.call(null,inst_26445);
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26481__$1,(15),out,inst_26469);
} else {
if((state_val_26482 === (2))){
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26481__$1,(4),ch);
} else {
if((state_val_26482 === (11))){
var inst_26461 = (state_26481[(2)]);
var inst_26462 = (new Array(n));
var inst_26445 = inst_26462;
var inst_26446 = (0);
var state_26481__$1 = (function (){var statearr_26493 = state_26481;
(statearr_26493[(7)] = inst_26445);

(statearr_26493[(10)] = inst_26461);

(statearr_26493[(8)] = inst_26446);

return statearr_26493;
})();
var statearr_26494_26518 = state_26481__$1;
(statearr_26494_26518[(2)] = null);

(statearr_26494_26518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (9))){
var inst_26445 = (state_26481[(7)]);
var inst_26459 = cljs.core.vec.call(null,inst_26445);
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26481__$1,(11),out,inst_26459);
} else {
if((state_val_26482 === (5))){
var inst_26445 = (state_26481[(7)]);
var inst_26454 = (state_26481[(11)]);
var inst_26449 = (state_26481[(9)]);
var inst_26446 = (state_26481[(8)]);
var inst_26453 = (inst_26445[inst_26446] = inst_26449);
var inst_26454__$1 = (inst_26446 + (1));
var inst_26455 = (inst_26454__$1 < n);
var state_26481__$1 = (function (){var statearr_26495 = state_26481;
(statearr_26495[(11)] = inst_26454__$1);

(statearr_26495[(12)] = inst_26453);

return statearr_26495;
})();
if(cljs.core.truth_(inst_26455)){
var statearr_26496_26519 = state_26481__$1;
(statearr_26496_26519[(1)] = (8));

} else {
var statearr_26497_26520 = state_26481__$1;
(statearr_26497_26520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (14))){
var inst_26474 = (state_26481[(2)]);
var inst_26475 = cljs.core.async.close_BANG_.call(null,out);
var state_26481__$1 = (function (){var statearr_26499 = state_26481;
(statearr_26499[(13)] = inst_26474);

return statearr_26499;
})();
var statearr_26500_26521 = state_26481__$1;
(statearr_26500_26521[(2)] = inst_26475);

(statearr_26500_26521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (10))){
var inst_26465 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26501_26522 = state_26481__$1;
(statearr_26501_26522[(2)] = inst_26465);

(statearr_26501_26522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (8))){
var inst_26445 = (state_26481[(7)]);
var inst_26454 = (state_26481[(11)]);
var tmp26498 = inst_26445;
var inst_26445__$1 = tmp26498;
var inst_26446 = inst_26454;
var state_26481__$1 = (function (){var statearr_26502 = state_26481;
(statearr_26502[(7)] = inst_26445__$1);

(statearr_26502[(8)] = inst_26446);

return statearr_26502;
})();
var statearr_26503_26523 = state_26481__$1;
(statearr_26503_26523[(2)] = null);

(statearr_26503_26523[(1)] = (2));


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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_26504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26504[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_26504[(1)] = (1));

return statearr_26504;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_26481){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_26481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e26505){if((e26505 instanceof Object)){
var ex__24680__auto__ = e26505;
var statearr_26506_26524 = state_26481;
(statearr_26506_26524[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26525 = state_26481;
state_26481 = G__26525;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_26481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_26481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_26507 = f__24772__auto__.call(null);
(statearr_26507[(6)] = c__24771__auto___26509);

return statearr_26507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26527 = arguments.length;
switch (G__26527) {
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
var c__24771__auto___26597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_26569){
var state_val_26570 = (state_26569[(1)]);
if((state_val_26570 === (7))){
var inst_26565 = (state_26569[(2)]);
var state_26569__$1 = state_26569;
var statearr_26571_26598 = state_26569__$1;
(statearr_26571_26598[(2)] = inst_26565);

(statearr_26571_26598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26570 === (1))){
var inst_26528 = [];
var inst_26529 = inst_26528;
var inst_26530 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26569__$1 = (function (){var statearr_26572 = state_26569;
(statearr_26572[(7)] = inst_26530);

(statearr_26572[(8)] = inst_26529);

return statearr_26572;
})();
var statearr_26573_26599 = state_26569__$1;
(statearr_26573_26599[(2)] = null);

(statearr_26573_26599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26570 === (4))){
var inst_26533 = (state_26569[(9)]);
var inst_26533__$1 = (state_26569[(2)]);
var inst_26534 = (inst_26533__$1 == null);
var inst_26535 = cljs.core.not.call(null,inst_26534);
var state_26569__$1 = (function (){var statearr_26574 = state_26569;
(statearr_26574[(9)] = inst_26533__$1);

return statearr_26574;
})();
if(inst_26535){
var statearr_26575_26600 = state_26569__$1;
(statearr_26575_26600[(1)] = (5));

} else {
var statearr_26576_26601 = state_26569__$1;
(statearr_26576_26601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26570 === (15))){
var inst_26559 = (state_26569[(2)]);
var state_26569__$1 = state_26569;
var statearr_26577_26602 = state_26569__$1;
(statearr_26577_26602[(2)] = inst_26559);

(statearr_26577_26602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26570 === (13))){
var state_26569__$1 = state_26569;
var statearr_26578_26603 = state_26569__$1;
(statearr_26578_26603[(2)] = null);

(statearr_26578_26603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26570 === (6))){
var inst_26529 = (state_26569[(8)]);
var inst_26554 = inst_26529.length;
var inst_26555 = (inst_26554 > (0));
var state_26569__$1 = state_26569;
if(cljs.core.truth_(inst_26555)){
var statearr_26579_26604 = state_26569__$1;
(statearr_26579_26604[(1)] = (12));

} else {
var statearr_26580_26605 = state_26569__$1;
(statearr_26580_26605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26570 === (3))){
var inst_26567 = (state_26569[(2)]);
var state_26569__$1 = state_26569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26569__$1,inst_26567);
} else {
if((state_val_26570 === (12))){
var inst_26529 = (state_26569[(8)]);
var inst_26557 = cljs.core.vec.call(null,inst_26529);
var state_26569__$1 = state_26569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26569__$1,(15),out,inst_26557);
} else {
if((state_val_26570 === (2))){
var state_26569__$1 = state_26569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26569__$1,(4),ch);
} else {
if((state_val_26570 === (11))){
var inst_26533 = (state_26569[(9)]);
var inst_26537 = (state_26569[(10)]);
var inst_26547 = (state_26569[(2)]);
var inst_26548 = [];
var inst_26549 = inst_26548.push(inst_26533);
var inst_26529 = inst_26548;
var inst_26530 = inst_26537;
var state_26569__$1 = (function (){var statearr_26581 = state_26569;
(statearr_26581[(7)] = inst_26530);

(statearr_26581[(11)] = inst_26547);

(statearr_26581[(12)] = inst_26549);

(statearr_26581[(8)] = inst_26529);

return statearr_26581;
})();
var statearr_26582_26606 = state_26569__$1;
(statearr_26582_26606[(2)] = null);

(statearr_26582_26606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26570 === (9))){
var inst_26529 = (state_26569[(8)]);
var inst_26545 = cljs.core.vec.call(null,inst_26529);
var state_26569__$1 = state_26569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26569__$1,(11),out,inst_26545);
} else {
if((state_val_26570 === (5))){
var inst_26533 = (state_26569[(9)]);
var inst_26537 = (state_26569[(10)]);
var inst_26530 = (state_26569[(7)]);
var inst_26537__$1 = f.call(null,inst_26533);
var inst_26538 = cljs.core._EQ_.call(null,inst_26537__$1,inst_26530);
var inst_26539 = cljs.core.keyword_identical_QMARK_.call(null,inst_26530,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26540 = ((inst_26538) || (inst_26539));
var state_26569__$1 = (function (){var statearr_26583 = state_26569;
(statearr_26583[(10)] = inst_26537__$1);

return statearr_26583;
})();
if(cljs.core.truth_(inst_26540)){
var statearr_26584_26607 = state_26569__$1;
(statearr_26584_26607[(1)] = (8));

} else {
var statearr_26585_26608 = state_26569__$1;
(statearr_26585_26608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26570 === (14))){
var inst_26562 = (state_26569[(2)]);
var inst_26563 = cljs.core.async.close_BANG_.call(null,out);
var state_26569__$1 = (function (){var statearr_26587 = state_26569;
(statearr_26587[(13)] = inst_26562);

return statearr_26587;
})();
var statearr_26588_26609 = state_26569__$1;
(statearr_26588_26609[(2)] = inst_26563);

(statearr_26588_26609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26570 === (10))){
var inst_26552 = (state_26569[(2)]);
var state_26569__$1 = state_26569;
var statearr_26589_26610 = state_26569__$1;
(statearr_26589_26610[(2)] = inst_26552);

(statearr_26589_26610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26570 === (8))){
var inst_26533 = (state_26569[(9)]);
var inst_26537 = (state_26569[(10)]);
var inst_26529 = (state_26569[(8)]);
var inst_26542 = inst_26529.push(inst_26533);
var tmp26586 = inst_26529;
var inst_26529__$1 = tmp26586;
var inst_26530 = inst_26537;
var state_26569__$1 = (function (){var statearr_26590 = state_26569;
(statearr_26590[(14)] = inst_26542);

(statearr_26590[(7)] = inst_26530);

(statearr_26590[(8)] = inst_26529__$1);

return statearr_26590;
})();
var statearr_26591_26611 = state_26569__$1;
(statearr_26591_26611[(2)] = null);

(statearr_26591_26611[(1)] = (2));


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
var cljs$core$async$state_machine__24677__auto__ = null;
var cljs$core$async$state_machine__24677__auto____0 = (function (){
var statearr_26592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26592[(0)] = cljs$core$async$state_machine__24677__auto__);

(statearr_26592[(1)] = (1));

return statearr_26592;
});
var cljs$core$async$state_machine__24677__auto____1 = (function (state_26569){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_26569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e26593){if((e26593 instanceof Object)){
var ex__24680__auto__ = e26593;
var statearr_26594_26612 = state_26569;
(statearr_26594_26612[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26613 = state_26569;
state_26569 = G__26613;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
cljs$core$async$state_machine__24677__auto__ = function(state_26569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24677__auto____1.call(this,state_26569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24677__auto____0;
cljs$core$async$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24677__auto____1;
return cljs$core$async$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_26595 = f__24772__auto__.call(null);
(statearr_26595[(6)] = c__24771__auto___26597);

return statearr_26595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1720062345572
