import {useState} from "react";

function PlayPause(){
  const [text,setText]=useState("The state is paused");
  const [btn,setBtn]=useState("paused") 
let suman=()=>{
  setText("The state is playing")
  setBtn("playing")
}
  return (
    <>
    <h1>{text}</h1>
    <button onClick={suman} >{btn}</button>
    </>
  )
}
export default PlayPause
