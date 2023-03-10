

import {ADD_TODO,UPDATE_TODO,REMOVE_TODO} from "./todos.Types";

const initialValue={
   todo:[],
}
export const todoReducer=(state=initialValue,action)=>{
    switch(action.type){
        
 case ADD_TODO:{
    return {
        ...state,
        todo:[...state.todo,action.payload]
    }
 }

 case UPDATE_TODO:{
    let updatedTodos=state.todo.map((todo)=>{
        if(todo.id===action.payload.id){
            return {
                ...todo,
               ...action.payload,
            }
        }
        return todo;
    })
    return {
        ...state,
       todo:updatedTodos
    }
 }


 case REMOVE_TODO:{
    let filteredTodo=state.todo.filter((todo)=>todo.id!==action.payload.id)
    return {
        ...state,
        todo:filteredTodo
    }
 }
        default:{
            return state
        }
    }
}