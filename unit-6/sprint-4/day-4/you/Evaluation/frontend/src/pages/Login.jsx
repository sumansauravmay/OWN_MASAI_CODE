
import React, { useState } from 'react'

function Login() {
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
const login=()=>{
    let res= fetch("https://clear-boa-trousers.cyclic.app/users/login",
    {
        method:"POST",

      body:JSON.stringify({email,password}),
    headers:{
        "Content-Type":"application/json"
    }
}).then((res)=>res.json()).then((res)=>localStorage.setItem("token",res.token))
.catch((err)=>console.log(err))
  
}
  return (
    <div>
        <h1>Login</h1>
        <input type={"text"} name="email" placeholder="enter email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type={"text"} name="password" value={password} placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={login}>login</button>
        
        </div>
  )
}

export default Login



