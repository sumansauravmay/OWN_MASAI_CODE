import "./styles.css";
import React from "react";

export default function App() {
  const inputGet=React.useRef(null)

  const handleAdd=()=>{
inputGet.current.focus();
  }
  return (
    <div className="App">
      <input type="text" placeholder="Write Something" ref={inputGet}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
