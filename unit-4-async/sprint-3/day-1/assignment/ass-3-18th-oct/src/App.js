import "./styles.css";
import React from "react";

export default function App() {
  const [timer,setTimer]=React.useState(0)
const refTime=React.useRef(null)

const handleStart=()=>{
  if(refTime.current!==null) return;
  refTime.current=setInterval(()=>{
    setTimer((prevtimer)=>prevtimer+1)
  },1000)
}

const handleStop=()=>{
  clearInterval(refTime.current)
  refTime.current=null
}

const handleReset=()=>{
  handleStop()
setTimer(0)
}

  return (
    <div className="App">
     <h1>Timer : {timer}</h1>
     <button onClick={handleStart}>Start</button>
     <button onClick={handleStop}>Stop</button>
     <button onClick={handleReset}>Reset</button>
    </div>
  );
}
