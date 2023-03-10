
import axios from "axios";
import { } from "./cart.types";

export const cartProducts=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    try{
        let response=await axios.get(`http://localhost:8080/cartItems`)
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:response.data})
    }
    catch(e){
        dispatch({type:GET_PRODUCTS_ERROR,payload:e.message})
    }
}











