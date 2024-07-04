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
var G__28133 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__28133 == null)){
return null;
} else {
return goog.object.get(G__28133,"requires");
}
}):(function (path){
var G__28134 = goog.object.get(goog.dependencies_.requires,path);
if((G__28134 == null)){
return null;
} else {
return goog.object.getKeys(G__28134);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28135_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28135_SHARP_)));
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
var G__28136 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__28136__$1 = (((G__28136 == null))?null:goog.object.get(G__28136,"provides"));
if((G__28136__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28136__$1);
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
var seq__28137 = cljs.core.seq.call(null,provides);
var chunk__28138 = null;
var count__28139 = (0);
var i__28140 = (0);
while(true){
if((i__28140 < count__28139)){
var prov = cljs.core._nth.call(null,chunk__28138,i__28140);
var seq__28149_28161 = cljs.core.seq.call(null,requires);
var chunk__28150_28162 = null;
var count__28151_28163 = (0);
var i__28152_28164 = (0);
while(true){
if((i__28152_28164 < count__28151_28163)){
var req_28165 = cljs.core._nth.call(null,chunk__28150_28162,i__28152_28164);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28165,prov);


var G__28166 = seq__28149_28161;
var G__28167 = chunk__28150_28162;
var G__28168 = count__28151_28163;
var G__28169 = (i__28152_28164 + (1));
seq__28149_28161 = G__28166;
chunk__28150_28162 = G__28167;
count__28151_28163 = G__28168;
i__28152_28164 = G__28169;
continue;
} else {
var temp__5735__auto___28170 = cljs.core.seq.call(null,seq__28149_28161);
if(temp__5735__auto___28170){
var seq__28149_28171__$1 = temp__5735__auto___28170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28149_28171__$1)){
var c__4591__auto___28172 = cljs.core.chunk_first.call(null,seq__28149_28171__$1);
var G__28173 = cljs.core.chunk_rest.call(null,seq__28149_28171__$1);
var G__28174 = c__4591__auto___28172;
var G__28175 = cljs.core.count.call(null,c__4591__auto___28172);
var G__28176 = (0);
seq__28149_28161 = G__28173;
chunk__28150_28162 = G__28174;
count__28151_28163 = G__28175;
i__28152_28164 = G__28176;
continue;
} else {
var req_28177 = cljs.core.first.call(null,seq__28149_28171__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28177,prov);


var G__28178 = cljs.core.next.call(null,seq__28149_28171__$1);
var G__28179 = null;
var G__28180 = (0);
var G__28181 = (0);
seq__28149_28161 = G__28178;
chunk__28150_28162 = G__28179;
count__28151_28163 = G__28180;
i__28152_28164 = G__28181;
continue;
}
} else {
}
}
break;
}


var G__28182 = seq__28137;
var G__28183 = chunk__28138;
var G__28184 = count__28139;
var G__28185 = (i__28140 + (1));
seq__28137 = G__28182;
chunk__28138 = G__28183;
count__28139 = G__28184;
i__28140 = G__28185;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28137);
if(temp__5735__auto__){
var seq__28137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28137__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__28137__$1);
var G__28186 = cljs.core.chunk_rest.call(null,seq__28137__$1);
var G__28187 = c__4591__auto__;
var G__28188 = cljs.core.count.call(null,c__4591__auto__);
var G__28189 = (0);
seq__28137 = G__28186;
chunk__28138 = G__28187;
count__28139 = G__28188;
i__28140 = G__28189;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28137__$1);
var seq__28153_28190 = cljs.core.seq.call(null,requires);
var chunk__28154_28191 = null;
var count__28155_28192 = (0);
var i__28156_28193 = (0);
while(true){
if((i__28156_28193 < count__28155_28192)){
var req_28194 = cljs.core._nth.call(null,chunk__28154_28191,i__28156_28193);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28194,prov);


var G__28195 = seq__28153_28190;
var G__28196 = chunk__28154_28191;
var G__28197 = count__28155_28192;
var G__28198 = (i__28156_28193 + (1));
seq__28153_28190 = G__28195;
chunk__28154_28191 = G__28196;
count__28155_28192 = G__28197;
i__28156_28193 = G__28198;
continue;
} else {
var temp__5735__auto___28199__$1 = cljs.core.seq.call(null,seq__28153_28190);
if(temp__5735__auto___28199__$1){
var seq__28153_28200__$1 = temp__5735__auto___28199__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28153_28200__$1)){
var c__4591__auto___28201 = cljs.core.chunk_first.call(null,seq__28153_28200__$1);
var G__28202 = cljs.core.chunk_rest.call(null,seq__28153_28200__$1);
var G__28203 = c__4591__auto___28201;
var G__28204 = cljs.core.count.call(null,c__4591__auto___28201);
var G__28205 = (0);
seq__28153_28190 = G__28202;
chunk__28154_28191 = G__28203;
count__28155_28192 = G__28204;
i__28156_28193 = G__28205;
continue;
} else {
var req_28206 = cljs.core.first.call(null,seq__28153_28200__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28206,prov);


var G__28207 = cljs.core.next.call(null,seq__28153_28200__$1);
var G__28208 = null;
var G__28209 = (0);
var G__28210 = (0);
seq__28153_28190 = G__28207;
chunk__28154_28191 = G__28208;
count__28155_28192 = G__28209;
i__28156_28193 = G__28210;
continue;
}
} else {
}
}
break;
}


var G__28211 = cljs.core.next.call(null,seq__28137__$1);
var G__28212 = null;
var G__28213 = (0);
var G__28214 = (0);
seq__28137 = G__28211;
chunk__28138 = G__28212;
count__28139 = G__28213;
i__28140 = G__28214;
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
var seq__28157 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28158 = null;
var count__28159 = (0);
var i__28160 = (0);
while(true){
if((i__28160 < count__28159)){
var prov = cljs.core._nth.call(null,chunk__28158,i__28160);
goog.object.forEach(deps,((function (seq__28157,chunk__28158,count__28159,i__28160,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28157,chunk__28158,count__28159,i__28160,prov,requires))
);


var G__28215 = seq__28157;
var G__28216 = chunk__28158;
var G__28217 = count__28159;
var G__28218 = (i__28160 + (1));
seq__28157 = G__28215;
chunk__28158 = G__28216;
count__28159 = G__28217;
i__28160 = G__28218;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28157);
if(temp__5735__auto__){
var seq__28157__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28157__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__28157__$1);
var G__28219 = cljs.core.chunk_rest.call(null,seq__28157__$1);
var G__28220 = c__4591__auto__;
var G__28221 = cljs.core.count.call(null,c__4591__auto__);
var G__28222 = (0);
seq__28157 = G__28219;
chunk__28158 = G__28220;
count__28159 = G__28221;
i__28160 = G__28222;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28157__$1);
goog.object.forEach(deps,((function (seq__28157,chunk__28158,count__28159,i__28160,prov,seq__28157__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28157,chunk__28158,count__28159,i__28160,prov,seq__28157__$1,temp__5735__auto__,requires))
);


var G__28223 = cljs.core.next.call(null,seq__28157__$1);
var G__28224 = null;
var G__28225 = (0);
var G__28226 = (0);
seq__28157 = G__28223;
chunk__28158 = G__28224;
count__28159 = G__28225;
i__28160 = G__28226;
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
return cljs.core.some.call(null,(function (p__28227){
var vec__28228 = p__28227;
var _ = cljs.core.nth.call(null,vec__28228,(0),null);
var v = cljs.core.nth.call(null,vec__28228,(1),null);
var and__4149__auto__ = v;
if(cljs.core.truth_(and__4149__auto__)){
return v.call(null,dep);
} else {
return and__4149__auto__;
}
}),cljs.core.filter.call(null,(function (p__28231){
var vec__28232 = p__28231;
var k = cljs.core.nth.call(null,vec__28232,(0),null);
var v = cljs.core.nth.call(null,vec__28232,(1),null);
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

var seq__28244_28252 = cljs.core.seq.call(null,deps);
var chunk__28245_28253 = null;
var count__28246_28254 = (0);
var i__28247_28255 = (0);
while(true){
if((i__28247_28255 < count__28246_28254)){
var dep_28256 = cljs.core._nth.call(null,chunk__28245_28253,i__28247_28255);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_28256;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28256));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28256,(depth + (1)),state);
} else {
}


var G__28257 = seq__28244_28252;
var G__28258 = chunk__28245_28253;
var G__28259 = count__28246_28254;
var G__28260 = (i__28247_28255 + (1));
seq__28244_28252 = G__28257;
chunk__28245_28253 = G__28258;
count__28246_28254 = G__28259;
i__28247_28255 = G__28260;
continue;
} else {
var temp__5735__auto___28261 = cljs.core.seq.call(null,seq__28244_28252);
if(temp__5735__auto___28261){
var seq__28244_28262__$1 = temp__5735__auto___28261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28244_28262__$1)){
var c__4591__auto___28263 = cljs.core.chunk_first.call(null,seq__28244_28262__$1);
var G__28264 = cljs.core.chunk_rest.call(null,seq__28244_28262__$1);
var G__28265 = c__4591__auto___28263;
var G__28266 = cljs.core.count.call(null,c__4591__auto___28263);
var G__28267 = (0);
seq__28244_28252 = G__28264;
chunk__28245_28253 = G__28265;
count__28246_28254 = G__28266;
i__28247_28255 = G__28267;
continue;
} else {
var dep_28268 = cljs.core.first.call(null,seq__28244_28262__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_28268;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28268));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28268,(depth + (1)),state);
} else {
}


var G__28269 = cljs.core.next.call(null,seq__28244_28262__$1);
var G__28270 = null;
var G__28271 = (0);
var G__28272 = (0);
seq__28244_28252 = G__28269;
chunk__28245_28253 = G__28270;
count__28246_28254 = G__28271;
i__28247_28255 = G__28272;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28248){
var vec__28249 = p__28248;
var seq__28250 = cljs.core.seq.call(null,vec__28249);
var first__28251 = cljs.core.first.call(null,seq__28250);
var seq__28250__$1 = cljs.core.next.call(null,seq__28250);
var x = first__28251;
var xs = seq__28250__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28235_SHARP_){
return clojure.set.difference.call(null,p1__28235_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28273_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28273_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28274 = cljs.core.seq.call(null,provides);
var chunk__28275 = null;
var count__28276 = (0);
var i__28277 = (0);
while(true){
if((i__28277 < count__28276)){
var prov = cljs.core._nth.call(null,chunk__28275,i__28277);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28286_28294 = cljs.core.seq.call(null,requires);
var chunk__28287_28295 = null;
var count__28288_28296 = (0);
var i__28289_28297 = (0);
while(true){
if((i__28289_28297 < count__28288_28296)){
var req_28298 = cljs.core._nth.call(null,chunk__28287_28295,i__28289_28297);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28298,prov);


var G__28299 = seq__28286_28294;
var G__28300 = chunk__28287_28295;
var G__28301 = count__28288_28296;
var G__28302 = (i__28289_28297 + (1));
seq__28286_28294 = G__28299;
chunk__28287_28295 = G__28300;
count__28288_28296 = G__28301;
i__28289_28297 = G__28302;
continue;
} else {
var temp__5735__auto___28303 = cljs.core.seq.call(null,seq__28286_28294);
if(temp__5735__auto___28303){
var seq__28286_28304__$1 = temp__5735__auto___28303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28286_28304__$1)){
var c__4591__auto___28305 = cljs.core.chunk_first.call(null,seq__28286_28304__$1);
var G__28306 = cljs.core.chunk_rest.call(null,seq__28286_28304__$1);
var G__28307 = c__4591__auto___28305;
var G__28308 = cljs.core.count.call(null,c__4591__auto___28305);
var G__28309 = (0);
seq__28286_28294 = G__28306;
chunk__28287_28295 = G__28307;
count__28288_28296 = G__28308;
i__28289_28297 = G__28309;
continue;
} else {
var req_28310 = cljs.core.first.call(null,seq__28286_28304__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28310,prov);


var G__28311 = cljs.core.next.call(null,seq__28286_28304__$1);
var G__28312 = null;
var G__28313 = (0);
var G__28314 = (0);
seq__28286_28294 = G__28311;
chunk__28287_28295 = G__28312;
count__28288_28296 = G__28313;
i__28289_28297 = G__28314;
continue;
}
} else {
}
}
break;
}


var G__28315 = seq__28274;
var G__28316 = chunk__28275;
var G__28317 = count__28276;
var G__28318 = (i__28277 + (1));
seq__28274 = G__28315;
chunk__28275 = G__28316;
count__28276 = G__28317;
i__28277 = G__28318;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28274);
if(temp__5735__auto__){
var seq__28274__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28274__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__28274__$1);
var G__28319 = cljs.core.chunk_rest.call(null,seq__28274__$1);
var G__28320 = c__4591__auto__;
var G__28321 = cljs.core.count.call(null,c__4591__auto__);
var G__28322 = (0);
seq__28274 = G__28319;
chunk__28275 = G__28320;
count__28276 = G__28321;
i__28277 = G__28322;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28274__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28290_28323 = cljs.core.seq.call(null,requires);
var chunk__28291_28324 = null;
var count__28292_28325 = (0);
var i__28293_28326 = (0);
while(true){
if((i__28293_28326 < count__28292_28325)){
var req_28327 = cljs.core._nth.call(null,chunk__28291_28324,i__28293_28326);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28327,prov);


var G__28328 = seq__28290_28323;
var G__28329 = chunk__28291_28324;
var G__28330 = count__28292_28325;
var G__28331 = (i__28293_28326 + (1));
seq__28290_28323 = G__28328;
chunk__28291_28324 = G__28329;
count__28292_28325 = G__28330;
i__28293_28326 = G__28331;
continue;
} else {
var temp__5735__auto___28332__$1 = cljs.core.seq.call(null,seq__28290_28323);
if(temp__5735__auto___28332__$1){
var seq__28290_28333__$1 = temp__5735__auto___28332__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28290_28333__$1)){
var c__4591__auto___28334 = cljs.core.chunk_first.call(null,seq__28290_28333__$1);
var G__28335 = cljs.core.chunk_rest.call(null,seq__28290_28333__$1);
var G__28336 = c__4591__auto___28334;
var G__28337 = cljs.core.count.call(null,c__4591__auto___28334);
var G__28338 = (0);
seq__28290_28323 = G__28335;
chunk__28291_28324 = G__28336;
count__28292_28325 = G__28337;
i__28293_28326 = G__28338;
continue;
} else {
var req_28339 = cljs.core.first.call(null,seq__28290_28333__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28339,prov);


var G__28340 = cljs.core.next.call(null,seq__28290_28333__$1);
var G__28341 = null;
var G__28342 = (0);
var G__28343 = (0);
seq__28290_28323 = G__28340;
chunk__28291_28324 = G__28341;
count__28292_28325 = G__28342;
i__28293_28326 = G__28343;
continue;
}
} else {
}
}
break;
}


var G__28344 = cljs.core.next.call(null,seq__28274__$1);
var G__28345 = null;
var G__28346 = (0);
var G__28347 = (0);
seq__28274 = G__28344;
chunk__28275 = G__28345;
count__28276 = G__28346;
i__28277 = G__28347;
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
var seq__28348_28352 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28349_28353 = null;
var count__28350_28354 = (0);
var i__28351_28355 = (0);
while(true){
if((i__28351_28355 < count__28350_28354)){
var ns_28356 = cljs.core._nth.call(null,chunk__28349_28353,i__28351_28355);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28356);


var G__28357 = seq__28348_28352;
var G__28358 = chunk__28349_28353;
var G__28359 = count__28350_28354;
var G__28360 = (i__28351_28355 + (1));
seq__28348_28352 = G__28357;
chunk__28349_28353 = G__28358;
count__28350_28354 = G__28359;
i__28351_28355 = G__28360;
continue;
} else {
var temp__5735__auto___28361 = cljs.core.seq.call(null,seq__28348_28352);
if(temp__5735__auto___28361){
var seq__28348_28362__$1 = temp__5735__auto___28361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28348_28362__$1)){
var c__4591__auto___28363 = cljs.core.chunk_first.call(null,seq__28348_28362__$1);
var G__28364 = cljs.core.chunk_rest.call(null,seq__28348_28362__$1);
var G__28365 = c__4591__auto___28363;
var G__28366 = cljs.core.count.call(null,c__4591__auto___28363);
var G__28367 = (0);
seq__28348_28352 = G__28364;
chunk__28349_28353 = G__28365;
count__28350_28354 = G__28366;
i__28351_28355 = G__28367;
continue;
} else {
var ns_28368 = cljs.core.first.call(null,seq__28348_28362__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28368);


var G__28369 = cljs.core.next.call(null,seq__28348_28362__$1);
var G__28370 = null;
var G__28371 = (0);
var G__28372 = (0);
seq__28348_28352 = G__28369;
chunk__28349_28353 = G__28370;
count__28350_28354 = G__28371;
i__28351_28355 = G__28372;
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
var G__28373__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28373 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28374__i = 0, G__28374__a = new Array(arguments.length -  0);
while (G__28374__i < G__28374__a.length) {G__28374__a[G__28374__i] = arguments[G__28374__i + 0]; ++G__28374__i;}
  args = new cljs.core.IndexedSeq(G__28374__a,0,null);
} 
return G__28373__delegate.call(this,args);};
G__28373.cljs$lang$maxFixedArity = 0;
G__28373.cljs$lang$applyTo = (function (arglist__28375){
var args = cljs.core.seq(arglist__28375);
return G__28373__delegate(args);
});
G__28373.cljs$core$IFn$_invoke$arity$variadic = G__28373__delegate;
return G__28373;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28376_SHARP_,p2__28377_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28376_SHARP_)),p2__28377_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28378_SHARP_,p2__28379_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28378_SHARP_),p2__28379_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28380 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28380.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28380.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28380;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28381){if((e28381 instanceof Error)){
var e = e28381;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28381;

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
}catch (e28382){if((e28382 instanceof Error)){
var e = e28382;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28382;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28383 = cljs.core._EQ_;
var expr__28384 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28383.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28384))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28383.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28384))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28383.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28384))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28386,callback){
var map__28387 = p__28386;
var map__28387__$1 = cljs.core.__destructure_map.call(null,map__28387);
var file_msg = map__28387__$1;
var request_url = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_28424){
var state_val_28425 = (state_28424[(1)]);
if((state_val_28425 === (7))){
var inst_28420 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28426_28452 = state_28424__$1;
(statearr_28426_28452[(2)] = inst_28420);

(statearr_28426_28452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (1))){
var state_28424__$1 = state_28424;
var statearr_28427_28453 = state_28424__$1;
(statearr_28427_28453[(2)] = null);

(statearr_28427_28453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (4))){
var inst_28390 = (state_28424[(7)]);
var inst_28390__$1 = (state_28424[(2)]);
var state_28424__$1 = (function (){var statearr_28428 = state_28424;
(statearr_28428[(7)] = inst_28390__$1);

return statearr_28428;
})();
if(cljs.core.truth_(inst_28390__$1)){
var statearr_28429_28454 = state_28424__$1;
(statearr_28429_28454[(1)] = (5));

} else {
var statearr_28430_28455 = state_28424__$1;
(statearr_28430_28455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (15))){
var inst_28403 = (state_28424[(8)]);
var inst_28405 = (state_28424[(9)]);
var inst_28407 = inst_28405.call(null,inst_28403);
var state_28424__$1 = state_28424;
var statearr_28431_28456 = state_28424__$1;
(statearr_28431_28456[(2)] = inst_28407);

(statearr_28431_28456[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (13))){
var inst_28414 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28432_28457 = state_28424__$1;
(statearr_28432_28457[(2)] = inst_28414);

(statearr_28432_28457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (6))){
var state_28424__$1 = state_28424;
var statearr_28433_28458 = state_28424__$1;
(statearr_28433_28458[(2)] = null);

(statearr_28433_28458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (17))){
var inst_28411 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28434_28459 = state_28424__$1;
(statearr_28434_28459[(2)] = inst_28411);

(statearr_28434_28459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (3))){
var inst_28422 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28424__$1,inst_28422);
} else {
if((state_val_28425 === (12))){
var state_28424__$1 = state_28424;
var statearr_28435_28460 = state_28424__$1;
(statearr_28435_28460[(2)] = null);

(statearr_28435_28460[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (2))){
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28424__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28425 === (11))){
var inst_28395 = (state_28424[(10)]);
var inst_28401 = figwheel.client.file_reloading.blocking_load.call(null,inst_28395);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28424__$1,(14),inst_28401);
} else {
if((state_val_28425 === (9))){
var inst_28395 = (state_28424[(10)]);
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28395)){
var statearr_28436_28461 = state_28424__$1;
(statearr_28436_28461[(1)] = (11));

} else {
var statearr_28437_28462 = state_28424__$1;
(statearr_28437_28462[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (5))){
var inst_28396 = (state_28424[(11)]);
var inst_28390 = (state_28424[(7)]);
var inst_28395 = cljs.core.nth.call(null,inst_28390,(0),null);
var inst_28396__$1 = cljs.core.nth.call(null,inst_28390,(1),null);
var state_28424__$1 = (function (){var statearr_28438 = state_28424;
(statearr_28438[(11)] = inst_28396__$1);

(statearr_28438[(10)] = inst_28395);

return statearr_28438;
})();
if(cljs.core.truth_(inst_28396__$1)){
var statearr_28439_28463 = state_28424__$1;
(statearr_28439_28463[(1)] = (8));

} else {
var statearr_28440_28464 = state_28424__$1;
(statearr_28440_28464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (14))){
var inst_28395 = (state_28424[(10)]);
var inst_28405 = (state_28424[(9)]);
var inst_28403 = (state_28424[(2)]);
var inst_28404 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28405__$1 = cljs.core.get.call(null,inst_28404,inst_28395);
var state_28424__$1 = (function (){var statearr_28441 = state_28424;
(statearr_28441[(8)] = inst_28403);

(statearr_28441[(9)] = inst_28405__$1);

return statearr_28441;
})();
if(cljs.core.truth_(inst_28405__$1)){
var statearr_28442_28465 = state_28424__$1;
(statearr_28442_28465[(1)] = (15));

} else {
var statearr_28443_28466 = state_28424__$1;
(statearr_28443_28466[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (16))){
var inst_28403 = (state_28424[(8)]);
var inst_28409 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28403);
var state_28424__$1 = state_28424;
var statearr_28444_28467 = state_28424__$1;
(statearr_28444_28467[(2)] = inst_28409);

(statearr_28444_28467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (10))){
var inst_28416 = (state_28424[(2)]);
var state_28424__$1 = (function (){var statearr_28445 = state_28424;
(statearr_28445[(12)] = inst_28416);

return statearr_28445;
})();
var statearr_28446_28468 = state_28424__$1;
(statearr_28446_28468[(2)] = null);

(statearr_28446_28468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (8))){
var inst_28396 = (state_28424[(11)]);
var inst_28398 = eval(inst_28396);
var state_28424__$1 = state_28424;
var statearr_28447_28469 = state_28424__$1;
(statearr_28447_28469[(2)] = inst_28398);

(statearr_28447_28469[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__24677__auto__ = null;
var figwheel$client$file_reloading$state_machine__24677__auto____0 = (function (){
var statearr_28448 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28448[(0)] = figwheel$client$file_reloading$state_machine__24677__auto__);

(statearr_28448[(1)] = (1));

return statearr_28448;
});
var figwheel$client$file_reloading$state_machine__24677__auto____1 = (function (state_28424){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_28424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e28449){if((e28449 instanceof Object)){
var ex__24680__auto__ = e28449;
var statearr_28450_28470 = state_28424;
(statearr_28450_28470[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28471 = state_28424;
state_28424 = G__28471;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24677__auto__ = function(state_28424){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24677__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24677__auto____1.call(this,state_28424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24677__auto____0;
figwheel$client$file_reloading$state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24677__auto____1;
return figwheel$client$file_reloading$state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_28451 = f__24772__auto__.call(null);
(statearr_28451[(6)] = c__24771__auto__);

return statearr_28451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));

return c__24771__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28473 = arguments.length;
switch (G__28473) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28475,callback){
var map__28476 = p__28475;
var map__28476__$1 = cljs.core.__destructure_map.call(null,map__28476);
var file_msg = map__28476__$1;
var namespace = cljs.core.get.call(null,map__28476__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28477){
var map__28478 = p__28477;
var map__28478__$1 = cljs.core.__destructure_map.call(null,map__28478);
var file_msg = map__28478__$1;
var namespace = cljs.core.get.call(null,map__28478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28479){
var map__28480 = p__28479;
var map__28480__$1 = cljs.core.__destructure_map.call(null,map__28480);
var file_msg = map__28480__$1;
var namespace = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28481,callback){
var map__28482 = p__28481;
var map__28482__$1 = cljs.core.__destructure_map.call(null,map__28482);
var file_msg = map__28482__$1;
var request_url = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24771__auto___28531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_28516){
var state_val_28517 = (state_28516[(1)]);
if((state_val_28517 === (1))){
var inst_28490 = cljs.core.seq.call(null,files);
var inst_28491 = cljs.core.first.call(null,inst_28490);
var inst_28492 = cljs.core.next.call(null,inst_28490);
var inst_28493 = files;
var state_28516__$1 = (function (){var statearr_28518 = state_28516;
(statearr_28518[(7)] = inst_28493);

(statearr_28518[(8)] = inst_28491);

(statearr_28518[(9)] = inst_28492);

return statearr_28518;
})();
var statearr_28519_28532 = state_28516__$1;
(statearr_28519_28532[(2)] = null);

(statearr_28519_28532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (2))){
var inst_28499 = (state_28516[(10)]);
var inst_28493 = (state_28516[(7)]);
var inst_28498 = cljs.core.seq.call(null,inst_28493);
var inst_28499__$1 = cljs.core.first.call(null,inst_28498);
var inst_28500 = cljs.core.next.call(null,inst_28498);
var inst_28501 = (inst_28499__$1 == null);
var inst_28502 = cljs.core.not.call(null,inst_28501);
var state_28516__$1 = (function (){var statearr_28520 = state_28516;
(statearr_28520[(10)] = inst_28499__$1);

(statearr_28520[(11)] = inst_28500);

return statearr_28520;
})();
if(inst_28502){
var statearr_28521_28533 = state_28516__$1;
(statearr_28521_28533[(1)] = (4));

} else {
var statearr_28522_28534 = state_28516__$1;
(statearr_28522_28534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (3))){
var inst_28514 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28516__$1,inst_28514);
} else {
if((state_val_28517 === (4))){
var inst_28499 = (state_28516[(10)]);
var inst_28504 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28499);
var state_28516__$1 = state_28516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28516__$1,(7),inst_28504);
} else {
if((state_val_28517 === (5))){
var inst_28510 = cljs.core.async.close_BANG_.call(null,out);
var state_28516__$1 = state_28516;
var statearr_28523_28535 = state_28516__$1;
(statearr_28523_28535[(2)] = inst_28510);

(statearr_28523_28535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (6))){
var inst_28512 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
var statearr_28524_28536 = state_28516__$1;
(statearr_28524_28536[(2)] = inst_28512);

(statearr_28524_28536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (7))){
var inst_28500 = (state_28516[(11)]);
var inst_28506 = (state_28516[(2)]);
var inst_28507 = cljs.core.async.put_BANG_.call(null,out,inst_28506);
var inst_28493 = inst_28500;
var state_28516__$1 = (function (){var statearr_28525 = state_28516;
(statearr_28525[(12)] = inst_28507);

(statearr_28525[(7)] = inst_28493);

return statearr_28525;
})();
var statearr_28526_28537 = state_28516__$1;
(statearr_28526_28537[(2)] = null);

(statearr_28526_28537[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto____0 = (function (){
var statearr_28527 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28527[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto__);

(statearr_28527[(1)] = (1));

return statearr_28527;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto____1 = (function (state_28516){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_28516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e28528){if((e28528 instanceof Object)){
var ex__24680__auto__ = e28528;
var statearr_28529_28538 = state_28516;
(statearr_28529_28538[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28539 = state_28516;
state_28516 = G__28539;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto__ = function(state_28516){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto____1.call(this,state_28516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_28530 = f__24772__auto__.call(null);
(statearr_28530[(6)] = c__24771__auto___28531);

return statearr_28530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28540,opts){
var map__28541 = p__28540;
var map__28541__$1 = cljs.core.__destructure_map.call(null,map__28541);
var eval_body = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28542){var e = e28542;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28543_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28543_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28544){
var vec__28545 = p__28544;
var k = cljs.core.nth.call(null,vec__28545,(0),null);
var v = cljs.core.nth.call(null,vec__28545,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28548){
var vec__28549 = p__28548;
var k = cljs.core.nth.call(null,vec__28549,(0),null);
var v = cljs.core.nth.call(null,vec__28549,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28555,p__28556){
var map__28557 = p__28555;
var map__28557__$1 = cljs.core.__destructure_map.call(null,map__28557);
var opts = map__28557__$1;
var before_jsload = cljs.core.get.call(null,map__28557__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28557__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28557__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28558 = p__28556;
var map__28558__$1 = cljs.core.__destructure_map.call(null,map__28558);
var msg = map__28558__$1;
var files = cljs.core.get.call(null,map__28558__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28558__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28558__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_28690){
var state_val_28691 = (state_28690[(1)]);
if((state_val_28691 === (7))){
var inst_28570 = (state_28690[(7)]);
var inst_28573 = (state_28690[(8)]);
var inst_28571 = (state_28690[(9)]);
var inst_28572 = (state_28690[(10)]);
var inst_28578 = cljs.core._nth.call(null,inst_28571,inst_28573);
var inst_28579 = figwheel.client.file_reloading.eval_body.call(null,inst_28578,opts);
var inst_28580 = (inst_28573 + (1));
var tmp28692 = inst_28570;
var tmp28693 = inst_28571;
var tmp28694 = inst_28572;
var inst_28570__$1 = tmp28692;
var inst_28571__$1 = tmp28693;
var inst_28572__$1 = tmp28694;
var inst_28573__$1 = inst_28580;
var state_28690__$1 = (function (){var statearr_28695 = state_28690;
(statearr_28695[(7)] = inst_28570__$1);

(statearr_28695[(8)] = inst_28573__$1);

(statearr_28695[(11)] = inst_28579);

(statearr_28695[(9)] = inst_28571__$1);

(statearr_28695[(10)] = inst_28572__$1);

return statearr_28695;
})();
var statearr_28696_28763 = state_28690__$1;
(statearr_28696_28763[(2)] = null);

(statearr_28696_28763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (20))){
var inst_28613 = (state_28690[(12)]);
var inst_28621 = figwheel.client.file_reloading.sort_files.call(null,inst_28613);
var state_28690__$1 = state_28690;
var statearr_28697_28764 = state_28690__$1;
(statearr_28697_28764[(2)] = inst_28621);

(statearr_28697_28764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (27))){
var state_28690__$1 = state_28690;
var statearr_28698_28765 = state_28690__$1;
(statearr_28698_28765[(2)] = null);

(statearr_28698_28765[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (1))){
var inst_28562 = (state_28690[(13)]);
var inst_28559 = before_jsload.call(null,files);
var inst_28560 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28561 = (function (){return (function (p1__28552_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28552_SHARP_);
});
})();
var inst_28562__$1 = cljs.core.filter.call(null,inst_28561,files);
var inst_28563 = cljs.core.not_empty.call(null,inst_28562__$1);
var state_28690__$1 = (function (){var statearr_28699 = state_28690;
(statearr_28699[(14)] = inst_28560);

(statearr_28699[(15)] = inst_28559);

(statearr_28699[(13)] = inst_28562__$1);

return statearr_28699;
})();
if(cljs.core.truth_(inst_28563)){
var statearr_28700_28766 = state_28690__$1;
(statearr_28700_28766[(1)] = (2));

} else {
var statearr_28701_28767 = state_28690__$1;
(statearr_28701_28767[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (24))){
var state_28690__$1 = state_28690;
var statearr_28702_28768 = state_28690__$1;
(statearr_28702_28768[(2)] = null);

(statearr_28702_28768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (4))){
var inst_28607 = (state_28690[(2)]);
var inst_28608 = cljs.core.List.EMPTY;
var inst_28609 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28608);
var inst_28610 = (function (){return (function (p1__28553_SHARP_){
var and__4149__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28553_SHARP_);
if(cljs.core.truth_(and__4149__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28553_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28553_SHARP_))));
} else {
return and__4149__auto__;
}
});
})();
var inst_28611 = cljs.core.filter.call(null,inst_28610,files);
var inst_28612 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28613 = cljs.core.concat.call(null,inst_28611,inst_28612);
var state_28690__$1 = (function (){var statearr_28703 = state_28690;
(statearr_28703[(16)] = inst_28609);

(statearr_28703[(17)] = inst_28607);

(statearr_28703[(12)] = inst_28613);

return statearr_28703;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28704_28769 = state_28690__$1;
(statearr_28704_28769[(1)] = (16));

} else {
var statearr_28705_28770 = state_28690__$1;
(statearr_28705_28770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (15))){
var inst_28597 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28706_28771 = state_28690__$1;
(statearr_28706_28771[(2)] = inst_28597);

(statearr_28706_28771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (21))){
var inst_28623 = (state_28690[(18)]);
var inst_28623__$1 = (state_28690[(2)]);
var inst_28624 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28623__$1);
var state_28690__$1 = (function (){var statearr_28707 = state_28690;
(statearr_28707[(18)] = inst_28623__$1);

return statearr_28707;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28690__$1,(22),inst_28624);
} else {
if((state_val_28691 === (31))){
var inst_28688 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28690__$1,inst_28688);
} else {
if((state_val_28691 === (32))){
var inst_28665 = (state_28690[(19)]);
var inst_28669 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28670 = cljs.core.map.call(null,inst_28669,inst_28665);
var inst_28671 = cljs.core.pr_str.call(null,inst_28670);
var inst_28672 = ["figwheel-no-load meta-data: ",inst_28671].join('');
var inst_28673 = figwheel.client.utils.log.call(null,inst_28672);
var state_28690__$1 = state_28690;
var statearr_28708_28772 = state_28690__$1;
(statearr_28708_28772[(2)] = inst_28673);

(statearr_28708_28772[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (33))){
var state_28690__$1 = state_28690;
var statearr_28709_28773 = state_28690__$1;
(statearr_28709_28773[(2)] = null);

(statearr_28709_28773[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (13))){
var inst_28583 = (state_28690[(20)]);
var inst_28587 = cljs.core.chunk_first.call(null,inst_28583);
var inst_28588 = cljs.core.chunk_rest.call(null,inst_28583);
var inst_28589 = cljs.core.count.call(null,inst_28587);
var inst_28570 = inst_28588;
var inst_28571 = inst_28587;
var inst_28572 = inst_28589;
var inst_28573 = (0);
var state_28690__$1 = (function (){var statearr_28710 = state_28690;
(statearr_28710[(7)] = inst_28570);

(statearr_28710[(8)] = inst_28573);

(statearr_28710[(9)] = inst_28571);

(statearr_28710[(10)] = inst_28572);

return statearr_28710;
})();
var statearr_28711_28774 = state_28690__$1;
(statearr_28711_28774[(2)] = null);

(statearr_28711_28774[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (22))){
var inst_28631 = (state_28690[(21)]);
var inst_28626 = (state_28690[(22)]);
var inst_28627 = (state_28690[(23)]);
var inst_28623 = (state_28690[(18)]);
var inst_28626__$1 = (state_28690[(2)]);
var inst_28627__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28626__$1);
var inst_28628 = (function (){var all_files = inst_28623;
var res_SINGLEQUOTE_ = inst_28626__$1;
var res = inst_28627__$1;
return (function (p1__28554_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28554_SHARP_));
});
})();
var inst_28629 = cljs.core.filter.call(null,inst_28628,inst_28626__$1);
var inst_28630 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28631__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28630);
var inst_28632 = cljs.core.not_empty.call(null,inst_28631__$1);
var state_28690__$1 = (function (){var statearr_28712 = state_28690;
(statearr_28712[(21)] = inst_28631__$1);

(statearr_28712[(22)] = inst_28626__$1);

(statearr_28712[(24)] = inst_28629);

(statearr_28712[(23)] = inst_28627__$1);

return statearr_28712;
})();
if(cljs.core.truth_(inst_28632)){
var statearr_28713_28775 = state_28690__$1;
(statearr_28713_28775[(1)] = (23));

} else {
var statearr_28714_28776 = state_28690__$1;
(statearr_28714_28776[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (36))){
var state_28690__$1 = state_28690;
var statearr_28715_28777 = state_28690__$1;
(statearr_28715_28777[(2)] = null);

(statearr_28715_28777[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (29))){
var inst_28631 = (state_28690[(21)]);
var inst_28665 = (state_28690[(19)]);
var inst_28626 = (state_28690[(22)]);
var inst_28629 = (state_28690[(24)]);
var inst_28627 = (state_28690[(23)]);
var inst_28623 = (state_28690[(18)]);
var inst_28659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28662 = (function (){var all_files = inst_28623;
var res_SINGLEQUOTE_ = inst_28626;
var res = inst_28627;
var files_not_loaded = inst_28629;
var dependencies_that_loaded = inst_28631;
return (function (p__28661){
var map__28716 = p__28661;
var map__28716__$1 = cljs.core.__destructure_map.call(null,map__28716);
var namespace = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_28663 = cljs.core.group_by.call(null,inst_28662,inst_28629);
var inst_28664 = cljs.core.__destructure_map.call(null,inst_28663);
var inst_28665__$1 = cljs.core.get.call(null,inst_28664,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28666 = cljs.core.get.call(null,inst_28664,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28667 = cljs.core.not_empty.call(null,inst_28665__$1);
var state_28690__$1 = (function (){var statearr_28717 = state_28690;
(statearr_28717[(25)] = inst_28659);

(statearr_28717[(19)] = inst_28665__$1);

(statearr_28717[(26)] = inst_28666);

return statearr_28717;
})();
if(cljs.core.truth_(inst_28667)){
var statearr_28718_28778 = state_28690__$1;
(statearr_28718_28778[(1)] = (32));

} else {
var statearr_28719_28779 = state_28690__$1;
(statearr_28719_28779[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (6))){
var inst_28604 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28720_28780 = state_28690__$1;
(statearr_28720_28780[(2)] = inst_28604);

(statearr_28720_28780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (28))){
var inst_28629 = (state_28690[(24)]);
var inst_28656 = (state_28690[(2)]);
var inst_28657 = cljs.core.not_empty.call(null,inst_28629);
var state_28690__$1 = (function (){var statearr_28721 = state_28690;
(statearr_28721[(27)] = inst_28656);

return statearr_28721;
})();
if(cljs.core.truth_(inst_28657)){
var statearr_28722_28781 = state_28690__$1;
(statearr_28722_28781[(1)] = (29));

} else {
var statearr_28723_28782 = state_28690__$1;
(statearr_28723_28782[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (25))){
var inst_28627 = (state_28690[(23)]);
var inst_28643 = (state_28690[(2)]);
var inst_28644 = cljs.core.not_empty.call(null,inst_28627);
var state_28690__$1 = (function (){var statearr_28724 = state_28690;
(statearr_28724[(28)] = inst_28643);

return statearr_28724;
})();
if(cljs.core.truth_(inst_28644)){
var statearr_28725_28783 = state_28690__$1;
(statearr_28725_28783[(1)] = (26));

} else {
var statearr_28726_28784 = state_28690__$1;
(statearr_28726_28784[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (34))){
var inst_28666 = (state_28690[(26)]);
var inst_28676 = (state_28690[(2)]);
var inst_28677 = cljs.core.not_empty.call(null,inst_28666);
var state_28690__$1 = (function (){var statearr_28727 = state_28690;
(statearr_28727[(29)] = inst_28676);

return statearr_28727;
})();
if(cljs.core.truth_(inst_28677)){
var statearr_28728_28785 = state_28690__$1;
(statearr_28728_28785[(1)] = (35));

} else {
var statearr_28729_28786 = state_28690__$1;
(statearr_28729_28786[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (17))){
var state_28690__$1 = state_28690;
var statearr_28730_28787 = state_28690__$1;
(statearr_28730_28787[(2)] = recompile_dependents);

(statearr_28730_28787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (3))){
var state_28690__$1 = state_28690;
var statearr_28731_28788 = state_28690__$1;
(statearr_28731_28788[(2)] = null);

(statearr_28731_28788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (12))){
var inst_28600 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28732_28789 = state_28690__$1;
(statearr_28732_28789[(2)] = inst_28600);

(statearr_28732_28789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (2))){
var inst_28562 = (state_28690[(13)]);
var inst_28569 = cljs.core.seq.call(null,inst_28562);
var inst_28570 = inst_28569;
var inst_28571 = null;
var inst_28572 = (0);
var inst_28573 = (0);
var state_28690__$1 = (function (){var statearr_28733 = state_28690;
(statearr_28733[(7)] = inst_28570);

(statearr_28733[(8)] = inst_28573);

(statearr_28733[(9)] = inst_28571);

(statearr_28733[(10)] = inst_28572);

return statearr_28733;
})();
var statearr_28734_28790 = state_28690__$1;
(statearr_28734_28790[(2)] = null);

(statearr_28734_28790[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (23))){
var inst_28631 = (state_28690[(21)]);
var inst_28626 = (state_28690[(22)]);
var inst_28629 = (state_28690[(24)]);
var inst_28627 = (state_28690[(23)]);
var inst_28623 = (state_28690[(18)]);
var inst_28634 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28636 = (function (){var all_files = inst_28623;
var res_SINGLEQUOTE_ = inst_28626;
var res = inst_28627;
var files_not_loaded = inst_28629;
var dependencies_that_loaded = inst_28631;
return (function (p__28635){
var map__28735 = p__28635;
var map__28735__$1 = cljs.core.__destructure_map.call(null,map__28735);
var request_url = cljs.core.get.call(null,map__28735__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_28637 = cljs.core.reverse.call(null,inst_28631);
var inst_28638 = cljs.core.map.call(null,inst_28636,inst_28637);
var inst_28639 = cljs.core.pr_str.call(null,inst_28638);
var inst_28640 = figwheel.client.utils.log.call(null,inst_28639);
var state_28690__$1 = (function (){var statearr_28736 = state_28690;
(statearr_28736[(30)] = inst_28634);

return statearr_28736;
})();
var statearr_28737_28791 = state_28690__$1;
(statearr_28737_28791[(2)] = inst_28640);

(statearr_28737_28791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (35))){
var inst_28666 = (state_28690[(26)]);
var inst_28679 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28666);
var inst_28680 = cljs.core.pr_str.call(null,inst_28679);
var inst_28681 = ["not required: ",inst_28680].join('');
var inst_28682 = figwheel.client.utils.log.call(null,inst_28681);
var state_28690__$1 = state_28690;
var statearr_28738_28792 = state_28690__$1;
(statearr_28738_28792[(2)] = inst_28682);

(statearr_28738_28792[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (19))){
var inst_28613 = (state_28690[(12)]);
var inst_28619 = figwheel.client.file_reloading.expand_files.call(null,inst_28613);
var state_28690__$1 = state_28690;
var statearr_28739_28793 = state_28690__$1;
(statearr_28739_28793[(2)] = inst_28619);

(statearr_28739_28793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (11))){
var state_28690__$1 = state_28690;
var statearr_28740_28794 = state_28690__$1;
(statearr_28740_28794[(2)] = null);

(statearr_28740_28794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (9))){
var inst_28602 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28741_28795 = state_28690__$1;
(statearr_28741_28795[(2)] = inst_28602);

(statearr_28741_28795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (5))){
var inst_28573 = (state_28690[(8)]);
var inst_28572 = (state_28690[(10)]);
var inst_28575 = (inst_28573 < inst_28572);
var inst_28576 = inst_28575;
var state_28690__$1 = state_28690;
if(cljs.core.truth_(inst_28576)){
var statearr_28742_28796 = state_28690__$1;
(statearr_28742_28796[(1)] = (7));

} else {
var statearr_28743_28797 = state_28690__$1;
(statearr_28743_28797[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (14))){
var inst_28583 = (state_28690[(20)]);
var inst_28592 = cljs.core.first.call(null,inst_28583);
var inst_28593 = figwheel.client.file_reloading.eval_body.call(null,inst_28592,opts);
var inst_28594 = cljs.core.next.call(null,inst_28583);
var inst_28570 = inst_28594;
var inst_28571 = null;
var inst_28572 = (0);
var inst_28573 = (0);
var state_28690__$1 = (function (){var statearr_28744 = state_28690;
(statearr_28744[(7)] = inst_28570);

(statearr_28744[(8)] = inst_28573);

(statearr_28744[(9)] = inst_28571);

(statearr_28744[(10)] = inst_28572);

(statearr_28744[(31)] = inst_28593);

return statearr_28744;
})();
var statearr_28745_28798 = state_28690__$1;
(statearr_28745_28798[(2)] = null);

(statearr_28745_28798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (26))){
var inst_28631 = (state_28690[(21)]);
var inst_28626 = (state_28690[(22)]);
var inst_28629 = (state_28690[(24)]);
var inst_28627 = (state_28690[(23)]);
var inst_28623 = (state_28690[(18)]);
var inst_28646 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28648 = (function (){var all_files = inst_28623;
var res_SINGLEQUOTE_ = inst_28626;
var res = inst_28627;
var files_not_loaded = inst_28629;
var dependencies_that_loaded = inst_28631;
return (function (p__28647){
var map__28746 = p__28647;
var map__28746__$1 = cljs.core.__destructure_map.call(null,map__28746);
var namespace = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_28649 = cljs.core.map.call(null,inst_28648,inst_28627);
var inst_28650 = cljs.core.pr_str.call(null,inst_28649);
var inst_28651 = figwheel.client.utils.log.call(null,inst_28650);
var inst_28652 = (function (){var all_files = inst_28623;
var res_SINGLEQUOTE_ = inst_28626;
var res = inst_28627;
var files_not_loaded = inst_28629;
var dependencies_that_loaded = inst_28631;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_28653 = setTimeout(inst_28652,(10));
var state_28690__$1 = (function (){var statearr_28747 = state_28690;
(statearr_28747[(32)] = inst_28646);

(statearr_28747[(33)] = inst_28651);

return statearr_28747;
})();
var statearr_28748_28799 = state_28690__$1;
(statearr_28748_28799[(2)] = inst_28653);

(statearr_28748_28799[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (16))){
var state_28690__$1 = state_28690;
var statearr_28749_28800 = state_28690__$1;
(statearr_28749_28800[(2)] = reload_dependents);

(statearr_28749_28800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (30))){
var state_28690__$1 = state_28690;
var statearr_28750_28801 = state_28690__$1;
(statearr_28750_28801[(2)] = null);

(statearr_28750_28801[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (10))){
var inst_28583 = (state_28690[(20)]);
var inst_28585 = cljs.core.chunked_seq_QMARK_.call(null,inst_28583);
var state_28690__$1 = state_28690;
if(inst_28585){
var statearr_28751_28802 = state_28690__$1;
(statearr_28751_28802[(1)] = (13));

} else {
var statearr_28752_28803 = state_28690__$1;
(statearr_28752_28803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (18))){
var inst_28617 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
if(cljs.core.truth_(inst_28617)){
var statearr_28753_28804 = state_28690__$1;
(statearr_28753_28804[(1)] = (19));

} else {
var statearr_28754_28805 = state_28690__$1;
(statearr_28754_28805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (37))){
var inst_28685 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28755_28806 = state_28690__$1;
(statearr_28755_28806[(2)] = inst_28685);

(statearr_28755_28806[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (8))){
var inst_28570 = (state_28690[(7)]);
var inst_28583 = (state_28690[(20)]);
var inst_28583__$1 = cljs.core.seq.call(null,inst_28570);
var state_28690__$1 = (function (){var statearr_28756 = state_28690;
(statearr_28756[(20)] = inst_28583__$1);

return statearr_28756;
})();
if(inst_28583__$1){
var statearr_28757_28807 = state_28690__$1;
(statearr_28757_28807[(1)] = (10));

} else {
var statearr_28758_28808 = state_28690__$1;
(statearr_28758_28808[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto____0 = (function (){
var statearr_28759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28759[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto__);

(statearr_28759[(1)] = (1));

return statearr_28759;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto____1 = (function (state_28690){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_28690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e28760){if((e28760 instanceof Object)){
var ex__24680__auto__ = e28760;
var statearr_28761_28809 = state_28690;
(statearr_28761_28809[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28810 = state_28690;
state_28690 = G__28810;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto__ = function(state_28690){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto____1.call(this,state_28690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_28762 = f__24772__auto__.call(null);
(statearr_28762[(6)] = c__24771__auto__);

return statearr_28762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));

return c__24771__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28813,link){
var map__28814 = p__28813;
var map__28814__$1 = cljs.core.__destructure_map.call(null,map__28814);
var file = cljs.core.get.call(null,map__28814__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__28811_SHARP_,p2__28812_SHARP_){
if(cljs.core._EQ_.call(null,p1__28811_SHARP_,p2__28812_SHARP_)){
return p1__28811_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28816){
var map__28817 = p__28816;
var map__28817__$1 = cljs.core.__destructure_map.call(null,map__28817);
var match_length = cljs.core.get.call(null,map__28817__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28817__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28815_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28815_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28818_SHARP_,p2__28819_SHARP_){
return cljs.core.assoc.call(null,p1__28818_SHARP_,cljs.core.get.call(null,p2__28819_SHARP_,key),p2__28819_SHARP_);
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
var loaded_f_datas_28820 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28820);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28820);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28821,p__28822){
var map__28823 = p__28821;
var map__28823__$1 = cljs.core.__destructure_map.call(null,map__28823);
var on_cssload = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28824 = p__28822;
var map__28824__$1 = cljs.core.__destructure_map.call(null,map__28824);
var files_msg = map__28824__$1;
var files = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1720062346287
