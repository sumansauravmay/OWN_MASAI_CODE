import "./styles.css";
import React from "react";
export default function App() {
  const [text, setText] = React.useState("");

  const clearAll = () => {
    setText("");
  };

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button onClick={clearAll}>Clear</button>

      {<h1>{text}</h1>}
    </div>
  );
}
