import React from "react";




const useCounter=(initialValue)=>{

    const [count,setCount]=React.useState(0);

    const increment=(updatedValue)=>{
    setCount(updatedValue)
    }
    
    const decrement=(updatedValue)=>{
        setCount(updatedValue)
        }

return [count,increment,decrement]
}

export default useCounter;