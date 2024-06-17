// Compiled by ClojureScript 1.10.844 {}
goog.provide('todo_list.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ajax.core');
goog.require('cljs.reader');
if((typeof todo_list !== 'undefined') && (typeof todo_list.core !== 'undefined') && (typeof todo_list.core.tasks !== 'undefined')){
} else {
todo_list.core.tasks = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof todo_list !== 'undefined') && (typeof todo_list.core !== 'undefined') && (typeof todo_list.core.current_task_id !== 'undefined')){
} else {
todo_list.core.current_task_id = reagent.core.atom.call(null,null);
}
todo_list.core.fetch_tasks = (function todo_list$core$fetch_tasks(){
return ajax.core.GET.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__24664_SHARP_){
return cljs.core.reset_BANG_.call(null,todo_list.core.tasks,cljs.reader.read_string.call(null,p1__24664_SHARP_));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__24665_SHARP_){
return console.error("Failed to fetch tasks",p1__24665_SHARP_);
})], null));
});
todo_list.core.add_task = (function todo_list$core$add_task(task){
return ajax.core.POST.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),task,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__24666_SHARP_){
cljs.core.swap_BANG_.call(null,todo_list.core.tasks,cljs.core.conj,cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)));

return console.log("Task added",p1__24666_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__24667_SHARP_){
return console.error("Failed to add task",p1__24667_SHARP_);
})], null));
});
todo_list.core.remove_task = (function todo_list$core$remove_task(task_id){
var new_tasks = cljs.core.remove.call(null,(function (p1__24668_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24668_SHARP_),task_id);
}),cljs.core.deref.call(null,todo_list.core.tasks));
cljs.core.reset_BANG_.call(null,todo_list.core.tasks,new_tasks);

return ajax.core.DELETE.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task_id], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__24669_SHARP_){
return console.log("Task removed",p1__24669_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__24670_SHARP_){
return console.error("Failed to remove task",p1__24670_SHARP_);
})], null));
});
todo_list.core.edit_task = (function todo_list$core$edit_task(task_id,updated_task){
var update_tasks = (function (tasks){
return cljs.core.mapv.call(null,(function (t){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),task_id)){
return cljs.core.merge.call(null,t,updated_task);
} else {
return t;
}
}),tasks);
});
cljs.core.swap_BANG_.call(null,todo_list.core.tasks,update_tasks);

return ajax.core.PUT.call(null,"/tasks",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task_id,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(updated_task)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__24671_SHARP_){
return console.log("Task updated",p1__24671_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__24672_SHARP_){
return console.error("Failed to update task",p1__24672_SHARP_);
})], null));
});
todo_list.core.task_form = (function todo_list$core$task_form(){
var name = reagent.core.atom.call(null,"");
var date = reagent.core.atom.call(null,"");
var assignee = reagent.core.atom.call(null,"");
var status = reagent.core.atom.call(null,"ready-to-start");
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-form","div.task-form",-1555877992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Task Name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,name),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24673_SHARP_){
return cljs.core.reset_BANG_.call(null,name,p1__24673_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,date),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24674_SHARP_){
return cljs.core.reset_BANG_.call(null,date,p1__24674_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Assignee",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,assignee),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24675_SHARP_){
return cljs.core.reset_BANG_.call(null,assignee,p1__24675_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,status),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24676_SHARP_){
return cljs.core.reset_BANG_.call(null,status,p1__24676_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"ready-to-start"], null),"Ready to start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"in-progress"], null),"In Progress"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"waiting-for-review"], null),"Waiting for review"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"pending-deploy"], null),"Pending Deploy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"done"], null),"Done"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"stuck"], null),"Stuck"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"blank"], null),"Blank"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todo_list.core.add_task.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref.call(null,name),new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.deref.call(null,date),new cljs.core.Keyword(null,"assignee","assignee",-1242457026),cljs.core.deref.call(null,assignee),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.deref.call(null,status)], null));
})], null),"Add Task"], null)], null);
});
});
todo_list.core.task_item = (function todo_list$core$task_item(task){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task","div.task",-675091364),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (){
cljs.core.reset_BANG_.call(null,todo_list.core.current_task_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task));

return console.log("Drag start",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-title","div.task-title",-710324876),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-detail","div.task-detail",822155594),["Due: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(task))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-detail","div.task-detail",822155594),["Assigned to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"assignee","assignee",-1242457026).cljs$core$IFn$_invoke$arity$1(task))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.edit-button","button.edit-button",-2059315991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,todo_list.core.current_task_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task));

return document.getElementById("editModal").open();
})], null),"Edit"], null)], null);
});
});
todo_list.core.task_list = (function todo_list$core$task_list(status){
var tasks_by_status = cljs.core.filter.call(null,(function (p1__24677_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__24677_SHARP_),status);
}),cljs.core.deref.call(null,todo_list.core.tasks));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tasks","div.tasks",-2091396832),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__24678_SHARP_){
p1__24678_SHARP_.preventDefault();

return console.log("Drag over",status);
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (){
var task_id = cljs.core.deref.call(null,todo_list.core.current_task_id);
console.log("Drop",status,task_id);

if(cljs.core.truth_(task_id)){
todo_list.core.edit_task.call(null,task_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),status], null));

return cljs.core.reset_BANG_.call(null,todo_list.core.current_task_id,null);
} else {
return null;
}
})], null),(function (){var iter__4564__auto__ = (function todo_list$core$task_list_$_iter__24679(s__24680){
return (new cljs.core.LazySeq(null,(function (){
var s__24680__$1 = s__24680;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__24680__$1);
if(temp__5735__auto__){
var s__24680__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24680__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__24680__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__24682 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__24681 = (0);
while(true){
if((i__24681 < size__4563__auto__)){
var task = cljs.core._nth.call(null,c__4562__auto__,i__24681);
cljs.core.chunk_append.call(null,b__24682,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_item,task], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)));

var G__24683 = (i__24681 + (1));
i__24681 = G__24683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24682),todo_list$core$task_list_$_iter__24679.call(null,cljs.core.chunk_rest.call(null,s__24680__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24682),null);
}
} else {
var task = cljs.core.first.call(null,s__24680__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_item,task], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)),todo_list$core$task_list_$_iter__24679.call(null,cljs.core.rest.call(null,s__24680__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,tasks_by_status);
})()], null);
});
todo_list.core.task_board = (function todo_list$core$task_board(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ready-to-start-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header","div.column-header",707448833),"Ready to start"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_list,"ready-to-start"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"in-progress-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header","div.column-header",707448833),"In Progress"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_list,"in-progress"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"waiting-for-review-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header","div.column-header",707448833),"Waiting for review"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_list,"waiting-for-review"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pending-deploy-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header","div.column-header",707448833),"Pending Deploy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_list,"pending-deploy"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"done-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header","div.column-header",707448833),"Done"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_list,"done"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stuck-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header","div.column-header",707448833),"Stuck"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_list,"stuck"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"blank-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header","div.column-header",707448833),"Blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_list,"blank"], null)], null)], null);
});
todo_list.core.edit_modal = (function todo_list$core$edit_modal(){
var name = reagent.core.atom.call(null,"");
var date = reagent.core.atom.call(null,"");
var assignee = reagent.core.atom.call(null,"");
var status = reagent.core.atom.call(null,"ready-to-start");
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"editModal"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.close","span.close",-217177185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return document.getElementById("editModal").close();
})], null),"&times;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Edit Task"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Task Name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,name),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24684_SHARP_){
return cljs.core.reset_BANG_.call(null,name,p1__24684_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,date),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24685_SHARP_){
return cljs.core.reset_BANG_.call(null,date,p1__24685_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Assignee",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,assignee),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24686_SHARP_){
return cljs.core.reset_BANG_.call(null,assignee,p1__24686_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,status),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24687_SHARP_){
return cljs.core.reset_BANG_.call(null,status,p1__24687_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"ready-to-start"], null),"Ready to start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"in-progress"], null),"In Progress"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"waiting-for-review"], null),"Waiting for review"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"pending-deploy"], null),"Pending Deploy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"done"], null),"Done"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"stuck"], null),"Stuck"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"blank"], null),"Blank"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
todo_list.core.edit_task.call(null,cljs.core.deref.call(null,todo_list.core.current_task_id),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref.call(null,name),new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.deref.call(null,date),new cljs.core.Keyword(null,"assignee","assignee",-1242457026),cljs.core.deref.call(null,assignee),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.deref.call(null,status)], null));

cljs.core.reset_BANG_.call(null,todo_list.core.current_task_id,null);

return document.getElementById("editModal").close();
})], null),"Save"], null)], null)], null);
});
});
todo_list.core.home_page = (function todo_list$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.task_board], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.edit_modal], null)], null);
});
todo_list.core.mount_root = (function todo_list$core$mount_root(){
todo_list.core.fetch_tasks.call(null);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.home_page], null),document.getElementById("app"));
});
todo_list.core.init_BANG_ = (function todo_list$core$init_BANG_(){
return todo_list.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1718650404903
