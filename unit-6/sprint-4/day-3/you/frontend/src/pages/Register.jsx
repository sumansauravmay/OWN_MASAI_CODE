import React from 'react'

import { useState } from 'react'

function Register() {
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const [pass,setPass]=useState("")
    const [age,setAge]=useState("")
const submit=()=>{
   
  // http://localhost:3500/user/register
        let res= fetch("https://stormy-skirt-elk.cyclic.app/user/register",
        {
            method:"POST",

          body:JSON.stringify({name,email,pass,age}),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json()).then((res)=>console.log(res))
    .catch((err)=>console.log(err))
      
        
     console.log(res) 
    
    
    
    

}
  return (
    <div>
        <h1>Register</h1>
        <input type={"text"} name="email" placeholder="enter email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type={"text"} name="name" value={name} placeholder="enter name" onChange={(e)=>setName(e.target.value)}/>
        <input type={"text"} name="pass" value={pass} placeholder="enter pass" onChange={(e)=>setPass(e.target.value)}/>
        <input type={"number"} name="email" value={age}  placeholder="enter age" onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={submit}>register</button>

        </div>
  )
}

export default Register