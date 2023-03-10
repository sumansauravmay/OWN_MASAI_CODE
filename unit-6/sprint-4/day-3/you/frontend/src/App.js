
import './App.css';
import {Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Createnotes from './pages/Createnote';
import Allnotes from './pages/Allnotes';

function App() {
  return (
    <div className="App">
      <h1>Connect to the Backend and Frontend</h1>
    <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/create" element={<Createnotes/>}></Route>
      <Route path="/allnotes" element={<Allnotes/>}></Route>
   </Routes>
    </div>
  );
}

export default App;





