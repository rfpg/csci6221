// Compiled by ClojureScript 1.10.844 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e50871){if((e50871 instanceof Error)){
var e = e50871;
return "Error: Unable to stringify";
} else {
throw e50871;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50874 = arguments.length;
switch (G__50874) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50872_SHARP_){
if(typeof p1__50872_SHARP_ === 'string'){
return p1__50872_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50872_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4777__auto__ = [];
var len__4771__auto___50877 = arguments.length;
var i__4772__auto___50878 = (0);
while(true){
if((i__4772__auto___50878 < len__4771__auto___50877)){
args__4777__auto__.push((arguments[i__4772__auto___50878]));

var G__50879 = (i__4772__auto___50878 + (1));
i__4772__auto___50878 = G__50879;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50876){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50876));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4777__auto__ = [];
var len__4771__auto___50881 = arguments.length;
var i__4772__auto___50882 = (0);
while(true){
if((i__4772__auto___50882 < len__4771__auto___50881)){
args__4777__auto__.push((arguments[i__4772__auto___50882]));

var G__50883 = (i__4772__auto___50882 + (1));
i__4772__auto___50882 = G__50883;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50880){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50880));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50884){
var map__50885 = p__50884;
var map__50885__$1 = cljs.core.__destructure_map.call(null,map__50885);
var message = cljs.core.get.call(null,map__50885__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50885__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4160__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26126__auto___50963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_50935){
var state_val_50936 = (state_50935[(1)]);
if((state_val_50936 === (7))){
var inst_50931 = (state_50935[(2)]);
var state_50935__$1 = state_50935;
var statearr_50937_50964 = state_50935__$1;
(statearr_50937_50964[(2)] = inst_50931);

(statearr_50937_50964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (1))){
var state_50935__$1 = state_50935;
var statearr_50938_50965 = state_50935__$1;
(statearr_50938_50965[(2)] = null);

(statearr_50938_50965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (4))){
var inst_50888 = (state_50935[(7)]);
var inst_50888__$1 = (state_50935[(2)]);
var state_50935__$1 = (function (){var statearr_50939 = state_50935;
(statearr_50939[(7)] = inst_50888__$1);

return statearr_50939;
})();
if(cljs.core.truth_(inst_50888__$1)){
var statearr_50940_50966 = state_50935__$1;
(statearr_50940_50966[(1)] = (5));

} else {
var statearr_50941_50967 = state_50935__$1;
(statearr_50941_50967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (15))){
var inst_50895 = (state_50935[(8)]);
var inst_50910 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50895);
var inst_50911 = cljs.core.first.call(null,inst_50910);
var inst_50912 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50911);
var inst_50913 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50912)].join('');
var inst_50914 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50913);
var state_50935__$1 = state_50935;
var statearr_50942_50968 = state_50935__$1;
(statearr_50942_50968[(2)] = inst_50914);

(statearr_50942_50968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (13))){
var inst_50919 = (state_50935[(2)]);
var state_50935__$1 = state_50935;
var statearr_50943_50969 = state_50935__$1;
(statearr_50943_50969[(2)] = inst_50919);

(statearr_50943_50969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (6))){
var state_50935__$1 = state_50935;
var statearr_50944_50970 = state_50935__$1;
(statearr_50944_50970[(2)] = null);

(statearr_50944_50970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (17))){
var inst_50917 = (state_50935[(2)]);
var state_50935__$1 = state_50935;
var statearr_50945_50971 = state_50935__$1;
(statearr_50945_50971[(2)] = inst_50917);

(statearr_50945_50971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (3))){
var inst_50933 = (state_50935[(2)]);
var state_50935__$1 = state_50935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50935__$1,inst_50933);
} else {
if((state_val_50936 === (12))){
var inst_50894 = (state_50935[(9)]);
var inst_50908 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50894,opts);
var state_50935__$1 = state_50935;
if(inst_50908){
var statearr_50946_50972 = state_50935__$1;
(statearr_50946_50972[(1)] = (15));

} else {
var statearr_50947_50973 = state_50935__$1;
(statearr_50947_50973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (2))){
var state_50935__$1 = state_50935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50935__$1,(4),ch);
} else {
if((state_val_50936 === (11))){
var inst_50895 = (state_50935[(8)]);
var inst_50900 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50901 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50895);
var inst_50902 = cljs.core.async.timeout.call(null,(1000));
var inst_50903 = [inst_50901,inst_50902];
var inst_50904 = (new cljs.core.PersistentVector(null,2,(5),inst_50900,inst_50903,null));
var state_50935__$1 = state_50935;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50935__$1,(14),inst_50904);
} else {
if((state_val_50936 === (9))){
var inst_50895 = (state_50935[(8)]);
var inst_50921 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50922 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50895);
var inst_50923 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50922);
var inst_50924 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50923)].join('');
var inst_50925 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50924);
var state_50935__$1 = (function (){var statearr_50948 = state_50935;
(statearr_50948[(10)] = inst_50921);

return statearr_50948;
})();
var statearr_50949_50974 = state_50935__$1;
(statearr_50949_50974[(2)] = inst_50925);

(statearr_50949_50974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (5))){
var inst_50888 = (state_50935[(7)]);
var inst_50890 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50891 = (new cljs.core.PersistentArrayMap(null,2,inst_50890,null));
var inst_50892 = (new cljs.core.PersistentHashSet(null,inst_50891,null));
var inst_50893 = figwheel.client.focus_msgs.call(null,inst_50892,inst_50888);
var inst_50894 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50893);
var inst_50895 = cljs.core.first.call(null,inst_50893);
var inst_50896 = figwheel.client.autoload_QMARK_.call(null);
var state_50935__$1 = (function (){var statearr_50950 = state_50935;
(statearr_50950[(9)] = inst_50894);

(statearr_50950[(8)] = inst_50895);

return statearr_50950;
})();
if(cljs.core.truth_(inst_50896)){
var statearr_50951_50975 = state_50935__$1;
(statearr_50951_50975[(1)] = (8));

} else {
var statearr_50952_50976 = state_50935__$1;
(statearr_50952_50976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (14))){
var inst_50906 = (state_50935[(2)]);
var state_50935__$1 = state_50935;
var statearr_50953_50977 = state_50935__$1;
(statearr_50953_50977[(2)] = inst_50906);

(statearr_50953_50977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (16))){
var state_50935__$1 = state_50935;
var statearr_50954_50978 = state_50935__$1;
(statearr_50954_50978[(2)] = null);

(statearr_50954_50978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (10))){
var inst_50927 = (state_50935[(2)]);
var state_50935__$1 = (function (){var statearr_50955 = state_50935;
(statearr_50955[(11)] = inst_50927);

return statearr_50955;
})();
var statearr_50956_50979 = state_50935__$1;
(statearr_50956_50979[(2)] = null);

(statearr_50956_50979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50936 === (8))){
var inst_50894 = (state_50935[(9)]);
var inst_50898 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50894,opts);
var state_50935__$1 = state_50935;
if(cljs.core.truth_(inst_50898)){
var statearr_50957_50980 = state_50935__$1;
(statearr_50957_50980[(1)] = (11));

} else {
var statearr_50958_50981 = state_50935__$1;
(statearr_50958_50981[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____0 = (function (){
var statearr_50959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50959[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__);

(statearr_50959[(1)] = (1));

return statearr_50959;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____1 = (function (state_50935){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_50935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e50960){if((e50960 instanceof Object)){
var ex__26035__auto__ = e50960;
var statearr_50961_50982 = state_50935;
(statearr_50961_50982[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50983 = state_50935;
state_50935 = G__50983;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__ = function(state_50935){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____1.call(this,state_50935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_50962 = f__26127__auto__.call(null);
(statearr_50962[(6)] = c__26126__auto___50963);

return statearr_50962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50984_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50984_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_50990 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50986 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50987 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50988 = true;
var _STAR_print_fn_STAR__temp_val__50989 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50988);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50989);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50987);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50986);
}}catch (e50985){if((e50985 instanceof Error)){
var e = e50985;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50990], null));
} else {
var e = e50985;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50991){
var map__50992 = p__50991;
var map__50992__$1 = cljs.core.__destructure_map.call(null,map__50992);
var opts = map__50992__$1;
var build_id = cljs.core.get.call(null,map__50992__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__50993){
var vec__50994 = p__50993;
var seq__50995 = cljs.core.seq.call(null,vec__50994);
var first__50996 = cljs.core.first.call(null,seq__50995);
var seq__50995__$1 = cljs.core.next.call(null,seq__50995);
var map__50997 = first__50996;
var map__50997__$1 = cljs.core.__destructure_map.call(null,map__50997);
var msg = map__50997__$1;
var msg_name = cljs.core.get.call(null,map__50997__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50995__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50998){
var vec__50999 = p__50998;
var seq__51000 = cljs.core.seq.call(null,vec__50999);
var first__51001 = cljs.core.first.call(null,seq__51000);
var seq__51000__$1 = cljs.core.next.call(null,seq__51000);
var map__51002 = first__51001;
var map__51002__$1 = cljs.core.__destructure_map.call(null,map__51002);
var msg = map__51002__$1;
var msg_name = cljs.core.get.call(null,map__51002__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51000__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51003){
var map__51004 = p__51003;
var map__51004__$1 = cljs.core.__destructure_map.call(null,map__51004);
var on_compile_warning = cljs.core.get.call(null,map__51004__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51004__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__51005){
var vec__51006 = p__51005;
var seq__51007 = cljs.core.seq.call(null,vec__51006);
var first__51008 = cljs.core.first.call(null,seq__51007);
var seq__51007__$1 = cljs.core.next.call(null,seq__51007);
var map__51009 = first__51008;
var map__51009__$1 = cljs.core.__destructure_map.call(null,map__51009);
var msg = map__51009__$1;
var msg_name = cljs.core.get.call(null,map__51009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51007__$1;
var pred__51010 = cljs.core._EQ_;
var expr__51011 = msg_name;
if(cljs.core.truth_(pred__51010.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51011))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51010.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51011))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_51100){
var state_val_51101 = (state_51100[(1)]);
if((state_val_51101 === (7))){
var inst_51020 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
if(cljs.core.truth_(inst_51020)){
var statearr_51102_51149 = state_51100__$1;
(statearr_51102_51149[(1)] = (8));

} else {
var statearr_51103_51150 = state_51100__$1;
(statearr_51103_51150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (20))){
var inst_51094 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
var statearr_51104_51151 = state_51100__$1;
(statearr_51104_51151[(2)] = inst_51094);

(statearr_51104_51151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (27))){
var inst_51090 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
var statearr_51105_51152 = state_51100__$1;
(statearr_51105_51152[(2)] = inst_51090);

(statearr_51105_51152[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (1))){
var inst_51013 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51100__$1 = state_51100;
if(cljs.core.truth_(inst_51013)){
var statearr_51106_51153 = state_51100__$1;
(statearr_51106_51153[(1)] = (2));

} else {
var statearr_51107_51154 = state_51100__$1;
(statearr_51107_51154[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (24))){
var inst_51092 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
var statearr_51108_51155 = state_51100__$1;
(statearr_51108_51155[(2)] = inst_51092);

(statearr_51108_51155[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (4))){
var inst_51098 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51100__$1,inst_51098);
} else {
if((state_val_51101 === (15))){
var inst_51096 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
var statearr_51109_51156 = state_51100__$1;
(statearr_51109_51156[(2)] = inst_51096);

(statearr_51109_51156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (21))){
var inst_51049 = (state_51100[(2)]);
var inst_51050 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51051 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51050);
var state_51100__$1 = (function (){var statearr_51110 = state_51100;
(statearr_51110[(7)] = inst_51049);

return statearr_51110;
})();
var statearr_51111_51157 = state_51100__$1;
(statearr_51111_51157[(2)] = inst_51051);

(statearr_51111_51157[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (31))){
var inst_51079 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51100__$1 = state_51100;
if(inst_51079){
var statearr_51112_51158 = state_51100__$1;
(statearr_51112_51158[(1)] = (34));

} else {
var statearr_51113_51159 = state_51100__$1;
(statearr_51113_51159[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (32))){
var inst_51088 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
var statearr_51114_51160 = state_51100__$1;
(statearr_51114_51160[(2)] = inst_51088);

(statearr_51114_51160[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (33))){
var inst_51075 = (state_51100[(2)]);
var inst_51076 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51077 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51076);
var state_51100__$1 = (function (){var statearr_51115 = state_51100;
(statearr_51115[(8)] = inst_51075);

return statearr_51115;
})();
var statearr_51116_51161 = state_51100__$1;
(statearr_51116_51161[(2)] = inst_51077);

(statearr_51116_51161[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (13))){
var inst_51034 = figwheel.client.heads_up.clear.call(null);
var state_51100__$1 = state_51100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51100__$1,(16),inst_51034);
} else {
if((state_val_51101 === (22))){
var inst_51055 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51056 = figwheel.client.heads_up.append_warning_message.call(null,inst_51055);
var state_51100__$1 = state_51100;
var statearr_51117_51162 = state_51100__$1;
(statearr_51117_51162[(2)] = inst_51056);

(statearr_51117_51162[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (36))){
var inst_51086 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
var statearr_51118_51163 = state_51100__$1;
(statearr_51118_51163[(2)] = inst_51086);

(statearr_51118_51163[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (29))){
var inst_51066 = (state_51100[(2)]);
var inst_51067 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51068 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51067);
var state_51100__$1 = (function (){var statearr_51119 = state_51100;
(statearr_51119[(9)] = inst_51066);

return statearr_51119;
})();
var statearr_51120_51164 = state_51100__$1;
(statearr_51120_51164[(2)] = inst_51068);

(statearr_51120_51164[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (6))){
var inst_51015 = (state_51100[(10)]);
var state_51100__$1 = state_51100;
var statearr_51121_51165 = state_51100__$1;
(statearr_51121_51165[(2)] = inst_51015);

(statearr_51121_51165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (28))){
var inst_51062 = (state_51100[(2)]);
var inst_51063 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51064 = figwheel.client.heads_up.display_warning.call(null,inst_51063);
var state_51100__$1 = (function (){var statearr_51122 = state_51100;
(statearr_51122[(11)] = inst_51062);

return statearr_51122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51100__$1,(29),inst_51064);
} else {
if((state_val_51101 === (25))){
var inst_51060 = figwheel.client.heads_up.clear.call(null);
var state_51100__$1 = state_51100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51100__$1,(28),inst_51060);
} else {
if((state_val_51101 === (34))){
var inst_51081 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51100__$1 = state_51100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51100__$1,(37),inst_51081);
} else {
if((state_val_51101 === (17))){
var inst_51040 = (state_51100[(2)]);
var inst_51041 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51042 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51041);
var state_51100__$1 = (function (){var statearr_51123 = state_51100;
(statearr_51123[(12)] = inst_51040);

return statearr_51123;
})();
var statearr_51124_51166 = state_51100__$1;
(statearr_51124_51166[(2)] = inst_51042);

(statearr_51124_51166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (3))){
var inst_51032 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51100__$1 = state_51100;
if(inst_51032){
var statearr_51125_51167 = state_51100__$1;
(statearr_51125_51167[(1)] = (13));

} else {
var statearr_51126_51168 = state_51100__$1;
(statearr_51126_51168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (12))){
var inst_51028 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
var statearr_51127_51169 = state_51100__$1;
(statearr_51127_51169[(2)] = inst_51028);

(statearr_51127_51169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (2))){
var inst_51015 = (state_51100[(10)]);
var inst_51015__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51100__$1 = (function (){var statearr_51128 = state_51100;
(statearr_51128[(10)] = inst_51015__$1);

return statearr_51128;
})();
if(cljs.core.truth_(inst_51015__$1)){
var statearr_51129_51170 = state_51100__$1;
(statearr_51129_51170[(1)] = (5));

} else {
var statearr_51130_51171 = state_51100__$1;
(statearr_51130_51171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (23))){
var inst_51058 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51100__$1 = state_51100;
if(inst_51058){
var statearr_51131_51172 = state_51100__$1;
(statearr_51131_51172[(1)] = (25));

} else {
var statearr_51132_51173 = state_51100__$1;
(statearr_51132_51173[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (35))){
var state_51100__$1 = state_51100;
var statearr_51133_51174 = state_51100__$1;
(statearr_51133_51174[(2)] = null);

(statearr_51133_51174[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (19))){
var inst_51053 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51100__$1 = state_51100;
if(inst_51053){
var statearr_51134_51175 = state_51100__$1;
(statearr_51134_51175[(1)] = (22));

} else {
var statearr_51135_51176 = state_51100__$1;
(statearr_51135_51176[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (11))){
var inst_51024 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
var statearr_51136_51177 = state_51100__$1;
(statearr_51136_51177[(2)] = inst_51024);

(statearr_51136_51177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (9))){
var inst_51026 = figwheel.client.heads_up.clear.call(null);
var state_51100__$1 = state_51100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51100__$1,(12),inst_51026);
} else {
if((state_val_51101 === (5))){
var inst_51017 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51100__$1 = state_51100;
var statearr_51137_51178 = state_51100__$1;
(statearr_51137_51178[(2)] = inst_51017);

(statearr_51137_51178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (14))){
var inst_51044 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51100__$1 = state_51100;
if(inst_51044){
var statearr_51138_51179 = state_51100__$1;
(statearr_51138_51179[(1)] = (18));

} else {
var statearr_51139_51180 = state_51100__$1;
(statearr_51139_51180[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (26))){
var inst_51070 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51100__$1 = state_51100;
if(inst_51070){
var statearr_51140_51181 = state_51100__$1;
(statearr_51140_51181[(1)] = (30));

} else {
var statearr_51141_51182 = state_51100__$1;
(statearr_51141_51182[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (16))){
var inst_51036 = (state_51100[(2)]);
var inst_51037 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51038 = figwheel.client.heads_up.display_exception.call(null,inst_51037);
var state_51100__$1 = (function (){var statearr_51142 = state_51100;
(statearr_51142[(13)] = inst_51036);

return statearr_51142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51100__$1,(17),inst_51038);
} else {
if((state_val_51101 === (30))){
var inst_51072 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51073 = figwheel.client.heads_up.display_warning.call(null,inst_51072);
var state_51100__$1 = state_51100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51100__$1,(33),inst_51073);
} else {
if((state_val_51101 === (10))){
var inst_51030 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
var statearr_51143_51183 = state_51100__$1;
(statearr_51143_51183[(2)] = inst_51030);

(statearr_51143_51183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (18))){
var inst_51046 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51047 = figwheel.client.heads_up.display_exception.call(null,inst_51046);
var state_51100__$1 = state_51100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51100__$1,(21),inst_51047);
} else {
if((state_val_51101 === (37))){
var inst_51083 = (state_51100[(2)]);
var state_51100__$1 = state_51100;
var statearr_51144_51184 = state_51100__$1;
(statearr_51144_51184[(2)] = inst_51083);

(statearr_51144_51184[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51101 === (8))){
var inst_51022 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51100__$1 = state_51100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51100__$1,(11),inst_51022);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____0 = (function (){
var statearr_51145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51145[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__);

(statearr_51145[(1)] = (1));

return statearr_51145;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____1 = (function (state_51100){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_51100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e51146){if((e51146 instanceof Object)){
var ex__26035__auto__ = e51146;
var statearr_51147_51185 = state_51100;
(statearr_51147_51185[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51186 = state_51100;
state_51100 = G__51186;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__ = function(state_51100){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____1.call(this,state_51100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_51148 = f__26127__auto__.call(null);
(statearr_51148[(6)] = c__26126__auto__);

return statearr_51148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26126__auto___51215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_51201){
var state_val_51202 = (state_51201[(1)]);
if((state_val_51202 === (1))){
var state_51201__$1 = state_51201;
var statearr_51203_51216 = state_51201__$1;
(statearr_51203_51216[(2)] = null);

(statearr_51203_51216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51202 === (2))){
var state_51201__$1 = state_51201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51201__$1,(4),ch);
} else {
if((state_val_51202 === (3))){
var inst_51199 = (state_51201[(2)]);
var state_51201__$1 = state_51201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51201__$1,inst_51199);
} else {
if((state_val_51202 === (4))){
var inst_51189 = (state_51201[(7)]);
var inst_51189__$1 = (state_51201[(2)]);
var state_51201__$1 = (function (){var statearr_51204 = state_51201;
(statearr_51204[(7)] = inst_51189__$1);

return statearr_51204;
})();
if(cljs.core.truth_(inst_51189__$1)){
var statearr_51205_51217 = state_51201__$1;
(statearr_51205_51217[(1)] = (5));

} else {
var statearr_51206_51218 = state_51201__$1;
(statearr_51206_51218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51202 === (5))){
var inst_51189 = (state_51201[(7)]);
var inst_51191 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51189);
var state_51201__$1 = state_51201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51201__$1,(8),inst_51191);
} else {
if((state_val_51202 === (6))){
var state_51201__$1 = state_51201;
var statearr_51207_51219 = state_51201__$1;
(statearr_51207_51219[(2)] = null);

(statearr_51207_51219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51202 === (7))){
var inst_51197 = (state_51201[(2)]);
var state_51201__$1 = state_51201;
var statearr_51208_51220 = state_51201__$1;
(statearr_51208_51220[(2)] = inst_51197);

(statearr_51208_51220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51202 === (8))){
var inst_51193 = (state_51201[(2)]);
var state_51201__$1 = (function (){var statearr_51209 = state_51201;
(statearr_51209[(8)] = inst_51193);

return statearr_51209;
})();
var statearr_51210_51221 = state_51201__$1;
(statearr_51210_51221[(2)] = null);

(statearr_51210_51221[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26032__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26032__auto____0 = (function (){
var statearr_51211 = [null,null,null,null,null,null,null,null,null];
(statearr_51211[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26032__auto__);

(statearr_51211[(1)] = (1));

return statearr_51211;
});
var figwheel$client$heads_up_plugin_$_state_machine__26032__auto____1 = (function (state_51201){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_51201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e51212){if((e51212 instanceof Object)){
var ex__26035__auto__ = e51212;
var statearr_51213_51222 = state_51201;
(statearr_51213_51222[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51223 = state_51201;
state_51201 = G__51223;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26032__auto__ = function(state_51201){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26032__auto____1.call(this,state_51201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26032__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26032__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_51214 = f__26127__auto__.call(null);
(statearr_51214[(6)] = c__26126__auto___51215);

return statearr_51214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_51229){
var state_val_51230 = (state_51229[(1)]);
if((state_val_51230 === (1))){
var inst_51224 = cljs.core.async.timeout.call(null,(3000));
var state_51229__$1 = state_51229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51229__$1,(2),inst_51224);
} else {
if((state_val_51230 === (2))){
var inst_51226 = (state_51229[(2)]);
var inst_51227 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51229__$1 = (function (){var statearr_51231 = state_51229;
(statearr_51231[(7)] = inst_51226);

return statearr_51231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51229__$1,inst_51227);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____0 = (function (){
var statearr_51232 = [null,null,null,null,null,null,null,null];
(statearr_51232[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__);

(statearr_51232[(1)] = (1));

return statearr_51232;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____1 = (function (state_51229){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_51229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e51233){if((e51233 instanceof Object)){
var ex__26035__auto__ = e51233;
var statearr_51234_51236 = state_51229;
(statearr_51234_51236[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51237 = state_51229;
state_51229 = G__51237;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__ = function(state_51229){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____1.call(this,state_51229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_51235 = f__26127__auto__.call(null);
(statearr_51235[(6)] = c__26126__auto__);

return statearr_51235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26126__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_51244){
var state_val_51245 = (state_51244[(1)]);
if((state_val_51245 === (1))){
var inst_51238 = cljs.core.async.timeout.call(null,(2000));
var state_51244__$1 = state_51244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51244__$1,(2),inst_51238);
} else {
if((state_val_51245 === (2))){
var inst_51240 = (state_51244[(2)]);
var inst_51241 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_51242 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51241);
var state_51244__$1 = (function (){var statearr_51246 = state_51244;
(statearr_51246[(7)] = inst_51240);

return statearr_51246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51244__$1,inst_51242);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____0 = (function (){
var statearr_51247 = [null,null,null,null,null,null,null,null];
(statearr_51247[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__);

(statearr_51247[(1)] = (1));

return statearr_51247;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____1 = (function (state_51244){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_51244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e51248){if((e51248 instanceof Object)){
var ex__26035__auto__ = e51248;
var statearr_51249_51251 = state_51244;
(statearr_51249_51251[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51252 = state_51244;
state_51244 = G__51252;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__ = function(state_51244){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____1.call(this,state_51244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_51250 = f__26127__auto__.call(null);
(statearr_51250[(6)] = c__26126__auto__);

return statearr_51250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51253){
var map__51254 = p__51253;
var map__51254__$1 = cljs.core.__destructure_map.call(null,map__51254);
var file = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51255 = "";
var G__51255__$1 = (cljs.core.truth_(file)?[G__51255,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51255);
var G__51255__$2 = (cljs.core.truth_(line)?[G__51255__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51255__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = line;
if(cljs.core.truth_(and__4149__auto__)){
return column;
} else {
return and__4149__auto__;
}
})())){
return [G__51255__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51255__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51256){
var map__51257 = p__51256;
var map__51257__$1 = cljs.core.__destructure_map.call(null,map__51257);
var ed = map__51257__$1;
var exception_data = cljs.core.get.call(null,map__51257__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51257__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_51259 = (function (){var G__51258 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51258)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__51258;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_51259);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51260){
var map__51261 = p__51260;
var map__51261__$1 = cljs.core.__destructure_map.call(null,map__51261);
var w = map__51261__$1;
var message = cljs.core.get.call(null,map__51261__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4149__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4149__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__51262 = cljs.core.seq.call(null,plugins);
var chunk__51263 = null;
var count__51264 = (0);
var i__51265 = (0);
while(true){
if((i__51265 < count__51264)){
var vec__51272 = cljs.core._nth.call(null,chunk__51263,i__51265);
var k = cljs.core.nth.call(null,vec__51272,(0),null);
var plugin = cljs.core.nth.call(null,vec__51272,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51278 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51262,chunk__51263,count__51264,i__51265,pl_51278,vec__51272,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51278.call(null,msg_hist);
});})(seq__51262,chunk__51263,count__51264,i__51265,pl_51278,vec__51272,k,plugin))
);
} else {
}


var G__51279 = seq__51262;
var G__51280 = chunk__51263;
var G__51281 = count__51264;
var G__51282 = (i__51265 + (1));
seq__51262 = G__51279;
chunk__51263 = G__51280;
count__51264 = G__51281;
i__51265 = G__51282;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__51262);
if(temp__5735__auto__){
var seq__51262__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51262__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__51262__$1);
var G__51283 = cljs.core.chunk_rest.call(null,seq__51262__$1);
var G__51284 = c__4591__auto__;
var G__51285 = cljs.core.count.call(null,c__4591__auto__);
var G__51286 = (0);
seq__51262 = G__51283;
chunk__51263 = G__51284;
count__51264 = G__51285;
i__51265 = G__51286;
continue;
} else {
var vec__51275 = cljs.core.first.call(null,seq__51262__$1);
var k = cljs.core.nth.call(null,vec__51275,(0),null);
var plugin = cljs.core.nth.call(null,vec__51275,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51287 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51262,chunk__51263,count__51264,i__51265,pl_51287,vec__51275,k,plugin,seq__51262__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51287.call(null,msg_hist);
});})(seq__51262,chunk__51263,count__51264,i__51265,pl_51287,vec__51275,k,plugin,seq__51262__$1,temp__5735__auto__))
);
} else {
}


var G__51288 = cljs.core.next.call(null,seq__51262__$1);
var G__51289 = null;
var G__51290 = (0);
var G__51291 = (0);
seq__51262 = G__51288;
chunk__51263 = G__51289;
count__51264 = G__51290;
i__51265 = G__51291;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__51293 = arguments.length;
switch (G__51293) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__51294_51299 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51295_51300 = null;
var count__51296_51301 = (0);
var i__51297_51302 = (0);
while(true){
if((i__51297_51302 < count__51296_51301)){
var msg_51303 = cljs.core._nth.call(null,chunk__51295_51300,i__51297_51302);
figwheel.client.socket.handle_incoming_message.call(null,msg_51303);


var G__51304 = seq__51294_51299;
var G__51305 = chunk__51295_51300;
var G__51306 = count__51296_51301;
var G__51307 = (i__51297_51302 + (1));
seq__51294_51299 = G__51304;
chunk__51295_51300 = G__51305;
count__51296_51301 = G__51306;
i__51297_51302 = G__51307;
continue;
} else {
var temp__5735__auto___51308 = cljs.core.seq.call(null,seq__51294_51299);
if(temp__5735__auto___51308){
var seq__51294_51309__$1 = temp__5735__auto___51308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51294_51309__$1)){
var c__4591__auto___51310 = cljs.core.chunk_first.call(null,seq__51294_51309__$1);
var G__51311 = cljs.core.chunk_rest.call(null,seq__51294_51309__$1);
var G__51312 = c__4591__auto___51310;
var G__51313 = cljs.core.count.call(null,c__4591__auto___51310);
var G__51314 = (0);
seq__51294_51299 = G__51311;
chunk__51295_51300 = G__51312;
count__51296_51301 = G__51313;
i__51297_51302 = G__51314;
continue;
} else {
var msg_51315 = cljs.core.first.call(null,seq__51294_51309__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51315);


var G__51316 = cljs.core.next.call(null,seq__51294_51309__$1);
var G__51317 = null;
var G__51318 = (0);
var G__51319 = (0);
seq__51294_51299 = G__51316;
chunk__51295_51300 = G__51317;
count__51296_51301 = G__51318;
i__51297_51302 = G__51319;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4777__auto__ = [];
var len__4771__auto___51323 = arguments.length;
var i__4772__auto___51324 = (0);
while(true){
if((i__4772__auto___51324 < len__4771__auto___51323)){
args__4777__auto__.push((arguments[i__4772__auto___51324]));

var G__51325 = (i__4772__auto___51324 + (1));
i__4772__auto___51324 = G__51325;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51321){
var map__51322 = p__51321;
var map__51322__$1 = cljs.core.__destructure_map.call(null,map__51322);
var opts = map__51322__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51320){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51320));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51326){if((e51326 instanceof Error)){
var e = e51326;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51326;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__51327){
var map__51328 = p__51327;
var map__51328__$1 = cljs.core.__destructure_map.call(null,map__51328);
var msg_name = cljs.core.get.call(null,map__51328__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1718651922053
