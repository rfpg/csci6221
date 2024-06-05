// Compiled by ClojureScript 1.10.844 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4160__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4160__auto__){
return or__4160__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__27420 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__27420 == null)){
return null;
} else {
return goog.object.get(G__27420,"requires");
}
}):(function (path){
var G__27421 = goog.object.get(goog.dependencies_.requires,path);
if((G__27421 == null)){
return null;
} else {
return goog.object.getKeys(G__27421);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27422_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27422_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__27423 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__27423__$1 = (((G__27423 == null))?null:goog.object.get(G__27423,"provides"));
if((G__27423__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__27423__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__27424 = cljs.core.seq.call(null,provides);
var chunk__27425 = null;
var count__27426 = (0);
var i__27427 = (0);
while(true){
if((i__27427 < count__27426)){
var prov = cljs.core._nth.call(null,chunk__27425,i__27427);
var seq__27436_27448 = cljs.core.seq.call(null,requires);
var chunk__27437_27449 = null;
var count__27438_27450 = (0);
var i__27439_27451 = (0);
while(true){
if((i__27439_27451 < count__27438_27450)){
var req_27452 = cljs.core._nth.call(null,chunk__27437_27449,i__27439_27451);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27452,prov);


var G__27453 = seq__27436_27448;
var G__27454 = chunk__27437_27449;
var G__27455 = count__27438_27450;
var G__27456 = (i__27439_27451 + (1));
seq__27436_27448 = G__27453;
chunk__27437_27449 = G__27454;
count__27438_27450 = G__27455;
i__27439_27451 = G__27456;
continue;
} else {
var temp__5735__auto___27457 = cljs.core.seq.call(null,seq__27436_27448);
if(temp__5735__auto___27457){
var seq__27436_27458__$1 = temp__5735__auto___27457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27436_27458__$1)){
var c__4591__auto___27459 = cljs.core.chunk_first.call(null,seq__27436_27458__$1);
var G__27460 = cljs.core.chunk_rest.call(null,seq__27436_27458__$1);
var G__27461 = c__4591__auto___27459;
var G__27462 = cljs.core.count.call(null,c__4591__auto___27459);
var G__27463 = (0);
seq__27436_27448 = G__27460;
chunk__27437_27449 = G__27461;
count__27438_27450 = G__27462;
i__27439_27451 = G__27463;
continue;
} else {
var req_27464 = cljs.core.first.call(null,seq__27436_27458__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27464,prov);


var G__27465 = cljs.core.next.call(null,seq__27436_27458__$1);
var G__27466 = null;
var G__27467 = (0);
var G__27468 = (0);
seq__27436_27448 = G__27465;
chunk__27437_27449 = G__27466;
count__27438_27450 = G__27467;
i__27439_27451 = G__27468;
continue;
}
} else {
}
}
break;
}


var G__27469 = seq__27424;
var G__27470 = chunk__27425;
var G__27471 = count__27426;
var G__27472 = (i__27427 + (1));
seq__27424 = G__27469;
chunk__27425 = G__27470;
count__27426 = G__27471;
i__27427 = G__27472;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27424);
if(temp__5735__auto__){
var seq__27424__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27424__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__27424__$1);
var G__27473 = cljs.core.chunk_rest.call(null,seq__27424__$1);
var G__27474 = c__4591__auto__;
var G__27475 = cljs.core.count.call(null,c__4591__auto__);
var G__27476 = (0);
seq__27424 = G__27473;
chunk__27425 = G__27474;
count__27426 = G__27475;
i__27427 = G__27476;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27424__$1);
var seq__27440_27477 = cljs.core.seq.call(null,requires);
var chunk__27441_27478 = null;
var count__27442_27479 = (0);
var i__27443_27480 = (0);
while(true){
if((i__27443_27480 < count__27442_27479)){
var req_27481 = cljs.core._nth.call(null,chunk__27441_27478,i__27443_27480);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27481,prov);


var G__27482 = seq__27440_27477;
var G__27483 = chunk__27441_27478;
var G__27484 = count__27442_27479;
var G__27485 = (i__27443_27480 + (1));
seq__27440_27477 = G__27482;
chunk__27441_27478 = G__27483;
count__27442_27479 = G__27484;
i__27443_27480 = G__27485;
continue;
} else {
var temp__5735__auto___27486__$1 = cljs.core.seq.call(null,seq__27440_27477);
if(temp__5735__auto___27486__$1){
var seq__27440_27487__$1 = temp__5735__auto___27486__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27440_27487__$1)){
var c__4591__auto___27488 = cljs.core.chunk_first.call(null,seq__27440_27487__$1);
var G__27489 = cljs.core.chunk_rest.call(null,seq__27440_27487__$1);
var G__27490 = c__4591__auto___27488;
var G__27491 = cljs.core.count.call(null,c__4591__auto___27488);
var G__27492 = (0);
seq__27440_27477 = G__27489;
chunk__27441_27478 = G__27490;
count__27442_27479 = G__27491;
i__27443_27480 = G__27492;
continue;
} else {
var req_27493 = cljs.core.first.call(null,seq__27440_27487__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27493,prov);


var G__27494 = cljs.core.next.call(null,seq__27440_27487__$1);
var G__27495 = null;
var G__27496 = (0);
var G__27497 = (0);
seq__27440_27477 = G__27494;
chunk__27441_27478 = G__27495;
count__27442_27479 = G__27496;
i__27443_27480 = G__27497;
continue;
}
} else {
}
}
break;
}


var G__27498 = cljs.core.next.call(null,seq__27424__$1);
var G__27499 = null;
var G__27500 = (0);
var G__27501 = (0);
seq__27424 = G__27498;
chunk__27425 = G__27499;
count__27426 = G__27500;
i__27427 = G__27501;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__27444 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__27445 = null;
var count__27446 = (0);
var i__27447 = (0);
while(true){
if((i__27447 < count__27446)){
var prov = cljs.core._nth.call(null,chunk__27445,i__27447);
goog.object.forEach(deps,((function (seq__27444,chunk__27445,count__27446,i__27447,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__27444,chunk__27445,count__27446,i__27447,prov,requires))
);


var G__27502 = seq__27444;
var G__27503 = chunk__27445;
var G__27504 = count__27446;
var G__27505 = (i__27447 + (1));
seq__27444 = G__27502;
chunk__27445 = G__27503;
count__27446 = G__27504;
i__27447 = G__27505;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27444);
if(temp__5735__auto__){
var seq__27444__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27444__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__27444__$1);
var G__27506 = cljs.core.chunk_rest.call(null,seq__27444__$1);
var G__27507 = c__4591__auto__;
var G__27508 = cljs.core.count.call(null,c__4591__auto__);
var G__27509 = (0);
seq__27444 = G__27506;
chunk__27445 = G__27507;
count__27446 = G__27508;
i__27447 = G__27509;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27444__$1);
goog.object.forEach(deps,((function (seq__27444,chunk__27445,count__27446,i__27447,prov,seq__27444__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__27444,chunk__27445,count__27446,i__27447,prov,seq__27444__$1,temp__5735__auto__,requires))
);


var G__27510 = cljs.core.next.call(null,seq__27444__$1);
var G__27511 = null;
var G__27512 = (0);
var G__27513 = (0);
seq__27444 = G__27510;
chunk__27445 = G__27511;
count__27446 = G__27512;
i__27447 = G__27513;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27514){
var vec__27515 = p__27514;
var _ = cljs.core.nth.call(null,vec__27515,(0),null);
var v = cljs.core.nth.call(null,vec__27515,(1),null);
var and__4149__auto__ = v;
if(cljs.core.truth_(and__4149__auto__)){
return v.call(null,dep);
} else {
return and__4149__auto__;
}
}),cljs.core.filter.call(null,(function (p__27518){
var vec__27519 = p__27518;
var k = cljs.core.nth.call(null,vec__27519,(0),null);
var v = cljs.core.nth.call(null,vec__27519,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27531_27539 = cljs.core.seq.call(null,deps);
var chunk__27532_27540 = null;
var count__27533_27541 = (0);
var i__27534_27542 = (0);
while(true){
if((i__27534_27542 < count__27533_27541)){
var dep_27543 = cljs.core._nth.call(null,chunk__27532_27540,i__27534_27542);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_27543;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27543));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27543,(depth + (1)),state);
} else {
}


var G__27544 = seq__27531_27539;
var G__27545 = chunk__27532_27540;
var G__27546 = count__27533_27541;
var G__27547 = (i__27534_27542 + (1));
seq__27531_27539 = G__27544;
chunk__27532_27540 = G__27545;
count__27533_27541 = G__27546;
i__27534_27542 = G__27547;
continue;
} else {
var temp__5735__auto___27548 = cljs.core.seq.call(null,seq__27531_27539);
if(temp__5735__auto___27548){
var seq__27531_27549__$1 = temp__5735__auto___27548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27531_27549__$1)){
var c__4591__auto___27550 = cljs.core.chunk_first.call(null,seq__27531_27549__$1);
var G__27551 = cljs.core.chunk_rest.call(null,seq__27531_27549__$1);
var G__27552 = c__4591__auto___27550;
var G__27553 = cljs.core.count.call(null,c__4591__auto___27550);
var G__27554 = (0);
seq__27531_27539 = G__27551;
chunk__27532_27540 = G__27552;
count__27533_27541 = G__27553;
i__27534_27542 = G__27554;
continue;
} else {
var dep_27555 = cljs.core.first.call(null,seq__27531_27549__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_27555;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27555));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27555,(depth + (1)),state);
} else {
}


var G__27556 = cljs.core.next.call(null,seq__27531_27549__$1);
var G__27557 = null;
var G__27558 = (0);
var G__27559 = (0);
seq__27531_27539 = G__27556;
chunk__27532_27540 = G__27557;
count__27533_27541 = G__27558;
i__27534_27542 = G__27559;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27535){
var vec__27536 = p__27535;
var seq__27537 = cljs.core.seq.call(null,vec__27536);
var first__27538 = cljs.core.first.call(null,seq__27537);
var seq__27537__$1 = cljs.core.next.call(null,seq__27537);
var x = first__27538;
var xs = seq__27537__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__27522_SHARP_){
return clojure.set.difference.call(null,p1__27522_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__27560_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__27560_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27561 = cljs.core.seq.call(null,provides);
var chunk__27562 = null;
var count__27563 = (0);
var i__27564 = (0);
while(true){
if((i__27564 < count__27563)){
var prov = cljs.core._nth.call(null,chunk__27562,i__27564);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27573_27581 = cljs.core.seq.call(null,requires);
var chunk__27574_27582 = null;
var count__27575_27583 = (0);
var i__27576_27584 = (0);
while(true){
if((i__27576_27584 < count__27575_27583)){
var req_27585 = cljs.core._nth.call(null,chunk__27574_27582,i__27576_27584);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27585,prov);


var G__27586 = seq__27573_27581;
var G__27587 = chunk__27574_27582;
var G__27588 = count__27575_27583;
var G__27589 = (i__27576_27584 + (1));
seq__27573_27581 = G__27586;
chunk__27574_27582 = G__27587;
count__27575_27583 = G__27588;
i__27576_27584 = G__27589;
continue;
} else {
var temp__5735__auto___27590 = cljs.core.seq.call(null,seq__27573_27581);
if(temp__5735__auto___27590){
var seq__27573_27591__$1 = temp__5735__auto___27590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27573_27591__$1)){
var c__4591__auto___27592 = cljs.core.chunk_first.call(null,seq__27573_27591__$1);
var G__27593 = cljs.core.chunk_rest.call(null,seq__27573_27591__$1);
var G__27594 = c__4591__auto___27592;
var G__27595 = cljs.core.count.call(null,c__4591__auto___27592);
var G__27596 = (0);
seq__27573_27581 = G__27593;
chunk__27574_27582 = G__27594;
count__27575_27583 = G__27595;
i__27576_27584 = G__27596;
continue;
} else {
var req_27597 = cljs.core.first.call(null,seq__27573_27591__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27597,prov);


var G__27598 = cljs.core.next.call(null,seq__27573_27591__$1);
var G__27599 = null;
var G__27600 = (0);
var G__27601 = (0);
seq__27573_27581 = G__27598;
chunk__27574_27582 = G__27599;
count__27575_27583 = G__27600;
i__27576_27584 = G__27601;
continue;
}
} else {
}
}
break;
}


var G__27602 = seq__27561;
var G__27603 = chunk__27562;
var G__27604 = count__27563;
var G__27605 = (i__27564 + (1));
seq__27561 = G__27602;
chunk__27562 = G__27603;
count__27563 = G__27604;
i__27564 = G__27605;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27561);
if(temp__5735__auto__){
var seq__27561__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27561__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__27561__$1);
var G__27606 = cljs.core.chunk_rest.call(null,seq__27561__$1);
var G__27607 = c__4591__auto__;
var G__27608 = cljs.core.count.call(null,c__4591__auto__);
var G__27609 = (0);
seq__27561 = G__27606;
chunk__27562 = G__27607;
count__27563 = G__27608;
i__27564 = G__27609;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27561__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27577_27610 = cljs.core.seq.call(null,requires);
var chunk__27578_27611 = null;
var count__27579_27612 = (0);
var i__27580_27613 = (0);
while(true){
if((i__27580_27613 < count__27579_27612)){
var req_27614 = cljs.core._nth.call(null,chunk__27578_27611,i__27580_27613);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27614,prov);


var G__27615 = seq__27577_27610;
var G__27616 = chunk__27578_27611;
var G__27617 = count__27579_27612;
var G__27618 = (i__27580_27613 + (1));
seq__27577_27610 = G__27615;
chunk__27578_27611 = G__27616;
count__27579_27612 = G__27617;
i__27580_27613 = G__27618;
continue;
} else {
var temp__5735__auto___27619__$1 = cljs.core.seq.call(null,seq__27577_27610);
if(temp__5735__auto___27619__$1){
var seq__27577_27620__$1 = temp__5735__auto___27619__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27577_27620__$1)){
var c__4591__auto___27621 = cljs.core.chunk_first.call(null,seq__27577_27620__$1);
var G__27622 = cljs.core.chunk_rest.call(null,seq__27577_27620__$1);
var G__27623 = c__4591__auto___27621;
var G__27624 = cljs.core.count.call(null,c__4591__auto___27621);
var G__27625 = (0);
seq__27577_27610 = G__27622;
chunk__27578_27611 = G__27623;
count__27579_27612 = G__27624;
i__27580_27613 = G__27625;
continue;
} else {
var req_27626 = cljs.core.first.call(null,seq__27577_27620__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27626,prov);


var G__27627 = cljs.core.next.call(null,seq__27577_27620__$1);
var G__27628 = null;
var G__27629 = (0);
var G__27630 = (0);
seq__27577_27610 = G__27627;
chunk__27578_27611 = G__27628;
count__27579_27612 = G__27629;
i__27580_27613 = G__27630;
continue;
}
} else {
}
}
break;
}


var G__27631 = cljs.core.next.call(null,seq__27561__$1);
var G__27632 = null;
var G__27633 = (0);
var G__27634 = (0);
seq__27561 = G__27631;
chunk__27562 = G__27632;
count__27563 = G__27633;
i__27564 = G__27634;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27635_27639 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27636_27640 = null;
var count__27637_27641 = (0);
var i__27638_27642 = (0);
while(true){
if((i__27638_27642 < count__27637_27641)){
var ns_27643 = cljs.core._nth.call(null,chunk__27636_27640,i__27638_27642);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27643);


var G__27644 = seq__27635_27639;
var G__27645 = chunk__27636_27640;
var G__27646 = count__27637_27641;
var G__27647 = (i__27638_27642 + (1));
seq__27635_27639 = G__27644;
chunk__27636_27640 = G__27645;
count__27637_27641 = G__27646;
i__27638_27642 = G__27647;
continue;
} else {
var temp__5735__auto___27648 = cljs.core.seq.call(null,seq__27635_27639);
if(temp__5735__auto___27648){
var seq__27635_27649__$1 = temp__5735__auto___27648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27635_27649__$1)){
var c__4591__auto___27650 = cljs.core.chunk_first.call(null,seq__27635_27649__$1);
var G__27651 = cljs.core.chunk_rest.call(null,seq__27635_27649__$1);
var G__27652 = c__4591__auto___27650;
var G__27653 = cljs.core.count.call(null,c__4591__auto___27650);
var G__27654 = (0);
seq__27635_27639 = G__27651;
chunk__27636_27640 = G__27652;
count__27637_27641 = G__27653;
i__27638_27642 = G__27654;
continue;
} else {
var ns_27655 = cljs.core.first.call(null,seq__27635_27649__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27655);


var G__27656 = cljs.core.next.call(null,seq__27635_27649__$1);
var G__27657 = null;
var G__27658 = (0);
var G__27659 = (0);
seq__27635_27639 = G__27656;
chunk__27636_27640 = G__27657;
count__27637_27641 = G__27658;
i__27638_27642 = G__27659;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4160__auto__ = goog.require__;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__27660__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27661__i = 0, G__27661__a = new Array(arguments.length -  0);
while (G__27661__i < G__27661__a.length) {G__27661__a[G__27661__i] = arguments[G__27661__i + 0]; ++G__27661__i;}
  args = new cljs.core.IndexedSeq(G__27661__a,0,null);
} 
return G__27660__delegate.call(this,args);};
G__27660.cljs$lang$maxFixedArity = 0;
G__27660.cljs$lang$applyTo = (function (arglist__27662){
var args = cljs.core.seq(arglist__27662);
return G__27660__delegate(args);
});
G__27660.cljs$core$IFn$_invoke$arity$variadic = G__27660__delegate;
return G__27660;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27663_SHARP_,p2__27664_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27663_SHARP_)),p2__27664_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27665_SHARP_,p2__27666_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27665_SHARP_),p2__27666_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27667 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27667.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__27667.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__27667;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27668){if((e27668 instanceof Error)){
var e = e27668;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27668;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27669){if((e27669 instanceof Error)){
var e = e27669;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27669;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27670 = cljs.core._EQ_;
var expr__27671 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27670.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27671))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27670.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27671))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27670.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27671))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27673,callback){
var map__27674 = p__27673;
var map__27674__$1 = cljs.core.__destructure_map.call(null,map__27674);
var file_msg = map__27674__$1;
var request_url = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4160__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_27711){
var state_val_27712 = (state_27711[(1)]);
if((state_val_27712 === (7))){
var inst_27707 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
var statearr_27713_27739 = state_27711__$1;
(statearr_27713_27739[(2)] = inst_27707);

(statearr_27713_27739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (1))){
var state_27711__$1 = state_27711;
var statearr_27714_27740 = state_27711__$1;
(statearr_27714_27740[(2)] = null);

(statearr_27714_27740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (4))){
var inst_27677 = (state_27711[(7)]);
var inst_27677__$1 = (state_27711[(2)]);
var state_27711__$1 = (function (){var statearr_27715 = state_27711;
(statearr_27715[(7)] = inst_27677__$1);

return statearr_27715;
})();
if(cljs.core.truth_(inst_27677__$1)){
var statearr_27716_27741 = state_27711__$1;
(statearr_27716_27741[(1)] = (5));

} else {
var statearr_27717_27742 = state_27711__$1;
(statearr_27717_27742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (15))){
var inst_27690 = (state_27711[(8)]);
var inst_27692 = (state_27711[(9)]);
var inst_27694 = inst_27692.call(null,inst_27690);
var state_27711__$1 = state_27711;
var statearr_27718_27743 = state_27711__$1;
(statearr_27718_27743[(2)] = inst_27694);

(statearr_27718_27743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (13))){
var inst_27701 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
var statearr_27719_27744 = state_27711__$1;
(statearr_27719_27744[(2)] = inst_27701);

(statearr_27719_27744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (6))){
var state_27711__$1 = state_27711;
var statearr_27720_27745 = state_27711__$1;
(statearr_27720_27745[(2)] = null);

(statearr_27720_27745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (17))){
var inst_27698 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
var statearr_27721_27746 = state_27711__$1;
(statearr_27721_27746[(2)] = inst_27698);

(statearr_27721_27746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (3))){
var inst_27709 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27711__$1,inst_27709);
} else {
if((state_val_27712 === (12))){
var state_27711__$1 = state_27711;
var statearr_27722_27747 = state_27711__$1;
(statearr_27722_27747[(2)] = null);

(statearr_27722_27747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (2))){
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27711__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27712 === (11))){
var inst_27682 = (state_27711[(10)]);
var inst_27688 = figwheel.client.file_reloading.blocking_load.call(null,inst_27682);
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27711__$1,(14),inst_27688);
} else {
if((state_val_27712 === (9))){
var inst_27682 = (state_27711[(10)]);
var state_27711__$1 = state_27711;
if(cljs.core.truth_(inst_27682)){
var statearr_27723_27748 = state_27711__$1;
(statearr_27723_27748[(1)] = (11));

} else {
var statearr_27724_27749 = state_27711__$1;
(statearr_27724_27749[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (5))){
var inst_27683 = (state_27711[(11)]);
var inst_27677 = (state_27711[(7)]);
var inst_27682 = cljs.core.nth.call(null,inst_27677,(0),null);
var inst_27683__$1 = cljs.core.nth.call(null,inst_27677,(1),null);
var state_27711__$1 = (function (){var statearr_27725 = state_27711;
(statearr_27725[(11)] = inst_27683__$1);

(statearr_27725[(10)] = inst_27682);

return statearr_27725;
})();
if(cljs.core.truth_(inst_27683__$1)){
var statearr_27726_27750 = state_27711__$1;
(statearr_27726_27750[(1)] = (8));

} else {
var statearr_27727_27751 = state_27711__$1;
(statearr_27727_27751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (14))){
var inst_27682 = (state_27711[(10)]);
var inst_27692 = (state_27711[(9)]);
var inst_27690 = (state_27711[(2)]);
var inst_27691 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27692__$1 = cljs.core.get.call(null,inst_27691,inst_27682);
var state_27711__$1 = (function (){var statearr_27728 = state_27711;
(statearr_27728[(8)] = inst_27690);

(statearr_27728[(9)] = inst_27692__$1);

return statearr_27728;
})();
if(cljs.core.truth_(inst_27692__$1)){
var statearr_27729_27752 = state_27711__$1;
(statearr_27729_27752[(1)] = (15));

} else {
var statearr_27730_27753 = state_27711__$1;
(statearr_27730_27753[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (16))){
var inst_27690 = (state_27711[(8)]);
var inst_27696 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27690);
var state_27711__$1 = state_27711;
var statearr_27731_27754 = state_27711__$1;
(statearr_27731_27754[(2)] = inst_27696);

(statearr_27731_27754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (10))){
var inst_27703 = (state_27711[(2)]);
var state_27711__$1 = (function (){var statearr_27732 = state_27711;
(statearr_27732[(12)] = inst_27703);

return statearr_27732;
})();
var statearr_27733_27755 = state_27711__$1;
(statearr_27733_27755[(2)] = null);

(statearr_27733_27755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (8))){
var inst_27683 = (state_27711[(11)]);
var inst_27685 = eval(inst_27683);
var state_27711__$1 = state_27711;
var statearr_27734_27756 = state_27711__$1;
(statearr_27734_27756[(2)] = inst_27685);

(statearr_27734_27756[(1)] = (10));


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
});
return (function() {
var figwheel$client$file_reloading$state_machine__24022__auto__ = null;
var figwheel$client$file_reloading$state_machine__24022__auto____0 = (function (){
var statearr_27735 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27735[(0)] = figwheel$client$file_reloading$state_machine__24022__auto__);

(statearr_27735[(1)] = (1));

return statearr_27735;
});
var figwheel$client$file_reloading$state_machine__24022__auto____1 = (function (state_27711){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_27711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e27736){if((e27736 instanceof Object)){
var ex__24025__auto__ = e27736;
var statearr_27737_27757 = state_27711;
(statearr_27737_27757[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27758 = state_27711;
state_27711 = G__27758;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24022__auto__ = function(state_27711){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24022__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24022__auto____1.call(this,state_27711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24022__auto____0;
figwheel$client$file_reloading$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24022__auto____1;
return figwheel$client$file_reloading$state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_27738 = f__24117__auto__.call(null);
(statearr_27738[(6)] = c__24116__auto__);

return statearr_27738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));

return c__24116__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27760 = arguments.length;
switch (G__27760) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27762,callback){
var map__27763 = p__27762;
var map__27763__$1 = cljs.core.__destructure_map.call(null,map__27763);
var file_msg = map__27763__$1;
var namespace = cljs.core.get.call(null,map__27763__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27764){
var map__27765 = p__27764;
var map__27765__$1 = cljs.core.__destructure_map.call(null,map__27765);
var file_msg = map__27765__$1;
var namespace = cljs.core.get.call(null,map__27765__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27766){
var map__27767 = p__27766;
var map__27767__$1 = cljs.core.__destructure_map.call(null,map__27767);
var file_msg = map__27767__$1;
var namespace = cljs.core.get.call(null,map__27767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4160__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var or__4160__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27768,callback){
var map__27769 = p__27768;
var map__27769__$1 = cljs.core.__destructure_map.call(null,map__27769);
var file_msg = map__27769__$1;
var request_url = cljs.core.get.call(null,map__27769__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27769__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24116__auto___27818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_27803){
var state_val_27804 = (state_27803[(1)]);
if((state_val_27804 === (1))){
var inst_27777 = cljs.core.seq.call(null,files);
var inst_27778 = cljs.core.first.call(null,inst_27777);
var inst_27779 = cljs.core.next.call(null,inst_27777);
var inst_27780 = files;
var state_27803__$1 = (function (){var statearr_27805 = state_27803;
(statearr_27805[(7)] = inst_27778);

(statearr_27805[(8)] = inst_27780);

(statearr_27805[(9)] = inst_27779);

return statearr_27805;
})();
var statearr_27806_27819 = state_27803__$1;
(statearr_27806_27819[(2)] = null);

(statearr_27806_27819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (2))){
var inst_27786 = (state_27803[(10)]);
var inst_27780 = (state_27803[(8)]);
var inst_27785 = cljs.core.seq.call(null,inst_27780);
var inst_27786__$1 = cljs.core.first.call(null,inst_27785);
var inst_27787 = cljs.core.next.call(null,inst_27785);
var inst_27788 = (inst_27786__$1 == null);
var inst_27789 = cljs.core.not.call(null,inst_27788);
var state_27803__$1 = (function (){var statearr_27807 = state_27803;
(statearr_27807[(10)] = inst_27786__$1);

(statearr_27807[(11)] = inst_27787);

return statearr_27807;
})();
if(inst_27789){
var statearr_27808_27820 = state_27803__$1;
(statearr_27808_27820[(1)] = (4));

} else {
var statearr_27809_27821 = state_27803__$1;
(statearr_27809_27821[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (3))){
var inst_27801 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27803__$1,inst_27801);
} else {
if((state_val_27804 === (4))){
var inst_27786 = (state_27803[(10)]);
var inst_27791 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27786);
var state_27803__$1 = state_27803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27803__$1,(7),inst_27791);
} else {
if((state_val_27804 === (5))){
var inst_27797 = cljs.core.async.close_BANG_.call(null,out);
var state_27803__$1 = state_27803;
var statearr_27810_27822 = state_27803__$1;
(statearr_27810_27822[(2)] = inst_27797);

(statearr_27810_27822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (6))){
var inst_27799 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
var statearr_27811_27823 = state_27803__$1;
(statearr_27811_27823[(2)] = inst_27799);

(statearr_27811_27823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (7))){
var inst_27787 = (state_27803[(11)]);
var inst_27793 = (state_27803[(2)]);
var inst_27794 = cljs.core.async.put_BANG_.call(null,out,inst_27793);
var inst_27780 = inst_27787;
var state_27803__$1 = (function (){var statearr_27812 = state_27803;
(statearr_27812[(12)] = inst_27794);

(statearr_27812[(8)] = inst_27780);

return statearr_27812;
})();
var statearr_27813_27824 = state_27803__$1;
(statearr_27813_27824[(2)] = null);

(statearr_27813_27824[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto____0 = (function (){
var statearr_27814 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27814[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto__);

(statearr_27814[(1)] = (1));

return statearr_27814;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto____1 = (function (state_27803){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_27803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e27815){if((e27815 instanceof Object)){
var ex__24025__auto__ = e27815;
var statearr_27816_27825 = state_27803;
(statearr_27816_27825[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27826 = state_27803;
state_27803 = G__27826;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto__ = function(state_27803){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto____1.call(this,state_27803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_27817 = f__24117__auto__.call(null);
(statearr_27817[(6)] = c__24116__auto___27818);

return statearr_27817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27827,opts){
var map__27828 = p__27827;
var map__27828__$1 = cljs.core.__destructure_map.call(null,map__27828);
var eval_body = cljs.core.get.call(null,map__27828__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27828__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4149__auto__ = eval_body;
if(cljs.core.truth_(and__4149__auto__)){
return typeof eval_body === 'string';
} else {
return and__4149__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27829){var e = e27829;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27830_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27830_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27831){
var vec__27832 = p__27831;
var k = cljs.core.nth.call(null,vec__27832,(0),null);
var v = cljs.core.nth.call(null,vec__27832,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27835){
var vec__27836 = p__27835;
var k = cljs.core.nth.call(null,vec__27836,(0),null);
var v = cljs.core.nth.call(null,vec__27836,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27842,p__27843){
var map__27844 = p__27842;
var map__27844__$1 = cljs.core.__destructure_map.call(null,map__27844);
var opts = map__27844__$1;
var before_jsload = cljs.core.get.call(null,map__27844__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27844__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27844__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27845 = p__27843;
var map__27845__$1 = cljs.core.__destructure_map.call(null,map__27845);
var msg = map__27845__$1;
var files = cljs.core.get.call(null,map__27845__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27845__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27845__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_27977){
var state_val_27978 = (state_27977[(1)]);
if((state_val_27978 === (7))){
var inst_27860 = (state_27977[(7)]);
var inst_27857 = (state_27977[(8)]);
var inst_27858 = (state_27977[(9)]);
var inst_27859 = (state_27977[(10)]);
var inst_27865 = cljs.core._nth.call(null,inst_27858,inst_27860);
var inst_27866 = figwheel.client.file_reloading.eval_body.call(null,inst_27865,opts);
var inst_27867 = (inst_27860 + (1));
var tmp27979 = inst_27857;
var tmp27980 = inst_27858;
var tmp27981 = inst_27859;
var inst_27857__$1 = tmp27979;
var inst_27858__$1 = tmp27980;
var inst_27859__$1 = tmp27981;
var inst_27860__$1 = inst_27867;
var state_27977__$1 = (function (){var statearr_27982 = state_27977;
(statearr_27982[(7)] = inst_27860__$1);

(statearr_27982[(8)] = inst_27857__$1);

(statearr_27982[(9)] = inst_27858__$1);

(statearr_27982[(10)] = inst_27859__$1);

(statearr_27982[(11)] = inst_27866);

return statearr_27982;
})();
var statearr_27983_28050 = state_27977__$1;
(statearr_27983_28050[(2)] = null);

(statearr_27983_28050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (20))){
var inst_27900 = (state_27977[(12)]);
var inst_27908 = figwheel.client.file_reloading.sort_files.call(null,inst_27900);
var state_27977__$1 = state_27977;
var statearr_27984_28051 = state_27977__$1;
(statearr_27984_28051[(2)] = inst_27908);

(statearr_27984_28051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (27))){
var state_27977__$1 = state_27977;
var statearr_27985_28052 = state_27977__$1;
(statearr_27985_28052[(2)] = null);

(statearr_27985_28052[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (1))){
var inst_27849 = (state_27977[(13)]);
var inst_27846 = before_jsload.call(null,files);
var inst_27847 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27848 = (function (){return (function (p1__27839_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27839_SHARP_);
});
})();
var inst_27849__$1 = cljs.core.filter.call(null,inst_27848,files);
var inst_27850 = cljs.core.not_empty.call(null,inst_27849__$1);
var state_27977__$1 = (function (){var statearr_27986 = state_27977;
(statearr_27986[(13)] = inst_27849__$1);

(statearr_27986[(14)] = inst_27847);

(statearr_27986[(15)] = inst_27846);

return statearr_27986;
})();
if(cljs.core.truth_(inst_27850)){
var statearr_27987_28053 = state_27977__$1;
(statearr_27987_28053[(1)] = (2));

} else {
var statearr_27988_28054 = state_27977__$1;
(statearr_27988_28054[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (24))){
var state_27977__$1 = state_27977;
var statearr_27989_28055 = state_27977__$1;
(statearr_27989_28055[(2)] = null);

(statearr_27989_28055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (4))){
var inst_27894 = (state_27977[(2)]);
var inst_27895 = cljs.core.List.EMPTY;
var inst_27896 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27895);
var inst_27897 = (function (){return (function (p1__27840_SHARP_){
var and__4149__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27840_SHARP_);
if(cljs.core.truth_(and__4149__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27840_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27840_SHARP_))));
} else {
return and__4149__auto__;
}
});
})();
var inst_27898 = cljs.core.filter.call(null,inst_27897,files);
var inst_27899 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27900 = cljs.core.concat.call(null,inst_27898,inst_27899);
var state_27977__$1 = (function (){var statearr_27990 = state_27977;
(statearr_27990[(16)] = inst_27896);

(statearr_27990[(12)] = inst_27900);

(statearr_27990[(17)] = inst_27894);

return statearr_27990;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27991_28056 = state_27977__$1;
(statearr_27991_28056[(1)] = (16));

} else {
var statearr_27992_28057 = state_27977__$1;
(statearr_27992_28057[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (15))){
var inst_27884 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_27993_28058 = state_27977__$1;
(statearr_27993_28058[(2)] = inst_27884);

(statearr_27993_28058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (21))){
var inst_27910 = (state_27977[(18)]);
var inst_27910__$1 = (state_27977[(2)]);
var inst_27911 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27910__$1);
var state_27977__$1 = (function (){var statearr_27994 = state_27977;
(statearr_27994[(18)] = inst_27910__$1);

return statearr_27994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27977__$1,(22),inst_27911);
} else {
if((state_val_27978 === (31))){
var inst_27975 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27977__$1,inst_27975);
} else {
if((state_val_27978 === (32))){
var inst_27952 = (state_27977[(19)]);
var inst_27956 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27957 = cljs.core.map.call(null,inst_27956,inst_27952);
var inst_27958 = cljs.core.pr_str.call(null,inst_27957);
var inst_27959 = ["figwheel-no-load meta-data: ",inst_27958].join('');
var inst_27960 = figwheel.client.utils.log.call(null,inst_27959);
var state_27977__$1 = state_27977;
var statearr_27995_28059 = state_27977__$1;
(statearr_27995_28059[(2)] = inst_27960);

(statearr_27995_28059[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (33))){
var state_27977__$1 = state_27977;
var statearr_27996_28060 = state_27977__$1;
(statearr_27996_28060[(2)] = null);

(statearr_27996_28060[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (13))){
var inst_27870 = (state_27977[(20)]);
var inst_27874 = cljs.core.chunk_first.call(null,inst_27870);
var inst_27875 = cljs.core.chunk_rest.call(null,inst_27870);
var inst_27876 = cljs.core.count.call(null,inst_27874);
var inst_27857 = inst_27875;
var inst_27858 = inst_27874;
var inst_27859 = inst_27876;
var inst_27860 = (0);
var state_27977__$1 = (function (){var statearr_27997 = state_27977;
(statearr_27997[(7)] = inst_27860);

(statearr_27997[(8)] = inst_27857);

(statearr_27997[(9)] = inst_27858);

(statearr_27997[(10)] = inst_27859);

return statearr_27997;
})();
var statearr_27998_28061 = state_27977__$1;
(statearr_27998_28061[(2)] = null);

(statearr_27998_28061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (22))){
var inst_27910 = (state_27977[(18)]);
var inst_27914 = (state_27977[(21)]);
var inst_27918 = (state_27977[(22)]);
var inst_27913 = (state_27977[(23)]);
var inst_27913__$1 = (state_27977[(2)]);
var inst_27914__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27913__$1);
var inst_27915 = (function (){var all_files = inst_27910;
var res_SINGLEQUOTE_ = inst_27913__$1;
var res = inst_27914__$1;
return (function (p1__27841_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27841_SHARP_));
});
})();
var inst_27916 = cljs.core.filter.call(null,inst_27915,inst_27913__$1);
var inst_27917 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27918__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27917);
var inst_27919 = cljs.core.not_empty.call(null,inst_27918__$1);
var state_27977__$1 = (function (){var statearr_27999 = state_27977;
(statearr_27999[(21)] = inst_27914__$1);

(statearr_27999[(24)] = inst_27916);

(statearr_27999[(22)] = inst_27918__$1);

(statearr_27999[(23)] = inst_27913__$1);

return statearr_27999;
})();
if(cljs.core.truth_(inst_27919)){
var statearr_28000_28062 = state_27977__$1;
(statearr_28000_28062[(1)] = (23));

} else {
var statearr_28001_28063 = state_27977__$1;
(statearr_28001_28063[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (36))){
var state_27977__$1 = state_27977;
var statearr_28002_28064 = state_27977__$1;
(statearr_28002_28064[(2)] = null);

(statearr_28002_28064[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (29))){
var inst_27952 = (state_27977[(19)]);
var inst_27910 = (state_27977[(18)]);
var inst_27914 = (state_27977[(21)]);
var inst_27916 = (state_27977[(24)]);
var inst_27918 = (state_27977[(22)]);
var inst_27913 = (state_27977[(23)]);
var inst_27946 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27949 = (function (){var all_files = inst_27910;
var res_SINGLEQUOTE_ = inst_27913;
var res = inst_27914;
var files_not_loaded = inst_27916;
var dependencies_that_loaded = inst_27918;
return (function (p__27948){
var map__28003 = p__27948;
var map__28003__$1 = cljs.core.__destructure_map.call(null,map__28003);
var namespace = cljs.core.get.call(null,map__28003__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_27950 = cljs.core.group_by.call(null,inst_27949,inst_27916);
var inst_27951 = cljs.core.__destructure_map.call(null,inst_27950);
var inst_27952__$1 = cljs.core.get.call(null,inst_27951,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27953 = cljs.core.get.call(null,inst_27951,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27954 = cljs.core.not_empty.call(null,inst_27952__$1);
var state_27977__$1 = (function (){var statearr_28004 = state_27977;
(statearr_28004[(19)] = inst_27952__$1);

(statearr_28004[(25)] = inst_27946);

(statearr_28004[(26)] = inst_27953);

return statearr_28004;
})();
if(cljs.core.truth_(inst_27954)){
var statearr_28005_28065 = state_27977__$1;
(statearr_28005_28065[(1)] = (32));

} else {
var statearr_28006_28066 = state_27977__$1;
(statearr_28006_28066[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (6))){
var inst_27891 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_28007_28067 = state_27977__$1;
(statearr_28007_28067[(2)] = inst_27891);

(statearr_28007_28067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (28))){
var inst_27916 = (state_27977[(24)]);
var inst_27943 = (state_27977[(2)]);
var inst_27944 = cljs.core.not_empty.call(null,inst_27916);
var state_27977__$1 = (function (){var statearr_28008 = state_27977;
(statearr_28008[(27)] = inst_27943);

return statearr_28008;
})();
if(cljs.core.truth_(inst_27944)){
var statearr_28009_28068 = state_27977__$1;
(statearr_28009_28068[(1)] = (29));

} else {
var statearr_28010_28069 = state_27977__$1;
(statearr_28010_28069[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (25))){
var inst_27914 = (state_27977[(21)]);
var inst_27930 = (state_27977[(2)]);
var inst_27931 = cljs.core.not_empty.call(null,inst_27914);
var state_27977__$1 = (function (){var statearr_28011 = state_27977;
(statearr_28011[(28)] = inst_27930);

return statearr_28011;
})();
if(cljs.core.truth_(inst_27931)){
var statearr_28012_28070 = state_27977__$1;
(statearr_28012_28070[(1)] = (26));

} else {
var statearr_28013_28071 = state_27977__$1;
(statearr_28013_28071[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (34))){
var inst_27953 = (state_27977[(26)]);
var inst_27963 = (state_27977[(2)]);
var inst_27964 = cljs.core.not_empty.call(null,inst_27953);
var state_27977__$1 = (function (){var statearr_28014 = state_27977;
(statearr_28014[(29)] = inst_27963);

return statearr_28014;
})();
if(cljs.core.truth_(inst_27964)){
var statearr_28015_28072 = state_27977__$1;
(statearr_28015_28072[(1)] = (35));

} else {
var statearr_28016_28073 = state_27977__$1;
(statearr_28016_28073[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (17))){
var state_27977__$1 = state_27977;
var statearr_28017_28074 = state_27977__$1;
(statearr_28017_28074[(2)] = recompile_dependents);

(statearr_28017_28074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (3))){
var state_27977__$1 = state_27977;
var statearr_28018_28075 = state_27977__$1;
(statearr_28018_28075[(2)] = null);

(statearr_28018_28075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (12))){
var inst_27887 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_28019_28076 = state_27977__$1;
(statearr_28019_28076[(2)] = inst_27887);

(statearr_28019_28076[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (2))){
var inst_27849 = (state_27977[(13)]);
var inst_27856 = cljs.core.seq.call(null,inst_27849);
var inst_27857 = inst_27856;
var inst_27858 = null;
var inst_27859 = (0);
var inst_27860 = (0);
var state_27977__$1 = (function (){var statearr_28020 = state_27977;
(statearr_28020[(7)] = inst_27860);

(statearr_28020[(8)] = inst_27857);

(statearr_28020[(9)] = inst_27858);

(statearr_28020[(10)] = inst_27859);

return statearr_28020;
})();
var statearr_28021_28077 = state_27977__$1;
(statearr_28021_28077[(2)] = null);

(statearr_28021_28077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (23))){
var inst_27910 = (state_27977[(18)]);
var inst_27914 = (state_27977[(21)]);
var inst_27916 = (state_27977[(24)]);
var inst_27918 = (state_27977[(22)]);
var inst_27913 = (state_27977[(23)]);
var inst_27921 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27923 = (function (){var all_files = inst_27910;
var res_SINGLEQUOTE_ = inst_27913;
var res = inst_27914;
var files_not_loaded = inst_27916;
var dependencies_that_loaded = inst_27918;
return (function (p__27922){
var map__28022 = p__27922;
var map__28022__$1 = cljs.core.__destructure_map.call(null,map__28022);
var request_url = cljs.core.get.call(null,map__28022__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_27924 = cljs.core.reverse.call(null,inst_27918);
var inst_27925 = cljs.core.map.call(null,inst_27923,inst_27924);
var inst_27926 = cljs.core.pr_str.call(null,inst_27925);
var inst_27927 = figwheel.client.utils.log.call(null,inst_27926);
var state_27977__$1 = (function (){var statearr_28023 = state_27977;
(statearr_28023[(30)] = inst_27921);

return statearr_28023;
})();
var statearr_28024_28078 = state_27977__$1;
(statearr_28024_28078[(2)] = inst_27927);

(statearr_28024_28078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (35))){
var inst_27953 = (state_27977[(26)]);
var inst_27966 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27953);
var inst_27967 = cljs.core.pr_str.call(null,inst_27966);
var inst_27968 = ["not required: ",inst_27967].join('');
var inst_27969 = figwheel.client.utils.log.call(null,inst_27968);
var state_27977__$1 = state_27977;
var statearr_28025_28079 = state_27977__$1;
(statearr_28025_28079[(2)] = inst_27969);

(statearr_28025_28079[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (19))){
var inst_27900 = (state_27977[(12)]);
var inst_27906 = figwheel.client.file_reloading.expand_files.call(null,inst_27900);
var state_27977__$1 = state_27977;
var statearr_28026_28080 = state_27977__$1;
(statearr_28026_28080[(2)] = inst_27906);

(statearr_28026_28080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (11))){
var state_27977__$1 = state_27977;
var statearr_28027_28081 = state_27977__$1;
(statearr_28027_28081[(2)] = null);

(statearr_28027_28081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (9))){
var inst_27889 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_28028_28082 = state_27977__$1;
(statearr_28028_28082[(2)] = inst_27889);

(statearr_28028_28082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (5))){
var inst_27860 = (state_27977[(7)]);
var inst_27859 = (state_27977[(10)]);
var inst_27862 = (inst_27860 < inst_27859);
var inst_27863 = inst_27862;
var state_27977__$1 = state_27977;
if(cljs.core.truth_(inst_27863)){
var statearr_28029_28083 = state_27977__$1;
(statearr_28029_28083[(1)] = (7));

} else {
var statearr_28030_28084 = state_27977__$1;
(statearr_28030_28084[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (14))){
var inst_27870 = (state_27977[(20)]);
var inst_27879 = cljs.core.first.call(null,inst_27870);
var inst_27880 = figwheel.client.file_reloading.eval_body.call(null,inst_27879,opts);
var inst_27881 = cljs.core.next.call(null,inst_27870);
var inst_27857 = inst_27881;
var inst_27858 = null;
var inst_27859 = (0);
var inst_27860 = (0);
var state_27977__$1 = (function (){var statearr_28031 = state_27977;
(statearr_28031[(7)] = inst_27860);

(statearr_28031[(8)] = inst_27857);

(statearr_28031[(9)] = inst_27858);

(statearr_28031[(31)] = inst_27880);

(statearr_28031[(10)] = inst_27859);

return statearr_28031;
})();
var statearr_28032_28085 = state_27977__$1;
(statearr_28032_28085[(2)] = null);

(statearr_28032_28085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (26))){
var inst_27910 = (state_27977[(18)]);
var inst_27914 = (state_27977[(21)]);
var inst_27916 = (state_27977[(24)]);
var inst_27918 = (state_27977[(22)]);
var inst_27913 = (state_27977[(23)]);
var inst_27933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27935 = (function (){var all_files = inst_27910;
var res_SINGLEQUOTE_ = inst_27913;
var res = inst_27914;
var files_not_loaded = inst_27916;
var dependencies_that_loaded = inst_27918;
return (function (p__27934){
var map__28033 = p__27934;
var map__28033__$1 = cljs.core.__destructure_map.call(null,map__28033);
var namespace = cljs.core.get.call(null,map__28033__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28033__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_27936 = cljs.core.map.call(null,inst_27935,inst_27914);
var inst_27937 = cljs.core.pr_str.call(null,inst_27936);
var inst_27938 = figwheel.client.utils.log.call(null,inst_27937);
var inst_27939 = (function (){var all_files = inst_27910;
var res_SINGLEQUOTE_ = inst_27913;
var res = inst_27914;
var files_not_loaded = inst_27916;
var dependencies_that_loaded = inst_27918;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_27940 = setTimeout(inst_27939,(10));
var state_27977__$1 = (function (){var statearr_28034 = state_27977;
(statearr_28034[(32)] = inst_27933);

(statearr_28034[(33)] = inst_27938);

return statearr_28034;
})();
var statearr_28035_28086 = state_27977__$1;
(statearr_28035_28086[(2)] = inst_27940);

(statearr_28035_28086[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (16))){
var state_27977__$1 = state_27977;
var statearr_28036_28087 = state_27977__$1;
(statearr_28036_28087[(2)] = reload_dependents);

(statearr_28036_28087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (30))){
var state_27977__$1 = state_27977;
var statearr_28037_28088 = state_27977__$1;
(statearr_28037_28088[(2)] = null);

(statearr_28037_28088[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (10))){
var inst_27870 = (state_27977[(20)]);
var inst_27872 = cljs.core.chunked_seq_QMARK_.call(null,inst_27870);
var state_27977__$1 = state_27977;
if(inst_27872){
var statearr_28038_28089 = state_27977__$1;
(statearr_28038_28089[(1)] = (13));

} else {
var statearr_28039_28090 = state_27977__$1;
(statearr_28039_28090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (18))){
var inst_27904 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
if(cljs.core.truth_(inst_27904)){
var statearr_28040_28091 = state_27977__$1;
(statearr_28040_28091[(1)] = (19));

} else {
var statearr_28041_28092 = state_27977__$1;
(statearr_28041_28092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (37))){
var inst_27972 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_28042_28093 = state_27977__$1;
(statearr_28042_28093[(2)] = inst_27972);

(statearr_28042_28093[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (8))){
var inst_27857 = (state_27977[(8)]);
var inst_27870 = (state_27977[(20)]);
var inst_27870__$1 = cljs.core.seq.call(null,inst_27857);
var state_27977__$1 = (function (){var statearr_28043 = state_27977;
(statearr_28043[(20)] = inst_27870__$1);

return statearr_28043;
})();
if(inst_27870__$1){
var statearr_28044_28094 = state_27977__$1;
(statearr_28044_28094[(1)] = (10));

} else {
var statearr_28045_28095 = state_27977__$1;
(statearr_28045_28095[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto____0 = (function (){
var statearr_28046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28046[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto__);

(statearr_28046[(1)] = (1));

return statearr_28046;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto____1 = (function (state_27977){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_27977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e28047){if((e28047 instanceof Object)){
var ex__24025__auto__ = e28047;
var statearr_28048_28096 = state_27977;
(statearr_28048_28096[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28097 = state_27977;
state_27977 = G__28097;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto__ = function(state_27977){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto____1.call(this,state_27977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_28049 = f__24117__auto__.call(null);
(statearr_28049[(6)] = c__24116__auto__);

return statearr_28049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));

return c__24116__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28100,link){
var map__28101 = p__28100;
var map__28101__$1 = cljs.core.__destructure_map.call(null,map__28101);
var file = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__28098_SHARP_,p2__28099_SHARP_){
if(cljs.core._EQ_.call(null,p1__28098_SHARP_,p2__28099_SHARP_)){
return p1__28098_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28103){
var map__28104 = p__28103;
var map__28104__$1 = cljs.core.__destructure_map.call(null,map__28104);
var match_length = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28102_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28102_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28105_SHARP_,p2__28106_SHARP_){
return cljs.core.assoc.call(null,p1__28105_SHARP_,cljs.core.get.call(null,p2__28106_SHARP_,key),p2__28106_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28107 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28107);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28107);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28108,p__28109){
var map__28110 = p__28108;
var map__28110__$1 = cljs.core.__destructure_map.call(null,map__28110);
var on_cssload = cljs.core.get.call(null,map__28110__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28111 = p__28109;
var map__28111__$1 = cljs.core.__destructure_map.call(null,map__28111);
var files_msg = map__28111__$1;
var files = cljs.core.get.call(null,map__28111__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1717629078527
