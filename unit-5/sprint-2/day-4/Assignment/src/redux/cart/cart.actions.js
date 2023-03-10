
import axios from "axios";
import { ADD_ITEM_TO_CART_ERROR, 
    ADD_ITEM_TO_CART_LOADING, 
    ADD_ITEM_TO_CART_SUCCESS, 

    GET_CART_ITEMS_ERROR, 
    GET_CART_ITEMS_LOADING,
     GET_CART_ITEMS_SUCCESS,
     
     REMOVE_CART_ITEMS_ERROR,
     REMOVE_CART_ITEMS_LOADING,
     REMOVE_CART_ITEMS_SUCCESS
 } from "./cart.types";

 //addtocart
export const addToCart=([data])=>async(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_LOADING})
    try{
        let response=await axios.post(`http://localhost:8080/cartItems`,data)
dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:response.data})
    }
    catch(e){
        dispatch({type:ADD_ITEM_TO_CART_ERROR,payload:e.message})
    }
}

//cart product
export const cartProducts=()=>async(dispatch)=>{
    dispatch({type:GET_CART_ITEMS_LOADING})
    try{
        let response=await axios.get(`http://localhost:8080/cartItems`)
        dispatch({type:GET_CART_ITEMS_SUCCESS,payload:response.data})
    }
    catch(e){
        dispatch({type:GET_CART_ITEMS_ERROR,payload:e.message})
    }
}

//removecart
export const removeData = (id) => async(dispatch)=>{
    dispatch({type:REMOVE_CART_ITEMS_LOADING})
    try{
        let response=await axios.delete(`http://localhost:8080/cartItems/${id}`)
        dispatch({type:REMOVE_CART_ITEMS_SUCCESS,payload:response.data})
    }
    catch(e){
        dispatch({type:REMOVE_CART_ITEMS_ERROR,payload:e.message})
    }
}
