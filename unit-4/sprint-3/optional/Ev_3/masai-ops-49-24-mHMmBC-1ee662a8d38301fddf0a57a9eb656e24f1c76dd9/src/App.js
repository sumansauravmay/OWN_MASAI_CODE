import "./styles.css";
import React from "react";
import AllRoutes from "./Routes/AllRoutes";
//  import Home from "./Routes/Home"

export default function App() {
  return (
    <div className="App">

      <h1>React Restaurants Listing</h1>
      
      {/* <Home/> */}
      <AllRoutes/>
    </div>
  );
}
