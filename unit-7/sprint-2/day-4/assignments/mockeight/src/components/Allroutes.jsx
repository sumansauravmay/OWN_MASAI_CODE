import React from 'react';
import {Routes,Route} from "react-router-dom"
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import Product from '../pages/Product';
import Productdel from '../pages/Productdel';

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Product/>}></Route>
            <Route path="/:id" element={<Productdel/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/orders" element={<Order/>}></Route>
           
        </Routes>
    </div>
  )
}

export default Allroutes