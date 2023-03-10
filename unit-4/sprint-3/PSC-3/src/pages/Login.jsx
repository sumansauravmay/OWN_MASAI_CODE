import React from "react";
import { useNavigate } from "react-router-dom";
import {AppContext} from "../context/AuthContextProvider";

function Login(){
    const {isAuth,toggleAuth}=React.useContext(AppContext)
    const navigate=useNavigate()

    if(isAuth)
    {
        return navigate("/")
    }
    return (
        <>
            <h2>Login</h2>
            <button onClick={toggleAuth}>Login</button>
        </>
    )
}
export default Login;