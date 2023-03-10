import React from "react";
import {AuthContext} from "../Context/AuthContext"
import {Navigate} from "react-router-dom";

function PrivateRoute({children}) {
    const {authState}=React.useContext(AuthContext)

if(!authState.isAuth)
{
    return <Navigate to="/login"/>
}

return children;

}

export default PrivateRoute;
