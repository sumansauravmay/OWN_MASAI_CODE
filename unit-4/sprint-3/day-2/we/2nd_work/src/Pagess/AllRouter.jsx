import About from "./About";
import Element from "./Element";
import Home from "./Home";
import User from "./User";
import { Routes,Route } from "react-router-dom";
import Suman from "./Suman";


function AllRouter(){
    return (
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Element" element={<Element/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/users/:id" element={<Suman/>}></Route>
      </Routes>
    )
}
export default AllRouter;