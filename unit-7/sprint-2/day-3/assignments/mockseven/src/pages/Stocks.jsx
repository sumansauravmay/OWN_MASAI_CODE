import React, { useEffect, useState } from 'react';
import {Image } from '@chakra-ui/react'
import { Heading,Text,Input,Button } from '@chakra-ui/react';
import Pagination from './Pagination';


const Stocks = () => {
  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);
  const [sortpart,setSortpart]=useState("asc");
  const [filter,setFilter]=useState("")

const getData=(page=1,sortpart="asc")=>{
  
  return fetch(`https://lively-cap-duck.cyclic.app/companies?_limit=4&_page=${page}&_sort=price_action&_order=${sortpart}&company_type=${filter}`)
  .then((res)=>res.json())
  .then((res)=>{
    console.log(res)
    setData(res)
  })
}
useEffect(()=>{
  getData(page,sortpart,filter)
},[page,sortpart,filter])

const handlepagechange=(val)=>{
  const value=page+val;
  setPage(value)
}


  return (
    <>
     <Button onClick={()=>setSortpart("asc")}>Ascending</Button>
    <Button onClick={()=>setSortpart("desc")}>Descending</Button>

    <select onChange={(e)=>setFilter(e.target.value)} id="companyType">
          <option value="">All</option>
          <option value="Bank">Bank</option>
          <option value="IT">IT</option>
          <option value="Automobile">Automobile</option>
          <option value="Pharma">Pharma</option>
          <option value="Oil">Oil</option>
        </select>
   
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,400px)",height:"400px",marginTop:"80px"}}>
      {
data.map((stock)=>(
  <div key={stock.id}
  style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
    <Image w="200px" ml="100px" src={stock.company_logo} alt="logo"/>
    <Heading>{stock.company_name}</Heading>
    <Text>TYPE: {stock.company_type}</Text>
    <Text>EXCHANGE: {stock.stock_exchange}</Text>
    <Text>TOTAL SHARES: {stock.total_shares}</Text>
    <Text>COST PER SHARE: {stock.cost_per_share}</Text>
    <Text>PRICE ACTION: {stock.price_action}</Text>
    <Input w="300px" type="number" placeholder='enter quantity'/>
    <Input w="200px" mt="20px" bg="blue.500" color="white" type="submit" vlaue="Buy"/>
  </div>
))
      }
      
    </div>
   
    <Pagination page={page} onChange={handlepagechange}/>
    </>
  )
}

export default Stocks