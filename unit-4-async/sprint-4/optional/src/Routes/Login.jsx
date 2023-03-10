import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


function Login() {

  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
  

  const {loginUser,authState}=React.useContext(AuthContext)

const navigate = useNavigate();

const loginStatus=(e)=>{
  e.preventDefault();
  
  fetch(`https://reqres.in/api/login`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})
  })
  .then((res)=>res.json())
  .then((res)=>{
    console.log(res.token)
    if(res.token)
    {
      loginUser(res.token)
     navigate("/dashboard")
    }
   
  })
  .catch((err)=>{
    console.log(err)
  })
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={loginStatus}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
