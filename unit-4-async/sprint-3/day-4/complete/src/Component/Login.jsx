import React from "react";
import { Navigate } from "react-router-dom";
 import {AppContest} from "../Contest/AppContestProvider";
 

function Login() {
   const {isAuth,LoginAuth}=React.useContext(AppContest)


if(isAuth)
{
  return <Navigate to="/dashboard"/>
}

  return (
    <>
      <h1>Login</h1>
      <button onClick={LoginAuth}>Login</button>
     
    </>
  );
}
export default Login;
