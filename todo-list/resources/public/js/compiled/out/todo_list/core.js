// Compiled by ClojureScript 1.10.844 {}
goog.provide('todo_list.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof todo_list !== 'undefined') && (typeof todo_list.core !== 'undefined') && (typeof todo_list.core.tasks !== 'undefined')){
} else {
todo_list.core.tasks = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof todo_list !== 'undefined') && (typeof todo_list.core !== 'undefined') && (typeof todo_list.core.current_task !== 'undefined')){
} else {
todo_list.core.current_task = reagent.core.atom.call(null,null);
}
todo_list.core.add_task = (function todo_list$core$add_task(task){
return cljs.core.swap_BANG_.call(null,todo_list.core.tasks,cljs.core.conj,task);
});
