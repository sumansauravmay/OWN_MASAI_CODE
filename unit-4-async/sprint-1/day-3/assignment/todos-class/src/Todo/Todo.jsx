import React from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todo(text) {
  const [todos, setTodos] = React.useState([]);

  const handleAddTodo = (text) => {
    const newItem = {
      id: Math.random() + Date.now() + text,
      title: text,
      status: false
    };
    setTodos([...todos, newItem]);
  };

  return (
    <>
      {/* 1st handleAddTodo=props
    2nd handleAddTodo=function
     */}
      <AddTodo handleAddTodoProps={handleAddTodo} />
      {/* <ol> */}
      {todos.map((list) => (
        <div>
          <TodoItem key={list.id} title={list.title} status={list.status} />
        </div>
      ))}
      {/* </ol> */}
    </>
  );
}
export default Todo;
