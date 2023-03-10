import React from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "@chakra-ui/react";


const Productdel = () => {
  const {id}=useParams()
const [itemDetails,setItemDetails]=React.useState({});

React.useEffect(()=>{
  return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
      .then((res)=>setItemDetails(res.data.data)
      )
},[id])

const handlecartpage=(id)=>{
  let arr=JSON.parse(localStorage.getItem("prod"))||[];
  arr.push(itemDetails)
console.log(id)
localStorage.setItem("prod",JSON.stringify(arr))
}

  return (
    <div>
      <img style={{margin:"auto"}} src={itemDetails.image} alt="img"/>
      <p>{itemDetails.title}</p>
<p>{itemDetails.brand}</p>
<p>{itemDetails.category}</p>
<p>{itemDetails.price}</p>
<Button onClick={()=>handlecartpage(itemDetails)}>Add to Cart</Button>
    </div>
  )
}

export default Productdel