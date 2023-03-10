import logo from './logo.svg';
import './App.css';
import React from 'react';

const initState={
  email:"",
  password:""
}

function App() {
  const [data,setData]=React.useState(initState)
   const [user,setUser]=React.useState([])

 const {email,password}=data

const handleChange=(e)=>{
  e.preventDefault()
  const {name,value}=e.target;
  // console.log(value)
  // console.log(value)
  setData({
    ...data,
   [name]:value
  })
}
const handleSubmit=(e)=>{
  e.preventDefault()
  // console.log(data)
  setUser([...user,data])
  console.log(user)
}

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
    <div>
    <label> Email :
    <input type="email" placeholder="Enter Email"
     name="email"
      value={email}
     onChange={handleChange} />
    </label>
    </div>
     
    <div>
    <label> Password : 
    <input type="password" 
    name="password" placeholder="Enter Password"
     value={password} 
     onChange={handleChange} />
    </label>
    </div>

    <div>
    <label>
    <input type="submit" value="Add" />
    </label>
    </div>
    </form>
    
    
    </div>
  );
}

export default App;
