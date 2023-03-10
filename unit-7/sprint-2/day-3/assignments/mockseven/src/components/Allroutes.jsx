import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Portfolio from '../pages/Portfolio';
import Register from '../pages/Register';
import Stocks from '../pages/Stocks';

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/stocks" element={<Stocks/>}></Route>
            <Route path="/portfolio" element={<Portfolio/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes