import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  logout } from "../../redux/auth/auth.actions";

const Navbar = () => {
  const {data}=useSelector((store)=>store.auth)
  const {cart}=useSelector((store)=>store)

  const dispatch=useDispatch()
  const Navigate=useNavigate()
  const logouthandle=()=>{
    if(data.isAuthenticated){
dispatch(logout())
    }else{
      Navigate("/login")
    }
    
  }
  console.log(data)
  let totalproducts=0;
  for(let i=0;cart.data.length;i++){
totalproducts+=cart.data[i].id
  }
  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link">home</a>
        <Link to="/">HOME</Link>
        <Link to="/cartItems">cart</Link>
        
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">{totalproducts}</div>
        <button data-cy="navbar-login-logout-button" onClick={logouthandle}>{data.isAuthenticated?'LOGOUT':"LOGIN"}</button>
      </div>
    </div>
  );
};

export default Navbar;
