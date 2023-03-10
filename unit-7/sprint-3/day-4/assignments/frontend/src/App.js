import Navbar from './navbar/navbar';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Productpost from './Product/Productpost';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/data/newprod" element={<Productpost/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
