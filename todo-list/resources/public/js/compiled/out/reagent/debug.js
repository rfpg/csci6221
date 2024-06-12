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
var G__23095__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23095 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23096__i = 0, G__23096__a = new Array(arguments.length -  0);
while (G__23096__i < G__23096__a.length) {G__23096__a[G__23096__i] = arguments[G__23096__i + 0]; ++G__23096__i;}
  args = new cljs.core.IndexedSeq(G__23096__a,0,null);
} 
return G__23095__delegate.call(this,args);};
G__23095.cljs$lang$maxFixedArity = 0;
G__23095.cljs$lang$applyTo = (function (arglist__23097){
var args = cljs.core.seq(arglist__23097);
return G__23095__delegate(args);
});
G__23095.cljs$core$IFn$_invoke$arity$variadic = G__23095__delegate;
return G__23095;
})()
);

(o.error = (function() { 
var G__23098__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23099__i = 0, G__23099__a = new Array(arguments.length -  0);
while (G__23099__i < G__23099__a.length) {G__23099__a[G__23099__i] = arguments[G__23099__i + 0]; ++G__23099__i;}
  args = new cljs.core.IndexedSeq(G__23099__a,0,null);
} 
return G__23098__delegate.call(this,args);};
G__23098.cljs$lang$maxFixedArity = 0;
G__23098.cljs$lang$applyTo = (function (arglist__23100){
var args = cljs.core.seq(arglist__23100);
return G__23098__delegate(args);
});
G__23098.cljs$core$IFn$_invoke$arity$variadic = G__23098__delegate;
return G__23098;
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

//# sourceMappingURL=debug.js.map?rel=1717787129265
