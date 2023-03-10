import React from 'react'
import useCounter from '../hooks/useCounter'
const Counter3 = () => {
    const [count,increment,decrement]=useCounter(0)


    return (
        <div>
          l<h1>Counter3:{count}</h1>
          <button onClick={()=>decrement(count-100)}>-100</button>
    
          <button onClick={()=>increment(count+100)}>+100</button>
        </div>
      )
}

export default Counter3
