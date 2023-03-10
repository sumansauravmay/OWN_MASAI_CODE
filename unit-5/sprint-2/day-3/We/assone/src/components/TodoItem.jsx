import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/action';

const TodoItem = ({id,value,isCompleted}) => {
const dispatch=useDispatch();

  return (
   
    <div onClick={()=>dispatch(
        updateTodo(id,{
        isCompleted:!isCompleted,
        })
        )
        }
        >
      {value}={isCompleted?"Completed":"In Complete"}
    </div>
  )
}

export default TodoItem
