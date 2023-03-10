import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div style={{display:'flex',justifyContent:"space-evenly"}}>

            <h1>
               <Link to="/dashboard">
                Dashboard
                </Link> 
                </h1>

            <h1>
            <Link to="/signup">
                Sign Up
                </Link> 
                </h1>

            <h1>
            <Link to="/login">
                Login
                </Link> 
                </h1>
        </div>

        <h1 style={{marginTop:"150px"}}>Welcome to Bug Tracker</h1>
    </div>
  )
}

export default Home