import React, { useEffect, useState } from "react";

function Timer(){
const [val,setVal]=useState(10)

useEffect(()=>{
    const inttime=setInterval(() => {
        setVal((prev)=>{
            if(prev===0)
            {
                setTimeout(inttime)
                return 0;
            }
            console.log(Date.now())
         return prev-1;
        })
    }, 1000);

const cleanup=()=>{
    console.log("clear")
}
return cleanup;
},[])

return (
    <>
        <h1>CountDown : {val}</h1>
    </>
)

}
export default Timer;