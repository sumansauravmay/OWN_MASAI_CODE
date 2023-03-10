import React from "react";
import { AppContest } from "../Context/authContext/AuthContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {state}=React.useContext(AppContest)
  if(!state.isAuth)
  {
    return <Navigate to="/login"/>
  }
  return children
};

export default PrivateRoute;