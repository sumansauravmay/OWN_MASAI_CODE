import React from 'react';
import {Input,Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import axios from "axios";
import {Navigate,Link} from "react-router-dom";

const Login = () => {
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
 const [status,setStatus]=React.useState(false);

 const getData={
  email:email,
  password:password
 }

 const handleLogin=()=>{
  return axios({
      method:"GET",
      url:"https://lively-cap-duck.cyclic.app/users",
      data:getData
  }).then((res)=>{
   checkcredentials(res.data)

})
 }

 const checkcredentials=(data)=>{
  let filtered=data.filter((el)=>{
    return el.email===email && el.password===password
  })
  return finalcheck(filtered)
}
 
const finalcheck=(filtered)=>{
  if(filtered.length>0){
  alert("login successful")
 setStatus(true)
   } else{
  alert("login failed")
   }
}
if(status===true)
   {
    return <Navigate to="/stocks"/>
   }



  return (
    <FormControl w="600px" ml="320px" mt="100px">
      <Text>Welcome to Login Page</Text>
  <FormLabel>Email address</FormLabel>
  <Input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' />
  <FormLabel>Password</FormLabel>
  <Input value={password} onChange={(e)=>setPassword(e.target.value)} type='text' />
  <Input onClick={handleLogin} type='submit' value="Login" />

  <Text>Don't have a account?
    <Link to="/register">
    Register
    </Link>
    </Text>
</FormControl>
  )
}

export default Login