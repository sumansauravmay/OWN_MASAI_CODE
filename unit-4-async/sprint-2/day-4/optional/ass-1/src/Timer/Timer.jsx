import React, { useEffect, useState } from "react";

function Timer(){
const [val,setVal]=useState(15)

useEffect(()=>{
    const intval=setInterval(() => {
        setVal((prev)=>{
        if(prev===0)
        {
            clearInterval(intval)
            return 0;
        }
            return (prev-1);
        })

    }, 1000);
},[])

    return (
        <>
<h1>Countdown Timer : {val}</h1>
        </>
    )
}
export default Timer;