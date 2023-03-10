import React,{useReducer} from "react"
import './App.css';

const initialState={
  value:0
}
const reducer=(state,action)=>{
  switch(action.type)
  {
    case "INCREMENT_AMOUNT":
      return {
        ...state,
        value:state.value + action.payload
      }
case "DECREMENT_AMOUNT":
  return {
    ...state,
    value:state.value - action.payload
  }
      default:
        return state;
  }
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
     <h1>Amount : {state.value}</h1>
     <button onClick={()=>dispatch({type:"INCREMENT_AMOUNT",payload:500})}>Increament Amount</button>
     <button onClick={()=>dispatch({type:"DECREMENT_AMOUNT",payload:500})}>Decreament Amount</button>
    </div>
  );
}

export default App;
