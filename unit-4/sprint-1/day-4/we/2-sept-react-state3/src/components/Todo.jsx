import { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [Todos, setTodos] = useState([]);

  const handlechange = (e) => {
    //   console.log(e.target);
    // console.log(e);
    setText(e.target.value);
    // console.log(e.target.value)
  };
  console.log(text);
  const handleAddTodo = () => {
    const newTodo = {
      title: text,
      status: true,
      id: new Date().toDateString() + text
    };
    setTodos([...Todos, newTodo]);
    setText("");
  };

  console.log(Todos);
  return (
    <div>
      <div>
        <input value={text} type="text" onChange={handlechange} />
        <button onClick={handleAddTodo}>Add</button>
        <h3>{text}</h3>
        <ul>
          {Todos.map((item) => (
            <li key={item.id}>
              {item.title}-{item.status ? "Completed" : "Not Completed"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
