import React,{useEffect,useState} from 'react';
import { getTodos } from './api';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { Todo } from './constants';

const TodoApp = () => {
const [todos,setTodos]=useState<Todo[]>([])

const onAdd=(todo:Todo)=>{
  setTodos([...todos,todo])
}

const onUpdate=(updatedTodo:Todo)=>{
  let updatedTodos=todos.map((todo)=>{
    if(todo.id===updatedTodo.id)
    {
      return updatedTodo;
    }
    return todo;
  })
  setTodos(updatedTodos)
}


  useEffect(()=>{
    getTodos()
    .then((d)=>{
      // console.log(d)
      setTodos(d)
    })
  },[])

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput onAdd={onAdd}/>
      {
        todos.map((todo)=>(
          
<TodoItem 
key={todo.id}
 {...todo}
 onUpdate={onUpdate}/>
           
        ))
      }
    </div>
  )
}

export default TodoApp
