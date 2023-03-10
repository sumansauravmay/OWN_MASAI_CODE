import React from "react";
import {Link} from "react-router-dom";

const links=[
    {path:"/",title:"HOME"},
    {path:"/login", title:"LOGIN"},
    {path:"/about", title:"ABOUT"},
    {path:"/contact",title:"CONTACT"},
    {path:"/products",title:"PRODUCTS"}

]

function Navbar(){
    return (
        <div style={{display:"flex",justifyContent:"space-between",width:"80%",margin:"auto"}}>
            
            {
                links.map((item)=>(
<Link key={item.path} to={item.path}>{item.title}</Link>
                ))
            }
        </div>
    )
}
export default Navbar;