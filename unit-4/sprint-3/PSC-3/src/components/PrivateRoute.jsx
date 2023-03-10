import React from "react";
import { Navigate } from "react-router-dom";
import {AppContext} from "../context/AuthContextProvider";

function PrivateRoute({children}){

const {isAuth}=React.useContext(AppContext);




if(!isAuth)
{
   return <Navigate to="/login"/>
}
return children;
}

export default PrivateRoute;