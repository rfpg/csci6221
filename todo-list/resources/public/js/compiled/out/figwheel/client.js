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
}catch (e30139){if((e30139 instanceof Error)){
var e = e30139;
return "Error: Unable to stringify";
} else {
throw e30139;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30142 = arguments.length;
switch (G__30142) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30140_SHARP_){
if(typeof p1__30140_SHARP_ === 'string'){
return p1__30140_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30140_SHARP_);
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
var len__4771__auto___30145 = arguments.length;
var i__4772__auto___30146 = (0);
while(true){
if((i__4772__auto___30146 < len__4771__auto___30145)){
args__4777__auto__.push((arguments[i__4772__auto___30146]));

var G__30147 = (i__4772__auto___30146 + (1));
i__4772__auto___30146 = G__30147;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30144){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30144));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4777__auto__ = [];
var len__4771__auto___30149 = arguments.length;
var i__4772__auto___30150 = (0);
while(true){
if((i__4772__auto___30150 < len__4771__auto___30149)){
args__4777__auto__.push((arguments[i__4772__auto___30150]));

var G__30151 = (i__4772__auto___30150 + (1));
i__4772__auto___30150 = G__30151;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30148){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30148));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30152){
var map__30153 = p__30152;
var map__30153__$1 = cljs.core.__destructure_map.call(null,map__30153);
var message = cljs.core.get.call(null,map__30153__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30153__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24972__auto___30231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_30203){
var state_val_30204 = (state_30203[(1)]);
if((state_val_30204 === (7))){
var inst_30199 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30205_30232 = state_30203__$1;
(statearr_30205_30232[(2)] = inst_30199);

(statearr_30205_30232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (1))){
var state_30203__$1 = state_30203;
var statearr_30206_30233 = state_30203__$1;
(statearr_30206_30233[(2)] = null);

(statearr_30206_30233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (4))){
var inst_30156 = (state_30203[(7)]);
var inst_30156__$1 = (state_30203[(2)]);
var state_30203__$1 = (function (){var statearr_30207 = state_30203;
(statearr_30207[(7)] = inst_30156__$1);

return statearr_30207;
})();
if(cljs.core.truth_(inst_30156__$1)){
var statearr_30208_30234 = state_30203__$1;
(statearr_30208_30234[(1)] = (5));

} else {
var statearr_30209_30235 = state_30203__$1;
(statearr_30209_30235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (15))){
var inst_30163 = (state_30203[(8)]);
var inst_30178 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30163);
var inst_30179 = cljs.core.first.call(null,inst_30178);
var inst_30180 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30179);
var inst_30181 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30180)].join('');
var inst_30182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30181);
var state_30203__$1 = state_30203;
var statearr_30210_30236 = state_30203__$1;
(statearr_30210_30236[(2)] = inst_30182);

(statearr_30210_30236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (13))){
var inst_30187 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30211_30237 = state_30203__$1;
(statearr_30211_30237[(2)] = inst_30187);

(statearr_30211_30237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (6))){
var state_30203__$1 = state_30203;
var statearr_30212_30238 = state_30203__$1;
(statearr_30212_30238[(2)] = null);

(statearr_30212_30238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (17))){
var inst_30185 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30213_30239 = state_30203__$1;
(statearr_30213_30239[(2)] = inst_30185);

(statearr_30213_30239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (3))){
var inst_30201 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30203__$1,inst_30201);
} else {
if((state_val_30204 === (12))){
var inst_30162 = (state_30203[(9)]);
var inst_30176 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30162,opts);
var state_30203__$1 = state_30203;
if(inst_30176){
var statearr_30214_30240 = state_30203__$1;
(statearr_30214_30240[(1)] = (15));

} else {
var statearr_30215_30241 = state_30203__$1;
(statearr_30215_30241[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (2))){
var state_30203__$1 = state_30203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30203__$1,(4),ch);
} else {
if((state_val_30204 === (11))){
var inst_30163 = (state_30203[(8)]);
var inst_30168 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30169 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30163);
var inst_30170 = cljs.core.async.timeout.call(null,(1000));
var inst_30171 = [inst_30169,inst_30170];
var inst_30172 = (new cljs.core.PersistentVector(null,2,(5),inst_30168,inst_30171,null));
var state_30203__$1 = state_30203;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30203__$1,(14),inst_30172);
} else {
if((state_val_30204 === (9))){
var inst_30163 = (state_30203[(8)]);
var inst_30189 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30190 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30163);
var inst_30191 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30190);
var inst_30192 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30191)].join('');
var inst_30193 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30192);
var state_30203__$1 = (function (){var statearr_30216 = state_30203;
(statearr_30216[(10)] = inst_30189);

return statearr_30216;
})();
var statearr_30217_30242 = state_30203__$1;
(statearr_30217_30242[(2)] = inst_30193);

(statearr_30217_30242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (5))){
var inst_30156 = (state_30203[(7)]);
var inst_30158 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30159 = (new cljs.core.PersistentArrayMap(null,2,inst_30158,null));
var inst_30160 = (new cljs.core.PersistentHashSet(null,inst_30159,null));
var inst_30161 = figwheel.client.focus_msgs.call(null,inst_30160,inst_30156);
var inst_30162 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30161);
var inst_30163 = cljs.core.first.call(null,inst_30161);
var inst_30164 = figwheel.client.autoload_QMARK_.call(null);
var state_30203__$1 = (function (){var statearr_30218 = state_30203;
(statearr_30218[(8)] = inst_30163);

(statearr_30218[(9)] = inst_30162);

return statearr_30218;
})();
if(cljs.core.truth_(inst_30164)){
var statearr_30219_30243 = state_30203__$1;
(statearr_30219_30243[(1)] = (8));

} else {
var statearr_30220_30244 = state_30203__$1;
(statearr_30220_30244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (14))){
var inst_30174 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30221_30245 = state_30203__$1;
(statearr_30221_30245[(2)] = inst_30174);

(statearr_30221_30245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (16))){
var state_30203__$1 = state_30203;
var statearr_30222_30246 = state_30203__$1;
(statearr_30222_30246[(2)] = null);

(statearr_30222_30246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (10))){
var inst_30195 = (state_30203[(2)]);
var state_30203__$1 = (function (){var statearr_30223 = state_30203;
(statearr_30223[(11)] = inst_30195);

return statearr_30223;
})();
var statearr_30224_30247 = state_30203__$1;
(statearr_30224_30247[(2)] = null);

(statearr_30224_30247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30204 === (8))){
var inst_30162 = (state_30203[(9)]);
var inst_30166 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30162,opts);
var state_30203__$1 = state_30203;
if(cljs.core.truth_(inst_30166)){
var statearr_30225_30248 = state_30203__$1;
(statearr_30225_30248[(1)] = (11));

} else {
var statearr_30226_30249 = state_30203__$1;
(statearr_30226_30249[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__24878__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24878__auto____0 = (function (){
var statearr_30227 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30227[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24878__auto__);

(statearr_30227[(1)] = (1));

return statearr_30227;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24878__auto____1 = (function (state_30203){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_30203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e30228){if((e30228 instanceof Object)){
var ex__24881__auto__ = e30228;
var statearr_30229_30250 = state_30203;
(statearr_30229_30250[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30251 = state_30203;
state_30203 = G__30251;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24878__auto__ = function(state_30203){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24878__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24878__auto____1.call(this,state_30203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24878__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24878__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_30230 = f__24973__auto__.call(null);
(statearr_30230[(6)] = c__24972__auto___30231);

return statearr_30230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30252_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30252_SHARP_));
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
var base_path_30258 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30254 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30255 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30256 = true;
var _STAR_print_fn_STAR__temp_val__30257 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30256);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30257);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30255);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30254);
}}catch (e30253){if((e30253 instanceof Error)){
var e = e30253;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30258], null));
} else {
var e = e30253;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30259){
var map__30260 = p__30259;
var map__30260__$1 = cljs.core.__destructure_map.call(null,map__30260);
var opts = map__30260__$1;
var build_id = cljs.core.get.call(null,map__30260__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__30261){
var vec__30262 = p__30261;
var seq__30263 = cljs.core.seq.call(null,vec__30262);
var first__30264 = cljs.core.first.call(null,seq__30263);
var seq__30263__$1 = cljs.core.next.call(null,seq__30263);
var map__30265 = first__30264;
var map__30265__$1 = cljs.core.__destructure_map.call(null,map__30265);
var msg = map__30265__$1;
var msg_name = cljs.core.get.call(null,map__30265__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30263__$1;
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
return (function (p__30266){
var vec__30267 = p__30266;
var seq__30268 = cljs.core.seq.call(null,vec__30267);
var first__30269 = cljs.core.first.call(null,seq__30268);
var seq__30268__$1 = cljs.core.next.call(null,seq__30268);
var map__30270 = first__30269;
var map__30270__$1 = cljs.core.__destructure_map.call(null,map__30270);
var msg = map__30270__$1;
var msg_name = cljs.core.get.call(null,map__30270__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30268__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30271){
var map__30272 = p__30271;
var map__30272__$1 = cljs.core.__destructure_map.call(null,map__30272);
var on_compile_warning = cljs.core.get.call(null,map__30272__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30272__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__30273){
var vec__30274 = p__30273;
var seq__30275 = cljs.core.seq.call(null,vec__30274);
var first__30276 = cljs.core.first.call(null,seq__30275);
var seq__30275__$1 = cljs.core.next.call(null,seq__30275);
var map__30277 = first__30276;
var map__30277__$1 = cljs.core.__destructure_map.call(null,map__30277);
var msg = map__30277__$1;
var msg_name = cljs.core.get.call(null,map__30277__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30275__$1;
var pred__30278 = cljs.core._EQ_;
var expr__30279 = msg_name;
if(cljs.core.truth_(pred__30278.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30279))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30278.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30279))){
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
var c__24972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_30368){
var state_val_30369 = (state_30368[(1)]);
if((state_val_30369 === (7))){
var inst_30288 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
if(cljs.core.truth_(inst_30288)){
var statearr_30370_30417 = state_30368__$1;
(statearr_30370_30417[(1)] = (8));

} else {
var statearr_30371_30418 = state_30368__$1;
(statearr_30371_30418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (20))){
var inst_30362 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30372_30419 = state_30368__$1;
(statearr_30372_30419[(2)] = inst_30362);

(statearr_30372_30419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (27))){
var inst_30358 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30373_30420 = state_30368__$1;
(statearr_30373_30420[(2)] = inst_30358);

(statearr_30373_30420[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (1))){
var inst_30281 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30368__$1 = state_30368;
if(cljs.core.truth_(inst_30281)){
var statearr_30374_30421 = state_30368__$1;
(statearr_30374_30421[(1)] = (2));

} else {
var statearr_30375_30422 = state_30368__$1;
(statearr_30375_30422[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (24))){
var inst_30360 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30376_30423 = state_30368__$1;
(statearr_30376_30423[(2)] = inst_30360);

(statearr_30376_30423[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (4))){
var inst_30366 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30368__$1,inst_30366);
} else {
if((state_val_30369 === (15))){
var inst_30364 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30377_30424 = state_30368__$1;
(statearr_30377_30424[(2)] = inst_30364);

(statearr_30377_30424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (21))){
var inst_30317 = (state_30368[(2)]);
var inst_30318 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30319 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30318);
var state_30368__$1 = (function (){var statearr_30378 = state_30368;
(statearr_30378[(7)] = inst_30317);

return statearr_30378;
})();
var statearr_30379_30425 = state_30368__$1;
(statearr_30379_30425[(2)] = inst_30319);

(statearr_30379_30425[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (31))){
var inst_30347 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30368__$1 = state_30368;
if(inst_30347){
var statearr_30380_30426 = state_30368__$1;
(statearr_30380_30426[(1)] = (34));

} else {
var statearr_30381_30427 = state_30368__$1;
(statearr_30381_30427[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (32))){
var inst_30356 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30382_30428 = state_30368__$1;
(statearr_30382_30428[(2)] = inst_30356);

(statearr_30382_30428[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (33))){
var inst_30343 = (state_30368[(2)]);
var inst_30344 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30345 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30344);
var state_30368__$1 = (function (){var statearr_30383 = state_30368;
(statearr_30383[(8)] = inst_30343);

return statearr_30383;
})();
var statearr_30384_30429 = state_30368__$1;
(statearr_30384_30429[(2)] = inst_30345);

(statearr_30384_30429[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (13))){
var inst_30302 = figwheel.client.heads_up.clear.call(null);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(16),inst_30302);
} else {
if((state_val_30369 === (22))){
var inst_30323 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30324 = figwheel.client.heads_up.append_warning_message.call(null,inst_30323);
var state_30368__$1 = state_30368;
var statearr_30385_30430 = state_30368__$1;
(statearr_30385_30430[(2)] = inst_30324);

(statearr_30385_30430[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (36))){
var inst_30354 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30386_30431 = state_30368__$1;
(statearr_30386_30431[(2)] = inst_30354);

(statearr_30386_30431[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (29))){
var inst_30334 = (state_30368[(2)]);
var inst_30335 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30336 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30335);
var state_30368__$1 = (function (){var statearr_30387 = state_30368;
(statearr_30387[(9)] = inst_30334);

return statearr_30387;
})();
var statearr_30388_30432 = state_30368__$1;
(statearr_30388_30432[(2)] = inst_30336);

(statearr_30388_30432[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (6))){
var inst_30283 = (state_30368[(10)]);
var state_30368__$1 = state_30368;
var statearr_30389_30433 = state_30368__$1;
(statearr_30389_30433[(2)] = inst_30283);

(statearr_30389_30433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (28))){
var inst_30330 = (state_30368[(2)]);
var inst_30331 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30332 = figwheel.client.heads_up.display_warning.call(null,inst_30331);
var state_30368__$1 = (function (){var statearr_30390 = state_30368;
(statearr_30390[(11)] = inst_30330);

return statearr_30390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(29),inst_30332);
} else {
if((state_val_30369 === (25))){
var inst_30328 = figwheel.client.heads_up.clear.call(null);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(28),inst_30328);
} else {
if((state_val_30369 === (34))){
var inst_30349 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(37),inst_30349);
} else {
if((state_val_30369 === (17))){
var inst_30308 = (state_30368[(2)]);
var inst_30309 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30310 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30309);
var state_30368__$1 = (function (){var statearr_30391 = state_30368;
(statearr_30391[(12)] = inst_30308);

return statearr_30391;
})();
var statearr_30392_30434 = state_30368__$1;
(statearr_30392_30434[(2)] = inst_30310);

(statearr_30392_30434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (3))){
var inst_30300 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30368__$1 = state_30368;
if(inst_30300){
var statearr_30393_30435 = state_30368__$1;
(statearr_30393_30435[(1)] = (13));

} else {
var statearr_30394_30436 = state_30368__$1;
(statearr_30394_30436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (12))){
var inst_30296 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30395_30437 = state_30368__$1;
(statearr_30395_30437[(2)] = inst_30296);

(statearr_30395_30437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (2))){
var inst_30283 = (state_30368[(10)]);
var inst_30283__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30368__$1 = (function (){var statearr_30396 = state_30368;
(statearr_30396[(10)] = inst_30283__$1);

return statearr_30396;
})();
if(cljs.core.truth_(inst_30283__$1)){
var statearr_30397_30438 = state_30368__$1;
(statearr_30397_30438[(1)] = (5));

} else {
var statearr_30398_30439 = state_30368__$1;
(statearr_30398_30439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (23))){
var inst_30326 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30368__$1 = state_30368;
if(inst_30326){
var statearr_30399_30440 = state_30368__$1;
(statearr_30399_30440[(1)] = (25));

} else {
var statearr_30400_30441 = state_30368__$1;
(statearr_30400_30441[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (35))){
var state_30368__$1 = state_30368;
var statearr_30401_30442 = state_30368__$1;
(statearr_30401_30442[(2)] = null);

(statearr_30401_30442[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (19))){
var inst_30321 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30368__$1 = state_30368;
if(inst_30321){
var statearr_30402_30443 = state_30368__$1;
(statearr_30402_30443[(1)] = (22));

} else {
var statearr_30403_30444 = state_30368__$1;
(statearr_30403_30444[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (11))){
var inst_30292 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30404_30445 = state_30368__$1;
(statearr_30404_30445[(2)] = inst_30292);

(statearr_30404_30445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (9))){
var inst_30294 = figwheel.client.heads_up.clear.call(null);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(12),inst_30294);
} else {
if((state_val_30369 === (5))){
var inst_30285 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30368__$1 = state_30368;
var statearr_30405_30446 = state_30368__$1;
(statearr_30405_30446[(2)] = inst_30285);

(statearr_30405_30446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (14))){
var inst_30312 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30368__$1 = state_30368;
if(inst_30312){
var statearr_30406_30447 = state_30368__$1;
(statearr_30406_30447[(1)] = (18));

} else {
var statearr_30407_30448 = state_30368__$1;
(statearr_30407_30448[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (26))){
var inst_30338 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30368__$1 = state_30368;
if(inst_30338){
var statearr_30408_30449 = state_30368__$1;
(statearr_30408_30449[(1)] = (30));

} else {
var statearr_30409_30450 = state_30368__$1;
(statearr_30409_30450[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (16))){
var inst_30304 = (state_30368[(2)]);
var inst_30305 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30306 = figwheel.client.heads_up.display_exception.call(null,inst_30305);
var state_30368__$1 = (function (){var statearr_30410 = state_30368;
(statearr_30410[(13)] = inst_30304);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(17),inst_30306);
} else {
if((state_val_30369 === (30))){
var inst_30340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30341 = figwheel.client.heads_up.display_warning.call(null,inst_30340);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(33),inst_30341);
} else {
if((state_val_30369 === (10))){
var inst_30298 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30411_30451 = state_30368__$1;
(statearr_30411_30451[(2)] = inst_30298);

(statearr_30411_30451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (18))){
var inst_30314 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30315 = figwheel.client.heads_up.display_exception.call(null,inst_30314);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(21),inst_30315);
} else {
if((state_val_30369 === (37))){
var inst_30351 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30412_30452 = state_30368__$1;
(statearr_30412_30452[(2)] = inst_30351);

(statearr_30412_30452[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (8))){
var inst_30290 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(11),inst_30290);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto____0 = (function (){
var statearr_30413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30413[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto__);

(statearr_30413[(1)] = (1));

return statearr_30413;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto____1 = (function (state_30368){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_30368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e30414){if((e30414 instanceof Object)){
var ex__24881__auto__ = e30414;
var statearr_30415_30453 = state_30368;
(statearr_30415_30453[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30454 = state_30368;
state_30368 = G__30454;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto__ = function(state_30368){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto____1.call(this,state_30368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_30416 = f__24973__auto__.call(null);
(statearr_30416[(6)] = c__24972__auto__);

return statearr_30416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));

return c__24972__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24972__auto___30483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_30469){
var state_val_30470 = (state_30469[(1)]);
if((state_val_30470 === (1))){
var state_30469__$1 = state_30469;
var statearr_30471_30484 = state_30469__$1;
(statearr_30471_30484[(2)] = null);

(statearr_30471_30484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (2))){
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(4),ch);
} else {
if((state_val_30470 === (3))){
var inst_30467 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30469__$1,inst_30467);
} else {
if((state_val_30470 === (4))){
var inst_30457 = (state_30469[(7)]);
var inst_30457__$1 = (state_30469[(2)]);
var state_30469__$1 = (function (){var statearr_30472 = state_30469;
(statearr_30472[(7)] = inst_30457__$1);

return statearr_30472;
})();
if(cljs.core.truth_(inst_30457__$1)){
var statearr_30473_30485 = state_30469__$1;
(statearr_30473_30485[(1)] = (5));

} else {
var statearr_30474_30486 = state_30469__$1;
(statearr_30474_30486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (5))){
var inst_30457 = (state_30469[(7)]);
var inst_30459 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30457);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30469__$1,(8),inst_30459);
} else {
if((state_val_30470 === (6))){
var state_30469__$1 = state_30469;
var statearr_30475_30487 = state_30469__$1;
(statearr_30475_30487[(2)] = null);

(statearr_30475_30487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (7))){
var inst_30465 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30476_30488 = state_30469__$1;
(statearr_30476_30488[(2)] = inst_30465);

(statearr_30476_30488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30470 === (8))){
var inst_30461 = (state_30469[(2)]);
var state_30469__$1 = (function (){var statearr_30477 = state_30469;
(statearr_30477[(8)] = inst_30461);

return statearr_30477;
})();
var statearr_30478_30489 = state_30469__$1;
(statearr_30478_30489[(2)] = null);

(statearr_30478_30489[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__24878__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24878__auto____0 = (function (){
var statearr_30479 = [null,null,null,null,null,null,null,null,null];
(statearr_30479[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24878__auto__);

(statearr_30479[(1)] = (1));

return statearr_30479;
});
var figwheel$client$heads_up_plugin_$_state_machine__24878__auto____1 = (function (state_30469){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_30469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e30480){if((e30480 instanceof Object)){
var ex__24881__auto__ = e30480;
var statearr_30481_30490 = state_30469;
(statearr_30481_30490[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30491 = state_30469;
state_30469 = G__30491;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24878__auto__ = function(state_30469){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24878__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24878__auto____1.call(this,state_30469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24878__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24878__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_30482 = f__24973__auto__.call(null);
(statearr_30482[(6)] = c__24972__auto___30483);

return statearr_30482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
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
var c__24972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_30497){
var state_val_30498 = (state_30497[(1)]);
if((state_val_30498 === (1))){
var inst_30492 = cljs.core.async.timeout.call(null,(3000));
var state_30497__$1 = state_30497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30497__$1,(2),inst_30492);
} else {
if((state_val_30498 === (2))){
var inst_30494 = (state_30497[(2)]);
var inst_30495 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30497__$1 = (function (){var statearr_30499 = state_30497;
(statearr_30499[(7)] = inst_30494);

return statearr_30499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30497__$1,inst_30495);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24878__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24878__auto____0 = (function (){
var statearr_30500 = [null,null,null,null,null,null,null,null];
(statearr_30500[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24878__auto__);

(statearr_30500[(1)] = (1));

return statearr_30500;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24878__auto____1 = (function (state_30497){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_30497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e30501){if((e30501 instanceof Object)){
var ex__24881__auto__ = e30501;
var statearr_30502_30504 = state_30497;
(statearr_30502_30504[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30505 = state_30497;
state_30497 = G__30505;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24878__auto__ = function(state_30497){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24878__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24878__auto____1.call(this,state_30497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24878__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24878__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_30503 = f__24973__auto__.call(null);
(statearr_30503[(6)] = c__24972__auto__);

return statearr_30503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));

return c__24972__auto__;
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
var c__24972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24973__auto__ = (function (){var switch__24877__auto__ = (function (state_30512){
var state_val_30513 = (state_30512[(1)]);
if((state_val_30513 === (1))){
var inst_30506 = cljs.core.async.timeout.call(null,(2000));
var state_30512__$1 = state_30512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30512__$1,(2),inst_30506);
} else {
if((state_val_30513 === (2))){
var inst_30508 = (state_30512[(2)]);
var inst_30509 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30510 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30509);
var state_30512__$1 = (function (){var statearr_30514 = state_30512;
(statearr_30514[(7)] = inst_30508);

return statearr_30514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30512__$1,inst_30510);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto____0 = (function (){
var statearr_30515 = [null,null,null,null,null,null,null,null];
(statearr_30515[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto__);

(statearr_30515[(1)] = (1));

return statearr_30515;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto____1 = (function (state_30512){
while(true){
var ret_value__24879__auto__ = (function (){try{while(true){
var result__24880__auto__ = switch__24877__auto__.call(null,state_30512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24880__auto__;
}
break;
}
}catch (e30516){if((e30516 instanceof Object)){
var ex__24881__auto__ = e30516;
var statearr_30517_30519 = state_30512;
(statearr_30517_30519[(5)] = ex__24881__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30520 = state_30512;
state_30512 = G__30520;
continue;
} else {
return ret_value__24879__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto__ = function(state_30512){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto____1.call(this,state_30512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24878__auto__;
})()
})();
var state__24974__auto__ = (function (){var statearr_30518 = f__24973__auto__.call(null);
(statearr_30518[(6)] = c__24972__auto__);

return statearr_30518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24974__auto__);
}));

return c__24972__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30521){
var map__30522 = p__30521;
var map__30522__$1 = cljs.core.__destructure_map.call(null,map__30522);
var file = cljs.core.get.call(null,map__30522__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30522__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30522__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30523 = "";
var G__30523__$1 = (cljs.core.truth_(file)?[G__30523,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30523);
var G__30523__$2 = (cljs.core.truth_(line)?[G__30523__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30523__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = line;
if(cljs.core.truth_(and__4149__auto__)){
return column;
} else {
return and__4149__auto__;
}
})())){
return [G__30523__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30523__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30524){
var map__30525 = p__30524;
var map__30525__$1 = cljs.core.__destructure_map.call(null,map__30525);
var ed = map__30525__$1;
var exception_data = cljs.core.get.call(null,map__30525__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30525__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30527 = (function (){var G__30526 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30526)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30526;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30527);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30528){
var map__30529 = p__30528;
var map__30529__$1 = cljs.core.__destructure_map.call(null,map__30529);
var w = map__30529__$1;
var message = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30530 = cljs.core.seq.call(null,plugins);
var chunk__30531 = null;
var count__30532 = (0);
var i__30533 = (0);
while(true){
if((i__30533 < count__30532)){
var vec__30540 = cljs.core._nth.call(null,chunk__30531,i__30533);
var k = cljs.core.nth.call(null,vec__30540,(0),null);
var plugin = cljs.core.nth.call(null,vec__30540,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30546 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30530,chunk__30531,count__30532,i__30533,pl_30546,vec__30540,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30546.call(null,msg_hist);
});})(seq__30530,chunk__30531,count__30532,i__30533,pl_30546,vec__30540,k,plugin))
);
} else {
}


var G__30547 = seq__30530;
var G__30548 = chunk__30531;
var G__30549 = count__30532;
var G__30550 = (i__30533 + (1));
seq__30530 = G__30547;
chunk__30531 = G__30548;
count__30532 = G__30549;
i__30533 = G__30550;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30530);
if(temp__5735__auto__){
var seq__30530__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30530__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__30530__$1);
var G__30551 = cljs.core.chunk_rest.call(null,seq__30530__$1);
var G__30552 = c__4591__auto__;
var G__30553 = cljs.core.count.call(null,c__4591__auto__);
var G__30554 = (0);
seq__30530 = G__30551;
chunk__30531 = G__30552;
count__30532 = G__30553;
i__30533 = G__30554;
continue;
} else {
var vec__30543 = cljs.core.first.call(null,seq__30530__$1);
var k = cljs.core.nth.call(null,vec__30543,(0),null);
var plugin = cljs.core.nth.call(null,vec__30543,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30555 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30530,chunk__30531,count__30532,i__30533,pl_30555,vec__30543,k,plugin,seq__30530__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30555.call(null,msg_hist);
});})(seq__30530,chunk__30531,count__30532,i__30533,pl_30555,vec__30543,k,plugin,seq__30530__$1,temp__5735__auto__))
);
} else {
}


var G__30556 = cljs.core.next.call(null,seq__30530__$1);
var G__30557 = null;
var G__30558 = (0);
var G__30559 = (0);
seq__30530 = G__30556;
chunk__30531 = G__30557;
count__30532 = G__30558;
i__30533 = G__30559;
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
var G__30561 = arguments.length;
switch (G__30561) {
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

var seq__30562_30567 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30563_30568 = null;
var count__30564_30569 = (0);
var i__30565_30570 = (0);
while(true){
if((i__30565_30570 < count__30564_30569)){
var msg_30571 = cljs.core._nth.call(null,chunk__30563_30568,i__30565_30570);
figwheel.client.socket.handle_incoming_message.call(null,msg_30571);


var G__30572 = seq__30562_30567;
var G__30573 = chunk__30563_30568;
var G__30574 = count__30564_30569;
var G__30575 = (i__30565_30570 + (1));
seq__30562_30567 = G__30572;
chunk__30563_30568 = G__30573;
count__30564_30569 = G__30574;
i__30565_30570 = G__30575;
continue;
} else {
var temp__5735__auto___30576 = cljs.core.seq.call(null,seq__30562_30567);
if(temp__5735__auto___30576){
var seq__30562_30577__$1 = temp__5735__auto___30576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30562_30577__$1)){
var c__4591__auto___30578 = cljs.core.chunk_first.call(null,seq__30562_30577__$1);
var G__30579 = cljs.core.chunk_rest.call(null,seq__30562_30577__$1);
var G__30580 = c__4591__auto___30578;
var G__30581 = cljs.core.count.call(null,c__4591__auto___30578);
var G__30582 = (0);
seq__30562_30567 = G__30579;
chunk__30563_30568 = G__30580;
count__30564_30569 = G__30581;
i__30565_30570 = G__30582;
continue;
} else {
var msg_30583 = cljs.core.first.call(null,seq__30562_30577__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30583);


var G__30584 = cljs.core.next.call(null,seq__30562_30577__$1);
var G__30585 = null;
var G__30586 = (0);
var G__30587 = (0);
seq__30562_30567 = G__30584;
chunk__30563_30568 = G__30585;
count__30564_30569 = G__30586;
i__30565_30570 = G__30587;
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
var len__4771__auto___30591 = arguments.length;
var i__4772__auto___30592 = (0);
while(true){
if((i__4772__auto___30592 < len__4771__auto___30591)){
args__4777__auto__.push((arguments[i__4772__auto___30592]));

var G__30593 = (i__4772__auto___30592 + (1));
i__4772__auto___30592 = G__30593;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30589){
var map__30590 = p__30589;
var map__30590__$1 = cljs.core.__destructure_map.call(null,map__30590);
var opts = map__30590__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30588){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30588));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30594){if((e30594 instanceof Error)){
var e = e30594;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30594;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__30595){
var map__30596 = p__30595;
var map__30596__$1 = cljs.core.__destructure_map.call(null,map__30596);
var msg_name = cljs.core.get.call(null,map__30596__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1718642482256
