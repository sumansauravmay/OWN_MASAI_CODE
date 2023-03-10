import "./App.css";
import { Navbar } from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./components/Products/Product/Product";
import RequiredAuth from "./hoc/RequiredAuth";
import Products from "./components/Products/Products";

function App() {
  return <div className="App">
  <Navbar/>
  
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/cart" element={
<RequiredAuth>
<Product/>
</RequiredAuth>
}/>
<Route path="/products" element={
  <RequiredAuth>
<Products/>
</RequiredAuth>
}/>
  </Routes>
  </div>;
}

export default App;
