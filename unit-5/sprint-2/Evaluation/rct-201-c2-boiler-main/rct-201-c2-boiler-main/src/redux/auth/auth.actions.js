// Auth Actions here

import axios from "axios"
import { AUTH_SIGN_IN_LOADING,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SIGN_OUT
} from "./auth.types"




export const login=(creds)=>async(dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING})
    try{
        let response=await axios.post("https://reqres.in/api/login",creds)
        dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:response.data})
    }
    catch(e){
        dispatch({type:AUTH_SIGN_IN_ERROR})
    }
}
export const logout=()=>({type:AUTH_SIGN_OUT})