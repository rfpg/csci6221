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
var G__27363 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__27363 == null)){
return null;
} else {
return goog.object.get(G__27363,"requires");
}
}):(function (path){
var G__27364 = goog.object.get(goog.dependencies_.requires,path);
if((G__27364 == null)){
return null;
} else {
return goog.object.getKeys(G__27364);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27365_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27365_SHARP_)));
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
var G__27366 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__27366__$1 = (((G__27366 == null))?null:goog.object.get(G__27366,"provides"));
if((G__27366__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__27366__$1);
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
var seq__27367 = cljs.core.seq.call(null,provides);
var chunk__27368 = null;
var count__27369 = (0);
var i__27370 = (0);
while(true){
if((i__27370 < count__27369)){
var prov = cljs.core._nth.call(null,chunk__27368,i__27370);
var seq__27379_27391 = cljs.core.seq.call(null,requires);
var chunk__27380_27392 = null;
var count__27381_27393 = (0);
var i__27382_27394 = (0);
while(true){
if((i__27382_27394 < count__27381_27393)){
var req_27395 = cljs.core._nth.call(null,chunk__27380_27392,i__27382_27394);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27395,prov);


var G__27396 = seq__27379_27391;
var G__27397 = chunk__27380_27392;
var G__27398 = count__27381_27393;
var G__27399 = (i__27382_27394 + (1));
seq__27379_27391 = G__27396;
chunk__27380_27392 = G__27397;
count__27381_27393 = G__27398;
i__27382_27394 = G__27399;
continue;
} else {
var temp__5735__auto___27400 = cljs.core.seq.call(null,seq__27379_27391);
if(temp__5735__auto___27400){
var seq__27379_27401__$1 = temp__5735__auto___27400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27379_27401__$1)){
var c__4591__auto___27402 = cljs.core.chunk_first.call(null,seq__27379_27401__$1);
var G__27403 = cljs.core.chunk_rest.call(null,seq__27379_27401__$1);
var G__27404 = c__4591__auto___27402;
var G__27405 = cljs.core.count.call(null,c__4591__auto___27402);
var G__27406 = (0);
seq__27379_27391 = G__27403;
chunk__27380_27392 = G__27404;
count__27381_27393 = G__27405;
i__27382_27394 = G__27406;
continue;
} else {
var req_27407 = cljs.core.first.call(null,seq__27379_27401__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27407,prov);


var G__27408 = cljs.core.next.call(null,seq__27379_27401__$1);
var G__27409 = null;
var G__27410 = (0);
var G__27411 = (0);
seq__27379_27391 = G__27408;
chunk__27380_27392 = G__27409;
count__27381_27393 = G__27410;
i__27382_27394 = G__27411;
continue;
}
} else {
}
}
break;
}


var G__27412 = seq__27367;
var G__27413 = chunk__27368;
var G__27414 = count__27369;
var G__27415 = (i__27370 + (1));
seq__27367 = G__27412;
chunk__27368 = G__27413;
count__27369 = G__27414;
i__27370 = G__27415;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27367);
if(temp__5735__auto__){
var seq__27367__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27367__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__27367__$1);
var G__27416 = cljs.core.chunk_rest.call(null,seq__27367__$1);
var G__27417 = c__4591__auto__;
var G__27418 = cljs.core.count.call(null,c__4591__auto__);
var G__27419 = (0);
seq__27367 = G__27416;
chunk__27368 = G__27417;
count__27369 = G__27418;
i__27370 = G__27419;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27367__$1);
var seq__27383_27420 = cljs.core.seq.call(null,requires);
var chunk__27384_27421 = null;
var count__27385_27422 = (0);
var i__27386_27423 = (0);
while(true){
if((i__27386_27423 < count__27385_27422)){
var req_27424 = cljs.core._nth.call(null,chunk__27384_27421,i__27386_27423);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27424,prov);


var G__27425 = seq__27383_27420;
var G__27426 = chunk__27384_27421;
var G__27427 = count__27385_27422;
var G__27428 = (i__27386_27423 + (1));
seq__27383_27420 = G__27425;
chunk__27384_27421 = G__27426;
count__27385_27422 = G__27427;
i__27386_27423 = G__27428;
continue;
} else {
var temp__5735__auto___27429__$1 = cljs.core.seq.call(null,seq__27383_27420);
if(temp__5735__auto___27429__$1){
var seq__27383_27430__$1 = temp__5735__auto___27429__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27383_27430__$1)){
var c__4591__auto___27431 = cljs.core.chunk_first.call(null,seq__27383_27430__$1);
var G__27432 = cljs.core.chunk_rest.call(null,seq__27383_27430__$1);
var G__27433 = c__4591__auto___27431;
var G__27434 = cljs.core.count.call(null,c__4591__auto___27431);
var G__27435 = (0);
seq__27383_27420 = G__27432;
chunk__27384_27421 = G__27433;
count__27385_27422 = G__27434;
i__27386_27423 = G__27435;
continue;
} else {
var req_27436 = cljs.core.first.call(null,seq__27383_27430__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27436,prov);


var G__27437 = cljs.core.next.call(null,seq__27383_27430__$1);
var G__27438 = null;
var G__27439 = (0);
var G__27440 = (0);
seq__27383_27420 = G__27437;
chunk__27384_27421 = G__27438;
count__27385_27422 = G__27439;
i__27386_27423 = G__27440;
continue;
}
} else {
}
}
break;
}


var G__27441 = cljs.core.next.call(null,seq__27367__$1);
var G__27442 = null;
var G__27443 = (0);
var G__27444 = (0);
seq__27367 = G__27441;
chunk__27368 = G__27442;
count__27369 = G__27443;
i__27370 = G__27444;
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
var seq__27387 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__27388 = null;
var count__27389 = (0);
var i__27390 = (0);
while(true){
if((i__27390 < count__27389)){
var prov = cljs.core._nth.call(null,chunk__27388,i__27390);
goog.object.forEach(deps,((function (seq__27387,chunk__27388,count__27389,i__27390,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__27387,chunk__27388,count__27389,i__27390,prov,requires))
);


var G__27445 = seq__27387;
var G__27446 = chunk__27388;
var G__27447 = count__27389;
var G__27448 = (i__27390 + (1));
seq__27387 = G__27445;
chunk__27388 = G__27446;
count__27389 = G__27447;
i__27390 = G__27448;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27387);
if(temp__5735__auto__){
var seq__27387__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27387__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__27387__$1);
var G__27449 = cljs.core.chunk_rest.call(null,seq__27387__$1);
var G__27450 = c__4591__auto__;
var G__27451 = cljs.core.count.call(null,c__4591__auto__);
var G__27452 = (0);
seq__27387 = G__27449;
chunk__27388 = G__27450;
count__27389 = G__27451;
i__27390 = G__27452;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27387__$1);
goog.object.forEach(deps,((function (seq__27387,chunk__27388,count__27389,i__27390,prov,seq__27387__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__27387,chunk__27388,count__27389,i__27390,prov,seq__27387__$1,temp__5735__auto__,requires))
);


var G__27453 = cljs.core.next.call(null,seq__27387__$1);
var G__27454 = null;
var G__27455 = (0);
var G__27456 = (0);
seq__27387 = G__27453;
chunk__27388 = G__27454;
count__27389 = G__27455;
i__27390 = G__27456;
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
return cljs.core.some.call(null,(function (p__27457){
var vec__27458 = p__27457;
var _ = cljs.core.nth.call(null,vec__27458,(0),null);
var v = cljs.core.nth.call(null,vec__27458,(1),null);
var and__4149__auto__ = v;
if(cljs.core.truth_(and__4149__auto__)){
return v.call(null,dep);
} else {
return and__4149__auto__;
}
}),cljs.core.filter.call(null,(function (p__27461){
var vec__27462 = p__27461;
var k = cljs.core.nth.call(null,vec__27462,(0),null);
var v = cljs.core.nth.call(null,vec__27462,(1),null);
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

var seq__27474_27482 = cljs.core.seq.call(null,deps);
var chunk__27475_27483 = null;
var count__27476_27484 = (0);
var i__27477_27485 = (0);
while(true){
if((i__27477_27485 < count__27476_27484)){
var dep_27486 = cljs.core._nth.call(null,chunk__27475_27483,i__27477_27485);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_27486;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27486));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27486,(depth + (1)),state);
} else {
}


var G__27487 = seq__27474_27482;
var G__27488 = chunk__27475_27483;
var G__27489 = count__27476_27484;
var G__27490 = (i__27477_27485 + (1));
seq__27474_27482 = G__27487;
chunk__27475_27483 = G__27488;
count__27476_27484 = G__27489;
i__27477_27485 = G__27490;
continue;
} else {
var temp__5735__auto___27491 = cljs.core.seq.call(null,seq__27474_27482);
if(temp__5735__auto___27491){
var seq__27474_27492__$1 = temp__5735__auto___27491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27474_27492__$1)){
var c__4591__auto___27493 = cljs.core.chunk_first.call(null,seq__27474_27492__$1);
var G__27494 = cljs.core.chunk_rest.call(null,seq__27474_27492__$1);
var G__27495 = c__4591__auto___27493;
var G__27496 = cljs.core.count.call(null,c__4591__auto___27493);
var G__27497 = (0);
seq__27474_27482 = G__27494;
chunk__27475_27483 = G__27495;
count__27476_27484 = G__27496;
i__27477_27485 = G__27497;
continue;
} else {
var dep_27498 = cljs.core.first.call(null,seq__27474_27492__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_27498;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27498));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27498,(depth + (1)),state);
} else {
}


var G__27499 = cljs.core.next.call(null,seq__27474_27492__$1);
var G__27500 = null;
var G__27501 = (0);
var G__27502 = (0);
seq__27474_27482 = G__27499;
chunk__27475_27483 = G__27500;
count__27476_27484 = G__27501;
i__27477_27485 = G__27502;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27478){
var vec__27479 = p__27478;
var seq__27480 = cljs.core.seq.call(null,vec__27479);
var first__27481 = cljs.core.first.call(null,seq__27480);
var seq__27480__$1 = cljs.core.next.call(null,seq__27480);
var x = first__27481;
var xs = seq__27480__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__27465_SHARP_){
return clojure.set.difference.call(null,p1__27465_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__27503_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__27503_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27504 = cljs.core.seq.call(null,provides);
var chunk__27505 = null;
var count__27506 = (0);
var i__27507 = (0);
while(true){
if((i__27507 < count__27506)){
var prov = cljs.core._nth.call(null,chunk__27505,i__27507);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27516_27524 = cljs.core.seq.call(null,requires);
var chunk__27517_27525 = null;
var count__27518_27526 = (0);
var i__27519_27527 = (0);
while(true){
if((i__27519_27527 < count__27518_27526)){
var req_27528 = cljs.core._nth.call(null,chunk__27517_27525,i__27519_27527);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27528,prov);


var G__27529 = seq__27516_27524;
var G__27530 = chunk__27517_27525;
var G__27531 = count__27518_27526;
var G__27532 = (i__27519_27527 + (1));
seq__27516_27524 = G__27529;
chunk__27517_27525 = G__27530;
count__27518_27526 = G__27531;
i__27519_27527 = G__27532;
continue;
} else {
var temp__5735__auto___27533 = cljs.core.seq.call(null,seq__27516_27524);
if(temp__5735__auto___27533){
var seq__27516_27534__$1 = temp__5735__auto___27533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27516_27534__$1)){
var c__4591__auto___27535 = cljs.core.chunk_first.call(null,seq__27516_27534__$1);
var G__27536 = cljs.core.chunk_rest.call(null,seq__27516_27534__$1);
var G__27537 = c__4591__auto___27535;
var G__27538 = cljs.core.count.call(null,c__4591__auto___27535);
var G__27539 = (0);
seq__27516_27524 = G__27536;
chunk__27517_27525 = G__27537;
count__27518_27526 = G__27538;
i__27519_27527 = G__27539;
continue;
} else {
var req_27540 = cljs.core.first.call(null,seq__27516_27534__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27540,prov);


var G__27541 = cljs.core.next.call(null,seq__27516_27534__$1);
var G__27542 = null;
var G__27543 = (0);
var G__27544 = (0);
seq__27516_27524 = G__27541;
chunk__27517_27525 = G__27542;
count__27518_27526 = G__27543;
i__27519_27527 = G__27544;
continue;
}
} else {
}
}
break;
}


var G__27545 = seq__27504;
var G__27546 = chunk__27505;
var G__27547 = count__27506;
var G__27548 = (i__27507 + (1));
seq__27504 = G__27545;
chunk__27505 = G__27546;
count__27506 = G__27547;
i__27507 = G__27548;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27504);
if(temp__5735__auto__){
var seq__27504__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27504__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__27504__$1);
var G__27549 = cljs.core.chunk_rest.call(null,seq__27504__$1);
var G__27550 = c__4591__auto__;
var G__27551 = cljs.core.count.call(null,c__4591__auto__);
var G__27552 = (0);
seq__27504 = G__27549;
chunk__27505 = G__27550;
count__27506 = G__27551;
i__27507 = G__27552;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27504__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27520_27553 = cljs.core.seq.call(null,requires);
var chunk__27521_27554 = null;
var count__27522_27555 = (0);
var i__27523_27556 = (0);
while(true){
if((i__27523_27556 < count__27522_27555)){
var req_27557 = cljs.core._nth.call(null,chunk__27521_27554,i__27523_27556);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27557,prov);


var G__27558 = seq__27520_27553;
var G__27559 = chunk__27521_27554;
var G__27560 = count__27522_27555;
var G__27561 = (i__27523_27556 + (1));
seq__27520_27553 = G__27558;
chunk__27521_27554 = G__27559;
count__27522_27555 = G__27560;
i__27523_27556 = G__27561;
continue;
} else {
var temp__5735__auto___27562__$1 = cljs.core.seq.call(null,seq__27520_27553);
if(temp__5735__auto___27562__$1){
var seq__27520_27563__$1 = temp__5735__auto___27562__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27520_27563__$1)){
var c__4591__auto___27564 = cljs.core.chunk_first.call(null,seq__27520_27563__$1);
var G__27565 = cljs.core.chunk_rest.call(null,seq__27520_27563__$1);
var G__27566 = c__4591__auto___27564;
var G__27567 = cljs.core.count.call(null,c__4591__auto___27564);
var G__27568 = (0);
seq__27520_27553 = G__27565;
chunk__27521_27554 = G__27566;
count__27522_27555 = G__27567;
i__27523_27556 = G__27568;
continue;
} else {
var req_27569 = cljs.core.first.call(null,seq__27520_27563__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27569,prov);


var G__27570 = cljs.core.next.call(null,seq__27520_27563__$1);
var G__27571 = null;
var G__27572 = (0);
var G__27573 = (0);
seq__27520_27553 = G__27570;
chunk__27521_27554 = G__27571;
count__27522_27555 = G__27572;
i__27523_27556 = G__27573;
continue;
}
} else {
}
}
break;
}


var G__27574 = cljs.core.next.call(null,seq__27504__$1);
var G__27575 = null;
var G__27576 = (0);
var G__27577 = (0);
seq__27504 = G__27574;
chunk__27505 = G__27575;
count__27506 = G__27576;
i__27507 = G__27577;
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
var seq__27578_27582 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27579_27583 = null;
var count__27580_27584 = (0);
var i__27581_27585 = (0);
while(true){
if((i__27581_27585 < count__27580_27584)){
var ns_27586 = cljs.core._nth.call(null,chunk__27579_27583,i__27581_27585);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27586);


var G__27587 = seq__27578_27582;
var G__27588 = chunk__27579_27583;
var G__27589 = count__27580_27584;
var G__27590 = (i__27581_27585 + (1));
seq__27578_27582 = G__27587;
chunk__27579_27583 = G__27588;
count__27580_27584 = G__27589;
i__27581_27585 = G__27590;
continue;
} else {
var temp__5735__auto___27591 = cljs.core.seq.call(null,seq__27578_27582);
if(temp__5735__auto___27591){
var seq__27578_27592__$1 = temp__5735__auto___27591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27578_27592__$1)){
var c__4591__auto___27593 = cljs.core.chunk_first.call(null,seq__27578_27592__$1);
var G__27594 = cljs.core.chunk_rest.call(null,seq__27578_27592__$1);
var G__27595 = c__4591__auto___27593;
var G__27596 = cljs.core.count.call(null,c__4591__auto___27593);
var G__27597 = (0);
seq__27578_27582 = G__27594;
chunk__27579_27583 = G__27595;
count__27580_27584 = G__27596;
i__27581_27585 = G__27597;
continue;
} else {
var ns_27598 = cljs.core.first.call(null,seq__27578_27592__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27598);


var G__27599 = cljs.core.next.call(null,seq__27578_27592__$1);
var G__27600 = null;
var G__27601 = (0);
var G__27602 = (0);
seq__27578_27582 = G__27599;
chunk__27579_27583 = G__27600;
count__27580_27584 = G__27601;
i__27581_27585 = G__27602;
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
var G__27603__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27604__i = 0, G__27604__a = new Array(arguments.length -  0);
while (G__27604__i < G__27604__a.length) {G__27604__a[G__27604__i] = arguments[G__27604__i + 0]; ++G__27604__i;}
  args = new cljs.core.IndexedSeq(G__27604__a,0,null);
} 
return G__27603__delegate.call(this,args);};
G__27603.cljs$lang$maxFixedArity = 0;
G__27603.cljs$lang$applyTo = (function (arglist__27605){
var args = cljs.core.seq(arglist__27605);
return G__27603__delegate(args);
});
G__27603.cljs$core$IFn$_invoke$arity$variadic = G__27603__delegate;
return G__27603;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27606_SHARP_,p2__27607_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27606_SHARP_)),p2__27607_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27608_SHARP_,p2__27609_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27608_SHARP_),p2__27609_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27610 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27610.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__27610.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__27610;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27611){if((e27611 instanceof Error)){
var e = e27611;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27611;

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
}catch (e27612){if((e27612 instanceof Error)){
var e = e27612;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27612;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27613 = cljs.core._EQ_;
var expr__27614 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27613.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27614))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27613.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27614))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27613.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27614))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27616,callback){
var map__27617 = p__27616;
var map__27617__$1 = cljs.core.__destructure_map.call(null,map__27617);
var file_msg = map__27617__$1;
var request_url = cljs.core.get.call(null,map__27617__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_27654){
var state_val_27655 = (state_27654[(1)]);
if((state_val_27655 === (7))){
var inst_27650 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27656_27682 = state_27654__$1;
(statearr_27656_27682[(2)] = inst_27650);

(statearr_27656_27682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (1))){
var state_27654__$1 = state_27654;
var statearr_27657_27683 = state_27654__$1;
(statearr_27657_27683[(2)] = null);

(statearr_27657_27683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (4))){
var inst_27620 = (state_27654[(7)]);
var inst_27620__$1 = (state_27654[(2)]);
var state_27654__$1 = (function (){var statearr_27658 = state_27654;
(statearr_27658[(7)] = inst_27620__$1);

return statearr_27658;
})();
if(cljs.core.truth_(inst_27620__$1)){
var statearr_27659_27684 = state_27654__$1;
(statearr_27659_27684[(1)] = (5));

} else {
var statearr_27660_27685 = state_27654__$1;
(statearr_27660_27685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (15))){
var inst_27633 = (state_27654[(8)]);
var inst_27635 = (state_27654[(9)]);
var inst_27637 = inst_27635.call(null,inst_27633);
var state_27654__$1 = state_27654;
var statearr_27661_27686 = state_27654__$1;
(statearr_27661_27686[(2)] = inst_27637);

(statearr_27661_27686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (13))){
var inst_27644 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27662_27687 = state_27654__$1;
(statearr_27662_27687[(2)] = inst_27644);

(statearr_27662_27687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (6))){
var state_27654__$1 = state_27654;
var statearr_27663_27688 = state_27654__$1;
(statearr_27663_27688[(2)] = null);

(statearr_27663_27688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (17))){
var inst_27641 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27664_27689 = state_27654__$1;
(statearr_27664_27689[(2)] = inst_27641);

(statearr_27664_27689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (3))){
var inst_27652 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27654__$1,inst_27652);
} else {
if((state_val_27655 === (12))){
var state_27654__$1 = state_27654;
var statearr_27665_27690 = state_27654__$1;
(statearr_27665_27690[(2)] = null);

(statearr_27665_27690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (2))){
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27654__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27655 === (11))){
var inst_27625 = (state_27654[(10)]);
var inst_27631 = figwheel.client.file_reloading.blocking_load.call(null,inst_27625);
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27654__$1,(14),inst_27631);
} else {
if((state_val_27655 === (9))){
var inst_27625 = (state_27654[(10)]);
var state_27654__$1 = state_27654;
if(cljs.core.truth_(inst_27625)){
var statearr_27666_27691 = state_27654__$1;
(statearr_27666_27691[(1)] = (11));

} else {
var statearr_27667_27692 = state_27654__$1;
(statearr_27667_27692[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (5))){
var inst_27620 = (state_27654[(7)]);
var inst_27626 = (state_27654[(11)]);
var inst_27625 = cljs.core.nth.call(null,inst_27620,(0),null);
var inst_27626__$1 = cljs.core.nth.call(null,inst_27620,(1),null);
var state_27654__$1 = (function (){var statearr_27668 = state_27654;
(statearr_27668[(10)] = inst_27625);

(statearr_27668[(11)] = inst_27626__$1);

return statearr_27668;
})();
if(cljs.core.truth_(inst_27626__$1)){
var statearr_27669_27693 = state_27654__$1;
(statearr_27669_27693[(1)] = (8));

} else {
var statearr_27670_27694 = state_27654__$1;
(statearr_27670_27694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (14))){
var inst_27635 = (state_27654[(9)]);
var inst_27625 = (state_27654[(10)]);
var inst_27633 = (state_27654[(2)]);
var inst_27634 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27635__$1 = cljs.core.get.call(null,inst_27634,inst_27625);
var state_27654__$1 = (function (){var statearr_27671 = state_27654;
(statearr_27671[(8)] = inst_27633);

(statearr_27671[(9)] = inst_27635__$1);

return statearr_27671;
})();
if(cljs.core.truth_(inst_27635__$1)){
var statearr_27672_27695 = state_27654__$1;
(statearr_27672_27695[(1)] = (15));

} else {
var statearr_27673_27696 = state_27654__$1;
(statearr_27673_27696[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (16))){
var inst_27633 = (state_27654[(8)]);
var inst_27639 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27633);
var state_27654__$1 = state_27654;
var statearr_27674_27697 = state_27654__$1;
(statearr_27674_27697[(2)] = inst_27639);

(statearr_27674_27697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (10))){
var inst_27646 = (state_27654[(2)]);
var state_27654__$1 = (function (){var statearr_27675 = state_27654;
(statearr_27675[(12)] = inst_27646);

return statearr_27675;
})();
var statearr_27676_27698 = state_27654__$1;
(statearr_27676_27698[(2)] = null);

(statearr_27676_27698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (8))){
var inst_27626 = (state_27654[(11)]);
var inst_27628 = eval(inst_27626);
var state_27654__$1 = state_27654;
var statearr_27677_27699 = state_27654__$1;
(statearr_27677_27699[(2)] = inst_27628);

(statearr_27677_27699[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__24072__auto__ = null;
var figwheel$client$file_reloading$state_machine__24072__auto____0 = (function (){
var statearr_27678 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27678[(0)] = figwheel$client$file_reloading$state_machine__24072__auto__);

(statearr_27678[(1)] = (1));

return statearr_27678;
});
var figwheel$client$file_reloading$state_machine__24072__auto____1 = (function (state_27654){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_27654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e27679){if((e27679 instanceof Object)){
var ex__24075__auto__ = e27679;
var statearr_27680_27700 = state_27654;
(statearr_27680_27700[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27701 = state_27654;
state_27654 = G__27701;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24072__auto__ = function(state_27654){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24072__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24072__auto____1.call(this,state_27654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24072__auto____0;
figwheel$client$file_reloading$state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24072__auto____1;
return figwheel$client$file_reloading$state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_27681 = f__24167__auto__.call(null);
(statearr_27681[(6)] = c__24166__auto__);

return statearr_27681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));

return c__24166__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27703 = arguments.length;
switch (G__27703) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27705,callback){
var map__27706 = p__27705;
var map__27706__$1 = cljs.core.__destructure_map.call(null,map__27706);
var file_msg = map__27706__$1;
var namespace = cljs.core.get.call(null,map__27706__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27707){
var map__27708 = p__27707;
var map__27708__$1 = cljs.core.__destructure_map.call(null,map__27708);
var file_msg = map__27708__$1;
var namespace = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27709){
var map__27710 = p__27709;
var map__27710__$1 = cljs.core.__destructure_map.call(null,map__27710);
var file_msg = map__27710__$1;
var namespace = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27711,callback){
var map__27712 = p__27711;
var map__27712__$1 = cljs.core.__destructure_map.call(null,map__27712);
var file_msg = map__27712__$1;
var request_url = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24166__auto___27761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_27746){
var state_val_27747 = (state_27746[(1)]);
if((state_val_27747 === (1))){
var inst_27720 = cljs.core.seq.call(null,files);
var inst_27721 = cljs.core.first.call(null,inst_27720);
var inst_27722 = cljs.core.next.call(null,inst_27720);
var inst_27723 = files;
var state_27746__$1 = (function (){var statearr_27748 = state_27746;
(statearr_27748[(7)] = inst_27723);

(statearr_27748[(8)] = inst_27721);

(statearr_27748[(9)] = inst_27722);

return statearr_27748;
})();
var statearr_27749_27762 = state_27746__$1;
(statearr_27749_27762[(2)] = null);

(statearr_27749_27762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (2))){
var inst_27723 = (state_27746[(7)]);
var inst_27729 = (state_27746[(10)]);
var inst_27728 = cljs.core.seq.call(null,inst_27723);
var inst_27729__$1 = cljs.core.first.call(null,inst_27728);
var inst_27730 = cljs.core.next.call(null,inst_27728);
var inst_27731 = (inst_27729__$1 == null);
var inst_27732 = cljs.core.not.call(null,inst_27731);
var state_27746__$1 = (function (){var statearr_27750 = state_27746;
(statearr_27750[(10)] = inst_27729__$1);

(statearr_27750[(11)] = inst_27730);

return statearr_27750;
})();
if(inst_27732){
var statearr_27751_27763 = state_27746__$1;
(statearr_27751_27763[(1)] = (4));

} else {
var statearr_27752_27764 = state_27746__$1;
(statearr_27752_27764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (3))){
var inst_27744 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27746__$1,inst_27744);
} else {
if((state_val_27747 === (4))){
var inst_27729 = (state_27746[(10)]);
var inst_27734 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27729);
var state_27746__$1 = state_27746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27746__$1,(7),inst_27734);
} else {
if((state_val_27747 === (5))){
var inst_27740 = cljs.core.async.close_BANG_.call(null,out);
var state_27746__$1 = state_27746;
var statearr_27753_27765 = state_27746__$1;
(statearr_27753_27765[(2)] = inst_27740);

(statearr_27753_27765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (6))){
var inst_27742 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
var statearr_27754_27766 = state_27746__$1;
(statearr_27754_27766[(2)] = inst_27742);

(statearr_27754_27766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (7))){
var inst_27730 = (state_27746[(11)]);
var inst_27736 = (state_27746[(2)]);
var inst_27737 = cljs.core.async.put_BANG_.call(null,out,inst_27736);
var inst_27723 = inst_27730;
var state_27746__$1 = (function (){var statearr_27755 = state_27746;
(statearr_27755[(7)] = inst_27723);

(statearr_27755[(12)] = inst_27737);

return statearr_27755;
})();
var statearr_27756_27767 = state_27746__$1;
(statearr_27756_27767[(2)] = null);

(statearr_27756_27767[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto____0 = (function (){
var statearr_27757 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27757[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto__);

(statearr_27757[(1)] = (1));

return statearr_27757;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto____1 = (function (state_27746){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_27746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e27758){if((e27758 instanceof Object)){
var ex__24075__auto__ = e27758;
var statearr_27759_27768 = state_27746;
(statearr_27759_27768[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27769 = state_27746;
state_27746 = G__27769;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto__ = function(state_27746){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto____1.call(this,state_27746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_27760 = f__24167__auto__.call(null);
(statearr_27760[(6)] = c__24166__auto___27761);

return statearr_27760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27770,opts){
var map__27771 = p__27770;
var map__27771__$1 = cljs.core.__destructure_map.call(null,map__27771);
var eval_body = cljs.core.get.call(null,map__27771__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27771__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27772){var e = e27772;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27773_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27773_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27774){
var vec__27775 = p__27774;
var k = cljs.core.nth.call(null,vec__27775,(0),null);
var v = cljs.core.nth.call(null,vec__27775,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27778){
var vec__27779 = p__27778;
var k = cljs.core.nth.call(null,vec__27779,(0),null);
var v = cljs.core.nth.call(null,vec__27779,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27785,p__27786){
var map__27787 = p__27785;
var map__27787__$1 = cljs.core.__destructure_map.call(null,map__27787);
var opts = map__27787__$1;
var before_jsload = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27788 = p__27786;
var map__27788__$1 = cljs.core.__destructure_map.call(null,map__27788);
var msg = map__27788__$1;
var files = cljs.core.get.call(null,map__27788__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27788__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27788__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24167__auto__ = (function (){var switch__24071__auto__ = (function (state_27920){
var state_val_27921 = (state_27920[(1)]);
if((state_val_27921 === (7))){
var inst_27802 = (state_27920[(7)]);
var inst_27800 = (state_27920[(8)]);
var inst_27803 = (state_27920[(9)]);
var inst_27801 = (state_27920[(10)]);
var inst_27808 = cljs.core._nth.call(null,inst_27801,inst_27803);
var inst_27809 = figwheel.client.file_reloading.eval_body.call(null,inst_27808,opts);
var inst_27810 = (inst_27803 + (1));
var tmp27922 = inst_27802;
var tmp27923 = inst_27800;
var tmp27924 = inst_27801;
var inst_27800__$1 = tmp27923;
var inst_27801__$1 = tmp27924;
var inst_27802__$1 = tmp27922;
var inst_27803__$1 = inst_27810;
var state_27920__$1 = (function (){var statearr_27925 = state_27920;
(statearr_27925[(7)] = inst_27802__$1);

(statearr_27925[(8)] = inst_27800__$1);

(statearr_27925[(9)] = inst_27803__$1);

(statearr_27925[(10)] = inst_27801__$1);

(statearr_27925[(11)] = inst_27809);

return statearr_27925;
})();
var statearr_27926_27993 = state_27920__$1;
(statearr_27926_27993[(2)] = null);

(statearr_27926_27993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (20))){
var inst_27843 = (state_27920[(12)]);
var inst_27851 = figwheel.client.file_reloading.sort_files.call(null,inst_27843);
var state_27920__$1 = state_27920;
var statearr_27927_27994 = state_27920__$1;
(statearr_27927_27994[(2)] = inst_27851);

(statearr_27927_27994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (27))){
var state_27920__$1 = state_27920;
var statearr_27928_27995 = state_27920__$1;
(statearr_27928_27995[(2)] = null);

(statearr_27928_27995[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (1))){
var inst_27792 = (state_27920[(13)]);
var inst_27789 = before_jsload.call(null,files);
var inst_27790 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27791 = (function (){return (function (p1__27782_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27782_SHARP_);
});
})();
var inst_27792__$1 = cljs.core.filter.call(null,inst_27791,files);
var inst_27793 = cljs.core.not_empty.call(null,inst_27792__$1);
var state_27920__$1 = (function (){var statearr_27929 = state_27920;
(statearr_27929[(13)] = inst_27792__$1);

(statearr_27929[(14)] = inst_27789);

(statearr_27929[(15)] = inst_27790);

return statearr_27929;
})();
if(cljs.core.truth_(inst_27793)){
var statearr_27930_27996 = state_27920__$1;
(statearr_27930_27996[(1)] = (2));

} else {
var statearr_27931_27997 = state_27920__$1;
(statearr_27931_27997[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (24))){
var state_27920__$1 = state_27920;
var statearr_27932_27998 = state_27920__$1;
(statearr_27932_27998[(2)] = null);

(statearr_27932_27998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (4))){
var inst_27837 = (state_27920[(2)]);
var inst_27838 = cljs.core.List.EMPTY;
var inst_27839 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27838);
var inst_27840 = (function (){return (function (p1__27783_SHARP_){
var and__4149__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27783_SHARP_);
if(cljs.core.truth_(and__4149__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27783_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27783_SHARP_))));
} else {
return and__4149__auto__;
}
});
})();
var inst_27841 = cljs.core.filter.call(null,inst_27840,files);
var inst_27842 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27843 = cljs.core.concat.call(null,inst_27841,inst_27842);
var state_27920__$1 = (function (){var statearr_27933 = state_27920;
(statearr_27933[(16)] = inst_27837);

(statearr_27933[(17)] = inst_27839);

(statearr_27933[(12)] = inst_27843);

return statearr_27933;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27934_27999 = state_27920__$1;
(statearr_27934_27999[(1)] = (16));

} else {
var statearr_27935_28000 = state_27920__$1;
(statearr_27935_28000[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (15))){
var inst_27827 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27936_28001 = state_27920__$1;
(statearr_27936_28001[(2)] = inst_27827);

(statearr_27936_28001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (21))){
var inst_27853 = (state_27920[(18)]);
var inst_27853__$1 = (state_27920[(2)]);
var inst_27854 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27853__$1);
var state_27920__$1 = (function (){var statearr_27937 = state_27920;
(statearr_27937[(18)] = inst_27853__$1);

return statearr_27937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27920__$1,(22),inst_27854);
} else {
if((state_val_27921 === (31))){
var inst_27918 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27920__$1,inst_27918);
} else {
if((state_val_27921 === (32))){
var inst_27895 = (state_27920[(19)]);
var inst_27899 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27900 = cljs.core.map.call(null,inst_27899,inst_27895);
var inst_27901 = cljs.core.pr_str.call(null,inst_27900);
var inst_27902 = ["figwheel-no-load meta-data: ",inst_27901].join('');
var inst_27903 = figwheel.client.utils.log.call(null,inst_27902);
var state_27920__$1 = state_27920;
var statearr_27938_28002 = state_27920__$1;
(statearr_27938_28002[(2)] = inst_27903);

(statearr_27938_28002[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (33))){
var state_27920__$1 = state_27920;
var statearr_27939_28003 = state_27920__$1;
(statearr_27939_28003[(2)] = null);

(statearr_27939_28003[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (13))){
var inst_27813 = (state_27920[(20)]);
var inst_27817 = cljs.core.chunk_first.call(null,inst_27813);
var inst_27818 = cljs.core.chunk_rest.call(null,inst_27813);
var inst_27819 = cljs.core.count.call(null,inst_27817);
var inst_27800 = inst_27818;
var inst_27801 = inst_27817;
var inst_27802 = inst_27819;
var inst_27803 = (0);
var state_27920__$1 = (function (){var statearr_27940 = state_27920;
(statearr_27940[(7)] = inst_27802);

(statearr_27940[(8)] = inst_27800);

(statearr_27940[(9)] = inst_27803);

(statearr_27940[(10)] = inst_27801);

return statearr_27940;
})();
var statearr_27941_28004 = state_27920__$1;
(statearr_27941_28004[(2)] = null);

(statearr_27941_28004[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (22))){
var inst_27856 = (state_27920[(21)]);
var inst_27857 = (state_27920[(22)]);
var inst_27853 = (state_27920[(18)]);
var inst_27861 = (state_27920[(23)]);
var inst_27856__$1 = (state_27920[(2)]);
var inst_27857__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27856__$1);
var inst_27858 = (function (){var all_files = inst_27853;
var res_SINGLEQUOTE_ = inst_27856__$1;
var res = inst_27857__$1;
return (function (p1__27784_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27784_SHARP_));
});
})();
var inst_27859 = cljs.core.filter.call(null,inst_27858,inst_27856__$1);
var inst_27860 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27861__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27860);
var inst_27862 = cljs.core.not_empty.call(null,inst_27861__$1);
var state_27920__$1 = (function (){var statearr_27942 = state_27920;
(statearr_27942[(21)] = inst_27856__$1);

(statearr_27942[(22)] = inst_27857__$1);

(statearr_27942[(23)] = inst_27861__$1);

(statearr_27942[(24)] = inst_27859);

return statearr_27942;
})();
if(cljs.core.truth_(inst_27862)){
var statearr_27943_28005 = state_27920__$1;
(statearr_27943_28005[(1)] = (23));

} else {
var statearr_27944_28006 = state_27920__$1;
(statearr_27944_28006[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (36))){
var state_27920__$1 = state_27920;
var statearr_27945_28007 = state_27920__$1;
(statearr_27945_28007[(2)] = null);

(statearr_27945_28007[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (29))){
var inst_27895 = (state_27920[(19)]);
var inst_27856 = (state_27920[(21)]);
var inst_27857 = (state_27920[(22)]);
var inst_27853 = (state_27920[(18)]);
var inst_27861 = (state_27920[(23)]);
var inst_27859 = (state_27920[(24)]);
var inst_27889 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27892 = (function (){var all_files = inst_27853;
var res_SINGLEQUOTE_ = inst_27856;
var res = inst_27857;
var files_not_loaded = inst_27859;
var dependencies_that_loaded = inst_27861;
return (function (p__27891){
var map__27946 = p__27891;
var map__27946__$1 = cljs.core.__destructure_map.call(null,map__27946);
var namespace = cljs.core.get.call(null,map__27946__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_27893 = cljs.core.group_by.call(null,inst_27892,inst_27859);
var inst_27894 = cljs.core.__destructure_map.call(null,inst_27893);
var inst_27895__$1 = cljs.core.get.call(null,inst_27894,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27896 = cljs.core.get.call(null,inst_27894,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27897 = cljs.core.not_empty.call(null,inst_27895__$1);
var state_27920__$1 = (function (){var statearr_27947 = state_27920;
(statearr_27947[(19)] = inst_27895__$1);

(statearr_27947[(25)] = inst_27889);

(statearr_27947[(26)] = inst_27896);

return statearr_27947;
})();
if(cljs.core.truth_(inst_27897)){
var statearr_27948_28008 = state_27920__$1;
(statearr_27948_28008[(1)] = (32));

} else {
var statearr_27949_28009 = state_27920__$1;
(statearr_27949_28009[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (6))){
var inst_27834 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27950_28010 = state_27920__$1;
(statearr_27950_28010[(2)] = inst_27834);

(statearr_27950_28010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (28))){
var inst_27859 = (state_27920[(24)]);
var inst_27886 = (state_27920[(2)]);
var inst_27887 = cljs.core.not_empty.call(null,inst_27859);
var state_27920__$1 = (function (){var statearr_27951 = state_27920;
(statearr_27951[(27)] = inst_27886);

return statearr_27951;
})();
if(cljs.core.truth_(inst_27887)){
var statearr_27952_28011 = state_27920__$1;
(statearr_27952_28011[(1)] = (29));

} else {
var statearr_27953_28012 = state_27920__$1;
(statearr_27953_28012[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (25))){
var inst_27857 = (state_27920[(22)]);
var inst_27873 = (state_27920[(2)]);
var inst_27874 = cljs.core.not_empty.call(null,inst_27857);
var state_27920__$1 = (function (){var statearr_27954 = state_27920;
(statearr_27954[(28)] = inst_27873);

return statearr_27954;
})();
if(cljs.core.truth_(inst_27874)){
var statearr_27955_28013 = state_27920__$1;
(statearr_27955_28013[(1)] = (26));

} else {
var statearr_27956_28014 = state_27920__$1;
(statearr_27956_28014[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (34))){
var inst_27896 = (state_27920[(26)]);
var inst_27906 = (state_27920[(2)]);
var inst_27907 = cljs.core.not_empty.call(null,inst_27896);
var state_27920__$1 = (function (){var statearr_27957 = state_27920;
(statearr_27957[(29)] = inst_27906);

return statearr_27957;
})();
if(cljs.core.truth_(inst_27907)){
var statearr_27958_28015 = state_27920__$1;
(statearr_27958_28015[(1)] = (35));

} else {
var statearr_27959_28016 = state_27920__$1;
(statearr_27959_28016[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (17))){
var state_27920__$1 = state_27920;
var statearr_27960_28017 = state_27920__$1;
(statearr_27960_28017[(2)] = recompile_dependents);

(statearr_27960_28017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (3))){
var state_27920__$1 = state_27920;
var statearr_27961_28018 = state_27920__$1;
(statearr_27961_28018[(2)] = null);

(statearr_27961_28018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (12))){
var inst_27830 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27962_28019 = state_27920__$1;
(statearr_27962_28019[(2)] = inst_27830);

(statearr_27962_28019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (2))){
var inst_27792 = (state_27920[(13)]);
var inst_27799 = cljs.core.seq.call(null,inst_27792);
var inst_27800 = inst_27799;
var inst_27801 = null;
var inst_27802 = (0);
var inst_27803 = (0);
var state_27920__$1 = (function (){var statearr_27963 = state_27920;
(statearr_27963[(7)] = inst_27802);

(statearr_27963[(8)] = inst_27800);

(statearr_27963[(9)] = inst_27803);

(statearr_27963[(10)] = inst_27801);

return statearr_27963;
})();
var statearr_27964_28020 = state_27920__$1;
(statearr_27964_28020[(2)] = null);

(statearr_27964_28020[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (23))){
var inst_27856 = (state_27920[(21)]);
var inst_27857 = (state_27920[(22)]);
var inst_27853 = (state_27920[(18)]);
var inst_27861 = (state_27920[(23)]);
var inst_27859 = (state_27920[(24)]);
var inst_27864 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27866 = (function (){var all_files = inst_27853;
var res_SINGLEQUOTE_ = inst_27856;
var res = inst_27857;
var files_not_loaded = inst_27859;
var dependencies_that_loaded = inst_27861;
return (function (p__27865){
var map__27965 = p__27865;
var map__27965__$1 = cljs.core.__destructure_map.call(null,map__27965);
var request_url = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_27867 = cljs.core.reverse.call(null,inst_27861);
var inst_27868 = cljs.core.map.call(null,inst_27866,inst_27867);
var inst_27869 = cljs.core.pr_str.call(null,inst_27868);
var inst_27870 = figwheel.client.utils.log.call(null,inst_27869);
var state_27920__$1 = (function (){var statearr_27966 = state_27920;
(statearr_27966[(30)] = inst_27864);

return statearr_27966;
})();
var statearr_27967_28021 = state_27920__$1;
(statearr_27967_28021[(2)] = inst_27870);

(statearr_27967_28021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (35))){
var inst_27896 = (state_27920[(26)]);
var inst_27909 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27896);
var inst_27910 = cljs.core.pr_str.call(null,inst_27909);
var inst_27911 = ["not required: ",inst_27910].join('');
var inst_27912 = figwheel.client.utils.log.call(null,inst_27911);
var state_27920__$1 = state_27920;
var statearr_27968_28022 = state_27920__$1;
(statearr_27968_28022[(2)] = inst_27912);

(statearr_27968_28022[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (19))){
var inst_27843 = (state_27920[(12)]);
var inst_27849 = figwheel.client.file_reloading.expand_files.call(null,inst_27843);
var state_27920__$1 = state_27920;
var statearr_27969_28023 = state_27920__$1;
(statearr_27969_28023[(2)] = inst_27849);

(statearr_27969_28023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (11))){
var state_27920__$1 = state_27920;
var statearr_27970_28024 = state_27920__$1;
(statearr_27970_28024[(2)] = null);

(statearr_27970_28024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (9))){
var inst_27832 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27971_28025 = state_27920__$1;
(statearr_27971_28025[(2)] = inst_27832);

(statearr_27971_28025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (5))){
var inst_27802 = (state_27920[(7)]);
var inst_27803 = (state_27920[(9)]);
var inst_27805 = (inst_27803 < inst_27802);
var inst_27806 = inst_27805;
var state_27920__$1 = state_27920;
if(cljs.core.truth_(inst_27806)){
var statearr_27972_28026 = state_27920__$1;
(statearr_27972_28026[(1)] = (7));

} else {
var statearr_27973_28027 = state_27920__$1;
(statearr_27973_28027[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (14))){
var inst_27813 = (state_27920[(20)]);
var inst_27822 = cljs.core.first.call(null,inst_27813);
var inst_27823 = figwheel.client.file_reloading.eval_body.call(null,inst_27822,opts);
var inst_27824 = cljs.core.next.call(null,inst_27813);
var inst_27800 = inst_27824;
var inst_27801 = null;
var inst_27802 = (0);
var inst_27803 = (0);
var state_27920__$1 = (function (){var statearr_27974 = state_27920;
(statearr_27974[(7)] = inst_27802);

(statearr_27974[(8)] = inst_27800);

(statearr_27974[(9)] = inst_27803);

(statearr_27974[(31)] = inst_27823);

(statearr_27974[(10)] = inst_27801);

return statearr_27974;
})();
var statearr_27975_28028 = state_27920__$1;
(statearr_27975_28028[(2)] = null);

(statearr_27975_28028[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (26))){
var inst_27856 = (state_27920[(21)]);
var inst_27857 = (state_27920[(22)]);
var inst_27853 = (state_27920[(18)]);
var inst_27861 = (state_27920[(23)]);
var inst_27859 = (state_27920[(24)]);
var inst_27876 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27878 = (function (){var all_files = inst_27853;
var res_SINGLEQUOTE_ = inst_27856;
var res = inst_27857;
var files_not_loaded = inst_27859;
var dependencies_that_loaded = inst_27861;
return (function (p__27877){
var map__27976 = p__27877;
var map__27976__$1 = cljs.core.__destructure_map.call(null,map__27976);
var namespace = cljs.core.get.call(null,map__27976__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27976__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_27879 = cljs.core.map.call(null,inst_27878,inst_27857);
var inst_27880 = cljs.core.pr_str.call(null,inst_27879);
var inst_27881 = figwheel.client.utils.log.call(null,inst_27880);
var inst_27882 = (function (){var all_files = inst_27853;
var res_SINGLEQUOTE_ = inst_27856;
var res = inst_27857;
var files_not_loaded = inst_27859;
var dependencies_that_loaded = inst_27861;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_27883 = setTimeout(inst_27882,(10));
var state_27920__$1 = (function (){var statearr_27977 = state_27920;
(statearr_27977[(32)] = inst_27881);

(statearr_27977[(33)] = inst_27876);

return statearr_27977;
})();
var statearr_27978_28029 = state_27920__$1;
(statearr_27978_28029[(2)] = inst_27883);

(statearr_27978_28029[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (16))){
var state_27920__$1 = state_27920;
var statearr_27979_28030 = state_27920__$1;
(statearr_27979_28030[(2)] = reload_dependents);

(statearr_27979_28030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (30))){
var state_27920__$1 = state_27920;
var statearr_27980_28031 = state_27920__$1;
(statearr_27980_28031[(2)] = null);

(statearr_27980_28031[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (10))){
var inst_27813 = (state_27920[(20)]);
var inst_27815 = cljs.core.chunked_seq_QMARK_.call(null,inst_27813);
var state_27920__$1 = state_27920;
if(inst_27815){
var statearr_27981_28032 = state_27920__$1;
(statearr_27981_28032[(1)] = (13));

} else {
var statearr_27982_28033 = state_27920__$1;
(statearr_27982_28033[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (18))){
var inst_27847 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
if(cljs.core.truth_(inst_27847)){
var statearr_27983_28034 = state_27920__$1;
(statearr_27983_28034[(1)] = (19));

} else {
var statearr_27984_28035 = state_27920__$1;
(statearr_27984_28035[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (37))){
var inst_27915 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27985_28036 = state_27920__$1;
(statearr_27985_28036[(2)] = inst_27915);

(statearr_27985_28036[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (8))){
var inst_27800 = (state_27920[(8)]);
var inst_27813 = (state_27920[(20)]);
var inst_27813__$1 = cljs.core.seq.call(null,inst_27800);
var state_27920__$1 = (function (){var statearr_27986 = state_27920;
(statearr_27986[(20)] = inst_27813__$1);

return statearr_27986;
})();
if(inst_27813__$1){
var statearr_27987_28037 = state_27920__$1;
(statearr_27987_28037[(1)] = (10));

} else {
var statearr_27988_28038 = state_27920__$1;
(statearr_27988_28038[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto____0 = (function (){
var statearr_27989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27989[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto__);

(statearr_27989[(1)] = (1));

return statearr_27989;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto____1 = (function (state_27920){
while(true){
var ret_value__24073__auto__ = (function (){try{while(true){
var result__24074__auto__ = switch__24071__auto__.call(null,state_27920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24074__auto__;
}
break;
}
}catch (e27990){if((e27990 instanceof Object)){
var ex__24075__auto__ = e27990;
var statearr_27991_28039 = state_27920;
(statearr_27991_28039[(5)] = ex__24075__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28040 = state_27920;
state_27920 = G__28040;
continue;
} else {
return ret_value__24073__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto__ = function(state_27920){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto____1.call(this,state_27920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24072__auto__;
})()
})();
var state__24168__auto__ = (function (){var statearr_27992 = f__24167__auto__.call(null);
(statearr_27992[(6)] = c__24166__auto__);

return statearr_27992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24168__auto__);
}));

return c__24166__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28043,link){
var map__28044 = p__28043;
var map__28044__$1 = cljs.core.__destructure_map.call(null,map__28044);
var file = cljs.core.get.call(null,map__28044__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__28041_SHARP_,p2__28042_SHARP_){
if(cljs.core._EQ_.call(null,p1__28041_SHARP_,p2__28042_SHARP_)){
return p1__28041_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28046){
var map__28047 = p__28046;
var map__28047__$1 = cljs.core.__destructure_map.call(null,map__28047);
var match_length = cljs.core.get.call(null,map__28047__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28047__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28045_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28045_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28048_SHARP_,p2__28049_SHARP_){
return cljs.core.assoc.call(null,p1__28048_SHARP_,cljs.core.get.call(null,p2__28049_SHARP_,key),p2__28049_SHARP_);
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
var loaded_f_datas_28050 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28050);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28050);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28051,p__28052){
var map__28053 = p__28051;
var map__28053__$1 = cljs.core.__destructure_map.call(null,map__28053);
var on_cssload = cljs.core.get.call(null,map__28053__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28054 = p__28052;
var map__28054__$1 = cljs.core.__destructure_map.call(null,map__28054);
var files_msg = map__28054__$1;
var files = cljs.core.get.call(null,map__28054__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1717626496298
