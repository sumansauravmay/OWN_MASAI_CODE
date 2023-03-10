import React from "react";
import {Routes,Route} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import Login from "../pages/Login";
import Navbar from "./Navbar";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";


function AllRoutes(){
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute>
                <Home/>
                </PrivateRoute>
                }></Route>
                <Route path="/navbar" element={
                    <PrivateRoute>
                <Navbar/>
                </PrivateRoute>
                }></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/about" element={
                    <PrivateRoute>
                <About/>
                </PrivateRoute>
                }></Route>
                <Route path="/contact" element={
                    <PrivateRoute>
                <Contact/>
                </PrivateRoute>
                }></Route>
                <Route path="/products" element={
<PrivateRoute>
<Products/>
</PrivateRoute>
                  
                }></Route>
                <Route path="/products/:id" element={
                    <PrivateRoute>
                <SingleProduct/>
                </PrivateRoute>
                }></Route>
                <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
        </>
    )
}
export default AllRoutes;