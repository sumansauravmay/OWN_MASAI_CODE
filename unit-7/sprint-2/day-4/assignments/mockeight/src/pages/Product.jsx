import React, { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { getProduct } from '../authenticate/product.actions';
import {Button,Box, Grid} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "../App.css";
// import Navbar from './Navbar';

const Product = () => {
const products=useSelector((store)=>store.productManager.product)
console.log(products)
const dispatch=useDispatch();
// console.log(dispatch)
useEffect(()=>{
    dispatch(getProduct())
},[])

const sorth_t_l=()=>{
    products.sort((a,b)=>b.price-a.price)
    
}


  return (
    <div>
        <Navbar/>
        <Button>kids</Button>
        <Button>women</Button>
        <Button>homedecor</Button>

        <Button onClick={sorth_t_l}>High_to_low</Button>
        <Button>Low_to_high</Button>
        
        <div style={{marginTop:"50px"}} className='productdiv'>
{
   products.data && products.data.map((prod)=>(
        <div key={prod.id}>
            <img src={prod.image} alt="prod_image"/>
            <h2>{prod.title}</h2>
            <p>{prod.brand}</p>
            <p>{prod.category}</p>
            <p>{prod.price}</p>
            <Link to={`/${prod.id}`}>
            <Button>See Details</Button>
            </Link>
        </div>
    ))
}
</div>
    </div>
  )
}

export default Product