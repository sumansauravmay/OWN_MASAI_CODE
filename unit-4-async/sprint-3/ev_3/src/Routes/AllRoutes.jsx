import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {

  return <div>
  <>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dashboard" element={
<PrivateRoute>
    <Dashboard/>
    </PrivateRoute>
    }></Route>
    {/* <Route path="/" element={<Home/>}></Route> */}
  </Routes>
  </>
  </div>;
}

export default AllRoutes;
