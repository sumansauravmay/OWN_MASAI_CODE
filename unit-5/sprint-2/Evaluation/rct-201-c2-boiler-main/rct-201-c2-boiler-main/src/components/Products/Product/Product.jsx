import React, { useEffect } from "react";
import { getProducts } from "../../../redux/product/product.actions";
import { useSelector,useDispatch } from "react-redux/es/exports";



const Product = ({id}) => {
  // const {id}=null
  const products=useSelector((store)=>store.productManager.data)
const dispatch=useDispatch();

useEffect(()=>{
  dispatch(getProducts())
},[])

  // You can change this variable value to each product id
  // const id = null;

  return (
    <div>
{
  products.map((prod)=>(
    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">{prod.name}</h3>
      <h6 data-cy="product-description">{prod.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count"></span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove</button>
      </div>
    </div>
  ))
}



    </div>
    
  );
};

export default Product;
