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
}catch (e30006){if((e30006 instanceof Error)){
var e = e30006;
return "Error: Unable to stringify";
} else {
throw e30006;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30009 = arguments.length;
switch (G__30009) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30007_SHARP_){
if(typeof p1__30007_SHARP_ === 'string'){
return p1__30007_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30007_SHARP_);
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
var len__4771__auto___30012 = arguments.length;
var i__4772__auto___30013 = (0);
while(true){
if((i__4772__auto___30013 < len__4771__auto___30012)){
args__4777__auto__.push((arguments[i__4772__auto___30013]));

var G__30014 = (i__4772__auto___30013 + (1));
i__4772__auto___30013 = G__30014;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30011){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30011));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4777__auto__ = [];
var len__4771__auto___30016 = arguments.length;
var i__4772__auto___30017 = (0);
while(true){
if((i__4772__auto___30017 < len__4771__auto___30016)){
args__4777__auto__.push((arguments[i__4772__auto___30017]));

var G__30018 = (i__4772__auto___30017 + (1));
i__4772__auto___30017 = G__30018;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30015){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30015));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30019){
var map__30020 = p__30019;
var map__30020__$1 = cljs.core.__destructure_map.call(null,map__30020);
var message = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24771__auto___30098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_30070){
var state_val_30071 = (state_30070[(1)]);
if((state_val_30071 === (7))){
var inst_30066 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30072_30099 = state_30070__$1;
(statearr_30072_30099[(2)] = inst_30066);

(statearr_30072_30099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (1))){
var state_30070__$1 = state_30070;
var statearr_30073_30100 = state_30070__$1;
(statearr_30073_30100[(2)] = null);

(statearr_30073_30100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (4))){
var inst_30023 = (state_30070[(7)]);
var inst_30023__$1 = (state_30070[(2)]);
var state_30070__$1 = (function (){var statearr_30074 = state_30070;
(statearr_30074[(7)] = inst_30023__$1);

return statearr_30074;
})();
if(cljs.core.truth_(inst_30023__$1)){
var statearr_30075_30101 = state_30070__$1;
(statearr_30075_30101[(1)] = (5));

} else {
var statearr_30076_30102 = state_30070__$1;
(statearr_30076_30102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (15))){
var inst_30030 = (state_30070[(8)]);
var inst_30045 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30030);
var inst_30046 = cljs.core.first.call(null,inst_30045);
var inst_30047 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30046);
var inst_30048 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30047)].join('');
var inst_30049 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30048);
var state_30070__$1 = state_30070;
var statearr_30077_30103 = state_30070__$1;
(statearr_30077_30103[(2)] = inst_30049);

(statearr_30077_30103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (13))){
var inst_30054 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30078_30104 = state_30070__$1;
(statearr_30078_30104[(2)] = inst_30054);

(statearr_30078_30104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (6))){
var state_30070__$1 = state_30070;
var statearr_30079_30105 = state_30070__$1;
(statearr_30079_30105[(2)] = null);

(statearr_30079_30105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (17))){
var inst_30052 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30080_30106 = state_30070__$1;
(statearr_30080_30106[(2)] = inst_30052);

(statearr_30080_30106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (3))){
var inst_30068 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30070__$1,inst_30068);
} else {
if((state_val_30071 === (12))){
var inst_30029 = (state_30070[(9)]);
var inst_30043 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30029,opts);
var state_30070__$1 = state_30070;
if(inst_30043){
var statearr_30081_30107 = state_30070__$1;
(statearr_30081_30107[(1)] = (15));

} else {
var statearr_30082_30108 = state_30070__$1;
(statearr_30082_30108[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (2))){
var state_30070__$1 = state_30070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30070__$1,(4),ch);
} else {
if((state_val_30071 === (11))){
var inst_30030 = (state_30070[(8)]);
var inst_30035 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30036 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30030);
var inst_30037 = cljs.core.async.timeout.call(null,(1000));
var inst_30038 = [inst_30036,inst_30037];
var inst_30039 = (new cljs.core.PersistentVector(null,2,(5),inst_30035,inst_30038,null));
var state_30070__$1 = state_30070;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30070__$1,(14),inst_30039);
} else {
if((state_val_30071 === (9))){
var inst_30030 = (state_30070[(8)]);
var inst_30056 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30057 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30030);
var inst_30058 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30057);
var inst_30059 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30058)].join('');
var inst_30060 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30059);
var state_30070__$1 = (function (){var statearr_30083 = state_30070;
(statearr_30083[(10)] = inst_30056);

return statearr_30083;
})();
var statearr_30084_30109 = state_30070__$1;
(statearr_30084_30109[(2)] = inst_30060);

(statearr_30084_30109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (5))){
var inst_30023 = (state_30070[(7)]);
var inst_30025 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30026 = (new cljs.core.PersistentArrayMap(null,2,inst_30025,null));
var inst_30027 = (new cljs.core.PersistentHashSet(null,inst_30026,null));
var inst_30028 = figwheel.client.focus_msgs.call(null,inst_30027,inst_30023);
var inst_30029 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30028);
var inst_30030 = cljs.core.first.call(null,inst_30028);
var inst_30031 = figwheel.client.autoload_QMARK_.call(null);
var state_30070__$1 = (function (){var statearr_30085 = state_30070;
(statearr_30085[(8)] = inst_30030);

(statearr_30085[(9)] = inst_30029);

return statearr_30085;
})();
if(cljs.core.truth_(inst_30031)){
var statearr_30086_30110 = state_30070__$1;
(statearr_30086_30110[(1)] = (8));

} else {
var statearr_30087_30111 = state_30070__$1;
(statearr_30087_30111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (14))){
var inst_30041 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30088_30112 = state_30070__$1;
(statearr_30088_30112[(2)] = inst_30041);

(statearr_30088_30112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (16))){
var state_30070__$1 = state_30070;
var statearr_30089_30113 = state_30070__$1;
(statearr_30089_30113[(2)] = null);

(statearr_30089_30113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (10))){
var inst_30062 = (state_30070[(2)]);
var state_30070__$1 = (function (){var statearr_30090 = state_30070;
(statearr_30090[(11)] = inst_30062);

return statearr_30090;
})();
var statearr_30091_30114 = state_30070__$1;
(statearr_30091_30114[(2)] = null);

(statearr_30091_30114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (8))){
var inst_30029 = (state_30070[(9)]);
var inst_30033 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30029,opts);
var state_30070__$1 = state_30070;
if(cljs.core.truth_(inst_30033)){
var statearr_30092_30115 = state_30070__$1;
(statearr_30092_30115[(1)] = (11));

} else {
var statearr_30093_30116 = state_30070__$1;
(statearr_30093_30116[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__24677__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24677__auto____0 = (function (){
var statearr_30094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30094[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24677__auto__);

(statearr_30094[(1)] = (1));

return statearr_30094;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24677__auto____1 = (function (state_30070){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_30070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e30095){if((e30095 instanceof Object)){
var ex__24680__auto__ = e30095;
var statearr_30096_30117 = state_30070;
(statearr_30096_30117[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30118 = state_30070;
state_30070 = G__30118;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24677__auto__ = function(state_30070){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24677__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24677__auto____1.call(this,state_30070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24677__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24677__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_30097 = f__24772__auto__.call(null);
(statearr_30097[(6)] = c__24771__auto___30098);

return statearr_30097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30119_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30119_SHARP_));
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
var base_path_30125 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30121 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30122 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30123 = true;
var _STAR_print_fn_STAR__temp_val__30124 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30123);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30124);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30122);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30121);
}}catch (e30120){if((e30120 instanceof Error)){
var e = e30120;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30125], null));
} else {
var e = e30120;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30126){
var map__30127 = p__30126;
var map__30127__$1 = cljs.core.__destructure_map.call(null,map__30127);
var opts = map__30127__$1;
var build_id = cljs.core.get.call(null,map__30127__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__30128){
var vec__30129 = p__30128;
var seq__30130 = cljs.core.seq.call(null,vec__30129);
var first__30131 = cljs.core.first.call(null,seq__30130);
var seq__30130__$1 = cljs.core.next.call(null,seq__30130);
var map__30132 = first__30131;
var map__30132__$1 = cljs.core.__destructure_map.call(null,map__30132);
var msg = map__30132__$1;
var msg_name = cljs.core.get.call(null,map__30132__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30130__$1;
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
return (function (p__30133){
var vec__30134 = p__30133;
var seq__30135 = cljs.core.seq.call(null,vec__30134);
var first__30136 = cljs.core.first.call(null,seq__30135);
var seq__30135__$1 = cljs.core.next.call(null,seq__30135);
var map__30137 = first__30136;
var map__30137__$1 = cljs.core.__destructure_map.call(null,map__30137);
var msg = map__30137__$1;
var msg_name = cljs.core.get.call(null,map__30137__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30135__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30138){
var map__30139 = p__30138;
var map__30139__$1 = cljs.core.__destructure_map.call(null,map__30139);
var on_compile_warning = cljs.core.get.call(null,map__30139__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30139__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__30140){
var vec__30141 = p__30140;
var seq__30142 = cljs.core.seq.call(null,vec__30141);
var first__30143 = cljs.core.first.call(null,seq__30142);
var seq__30142__$1 = cljs.core.next.call(null,seq__30142);
var map__30144 = first__30143;
var map__30144__$1 = cljs.core.__destructure_map.call(null,map__30144);
var msg = map__30144__$1;
var msg_name = cljs.core.get.call(null,map__30144__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30142__$1;
var pred__30145 = cljs.core._EQ_;
var expr__30146 = msg_name;
if(cljs.core.truth_(pred__30145.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30146))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30145.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30146))){
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
var c__24771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_30235){
var state_val_30236 = (state_30235[(1)]);
if((state_val_30236 === (7))){
var inst_30155 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30155)){
var statearr_30237_30284 = state_30235__$1;
(statearr_30237_30284[(1)] = (8));

} else {
var statearr_30238_30285 = state_30235__$1;
(statearr_30238_30285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (20))){
var inst_30229 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30239_30286 = state_30235__$1;
(statearr_30239_30286[(2)] = inst_30229);

(statearr_30239_30286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (27))){
var inst_30225 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30240_30287 = state_30235__$1;
(statearr_30240_30287[(2)] = inst_30225);

(statearr_30240_30287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (1))){
var inst_30148 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30148)){
var statearr_30241_30288 = state_30235__$1;
(statearr_30241_30288[(1)] = (2));

} else {
var statearr_30242_30289 = state_30235__$1;
(statearr_30242_30289[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (24))){
var inst_30227 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30243_30290 = state_30235__$1;
(statearr_30243_30290[(2)] = inst_30227);

(statearr_30243_30290[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (4))){
var inst_30233 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30235__$1,inst_30233);
} else {
if((state_val_30236 === (15))){
var inst_30231 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30244_30291 = state_30235__$1;
(statearr_30244_30291[(2)] = inst_30231);

(statearr_30244_30291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (21))){
var inst_30184 = (state_30235[(2)]);
var inst_30185 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30186 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30185);
var state_30235__$1 = (function (){var statearr_30245 = state_30235;
(statearr_30245[(7)] = inst_30184);

return statearr_30245;
})();
var statearr_30246_30292 = state_30235__$1;
(statearr_30246_30292[(2)] = inst_30186);

(statearr_30246_30292[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (31))){
var inst_30214 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(inst_30214){
var statearr_30247_30293 = state_30235__$1;
(statearr_30247_30293[(1)] = (34));

} else {
var statearr_30248_30294 = state_30235__$1;
(statearr_30248_30294[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (32))){
var inst_30223 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30249_30295 = state_30235__$1;
(statearr_30249_30295[(2)] = inst_30223);

(statearr_30249_30295[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (33))){
var inst_30210 = (state_30235[(2)]);
var inst_30211 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30212 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30211);
var state_30235__$1 = (function (){var statearr_30250 = state_30235;
(statearr_30250[(8)] = inst_30210);

return statearr_30250;
})();
var statearr_30251_30296 = state_30235__$1;
(statearr_30251_30296[(2)] = inst_30212);

(statearr_30251_30296[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (13))){
var inst_30169 = figwheel.client.heads_up.clear.call(null);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(16),inst_30169);
} else {
if((state_val_30236 === (22))){
var inst_30190 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30191 = figwheel.client.heads_up.append_warning_message.call(null,inst_30190);
var state_30235__$1 = state_30235;
var statearr_30252_30297 = state_30235__$1;
(statearr_30252_30297[(2)] = inst_30191);

(statearr_30252_30297[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (36))){
var inst_30221 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30253_30298 = state_30235__$1;
(statearr_30253_30298[(2)] = inst_30221);

(statearr_30253_30298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (29))){
var inst_30201 = (state_30235[(2)]);
var inst_30202 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30203 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30202);
var state_30235__$1 = (function (){var statearr_30254 = state_30235;
(statearr_30254[(9)] = inst_30201);

return statearr_30254;
})();
var statearr_30255_30299 = state_30235__$1;
(statearr_30255_30299[(2)] = inst_30203);

(statearr_30255_30299[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (6))){
var inst_30150 = (state_30235[(10)]);
var state_30235__$1 = state_30235;
var statearr_30256_30300 = state_30235__$1;
(statearr_30256_30300[(2)] = inst_30150);

(statearr_30256_30300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (28))){
var inst_30197 = (state_30235[(2)]);
var inst_30198 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30199 = figwheel.client.heads_up.display_warning.call(null,inst_30198);
var state_30235__$1 = (function (){var statearr_30257 = state_30235;
(statearr_30257[(11)] = inst_30197);

return statearr_30257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(29),inst_30199);
} else {
if((state_val_30236 === (25))){
var inst_30195 = figwheel.client.heads_up.clear.call(null);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(28),inst_30195);
} else {
if((state_val_30236 === (34))){
var inst_30216 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(37),inst_30216);
} else {
if((state_val_30236 === (17))){
var inst_30175 = (state_30235[(2)]);
var inst_30176 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30177 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30176);
var state_30235__$1 = (function (){var statearr_30258 = state_30235;
(statearr_30258[(12)] = inst_30175);

return statearr_30258;
})();
var statearr_30259_30301 = state_30235__$1;
(statearr_30259_30301[(2)] = inst_30177);

(statearr_30259_30301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (3))){
var inst_30167 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(inst_30167){
var statearr_30260_30302 = state_30235__$1;
(statearr_30260_30302[(1)] = (13));

} else {
var statearr_30261_30303 = state_30235__$1;
(statearr_30261_30303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (12))){
var inst_30163 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30262_30304 = state_30235__$1;
(statearr_30262_30304[(2)] = inst_30163);

(statearr_30262_30304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (2))){
var inst_30150 = (state_30235[(10)]);
var inst_30150__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30235__$1 = (function (){var statearr_30263 = state_30235;
(statearr_30263[(10)] = inst_30150__$1);

return statearr_30263;
})();
if(cljs.core.truth_(inst_30150__$1)){
var statearr_30264_30305 = state_30235__$1;
(statearr_30264_30305[(1)] = (5));

} else {
var statearr_30265_30306 = state_30235__$1;
(statearr_30265_30306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (23))){
var inst_30193 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(inst_30193){
var statearr_30266_30307 = state_30235__$1;
(statearr_30266_30307[(1)] = (25));

} else {
var statearr_30267_30308 = state_30235__$1;
(statearr_30267_30308[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (35))){
var state_30235__$1 = state_30235;
var statearr_30268_30309 = state_30235__$1;
(statearr_30268_30309[(2)] = null);

(statearr_30268_30309[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (19))){
var inst_30188 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(inst_30188){
var statearr_30269_30310 = state_30235__$1;
(statearr_30269_30310[(1)] = (22));

} else {
var statearr_30270_30311 = state_30235__$1;
(statearr_30270_30311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (11))){
var inst_30159 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30271_30312 = state_30235__$1;
(statearr_30271_30312[(2)] = inst_30159);

(statearr_30271_30312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (9))){
var inst_30161 = figwheel.client.heads_up.clear.call(null);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(12),inst_30161);
} else {
if((state_val_30236 === (5))){
var inst_30152 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30235__$1 = state_30235;
var statearr_30272_30313 = state_30235__$1;
(statearr_30272_30313[(2)] = inst_30152);

(statearr_30272_30313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (14))){
var inst_30179 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(inst_30179){
var statearr_30273_30314 = state_30235__$1;
(statearr_30273_30314[(1)] = (18));

} else {
var statearr_30274_30315 = state_30235__$1;
(statearr_30274_30315[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (26))){
var inst_30205 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30235__$1 = state_30235;
if(inst_30205){
var statearr_30275_30316 = state_30235__$1;
(statearr_30275_30316[(1)] = (30));

} else {
var statearr_30276_30317 = state_30235__$1;
(statearr_30276_30317[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (16))){
var inst_30171 = (state_30235[(2)]);
var inst_30172 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30173 = figwheel.client.heads_up.display_exception.call(null,inst_30172);
var state_30235__$1 = (function (){var statearr_30277 = state_30235;
(statearr_30277[(13)] = inst_30171);

return statearr_30277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(17),inst_30173);
} else {
if((state_val_30236 === (30))){
var inst_30207 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30208 = figwheel.client.heads_up.display_warning.call(null,inst_30207);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(33),inst_30208);
} else {
if((state_val_30236 === (10))){
var inst_30165 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30278_30318 = state_30235__$1;
(statearr_30278_30318[(2)] = inst_30165);

(statearr_30278_30318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (18))){
var inst_30181 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30182 = figwheel.client.heads_up.display_exception.call(null,inst_30181);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(21),inst_30182);
} else {
if((state_val_30236 === (37))){
var inst_30218 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30279_30319 = state_30235__$1;
(statearr_30279_30319[(2)] = inst_30218);

(statearr_30279_30319[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (8))){
var inst_30157 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(11),inst_30157);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto____0 = (function (){
var statearr_30280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30280[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto__);

(statearr_30280[(1)] = (1));

return statearr_30280;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto____1 = (function (state_30235){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_30235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e30281){if((e30281 instanceof Object)){
var ex__24680__auto__ = e30281;
var statearr_30282_30320 = state_30235;
(statearr_30282_30320[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30321 = state_30235;
state_30235 = G__30321;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto__ = function(state_30235){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto____1.call(this,state_30235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_30283 = f__24772__auto__.call(null);
(statearr_30283[(6)] = c__24771__auto__);

return statearr_30283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));

return c__24771__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24771__auto___30350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_30336){
var state_val_30337 = (state_30336[(1)]);
if((state_val_30337 === (1))){
var state_30336__$1 = state_30336;
var statearr_30338_30351 = state_30336__$1;
(statearr_30338_30351[(2)] = null);

(statearr_30338_30351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (2))){
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30336__$1,(4),ch);
} else {
if((state_val_30337 === (3))){
var inst_30334 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30336__$1,inst_30334);
} else {
if((state_val_30337 === (4))){
var inst_30324 = (state_30336[(7)]);
var inst_30324__$1 = (state_30336[(2)]);
var state_30336__$1 = (function (){var statearr_30339 = state_30336;
(statearr_30339[(7)] = inst_30324__$1);

return statearr_30339;
})();
if(cljs.core.truth_(inst_30324__$1)){
var statearr_30340_30352 = state_30336__$1;
(statearr_30340_30352[(1)] = (5));

} else {
var statearr_30341_30353 = state_30336__$1;
(statearr_30341_30353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (5))){
var inst_30324 = (state_30336[(7)]);
var inst_30326 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30324);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30336__$1,(8),inst_30326);
} else {
if((state_val_30337 === (6))){
var state_30336__$1 = state_30336;
var statearr_30342_30354 = state_30336__$1;
(statearr_30342_30354[(2)] = null);

(statearr_30342_30354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (7))){
var inst_30332 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
var statearr_30343_30355 = state_30336__$1;
(statearr_30343_30355[(2)] = inst_30332);

(statearr_30343_30355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (8))){
var inst_30328 = (state_30336[(2)]);
var state_30336__$1 = (function (){var statearr_30344 = state_30336;
(statearr_30344[(8)] = inst_30328);

return statearr_30344;
})();
var statearr_30345_30356 = state_30336__$1;
(statearr_30345_30356[(2)] = null);

(statearr_30345_30356[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__24677__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24677__auto____0 = (function (){
var statearr_30346 = [null,null,null,null,null,null,null,null,null];
(statearr_30346[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24677__auto__);

(statearr_30346[(1)] = (1));

return statearr_30346;
});
var figwheel$client$heads_up_plugin_$_state_machine__24677__auto____1 = (function (state_30336){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_30336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e30347){if((e30347 instanceof Object)){
var ex__24680__auto__ = e30347;
var statearr_30348_30357 = state_30336;
(statearr_30348_30357[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30358 = state_30336;
state_30336 = G__30358;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24677__auto__ = function(state_30336){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24677__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24677__auto____1.call(this,state_30336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24677__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24677__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_30349 = f__24772__auto__.call(null);
(statearr_30349[(6)] = c__24771__auto___30350);

return statearr_30349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
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
var c__24771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_30364){
var state_val_30365 = (state_30364[(1)]);
if((state_val_30365 === (1))){
var inst_30359 = cljs.core.async.timeout.call(null,(3000));
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30364__$1,(2),inst_30359);
} else {
if((state_val_30365 === (2))){
var inst_30361 = (state_30364[(2)]);
var inst_30362 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30364__$1 = (function (){var statearr_30366 = state_30364;
(statearr_30366[(7)] = inst_30361);

return statearr_30366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30364__$1,inst_30362);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24677__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24677__auto____0 = (function (){
var statearr_30367 = [null,null,null,null,null,null,null,null];
(statearr_30367[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24677__auto__);

(statearr_30367[(1)] = (1));

return statearr_30367;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24677__auto____1 = (function (state_30364){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_30364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e30368){if((e30368 instanceof Object)){
var ex__24680__auto__ = e30368;
var statearr_30369_30371 = state_30364;
(statearr_30369_30371[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30372 = state_30364;
state_30364 = G__30372;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24677__auto__ = function(state_30364){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24677__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24677__auto____1.call(this,state_30364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24677__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24677__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_30370 = f__24772__auto__.call(null);
(statearr_30370[(6)] = c__24771__auto__);

return statearr_30370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));

return c__24771__auto__;
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
var c__24771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24772__auto__ = (function (){var switch__24676__auto__ = (function (state_30379){
var state_val_30380 = (state_30379[(1)]);
if((state_val_30380 === (1))){
var inst_30373 = cljs.core.async.timeout.call(null,(2000));
var state_30379__$1 = state_30379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30379__$1,(2),inst_30373);
} else {
if((state_val_30380 === (2))){
var inst_30375 = (state_30379[(2)]);
var inst_30376 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30377 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30376);
var state_30379__$1 = (function (){var statearr_30381 = state_30379;
(statearr_30381[(7)] = inst_30375);

return statearr_30381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30379__$1,inst_30377);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto____0 = (function (){
var statearr_30382 = [null,null,null,null,null,null,null,null];
(statearr_30382[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto__);

(statearr_30382[(1)] = (1));

return statearr_30382;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto____1 = (function (state_30379){
while(true){
var ret_value__24678__auto__ = (function (){try{while(true){
var result__24679__auto__ = switch__24676__auto__.call(null,state_30379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24679__auto__;
}
break;
}
}catch (e30383){if((e30383 instanceof Object)){
var ex__24680__auto__ = e30383;
var statearr_30384_30386 = state_30379;
(statearr_30384_30386[(5)] = ex__24680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30387 = state_30379;
state_30379 = G__30387;
continue;
} else {
return ret_value__24678__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto__ = function(state_30379){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto____1.call(this,state_30379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24677__auto__;
})()
})();
var state__24773__auto__ = (function (){var statearr_30385 = f__24772__auto__.call(null);
(statearr_30385[(6)] = c__24771__auto__);

return statearr_30385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24773__auto__);
}));

return c__24771__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30388){
var map__30389 = p__30388;
var map__30389__$1 = cljs.core.__destructure_map.call(null,map__30389);
var file = cljs.core.get.call(null,map__30389__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30389__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30389__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30390 = "";
var G__30390__$1 = (cljs.core.truth_(file)?[G__30390,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30390);
var G__30390__$2 = (cljs.core.truth_(line)?[G__30390__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30390__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = line;
if(cljs.core.truth_(and__4149__auto__)){
return column;
} else {
return and__4149__auto__;
}
})())){
return [G__30390__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30390__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30391){
var map__30392 = p__30391;
var map__30392__$1 = cljs.core.__destructure_map.call(null,map__30392);
var ed = map__30392__$1;
var exception_data = cljs.core.get.call(null,map__30392__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30392__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30394 = (function (){var G__30393 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30393)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30393;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30394);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30395){
var map__30396 = p__30395;
var map__30396__$1 = cljs.core.__destructure_map.call(null,map__30396);
var w = map__30396__$1;
var message = cljs.core.get.call(null,map__30396__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30397 = cljs.core.seq.call(null,plugins);
var chunk__30398 = null;
var count__30399 = (0);
var i__30400 = (0);
while(true){
if((i__30400 < count__30399)){
var vec__30407 = cljs.core._nth.call(null,chunk__30398,i__30400);
var k = cljs.core.nth.call(null,vec__30407,(0),null);
var plugin = cljs.core.nth.call(null,vec__30407,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30413 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30397,chunk__30398,count__30399,i__30400,pl_30413,vec__30407,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30413.call(null,msg_hist);
});})(seq__30397,chunk__30398,count__30399,i__30400,pl_30413,vec__30407,k,plugin))
);
} else {
}


var G__30414 = seq__30397;
var G__30415 = chunk__30398;
var G__30416 = count__30399;
var G__30417 = (i__30400 + (1));
seq__30397 = G__30414;
chunk__30398 = G__30415;
count__30399 = G__30416;
i__30400 = G__30417;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30397);
if(temp__5735__auto__){
var seq__30397__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30397__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__30397__$1);
var G__30418 = cljs.core.chunk_rest.call(null,seq__30397__$1);
var G__30419 = c__4591__auto__;
var G__30420 = cljs.core.count.call(null,c__4591__auto__);
var G__30421 = (0);
seq__30397 = G__30418;
chunk__30398 = G__30419;
count__30399 = G__30420;
i__30400 = G__30421;
continue;
} else {
var vec__30410 = cljs.core.first.call(null,seq__30397__$1);
var k = cljs.core.nth.call(null,vec__30410,(0),null);
var plugin = cljs.core.nth.call(null,vec__30410,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30422 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30397,chunk__30398,count__30399,i__30400,pl_30422,vec__30410,k,plugin,seq__30397__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30422.call(null,msg_hist);
});})(seq__30397,chunk__30398,count__30399,i__30400,pl_30422,vec__30410,k,plugin,seq__30397__$1,temp__5735__auto__))
);
} else {
}


var G__30423 = cljs.core.next.call(null,seq__30397__$1);
var G__30424 = null;
var G__30425 = (0);
var G__30426 = (0);
seq__30397 = G__30423;
chunk__30398 = G__30424;
count__30399 = G__30425;
i__30400 = G__30426;
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
var G__30428 = arguments.length;
switch (G__30428) {
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

var seq__30429_30434 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30430_30435 = null;
var count__30431_30436 = (0);
var i__30432_30437 = (0);
while(true){
if((i__30432_30437 < count__30431_30436)){
var msg_30438 = cljs.core._nth.call(null,chunk__30430_30435,i__30432_30437);
figwheel.client.socket.handle_incoming_message.call(null,msg_30438);


var G__30439 = seq__30429_30434;
var G__30440 = chunk__30430_30435;
var G__30441 = count__30431_30436;
var G__30442 = (i__30432_30437 + (1));
seq__30429_30434 = G__30439;
chunk__30430_30435 = G__30440;
count__30431_30436 = G__30441;
i__30432_30437 = G__30442;
continue;
} else {
var temp__5735__auto___30443 = cljs.core.seq.call(null,seq__30429_30434);
if(temp__5735__auto___30443){
var seq__30429_30444__$1 = temp__5735__auto___30443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30429_30444__$1)){
var c__4591__auto___30445 = cljs.core.chunk_first.call(null,seq__30429_30444__$1);
var G__30446 = cljs.core.chunk_rest.call(null,seq__30429_30444__$1);
var G__30447 = c__4591__auto___30445;
var G__30448 = cljs.core.count.call(null,c__4591__auto___30445);
var G__30449 = (0);
seq__30429_30434 = G__30446;
chunk__30430_30435 = G__30447;
count__30431_30436 = G__30448;
i__30432_30437 = G__30449;
continue;
} else {
var msg_30450 = cljs.core.first.call(null,seq__30429_30444__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30450);


var G__30451 = cljs.core.next.call(null,seq__30429_30444__$1);
var G__30452 = null;
var G__30453 = (0);
var G__30454 = (0);
seq__30429_30434 = G__30451;
chunk__30430_30435 = G__30452;
count__30431_30436 = G__30453;
i__30432_30437 = G__30454;
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
var len__4771__auto___30458 = arguments.length;
var i__4772__auto___30459 = (0);
while(true){
if((i__4772__auto___30459 < len__4771__auto___30458)){
args__4777__auto__.push((arguments[i__4772__auto___30459]));

var G__30460 = (i__4772__auto___30459 + (1));
i__4772__auto___30459 = G__30460;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30456){
var map__30457 = p__30456;
var map__30457__$1 = cljs.core.__destructure_map.call(null,map__30457);
var opts = map__30457__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30455){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30455));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30461){if((e30461 instanceof Error)){
var e = e30461;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30461;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__30462){
var map__30463 = p__30462;
var map__30463__$1 = cljs.core.__destructure_map.call(null,map__30463);
var msg_name = cljs.core.get.call(null,map__30463__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1720062346868
