import { useState,useEffect } from "react";

export default function Counter(){
const [count,setCount]=useState(0);



useEffect(()=>{
document.title=`you clicked ${count} times`
},[count])
return (
    <>
        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
    </>
)
}