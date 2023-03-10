import React from "react";
import {Link} from "react-router-dom";

const links=[
    {path:"/",title:"Couter"},
    {path:"/todo",title:"TodoApp"}
]

function Navbar(){

    return (
        <div style={{display:'flex',justifyContent:"space-evenly"}}>
{
    links.map((link)=>(
        <Link key={link.path} to={link.path}>{link.title}</Link>
    ))
}
        </div>
       
    )
}
export default Navbar;