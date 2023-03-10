import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {increment,decrement} from "./redux/action"

function App() {
  const count=useSelector((store)=>store.count)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>dispatch(decrement(10))}>-</button>
      <button onClick={()=>dispatch(increment(10))}>+</button>
    </div>
  );
}

export default App;
