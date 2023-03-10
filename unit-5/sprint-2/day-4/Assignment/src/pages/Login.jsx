import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate,useLocation } from "react-router-dom";
import { login } from "../redux/auth/auth.actions";

const Login = () => {
const [loginCreds,setLoginCreds]=useState({})

  const {isAuthenticated}=useSelector((store)=>store.authManager.data)

  const dispatch=useDispatch();
  const navigate=useNavigate();
// const {state}=useLocation()

const handleChange=(e)=>{
  const {name,value}=e.target;
  // console.log(name)
  // console.log(value)

  setLoginCreds({
    ...loginCreds,
    [name]:value,
  })
}

const handleSubmit=(e)=>{
e.preventDefault();
dispatch(login(loginCreds))
}

useEffect(()=>{
  if(isAuthenticated){
   
      navigate("/products")
    }
    else{
      navigate("/login")
    }
  
},[isAuthenticated,navigate])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email" name="email" type="email" placeholder="Enter Email"
        onChange={handleChange}
         />
        <input data-cy="login-password" name="password" type="password" placeholder="Enter Password"
onChange={handleChange}
        />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
