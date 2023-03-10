import React from 'react'
import { useState } from 'react'

function Createnotes() {
    const [title,setTitle]=useState("");
    const [category,setCategory]=useState("");
    const [note,setNote]=useState("")
    const add=()=>{
      // http://localhost:3500/notes/create
        let res= fetch("https://stormy-skirt-elk.cyclic.app/notes/create",
        {
            method:"POST",
    
          body:JSON.stringify({title,category,note}),
        headers:{
            "Content-type":"application/json",
            "Authorization":localStorage.getItem("token")

        }
    }).then((res)=>res.json()).then((res)=>console.log(res))
    .catch((err)=>console.log(err))
      
    }
  return (
    <div><h1>Createnotes</h1>
 <input type={"text"} name="title" placeholder="enter title"value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type={"text"} name="cateogory" value={category} placeholder="enter category" onChange={(e)=>setCategory(e.target.value)}/>
        <input type={"text"} name="note" value={note} placeholder="enter note" onChange={(e)=>setNote(e.target.value)}/>
        <button onClick={add}>add notes</button>
    </div>
  )
}
// {"msg":"Login Successfull","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2MwZTVjOTlkMDhlNWNmMjAyODg2MTAiLCJpYXQiOjE2NzM1ODc0MzJ9.I16w0LNhOLAfiDRPtj5RmbGlPZoPr0m7xphwABGyq58
export default Createnotes