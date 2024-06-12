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
var G__29321 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29321 == null)){
return null;
} else {
return goog.object.get(G__29321,"requires");
}
}):(function (path){
var G__29322 = goog.object.get(goog.dependencies_.requires,path);
if((G__29322 == null)){
return null;
} else {
return goog.object.getKeys(G__29322);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29323_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29323_SHARP_)));
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
var G__29324 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29324__$1 = (((G__29324 == null))?null:goog.object.get(G__29324,"provides"));
if((G__29324__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29324__$1);
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
var seq__29325 = cljs.core.seq.call(null,provides);
var chunk__29326 = null;
var count__29327 = (0);
var i__29328 = (0);
while(true){
if((i__29328 < count__29327)){
var prov = cljs.core._nth.call(null,chunk__29326,i__29328);
var seq__29337_29349 = cljs.core.seq.call(null,requires);
var chunk__29338_29350 = null;
var count__29339_29351 = (0);
var i__29340_29352 = (0);
while(true){
if((i__29340_29352 < count__29339_29351)){
var req_29353 = cljs.core._nth.call(null,chunk__29338_29350,i__29340_29352);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29353,prov);


var G__29354 = seq__29337_29349;
var G__29355 = chunk__29338_29350;
var G__29356 = count__29339_29351;
var G__29357 = (i__29340_29352 + (1));
seq__29337_29349 = G__29354;
chunk__29338_29350 = G__29355;
count__29339_29351 = G__29356;
i__29340_29352 = G__29357;
continue;
} else {
var temp__5735__auto___29358 = cljs.core.seq.call(null,seq__29337_29349);
if(temp__5735__auto___29358){
var seq__29337_29359__$1 = temp__5735__auto___29358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29337_29359__$1)){
var c__4591__auto___29360 = cljs.core.chunk_first.call(null,seq__29337_29359__$1);
var G__29361 = cljs.core.chunk_rest.call(null,seq__29337_29359__$1);
var G__29362 = c__4591__auto___29360;
var G__29363 = cljs.core.count.call(null,c__4591__auto___29360);
var G__29364 = (0);
seq__29337_29349 = G__29361;
chunk__29338_29350 = G__29362;
count__29339_29351 = G__29363;
i__29340_29352 = G__29364;
continue;
} else {
var req_29365 = cljs.core.first.call(null,seq__29337_29359__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29365,prov);


var G__29366 = cljs.core.next.call(null,seq__29337_29359__$1);
var G__29367 = null;
var G__29368 = (0);
var G__29369 = (0);
seq__29337_29349 = G__29366;
chunk__29338_29350 = G__29367;
count__29339_29351 = G__29368;
i__29340_29352 = G__29369;
continue;
}
} else {
}
}
break;
}


var G__29370 = seq__29325;
var G__29371 = chunk__29326;
var G__29372 = count__29327;
var G__29373 = (i__29328 + (1));
seq__29325 = G__29370;
chunk__29326 = G__29371;
count__29327 = G__29372;
i__29328 = G__29373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29325);
if(temp__5735__auto__){
var seq__29325__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29325__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29325__$1);
var G__29374 = cljs.core.chunk_rest.call(null,seq__29325__$1);
var G__29375 = c__4591__auto__;
var G__29376 = cljs.core.count.call(null,c__4591__auto__);
var G__29377 = (0);
seq__29325 = G__29374;
chunk__29326 = G__29375;
count__29327 = G__29376;
i__29328 = G__29377;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29325__$1);
var seq__29341_29378 = cljs.core.seq.call(null,requires);
var chunk__29342_29379 = null;
var count__29343_29380 = (0);
var i__29344_29381 = (0);
while(true){
if((i__29344_29381 < count__29343_29380)){
var req_29382 = cljs.core._nth.call(null,chunk__29342_29379,i__29344_29381);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29382,prov);


var G__29383 = seq__29341_29378;
var G__29384 = chunk__29342_29379;
var G__29385 = count__29343_29380;
var G__29386 = (i__29344_29381 + (1));
seq__29341_29378 = G__29383;
chunk__29342_29379 = G__29384;
count__29343_29380 = G__29385;
i__29344_29381 = G__29386;
continue;
} else {
var temp__5735__auto___29387__$1 = cljs.core.seq.call(null,seq__29341_29378);
if(temp__5735__auto___29387__$1){
var seq__29341_29388__$1 = temp__5735__auto___29387__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29341_29388__$1)){
var c__4591__auto___29389 = cljs.core.chunk_first.call(null,seq__29341_29388__$1);
var G__29390 = cljs.core.chunk_rest.call(null,seq__29341_29388__$1);
var G__29391 = c__4591__auto___29389;
var G__29392 = cljs.core.count.call(null,c__4591__auto___29389);
var G__29393 = (0);
seq__29341_29378 = G__29390;
chunk__29342_29379 = G__29391;
count__29343_29380 = G__29392;
i__29344_29381 = G__29393;
continue;
} else {
var req_29394 = cljs.core.first.call(null,seq__29341_29388__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29394,prov);


var G__29395 = cljs.core.next.call(null,seq__29341_29388__$1);
var G__29396 = null;
var G__29397 = (0);
var G__29398 = (0);
seq__29341_29378 = G__29395;
chunk__29342_29379 = G__29396;
count__29343_29380 = G__29397;
i__29344_29381 = G__29398;
continue;
}
} else {
}
}
break;
}


var G__29399 = cljs.core.next.call(null,seq__29325__$1);
var G__29400 = null;
var G__29401 = (0);
var G__29402 = (0);
seq__29325 = G__29399;
chunk__29326 = G__29400;
count__29327 = G__29401;
i__29328 = G__29402;
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
var seq__29345 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29346 = null;
var count__29347 = (0);
var i__29348 = (0);
while(true){
if((i__29348 < count__29347)){
var prov = cljs.core._nth.call(null,chunk__29346,i__29348);
goog.object.forEach(deps,((function (seq__29345,chunk__29346,count__29347,i__29348,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29345,chunk__29346,count__29347,i__29348,prov,requires))
);


var G__29403 = seq__29345;
var G__29404 = chunk__29346;
var G__29405 = count__29347;
var G__29406 = (i__29348 + (1));
seq__29345 = G__29403;
chunk__29346 = G__29404;
count__29347 = G__29405;
i__29348 = G__29406;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29345);
if(temp__5735__auto__){
var seq__29345__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29345__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29345__$1);
var G__29407 = cljs.core.chunk_rest.call(null,seq__29345__$1);
var G__29408 = c__4591__auto__;
var G__29409 = cljs.core.count.call(null,c__4591__auto__);
var G__29410 = (0);
seq__29345 = G__29407;
chunk__29346 = G__29408;
count__29347 = G__29409;
i__29348 = G__29410;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29345__$1);
goog.object.forEach(deps,((function (seq__29345,chunk__29346,count__29347,i__29348,prov,seq__29345__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29345,chunk__29346,count__29347,i__29348,prov,seq__29345__$1,temp__5735__auto__,requires))
);


var G__29411 = cljs.core.next.call(null,seq__29345__$1);
var G__29412 = null;
var G__29413 = (0);
var G__29414 = (0);
seq__29345 = G__29411;
chunk__29346 = G__29412;
count__29347 = G__29413;
i__29348 = G__29414;
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
return cljs.core.some.call(null,(function (p__29415){
var vec__29416 = p__29415;
var _ = cljs.core.nth.call(null,vec__29416,(0),null);
var v = cljs.core.nth.call(null,vec__29416,(1),null);
var and__4149__auto__ = v;
if(cljs.core.truth_(and__4149__auto__)){
return v.call(null,dep);
} else {
return and__4149__auto__;
}
}),cljs.core.filter.call(null,(function (p__29419){
var vec__29420 = p__29419;
var k = cljs.core.nth.call(null,vec__29420,(0),null);
var v = cljs.core.nth.call(null,vec__29420,(1),null);
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

var seq__29432_29440 = cljs.core.seq.call(null,deps);
var chunk__29433_29441 = null;
var count__29434_29442 = (0);
var i__29435_29443 = (0);
while(true){
if((i__29435_29443 < count__29434_29442)){
var dep_29444 = cljs.core._nth.call(null,chunk__29433_29441,i__29435_29443);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_29444;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29444));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29444,(depth + (1)),state);
} else {
}


var G__29445 = seq__29432_29440;
var G__29446 = chunk__29433_29441;
var G__29447 = count__29434_29442;
var G__29448 = (i__29435_29443 + (1));
seq__29432_29440 = G__29445;
chunk__29433_29441 = G__29446;
count__29434_29442 = G__29447;
i__29435_29443 = G__29448;
continue;
} else {
var temp__5735__auto___29449 = cljs.core.seq.call(null,seq__29432_29440);
if(temp__5735__auto___29449){
var seq__29432_29450__$1 = temp__5735__auto___29449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29432_29450__$1)){
var c__4591__auto___29451 = cljs.core.chunk_first.call(null,seq__29432_29450__$1);
var G__29452 = cljs.core.chunk_rest.call(null,seq__29432_29450__$1);
var G__29453 = c__4591__auto___29451;
var G__29454 = cljs.core.count.call(null,c__4591__auto___29451);
var G__29455 = (0);
seq__29432_29440 = G__29452;
chunk__29433_29441 = G__29453;
count__29434_29442 = G__29454;
i__29435_29443 = G__29455;
continue;
} else {
var dep_29456 = cljs.core.first.call(null,seq__29432_29450__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_29456;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29456));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29456,(depth + (1)),state);
} else {
}


var G__29457 = cljs.core.next.call(null,seq__29432_29450__$1);
var G__29458 = null;
var G__29459 = (0);
var G__29460 = (0);
seq__29432_29440 = G__29457;
chunk__29433_29441 = G__29458;
count__29434_29442 = G__29459;
i__29435_29443 = G__29460;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29436){
var vec__29437 = p__29436;
var seq__29438 = cljs.core.seq.call(null,vec__29437);
var first__29439 = cljs.core.first.call(null,seq__29438);
var seq__29438__$1 = cljs.core.next.call(null,seq__29438);
var x = first__29439;
var xs = seq__29438__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29423_SHARP_){
return clojure.set.difference.call(null,p1__29423_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29461_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29461_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29462 = cljs.core.seq.call(null,provides);
var chunk__29463 = null;
var count__29464 = (0);
var i__29465 = (0);
while(true){
if((i__29465 < count__29464)){
var prov = cljs.core._nth.call(null,chunk__29463,i__29465);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29474_29482 = cljs.core.seq.call(null,requires);
var chunk__29475_29483 = null;
var count__29476_29484 = (0);
var i__29477_29485 = (0);
while(true){
if((i__29477_29485 < count__29476_29484)){
var req_29486 = cljs.core._nth.call(null,chunk__29475_29483,i__29477_29485);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29486,prov);


var G__29487 = seq__29474_29482;
var G__29488 = chunk__29475_29483;
var G__29489 = count__29476_29484;
var G__29490 = (i__29477_29485 + (1));
seq__29474_29482 = G__29487;
chunk__29475_29483 = G__29488;
count__29476_29484 = G__29489;
i__29477_29485 = G__29490;
continue;
} else {
var temp__5735__auto___29491 = cljs.core.seq.call(null,seq__29474_29482);
if(temp__5735__auto___29491){
var seq__29474_29492__$1 = temp__5735__auto___29491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29474_29492__$1)){
var c__4591__auto___29493 = cljs.core.chunk_first.call(null,seq__29474_29492__$1);
var G__29494 = cljs.core.chunk_rest.call(null,seq__29474_29492__$1);
var G__29495 = c__4591__auto___29493;
var G__29496 = cljs.core.count.call(null,c__4591__auto___29493);
var G__29497 = (0);
seq__29474_29482 = G__29494;
chunk__29475_29483 = G__29495;
count__29476_29484 = G__29496;
i__29477_29485 = G__29497;
continue;
} else {
var req_29498 = cljs.core.first.call(null,seq__29474_29492__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29498,prov);


var G__29499 = cljs.core.next.call(null,seq__29474_29492__$1);
var G__29500 = null;
var G__29501 = (0);
var G__29502 = (0);
seq__29474_29482 = G__29499;
chunk__29475_29483 = G__29500;
count__29476_29484 = G__29501;
i__29477_29485 = G__29502;
continue;
}
} else {
}
}
break;
}


var G__29503 = seq__29462;
var G__29504 = chunk__29463;
var G__29505 = count__29464;
var G__29506 = (i__29465 + (1));
seq__29462 = G__29503;
chunk__29463 = G__29504;
count__29464 = G__29505;
i__29465 = G__29506;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29462);
if(temp__5735__auto__){
var seq__29462__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29462__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29462__$1);
var G__29507 = cljs.core.chunk_rest.call(null,seq__29462__$1);
var G__29508 = c__4591__auto__;
var G__29509 = cljs.core.count.call(null,c__4591__auto__);
var G__29510 = (0);
seq__29462 = G__29507;
chunk__29463 = G__29508;
count__29464 = G__29509;
i__29465 = G__29510;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29462__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29478_29511 = cljs.core.seq.call(null,requires);
var chunk__29479_29512 = null;
var count__29480_29513 = (0);
var i__29481_29514 = (0);
while(true){
if((i__29481_29514 < count__29480_29513)){
var req_29515 = cljs.core._nth.call(null,chunk__29479_29512,i__29481_29514);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29515,prov);


var G__29516 = seq__29478_29511;
var G__29517 = chunk__29479_29512;
var G__29518 = count__29480_29513;
var G__29519 = (i__29481_29514 + (1));
seq__29478_29511 = G__29516;
chunk__29479_29512 = G__29517;
count__29480_29513 = G__29518;
i__29481_29514 = G__29519;
continue;
} else {
var temp__5735__auto___29520__$1 = cljs.core.seq.call(null,seq__29478_29511);
if(temp__5735__auto___29520__$1){
var seq__29478_29521__$1 = temp__5735__auto___29520__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29478_29521__$1)){
var c__4591__auto___29522 = cljs.core.chunk_first.call(null,seq__29478_29521__$1);
var G__29523 = cljs.core.chunk_rest.call(null,seq__29478_29521__$1);
var G__29524 = c__4591__auto___29522;
var G__29525 = cljs.core.count.call(null,c__4591__auto___29522);
var G__29526 = (0);
seq__29478_29511 = G__29523;
chunk__29479_29512 = G__29524;
count__29480_29513 = G__29525;
i__29481_29514 = G__29526;
continue;
} else {
var req_29527 = cljs.core.first.call(null,seq__29478_29521__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29527,prov);


var G__29528 = cljs.core.next.call(null,seq__29478_29521__$1);
var G__29529 = null;
var G__29530 = (0);
var G__29531 = (0);
seq__29478_29511 = G__29528;
chunk__29479_29512 = G__29529;
count__29480_29513 = G__29530;
i__29481_29514 = G__29531;
continue;
}
} else {
}
}
break;
}


var G__29532 = cljs.core.next.call(null,seq__29462__$1);
var G__29533 = null;
var G__29534 = (0);
var G__29535 = (0);
seq__29462 = G__29532;
chunk__29463 = G__29533;
count__29464 = G__29534;
i__29465 = G__29535;
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
var seq__29536_29540 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29537_29541 = null;
var count__29538_29542 = (0);
var i__29539_29543 = (0);
while(true){
if((i__29539_29543 < count__29538_29542)){
var ns_29544 = cljs.core._nth.call(null,chunk__29537_29541,i__29539_29543);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29544);


var G__29545 = seq__29536_29540;
var G__29546 = chunk__29537_29541;
var G__29547 = count__29538_29542;
var G__29548 = (i__29539_29543 + (1));
seq__29536_29540 = G__29545;
chunk__29537_29541 = G__29546;
count__29538_29542 = G__29547;
i__29539_29543 = G__29548;
continue;
} else {
var temp__5735__auto___29549 = cljs.core.seq.call(null,seq__29536_29540);
if(temp__5735__auto___29549){
var seq__29536_29550__$1 = temp__5735__auto___29549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29536_29550__$1)){
var c__4591__auto___29551 = cljs.core.chunk_first.call(null,seq__29536_29550__$1);
var G__29552 = cljs.core.chunk_rest.call(null,seq__29536_29550__$1);
var G__29553 = c__4591__auto___29551;
var G__29554 = cljs.core.count.call(null,c__4591__auto___29551);
var G__29555 = (0);
seq__29536_29540 = G__29552;
chunk__29537_29541 = G__29553;
count__29538_29542 = G__29554;
i__29539_29543 = G__29555;
continue;
} else {
var ns_29556 = cljs.core.first.call(null,seq__29536_29550__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29556);


var G__29557 = cljs.core.next.call(null,seq__29536_29550__$1);
var G__29558 = null;
var G__29559 = (0);
var G__29560 = (0);
seq__29536_29540 = G__29557;
chunk__29537_29541 = G__29558;
count__29538_29542 = G__29559;
i__29539_29543 = G__29560;
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
var G__29561__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29562__i = 0, G__29562__a = new Array(arguments.length -  0);
while (G__29562__i < G__29562__a.length) {G__29562__a[G__29562__i] = arguments[G__29562__i + 0]; ++G__29562__i;}
  args = new cljs.core.IndexedSeq(G__29562__a,0,null);
} 
return G__29561__delegate.call(this,args);};
G__29561.cljs$lang$maxFixedArity = 0;
G__29561.cljs$lang$applyTo = (function (arglist__29563){
var args = cljs.core.seq(arglist__29563);
return G__29561__delegate(args);
});
G__29561.cljs$core$IFn$_invoke$arity$variadic = G__29561__delegate;
return G__29561;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29564_SHARP_,p2__29565_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29564_SHARP_)),p2__29565_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29566_SHARP_,p2__29567_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29566_SHARP_),p2__29567_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29568 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29568.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29568.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29568;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29569){if((e29569 instanceof Error)){
var e = e29569;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29569;

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
}catch (e29570){if((e29570 instanceof Error)){
var e = e29570;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29570;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29571 = cljs.core._EQ_;
var expr__29572 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29571.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29572))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29571.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29572))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29571.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29572))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29574,callback){
var map__29575 = p__29574;
var map__29575__$1 = cljs.core.__destructure_map.call(null,map__29575);
var file_msg = map__29575__$1;
var request_url = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_29612){
var state_val_29613 = (state_29612[(1)]);
if((state_val_29613 === (7))){
var inst_29608 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
var statearr_29614_29640 = state_29612__$1;
(statearr_29614_29640[(2)] = inst_29608);

(statearr_29614_29640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (1))){
var state_29612__$1 = state_29612;
var statearr_29615_29641 = state_29612__$1;
(statearr_29615_29641[(2)] = null);

(statearr_29615_29641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (4))){
var inst_29578 = (state_29612[(7)]);
var inst_29578__$1 = (state_29612[(2)]);
var state_29612__$1 = (function (){var statearr_29616 = state_29612;
(statearr_29616[(7)] = inst_29578__$1);

return statearr_29616;
})();
if(cljs.core.truth_(inst_29578__$1)){
var statearr_29617_29642 = state_29612__$1;
(statearr_29617_29642[(1)] = (5));

} else {
var statearr_29618_29643 = state_29612__$1;
(statearr_29618_29643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (15))){
var inst_29591 = (state_29612[(8)]);
var inst_29593 = (state_29612[(9)]);
var inst_29595 = inst_29593.call(null,inst_29591);
var state_29612__$1 = state_29612;
var statearr_29619_29644 = state_29612__$1;
(statearr_29619_29644[(2)] = inst_29595);

(statearr_29619_29644[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (13))){
var inst_29602 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
var statearr_29620_29645 = state_29612__$1;
(statearr_29620_29645[(2)] = inst_29602);

(statearr_29620_29645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (6))){
var state_29612__$1 = state_29612;
var statearr_29621_29646 = state_29612__$1;
(statearr_29621_29646[(2)] = null);

(statearr_29621_29646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (17))){
var inst_29599 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
var statearr_29622_29647 = state_29612__$1;
(statearr_29622_29647[(2)] = inst_29599);

(statearr_29622_29647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (3))){
var inst_29610 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29612__$1,inst_29610);
} else {
if((state_val_29613 === (12))){
var state_29612__$1 = state_29612;
var statearr_29623_29648 = state_29612__$1;
(statearr_29623_29648[(2)] = null);

(statearr_29623_29648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (2))){
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29612__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29613 === (11))){
var inst_29583 = (state_29612[(10)]);
var inst_29589 = figwheel.client.file_reloading.blocking_load.call(null,inst_29583);
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29612__$1,(14),inst_29589);
} else {
if((state_val_29613 === (9))){
var inst_29583 = (state_29612[(10)]);
var state_29612__$1 = state_29612;
if(cljs.core.truth_(inst_29583)){
var statearr_29624_29649 = state_29612__$1;
(statearr_29624_29649[(1)] = (11));

} else {
var statearr_29625_29650 = state_29612__$1;
(statearr_29625_29650[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (5))){
var inst_29578 = (state_29612[(7)]);
var inst_29584 = (state_29612[(11)]);
var inst_29583 = cljs.core.nth.call(null,inst_29578,(0),null);
var inst_29584__$1 = cljs.core.nth.call(null,inst_29578,(1),null);
var state_29612__$1 = (function (){var statearr_29626 = state_29612;
(statearr_29626[(10)] = inst_29583);

(statearr_29626[(11)] = inst_29584__$1);

return statearr_29626;
})();
if(cljs.core.truth_(inst_29584__$1)){
var statearr_29627_29651 = state_29612__$1;
(statearr_29627_29651[(1)] = (8));

} else {
var statearr_29628_29652 = state_29612__$1;
(statearr_29628_29652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (14))){
var inst_29593 = (state_29612[(9)]);
var inst_29583 = (state_29612[(10)]);
var inst_29591 = (state_29612[(2)]);
var inst_29592 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29593__$1 = cljs.core.get.call(null,inst_29592,inst_29583);
var state_29612__$1 = (function (){var statearr_29629 = state_29612;
(statearr_29629[(8)] = inst_29591);

(statearr_29629[(9)] = inst_29593__$1);

return statearr_29629;
})();
if(cljs.core.truth_(inst_29593__$1)){
var statearr_29630_29653 = state_29612__$1;
(statearr_29630_29653[(1)] = (15));

} else {
var statearr_29631_29654 = state_29612__$1;
(statearr_29631_29654[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (16))){
var inst_29591 = (state_29612[(8)]);
var inst_29597 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29591);
var state_29612__$1 = state_29612;
var statearr_29632_29655 = state_29612__$1;
(statearr_29632_29655[(2)] = inst_29597);

(statearr_29632_29655[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (10))){
var inst_29604 = (state_29612[(2)]);
var state_29612__$1 = (function (){var statearr_29633 = state_29612;
(statearr_29633[(12)] = inst_29604);

return statearr_29633;
})();
var statearr_29634_29656 = state_29612__$1;
(statearr_29634_29656[(2)] = null);

(statearr_29634_29656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (8))){
var inst_29584 = (state_29612[(11)]);
var inst_29586 = eval(inst_29584);
var state_29612__$1 = state_29612;
var statearr_29635_29657 = state_29612__$1;
(statearr_29635_29657[(2)] = inst_29586);

(statearr_29635_29657[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__25923__auto__ = null;
var figwheel$client$file_reloading$state_machine__25923__auto____0 = (function (){
var statearr_29636 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29636[(0)] = figwheel$client$file_reloading$state_machine__25923__auto__);

(statearr_29636[(1)] = (1));

return statearr_29636;
});
var figwheel$client$file_reloading$state_machine__25923__auto____1 = (function (state_29612){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_29612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e29637){if((e29637 instanceof Object)){
var ex__25926__auto__ = e29637;
var statearr_29638_29658 = state_29612;
(statearr_29638_29658[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29659 = state_29612;
state_29612 = G__29659;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25923__auto__ = function(state_29612){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25923__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25923__auto____1.call(this,state_29612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25923__auto____0;
figwheel$client$file_reloading$state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25923__auto____1;
return figwheel$client$file_reloading$state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_29639 = f__26018__auto__.call(null);
(statearr_29639[(6)] = c__26017__auto__);

return statearr_29639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));

return c__26017__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29661 = arguments.length;
switch (G__29661) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29663,callback){
var map__29664 = p__29663;
var map__29664__$1 = cljs.core.__destructure_map.call(null,map__29664);
var file_msg = map__29664__$1;
var namespace = cljs.core.get.call(null,map__29664__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29665){
var map__29666 = p__29665;
var map__29666__$1 = cljs.core.__destructure_map.call(null,map__29666);
var file_msg = map__29666__$1;
var namespace = cljs.core.get.call(null,map__29666__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29667){
var map__29668 = p__29667;
var map__29668__$1 = cljs.core.__destructure_map.call(null,map__29668);
var file_msg = map__29668__$1;
var namespace = cljs.core.get.call(null,map__29668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29669,callback){
var map__29670 = p__29669;
var map__29670__$1 = cljs.core.__destructure_map.call(null,map__29670);
var file_msg = map__29670__$1;
var request_url = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26017__auto___29719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_29704){
var state_val_29705 = (state_29704[(1)]);
if((state_val_29705 === (1))){
var inst_29678 = cljs.core.seq.call(null,files);
var inst_29679 = cljs.core.first.call(null,inst_29678);
var inst_29680 = cljs.core.next.call(null,inst_29678);
var inst_29681 = files;
var state_29704__$1 = (function (){var statearr_29706 = state_29704;
(statearr_29706[(7)] = inst_29680);

(statearr_29706[(8)] = inst_29679);

(statearr_29706[(9)] = inst_29681);

return statearr_29706;
})();
var statearr_29707_29720 = state_29704__$1;
(statearr_29707_29720[(2)] = null);

(statearr_29707_29720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29705 === (2))){
var inst_29687 = (state_29704[(10)]);
var inst_29681 = (state_29704[(9)]);
var inst_29686 = cljs.core.seq.call(null,inst_29681);
var inst_29687__$1 = cljs.core.first.call(null,inst_29686);
var inst_29688 = cljs.core.next.call(null,inst_29686);
var inst_29689 = (inst_29687__$1 == null);
var inst_29690 = cljs.core.not.call(null,inst_29689);
var state_29704__$1 = (function (){var statearr_29708 = state_29704;
(statearr_29708[(10)] = inst_29687__$1);

(statearr_29708[(11)] = inst_29688);

return statearr_29708;
})();
if(inst_29690){
var statearr_29709_29721 = state_29704__$1;
(statearr_29709_29721[(1)] = (4));

} else {
var statearr_29710_29722 = state_29704__$1;
(statearr_29710_29722[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29705 === (3))){
var inst_29702 = (state_29704[(2)]);
var state_29704__$1 = state_29704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29704__$1,inst_29702);
} else {
if((state_val_29705 === (4))){
var inst_29687 = (state_29704[(10)]);
var inst_29692 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29687);
var state_29704__$1 = state_29704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29704__$1,(7),inst_29692);
} else {
if((state_val_29705 === (5))){
var inst_29698 = cljs.core.async.close_BANG_.call(null,out);
var state_29704__$1 = state_29704;
var statearr_29711_29723 = state_29704__$1;
(statearr_29711_29723[(2)] = inst_29698);

(statearr_29711_29723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29705 === (6))){
var inst_29700 = (state_29704[(2)]);
var state_29704__$1 = state_29704;
var statearr_29712_29724 = state_29704__$1;
(statearr_29712_29724[(2)] = inst_29700);

(statearr_29712_29724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29705 === (7))){
var inst_29688 = (state_29704[(11)]);
var inst_29694 = (state_29704[(2)]);
var inst_29695 = cljs.core.async.put_BANG_.call(null,out,inst_29694);
var inst_29681 = inst_29688;
var state_29704__$1 = (function (){var statearr_29713 = state_29704;
(statearr_29713[(12)] = inst_29695);

(statearr_29713[(9)] = inst_29681);

return statearr_29713;
})();
var statearr_29714_29725 = state_29704__$1;
(statearr_29714_29725[(2)] = null);

(statearr_29714_29725[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto____0 = (function (){
var statearr_29715 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29715[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto__);

(statearr_29715[(1)] = (1));

return statearr_29715;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto____1 = (function (state_29704){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_29704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e29716){if((e29716 instanceof Object)){
var ex__25926__auto__ = e29716;
var statearr_29717_29726 = state_29704;
(statearr_29717_29726[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29727 = state_29704;
state_29704 = G__29727;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto__ = function(state_29704){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto____1.call(this,state_29704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_29718 = f__26018__auto__.call(null);
(statearr_29718[(6)] = c__26017__auto___29719);

return statearr_29718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29728,opts){
var map__29729 = p__29728;
var map__29729__$1 = cljs.core.__destructure_map.call(null,map__29729);
var eval_body = cljs.core.get.call(null,map__29729__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29729__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29730){var e = e29730;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29731_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29731_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29732){
var vec__29733 = p__29732;
var k = cljs.core.nth.call(null,vec__29733,(0),null);
var v = cljs.core.nth.call(null,vec__29733,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29736){
var vec__29737 = p__29736;
var k = cljs.core.nth.call(null,vec__29737,(0),null);
var v = cljs.core.nth.call(null,vec__29737,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29743,p__29744){
var map__29745 = p__29743;
var map__29745__$1 = cljs.core.__destructure_map.call(null,map__29745);
var opts = map__29745__$1;
var before_jsload = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29746 = p__29744;
var map__29746__$1 = cljs.core.__destructure_map.call(null,map__29746);
var msg = map__29746__$1;
var files = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26018__auto__ = (function (){var switch__25922__auto__ = (function (state_29878){
var state_val_29879 = (state_29878[(1)]);
if((state_val_29879 === (7))){
var inst_29759 = (state_29878[(7)]);
var inst_29758 = (state_29878[(8)]);
var inst_29760 = (state_29878[(9)]);
var inst_29761 = (state_29878[(10)]);
var inst_29766 = cljs.core._nth.call(null,inst_29759,inst_29761);
var inst_29767 = figwheel.client.file_reloading.eval_body.call(null,inst_29766,opts);
var inst_29768 = (inst_29761 + (1));
var tmp29880 = inst_29759;
var tmp29881 = inst_29758;
var tmp29882 = inst_29760;
var inst_29758__$1 = tmp29881;
var inst_29759__$1 = tmp29880;
var inst_29760__$1 = tmp29882;
var inst_29761__$1 = inst_29768;
var state_29878__$1 = (function (){var statearr_29883 = state_29878;
(statearr_29883[(7)] = inst_29759__$1);

(statearr_29883[(11)] = inst_29767);

(statearr_29883[(8)] = inst_29758__$1);

(statearr_29883[(9)] = inst_29760__$1);

(statearr_29883[(10)] = inst_29761__$1);

return statearr_29883;
})();
var statearr_29884_29951 = state_29878__$1;
(statearr_29884_29951[(2)] = null);

(statearr_29884_29951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (20))){
var inst_29801 = (state_29878[(12)]);
var inst_29809 = figwheel.client.file_reloading.sort_files.call(null,inst_29801);
var state_29878__$1 = state_29878;
var statearr_29885_29952 = state_29878__$1;
(statearr_29885_29952[(2)] = inst_29809);

(statearr_29885_29952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (27))){
var state_29878__$1 = state_29878;
var statearr_29886_29953 = state_29878__$1;
(statearr_29886_29953[(2)] = null);

(statearr_29886_29953[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (1))){
var inst_29750 = (state_29878[(13)]);
var inst_29747 = before_jsload.call(null,files);
var inst_29748 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29749 = (function (){return (function (p1__29740_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29740_SHARP_);
});
})();
var inst_29750__$1 = cljs.core.filter.call(null,inst_29749,files);
var inst_29751 = cljs.core.not_empty.call(null,inst_29750__$1);
var state_29878__$1 = (function (){var statearr_29887 = state_29878;
(statearr_29887[(13)] = inst_29750__$1);

(statearr_29887[(14)] = inst_29748);

(statearr_29887[(15)] = inst_29747);

return statearr_29887;
})();
if(cljs.core.truth_(inst_29751)){
var statearr_29888_29954 = state_29878__$1;
(statearr_29888_29954[(1)] = (2));

} else {
var statearr_29889_29955 = state_29878__$1;
(statearr_29889_29955[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (24))){
var state_29878__$1 = state_29878;
var statearr_29890_29956 = state_29878__$1;
(statearr_29890_29956[(2)] = null);

(statearr_29890_29956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (4))){
var inst_29795 = (state_29878[(2)]);
var inst_29796 = cljs.core.List.EMPTY;
var inst_29797 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29796);
var inst_29798 = (function (){return (function (p1__29741_SHARP_){
var and__4149__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29741_SHARP_);
if(cljs.core.truth_(and__4149__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29741_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29741_SHARP_))));
} else {
return and__4149__auto__;
}
});
})();
var inst_29799 = cljs.core.filter.call(null,inst_29798,files);
var inst_29800 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29801 = cljs.core.concat.call(null,inst_29799,inst_29800);
var state_29878__$1 = (function (){var statearr_29891 = state_29878;
(statearr_29891[(16)] = inst_29797);

(statearr_29891[(17)] = inst_29795);

(statearr_29891[(12)] = inst_29801);

return statearr_29891;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29892_29957 = state_29878__$1;
(statearr_29892_29957[(1)] = (16));

} else {
var statearr_29893_29958 = state_29878__$1;
(statearr_29893_29958[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (15))){
var inst_29785 = (state_29878[(2)]);
var state_29878__$1 = state_29878;
var statearr_29894_29959 = state_29878__$1;
(statearr_29894_29959[(2)] = inst_29785);

(statearr_29894_29959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (21))){
var inst_29811 = (state_29878[(18)]);
var inst_29811__$1 = (state_29878[(2)]);
var inst_29812 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29811__$1);
var state_29878__$1 = (function (){var statearr_29895 = state_29878;
(statearr_29895[(18)] = inst_29811__$1);

return statearr_29895;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29878__$1,(22),inst_29812);
} else {
if((state_val_29879 === (31))){
var inst_29876 = (state_29878[(2)]);
var state_29878__$1 = state_29878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29878__$1,inst_29876);
} else {
if((state_val_29879 === (32))){
var inst_29853 = (state_29878[(19)]);
var inst_29857 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29858 = cljs.core.map.call(null,inst_29857,inst_29853);
var inst_29859 = cljs.core.pr_str.call(null,inst_29858);
var inst_29860 = ["figwheel-no-load meta-data: ",inst_29859].join('');
var inst_29861 = figwheel.client.utils.log.call(null,inst_29860);
var state_29878__$1 = state_29878;
var statearr_29896_29960 = state_29878__$1;
(statearr_29896_29960[(2)] = inst_29861);

(statearr_29896_29960[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (33))){
var state_29878__$1 = state_29878;
var statearr_29897_29961 = state_29878__$1;
(statearr_29897_29961[(2)] = null);

(statearr_29897_29961[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (13))){
var inst_29771 = (state_29878[(20)]);
var inst_29775 = cljs.core.chunk_first.call(null,inst_29771);
var inst_29776 = cljs.core.chunk_rest.call(null,inst_29771);
var inst_29777 = cljs.core.count.call(null,inst_29775);
var inst_29758 = inst_29776;
var inst_29759 = inst_29775;
var inst_29760 = inst_29777;
var inst_29761 = (0);
var state_29878__$1 = (function (){var statearr_29898 = state_29878;
(statearr_29898[(7)] = inst_29759);

(statearr_29898[(8)] = inst_29758);

(statearr_29898[(9)] = inst_29760);

(statearr_29898[(10)] = inst_29761);

return statearr_29898;
})();
var statearr_29899_29962 = state_29878__$1;
(statearr_29899_29962[(2)] = null);

(statearr_29899_29962[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (22))){
var inst_29815 = (state_29878[(21)]);
var inst_29814 = (state_29878[(22)]);
var inst_29811 = (state_29878[(18)]);
var inst_29819 = (state_29878[(23)]);
var inst_29814__$1 = (state_29878[(2)]);
var inst_29815__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29814__$1);
var inst_29816 = (function (){var all_files = inst_29811;
var res_SINGLEQUOTE_ = inst_29814__$1;
var res = inst_29815__$1;
return (function (p1__29742_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29742_SHARP_));
});
})();
var inst_29817 = cljs.core.filter.call(null,inst_29816,inst_29814__$1);
var inst_29818 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29819__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29818);
var inst_29820 = cljs.core.not_empty.call(null,inst_29819__$1);
var state_29878__$1 = (function (){var statearr_29900 = state_29878;
(statearr_29900[(21)] = inst_29815__$1);

(statearr_29900[(22)] = inst_29814__$1);

(statearr_29900[(24)] = inst_29817);

(statearr_29900[(23)] = inst_29819__$1);

return statearr_29900;
})();
if(cljs.core.truth_(inst_29820)){
var statearr_29901_29963 = state_29878__$1;
(statearr_29901_29963[(1)] = (23));

} else {
var statearr_29902_29964 = state_29878__$1;
(statearr_29902_29964[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (36))){
var state_29878__$1 = state_29878;
var statearr_29903_29965 = state_29878__$1;
(statearr_29903_29965[(2)] = null);

(statearr_29903_29965[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (29))){
var inst_29815 = (state_29878[(21)]);
var inst_29853 = (state_29878[(19)]);
var inst_29814 = (state_29878[(22)]);
var inst_29817 = (state_29878[(24)]);
var inst_29811 = (state_29878[(18)]);
var inst_29819 = (state_29878[(23)]);
var inst_29847 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29850 = (function (){var all_files = inst_29811;
var res_SINGLEQUOTE_ = inst_29814;
var res = inst_29815;
var files_not_loaded = inst_29817;
var dependencies_that_loaded = inst_29819;
return (function (p__29849){
var map__29904 = p__29849;
var map__29904__$1 = cljs.core.__destructure_map.call(null,map__29904);
var namespace = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_29851 = cljs.core.group_by.call(null,inst_29850,inst_29817);
var inst_29852 = cljs.core.__destructure_map.call(null,inst_29851);
var inst_29853__$1 = cljs.core.get.call(null,inst_29852,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29854 = cljs.core.get.call(null,inst_29852,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29855 = cljs.core.not_empty.call(null,inst_29853__$1);
var state_29878__$1 = (function (){var statearr_29905 = state_29878;
(statearr_29905[(25)] = inst_29854);

(statearr_29905[(26)] = inst_29847);

(statearr_29905[(19)] = inst_29853__$1);

return statearr_29905;
})();
if(cljs.core.truth_(inst_29855)){
var statearr_29906_29966 = state_29878__$1;
(statearr_29906_29966[(1)] = (32));

} else {
var statearr_29907_29967 = state_29878__$1;
(statearr_29907_29967[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (6))){
var inst_29792 = (state_29878[(2)]);
var state_29878__$1 = state_29878;
var statearr_29908_29968 = state_29878__$1;
(statearr_29908_29968[(2)] = inst_29792);

(statearr_29908_29968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (28))){
var inst_29817 = (state_29878[(24)]);
var inst_29844 = (state_29878[(2)]);
var inst_29845 = cljs.core.not_empty.call(null,inst_29817);
var state_29878__$1 = (function (){var statearr_29909 = state_29878;
(statearr_29909[(27)] = inst_29844);

return statearr_29909;
})();
if(cljs.core.truth_(inst_29845)){
var statearr_29910_29969 = state_29878__$1;
(statearr_29910_29969[(1)] = (29));

} else {
var statearr_29911_29970 = state_29878__$1;
(statearr_29911_29970[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (25))){
var inst_29815 = (state_29878[(21)]);
var inst_29831 = (state_29878[(2)]);
var inst_29832 = cljs.core.not_empty.call(null,inst_29815);
var state_29878__$1 = (function (){var statearr_29912 = state_29878;
(statearr_29912[(28)] = inst_29831);

return statearr_29912;
})();
if(cljs.core.truth_(inst_29832)){
var statearr_29913_29971 = state_29878__$1;
(statearr_29913_29971[(1)] = (26));

} else {
var statearr_29914_29972 = state_29878__$1;
(statearr_29914_29972[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (34))){
var inst_29854 = (state_29878[(25)]);
var inst_29864 = (state_29878[(2)]);
var inst_29865 = cljs.core.not_empty.call(null,inst_29854);
var state_29878__$1 = (function (){var statearr_29915 = state_29878;
(statearr_29915[(29)] = inst_29864);

return statearr_29915;
})();
if(cljs.core.truth_(inst_29865)){
var statearr_29916_29973 = state_29878__$1;
(statearr_29916_29973[(1)] = (35));

} else {
var statearr_29917_29974 = state_29878__$1;
(statearr_29917_29974[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (17))){
var state_29878__$1 = state_29878;
var statearr_29918_29975 = state_29878__$1;
(statearr_29918_29975[(2)] = recompile_dependents);

(statearr_29918_29975[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (3))){
var state_29878__$1 = state_29878;
var statearr_29919_29976 = state_29878__$1;
(statearr_29919_29976[(2)] = null);

(statearr_29919_29976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (12))){
var inst_29788 = (state_29878[(2)]);
var state_29878__$1 = state_29878;
var statearr_29920_29977 = state_29878__$1;
(statearr_29920_29977[(2)] = inst_29788);

(statearr_29920_29977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (2))){
var inst_29750 = (state_29878[(13)]);
var inst_29757 = cljs.core.seq.call(null,inst_29750);
var inst_29758 = inst_29757;
var inst_29759 = null;
var inst_29760 = (0);
var inst_29761 = (0);
var state_29878__$1 = (function (){var statearr_29921 = state_29878;
(statearr_29921[(7)] = inst_29759);

(statearr_29921[(8)] = inst_29758);

(statearr_29921[(9)] = inst_29760);

(statearr_29921[(10)] = inst_29761);

return statearr_29921;
})();
var statearr_29922_29978 = state_29878__$1;
(statearr_29922_29978[(2)] = null);

(statearr_29922_29978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (23))){
var inst_29815 = (state_29878[(21)]);
var inst_29814 = (state_29878[(22)]);
var inst_29817 = (state_29878[(24)]);
var inst_29811 = (state_29878[(18)]);
var inst_29819 = (state_29878[(23)]);
var inst_29822 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29824 = (function (){var all_files = inst_29811;
var res_SINGLEQUOTE_ = inst_29814;
var res = inst_29815;
var files_not_loaded = inst_29817;
var dependencies_that_loaded = inst_29819;
return (function (p__29823){
var map__29923 = p__29823;
var map__29923__$1 = cljs.core.__destructure_map.call(null,map__29923);
var request_url = cljs.core.get.call(null,map__29923__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29825 = cljs.core.reverse.call(null,inst_29819);
var inst_29826 = cljs.core.map.call(null,inst_29824,inst_29825);
var inst_29827 = cljs.core.pr_str.call(null,inst_29826);
var inst_29828 = figwheel.client.utils.log.call(null,inst_29827);
var state_29878__$1 = (function (){var statearr_29924 = state_29878;
(statearr_29924[(30)] = inst_29822);

return statearr_29924;
})();
var statearr_29925_29979 = state_29878__$1;
(statearr_29925_29979[(2)] = inst_29828);

(statearr_29925_29979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (35))){
var inst_29854 = (state_29878[(25)]);
var inst_29867 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29854);
var inst_29868 = cljs.core.pr_str.call(null,inst_29867);
var inst_29869 = ["not required: ",inst_29868].join('');
var inst_29870 = figwheel.client.utils.log.call(null,inst_29869);
var state_29878__$1 = state_29878;
var statearr_29926_29980 = state_29878__$1;
(statearr_29926_29980[(2)] = inst_29870);

(statearr_29926_29980[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (19))){
var inst_29801 = (state_29878[(12)]);
var inst_29807 = figwheel.client.file_reloading.expand_files.call(null,inst_29801);
var state_29878__$1 = state_29878;
var statearr_29927_29981 = state_29878__$1;
(statearr_29927_29981[(2)] = inst_29807);

(statearr_29927_29981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (11))){
var state_29878__$1 = state_29878;
var statearr_29928_29982 = state_29878__$1;
(statearr_29928_29982[(2)] = null);

(statearr_29928_29982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (9))){
var inst_29790 = (state_29878[(2)]);
var state_29878__$1 = state_29878;
var statearr_29929_29983 = state_29878__$1;
(statearr_29929_29983[(2)] = inst_29790);

(statearr_29929_29983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (5))){
var inst_29760 = (state_29878[(9)]);
var inst_29761 = (state_29878[(10)]);
var inst_29763 = (inst_29761 < inst_29760);
var inst_29764 = inst_29763;
var state_29878__$1 = state_29878;
if(cljs.core.truth_(inst_29764)){
var statearr_29930_29984 = state_29878__$1;
(statearr_29930_29984[(1)] = (7));

} else {
var statearr_29931_29985 = state_29878__$1;
(statearr_29931_29985[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (14))){
var inst_29771 = (state_29878[(20)]);
var inst_29780 = cljs.core.first.call(null,inst_29771);
var inst_29781 = figwheel.client.file_reloading.eval_body.call(null,inst_29780,opts);
var inst_29782 = cljs.core.next.call(null,inst_29771);
var inst_29758 = inst_29782;
var inst_29759 = null;
var inst_29760 = (0);
var inst_29761 = (0);
var state_29878__$1 = (function (){var statearr_29932 = state_29878;
(statearr_29932[(31)] = inst_29781);

(statearr_29932[(7)] = inst_29759);

(statearr_29932[(8)] = inst_29758);

(statearr_29932[(9)] = inst_29760);

(statearr_29932[(10)] = inst_29761);

return statearr_29932;
})();
var statearr_29933_29986 = state_29878__$1;
(statearr_29933_29986[(2)] = null);

(statearr_29933_29986[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (26))){
var inst_29815 = (state_29878[(21)]);
var inst_29814 = (state_29878[(22)]);
var inst_29817 = (state_29878[(24)]);
var inst_29811 = (state_29878[(18)]);
var inst_29819 = (state_29878[(23)]);
var inst_29834 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29836 = (function (){var all_files = inst_29811;
var res_SINGLEQUOTE_ = inst_29814;
var res = inst_29815;
var files_not_loaded = inst_29817;
var dependencies_that_loaded = inst_29819;
return (function (p__29835){
var map__29934 = p__29835;
var map__29934__$1 = cljs.core.__destructure_map.call(null,map__29934);
var namespace = cljs.core.get.call(null,map__29934__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29837 = cljs.core.map.call(null,inst_29836,inst_29815);
var inst_29838 = cljs.core.pr_str.call(null,inst_29837);
var inst_29839 = figwheel.client.utils.log.call(null,inst_29838);
var inst_29840 = (function (){var all_files = inst_29811;
var res_SINGLEQUOTE_ = inst_29814;
var res = inst_29815;
var files_not_loaded = inst_29817;
var dependencies_that_loaded = inst_29819;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29841 = setTimeout(inst_29840,(10));
var state_29878__$1 = (function (){var statearr_29935 = state_29878;
(statearr_29935[(32)] = inst_29839);

(statearr_29935[(33)] = inst_29834);

return statearr_29935;
})();
var statearr_29936_29987 = state_29878__$1;
(statearr_29936_29987[(2)] = inst_29841);

(statearr_29936_29987[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (16))){
var state_29878__$1 = state_29878;
var statearr_29937_29988 = state_29878__$1;
(statearr_29937_29988[(2)] = reload_dependents);

(statearr_29937_29988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (30))){
var state_29878__$1 = state_29878;
var statearr_29938_29989 = state_29878__$1;
(statearr_29938_29989[(2)] = null);

(statearr_29938_29989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (10))){
var inst_29771 = (state_29878[(20)]);
var inst_29773 = cljs.core.chunked_seq_QMARK_.call(null,inst_29771);
var state_29878__$1 = state_29878;
if(inst_29773){
var statearr_29939_29990 = state_29878__$1;
(statearr_29939_29990[(1)] = (13));

} else {
var statearr_29940_29991 = state_29878__$1;
(statearr_29940_29991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (18))){
var inst_29805 = (state_29878[(2)]);
var state_29878__$1 = state_29878;
if(cljs.core.truth_(inst_29805)){
var statearr_29941_29992 = state_29878__$1;
(statearr_29941_29992[(1)] = (19));

} else {
var statearr_29942_29993 = state_29878__$1;
(statearr_29942_29993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (37))){
var inst_29873 = (state_29878[(2)]);
var state_29878__$1 = state_29878;
var statearr_29943_29994 = state_29878__$1;
(statearr_29943_29994[(2)] = inst_29873);

(statearr_29943_29994[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29879 === (8))){
var inst_29771 = (state_29878[(20)]);
var inst_29758 = (state_29878[(8)]);
var inst_29771__$1 = cljs.core.seq.call(null,inst_29758);
var state_29878__$1 = (function (){var statearr_29944 = state_29878;
(statearr_29944[(20)] = inst_29771__$1);

return statearr_29944;
})();
if(inst_29771__$1){
var statearr_29945_29995 = state_29878__$1;
(statearr_29945_29995[(1)] = (10));

} else {
var statearr_29946_29996 = state_29878__$1;
(statearr_29946_29996[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto____0 = (function (){
var statearr_29947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29947[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto__);

(statearr_29947[(1)] = (1));

return statearr_29947;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto____1 = (function (state_29878){
while(true){
var ret_value__25924__auto__ = (function (){try{while(true){
var result__25925__auto__ = switch__25922__auto__.call(null,state_29878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25925__auto__;
}
break;
}
}catch (e29948){if((e29948 instanceof Object)){
var ex__25926__auto__ = e29948;
var statearr_29949_29997 = state_29878;
(statearr_29949_29997[(5)] = ex__25926__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29998 = state_29878;
state_29878 = G__29998;
continue;
} else {
return ret_value__25924__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto__ = function(state_29878){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto____1.call(this,state_29878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25923__auto__;
})()
})();
var state__26019__auto__ = (function (){var statearr_29950 = f__26018__auto__.call(null);
(statearr_29950[(6)] = c__26017__auto__);

return statearr_29950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
}));

return c__26017__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30001,link){
var map__30002 = p__30001;
var map__30002__$1 = cljs.core.__destructure_map.call(null,map__30002);
var file = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29999_SHARP_,p2__30000_SHARP_){
if(cljs.core._EQ_.call(null,p1__29999_SHARP_,p2__30000_SHARP_)){
return p1__29999_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30004){
var map__30005 = p__30004;
var map__30005__$1 = cljs.core.__destructure_map.call(null,map__30005);
var match_length = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30003_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30003_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30006_SHARP_,p2__30007_SHARP_){
return cljs.core.assoc.call(null,p1__30006_SHARP_,cljs.core.get.call(null,p2__30007_SHARP_,key),p2__30007_SHARP_);
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
var loaded_f_datas_30008 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30008);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30008);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30009,p__30010){
var map__30011 = p__30009;
var map__30011__$1 = cljs.core.__destructure_map.call(null,map__30011);
var on_cssload = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30012 = p__30010;
var map__30012__$1 = cljs.core.__destructure_map.call(null,map__30012);
var files_msg = map__30012__$1;
var files = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1717787131343
