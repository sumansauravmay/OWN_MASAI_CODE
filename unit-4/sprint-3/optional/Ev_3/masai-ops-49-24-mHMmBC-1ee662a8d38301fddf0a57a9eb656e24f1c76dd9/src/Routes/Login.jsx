import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { AppContest } from "../Context/AppContext";



function Login() {
// const [data,setData]=React.useState({email:"", password:""})
const [email,setEmail]=React.useState("");
const [password,setPassword]=React.useState("");
const [loading,setLoading]=React.useState(false);
const {loginUser,authState}=React.useContext(AppContest)

const navigate = useNavigate();

const loginStatus=(e)=>{
e.preventDefault();
setLoading(true)
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



// const handleChange=(e)=>{
//   const {name,value}=e.target;

//   setData({
//     ...data,[name]:value

//   })
// }

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={loginStatus}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" 
           value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
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
          <button data-testid="form-submit" type="submit" disabled={loading}>
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
