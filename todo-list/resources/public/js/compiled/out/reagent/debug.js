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
var G__37500__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37501__i = 0, G__37501__a = new Array(arguments.length -  0);
while (G__37501__i < G__37501__a.length) {G__37501__a[G__37501__i] = arguments[G__37501__i + 0]; ++G__37501__i;}
  args = new cljs.core.IndexedSeq(G__37501__a,0,null);
} 
return G__37500__delegate.call(this,args);};
G__37500.cljs$lang$maxFixedArity = 0;
G__37500.cljs$lang$applyTo = (function (arglist__37502){
var args = cljs.core.seq(arglist__37502);
return G__37500__delegate(args);
});
G__37500.cljs$core$IFn$_invoke$arity$variadic = G__37500__delegate;
return G__37500;
})()
);

(o.error = (function() { 
var G__37503__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37504__i = 0, G__37504__a = new Array(arguments.length -  0);
while (G__37504__i < G__37504__a.length) {G__37504__a[G__37504__i] = arguments[G__37504__i + 0]; ++G__37504__i;}
  args = new cljs.core.IndexedSeq(G__37504__a,0,null);
} 
return G__37503__delegate.call(this,args);};
G__37503.cljs$lang$maxFixedArity = 0;
G__37503.cljs$lang$applyTo = (function (arglist__37505){
var args = cljs.core.seq(arglist__37505);
return G__37503__delegate(args);
});
G__37503.cljs$core$IFn$_invoke$arity$variadic = G__37503__delegate;
return G__37503;
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

//# sourceMappingURL=debug.js.map?rel=1718651916206
