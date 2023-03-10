import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",fontSize:"30px",marginTop:"150px"}}>
      <h1>
        <Link to="/pokemon">
        Pokemon Page
        </Link>
        </h1>
      <h1>
      <Link to="/types">
        Types Page
        </Link>
        </h1>
      <h1>
      <Link to="/favorites">
        Favorites Page
        </Link>
        </h1>
    </div>
  )
}

export default Home;