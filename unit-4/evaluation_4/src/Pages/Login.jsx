import React,{useState,useContext} from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import {login} from "../Context/AuthContext/action";
import axios from "axios";
import {useNavigate} from "react-router-dom";


// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
  const navigate=useNavigate()
   
  const [userData,setUserData]=useState({
    email:"",
    password:""
  })
  const {state,dispatch}=useContext(AuthContext)
 
  const onSubmit=(e)=>{
    e.preventDefault()
    
    axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => res.data)
     .then((res) => {
       if (res.token) {
        dispatch(login(res.token));
        navigate("/")
       
         }
    });
   
  }



  const onChangeData = (e) => {
    const { name, value } = e.target;
    setUserData({ 
      ...userData,
       [name]: value });
    
  };

  
  return <div style={{margin:"100px"}}>
    <form onSubmit={onSubmit}>
        <label htmlFor="email">Email Address : </label>
        <input style={{border:"1px solid black",marginLeft:"10px"}}
          id="email"
          name="email"
          type="email"
          onChange={onChangeData}
          value={userData.email}
        />
        <br />
        <br />
        <label htmlFor="email">Password : </label>
        <input style={{border:"1px solid black",marginLeft:"10px"}}
          id="password"
          name="password"
          type="password"
          onChange={onChangeData}
          value={userData.password}
        />
        <br />
        <br />

        <button style={{border:"1px solid red",background:"black",color:"white",marginLeft:"100px"}}
        type="submit"
        disabled={false}
        >Submit</button>
      </form>
     
  </div>;
};

export default Login;


