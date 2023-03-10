import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/auth.actions";

const Navbar = () => {
const {isAuthenticated}=useSelector((store)=>store.authManager.data)
const dispatch=useDispatch()
const navigate=useNavigate();


const handleLoginClick=()=>{
  if(isAuthenticated)
  {
    dispatch(logout())
  }
  else
  {
  navigate("/login")
}
}

  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to="/">Home</Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">cart</div>
        <Link to="/login">
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}
        >{isAuthenticated?"Logout":"Login"}</button>
        </Link>
       
      </div>
    </div>
  );
};

export default Navbar
