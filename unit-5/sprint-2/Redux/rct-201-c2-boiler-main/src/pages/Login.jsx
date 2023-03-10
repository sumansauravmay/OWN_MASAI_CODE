import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/auth.actions";

const Login = () => {
  const dispatch=useDispatch();
  const {data}=useSelector((store)=>store.auth)
  const [values,setValues]=useState({email:"",password:""})

  const handle=(e)=>{
    const {name,value}=e.target;
    setValues({...values,[name]:value})
   
  }
  const submit=(e)=>{
    e.preventDefault();
    dispatch(login(values))

  }
  console.log(data)
  console.log(values)
  const {email,password}=values
  return (
    <div>
      <form>
        <input data-cy="login-email" name="email" onChange={handle} value={email}/>
        <input data-cy="login-password" name="password" onChange={handle} value={password} type="password"/>
        <button data-cy="login-submit" type="submit" onClick={submit}>login</button>
      </form>
    </div>
  );
};

export default Login;
