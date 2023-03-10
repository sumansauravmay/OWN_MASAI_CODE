import {CRITICAL_SEVERITY} from "./dashboard.types";
export const productdel=()=>(dispatch)=>{
   return fetch(
    `https://lively-cap-duck.cyclic.app/critical_severity`
    )
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type:CRITICAL_SEVERITY,payload:res.data})
        console.log("data",res.data)
        
    })
}