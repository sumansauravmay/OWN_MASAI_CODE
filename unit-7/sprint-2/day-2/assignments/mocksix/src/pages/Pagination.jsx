import React from 'react'

const Pagination = ({current,onChange}) => {
  return (
    <div>
        <button disabled={current===1} onClick={()=>onChange(-1)}>Prev</button>
        <button>{current}</button>
        <button onClick={()=>onChange(1)}>Next</button>
    </div>
  )
}

export default Pagination