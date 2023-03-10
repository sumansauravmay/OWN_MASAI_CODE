import Timer from './Timer/Timer';
import './App.css';
import { useState } from 'react';

function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
      {show && <Timer/>}
      <button onClick={()=>setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
