// Compiled by ClojureScript 1.10.844 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('module$Users$maryamkhanoom$csci6221$todo_list$node_modules$react_dom$index');
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

return module$Users$maryamkhanoom$csci6221$todo_list$node_modules$react_dom$index["default"].unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__24177 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24178 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24178);

try{return module$Users$maryamkhanoom$csci6221$todo_list$node_modules$react_dom$index["default"].render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__24179 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24180 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24180);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__24179);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__24177);
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
var G__24182 = arguments.length;
switch (G__24182) {
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

var vec__24183 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__24183,(0),null);
var callback = cljs.core.nth.call(null,vec__24183,(1),null);
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
return module$Users$maryamkhanoom$csci6221$todo_list$node_modules$react_dom$index["default"].findDOMNode(this$);
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

var seq__24187_24203 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__24188_24204 = null;
var count__24189_24205 = (0);
var i__24190_24206 = (0);
while(true){
if((i__24190_24206 < count__24189_24205)){
var vec__24197_24207 = cljs.core._nth.call(null,chunk__24188_24204,i__24190_24206);
var container_24208 = cljs.core.nth.call(null,vec__24197_24207,(0),null);
var comp_24209 = cljs.core.nth.call(null,vec__24197_24207,(1),null);
reagent.dom.re_render_component.call(null,comp_24209,container_24208);


var G__24210 = seq__24187_24203;
var G__24211 = chunk__24188_24204;
var G__24212 = count__24189_24205;
var G__24213 = (i__24190_24206 + (1));
seq__24187_24203 = G__24210;
chunk__24188_24204 = G__24211;
count__24189_24205 = G__24212;
i__24190_24206 = G__24213;
continue;
} else {
var temp__5735__auto___24214 = cljs.core.seq.call(null,seq__24187_24203);
if(temp__5735__auto___24214){
var seq__24187_24215__$1 = temp__5735__auto___24214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24187_24215__$1)){
var c__4591__auto___24216 = cljs.core.chunk_first.call(null,seq__24187_24215__$1);
var G__24217 = cljs.core.chunk_rest.call(null,seq__24187_24215__$1);
var G__24218 = c__4591__auto___24216;
var G__24219 = cljs.core.count.call(null,c__4591__auto___24216);
var G__24220 = (0);
seq__24187_24203 = G__24217;
chunk__24188_24204 = G__24218;
count__24189_24205 = G__24219;
i__24190_24206 = G__24220;
continue;
} else {
var vec__24200_24221 = cljs.core.first.call(null,seq__24187_24215__$1);
var container_24222 = cljs.core.nth.call(null,vec__24200_24221,(0),null);
var comp_24223 = cljs.core.nth.call(null,vec__24200_24221,(1),null);
reagent.dom.re_render_component.call(null,comp_24223,container_24222);


var G__24224 = cljs.core.next.call(null,seq__24187_24215__$1);
var G__24225 = null;
var G__24226 = (0);
var G__24227 = (0);
seq__24187_24203 = G__24224;
chunk__24188_24204 = G__24225;
count__24189_24205 = G__24226;
i__24190_24206 = G__24227;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1718400798737
