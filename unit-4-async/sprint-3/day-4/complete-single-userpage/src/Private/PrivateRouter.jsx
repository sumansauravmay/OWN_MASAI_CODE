import React from "react";
import {AppContest} from "../Contest/AppContestProvider";
import { Navigate} from "react-router-dom";

function PrivateRoute({children}){

const {isAuth}=React.useContext(AppContest)

if(!isAuth)
{
  return <Navigate to="/login"/>
}

  return  children
  
}
export default PrivateRoute