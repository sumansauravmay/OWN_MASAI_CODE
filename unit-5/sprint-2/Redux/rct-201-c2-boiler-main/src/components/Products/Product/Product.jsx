import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproduct, deleted, updated } from "../../../redux/cart/cart.actions";

const Product = ({props}) => {

  const {data}=useSelector((store)=>store.cart);
  const {name,description}=props
const dispatch=useDispatch()
  // You can change this variable value to each product id
  const id = null;
  const checkcartprduct=(id,data)=>{
    for(let i=0;i<data.length;i++){
      if(data[i].id===id){
        return true
      }else{
        return false
      }
    }
  }
  return (
    <div data-cy={`product-${props.id||id}`}>
      <h3 data-cy="product-name">name{name}</h3>
      <h6 data-cy="product-description">description {description}</h6>
      <button data-cy="product-add-item-to-cart-button" disabled={checkcartprduct(id,data)} onClick={()=>dispatch(addproduct(props))}> add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>dispatch(updated(id,{id:id+1}))}>increase quantity</button>
        <span data-cy="product-count">{id}</span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>dispatch(updated(id,{id:id-1}))}>decrease quantity</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>dispatch(deleted(id))}> remove</button>
      </div>
    </div>
    
  );
};

export default Product;
