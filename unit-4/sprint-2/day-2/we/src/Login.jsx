import React from "react";
import axios from "axios";

function Login(){
const [email,setEmail]=React.useState("");
const [password,setPassword]=React.useState("")
const [status,setStatus]=React.useState(false);
const [token,setToken]=React.useState("")
const getData={
    email : email,
    password : password
}


const handleSubmit=()=>{
    return axios({
        method:"POST",
        url:"https://reqres.in/api/login",
        data:getData
    }).then((res)=>{
console.log(res.data)
setStatus(true)
setToken(Date.now())
alert("Loged in successfull")
    })
}
    return (
        <>
            <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <input type="submit" onClick={handleSubmit} />
        </>
    )
}
export default Login;