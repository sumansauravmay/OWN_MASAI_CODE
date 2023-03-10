import axios from "axios";

import { LOGIN_LOADING,LOGIN_ERROR,LOGIN_SUCCESS,LOGOUT } from "./auth.types";

export const login=(creds)=>async(dispatch)=>{
    dispatch({type:LOGIN_LOADING});
    try{
        let res=await axios.post("",creds)
        dispatch({type:LOGIN_SUCCESS,payload:res.data})
    }
    catch(e){
        dispatch({type:LOGIN_ERROR,payload:e.message})
    }
}

export const logout=()=>({type:LOGOUT})

