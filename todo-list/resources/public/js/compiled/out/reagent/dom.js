// Compiled by ClojureScript 1.10.844 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22286 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22287 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22287);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__22288 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22289 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22289);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22288);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22286);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22291 = arguments.length;
switch (G__22291) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__22292 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__22292,(0),null);
var callback = cljs.core.nth.call(null,vec__22292,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__22296_22312 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__22297_22313 = null;
var count__22298_22314 = (0);
var i__22299_22315 = (0);
while(true){
if((i__22299_22315 < count__22298_22314)){
var vec__22306_22316 = cljs.core._nth.call(null,chunk__22297_22313,i__22299_22315);
var container_22317 = cljs.core.nth.call(null,vec__22306_22316,(0),null);
var comp_22318 = cljs.core.nth.call(null,vec__22306_22316,(1),null);
reagent.dom.re_render_component.call(null,comp_22318,container_22317);


var G__22319 = seq__22296_22312;
var G__22320 = chunk__22297_22313;
var G__22321 = count__22298_22314;
var G__22322 = (i__22299_22315 + (1));
seq__22296_22312 = G__22319;
chunk__22297_22313 = G__22320;
count__22298_22314 = G__22321;
i__22299_22315 = G__22322;
continue;
} else {
var temp__5735__auto___22323 = cljs.core.seq.call(null,seq__22296_22312);
if(temp__5735__auto___22323){
var seq__22296_22324__$1 = temp__5735__auto___22323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22296_22324__$1)){
var c__4591__auto___22325 = cljs.core.chunk_first.call(null,seq__22296_22324__$1);
var G__22326 = cljs.core.chunk_rest.call(null,seq__22296_22324__$1);
var G__22327 = c__4591__auto___22325;
var G__22328 = cljs.core.count.call(null,c__4591__auto___22325);
var G__22329 = (0);
seq__22296_22312 = G__22326;
chunk__22297_22313 = G__22327;
count__22298_22314 = G__22328;
i__22299_22315 = G__22329;
continue;
} else {
var vec__22309_22330 = cljs.core.first.call(null,seq__22296_22324__$1);
var container_22331 = cljs.core.nth.call(null,vec__22309_22330,(0),null);
var comp_22332 = cljs.core.nth.call(null,vec__22309_22330,(1),null);
reagent.dom.re_render_component.call(null,comp_22332,container_22331);


var G__22333 = cljs.core.next.call(null,seq__22296_22324__$1);
var G__22334 = null;
var G__22335 = (0);
var G__22336 = (0);
seq__22296_22312 = G__22333;
chunk__22297_22313 = G__22334;
count__22298_22314 = G__22335;
i__22299_22315 = G__22336;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1717629077146
