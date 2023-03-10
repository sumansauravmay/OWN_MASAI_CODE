import { GET_FEEDS_ERROR,
    GET_FEEDS_LOADING,
     GET_FEEDS_SUCCESS } from "./feeds.types";



const initialState={
   loading:false,
   error:"",
   feeds:[],
}


export const feedsReducer=(state=initialState,{type,payload})=>{
   switch(type){

       case GET_FEEDS_LOADING:{
           return {
               ...state,
       loading:true,
       error:"",
           }
       }

       case GET_FEEDS_SUCCESS:{
           return {
               ...state,
       loading:false,
       feeds:payload,
           }
       }
       

case GET_FEEDS_ERROR:{
   return {
       ...state,
loading:false,
error:payload,
   }
}

       default:{
           return state;
       }
   }
}



