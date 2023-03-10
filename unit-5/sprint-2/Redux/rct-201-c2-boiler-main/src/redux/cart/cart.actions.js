import axios from "axios"
import { ADD_ITEM_TO_CART_ERROR, ADD_ITEM_TO_CART_LOADING, ADD_ITEM_TO_CART_SUCCESS, GET_CART_ITEMS_ERROR, GET_CART_ITEMS_LOADING, REMOVE_CART_ITEMS_ERROR, REMOVE_CART_ITEMS_LOADING, REMOVE_CART_ITEMS_SUCCESS, RESET_CART_ITEMS, UPDATE_CART_ITEMS_ERROR, UPDATE_CART_ITEMS_LOADING, UPDATE_CART_ITEMS_SUCCESS } from "./cart.types"

// Cart Actions here
export const addproduct=(data)=>async(dispatch)=>{
    try{
        dispatch({type:ADD_ITEM_TO_CART_LOADING})
        let res=await axios.post(` http://localhost:8080/cartItems`,data)
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:res.data})
    }
    catch(e){
        dispatch({type:ADD_ITEM_TO_CART_ERROR,payload:e.message})
    }
}
export const getproduct=()=>async(dispatch)=>{
    try{
        dispatch({type:GET_CART_ITEMS_LOADING})
        let res=await axios.get(` http://localhost:8080/cartItems`)
        dispatch({type:GET_CART_ITEMS_ERROR,payload:res.data})
    }
    catch(e){
        dispatch({type:GET_CART_ITEMS_ERROR,payload:e.message})
    }
}
export const updated=(id,change)=>async(dispatch)=>{
    try{
        dispatch({type:UPDATE_CART_ITEMS_LOADING})
        let res=await axios.patch(` http://localhost:8080/cartItems/${id}`,
        {
            ...change
        })
        dispatch({type:UPDATE_CART_ITEMS_SUCCESS,payload:res.data})
    }
    catch(e){
        dispatch({type:UPDATE_CART_ITEMS_ERROR,payload:e.message})
    }
}
export const deleted=(id)=>async(dispatch)=>{
    try{
        dispatch({type:REMOVE_CART_ITEMS_LOADING})
        let res=await axios.delete(` http://localhost:8080/cartItems/${id}`,
       
        )
        dispatch({type:REMOVE_CART_ITEMS_SUCCESS,payload:res.data})
        dispatch(getproduct())
    }
    catch(e){
        dispatch({type:REMOVE_CART_ITEMS_ERROR,payload:e.message})
    }
}
export const resetcart=()=>({type:RESET_CART_ITEMS})