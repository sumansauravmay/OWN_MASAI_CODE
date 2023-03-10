import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute"
// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/" element={<Home/>}></Route> */}
      </Routes>
    </>
  )
};

export default AllRoutes;
