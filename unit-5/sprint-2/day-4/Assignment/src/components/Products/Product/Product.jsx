import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartProducts } from "../../../redux/cart/cart.actions";


const Product = () => {
  const cartProduct2=useSelector((store)=>store.addtocartManager.data)
   console.log(cartProduct2)
   const [state,setState]=useState([cartProduct2])
  // console.log(state)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(cartProducts())
  },[])

  return (
  <>
 <h1>Cart Product</h1>
  {
    state.map((el)=>(
      <div key={el.id}>
      <p>{el.name}</p>
      <p>{el.description}</p>
      <button>Remove</button>
      </div>
      
    ))
  }
   
  </>
  )
};

export default Product;
