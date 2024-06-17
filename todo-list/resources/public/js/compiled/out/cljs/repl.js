// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49909){
var map__49910 = p__49909;
var map__49910__$1 = cljs.core.__destructure_map.call(null,map__49910);
var m = map__49910__$1;
var n = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49911_49939 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49912_49940 = null;
var count__49913_49941 = (0);
var i__49914_49942 = (0);
while(true){
if((i__49914_49942 < count__49913_49941)){
var f_49943 = cljs.core._nth.call(null,chunk__49912_49940,i__49914_49942);
cljs.core.println.call(null,"  ",f_49943);


var G__49944 = seq__49911_49939;
var G__49945 = chunk__49912_49940;
var G__49946 = count__49913_49941;
var G__49947 = (i__49914_49942 + (1));
seq__49911_49939 = G__49944;
chunk__49912_49940 = G__49945;
count__49913_49941 = G__49946;
i__49914_49942 = G__49947;
continue;
} else {
var temp__5735__auto___49948 = cljs.core.seq.call(null,seq__49911_49939);
if(temp__5735__auto___49948){
var seq__49911_49949__$1 = temp__5735__auto___49948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49911_49949__$1)){
var c__4591__auto___49950 = cljs.core.chunk_first.call(null,seq__49911_49949__$1);
var G__49951 = cljs.core.chunk_rest.call(null,seq__49911_49949__$1);
var G__49952 = c__4591__auto___49950;
var G__49953 = cljs.core.count.call(null,c__4591__auto___49950);
var G__49954 = (0);
seq__49911_49939 = G__49951;
chunk__49912_49940 = G__49952;
count__49913_49941 = G__49953;
i__49914_49942 = G__49954;
continue;
} else {
var f_49955 = cljs.core.first.call(null,seq__49911_49949__$1);
cljs.core.println.call(null,"  ",f_49955);


var G__49956 = cljs.core.next.call(null,seq__49911_49949__$1);
var G__49957 = null;
var G__49958 = (0);
var G__49959 = (0);
seq__49911_49939 = G__49956;
chunk__49912_49940 = G__49957;
count__49913_49941 = G__49958;
i__49914_49942 = G__49959;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49960 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49960);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49960)))?cljs.core.second.call(null,arglists_49960):arglists_49960));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49915_49961 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49916_49962 = null;
var count__49917_49963 = (0);
var i__49918_49964 = (0);
while(true){
if((i__49918_49964 < count__49917_49963)){
var vec__49927_49965 = cljs.core._nth.call(null,chunk__49916_49962,i__49918_49964);
var name_49966 = cljs.core.nth.call(null,vec__49927_49965,(0),null);
var map__49930_49967 = cljs.core.nth.call(null,vec__49927_49965,(1),null);
var map__49930_49968__$1 = cljs.core.__destructure_map.call(null,map__49930_49967);
var doc_49969 = cljs.core.get.call(null,map__49930_49968__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49970 = cljs.core.get.call(null,map__49930_49968__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49966);

cljs.core.println.call(null," ",arglists_49970);

if(cljs.core.truth_(doc_49969)){
cljs.core.println.call(null," ",doc_49969);
} else {
}


var G__49971 = seq__49915_49961;
var G__49972 = chunk__49916_49962;
var G__49973 = count__49917_49963;
var G__49974 = (i__49918_49964 + (1));
seq__49915_49961 = G__49971;
chunk__49916_49962 = G__49972;
count__49917_49963 = G__49973;
i__49918_49964 = G__49974;
continue;
} else {
var temp__5735__auto___49975 = cljs.core.seq.call(null,seq__49915_49961);
if(temp__5735__auto___49975){
var seq__49915_49976__$1 = temp__5735__auto___49975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49915_49976__$1)){
var c__4591__auto___49977 = cljs.core.chunk_first.call(null,seq__49915_49976__$1);
var G__49978 = cljs.core.chunk_rest.call(null,seq__49915_49976__$1);
var G__49979 = c__4591__auto___49977;
var G__49980 = cljs.core.count.call(null,c__4591__auto___49977);
var G__49981 = (0);
seq__49915_49961 = G__49978;
chunk__49916_49962 = G__49979;
count__49917_49963 = G__49980;
i__49918_49964 = G__49981;
continue;
} else {
var vec__49931_49982 = cljs.core.first.call(null,seq__49915_49976__$1);
var name_49983 = cljs.core.nth.call(null,vec__49931_49982,(0),null);
var map__49934_49984 = cljs.core.nth.call(null,vec__49931_49982,(1),null);
var map__49934_49985__$1 = cljs.core.__destructure_map.call(null,map__49934_49984);
var doc_49986 = cljs.core.get.call(null,map__49934_49985__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49987 = cljs.core.get.call(null,map__49934_49985__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49983);

cljs.core.println.call(null," ",arglists_49987);

if(cljs.core.truth_(doc_49986)){
cljs.core.println.call(null," ",doc_49986);
} else {
}


var G__49988 = cljs.core.next.call(null,seq__49915_49976__$1);
var G__49989 = null;
var G__49990 = (0);
var G__49991 = (0);
seq__49915_49961 = G__49988;
chunk__49916_49962 = G__49989;
count__49917_49963 = G__49990;
i__49918_49964 = G__49991;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__49935 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49936 = null;
var count__49937 = (0);
var i__49938 = (0);
while(true){
if((i__49938 < count__49937)){
var role = cljs.core._nth.call(null,chunk__49936,i__49938);
var temp__5735__auto___49992__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49992__$1)){
var spec_49993 = temp__5735__auto___49992__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49993));
} else {
}


var G__49994 = seq__49935;
var G__49995 = chunk__49936;
var G__49996 = count__49937;
var G__49997 = (i__49938 + (1));
seq__49935 = G__49994;
chunk__49936 = G__49995;
count__49937 = G__49996;
i__49938 = G__49997;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__49935);
if(temp__5735__auto____$1){
var seq__49935__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49935__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__49935__$1);
var G__49998 = cljs.core.chunk_rest.call(null,seq__49935__$1);
var G__49999 = c__4591__auto__;
var G__50000 = cljs.core.count.call(null,c__4591__auto__);
var G__50001 = (0);
seq__49935 = G__49998;
chunk__49936 = G__49999;
count__49937 = G__50000;
i__49938 = G__50001;
continue;
} else {
var role = cljs.core.first.call(null,seq__49935__$1);
var temp__5735__auto___50002__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50002__$2)){
var spec_50003 = temp__5735__auto___50002__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50003));
} else {
}


var G__50004 = cljs.core.next.call(null,seq__49935__$1);
var G__50005 = null;
var G__50006 = (0);
var G__50007 = (0);
seq__49935 = G__50004;
chunk__49936 = G__50005;
count__49937 = G__50006;
i__49938 = G__50007;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50008 = cljs.core.conj.call(null,via,t);
var G__50009 = cljs.core.ex_cause.call(null,t);
via = G__50008;
t = G__50009;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50012 = datafied_throwable;
var map__50012__$1 = cljs.core.__destructure_map.call(null,map__50012);
var via = cljs.core.get.call(null,map__50012__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__50012__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__50012__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50013 = cljs.core.last.call(null,via);
var map__50013__$1 = cljs.core.__destructure_map.call(null,map__50013);
var type = cljs.core.get.call(null,map__50013__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__50013__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__50013__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50014 = data;
var map__50014__$1 = cljs.core.__destructure_map.call(null,map__50014);
var problems = cljs.core.get.call(null,map__50014__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__50014__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__50014__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50015 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__50015__$1 = cljs.core.__destructure_map.call(null,map__50015);
var top_data = map__50015__$1;
var source = cljs.core.get.call(null,map__50015__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__50016 = phase;
var G__50016__$1 = (((G__50016 instanceof cljs.core.Keyword))?G__50016.fqn:null);
switch (G__50016__$1) {
case "read-source":
var map__50017 = data;
var map__50017__$1 = cljs.core.__destructure_map.call(null,map__50017);
var line = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50018 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__50018__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__50018,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50018);
var G__50018__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__50018__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50018__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__50018__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50018__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50019 = top_data;
var G__50019__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__50019,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50019);
var G__50019__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__50019__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50019__$1);
var G__50019__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__50019__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50019__$2);
var G__50019__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__50019__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50019__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__50019__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50019__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50020 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__50020,(0),null);
var method = cljs.core.nth.call(null,vec__50020,(1),null);
var file = cljs.core.nth.call(null,vec__50020,(2),null);
var line = cljs.core.nth.call(null,vec__50020,(3),null);
var G__50023 = top_data;
var G__50023__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__50023,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50023);
var G__50023__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__50023__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50023__$1);
var G__50023__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__50023__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50023__$2);
var G__50023__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__50023__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50023__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__50023__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50023__$4;
}

break;
case "execution":
var vec__50024 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__50024,(0),null);
var method = cljs.core.nth.call(null,vec__50024,(1),null);
var file = cljs.core.nth.call(null,vec__50024,(2),null);
var line = cljs.core.nth.call(null,vec__50024,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__50011_SHARP_){
var or__4160__auto__ = (p1__50011_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__50011_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__50027 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50027__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__50027,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50027);
var G__50027__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__50027__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50027__$1);
var G__50027__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.call(null,G__50027__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50027__$2);
var G__50027__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__50027__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50027__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__50027__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50027__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50016__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50031){
var map__50032 = p__50031;
var map__50032__$1 = cljs.core.__destructure_map.call(null,map__50032);
var triage_data = map__50032__$1;
var phase = cljs.core.get.call(null,map__50032__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__50032__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__50032__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__50032__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__50032__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__50032__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__50032__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__50032__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50033 = phase;
var G__50033__$1 = (((G__50033 instanceof cljs.core.Keyword))?G__50033.fqn:null);
switch (G__50033__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50034_50043 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50035_50044 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50036_50045 = true;
var _STAR_print_fn_STAR__temp_val__50037_50046 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50036_50045);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50037_50046);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__50029_SHARP_){
return cljs.core.dissoc.call(null,p1__50029_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50035_50044);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50034_50043);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50038_50047 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50039_50048 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50040_50049 = true;
var _STAR_print_fn_STAR__temp_val__50041_50050 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50040_50049);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50041_50050);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__50030_SHARP_){
return cljs.core.dissoc.call(null,p1__50030_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50039_50048);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50038_50047);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50033__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1718651921722
