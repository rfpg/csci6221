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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23428,handler){
var map__23429 = p__23428;
var map__23429__$1 = cljs.core.__destructure_map.call(null,map__23429);
var uri = cljs.core.get.call(null,map__23429__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23429__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23429__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23429__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23429__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23429__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23429__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__23427_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23427_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___23446 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___23446)){
var response_type_23447 = temp__5735__auto___23446;
(this$__$1.responseType = cljs.core.name.call(null,response_type_23447));
} else {
}

var seq__23430_23448 = cljs.core.seq.call(null,headers);
var chunk__23431_23449 = null;
var count__23432_23450 = (0);
var i__23433_23451 = (0);
while(true){
if((i__23433_23451 < count__23432_23450)){
var vec__23440_23452 = cljs.core._nth.call(null,chunk__23431_23449,i__23433_23451);
var k_23453 = cljs.core.nth.call(null,vec__23440_23452,(0),null);
var v_23454 = cljs.core.nth.call(null,vec__23440_23452,(1),null);
this$__$1.setRequestHeader(k_23453,v_23454);


var G__23455 = seq__23430_23448;
var G__23456 = chunk__23431_23449;
var G__23457 = count__23432_23450;
var G__23458 = (i__23433_23451 + (1));
seq__23430_23448 = G__23455;
chunk__23431_23449 = G__23456;
count__23432_23450 = G__23457;
i__23433_23451 = G__23458;
continue;
} else {
var temp__5735__auto___23459 = cljs.core.seq.call(null,seq__23430_23448);
if(temp__5735__auto___23459){
var seq__23430_23460__$1 = temp__5735__auto___23459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23430_23460__$1)){
var c__4591__auto___23461 = cljs.core.chunk_first.call(null,seq__23430_23460__$1);
var G__23462 = cljs.core.chunk_rest.call(null,seq__23430_23460__$1);
var G__23463 = c__4591__auto___23461;
var G__23464 = cljs.core.count.call(null,c__4591__auto___23461);
var G__23465 = (0);
seq__23430_23448 = G__23462;
chunk__23431_23449 = G__23463;
count__23432_23450 = G__23464;
i__23433_23451 = G__23465;
continue;
} else {
var vec__23443_23466 = cljs.core.first.call(null,seq__23430_23460__$1);
var k_23467 = cljs.core.nth.call(null,vec__23443_23466,(0),null);
var v_23468 = cljs.core.nth.call(null,vec__23443_23466,(1),null);
this$__$1.setRequestHeader(k_23467,v_23468);


var G__23469 = cljs.core.next.call(null,seq__23430_23460__$1);
var G__23470 = null;
var G__23471 = (0);
var G__23472 = (0);
seq__23430_23448 = G__23469;
chunk__23431_23449 = G__23470;
count__23432_23450 = G__23471;
i__23433_23451 = G__23472;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1718454494646
