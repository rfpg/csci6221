// Compiled by ClojureScript 1.10.844 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31672__delegate = function (x__31656__auto__){
if(cljs.core.truth_(todo_list.core.on_js_reload)){
return cljs.core.apply.call(null,todo_list.core.on_js_reload,x__31656__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","todo-list.core/on-js-reload","' is missing"].join(''));
}
};
var G__31672 = function (var_args){
var x__31656__auto__ = null;
if (arguments.length > 0) {
var G__31673__i = 0, G__31673__a = new Array(arguments.length -  0);
while (G__31673__i < G__31673__a.length) {G__31673__a[G__31673__i] = arguments[G__31673__i + 0]; ++G__31673__i;}
  x__31656__auto__ = new cljs.core.IndexedSeq(G__31673__a,0,null);
} 
return G__31672__delegate.call(this,x__31656__auto__);};
G__31672.cljs$lang$maxFixedArity = 0;
G__31672.cljs$lang$applyTo = (function (arglist__31674){
var x__31656__auto__ = cljs.core.seq(arglist__31674);
return G__31672__delegate(x__31656__auto__);
});
G__31672.cljs$core$IFn$_invoke$arity$variadic = G__31672__delegate;
return G__31672;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1717787131909
