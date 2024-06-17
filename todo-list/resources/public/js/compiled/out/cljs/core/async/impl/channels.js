// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716 = (function (val,meta24717){
this.val = val;
this.meta24717 = meta24717;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24718,meta24717__$1){
var self__ = this;
var _24718__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716(self__.val,meta24717__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24718){
var self__ = this;
var _24718__$1 = this;
return self__.meta24717;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta24717","meta24717",1142157757,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels24716");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels24716");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels24716.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels24716 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels24716(val__$1,meta24717){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716(val__$1,meta24717));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels24716(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_24719 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$);
} else {
var m__4461__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_24719.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_24731 = self__.puts.pop();
if((putter_24731 == null)){
} else {
var put_handler_24732 = putter_24731.handler;
var val_24733 = putter_24731.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_24732)){
var put_cb_24734 = cljs.core.async.impl.protocols.commit.call(null,put_handler_24732);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_24734,put_handler_24732,val_24733,putter_24731,this$__$1){
return (function (){
return put_cb_24734.call(null,true);
});})(put_cb_24734,put_handler_24732,val_24733,putter_24731,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = self__.buf;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__4149__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__24735 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__24735;
continue;
} else {
var G__24736 = takers;
takers = G__24736;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__24720_24737 = cljs.core.seq.call(null,take_cbs);
var chunk__24721_24738 = null;
var count__24722_24739 = (0);
var i__24723_24740 = (0);
while(true){
if((i__24723_24740 < count__24722_24739)){
var f_24741 = cljs.core._nth.call(null,chunk__24721_24738,i__24723_24740);
cljs.core.async.impl.dispatch.run.call(null,f_24741);


var G__24742 = seq__24720_24737;
var G__24743 = chunk__24721_24738;
var G__24744 = count__24722_24739;
var G__24745 = (i__24723_24740 + (1));
seq__24720_24737 = G__24742;
chunk__24721_24738 = G__24743;
count__24722_24739 = G__24744;
i__24723_24740 = G__24745;
continue;
} else {
var temp__5735__auto___24746 = cljs.core.seq.call(null,seq__24720_24737);
if(temp__5735__auto___24746){
var seq__24720_24747__$1 = temp__5735__auto___24746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24720_24747__$1)){
var c__4591__auto___24748 = cljs.core.chunk_first.call(null,seq__24720_24747__$1);
var G__24749 = cljs.core.chunk_rest.call(null,seq__24720_24747__$1);
var G__24750 = c__4591__auto___24748;
var G__24751 = cljs.core.count.call(null,c__4591__auto___24748);
var G__24752 = (0);
seq__24720_24737 = G__24749;
chunk__24721_24738 = G__24750;
count__24722_24739 = G__24751;
i__24723_24740 = G__24752;
continue;
} else {
var f_24753 = cljs.core.first.call(null,seq__24720_24747__$1);
cljs.core.async.impl.dispatch.run.call(null,f_24753);


var G__24754 = cljs.core.next.call(null,seq__24720_24747__$1);
var G__24755 = null;
var G__24756 = (0);
var G__24757 = (0);
seq__24720_24737 = G__24754;
chunk__24721_24738 = G__24755;
count__24722_24739 = G__24756;
i__24723_24740 = G__24757;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5733__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5733__auto__)){
var take_cb = temp__5733__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__24724 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = ((cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler))?cljs.core.async.impl.protocols.commit.call(null,put_handler):false);
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))){
var G__24758 = cbs__$1;
cbs = G__24758;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__24724,(0),null);
var cbs = cljs.core.nth.call(null,vec__24724,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__24727_24759 = cljs.core.seq.call(null,cbs);
var chunk__24728_24760 = null;
var count__24729_24761 = (0);
var i__24730_24762 = (0);
while(true){
if((i__24730_24762 < count__24729_24761)){
var cb_24763 = cljs.core._nth.call(null,chunk__24728_24760,i__24730_24762);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__24727_24759,chunk__24728_24760,count__24729_24761,i__24730_24762,cb_24763,val,vec__24724,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return cb_24763.call(null,true);
});})(seq__24727_24759,chunk__24728_24760,count__24729_24761,i__24730_24762,cb_24763,val,vec__24724,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__24764 = seq__24727_24759;
var G__24765 = chunk__24728_24760;
var G__24766 = count__24729_24761;
var G__24767 = (i__24730_24762 + (1));
seq__24727_24759 = G__24764;
chunk__24728_24760 = G__24765;
count__24729_24761 = G__24766;
i__24730_24762 = G__24767;
continue;
} else {
var temp__5735__auto___24768 = cljs.core.seq.call(null,seq__24727_24759);
if(temp__5735__auto___24768){
var seq__24727_24769__$1 = temp__5735__auto___24768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24727_24769__$1)){
var c__4591__auto___24770 = cljs.core.chunk_first.call(null,seq__24727_24769__$1);
var G__24771 = cljs.core.chunk_rest.call(null,seq__24727_24769__$1);
var G__24772 = c__4591__auto___24770;
var G__24773 = cljs.core.count.call(null,c__4591__auto___24770);
var G__24774 = (0);
seq__24727_24759 = G__24771;
chunk__24728_24760 = G__24772;
count__24729_24761 = G__24773;
i__24730_24762 = G__24774;
continue;
} else {
var cb_24775 = cljs.core.first.call(null,seq__24727_24769__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__24727_24759,chunk__24728_24760,count__24729_24761,i__24730_24762,cb_24775,seq__24727_24769__$1,temp__5735__auto___24768,val,vec__24724,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return cb_24775.call(null,true);
});})(seq__24727_24759,chunk__24728_24760,count__24729_24761,i__24730_24762,cb_24775,seq__24727_24769__$1,temp__5735__auto___24768,val,vec__24724,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__24776 = cljs.core.next.call(null,seq__24727_24769__$1);
var G__24777 = null;
var G__24778 = (0);
var G__24779 = (0);
seq__24727_24759 = G__24776;
chunk__24728_24760 = G__24777;
count__24729_24761 = G__24778;
i__24730_24762 = G__24779;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return put_cb.call(null,true);
}));

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__4149__auto__;
}
})())){
var has_val = (function (){var and__4149__auto__ = self__.buf;
if(cljs.core.truth_(and__4149__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4149__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4149__auto__ = self__.buf;
if(cljs.core.truth_(and__4149__auto__)){
return (self__.puts.length === (0));
} else {
return and__4149__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_24780 = self__.takes.pop();
if((taker_24780 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_24780)){
var take_cb_24781 = cljs.core.async.impl.protocols.commit.call(null,taker_24780);
var val_24782 = (cljs.core.truth_((function (){var and__4149__auto__ = self__.buf;
if(cljs.core.truth_(and__4149__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4149__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_24781,val_24782,taker_24780,this$__$1){
return (function (){
return take_cb_24781.call(null,val_24782);
});})(take_cb_24781,val_24782,taker_24780,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__4160__auto__ = exh;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__24784 = arguments.length;
switch (G__24784) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__24788 = null;
var G__24788__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e24785){var t = e24785;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__24788__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e24786){var t = e24786;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__24788 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__24788__1.call(this,buf__$1);
case 2:
return G__24788__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24788.cljs$core$IFn$_invoke$arity$1 = G__24788__1;
G__24788.cljs$core$IFn$_invoke$arity$2 = G__24788__2;
return G__24788;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=channels.js.map?rel=1718651152660
