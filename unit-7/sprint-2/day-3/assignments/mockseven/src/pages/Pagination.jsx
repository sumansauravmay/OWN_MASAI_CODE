import React from 'react'

const Pagination = ({page,onChange}) => {
  return (
    <div>
        <button disabled={page===1} onClick={()=>onChange(-1)}>Prev</button>
        <button>{page}</button>
        <button onClick={()=>onChange(1)}>Next</button>
    </div>
  )
}

export default Pagination