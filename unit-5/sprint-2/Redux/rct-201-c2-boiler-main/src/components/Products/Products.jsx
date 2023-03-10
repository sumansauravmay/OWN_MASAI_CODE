import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproduct, getproduct } from "../../redux/cart/cart.actions";
import { getproducts } from "../../redux/product/product.actions";
import Product from "./Product/Product";

const Products = () => {
  const {data,loading,error}=useSelector((store)=>store.products);
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getproducts)
  },[])
  return <div>{/* here */}
  {loading?"...loading":error?"something went wrong productpage": data&&data.map((el)=><div key={el.id}>

<Product props={el}/>
  </div>)}
  </div>;
};

export default Products;
