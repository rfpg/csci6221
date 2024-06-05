// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28903){
var map__28904 = p__28903;
var map__28904__$1 = cljs.core.__destructure_map.call(null,map__28904);
var m = map__28904__$1;
var n = cljs.core.get.call(null,map__28904__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28905_28933 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28906_28934 = null;
var count__28907_28935 = (0);
var i__28908_28936 = (0);
while(true){
if((i__28908_28936 < count__28907_28935)){
var f_28937 = cljs.core._nth.call(null,chunk__28906_28934,i__28908_28936);
cljs.core.println.call(null,"  ",f_28937);


var G__28938 = seq__28905_28933;
var G__28939 = chunk__28906_28934;
var G__28940 = count__28907_28935;
var G__28941 = (i__28908_28936 + (1));
seq__28905_28933 = G__28938;
chunk__28906_28934 = G__28939;
count__28907_28935 = G__28940;
i__28908_28936 = G__28941;
continue;
} else {
var temp__5735__auto___28942 = cljs.core.seq.call(null,seq__28905_28933);
if(temp__5735__auto___28942){
var seq__28905_28943__$1 = temp__5735__auto___28942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28905_28943__$1)){
var c__4591__auto___28944 = cljs.core.chunk_first.call(null,seq__28905_28943__$1);
var G__28945 = cljs.core.chunk_rest.call(null,seq__28905_28943__$1);
var G__28946 = c__4591__auto___28944;
var G__28947 = cljs.core.count.call(null,c__4591__auto___28944);
var G__28948 = (0);
seq__28905_28933 = G__28945;
chunk__28906_28934 = G__28946;
count__28907_28935 = G__28947;
i__28908_28936 = G__28948;
continue;
} else {
var f_28949 = cljs.core.first.call(null,seq__28905_28943__$1);
cljs.core.println.call(null,"  ",f_28949);


var G__28950 = cljs.core.next.call(null,seq__28905_28943__$1);
var G__28951 = null;
var G__28952 = (0);
var G__28953 = (0);
seq__28905_28933 = G__28950;
chunk__28906_28934 = G__28951;
count__28907_28935 = G__28952;
i__28908_28936 = G__28953;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28954 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28954);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28954)))?cljs.core.second.call(null,arglists_28954):arglists_28954));
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
var seq__28909_28955 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28910_28956 = null;
var count__28911_28957 = (0);
var i__28912_28958 = (0);
while(true){
if((i__28912_28958 < count__28911_28957)){
var vec__28921_28959 = cljs.core._nth.call(null,chunk__28910_28956,i__28912_28958);
var name_28960 = cljs.core.nth.call(null,vec__28921_28959,(0),null);
var map__28924_28961 = cljs.core.nth.call(null,vec__28921_28959,(1),null);
var map__28924_28962__$1 = cljs.core.__destructure_map.call(null,map__28924_28961);
var doc_28963 = cljs.core.get.call(null,map__28924_28962__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28964 = cljs.core.get.call(null,map__28924_28962__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28960);

cljs.core.println.call(null," ",arglists_28964);

if(cljs.core.truth_(doc_28963)){
cljs.core.println.call(null," ",doc_28963);
} else {
}


var G__28965 = seq__28909_28955;
var G__28966 = chunk__28910_28956;
var G__28967 = count__28911_28957;
var G__28968 = (i__28912_28958 + (1));
seq__28909_28955 = G__28965;
chunk__28910_28956 = G__28966;
count__28911_28957 = G__28967;
i__28912_28958 = G__28968;
continue;
} else {
var temp__5735__auto___28969 = cljs.core.seq.call(null,seq__28909_28955);
if(temp__5735__auto___28969){
var seq__28909_28970__$1 = temp__5735__auto___28969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28909_28970__$1)){
var c__4591__auto___28971 = cljs.core.chunk_first.call(null,seq__28909_28970__$1);
var G__28972 = cljs.core.chunk_rest.call(null,seq__28909_28970__$1);
var G__28973 = c__4591__auto___28971;
var G__28974 = cljs.core.count.call(null,c__4591__auto___28971);
var G__28975 = (0);
seq__28909_28955 = G__28972;
chunk__28910_28956 = G__28973;
count__28911_28957 = G__28974;
i__28912_28958 = G__28975;
continue;
} else {
var vec__28925_28976 = cljs.core.first.call(null,seq__28909_28970__$1);
var name_28977 = cljs.core.nth.call(null,vec__28925_28976,(0),null);
var map__28928_28978 = cljs.core.nth.call(null,vec__28925_28976,(1),null);
var map__28928_28979__$1 = cljs.core.__destructure_map.call(null,map__28928_28978);
var doc_28980 = cljs.core.get.call(null,map__28928_28979__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28981 = cljs.core.get.call(null,map__28928_28979__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28977);

cljs.core.println.call(null," ",arglists_28981);

if(cljs.core.truth_(doc_28980)){
cljs.core.println.call(null," ",doc_28980);
} else {
}


var G__28982 = cljs.core.next.call(null,seq__28909_28970__$1);
var G__28983 = null;
var G__28984 = (0);
var G__28985 = (0);
seq__28909_28955 = G__28982;
chunk__28910_28956 = G__28983;
count__28911_28957 = G__28984;
i__28912_28958 = G__28985;
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

var seq__28929 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28930 = null;
var count__28931 = (0);
var i__28932 = (0);
while(true){
if((i__28932 < count__28931)){
var role = cljs.core._nth.call(null,chunk__28930,i__28932);
var temp__5735__auto___28986__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28986__$1)){
var spec_28987 = temp__5735__auto___28986__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28987));
} else {
}


var G__28988 = seq__28929;
var G__28989 = chunk__28930;
var G__28990 = count__28931;
var G__28991 = (i__28932 + (1));
seq__28929 = G__28988;
chunk__28930 = G__28989;
count__28931 = G__28990;
i__28932 = G__28991;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__28929);
if(temp__5735__auto____$1){
var seq__28929__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28929__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__28929__$1);
var G__28992 = cljs.core.chunk_rest.call(null,seq__28929__$1);
var G__28993 = c__4591__auto__;
var G__28994 = cljs.core.count.call(null,c__4591__auto__);
var G__28995 = (0);
seq__28929 = G__28992;
chunk__28930 = G__28993;
count__28931 = G__28994;
i__28932 = G__28995;
continue;
} else {
var role = cljs.core.first.call(null,seq__28929__$1);
var temp__5735__auto___28996__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28996__$2)){
var spec_28997 = temp__5735__auto___28996__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28997));
} else {
}


var G__28998 = cljs.core.next.call(null,seq__28929__$1);
var G__28999 = null;
var G__29000 = (0);
var G__29001 = (0);
seq__28929 = G__28998;
chunk__28930 = G__28999;
count__28931 = G__29000;
i__28932 = G__29001;
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
var G__29002 = cljs.core.conj.call(null,via,t);
var G__29003 = cljs.core.ex_cause.call(null,t);
via = G__29002;
t = G__29003;
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
var map__29006 = datafied_throwable;
var map__29006__$1 = cljs.core.__destructure_map.call(null,map__29006);
var via = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29007 = cljs.core.last.call(null,via);
var map__29007__$1 = cljs.core.__destructure_map.call(null,map__29007);
var type = cljs.core.get.call(null,map__29007__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29007__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29007__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29008 = data;
var map__29008__$1 = cljs.core.__destructure_map.call(null,map__29008);
var problems = cljs.core.get.call(null,map__29008__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29008__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29008__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29009 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29009__$1 = cljs.core.__destructure_map.call(null,map__29009);
var top_data = map__29009__$1;
var source = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29010 = phase;
var G__29010__$1 = (((G__29010 instanceof cljs.core.Keyword))?G__29010.fqn:null);
switch (G__29010__$1) {
case "read-source":
var map__29011 = data;
var map__29011__$1 = cljs.core.__destructure_map.call(null,map__29011);
var line = cljs.core.get.call(null,map__29011__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29011__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29012 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29012__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29012,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29012);
var G__29012__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29012__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29012__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29012__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29012__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29013 = top_data;
var G__29013__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29013,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29013);
var G__29013__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29013__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29013__$1);
var G__29013__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29013__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29013__$2);
var G__29013__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29013__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29013__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29013__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29013__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29014 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29014,(0),null);
var method = cljs.core.nth.call(null,vec__29014,(1),null);
var file = cljs.core.nth.call(null,vec__29014,(2),null);
var line = cljs.core.nth.call(null,vec__29014,(3),null);
var G__29017 = top_data;
var G__29017__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29017,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29017);
var G__29017__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29017__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29017__$1);
var G__29017__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__29017__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29017__$2);
var G__29017__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29017__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29017__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29017__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29017__$4;
}

break;
case "execution":
var vec__29018 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29018,(0),null);
var method = cljs.core.nth.call(null,vec__29018,(1),null);
var file = cljs.core.nth.call(null,vec__29018,(2),null);
var line = cljs.core.nth.call(null,vec__29018,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__29005_SHARP_){
var or__4160__auto__ = (p1__29005_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29005_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__29021 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29021__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29021,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29021);
var G__29021__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29021__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29021__$1);
var G__29021__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__29021__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29021__$2);
var G__29021__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29021__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29021__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29021__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29021__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29010__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29025){
var map__29026 = p__29025;
var map__29026__$1 = cljs.core.__destructure_map.call(null,map__29026);
var triage_data = map__29026__$1;
var phase = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29027 = phase;
var G__29027__$1 = (((G__29027 instanceof cljs.core.Keyword))?G__29027.fqn:null);
switch (G__29027__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29028_29037 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29029_29038 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29030_29039 = true;
var _STAR_print_fn_STAR__temp_val__29031_29040 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29030_29039);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29031_29040);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29023_SHARP_){
return cljs.core.dissoc.call(null,p1__29023_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29029_29038);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29028_29037);
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
var _STAR_print_newline_STAR__orig_val__29032_29041 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29033_29042 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29034_29043 = true;
var _STAR_print_fn_STAR__temp_val__29035_29044 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29034_29043);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29035_29044);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29024_SHARP_){
return cljs.core.dissoc.call(null,p1__29024_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29033_29042);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29032_29041);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29027__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1717626496692
