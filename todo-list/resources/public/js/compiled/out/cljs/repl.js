// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29816){
var map__29817 = p__29816;
var map__29817__$1 = cljs.core.__destructure_map.call(null,map__29817);
var m = map__29817__$1;
var n = cljs.core.get.call(null,map__29817__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29818_29846 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29819_29847 = null;
var count__29820_29848 = (0);
var i__29821_29849 = (0);
while(true){
if((i__29821_29849 < count__29820_29848)){
var f_29850 = cljs.core._nth.call(null,chunk__29819_29847,i__29821_29849);
cljs.core.println.call(null,"  ",f_29850);


var G__29851 = seq__29818_29846;
var G__29852 = chunk__29819_29847;
var G__29853 = count__29820_29848;
var G__29854 = (i__29821_29849 + (1));
seq__29818_29846 = G__29851;
chunk__29819_29847 = G__29852;
count__29820_29848 = G__29853;
i__29821_29849 = G__29854;
continue;
} else {
var temp__5735__auto___29855 = cljs.core.seq.call(null,seq__29818_29846);
if(temp__5735__auto___29855){
var seq__29818_29856__$1 = temp__5735__auto___29855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29818_29856__$1)){
var c__4591__auto___29857 = cljs.core.chunk_first.call(null,seq__29818_29856__$1);
var G__29858 = cljs.core.chunk_rest.call(null,seq__29818_29856__$1);
var G__29859 = c__4591__auto___29857;
var G__29860 = cljs.core.count.call(null,c__4591__auto___29857);
var G__29861 = (0);
seq__29818_29846 = G__29858;
chunk__29819_29847 = G__29859;
count__29820_29848 = G__29860;
i__29821_29849 = G__29861;
continue;
} else {
var f_29862 = cljs.core.first.call(null,seq__29818_29856__$1);
cljs.core.println.call(null,"  ",f_29862);


var G__29863 = cljs.core.next.call(null,seq__29818_29856__$1);
var G__29864 = null;
var G__29865 = (0);
var G__29866 = (0);
seq__29818_29846 = G__29863;
chunk__29819_29847 = G__29864;
count__29820_29848 = G__29865;
i__29821_29849 = G__29866;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29867 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29867);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29867)))?cljs.core.second.call(null,arglists_29867):arglists_29867));
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
var seq__29822_29868 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29823_29869 = null;
var count__29824_29870 = (0);
var i__29825_29871 = (0);
while(true){
if((i__29825_29871 < count__29824_29870)){
var vec__29834_29872 = cljs.core._nth.call(null,chunk__29823_29869,i__29825_29871);
var name_29873 = cljs.core.nth.call(null,vec__29834_29872,(0),null);
var map__29837_29874 = cljs.core.nth.call(null,vec__29834_29872,(1),null);
var map__29837_29875__$1 = cljs.core.__destructure_map.call(null,map__29837_29874);
var doc_29876 = cljs.core.get.call(null,map__29837_29875__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29877 = cljs.core.get.call(null,map__29837_29875__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29873);

cljs.core.println.call(null," ",arglists_29877);

if(cljs.core.truth_(doc_29876)){
cljs.core.println.call(null," ",doc_29876);
} else {
}


var G__29878 = seq__29822_29868;
var G__29879 = chunk__29823_29869;
var G__29880 = count__29824_29870;
var G__29881 = (i__29825_29871 + (1));
seq__29822_29868 = G__29878;
chunk__29823_29869 = G__29879;
count__29824_29870 = G__29880;
i__29825_29871 = G__29881;
continue;
} else {
var temp__5735__auto___29882 = cljs.core.seq.call(null,seq__29822_29868);
if(temp__5735__auto___29882){
var seq__29822_29883__$1 = temp__5735__auto___29882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29822_29883__$1)){
var c__4591__auto___29884 = cljs.core.chunk_first.call(null,seq__29822_29883__$1);
var G__29885 = cljs.core.chunk_rest.call(null,seq__29822_29883__$1);
var G__29886 = c__4591__auto___29884;
var G__29887 = cljs.core.count.call(null,c__4591__auto___29884);
var G__29888 = (0);
seq__29822_29868 = G__29885;
chunk__29823_29869 = G__29886;
count__29824_29870 = G__29887;
i__29825_29871 = G__29888;
continue;
} else {
var vec__29838_29889 = cljs.core.first.call(null,seq__29822_29883__$1);
var name_29890 = cljs.core.nth.call(null,vec__29838_29889,(0),null);
var map__29841_29891 = cljs.core.nth.call(null,vec__29838_29889,(1),null);
var map__29841_29892__$1 = cljs.core.__destructure_map.call(null,map__29841_29891);
var doc_29893 = cljs.core.get.call(null,map__29841_29892__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29894 = cljs.core.get.call(null,map__29841_29892__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29890);

cljs.core.println.call(null," ",arglists_29894);

if(cljs.core.truth_(doc_29893)){
cljs.core.println.call(null," ",doc_29893);
} else {
}


var G__29895 = cljs.core.next.call(null,seq__29822_29883__$1);
var G__29896 = null;
var G__29897 = (0);
var G__29898 = (0);
seq__29822_29868 = G__29895;
chunk__29823_29869 = G__29896;
count__29824_29870 = G__29897;
i__29825_29871 = G__29898;
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

var seq__29842 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29843 = null;
var count__29844 = (0);
var i__29845 = (0);
while(true){
if((i__29845 < count__29844)){
var role = cljs.core._nth.call(null,chunk__29843,i__29845);
var temp__5735__auto___29899__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29899__$1)){
var spec_29900 = temp__5735__auto___29899__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29900));
} else {
}


var G__29901 = seq__29842;
var G__29902 = chunk__29843;
var G__29903 = count__29844;
var G__29904 = (i__29845 + (1));
seq__29842 = G__29901;
chunk__29843 = G__29902;
count__29844 = G__29903;
i__29845 = G__29904;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__29842);
if(temp__5735__auto____$1){
var seq__29842__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29842__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29842__$1);
var G__29905 = cljs.core.chunk_rest.call(null,seq__29842__$1);
var G__29906 = c__4591__auto__;
var G__29907 = cljs.core.count.call(null,c__4591__auto__);
var G__29908 = (0);
seq__29842 = G__29905;
chunk__29843 = G__29906;
count__29844 = G__29907;
i__29845 = G__29908;
continue;
} else {
var role = cljs.core.first.call(null,seq__29842__$1);
var temp__5735__auto___29909__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29909__$2)){
var spec_29910 = temp__5735__auto___29909__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29910));
} else {
}


var G__29911 = cljs.core.next.call(null,seq__29842__$1);
var G__29912 = null;
var G__29913 = (0);
var G__29914 = (0);
seq__29842 = G__29911;
chunk__29843 = G__29912;
count__29844 = G__29913;
i__29845 = G__29914;
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
var G__29915 = cljs.core.conj.call(null,via,t);
var G__29916 = cljs.core.ex_cause.call(null,t);
via = G__29915;
t = G__29916;
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
var map__29919 = datafied_throwable;
var map__29919__$1 = cljs.core.__destructure_map.call(null,map__29919);
var via = cljs.core.get.call(null,map__29919__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29919__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29919__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29920 = cljs.core.last.call(null,via);
var map__29920__$1 = cljs.core.__destructure_map.call(null,map__29920);
var type = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29921 = data;
var map__29921__$1 = cljs.core.__destructure_map.call(null,map__29921);
var problems = cljs.core.get.call(null,map__29921__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29921__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29921__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29922 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29922__$1 = cljs.core.__destructure_map.call(null,map__29922);
var top_data = map__29922__$1;
var source = cljs.core.get.call(null,map__29922__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29923 = phase;
var G__29923__$1 = (((G__29923 instanceof cljs.core.Keyword))?G__29923.fqn:null);
switch (G__29923__$1) {
case "read-source":
var map__29924 = data;
var map__29924__$1 = cljs.core.__destructure_map.call(null,map__29924);
var line = cljs.core.get.call(null,map__29924__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29924__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29925 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29925__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29925,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29925);
var G__29925__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29925__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29925__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29925__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29925__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29926 = top_data;
var G__29926__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29926,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29926);
var G__29926__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29926__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29926__$1);
var G__29926__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29926__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29926__$2);
var G__29926__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29926__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29926__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29926__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29926__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29927 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29927,(0),null);
var method = cljs.core.nth.call(null,vec__29927,(1),null);
var file = cljs.core.nth.call(null,vec__29927,(2),null);
var line = cljs.core.nth.call(null,vec__29927,(3),null);
var G__29930 = top_data;
var G__29930__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29930,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29930);
var G__29930__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29930__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29930__$1);
var G__29930__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__29930__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29930__$2);
var G__29930__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29930__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29930__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29930__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29930__$4;
}

break;
case "execution":
var vec__29931 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29931,(0),null);
var method = cljs.core.nth.call(null,vec__29931,(1),null);
var file = cljs.core.nth.call(null,vec__29931,(2),null);
var line = cljs.core.nth.call(null,vec__29931,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__29918_SHARP_){
var or__4160__auto__ = (p1__29918_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29918_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__29934 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29934__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29934,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29934);
var G__29934__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29934__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29934__$1);
var G__29934__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__29934__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29934__$2);
var G__29934__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29934__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29934__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29934__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29934__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29923__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29938){
var map__29939 = p__29938;
var map__29939__$1 = cljs.core.__destructure_map.call(null,map__29939);
var triage_data = map__29939__$1;
var phase = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29940 = phase;
var G__29940__$1 = (((G__29940 instanceof cljs.core.Keyword))?G__29940.fqn:null);
switch (G__29940__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29941_29950 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29942_29951 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29943_29952 = true;
var _STAR_print_fn_STAR__temp_val__29944_29953 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29943_29952);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29944_29953);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29936_SHARP_){
return cljs.core.dissoc.call(null,p1__29936_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29942_29951);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29941_29950);
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
var _STAR_print_newline_STAR__orig_val__29945_29954 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29946_29955 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29947_29956 = true;
var _STAR_print_fn_STAR__temp_val__29948_29957 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29947_29956);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29948_29957);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29937_SHARP_){
return cljs.core.dissoc.call(null,p1__29937_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29946_29955);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29945_29954);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29940__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1718642482107
