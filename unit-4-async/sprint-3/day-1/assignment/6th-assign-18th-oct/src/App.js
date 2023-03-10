import "./styles.css";
import React from "react";

const fixTimeString=(time)=>(time<10?`${time}`:time)

const formateTimetoString=(time)=>{
  const sec = time % 60;
  const min= Math.floor(time / 60) % 60;
  const outputString=`00:${fixTimeString(min)}:${fixTimeString(sec)}`

return outputString;
}

export default function App() {
  const [timer, setTimer] = React.useState(0);
  const refTime = React.useRef(null);

React.useEffect(()=>{
  const cleanup=()=>{
    handleStop()
  }
  return cleanup;
},[])



  const handleStart = () => {
    if (refTime.current !== null) return;
    refTime.current = setInterval(() => {
      setTimer((prevtimer) => prevtimer + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(refTime.current);
    refTime.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTimer(0);
  };

  return (
    <div className="App">
      <h1>{formateTimetoString(timer)}</h1>
      
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
