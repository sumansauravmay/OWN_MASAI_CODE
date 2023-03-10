import React,{useState,useEffect} from 'react';
// import { Link } from 'react-router-dom';
import {Image,Stack } from '@chakra-ui/react'
import { Heading,Text,Input,Button } from '@chakra-ui/react';
import axios from "axios";

const Dashboard = () => {
  const [data,setData]=useState([]);
 const [company_logo,setCompany_logo]=useState("")
 const [company_name,setCompany_name]=useState("")
 const [company_type,setCompany_type]=useState("")
 const [stock_exchange,setStock_exchange]=useState("")
 const [total_shares,setTotal_shares]=useState("")
 const [cost_per_share,setCost_per_share]=useState("")
 const [price_action,setPrice_action]=useState("")

const getData=()=>{
  return fetch(`https://lively-cap-duck.cyclic.app/companies`)
  .then((res)=>res.json())
  .then((res)=>{
  
    setData(res)
  })
}
useEffect(()=>{
  getData()
},[])

let getData2={
  company_logo:company_logo,
  company_name:company_name,
  company_type:company_type,
  stock_exchange:stock_exchange,
  total_shares:total_shares,
  cost_per_share:cost_per_share,
  price_action:price_action
}

const addnewdatafunc=()=>{
  return axios({
    method: 'post',
    url: 'https://lively-cap-duck.cyclic.app/companies',
    data: getData2
  })
  .then((res)=>{
    console.log(res)
  })
  
}

const deletedatafunc=(id)=>{
  let x=data.filter((item)=>{
    return item.id!==id
  })
  setData(x)
}
 
  return (
    <div>
     
      <Stack spacing={3} w="500px" ml="300px" mt="50px">
  <Input value={company_logo} onChange={(e)=>setCompany_logo(e.target.value)} type="text" placeholder='enter url link' />
  <Input value={company_name} onChange={(e)=>setCompany_name(e.target.value)} type="text" placeholder='enter company name' />
  <select value={company_type} onChange={(e)=>setCompany_type(e.target.value)} id="companyType">
          <option value="">Select type</option>
          <option value="Bank">Bank</option>
          <option value="IT">IT</option>
          <option value="Automobile">Automobile</option>
          <option value="Pharma">Pharma</option>
          <option value="Oil">Oil</option>
        </select>
        <select value={stock_exchange} onChange={(e)=>setStock_exchange(e.target.value)} id="companyExchange">
        <option value="">Select exchange</option>
          <option value="NSE">NSE</option>
          <option value="BSE">BSE</option>
        </select>
       
  <Input value={total_shares} onChange={(e)=>setTotal_shares(e.target.value)} type="text" placeholder='enter total_shares' />
  <Input value={cost_per_share} onChange={(e)=>setCost_per_share(e.target.value)} type="text" placeholder='enter cost_per_share' />
  <Input value={price_action} onChange={(e)=>setPrice_action(e.target.value)} type="text" placeholder='enter price_action' />
  <Input onClick={addnewdatafunc} bg="blue.500" color="white" type="submit" value="Add stock" />
</Stack>
     
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
    <br/>
   <Button w="200px" mt="20px" bg="green.500" color="white">Edit</Button>
   <br/>
   <Button w="200px" mt="20px" bg="red.500" color="white" onClick={()=>deletedatafunc(stock.id)}>Delete</Button>
  </div>
))
      }
      
    </div>
    </div>
  )
}

export default Dashboard