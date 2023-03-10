import React from 'react'
import useCounter from '../hooks/useCounter'




const Counter1 = () => {
    const [count,increment,decrement]=useCounter(0)

  return (
    <div>
      l<h1>Counter1:{count}</h1>
      <button onClick={()=>decrement(count-1)}>-1</button>

      <button onClick={()=>increment(count+1)}>+1</button>
    </div>
  )
}

export default Counter1
