import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Product } from "./components/Products/Product";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return <div className="App">{/* code here */}
  <Navbar/>
  <Routes>
    <Route path="/" element={<RequiredAuth><Home/></RequiredAuth>}></Route>
    <Route path="/products" element={<RequiredAuth><Products/></RequiredAuth>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/cartItems" element={<RequiredAuth><Product/></RequiredAuth>}></Route>

  </Routes>
  
  </div>;
}

export default App;
