// Compiled by ClojureScript 1.10.844 {}
goog.provide('todo_list.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('cljs.reader');
if((typeof todo_list !== 'undefined') && (typeof todo_list.core !== 'undefined') && (typeof todo_list.core.tasks !== 'undefined')){
} else {
todo_list.core.tasks = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
todo_list.core.fetch_tasks = (function todo_list$core$fetch_tasks(){
return ajax.core.GET.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__22720_SHARP_){
return cljs.core.reset_BANG_.call(null,todo_list.core.tasks,cljs.reader.read_string.call(null,p1__22720_SHARP_));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return console.error("Failed to fetch tasks");
})], null));
});
todo_list.core.add_task = (function todo_list$core$add_task(task){
return ajax.core.POST.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return cljs.core.swap_BANG_.call(null,todo_list.core.tasks,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return console.error("Failed to add task");
})], null));
});
todo_list.core.remove_task = (function todo_list$core$remove_task(task){
return ajax.core.DELETE.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return cljs.core.reset_BANG_.call(null,todo_list.core.tasks,cljs.core.remove.call(null,(function (t){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(t),task);
}),cljs.core.deref.call(null,todo_list.core.tasks)));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return console.error("Failed to remove task");
})], null));
});
todo_list.core.edit_task = (function todo_list$core$edit_task(old_task,new_task){
return ajax.core.PUT.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-task","old-task",1237476747),old_task,new cljs.core.Keyword(null,"new-task","new-task",-939876740),new_task], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return cljs.core.reset_BANG_.call(null,todo_list.core.tasks,cljs.core.map.call(null,(function (t){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(t),old_task)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),new_task], null);
} else {
return t;
}
}),cljs.core.deref.call(null,todo_list.core.tasks)));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return console.error("Failed to edit task");
})], null));
});
todo_list.core.task_item = (function todo_list$core$task_item(task){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todo_list.core.remove_task.call(null,new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task));
})], null),"Remove"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todo_list.core.edit_task.call(null,new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task))," (edited)"].join(''));
})], null),"Edit"], null)], null);
});
todo_list.core.task_list = (function todo_list$core$task_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4564__auto__ = (function todo_list$core$task_list_$_iter__22721(s__22722){
return (new cljs.core.LazySeq(null,(function (){
var s__22722__$1 = s__22722;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22722__$1);
if(temp__5735__auto__){
var s__22722__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22722__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__22722__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__22724 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__22723 = (0);
while(true){
if((i__22723 < size__4563__auto__)){
var task = cljs.core._nth.call(null,c__4562__auto__,i__22723);
cljs.core.chunk_append.call(null,b__22724,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_item,task], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task)], null)));

var G__22725 = (i__22723 + (1));
i__22723 = G__22725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22724),todo_list$core$task_list_$_iter__22721.call(null,cljs.core.chunk_rest.call(null,s__22722__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22724),null);
}
} else {
var task = cljs.core.first.call(null,s__22722__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_item,task], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task)], null)),todo_list$core$task_list_$_iter__22721.call(null,cljs.core.rest.call(null,s__22722__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,cljs.core.deref.call(null,todo_list.core.tasks));
})()], null);
});
todo_list.core.main_component = (function todo_list$core$main_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Todo List"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__22726_SHARP_){
return (p1__22726_SHARP_.value = "");
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__22727_SHARP_){
return todo_list.core.add_task.call(null,reagent.core.dom_node.call(null,p1__22727_SHARP_).input.value);
})], null),"Add"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_list], null)], null);
});
todo_list.core.init = (function todo_list$core$init(){
todo_list.core.fetch_tasks.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.main_component], null),document.getElementById("app"));
});
goog.exportSymbol('todo_list.core.init', todo_list.core.init);

//# sourceMappingURL=core.js.map?rel=1717626495184
