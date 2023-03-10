import React from 'react'
import { updateTodo } from './api';
import { ColorMap, Todo } from './constants'


// type TodoItemProps=Todo

interface TodoItemProps extends Todo{
  onUpdate:(todo:Todo)=>void;
}

const TodoItem = (props:TodoItemProps) => {

const updateLikeCountHandle=async()=>{
 let updatedTodo=await updateTodo({
    ...props,
    likes:props.likes+1
  })
  props.onUpdate(updatedTodo)
}



  return (
    <div style={{padding:"5px",
    background:ColorMap[props.type]}}
    
    >
     {props.message} - {props.likes}
     <button onClick={updateLikeCountHandle}>Like</button>
     
    </div>
  )
}

export default TodoItem
