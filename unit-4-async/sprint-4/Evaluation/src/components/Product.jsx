import React from "react";
 import {Text,Image,Box,Stack,Heading,Tag,TagLabel,Container} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";



let getData=()=>{
  return axios.get(`http://localhost:8080/products`)
}



const Product = () => {
  const [data,setData]=React.useState([])
const [loading,setLoading]=React.useState(false)
  

  useEffect((page=1)=>{
    setLoading(true)
    getData()
    .then((res)=>{
  setData(res.data)
  console.log(res)
  setLoading(false)
    })
  },[])

  // TODO: Remove below const and instead import them from chakra
if(loading){
  return <h1>...Loading</h1>
}
   




  return (
    <Container>
   
    {
      data.map((item)=>(
        <Stack data-cy="product" key={item.id}>

<Image data-cy="product-image" src={item.imageSrc} alt="suman"/>
<Text data-cy="product-category">{item.category}</Text>
<Tag>
  <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
</Tag>
<Heading data-cy="product-title">{item.title}</Heading>
<Box data-cy="product-price">{item.price}</Box>

</Stack>
      ))
    }


  
    </Container>
    


  );
};

export default Product;
