// import { get } from 'mongoose';
import React, { useState } from 'react';
import axios from "axios";
import Home from './Home';

const Signup = () => {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
   
   

const submit=()=>{

 const payload={
    email,pass
 }
 console.log(payload)
 axios.post("http://localhost:3500/signup",payload)
 .then((res)=>console.log(res.data))
 .catch((err)=>console.log(err))
}



  return (
    <div>
        <Home/>
         <h1>Sign Up Page</h1>

        <input type="text" name="email" placeholder="enter email" value={email} 
        onChange={(e)=>setEmail(e.target.value)}/>

        <input type="text" name="pass" value={pass} placeholder="enter pass"
        onChange={(e)=>setPass(e.target.value)}/>
        
        <button onClick={submit}>Signup</button>
    </div>
  )
}
// onClick={submit}
export default Signup