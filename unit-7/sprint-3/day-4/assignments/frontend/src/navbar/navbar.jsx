import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
  

const Navbar = () => {
    const [data,setData]=React.useState([]);

    const getData=()=>{
        return axios.get("localhost:3500/data/proddata")
        .then((res)=>setData(res))
    }
useEffect(()=>{
    getData()
    .then((res)=>{
        setData(res)
        console.log(res.data)
    })
})

  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div>
        <h1>Signup</h1>
        </div>

        <div>
        <h1>Login</h1>
            </div>

            <div>
            <button>
                <Link to="/data/newprod">
                Sell
                </Link>
                </button>
            </div>
            </div>




    </div>
  )
}

export default Navbar