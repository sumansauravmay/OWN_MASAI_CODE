import React from "react"

export default function Example(){
    const [count,setCount]=React.useState(0);


    React.useEffect(()=>{
        console.log(`colled clean up`,Date.now())
        return ()=>{
            console.log("colled useEffect at",Date.now())
        }
    },[count])
    return (
        <>
            <h1>Example : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Add</button>
        </>
    )
}