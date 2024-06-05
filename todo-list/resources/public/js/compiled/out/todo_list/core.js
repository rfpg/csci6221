// Compiled by ClojureScript 1.10.844 {}
goog.provide('todo_list.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ajax.core');
if((typeof todo_list !== 'undefined') && (typeof todo_list.core !== 'undefined') && (typeof todo_list.core.tasks !== 'undefined')){
} else {
todo_list.core.tasks = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof todo_list !== 'undefined') && (typeof todo_list.core !== 'undefined') && (typeof todo_list.core.new_task !== 'undefined')){
} else {
todo_list.core.new_task = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"",new cljs.core.Keyword(null,"due-date","due-date",-915697004),"",new cljs.core.Keyword(null,"people","people",1443537404),""], null));
}
todo_list.core.fetch_tasks = (function todo_list$core$fetch_tasks(){
return ajax.core.GET.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
console.log("Tasks fetched:",response);

return cljs.core.reset_BANG_.call(null,todo_list.core.tasks,cljs.core.vec.call(null,response));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__22339_SHARP_){
return console.error("Failed to fetch tasks",p1__22339_SHARP_);
})], null));
});
todo_list.core.add_task = (function todo_list$core$add_task(){
return ajax.core.POST.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,todo_list.core.new_task),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
console.log("Task added:",response);

todo_list.core.fetch_tasks.call(null);

return cljs.core.reset_BANG_.call(null,todo_list.core.new_task,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"",new cljs.core.Keyword(null,"due-date","due-date",-915697004),"",new cljs.core.Keyword(null,"people","people",1443537404),""], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__22340_SHARP_){
return console.error("Failed to add task",p1__22340_SHARP_);
})], null));
});
todo_list.core.remove_task = (function todo_list$core$remove_task(task){
return ajax.core.DELETE.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
console.log("Task removed:",response);

return todo_list.core.fetch_tasks.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__22341_SHARP_){
return console.error("Failed to remove task",p1__22341_SHARP_);
})], null));
});
todo_list.core.edit_task = (function todo_list$core$edit_task(old_task,new_task){
return ajax.core.PUT.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-task","old-task",1237476747),old_task,new cljs.core.Keyword(null,"new-task","new-task",-939876740),new_task], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
console.log("Task edited:",response);

return todo_list.core.fetch_tasks.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__22342_SHARP_){
return console.error("Failed to edit task",p1__22342_SHARP_);
})], null));
});
todo_list.core.task_form = (function todo_list$core$task_form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-form","div.task-form",-1555877992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Task",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todo_list.core.new_task)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22343_SHARP_){
return cljs.core.swap_BANG_.call(null,todo_list.core.new_task,cljs.core.assoc,new cljs.core.Keyword(null,"task","task",-1476607993),p1__22343_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"due-date","due-date",-915697004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todo_list.core.new_task)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22344_SHARP_){
return cljs.core.swap_BANG_.call(null,todo_list.core.new_task,cljs.core.assoc,new cljs.core.Keyword(null,"due-date","due-date",-915697004),p1__22344_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"People",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"people","people",1443537404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todo_list.core.new_task)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22345_SHARP_){
return cljs.core.swap_BANG_.call(null,todo_list.core.new_task,cljs.core.assoc,new cljs.core.Keyword(null,"people","people",1443537404),p1__22345_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),todo_list.core.add_task], null),"Add Task"], null)], null);
});
todo_list.core.task_item = (function todo_list$core$task_item(task){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item","div.task-item",-1998171877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"due-date","due-date",-915697004).cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"people","people",1443537404).cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todo_list.core.remove_task.call(null,new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task));
})], null),"Remove"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todo_list.core.edit_task.call(null,new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task),"new-task-name");
})], null),"Edit"], null)], null);
});
todo_list.core.task_list = (function todo_list$core$task_list(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Tasks"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_form], null),(function (){var iter__4564__auto__ = (function todo_list$core$task_list_$_iter__22346(s__22347){
return (new cljs.core.LazySeq(null,(function (){
var s__22347__$1 = s__22347;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22347__$1);
if(temp__5735__auto__){
var s__22347__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22347__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__22347__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__22349 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__22348 = (0);
while(true){
if((i__22348 < size__4563__auto__)){
var task = cljs.core._nth.call(null,c__4562__auto__,i__22348);
cljs.core.chunk_append.call(null,b__22349,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_item,task], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task)], null)));

var G__22350 = (i__22348 + (1));
i__22348 = G__22350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22349),todo_list$core$task_list_$_iter__22346.call(null,cljs.core.chunk_rest.call(null,s__22347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22349),null);
}
} else {
var task = cljs.core.first.call(null,s__22347__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_item,task], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task)], null)),todo_list$core$task_list_$_iter__22346.call(null,cljs.core.rest.call(null,s__22347__$2)));
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
todo_list.core.mount_root = (function todo_list$core$mount_root(){
todo_list.core.fetch_tasks.call(null);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_list], null),document.getElementById("app"));
});
todo_list.core.init = (function todo_list$core$init(){
return todo_list.core.mount_root.call(null);
});
todo_list.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1717629077157
