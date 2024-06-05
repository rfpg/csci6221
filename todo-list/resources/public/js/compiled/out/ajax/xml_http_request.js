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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__21537,handler){
var map__21538 = p__21537;
var map__21538__$1 = cljs.core.__destructure_map.call(null,map__21538);
var uri = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__21536_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__21536_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___21555 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___21555)){
var response_type_21556 = temp__5735__auto___21555;
(this$__$1.responseType = cljs.core.name.call(null,response_type_21556));
} else {
}

var seq__21539_21557 = cljs.core.seq.call(null,headers);
var chunk__21540_21558 = null;
var count__21541_21559 = (0);
var i__21542_21560 = (0);
while(true){
if((i__21542_21560 < count__21541_21559)){
var vec__21549_21561 = cljs.core._nth.call(null,chunk__21540_21558,i__21542_21560);
var k_21562 = cljs.core.nth.call(null,vec__21549_21561,(0),null);
var v_21563 = cljs.core.nth.call(null,vec__21549_21561,(1),null);
this$__$1.setRequestHeader(k_21562,v_21563);


var G__21564 = seq__21539_21557;
var G__21565 = chunk__21540_21558;
var G__21566 = count__21541_21559;
var G__21567 = (i__21542_21560 + (1));
seq__21539_21557 = G__21564;
chunk__21540_21558 = G__21565;
count__21541_21559 = G__21566;
i__21542_21560 = G__21567;
continue;
} else {
var temp__5735__auto___21568 = cljs.core.seq.call(null,seq__21539_21557);
if(temp__5735__auto___21568){
var seq__21539_21569__$1 = temp__5735__auto___21568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21539_21569__$1)){
var c__4591__auto___21570 = cljs.core.chunk_first.call(null,seq__21539_21569__$1);
var G__21571 = cljs.core.chunk_rest.call(null,seq__21539_21569__$1);
var G__21572 = c__4591__auto___21570;
var G__21573 = cljs.core.count.call(null,c__4591__auto___21570);
var G__21574 = (0);
seq__21539_21557 = G__21571;
chunk__21540_21558 = G__21572;
count__21541_21559 = G__21573;
i__21542_21560 = G__21574;
continue;
} else {
var vec__21552_21575 = cljs.core.first.call(null,seq__21539_21569__$1);
var k_21576 = cljs.core.nth.call(null,vec__21552_21575,(0),null);
var v_21577 = cljs.core.nth.call(null,vec__21552_21575,(1),null);
this$__$1.setRequestHeader(k_21576,v_21577);


var G__21578 = cljs.core.next.call(null,seq__21539_21569__$1);
var G__21579 = null;
var G__21580 = (0);
var G__21581 = (0);
seq__21539_21557 = G__21578;
chunk__21540_21558 = G__21579;
count__21541_21559 = G__21580;
i__21542_21560 = G__21581;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1717626494478
