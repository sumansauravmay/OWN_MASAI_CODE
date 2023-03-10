import React from "react";
import "./styles.css";

export default function App() {
  const [text,setText]=React.useState("")
  const [todos,setTodos]=React.useState([])

const handleClickItem=()=>{
  const newItem={
    id:Date.now(),
    title:text
  }
  setTodos([...todos,newItem])
  setText("")
}

  return (
    <div className="App">
      <input value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={handleClickItem}>Add</button>

{
  todos.map((item)=>(
    <div key={item.id}>{item.title}</div>
  ))
}


    </div>
  );
}
