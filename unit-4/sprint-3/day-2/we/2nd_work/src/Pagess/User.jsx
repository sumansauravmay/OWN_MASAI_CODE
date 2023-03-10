import React from "react";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const getData=(url)=>{
return fetch(`https://reqres.in/api/users?page=2`)
.then((res)=>res.json());

}

function User(){
    const [data,setData]=useState({});

    useEffect((url)=>{
        getData(url).then((res)=>
        setData(res))
    },[])
    return (
        <>
  <h1>I am User</h1>
<ul>
  {
    data && data.data &&
    data.data.map((item)=>(
<li key={item.id}>
<Link to={`/users/${item.id}`}>{item.first_name} {item.last_name}</Link>

</li>
  ))}
  </ul>
        </>
      
    )
}
export default User;