// Auth Actions here
import axios from "axios"
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, RESET_AUTH } from "./auth.types"

export const login=(data)=>async(dispatch)=>{
  try { dispatch({type:AUTH_SIGN_IN_LOADING})
    let res= await axios.post(`https://reqres.in/api/login`,data)
    dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:res.data})}
    catch(e){
        dispatch({type:AUTH_SIGN_IN_ERROR,payload:e.message})
    }
}
export const logout=()=>( ({type:AUTH_SIGN_OUT}));
export const reset=()=>(({type:RESET_AUTH}))