import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home"
import Dashboard from "./Dashboard";
import Login from "./Login";
import RestaurantPage from "./RestaurantPage";
import PrivateRoute from "../Components/PrivateRoute";


function AllRoutes() {
  return <div>{/* Add Home, Login dashboard and restaurant pages */}
  
  <Routes>
<Route path="/dashboard" element={
 
<Dashboard/>
  
}></Route>
{/* <Route path="/" element={<Home/>}></Route> */}
<Route path="/login" element={<Login/>}></Route>
<Route path="/restaurantPage" element={
   <PrivateRoute>
<RestaurantPage/>
</PrivateRoute>
}></Route>
 <Route path="/restaurantPage/:item_id" element={
         <PrivateRoute>
        <RestaurantPage/>
           </PrivateRoute> 
    }></Route>
  </Routes>
  
  
  
  </div>;
}

export default AllRoutes;
