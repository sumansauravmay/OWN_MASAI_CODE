// Write Code here
// do a default export
import React from "react";

export default function PlayPause(){
    const [head,setHead]=React.useState("The state is paused");
    const [btn,setBtn]=React.useState("paused")
const changeStatus=()=>{
setHead("The state is playing")
setBtn("playing")
}
    return (
        <>
            <h1>{head}</h1>
            <button onClick={changeStatus}>{btn}</button>
        </>
    )
}
