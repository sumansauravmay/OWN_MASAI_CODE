import React from 'react'

const Project = async() => {

    let res=await fetch(`http://localhost:8080/items`)
       let data=await res.json()

  return (
    //  <div>
      data
//    </div>
  )
}

export default Project
