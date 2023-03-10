import {INC,DEC, ADD_TODO,UPDATE_TODO,DELETE_TODO} from "./actionTypes.js";

const initialValue={
    count:0,
    todo:[]
}
export const counterReducer=(state=initialValue,action)=>{
    switch(action.type){
        case INC:{
            return {
                ...state,
                count:state.count+action.payload
            }
        }

        case DEC:{
            return {
                ...state,
                count:state.count-action.payload
            }
        }
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


 case DELETE_TODO:{
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