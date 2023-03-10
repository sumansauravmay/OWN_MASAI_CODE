import React from 'react'

import { useState } from 'react'

function Register() {
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [gender,setGender]=useState("")
const submit=()=>{
   
    
        let res= fetch("https://clear-boa-trousers.cyclic.app/users/register",
        {
            method:"POST",
          body:JSON.stringify({name,email,password,gender}),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json()).then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    
}
    return (
        <div>
            <h1>Register</h1>
            <input type={"text"} name="email" placeholder="enter email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type={"text"} name="name" value={name} placeholder="enter name" onChange={(e)=>setName(e.target.value)}/>
            <input type={"text"} name="password" value={password} placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
            <input type={"text"} name="gender" value={gender}  placeholder="enter Gender" onChange={(e)=>setGender(e.target.value)}/>
            <button onClick={submit}>register</button>
            </div>
      )
    }
    
    export default Register