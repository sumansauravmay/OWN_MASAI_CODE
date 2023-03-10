import {INC,DEC,ADD_TODO,UPDATE_TODO,DELETE_TODO} from "./actionTypes.js";

export const increment=()=>({type:INC,payload:1});

export const decrement=()=>({type:DEC,payload:1});


export const addTodo=(message)=>({
    type:ADD_TODO,
    payload:{
        id:Date.now(),
        message,
        isCompleted:false
    }
});


export const updateTodo=(id,changes)=>({
    type:UPDATE_TODO,
    payload:{
        id,
        changes
        
    }
});

export const DeleteTodo=(id)=>({
    type:DELETE_TODO,
    payload:id
});

