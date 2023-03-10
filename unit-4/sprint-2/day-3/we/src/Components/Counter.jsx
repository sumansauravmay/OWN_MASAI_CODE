import React from "react";


export default function Counter(){
    const [count,setCount]=React.useState(10)

    React.useEffect(()=>{
        const id=setInterval(() => {
            setCount((prev)=>{
                if(prev===0)
                {
                    clearTimeout(id)  
                    return prev;
                }
                return prev-1;
            })
        }, 1000);
//cleanup
return ()=>{
    clearInterval(id)
}

    },[]);
    return (
        <h1>Counter : {count}</h1>
    )
}