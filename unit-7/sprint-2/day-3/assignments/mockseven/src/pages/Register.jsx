import React from 'react';
import { useNavigate,Link } from "react-router-dom";
import {Input,Text,
  FormControl,FormLabel
} from '@chakra-ui/react';
import axios from "axios";

const Register = () => {
  const Navigate = useNavigate();
  const [username,setUsername]=React.useState("");
  const [email,setEmail]=React.useState("")
  const [password,setPassword]=React.useState("");
  const [status,setStatus]=React.useState(false)

let getData={
  username:username,
  email:email,
  password:password
}

const registerdatafunc=()=>{
  return axios({
    method: 'post',
    url: 'https://lively-cap-duck.cyclic.app/users',
    data: getData
  })
  .then((res)=>{
    console.log(res)
    setStatus(true)
    alert("Signup successful")
  })
  
}
if(status===true){
  return <Navigate to="/login"/>
}

  return (
    <FormControl w="600px" ml="320px" mt="100px">
      <Text>Welcome to Register Page</Text>
  <FormLabel>Username</FormLabel>
  <Input value={username} onChange={(e)=>setUsername(e.target.value)} type='text' />
  <FormLabel>Email address</FormLabel>
  <Input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' />
  <FormLabel>Password</FormLabel>
  <Input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' />
  <Input type="submit" vlaue="Register" mt="10px" onClick={registerdatafunc}/>

  <Text>have a account?
    <Link to="/login">
    Login
    </Link>
    </Text>
</FormControl>
  )
}

export default Register