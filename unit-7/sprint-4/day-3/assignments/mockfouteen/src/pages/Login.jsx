import React,{useState} from 'react'
import { Navigate } from 'react-router-dom';
import axios from "axios";
import Home from './Home';

const Login = () => {
    const [pass,setPass]=useState("")
    const [email,setEmail]=useState("")

    const login=()=>{

        const payload={
            email,pass
         }
axios.post("http://localhost:3500/login",payload)
.then((res)=>{
    console.log(res.data)
    localStorage.setItem("token",res.data.token)
    Navigate("/dashboard")
})
.catch((err)=>console.log(err))

    }


  return (
    <div>
        <Home/>
         <h1>Login</h1>
        <input type={"text"} name="email" placeholder="enter email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type={"text"} name="pass" value={pass} placeholder="enter pass" onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={login}>login</button>
    </div>
  )
}

export default Login