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
var G__47606 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__47606 == null)){
return null;
} else {
return goog.object.get(G__47606,"requires");
}
}):(function (path){
var G__47607 = goog.object.get(goog.dependencies_.requires,path);
if((G__47607 == null)){
return null;
} else {
return goog.object.getKeys(G__47607);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47608_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47608_SHARP_)));
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
var G__47609 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__47609__$1 = (((G__47609 == null))?null:goog.object.get(G__47609,"provides"));
if((G__47609__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__47609__$1);
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
var seq__47610 = cljs.core.seq.call(null,provides);
var chunk__47611 = null;
var count__47612 = (0);
var i__47613 = (0);
while(true){
if((i__47613 < count__47612)){
var prov = cljs.core._nth.call(null,chunk__47611,i__47613);
var seq__47622_47634 = cljs.core.seq.call(null,requires);
var chunk__47623_47635 = null;
var count__47624_47636 = (0);
var i__47625_47637 = (0);
while(true){
if((i__47625_47637 < count__47624_47636)){
var req_47638 = cljs.core._nth.call(null,chunk__47623_47635,i__47625_47637);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47638,prov);


var G__47639 = seq__47622_47634;
var G__47640 = chunk__47623_47635;
var G__47641 = count__47624_47636;
var G__47642 = (i__47625_47637 + (1));
seq__47622_47634 = G__47639;
chunk__47623_47635 = G__47640;
count__47624_47636 = G__47641;
i__47625_47637 = G__47642;
continue;
} else {
var temp__5735__auto___47643 = cljs.core.seq.call(null,seq__47622_47634);
if(temp__5735__auto___47643){
var seq__47622_47644__$1 = temp__5735__auto___47643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47622_47644__$1)){
var c__4591__auto___47645 = cljs.core.chunk_first.call(null,seq__47622_47644__$1);
var G__47646 = cljs.core.chunk_rest.call(null,seq__47622_47644__$1);
var G__47647 = c__4591__auto___47645;
var G__47648 = cljs.core.count.call(null,c__4591__auto___47645);
var G__47649 = (0);
seq__47622_47634 = G__47646;
chunk__47623_47635 = G__47647;
count__47624_47636 = G__47648;
i__47625_47637 = G__47649;
continue;
} else {
var req_47650 = cljs.core.first.call(null,seq__47622_47644__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47650,prov);


var G__47651 = cljs.core.next.call(null,seq__47622_47644__$1);
var G__47652 = null;
var G__47653 = (0);
var G__47654 = (0);
seq__47622_47634 = G__47651;
chunk__47623_47635 = G__47652;
count__47624_47636 = G__47653;
i__47625_47637 = G__47654;
continue;
}
} else {
}
}
break;
}


var G__47655 = seq__47610;
var G__47656 = chunk__47611;
var G__47657 = count__47612;
var G__47658 = (i__47613 + (1));
seq__47610 = G__47655;
chunk__47611 = G__47656;
count__47612 = G__47657;
i__47613 = G__47658;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47610);
if(temp__5735__auto__){
var seq__47610__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47610__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__47610__$1);
var G__47659 = cljs.core.chunk_rest.call(null,seq__47610__$1);
var G__47660 = c__4591__auto__;
var G__47661 = cljs.core.count.call(null,c__4591__auto__);
var G__47662 = (0);
seq__47610 = G__47659;
chunk__47611 = G__47660;
count__47612 = G__47661;
i__47613 = G__47662;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47610__$1);
var seq__47626_47663 = cljs.core.seq.call(null,requires);
var chunk__47627_47664 = null;
var count__47628_47665 = (0);
var i__47629_47666 = (0);
while(true){
if((i__47629_47666 < count__47628_47665)){
var req_47667 = cljs.core._nth.call(null,chunk__47627_47664,i__47629_47666);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47667,prov);


var G__47668 = seq__47626_47663;
var G__47669 = chunk__47627_47664;
var G__47670 = count__47628_47665;
var G__47671 = (i__47629_47666 + (1));
seq__47626_47663 = G__47668;
chunk__47627_47664 = G__47669;
count__47628_47665 = G__47670;
i__47629_47666 = G__47671;
continue;
} else {
var temp__5735__auto___47672__$1 = cljs.core.seq.call(null,seq__47626_47663);
if(temp__5735__auto___47672__$1){
var seq__47626_47673__$1 = temp__5735__auto___47672__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47626_47673__$1)){
var c__4591__auto___47674 = cljs.core.chunk_first.call(null,seq__47626_47673__$1);
var G__47675 = cljs.core.chunk_rest.call(null,seq__47626_47673__$1);
var G__47676 = c__4591__auto___47674;
var G__47677 = cljs.core.count.call(null,c__4591__auto___47674);
var G__47678 = (0);
seq__47626_47663 = G__47675;
chunk__47627_47664 = G__47676;
count__47628_47665 = G__47677;
i__47629_47666 = G__47678;
continue;
} else {
var req_47679 = cljs.core.first.call(null,seq__47626_47673__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47679,prov);


var G__47680 = cljs.core.next.call(null,seq__47626_47673__$1);
var G__47681 = null;
var G__47682 = (0);
var G__47683 = (0);
seq__47626_47663 = G__47680;
chunk__47627_47664 = G__47681;
count__47628_47665 = G__47682;
i__47629_47666 = G__47683;
continue;
}
} else {
}
}
break;
}


var G__47684 = cljs.core.next.call(null,seq__47610__$1);
var G__47685 = null;
var G__47686 = (0);
var G__47687 = (0);
seq__47610 = G__47684;
chunk__47611 = G__47685;
count__47612 = G__47686;
i__47613 = G__47687;
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
var seq__47630 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__47631 = null;
var count__47632 = (0);
var i__47633 = (0);
while(true){
if((i__47633 < count__47632)){
var prov = cljs.core._nth.call(null,chunk__47631,i__47633);
goog.object.forEach(deps,((function (seq__47630,chunk__47631,count__47632,i__47633,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__47630,chunk__47631,count__47632,i__47633,prov,requires))
);


var G__47688 = seq__47630;
var G__47689 = chunk__47631;
var G__47690 = count__47632;
var G__47691 = (i__47633 + (1));
seq__47630 = G__47688;
chunk__47631 = G__47689;
count__47632 = G__47690;
i__47633 = G__47691;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47630);
if(temp__5735__auto__){
var seq__47630__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47630__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__47630__$1);
var G__47692 = cljs.core.chunk_rest.call(null,seq__47630__$1);
var G__47693 = c__4591__auto__;
var G__47694 = cljs.core.count.call(null,c__4591__auto__);
var G__47695 = (0);
seq__47630 = G__47692;
chunk__47631 = G__47693;
count__47632 = G__47694;
i__47633 = G__47695;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47630__$1);
goog.object.forEach(deps,((function (seq__47630,chunk__47631,count__47632,i__47633,prov,seq__47630__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__47630,chunk__47631,count__47632,i__47633,prov,seq__47630__$1,temp__5735__auto__,requires))
);


var G__47696 = cljs.core.next.call(null,seq__47630__$1);
var G__47697 = null;
var G__47698 = (0);
var G__47699 = (0);
seq__47630 = G__47696;
chunk__47631 = G__47697;
count__47632 = G__47698;
i__47633 = G__47699;
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
return cljs.core.some.call(null,(function (p__47700){
var vec__47701 = p__47700;
var _ = cljs.core.nth.call(null,vec__47701,(0),null);
var v = cljs.core.nth.call(null,vec__47701,(1),null);
var and__4149__auto__ = v;
if(cljs.core.truth_(and__4149__auto__)){
return v.call(null,dep);
} else {
return and__4149__auto__;
}
}),cljs.core.filter.call(null,(function (p__47704){
var vec__47705 = p__47704;
var k = cljs.core.nth.call(null,vec__47705,(0),null);
var v = cljs.core.nth.call(null,vec__47705,(1),null);
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

var seq__47717_47725 = cljs.core.seq.call(null,deps);
var chunk__47718_47726 = null;
var count__47719_47727 = (0);
var i__47720_47728 = (0);
while(true){
if((i__47720_47728 < count__47719_47727)){
var dep_47729 = cljs.core._nth.call(null,chunk__47718_47726,i__47720_47728);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_47729;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47729));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47729,(depth + (1)),state);
} else {
}


var G__47730 = seq__47717_47725;
var G__47731 = chunk__47718_47726;
var G__47732 = count__47719_47727;
var G__47733 = (i__47720_47728 + (1));
seq__47717_47725 = G__47730;
chunk__47718_47726 = G__47731;
count__47719_47727 = G__47732;
i__47720_47728 = G__47733;
continue;
} else {
var temp__5735__auto___47734 = cljs.core.seq.call(null,seq__47717_47725);
if(temp__5735__auto___47734){
var seq__47717_47735__$1 = temp__5735__auto___47734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47717_47735__$1)){
var c__4591__auto___47736 = cljs.core.chunk_first.call(null,seq__47717_47735__$1);
var G__47737 = cljs.core.chunk_rest.call(null,seq__47717_47735__$1);
var G__47738 = c__4591__auto___47736;
var G__47739 = cljs.core.count.call(null,c__4591__auto___47736);
var G__47740 = (0);
seq__47717_47725 = G__47737;
chunk__47718_47726 = G__47738;
count__47719_47727 = G__47739;
i__47720_47728 = G__47740;
continue;
} else {
var dep_47741 = cljs.core.first.call(null,seq__47717_47735__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = dep_47741;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47741));
} else {
return and__4149__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47741,(depth + (1)),state);
} else {
}


var G__47742 = cljs.core.next.call(null,seq__47717_47735__$1);
var G__47743 = null;
var G__47744 = (0);
var G__47745 = (0);
seq__47717_47725 = G__47742;
chunk__47718_47726 = G__47743;
count__47719_47727 = G__47744;
i__47720_47728 = G__47745;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47721){
var vec__47722 = p__47721;
var seq__47723 = cljs.core.seq.call(null,vec__47722);
var first__47724 = cljs.core.first.call(null,seq__47723);
var seq__47723__$1 = cljs.core.next.call(null,seq__47723);
var x = first__47724;
var xs = seq__47723__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__47708_SHARP_){
return clojure.set.difference.call(null,p1__47708_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__47746_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__47746_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47747 = cljs.core.seq.call(null,provides);
var chunk__47748 = null;
var count__47749 = (0);
var i__47750 = (0);
while(true){
if((i__47750 < count__47749)){
var prov = cljs.core._nth.call(null,chunk__47748,i__47750);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47759_47767 = cljs.core.seq.call(null,requires);
var chunk__47760_47768 = null;
var count__47761_47769 = (0);
var i__47762_47770 = (0);
while(true){
if((i__47762_47770 < count__47761_47769)){
var req_47771 = cljs.core._nth.call(null,chunk__47760_47768,i__47762_47770);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47771,prov);


var G__47772 = seq__47759_47767;
var G__47773 = chunk__47760_47768;
var G__47774 = count__47761_47769;
var G__47775 = (i__47762_47770 + (1));
seq__47759_47767 = G__47772;
chunk__47760_47768 = G__47773;
count__47761_47769 = G__47774;
i__47762_47770 = G__47775;
continue;
} else {
var temp__5735__auto___47776 = cljs.core.seq.call(null,seq__47759_47767);
if(temp__5735__auto___47776){
var seq__47759_47777__$1 = temp__5735__auto___47776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47759_47777__$1)){
var c__4591__auto___47778 = cljs.core.chunk_first.call(null,seq__47759_47777__$1);
var G__47779 = cljs.core.chunk_rest.call(null,seq__47759_47777__$1);
var G__47780 = c__4591__auto___47778;
var G__47781 = cljs.core.count.call(null,c__4591__auto___47778);
var G__47782 = (0);
seq__47759_47767 = G__47779;
chunk__47760_47768 = G__47780;
count__47761_47769 = G__47781;
i__47762_47770 = G__47782;
continue;
} else {
var req_47783 = cljs.core.first.call(null,seq__47759_47777__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47783,prov);


var G__47784 = cljs.core.next.call(null,seq__47759_47777__$1);
var G__47785 = null;
var G__47786 = (0);
var G__47787 = (0);
seq__47759_47767 = G__47784;
chunk__47760_47768 = G__47785;
count__47761_47769 = G__47786;
i__47762_47770 = G__47787;
continue;
}
} else {
}
}
break;
}


var G__47788 = seq__47747;
var G__47789 = chunk__47748;
var G__47790 = count__47749;
var G__47791 = (i__47750 + (1));
seq__47747 = G__47788;
chunk__47748 = G__47789;
count__47749 = G__47790;
i__47750 = G__47791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47747);
if(temp__5735__auto__){
var seq__47747__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47747__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__47747__$1);
var G__47792 = cljs.core.chunk_rest.call(null,seq__47747__$1);
var G__47793 = c__4591__auto__;
var G__47794 = cljs.core.count.call(null,c__4591__auto__);
var G__47795 = (0);
seq__47747 = G__47792;
chunk__47748 = G__47793;
count__47749 = G__47794;
i__47750 = G__47795;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47747__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47763_47796 = cljs.core.seq.call(null,requires);
var chunk__47764_47797 = null;
var count__47765_47798 = (0);
var i__47766_47799 = (0);
while(true){
if((i__47766_47799 < count__47765_47798)){
var req_47800 = cljs.core._nth.call(null,chunk__47764_47797,i__47766_47799);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47800,prov);


var G__47801 = seq__47763_47796;
var G__47802 = chunk__47764_47797;
var G__47803 = count__47765_47798;
var G__47804 = (i__47766_47799 + (1));
seq__47763_47796 = G__47801;
chunk__47764_47797 = G__47802;
count__47765_47798 = G__47803;
i__47766_47799 = G__47804;
continue;
} else {
var temp__5735__auto___47805__$1 = cljs.core.seq.call(null,seq__47763_47796);
if(temp__5735__auto___47805__$1){
var seq__47763_47806__$1 = temp__5735__auto___47805__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47763_47806__$1)){
var c__4591__auto___47807 = cljs.core.chunk_first.call(null,seq__47763_47806__$1);
var G__47808 = cljs.core.chunk_rest.call(null,seq__47763_47806__$1);
var G__47809 = c__4591__auto___47807;
var G__47810 = cljs.core.count.call(null,c__4591__auto___47807);
var G__47811 = (0);
seq__47763_47796 = G__47808;
chunk__47764_47797 = G__47809;
count__47765_47798 = G__47810;
i__47766_47799 = G__47811;
continue;
} else {
var req_47812 = cljs.core.first.call(null,seq__47763_47806__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47812,prov);


var G__47813 = cljs.core.next.call(null,seq__47763_47806__$1);
var G__47814 = null;
var G__47815 = (0);
var G__47816 = (0);
seq__47763_47796 = G__47813;
chunk__47764_47797 = G__47814;
count__47765_47798 = G__47815;
i__47766_47799 = G__47816;
continue;
}
} else {
}
}
break;
}


var G__47817 = cljs.core.next.call(null,seq__47747__$1);
var G__47818 = null;
var G__47819 = (0);
var G__47820 = (0);
seq__47747 = G__47817;
chunk__47748 = G__47818;
count__47749 = G__47819;
i__47750 = G__47820;
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
var seq__47821_47825 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47822_47826 = null;
var count__47823_47827 = (0);
var i__47824_47828 = (0);
while(true){
if((i__47824_47828 < count__47823_47827)){
var ns_47829 = cljs.core._nth.call(null,chunk__47822_47826,i__47824_47828);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47829);


var G__47830 = seq__47821_47825;
var G__47831 = chunk__47822_47826;
var G__47832 = count__47823_47827;
var G__47833 = (i__47824_47828 + (1));
seq__47821_47825 = G__47830;
chunk__47822_47826 = G__47831;
count__47823_47827 = G__47832;
i__47824_47828 = G__47833;
continue;
} else {
var temp__5735__auto___47834 = cljs.core.seq.call(null,seq__47821_47825);
if(temp__5735__auto___47834){
var seq__47821_47835__$1 = temp__5735__auto___47834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47821_47835__$1)){
var c__4591__auto___47836 = cljs.core.chunk_first.call(null,seq__47821_47835__$1);
var G__47837 = cljs.core.chunk_rest.call(null,seq__47821_47835__$1);
var G__47838 = c__4591__auto___47836;
var G__47839 = cljs.core.count.call(null,c__4591__auto___47836);
var G__47840 = (0);
seq__47821_47825 = G__47837;
chunk__47822_47826 = G__47838;
count__47823_47827 = G__47839;
i__47824_47828 = G__47840;
continue;
} else {
var ns_47841 = cljs.core.first.call(null,seq__47821_47835__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47841);


var G__47842 = cljs.core.next.call(null,seq__47821_47835__$1);
var G__47843 = null;
var G__47844 = (0);
var G__47845 = (0);
seq__47821_47825 = G__47842;
chunk__47822_47826 = G__47843;
count__47823_47827 = G__47844;
i__47824_47828 = G__47845;
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
var G__47846__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47847__i = 0, G__47847__a = new Array(arguments.length -  0);
while (G__47847__i < G__47847__a.length) {G__47847__a[G__47847__i] = arguments[G__47847__i + 0]; ++G__47847__i;}
  args = new cljs.core.IndexedSeq(G__47847__a,0,null);
} 
return G__47846__delegate.call(this,args);};
G__47846.cljs$lang$maxFixedArity = 0;
G__47846.cljs$lang$applyTo = (function (arglist__47848){
var args = cljs.core.seq(arglist__47848);
return G__47846__delegate(args);
});
G__47846.cljs$core$IFn$_invoke$arity$variadic = G__47846__delegate;
return G__47846;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__47849_SHARP_,p2__47850_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47849_SHARP_)),p2__47850_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__47851_SHARP_,p2__47852_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47851_SHARP_),p2__47852_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__47853 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__47853.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__47853.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__47853;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47854){if((e47854 instanceof Error)){
var e = e47854;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47854;

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
}catch (e47855){if((e47855 instanceof Error)){
var e = e47855;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47855;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47856 = cljs.core._EQ_;
var expr__47857 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47856.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47857))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__47856.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47857))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__47856.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47857))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47859,callback){
var map__47860 = p__47859;
var map__47860__$1 = cljs.core.__destructure_map.call(null,map__47860);
var file_msg = map__47860__$1;
var request_url = cljs.core.get.call(null,map__47860__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_47897){
var state_val_47898 = (state_47897[(1)]);
if((state_val_47898 === (7))){
var inst_47893 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
var statearr_47899_47925 = state_47897__$1;
(statearr_47899_47925[(2)] = inst_47893);

(statearr_47899_47925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (1))){
var state_47897__$1 = state_47897;
var statearr_47900_47926 = state_47897__$1;
(statearr_47900_47926[(2)] = null);

(statearr_47900_47926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (4))){
var inst_47863 = (state_47897[(7)]);
var inst_47863__$1 = (state_47897[(2)]);
var state_47897__$1 = (function (){var statearr_47901 = state_47897;
(statearr_47901[(7)] = inst_47863__$1);

return statearr_47901;
})();
if(cljs.core.truth_(inst_47863__$1)){
var statearr_47902_47927 = state_47897__$1;
(statearr_47902_47927[(1)] = (5));

} else {
var statearr_47903_47928 = state_47897__$1;
(statearr_47903_47928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (15))){
var inst_47878 = (state_47897[(8)]);
var inst_47876 = (state_47897[(9)]);
var inst_47880 = inst_47878.call(null,inst_47876);
var state_47897__$1 = state_47897;
var statearr_47904_47929 = state_47897__$1;
(statearr_47904_47929[(2)] = inst_47880);

(statearr_47904_47929[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (13))){
var inst_47887 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
var statearr_47905_47930 = state_47897__$1;
(statearr_47905_47930[(2)] = inst_47887);

(statearr_47905_47930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (6))){
var state_47897__$1 = state_47897;
var statearr_47906_47931 = state_47897__$1;
(statearr_47906_47931[(2)] = null);

(statearr_47906_47931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (17))){
var inst_47884 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
var statearr_47907_47932 = state_47897__$1;
(statearr_47907_47932[(2)] = inst_47884);

(statearr_47907_47932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (3))){
var inst_47895 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47897__$1,inst_47895);
} else {
if((state_val_47898 === (12))){
var state_47897__$1 = state_47897;
var statearr_47908_47933 = state_47897__$1;
(statearr_47908_47933[(2)] = null);

(statearr_47908_47933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (2))){
var state_47897__$1 = state_47897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47897__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47898 === (11))){
var inst_47868 = (state_47897[(10)]);
var inst_47874 = figwheel.client.file_reloading.blocking_load.call(null,inst_47868);
var state_47897__$1 = state_47897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47897__$1,(14),inst_47874);
} else {
if((state_val_47898 === (9))){
var inst_47868 = (state_47897[(10)]);
var state_47897__$1 = state_47897;
if(cljs.core.truth_(inst_47868)){
var statearr_47909_47934 = state_47897__$1;
(statearr_47909_47934[(1)] = (11));

} else {
var statearr_47910_47935 = state_47897__$1;
(statearr_47910_47935[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (5))){
var inst_47863 = (state_47897[(7)]);
var inst_47869 = (state_47897[(11)]);
var inst_47868 = cljs.core.nth.call(null,inst_47863,(0),null);
var inst_47869__$1 = cljs.core.nth.call(null,inst_47863,(1),null);
var state_47897__$1 = (function (){var statearr_47911 = state_47897;
(statearr_47911[(11)] = inst_47869__$1);

(statearr_47911[(10)] = inst_47868);

return statearr_47911;
})();
if(cljs.core.truth_(inst_47869__$1)){
var statearr_47912_47936 = state_47897__$1;
(statearr_47912_47936[(1)] = (8));

} else {
var statearr_47913_47937 = state_47897__$1;
(statearr_47913_47937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (14))){
var inst_47878 = (state_47897[(8)]);
var inst_47868 = (state_47897[(10)]);
var inst_47876 = (state_47897[(2)]);
var inst_47877 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47878__$1 = cljs.core.get.call(null,inst_47877,inst_47868);
var state_47897__$1 = (function (){var statearr_47914 = state_47897;
(statearr_47914[(8)] = inst_47878__$1);

(statearr_47914[(9)] = inst_47876);

return statearr_47914;
})();
if(cljs.core.truth_(inst_47878__$1)){
var statearr_47915_47938 = state_47897__$1;
(statearr_47915_47938[(1)] = (15));

} else {
var statearr_47916_47939 = state_47897__$1;
(statearr_47916_47939[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (16))){
var inst_47876 = (state_47897[(9)]);
var inst_47882 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47876);
var state_47897__$1 = state_47897;
var statearr_47917_47940 = state_47897__$1;
(statearr_47917_47940[(2)] = inst_47882);

(statearr_47917_47940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (10))){
var inst_47889 = (state_47897[(2)]);
var state_47897__$1 = (function (){var statearr_47918 = state_47897;
(statearr_47918[(12)] = inst_47889);

return statearr_47918;
})();
var statearr_47919_47941 = state_47897__$1;
(statearr_47919_47941[(2)] = null);

(statearr_47919_47941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (8))){
var inst_47869 = (state_47897[(11)]);
var inst_47871 = eval(inst_47869);
var state_47897__$1 = state_47897;
var statearr_47920_47942 = state_47897__$1;
(statearr_47920_47942[(2)] = inst_47871);

(statearr_47920_47942[(1)] = (10));


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
var statearr_47921 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47921[(0)] = figwheel$client$file_reloading$state_machine__26032__auto__);

(statearr_47921[(1)] = (1));

return statearr_47921;
});
var figwheel$client$file_reloading$state_machine__26032__auto____1 = (function (state_47897){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_47897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e47922){if((e47922 instanceof Object)){
var ex__26035__auto__ = e47922;
var statearr_47923_47943 = state_47897;
(statearr_47923_47943[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47944 = state_47897;
state_47897 = G__47944;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26032__auto__ = function(state_47897){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26032__auto____1.call(this,state_47897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26032__auto____0;
figwheel$client$file_reloading$state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26032__auto____1;
return figwheel$client$file_reloading$state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_47924 = f__26127__auto__.call(null);
(statearr_47924[(6)] = c__26126__auto__);

return statearr_47924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__47946 = arguments.length;
switch (G__47946) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47948,callback){
var map__47949 = p__47948;
var map__47949__$1 = cljs.core.__destructure_map.call(null,map__47949);
var file_msg = map__47949__$1;
var namespace = cljs.core.get.call(null,map__47949__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47950){
var map__47951 = p__47950;
var map__47951__$1 = cljs.core.__destructure_map.call(null,map__47951);
var file_msg = map__47951__$1;
var namespace = cljs.core.get.call(null,map__47951__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47952){
var map__47953 = p__47952;
var map__47953__$1 = cljs.core.__destructure_map.call(null,map__47953);
var file_msg = map__47953__$1;
var namespace = cljs.core.get.call(null,map__47953__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47954,callback){
var map__47955 = p__47954;
var map__47955__$1 = cljs.core.__destructure_map.call(null,map__47955);
var file_msg = map__47955__$1;
var request_url = cljs.core.get.call(null,map__47955__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26126__auto___48004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_47989){
var state_val_47990 = (state_47989[(1)]);
if((state_val_47990 === (1))){
var inst_47963 = cljs.core.seq.call(null,files);
var inst_47964 = cljs.core.first.call(null,inst_47963);
var inst_47965 = cljs.core.next.call(null,inst_47963);
var inst_47966 = files;
var state_47989__$1 = (function (){var statearr_47991 = state_47989;
(statearr_47991[(7)] = inst_47964);

(statearr_47991[(8)] = inst_47965);

(statearr_47991[(9)] = inst_47966);

return statearr_47991;
})();
var statearr_47992_48005 = state_47989__$1;
(statearr_47992_48005[(2)] = null);

(statearr_47992_48005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47990 === (2))){
var inst_47972 = (state_47989[(10)]);
var inst_47966 = (state_47989[(9)]);
var inst_47971 = cljs.core.seq.call(null,inst_47966);
var inst_47972__$1 = cljs.core.first.call(null,inst_47971);
var inst_47973 = cljs.core.next.call(null,inst_47971);
var inst_47974 = (inst_47972__$1 == null);
var inst_47975 = cljs.core.not.call(null,inst_47974);
var state_47989__$1 = (function (){var statearr_47993 = state_47989;
(statearr_47993[(10)] = inst_47972__$1);

(statearr_47993[(11)] = inst_47973);

return statearr_47993;
})();
if(inst_47975){
var statearr_47994_48006 = state_47989__$1;
(statearr_47994_48006[(1)] = (4));

} else {
var statearr_47995_48007 = state_47989__$1;
(statearr_47995_48007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47990 === (3))){
var inst_47987 = (state_47989[(2)]);
var state_47989__$1 = state_47989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47989__$1,inst_47987);
} else {
if((state_val_47990 === (4))){
var inst_47972 = (state_47989[(10)]);
var inst_47977 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47972);
var state_47989__$1 = state_47989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47989__$1,(7),inst_47977);
} else {
if((state_val_47990 === (5))){
var inst_47983 = cljs.core.async.close_BANG_.call(null,out);
var state_47989__$1 = state_47989;
var statearr_47996_48008 = state_47989__$1;
(statearr_47996_48008[(2)] = inst_47983);

(statearr_47996_48008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47990 === (6))){
var inst_47985 = (state_47989[(2)]);
var state_47989__$1 = state_47989;
var statearr_47997_48009 = state_47989__$1;
(statearr_47997_48009[(2)] = inst_47985);

(statearr_47997_48009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47990 === (7))){
var inst_47973 = (state_47989[(11)]);
var inst_47979 = (state_47989[(2)]);
var inst_47980 = cljs.core.async.put_BANG_.call(null,out,inst_47979);
var inst_47966 = inst_47973;
var state_47989__$1 = (function (){var statearr_47998 = state_47989;
(statearr_47998[(12)] = inst_47980);

(statearr_47998[(9)] = inst_47966);

return statearr_47998;
})();
var statearr_47999_48010 = state_47989__$1;
(statearr_47999_48010[(2)] = null);

(statearr_47999_48010[(1)] = (2));


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
var statearr_48000 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48000[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__);

(statearr_48000[(1)] = (1));

return statearr_48000;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____1 = (function (state_47989){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_47989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e48001){if((e48001 instanceof Object)){
var ex__26035__auto__ = e48001;
var statearr_48002_48011 = state_47989;
(statearr_48002_48011[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48012 = state_47989;
state_47989 = G__48012;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__ = function(state_47989){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____1.call(this,state_47989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_48003 = f__26127__auto__.call(null);
(statearr_48003[(6)] = c__26126__auto___48004);

return statearr_48003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__48013,opts){
var map__48014 = p__48013;
var map__48014__$1 = cljs.core.__destructure_map.call(null,map__48014);
var eval_body = cljs.core.get.call(null,map__48014__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__48014__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e48015){var e = e48015;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__48016_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48016_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__48017){
var vec__48018 = p__48017;
var k = cljs.core.nth.call(null,vec__48018,(0),null);
var v = cljs.core.nth.call(null,vec__48018,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__48021){
var vec__48022 = p__48021;
var k = cljs.core.nth.call(null,vec__48022,(0),null);
var v = cljs.core.nth.call(null,vec__48022,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__48028,p__48029){
var map__48030 = p__48028;
var map__48030__$1 = cljs.core.__destructure_map.call(null,map__48030);
var opts = map__48030__$1;
var before_jsload = cljs.core.get.call(null,map__48030__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48030__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48030__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48031 = p__48029;
var map__48031__$1 = cljs.core.__destructure_map.call(null,map__48031);
var msg = map__48031__$1;
var files = cljs.core.get.call(null,map__48031__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48031__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48031__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_48163){
var state_val_48164 = (state_48163[(1)]);
if((state_val_48164 === (7))){
var inst_48044 = (state_48163[(7)]);
var inst_48043 = (state_48163[(8)]);
var inst_48046 = (state_48163[(9)]);
var inst_48045 = (state_48163[(10)]);
var inst_48051 = cljs.core._nth.call(null,inst_48044,inst_48046);
var inst_48052 = figwheel.client.file_reloading.eval_body.call(null,inst_48051,opts);
var inst_48053 = (inst_48046 + (1));
var tmp48165 = inst_48044;
var tmp48166 = inst_48043;
var tmp48167 = inst_48045;
var inst_48043__$1 = tmp48166;
var inst_48044__$1 = tmp48165;
var inst_48045__$1 = tmp48167;
var inst_48046__$1 = inst_48053;
var state_48163__$1 = (function (){var statearr_48168 = state_48163;
(statearr_48168[(7)] = inst_48044__$1);

(statearr_48168[(8)] = inst_48043__$1);

(statearr_48168[(9)] = inst_48046__$1);

(statearr_48168[(11)] = inst_48052);

(statearr_48168[(10)] = inst_48045__$1);

return statearr_48168;
})();
var statearr_48169_48236 = state_48163__$1;
(statearr_48169_48236[(2)] = null);

(statearr_48169_48236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (20))){
var inst_48086 = (state_48163[(12)]);
var inst_48094 = figwheel.client.file_reloading.sort_files.call(null,inst_48086);
var state_48163__$1 = state_48163;
var statearr_48170_48237 = state_48163__$1;
(statearr_48170_48237[(2)] = inst_48094);

(statearr_48170_48237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (27))){
var state_48163__$1 = state_48163;
var statearr_48171_48238 = state_48163__$1;
(statearr_48171_48238[(2)] = null);

(statearr_48171_48238[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (1))){
var inst_48035 = (state_48163[(13)]);
var inst_48032 = before_jsload.call(null,files);
var inst_48033 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48034 = (function (){return (function (p1__48025_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48025_SHARP_);
});
})();
var inst_48035__$1 = cljs.core.filter.call(null,inst_48034,files);
var inst_48036 = cljs.core.not_empty.call(null,inst_48035__$1);
var state_48163__$1 = (function (){var statearr_48172 = state_48163;
(statearr_48172[(14)] = inst_48032);

(statearr_48172[(13)] = inst_48035__$1);

(statearr_48172[(15)] = inst_48033);

return statearr_48172;
})();
if(cljs.core.truth_(inst_48036)){
var statearr_48173_48239 = state_48163__$1;
(statearr_48173_48239[(1)] = (2));

} else {
var statearr_48174_48240 = state_48163__$1;
(statearr_48174_48240[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (24))){
var state_48163__$1 = state_48163;
var statearr_48175_48241 = state_48163__$1;
(statearr_48175_48241[(2)] = null);

(statearr_48175_48241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (4))){
var inst_48080 = (state_48163[(2)]);
var inst_48081 = cljs.core.List.EMPTY;
var inst_48082 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48081);
var inst_48083 = (function (){return (function (p1__48026_SHARP_){
var and__4149__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48026_SHARP_);
if(cljs.core.truth_(and__4149__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48026_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__48026_SHARP_))));
} else {
return and__4149__auto__;
}
});
})();
var inst_48084 = cljs.core.filter.call(null,inst_48083,files);
var inst_48085 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48086 = cljs.core.concat.call(null,inst_48084,inst_48085);
var state_48163__$1 = (function (){var statearr_48176 = state_48163;
(statearr_48176[(12)] = inst_48086);

(statearr_48176[(16)] = inst_48080);

(statearr_48176[(17)] = inst_48082);

return statearr_48176;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48177_48242 = state_48163__$1;
(statearr_48177_48242[(1)] = (16));

} else {
var statearr_48178_48243 = state_48163__$1;
(statearr_48178_48243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (15))){
var inst_48070 = (state_48163[(2)]);
var state_48163__$1 = state_48163;
var statearr_48179_48244 = state_48163__$1;
(statearr_48179_48244[(2)] = inst_48070);

(statearr_48179_48244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (21))){
var inst_48096 = (state_48163[(18)]);
var inst_48096__$1 = (state_48163[(2)]);
var inst_48097 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48096__$1);
var state_48163__$1 = (function (){var statearr_48180 = state_48163;
(statearr_48180[(18)] = inst_48096__$1);

return statearr_48180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48163__$1,(22),inst_48097);
} else {
if((state_val_48164 === (31))){
var inst_48161 = (state_48163[(2)]);
var state_48163__$1 = state_48163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48163__$1,inst_48161);
} else {
if((state_val_48164 === (32))){
var inst_48138 = (state_48163[(19)]);
var inst_48142 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48143 = cljs.core.map.call(null,inst_48142,inst_48138);
var inst_48144 = cljs.core.pr_str.call(null,inst_48143);
var inst_48145 = ["figwheel-no-load meta-data: ",inst_48144].join('');
var inst_48146 = figwheel.client.utils.log.call(null,inst_48145);
var state_48163__$1 = state_48163;
var statearr_48181_48245 = state_48163__$1;
(statearr_48181_48245[(2)] = inst_48146);

(statearr_48181_48245[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (33))){
var state_48163__$1 = state_48163;
var statearr_48182_48246 = state_48163__$1;
(statearr_48182_48246[(2)] = null);

(statearr_48182_48246[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (13))){
var inst_48056 = (state_48163[(20)]);
var inst_48060 = cljs.core.chunk_first.call(null,inst_48056);
var inst_48061 = cljs.core.chunk_rest.call(null,inst_48056);
var inst_48062 = cljs.core.count.call(null,inst_48060);
var inst_48043 = inst_48061;
var inst_48044 = inst_48060;
var inst_48045 = inst_48062;
var inst_48046 = (0);
var state_48163__$1 = (function (){var statearr_48183 = state_48163;
(statearr_48183[(7)] = inst_48044);

(statearr_48183[(8)] = inst_48043);

(statearr_48183[(9)] = inst_48046);

(statearr_48183[(10)] = inst_48045);

return statearr_48183;
})();
var statearr_48184_48247 = state_48163__$1;
(statearr_48184_48247[(2)] = null);

(statearr_48184_48247[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (22))){
var inst_48099 = (state_48163[(21)]);
var inst_48104 = (state_48163[(22)]);
var inst_48100 = (state_48163[(23)]);
var inst_48096 = (state_48163[(18)]);
var inst_48099__$1 = (state_48163[(2)]);
var inst_48100__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48099__$1);
var inst_48101 = (function (){var all_files = inst_48096;
var res_SINGLEQUOTE_ = inst_48099__$1;
var res = inst_48100__$1;
return (function (p1__48027_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__48027_SHARP_));
});
})();
var inst_48102 = cljs.core.filter.call(null,inst_48101,inst_48099__$1);
var inst_48103 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48104__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48103);
var inst_48105 = cljs.core.not_empty.call(null,inst_48104__$1);
var state_48163__$1 = (function (){var statearr_48185 = state_48163;
(statearr_48185[(21)] = inst_48099__$1);

(statearr_48185[(22)] = inst_48104__$1);

(statearr_48185[(23)] = inst_48100__$1);

(statearr_48185[(24)] = inst_48102);

return statearr_48185;
})();
if(cljs.core.truth_(inst_48105)){
var statearr_48186_48248 = state_48163__$1;
(statearr_48186_48248[(1)] = (23));

} else {
var statearr_48187_48249 = state_48163__$1;
(statearr_48187_48249[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (36))){
var state_48163__$1 = state_48163;
var statearr_48188_48250 = state_48163__$1;
(statearr_48188_48250[(2)] = null);

(statearr_48188_48250[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (29))){
var inst_48099 = (state_48163[(21)]);
var inst_48138 = (state_48163[(19)]);
var inst_48104 = (state_48163[(22)]);
var inst_48100 = (state_48163[(23)]);
var inst_48102 = (state_48163[(24)]);
var inst_48096 = (state_48163[(18)]);
var inst_48132 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48135 = (function (){var all_files = inst_48096;
var res_SINGLEQUOTE_ = inst_48099;
var res = inst_48100;
var files_not_loaded = inst_48102;
var dependencies_that_loaded = inst_48104;
return (function (p__48134){
var map__48189 = p__48134;
var map__48189__$1 = cljs.core.__destructure_map.call(null,map__48189);
var namespace = cljs.core.get.call(null,map__48189__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_48136 = cljs.core.group_by.call(null,inst_48135,inst_48102);
var inst_48137 = cljs.core.__destructure_map.call(null,inst_48136);
var inst_48138__$1 = cljs.core.get.call(null,inst_48137,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48139 = cljs.core.get.call(null,inst_48137,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48140 = cljs.core.not_empty.call(null,inst_48138__$1);
var state_48163__$1 = (function (){var statearr_48190 = state_48163;
(statearr_48190[(25)] = inst_48132);

(statearr_48190[(19)] = inst_48138__$1);

(statearr_48190[(26)] = inst_48139);

return statearr_48190;
})();
if(cljs.core.truth_(inst_48140)){
var statearr_48191_48251 = state_48163__$1;
(statearr_48191_48251[(1)] = (32));

} else {
var statearr_48192_48252 = state_48163__$1;
(statearr_48192_48252[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (6))){
var inst_48077 = (state_48163[(2)]);
var state_48163__$1 = state_48163;
var statearr_48193_48253 = state_48163__$1;
(statearr_48193_48253[(2)] = inst_48077);

(statearr_48193_48253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (28))){
var inst_48102 = (state_48163[(24)]);
var inst_48129 = (state_48163[(2)]);
var inst_48130 = cljs.core.not_empty.call(null,inst_48102);
var state_48163__$1 = (function (){var statearr_48194 = state_48163;
(statearr_48194[(27)] = inst_48129);

return statearr_48194;
})();
if(cljs.core.truth_(inst_48130)){
var statearr_48195_48254 = state_48163__$1;
(statearr_48195_48254[(1)] = (29));

} else {
var statearr_48196_48255 = state_48163__$1;
(statearr_48196_48255[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (25))){
var inst_48100 = (state_48163[(23)]);
var inst_48116 = (state_48163[(2)]);
var inst_48117 = cljs.core.not_empty.call(null,inst_48100);
var state_48163__$1 = (function (){var statearr_48197 = state_48163;
(statearr_48197[(28)] = inst_48116);

return statearr_48197;
})();
if(cljs.core.truth_(inst_48117)){
var statearr_48198_48256 = state_48163__$1;
(statearr_48198_48256[(1)] = (26));

} else {
var statearr_48199_48257 = state_48163__$1;
(statearr_48199_48257[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (34))){
var inst_48139 = (state_48163[(26)]);
var inst_48149 = (state_48163[(2)]);
var inst_48150 = cljs.core.not_empty.call(null,inst_48139);
var state_48163__$1 = (function (){var statearr_48200 = state_48163;
(statearr_48200[(29)] = inst_48149);

return statearr_48200;
})();
if(cljs.core.truth_(inst_48150)){
var statearr_48201_48258 = state_48163__$1;
(statearr_48201_48258[(1)] = (35));

} else {
var statearr_48202_48259 = state_48163__$1;
(statearr_48202_48259[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (17))){
var state_48163__$1 = state_48163;
var statearr_48203_48260 = state_48163__$1;
(statearr_48203_48260[(2)] = recompile_dependents);

(statearr_48203_48260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (3))){
var state_48163__$1 = state_48163;
var statearr_48204_48261 = state_48163__$1;
(statearr_48204_48261[(2)] = null);

(statearr_48204_48261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (12))){
var inst_48073 = (state_48163[(2)]);
var state_48163__$1 = state_48163;
var statearr_48205_48262 = state_48163__$1;
(statearr_48205_48262[(2)] = inst_48073);

(statearr_48205_48262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (2))){
var inst_48035 = (state_48163[(13)]);
var inst_48042 = cljs.core.seq.call(null,inst_48035);
var inst_48043 = inst_48042;
var inst_48044 = null;
var inst_48045 = (0);
var inst_48046 = (0);
var state_48163__$1 = (function (){var statearr_48206 = state_48163;
(statearr_48206[(7)] = inst_48044);

(statearr_48206[(8)] = inst_48043);

(statearr_48206[(9)] = inst_48046);

(statearr_48206[(10)] = inst_48045);

return statearr_48206;
})();
var statearr_48207_48263 = state_48163__$1;
(statearr_48207_48263[(2)] = null);

(statearr_48207_48263[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (23))){
var inst_48099 = (state_48163[(21)]);
var inst_48104 = (state_48163[(22)]);
var inst_48100 = (state_48163[(23)]);
var inst_48102 = (state_48163[(24)]);
var inst_48096 = (state_48163[(18)]);
var inst_48107 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48109 = (function (){var all_files = inst_48096;
var res_SINGLEQUOTE_ = inst_48099;
var res = inst_48100;
var files_not_loaded = inst_48102;
var dependencies_that_loaded = inst_48104;
return (function (p__48108){
var map__48208 = p__48108;
var map__48208__$1 = cljs.core.__destructure_map.call(null,map__48208);
var request_url = cljs.core.get.call(null,map__48208__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_48110 = cljs.core.reverse.call(null,inst_48104);
var inst_48111 = cljs.core.map.call(null,inst_48109,inst_48110);
var inst_48112 = cljs.core.pr_str.call(null,inst_48111);
var inst_48113 = figwheel.client.utils.log.call(null,inst_48112);
var state_48163__$1 = (function (){var statearr_48209 = state_48163;
(statearr_48209[(30)] = inst_48107);

return statearr_48209;
})();
var statearr_48210_48264 = state_48163__$1;
(statearr_48210_48264[(2)] = inst_48113);

(statearr_48210_48264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (35))){
var inst_48139 = (state_48163[(26)]);
var inst_48152 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48139);
var inst_48153 = cljs.core.pr_str.call(null,inst_48152);
var inst_48154 = ["not required: ",inst_48153].join('');
var inst_48155 = figwheel.client.utils.log.call(null,inst_48154);
var state_48163__$1 = state_48163;
var statearr_48211_48265 = state_48163__$1;
(statearr_48211_48265[(2)] = inst_48155);

(statearr_48211_48265[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (19))){
var inst_48086 = (state_48163[(12)]);
var inst_48092 = figwheel.client.file_reloading.expand_files.call(null,inst_48086);
var state_48163__$1 = state_48163;
var statearr_48212_48266 = state_48163__$1;
(statearr_48212_48266[(2)] = inst_48092);

(statearr_48212_48266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (11))){
var state_48163__$1 = state_48163;
var statearr_48213_48267 = state_48163__$1;
(statearr_48213_48267[(2)] = null);

(statearr_48213_48267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (9))){
var inst_48075 = (state_48163[(2)]);
var state_48163__$1 = state_48163;
var statearr_48214_48268 = state_48163__$1;
(statearr_48214_48268[(2)] = inst_48075);

(statearr_48214_48268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (5))){
var inst_48046 = (state_48163[(9)]);
var inst_48045 = (state_48163[(10)]);
var inst_48048 = (inst_48046 < inst_48045);
var inst_48049 = inst_48048;
var state_48163__$1 = state_48163;
if(cljs.core.truth_(inst_48049)){
var statearr_48215_48269 = state_48163__$1;
(statearr_48215_48269[(1)] = (7));

} else {
var statearr_48216_48270 = state_48163__$1;
(statearr_48216_48270[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (14))){
var inst_48056 = (state_48163[(20)]);
var inst_48065 = cljs.core.first.call(null,inst_48056);
var inst_48066 = figwheel.client.file_reloading.eval_body.call(null,inst_48065,opts);
var inst_48067 = cljs.core.next.call(null,inst_48056);
var inst_48043 = inst_48067;
var inst_48044 = null;
var inst_48045 = (0);
var inst_48046 = (0);
var state_48163__$1 = (function (){var statearr_48217 = state_48163;
(statearr_48217[(7)] = inst_48044);

(statearr_48217[(31)] = inst_48066);

(statearr_48217[(8)] = inst_48043);

(statearr_48217[(9)] = inst_48046);

(statearr_48217[(10)] = inst_48045);

return statearr_48217;
})();
var statearr_48218_48271 = state_48163__$1;
(statearr_48218_48271[(2)] = null);

(statearr_48218_48271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (26))){
var inst_48099 = (state_48163[(21)]);
var inst_48104 = (state_48163[(22)]);
var inst_48100 = (state_48163[(23)]);
var inst_48102 = (state_48163[(24)]);
var inst_48096 = (state_48163[(18)]);
var inst_48119 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48121 = (function (){var all_files = inst_48096;
var res_SINGLEQUOTE_ = inst_48099;
var res = inst_48100;
var files_not_loaded = inst_48102;
var dependencies_that_loaded = inst_48104;
return (function (p__48120){
var map__48219 = p__48120;
var map__48219__$1 = cljs.core.__destructure_map.call(null,map__48219);
var namespace = cljs.core.get.call(null,map__48219__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48219__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_48122 = cljs.core.map.call(null,inst_48121,inst_48100);
var inst_48123 = cljs.core.pr_str.call(null,inst_48122);
var inst_48124 = figwheel.client.utils.log.call(null,inst_48123);
var inst_48125 = (function (){var all_files = inst_48096;
var res_SINGLEQUOTE_ = inst_48099;
var res = inst_48100;
var files_not_loaded = inst_48102;
var dependencies_that_loaded = inst_48104;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_48126 = setTimeout(inst_48125,(10));
var state_48163__$1 = (function (){var statearr_48220 = state_48163;
(statearr_48220[(32)] = inst_48124);

(statearr_48220[(33)] = inst_48119);

return statearr_48220;
})();
var statearr_48221_48272 = state_48163__$1;
(statearr_48221_48272[(2)] = inst_48126);

(statearr_48221_48272[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (16))){
var state_48163__$1 = state_48163;
var statearr_48222_48273 = state_48163__$1;
(statearr_48222_48273[(2)] = reload_dependents);

(statearr_48222_48273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (30))){
var state_48163__$1 = state_48163;
var statearr_48223_48274 = state_48163__$1;
(statearr_48223_48274[(2)] = null);

(statearr_48223_48274[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (10))){
var inst_48056 = (state_48163[(20)]);
var inst_48058 = cljs.core.chunked_seq_QMARK_.call(null,inst_48056);
var state_48163__$1 = state_48163;
if(inst_48058){
var statearr_48224_48275 = state_48163__$1;
(statearr_48224_48275[(1)] = (13));

} else {
var statearr_48225_48276 = state_48163__$1;
(statearr_48225_48276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (18))){
var inst_48090 = (state_48163[(2)]);
var state_48163__$1 = state_48163;
if(cljs.core.truth_(inst_48090)){
var statearr_48226_48277 = state_48163__$1;
(statearr_48226_48277[(1)] = (19));

} else {
var statearr_48227_48278 = state_48163__$1;
(statearr_48227_48278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (37))){
var inst_48158 = (state_48163[(2)]);
var state_48163__$1 = state_48163;
var statearr_48228_48279 = state_48163__$1;
(statearr_48228_48279[(2)] = inst_48158);

(statearr_48228_48279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48164 === (8))){
var inst_48043 = (state_48163[(8)]);
var inst_48056 = (state_48163[(20)]);
var inst_48056__$1 = cljs.core.seq.call(null,inst_48043);
var state_48163__$1 = (function (){var statearr_48229 = state_48163;
(statearr_48229[(20)] = inst_48056__$1);

return statearr_48229;
})();
if(inst_48056__$1){
var statearr_48230_48280 = state_48163__$1;
(statearr_48230_48280[(1)] = (10));

} else {
var statearr_48231_48281 = state_48163__$1;
(statearr_48231_48281[(1)] = (11));

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
var statearr_48232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48232[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__);

(statearr_48232[(1)] = (1));

return statearr_48232;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____1 = (function (state_48163){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_48163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e48233){if((e48233 instanceof Object)){
var ex__26035__auto__ = e48233;
var statearr_48234_48282 = state_48163;
(statearr_48234_48282[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48283 = state_48163;
state_48163 = G__48283;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__ = function(state_48163){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____1.call(this,state_48163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_48235 = f__26127__auto__.call(null);
(statearr_48235[(6)] = c__26126__auto__);

return statearr_48235;
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
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48286,link){
var map__48287 = p__48286;
var map__48287__$1 = cljs.core.__destructure_map.call(null,map__48287);
var file = cljs.core.get.call(null,map__48287__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__48284_SHARP_,p2__48285_SHARP_){
if(cljs.core._EQ_.call(null,p1__48284_SHARP_,p2__48285_SHARP_)){
return p1__48284_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48289){
var map__48290 = p__48289;
var map__48290__$1 = cljs.core.__destructure_map.call(null,map__48290);
var match_length = cljs.core.get.call(null,map__48290__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48290__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48288_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48288_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48291_SHARP_,p2__48292_SHARP_){
return cljs.core.assoc.call(null,p1__48291_SHARP_,cljs.core.get.call(null,p2__48292_SHARP_,key),p2__48292_SHARP_);
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
var loaded_f_datas_48293 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_48293);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_48293);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48294,p__48295){
var map__48296 = p__48294;
var map__48296__$1 = cljs.core.__destructure_map.call(null,map__48296);
var on_cssload = cljs.core.get.call(null,map__48296__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__48297 = p__48295;
var map__48297__$1 = cljs.core.__destructure_map.call(null,map__48297);
var files_msg = map__48297__$1;
var files = cljs.core.get.call(null,map__48297__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1718651920885
