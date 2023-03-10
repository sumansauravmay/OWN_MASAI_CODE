import React from "react";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
    const {isAuth,toggleAuth}=React.useContext(AuthContext);

  return (
    <>
<h1>Home</h1>
<button onClick={toggleAuth}>Login</button>
    </>


  )
  
  
};

export default Home;
