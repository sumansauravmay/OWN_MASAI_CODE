import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import { getProducts } from "../../redux/product/product.actions";

const Products = () => {

  const products=useSelector((store)=>store.productManager.data)
 console.log(products)
  const dispatch=useDispatch();

const handleAddToCart=(id)=>{
   const addCartfromStore=products.filter((el)=>el.id==id)
  //  console.log(addCartfromStore)
dispatch(addToCart(addCartfromStore))
}

  useEffect(()=>{
    dispatch(getProducts())
  },[])
  return <div>
  <h1>Products Page</h1>
  {
  products.map((prod)=>(
    <div key={prod.id}>
      <h3 data-cy="product-name">{prod.name}</h3>
      <h6 data-cy="product-description">{prod.description}</h6>
      <button onClick={()=>handleAddToCart(prod.id)} data-cy="product-add-item-to-cart-button">Add to Cart</button>
    </div>
  ))
}
  </div>;
};

export default Products;
