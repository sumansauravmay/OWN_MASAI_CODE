import React, { useEffect, useState } from "react";

function Timer(){
    const [val,setVal]=useState(10);

useEffect(()=>{
    const timerint=setInterval(() => {
        setVal((prev)=>{
            if(prev===0)
            {
                clearInterval(timerint)
                return 0;
            }
            return prev-1;
        })

    }, 1000);

const cleanup=()=>{
    console.log("yes")
    clearInterval(timerint)
}
return cleanup;

},[])


    return (
        <>
            <h1>Countdown timer : {val}</h1>
        </>
    )
}
export default Timer;