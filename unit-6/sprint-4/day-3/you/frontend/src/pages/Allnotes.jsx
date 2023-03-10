import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Allnotes() {
    const [data,setData]=useState([])

    // http://localhost:3500/notes
    useEffect(()=>{
        fetch("https://stormy-skirt-elk.cyclic.app/notes",{
            headers:{
                "Content-type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        }).then((res)=>res.json()).then(res=>setData(res)).catch(err=>console.log(err))
    })
    const deleted=(id)=>{
        // http://localhost:3500/notes/delete/${id}
        fetch(`https://stormy-skirt-elk.cyclic.app/notes/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
                "Authorization":localStorage.getItem("token")
    
            }
        }).then((res)=>res.json()).then((res)=>console.log(res)).catch(err=>console.log(err))
        console.log(id)
    }
  return (
    <div>
        <h1>allnotes</h1>
        {
            data?data.map((el)=>
           <> <h1>Title:{el.title}</h1>
           <p>category:{el.category}</p>
           <button onClick={()=>deleted(el._id)}>delete</button>
           <button>edit</button>
           <hr></hr>
           </>):"no notes"
        }
        </div>
  )
}

export default Allnotes