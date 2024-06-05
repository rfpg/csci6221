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
}catch (e29283){if((e29283 instanceof Error)){
var e = e29283;
return "Error: Unable to stringify";
} else {
throw e29283;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29286 = arguments.length;
switch (G__29286) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29284_SHARP_){
if(typeof p1__29284_SHARP_ === 'string'){
return p1__29284_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29284_SHARP_);
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
var len__4771__auto___29289 = arguments.length;
var i__4772__auto___29290 = (0);
while(true){
if((i__4772__auto___29290 < len__4771__auto___29289)){
args__4777__auto__.push((arguments[i__4772__auto___29290]));

var G__29291 = (i__4772__auto___29290 + (1));
i__4772__auto___29290 = G__29291;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29288){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29288));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4777__auto__ = [];
var len__4771__auto___29293 = arguments.length;
var i__4772__auto___29294 = (0);
while(true){
if((i__4772__auto___29294 < len__4771__auto___29293)){
args__4777__auto__.push((arguments[i__4772__auto___29294]));

var G__29295 = (i__4772__auto___29294 + (1));
i__4772__auto___29294 = G__29295;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29292){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29292));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29296){
var map__29297 = p__29296;
var map__29297__$1 = cljs.core.__destructure_map.call(null,map__29297);
var message = cljs.core.get.call(null,map__29297__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29297__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24116__auto___29375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_29347){
var state_val_29348 = (state_29347[(1)]);
if((state_val_29348 === (7))){
var inst_29343 = (state_29347[(2)]);
var state_29347__$1 = state_29347;
var statearr_29349_29376 = state_29347__$1;
(statearr_29349_29376[(2)] = inst_29343);

(statearr_29349_29376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (1))){
var state_29347__$1 = state_29347;
var statearr_29350_29377 = state_29347__$1;
(statearr_29350_29377[(2)] = null);

(statearr_29350_29377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (4))){
var inst_29300 = (state_29347[(7)]);
var inst_29300__$1 = (state_29347[(2)]);
var state_29347__$1 = (function (){var statearr_29351 = state_29347;
(statearr_29351[(7)] = inst_29300__$1);

return statearr_29351;
})();
if(cljs.core.truth_(inst_29300__$1)){
var statearr_29352_29378 = state_29347__$1;
(statearr_29352_29378[(1)] = (5));

} else {
var statearr_29353_29379 = state_29347__$1;
(statearr_29353_29379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (15))){
var inst_29307 = (state_29347[(8)]);
var inst_29322 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29307);
var inst_29323 = cljs.core.first.call(null,inst_29322);
var inst_29324 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29323);
var inst_29325 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29324)].join('');
var inst_29326 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29325);
var state_29347__$1 = state_29347;
var statearr_29354_29380 = state_29347__$1;
(statearr_29354_29380[(2)] = inst_29326);

(statearr_29354_29380[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (13))){
var inst_29331 = (state_29347[(2)]);
var state_29347__$1 = state_29347;
var statearr_29355_29381 = state_29347__$1;
(statearr_29355_29381[(2)] = inst_29331);

(statearr_29355_29381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (6))){
var state_29347__$1 = state_29347;
var statearr_29356_29382 = state_29347__$1;
(statearr_29356_29382[(2)] = null);

(statearr_29356_29382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (17))){
var inst_29329 = (state_29347[(2)]);
var state_29347__$1 = state_29347;
var statearr_29357_29383 = state_29347__$1;
(statearr_29357_29383[(2)] = inst_29329);

(statearr_29357_29383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (3))){
var inst_29345 = (state_29347[(2)]);
var state_29347__$1 = state_29347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29347__$1,inst_29345);
} else {
if((state_val_29348 === (12))){
var inst_29306 = (state_29347[(9)]);
var inst_29320 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29306,opts);
var state_29347__$1 = state_29347;
if(inst_29320){
var statearr_29358_29384 = state_29347__$1;
(statearr_29358_29384[(1)] = (15));

} else {
var statearr_29359_29385 = state_29347__$1;
(statearr_29359_29385[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (2))){
var state_29347__$1 = state_29347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29347__$1,(4),ch);
} else {
if((state_val_29348 === (11))){
var inst_29307 = (state_29347[(8)]);
var inst_29312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29313 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29307);
var inst_29314 = cljs.core.async.timeout.call(null,(1000));
var inst_29315 = [inst_29313,inst_29314];
var inst_29316 = (new cljs.core.PersistentVector(null,2,(5),inst_29312,inst_29315,null));
var state_29347__$1 = state_29347;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29347__$1,(14),inst_29316);
} else {
if((state_val_29348 === (9))){
var inst_29307 = (state_29347[(8)]);
var inst_29333 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29334 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29307);
var inst_29335 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29334);
var inst_29336 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29335)].join('');
var inst_29337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29336);
var state_29347__$1 = (function (){var statearr_29360 = state_29347;
(statearr_29360[(10)] = inst_29333);

return statearr_29360;
})();
var statearr_29361_29386 = state_29347__$1;
(statearr_29361_29386[(2)] = inst_29337);

(statearr_29361_29386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (5))){
var inst_29300 = (state_29347[(7)]);
var inst_29302 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29303 = (new cljs.core.PersistentArrayMap(null,2,inst_29302,null));
var inst_29304 = (new cljs.core.PersistentHashSet(null,inst_29303,null));
var inst_29305 = figwheel.client.focus_msgs.call(null,inst_29304,inst_29300);
var inst_29306 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29305);
var inst_29307 = cljs.core.first.call(null,inst_29305);
var inst_29308 = figwheel.client.autoload_QMARK_.call(null);
var state_29347__$1 = (function (){var statearr_29362 = state_29347;
(statearr_29362[(9)] = inst_29306);

(statearr_29362[(8)] = inst_29307);

return statearr_29362;
})();
if(cljs.core.truth_(inst_29308)){
var statearr_29363_29387 = state_29347__$1;
(statearr_29363_29387[(1)] = (8));

} else {
var statearr_29364_29388 = state_29347__$1;
(statearr_29364_29388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (14))){
var inst_29318 = (state_29347[(2)]);
var state_29347__$1 = state_29347;
var statearr_29365_29389 = state_29347__$1;
(statearr_29365_29389[(2)] = inst_29318);

(statearr_29365_29389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (16))){
var state_29347__$1 = state_29347;
var statearr_29366_29390 = state_29347__$1;
(statearr_29366_29390[(2)] = null);

(statearr_29366_29390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (10))){
var inst_29339 = (state_29347[(2)]);
var state_29347__$1 = (function (){var statearr_29367 = state_29347;
(statearr_29367[(11)] = inst_29339);

return statearr_29367;
})();
var statearr_29368_29391 = state_29347__$1;
(statearr_29368_29391[(2)] = null);

(statearr_29368_29391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (8))){
var inst_29306 = (state_29347[(9)]);
var inst_29310 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29306,opts);
var state_29347__$1 = state_29347;
if(cljs.core.truth_(inst_29310)){
var statearr_29369_29392 = state_29347__$1;
(statearr_29369_29392[(1)] = (11));

} else {
var statearr_29370_29393 = state_29347__$1;
(statearr_29370_29393[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__24022__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24022__auto____0 = (function (){
var statearr_29371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29371[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24022__auto__);

(statearr_29371[(1)] = (1));

return statearr_29371;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24022__auto____1 = (function (state_29347){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_29347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e29372){if((e29372 instanceof Object)){
var ex__24025__auto__ = e29372;
var statearr_29373_29394 = state_29347;
(statearr_29373_29394[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29395 = state_29347;
state_29347 = G__29395;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24022__auto__ = function(state_29347){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24022__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24022__auto____1.call(this,state_29347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24022__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24022__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_29374 = f__24117__auto__.call(null);
(statearr_29374[(6)] = c__24116__auto___29375);

return statearr_29374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29396_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29396_SHARP_));
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
var base_path_29402 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29398 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29399 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29400 = true;
var _STAR_print_fn_STAR__temp_val__29401 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29400);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29401);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29399);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29398);
}}catch (e29397){if((e29397 instanceof Error)){
var e = e29397;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29402], null));
} else {
var e = e29397;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29403){
var map__29404 = p__29403;
var map__29404__$1 = cljs.core.__destructure_map.call(null,map__29404);
var opts = map__29404__$1;
var build_id = cljs.core.get.call(null,map__29404__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__29405){
var vec__29406 = p__29405;
var seq__29407 = cljs.core.seq.call(null,vec__29406);
var first__29408 = cljs.core.first.call(null,seq__29407);
var seq__29407__$1 = cljs.core.next.call(null,seq__29407);
var map__29409 = first__29408;
var map__29409__$1 = cljs.core.__destructure_map.call(null,map__29409);
var msg = map__29409__$1;
var msg_name = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29407__$1;
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
return (function (p__29410){
var vec__29411 = p__29410;
var seq__29412 = cljs.core.seq.call(null,vec__29411);
var first__29413 = cljs.core.first.call(null,seq__29412);
var seq__29412__$1 = cljs.core.next.call(null,seq__29412);
var map__29414 = first__29413;
var map__29414__$1 = cljs.core.__destructure_map.call(null,map__29414);
var msg = map__29414__$1;
var msg_name = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29412__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29415){
var map__29416 = p__29415;
var map__29416__$1 = cljs.core.__destructure_map.call(null,map__29416);
var on_compile_warning = cljs.core.get.call(null,map__29416__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29416__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__29417){
var vec__29418 = p__29417;
var seq__29419 = cljs.core.seq.call(null,vec__29418);
var first__29420 = cljs.core.first.call(null,seq__29419);
var seq__29419__$1 = cljs.core.next.call(null,seq__29419);
var map__29421 = first__29420;
var map__29421__$1 = cljs.core.__destructure_map.call(null,map__29421);
var msg = map__29421__$1;
var msg_name = cljs.core.get.call(null,map__29421__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29419__$1;
var pred__29422 = cljs.core._EQ_;
var expr__29423 = msg_name;
if(cljs.core.truth_(pred__29422.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29423))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29422.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29423))){
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
var c__24116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_29512){
var state_val_29513 = (state_29512[(1)]);
if((state_val_29513 === (7))){
var inst_29432 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
if(cljs.core.truth_(inst_29432)){
var statearr_29514_29561 = state_29512__$1;
(statearr_29514_29561[(1)] = (8));

} else {
var statearr_29515_29562 = state_29512__$1;
(statearr_29515_29562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (20))){
var inst_29506 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29516_29563 = state_29512__$1;
(statearr_29516_29563[(2)] = inst_29506);

(statearr_29516_29563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (27))){
var inst_29502 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29517_29564 = state_29512__$1;
(statearr_29517_29564[(2)] = inst_29502);

(statearr_29517_29564[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (1))){
var inst_29425 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29512__$1 = state_29512;
if(cljs.core.truth_(inst_29425)){
var statearr_29518_29565 = state_29512__$1;
(statearr_29518_29565[(1)] = (2));

} else {
var statearr_29519_29566 = state_29512__$1;
(statearr_29519_29566[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (24))){
var inst_29504 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29520_29567 = state_29512__$1;
(statearr_29520_29567[(2)] = inst_29504);

(statearr_29520_29567[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (4))){
var inst_29510 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29512__$1,inst_29510);
} else {
if((state_val_29513 === (15))){
var inst_29508 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29521_29568 = state_29512__$1;
(statearr_29521_29568[(2)] = inst_29508);

(statearr_29521_29568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (21))){
var inst_29461 = (state_29512[(2)]);
var inst_29462 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29463 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29462);
var state_29512__$1 = (function (){var statearr_29522 = state_29512;
(statearr_29522[(7)] = inst_29461);

return statearr_29522;
})();
var statearr_29523_29569 = state_29512__$1;
(statearr_29523_29569[(2)] = inst_29463);

(statearr_29523_29569[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (31))){
var inst_29491 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29512__$1 = state_29512;
if(inst_29491){
var statearr_29524_29570 = state_29512__$1;
(statearr_29524_29570[(1)] = (34));

} else {
var statearr_29525_29571 = state_29512__$1;
(statearr_29525_29571[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (32))){
var inst_29500 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29526_29572 = state_29512__$1;
(statearr_29526_29572[(2)] = inst_29500);

(statearr_29526_29572[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (33))){
var inst_29487 = (state_29512[(2)]);
var inst_29488 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29489 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29488);
var state_29512__$1 = (function (){var statearr_29527 = state_29512;
(statearr_29527[(8)] = inst_29487);

return statearr_29527;
})();
var statearr_29528_29573 = state_29512__$1;
(statearr_29528_29573[(2)] = inst_29489);

(statearr_29528_29573[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (13))){
var inst_29446 = figwheel.client.heads_up.clear.call(null);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29512__$1,(16),inst_29446);
} else {
if((state_val_29513 === (22))){
var inst_29467 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29468 = figwheel.client.heads_up.append_warning_message.call(null,inst_29467);
var state_29512__$1 = state_29512;
var statearr_29529_29574 = state_29512__$1;
(statearr_29529_29574[(2)] = inst_29468);

(statearr_29529_29574[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (36))){
var inst_29498 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29530_29575 = state_29512__$1;
(statearr_29530_29575[(2)] = inst_29498);

(statearr_29530_29575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (29))){
var inst_29478 = (state_29512[(2)]);
var inst_29479 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29480 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29479);
var state_29512__$1 = (function (){var statearr_29531 = state_29512;
(statearr_29531[(9)] = inst_29478);

return statearr_29531;
})();
var statearr_29532_29576 = state_29512__$1;
(statearr_29532_29576[(2)] = inst_29480);

(statearr_29532_29576[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (6))){
var inst_29427 = (state_29512[(10)]);
var state_29512__$1 = state_29512;
var statearr_29533_29577 = state_29512__$1;
(statearr_29533_29577[(2)] = inst_29427);

(statearr_29533_29577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (28))){
var inst_29474 = (state_29512[(2)]);
var inst_29475 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29476 = figwheel.client.heads_up.display_warning.call(null,inst_29475);
var state_29512__$1 = (function (){var statearr_29534 = state_29512;
(statearr_29534[(11)] = inst_29474);

return statearr_29534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29512__$1,(29),inst_29476);
} else {
if((state_val_29513 === (25))){
var inst_29472 = figwheel.client.heads_up.clear.call(null);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29512__$1,(28),inst_29472);
} else {
if((state_val_29513 === (34))){
var inst_29493 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29512__$1,(37),inst_29493);
} else {
if((state_val_29513 === (17))){
var inst_29452 = (state_29512[(2)]);
var inst_29453 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29454 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29453);
var state_29512__$1 = (function (){var statearr_29535 = state_29512;
(statearr_29535[(12)] = inst_29452);

return statearr_29535;
})();
var statearr_29536_29578 = state_29512__$1;
(statearr_29536_29578[(2)] = inst_29454);

(statearr_29536_29578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (3))){
var inst_29444 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29512__$1 = state_29512;
if(inst_29444){
var statearr_29537_29579 = state_29512__$1;
(statearr_29537_29579[(1)] = (13));

} else {
var statearr_29538_29580 = state_29512__$1;
(statearr_29538_29580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (12))){
var inst_29440 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29539_29581 = state_29512__$1;
(statearr_29539_29581[(2)] = inst_29440);

(statearr_29539_29581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (2))){
var inst_29427 = (state_29512[(10)]);
var inst_29427__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29512__$1 = (function (){var statearr_29540 = state_29512;
(statearr_29540[(10)] = inst_29427__$1);

return statearr_29540;
})();
if(cljs.core.truth_(inst_29427__$1)){
var statearr_29541_29582 = state_29512__$1;
(statearr_29541_29582[(1)] = (5));

} else {
var statearr_29542_29583 = state_29512__$1;
(statearr_29542_29583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (23))){
var inst_29470 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29512__$1 = state_29512;
if(inst_29470){
var statearr_29543_29584 = state_29512__$1;
(statearr_29543_29584[(1)] = (25));

} else {
var statearr_29544_29585 = state_29512__$1;
(statearr_29544_29585[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (35))){
var state_29512__$1 = state_29512;
var statearr_29545_29586 = state_29512__$1;
(statearr_29545_29586[(2)] = null);

(statearr_29545_29586[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (19))){
var inst_29465 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29512__$1 = state_29512;
if(inst_29465){
var statearr_29546_29587 = state_29512__$1;
(statearr_29546_29587[(1)] = (22));

} else {
var statearr_29547_29588 = state_29512__$1;
(statearr_29547_29588[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (11))){
var inst_29436 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29548_29589 = state_29512__$1;
(statearr_29548_29589[(2)] = inst_29436);

(statearr_29548_29589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (9))){
var inst_29438 = figwheel.client.heads_up.clear.call(null);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29512__$1,(12),inst_29438);
} else {
if((state_val_29513 === (5))){
var inst_29429 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29512__$1 = state_29512;
var statearr_29549_29590 = state_29512__$1;
(statearr_29549_29590[(2)] = inst_29429);

(statearr_29549_29590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (14))){
var inst_29456 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29512__$1 = state_29512;
if(inst_29456){
var statearr_29550_29591 = state_29512__$1;
(statearr_29550_29591[(1)] = (18));

} else {
var statearr_29551_29592 = state_29512__$1;
(statearr_29551_29592[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (26))){
var inst_29482 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29512__$1 = state_29512;
if(inst_29482){
var statearr_29552_29593 = state_29512__$1;
(statearr_29552_29593[(1)] = (30));

} else {
var statearr_29553_29594 = state_29512__$1;
(statearr_29553_29594[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (16))){
var inst_29448 = (state_29512[(2)]);
var inst_29449 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29450 = figwheel.client.heads_up.display_exception.call(null,inst_29449);
var state_29512__$1 = (function (){var statearr_29554 = state_29512;
(statearr_29554[(13)] = inst_29448);

return statearr_29554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29512__$1,(17),inst_29450);
} else {
if((state_val_29513 === (30))){
var inst_29484 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29485 = figwheel.client.heads_up.display_warning.call(null,inst_29484);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29512__$1,(33),inst_29485);
} else {
if((state_val_29513 === (10))){
var inst_29442 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29555_29595 = state_29512__$1;
(statearr_29555_29595[(2)] = inst_29442);

(statearr_29555_29595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (18))){
var inst_29458 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29459 = figwheel.client.heads_up.display_exception.call(null,inst_29458);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29512__$1,(21),inst_29459);
} else {
if((state_val_29513 === (37))){
var inst_29495 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29556_29596 = state_29512__$1;
(statearr_29556_29596[(2)] = inst_29495);

(statearr_29556_29596[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29513 === (8))){
var inst_29434 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29512__$1,(11),inst_29434);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto____0 = (function (){
var statearr_29557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29557[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto__);

(statearr_29557[(1)] = (1));

return statearr_29557;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto____1 = (function (state_29512){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_29512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e29558){if((e29558 instanceof Object)){
var ex__24025__auto__ = e29558;
var statearr_29559_29597 = state_29512;
(statearr_29559_29597[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29598 = state_29512;
state_29512 = G__29598;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto__ = function(state_29512){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto____1.call(this,state_29512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_29560 = f__24117__auto__.call(null);
(statearr_29560[(6)] = c__24116__auto__);

return statearr_29560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));

return c__24116__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24116__auto___29627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_29613){
var state_val_29614 = (state_29613[(1)]);
if((state_val_29614 === (1))){
var state_29613__$1 = state_29613;
var statearr_29615_29628 = state_29613__$1;
(statearr_29615_29628[(2)] = null);

(statearr_29615_29628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (2))){
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29613__$1,(4),ch);
} else {
if((state_val_29614 === (3))){
var inst_29611 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29613__$1,inst_29611);
} else {
if((state_val_29614 === (4))){
var inst_29601 = (state_29613[(7)]);
var inst_29601__$1 = (state_29613[(2)]);
var state_29613__$1 = (function (){var statearr_29616 = state_29613;
(statearr_29616[(7)] = inst_29601__$1);

return statearr_29616;
})();
if(cljs.core.truth_(inst_29601__$1)){
var statearr_29617_29629 = state_29613__$1;
(statearr_29617_29629[(1)] = (5));

} else {
var statearr_29618_29630 = state_29613__$1;
(statearr_29618_29630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (5))){
var inst_29601 = (state_29613[(7)]);
var inst_29603 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29601);
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29613__$1,(8),inst_29603);
} else {
if((state_val_29614 === (6))){
var state_29613__$1 = state_29613;
var statearr_29619_29631 = state_29613__$1;
(statearr_29619_29631[(2)] = null);

(statearr_29619_29631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (7))){
var inst_29609 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29620_29632 = state_29613__$1;
(statearr_29620_29632[(2)] = inst_29609);

(statearr_29620_29632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (8))){
var inst_29605 = (state_29613[(2)]);
var state_29613__$1 = (function (){var statearr_29621 = state_29613;
(statearr_29621[(8)] = inst_29605);

return statearr_29621;
})();
var statearr_29622_29633 = state_29613__$1;
(statearr_29622_29633[(2)] = null);

(statearr_29622_29633[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__24022__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24022__auto____0 = (function (){
var statearr_29623 = [null,null,null,null,null,null,null,null,null];
(statearr_29623[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24022__auto__);

(statearr_29623[(1)] = (1));

return statearr_29623;
});
var figwheel$client$heads_up_plugin_$_state_machine__24022__auto____1 = (function (state_29613){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_29613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e29624){if((e29624 instanceof Object)){
var ex__24025__auto__ = e29624;
var statearr_29625_29634 = state_29613;
(statearr_29625_29634[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29635 = state_29613;
state_29613 = G__29635;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24022__auto__ = function(state_29613){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24022__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24022__auto____1.call(this,state_29613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24022__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24022__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_29626 = f__24117__auto__.call(null);
(statearr_29626[(6)] = c__24116__auto___29627);

return statearr_29626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
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
var c__24116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_29641){
var state_val_29642 = (state_29641[(1)]);
if((state_val_29642 === (1))){
var inst_29636 = cljs.core.async.timeout.call(null,(3000));
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29641__$1,(2),inst_29636);
} else {
if((state_val_29642 === (2))){
var inst_29638 = (state_29641[(2)]);
var inst_29639 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29641__$1 = (function (){var statearr_29643 = state_29641;
(statearr_29643[(7)] = inst_29638);

return statearr_29643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29641__$1,inst_29639);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24022__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24022__auto____0 = (function (){
var statearr_29644 = [null,null,null,null,null,null,null,null];
(statearr_29644[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24022__auto__);

(statearr_29644[(1)] = (1));

return statearr_29644;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24022__auto____1 = (function (state_29641){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_29641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e29645){if((e29645 instanceof Object)){
var ex__24025__auto__ = e29645;
var statearr_29646_29648 = state_29641;
(statearr_29646_29648[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29649 = state_29641;
state_29641 = G__29649;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24022__auto__ = function(state_29641){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24022__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24022__auto____1.call(this,state_29641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24022__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24022__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_29647 = f__24117__auto__.call(null);
(statearr_29647[(6)] = c__24116__auto__);

return statearr_29647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));

return c__24116__auto__;
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
var c__24116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24117__auto__ = (function (){var switch__24021__auto__ = (function (state_29656){
var state_val_29657 = (state_29656[(1)]);
if((state_val_29657 === (1))){
var inst_29650 = cljs.core.async.timeout.call(null,(2000));
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29656__$1,(2),inst_29650);
} else {
if((state_val_29657 === (2))){
var inst_29652 = (state_29656[(2)]);
var inst_29653 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29654 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29653);
var state_29656__$1 = (function (){var statearr_29658 = state_29656;
(statearr_29658[(7)] = inst_29652);

return statearr_29658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29656__$1,inst_29654);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto____0 = (function (){
var statearr_29659 = [null,null,null,null,null,null,null,null];
(statearr_29659[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto__);

(statearr_29659[(1)] = (1));

return statearr_29659;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto____1 = (function (state_29656){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__.call(null,state_29656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e29660){if((e29660 instanceof Object)){
var ex__24025__auto__ = e29660;
var statearr_29661_29663 = state_29656;
(statearr_29661_29663[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29664 = state_29656;
state_29656 = G__29664;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto__ = function(state_29656){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto____1.call(this,state_29656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24022__auto__;
})()
})();
var state__24118__auto__ = (function (){var statearr_29662 = f__24117__auto__.call(null);
(statearr_29662[(6)] = c__24116__auto__);

return statearr_29662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24118__auto__);
}));

return c__24116__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29665){
var map__29666 = p__29665;
var map__29666__$1 = cljs.core.__destructure_map.call(null,map__29666);
var file = cljs.core.get.call(null,map__29666__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29666__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29666__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29667 = "";
var G__29667__$1 = (cljs.core.truth_(file)?[G__29667,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29667);
var G__29667__$2 = (cljs.core.truth_(line)?[G__29667__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29667__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = line;
if(cljs.core.truth_(and__4149__auto__)){
return column;
} else {
return and__4149__auto__;
}
})())){
return [G__29667__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29667__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29668){
var map__29669 = p__29668;
var map__29669__$1 = cljs.core.__destructure_map.call(null,map__29669);
var ed = map__29669__$1;
var exception_data = cljs.core.get.call(null,map__29669__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29669__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29671 = (function (){var G__29670 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29670)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29670;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29671);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29672){
var map__29673 = p__29672;
var map__29673__$1 = cljs.core.__destructure_map.call(null,map__29673);
var w = map__29673__$1;
var message = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29674 = cljs.core.seq.call(null,plugins);
var chunk__29675 = null;
var count__29676 = (0);
var i__29677 = (0);
while(true){
if((i__29677 < count__29676)){
var vec__29684 = cljs.core._nth.call(null,chunk__29675,i__29677);
var k = cljs.core.nth.call(null,vec__29684,(0),null);
var plugin = cljs.core.nth.call(null,vec__29684,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29690 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29674,chunk__29675,count__29676,i__29677,pl_29690,vec__29684,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29690.call(null,msg_hist);
});})(seq__29674,chunk__29675,count__29676,i__29677,pl_29690,vec__29684,k,plugin))
);
} else {
}


var G__29691 = seq__29674;
var G__29692 = chunk__29675;
var G__29693 = count__29676;
var G__29694 = (i__29677 + (1));
seq__29674 = G__29691;
chunk__29675 = G__29692;
count__29676 = G__29693;
i__29677 = G__29694;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29674);
if(temp__5735__auto__){
var seq__29674__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29674__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29674__$1);
var G__29695 = cljs.core.chunk_rest.call(null,seq__29674__$1);
var G__29696 = c__4591__auto__;
var G__29697 = cljs.core.count.call(null,c__4591__auto__);
var G__29698 = (0);
seq__29674 = G__29695;
chunk__29675 = G__29696;
count__29676 = G__29697;
i__29677 = G__29698;
continue;
} else {
var vec__29687 = cljs.core.first.call(null,seq__29674__$1);
var k = cljs.core.nth.call(null,vec__29687,(0),null);
var plugin = cljs.core.nth.call(null,vec__29687,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29699 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29674,chunk__29675,count__29676,i__29677,pl_29699,vec__29687,k,plugin,seq__29674__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29699.call(null,msg_hist);
});})(seq__29674,chunk__29675,count__29676,i__29677,pl_29699,vec__29687,k,plugin,seq__29674__$1,temp__5735__auto__))
);
} else {
}


var G__29700 = cljs.core.next.call(null,seq__29674__$1);
var G__29701 = null;
var G__29702 = (0);
var G__29703 = (0);
seq__29674 = G__29700;
chunk__29675 = G__29701;
count__29676 = G__29702;
i__29677 = G__29703;
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
var G__29705 = arguments.length;
switch (G__29705) {
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

var seq__29706_29711 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29707_29712 = null;
var count__29708_29713 = (0);
var i__29709_29714 = (0);
while(true){
if((i__29709_29714 < count__29708_29713)){
var msg_29715 = cljs.core._nth.call(null,chunk__29707_29712,i__29709_29714);
figwheel.client.socket.handle_incoming_message.call(null,msg_29715);


var G__29716 = seq__29706_29711;
var G__29717 = chunk__29707_29712;
var G__29718 = count__29708_29713;
var G__29719 = (i__29709_29714 + (1));
seq__29706_29711 = G__29716;
chunk__29707_29712 = G__29717;
count__29708_29713 = G__29718;
i__29709_29714 = G__29719;
continue;
} else {
var temp__5735__auto___29720 = cljs.core.seq.call(null,seq__29706_29711);
if(temp__5735__auto___29720){
var seq__29706_29721__$1 = temp__5735__auto___29720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29706_29721__$1)){
var c__4591__auto___29722 = cljs.core.chunk_first.call(null,seq__29706_29721__$1);
var G__29723 = cljs.core.chunk_rest.call(null,seq__29706_29721__$1);
var G__29724 = c__4591__auto___29722;
var G__29725 = cljs.core.count.call(null,c__4591__auto___29722);
var G__29726 = (0);
seq__29706_29711 = G__29723;
chunk__29707_29712 = G__29724;
count__29708_29713 = G__29725;
i__29709_29714 = G__29726;
continue;
} else {
var msg_29727 = cljs.core.first.call(null,seq__29706_29721__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29727);


var G__29728 = cljs.core.next.call(null,seq__29706_29721__$1);
var G__29729 = null;
var G__29730 = (0);
var G__29731 = (0);
seq__29706_29711 = G__29728;
chunk__29707_29712 = G__29729;
count__29708_29713 = G__29730;
i__29709_29714 = G__29731;
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
var len__4771__auto___29735 = arguments.length;
var i__4772__auto___29736 = (0);
while(true){
if((i__4772__auto___29736 < len__4771__auto___29735)){
args__4777__auto__.push((arguments[i__4772__auto___29736]));

var G__29737 = (i__4772__auto___29736 + (1));
i__4772__auto___29736 = G__29737;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29733){
var map__29734 = p__29733;
var map__29734__$1 = cljs.core.__destructure_map.call(null,map__29734);
var opts = map__29734__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29732){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29732));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29738){if((e29738 instanceof Error)){
var e = e29738;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29738;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__29739){
var map__29740 = p__29739;
var map__29740__$1 = cljs.core.__destructure_map.call(null,map__29740);
var msg_name = cljs.core.get.call(null,map__29740__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1717629079068
