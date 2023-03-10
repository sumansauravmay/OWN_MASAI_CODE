import React from 'react'
import Button from './Button'

const Counter = () => {
    const [count,setCount]=React.useState<number>(0)
  return (
    <div>
      <h1>Counter : {count}</h1>
      <Button handleClick={()=>setCount(count-1)} color="red">Minus</Button>
      <Button handleClick={()=>setCount(count+1)} color="green">Plus</Button>
    </div>
  )
}

export default Counter
