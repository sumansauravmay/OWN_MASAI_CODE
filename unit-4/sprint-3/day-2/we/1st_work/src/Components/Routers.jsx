import { Routes,Route } from "react-router-dom";

export default function DisplayUI(){
    return (
        <Routes>
        <Route path="/" element={<h1>I am Home</h1>}></Route>
        <Route path="/element" element={<h1>I am Element</h1>}></Route>
        <Route path="/about" element={<h1>I am About</h1>}></Route>
        <Route path="/user" element={<h1>I am User</h1>}></Route>
      </Routes>
    )
}