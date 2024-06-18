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
var G__28276 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__28276 == null)){
return null;
} else {
return goog.object.get(G__28276,"requires");
}
}):(function (path){
var G__28277 = goog.object.get(goog.dependencies_.requires,path);
if((G__28277 == null)){
return null;
} else {
return goog.object.getKeys(G__28277);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28278_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28278_SHARP_)));
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
var G__28279 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__28279__$1 = (((G__28279 == null))?null:goog.object.get(G__28279,"provides"));
if((G__28279__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28279__$1);
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
var seq__28280 = cljs.core.seq.call(null,provides);
var chunk__28281 = null;
var count__28282 = (0);
var i__28283 = (0);
while(true){
if((i__28283 < count__28282)){
var prov = cljs.core._nth.call(null,chunk__28281,i__28283);
var seq__28292_28304 = cljs.core.seq.call(null,requires);
var chunk__28293_28305 = null;
var count__28294_28306 = (0);
var i__28295_28307 = (0);
while(true){
if((i__28295_28307 < count__28294_28306)){
var req_28308 = cljs.core._nth.call(null,chunk__28293_28305,i__28295_28307);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28308,prov);


var G__28309 = seq__28292_28304;
var G__28310 = chunk__28293_28305;
var G__28311 = count__28294_28306;
var G__28312 = (i__28295_28307 + (1));
seq__28292_28304 = G__28309;
chunk__28293_28305 = G__28310;
count__28294_28306 = G__28311;
i__28295_28307 = G__28312;
continue;
} else {
var temp__5735__auto___28313 = cljs.core.seq.call(null,seq__28292_28304);
if(temp__5735__auto___28313){
var seq__28292_28314__$1 = temp__5735__auto___28313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28292_28314__$1)){
var c__4591__auto___28315 = cljs.core.chunk_first.call(null,seq__28292_28314__$1);
var G__28316 = cljs.core.chunk_rest.call(null,seq__28292_28314__$1);
var G__28317 = c__4591__auto___28315;
var G__28318 = cljs.core.count.call(null,c__4591__auto___28315);
var G__28319 = (0);
seq__28292_28304 = G__28316;
chunk__28293_28305 = G__28317;
count__28294_28306 = G__28318;
i__28295_28307 = G__28319;
continue;
} else {
var req_28320 = cljs.core.first.call(null,seq__28292_28314__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28320,prov);


var G__28321 = cljs.core.next.call(null,seq__28292_28314__$1);
var G__28322 = null;
var G__28323 = (0);
var G__28324 = (0);
seq__28292_28304 = G__28321;
chunk__28293_28305 = G__28322;
count__28294_28306 = G__28323;
i__28295_28307 = G__28324;
continue;
}
} else {
}
}
break;
}


var G__28325 = seq__28280;
var G__28326 = chunk__28281;
var G__28327 = count__28282;
var G__28328 = (i__28283 + (1));
seq__28280 = G__28325;
chunk__28281 = G__28326;
count__28282 = G__28327;
i__28283 = G__28328;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28280);
if(temp__5735__auto__){
var seq__28280__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28280__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__28280__$1);
var G__28329 = cljs.core.chunk_rest.call(null,seq__28280__$1);
var G__28330 = c__4591__auto__;
var G__28331 = cljs.core.count.call(null,c__4591__auto__);
var G__28332 = (0);
seq__28280 = G__28329;
chunk__28281 = G__28330;
count__28282 = G__28331;
i__28283 = G__28332;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28280__$1);
var seq__28296_28333 = cljs.core.seq.call(null,requires);
var chunk__28297_28334 = null;
var count__28298_28335 = (0);
var i__28299_28336 = (0);
while(true){
if((i__28299_28336 < count__28298_28335)){
var req_28337 = cljs.core._nth.call(null,chunk__28297_28334,i__28299_28336);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28337,prov);


var G__28338 = seq__28296_28333;
var G__28339 = chunk__28297_28334;
var G__28340 = count__28298_28335;
var G__28341 = (i__28299_28336 + (1));
seq__28296_28333 = G__28338;
chunk__28297_28334 = G__28339;
count__28298_28335 = G__28340;
i__28299_28336 = G__28341;
continue;
} else {
var temp__5735__auto___28342__$1 = cljs.core.seq.call(null,seq__28296_28333);
if(temp__5735__auto___28342__$1){
var seq__28296_28343__$1 = temp__5735__auto___28342__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28296_28343__$1)){
var c__4591__auto___28344 = cljs.core.chunk_first.call(null,seq__28296_28343__$1);
var G__28345 = cljs.core.chunk_rest.call(null,seq__28296_28343__$1);
var G__28346 = c__4591__auto___28344;
var G__28347 = cljs.core.count.call(null,c__4591__auto___28344);
var G__28348 = (0);
seq__28296_28333 = G__28345;
chunk__28297_28334 = G__28346;
count__28298_28335 = G__28347;
i__28299_28336 = G__28348;
continue;
} else {
var req_28349 = cljs.core.first.call(null,seq__28296_28343__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28349,prov);


var G__28350 = cljs.core.next.call(null,seq__28296_28343__$1);
var G__28351 = null;
var G__28352 = (0);
var G__28353 = (0);
seq__28296_28333 = G__28350;
chunk__28297_28334 = G__28351;
count__28298_28335 = G__28352;
i__28299_28336 = G__28353;
continue;
}
} else {
}
}
break;
}


var G__28354 = cljs.core.next.call(null,seq__28280__$1);
var G__28355 = null;
var G__28356 = (0);
var G__28357 = (0);
seq__28280 = G__28354;
chunk__28281 = G__28355;
count__28282 = G__28356;
i__28283 = G__28357;
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
var seq__28300 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28301 = null;
var count__28302 = (0);
var i__28303 = (0);
while(true){
if((i__28303 < count__28302)){
var prov = cljs.core._nth.call(null,chunk__28301,i__28303);
goog.object.forEach(deps,((function (seq__28300,chunk__28301,count__28302,i__28303,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28300,chunk__28301,count__28302,i__28303,prov,requires))
);


var G__28358 = seq__28300;
var G__28359 = chunk__28301;
var G__28360 = count__28302;
var G__28361 = (i__28303 + (1));
seq__28300 = G__28358;
chunk__28301 = G__28359;
count__28302 = G__28360;
i__28303 = G__28361;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28300);
if(temp__5735__auto__){
var seq__28300__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28300__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__28300__$1);
var G__28362 = cljs.core.chunk_rest.call(null,seq__28300__$1);
var G__28363 = c__4591__auto__;
var G__28364 = cljs.core.count.call(null,c__4591__auto__);
var G__28365 = (0);
seq__28300 = G__28362;
chunk__28301 = G__28363;
count__28302 = G__28364;
i__28303 = G__28365;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28300__$1);
goog.object.forEach(deps,((function (seq__28300,chunk__28301,count__28302,i__28303,prov,seq__28300__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28300,chunk__28301,count__28302,i__28303,prov,seq__28300__$1,temp__5735__auto__,requires))
);


var G__28366 = cljs.core.next.call(null,seq__28300__$1);
var G__28367 = null;
var G__28368 = (0);
var G__28369 = (0);
seq__28300 = G__28366;
chunk__28301 = G__28367;
count__28302 = G__28368;
i__28303 = G__28369;
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
return cljs.core.some.call(null,(function (p__28370){
var vec__28371 = p__28370;
var _ = cljs.core.nth.call(null,vec__28371,(0),null);
var v = cljs.core.nth.call(null,vec__28371,(1),null);
var and__4149__auto__ = v;
if(cljs.core.truth_(and__4149__auto__)){
return v.call(null,dep);
} else {
return and__4149__auto__;
}
}),cljs.core.filter.call(null,(function (p__28374){
var vec__28375 = p__28374;
var k = cljs.core.nth.call(null,vec__28375,(0),null);
var v = cljs.core.nth.call(null,vec__28375,(1),null);
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

var seq__28387_28395 = cljs.core.seq.call(null,deps);
var chunk__28388_28396 = null;
var count__28389_28397 = (0);
var i__28390_28398 = (0);
while(true){
if((i__28390_28398 < count__28389_28397)){
var dep_28399 = cljs.core._nth.call(null,chunk__28388_28396,i__28390_28398);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_28399;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28399));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28399,(depth + (1)),state);
} else {
}


var G__28400 = seq__28387_28395;
var G__28401 = chunk__28388_28396;
var G__28402 = count__28389_28397;
var G__28403 = (i__28390_28398 + (1));
seq__28387_28395 = G__28400;
chunk__28388_28396 = G__28401;
count__28389_28397 = G__28402;
i__28390_28398 = G__28403;
continue;
} else {
var temp__5735__auto___28404 = cljs.core.seq.call(null,seq__28387_28395);
if(temp__5735__auto___28404){
var seq__28387_28405__$1 = temp__5735__auto___28404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28387_28405__$1)){
var c__4591__auto___28406 = cljs.core.chunk_first.call(null,seq__28387_28405__$1);
var G__28407 = cljs.core.chunk_rest.call(null,seq__28387_28405__$1);
var G__28408 = c__4591__auto___28406;
var G__28409 = cljs.core.count.call(null,c__4591__auto___28406);
var G__28410 = (0);
seq__28387_28395 = G__28407;
chunk__28388_28396 = G__28408;
count__28389_28397 = G__28409;
i__28390_28398 = G__28410;
continue;
} else {
var dep_28411 = cljs.core.first.call(null,seq__28387_28405__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_28411;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28411));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28411,(depth + (1)),state);
} else {
}


var G__28412 = cljs.core.next.call(null,seq__28387_28405__$1);
var G__28413 = null;
var G__28414 = (0);
var G__28415 = (0);
seq__28387_28395 = G__28412;
chunk__28388_28396 = G__28413;
count__28389_28397 = G__28414;
i__28390_28398 = G__28415;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28391){
var vec__28392 = p__28391;
var seq__28393 = cljs.core.seq.call(null,vec__28392);
var first__28394 = cljs.core.first.call(null,seq__28393);
var seq__28393__$1 = cljs.core.next.call(null,seq__28393);
var x = first__28394;
var xs = seq__28393__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28378_SHARP_){
return clojure.set.difference.call(null,p1__28378_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28416_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28416_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28417 = cljs.core.seq.call(null,provides);
var chunk__28418 = null;
var count__28419 = (0);
var i__28420 = (0);
while(true){
if((i__28420 < count__28419)){
var prov = cljs.core._nth.call(null,chunk__28418,i__28420);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28429_28437 = cljs.core.seq.call(null,requires);
var chunk__28430_28438 = null;
var count__28431_28439 = (0);
var i__28432_28440 = (0);
while(true){
if((i__28432_28440 < count__28431_28439)){
var req_28441 = cljs.core._nth.call(null,chunk__28430_28438,i__28432_28440);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28441,prov);


var G__28442 = seq__28429_28437;
var G__28443 = chunk__28430_28438;
var G__28444 = count__28431_28439;
var G__28445 = (i__28432_28440 + (1));
seq__28429_28437 = G__28442;
chunk__28430_28438 = G__28443;
count__28431_28439 = G__28444;
i__28432_28440 = G__28445;
continue;
} else {
var temp__5735__auto___28446 = cljs.core.seq.call(null,seq__28429_28437);
if(temp__5735__auto___28446){
var seq__28429_28447__$1 = temp__5735__auto___28446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28429_28447__$1)){
var c__4591__auto___28448 = cljs.core.chunk_first.call(null,seq__28429_28447__$1);
var G__28449 = cljs.core.chunk_rest.call(null,seq__28429_28447__$1);
var G__28450 = c__4591__auto___28448;
var G__28451 = cljs.core.count.call(null,c__4591__auto___28448);
var G__28452 = (0);
seq__28429_28437 = G__28449;
chunk__28430_28438 = G__28450;
count__28431_28439 = G__28451;
i__28432_28440 = G__28452;
continue;
} else {
var req_28453 = cljs.core.first.call(null,seq__28429_28447__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28453,prov);


var G__28454 = cljs.core.next.call(null,seq__28429_28447__$1);
var G__28455 = null;
var G__28456 = (0);
var G__28457 = (0);
seq__28429_28437 = G__28454;
chunk__28430_28438 = G__28455;
count__28431_28439 = G__28456;
i__28432_28440 = G__28457;
continue;
}
} else {
}
}
break;
}


var G__28458 = seq__28417;
var G__28459 = chunk__28418;
var G__28460 = count__28419;
var G__28461 = (i__28420 + (1));
seq__28417 = G__28458;
chunk__28418 = G__28459;
count__28419 = G__28460;
i__28420 = G__28461;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28417);
if(temp__5735__auto__){
var seq__28417__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28417__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__28417__$1);
var G__28462 = cljs.core.chunk_rest.call(null,seq__28417__$1);
var G__28463 = c__4591__auto__;
var G__28464 = cljs.core.count.call(null,c__4591__auto__);
var G__28465 = (0);
seq__28417 = G__28462;
chunk__28418 = G__28463;
count__28419 = G__28464;
i__28420 = G__28465;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28417__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28433_28466 = cljs.core.seq.call(null,requires);
var chunk__28434_28467 = null;
var count__28435_28468 = (0);
var i__28436_28469 = (0);
while(true){
if((i__28436_28469 < count__28435_28468)){
var req_28470 = cljs.core._nth.call(null,chunk__28434_28467,i__28436_28469);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28470,prov);


var G__28471 = seq__28433_28466;
var G__28472 = chunk__28434_28467;
var G__28473 = count__28435_28468;
var G__28474 = (i__28436_28469 + (1));
seq__28433_28466 = G__28471;
chunk__28434_28467 = G__28472;
count__28435_28468 = G__28473;
i__28436_28469 = G__28474;
continue;
} else {
var temp__5735__auto___28475__$1 = cljs.core.seq.call(null,seq__28433_28466);
if(temp__5735__auto___28475__$1){
var seq__28433_28476__$1 = temp__5735__auto___28475__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28433_28476__$1)){
var c__4591__auto___28477 = cljs.core.chunk_first.call(null,seq__28433_28476__$1);
var G__28478 = cljs.core.chunk_rest.call(null,seq__28433_28476__$1);
var G__28479 = c__4591__auto___28477;
var G__28480 = cljs.core.count.call(null,c__4591__auto___28477);
var G__28481 = (0);
seq__28433_28466 = G__28478;
chunk__28434_28467 = G__28479;
count__28435_28468 = G__28480;
i__28436_28469 = G__28481;
continue;
} else {
var req_28482 = cljs.core.first.call(null,seq__28433_28476__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28482,prov);


var G__28483 = cljs.core.next.call(null,seq__28433_28476__$1);
var G__28484 = null;
var G__28485 = (0);
var G__28486 = (0);
seq__28433_28466 = G__28483;
chunk__28434_28467 = G__28484;
count__28435_28468 = G__28485;
i__28436_28469 = G__28486;
continue;
}
} else {
}
}
break;
}


var G__28487 = cljs.core.next.call(null,seq__28417__$1);
var G__28488 = null;
var G__28489 = (0);
var G__28490 = (0);
seq__28417 = G__28487;
chunk__28418 = G__28488;
count__28419 = G__28489;
i__28420 = G__28490;
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
var seq__28491_28495 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28492_28496 = null;
var count__28493_28497 = (0);
var i__28494_28498 = (0);
while(true){
if((i__28494_28498 < count__28493_28497)){
var ns_28499 = cljs.core._nth.call(null,chunk__28492_28496,i__28494_28498);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28499);


var G__28500 = seq__28491_28495;
var G__28501 = chunk__28492_28496;
var G__28502 = count__28493_28497;
var G__28503 = (i__28494_28498 + (1));
seq__28491_28495 = G__28500;
chunk__28492_28496 = G__28501;
count__28493_28497 = G__28502;
i__28494_28498 = G__28503;
continue;
} else {
var temp__5735__auto___28504 = cljs.core.seq.call(null,seq__28491_28495);
if(temp__5735__auto___28504){
var seq__28491_28505__$1 = temp__5735__auto___28504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28491_28505__$1)){
var c__4591__auto___28506 = cljs.core.chunk_first.call(null,seq__28491_28505__$1);
var G__28507 = cljs.core.chunk_rest.call(null,seq__28491_28505__$1);
var G__28508 = c__4591__auto___28506;
var G__28509 = cljs.core.count.call(null,c__4591__auto___28506);
var G__28510 = (0);
seq__28491_28495 = G__28507;
chunk__28492_28496 = G__28508;
count__28493_28497 = G__28509;
i__28494_28498 = G__28510;
continue;
} else {
var ns_28511 = cljs.core.first.call(null,seq__28491_28505__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28511);


var G__28512 = cljs.core.next.call(null,seq__28491_28505__$1);
var G__28513 = null;
var G__28514 = (0);
var G__28515 = (0);
seq__28491_28495 = G__28512;
chunk__28492_28496 = G__28513;
count__28493_28497 = G__28514;
i__28494_28498 = G__28515;
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
var G__28516__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28517__i = 0, G__28517__a = new Array(arguments.length -  0);
while (G__28517__i < G__28517__a.length) {G__28517__a[G__28517__i] = arguments[G__28517__i + 0]; ++G__28517__i;}
  args = new cljs.core.IndexedSeq(G__28517__a,0,null);
} 
return G__28516__delegate.call(this,args);};
G__28516.cljs$lang$maxFixedArity = 0;
G__28516.cljs$lang$applyTo = (function (arglist__28518){
var args = cljs.core.seq(arglist__28518);
return G__28516__delegate(args);
});
G__28516.cljs$core$IFn$_invoke$arity$variadic = G__28516__delegate;
return G__28516;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28519_SHARP_,p2__28520_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28519_SHARP_)),p2__28520_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28521_SHARP_,p2__28522_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28521_SHARP_),p2__28522_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28523 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28523.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28523.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28523;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28524){if((e28524 instanceof Error)){
var e = e28524;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28524;

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
}catch (e28525){if((e28525 instanceof Error)){
var e = e28525;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28525;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28526 = cljs.core._EQ_;
var expr__28527 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28526.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28527))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28526.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28527))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28526.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28527))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28529,callback){
var map__28530 = p__28529;
var map__28530__$1 = cljs.core.__destructure_map.call(null,map__28530);
var file_msg = map__28530__$1;
var request_url = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_28567){
var state_val_28568 = (state_28567[(1)]);
if((state_val_28568 === (7))){
var inst_28563 = (state_28567[(2)]);
var state_28567__$1 = state_28567;
var statearr_28569_28595 = state_28567__$1;
(statearr_28569_28595[(2)] = inst_28563);

(statearr_28569_28595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (1))){
var state_28567__$1 = state_28567;
var statearr_28570_28596 = state_28567__$1;
(statearr_28570_28596[(2)] = null);

(statearr_28570_28596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (4))){
var inst_28533 = (state_28567[(7)]);
var inst_28533__$1 = (state_28567[(2)]);
var state_28567__$1 = (function (){var statearr_28571 = state_28567;
(statearr_28571[(7)] = inst_28533__$1);

return statearr_28571;
})();
if(cljs.core.truth_(inst_28533__$1)){
var statearr_28572_28597 = state_28567__$1;
(statearr_28572_28597[(1)] = (5));

} else {
var statearr_28573_28598 = state_28567__$1;
(statearr_28573_28598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (15))){
var inst_28548 = (state_28567[(8)]);
var inst_28546 = (state_28567[(9)]);
var inst_28550 = inst_28548.call(null,inst_28546);
var state_28567__$1 = state_28567;
var statearr_28574_28599 = state_28567__$1;
(statearr_28574_28599[(2)] = inst_28550);

(statearr_28574_28599[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (13))){
var inst_28557 = (state_28567[(2)]);
var state_28567__$1 = state_28567;
var statearr_28575_28600 = state_28567__$1;
(statearr_28575_28600[(2)] = inst_28557);

(statearr_28575_28600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (6))){
var state_28567__$1 = state_28567;
var statearr_28576_28601 = state_28567__$1;
(statearr_28576_28601[(2)] = null);

(statearr_28576_28601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (17))){
var inst_28554 = (state_28567[(2)]);
var state_28567__$1 = state_28567;
var statearr_28577_28602 = state_28567__$1;
(statearr_28577_28602[(2)] = inst_28554);

(statearr_28577_28602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (3))){
var inst_28565 = (state_28567[(2)]);
var state_28567__$1 = state_28567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28567__$1,inst_28565);
} else {
if((state_val_28568 === (12))){
var state_28567__$1 = state_28567;
var statearr_28578_28603 = state_28567__$1;
(statearr_28578_28603[(2)] = null);

(statearr_28578_28603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (2))){
var state_28567__$1 = state_28567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28567__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28568 === (11))){
var inst_28538 = (state_28567[(10)]);
var inst_28544 = figwheel.client.file_reloading.blocking_load.call(null,inst_28538);
var state_28567__$1 = state_28567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28567__$1,(14),inst_28544);
} else {
if((state_val_28568 === (9))){
var inst_28538 = (state_28567[(10)]);
var state_28567__$1 = state_28567;
if(cljs.core.truth_(inst_28538)){
var statearr_28579_28604 = state_28567__$1;
(statearr_28579_28604[(1)] = (11));

} else {
var statearr_28580_28605 = state_28567__$1;
(statearr_28580_28605[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (5))){
var inst_28539 = (state_28567[(11)]);
var inst_28533 = (state_28567[(7)]);
var inst_28538 = cljs.core.nth.call(null,inst_28533,(0),null);
var inst_28539__$1 = cljs.core.nth.call(null,inst_28533,(1),null);
var state_28567__$1 = (function (){var statearr_28581 = state_28567;
(statearr_28581[(10)] = inst_28538);

(statearr_28581[(11)] = inst_28539__$1);

return statearr_28581;
})();
if(cljs.core.truth_(inst_28539__$1)){
var statearr_28582_28606 = state_28567__$1;
(statearr_28582_28606[(1)] = (8));

} else {
var statearr_28583_28607 = state_28567__$1;
(statearr_28583_28607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (14))){
var inst_28538 = (state_28567[(10)]);
var inst_28548 = (state_28567[(8)]);
var inst_28546 = (state_28567[(2)]);
var inst_28547 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28548__$1 = cljs.core.get.call(null,inst_28547,inst_28538);
var state_28567__$1 = (function (){var statearr_28584 = state_28567;
(statearr_28584[(8)] = inst_28548__$1);

(statearr_28584[(9)] = inst_28546);

return statearr_28584;
})();
if(cljs.core.truth_(inst_28548__$1)){
var statearr_28585_28608 = state_28567__$1;
(statearr_28585_28608[(1)] = (15));

} else {
var statearr_28586_28609 = state_28567__$1;
(statearr_28586_28609[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (16))){
var inst_28546 = (state_28567[(9)]);
var inst_28552 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28546);
var state_28567__$1 = state_28567;
var statearr_28587_28610 = state_28567__$1;
(statearr_28587_28610[(2)] = inst_28552);

(statearr_28587_28610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (10))){
var inst_28559 = (state_28567[(2)]);
var state_28567__$1 = (function (){var statearr_28588 = state_28567;
(statearr_28588[(12)] = inst_28559);

return statearr_28588;
})();
var statearr_28589_28611 = state_28567__$1;
(statearr_28589_28611[(2)] = null);

(statearr_28589_28611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28568 === (8))){
var inst_28539 = (state_28567[(11)]);
var inst_28541 = eval(inst_28539);
var state_28567__$1 = state_28567;
var statearr_28590_28612 = state_28567__$1;
(statearr_28590_28612[(2)] = inst_28541);

(statearr_28590_28612[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__24878__auto__ = null;
var figwheel$client$file_reloading$state_machine__24878__auto____0 = (function (){
var statearr_28591 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28591[(0)] = figwheel$client$file_reloading$state_machine__24878__auto__);

(statearr_28591[(1)] = (1));

return statearr_28591;
});
var figwheel$client$file_reloading$state_machine__24878__auto____1 = (function (state_28567){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_28567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e28592){if((e28592 instanceof Object)){
var ex__24881__auto__ = e28592;
var statearr_28593_28613 = state_28567;
(statearr_28593_28613[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28614 = state_28567;
state_28567 = G__28614;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24878__auto__ = function(state_28567){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24878__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24878__auto____1.call(this,state_28567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24878__auto____0;
figwheel$client$file_reloading$state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24878__auto____1;
return figwheel$client$file_reloading$state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_28594 = f__24973__auto__.call(null);
(statearr_28594[(6)] = c__24972__auto__);

return statearr_28594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));

return c__24972__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28616 = arguments.length;
switch (G__28616) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28618,callback){
var map__28619 = p__28618;
var map__28619__$1 = cljs.core.__destructure_map.call(null,map__28619);
var file_msg = map__28619__$1;
var namespace = cljs.core.get.call(null,map__28619__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28620){
var map__28621 = p__28620;
var map__28621__$1 = cljs.core.__destructure_map.call(null,map__28621);
var file_msg = map__28621__$1;
var namespace = cljs.core.get.call(null,map__28621__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28622){
var map__28623 = p__28622;
var map__28623__$1 = cljs.core.__destructure_map.call(null,map__28623);
var file_msg = map__28623__$1;
var namespace = cljs.core.get.call(null,map__28623__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28624,callback){
var map__28625 = p__28624;
var map__28625__$1 = cljs.core.__destructure_map.call(null,map__28625);
var file_msg = map__28625__$1;
var request_url = cljs.core.get.call(null,map__28625__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28625__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24972__auto___28674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_28659){
var state_val_28660 = (state_28659[(1)]);
if((state_val_28660 === (1))){
var inst_28633 = cljs.core.seq.call(null,files);
var inst_28634 = cljs.core.first.call(null,inst_28633);
var inst_28635 = cljs.core.next.call(null,inst_28633);
var inst_28636 = files;
var state_28659__$1 = (function (){var statearr_28661 = state_28659;
(statearr_28661[(7)] = inst_28636);

(statearr_28661[(8)] = inst_28635);

(statearr_28661[(9)] = inst_28634);

return statearr_28661;
})();
var statearr_28662_28675 = state_28659__$1;
(statearr_28662_28675[(2)] = null);

(statearr_28662_28675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (2))){
var inst_28642 = (state_28659[(10)]);
var inst_28636 = (state_28659[(7)]);
var inst_28641 = cljs.core.seq.call(null,inst_28636);
var inst_28642__$1 = cljs.core.first.call(null,inst_28641);
var inst_28643 = cljs.core.next.call(null,inst_28641);
var inst_28644 = (inst_28642__$1 == null);
var inst_28645 = cljs.core.not.call(null,inst_28644);
var state_28659__$1 = (function (){var statearr_28663 = state_28659;
(statearr_28663[(10)] = inst_28642__$1);

(statearr_28663[(11)] = inst_28643);

return statearr_28663;
})();
if(inst_28645){
var statearr_28664_28676 = state_28659__$1;
(statearr_28664_28676[(1)] = (4));

} else {
var statearr_28665_28677 = state_28659__$1;
(statearr_28665_28677[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (3))){
var inst_28657 = (state_28659[(2)]);
var state_28659__$1 = state_28659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28659__$1,inst_28657);
} else {
if((state_val_28660 === (4))){
var inst_28642 = (state_28659[(10)]);
var inst_28647 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28642);
var state_28659__$1 = state_28659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28659__$1,(7),inst_28647);
} else {
if((state_val_28660 === (5))){
var inst_28653 = cljs.core.async.close_BANG_.call(null,out);
var state_28659__$1 = state_28659;
var statearr_28666_28678 = state_28659__$1;
(statearr_28666_28678[(2)] = inst_28653);

(statearr_28666_28678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (6))){
var inst_28655 = (state_28659[(2)]);
var state_28659__$1 = state_28659;
var statearr_28667_28679 = state_28659__$1;
(statearr_28667_28679[(2)] = inst_28655);

(statearr_28667_28679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (7))){
var inst_28643 = (state_28659[(11)]);
var inst_28649 = (state_28659[(2)]);
var inst_28650 = cljs.core.async.put_BANG_.call(null,out,inst_28649);
var inst_28636 = inst_28643;
var state_28659__$1 = (function (){var statearr_28668 = state_28659;
(statearr_28668[(7)] = inst_28636);

(statearr_28668[(12)] = inst_28650);

return statearr_28668;
})();
var statearr_28669_28680 = state_28659__$1;
(statearr_28669_28680[(2)] = null);

(statearr_28669_28680[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto____0 = (function (){
var statearr_28670 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28670[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto__);

(statearr_28670[(1)] = (1));

return statearr_28670;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto____1 = (function (state_28659){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_28659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e28671){if((e28671 instanceof Object)){
var ex__24881__auto__ = e28671;
var statearr_28672_28681 = state_28659;
(statearr_28672_28681[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28682 = state_28659;
state_28659 = G__28682;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto__ = function(state_28659){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto____1.call(this,state_28659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_28673 = f__24973__auto__.call(null);
(statearr_28673[(6)] = c__24972__auto___28674);

return statearr_28673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28683,opts){
var map__28684 = p__28683;
var map__28684__$1 = cljs.core.__destructure_map.call(null,map__28684);
var eval_body = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28685){var e = e28685;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28686_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28686_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28687){
var vec__28688 = p__28687;
var k = cljs.core.nth.call(null,vec__28688,(0),null);
var v = cljs.core.nth.call(null,vec__28688,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28691){
var vec__28692 = p__28691;
var k = cljs.core.nth.call(null,vec__28692,(0),null);
var v = cljs.core.nth.call(null,vec__28692,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28698,p__28699){
var map__28700 = p__28698;
var map__28700__$1 = cljs.core.__destructure_map.call(null,map__28700);
var opts = map__28700__$1;
var before_jsload = cljs.core.get.call(null,map__28700__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28700__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28700__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28701 = p__28699;
var map__28701__$1 = cljs.core.__destructure_map.call(null,map__28701);
var msg = map__28701__$1;
var files = cljs.core.get.call(null,map__28701__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28701__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28701__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_28833){
var state_val_28834 = (state_28833[(1)]);
if((state_val_28834 === (7))){
var inst_28715 = (state_28833[(7)]);
var inst_28713 = (state_28833[(8)]);
var inst_28714 = (state_28833[(9)]);
var inst_28716 = (state_28833[(10)]);
var inst_28721 = cljs.core._nth.call(null,inst_28714,inst_28716);
var inst_28722 = figwheel.client.file_reloading.eval_body.call(null,inst_28721,opts);
var inst_28723 = (inst_28716 + (1));
var tmp28835 = inst_28715;
var tmp28836 = inst_28713;
var tmp28837 = inst_28714;
var inst_28713__$1 = tmp28836;
var inst_28714__$1 = tmp28837;
var inst_28715__$1 = tmp28835;
var inst_28716__$1 = inst_28723;
var state_28833__$1 = (function (){var statearr_28838 = state_28833;
(statearr_28838[(7)] = inst_28715__$1);

(statearr_28838[(8)] = inst_28713__$1);

(statearr_28838[(9)] = inst_28714__$1);

(statearr_28838[(11)] = inst_28722);

(statearr_28838[(10)] = inst_28716__$1);

return statearr_28838;
})();
var statearr_28839_28906 = state_28833__$1;
(statearr_28839_28906[(2)] = null);

(statearr_28839_28906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (20))){
var inst_28756 = (state_28833[(12)]);
var inst_28764 = figwheel.client.file_reloading.sort_files.call(null,inst_28756);
var state_28833__$1 = state_28833;
var statearr_28840_28907 = state_28833__$1;
(statearr_28840_28907[(2)] = inst_28764);

(statearr_28840_28907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (27))){
var state_28833__$1 = state_28833;
var statearr_28841_28908 = state_28833__$1;
(statearr_28841_28908[(2)] = null);

(statearr_28841_28908[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (1))){
var inst_28705 = (state_28833[(13)]);
var inst_28702 = before_jsload.call(null,files);
var inst_28703 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28704 = (function (){return (function (p1__28695_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28695_SHARP_);
});
})();
var inst_28705__$1 = cljs.core.filter.call(null,inst_28704,files);
var inst_28706 = cljs.core.not_empty.call(null,inst_28705__$1);
var state_28833__$1 = (function (){var statearr_28842 = state_28833;
(statearr_28842[(14)] = inst_28702);

(statearr_28842[(13)] = inst_28705__$1);

(statearr_28842[(15)] = inst_28703);

return statearr_28842;
})();
if(cljs.core.truth_(inst_28706)){
var statearr_28843_28909 = state_28833__$1;
(statearr_28843_28909[(1)] = (2));

} else {
var statearr_28844_28910 = state_28833__$1;
(statearr_28844_28910[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (24))){
var state_28833__$1 = state_28833;
var statearr_28845_28911 = state_28833__$1;
(statearr_28845_28911[(2)] = null);

(statearr_28845_28911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (4))){
var inst_28750 = (state_28833[(2)]);
var inst_28751 = cljs.core.List.EMPTY;
var inst_28752 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28751);
var inst_28753 = (function (){return (function (p1__28696_SHARP_){
var and__4149__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28696_SHARP_);
if(cljs.core.truth_(and__4149__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28696_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28696_SHARP_))));
} else {
return and__4149__auto__;
}
});
})();
var inst_28754 = cljs.core.filter.call(null,inst_28753,files);
var inst_28755 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28756 = cljs.core.concat.call(null,inst_28754,inst_28755);
var state_28833__$1 = (function (){var statearr_28846 = state_28833;
(statearr_28846[(12)] = inst_28756);

(statearr_28846[(16)] = inst_28750);

(statearr_28846[(17)] = inst_28752);

return statearr_28846;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28847_28912 = state_28833__$1;
(statearr_28847_28912[(1)] = (16));

} else {
var statearr_28848_28913 = state_28833__$1;
(statearr_28848_28913[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (15))){
var inst_28740 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28849_28914 = state_28833__$1;
(statearr_28849_28914[(2)] = inst_28740);

(statearr_28849_28914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (21))){
var inst_28766 = (state_28833[(18)]);
var inst_28766__$1 = (state_28833[(2)]);
var inst_28767 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28766__$1);
var state_28833__$1 = (function (){var statearr_28850 = state_28833;
(statearr_28850[(18)] = inst_28766__$1);

return statearr_28850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28833__$1,(22),inst_28767);
} else {
if((state_val_28834 === (31))){
var inst_28831 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28833__$1,inst_28831);
} else {
if((state_val_28834 === (32))){
var inst_28808 = (state_28833[(19)]);
var inst_28812 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28813 = cljs.core.map.call(null,inst_28812,inst_28808);
var inst_28814 = cljs.core.pr_str.call(null,inst_28813);
var inst_28815 = ["figwheel-no-load meta-data: ",inst_28814].join('');
var inst_28816 = figwheel.client.utils.log.call(null,inst_28815);
var state_28833__$1 = state_28833;
var statearr_28851_28915 = state_28833__$1;
(statearr_28851_28915[(2)] = inst_28816);

(statearr_28851_28915[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (33))){
var state_28833__$1 = state_28833;
var statearr_28852_28916 = state_28833__$1;
(statearr_28852_28916[(2)] = null);

(statearr_28852_28916[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (13))){
var inst_28726 = (state_28833[(20)]);
var inst_28730 = cljs.core.chunk_first.call(null,inst_28726);
var inst_28731 = cljs.core.chunk_rest.call(null,inst_28726);
var inst_28732 = cljs.core.count.call(null,inst_28730);
var inst_28713 = inst_28731;
var inst_28714 = inst_28730;
var inst_28715 = inst_28732;
var inst_28716 = (0);
var state_28833__$1 = (function (){var statearr_28853 = state_28833;
(statearr_28853[(7)] = inst_28715);

(statearr_28853[(8)] = inst_28713);

(statearr_28853[(9)] = inst_28714);

(statearr_28853[(10)] = inst_28716);

return statearr_28853;
})();
var statearr_28854_28917 = state_28833__$1;
(statearr_28854_28917[(2)] = null);

(statearr_28854_28917[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (22))){
var inst_28770 = (state_28833[(21)]);
var inst_28769 = (state_28833[(22)]);
var inst_28774 = (state_28833[(23)]);
var inst_28766 = (state_28833[(18)]);
var inst_28769__$1 = (state_28833[(2)]);
var inst_28770__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28769__$1);
var inst_28771 = (function (){var all_files = inst_28766;
var res_SINGLEQUOTE_ = inst_28769__$1;
var res = inst_28770__$1;
return (function (p1__28697_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28697_SHARP_));
});
})();
var inst_28772 = cljs.core.filter.call(null,inst_28771,inst_28769__$1);
var inst_28773 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28774__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28773);
var inst_28775 = cljs.core.not_empty.call(null,inst_28774__$1);
var state_28833__$1 = (function (){var statearr_28855 = state_28833;
(statearr_28855[(21)] = inst_28770__$1);

(statearr_28855[(22)] = inst_28769__$1);

(statearr_28855[(23)] = inst_28774__$1);

(statearr_28855[(24)] = inst_28772);

return statearr_28855;
})();
if(cljs.core.truth_(inst_28775)){
var statearr_28856_28918 = state_28833__$1;
(statearr_28856_28918[(1)] = (23));

} else {
var statearr_28857_28919 = state_28833__$1;
(statearr_28857_28919[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (36))){
var state_28833__$1 = state_28833;
var statearr_28858_28920 = state_28833__$1;
(statearr_28858_28920[(2)] = null);

(statearr_28858_28920[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (29))){
var inst_28770 = (state_28833[(21)]);
var inst_28769 = (state_28833[(22)]);
var inst_28774 = (state_28833[(23)]);
var inst_28772 = (state_28833[(24)]);
var inst_28808 = (state_28833[(19)]);
var inst_28766 = (state_28833[(18)]);
var inst_28802 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28805 = (function (){var all_files = inst_28766;
var res_SINGLEQUOTE_ = inst_28769;
var res = inst_28770;
var files_not_loaded = inst_28772;
var dependencies_that_loaded = inst_28774;
return (function (p__28804){
var map__28859 = p__28804;
var map__28859__$1 = cljs.core.__destructure_map.call(null,map__28859);
var namespace = cljs.core.get.call(null,map__28859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_28806 = cljs.core.group_by.call(null,inst_28805,inst_28772);
var inst_28807 = cljs.core.__destructure_map.call(null,inst_28806);
var inst_28808__$1 = cljs.core.get.call(null,inst_28807,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28809 = cljs.core.get.call(null,inst_28807,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28810 = cljs.core.not_empty.call(null,inst_28808__$1);
var state_28833__$1 = (function (){var statearr_28860 = state_28833;
(statearr_28860[(25)] = inst_28809);

(statearr_28860[(26)] = inst_28802);

(statearr_28860[(19)] = inst_28808__$1);

return statearr_28860;
})();
if(cljs.core.truth_(inst_28810)){
var statearr_28861_28921 = state_28833__$1;
(statearr_28861_28921[(1)] = (32));

} else {
var statearr_28862_28922 = state_28833__$1;
(statearr_28862_28922[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (6))){
var inst_28747 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28863_28923 = state_28833__$1;
(statearr_28863_28923[(2)] = inst_28747);

(statearr_28863_28923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (28))){
var inst_28772 = (state_28833[(24)]);
var inst_28799 = (state_28833[(2)]);
var inst_28800 = cljs.core.not_empty.call(null,inst_28772);
var state_28833__$1 = (function (){var statearr_28864 = state_28833;
(statearr_28864[(27)] = inst_28799);

return statearr_28864;
})();
if(cljs.core.truth_(inst_28800)){
var statearr_28865_28924 = state_28833__$1;
(statearr_28865_28924[(1)] = (29));

} else {
var statearr_28866_28925 = state_28833__$1;
(statearr_28866_28925[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (25))){
var inst_28770 = (state_28833[(21)]);
var inst_28786 = (state_28833[(2)]);
var inst_28787 = cljs.core.not_empty.call(null,inst_28770);
var state_28833__$1 = (function (){var statearr_28867 = state_28833;
(statearr_28867[(28)] = inst_28786);

return statearr_28867;
})();
if(cljs.core.truth_(inst_28787)){
var statearr_28868_28926 = state_28833__$1;
(statearr_28868_28926[(1)] = (26));

} else {
var statearr_28869_28927 = state_28833__$1;
(statearr_28869_28927[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (34))){
var inst_28809 = (state_28833[(25)]);
var inst_28819 = (state_28833[(2)]);
var inst_28820 = cljs.core.not_empty.call(null,inst_28809);
var state_28833__$1 = (function (){var statearr_28870 = state_28833;
(statearr_28870[(29)] = inst_28819);

return statearr_28870;
})();
if(cljs.core.truth_(inst_28820)){
var statearr_28871_28928 = state_28833__$1;
(statearr_28871_28928[(1)] = (35));

} else {
var statearr_28872_28929 = state_28833__$1;
(statearr_28872_28929[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (17))){
var state_28833__$1 = state_28833;
var statearr_28873_28930 = state_28833__$1;
(statearr_28873_28930[(2)] = recompile_dependents);

(statearr_28873_28930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (3))){
var state_28833__$1 = state_28833;
var statearr_28874_28931 = state_28833__$1;
(statearr_28874_28931[(2)] = null);

(statearr_28874_28931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (12))){
var inst_28743 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28875_28932 = state_28833__$1;
(statearr_28875_28932[(2)] = inst_28743);

(statearr_28875_28932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (2))){
var inst_28705 = (state_28833[(13)]);
var inst_28712 = cljs.core.seq.call(null,inst_28705);
var inst_28713 = inst_28712;
var inst_28714 = null;
var inst_28715 = (0);
var inst_28716 = (0);
var state_28833__$1 = (function (){var statearr_28876 = state_28833;
(statearr_28876[(7)] = inst_28715);

(statearr_28876[(8)] = inst_28713);

(statearr_28876[(9)] = inst_28714);

(statearr_28876[(10)] = inst_28716);

return statearr_28876;
})();
var statearr_28877_28933 = state_28833__$1;
(statearr_28877_28933[(2)] = null);

(statearr_28877_28933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (23))){
var inst_28770 = (state_28833[(21)]);
var inst_28769 = (state_28833[(22)]);
var inst_28774 = (state_28833[(23)]);
var inst_28772 = (state_28833[(24)]);
var inst_28766 = (state_28833[(18)]);
var inst_28777 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28779 = (function (){var all_files = inst_28766;
var res_SINGLEQUOTE_ = inst_28769;
var res = inst_28770;
var files_not_loaded = inst_28772;
var dependencies_that_loaded = inst_28774;
return (function (p__28778){
var map__28878 = p__28778;
var map__28878__$1 = cljs.core.__destructure_map.call(null,map__28878);
var request_url = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_28780 = cljs.core.reverse.call(null,inst_28774);
var inst_28781 = cljs.core.map.call(null,inst_28779,inst_28780);
var inst_28782 = cljs.core.pr_str.call(null,inst_28781);
var inst_28783 = figwheel.client.utils.log.call(null,inst_28782);
var state_28833__$1 = (function (){var statearr_28879 = state_28833;
(statearr_28879[(30)] = inst_28777);

return statearr_28879;
})();
var statearr_28880_28934 = state_28833__$1;
(statearr_28880_28934[(2)] = inst_28783);

(statearr_28880_28934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (35))){
var inst_28809 = (state_28833[(25)]);
var inst_28822 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28809);
var inst_28823 = cljs.core.pr_str.call(null,inst_28822);
var inst_28824 = ["not required: ",inst_28823].join('');
var inst_28825 = figwheel.client.utils.log.call(null,inst_28824);
var state_28833__$1 = state_28833;
var statearr_28881_28935 = state_28833__$1;
(statearr_28881_28935[(2)] = inst_28825);

(statearr_28881_28935[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (19))){
var inst_28756 = (state_28833[(12)]);
var inst_28762 = figwheel.client.file_reloading.expand_files.call(null,inst_28756);
var state_28833__$1 = state_28833;
var statearr_28882_28936 = state_28833__$1;
(statearr_28882_28936[(2)] = inst_28762);

(statearr_28882_28936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (11))){
var state_28833__$1 = state_28833;
var statearr_28883_28937 = state_28833__$1;
(statearr_28883_28937[(2)] = null);

(statearr_28883_28937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (9))){
var inst_28745 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28884_28938 = state_28833__$1;
(statearr_28884_28938[(2)] = inst_28745);

(statearr_28884_28938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (5))){
var inst_28715 = (state_28833[(7)]);
var inst_28716 = (state_28833[(10)]);
var inst_28718 = (inst_28716 < inst_28715);
var inst_28719 = inst_28718;
var state_28833__$1 = state_28833;
if(cljs.core.truth_(inst_28719)){
var statearr_28885_28939 = state_28833__$1;
(statearr_28885_28939[(1)] = (7));

} else {
var statearr_28886_28940 = state_28833__$1;
(statearr_28886_28940[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (14))){
var inst_28726 = (state_28833[(20)]);
var inst_28735 = cljs.core.first.call(null,inst_28726);
var inst_28736 = figwheel.client.file_reloading.eval_body.call(null,inst_28735,opts);
var inst_28737 = cljs.core.next.call(null,inst_28726);
var inst_28713 = inst_28737;
var inst_28714 = null;
var inst_28715 = (0);
var inst_28716 = (0);
var state_28833__$1 = (function (){var statearr_28887 = state_28833;
(statearr_28887[(7)] = inst_28715);

(statearr_28887[(8)] = inst_28713);

(statearr_28887[(9)] = inst_28714);

(statearr_28887[(31)] = inst_28736);

(statearr_28887[(10)] = inst_28716);

return statearr_28887;
})();
var statearr_28888_28941 = state_28833__$1;
(statearr_28888_28941[(2)] = null);

(statearr_28888_28941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (26))){
var inst_28770 = (state_28833[(21)]);
var inst_28769 = (state_28833[(22)]);
var inst_28774 = (state_28833[(23)]);
var inst_28772 = (state_28833[(24)]);
var inst_28766 = (state_28833[(18)]);
var inst_28789 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28791 = (function (){var all_files = inst_28766;
var res_SINGLEQUOTE_ = inst_28769;
var res = inst_28770;
var files_not_loaded = inst_28772;
var dependencies_that_loaded = inst_28774;
return (function (p__28790){
var map__28889 = p__28790;
var map__28889__$1 = cljs.core.__destructure_map.call(null,map__28889);
var namespace = cljs.core.get.call(null,map__28889__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28889__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_28792 = cljs.core.map.call(null,inst_28791,inst_28770);
var inst_28793 = cljs.core.pr_str.call(null,inst_28792);
var inst_28794 = figwheel.client.utils.log.call(null,inst_28793);
var inst_28795 = (function (){var all_files = inst_28766;
var res_SINGLEQUOTE_ = inst_28769;
var res = inst_28770;
var files_not_loaded = inst_28772;
var dependencies_that_loaded = inst_28774;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_28796 = setTimeout(inst_28795,(10));
var state_28833__$1 = (function (){var statearr_28890 = state_28833;
(statearr_28890[(32)] = inst_28789);

(statearr_28890[(33)] = inst_28794);

return statearr_28890;
})();
var statearr_28891_28942 = state_28833__$1;
(statearr_28891_28942[(2)] = inst_28796);

(statearr_28891_28942[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (16))){
var state_28833__$1 = state_28833;
var statearr_28892_28943 = state_28833__$1;
(statearr_28892_28943[(2)] = reload_dependents);

(statearr_28892_28943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (30))){
var state_28833__$1 = state_28833;
var statearr_28893_28944 = state_28833__$1;
(statearr_28893_28944[(2)] = null);

(statearr_28893_28944[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (10))){
var inst_28726 = (state_28833[(20)]);
var inst_28728 = cljs.core.chunked_seq_QMARK_.call(null,inst_28726);
var state_28833__$1 = state_28833;
if(inst_28728){
var statearr_28894_28945 = state_28833__$1;
(statearr_28894_28945[(1)] = (13));

} else {
var statearr_28895_28946 = state_28833__$1;
(statearr_28895_28946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (18))){
var inst_28760 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
if(cljs.core.truth_(inst_28760)){
var statearr_28896_28947 = state_28833__$1;
(statearr_28896_28947[(1)] = (19));

} else {
var statearr_28897_28948 = state_28833__$1;
(statearr_28897_28948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (37))){
var inst_28828 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28898_28949 = state_28833__$1;
(statearr_28898_28949[(2)] = inst_28828);

(statearr_28898_28949[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (8))){
var inst_28713 = (state_28833[(8)]);
var inst_28726 = (state_28833[(20)]);
var inst_28726__$1 = cljs.core.seq.call(null,inst_28713);
var state_28833__$1 = (function (){var statearr_28899 = state_28833;
(statearr_28899[(20)] = inst_28726__$1);

return statearr_28899;
})();
if(inst_28726__$1){
var statearr_28900_28950 = state_28833__$1;
(statearr_28900_28950[(1)] = (10));

} else {
var statearr_28901_28951 = state_28833__$1;
(statearr_28901_28951[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto____0 = (function (){
var statearr_28902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28902[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto__);

(statearr_28902[(1)] = (1));

return statearr_28902;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto____1 = (function (state_28833){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_28833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e28903){if((e28903 instanceof Object)){
var ex__24881__auto__ = e28903;
var statearr_28904_28952 = state_28833;
(statearr_28904_28952[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28953 = state_28833;
state_28833 = G__28953;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto__ = function(state_28833){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto____1.call(this,state_28833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_28905 = f__24973__auto__.call(null);
(statearr_28905[(6)] = c__24972__auto__);

return statearr_28905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));

return c__24972__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28956,link){
var map__28957 = p__28956;
var map__28957__$1 = cljs.core.__destructure_map.call(null,map__28957);
var file = cljs.core.get.call(null,map__28957__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__28954_SHARP_,p2__28955_SHARP_){
if(cljs.core._EQ_.call(null,p1__28954_SHARP_,p2__28955_SHARP_)){
return p1__28954_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28959){
var map__28960 = p__28959;
var map__28960__$1 = cljs.core.__destructure_map.call(null,map__28960);
var match_length = cljs.core.get.call(null,map__28960__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28960__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28958_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28958_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28961_SHARP_,p2__28962_SHARP_){
return cljs.core.assoc.call(null,p1__28961_SHARP_,cljs.core.get.call(null,p2__28962_SHARP_,key),p2__28962_SHARP_);
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
var loaded_f_datas_28963 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28963);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28963);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28964,p__28965){
var map__28966 = p__28964;
var map__28966__$1 = cljs.core.__destructure_map.call(null,map__28966);
var on_cssload = cljs.core.get.call(null,map__28966__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28967 = p__28965;
var map__28967__$1 = cljs.core.__destructure_map.call(null,map__28967);
var files_msg = map__28967__$1;
var files = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1718642481705
