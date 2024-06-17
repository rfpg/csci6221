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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23557,handler){
var map__23558 = p__23557;
var map__23558__$1 = cljs.core.__destructure_map.call(null,map__23558);
var uri = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__23556_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23556_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___23575 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___23575)){
var response_type_23576 = temp__5735__auto___23575;
(this$__$1.responseType = cljs.core.name.call(null,response_type_23576));
} else {
}

var seq__23559_23577 = cljs.core.seq.call(null,headers);
var chunk__23560_23578 = null;
var count__23561_23579 = (0);
var i__23562_23580 = (0);
while(true){
if((i__23562_23580 < count__23561_23579)){
var vec__23569_23581 = cljs.core._nth.call(null,chunk__23560_23578,i__23562_23580);
var k_23582 = cljs.core.nth.call(null,vec__23569_23581,(0),null);
var v_23583 = cljs.core.nth.call(null,vec__23569_23581,(1),null);
this$__$1.setRequestHeader(k_23582,v_23583);


var G__23584 = seq__23559_23577;
var G__23585 = chunk__23560_23578;
var G__23586 = count__23561_23579;
var G__23587 = (i__23562_23580 + (1));
seq__23559_23577 = G__23584;
chunk__23560_23578 = G__23585;
count__23561_23579 = G__23586;
i__23562_23580 = G__23587;
continue;
} else {
var temp__5735__auto___23588 = cljs.core.seq.call(null,seq__23559_23577);
if(temp__5735__auto___23588){
var seq__23559_23589__$1 = temp__5735__auto___23588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23559_23589__$1)){
var c__4591__auto___23590 = cljs.core.chunk_first.call(null,seq__23559_23589__$1);
var G__23591 = cljs.core.chunk_rest.call(null,seq__23559_23589__$1);
var G__23592 = c__4591__auto___23590;
var G__23593 = cljs.core.count.call(null,c__4591__auto___23590);
var G__23594 = (0);
seq__23559_23577 = G__23591;
chunk__23560_23578 = G__23592;
count__23561_23579 = G__23593;
i__23562_23580 = G__23594;
continue;
} else {
var vec__23572_23595 = cljs.core.first.call(null,seq__23559_23589__$1);
var k_23596 = cljs.core.nth.call(null,vec__23572_23595,(0),null);
var v_23597 = cljs.core.nth.call(null,vec__23572_23595,(1),null);
this$__$1.setRequestHeader(k_23596,v_23597);


var G__23598 = cljs.core.next.call(null,seq__23559_23589__$1);
var G__23599 = null;
var G__23600 = (0);
var G__23601 = (0);
seq__23559_23577 = G__23598;
chunk__23560_23578 = G__23599;
count__23561_23579 = G__23600;
i__23562_23580 = G__23601;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1718650404154
