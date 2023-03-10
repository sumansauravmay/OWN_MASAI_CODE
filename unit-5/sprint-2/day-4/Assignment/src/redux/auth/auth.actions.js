// Auth Actions here

import axios from "axios";

import { AUTH_SIGN_IN_LOADING,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SIGN_OUT
} from "./auth.types"

// function sum(a){
//    return function sunbs(b){
//       return  function divdi(c){
// return a+b+c
//         }
//     }
// }
//  let x=sum(1)(2)(3)
// console.log(x)


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


// redux=> state,action(type,payload)