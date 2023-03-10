import "./styles.css";
import React from "react";
export default function App() {
  const [count,setCount]=React.useState(0)
 
const handleInc=()=>{
  setCount(count+1)
}

  return (
    <div className="App">
      <h1>Count is : {count}</h1>
      <button onClick={handleInc}>Add</button>
    </div>
  );
}
