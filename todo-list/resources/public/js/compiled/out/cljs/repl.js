// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30862){
var map__30863 = p__30862;
var map__30863__$1 = cljs.core.__destructure_map.call(null,map__30863);
var m = map__30863__$1;
var n = cljs.core.get.call(null,map__30863__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30863__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30864_30892 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30865_30893 = null;
var count__30866_30894 = (0);
var i__30867_30895 = (0);
while(true){
if((i__30867_30895 < count__30866_30894)){
var f_30896 = cljs.core._nth.call(null,chunk__30865_30893,i__30867_30895);
cljs.core.println.call(null,"  ",f_30896);


var G__30897 = seq__30864_30892;
var G__30898 = chunk__30865_30893;
var G__30899 = count__30866_30894;
var G__30900 = (i__30867_30895 + (1));
seq__30864_30892 = G__30897;
chunk__30865_30893 = G__30898;
count__30866_30894 = G__30899;
i__30867_30895 = G__30900;
continue;
} else {
var temp__5735__auto___30901 = cljs.core.seq.call(null,seq__30864_30892);
if(temp__5735__auto___30901){
var seq__30864_30902__$1 = temp__5735__auto___30901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30864_30902__$1)){
var c__4591__auto___30903 = cljs.core.chunk_first.call(null,seq__30864_30902__$1);
var G__30904 = cljs.core.chunk_rest.call(null,seq__30864_30902__$1);
var G__30905 = c__4591__auto___30903;
var G__30906 = cljs.core.count.call(null,c__4591__auto___30903);
var G__30907 = (0);
seq__30864_30892 = G__30904;
chunk__30865_30893 = G__30905;
count__30866_30894 = G__30906;
i__30867_30895 = G__30907;
continue;
} else {
var f_30908 = cljs.core.first.call(null,seq__30864_30902__$1);
cljs.core.println.call(null,"  ",f_30908);


var G__30909 = cljs.core.next.call(null,seq__30864_30902__$1);
var G__30910 = null;
var G__30911 = (0);
var G__30912 = (0);
seq__30864_30892 = G__30909;
chunk__30865_30893 = G__30910;
count__30866_30894 = G__30911;
i__30867_30895 = G__30912;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30913 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30913);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30913)))?cljs.core.second.call(null,arglists_30913):arglists_30913));
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
var seq__30868_30914 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30869_30915 = null;
var count__30870_30916 = (0);
var i__30871_30917 = (0);
while(true){
if((i__30871_30917 < count__30870_30916)){
var vec__30880_30918 = cljs.core._nth.call(null,chunk__30869_30915,i__30871_30917);
var name_30919 = cljs.core.nth.call(null,vec__30880_30918,(0),null);
var map__30883_30920 = cljs.core.nth.call(null,vec__30880_30918,(1),null);
var map__30883_30921__$1 = cljs.core.__destructure_map.call(null,map__30883_30920);
var doc_30922 = cljs.core.get.call(null,map__30883_30921__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30923 = cljs.core.get.call(null,map__30883_30921__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30919);

cljs.core.println.call(null," ",arglists_30923);

if(cljs.core.truth_(doc_30922)){
cljs.core.println.call(null," ",doc_30922);
} else {
}


var G__30924 = seq__30868_30914;
var G__30925 = chunk__30869_30915;
var G__30926 = count__30870_30916;
var G__30927 = (i__30871_30917 + (1));
seq__30868_30914 = G__30924;
chunk__30869_30915 = G__30925;
count__30870_30916 = G__30926;
i__30871_30917 = G__30927;
continue;
} else {
var temp__5735__auto___30928 = cljs.core.seq.call(null,seq__30868_30914);
if(temp__5735__auto___30928){
var seq__30868_30929__$1 = temp__5735__auto___30928;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30868_30929__$1)){
var c__4591__auto___30930 = cljs.core.chunk_first.call(null,seq__30868_30929__$1);
var G__30931 = cljs.core.chunk_rest.call(null,seq__30868_30929__$1);
var G__30932 = c__4591__auto___30930;
var G__30933 = cljs.core.count.call(null,c__4591__auto___30930);
var G__30934 = (0);
seq__30868_30914 = G__30931;
chunk__30869_30915 = G__30932;
count__30870_30916 = G__30933;
i__30871_30917 = G__30934;
continue;
} else {
var vec__30884_30935 = cljs.core.first.call(null,seq__30868_30929__$1);
var name_30936 = cljs.core.nth.call(null,vec__30884_30935,(0),null);
var map__30887_30937 = cljs.core.nth.call(null,vec__30884_30935,(1),null);
var map__30887_30938__$1 = cljs.core.__destructure_map.call(null,map__30887_30937);
var doc_30939 = cljs.core.get.call(null,map__30887_30938__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30940 = cljs.core.get.call(null,map__30887_30938__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30936);

cljs.core.println.call(null," ",arglists_30940);

if(cljs.core.truth_(doc_30939)){
cljs.core.println.call(null," ",doc_30939);
} else {
}


var G__30941 = cljs.core.next.call(null,seq__30868_30929__$1);
var G__30942 = null;
var G__30943 = (0);
var G__30944 = (0);
seq__30868_30914 = G__30941;
chunk__30869_30915 = G__30942;
count__30870_30916 = G__30943;
i__30871_30917 = G__30944;
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

var seq__30888 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30889 = null;
var count__30890 = (0);
var i__30891 = (0);
while(true){
if((i__30891 < count__30890)){
var role = cljs.core._nth.call(null,chunk__30889,i__30891);
var temp__5735__auto___30945__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___30945__$1)){
var spec_30946 = temp__5735__auto___30945__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30946));
} else {
}


var G__30947 = seq__30888;
var G__30948 = chunk__30889;
var G__30949 = count__30890;
var G__30950 = (i__30891 + (1));
seq__30888 = G__30947;
chunk__30889 = G__30948;
count__30890 = G__30949;
i__30891 = G__30950;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__30888);
if(temp__5735__auto____$1){
var seq__30888__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30888__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__30888__$1);
var G__30951 = cljs.core.chunk_rest.call(null,seq__30888__$1);
var G__30952 = c__4591__auto__;
var G__30953 = cljs.core.count.call(null,c__4591__auto__);
var G__30954 = (0);
seq__30888 = G__30951;
chunk__30889 = G__30952;
count__30890 = G__30953;
i__30891 = G__30954;
continue;
} else {
var role = cljs.core.first.call(null,seq__30888__$1);
var temp__5735__auto___30955__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___30955__$2)){
var spec_30956 = temp__5735__auto___30955__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30956));
} else {
}


var G__30957 = cljs.core.next.call(null,seq__30888__$1);
var G__30958 = null;
var G__30959 = (0);
var G__30960 = (0);
seq__30888 = G__30957;
chunk__30889 = G__30958;
count__30890 = G__30959;
i__30891 = G__30960;
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
var G__30961 = cljs.core.conj.call(null,via,t);
var G__30962 = cljs.core.ex_cause.call(null,t);
via = G__30961;
t = G__30962;
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
var map__30965 = datafied_throwable;
var map__30965__$1 = cljs.core.__destructure_map.call(null,map__30965);
var via = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30966 = cljs.core.last.call(null,via);
var map__30966__$1 = cljs.core.__destructure_map.call(null,map__30966);
var type = cljs.core.get.call(null,map__30966__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30966__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30966__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30967 = data;
var map__30967__$1 = cljs.core.__destructure_map.call(null,map__30967);
var problems = cljs.core.get.call(null,map__30967__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30967__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30967__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30968 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30968__$1 = cljs.core.__destructure_map.call(null,map__30968);
var top_data = map__30968__$1;
var source = cljs.core.get.call(null,map__30968__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30969 = phase;
var G__30969__$1 = (((G__30969 instanceof cljs.core.Keyword))?G__30969.fqn:null);
switch (G__30969__$1) {
case "read-source":
var map__30970 = data;
var map__30970__$1 = cljs.core.__destructure_map.call(null,map__30970);
var line = cljs.core.get.call(null,map__30970__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30970__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30971 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30971__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30971,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30971);
var G__30971__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30971__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30971__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30971__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30971__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30972 = top_data;
var G__30972__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30972,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30972);
var G__30972__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30972__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30972__$1);
var G__30972__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30972__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30972__$2);
var G__30972__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30972__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30972__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30972__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30972__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30973 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30973,(0),null);
var method = cljs.core.nth.call(null,vec__30973,(1),null);
var file = cljs.core.nth.call(null,vec__30973,(2),null);
var line = cljs.core.nth.call(null,vec__30973,(3),null);
var G__30976 = top_data;
var G__30976__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30976,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30976);
var G__30976__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30976__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30976__$1);
var G__30976__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__30976__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30976__$2);
var G__30976__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30976__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30976__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30976__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30976__$4;
}

break;
case "execution":
var vec__30977 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30977,(0),null);
var method = cljs.core.nth.call(null,vec__30977,(1),null);
var file = cljs.core.nth.call(null,vec__30977,(2),null);
var line = cljs.core.nth.call(null,vec__30977,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__30964_SHARP_){
var or__4160__auto__ = (p1__30964_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30964_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__30980 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30980__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30980,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30980);
var G__30980__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30980__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30980__$1);
var G__30980__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__30980__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30980__$2);
var G__30980__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30980__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30980__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30980__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30980__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30969__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30984){
var map__30985 = p__30984;
var map__30985__$1 = cljs.core.__destructure_map.call(null,map__30985);
var triage_data = map__30985__$1;
var phase = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__30986 = phase;
var G__30986__$1 = (((G__30986 instanceof cljs.core.Keyword))?G__30986.fqn:null);
switch (G__30986__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30987_30996 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30988_30997 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30989_30998 = true;
var _STAR_print_fn_STAR__temp_val__30990_30999 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30989_30998);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30990_30999);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30982_SHARP_){
return cljs.core.dissoc.call(null,p1__30982_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30988_30997);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30987_30996);
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
var _STAR_print_newline_STAR__orig_val__30991_31000 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30992_31001 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30993_31002 = true;
var _STAR_print_fn_STAR__temp_val__30994_31003 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30993_31002);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30994_31003);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30983_SHARP_){
return cljs.core.dissoc.call(null,p1__30983_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30992_31001);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30991_31000);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30986__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1717787131734
