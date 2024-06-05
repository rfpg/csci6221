// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28960){
var map__28961 = p__28960;
var map__28961__$1 = cljs.core.__destructure_map.call(null,map__28961);
var m = map__28961__$1;
var n = cljs.core.get.call(null,map__28961__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28962_28990 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28963_28991 = null;
var count__28964_28992 = (0);
var i__28965_28993 = (0);
while(true){
if((i__28965_28993 < count__28964_28992)){
var f_28994 = cljs.core._nth.call(null,chunk__28963_28991,i__28965_28993);
cljs.core.println.call(null,"  ",f_28994);


var G__28995 = seq__28962_28990;
var G__28996 = chunk__28963_28991;
var G__28997 = count__28964_28992;
var G__28998 = (i__28965_28993 + (1));
seq__28962_28990 = G__28995;
chunk__28963_28991 = G__28996;
count__28964_28992 = G__28997;
i__28965_28993 = G__28998;
continue;
} else {
var temp__5735__auto___28999 = cljs.core.seq.call(null,seq__28962_28990);
if(temp__5735__auto___28999){
var seq__28962_29000__$1 = temp__5735__auto___28999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28962_29000__$1)){
var c__4591__auto___29001 = cljs.core.chunk_first.call(null,seq__28962_29000__$1);
var G__29002 = cljs.core.chunk_rest.call(null,seq__28962_29000__$1);
var G__29003 = c__4591__auto___29001;
var G__29004 = cljs.core.count.call(null,c__4591__auto___29001);
var G__29005 = (0);
seq__28962_28990 = G__29002;
chunk__28963_28991 = G__29003;
count__28964_28992 = G__29004;
i__28965_28993 = G__29005;
continue;
} else {
var f_29006 = cljs.core.first.call(null,seq__28962_29000__$1);
cljs.core.println.call(null,"  ",f_29006);


var G__29007 = cljs.core.next.call(null,seq__28962_29000__$1);
var G__29008 = null;
var G__29009 = (0);
var G__29010 = (0);
seq__28962_28990 = G__29007;
chunk__28963_28991 = G__29008;
count__28964_28992 = G__29009;
i__28965_28993 = G__29010;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29011 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29011);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29011)))?cljs.core.second.call(null,arglists_29011):arglists_29011));
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
var seq__28966_29012 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28967_29013 = null;
var count__28968_29014 = (0);
var i__28969_29015 = (0);
while(true){
if((i__28969_29015 < count__28968_29014)){
var vec__28978_29016 = cljs.core._nth.call(null,chunk__28967_29013,i__28969_29015);
var name_29017 = cljs.core.nth.call(null,vec__28978_29016,(0),null);
var map__28981_29018 = cljs.core.nth.call(null,vec__28978_29016,(1),null);
var map__28981_29019__$1 = cljs.core.__destructure_map.call(null,map__28981_29018);
var doc_29020 = cljs.core.get.call(null,map__28981_29019__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29021 = cljs.core.get.call(null,map__28981_29019__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29017);

cljs.core.println.call(null," ",arglists_29021);

if(cljs.core.truth_(doc_29020)){
cljs.core.println.call(null," ",doc_29020);
} else {
}


var G__29022 = seq__28966_29012;
var G__29023 = chunk__28967_29013;
var G__29024 = count__28968_29014;
var G__29025 = (i__28969_29015 + (1));
seq__28966_29012 = G__29022;
chunk__28967_29013 = G__29023;
count__28968_29014 = G__29024;
i__28969_29015 = G__29025;
continue;
} else {
var temp__5735__auto___29026 = cljs.core.seq.call(null,seq__28966_29012);
if(temp__5735__auto___29026){
var seq__28966_29027__$1 = temp__5735__auto___29026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28966_29027__$1)){
var c__4591__auto___29028 = cljs.core.chunk_first.call(null,seq__28966_29027__$1);
var G__29029 = cljs.core.chunk_rest.call(null,seq__28966_29027__$1);
var G__29030 = c__4591__auto___29028;
var G__29031 = cljs.core.count.call(null,c__4591__auto___29028);
var G__29032 = (0);
seq__28966_29012 = G__29029;
chunk__28967_29013 = G__29030;
count__28968_29014 = G__29031;
i__28969_29015 = G__29032;
continue;
} else {
var vec__28982_29033 = cljs.core.first.call(null,seq__28966_29027__$1);
var name_29034 = cljs.core.nth.call(null,vec__28982_29033,(0),null);
var map__28985_29035 = cljs.core.nth.call(null,vec__28982_29033,(1),null);
var map__28985_29036__$1 = cljs.core.__destructure_map.call(null,map__28985_29035);
var doc_29037 = cljs.core.get.call(null,map__28985_29036__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29038 = cljs.core.get.call(null,map__28985_29036__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29034);

cljs.core.println.call(null," ",arglists_29038);

if(cljs.core.truth_(doc_29037)){
cljs.core.println.call(null," ",doc_29037);
} else {
}


var G__29039 = cljs.core.next.call(null,seq__28966_29027__$1);
var G__29040 = null;
var G__29041 = (0);
var G__29042 = (0);
seq__28966_29012 = G__29039;
chunk__28967_29013 = G__29040;
count__28968_29014 = G__29041;
i__28969_29015 = G__29042;
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

var seq__28986 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28987 = null;
var count__28988 = (0);
var i__28989 = (0);
while(true){
if((i__28989 < count__28988)){
var role = cljs.core._nth.call(null,chunk__28987,i__28989);
var temp__5735__auto___29043__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29043__$1)){
var spec_29044 = temp__5735__auto___29043__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29044));
} else {
}


var G__29045 = seq__28986;
var G__29046 = chunk__28987;
var G__29047 = count__28988;
var G__29048 = (i__28989 + (1));
seq__28986 = G__29045;
chunk__28987 = G__29046;
count__28988 = G__29047;
i__28989 = G__29048;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__28986);
if(temp__5735__auto____$1){
var seq__28986__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28986__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__28986__$1);
var G__29049 = cljs.core.chunk_rest.call(null,seq__28986__$1);
var G__29050 = c__4591__auto__;
var G__29051 = cljs.core.count.call(null,c__4591__auto__);
var G__29052 = (0);
seq__28986 = G__29049;
chunk__28987 = G__29050;
count__28988 = G__29051;
i__28989 = G__29052;
continue;
} else {
var role = cljs.core.first.call(null,seq__28986__$1);
var temp__5735__auto___29053__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29053__$2)){
var spec_29054 = temp__5735__auto___29053__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29054));
} else {
}


var G__29055 = cljs.core.next.call(null,seq__28986__$1);
var G__29056 = null;
var G__29057 = (0);
var G__29058 = (0);
seq__28986 = G__29055;
chunk__28987 = G__29056;
count__28988 = G__29057;
i__28989 = G__29058;
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
var G__29059 = cljs.core.conj.call(null,via,t);
var G__29060 = cljs.core.ex_cause.call(null,t);
via = G__29059;
t = G__29060;
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
var map__29063 = datafied_throwable;
var map__29063__$1 = cljs.core.__destructure_map.call(null,map__29063);
var via = cljs.core.get.call(null,map__29063__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29063__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29063__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29064 = cljs.core.last.call(null,via);
var map__29064__$1 = cljs.core.__destructure_map.call(null,map__29064);
var type = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29065 = data;
var map__29065__$1 = cljs.core.__destructure_map.call(null,map__29065);
var problems = cljs.core.get.call(null,map__29065__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29065__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29065__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29066 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29066__$1 = cljs.core.__destructure_map.call(null,map__29066);
var top_data = map__29066__$1;
var source = cljs.core.get.call(null,map__29066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29067 = phase;
var G__29067__$1 = (((G__29067 instanceof cljs.core.Keyword))?G__29067.fqn:null);
switch (G__29067__$1) {
case "read-source":
var map__29068 = data;
var map__29068__$1 = cljs.core.__destructure_map.call(null,map__29068);
var line = cljs.core.get.call(null,map__29068__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29068__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29069 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29069__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29069,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29069);
var G__29069__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29069__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29069__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29069__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29069__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29070 = top_data;
var G__29070__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29070,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29070);
var G__29070__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29070__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29070__$1);
var G__29070__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29070__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29070__$2);
var G__29070__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29070__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29070__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29070__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29070__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29071 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29071,(0),null);
var method = cljs.core.nth.call(null,vec__29071,(1),null);
var file = cljs.core.nth.call(null,vec__29071,(2),null);
var line = cljs.core.nth.call(null,vec__29071,(3),null);
var G__29074 = top_data;
var G__29074__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29074,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29074);
var G__29074__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29074__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29074__$1);
var G__29074__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__29074__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29074__$2);
var G__29074__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29074__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29074__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29074__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29074__$4;
}

break;
case "execution":
var vec__29075 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29075,(0),null);
var method = cljs.core.nth.call(null,vec__29075,(1),null);
var file = cljs.core.nth.call(null,vec__29075,(2),null);
var line = cljs.core.nth.call(null,vec__29075,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__29062_SHARP_){
var or__4160__auto__ = (p1__29062_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29062_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__29078 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29078__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29078,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29078);
var G__29078__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29078__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29078__$1);
var G__29078__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__29078__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29078__$2);
var G__29078__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29078__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29078__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29078__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29078__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29067__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29082){
var map__29083 = p__29082;
var map__29083__$1 = cljs.core.__destructure_map.call(null,map__29083);
var triage_data = map__29083__$1;
var phase = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29084 = phase;
var G__29084__$1 = (((G__29084 instanceof cljs.core.Keyword))?G__29084.fqn:null);
switch (G__29084__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29085_29094 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29086_29095 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29087_29096 = true;
var _STAR_print_fn_STAR__temp_val__29088_29097 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29087_29096);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29088_29097);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29080_SHARP_){
return cljs.core.dissoc.call(null,p1__29080_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29086_29095);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29085_29094);
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
var _STAR_print_newline_STAR__orig_val__29089_29098 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29090_29099 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29091_29100 = true;
var _STAR_print_fn_STAR__temp_val__29092_29101 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29091_29100);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29092_29101);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29081_SHARP_){
return cljs.core.dissoc.call(null,p1__29081_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29090_29099);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29089_29098);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29084__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1717629078919
