// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29683){
var map__29684 = p__29683;
var map__29684__$1 = cljs.core.__destructure_map.call(null,map__29684);
var m = map__29684__$1;
var n = cljs.core.get.call(null,map__29684__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29684__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29685_29713 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29686_29714 = null;
var count__29687_29715 = (0);
var i__29688_29716 = (0);
while(true){
if((i__29688_29716 < count__29687_29715)){
var f_29717 = cljs.core._nth.call(null,chunk__29686_29714,i__29688_29716);
cljs.core.println.call(null,"  ",f_29717);


var G__29718 = seq__29685_29713;
var G__29719 = chunk__29686_29714;
var G__29720 = count__29687_29715;
var G__29721 = (i__29688_29716 + (1));
seq__29685_29713 = G__29718;
chunk__29686_29714 = G__29719;
count__29687_29715 = G__29720;
i__29688_29716 = G__29721;
continue;
} else {
var temp__5735__auto___29722 = cljs.core.seq.call(null,seq__29685_29713);
if(temp__5735__auto___29722){
var seq__29685_29723__$1 = temp__5735__auto___29722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29685_29723__$1)){
var c__4591__auto___29724 = cljs.core.chunk_first.call(null,seq__29685_29723__$1);
var G__29725 = cljs.core.chunk_rest.call(null,seq__29685_29723__$1);
var G__29726 = c__4591__auto___29724;
var G__29727 = cljs.core.count.call(null,c__4591__auto___29724);
var G__29728 = (0);
seq__29685_29713 = G__29725;
chunk__29686_29714 = G__29726;
count__29687_29715 = G__29727;
i__29688_29716 = G__29728;
continue;
} else {
var f_29729 = cljs.core.first.call(null,seq__29685_29723__$1);
cljs.core.println.call(null,"  ",f_29729);


var G__29730 = cljs.core.next.call(null,seq__29685_29723__$1);
var G__29731 = null;
var G__29732 = (0);
var G__29733 = (0);
seq__29685_29713 = G__29730;
chunk__29686_29714 = G__29731;
count__29687_29715 = G__29732;
i__29688_29716 = G__29733;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29734 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29734);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29734)))?cljs.core.second.call(null,arglists_29734):arglists_29734));
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
var seq__29689_29735 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29690_29736 = null;
var count__29691_29737 = (0);
var i__29692_29738 = (0);
while(true){
if((i__29692_29738 < count__29691_29737)){
var vec__29701_29739 = cljs.core._nth.call(null,chunk__29690_29736,i__29692_29738);
var name_29740 = cljs.core.nth.call(null,vec__29701_29739,(0),null);
var map__29704_29741 = cljs.core.nth.call(null,vec__29701_29739,(1),null);
var map__29704_29742__$1 = cljs.core.__destructure_map.call(null,map__29704_29741);
var doc_29743 = cljs.core.get.call(null,map__29704_29742__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29744 = cljs.core.get.call(null,map__29704_29742__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29740);

cljs.core.println.call(null," ",arglists_29744);

if(cljs.core.truth_(doc_29743)){
cljs.core.println.call(null," ",doc_29743);
} else {
}


var G__29745 = seq__29689_29735;
var G__29746 = chunk__29690_29736;
var G__29747 = count__29691_29737;
var G__29748 = (i__29692_29738 + (1));
seq__29689_29735 = G__29745;
chunk__29690_29736 = G__29746;
count__29691_29737 = G__29747;
i__29692_29738 = G__29748;
continue;
} else {
var temp__5735__auto___29749 = cljs.core.seq.call(null,seq__29689_29735);
if(temp__5735__auto___29749){
var seq__29689_29750__$1 = temp__5735__auto___29749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29689_29750__$1)){
var c__4591__auto___29751 = cljs.core.chunk_first.call(null,seq__29689_29750__$1);
var G__29752 = cljs.core.chunk_rest.call(null,seq__29689_29750__$1);
var G__29753 = c__4591__auto___29751;
var G__29754 = cljs.core.count.call(null,c__4591__auto___29751);
var G__29755 = (0);
seq__29689_29735 = G__29752;
chunk__29690_29736 = G__29753;
count__29691_29737 = G__29754;
i__29692_29738 = G__29755;
continue;
} else {
var vec__29705_29756 = cljs.core.first.call(null,seq__29689_29750__$1);
var name_29757 = cljs.core.nth.call(null,vec__29705_29756,(0),null);
var map__29708_29758 = cljs.core.nth.call(null,vec__29705_29756,(1),null);
var map__29708_29759__$1 = cljs.core.__destructure_map.call(null,map__29708_29758);
var doc_29760 = cljs.core.get.call(null,map__29708_29759__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29761 = cljs.core.get.call(null,map__29708_29759__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29757);

cljs.core.println.call(null," ",arglists_29761);

if(cljs.core.truth_(doc_29760)){
cljs.core.println.call(null," ",doc_29760);
} else {
}


var G__29762 = cljs.core.next.call(null,seq__29689_29750__$1);
var G__29763 = null;
var G__29764 = (0);
var G__29765 = (0);
seq__29689_29735 = G__29762;
chunk__29690_29736 = G__29763;
count__29691_29737 = G__29764;
i__29692_29738 = G__29765;
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

var seq__29709 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29710 = null;
var count__29711 = (0);
var i__29712 = (0);
while(true){
if((i__29712 < count__29711)){
var role = cljs.core._nth.call(null,chunk__29710,i__29712);
var temp__5735__auto___29766__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29766__$1)){
var spec_29767 = temp__5735__auto___29766__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29767));
} else {
}


var G__29768 = seq__29709;
var G__29769 = chunk__29710;
var G__29770 = count__29711;
var G__29771 = (i__29712 + (1));
seq__29709 = G__29768;
chunk__29710 = G__29769;
count__29711 = G__29770;
i__29712 = G__29771;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__29709);
if(temp__5735__auto____$1){
var seq__29709__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29709__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29709__$1);
var G__29772 = cljs.core.chunk_rest.call(null,seq__29709__$1);
var G__29773 = c__4591__auto__;
var G__29774 = cljs.core.count.call(null,c__4591__auto__);
var G__29775 = (0);
seq__29709 = G__29772;
chunk__29710 = G__29773;
count__29711 = G__29774;
i__29712 = G__29775;
continue;
} else {
var role = cljs.core.first.call(null,seq__29709__$1);
var temp__5735__auto___29776__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29776__$2)){
var spec_29777 = temp__5735__auto___29776__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29777));
} else {
}


var G__29778 = cljs.core.next.call(null,seq__29709__$1);
var G__29779 = null;
var G__29780 = (0);
var G__29781 = (0);
seq__29709 = G__29778;
chunk__29710 = G__29779;
count__29711 = G__29780;
i__29712 = G__29781;
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
var G__29782 = cljs.core.conj.call(null,via,t);
var G__29783 = cljs.core.ex_cause.call(null,t);
via = G__29782;
t = G__29783;
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
var map__29786 = datafied_throwable;
var map__29786__$1 = cljs.core.__destructure_map.call(null,map__29786);
var via = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29787 = cljs.core.last.call(null,via);
var map__29787__$1 = cljs.core.__destructure_map.call(null,map__29787);
var type = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29788 = data;
var map__29788__$1 = cljs.core.__destructure_map.call(null,map__29788);
var problems = cljs.core.get.call(null,map__29788__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29788__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29788__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29789 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29789__$1 = cljs.core.__destructure_map.call(null,map__29789);
var top_data = map__29789__$1;
var source = cljs.core.get.call(null,map__29789__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29790 = phase;
var G__29790__$1 = (((G__29790 instanceof cljs.core.Keyword))?G__29790.fqn:null);
switch (G__29790__$1) {
case "read-source":
var map__29791 = data;
var map__29791__$1 = cljs.core.__destructure_map.call(null,map__29791);
var line = cljs.core.get.call(null,map__29791__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29791__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29792 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29792__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29792,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29792);
var G__29792__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29792__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29792__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29792__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29792__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29793 = top_data;
var G__29793__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29793,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29793);
var G__29793__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29793__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29793__$1);
var G__29793__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29793__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29793__$2);
var G__29793__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29793__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29793__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29793__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29793__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29794 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29794,(0),null);
var method = cljs.core.nth.call(null,vec__29794,(1),null);
var file = cljs.core.nth.call(null,vec__29794,(2),null);
var line = cljs.core.nth.call(null,vec__29794,(3),null);
var G__29797 = top_data;
var G__29797__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29797,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29797);
var G__29797__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29797__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29797__$1);
var G__29797__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__29797__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29797__$2);
var G__29797__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29797__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29797__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29797__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29797__$4;
}

break;
case "execution":
var vec__29798 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29798,(0),null);
var method = cljs.core.nth.call(null,vec__29798,(1),null);
var file = cljs.core.nth.call(null,vec__29798,(2),null);
var line = cljs.core.nth.call(null,vec__29798,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__29785_SHARP_){
var or__4160__auto__ = (p1__29785_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29785_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__29801 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29801__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29801,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29801);
var G__29801__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29801__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29801__$1);
var G__29801__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__29801__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29801__$2);
var G__29801__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29801__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29801__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29801__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29801__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29790__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29805){
var map__29806 = p__29805;
var map__29806__$1 = cljs.core.__destructure_map.call(null,map__29806);
var triage_data = map__29806__$1;
var phase = cljs.core.get.call(null,map__29806__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29806__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29806__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29806__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29806__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29806__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29806__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29806__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29807 = phase;
var G__29807__$1 = (((G__29807 instanceof cljs.core.Keyword))?G__29807.fqn:null);
switch (G__29807__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29808_29817 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29809_29818 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29810_29819 = true;
var _STAR_print_fn_STAR__temp_val__29811_29820 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29810_29819);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29811_29820);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29803_SHARP_){
return cljs.core.dissoc.call(null,p1__29803_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29809_29818);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29808_29817);
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
var _STAR_print_newline_STAR__orig_val__29812_29821 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29813_29822 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29814_29823 = true;
var _STAR_print_fn_STAR__temp_val__29815_29824 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29814_29823);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29815_29824);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29804_SHARP_){
return cljs.core.dissoc.call(null,p1__29804_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29813_29822);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29812_29821);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29807__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1720062346709
