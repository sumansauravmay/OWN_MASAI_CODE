import React from "react";
import {AuthContext} from "../Context/AppContext";
import {useContext} from "react";
import {Navigate} from "react-router-dom";


function PrivateRoute({children}) {
    const {isAuth}=useContext(AuthContext);
    if(!isAuth)
    {
        return <Navigate to="/login"/>
    }
    return children
}

export default PrivateRoute;
