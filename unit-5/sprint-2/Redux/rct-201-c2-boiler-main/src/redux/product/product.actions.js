import axios from "axios"
import { GET_CART_ITEMS_SUCCESS } from "../cart/cart.types";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, RESET_PRODUCTS } from "./product.types"

// Product actions here
export const getproducts=()=>async(dispatch)=>{
  try { dispatch({type:GET_PRODUCTS_LOADING})
  let res=await axios.get(` http://localhost:8080/products`);
  dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
}
catch(e){
    dispatch({type:GET_PRODUCTS_ERROR,payload:e.massage})
}
}
export const resetproduct=()=>({
type:RESET_PRODUCTS
})