import { Routes,Route } from 'react-router-dom';
import './App.css';
import Register from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/posts" element={<Posts/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
