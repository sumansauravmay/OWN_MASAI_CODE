import { useState } from "react";

function AddTodo({ handleAddTodo }) {
  const [text, setText] = useState("");
  const handlechange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleAddTodo(text);
    setText("");
  };

  return (
    <div>
      <input value={text} type="text" onChange={handlechange} />
      <button onClick={onClick}>Add</button>
    </div>
  );
}
export default AddTodo;
