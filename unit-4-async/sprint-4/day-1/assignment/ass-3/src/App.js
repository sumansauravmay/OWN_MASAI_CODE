import "./styles.css";
import React, { useEffect } from "react";

export default function App() {
  const [data,setData]=React.useState([])
  const [user,setUser]=React.useState("")

useEffect(()=>{
fetch(`https://api.github.com/users`)
.then((res)=>res.json())
.then((res)=>{
  // console.log(res)
  setData(res)
})
},[])

const handleSearch=()=>{
  fetch(`https://api.github.com/users`)
  .then((res)=>res.json())
  .then((res)=>{
    console.log(res)
    setData(res)
  })
}

  return (
    <div className="App">
      <input type="text" value={user}
      onChange={(e)=>setUser(e.target.value)} placeholder="search user"/>
      <button onClick={handleSearch}>Search</button>

{
data.map((item)=>(
  <div key={item.id}>{item.login}</div>
))
}

    </div>
  );
}
