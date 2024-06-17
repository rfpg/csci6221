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
}catch (e31186){if((e31186 instanceof Error)){
var e = e31186;
return "Error: Unable to stringify";
} else {
throw e31186;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31189 = arguments.length;
switch (G__31189) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31187_SHARP_){
if(typeof p1__31187_SHARP_ === 'string'){
return p1__31187_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31187_SHARP_);
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
var len__4771__auto___31192 = arguments.length;
var i__4772__auto___31193 = (0);
while(true){
if((i__4772__auto___31193 < len__4771__auto___31192)){
args__4777__auto__.push((arguments[i__4772__auto___31193]));

var G__31194 = (i__4772__auto___31193 + (1));
i__4772__auto___31193 = G__31194;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31191){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31191));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4777__auto__ = [];
var len__4771__auto___31196 = arguments.length;
var i__4772__auto___31197 = (0);
while(true){
if((i__4772__auto___31197 < len__4771__auto___31196)){
args__4777__auto__.push((arguments[i__4772__auto___31197]));

var G__31198 = (i__4772__auto___31197 + (1));
i__4772__auto___31197 = G__31198;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31195){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31195));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31199){
var map__31200 = p__31199;
var map__31200__$1 = cljs.core.__destructure_map.call(null,map__31200);
var message = cljs.core.get.call(null,map__31200__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31200__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26126__auto___31278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_31250){
var state_val_31251 = (state_31250[(1)]);
if((state_val_31251 === (7))){
var inst_31246 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31252_31279 = state_31250__$1;
(statearr_31252_31279[(2)] = inst_31246);

(statearr_31252_31279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (1))){
var state_31250__$1 = state_31250;
var statearr_31253_31280 = state_31250__$1;
(statearr_31253_31280[(2)] = null);

(statearr_31253_31280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (4))){
var inst_31203 = (state_31250[(7)]);
var inst_31203__$1 = (state_31250[(2)]);
var state_31250__$1 = (function (){var statearr_31254 = state_31250;
(statearr_31254[(7)] = inst_31203__$1);

return statearr_31254;
})();
if(cljs.core.truth_(inst_31203__$1)){
var statearr_31255_31281 = state_31250__$1;
(statearr_31255_31281[(1)] = (5));

} else {
var statearr_31256_31282 = state_31250__$1;
(statearr_31256_31282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (15))){
var inst_31210 = (state_31250[(8)]);
var inst_31225 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31210);
var inst_31226 = cljs.core.first.call(null,inst_31225);
var inst_31227 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31226);
var inst_31228 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31227)].join('');
var inst_31229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31228);
var state_31250__$1 = state_31250;
var statearr_31257_31283 = state_31250__$1;
(statearr_31257_31283[(2)] = inst_31229);

(statearr_31257_31283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (13))){
var inst_31234 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31258_31284 = state_31250__$1;
(statearr_31258_31284[(2)] = inst_31234);

(statearr_31258_31284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (6))){
var state_31250__$1 = state_31250;
var statearr_31259_31285 = state_31250__$1;
(statearr_31259_31285[(2)] = null);

(statearr_31259_31285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (17))){
var inst_31232 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31260_31286 = state_31250__$1;
(statearr_31260_31286[(2)] = inst_31232);

(statearr_31260_31286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (3))){
var inst_31248 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31250__$1,inst_31248);
} else {
if((state_val_31251 === (12))){
var inst_31209 = (state_31250[(9)]);
var inst_31223 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31209,opts);
var state_31250__$1 = state_31250;
if(inst_31223){
var statearr_31261_31287 = state_31250__$1;
(statearr_31261_31287[(1)] = (15));

} else {
var statearr_31262_31288 = state_31250__$1;
(statearr_31262_31288[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (2))){
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31250__$1,(4),ch);
} else {
if((state_val_31251 === (11))){
var inst_31210 = (state_31250[(8)]);
var inst_31215 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31216 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31210);
var inst_31217 = cljs.core.async.timeout.call(null,(1000));
var inst_31218 = [inst_31216,inst_31217];
var inst_31219 = (new cljs.core.PersistentVector(null,2,(5),inst_31215,inst_31218,null));
var state_31250__$1 = state_31250;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31250__$1,(14),inst_31219);
} else {
if((state_val_31251 === (9))){
var inst_31210 = (state_31250[(8)]);
var inst_31236 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31237 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31210);
var inst_31238 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31237);
var inst_31239 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31238)].join('');
var inst_31240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31239);
var state_31250__$1 = (function (){var statearr_31263 = state_31250;
(statearr_31263[(10)] = inst_31236);

return statearr_31263;
})();
var statearr_31264_31289 = state_31250__$1;
(statearr_31264_31289[(2)] = inst_31240);

(statearr_31264_31289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (5))){
var inst_31203 = (state_31250[(7)]);
var inst_31205 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31206 = (new cljs.core.PersistentArrayMap(null,2,inst_31205,null));
var inst_31207 = (new cljs.core.PersistentHashSet(null,inst_31206,null));
var inst_31208 = figwheel.client.focus_msgs.call(null,inst_31207,inst_31203);
var inst_31209 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31208);
var inst_31210 = cljs.core.first.call(null,inst_31208);
var inst_31211 = figwheel.client.autoload_QMARK_.call(null);
var state_31250__$1 = (function (){var statearr_31265 = state_31250;
(statearr_31265[(8)] = inst_31210);

(statearr_31265[(9)] = inst_31209);

return statearr_31265;
})();
if(cljs.core.truth_(inst_31211)){
var statearr_31266_31290 = state_31250__$1;
(statearr_31266_31290[(1)] = (8));

} else {
var statearr_31267_31291 = state_31250__$1;
(statearr_31267_31291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (14))){
var inst_31221 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31268_31292 = state_31250__$1;
(statearr_31268_31292[(2)] = inst_31221);

(statearr_31268_31292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (16))){
var state_31250__$1 = state_31250;
var statearr_31269_31293 = state_31250__$1;
(statearr_31269_31293[(2)] = null);

(statearr_31269_31293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (10))){
var inst_31242 = (state_31250[(2)]);
var state_31250__$1 = (function (){var statearr_31270 = state_31250;
(statearr_31270[(11)] = inst_31242);

return statearr_31270;
})();
var statearr_31271_31294 = state_31250__$1;
(statearr_31271_31294[(2)] = null);

(statearr_31271_31294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (8))){
var inst_31209 = (state_31250[(9)]);
var inst_31213 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31209,opts);
var state_31250__$1 = state_31250;
if(cljs.core.truth_(inst_31213)){
var statearr_31272_31295 = state_31250__$1;
(statearr_31272_31295[(1)] = (11));

} else {
var statearr_31273_31296 = state_31250__$1;
(statearr_31273_31296[(1)] = (12));

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
var statearr_31274 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31274[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__);

(statearr_31274[(1)] = (1));

return statearr_31274;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____1 = (function (state_31250){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_31250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e31275){if((e31275 instanceof Object)){
var ex__26035__auto__ = e31275;
var statearr_31276_31297 = state_31250;
(statearr_31276_31297[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31298 = state_31250;
state_31250 = G__31298;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__ = function(state_31250){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____1.call(this,state_31250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26032__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_31277 = f__26127__auto__.call(null);
(statearr_31277[(6)] = c__26126__auto___31278);

return statearr_31277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31299_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31299_SHARP_));
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
var base_path_31305 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31301 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31302 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31303 = true;
var _STAR_print_fn_STAR__temp_val__31304 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31303);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31304);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31302);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31301);
}}catch (e31300){if((e31300 instanceof Error)){
var e = e31300;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31305], null));
} else {
var e = e31300;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31306){
var map__31307 = p__31306;
var map__31307__$1 = cljs.core.__destructure_map.call(null,map__31307);
var opts = map__31307__$1;
var build_id = cljs.core.get.call(null,map__31307__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31308){
var vec__31309 = p__31308;
var seq__31310 = cljs.core.seq.call(null,vec__31309);
var first__31311 = cljs.core.first.call(null,seq__31310);
var seq__31310__$1 = cljs.core.next.call(null,seq__31310);
var map__31312 = first__31311;
var map__31312__$1 = cljs.core.__destructure_map.call(null,map__31312);
var msg = map__31312__$1;
var msg_name = cljs.core.get.call(null,map__31312__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31310__$1;
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
return (function (p__31313){
var vec__31314 = p__31313;
var seq__31315 = cljs.core.seq.call(null,vec__31314);
var first__31316 = cljs.core.first.call(null,seq__31315);
var seq__31315__$1 = cljs.core.next.call(null,seq__31315);
var map__31317 = first__31316;
var map__31317__$1 = cljs.core.__destructure_map.call(null,map__31317);
var msg = map__31317__$1;
var msg_name = cljs.core.get.call(null,map__31317__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31315__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31318){
var map__31319 = p__31318;
var map__31319__$1 = cljs.core.__destructure_map.call(null,map__31319);
var on_compile_warning = cljs.core.get.call(null,map__31319__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31319__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31320){
var vec__31321 = p__31320;
var seq__31322 = cljs.core.seq.call(null,vec__31321);
var first__31323 = cljs.core.first.call(null,seq__31322);
var seq__31322__$1 = cljs.core.next.call(null,seq__31322);
var map__31324 = first__31323;
var map__31324__$1 = cljs.core.__destructure_map.call(null,map__31324);
var msg = map__31324__$1;
var msg_name = cljs.core.get.call(null,map__31324__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31322__$1;
var pred__31325 = cljs.core._EQ_;
var expr__31326 = msg_name;
if(cljs.core.truth_(pred__31325.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31326))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31325.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31326))){
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
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_31415){
var state_val_31416 = (state_31415[(1)]);
if((state_val_31416 === (7))){
var inst_31335 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31335)){
var statearr_31417_31464 = state_31415__$1;
(statearr_31417_31464[(1)] = (8));

} else {
var statearr_31418_31465 = state_31415__$1;
(statearr_31418_31465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (20))){
var inst_31409 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31419_31466 = state_31415__$1;
(statearr_31419_31466[(2)] = inst_31409);

(statearr_31419_31466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (27))){
var inst_31405 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31420_31467 = state_31415__$1;
(statearr_31420_31467[(2)] = inst_31405);

(statearr_31420_31467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (1))){
var inst_31328 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31328)){
var statearr_31421_31468 = state_31415__$1;
(statearr_31421_31468[(1)] = (2));

} else {
var statearr_31422_31469 = state_31415__$1;
(statearr_31422_31469[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (24))){
var inst_31407 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31423_31470 = state_31415__$1;
(statearr_31423_31470[(2)] = inst_31407);

(statearr_31423_31470[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (4))){
var inst_31413 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31415__$1,inst_31413);
} else {
if((state_val_31416 === (15))){
var inst_31411 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31424_31471 = state_31415__$1;
(statearr_31424_31471[(2)] = inst_31411);

(statearr_31424_31471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (21))){
var inst_31364 = (state_31415[(2)]);
var inst_31365 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31366 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31365);
var state_31415__$1 = (function (){var statearr_31425 = state_31415;
(statearr_31425[(7)] = inst_31364);

return statearr_31425;
})();
var statearr_31426_31472 = state_31415__$1;
(statearr_31426_31472[(2)] = inst_31366);

(statearr_31426_31472[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (31))){
var inst_31394 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31415__$1 = state_31415;
if(inst_31394){
var statearr_31427_31473 = state_31415__$1;
(statearr_31427_31473[(1)] = (34));

} else {
var statearr_31428_31474 = state_31415__$1;
(statearr_31428_31474[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (32))){
var inst_31403 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31429_31475 = state_31415__$1;
(statearr_31429_31475[(2)] = inst_31403);

(statearr_31429_31475[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (33))){
var inst_31390 = (state_31415[(2)]);
var inst_31391 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31392 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31391);
var state_31415__$1 = (function (){var statearr_31430 = state_31415;
(statearr_31430[(8)] = inst_31390);

return statearr_31430;
})();
var statearr_31431_31476 = state_31415__$1;
(statearr_31431_31476[(2)] = inst_31392);

(statearr_31431_31476[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (13))){
var inst_31349 = figwheel.client.heads_up.clear.call(null);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31415__$1,(16),inst_31349);
} else {
if((state_val_31416 === (22))){
var inst_31370 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31371 = figwheel.client.heads_up.append_warning_message.call(null,inst_31370);
var state_31415__$1 = state_31415;
var statearr_31432_31477 = state_31415__$1;
(statearr_31432_31477[(2)] = inst_31371);

(statearr_31432_31477[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (36))){
var inst_31401 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31433_31478 = state_31415__$1;
(statearr_31433_31478[(2)] = inst_31401);

(statearr_31433_31478[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (29))){
var inst_31381 = (state_31415[(2)]);
var inst_31382 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31383 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31382);
var state_31415__$1 = (function (){var statearr_31434 = state_31415;
(statearr_31434[(9)] = inst_31381);

return statearr_31434;
})();
var statearr_31435_31479 = state_31415__$1;
(statearr_31435_31479[(2)] = inst_31383);

(statearr_31435_31479[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (6))){
var inst_31330 = (state_31415[(10)]);
var state_31415__$1 = state_31415;
var statearr_31436_31480 = state_31415__$1;
(statearr_31436_31480[(2)] = inst_31330);

(statearr_31436_31480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (28))){
var inst_31377 = (state_31415[(2)]);
var inst_31378 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31379 = figwheel.client.heads_up.display_warning.call(null,inst_31378);
var state_31415__$1 = (function (){var statearr_31437 = state_31415;
(statearr_31437[(11)] = inst_31377);

return statearr_31437;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31415__$1,(29),inst_31379);
} else {
if((state_val_31416 === (25))){
var inst_31375 = figwheel.client.heads_up.clear.call(null);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31415__$1,(28),inst_31375);
} else {
if((state_val_31416 === (34))){
var inst_31396 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31415__$1,(37),inst_31396);
} else {
if((state_val_31416 === (17))){
var inst_31355 = (state_31415[(2)]);
var inst_31356 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31357 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31356);
var state_31415__$1 = (function (){var statearr_31438 = state_31415;
(statearr_31438[(12)] = inst_31355);

return statearr_31438;
})();
var statearr_31439_31481 = state_31415__$1;
(statearr_31439_31481[(2)] = inst_31357);

(statearr_31439_31481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (3))){
var inst_31347 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31415__$1 = state_31415;
if(inst_31347){
var statearr_31440_31482 = state_31415__$1;
(statearr_31440_31482[(1)] = (13));

} else {
var statearr_31441_31483 = state_31415__$1;
(statearr_31441_31483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (12))){
var inst_31343 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31442_31484 = state_31415__$1;
(statearr_31442_31484[(2)] = inst_31343);

(statearr_31442_31484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (2))){
var inst_31330 = (state_31415[(10)]);
var inst_31330__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31415__$1 = (function (){var statearr_31443 = state_31415;
(statearr_31443[(10)] = inst_31330__$1);

return statearr_31443;
})();
if(cljs.core.truth_(inst_31330__$1)){
var statearr_31444_31485 = state_31415__$1;
(statearr_31444_31485[(1)] = (5));

} else {
var statearr_31445_31486 = state_31415__$1;
(statearr_31445_31486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (23))){
var inst_31373 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31415__$1 = state_31415;
if(inst_31373){
var statearr_31446_31487 = state_31415__$1;
(statearr_31446_31487[(1)] = (25));

} else {
var statearr_31447_31488 = state_31415__$1;
(statearr_31447_31488[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (35))){
var state_31415__$1 = state_31415;
var statearr_31448_31489 = state_31415__$1;
(statearr_31448_31489[(2)] = null);

(statearr_31448_31489[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (19))){
var inst_31368 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31415__$1 = state_31415;
if(inst_31368){
var statearr_31449_31490 = state_31415__$1;
(statearr_31449_31490[(1)] = (22));

} else {
var statearr_31450_31491 = state_31415__$1;
(statearr_31450_31491[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (11))){
var inst_31339 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31451_31492 = state_31415__$1;
(statearr_31451_31492[(2)] = inst_31339);

(statearr_31451_31492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (9))){
var inst_31341 = figwheel.client.heads_up.clear.call(null);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31415__$1,(12),inst_31341);
} else {
if((state_val_31416 === (5))){
var inst_31332 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31415__$1 = state_31415;
var statearr_31452_31493 = state_31415__$1;
(statearr_31452_31493[(2)] = inst_31332);

(statearr_31452_31493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (14))){
var inst_31359 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31415__$1 = state_31415;
if(inst_31359){
var statearr_31453_31494 = state_31415__$1;
(statearr_31453_31494[(1)] = (18));

} else {
var statearr_31454_31495 = state_31415__$1;
(statearr_31454_31495[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (26))){
var inst_31385 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31415__$1 = state_31415;
if(inst_31385){
var statearr_31455_31496 = state_31415__$1;
(statearr_31455_31496[(1)] = (30));

} else {
var statearr_31456_31497 = state_31415__$1;
(statearr_31456_31497[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (16))){
var inst_31351 = (state_31415[(2)]);
var inst_31352 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31353 = figwheel.client.heads_up.display_exception.call(null,inst_31352);
var state_31415__$1 = (function (){var statearr_31457 = state_31415;
(statearr_31457[(13)] = inst_31351);

return statearr_31457;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31415__$1,(17),inst_31353);
} else {
if((state_val_31416 === (30))){
var inst_31387 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31388 = figwheel.client.heads_up.display_warning.call(null,inst_31387);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31415__$1,(33),inst_31388);
} else {
if((state_val_31416 === (10))){
var inst_31345 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31458_31498 = state_31415__$1;
(statearr_31458_31498[(2)] = inst_31345);

(statearr_31458_31498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (18))){
var inst_31361 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31362 = figwheel.client.heads_up.display_exception.call(null,inst_31361);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31415__$1,(21),inst_31362);
} else {
if((state_val_31416 === (37))){
var inst_31398 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31459_31499 = state_31415__$1;
(statearr_31459_31499[(2)] = inst_31398);

(statearr_31459_31499[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (8))){
var inst_31337 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31415__$1,(11),inst_31337);
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
var statearr_31460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31460[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__);

(statearr_31460[(1)] = (1));

return statearr_31460;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____1 = (function (state_31415){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_31415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e31461){if((e31461 instanceof Object)){
var ex__26035__auto__ = e31461;
var statearr_31462_31500 = state_31415;
(statearr_31462_31500[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31501 = state_31415;
state_31415 = G__31501;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__ = function(state_31415){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____1.call(this,state_31415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_31463 = f__26127__auto__.call(null);
(statearr_31463[(6)] = c__26126__auto__);

return statearr_31463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26128__auto__);
}));

return c__26126__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26126__auto___31530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_31516){
var state_val_31517 = (state_31516[(1)]);
if((state_val_31517 === (1))){
var state_31516__$1 = state_31516;
var statearr_31518_31531 = state_31516__$1;
(statearr_31518_31531[(2)] = null);

(statearr_31518_31531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (2))){
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31516__$1,(4),ch);
} else {
if((state_val_31517 === (3))){
var inst_31514 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31516__$1,inst_31514);
} else {
if((state_val_31517 === (4))){
var inst_31504 = (state_31516[(7)]);
var inst_31504__$1 = (state_31516[(2)]);
var state_31516__$1 = (function (){var statearr_31519 = state_31516;
(statearr_31519[(7)] = inst_31504__$1);

return statearr_31519;
})();
if(cljs.core.truth_(inst_31504__$1)){
var statearr_31520_31532 = state_31516__$1;
(statearr_31520_31532[(1)] = (5));

} else {
var statearr_31521_31533 = state_31516__$1;
(statearr_31521_31533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (5))){
var inst_31504 = (state_31516[(7)]);
var inst_31506 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31504);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31516__$1,(8),inst_31506);
} else {
if((state_val_31517 === (6))){
var state_31516__$1 = state_31516;
var statearr_31522_31534 = state_31516__$1;
(statearr_31522_31534[(2)] = null);

(statearr_31522_31534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (7))){
var inst_31512 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31523_31535 = state_31516__$1;
(statearr_31523_31535[(2)] = inst_31512);

(statearr_31523_31535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (8))){
var inst_31508 = (state_31516[(2)]);
var state_31516__$1 = (function (){var statearr_31524 = state_31516;
(statearr_31524[(8)] = inst_31508);

return statearr_31524;
})();
var statearr_31525_31536 = state_31516__$1;
(statearr_31525_31536[(2)] = null);

(statearr_31525_31536[(1)] = (2));


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
var statearr_31526 = [null,null,null,null,null,null,null,null,null];
(statearr_31526[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26032__auto__);

(statearr_31526[(1)] = (1));

return statearr_31526;
});
var figwheel$client$heads_up_plugin_$_state_machine__26032__auto____1 = (function (state_31516){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_31516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e31527){if((e31527 instanceof Object)){
var ex__26035__auto__ = e31527;
var statearr_31528_31537 = state_31516;
(statearr_31528_31537[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31538 = state_31516;
state_31516 = G__31538;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26032__auto__ = function(state_31516){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26032__auto____1.call(this,state_31516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26032__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26032__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_31529 = f__26127__auto__.call(null);
(statearr_31529[(6)] = c__26126__auto___31530);

return statearr_31529;
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
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_31544){
var state_val_31545 = (state_31544[(1)]);
if((state_val_31545 === (1))){
var inst_31539 = cljs.core.async.timeout.call(null,(3000));
var state_31544__$1 = state_31544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31544__$1,(2),inst_31539);
} else {
if((state_val_31545 === (2))){
var inst_31541 = (state_31544[(2)]);
var inst_31542 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31544__$1 = (function (){var statearr_31546 = state_31544;
(statearr_31546[(7)] = inst_31541);

return statearr_31546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31544__$1,inst_31542);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____0 = (function (){
var statearr_31547 = [null,null,null,null,null,null,null,null];
(statearr_31547[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__);

(statearr_31547[(1)] = (1));

return statearr_31547;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____1 = (function (state_31544){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_31544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e31548){if((e31548 instanceof Object)){
var ex__26035__auto__ = e31548;
var statearr_31549_31551 = state_31544;
(statearr_31549_31551[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31552 = state_31544;
state_31544 = G__31552;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__ = function(state_31544){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____1.call(this,state_31544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26032__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_31550 = f__26127__auto__.call(null);
(statearr_31550[(6)] = c__26126__auto__);

return statearr_31550;
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
var f__26127__auto__ = (function (){var switch__26031__auto__ = (function (state_31559){
var state_val_31560 = (state_31559[(1)]);
if((state_val_31560 === (1))){
var inst_31553 = cljs.core.async.timeout.call(null,(2000));
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31559__$1,(2),inst_31553);
} else {
if((state_val_31560 === (2))){
var inst_31555 = (state_31559[(2)]);
var inst_31556 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31557 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31556);
var state_31559__$1 = (function (){var statearr_31561 = state_31559;
(statearr_31561[(7)] = inst_31555);

return statearr_31561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31559__$1,inst_31557);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____0 = (function (){
var statearr_31562 = [null,null,null,null,null,null,null,null];
(statearr_31562[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__);

(statearr_31562[(1)] = (1));

return statearr_31562;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____1 = (function (state_31559){
while(true){
var ret_value__26033__auto__ = (function (){try{while(true){
var result__26034__auto__ = switch__26031__auto__.call(null,state_31559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26034__auto__;
}
break;
}
}catch (e31563){if((e31563 instanceof Object)){
var ex__26035__auto__ = e31563;
var statearr_31564_31566 = state_31559;
(statearr_31564_31566[(5)] = ex__26035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31567 = state_31559;
state_31559 = G__31567;
continue;
} else {
return ret_value__26033__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__ = function(state_31559){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____1.call(this,state_31559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26032__auto__;
})()
})();
var state__26128__auto__ = (function (){var statearr_31565 = f__26127__auto__.call(null);
(statearr_31565[(6)] = c__26126__auto__);

return statearr_31565;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31568){
var map__31569 = p__31568;
var map__31569__$1 = cljs.core.__destructure_map.call(null,map__31569);
var file = cljs.core.get.call(null,map__31569__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31569__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31569__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31570 = "";
var G__31570__$1 = (cljs.core.truth_(file)?[G__31570,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31570);
var G__31570__$2 = (cljs.core.truth_(line)?[G__31570__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31570__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = line;
if(cljs.core.truth_(and__4149__auto__)){
return column;
} else {
return and__4149__auto__;
}
})())){
return [G__31570__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31570__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31571){
var map__31572 = p__31571;
var map__31572__$1 = cljs.core.__destructure_map.call(null,map__31572);
var ed = map__31572__$1;
var exception_data = cljs.core.get.call(null,map__31572__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31572__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31574 = (function (){var G__31573 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31573)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31573;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31574);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31575){
var map__31576 = p__31575;
var map__31576__$1 = cljs.core.__destructure_map.call(null,map__31576);
var w = map__31576__$1;
var message = cljs.core.get.call(null,map__31576__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31577 = cljs.core.seq.call(null,plugins);
var chunk__31578 = null;
var count__31579 = (0);
var i__31580 = (0);
while(true){
if((i__31580 < count__31579)){
var vec__31587 = cljs.core._nth.call(null,chunk__31578,i__31580);
var k = cljs.core.nth.call(null,vec__31587,(0),null);
var plugin = cljs.core.nth.call(null,vec__31587,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31593 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31577,chunk__31578,count__31579,i__31580,pl_31593,vec__31587,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31593.call(null,msg_hist);
});})(seq__31577,chunk__31578,count__31579,i__31580,pl_31593,vec__31587,k,plugin))
);
} else {
}


var G__31594 = seq__31577;
var G__31595 = chunk__31578;
var G__31596 = count__31579;
var G__31597 = (i__31580 + (1));
seq__31577 = G__31594;
chunk__31578 = G__31595;
count__31579 = G__31596;
i__31580 = G__31597;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31577);
if(temp__5735__auto__){
var seq__31577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31577__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__31577__$1);
var G__31598 = cljs.core.chunk_rest.call(null,seq__31577__$1);
var G__31599 = c__4591__auto__;
var G__31600 = cljs.core.count.call(null,c__4591__auto__);
var G__31601 = (0);
seq__31577 = G__31598;
chunk__31578 = G__31599;
count__31579 = G__31600;
i__31580 = G__31601;
continue;
} else {
var vec__31590 = cljs.core.first.call(null,seq__31577__$1);
var k = cljs.core.nth.call(null,vec__31590,(0),null);
var plugin = cljs.core.nth.call(null,vec__31590,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31602 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31577,chunk__31578,count__31579,i__31580,pl_31602,vec__31590,k,plugin,seq__31577__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31602.call(null,msg_hist);
});})(seq__31577,chunk__31578,count__31579,i__31580,pl_31602,vec__31590,k,plugin,seq__31577__$1,temp__5735__auto__))
);
} else {
}


var G__31603 = cljs.core.next.call(null,seq__31577__$1);
var G__31604 = null;
var G__31605 = (0);
var G__31606 = (0);
seq__31577 = G__31603;
chunk__31578 = G__31604;
count__31579 = G__31605;
i__31580 = G__31606;
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
var G__31608 = arguments.length;
switch (G__31608) {
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

var seq__31609_31614 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31610_31615 = null;
var count__31611_31616 = (0);
var i__31612_31617 = (0);
while(true){
if((i__31612_31617 < count__31611_31616)){
var msg_31618 = cljs.core._nth.call(null,chunk__31610_31615,i__31612_31617);
figwheel.client.socket.handle_incoming_message.call(null,msg_31618);


var G__31619 = seq__31609_31614;
var G__31620 = chunk__31610_31615;
var G__31621 = count__31611_31616;
var G__31622 = (i__31612_31617 + (1));
seq__31609_31614 = G__31619;
chunk__31610_31615 = G__31620;
count__31611_31616 = G__31621;
i__31612_31617 = G__31622;
continue;
} else {
var temp__5735__auto___31623 = cljs.core.seq.call(null,seq__31609_31614);
if(temp__5735__auto___31623){
var seq__31609_31624__$1 = temp__5735__auto___31623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31609_31624__$1)){
var c__4591__auto___31625 = cljs.core.chunk_first.call(null,seq__31609_31624__$1);
var G__31626 = cljs.core.chunk_rest.call(null,seq__31609_31624__$1);
var G__31627 = c__4591__auto___31625;
var G__31628 = cljs.core.count.call(null,c__4591__auto___31625);
var G__31629 = (0);
seq__31609_31614 = G__31626;
chunk__31610_31615 = G__31627;
count__31611_31616 = G__31628;
i__31612_31617 = G__31629;
continue;
} else {
var msg_31630 = cljs.core.first.call(null,seq__31609_31624__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31630);


var G__31631 = cljs.core.next.call(null,seq__31609_31624__$1);
var G__31632 = null;
var G__31633 = (0);
var G__31634 = (0);
seq__31609_31614 = G__31631;
chunk__31610_31615 = G__31632;
count__31611_31616 = G__31633;
i__31612_31617 = G__31634;
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
var len__4771__auto___31638 = arguments.length;
var i__4772__auto___31639 = (0);
while(true){
if((i__4772__auto___31639 < len__4771__auto___31638)){
args__4777__auto__.push((arguments[i__4772__auto___31639]));

var G__31640 = (i__4772__auto___31639 + (1));
i__4772__auto___31639 = G__31640;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31636){
var map__31637 = p__31636;
var map__31637__$1 = cljs.core.__destructure_map.call(null,map__31637);
var opts = map__31637__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31635){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31635));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31641){if((e31641 instanceof Error)){
var e = e31641;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31641;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31642){
var map__31643 = p__31642;
var map__31643__$1 = cljs.core.__destructure_map.call(null,map__31643);
var msg_name = cljs.core.get.call(null,map__31643__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1718650406984
