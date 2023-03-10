import axios from "axios";
import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./product.types";


export const getProduct=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING})
   try{
    let response=await axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
    dispatch({type:GET_PRODUCT_SUCCESS,payload:response.data})
   }
   catch(e){
    dispatch({type:GET_PRODUCT_ERROR,payload:e.message})
   }
}


