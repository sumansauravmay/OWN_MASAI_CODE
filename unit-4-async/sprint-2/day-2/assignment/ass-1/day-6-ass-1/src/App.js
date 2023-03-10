import "./styles.css";
import React from "react";

export default function App() {
  const [count,setCount]=React.useState(0)

  React.useEffect(()=>{
    document.title=`You clicked ${count} times`
  },[count])
  return (
    <div className="App">
      <h1>Counter : {count}</h1>

      <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  );
}
