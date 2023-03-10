import './App.css';
import {useContext, useState} from "react";
import {AppContext} from "./Components/AppContextProvider";


const style={
  darkOne:
  {
fontSize:"25px",
padding:"20px",
color:"red",
background:"white"

  },
  lightOne:
  {
    fontSize:"25px",
    padding:"20px",
    color:"white",
    background:"black"
  }
};


function App() {
  const {theme,toggleTheme}=useContext(AppContext);
  const [name]=useState("Suman Saurav")

 
 
  return (
    <div className="App" style={theme==="dark"?style.darkOne:style.lightOne }>
    <div >
    <h1>I am {name}</h1>
      <p>this is {theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
    </div>
  );
}

export default App;
