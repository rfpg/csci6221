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
var G__29323 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29323 == null)){
return null;
} else {
return goog.object.get(G__29323,"requires");
}
}):(function (path){
var G__29324 = goog.object.get(goog.dependencies_.requires,path);
if((G__29324 == null)){
return null;
} else {
return goog.object.getKeys(G__29324);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29325_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29325_SHARP_)));
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
var G__29326 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29326__$1 = (((G__29326 == null))?null:goog.object.get(G__29326,"provides"));
if((G__29326__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29326__$1);
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
var seq__29327 = cljs.core.seq.call(null,provides);
var chunk__29328 = null;
var count__29329 = (0);
var i__29330 = (0);
while(true){
if((i__29330 < count__29329)){
var prov = cljs.core._nth.call(null,chunk__29328,i__29330);
var seq__29339_29351 = cljs.core.seq.call(null,requires);
var chunk__29340_29352 = null;
var count__29341_29353 = (0);
var i__29342_29354 = (0);
while(true){
if((i__29342_29354 < count__29341_29353)){
var req_29355 = cljs.core._nth.call(null,chunk__29340_29352,i__29342_29354);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29355,prov);


var G__29356 = seq__29339_29351;
var G__29357 = chunk__29340_29352;
var G__29358 = count__29341_29353;
var G__29359 = (i__29342_29354 + (1));
seq__29339_29351 = G__29356;
chunk__29340_29352 = G__29357;
count__29341_29353 = G__29358;
i__29342_29354 = G__29359;
continue;
} else {
var temp__5735__auto___29360 = cljs.core.seq.call(null,seq__29339_29351);
if(temp__5735__auto___29360){
var seq__29339_29361__$1 = temp__5735__auto___29360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29339_29361__$1)){
var c__4591__auto___29362 = cljs.core.chunk_first.call(null,seq__29339_29361__$1);
var G__29363 = cljs.core.chunk_rest.call(null,seq__29339_29361__$1);
var G__29364 = c__4591__auto___29362;
var G__29365 = cljs.core.count.call(null,c__4591__auto___29362);
var G__29366 = (0);
seq__29339_29351 = G__29363;
chunk__29340_29352 = G__29364;
count__29341_29353 = G__29365;
i__29342_29354 = G__29366;
continue;
} else {
var req_29367 = cljs.core.first.call(null,seq__29339_29361__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29367,prov);


var G__29368 = cljs.core.next.call(null,seq__29339_29361__$1);
var G__29369 = null;
var G__29370 = (0);
var G__29371 = (0);
seq__29339_29351 = G__29368;
chunk__29340_29352 = G__29369;
count__29341_29353 = G__29370;
i__29342_29354 = G__29371;
continue;
}
} else {
}
}
break;
}


var G__29372 = seq__29327;
var G__29373 = chunk__29328;
var G__29374 = count__29329;
var G__29375 = (i__29330 + (1));
seq__29327 = G__29372;
chunk__29328 = G__29373;
count__29329 = G__29374;
i__29330 = G__29375;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29327);
if(temp__5735__auto__){
var seq__29327__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29327__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29327__$1);
var G__29376 = cljs.core.chunk_rest.call(null,seq__29327__$1);
var G__29377 = c__4591__auto__;
var G__29378 = cljs.core.count.call(null,c__4591__auto__);
var G__29379 = (0);
seq__29327 = G__29376;
chunk__29328 = G__29377;
count__29329 = G__29378;
i__29330 = G__29379;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29327__$1);
var seq__29343_29380 = cljs.core.seq.call(null,requires);
var chunk__29344_29381 = null;
var count__29345_29382 = (0);
var i__29346_29383 = (0);
while(true){
if((i__29346_29383 < count__29345_29382)){
var req_29384 = cljs.core._nth.call(null,chunk__29344_29381,i__29346_29383);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29384,prov);


var G__29385 = seq__29343_29380;
var G__29386 = chunk__29344_29381;
var G__29387 = count__29345_29382;
var G__29388 = (i__29346_29383 + (1));
seq__29343_29380 = G__29385;
chunk__29344_29381 = G__29386;
count__29345_29382 = G__29387;
i__29346_29383 = G__29388;
continue;
} else {
var temp__5735__auto___29389__$1 = cljs.core.seq.call(null,seq__29343_29380);
if(temp__5735__auto___29389__$1){
var seq__29343_29390__$1 = temp__5735__auto___29389__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29343_29390__$1)){
var c__4591__auto___29391 = cljs.core.chunk_first.call(null,seq__29343_29390__$1);
var G__29392 = cljs.core.chunk_rest.call(null,seq__29343_29390__$1);
var G__29393 = c__4591__auto___29391;
var G__29394 = cljs.core.count.call(null,c__4591__auto___29391);
var G__29395 = (0);
seq__29343_29380 = G__29392;
chunk__29344_29381 = G__29393;
count__29345_29382 = G__29394;
i__29346_29383 = G__29395;
continue;
} else {
var req_29396 = cljs.core.first.call(null,seq__29343_29390__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29396,prov);


var G__29397 = cljs.core.next.call(null,seq__29343_29390__$1);
var G__29398 = null;
var G__29399 = (0);
var G__29400 = (0);
seq__29343_29380 = G__29397;
chunk__29344_29381 = G__29398;
count__29345_29382 = G__29399;
i__29346_29383 = G__29400;
continue;
}
} else {
}
}
break;
}


var G__29401 = cljs.core.next.call(null,seq__29327__$1);
var G__29402 = null;
var G__29403 = (0);
var G__29404 = (0);
seq__29327 = G__29401;
chunk__29328 = G__29402;
count__29329 = G__29403;
i__29330 = G__29404;
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
var seq__29347 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29348 = null;
var count__29349 = (0);
var i__29350 = (0);
while(true){
if((i__29350 < count__29349)){
var prov = cljs.core._nth.call(null,chunk__29348,i__29350);
goog.object.forEach(deps,((function (seq__29347,chunk__29348,count__29349,i__29350,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29347,chunk__29348,count__29349,i__29350,prov,requires))
);


var G__29405 = seq__29347;
var G__29406 = chunk__29348;
var G__29407 = count__29349;
var G__29408 = (i__29350 + (1));
seq__29347 = G__29405;
chunk__29348 = G__29406;
count__29349 = G__29407;
i__29350 = G__29408;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29347);
if(temp__5735__auto__){
var seq__29347__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29347__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29347__$1);
var G__29409 = cljs.core.chunk_rest.call(null,seq__29347__$1);
var G__29410 = c__4591__auto__;
var G__29411 = cljs.core.count.call(null,c__4591__auto__);
var G__29412 = (0);
seq__29347 = G__29409;
chunk__29348 = G__29410;
count__29349 = G__29411;
i__29350 = G__29412;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29347__$1);
goog.object.forEach(deps,((function (seq__29347,chunk__29348,count__29349,i__29350,prov,seq__29347__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29347,chunk__29348,count__29349,i__29350,prov,seq__29347__$1,temp__5735__auto__,requires))
);


var G__29413 = cljs.core.next.call(null,seq__29347__$1);
var G__29414 = null;
var G__29415 = (0);
var G__29416 = (0);
seq__29347 = G__29413;
chunk__29348 = G__29414;
count__29349 = G__29415;
i__29350 = G__29416;
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
return cljs.core.some.call(null,(function (p__29417){
var vec__29418 = p__29417;
var _ = cljs.core.nth.call(null,vec__29418,(0),null);
var v = cljs.core.nth.call(null,vec__29418,(1),null);
var and__4149__auto__ = v;
if(cljs.core.truth_(and__4149__auto__)){
return v.call(null,dep);
} else {
return and__4149__auto__;
}
}),cljs.core.filter.call(null,(function (p__29421){
var vec__29422 = p__29421;
var k = cljs.core.nth.call(null,vec__29422,(0),null);
var v = cljs.core.nth.call(null,vec__29422,(1),null);
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

var seq__29434_29442 = cljs.core.seq.call(null,deps);
var chunk__29435_29443 = null;
var count__29436_29444 = (0);
var i__29437_29445 = (0);
while(true){
if((i__29437_29445 < count__29436_29444)){
var dep_29446 = cljs.core._nth.call(null,chunk__29435_29443,i__29437_29445);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_29446;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29446));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29446,(depth + (1)),state);
} else {
}


var G__29447 = seq__29434_29442;
var G__29448 = chunk__29435_29443;
var G__29449 = count__29436_29444;
var G__29450 = (i__29437_29445 + (1));
seq__29434_29442 = G__29447;
chunk__29435_29443 = G__29448;
count__29436_29444 = G__29449;
i__29437_29445 = G__29450;
continue;
} else {
var temp__5735__auto___29451 = cljs.core.seq.call(null,seq__29434_29442);
if(temp__5735__auto___29451){
var seq__29434_29452__$1 = temp__5735__auto___29451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29434_29452__$1)){
var c__4591__auto___29453 = cljs.core.chunk_first.call(null,seq__29434_29452__$1);
var G__29454 = cljs.core.chunk_rest.call(null,seq__29434_29452__$1);
var G__29455 = c__4591__auto___29453;
var G__29456 = cljs.core.count.call(null,c__4591__auto___29453);
var G__29457 = (0);
seq__29434_29442 = G__29454;
chunk__29435_29443 = G__29455;
count__29436_29444 = G__29456;
i__29437_29445 = G__29457;
continue;
} else {
var dep_29458 = cljs.core.first.call(null,seq__29434_29452__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_29458;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29458));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29458,(depth + (1)),state);
} else {
}


var G__29459 = cljs.core.next.call(null,seq__29434_29452__$1);
var G__29460 = null;
var G__29461 = (0);
var G__29462 = (0);
seq__29434_29442 = G__29459;
chunk__29435_29443 = G__29460;
count__29436_29444 = G__29461;
i__29437_29445 = G__29462;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29438){
var vec__29439 = p__29438;
var seq__29440 = cljs.core.seq.call(null,vec__29439);
var first__29441 = cljs.core.first.call(null,seq__29440);
var seq__29440__$1 = cljs.core.next.call(null,seq__29440);
var x = first__29441;
var xs = seq__29440__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29425_SHARP_){
return clojure.set.difference.call(null,p1__29425_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29463_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29463_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29464 = cljs.core.seq.call(null,provides);
var chunk__29465 = null;
var count__29466 = (0);
var i__29467 = (0);
while(true){
if((i__29467 < count__29466)){
var prov = cljs.core._nth.call(null,chunk__29465,i__29467);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29476_29484 = cljs.core.seq.call(null,requires);
var chunk__29477_29485 = null;
var count__29478_29486 = (0);
var i__29479_29487 = (0);
while(true){
if((i__29479_29487 < count__29478_29486)){
var req_29488 = cljs.core._nth.call(null,chunk__29477_29485,i__29479_29487);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29488,prov);


var G__29489 = seq__29476_29484;
var G__29490 = chunk__29477_29485;
var G__29491 = count__29478_29486;
var G__29492 = (i__29479_29487 + (1));
seq__29476_29484 = G__29489;
chunk__29477_29485 = G__29490;
count__29478_29486 = G__29491;
i__29479_29487 = G__29492;
continue;
} else {
var temp__5735__auto___29493 = cljs.core.seq.call(null,seq__29476_29484);
if(temp__5735__auto___29493){
var seq__29476_29494__$1 = temp__5735__auto___29493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29476_29494__$1)){
var c__4591__auto___29495 = cljs.core.chunk_first.call(null,seq__29476_29494__$1);
var G__29496 = cljs.core.chunk_rest.call(null,seq__29476_29494__$1);
var G__29497 = c__4591__auto___29495;
var G__29498 = cljs.core.count.call(null,c__4591__auto___29495);
var G__29499 = (0);
seq__29476_29484 = G__29496;
chunk__29477_29485 = G__29497;
count__29478_29486 = G__29498;
i__29479_29487 = G__29499;
continue;
} else {
var req_29500 = cljs.core.first.call(null,seq__29476_29494__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29500,prov);


var G__29501 = cljs.core.next.call(null,seq__29476_29494__$1);
var G__29502 = null;
var G__29503 = (0);
var G__29504 = (0);
seq__29476_29484 = G__29501;
chunk__29477_29485 = G__29502;
count__29478_29486 = G__29503;
i__29479_29487 = G__29504;
continue;
}
} else {
}
}
break;
}


var G__29505 = seq__29464;
var G__29506 = chunk__29465;
var G__29507 = count__29466;
var G__29508 = (i__29467 + (1));
seq__29464 = G__29505;
chunk__29465 = G__29506;
count__29466 = G__29507;
i__29467 = G__29508;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29464);
if(temp__5735__auto__){
var seq__29464__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29464__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29464__$1);
var G__29509 = cljs.core.chunk_rest.call(null,seq__29464__$1);
var G__29510 = c__4591__auto__;
var G__29511 = cljs.core.count.call(null,c__4591__auto__);
var G__29512 = (0);
seq__29464 = G__29509;
chunk__29465 = G__29510;
count__29466 = G__29511;
i__29467 = G__29512;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29464__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29480_29513 = cljs.core.seq.call(null,requires);
var chunk__29481_29514 = null;
var count__29482_29515 = (0);
var i__29483_29516 = (0);
while(true){
if((i__29483_29516 < count__29482_29515)){
var req_29517 = cljs.core._nth.call(null,chunk__29481_29514,i__29483_29516);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29517,prov);


var G__29518 = seq__29480_29513;
var G__29519 = chunk__29481_29514;
var G__29520 = count__29482_29515;
var G__29521 = (i__29483_29516 + (1));
seq__29480_29513 = G__29518;
chunk__29481_29514 = G__29519;
count__29482_29515 = G__29520;
i__29483_29516 = G__29521;
continue;
} else {
var temp__5735__auto___29522__$1 = cljs.core.seq.call(null,seq__29480_29513);
if(temp__5735__auto___29522__$1){
var seq__29480_29523__$1 = temp__5735__auto___29522__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29480_29523__$1)){
var c__4591__auto___29524 = cljs.core.chunk_first.call(null,seq__29480_29523__$1);
var G__29525 = cljs.core.chunk_rest.call(null,seq__29480_29523__$1);
var G__29526 = c__4591__auto___29524;
var G__29527 = cljs.core.count.call(null,c__4591__auto___29524);
var G__29528 = (0);
seq__29480_29513 = G__29525;
chunk__29481_29514 = G__29526;
count__29482_29515 = G__29527;
i__29483_29516 = G__29528;
continue;
} else {
var req_29529 = cljs.core.first.call(null,seq__29480_29523__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29529,prov);


var G__29530 = cljs.core.next.call(null,seq__29480_29523__$1);
var G__29531 = null;
var G__29532 = (0);
var G__29533 = (0);
seq__29480_29513 = G__29530;
chunk__29481_29514 = G__29531;
count__29482_29515 = G__29532;
i__29483_29516 = G__29533;
continue;
}
} else {
}
}
break;
}


var G__29534 = cljs.core.next.call(null,seq__29464__$1);
var G__29535 = null;
var G__29536 = (0);
var G__29537 = (0);
seq__29464 = G__29534;
chunk__29465 = G__29535;
count__29466 = G__29536;
i__29467 = G__29537;
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
var seq__29538_29542 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29539_29543 = null;
var count__29540_29544 = (0);
var i__29541_29545 = (0);
while(true){
if((i__29541_29545 < count__29540_29544)){
var ns_29546 = cljs.core._nth.call(null,chunk__29539_29543,i__29541_29545);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29546);


var G__29547 = seq__29538_29542;
var G__29548 = chunk__29539_29543;
var G__29549 = count__29540_29544;
var G__29550 = (i__29541_29545 + (1));
seq__29538_29542 = G__29547;
chunk__29539_29543 = G__29548;
count__29540_29544 = G__29549;
i__29541_29545 = G__29550;
continue;
} else {
var temp__5735__auto___29551 = cljs.core.seq.call(null,seq__29538_29542);
if(temp__5735__auto___29551){
var seq__29538_29552__$1 = temp__5735__auto___29551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29538_29552__$1)){
var c__4591__auto___29553 = cljs.core.chunk_first.call(null,seq__29538_29552__$1);
var G__29554 = cljs.core.chunk_rest.call(null,seq__29538_29552__$1);
var G__29555 = c__4591__auto___29553;
var G__29556 = cljs.core.count.call(null,c__4591__auto___29553);
var G__29557 = (0);
seq__29538_29542 = G__29554;
chunk__29539_29543 = G__29555;
count__29540_29544 = G__29556;
i__29541_29545 = G__29557;
continue;
} else {
var ns_29558 = cljs.core.first.call(null,seq__29538_29552__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29558);


var G__29559 = cljs.core.next.call(null,seq__29538_29552__$1);
var G__29560 = null;
var G__29561 = (0);
var G__29562 = (0);
seq__29538_29542 = G__29559;
chunk__29539_29543 = G__29560;
count__29540_29544 = G__29561;
i__29541_29545 = G__29562;
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
var G__29563__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29564__i = 0, G__29564__a = new Array(arguments.length -  0);
while (G__29564__i < G__29564__a.length) {G__29564__a[G__29564__i] = arguments[G__29564__i + 0]; ++G__29564__i;}
  args = new cljs.core.IndexedSeq(G__29564__a,0,null);
} 
return G__29563__delegate.call(this,args);};
G__29563.cljs$lang$maxFixedArity = 0;
G__29563.cljs$lang$applyTo = (function (arglist__29565){
var args = cljs.core.seq(arglist__29565);
return G__29563__delegate(args);
});
G__29563.cljs$core$IFn$_invoke$arity$variadic = G__29563__delegate;
return G__29563;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29566_SHARP_,p2__29567_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29566_SHARP_)),p2__29567_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29568_SHARP_,p2__29569_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29568_SHARP_),p2__29569_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29570 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29570.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29570.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29570;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29571){if((e29571 instanceof Error)){
var e = e29571;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29571;

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
}catch (e29572){if((e29572 instanceof Error)){
var e = e29572;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29572;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29573 = cljs.core._EQ_;
var expr__29574 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29573.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29574))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29573.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29574))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29573.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29574))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29576,callback){
var map__29577 = p__29576;
var map__29577__$1 = cljs.core.__destructure_map.call(null,map__29577);
var file_msg = map__29577__$1;
var request_url = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_29614){
var state_val_29615 = (state_29614[(1)]);
if((state_val_29615 === (7))){
var inst_29610 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29616_29642 = state_29614__$1;
(statearr_29616_29642[(2)] = inst_29610);

(statearr_29616_29642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (1))){
var state_29614__$1 = state_29614;
var statearr_29617_29643 = state_29614__$1;
(statearr_29617_29643[(2)] = null);

(statearr_29617_29643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (4))){
var inst_29580 = (state_29614[(7)]);
var inst_29580__$1 = (state_29614[(2)]);
var state_29614__$1 = (function (){var statearr_29618 = state_29614;
(statearr_29618[(7)] = inst_29580__$1);

return statearr_29618;
})();
if(cljs.core.truth_(inst_29580__$1)){
var statearr_29619_29644 = state_29614__$1;
(statearr_29619_29644[(1)] = (5));

} else {
var statearr_29620_29645 = state_29614__$1;
(statearr_29620_29645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (15))){
var inst_29593 = (state_29614[(8)]);
var inst_29595 = (state_29614[(9)]);
var inst_29597 = inst_29595.call(null,inst_29593);
var state_29614__$1 = state_29614;
var statearr_29621_29646 = state_29614__$1;
(statearr_29621_29646[(2)] = inst_29597);

(statearr_29621_29646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (13))){
var inst_29604 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29622_29647 = state_29614__$1;
(statearr_29622_29647[(2)] = inst_29604);

(statearr_29622_29647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (6))){
var state_29614__$1 = state_29614;
var statearr_29623_29648 = state_29614__$1;
(statearr_29623_29648[(2)] = null);

(statearr_29623_29648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (17))){
var inst_29601 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29624_29649 = state_29614__$1;
(statearr_29624_29649[(2)] = inst_29601);

(statearr_29624_29649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (3))){
var inst_29612 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29614__$1,inst_29612);
} else {
if((state_val_29615 === (12))){
var state_29614__$1 = state_29614;
var statearr_29625_29650 = state_29614__$1;
(statearr_29625_29650[(2)] = null);

(statearr_29625_29650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (2))){
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29614__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29615 === (11))){
var inst_29585 = (state_29614[(10)]);
var inst_29591 = figwheel.client.file_reloading.blocking_load.call(null,inst_29585);
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29614__$1,(14),inst_29591);
} else {
if((state_val_29615 === (9))){
var inst_29585 = (state_29614[(10)]);
var state_29614__$1 = state_29614;
if(cljs.core.truth_(inst_29585)){
var statearr_29626_29651 = state_29614__$1;
(statearr_29626_29651[(1)] = (11));

} else {
var statearr_29627_29652 = state_29614__$1;
(statearr_29627_29652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (5))){
var inst_29586 = (state_29614[(11)]);
var inst_29580 = (state_29614[(7)]);
var inst_29585 = cljs.core.nth.call(null,inst_29580,(0),null);
var inst_29586__$1 = cljs.core.nth.call(null,inst_29580,(1),null);
var state_29614__$1 = (function (){var statearr_29628 = state_29614;
(statearr_29628[(10)] = inst_29585);

(statearr_29628[(11)] = inst_29586__$1);

return statearr_29628;
})();
if(cljs.core.truth_(inst_29586__$1)){
var statearr_29629_29653 = state_29614__$1;
(statearr_29629_29653[(1)] = (8));

} else {
var statearr_29630_29654 = state_29614__$1;
(statearr_29630_29654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (14))){
var inst_29585 = (state_29614[(10)]);
var inst_29595 = (state_29614[(9)]);
var inst_29593 = (state_29614[(2)]);
var inst_29594 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29595__$1 = cljs.core.get.call(null,inst_29594,inst_29585);
var state_29614__$1 = (function (){var statearr_29631 = state_29614;
(statearr_29631[(8)] = inst_29593);

(statearr_29631[(9)] = inst_29595__$1);

return statearr_29631;
})();
if(cljs.core.truth_(inst_29595__$1)){
var statearr_29632_29655 = state_29614__$1;
(statearr_29632_29655[(1)] = (15));

} else {
var statearr_29633_29656 = state_29614__$1;
(statearr_29633_29656[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (16))){
var inst_29593 = (state_29614[(8)]);
var inst_29599 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29593);
var state_29614__$1 = state_29614;
var statearr_29634_29657 = state_29614__$1;
(statearr_29634_29657[(2)] = inst_29599);

(statearr_29634_29657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (10))){
var inst_29606 = (state_29614[(2)]);
var state_29614__$1 = (function (){var statearr_29635 = state_29614;
(statearr_29635[(12)] = inst_29606);

return statearr_29635;
})();
var statearr_29636_29658 = state_29614__$1;
(statearr_29636_29658[(2)] = null);

(statearr_29636_29658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (8))){
var inst_29586 = (state_29614[(11)]);
var inst_29588 = eval(inst_29586);
var state_29614__$1 = state_29614;
var statearr_29637_29659 = state_29614__$1;
(statearr_29637_29659[(2)] = inst_29588);

(statearr_29637_29659[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__26032__auto__ = null;
var figwheel$client$file_reloading$state_machine__26032__auto____0 = (function (){
var statearr_29638 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29638[(0)] = figwheel$client$file_reloading$state_machine__26032__auto__);

(statearr_29638[(1)] = (1));

return statearr_29638;
});
var figwheel$client$file_reloading$state_machine__26032__auto____1 = (function (state_29614){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_29614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e29639){if((e29639 instanceof Object)){
var ex__26035__auto__ = e29639;
var statearr_29640_29660 = state_29614;
(statearr_29640_29660[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29661 = state_29614;
state_29614 = G__29661;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26032__auto__ = function(state_29614){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26032__auto____1.call(this,state_29614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26032__auto____0;
figwheel$client$file_reloading$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26032__auto____1;
return figwheel$client$file_reloading$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_29641 = f__26127__auto__.call(null);
(statearr_29641[(6)] = c__26126__auto__);

return statearr_29641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29663 = arguments.length;
switch (G__29663) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29665,callback){
var map__29666 = p__29665;
var map__29666__$1 = cljs.core.__destructure_map.call(null,map__29666);
var file_msg = map__29666__$1;
var namespace = cljs.core.get.call(null,map__29666__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29667){
var map__29668 = p__29667;
var map__29668__$1 = cljs.core.__destructure_map.call(null,map__29668);
var file_msg = map__29668__$1;
var namespace = cljs.core.get.call(null,map__29668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29669){
var map__29670 = p__29669;
var map__29670__$1 = cljs.core.__destructure_map.call(null,map__29670);
var file_msg = map__29670__$1;
var namespace = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29671,callback){
var map__29672 = p__29671;
var map__29672__$1 = cljs.core.__destructure_map.call(null,map__29672);
var file_msg = map__29672__$1;
var request_url = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26126__auto___29721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_29706){
var state_val_29707 = (state_29706[(1)]);
if((state_val_29707 === (1))){
var inst_29680 = cljs.core.seq.call(null,files);
var inst_29681 = cljs.core.first.call(null,inst_29680);
var inst_29682 = cljs.core.next.call(null,inst_29680);
var inst_29683 = files;
var state_29706__$1 = (function (){var statearr_29708 = state_29706;
(statearr_29708[(7)] = inst_29683);

(statearr_29708[(8)] = inst_29682);

(statearr_29708[(9)] = inst_29681);

return statearr_29708;
})();
var statearr_29709_29722 = state_29706__$1;
(statearr_29709_29722[(2)] = null);

(statearr_29709_29722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (2))){
var inst_29683 = (state_29706[(7)]);
var inst_29689 = (state_29706[(10)]);
var inst_29688 = cljs.core.seq.call(null,inst_29683);
var inst_29689__$1 = cljs.core.first.call(null,inst_29688);
var inst_29690 = cljs.core.next.call(null,inst_29688);
var inst_29691 = (inst_29689__$1 == null);
var inst_29692 = cljs.core.not.call(null,inst_29691);
var state_29706__$1 = (function (){var statearr_29710 = state_29706;
(statearr_29710[(11)] = inst_29690);

(statearr_29710[(10)] = inst_29689__$1);

return statearr_29710;
})();
if(inst_29692){
var statearr_29711_29723 = state_29706__$1;
(statearr_29711_29723[(1)] = (4));

} else {
var statearr_29712_29724 = state_29706__$1;
(statearr_29712_29724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (3))){
var inst_29704 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29706__$1,inst_29704);
} else {
if((state_val_29707 === (4))){
var inst_29689 = (state_29706[(10)]);
var inst_29694 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29689);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29706__$1,(7),inst_29694);
} else {
if((state_val_29707 === (5))){
var inst_29700 = cljs.core.async.close_BANG_.call(null,out);
var state_29706__$1 = state_29706;
var statearr_29713_29725 = state_29706__$1;
(statearr_29713_29725[(2)] = inst_29700);

(statearr_29713_29725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (6))){
var inst_29702 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29714_29726 = state_29706__$1;
(statearr_29714_29726[(2)] = inst_29702);

(statearr_29714_29726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (7))){
var inst_29690 = (state_29706[(11)]);
var inst_29696 = (state_29706[(2)]);
var inst_29697 = cljs.core.async.put_BANG_.call(null,out,inst_29696);
var inst_29683 = inst_29690;
var state_29706__$1 = (function (){var statearr_29715 = state_29706;
(statearr_29715[(7)] = inst_29683);

(statearr_29715[(12)] = inst_29697);

return statearr_29715;
})();
var statearr_29716_29727 = state_29706__$1;
(statearr_29716_29727[(2)] = null);

(statearr_29716_29727[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____0 = (function (){
var statearr_29717 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29717[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__);

(statearr_29717[(1)] = (1));

return statearr_29717;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____1 = (function (state_29706){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_29706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e29718){if((e29718 instanceof Object)){
var ex__26035__auto__ = e29718;
var statearr_29719_29728 = state_29706;
(statearr_29719_29728[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29729 = state_29706;
state_29706 = G__29729;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__ = function(state_29706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____1.call(this,state_29706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_29720 = f__26127__auto__.call(null);
(statearr_29720[(6)] = c__26126__auto___29721);

return statearr_29720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29730,opts){
var map__29731 = p__29730;
var map__29731__$1 = cljs.core.__destructure_map.call(null,map__29731);
var eval_body = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29732){var e = e29732;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29733_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29733_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29734){
var vec__29735 = p__29734;
var k = cljs.core.nth.call(null,vec__29735,(0),null);
var v = cljs.core.nth.call(null,vec__29735,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29738){
var vec__29739 = p__29738;
var k = cljs.core.nth.call(null,vec__29739,(0),null);
var v = cljs.core.nth.call(null,vec__29739,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29745,p__29746){
var map__29747 = p__29745;
var map__29747__$1 = cljs.core.__destructure_map.call(null,map__29747);
var opts = map__29747__$1;
var before_jsload = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29748 = p__29746;
var map__29748__$1 = cljs.core.__destructure_map.call(null,map__29748);
var msg = map__29748__$1;
var files = cljs.core.get.call(null,map__29748__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29748__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29748__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_29880){
var state_val_29881 = (state_29880[(1)]);
if((state_val_29881 === (7))){
var inst_29763 = (state_29880[(7)]);
var inst_29762 = (state_29880[(8)]);
var inst_29760 = (state_29880[(9)]);
var inst_29761 = (state_29880[(10)]);
var inst_29768 = cljs.core._nth.call(null,inst_29761,inst_29763);
var inst_29769 = figwheel.client.file_reloading.eval_body.call(null,inst_29768,opts);
var inst_29770 = (inst_29763 + (1));
var tmp29882 = inst_29762;
var tmp29883 = inst_29760;
var tmp29884 = inst_29761;
var inst_29760__$1 = tmp29883;
var inst_29761__$1 = tmp29884;
var inst_29762__$1 = tmp29882;
var inst_29763__$1 = inst_29770;
var state_29880__$1 = (function (){var statearr_29885 = state_29880;
(statearr_29885[(11)] = inst_29769);

(statearr_29885[(7)] = inst_29763__$1);

(statearr_29885[(8)] = inst_29762__$1);

(statearr_29885[(9)] = inst_29760__$1);

(statearr_29885[(10)] = inst_29761__$1);

return statearr_29885;
})();
var statearr_29886_29953 = state_29880__$1;
(statearr_29886_29953[(2)] = null);

(statearr_29886_29953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (20))){
var inst_29803 = (state_29880[(12)]);
var inst_29811 = figwheel.client.file_reloading.sort_files.call(null,inst_29803);
var state_29880__$1 = state_29880;
var statearr_29887_29954 = state_29880__$1;
(statearr_29887_29954[(2)] = inst_29811);

(statearr_29887_29954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (27))){
var state_29880__$1 = state_29880;
var statearr_29888_29955 = state_29880__$1;
(statearr_29888_29955[(2)] = null);

(statearr_29888_29955[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (1))){
var inst_29752 = (state_29880[(13)]);
var inst_29749 = before_jsload.call(null,files);
var inst_29750 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29751 = (function (){return (function (p1__29742_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29742_SHARP_);
});
})();
var inst_29752__$1 = cljs.core.filter.call(null,inst_29751,files);
var inst_29753 = cljs.core.not_empty.call(null,inst_29752__$1);
var state_29880__$1 = (function (){var statearr_29889 = state_29880;
(statearr_29889[(13)] = inst_29752__$1);

(statearr_29889[(14)] = inst_29749);

(statearr_29889[(15)] = inst_29750);

return statearr_29889;
})();
if(cljs.core.truth_(inst_29753)){
var statearr_29890_29956 = state_29880__$1;
(statearr_29890_29956[(1)] = (2));

} else {
var statearr_29891_29957 = state_29880__$1;
(statearr_29891_29957[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (24))){
var state_29880__$1 = state_29880;
var statearr_29892_29958 = state_29880__$1;
(statearr_29892_29958[(2)] = null);

(statearr_29892_29958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (4))){
var inst_29797 = (state_29880[(2)]);
var inst_29798 = cljs.core.List.EMPTY;
var inst_29799 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29798);
var inst_29800 = (function (){return (function (p1__29743_SHARP_){
var and__4149__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29743_SHARP_);
if(cljs.core.truth_(and__4149__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29743_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29743_SHARP_))));
} else {
return and__4149__auto__;
}
});
})();
var inst_29801 = cljs.core.filter.call(null,inst_29800,files);
var inst_29802 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29803 = cljs.core.concat.call(null,inst_29801,inst_29802);
var state_29880__$1 = (function (){var statearr_29893 = state_29880;
(statearr_29893[(16)] = inst_29797);

(statearr_29893[(17)] = inst_29799);

(statearr_29893[(12)] = inst_29803);

return statearr_29893;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29894_29959 = state_29880__$1;
(statearr_29894_29959[(1)] = (16));

} else {
var statearr_29895_29960 = state_29880__$1;
(statearr_29895_29960[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (15))){
var inst_29787 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29896_29961 = state_29880__$1;
(statearr_29896_29961[(2)] = inst_29787);

(statearr_29896_29961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (21))){
var inst_29813 = (state_29880[(18)]);
var inst_29813__$1 = (state_29880[(2)]);
var inst_29814 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29813__$1);
var state_29880__$1 = (function (){var statearr_29897 = state_29880;
(statearr_29897[(18)] = inst_29813__$1);

return statearr_29897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29880__$1,(22),inst_29814);
} else {
if((state_val_29881 === (31))){
var inst_29878 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29880__$1,inst_29878);
} else {
if((state_val_29881 === (32))){
var inst_29855 = (state_29880[(19)]);
var inst_29859 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29860 = cljs.core.map.call(null,inst_29859,inst_29855);
var inst_29861 = cljs.core.pr_str.call(null,inst_29860);
var inst_29862 = ["figwheel-no-load meta-data: ",inst_29861].join('');
var inst_29863 = figwheel.client.utils.log.call(null,inst_29862);
var state_29880__$1 = state_29880;
var statearr_29898_29962 = state_29880__$1;
(statearr_29898_29962[(2)] = inst_29863);

(statearr_29898_29962[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (33))){
var state_29880__$1 = state_29880;
var statearr_29899_29963 = state_29880__$1;
(statearr_29899_29963[(2)] = null);

(statearr_29899_29963[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (13))){
var inst_29773 = (state_29880[(20)]);
var inst_29777 = cljs.core.chunk_first.call(null,inst_29773);
var inst_29778 = cljs.core.chunk_rest.call(null,inst_29773);
var inst_29779 = cljs.core.count.call(null,inst_29777);
var inst_29760 = inst_29778;
var inst_29761 = inst_29777;
var inst_29762 = inst_29779;
var inst_29763 = (0);
var state_29880__$1 = (function (){var statearr_29900 = state_29880;
(statearr_29900[(7)] = inst_29763);

(statearr_29900[(8)] = inst_29762);

(statearr_29900[(9)] = inst_29760);

(statearr_29900[(10)] = inst_29761);

return statearr_29900;
})();
var statearr_29901_29964 = state_29880__$1;
(statearr_29901_29964[(2)] = null);

(statearr_29901_29964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (22))){
var inst_29821 = (state_29880[(21)]);
var inst_29816 = (state_29880[(22)]);
var inst_29813 = (state_29880[(18)]);
var inst_29817 = (state_29880[(23)]);
var inst_29816__$1 = (state_29880[(2)]);
var inst_29817__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29816__$1);
var inst_29818 = (function (){var all_files = inst_29813;
var res_SINGLEQUOTE_ = inst_29816__$1;
var res = inst_29817__$1;
return (function (p1__29744_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29744_SHARP_));
});
})();
var inst_29819 = cljs.core.filter.call(null,inst_29818,inst_29816__$1);
var inst_29820 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29821__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29820);
var inst_29822 = cljs.core.not_empty.call(null,inst_29821__$1);
var state_29880__$1 = (function (){var statearr_29902 = state_29880;
(statearr_29902[(21)] = inst_29821__$1);

(statearr_29902[(22)] = inst_29816__$1);

(statearr_29902[(23)] = inst_29817__$1);

(statearr_29902[(24)] = inst_29819);

return statearr_29902;
})();
if(cljs.core.truth_(inst_29822)){
var statearr_29903_29965 = state_29880__$1;
(statearr_29903_29965[(1)] = (23));

} else {
var statearr_29904_29966 = state_29880__$1;
(statearr_29904_29966[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (36))){
var state_29880__$1 = state_29880;
var statearr_29905_29967 = state_29880__$1;
(statearr_29905_29967[(2)] = null);

(statearr_29905_29967[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (29))){
var inst_29821 = (state_29880[(21)]);
var inst_29816 = (state_29880[(22)]);
var inst_29855 = (state_29880[(19)]);
var inst_29813 = (state_29880[(18)]);
var inst_29817 = (state_29880[(23)]);
var inst_29819 = (state_29880[(24)]);
var inst_29849 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29852 = (function (){var all_files = inst_29813;
var res_SINGLEQUOTE_ = inst_29816;
var res = inst_29817;
var files_not_loaded = inst_29819;
var dependencies_that_loaded = inst_29821;
return (function (p__29851){
var map__29906 = p__29851;
var map__29906__$1 = cljs.core.__destructure_map.call(null,map__29906);
var namespace = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_29853 = cljs.core.group_by.call(null,inst_29852,inst_29819);
var inst_29854 = cljs.core.__destructure_map.call(null,inst_29853);
var inst_29855__$1 = cljs.core.get.call(null,inst_29854,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29856 = cljs.core.get.call(null,inst_29854,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29857 = cljs.core.not_empty.call(null,inst_29855__$1);
var state_29880__$1 = (function (){var statearr_29907 = state_29880;
(statearr_29907[(19)] = inst_29855__$1);

(statearr_29907[(25)] = inst_29849);

(statearr_29907[(26)] = inst_29856);

return statearr_29907;
})();
if(cljs.core.truth_(inst_29857)){
var statearr_29908_29968 = state_29880__$1;
(statearr_29908_29968[(1)] = (32));

} else {
var statearr_29909_29969 = state_29880__$1;
(statearr_29909_29969[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (6))){
var inst_29794 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29910_29970 = state_29880__$1;
(statearr_29910_29970[(2)] = inst_29794);

(statearr_29910_29970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (28))){
var inst_29819 = (state_29880[(24)]);
var inst_29846 = (state_29880[(2)]);
var inst_29847 = cljs.core.not_empty.call(null,inst_29819);
var state_29880__$1 = (function (){var statearr_29911 = state_29880;
(statearr_29911[(27)] = inst_29846);

return statearr_29911;
})();
if(cljs.core.truth_(inst_29847)){
var statearr_29912_29971 = state_29880__$1;
(statearr_29912_29971[(1)] = (29));

} else {
var statearr_29913_29972 = state_29880__$1;
(statearr_29913_29972[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (25))){
var inst_29817 = (state_29880[(23)]);
var inst_29833 = (state_29880[(2)]);
var inst_29834 = cljs.core.not_empty.call(null,inst_29817);
var state_29880__$1 = (function (){var statearr_29914 = state_29880;
(statearr_29914[(28)] = inst_29833);

return statearr_29914;
})();
if(cljs.core.truth_(inst_29834)){
var statearr_29915_29973 = state_29880__$1;
(statearr_29915_29973[(1)] = (26));

} else {
var statearr_29916_29974 = state_29880__$1;
(statearr_29916_29974[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (34))){
var inst_29856 = (state_29880[(26)]);
var inst_29866 = (state_29880[(2)]);
var inst_29867 = cljs.core.not_empty.call(null,inst_29856);
var state_29880__$1 = (function (){var statearr_29917 = state_29880;
(statearr_29917[(29)] = inst_29866);

return statearr_29917;
})();
if(cljs.core.truth_(inst_29867)){
var statearr_29918_29975 = state_29880__$1;
(statearr_29918_29975[(1)] = (35));

} else {
var statearr_29919_29976 = state_29880__$1;
(statearr_29919_29976[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (17))){
var state_29880__$1 = state_29880;
var statearr_29920_29977 = state_29880__$1;
(statearr_29920_29977[(2)] = recompile_dependents);

(statearr_29920_29977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (3))){
var state_29880__$1 = state_29880;
var statearr_29921_29978 = state_29880__$1;
(statearr_29921_29978[(2)] = null);

(statearr_29921_29978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (12))){
var inst_29790 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29922_29979 = state_29880__$1;
(statearr_29922_29979[(2)] = inst_29790);

(statearr_29922_29979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (2))){
var inst_29752 = (state_29880[(13)]);
var inst_29759 = cljs.core.seq.call(null,inst_29752);
var inst_29760 = inst_29759;
var inst_29761 = null;
var inst_29762 = (0);
var inst_29763 = (0);
var state_29880__$1 = (function (){var statearr_29923 = state_29880;
(statearr_29923[(7)] = inst_29763);

(statearr_29923[(8)] = inst_29762);

(statearr_29923[(9)] = inst_29760);

(statearr_29923[(10)] = inst_29761);

return statearr_29923;
})();
var statearr_29924_29980 = state_29880__$1;
(statearr_29924_29980[(2)] = null);

(statearr_29924_29980[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (23))){
var inst_29821 = (state_29880[(21)]);
var inst_29816 = (state_29880[(22)]);
var inst_29813 = (state_29880[(18)]);
var inst_29817 = (state_29880[(23)]);
var inst_29819 = (state_29880[(24)]);
var inst_29824 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29826 = (function (){var all_files = inst_29813;
var res_SINGLEQUOTE_ = inst_29816;
var res = inst_29817;
var files_not_loaded = inst_29819;
var dependencies_that_loaded = inst_29821;
return (function (p__29825){
var map__29925 = p__29825;
var map__29925__$1 = cljs.core.__destructure_map.call(null,map__29925);
var request_url = cljs.core.get.call(null,map__29925__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29827 = cljs.core.reverse.call(null,inst_29821);
var inst_29828 = cljs.core.map.call(null,inst_29826,inst_29827);
var inst_29829 = cljs.core.pr_str.call(null,inst_29828);
var inst_29830 = figwheel.client.utils.log.call(null,inst_29829);
var state_29880__$1 = (function (){var statearr_29926 = state_29880;
(statearr_29926[(30)] = inst_29824);

return statearr_29926;
})();
var statearr_29927_29981 = state_29880__$1;
(statearr_29927_29981[(2)] = inst_29830);

(statearr_29927_29981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (35))){
var inst_29856 = (state_29880[(26)]);
var inst_29869 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29856);
var inst_29870 = cljs.core.pr_str.call(null,inst_29869);
var inst_29871 = ["not required: ",inst_29870].join('');
var inst_29872 = figwheel.client.utils.log.call(null,inst_29871);
var state_29880__$1 = state_29880;
var statearr_29928_29982 = state_29880__$1;
(statearr_29928_29982[(2)] = inst_29872);

(statearr_29928_29982[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (19))){
var inst_29803 = (state_29880[(12)]);
var inst_29809 = figwheel.client.file_reloading.expand_files.call(null,inst_29803);
var state_29880__$1 = state_29880;
var statearr_29929_29983 = state_29880__$1;
(statearr_29929_29983[(2)] = inst_29809);

(statearr_29929_29983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (11))){
var state_29880__$1 = state_29880;
var statearr_29930_29984 = state_29880__$1;
(statearr_29930_29984[(2)] = null);

(statearr_29930_29984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (9))){
var inst_29792 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29931_29985 = state_29880__$1;
(statearr_29931_29985[(2)] = inst_29792);

(statearr_29931_29985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (5))){
var inst_29763 = (state_29880[(7)]);
var inst_29762 = (state_29880[(8)]);
var inst_29765 = (inst_29763 < inst_29762);
var inst_29766 = inst_29765;
var state_29880__$1 = state_29880;
if(cljs.core.truth_(inst_29766)){
var statearr_29932_29986 = state_29880__$1;
(statearr_29932_29986[(1)] = (7));

} else {
var statearr_29933_29987 = state_29880__$1;
(statearr_29933_29987[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (14))){
var inst_29773 = (state_29880[(20)]);
var inst_29782 = cljs.core.first.call(null,inst_29773);
var inst_29783 = figwheel.client.file_reloading.eval_body.call(null,inst_29782,opts);
var inst_29784 = cljs.core.next.call(null,inst_29773);
var inst_29760 = inst_29784;
var inst_29761 = null;
var inst_29762 = (0);
var inst_29763 = (0);
var state_29880__$1 = (function (){var statearr_29934 = state_29880;
(statearr_29934[(7)] = inst_29763);

(statearr_29934[(8)] = inst_29762);

(statearr_29934[(31)] = inst_29783);

(statearr_29934[(9)] = inst_29760);

(statearr_29934[(10)] = inst_29761);

return statearr_29934;
})();
var statearr_29935_29988 = state_29880__$1;
(statearr_29935_29988[(2)] = null);

(statearr_29935_29988[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (26))){
var inst_29821 = (state_29880[(21)]);
var inst_29816 = (state_29880[(22)]);
var inst_29813 = (state_29880[(18)]);
var inst_29817 = (state_29880[(23)]);
var inst_29819 = (state_29880[(24)]);
var inst_29836 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29838 = (function (){var all_files = inst_29813;
var res_SINGLEQUOTE_ = inst_29816;
var res = inst_29817;
var files_not_loaded = inst_29819;
var dependencies_that_loaded = inst_29821;
return (function (p__29837){
var map__29936 = p__29837;
var map__29936__$1 = cljs.core.__destructure_map.call(null,map__29936);
var namespace = cljs.core.get.call(null,map__29936__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29936__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29839 = cljs.core.map.call(null,inst_29838,inst_29817);
var inst_29840 = cljs.core.pr_str.call(null,inst_29839);
var inst_29841 = figwheel.client.utils.log.call(null,inst_29840);
var inst_29842 = (function (){var all_files = inst_29813;
var res_SINGLEQUOTE_ = inst_29816;
var res = inst_29817;
var files_not_loaded = inst_29819;
var dependencies_that_loaded = inst_29821;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29843 = setTimeout(inst_29842,(10));
var state_29880__$1 = (function (){var statearr_29937 = state_29880;
(statearr_29937[(32)] = inst_29841);

(statearr_29937[(33)] = inst_29836);

return statearr_29937;
})();
var statearr_29938_29989 = state_29880__$1;
(statearr_29938_29989[(2)] = inst_29843);

(statearr_29938_29989[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (16))){
var state_29880__$1 = state_29880;
var statearr_29939_29990 = state_29880__$1;
(statearr_29939_29990[(2)] = reload_dependents);

(statearr_29939_29990[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (30))){
var state_29880__$1 = state_29880;
var statearr_29940_29991 = state_29880__$1;
(statearr_29940_29991[(2)] = null);

(statearr_29940_29991[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (10))){
var inst_29773 = (state_29880[(20)]);
var inst_29775 = cljs.core.chunked_seq_QMARK_.call(null,inst_29773);
var state_29880__$1 = state_29880;
if(inst_29775){
var statearr_29941_29992 = state_29880__$1;
(statearr_29941_29992[(1)] = (13));

} else {
var statearr_29942_29993 = state_29880__$1;
(statearr_29942_29993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (18))){
var inst_29807 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
if(cljs.core.truth_(inst_29807)){
var statearr_29943_29994 = state_29880__$1;
(statearr_29943_29994[(1)] = (19));

} else {
var statearr_29944_29995 = state_29880__$1;
(statearr_29944_29995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (37))){
var inst_29875 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29945_29996 = state_29880__$1;
(statearr_29945_29996[(2)] = inst_29875);

(statearr_29945_29996[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (8))){
var inst_29773 = (state_29880[(20)]);
var inst_29760 = (state_29880[(9)]);
var inst_29773__$1 = cljs.core.seq.call(null,inst_29760);
var state_29880__$1 = (function (){var statearr_29946 = state_29880;
(statearr_29946[(20)] = inst_29773__$1);

return statearr_29946;
})();
if(inst_29773__$1){
var statearr_29947_29997 = state_29880__$1;
(statearr_29947_29997[(1)] = (10));

} else {
var statearr_29948_29998 = state_29880__$1;
(statearr_29948_29998[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____0 = (function (){
var statearr_29949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29949[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__);

(statearr_29949[(1)] = (1));

return statearr_29949;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____1 = (function (state_29880){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_29880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e29950){if((e29950 instanceof Object)){
var ex__26035__auto__ = e29950;
var statearr_29951_29999 = state_29880;
(statearr_29951_29999[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30000 = state_29880;
state_29880 = G__30000;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__ = function(state_29880){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____1.call(this,state_29880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_29952 = f__26127__auto__.call(null);
(statearr_29952[(6)] = c__26126__auto__);

return statearr_29952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30003,link){
var map__30004 = p__30003;
var map__30004__$1 = cljs.core.__destructure_map.call(null,map__30004);
var file = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__30001_SHARP_,p2__30002_SHARP_){
if(cljs.core._EQ_.call(null,p1__30001_SHARP_,p2__30002_SHARP_)){
return p1__30001_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30006){
var map__30007 = p__30006;
var map__30007__$1 = cljs.core.__destructure_map.call(null,map__30007);
var match_length = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30005_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30005_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30008_SHARP_,p2__30009_SHARP_){
return cljs.core.assoc.call(null,p1__30008_SHARP_,cljs.core.get.call(null,p2__30009_SHARP_,key),p2__30009_SHARP_);
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
var loaded_f_datas_30010 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30010);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30010);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30011,p__30012){
var map__30013 = p__30011;
var map__30013__$1 = cljs.core.__destructure_map.call(null,map__30013);
var on_cssload = cljs.core.get.call(null,map__30013__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30014 = p__30012;
var map__30014__$1 = cljs.core.__destructure_map.call(null,map__30014);
var files_msg = map__30014__$1;
var files = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1718651153907
