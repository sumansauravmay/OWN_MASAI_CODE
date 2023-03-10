
import './App.css';
import React, { useState } from "react"
import Counter from "./Components/Counter";
import Example from "./Components/Example"

function App() {
const [showCounter,setShowCounter]=useState(false)

  return (
    <div className="App">
    {showCounter && <Counter/>}
      <br/>
      <button onClick={()=>setShowCounter(!showCounter)}>Show</button>
    <Example/>
    </div>
  );
}

export default App;
