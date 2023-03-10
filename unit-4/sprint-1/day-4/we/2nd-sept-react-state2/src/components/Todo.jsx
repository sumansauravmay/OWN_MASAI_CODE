import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function Todo() {
  const [Todos, setTodos] = useState([]);

  // console.log(text)
  const handleAddTodo = (text) => {
    const newTodo = {
      title: text,
      status: true,
      id: new Date().toDateString() + text
    };
    setTodos([...Todos, newTodo]);
    // setText("")
  };




  //toggleButton
  const handleToggle = (id) => {
    // js part
    const todoAfterUpdatin = Todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } :item
    );
    // react part
    setTodos(todoAfterUpdatin);
  };




// deleteButton
  const handledelete = (id) => {
    // JS part
    const todoafterDeletion = Todos.filter((item) => item.id !== id);
    // react part
    setTodos(todoafterDeletion);
  };
  // console.log(Todos);

  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo} />
      {/* <h3>{text}</h3> */}
      <ul>
        {Todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            status={item.status}
            handleToggle={handleToggle}
            handledelete={handledelete}
          />
        ))}
      </ul>
    </div>
  );
}
