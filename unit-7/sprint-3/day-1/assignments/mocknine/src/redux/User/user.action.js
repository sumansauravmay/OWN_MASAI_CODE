// import axios from "axios";
// import { USERLOGIN } from "./user.type"

// export const useraction=(getData)=>(dispatch)=>{
//    fetch("https://opentdb.com/api.php",getData)
//    .then((res)=>res.json())
//    .then((res)=>{
//     dispatch({type:USERLOGIN,payload:res.data.results})
//     console.log(res.data.results)
//    })
//    .catch((err)=>console.log(err))
// }

import axios from "axios";

import { USERLOGIN } from "./user.type"
export const useraction=(getData)=>(dispatch)=>{
// dispatch({type:types.GET_DATA_REQUEST});
return  axios
        .get("https://opentdb.com/api.php", getData)
        .then((r)=>{
            dispatch({type:USERLOGIN , payload:r.data})
            console.log("data",r.data)
        })
        
        
        // .catch((e)=>dispatch({type:types.GET_DATA_FAILURE}))
}