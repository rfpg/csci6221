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
var G__24176 = arguments.length;
switch (G__24176) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24177 = (function (f,blockable,meta24178){
this.f = f;
this.blockable = blockable;
this.meta24178 = meta24178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24179,meta24178__$1){
var self__ = this;
var _24179__$1 = this;
return (new cljs.core.async.t_cljs$core$async24177(self__.f,self__.blockable,meta24178__$1));
}));

(cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24179){
var self__ = this;
var _24179__$1 = this;
return self__.meta24178;
}));

(cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24178","meta24178",1050013501,null)], null);
}));

(cljs.core.async.t_cljs$core$async24177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24177");

(cljs.core.async.t_cljs$core$async24177.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24177.
 */
cljs.core.async.__GT_t_cljs$core$async24177 = (function cljs$core$async$__GT_t_cljs$core$async24177(f__$1,blockable__$1,meta24178){
return (new cljs.core.async.t_cljs$core$async24177(f__$1,blockable__$1,meta24178));
});

}

return (new cljs.core.async.t_cljs$core$async24177(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24183 = arguments.length;
switch (G__24183) {
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
var G__24186 = arguments.length;
switch (G__24186) {
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
var G__24189 = arguments.length;
switch (G__24189) {
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
var val_24191 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24191);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_24191);
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
var G__24193 = arguments.length;
switch (G__24193) {
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
var n__4648__auto___24195 = n;
var x_24196 = (0);
while(true){
if((x_24196 < n__4648__auto___24195)){
(a[x_24196] = (0));

var G__24197 = (x_24196 + (1));
x_24196 = G__24197;
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

var G__24198 = (i + (1));
i = G__24198;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24199 = (function (flag,meta24200){
this.flag = flag;
this.meta24200 = meta24200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24201,meta24200__$1){
var self__ = this;
var _24201__$1 = this;
return (new cljs.core.async.t_cljs$core$async24199(self__.flag,meta24200__$1));
}));

(cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24201){
var self__ = this;
var _24201__$1 = this;
return self__.meta24200;
}));

(cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24200","meta24200",855388251,null)], null);
}));

(cljs.core.async.t_cljs$core$async24199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24199");

(cljs.core.async.t_cljs$core$async24199.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24199.
 */
cljs.core.async.__GT_t_cljs$core$async24199 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24199(flag__$1,meta24200){
return (new cljs.core.async.t_cljs$core$async24199(flag__$1,meta24200));
});

}

return (new cljs.core.async.t_cljs$core$async24199(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24202 = (function (flag,cb,meta24203){
this.flag = flag;
this.cb = cb;
this.meta24203 = meta24203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24204,meta24203__$1){
var self__ = this;
var _24204__$1 = this;
return (new cljs.core.async.t_cljs$core$async24202(self__.flag,self__.cb,meta24203__$1));
}));

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24204){
var self__ = this;
var _24204__$1 = this;
return self__.meta24203;
}));

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24203","meta24203",-908665758,null)], null);
}));

(cljs.core.async.t_cljs$core$async24202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24202");

(cljs.core.async.t_cljs$core$async24202.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24202.
 */
cljs.core.async.__GT_t_cljs$core$async24202 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24202(flag__$1,cb__$1,meta24203){
return (new cljs.core.async.t_cljs$core$async24202(flag__$1,cb__$1,meta24203));
});

}

return (new cljs.core.async.t_cljs$core$async24202(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24205_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24205_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24206_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24206_SHARP_,port], null));
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
var G__24207 = (i + (1));
i = G__24207;
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
var len__4771__auto___24212 = arguments.length;
var i__4772__auto___24213 = (0);
while(true){
if((i__4772__auto___24213 < len__4771__auto___24212)){
args__4777__auto__.push((arguments[i__4772__auto___24213]));

var G__24214 = (i__4772__auto___24213 + (1));
i__4772__auto___24213 = G__24214;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24210){
var map__24211 = p__24210;
var map__24211__$1 = cljs.core.__destructure_map.call(null,map__24211);
var opts = map__24211__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24208){
var G__24209 = cljs.core.first.call(null,seq24208);
var seq24208__$1 = cljs.core.next.call(null,seq24208);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24209,seq24208__$1);
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
var G__24216 = arguments.length;
switch (G__24216) {
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
var c__24116__auto___24262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_24240){
var state_val_24241 = (state_24240[(1)]);
if((state_val_24241 === (7))){
var inst_24236 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24242_24263 = state_24240__$1;
(statearr_24242_24263[(2)] = inst_24236);

(statearr_24242_24263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (1))){
var state_24240__$1 = state_24240;
var statearr_24243_24264 = state_24240__$1;
(statearr_24243_24264[(2)] = null);

(statearr_24243_24264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (4))){
var inst_24219 = (state_24240[(7)]);
var inst_24219__$1 = (state_24240[(2)]);
var inst_24220 = (inst_24219__$1 == null);
var state_24240__$1 = (function (){var statearr_24244 = state_24240;
(statearr_24244[(7)] = inst_24219__$1);

return statearr_24244;
})();
if(cljs.core.truth_(inst_24220)){
var statearr_24245_24265 = state_24240__$1;
(statearr_24245_24265[(1)] = (5));

} else {
var statearr_24246_24266 = state_24240__$1;
(statearr_24246_24266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (13))){
var state_24240__$1 = state_24240;
var statearr_24247_24267 = state_24240__$1;
(statearr_24247_24267[(2)] = null);

(statearr_24247_24267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (6))){
var inst_24219 = (state_24240[(7)]);
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24240__$1,(11),to,inst_24219);
} else {
if((state_val_24241 === (3))){
var inst_24238 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24240__$1,inst_24238);
} else {
if((state_val_24241 === (12))){
var state_24240__$1 = state_24240;
var statearr_24248_24268 = state_24240__$1;
(statearr_24248_24268[(2)] = null);

(statearr_24248_24268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (2))){
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24240__$1,(4),from);
} else {
if((state_val_24241 === (11))){
var inst_24229 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
if(cljs.core.truth_(inst_24229)){
var statearr_24249_24269 = state_24240__$1;
(statearr_24249_24269[(1)] = (12));

} else {
var statearr_24250_24270 = state_24240__$1;
(statearr_24250_24270[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (9))){
var state_24240__$1 = state_24240;
var statearr_24251_24271 = state_24240__$1;
(statearr_24251_24271[(2)] = null);

(statearr_24251_24271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (5))){
var state_24240__$1 = state_24240;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24252_24272 = state_24240__$1;
(statearr_24252_24272[(1)] = (8));

} else {
var statearr_24253_24273 = state_24240__$1;
(statearr_24253_24273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (14))){
var inst_24234 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24254_24274 = state_24240__$1;
(statearr_24254_24274[(2)] = inst_24234);

(statearr_24254_24274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (10))){
var inst_24226 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24255_24275 = state_24240__$1;
(statearr_24255_24275[(2)] = inst_24226);

(statearr_24255_24275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (8))){
var inst_24223 = cljs.core.async.close_BANG_.call(null,to);
var state_24240__$1 = state_24240;
var statearr_24256_24276 = state_24240__$1;
(statearr_24256_24276[(2)] = inst_24223);

(statearr_24256_24276[(1)] = (10));


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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_24257 = [null,null,null,null,null,null,null,null];
(statearr_24257[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_24257[(1)] = (1));

return statearr_24257;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_24240){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24258){if((e24258 instanceof Object)){
var ex__24025__auto__ = e24258;
var statearr_24259_24277 = state_24240;
(statearr_24259_24277[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24278 = state_24240;
state_24240 = G__24278;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_24240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_24240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_24260 = f__24117__auto__.call(null);
(statearr_24260[(6)] = c__24116__auto___24262);

return statearr_24260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
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
var process = (function (p__24279){
var vec__24280 = p__24279;
var v = cljs.core.nth.call(null,vec__24280,(0),null);
var p = cljs.core.nth.call(null,vec__24280,(1),null);
var job = vec__24280;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24116__auto___24451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_24287){
var state_val_24288 = (state_24287[(1)]);
if((state_val_24288 === (1))){
var state_24287__$1 = state_24287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24287__$1,(2),res,v);
} else {
if((state_val_24288 === (2))){
var inst_24284 = (state_24287[(2)]);
var inst_24285 = cljs.core.async.close_BANG_.call(null,res);
var state_24287__$1 = (function (){var statearr_24289 = state_24287;
(statearr_24289[(7)] = inst_24284);

return statearr_24289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24287__$1,inst_24285);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_24290 = [null,null,null,null,null,null,null,null];
(statearr_24290[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__);

(statearr_24290[(1)] = (1));

return statearr_24290;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1 = (function (state_24287){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24291){if((e24291 instanceof Object)){
var ex__24025__auto__ = e24291;
var statearr_24292_24452 = state_24287;
(statearr_24292_24452[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24453 = state_24287;
state_24287 = G__24453;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = function(state_24287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1.call(this,state_24287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_24293 = f__24117__auto__.call(null);
(statearr_24293[(6)] = c__24116__auto___24451);

return statearr_24293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__24294){
var vec__24295 = p__24294;
var v = cljs.core.nth.call(null,vec__24295,(0),null);
var p = cljs.core.nth.call(null,vec__24295,(1),null);
var job = vec__24295;
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
var n__4648__auto___24454 = n;
var __24455 = (0);
while(true){
if((__24455 < n__4648__auto___24454)){
var G__24298_24456 = type;
var G__24298_24457__$1 = (((G__24298_24456 instanceof cljs.core.Keyword))?G__24298_24456.fqn:null);
switch (G__24298_24457__$1) {
case "compute":
var c__24116__auto___24459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24455,c__24116__auto___24459,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async){
return (function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = ((function (__24455,c__24116__auto___24459,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async){
return (function (state_24311){
var state_val_24312 = (state_24311[(1)]);
if((state_val_24312 === (1))){
var state_24311__$1 = state_24311;
var statearr_24313_24460 = state_24311__$1;
(statearr_24313_24460[(2)] = null);

(statearr_24313_24460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (2))){
var state_24311__$1 = state_24311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24311__$1,(4),jobs);
} else {
if((state_val_24312 === (3))){
var inst_24309 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24311__$1,inst_24309);
} else {
if((state_val_24312 === (4))){
var inst_24301 = (state_24311[(2)]);
var inst_24302 = process.call(null,inst_24301);
var state_24311__$1 = state_24311;
if(cljs.core.truth_(inst_24302)){
var statearr_24314_24461 = state_24311__$1;
(statearr_24314_24461[(1)] = (5));

} else {
var statearr_24315_24462 = state_24311__$1;
(statearr_24315_24462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (5))){
var state_24311__$1 = state_24311;
var statearr_24316_24463 = state_24311__$1;
(statearr_24316_24463[(2)] = null);

(statearr_24316_24463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (6))){
var state_24311__$1 = state_24311;
var statearr_24317_24464 = state_24311__$1;
(statearr_24317_24464[(2)] = null);

(statearr_24317_24464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (7))){
var inst_24307 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
var statearr_24318_24465 = state_24311__$1;
(statearr_24318_24465[(2)] = inst_24307);

(statearr_24318_24465[(1)] = (3));


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
});})(__24455,c__24116__auto___24459,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async))
;
return ((function (__24455,switch__24021__auto__,c__24116__auto___24459,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_24319 = [null,null,null,null,null,null,null];
(statearr_24319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__);

(statearr_24319[(1)] = (1));

return statearr_24319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1 = (function (state_24311){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24320){if((e24320 instanceof Object)){
var ex__24025__auto__ = e24320;
var statearr_24321_24466 = state_24311;
(statearr_24321_24466[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24467 = state_24311;
state_24311 = G__24467;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = function(state_24311){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1.call(this,state_24311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__;
})()
;})(__24455,switch__24021__auto__,c__24116__auto___24459,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async))
})();
var state__24118__auto__ = (function (){var statearr_24322 = f__24117__auto__.call(null);
(statearr_24322[(6)] = c__24116__auto___24459);

return statearr_24322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
});})(__24455,c__24116__auto___24459,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async))
);


break;
case "async":
var c__24116__auto___24468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24455,c__24116__auto___24468,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async){
return (function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = ((function (__24455,c__24116__auto___24468,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async){
return (function (state_24335){
var state_val_24336 = (state_24335[(1)]);
if((state_val_24336 === (1))){
var state_24335__$1 = state_24335;
var statearr_24337_24469 = state_24335__$1;
(statearr_24337_24469[(2)] = null);

(statearr_24337_24469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (2))){
var state_24335__$1 = state_24335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24335__$1,(4),jobs);
} else {
if((state_val_24336 === (3))){
var inst_24333 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24335__$1,inst_24333);
} else {
if((state_val_24336 === (4))){
var inst_24325 = (state_24335[(2)]);
var inst_24326 = async.call(null,inst_24325);
var state_24335__$1 = state_24335;
if(cljs.core.truth_(inst_24326)){
var statearr_24338_24470 = state_24335__$1;
(statearr_24338_24470[(1)] = (5));

} else {
var statearr_24339_24471 = state_24335__$1;
(statearr_24339_24471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (5))){
var state_24335__$1 = state_24335;
var statearr_24340_24472 = state_24335__$1;
(statearr_24340_24472[(2)] = null);

(statearr_24340_24472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (6))){
var state_24335__$1 = state_24335;
var statearr_24341_24473 = state_24335__$1;
(statearr_24341_24473[(2)] = null);

(statearr_24341_24473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (7))){
var inst_24331 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
var statearr_24342_24474 = state_24335__$1;
(statearr_24342_24474[(2)] = inst_24331);

(statearr_24342_24474[(1)] = (3));


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
});})(__24455,c__24116__auto___24468,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async))
;
return ((function (__24455,switch__24021__auto__,c__24116__auto___24468,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_24343 = [null,null,null,null,null,null,null];
(statearr_24343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__);

(statearr_24343[(1)] = (1));

return statearr_24343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1 = (function (state_24335){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24344){if((e24344 instanceof Object)){
var ex__24025__auto__ = e24344;
var statearr_24345_24475 = state_24335;
(statearr_24345_24475[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24476 = state_24335;
state_24335 = G__24476;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = function(state_24335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1.call(this,state_24335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__;
})()
;})(__24455,switch__24021__auto__,c__24116__auto___24468,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async))
})();
var state__24118__auto__ = (function (){var statearr_24346 = f__24117__auto__.call(null);
(statearr_24346[(6)] = c__24116__auto___24468);

return statearr_24346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
});})(__24455,c__24116__auto___24468,G__24298_24456,G__24298_24457__$1,n__4648__auto___24454,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24298_24457__$1)].join('')));

}

var G__24477 = (__24455 + (1));
__24455 = G__24477;
continue;
} else {
}
break;
}

var c__24116__auto___24478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_24368){
var state_val_24369 = (state_24368[(1)]);
if((state_val_24369 === (7))){
var inst_24364 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24370_24479 = state_24368__$1;
(statearr_24370_24479[(2)] = inst_24364);

(statearr_24370_24479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (1))){
var state_24368__$1 = state_24368;
var statearr_24371_24480 = state_24368__$1;
(statearr_24371_24480[(2)] = null);

(statearr_24371_24480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (4))){
var inst_24349 = (state_24368[(7)]);
var inst_24349__$1 = (state_24368[(2)]);
var inst_24350 = (inst_24349__$1 == null);
var state_24368__$1 = (function (){var statearr_24372 = state_24368;
(statearr_24372[(7)] = inst_24349__$1);

return statearr_24372;
})();
if(cljs.core.truth_(inst_24350)){
var statearr_24373_24481 = state_24368__$1;
(statearr_24373_24481[(1)] = (5));

} else {
var statearr_24374_24482 = state_24368__$1;
(statearr_24374_24482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (6))){
var inst_24349 = (state_24368[(7)]);
var inst_24354 = (state_24368[(8)]);
var inst_24354__$1 = cljs.core.async.chan.call(null,(1));
var inst_24355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24356 = [inst_24349,inst_24354__$1];
var inst_24357 = (new cljs.core.PersistentVector(null,2,(5),inst_24355,inst_24356,null));
var state_24368__$1 = (function (){var statearr_24375 = state_24368;
(statearr_24375[(8)] = inst_24354__$1);

return statearr_24375;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24368__$1,(8),jobs,inst_24357);
} else {
if((state_val_24369 === (3))){
var inst_24366 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24368__$1,inst_24366);
} else {
if((state_val_24369 === (2))){
var state_24368__$1 = state_24368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24368__$1,(4),from);
} else {
if((state_val_24369 === (9))){
var inst_24361 = (state_24368[(2)]);
var state_24368__$1 = (function (){var statearr_24376 = state_24368;
(statearr_24376[(9)] = inst_24361);

return statearr_24376;
})();
var statearr_24377_24483 = state_24368__$1;
(statearr_24377_24483[(2)] = null);

(statearr_24377_24483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (5))){
var inst_24352 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24368__$1 = state_24368;
var statearr_24378_24484 = state_24368__$1;
(statearr_24378_24484[(2)] = inst_24352);

(statearr_24378_24484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (8))){
var inst_24354 = (state_24368[(8)]);
var inst_24359 = (state_24368[(2)]);
var state_24368__$1 = (function (){var statearr_24379 = state_24368;
(statearr_24379[(10)] = inst_24359);

return statearr_24379;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24368__$1,(9),results,inst_24354);
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
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_24380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__);

(statearr_24380[(1)] = (1));

return statearr_24380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1 = (function (state_24368){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24381){if((e24381 instanceof Object)){
var ex__24025__auto__ = e24381;
var statearr_24382_24485 = state_24368;
(statearr_24382_24485[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24486 = state_24368;
state_24368 = G__24486;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = function(state_24368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1.call(this,state_24368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_24383 = f__24117__auto__.call(null);
(statearr_24383[(6)] = c__24116__auto___24478);

return statearr_24383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));


var c__24116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_24421){
var state_val_24422 = (state_24421[(1)]);
if((state_val_24422 === (7))){
var inst_24417 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24423_24487 = state_24421__$1;
(statearr_24423_24487[(2)] = inst_24417);

(statearr_24423_24487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (20))){
var state_24421__$1 = state_24421;
var statearr_24424_24488 = state_24421__$1;
(statearr_24424_24488[(2)] = null);

(statearr_24424_24488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (1))){
var state_24421__$1 = state_24421;
var statearr_24425_24489 = state_24421__$1;
(statearr_24425_24489[(2)] = null);

(statearr_24425_24489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (4))){
var inst_24386 = (state_24421[(7)]);
var inst_24386__$1 = (state_24421[(2)]);
var inst_24387 = (inst_24386__$1 == null);
var state_24421__$1 = (function (){var statearr_24426 = state_24421;
(statearr_24426[(7)] = inst_24386__$1);

return statearr_24426;
})();
if(cljs.core.truth_(inst_24387)){
var statearr_24427_24490 = state_24421__$1;
(statearr_24427_24490[(1)] = (5));

} else {
var statearr_24428_24491 = state_24421__$1;
(statearr_24428_24491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (15))){
var inst_24399 = (state_24421[(8)]);
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24421__$1,(18),to,inst_24399);
} else {
if((state_val_24422 === (21))){
var inst_24412 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24429_24492 = state_24421__$1;
(statearr_24429_24492[(2)] = inst_24412);

(statearr_24429_24492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (13))){
var inst_24414 = (state_24421[(2)]);
var state_24421__$1 = (function (){var statearr_24430 = state_24421;
(statearr_24430[(9)] = inst_24414);

return statearr_24430;
})();
var statearr_24431_24493 = state_24421__$1;
(statearr_24431_24493[(2)] = null);

(statearr_24431_24493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (6))){
var inst_24386 = (state_24421[(7)]);
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24421__$1,(11),inst_24386);
} else {
if((state_val_24422 === (17))){
var inst_24407 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
if(cljs.core.truth_(inst_24407)){
var statearr_24432_24494 = state_24421__$1;
(statearr_24432_24494[(1)] = (19));

} else {
var statearr_24433_24495 = state_24421__$1;
(statearr_24433_24495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (3))){
var inst_24419 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24421__$1,inst_24419);
} else {
if((state_val_24422 === (12))){
var inst_24396 = (state_24421[(10)]);
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24421__$1,(14),inst_24396);
} else {
if((state_val_24422 === (2))){
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24421__$1,(4),results);
} else {
if((state_val_24422 === (19))){
var state_24421__$1 = state_24421;
var statearr_24434_24496 = state_24421__$1;
(statearr_24434_24496[(2)] = null);

(statearr_24434_24496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (11))){
var inst_24396 = (state_24421[(2)]);
var state_24421__$1 = (function (){var statearr_24435 = state_24421;
(statearr_24435[(10)] = inst_24396);

return statearr_24435;
})();
var statearr_24436_24497 = state_24421__$1;
(statearr_24436_24497[(2)] = null);

(statearr_24436_24497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (9))){
var state_24421__$1 = state_24421;
var statearr_24437_24498 = state_24421__$1;
(statearr_24437_24498[(2)] = null);

(statearr_24437_24498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (5))){
var state_24421__$1 = state_24421;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24438_24499 = state_24421__$1;
(statearr_24438_24499[(1)] = (8));

} else {
var statearr_24439_24500 = state_24421__$1;
(statearr_24439_24500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (14))){
var inst_24399 = (state_24421[(8)]);
var inst_24399__$1 = (state_24421[(2)]);
var inst_24400 = (inst_24399__$1 == null);
var inst_24401 = cljs.core.not.call(null,inst_24400);
var state_24421__$1 = (function (){var statearr_24440 = state_24421;
(statearr_24440[(8)] = inst_24399__$1);

return statearr_24440;
})();
if(inst_24401){
var statearr_24441_24501 = state_24421__$1;
(statearr_24441_24501[(1)] = (15));

} else {
var statearr_24442_24502 = state_24421__$1;
(statearr_24442_24502[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (16))){
var state_24421__$1 = state_24421;
var statearr_24443_24503 = state_24421__$1;
(statearr_24443_24503[(2)] = false);

(statearr_24443_24503[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (10))){
var inst_24393 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24444_24504 = state_24421__$1;
(statearr_24444_24504[(2)] = inst_24393);

(statearr_24444_24504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (18))){
var inst_24404 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24445_24505 = state_24421__$1;
(statearr_24445_24505[(2)] = inst_24404);

(statearr_24445_24505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (8))){
var inst_24390 = cljs.core.async.close_BANG_.call(null,to);
var state_24421__$1 = state_24421;
var statearr_24446_24506 = state_24421__$1;
(statearr_24446_24506[(2)] = inst_24390);

(statearr_24446_24506[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_24447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__);

(statearr_24447[(1)] = (1));

return statearr_24447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1 = (function (state_24421){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24448){if((e24448 instanceof Object)){
var ex__24025__auto__ = e24448;
var statearr_24449_24507 = state_24421;
(statearr_24449_24507[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24508 = state_24421;
state_24421 = G__24508;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = function(state_24421){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1.call(this,state_24421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_24450 = f__24117__auto__.call(null);
(statearr_24450[(6)] = c__24116__auto__);

return statearr_24450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));

return c__24116__auto__;
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
var G__24510 = arguments.length;
switch (G__24510) {
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
var G__24513 = arguments.length;
switch (G__24513) {
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
var G__24516 = arguments.length;
switch (G__24516) {
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
var c__24116__auto___24565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_24542){
var state_val_24543 = (state_24542[(1)]);
if((state_val_24543 === (7))){
var inst_24538 = (state_24542[(2)]);
var state_24542__$1 = state_24542;
var statearr_24544_24566 = state_24542__$1;
(statearr_24544_24566[(2)] = inst_24538);

(statearr_24544_24566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (1))){
var state_24542__$1 = state_24542;
var statearr_24545_24567 = state_24542__$1;
(statearr_24545_24567[(2)] = null);

(statearr_24545_24567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (4))){
var inst_24519 = (state_24542[(7)]);
var inst_24519__$1 = (state_24542[(2)]);
var inst_24520 = (inst_24519__$1 == null);
var state_24542__$1 = (function (){var statearr_24546 = state_24542;
(statearr_24546[(7)] = inst_24519__$1);

return statearr_24546;
})();
if(cljs.core.truth_(inst_24520)){
var statearr_24547_24568 = state_24542__$1;
(statearr_24547_24568[(1)] = (5));

} else {
var statearr_24548_24569 = state_24542__$1;
(statearr_24548_24569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (13))){
var state_24542__$1 = state_24542;
var statearr_24549_24570 = state_24542__$1;
(statearr_24549_24570[(2)] = null);

(statearr_24549_24570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (6))){
var inst_24519 = (state_24542[(7)]);
var inst_24525 = p.call(null,inst_24519);
var state_24542__$1 = state_24542;
if(cljs.core.truth_(inst_24525)){
var statearr_24550_24571 = state_24542__$1;
(statearr_24550_24571[(1)] = (9));

} else {
var statearr_24551_24572 = state_24542__$1;
(statearr_24551_24572[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (3))){
var inst_24540 = (state_24542[(2)]);
var state_24542__$1 = state_24542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24542__$1,inst_24540);
} else {
if((state_val_24543 === (12))){
var state_24542__$1 = state_24542;
var statearr_24552_24573 = state_24542__$1;
(statearr_24552_24573[(2)] = null);

(statearr_24552_24573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (2))){
var state_24542__$1 = state_24542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24542__$1,(4),ch);
} else {
if((state_val_24543 === (11))){
var inst_24519 = (state_24542[(7)]);
var inst_24529 = (state_24542[(2)]);
var state_24542__$1 = state_24542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24542__$1,(8),inst_24529,inst_24519);
} else {
if((state_val_24543 === (9))){
var state_24542__$1 = state_24542;
var statearr_24553_24574 = state_24542__$1;
(statearr_24553_24574[(2)] = tc);

(statearr_24553_24574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (5))){
var inst_24522 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24523 = cljs.core.async.close_BANG_.call(null,fc);
var state_24542__$1 = (function (){var statearr_24554 = state_24542;
(statearr_24554[(8)] = inst_24522);

return statearr_24554;
})();
var statearr_24555_24575 = state_24542__$1;
(statearr_24555_24575[(2)] = inst_24523);

(statearr_24555_24575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (14))){
var inst_24536 = (state_24542[(2)]);
var state_24542__$1 = state_24542;
var statearr_24556_24576 = state_24542__$1;
(statearr_24556_24576[(2)] = inst_24536);

(statearr_24556_24576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (10))){
var state_24542__$1 = state_24542;
var statearr_24557_24577 = state_24542__$1;
(statearr_24557_24577[(2)] = fc);

(statearr_24557_24577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (8))){
var inst_24531 = (state_24542[(2)]);
var state_24542__$1 = state_24542;
if(cljs.core.truth_(inst_24531)){
var statearr_24558_24578 = state_24542__$1;
(statearr_24558_24578[(1)] = (12));

} else {
var statearr_24559_24579 = state_24542__$1;
(statearr_24559_24579[(1)] = (13));

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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_24560 = [null,null,null,null,null,null,null,null,null];
(statearr_24560[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_24560[(1)] = (1));

return statearr_24560;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_24542){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24561){if((e24561 instanceof Object)){
var ex__24025__auto__ = e24561;
var statearr_24562_24580 = state_24542;
(statearr_24562_24580[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24581 = state_24542;
state_24542 = G__24581;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_24542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_24542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_24563 = f__24117__auto__.call(null);
(statearr_24563[(6)] = c__24116__auto___24565);

return statearr_24563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
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
var c__24116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_24602){
var state_val_24603 = (state_24602[(1)]);
if((state_val_24603 === (7))){
var inst_24598 = (state_24602[(2)]);
var state_24602__$1 = state_24602;
var statearr_24604_24622 = state_24602__$1;
(statearr_24604_24622[(2)] = inst_24598);

(statearr_24604_24622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (1))){
var inst_24582 = init;
var state_24602__$1 = (function (){var statearr_24605 = state_24602;
(statearr_24605[(7)] = inst_24582);

return statearr_24605;
})();
var statearr_24606_24623 = state_24602__$1;
(statearr_24606_24623[(2)] = null);

(statearr_24606_24623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (4))){
var inst_24585 = (state_24602[(8)]);
var inst_24585__$1 = (state_24602[(2)]);
var inst_24586 = (inst_24585__$1 == null);
var state_24602__$1 = (function (){var statearr_24607 = state_24602;
(statearr_24607[(8)] = inst_24585__$1);

return statearr_24607;
})();
if(cljs.core.truth_(inst_24586)){
var statearr_24608_24624 = state_24602__$1;
(statearr_24608_24624[(1)] = (5));

} else {
var statearr_24609_24625 = state_24602__$1;
(statearr_24609_24625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (6))){
var inst_24589 = (state_24602[(9)]);
var inst_24585 = (state_24602[(8)]);
var inst_24582 = (state_24602[(7)]);
var inst_24589__$1 = f.call(null,inst_24582,inst_24585);
var inst_24590 = cljs.core.reduced_QMARK_.call(null,inst_24589__$1);
var state_24602__$1 = (function (){var statearr_24610 = state_24602;
(statearr_24610[(9)] = inst_24589__$1);

return statearr_24610;
})();
if(inst_24590){
var statearr_24611_24626 = state_24602__$1;
(statearr_24611_24626[(1)] = (8));

} else {
var statearr_24612_24627 = state_24602__$1;
(statearr_24612_24627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (3))){
var inst_24600 = (state_24602[(2)]);
var state_24602__$1 = state_24602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24602__$1,inst_24600);
} else {
if((state_val_24603 === (2))){
var state_24602__$1 = state_24602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24602__$1,(4),ch);
} else {
if((state_val_24603 === (9))){
var inst_24589 = (state_24602[(9)]);
var inst_24582 = inst_24589;
var state_24602__$1 = (function (){var statearr_24613 = state_24602;
(statearr_24613[(7)] = inst_24582);

return statearr_24613;
})();
var statearr_24614_24628 = state_24602__$1;
(statearr_24614_24628[(2)] = null);

(statearr_24614_24628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (5))){
var inst_24582 = (state_24602[(7)]);
var state_24602__$1 = state_24602;
var statearr_24615_24629 = state_24602__$1;
(statearr_24615_24629[(2)] = inst_24582);

(statearr_24615_24629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (10))){
var inst_24596 = (state_24602[(2)]);
var state_24602__$1 = state_24602;
var statearr_24616_24630 = state_24602__$1;
(statearr_24616_24630[(2)] = inst_24596);

(statearr_24616_24630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (8))){
var inst_24589 = (state_24602[(9)]);
var inst_24592 = cljs.core.deref.call(null,inst_24589);
var state_24602__$1 = state_24602;
var statearr_24617_24631 = state_24602__$1;
(statearr_24617_24631[(2)] = inst_24592);

(statearr_24617_24631[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__24022__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24022__auto____0 = (function (){
var statearr_24618 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24618[(0)] = cljs$core$async$reduce_$_state_machine__24022__auto__);

(statearr_24618[(1)] = (1));

return statearr_24618;
});
var cljs$core$async$reduce_$_state_machine__24022__auto____1 = (function (state_24602){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24619){if((e24619 instanceof Object)){
var ex__24025__auto__ = e24619;
var statearr_24620_24632 = state_24602;
(statearr_24620_24632[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24633 = state_24602;
state_24602 = G__24633;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24022__auto__ = function(state_24602){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24022__auto____1.call(this,state_24602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24022__auto____0;
cljs$core$async$reduce_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24022__auto____1;
return cljs$core$async$reduce_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_24621 = f__24117__auto__.call(null);
(statearr_24621[(6)] = c__24116__auto__);

return statearr_24621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));

return c__24116__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_24639){
var state_val_24640 = (state_24639[(1)]);
if((state_val_24640 === (1))){
var inst_24634 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24639__$1 = state_24639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24639__$1,(2),inst_24634);
} else {
if((state_val_24640 === (2))){
var inst_24636 = (state_24639[(2)]);
var inst_24637 = f__$1.call(null,inst_24636);
var state_24639__$1 = state_24639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24639__$1,inst_24637);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24022__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24022__auto____0 = (function (){
var statearr_24641 = [null,null,null,null,null,null,null];
(statearr_24641[(0)] = cljs$core$async$transduce_$_state_machine__24022__auto__);

(statearr_24641[(1)] = (1));

return statearr_24641;
});
var cljs$core$async$transduce_$_state_machine__24022__auto____1 = (function (state_24639){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24642){if((e24642 instanceof Object)){
var ex__24025__auto__ = e24642;
var statearr_24643_24645 = state_24639;
(statearr_24643_24645[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24646 = state_24639;
state_24639 = G__24646;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24022__auto__ = function(state_24639){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24022__auto____1.call(this,state_24639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24022__auto____0;
cljs$core$async$transduce_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24022__auto____1;
return cljs$core$async$transduce_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_24644 = f__24117__auto__.call(null);
(statearr_24644[(6)] = c__24116__auto__);

return statearr_24644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));

return c__24116__auto__;
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
var G__24648 = arguments.length;
switch (G__24648) {
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
var c__24116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_24673){
var state_val_24674 = (state_24673[(1)]);
if((state_val_24674 === (7))){
var inst_24655 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
var statearr_24675_24696 = state_24673__$1;
(statearr_24675_24696[(2)] = inst_24655);

(statearr_24675_24696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (1))){
var inst_24649 = cljs.core.seq.call(null,coll);
var inst_24650 = inst_24649;
var state_24673__$1 = (function (){var statearr_24676 = state_24673;
(statearr_24676[(7)] = inst_24650);

return statearr_24676;
})();
var statearr_24677_24697 = state_24673__$1;
(statearr_24677_24697[(2)] = null);

(statearr_24677_24697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (4))){
var inst_24650 = (state_24673[(7)]);
var inst_24653 = cljs.core.first.call(null,inst_24650);
var state_24673__$1 = state_24673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24673__$1,(7),ch,inst_24653);
} else {
if((state_val_24674 === (13))){
var inst_24667 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
var statearr_24678_24698 = state_24673__$1;
(statearr_24678_24698[(2)] = inst_24667);

(statearr_24678_24698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (6))){
var inst_24658 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
if(cljs.core.truth_(inst_24658)){
var statearr_24679_24699 = state_24673__$1;
(statearr_24679_24699[(1)] = (8));

} else {
var statearr_24680_24700 = state_24673__$1;
(statearr_24680_24700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (3))){
var inst_24671 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24673__$1,inst_24671);
} else {
if((state_val_24674 === (12))){
var state_24673__$1 = state_24673;
var statearr_24681_24701 = state_24673__$1;
(statearr_24681_24701[(2)] = null);

(statearr_24681_24701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (2))){
var inst_24650 = (state_24673[(7)]);
var state_24673__$1 = state_24673;
if(cljs.core.truth_(inst_24650)){
var statearr_24682_24702 = state_24673__$1;
(statearr_24682_24702[(1)] = (4));

} else {
var statearr_24683_24703 = state_24673__$1;
(statearr_24683_24703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (11))){
var inst_24664 = cljs.core.async.close_BANG_.call(null,ch);
var state_24673__$1 = state_24673;
var statearr_24684_24704 = state_24673__$1;
(statearr_24684_24704[(2)] = inst_24664);

(statearr_24684_24704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (9))){
var state_24673__$1 = state_24673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24685_24705 = state_24673__$1;
(statearr_24685_24705[(1)] = (11));

} else {
var statearr_24686_24706 = state_24673__$1;
(statearr_24686_24706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (5))){
var inst_24650 = (state_24673[(7)]);
var state_24673__$1 = state_24673;
var statearr_24687_24707 = state_24673__$1;
(statearr_24687_24707[(2)] = inst_24650);

(statearr_24687_24707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (10))){
var inst_24669 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
var statearr_24688_24708 = state_24673__$1;
(statearr_24688_24708[(2)] = inst_24669);

(statearr_24688_24708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (8))){
var inst_24650 = (state_24673[(7)]);
var inst_24660 = cljs.core.next.call(null,inst_24650);
var inst_24650__$1 = inst_24660;
var state_24673__$1 = (function (){var statearr_24689 = state_24673;
(statearr_24689[(7)] = inst_24650__$1);

return statearr_24689;
})();
var statearr_24690_24709 = state_24673__$1;
(statearr_24690_24709[(2)] = null);

(statearr_24690_24709[(1)] = (2));


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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_24691 = [null,null,null,null,null,null,null,null];
(statearr_24691[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_24691[(1)] = (1));

return statearr_24691;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_24673){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24692){if((e24692 instanceof Object)){
var ex__24025__auto__ = e24692;
var statearr_24693_24710 = state_24673;
(statearr_24693_24710[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24711 = state_24673;
state_24673 = G__24711;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_24673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_24673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_24694 = f__24117__auto__.call(null);
(statearr_24694[(6)] = c__24116__auto__);

return statearr_24694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));

return c__24116__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_24712 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_24712.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_24713 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_24713.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_24714 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_24714.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_24715 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_24715.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24716 = (function (ch,cs,meta24717){
this.ch = ch;
this.cs = cs;
this.meta24717 = meta24717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24718,meta24717__$1){
var self__ = this;
var _24718__$1 = this;
return (new cljs.core.async.t_cljs$core$async24716(self__.ch,self__.cs,meta24717__$1));
}));

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24718){
var self__ = this;
var _24718__$1 = this;
return self__.meta24717;
}));

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24717","meta24717",1142157757,null)], null);
}));

(cljs.core.async.t_cljs$core$async24716.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24716");

(cljs.core.async.t_cljs$core$async24716.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24716");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24716.
 */
cljs.core.async.__GT_t_cljs$core$async24716 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24716(ch__$1,cs__$1,meta24717){
return (new cljs.core.async.t_cljs$core$async24716(ch__$1,cs__$1,meta24717));
});

}

return (new cljs.core.async.t_cljs$core$async24716(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24116__auto___24938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_24853){
var state_val_24854 = (state_24853[(1)]);
if((state_val_24854 === (7))){
var inst_24849 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24855_24939 = state_24853__$1;
(statearr_24855_24939[(2)] = inst_24849);

(statearr_24855_24939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (20))){
var inst_24752 = (state_24853[(7)]);
var inst_24764 = cljs.core.first.call(null,inst_24752);
var inst_24765 = cljs.core.nth.call(null,inst_24764,(0),null);
var inst_24766 = cljs.core.nth.call(null,inst_24764,(1),null);
var state_24853__$1 = (function (){var statearr_24856 = state_24853;
(statearr_24856[(8)] = inst_24765);

return statearr_24856;
})();
if(cljs.core.truth_(inst_24766)){
var statearr_24857_24940 = state_24853__$1;
(statearr_24857_24940[(1)] = (22));

} else {
var statearr_24858_24941 = state_24853__$1;
(statearr_24858_24941[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (27))){
var inst_24796 = (state_24853[(9)]);
var inst_24721 = (state_24853[(10)]);
var inst_24801 = (state_24853[(11)]);
var inst_24794 = (state_24853[(12)]);
var inst_24801__$1 = cljs.core._nth.call(null,inst_24794,inst_24796);
var inst_24802 = cljs.core.async.put_BANG_.call(null,inst_24801__$1,inst_24721,done);
var state_24853__$1 = (function (){var statearr_24859 = state_24853;
(statearr_24859[(11)] = inst_24801__$1);

return statearr_24859;
})();
if(cljs.core.truth_(inst_24802)){
var statearr_24860_24942 = state_24853__$1;
(statearr_24860_24942[(1)] = (30));

} else {
var statearr_24861_24943 = state_24853__$1;
(statearr_24861_24943[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (1))){
var state_24853__$1 = state_24853;
var statearr_24862_24944 = state_24853__$1;
(statearr_24862_24944[(2)] = null);

(statearr_24862_24944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (24))){
var inst_24752 = (state_24853[(7)]);
var inst_24771 = (state_24853[(2)]);
var inst_24772 = cljs.core.next.call(null,inst_24752);
var inst_24730 = inst_24772;
var inst_24731 = null;
var inst_24732 = (0);
var inst_24733 = (0);
var state_24853__$1 = (function (){var statearr_24863 = state_24853;
(statearr_24863[(13)] = inst_24731);

(statearr_24863[(14)] = inst_24733);

(statearr_24863[(15)] = inst_24771);

(statearr_24863[(16)] = inst_24732);

(statearr_24863[(17)] = inst_24730);

return statearr_24863;
})();
var statearr_24864_24945 = state_24853__$1;
(statearr_24864_24945[(2)] = null);

(statearr_24864_24945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (39))){
var state_24853__$1 = state_24853;
var statearr_24868_24946 = state_24853__$1;
(statearr_24868_24946[(2)] = null);

(statearr_24868_24946[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (4))){
var inst_24721 = (state_24853[(10)]);
var inst_24721__$1 = (state_24853[(2)]);
var inst_24722 = (inst_24721__$1 == null);
var state_24853__$1 = (function (){var statearr_24869 = state_24853;
(statearr_24869[(10)] = inst_24721__$1);

return statearr_24869;
})();
if(cljs.core.truth_(inst_24722)){
var statearr_24870_24947 = state_24853__$1;
(statearr_24870_24947[(1)] = (5));

} else {
var statearr_24871_24948 = state_24853__$1;
(statearr_24871_24948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (15))){
var inst_24731 = (state_24853[(13)]);
var inst_24733 = (state_24853[(14)]);
var inst_24732 = (state_24853[(16)]);
var inst_24730 = (state_24853[(17)]);
var inst_24748 = (state_24853[(2)]);
var inst_24749 = (inst_24733 + (1));
var tmp24865 = inst_24731;
var tmp24866 = inst_24732;
var tmp24867 = inst_24730;
var inst_24730__$1 = tmp24867;
var inst_24731__$1 = tmp24865;
var inst_24732__$1 = tmp24866;
var inst_24733__$1 = inst_24749;
var state_24853__$1 = (function (){var statearr_24872 = state_24853;
(statearr_24872[(13)] = inst_24731__$1);

(statearr_24872[(18)] = inst_24748);

(statearr_24872[(14)] = inst_24733__$1);

(statearr_24872[(16)] = inst_24732__$1);

(statearr_24872[(17)] = inst_24730__$1);

return statearr_24872;
})();
var statearr_24873_24949 = state_24853__$1;
(statearr_24873_24949[(2)] = null);

(statearr_24873_24949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (21))){
var inst_24775 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24877_24950 = state_24853__$1;
(statearr_24877_24950[(2)] = inst_24775);

(statearr_24877_24950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (31))){
var inst_24801 = (state_24853[(11)]);
var inst_24805 = done.call(null,null);
var inst_24806 = cljs.core.async.untap_STAR_.call(null,m,inst_24801);
var state_24853__$1 = (function (){var statearr_24878 = state_24853;
(statearr_24878[(19)] = inst_24805);

return statearr_24878;
})();
var statearr_24879_24951 = state_24853__$1;
(statearr_24879_24951[(2)] = inst_24806);

(statearr_24879_24951[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (32))){
var inst_24795 = (state_24853[(20)]);
var inst_24796 = (state_24853[(9)]);
var inst_24794 = (state_24853[(12)]);
var inst_24793 = (state_24853[(21)]);
var inst_24808 = (state_24853[(2)]);
var inst_24809 = (inst_24796 + (1));
var tmp24874 = inst_24795;
var tmp24875 = inst_24794;
var tmp24876 = inst_24793;
var inst_24793__$1 = tmp24876;
var inst_24794__$1 = tmp24875;
var inst_24795__$1 = tmp24874;
var inst_24796__$1 = inst_24809;
var state_24853__$1 = (function (){var statearr_24880 = state_24853;
(statearr_24880[(20)] = inst_24795__$1);

(statearr_24880[(22)] = inst_24808);

(statearr_24880[(9)] = inst_24796__$1);

(statearr_24880[(12)] = inst_24794__$1);

(statearr_24880[(21)] = inst_24793__$1);

return statearr_24880;
})();
var statearr_24881_24952 = state_24853__$1;
(statearr_24881_24952[(2)] = null);

(statearr_24881_24952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (40))){
var inst_24821 = (state_24853[(23)]);
var inst_24825 = done.call(null,null);
var inst_24826 = cljs.core.async.untap_STAR_.call(null,m,inst_24821);
var state_24853__$1 = (function (){var statearr_24882 = state_24853;
(statearr_24882[(24)] = inst_24825);

return statearr_24882;
})();
var statearr_24883_24953 = state_24853__$1;
(statearr_24883_24953[(2)] = inst_24826);

(statearr_24883_24953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (33))){
var inst_24812 = (state_24853[(25)]);
var inst_24814 = cljs.core.chunked_seq_QMARK_.call(null,inst_24812);
var state_24853__$1 = state_24853;
if(inst_24814){
var statearr_24884_24954 = state_24853__$1;
(statearr_24884_24954[(1)] = (36));

} else {
var statearr_24885_24955 = state_24853__$1;
(statearr_24885_24955[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (13))){
var inst_24742 = (state_24853[(26)]);
var inst_24745 = cljs.core.async.close_BANG_.call(null,inst_24742);
var state_24853__$1 = state_24853;
var statearr_24886_24956 = state_24853__$1;
(statearr_24886_24956[(2)] = inst_24745);

(statearr_24886_24956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (22))){
var inst_24765 = (state_24853[(8)]);
var inst_24768 = cljs.core.async.close_BANG_.call(null,inst_24765);
var state_24853__$1 = state_24853;
var statearr_24887_24957 = state_24853__$1;
(statearr_24887_24957[(2)] = inst_24768);

(statearr_24887_24957[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (36))){
var inst_24812 = (state_24853[(25)]);
var inst_24816 = cljs.core.chunk_first.call(null,inst_24812);
var inst_24817 = cljs.core.chunk_rest.call(null,inst_24812);
var inst_24818 = cljs.core.count.call(null,inst_24816);
var inst_24793 = inst_24817;
var inst_24794 = inst_24816;
var inst_24795 = inst_24818;
var inst_24796 = (0);
var state_24853__$1 = (function (){var statearr_24888 = state_24853;
(statearr_24888[(20)] = inst_24795);

(statearr_24888[(9)] = inst_24796);

(statearr_24888[(12)] = inst_24794);

(statearr_24888[(21)] = inst_24793);

return statearr_24888;
})();
var statearr_24889_24958 = state_24853__$1;
(statearr_24889_24958[(2)] = null);

(statearr_24889_24958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (41))){
var inst_24812 = (state_24853[(25)]);
var inst_24828 = (state_24853[(2)]);
var inst_24829 = cljs.core.next.call(null,inst_24812);
var inst_24793 = inst_24829;
var inst_24794 = null;
var inst_24795 = (0);
var inst_24796 = (0);
var state_24853__$1 = (function (){var statearr_24890 = state_24853;
(statearr_24890[(20)] = inst_24795);

(statearr_24890[(9)] = inst_24796);

(statearr_24890[(27)] = inst_24828);

(statearr_24890[(12)] = inst_24794);

(statearr_24890[(21)] = inst_24793);

return statearr_24890;
})();
var statearr_24891_24959 = state_24853__$1;
(statearr_24891_24959[(2)] = null);

(statearr_24891_24959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (43))){
var state_24853__$1 = state_24853;
var statearr_24892_24960 = state_24853__$1;
(statearr_24892_24960[(2)] = null);

(statearr_24892_24960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (29))){
var inst_24837 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24893_24961 = state_24853__$1;
(statearr_24893_24961[(2)] = inst_24837);

(statearr_24893_24961[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (44))){
var inst_24846 = (state_24853[(2)]);
var state_24853__$1 = (function (){var statearr_24894 = state_24853;
(statearr_24894[(28)] = inst_24846);

return statearr_24894;
})();
var statearr_24895_24962 = state_24853__$1;
(statearr_24895_24962[(2)] = null);

(statearr_24895_24962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (6))){
var inst_24785 = (state_24853[(29)]);
var inst_24784 = cljs.core.deref.call(null,cs);
var inst_24785__$1 = cljs.core.keys.call(null,inst_24784);
var inst_24786 = cljs.core.count.call(null,inst_24785__$1);
var inst_24787 = cljs.core.reset_BANG_.call(null,dctr,inst_24786);
var inst_24792 = cljs.core.seq.call(null,inst_24785__$1);
var inst_24793 = inst_24792;
var inst_24794 = null;
var inst_24795 = (0);
var inst_24796 = (0);
var state_24853__$1 = (function (){var statearr_24896 = state_24853;
(statearr_24896[(20)] = inst_24795);

(statearr_24896[(29)] = inst_24785__$1);

(statearr_24896[(9)] = inst_24796);

(statearr_24896[(12)] = inst_24794);

(statearr_24896[(30)] = inst_24787);

(statearr_24896[(21)] = inst_24793);

return statearr_24896;
})();
var statearr_24897_24963 = state_24853__$1;
(statearr_24897_24963[(2)] = null);

(statearr_24897_24963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (28))){
var inst_24812 = (state_24853[(25)]);
var inst_24793 = (state_24853[(21)]);
var inst_24812__$1 = cljs.core.seq.call(null,inst_24793);
var state_24853__$1 = (function (){var statearr_24898 = state_24853;
(statearr_24898[(25)] = inst_24812__$1);

return statearr_24898;
})();
if(inst_24812__$1){
var statearr_24899_24964 = state_24853__$1;
(statearr_24899_24964[(1)] = (33));

} else {
var statearr_24900_24965 = state_24853__$1;
(statearr_24900_24965[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (25))){
var inst_24795 = (state_24853[(20)]);
var inst_24796 = (state_24853[(9)]);
var inst_24798 = (inst_24796 < inst_24795);
var inst_24799 = inst_24798;
var state_24853__$1 = state_24853;
if(cljs.core.truth_(inst_24799)){
var statearr_24901_24966 = state_24853__$1;
(statearr_24901_24966[(1)] = (27));

} else {
var statearr_24902_24967 = state_24853__$1;
(statearr_24902_24967[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (34))){
var state_24853__$1 = state_24853;
var statearr_24903_24968 = state_24853__$1;
(statearr_24903_24968[(2)] = null);

(statearr_24903_24968[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (17))){
var state_24853__$1 = state_24853;
var statearr_24904_24969 = state_24853__$1;
(statearr_24904_24969[(2)] = null);

(statearr_24904_24969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (3))){
var inst_24851 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24853__$1,inst_24851);
} else {
if((state_val_24854 === (12))){
var inst_24780 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24905_24970 = state_24853__$1;
(statearr_24905_24970[(2)] = inst_24780);

(statearr_24905_24970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (2))){
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(4),ch);
} else {
if((state_val_24854 === (23))){
var state_24853__$1 = state_24853;
var statearr_24906_24971 = state_24853__$1;
(statearr_24906_24971[(2)] = null);

(statearr_24906_24971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (35))){
var inst_24835 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24907_24972 = state_24853__$1;
(statearr_24907_24972[(2)] = inst_24835);

(statearr_24907_24972[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (19))){
var inst_24752 = (state_24853[(7)]);
var inst_24756 = cljs.core.chunk_first.call(null,inst_24752);
var inst_24757 = cljs.core.chunk_rest.call(null,inst_24752);
var inst_24758 = cljs.core.count.call(null,inst_24756);
var inst_24730 = inst_24757;
var inst_24731 = inst_24756;
var inst_24732 = inst_24758;
var inst_24733 = (0);
var state_24853__$1 = (function (){var statearr_24908 = state_24853;
(statearr_24908[(13)] = inst_24731);

(statearr_24908[(14)] = inst_24733);

(statearr_24908[(16)] = inst_24732);

(statearr_24908[(17)] = inst_24730);

return statearr_24908;
})();
var statearr_24909_24973 = state_24853__$1;
(statearr_24909_24973[(2)] = null);

(statearr_24909_24973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (11))){
var inst_24752 = (state_24853[(7)]);
var inst_24730 = (state_24853[(17)]);
var inst_24752__$1 = cljs.core.seq.call(null,inst_24730);
var state_24853__$1 = (function (){var statearr_24910 = state_24853;
(statearr_24910[(7)] = inst_24752__$1);

return statearr_24910;
})();
if(inst_24752__$1){
var statearr_24911_24974 = state_24853__$1;
(statearr_24911_24974[(1)] = (16));

} else {
var statearr_24912_24975 = state_24853__$1;
(statearr_24912_24975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (9))){
var inst_24782 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24913_24976 = state_24853__$1;
(statearr_24913_24976[(2)] = inst_24782);

(statearr_24913_24976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (5))){
var inst_24728 = cljs.core.deref.call(null,cs);
var inst_24729 = cljs.core.seq.call(null,inst_24728);
var inst_24730 = inst_24729;
var inst_24731 = null;
var inst_24732 = (0);
var inst_24733 = (0);
var state_24853__$1 = (function (){var statearr_24914 = state_24853;
(statearr_24914[(13)] = inst_24731);

(statearr_24914[(14)] = inst_24733);

(statearr_24914[(16)] = inst_24732);

(statearr_24914[(17)] = inst_24730);

return statearr_24914;
})();
var statearr_24915_24977 = state_24853__$1;
(statearr_24915_24977[(2)] = null);

(statearr_24915_24977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (14))){
var state_24853__$1 = state_24853;
var statearr_24916_24978 = state_24853__$1;
(statearr_24916_24978[(2)] = null);

(statearr_24916_24978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (45))){
var inst_24843 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24917_24979 = state_24853__$1;
(statearr_24917_24979[(2)] = inst_24843);

(statearr_24917_24979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (26))){
var inst_24785 = (state_24853[(29)]);
var inst_24839 = (state_24853[(2)]);
var inst_24840 = cljs.core.seq.call(null,inst_24785);
var state_24853__$1 = (function (){var statearr_24918 = state_24853;
(statearr_24918[(31)] = inst_24839);

return statearr_24918;
})();
if(inst_24840){
var statearr_24919_24980 = state_24853__$1;
(statearr_24919_24980[(1)] = (42));

} else {
var statearr_24920_24981 = state_24853__$1;
(statearr_24920_24981[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (16))){
var inst_24752 = (state_24853[(7)]);
var inst_24754 = cljs.core.chunked_seq_QMARK_.call(null,inst_24752);
var state_24853__$1 = state_24853;
if(inst_24754){
var statearr_24921_24982 = state_24853__$1;
(statearr_24921_24982[(1)] = (19));

} else {
var statearr_24922_24983 = state_24853__$1;
(statearr_24922_24983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (38))){
var inst_24832 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24923_24984 = state_24853__$1;
(statearr_24923_24984[(2)] = inst_24832);

(statearr_24923_24984[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (30))){
var state_24853__$1 = state_24853;
var statearr_24924_24985 = state_24853__$1;
(statearr_24924_24985[(2)] = null);

(statearr_24924_24985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (10))){
var inst_24731 = (state_24853[(13)]);
var inst_24733 = (state_24853[(14)]);
var inst_24741 = cljs.core._nth.call(null,inst_24731,inst_24733);
var inst_24742 = cljs.core.nth.call(null,inst_24741,(0),null);
var inst_24743 = cljs.core.nth.call(null,inst_24741,(1),null);
var state_24853__$1 = (function (){var statearr_24925 = state_24853;
(statearr_24925[(26)] = inst_24742);

return statearr_24925;
})();
if(cljs.core.truth_(inst_24743)){
var statearr_24926_24986 = state_24853__$1;
(statearr_24926_24986[(1)] = (13));

} else {
var statearr_24927_24987 = state_24853__$1;
(statearr_24927_24987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (18))){
var inst_24778 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24928_24988 = state_24853__$1;
(statearr_24928_24988[(2)] = inst_24778);

(statearr_24928_24988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (42))){
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(45),dchan);
} else {
if((state_val_24854 === (37))){
var inst_24812 = (state_24853[(25)]);
var inst_24821 = (state_24853[(23)]);
var inst_24721 = (state_24853[(10)]);
var inst_24821__$1 = cljs.core.first.call(null,inst_24812);
var inst_24822 = cljs.core.async.put_BANG_.call(null,inst_24821__$1,inst_24721,done);
var state_24853__$1 = (function (){var statearr_24929 = state_24853;
(statearr_24929[(23)] = inst_24821__$1);

return statearr_24929;
})();
if(cljs.core.truth_(inst_24822)){
var statearr_24930_24989 = state_24853__$1;
(statearr_24930_24989[(1)] = (39));

} else {
var statearr_24931_24990 = state_24853__$1;
(statearr_24931_24990[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (8))){
var inst_24733 = (state_24853[(14)]);
var inst_24732 = (state_24853[(16)]);
var inst_24735 = (inst_24733 < inst_24732);
var inst_24736 = inst_24735;
var state_24853__$1 = state_24853;
if(cljs.core.truth_(inst_24736)){
var statearr_24932_24991 = state_24853__$1;
(statearr_24932_24991[(1)] = (10));

} else {
var statearr_24933_24992 = state_24853__$1;
(statearr_24933_24992[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__24022__auto__ = null;
var cljs$core$async$mult_$_state_machine__24022__auto____0 = (function (){
var statearr_24934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24934[(0)] = cljs$core$async$mult_$_state_machine__24022__auto__);

(statearr_24934[(1)] = (1));

return statearr_24934;
});
var cljs$core$async$mult_$_state_machine__24022__auto____1 = (function (state_24853){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_24853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24935){if((e24935 instanceof Object)){
var ex__24025__auto__ = e24935;
var statearr_24936_24993 = state_24853;
(statearr_24936_24993[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24994 = state_24853;
state_24853 = G__24994;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24022__auto__ = function(state_24853){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24022__auto____1.call(this,state_24853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24022__auto____0;
cljs$core$async$mult_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24022__auto____1;
return cljs$core$async$mult_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_24937 = f__24117__auto__.call(null);
(statearr_24937[(6)] = c__24116__auto___24938);

return statearr_24937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
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
var G__24996 = arguments.length;
switch (G__24996) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_24998 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_24998.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_24999 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_24999.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25000 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25000.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25001 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_25001.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25002 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25002.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25012 = arguments.length;
var i__4772__auto___25013 = (0);
while(true){
if((i__4772__auto___25013 < len__4771__auto___25012)){
args__4777__auto__.push((arguments[i__4772__auto___25013]));

var G__25014 = (i__4772__auto___25013 + (1));
i__4772__auto___25013 = G__25014;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25007){
var map__25008 = p__25007;
var map__25008__$1 = cljs.core.__destructure_map.call(null,map__25008);
var opts = map__25008__$1;
var statearr_25009_25015 = state;
(statearr_25009_25015[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25010_25016 = state;
(statearr_25010_25016[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25011_25017 = state;
(statearr_25011_25017[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25003){
var G__25004 = cljs.core.first.call(null,seq25003);
var seq25003__$1 = cljs.core.next.call(null,seq25003);
var G__25005 = cljs.core.first.call(null,seq25003__$1);
var seq25003__$2 = cljs.core.next.call(null,seq25003__$1);
var G__25006 = cljs.core.first.call(null,seq25003__$2);
var seq25003__$3 = cljs.core.next.call(null,seq25003__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25004,G__25005,G__25006,seq25003__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25018 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25019){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25019 = meta25019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25020,meta25019__$1){
var self__ = this;
var _25020__$1 = this;
return (new cljs.core.async.t_cljs$core$async25018(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25019__$1));
}));

(cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25020){
var self__ = this;
var _25020__$1 = this;
return self__.meta25019;
}));

(cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25019","meta25019",299905360,null)], null);
}));

(cljs.core.async.t_cljs$core$async25018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25018");

(cljs.core.async.t_cljs$core$async25018.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25018.
 */
cljs.core.async.__GT_t_cljs$core$async25018 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25018(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25019){
return (new cljs.core.async.t_cljs$core$async25018(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25019));
});

}

return (new cljs.core.async.t_cljs$core$async25018(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24116__auto___25117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_25082){
var state_val_25083 = (state_25082[(1)]);
if((state_val_25083 === (7))){
var inst_25078 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25084_25118 = state_25082__$1;
(statearr_25084_25118[(2)] = inst_25078);

(statearr_25084_25118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (20))){
var inst_25072 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25085_25119 = state_25082__$1;
(statearr_25085_25119[(2)] = inst_25072);

(statearr_25085_25119[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (1))){
var inst_25024 = calc_state.call(null);
var inst_25025 = cljs.core.__destructure_map.call(null,inst_25024);
var inst_25026 = cljs.core.get.call(null,inst_25025,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25027 = cljs.core.get.call(null,inst_25025,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25028 = cljs.core.get.call(null,inst_25025,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25029 = inst_25024;
var state_25082__$1 = (function (){var statearr_25086 = state_25082;
(statearr_25086[(7)] = inst_25028);

(statearr_25086[(8)] = inst_25029);

(statearr_25086[(9)] = inst_25026);

(statearr_25086[(10)] = inst_25027);

return statearr_25086;
})();
var statearr_25087_25120 = state_25082__$1;
(statearr_25087_25120[(2)] = null);

(statearr_25087_25120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (4))){
var inst_25042 = (state_25082[(11)]);
var inst_25041 = (state_25082[(12)]);
var inst_25040 = (state_25082[(2)]);
var inst_25041__$1 = cljs.core.nth.call(null,inst_25040,(0),null);
var inst_25042__$1 = cljs.core.nth.call(null,inst_25040,(1),null);
var inst_25043 = (inst_25041__$1 == null);
var inst_25044 = cljs.core._EQ_.call(null,inst_25042__$1,change);
var inst_25045 = ((inst_25043) || (inst_25044));
var state_25082__$1 = (function (){var statearr_25088 = state_25082;
(statearr_25088[(11)] = inst_25042__$1);

(statearr_25088[(12)] = inst_25041__$1);

return statearr_25088;
})();
if(cljs.core.truth_(inst_25045)){
var statearr_25089_25121 = state_25082__$1;
(statearr_25089_25121[(1)] = (5));

} else {
var statearr_25090_25122 = state_25082__$1;
(statearr_25090_25122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (15))){
var inst_25032 = (state_25082[(13)]);
var inst_25029 = inst_25032;
var state_25082__$1 = (function (){var statearr_25091 = state_25082;
(statearr_25091[(8)] = inst_25029);

return statearr_25091;
})();
var statearr_25092_25123 = state_25082__$1;
(statearr_25092_25123[(2)] = null);

(statearr_25092_25123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (13))){
var inst_25064 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25064)){
var statearr_25093_25124 = state_25082__$1;
(statearr_25093_25124[(1)] = (14));

} else {
var statearr_25094_25125 = state_25082__$1;
(statearr_25094_25125[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (6))){
var inst_25042 = (state_25082[(11)]);
var inst_25033 = (state_25082[(14)]);
var inst_25056 = (state_25082[(15)]);
var inst_25056__$1 = inst_25033.call(null,inst_25042);
var state_25082__$1 = (function (){var statearr_25095 = state_25082;
(statearr_25095[(15)] = inst_25056__$1);

return statearr_25095;
})();
if(cljs.core.truth_(inst_25056__$1)){
var statearr_25096_25126 = state_25082__$1;
(statearr_25096_25126[(1)] = (11));

} else {
var statearr_25097_25127 = state_25082__$1;
(statearr_25097_25127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (17))){
var inst_25067 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25067)){
var statearr_25098_25128 = state_25082__$1;
(statearr_25098_25128[(1)] = (18));

} else {
var statearr_25099_25129 = state_25082__$1;
(statearr_25099_25129[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (3))){
var inst_25080 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25082__$1,inst_25080);
} else {
if((state_val_25083 === (12))){
var inst_25042 = (state_25082[(11)]);
var inst_25034 = (state_25082[(16)]);
var inst_25033 = (state_25082[(14)]);
var inst_25059 = cljs.core.empty_QMARK_.call(null,inst_25033);
var inst_25060 = inst_25034.call(null,inst_25042);
var inst_25061 = cljs.core.not.call(null,inst_25060);
var inst_25062 = ((inst_25059) && (inst_25061));
var state_25082__$1 = state_25082;
var statearr_25100_25130 = state_25082__$1;
(statearr_25100_25130[(2)] = inst_25062);

(statearr_25100_25130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (2))){
var inst_25029 = (state_25082[(8)]);
var inst_25032 = (state_25082[(13)]);
var inst_25032__$1 = cljs.core.__destructure_map.call(null,inst_25029);
var inst_25033 = cljs.core.get.call(null,inst_25032__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25034 = cljs.core.get.call(null,inst_25032__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25035 = cljs.core.get.call(null,inst_25032__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25082__$1 = (function (){var statearr_25101 = state_25082;
(statearr_25101[(16)] = inst_25034);

(statearr_25101[(14)] = inst_25033);

(statearr_25101[(13)] = inst_25032__$1);

return statearr_25101;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25082__$1,(4),inst_25035);
} else {
if((state_val_25083 === (19))){
var state_25082__$1 = state_25082;
var statearr_25102_25131 = state_25082__$1;
(statearr_25102_25131[(2)] = null);

(statearr_25102_25131[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (11))){
var inst_25056 = (state_25082[(15)]);
var state_25082__$1 = state_25082;
var statearr_25103_25132 = state_25082__$1;
(statearr_25103_25132[(2)] = inst_25056);

(statearr_25103_25132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (9))){
var state_25082__$1 = state_25082;
var statearr_25104_25133 = state_25082__$1;
(statearr_25104_25133[(2)] = null);

(statearr_25104_25133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (5))){
var inst_25041 = (state_25082[(12)]);
var inst_25047 = (inst_25041 == null);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25047)){
var statearr_25105_25134 = state_25082__$1;
(statearr_25105_25134[(1)] = (8));

} else {
var statearr_25106_25135 = state_25082__$1;
(statearr_25106_25135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (14))){
var inst_25041 = (state_25082[(12)]);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25082__$1,(17),out,inst_25041);
} else {
if((state_val_25083 === (16))){
var inst_25076 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25107_25136 = state_25082__$1;
(statearr_25107_25136[(2)] = inst_25076);

(statearr_25107_25136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (10))){
var inst_25052 = (state_25082[(2)]);
var inst_25053 = calc_state.call(null);
var inst_25029 = inst_25053;
var state_25082__$1 = (function (){var statearr_25108 = state_25082;
(statearr_25108[(8)] = inst_25029);

(statearr_25108[(17)] = inst_25052);

return statearr_25108;
})();
var statearr_25109_25137 = state_25082__$1;
(statearr_25109_25137[(2)] = null);

(statearr_25109_25137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (18))){
var inst_25032 = (state_25082[(13)]);
var inst_25029 = inst_25032;
var state_25082__$1 = (function (){var statearr_25110 = state_25082;
(statearr_25110[(8)] = inst_25029);

return statearr_25110;
})();
var statearr_25111_25138 = state_25082__$1;
(statearr_25111_25138[(2)] = null);

(statearr_25111_25138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (8))){
var inst_25042 = (state_25082[(11)]);
var inst_25049 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25042);
var state_25082__$1 = state_25082;
var statearr_25112_25139 = state_25082__$1;
(statearr_25112_25139[(2)] = inst_25049);

(statearr_25112_25139[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__24022__auto__ = null;
var cljs$core$async$mix_$_state_machine__24022__auto____0 = (function (){
var statearr_25113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25113[(0)] = cljs$core$async$mix_$_state_machine__24022__auto__);

(statearr_25113[(1)] = (1));

return statearr_25113;
});
var cljs$core$async$mix_$_state_machine__24022__auto____1 = (function (state_25082){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_25082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25114){if((e25114 instanceof Object)){
var ex__24025__auto__ = e25114;
var statearr_25115_25140 = state_25082;
(statearr_25115_25140[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25141 = state_25082;
state_25082 = G__25141;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24022__auto__ = function(state_25082){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24022__auto____1.call(this,state_25082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24022__auto____0;
cljs$core$async$mix_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24022__auto____1;
return cljs$core$async$mix_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_25116 = f__24117__auto__.call(null);
(statearr_25116[(6)] = c__24116__auto___25117);

return statearr_25116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_25144 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_25144.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25145 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_25145.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25146 = (function() {
var G__25147 = null;
var G__25147__1 = (function (p){
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
var G__25147__2 = (function (p,v){
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
G__25147 = function(p,v){
switch(arguments.length){
case 1:
return G__25147__1.call(this,p);
case 2:
return G__25147__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25147.cljs$core$IFn$_invoke$arity$1 = G__25147__1;
G__25147.cljs$core$IFn$_invoke$arity$2 = G__25147__2;
return G__25147;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25143 = arguments.length;
switch (G__25143) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25146.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25146.call(null,p,v);
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
var G__25151 = arguments.length;
switch (G__25151) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__25149_SHARP_){
if(cljs.core.truth_(p1__25149_SHARP_.call(null,topic))){
return p1__25149_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25149_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25152 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25153){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25153 = meta25153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25154,meta25153__$1){
var self__ = this;
var _25154__$1 = this;
return (new cljs.core.async.t_cljs$core$async25152(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25153__$1));
}));

(cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25154){
var self__ = this;
var _25154__$1 = this;
return self__.meta25153;
}));

(cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25153","meta25153",-1172674159,null)], null);
}));

(cljs.core.async.t_cljs$core$async25152.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25152");

(cljs.core.async.t_cljs$core$async25152.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25152");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25152.
 */
cljs.core.async.__GT_t_cljs$core$async25152 = (function cljs$core$async$__GT_t_cljs$core$async25152(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25153){
return (new cljs.core.async.t_cljs$core$async25152(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25153));
});

}

return (new cljs.core.async.t_cljs$core$async25152(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24116__auto___25272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_25226){
var state_val_25227 = (state_25226[(1)]);
if((state_val_25227 === (7))){
var inst_25222 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25228_25273 = state_25226__$1;
(statearr_25228_25273[(2)] = inst_25222);

(statearr_25228_25273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (20))){
var state_25226__$1 = state_25226;
var statearr_25229_25274 = state_25226__$1;
(statearr_25229_25274[(2)] = null);

(statearr_25229_25274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (1))){
var state_25226__$1 = state_25226;
var statearr_25230_25275 = state_25226__$1;
(statearr_25230_25275[(2)] = null);

(statearr_25230_25275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (24))){
var inst_25205 = (state_25226[(7)]);
var inst_25214 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25205);
var state_25226__$1 = state_25226;
var statearr_25231_25276 = state_25226__$1;
(statearr_25231_25276[(2)] = inst_25214);

(statearr_25231_25276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (4))){
var inst_25157 = (state_25226[(8)]);
var inst_25157__$1 = (state_25226[(2)]);
var inst_25158 = (inst_25157__$1 == null);
var state_25226__$1 = (function (){var statearr_25232 = state_25226;
(statearr_25232[(8)] = inst_25157__$1);

return statearr_25232;
})();
if(cljs.core.truth_(inst_25158)){
var statearr_25233_25277 = state_25226__$1;
(statearr_25233_25277[(1)] = (5));

} else {
var statearr_25234_25278 = state_25226__$1;
(statearr_25234_25278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (15))){
var inst_25199 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25235_25279 = state_25226__$1;
(statearr_25235_25279[(2)] = inst_25199);

(statearr_25235_25279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (21))){
var inst_25219 = (state_25226[(2)]);
var state_25226__$1 = (function (){var statearr_25236 = state_25226;
(statearr_25236[(9)] = inst_25219);

return statearr_25236;
})();
var statearr_25237_25280 = state_25226__$1;
(statearr_25237_25280[(2)] = null);

(statearr_25237_25280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (13))){
var inst_25181 = (state_25226[(10)]);
var inst_25183 = cljs.core.chunked_seq_QMARK_.call(null,inst_25181);
var state_25226__$1 = state_25226;
if(inst_25183){
var statearr_25238_25281 = state_25226__$1;
(statearr_25238_25281[(1)] = (16));

} else {
var statearr_25239_25282 = state_25226__$1;
(statearr_25239_25282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (22))){
var inst_25211 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
if(cljs.core.truth_(inst_25211)){
var statearr_25240_25283 = state_25226__$1;
(statearr_25240_25283[(1)] = (23));

} else {
var statearr_25241_25284 = state_25226__$1;
(statearr_25241_25284[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (6))){
var inst_25207 = (state_25226[(11)]);
var inst_25157 = (state_25226[(8)]);
var inst_25205 = (state_25226[(7)]);
var inst_25205__$1 = topic_fn.call(null,inst_25157);
var inst_25206 = cljs.core.deref.call(null,mults);
var inst_25207__$1 = cljs.core.get.call(null,inst_25206,inst_25205__$1);
var state_25226__$1 = (function (){var statearr_25242 = state_25226;
(statearr_25242[(11)] = inst_25207__$1);

(statearr_25242[(7)] = inst_25205__$1);

return statearr_25242;
})();
if(cljs.core.truth_(inst_25207__$1)){
var statearr_25243_25285 = state_25226__$1;
(statearr_25243_25285[(1)] = (19));

} else {
var statearr_25244_25286 = state_25226__$1;
(statearr_25244_25286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (25))){
var inst_25216 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25245_25287 = state_25226__$1;
(statearr_25245_25287[(2)] = inst_25216);

(statearr_25245_25287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (17))){
var inst_25181 = (state_25226[(10)]);
var inst_25190 = cljs.core.first.call(null,inst_25181);
var inst_25191 = cljs.core.async.muxch_STAR_.call(null,inst_25190);
var inst_25192 = cljs.core.async.close_BANG_.call(null,inst_25191);
var inst_25193 = cljs.core.next.call(null,inst_25181);
var inst_25167 = inst_25193;
var inst_25168 = null;
var inst_25169 = (0);
var inst_25170 = (0);
var state_25226__$1 = (function (){var statearr_25246 = state_25226;
(statearr_25246[(12)] = inst_25168);

(statearr_25246[(13)] = inst_25192);

(statearr_25246[(14)] = inst_25167);

(statearr_25246[(15)] = inst_25170);

(statearr_25246[(16)] = inst_25169);

return statearr_25246;
})();
var statearr_25247_25288 = state_25226__$1;
(statearr_25247_25288[(2)] = null);

(statearr_25247_25288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (3))){
var inst_25224 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25226__$1,inst_25224);
} else {
if((state_val_25227 === (12))){
var inst_25201 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25248_25289 = state_25226__$1;
(statearr_25248_25289[(2)] = inst_25201);

(statearr_25248_25289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (2))){
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(4),ch);
} else {
if((state_val_25227 === (23))){
var state_25226__$1 = state_25226;
var statearr_25249_25290 = state_25226__$1;
(statearr_25249_25290[(2)] = null);

(statearr_25249_25290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (19))){
var inst_25207 = (state_25226[(11)]);
var inst_25157 = (state_25226[(8)]);
var inst_25209 = cljs.core.async.muxch_STAR_.call(null,inst_25207);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25226__$1,(22),inst_25209,inst_25157);
} else {
if((state_val_25227 === (11))){
var inst_25181 = (state_25226[(10)]);
var inst_25167 = (state_25226[(14)]);
var inst_25181__$1 = cljs.core.seq.call(null,inst_25167);
var state_25226__$1 = (function (){var statearr_25250 = state_25226;
(statearr_25250[(10)] = inst_25181__$1);

return statearr_25250;
})();
if(inst_25181__$1){
var statearr_25251_25291 = state_25226__$1;
(statearr_25251_25291[(1)] = (13));

} else {
var statearr_25252_25292 = state_25226__$1;
(statearr_25252_25292[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (9))){
var inst_25203 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25253_25293 = state_25226__$1;
(statearr_25253_25293[(2)] = inst_25203);

(statearr_25253_25293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (5))){
var inst_25164 = cljs.core.deref.call(null,mults);
var inst_25165 = cljs.core.vals.call(null,inst_25164);
var inst_25166 = cljs.core.seq.call(null,inst_25165);
var inst_25167 = inst_25166;
var inst_25168 = null;
var inst_25169 = (0);
var inst_25170 = (0);
var state_25226__$1 = (function (){var statearr_25254 = state_25226;
(statearr_25254[(12)] = inst_25168);

(statearr_25254[(14)] = inst_25167);

(statearr_25254[(15)] = inst_25170);

(statearr_25254[(16)] = inst_25169);

return statearr_25254;
})();
var statearr_25255_25294 = state_25226__$1;
(statearr_25255_25294[(2)] = null);

(statearr_25255_25294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (14))){
var state_25226__$1 = state_25226;
var statearr_25259_25295 = state_25226__$1;
(statearr_25259_25295[(2)] = null);

(statearr_25259_25295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (16))){
var inst_25181 = (state_25226[(10)]);
var inst_25185 = cljs.core.chunk_first.call(null,inst_25181);
var inst_25186 = cljs.core.chunk_rest.call(null,inst_25181);
var inst_25187 = cljs.core.count.call(null,inst_25185);
var inst_25167 = inst_25186;
var inst_25168 = inst_25185;
var inst_25169 = inst_25187;
var inst_25170 = (0);
var state_25226__$1 = (function (){var statearr_25260 = state_25226;
(statearr_25260[(12)] = inst_25168);

(statearr_25260[(14)] = inst_25167);

(statearr_25260[(15)] = inst_25170);

(statearr_25260[(16)] = inst_25169);

return statearr_25260;
})();
var statearr_25261_25296 = state_25226__$1;
(statearr_25261_25296[(2)] = null);

(statearr_25261_25296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (10))){
var inst_25168 = (state_25226[(12)]);
var inst_25167 = (state_25226[(14)]);
var inst_25170 = (state_25226[(15)]);
var inst_25169 = (state_25226[(16)]);
var inst_25175 = cljs.core._nth.call(null,inst_25168,inst_25170);
var inst_25176 = cljs.core.async.muxch_STAR_.call(null,inst_25175);
var inst_25177 = cljs.core.async.close_BANG_.call(null,inst_25176);
var inst_25178 = (inst_25170 + (1));
var tmp25256 = inst_25168;
var tmp25257 = inst_25167;
var tmp25258 = inst_25169;
var inst_25167__$1 = tmp25257;
var inst_25168__$1 = tmp25256;
var inst_25169__$1 = tmp25258;
var inst_25170__$1 = inst_25178;
var state_25226__$1 = (function (){var statearr_25262 = state_25226;
(statearr_25262[(12)] = inst_25168__$1);

(statearr_25262[(17)] = inst_25177);

(statearr_25262[(14)] = inst_25167__$1);

(statearr_25262[(15)] = inst_25170__$1);

(statearr_25262[(16)] = inst_25169__$1);

return statearr_25262;
})();
var statearr_25263_25297 = state_25226__$1;
(statearr_25263_25297[(2)] = null);

(statearr_25263_25297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (18))){
var inst_25196 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25264_25298 = state_25226__$1;
(statearr_25264_25298[(2)] = inst_25196);

(statearr_25264_25298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (8))){
var inst_25170 = (state_25226[(15)]);
var inst_25169 = (state_25226[(16)]);
var inst_25172 = (inst_25170 < inst_25169);
var inst_25173 = inst_25172;
var state_25226__$1 = state_25226;
if(cljs.core.truth_(inst_25173)){
var statearr_25265_25299 = state_25226__$1;
(statearr_25265_25299[(1)] = (10));

} else {
var statearr_25266_25300 = state_25226__$1;
(statearr_25266_25300[(1)] = (11));

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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_25267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25267[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_25267[(1)] = (1));

return statearr_25267;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_25226){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_25226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25268){if((e25268 instanceof Object)){
var ex__24025__auto__ = e25268;
var statearr_25269_25301 = state_25226;
(statearr_25269_25301[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25302 = state_25226;
state_25226 = G__25302;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_25226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_25226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_25270 = f__24117__auto__.call(null);
(statearr_25270[(6)] = c__24116__auto___25272);

return statearr_25270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
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
var G__25304 = arguments.length;
switch (G__25304) {
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
var G__25307 = arguments.length;
switch (G__25307) {
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
var G__25310 = arguments.length;
switch (G__25310) {
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
var c__24116__auto___25377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_25349){
var state_val_25350 = (state_25349[(1)]);
if((state_val_25350 === (7))){
var state_25349__$1 = state_25349;
var statearr_25351_25378 = state_25349__$1;
(statearr_25351_25378[(2)] = null);

(statearr_25351_25378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (1))){
var state_25349__$1 = state_25349;
var statearr_25352_25379 = state_25349__$1;
(statearr_25352_25379[(2)] = null);

(statearr_25352_25379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (4))){
var inst_25313 = (state_25349[(7)]);
var inst_25315 = (inst_25313 < cnt);
var state_25349__$1 = state_25349;
if(cljs.core.truth_(inst_25315)){
var statearr_25353_25380 = state_25349__$1;
(statearr_25353_25380[(1)] = (6));

} else {
var statearr_25354_25381 = state_25349__$1;
(statearr_25354_25381[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (15))){
var inst_25345 = (state_25349[(2)]);
var state_25349__$1 = state_25349;
var statearr_25355_25382 = state_25349__$1;
(statearr_25355_25382[(2)] = inst_25345);

(statearr_25355_25382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (13))){
var inst_25338 = cljs.core.async.close_BANG_.call(null,out);
var state_25349__$1 = state_25349;
var statearr_25356_25383 = state_25349__$1;
(statearr_25356_25383[(2)] = inst_25338);

(statearr_25356_25383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (6))){
var state_25349__$1 = state_25349;
var statearr_25357_25384 = state_25349__$1;
(statearr_25357_25384[(2)] = null);

(statearr_25357_25384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (3))){
var inst_25347 = (state_25349[(2)]);
var state_25349__$1 = state_25349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25349__$1,inst_25347);
} else {
if((state_val_25350 === (12))){
var inst_25335 = (state_25349[(8)]);
var inst_25335__$1 = (state_25349[(2)]);
var inst_25336 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25335__$1);
var state_25349__$1 = (function (){var statearr_25358 = state_25349;
(statearr_25358[(8)] = inst_25335__$1);

return statearr_25358;
})();
if(cljs.core.truth_(inst_25336)){
var statearr_25359_25385 = state_25349__$1;
(statearr_25359_25385[(1)] = (13));

} else {
var statearr_25360_25386 = state_25349__$1;
(statearr_25360_25386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (2))){
var inst_25312 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25313 = (0);
var state_25349__$1 = (function (){var statearr_25361 = state_25349;
(statearr_25361[(9)] = inst_25312);

(statearr_25361[(7)] = inst_25313);

return statearr_25361;
})();
var statearr_25362_25387 = state_25349__$1;
(statearr_25362_25387[(2)] = null);

(statearr_25362_25387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (11))){
var inst_25313 = (state_25349[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25349,(10),Object,null,(9));
var inst_25322 = chs__$1.call(null,inst_25313);
var inst_25323 = done.call(null,inst_25313);
var inst_25324 = cljs.core.async.take_BANG_.call(null,inst_25322,inst_25323);
var state_25349__$1 = state_25349;
var statearr_25363_25388 = state_25349__$1;
(statearr_25363_25388[(2)] = inst_25324);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (9))){
var inst_25313 = (state_25349[(7)]);
var inst_25326 = (state_25349[(2)]);
var inst_25327 = (inst_25313 + (1));
var inst_25313__$1 = inst_25327;
var state_25349__$1 = (function (){var statearr_25364 = state_25349;
(statearr_25364[(10)] = inst_25326);

(statearr_25364[(7)] = inst_25313__$1);

return statearr_25364;
})();
var statearr_25365_25389 = state_25349__$1;
(statearr_25365_25389[(2)] = null);

(statearr_25365_25389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (5))){
var inst_25333 = (state_25349[(2)]);
var state_25349__$1 = (function (){var statearr_25366 = state_25349;
(statearr_25366[(11)] = inst_25333);

return statearr_25366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25349__$1,(12),dchan);
} else {
if((state_val_25350 === (14))){
var inst_25335 = (state_25349[(8)]);
var inst_25340 = cljs.core.apply.call(null,f,inst_25335);
var state_25349__$1 = state_25349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25349__$1,(16),out,inst_25340);
} else {
if((state_val_25350 === (16))){
var inst_25342 = (state_25349[(2)]);
var state_25349__$1 = (function (){var statearr_25367 = state_25349;
(statearr_25367[(12)] = inst_25342);

return statearr_25367;
})();
var statearr_25368_25390 = state_25349__$1;
(statearr_25368_25390[(2)] = null);

(statearr_25368_25390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (10))){
var inst_25317 = (state_25349[(2)]);
var inst_25318 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25349__$1 = (function (){var statearr_25369 = state_25349;
(statearr_25369[(13)] = inst_25317);

return statearr_25369;
})();
var statearr_25370_25391 = state_25349__$1;
(statearr_25370_25391[(2)] = inst_25318);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (8))){
var inst_25331 = (state_25349[(2)]);
var state_25349__$1 = state_25349;
var statearr_25371_25392 = state_25349__$1;
(statearr_25371_25392[(2)] = inst_25331);

(statearr_25371_25392[(1)] = (5));


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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_25372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25372[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_25372[(1)] = (1));

return statearr_25372;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_25349){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_25349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25373){if((e25373 instanceof Object)){
var ex__24025__auto__ = e25373;
var statearr_25374_25393 = state_25349;
(statearr_25374_25393[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25394 = state_25349;
state_25349 = G__25394;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_25349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_25349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_25375 = f__24117__auto__.call(null);
(statearr_25375[(6)] = c__24116__auto___25377);

return statearr_25375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
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
var G__25397 = arguments.length;
switch (G__25397) {
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
var c__24116__auto___25451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_25429){
var state_val_25430 = (state_25429[(1)]);
if((state_val_25430 === (7))){
var inst_25408 = (state_25429[(7)]);
var inst_25409 = (state_25429[(8)]);
var inst_25408__$1 = (state_25429[(2)]);
var inst_25409__$1 = cljs.core.nth.call(null,inst_25408__$1,(0),null);
var inst_25410 = cljs.core.nth.call(null,inst_25408__$1,(1),null);
var inst_25411 = (inst_25409__$1 == null);
var state_25429__$1 = (function (){var statearr_25431 = state_25429;
(statearr_25431[(7)] = inst_25408__$1);

(statearr_25431[(9)] = inst_25410);

(statearr_25431[(8)] = inst_25409__$1);

return statearr_25431;
})();
if(cljs.core.truth_(inst_25411)){
var statearr_25432_25452 = state_25429__$1;
(statearr_25432_25452[(1)] = (8));

} else {
var statearr_25433_25453 = state_25429__$1;
(statearr_25433_25453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (1))){
var inst_25398 = cljs.core.vec.call(null,chs);
var inst_25399 = inst_25398;
var state_25429__$1 = (function (){var statearr_25434 = state_25429;
(statearr_25434[(10)] = inst_25399);

return statearr_25434;
})();
var statearr_25435_25454 = state_25429__$1;
(statearr_25435_25454[(2)] = null);

(statearr_25435_25454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (4))){
var inst_25399 = (state_25429[(10)]);
var state_25429__$1 = state_25429;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25429__$1,(7),inst_25399);
} else {
if((state_val_25430 === (6))){
var inst_25425 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
var statearr_25436_25455 = state_25429__$1;
(statearr_25436_25455[(2)] = inst_25425);

(statearr_25436_25455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (3))){
var inst_25427 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25429__$1,inst_25427);
} else {
if((state_val_25430 === (2))){
var inst_25399 = (state_25429[(10)]);
var inst_25401 = cljs.core.count.call(null,inst_25399);
var inst_25402 = (inst_25401 > (0));
var state_25429__$1 = state_25429;
if(cljs.core.truth_(inst_25402)){
var statearr_25438_25456 = state_25429__$1;
(statearr_25438_25456[(1)] = (4));

} else {
var statearr_25439_25457 = state_25429__$1;
(statearr_25439_25457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (11))){
var inst_25399 = (state_25429[(10)]);
var inst_25418 = (state_25429[(2)]);
var tmp25437 = inst_25399;
var inst_25399__$1 = tmp25437;
var state_25429__$1 = (function (){var statearr_25440 = state_25429;
(statearr_25440[(10)] = inst_25399__$1);

(statearr_25440[(11)] = inst_25418);

return statearr_25440;
})();
var statearr_25441_25458 = state_25429__$1;
(statearr_25441_25458[(2)] = null);

(statearr_25441_25458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (9))){
var inst_25409 = (state_25429[(8)]);
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25429__$1,(11),out,inst_25409);
} else {
if((state_val_25430 === (5))){
var inst_25423 = cljs.core.async.close_BANG_.call(null,out);
var state_25429__$1 = state_25429;
var statearr_25442_25459 = state_25429__$1;
(statearr_25442_25459[(2)] = inst_25423);

(statearr_25442_25459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (10))){
var inst_25421 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
var statearr_25443_25460 = state_25429__$1;
(statearr_25443_25460[(2)] = inst_25421);

(statearr_25443_25460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (8))){
var inst_25399 = (state_25429[(10)]);
var inst_25408 = (state_25429[(7)]);
var inst_25410 = (state_25429[(9)]);
var inst_25409 = (state_25429[(8)]);
var inst_25413 = (function (){var cs = inst_25399;
var vec__25404 = inst_25408;
var v = inst_25409;
var c = inst_25410;
return (function (p1__25395_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25395_SHARP_);
});
})();
var inst_25414 = cljs.core.filterv.call(null,inst_25413,inst_25399);
var inst_25399__$1 = inst_25414;
var state_25429__$1 = (function (){var statearr_25444 = state_25429;
(statearr_25444[(10)] = inst_25399__$1);

return statearr_25444;
})();
var statearr_25445_25461 = state_25429__$1;
(statearr_25445_25461[(2)] = null);

(statearr_25445_25461[(1)] = (2));


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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_25446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25446[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_25446[(1)] = (1));

return statearr_25446;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_25429){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_25429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25447){if((e25447 instanceof Object)){
var ex__24025__auto__ = e25447;
var statearr_25448_25462 = state_25429;
(statearr_25448_25462[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25463 = state_25429;
state_25429 = G__25463;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_25429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_25429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_25449 = f__24117__auto__.call(null);
(statearr_25449[(6)] = c__24116__auto___25451);

return statearr_25449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
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
var G__25465 = arguments.length;
switch (G__25465) {
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
var c__24116__auto___25510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_25489){
var state_val_25490 = (state_25489[(1)]);
if((state_val_25490 === (7))){
var inst_25471 = (state_25489[(7)]);
var inst_25471__$1 = (state_25489[(2)]);
var inst_25472 = (inst_25471__$1 == null);
var inst_25473 = cljs.core.not.call(null,inst_25472);
var state_25489__$1 = (function (){var statearr_25491 = state_25489;
(statearr_25491[(7)] = inst_25471__$1);

return statearr_25491;
})();
if(inst_25473){
var statearr_25492_25511 = state_25489__$1;
(statearr_25492_25511[(1)] = (8));

} else {
var statearr_25493_25512 = state_25489__$1;
(statearr_25493_25512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (1))){
var inst_25466 = (0);
var state_25489__$1 = (function (){var statearr_25494 = state_25489;
(statearr_25494[(8)] = inst_25466);

return statearr_25494;
})();
var statearr_25495_25513 = state_25489__$1;
(statearr_25495_25513[(2)] = null);

(statearr_25495_25513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (4))){
var state_25489__$1 = state_25489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25489__$1,(7),ch);
} else {
if((state_val_25490 === (6))){
var inst_25484 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
var statearr_25496_25514 = state_25489__$1;
(statearr_25496_25514[(2)] = inst_25484);

(statearr_25496_25514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (3))){
var inst_25486 = (state_25489[(2)]);
var inst_25487 = cljs.core.async.close_BANG_.call(null,out);
var state_25489__$1 = (function (){var statearr_25497 = state_25489;
(statearr_25497[(9)] = inst_25486);

return statearr_25497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25489__$1,inst_25487);
} else {
if((state_val_25490 === (2))){
var inst_25466 = (state_25489[(8)]);
var inst_25468 = (inst_25466 < n);
var state_25489__$1 = state_25489;
if(cljs.core.truth_(inst_25468)){
var statearr_25498_25515 = state_25489__$1;
(statearr_25498_25515[(1)] = (4));

} else {
var statearr_25499_25516 = state_25489__$1;
(statearr_25499_25516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (11))){
var inst_25466 = (state_25489[(8)]);
var inst_25476 = (state_25489[(2)]);
var inst_25477 = (inst_25466 + (1));
var inst_25466__$1 = inst_25477;
var state_25489__$1 = (function (){var statearr_25500 = state_25489;
(statearr_25500[(8)] = inst_25466__$1);

(statearr_25500[(10)] = inst_25476);

return statearr_25500;
})();
var statearr_25501_25517 = state_25489__$1;
(statearr_25501_25517[(2)] = null);

(statearr_25501_25517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (9))){
var state_25489__$1 = state_25489;
var statearr_25502_25518 = state_25489__$1;
(statearr_25502_25518[(2)] = null);

(statearr_25502_25518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (5))){
var state_25489__$1 = state_25489;
var statearr_25503_25519 = state_25489__$1;
(statearr_25503_25519[(2)] = null);

(statearr_25503_25519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (10))){
var inst_25481 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
var statearr_25504_25520 = state_25489__$1;
(statearr_25504_25520[(2)] = inst_25481);

(statearr_25504_25520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (8))){
var inst_25471 = (state_25489[(7)]);
var state_25489__$1 = state_25489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25489__$1,(11),out,inst_25471);
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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_25505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25505[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_25505[(1)] = (1));

return statearr_25505;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_25489){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_25489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25506){if((e25506 instanceof Object)){
var ex__24025__auto__ = e25506;
var statearr_25507_25521 = state_25489;
(statearr_25507_25521[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25522 = state_25489;
state_25489 = G__25522;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_25489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_25489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_25508 = f__24117__auto__.call(null);
(statearr_25508[(6)] = c__24116__auto___25510);

return statearr_25508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25524 = (function (f,ch,meta25525){
this.f = f;
this.ch = ch;
this.meta25525 = meta25525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25526,meta25525__$1){
var self__ = this;
var _25526__$1 = this;
return (new cljs.core.async.t_cljs$core$async25524(self__.f,self__.ch,meta25525__$1));
}));

(cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25526){
var self__ = this;
var _25526__$1 = this;
return self__.meta25525;
}));

(cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25527 = (function (f,ch,meta25525,_,fn1,meta25528){
this.f = f;
this.ch = ch;
this.meta25525 = meta25525;
this._ = _;
this.fn1 = fn1;
this.meta25528 = meta25528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25529,meta25528__$1){
var self__ = this;
var _25529__$1 = this;
return (new cljs.core.async.t_cljs$core$async25527(self__.f,self__.ch,self__.meta25525,self__._,self__.fn1,meta25528__$1));
}));

(cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25529){
var self__ = this;
var _25529__$1 = this;
return self__.meta25528;
}));

(cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__25523_SHARP_){
return f1.call(null,(((p1__25523_SHARP_ == null))?null:self__.f.call(null,p1__25523_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async25527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25525","meta25525",-407040110,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25524","cljs.core.async/t_cljs$core$async25524",1131426424,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25528","meta25528",1161445290,null)], null);
}));

(cljs.core.async.t_cljs$core$async25527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25527");

(cljs.core.async.t_cljs$core$async25527.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25527.
 */
cljs.core.async.__GT_t_cljs$core$async25527 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25527(f__$1,ch__$1,meta25525__$1,___$2,fn1__$1,meta25528){
return (new cljs.core.async.t_cljs$core$async25527(f__$1,ch__$1,meta25525__$1,___$2,fn1__$1,meta25528));
});

}

return (new cljs.core.async.t_cljs$core$async25527(self__.f,self__.ch,self__.meta25525,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25525","meta25525",-407040110,null)], null);
}));

(cljs.core.async.t_cljs$core$async25524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25524");

(cljs.core.async.t_cljs$core$async25524.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25524.
 */
cljs.core.async.__GT_t_cljs$core$async25524 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25524(f__$1,ch__$1,meta25525){
return (new cljs.core.async.t_cljs$core$async25524(f__$1,ch__$1,meta25525));
});

}

return (new cljs.core.async.t_cljs$core$async25524(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25530 = (function (f,ch,meta25531){
this.f = f;
this.ch = ch;
this.meta25531 = meta25531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25532,meta25531__$1){
var self__ = this;
var _25532__$1 = this;
return (new cljs.core.async.t_cljs$core$async25530(self__.f,self__.ch,meta25531__$1));
}));

(cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25532){
var self__ = this;
var _25532__$1 = this;
return self__.meta25531;
}));

(cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async25530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25531","meta25531",1517535015,null)], null);
}));

(cljs.core.async.t_cljs$core$async25530.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25530");

(cljs.core.async.t_cljs$core$async25530.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25530");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25530.
 */
cljs.core.async.__GT_t_cljs$core$async25530 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25530(f__$1,ch__$1,meta25531){
return (new cljs.core.async.t_cljs$core$async25530(f__$1,ch__$1,meta25531));
});

}

return (new cljs.core.async.t_cljs$core$async25530(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25533 = (function (p,ch,meta25534){
this.p = p;
this.ch = ch;
this.meta25534 = meta25534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25535,meta25534__$1){
var self__ = this;
var _25535__$1 = this;
return (new cljs.core.async.t_cljs$core$async25533(self__.p,self__.ch,meta25534__$1));
}));

(cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25535){
var self__ = this;
var _25535__$1 = this;
return self__.meta25534;
}));

(cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25534","meta25534",1478110914,null)], null);
}));

(cljs.core.async.t_cljs$core$async25533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25533");

(cljs.core.async.t_cljs$core$async25533.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25533.
 */
cljs.core.async.__GT_t_cljs$core$async25533 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25533(p__$1,ch__$1,meta25534){
return (new cljs.core.async.t_cljs$core$async25533(p__$1,ch__$1,meta25534));
});

}

return (new cljs.core.async.t_cljs$core$async25533(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25537 = arguments.length;
switch (G__25537) {
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
var c__24116__auto___25577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_25558){
var state_val_25559 = (state_25558[(1)]);
if((state_val_25559 === (7))){
var inst_25554 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25560_25578 = state_25558__$1;
(statearr_25560_25578[(2)] = inst_25554);

(statearr_25560_25578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (1))){
var state_25558__$1 = state_25558;
var statearr_25561_25579 = state_25558__$1;
(statearr_25561_25579[(2)] = null);

(statearr_25561_25579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (4))){
var inst_25540 = (state_25558[(7)]);
var inst_25540__$1 = (state_25558[(2)]);
var inst_25541 = (inst_25540__$1 == null);
var state_25558__$1 = (function (){var statearr_25562 = state_25558;
(statearr_25562[(7)] = inst_25540__$1);

return statearr_25562;
})();
if(cljs.core.truth_(inst_25541)){
var statearr_25563_25580 = state_25558__$1;
(statearr_25563_25580[(1)] = (5));

} else {
var statearr_25564_25581 = state_25558__$1;
(statearr_25564_25581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (6))){
var inst_25540 = (state_25558[(7)]);
var inst_25545 = p.call(null,inst_25540);
var state_25558__$1 = state_25558;
if(cljs.core.truth_(inst_25545)){
var statearr_25565_25582 = state_25558__$1;
(statearr_25565_25582[(1)] = (8));

} else {
var statearr_25566_25583 = state_25558__$1;
(statearr_25566_25583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (3))){
var inst_25556 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25558__$1,inst_25556);
} else {
if((state_val_25559 === (2))){
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25558__$1,(4),ch);
} else {
if((state_val_25559 === (11))){
var inst_25548 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25567_25584 = state_25558__$1;
(statearr_25567_25584[(2)] = inst_25548);

(statearr_25567_25584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (9))){
var state_25558__$1 = state_25558;
var statearr_25568_25585 = state_25558__$1;
(statearr_25568_25585[(2)] = null);

(statearr_25568_25585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (5))){
var inst_25543 = cljs.core.async.close_BANG_.call(null,out);
var state_25558__$1 = state_25558;
var statearr_25569_25586 = state_25558__$1;
(statearr_25569_25586[(2)] = inst_25543);

(statearr_25569_25586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (10))){
var inst_25551 = (state_25558[(2)]);
var state_25558__$1 = (function (){var statearr_25570 = state_25558;
(statearr_25570[(8)] = inst_25551);

return statearr_25570;
})();
var statearr_25571_25587 = state_25558__$1;
(statearr_25571_25587[(2)] = null);

(statearr_25571_25587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (8))){
var inst_25540 = (state_25558[(7)]);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25558__$1,(11),out,inst_25540);
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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_25572 = [null,null,null,null,null,null,null,null,null];
(statearr_25572[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_25572[(1)] = (1));

return statearr_25572;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_25558){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_25558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25573){if((e25573 instanceof Object)){
var ex__24025__auto__ = e25573;
var statearr_25574_25588 = state_25558;
(statearr_25574_25588[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25589 = state_25558;
state_25558 = G__25589;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_25558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_25558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_25575 = f__24117__auto__.call(null);
(statearr_25575[(6)] = c__24116__auto___25577);

return statearr_25575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25591 = arguments.length;
switch (G__25591) {
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
var c__24116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_25654){
var state_val_25655 = (state_25654[(1)]);
if((state_val_25655 === (7))){
var inst_25650 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
var statearr_25656_25694 = state_25654__$1;
(statearr_25656_25694[(2)] = inst_25650);

(statearr_25656_25694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (20))){
var inst_25620 = (state_25654[(7)]);
var inst_25631 = (state_25654[(2)]);
var inst_25632 = cljs.core.next.call(null,inst_25620);
var inst_25606 = inst_25632;
var inst_25607 = null;
var inst_25608 = (0);
var inst_25609 = (0);
var state_25654__$1 = (function (){var statearr_25657 = state_25654;
(statearr_25657[(8)] = inst_25609);

(statearr_25657[(9)] = inst_25631);

(statearr_25657[(10)] = inst_25608);

(statearr_25657[(11)] = inst_25607);

(statearr_25657[(12)] = inst_25606);

return statearr_25657;
})();
var statearr_25658_25695 = state_25654__$1;
(statearr_25658_25695[(2)] = null);

(statearr_25658_25695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (1))){
var state_25654__$1 = state_25654;
var statearr_25659_25696 = state_25654__$1;
(statearr_25659_25696[(2)] = null);

(statearr_25659_25696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (4))){
var inst_25595 = (state_25654[(13)]);
var inst_25595__$1 = (state_25654[(2)]);
var inst_25596 = (inst_25595__$1 == null);
var state_25654__$1 = (function (){var statearr_25660 = state_25654;
(statearr_25660[(13)] = inst_25595__$1);

return statearr_25660;
})();
if(cljs.core.truth_(inst_25596)){
var statearr_25661_25697 = state_25654__$1;
(statearr_25661_25697[(1)] = (5));

} else {
var statearr_25662_25698 = state_25654__$1;
(statearr_25662_25698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (15))){
var state_25654__$1 = state_25654;
var statearr_25666_25699 = state_25654__$1;
(statearr_25666_25699[(2)] = null);

(statearr_25666_25699[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (21))){
var state_25654__$1 = state_25654;
var statearr_25667_25700 = state_25654__$1;
(statearr_25667_25700[(2)] = null);

(statearr_25667_25700[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (13))){
var inst_25609 = (state_25654[(8)]);
var inst_25608 = (state_25654[(10)]);
var inst_25607 = (state_25654[(11)]);
var inst_25606 = (state_25654[(12)]);
var inst_25616 = (state_25654[(2)]);
var inst_25617 = (inst_25609 + (1));
var tmp25663 = inst_25608;
var tmp25664 = inst_25607;
var tmp25665 = inst_25606;
var inst_25606__$1 = tmp25665;
var inst_25607__$1 = tmp25664;
var inst_25608__$1 = tmp25663;
var inst_25609__$1 = inst_25617;
var state_25654__$1 = (function (){var statearr_25668 = state_25654;
(statearr_25668[(8)] = inst_25609__$1);

(statearr_25668[(14)] = inst_25616);

(statearr_25668[(10)] = inst_25608__$1);

(statearr_25668[(11)] = inst_25607__$1);

(statearr_25668[(12)] = inst_25606__$1);

return statearr_25668;
})();
var statearr_25669_25701 = state_25654__$1;
(statearr_25669_25701[(2)] = null);

(statearr_25669_25701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (22))){
var state_25654__$1 = state_25654;
var statearr_25670_25702 = state_25654__$1;
(statearr_25670_25702[(2)] = null);

(statearr_25670_25702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (6))){
var inst_25595 = (state_25654[(13)]);
var inst_25604 = f.call(null,inst_25595);
var inst_25605 = cljs.core.seq.call(null,inst_25604);
var inst_25606 = inst_25605;
var inst_25607 = null;
var inst_25608 = (0);
var inst_25609 = (0);
var state_25654__$1 = (function (){var statearr_25671 = state_25654;
(statearr_25671[(8)] = inst_25609);

(statearr_25671[(10)] = inst_25608);

(statearr_25671[(11)] = inst_25607);

(statearr_25671[(12)] = inst_25606);

return statearr_25671;
})();
var statearr_25672_25703 = state_25654__$1;
(statearr_25672_25703[(2)] = null);

(statearr_25672_25703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (17))){
var inst_25620 = (state_25654[(7)]);
var inst_25624 = cljs.core.chunk_first.call(null,inst_25620);
var inst_25625 = cljs.core.chunk_rest.call(null,inst_25620);
var inst_25626 = cljs.core.count.call(null,inst_25624);
var inst_25606 = inst_25625;
var inst_25607 = inst_25624;
var inst_25608 = inst_25626;
var inst_25609 = (0);
var state_25654__$1 = (function (){var statearr_25673 = state_25654;
(statearr_25673[(8)] = inst_25609);

(statearr_25673[(10)] = inst_25608);

(statearr_25673[(11)] = inst_25607);

(statearr_25673[(12)] = inst_25606);

return statearr_25673;
})();
var statearr_25674_25704 = state_25654__$1;
(statearr_25674_25704[(2)] = null);

(statearr_25674_25704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (3))){
var inst_25652 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25654__$1,inst_25652);
} else {
if((state_val_25655 === (12))){
var inst_25640 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
var statearr_25675_25705 = state_25654__$1;
(statearr_25675_25705[(2)] = inst_25640);

(statearr_25675_25705[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (2))){
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25654__$1,(4),in$);
} else {
if((state_val_25655 === (23))){
var inst_25648 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
var statearr_25676_25706 = state_25654__$1;
(statearr_25676_25706[(2)] = inst_25648);

(statearr_25676_25706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (19))){
var inst_25635 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
var statearr_25677_25707 = state_25654__$1;
(statearr_25677_25707[(2)] = inst_25635);

(statearr_25677_25707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (11))){
var inst_25606 = (state_25654[(12)]);
var inst_25620 = (state_25654[(7)]);
var inst_25620__$1 = cljs.core.seq.call(null,inst_25606);
var state_25654__$1 = (function (){var statearr_25678 = state_25654;
(statearr_25678[(7)] = inst_25620__$1);

return statearr_25678;
})();
if(inst_25620__$1){
var statearr_25679_25708 = state_25654__$1;
(statearr_25679_25708[(1)] = (14));

} else {
var statearr_25680_25709 = state_25654__$1;
(statearr_25680_25709[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (9))){
var inst_25642 = (state_25654[(2)]);
var inst_25643 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25654__$1 = (function (){var statearr_25681 = state_25654;
(statearr_25681[(15)] = inst_25642);

return statearr_25681;
})();
if(cljs.core.truth_(inst_25643)){
var statearr_25682_25710 = state_25654__$1;
(statearr_25682_25710[(1)] = (21));

} else {
var statearr_25683_25711 = state_25654__$1;
(statearr_25683_25711[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (5))){
var inst_25598 = cljs.core.async.close_BANG_.call(null,out);
var state_25654__$1 = state_25654;
var statearr_25684_25712 = state_25654__$1;
(statearr_25684_25712[(2)] = inst_25598);

(statearr_25684_25712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (14))){
var inst_25620 = (state_25654[(7)]);
var inst_25622 = cljs.core.chunked_seq_QMARK_.call(null,inst_25620);
var state_25654__$1 = state_25654;
if(inst_25622){
var statearr_25685_25713 = state_25654__$1;
(statearr_25685_25713[(1)] = (17));

} else {
var statearr_25686_25714 = state_25654__$1;
(statearr_25686_25714[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (16))){
var inst_25638 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
var statearr_25687_25715 = state_25654__$1;
(statearr_25687_25715[(2)] = inst_25638);

(statearr_25687_25715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (10))){
var inst_25609 = (state_25654[(8)]);
var inst_25607 = (state_25654[(11)]);
var inst_25614 = cljs.core._nth.call(null,inst_25607,inst_25609);
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25654__$1,(13),out,inst_25614);
} else {
if((state_val_25655 === (18))){
var inst_25620 = (state_25654[(7)]);
var inst_25629 = cljs.core.first.call(null,inst_25620);
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25654__$1,(20),out,inst_25629);
} else {
if((state_val_25655 === (8))){
var inst_25609 = (state_25654[(8)]);
var inst_25608 = (state_25654[(10)]);
var inst_25611 = (inst_25609 < inst_25608);
var inst_25612 = inst_25611;
var state_25654__$1 = state_25654;
if(cljs.core.truth_(inst_25612)){
var statearr_25688_25716 = state_25654__$1;
(statearr_25688_25716[(1)] = (10));

} else {
var statearr_25689_25717 = state_25654__$1;
(statearr_25689_25717[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_25690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25690[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__);

(statearr_25690[(1)] = (1));

return statearr_25690;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____1 = (function (state_25654){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_25654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25691){if((e25691 instanceof Object)){
var ex__24025__auto__ = e25691;
var statearr_25692_25718 = state_25654;
(statearr_25692_25718[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25719 = state_25654;
state_25654 = G__25719;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__ = function(state_25654){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____1.call(this,state_25654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_25693 = f__24117__auto__.call(null);
(statearr_25693[(6)] = c__24116__auto__);

return statearr_25693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));

return c__24116__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25721 = arguments.length;
switch (G__25721) {
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
var G__25724 = arguments.length;
switch (G__25724) {
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
var G__25727 = arguments.length;
switch (G__25727) {
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
var c__24116__auto___25774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_25751){
var state_val_25752 = (state_25751[(1)]);
if((state_val_25752 === (7))){
var inst_25746 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25753_25775 = state_25751__$1;
(statearr_25753_25775[(2)] = inst_25746);

(statearr_25753_25775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (1))){
var inst_25728 = null;
var state_25751__$1 = (function (){var statearr_25754 = state_25751;
(statearr_25754[(7)] = inst_25728);

return statearr_25754;
})();
var statearr_25755_25776 = state_25751__$1;
(statearr_25755_25776[(2)] = null);

(statearr_25755_25776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (4))){
var inst_25731 = (state_25751[(8)]);
var inst_25731__$1 = (state_25751[(2)]);
var inst_25732 = (inst_25731__$1 == null);
var inst_25733 = cljs.core.not.call(null,inst_25732);
var state_25751__$1 = (function (){var statearr_25756 = state_25751;
(statearr_25756[(8)] = inst_25731__$1);

return statearr_25756;
})();
if(inst_25733){
var statearr_25757_25777 = state_25751__$1;
(statearr_25757_25777[(1)] = (5));

} else {
var statearr_25758_25778 = state_25751__$1;
(statearr_25758_25778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (6))){
var state_25751__$1 = state_25751;
var statearr_25759_25779 = state_25751__$1;
(statearr_25759_25779[(2)] = null);

(statearr_25759_25779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (3))){
var inst_25748 = (state_25751[(2)]);
var inst_25749 = cljs.core.async.close_BANG_.call(null,out);
var state_25751__$1 = (function (){var statearr_25760 = state_25751;
(statearr_25760[(9)] = inst_25748);

return statearr_25760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25751__$1,inst_25749);
} else {
if((state_val_25752 === (2))){
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25751__$1,(4),ch);
} else {
if((state_val_25752 === (11))){
var inst_25731 = (state_25751[(8)]);
var inst_25740 = (state_25751[(2)]);
var inst_25728 = inst_25731;
var state_25751__$1 = (function (){var statearr_25761 = state_25751;
(statearr_25761[(10)] = inst_25740);

(statearr_25761[(7)] = inst_25728);

return statearr_25761;
})();
var statearr_25762_25780 = state_25751__$1;
(statearr_25762_25780[(2)] = null);

(statearr_25762_25780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (9))){
var inst_25731 = (state_25751[(8)]);
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25751__$1,(11),out,inst_25731);
} else {
if((state_val_25752 === (5))){
var inst_25728 = (state_25751[(7)]);
var inst_25731 = (state_25751[(8)]);
var inst_25735 = cljs.core._EQ_.call(null,inst_25731,inst_25728);
var state_25751__$1 = state_25751;
if(inst_25735){
var statearr_25764_25781 = state_25751__$1;
(statearr_25764_25781[(1)] = (8));

} else {
var statearr_25765_25782 = state_25751__$1;
(statearr_25765_25782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (10))){
var inst_25743 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25766_25783 = state_25751__$1;
(statearr_25766_25783[(2)] = inst_25743);

(statearr_25766_25783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (8))){
var inst_25728 = (state_25751[(7)]);
var tmp25763 = inst_25728;
var inst_25728__$1 = tmp25763;
var state_25751__$1 = (function (){var statearr_25767 = state_25751;
(statearr_25767[(7)] = inst_25728__$1);

return statearr_25767;
})();
var statearr_25768_25784 = state_25751__$1;
(statearr_25768_25784[(2)] = null);

(statearr_25768_25784[(1)] = (2));


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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_25769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25769[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_25769[(1)] = (1));

return statearr_25769;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_25751){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_25751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25770){if((e25770 instanceof Object)){
var ex__24025__auto__ = e25770;
var statearr_25771_25785 = state_25751;
(statearr_25771_25785[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25786 = state_25751;
state_25751 = G__25786;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_25751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_25751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_25772 = f__24117__auto__.call(null);
(statearr_25772[(6)] = c__24116__auto___25774);

return statearr_25772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25788 = arguments.length;
switch (G__25788) {
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
var c__24116__auto___25854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_25826){
var state_val_25827 = (state_25826[(1)]);
if((state_val_25827 === (7))){
var inst_25822 = (state_25826[(2)]);
var state_25826__$1 = state_25826;
var statearr_25828_25855 = state_25826__$1;
(statearr_25828_25855[(2)] = inst_25822);

(statearr_25828_25855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (1))){
var inst_25789 = (new Array(n));
var inst_25790 = inst_25789;
var inst_25791 = (0);
var state_25826__$1 = (function (){var statearr_25829 = state_25826;
(statearr_25829[(7)] = inst_25790);

(statearr_25829[(8)] = inst_25791);

return statearr_25829;
})();
var statearr_25830_25856 = state_25826__$1;
(statearr_25830_25856[(2)] = null);

(statearr_25830_25856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (4))){
var inst_25794 = (state_25826[(9)]);
var inst_25794__$1 = (state_25826[(2)]);
var inst_25795 = (inst_25794__$1 == null);
var inst_25796 = cljs.core.not.call(null,inst_25795);
var state_25826__$1 = (function (){var statearr_25831 = state_25826;
(statearr_25831[(9)] = inst_25794__$1);

return statearr_25831;
})();
if(inst_25796){
var statearr_25832_25857 = state_25826__$1;
(statearr_25832_25857[(1)] = (5));

} else {
var statearr_25833_25858 = state_25826__$1;
(statearr_25833_25858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (15))){
var inst_25816 = (state_25826[(2)]);
var state_25826__$1 = state_25826;
var statearr_25834_25859 = state_25826__$1;
(statearr_25834_25859[(2)] = inst_25816);

(statearr_25834_25859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (13))){
var state_25826__$1 = state_25826;
var statearr_25835_25860 = state_25826__$1;
(statearr_25835_25860[(2)] = null);

(statearr_25835_25860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (6))){
var inst_25791 = (state_25826[(8)]);
var inst_25812 = (inst_25791 > (0));
var state_25826__$1 = state_25826;
if(cljs.core.truth_(inst_25812)){
var statearr_25836_25861 = state_25826__$1;
(statearr_25836_25861[(1)] = (12));

} else {
var statearr_25837_25862 = state_25826__$1;
(statearr_25837_25862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (3))){
var inst_25824 = (state_25826[(2)]);
var state_25826__$1 = state_25826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25826__$1,inst_25824);
} else {
if((state_val_25827 === (12))){
var inst_25790 = (state_25826[(7)]);
var inst_25814 = cljs.core.vec.call(null,inst_25790);
var state_25826__$1 = state_25826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25826__$1,(15),out,inst_25814);
} else {
if((state_val_25827 === (2))){
var state_25826__$1 = state_25826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25826__$1,(4),ch);
} else {
if((state_val_25827 === (11))){
var inst_25806 = (state_25826[(2)]);
var inst_25807 = (new Array(n));
var inst_25790 = inst_25807;
var inst_25791 = (0);
var state_25826__$1 = (function (){var statearr_25838 = state_25826;
(statearr_25838[(10)] = inst_25806);

(statearr_25838[(7)] = inst_25790);

(statearr_25838[(8)] = inst_25791);

return statearr_25838;
})();
var statearr_25839_25863 = state_25826__$1;
(statearr_25839_25863[(2)] = null);

(statearr_25839_25863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (9))){
var inst_25790 = (state_25826[(7)]);
var inst_25804 = cljs.core.vec.call(null,inst_25790);
var state_25826__$1 = state_25826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25826__$1,(11),out,inst_25804);
} else {
if((state_val_25827 === (5))){
var inst_25790 = (state_25826[(7)]);
var inst_25794 = (state_25826[(9)]);
var inst_25799 = (state_25826[(11)]);
var inst_25791 = (state_25826[(8)]);
var inst_25798 = (inst_25790[inst_25791] = inst_25794);
var inst_25799__$1 = (inst_25791 + (1));
var inst_25800 = (inst_25799__$1 < n);
var state_25826__$1 = (function (){var statearr_25840 = state_25826;
(statearr_25840[(12)] = inst_25798);

(statearr_25840[(11)] = inst_25799__$1);

return statearr_25840;
})();
if(cljs.core.truth_(inst_25800)){
var statearr_25841_25864 = state_25826__$1;
(statearr_25841_25864[(1)] = (8));

} else {
var statearr_25842_25865 = state_25826__$1;
(statearr_25842_25865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (14))){
var inst_25819 = (state_25826[(2)]);
var inst_25820 = cljs.core.async.close_BANG_.call(null,out);
var state_25826__$1 = (function (){var statearr_25844 = state_25826;
(statearr_25844[(13)] = inst_25819);

return statearr_25844;
})();
var statearr_25845_25866 = state_25826__$1;
(statearr_25845_25866[(2)] = inst_25820);

(statearr_25845_25866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (10))){
var inst_25810 = (state_25826[(2)]);
var state_25826__$1 = state_25826;
var statearr_25846_25867 = state_25826__$1;
(statearr_25846_25867[(2)] = inst_25810);

(statearr_25846_25867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (8))){
var inst_25790 = (state_25826[(7)]);
var inst_25799 = (state_25826[(11)]);
var tmp25843 = inst_25790;
var inst_25790__$1 = tmp25843;
var inst_25791 = inst_25799;
var state_25826__$1 = (function (){var statearr_25847 = state_25826;
(statearr_25847[(7)] = inst_25790__$1);

(statearr_25847[(8)] = inst_25791);

return statearr_25847;
})();
var statearr_25848_25868 = state_25826__$1;
(statearr_25848_25868[(2)] = null);

(statearr_25848_25868[(1)] = (2));


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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_25849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25849[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_25849[(1)] = (1));

return statearr_25849;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_25826){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_25826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25850){if((e25850 instanceof Object)){
var ex__24025__auto__ = e25850;
var statearr_25851_25869 = state_25826;
(statearr_25851_25869[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25870 = state_25826;
state_25826 = G__25870;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_25826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_25826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_25852 = f__24117__auto__.call(null);
(statearr_25852[(6)] = c__24116__auto___25854);

return statearr_25852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25872 = arguments.length;
switch (G__25872) {
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
var c__24116__auto___25942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_25914){
var state_val_25915 = (state_25914[(1)]);
if((state_val_25915 === (7))){
var inst_25910 = (state_25914[(2)]);
var state_25914__$1 = state_25914;
var statearr_25916_25943 = state_25914__$1;
(statearr_25916_25943[(2)] = inst_25910);

(statearr_25916_25943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25915 === (1))){
var inst_25873 = [];
var inst_25874 = inst_25873;
var inst_25875 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25914__$1 = (function (){var statearr_25917 = state_25914;
(statearr_25917[(7)] = inst_25874);

(statearr_25917[(8)] = inst_25875);

return statearr_25917;
})();
var statearr_25918_25944 = state_25914__$1;
(statearr_25918_25944[(2)] = null);

(statearr_25918_25944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25915 === (4))){
var inst_25878 = (state_25914[(9)]);
var inst_25878__$1 = (state_25914[(2)]);
var inst_25879 = (inst_25878__$1 == null);
var inst_25880 = cljs.core.not.call(null,inst_25879);
var state_25914__$1 = (function (){var statearr_25919 = state_25914;
(statearr_25919[(9)] = inst_25878__$1);

return statearr_25919;
})();
if(inst_25880){
var statearr_25920_25945 = state_25914__$1;
(statearr_25920_25945[(1)] = (5));

} else {
var statearr_25921_25946 = state_25914__$1;
(statearr_25921_25946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25915 === (15))){
var inst_25904 = (state_25914[(2)]);
var state_25914__$1 = state_25914;
var statearr_25922_25947 = state_25914__$1;
(statearr_25922_25947[(2)] = inst_25904);

(statearr_25922_25947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25915 === (13))){
var state_25914__$1 = state_25914;
var statearr_25923_25948 = state_25914__$1;
(statearr_25923_25948[(2)] = null);

(statearr_25923_25948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25915 === (6))){
var inst_25874 = (state_25914[(7)]);
var inst_25899 = inst_25874.length;
var inst_25900 = (inst_25899 > (0));
var state_25914__$1 = state_25914;
if(cljs.core.truth_(inst_25900)){
var statearr_25924_25949 = state_25914__$1;
(statearr_25924_25949[(1)] = (12));

} else {
var statearr_25925_25950 = state_25914__$1;
(statearr_25925_25950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25915 === (3))){
var inst_25912 = (state_25914[(2)]);
var state_25914__$1 = state_25914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25914__$1,inst_25912);
} else {
if((state_val_25915 === (12))){
var inst_25874 = (state_25914[(7)]);
var inst_25902 = cljs.core.vec.call(null,inst_25874);
var state_25914__$1 = state_25914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25914__$1,(15),out,inst_25902);
} else {
if((state_val_25915 === (2))){
var state_25914__$1 = state_25914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25914__$1,(4),ch);
} else {
if((state_val_25915 === (11))){
var inst_25878 = (state_25914[(9)]);
var inst_25882 = (state_25914[(10)]);
var inst_25892 = (state_25914[(2)]);
var inst_25893 = [];
var inst_25894 = inst_25893.push(inst_25878);
var inst_25874 = inst_25893;
var inst_25875 = inst_25882;
var state_25914__$1 = (function (){var statearr_25926 = state_25914;
(statearr_25926[(7)] = inst_25874);

(statearr_25926[(8)] = inst_25875);

(statearr_25926[(11)] = inst_25892);

(statearr_25926[(12)] = inst_25894);

return statearr_25926;
})();
var statearr_25927_25951 = state_25914__$1;
(statearr_25927_25951[(2)] = null);

(statearr_25927_25951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25915 === (9))){
var inst_25874 = (state_25914[(7)]);
var inst_25890 = cljs.core.vec.call(null,inst_25874);
var state_25914__$1 = state_25914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25914__$1,(11),out,inst_25890);
} else {
if((state_val_25915 === (5))){
var inst_25875 = (state_25914[(8)]);
var inst_25878 = (state_25914[(9)]);
var inst_25882 = (state_25914[(10)]);
var inst_25882__$1 = f.call(null,inst_25878);
var inst_25883 = cljs.core._EQ_.call(null,inst_25882__$1,inst_25875);
var inst_25884 = cljs.core.keyword_identical_QMARK_.call(null,inst_25875,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25885 = ((inst_25883) || (inst_25884));
var state_25914__$1 = (function (){var statearr_25928 = state_25914;
(statearr_25928[(10)] = inst_25882__$1);

return statearr_25928;
})();
if(cljs.core.truth_(inst_25885)){
var statearr_25929_25952 = state_25914__$1;
(statearr_25929_25952[(1)] = (8));

} else {
var statearr_25930_25953 = state_25914__$1;
(statearr_25930_25953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25915 === (14))){
var inst_25907 = (state_25914[(2)]);
var inst_25908 = cljs.core.async.close_BANG_.call(null,out);
var state_25914__$1 = (function (){var statearr_25932 = state_25914;
(statearr_25932[(13)] = inst_25907);

return statearr_25932;
})();
var statearr_25933_25954 = state_25914__$1;
(statearr_25933_25954[(2)] = inst_25908);

(statearr_25933_25954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25915 === (10))){
var inst_25897 = (state_25914[(2)]);
var state_25914__$1 = state_25914;
var statearr_25934_25955 = state_25914__$1;
(statearr_25934_25955[(2)] = inst_25897);

(statearr_25934_25955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25915 === (8))){
var inst_25874 = (state_25914[(7)]);
var inst_25878 = (state_25914[(9)]);
var inst_25882 = (state_25914[(10)]);
var inst_25887 = inst_25874.push(inst_25878);
var tmp25931 = inst_25874;
var inst_25874__$1 = tmp25931;
var inst_25875 = inst_25882;
var state_25914__$1 = (function (){var statearr_25935 = state_25914;
(statearr_25935[(14)] = inst_25887);

(statearr_25935[(7)] = inst_25874__$1);

(statearr_25935[(8)] = inst_25875);

return statearr_25935;
})();
var statearr_25936_25956 = state_25914__$1;
(statearr_25936_25956[(2)] = null);

(statearr_25936_25956[(1)] = (2));


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
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_25937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25937[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_25937[(1)] = (1));

return statearr_25937;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_25914){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_25914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25938){if((e25938 instanceof Object)){
var ex__24025__auto__ = e25938;
var statearr_25939_25957 = state_25914;
(statearr_25939_25957[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25958 = state_25914;
state_25914 = G__25958;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_25914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_25914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_25940 = f__24117__auto__.call(null);
(statearr_25940[(6)] = c__24116__auto___25942);

return statearr_25940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1717629077879
