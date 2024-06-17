// Compiled by ClojureScript 1.10.844 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('module$Users$richardgraham$csci6221$todo_list$node_modules$react_dom$index');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return module$Users$richardgraham$csci6221$todo_list$node_modules$react_dom$index["default"].unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__39743 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39744 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39744);

try{return module$Users$richardgraham$csci6221$todo_list$node_modules$react_dom$index["default"].render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__39745 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39746 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39746);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39745);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39743);
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
var G__39748 = arguments.length;
switch (G__39748) {
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

var vec__39749 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__39749,(0),null);
var callback = cljs.core.nth.call(null,vec__39749,(1),null);
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
return module$Users$richardgraham$csci6221$todo_list$node_modules$react_dom$index["default"].findDOMNode(this$);
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

var seq__39753_39769 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__39754_39770 = null;
var count__39755_39771 = (0);
var i__39756_39772 = (0);
while(true){
if((i__39756_39772 < count__39755_39771)){
var vec__39763_39773 = cljs.core._nth.call(null,chunk__39754_39770,i__39756_39772);
var container_39774 = cljs.core.nth.call(null,vec__39763_39773,(0),null);
var comp_39775 = cljs.core.nth.call(null,vec__39763_39773,(1),null);
reagent.dom.re_render_component.call(null,comp_39775,container_39774);


var G__39776 = seq__39753_39769;
var G__39777 = chunk__39754_39770;
var G__39778 = count__39755_39771;
var G__39779 = (i__39756_39772 + (1));
seq__39753_39769 = G__39776;
chunk__39754_39770 = G__39777;
count__39755_39771 = G__39778;
i__39756_39772 = G__39779;
continue;
} else {
var temp__5735__auto___39780 = cljs.core.seq.call(null,seq__39753_39769);
if(temp__5735__auto___39780){
var seq__39753_39781__$1 = temp__5735__auto___39780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39753_39781__$1)){
var c__4591__auto___39782 = cljs.core.chunk_first.call(null,seq__39753_39781__$1);
var G__39783 = cljs.core.chunk_rest.call(null,seq__39753_39781__$1);
var G__39784 = c__4591__auto___39782;
var G__39785 = cljs.core.count.call(null,c__4591__auto___39782);
var G__39786 = (0);
seq__39753_39769 = G__39783;
chunk__39754_39770 = G__39784;
count__39755_39771 = G__39785;
i__39756_39772 = G__39786;
continue;
} else {
var vec__39766_39787 = cljs.core.first.call(null,seq__39753_39781__$1);
var container_39788 = cljs.core.nth.call(null,vec__39766_39787,(0),null);
var comp_39789 = cljs.core.nth.call(null,vec__39766_39787,(1),null);
reagent.dom.re_render_component.call(null,comp_39789,container_39788);


var G__39790 = cljs.core.next.call(null,seq__39753_39781__$1);
var G__39791 = null;
var G__39792 = (0);
var G__39793 = (0);
seq__39753_39769 = G__39790;
chunk__39754_39770 = G__39791;
count__39755_39771 = G__39792;
i__39756_39772 = G__39793;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1718651917784
