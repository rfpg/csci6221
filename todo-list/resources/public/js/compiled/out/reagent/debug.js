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
var G__23224__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23225__i = 0, G__23225__a = new Array(arguments.length -  0);
while (G__23225__i < G__23225__a.length) {G__23225__a[G__23225__i] = arguments[G__23225__i + 0]; ++G__23225__i;}
  args = new cljs.core.IndexedSeq(G__23225__a,0,null);
} 
return G__23224__delegate.call(this,args);};
G__23224.cljs$lang$maxFixedArity = 0;
G__23224.cljs$lang$applyTo = (function (arglist__23226){
var args = cljs.core.seq(arglist__23226);
return G__23224__delegate(args);
});
G__23224.cljs$core$IFn$_invoke$arity$variadic = G__23224__delegate;
return G__23224;
})()
);

(o.error = (function() { 
var G__23227__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23228__i = 0, G__23228__a = new Array(arguments.length -  0);
while (G__23228__i < G__23228__a.length) {G__23228__a[G__23228__i] = arguments[G__23228__i + 0]; ++G__23228__i;}
  args = new cljs.core.IndexedSeq(G__23228__a,0,null);
} 
return G__23227__delegate.call(this,args);};
G__23227.cljs$lang$maxFixedArity = 0;
G__23227.cljs$lang$applyTo = (function (arglist__23229){
var args = cljs.core.seq(arglist__23229);
return G__23227__delegate(args);
});
G__23227.cljs$core$IFn$_invoke$arity$variadic = G__23227__delegate;
return G__23227;
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

//# sourceMappingURL=debug.js.map?rel=1718650403871
