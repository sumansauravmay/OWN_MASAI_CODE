import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todos/todos.actions";



const TodoApp=()=>{
    console.log("TodoApp")
    const ref=useRef();
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todosManager.todo);

    const addNew=()=>{
        let value=ref.current.value;
        dispatch(addTodo({
            value:value,
            isCompleted:false,
        })
        )
ref.current.value=null;
    }

return (
    <h1>
        <div>
            <input ref={ref} type="text" placeholder="type here.."/>
            <button onClick={addNew}>Add</button>
        </div>
        {
            todos.map((todo)=>(
                <div key={todo.id}>{todo.value}</div>
            ))
        }
    </h1>
)

}
export default TodoApp;