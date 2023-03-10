import React from "react";
import { Link,Navigate } from "react-router-dom";
import { AppContest } from "../Context/AppContext";



function Login() {
const [data,setData]=React.useState({})

const {loginAuth,isAuth}=React.useContext(AppContest)

const loginStatus=(e)=>{

e.preventDefault();
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
    loginAuth(res.token)
  }
  
})
}

if(isAuth)
{
 return <Navigate to="/dashboard"/>

}

const handleChange=(e)=>{
  const {type,value}=e.target;

  setData({
    ...data,[type]:value
  })
}

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={loginStatus}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" 
            value={data.email}
            onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={data.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
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
