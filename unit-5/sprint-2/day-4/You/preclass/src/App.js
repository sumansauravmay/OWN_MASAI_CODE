
import './App.css';
import {Routes,Route} from "react-router-dom";
import TodoApp from './pages/TodoApp';
import CounterApp from './pages/CounterApp';
import Navbar from "./components/Navbar";
import ThemeApp from "./pages/ThemeApp";

function App() {
  return (
    <div className="App">

<ThemeApp/>

    <Navbar/>
    <Routes>
<Route path="/" element={ <CounterApp/>}></Route>
<Route path="/todo" element={ <TodoApp/>}></Route>
    </Routes>
    
     
    </div>
  );
}

export default App;
