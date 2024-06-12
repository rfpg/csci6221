// Compiled by ClojureScript 1.10.844 {}
goog.provide('todo_list.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof todo_list !== 'undefined') && (typeof todo_list.core !== 'undefined') && (typeof todo_list.core.tasks !== 'undefined')){
} else {
todo_list.core.tasks = reagent.core.atom.call(null,cljs.core.js__GT_clj.call(null,JSON.parse((function (){var or__4160__auto__ = localStorage.getItem("tasks");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "[]";
}
})()),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}
if((typeof todo_list !== 'undefined') && (typeof todo_list.core !== 'undefined') && (typeof todo_list.core.current_task !== 'undefined')){
} else {
todo_list.core.current_task = reagent.core.atom.call(null,null);
}
todo_list.core.save_tasks_BANG_ = (function todo_list$core$save_tasks_BANG_(){
return localStorage.setItem("tasks",JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,todo_list.core.tasks))));
});
todo_list.core.add_task = (function todo_list$core$add_task(task){
cljs.core.swap_BANG_.call(null,todo_list.core.tasks,cljs.core.conj,task);

return todo_list.core.save_tasks_BANG_.call(null);
});
