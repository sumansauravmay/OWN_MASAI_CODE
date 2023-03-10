import "./styles.css";
import React from "react";

export default function App() {
  const [data,setData]=React.useState("")
const inputRef=React.useRef(null)

const handleClick=()=>{
 inputRef.current.focus();
}

  return (
    <div className="App">
      <input type="text" 
      value={data} 
      onChange={(e)=>setData(e.target.value)}
      ref={inputRef}
       placeholder="Enter Name" />
      <br/>
      <br/>
  
        <div style={{display:'flex'}}>
       <div>Gender :</div>
        <div style={{display:"flex"}}>
        <p>Male</p>
        <input type="checkbox"/>
          </div>
     
          <div style={{display:"flex"}}>
        <p>Female</p>
        <input type="checkbox"/>
          </div>
        </div>
      
        <div style={{display:'flex'}}>
       <div>Role :</div>
        <div style={{display:"flex"}}>
        <p>software Developer</p>
        <input type="checkbox"/>
          </div>
     
          <div style={{display:"flex"}}>
        <p>Java Developer</p>
        <input type="checkbox"/>
          </div>
        </div>
       
        <div>
        Marital status :
      <input type="checkbox"/>
        </div>

<button onClick={handleClick}>Submit</button>

    </div>
  );
}
