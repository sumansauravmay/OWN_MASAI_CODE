import React from "react";
import { Link,Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [data,setData]=React.useState({email:"", password:""})
const [count,setCount]=React.useState(0)
  const {loginUser,isAuth,handleToken}=React.useContext(AuthContext)

  const loginStatus=(e)=>{

    e.preventDefault();
    setCount(count+1)
    return fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res.token)
      if(res.token)
      {
        loginUser()
        handleToken(res.token)
      }
      
    })
    }
    
    if(isAuth)
    {
     return <Navigate to="/dashboard"/>
    
    }

    const handleChange=(e)=>{
      const {name,value}=e.target;
    
      setData({
        ...data,[name]:value
        
      })
    }



  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={loginStatus} >
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email"
             name="email"
            value={data.email}
            onChange={handleChange}
             />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              value={data.password}
            onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled={count>0 ? true : false}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
