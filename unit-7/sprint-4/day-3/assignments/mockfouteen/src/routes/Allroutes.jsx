import React from 'react';
import {Routes,Route} from "react-router-dom"
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from '../pages/PrivateRoute';

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={
            <PrivateRoute>
            <Dashboard/>
            </PrivateRoute>
            }></Route>
        </Routes>
    </div>
  )
}

export default Allroutes