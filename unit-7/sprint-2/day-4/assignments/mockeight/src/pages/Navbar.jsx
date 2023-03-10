import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>

    <p>
<Link to="/">
        Product
        </Link>
        </p>
        
    <p>
    <Link to="/cart">
        Cart
        </Link>
        </p>
    
    <p>
    <Link to="/orders"> 
        Order
        </Link>
        </p>

</div>
  )
}

export default Navbar