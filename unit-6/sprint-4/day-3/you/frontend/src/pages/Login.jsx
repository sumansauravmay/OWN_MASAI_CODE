
import React, { useState } from 'react'

function Login() {
    const [pass,setPass]=useState("")
    const [email,setEmail]=useState("")
const login=()=>{
  // http://localhost:3500/user/login
    let res= fetch("https://stormy-skirt-elk.cyclic.app/user/login",
    {
        method:"POST",

      body:JSON.stringify({email,pass}),
    headers:{
        "Content-Type":"application/json"
    }
}).then((res)=>res.json()).then((res)=>localStorage.setItem("token",res.token))
.catch((err)=>console.log(err))
  
    
 console.log(res) 
}
  return (
    <div>
        <h1>Login</h1>
        <input type={"text"} name="email" placeholder="enter email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type={"text"} name="pass" value={pass} placeholder="enter pass" onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={login}>login</button>
        
        </div>
  )
}

export default Login







