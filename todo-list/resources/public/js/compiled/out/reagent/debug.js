// Compiled by ClojureScript 1.10.844 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21204__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21205__i = 0, G__21205__a = new Array(arguments.length -  0);
while (G__21205__i < G__21205__a.length) {G__21205__a[G__21205__i] = arguments[G__21205__i + 0]; ++G__21205__i;}
  args = new cljs.core.IndexedSeq(G__21205__a,0,null);
} 
return G__21204__delegate.call(this,args);};
G__21204.cljs$lang$maxFixedArity = 0;
G__21204.cljs$lang$applyTo = (function (arglist__21206){
var args = cljs.core.seq(arglist__21206);
return G__21204__delegate(args);
});
G__21204.cljs$core$IFn$_invoke$arity$variadic = G__21204__delegate;
return G__21204;
})()
);

(o.error = (function() { 
var G__21207__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21208__i = 0, G__21208__a = new Array(arguments.length -  0);
while (G__21208__i < G__21208__a.length) {G__21208__a[G__21208__i] = arguments[G__21208__i + 0]; ++G__21208__i;}
  args = new cljs.core.IndexedSeq(G__21208__a,0,null);
} 
return G__21207__delegate.call(this,args);};
G__21207.cljs$lang$maxFixedArity = 0;
G__21207.cljs$lang$applyTo = (function (arglist__21209){
var args = cljs.core.seq(arglist__21209);
return G__21207__delegate(args);
});
G__21207.cljs$core$IFn$_invoke$arity$variadic = G__21207__delegate;
return G__21207;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1717626494212
