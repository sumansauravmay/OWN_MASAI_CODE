import {Routes,Route,Link} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Login from "./Components/Login"
import Dashboard from "./Pages/Dashboard";

import Setting from "./Pages/Setting";


function App() {
  return (
    <div className="App">
      <div style={{
        display:"flex",
        justifyContent:"space-around",
        width:"70%",
        margin:"auto"
      }}>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="dashboard">Dashboard</Link>
        <Link to="/setting">Setting</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
         <Route path="/setting" element={<Setting/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
