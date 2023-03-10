import React from 'react'
import useCounter from '../hooks/useCounter'
const Counter2 = () => {

    const [count,increment,decrement]=useCounter(0)

        return (
            <div>
              l<h1>Counter2:{count}</h1>
              <button onClick={()=>decrement(count-10)}>-10</button>
        
              <button onClick={()=>increment(count+10)}>+10</button>
            </div>
          )
}

export default Counter2
