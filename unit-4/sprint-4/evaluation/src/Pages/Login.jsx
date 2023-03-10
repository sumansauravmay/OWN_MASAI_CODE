import React,{useContext, useState} from "react";
import axios from "axios";
import { Input,Container } from '@chakra-ui/react';
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom";

// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

// const getData=()=>{
//   return axios.post("https://reqres.in/api/login",{
//     email:"sumansauravmay12345@gmail.com",
//     password:"12345"
//   })
// }

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
const [status,setStatus]=useState(false);
const [token,setToken]=useState("");

const {isAuth,toggleAuth}=useContext(AuthContext)

if(isAuth)
{
  return <Navigate to="/"/>
}

const handleChange=(e)=>{
setEmail(e.target.value)
setPassword(e.target.value)

}

const handleClick=()=>{
  
  axios({
    methos:"Post",
    url:"https://reqres.in/api/login",
    data:setEmail,setPassword
  }).then((res)=>{
  //  console.log(res.data.data)
   setStatus(true)
   setToken(Date.now())
   alert("Login successfull")
   
  })
}


  return (
    <Container>
      <Input type="email" placeholder='Email' value={email} onChange={handleChange}/>
      <Input type="password" placeholder='Password' value={password} onChange={handleChange}/>
      <Input onClick={toggleAuth} type="submit" />
    </Container>
    

  )
};

export default Login;
