import React from "react";

function AddTodo({ handleAddTodoProps }) {
  const [text, setText] = React.useState("");

  const onClickInvoke = () => {
    handleAddTodoProps(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onClickInvoke}>Add</button>
    </div>
  );
}
export default AddTodo;
