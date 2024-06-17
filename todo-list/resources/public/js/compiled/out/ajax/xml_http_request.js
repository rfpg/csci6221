// Compiled by ClojureScript 1.10.844 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return req.call(null,"xmlhttprequest").XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__38058,handler){
var map__38059 = p__38058;
var map__38059__$1 = cljs.core.__destructure_map.call(null,map__38059);
var uri = cljs.core.get.call(null,map__38059__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__38059__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__38059__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__38059__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__38059__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__38059__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__38059__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__38057_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__38057_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___38076 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___38076)){
var response_type_38077 = temp__5735__auto___38076;
(this$__$1.responseType = cljs.core.name.call(null,response_type_38077));
} else {
}

var seq__38060_38078 = cljs.core.seq.call(null,headers);
var chunk__38061_38079 = null;
var count__38062_38080 = (0);
var i__38063_38081 = (0);
while(true){
if((i__38063_38081 < count__38062_38080)){
var vec__38070_38082 = cljs.core._nth.call(null,chunk__38061_38079,i__38063_38081);
var k_38083 = cljs.core.nth.call(null,vec__38070_38082,(0),null);
var v_38084 = cljs.core.nth.call(null,vec__38070_38082,(1),null);
this$__$1.setRequestHeader(k_38083,v_38084);


var G__38085 = seq__38060_38078;
var G__38086 = chunk__38061_38079;
var G__38087 = count__38062_38080;
var G__38088 = (i__38063_38081 + (1));
seq__38060_38078 = G__38085;
chunk__38061_38079 = G__38086;
count__38062_38080 = G__38087;
i__38063_38081 = G__38088;
continue;
} else {
var temp__5735__auto___38089 = cljs.core.seq.call(null,seq__38060_38078);
if(temp__5735__auto___38089){
var seq__38060_38090__$1 = temp__5735__auto___38089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38060_38090__$1)){
var c__4591__auto___38091 = cljs.core.chunk_first.call(null,seq__38060_38090__$1);
var G__38092 = cljs.core.chunk_rest.call(null,seq__38060_38090__$1);
var G__38093 = c__4591__auto___38091;
var G__38094 = cljs.core.count.call(null,c__4591__auto___38091);
var G__38095 = (0);
seq__38060_38078 = G__38092;
chunk__38061_38079 = G__38093;
count__38062_38080 = G__38094;
i__38063_38081 = G__38095;
continue;
} else {
var vec__38073_38096 = cljs.core.first.call(null,seq__38060_38090__$1);
var k_38097 = cljs.core.nth.call(null,vec__38073_38096,(0),null);
var v_38098 = cljs.core.nth.call(null,vec__38073_38096,(1),null);
this$__$1.setRequestHeader(k_38097,v_38098);


var G__38099 = cljs.core.next.call(null,seq__38060_38090__$1);
var G__38100 = null;
var G__38101 = (0);
var G__38102 = (0);
seq__38060_38078 = G__38099;
chunk__38061_38079 = G__38100;
count__38062_38080 = G__38101;
i__38063_38081 = G__38102;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4160__auto__ = body;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map?rel=1718651916617
