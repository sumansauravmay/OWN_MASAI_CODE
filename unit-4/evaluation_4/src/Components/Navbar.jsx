import React from "react";
 import {NavLink} from "react-router-dom";
 import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
 

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`
const link=[
  {path:"/", title:"HOME"},
  {path:"/login", title:"LOGIN"},
  {path:"/cart", title:"CART"}
  // {path:"/", title:"Home"}
]
const Navbar = () => {
  
const {state}=React.useContext(AuthContext);

  return (
<div style={{display:"flex",justifyContent:"space-between"}}>

  <div>Token :{state.token} </div>
<div style={{display:"flex",justifyContent:"space-between",gap:"20px"}}>
  {
    link.map((el)=>(
      
  <NavLink key={el.path} to={el.path}end>{el.title}</NavLink>
    ))
  }
</div>

</div>

  
  )
  
};

export default Navbar;
