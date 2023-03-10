import { ADD_TODO,UPDATE_TODO,REMOVE_TODO } from "./todos.Types";


export const addTodo=(newTodo)=>({
    type:ADD_TODO,
    payload:newTodo
});


export const updateTodo=(updatedTodo)=>({
    type:UPDATE_TODO,
    payload:updatedTodo,
});

export const removeTodo=(removedTodo)=>({
    type:REMOVE_TODO,
    payload:removedTodo,
});