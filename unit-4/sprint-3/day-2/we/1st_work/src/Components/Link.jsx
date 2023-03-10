import { NavLink } from "react-router-dom";


const link=[
    {path:"/", title:"Home"},
    {path:"/about", title:"About"},
    {path:"/element", title:"Element"},
    {path:"/user", title:"User"}, 
]

const defaultStyle={
    textDecoration:"none",
    color:"black"
}
const activeStyle={
    textDecoration:"none",
     color:"red"
   
}
export default function Navbar(){
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            width:"70%",
            margin:"auto",
            fontSize:"20px"
          }}>
{link.map((item)=>
<NavLink style={({isActive})=>{
    return isActive?activeStyle:defaultStyle;
}}
 key={item.path} to={item.path}>{item.title}
</NavLink>
)}

     
        </div>
    )
}