import  {useReducer, useState} from "react";
import {reducer} from "./CounterAction"
import {handledecrement,handleincrement,
  resetAction,increamentByValue,decreamentByValue} from "./CounterReduce";




function Counter(){
const [state,dispatch]=useReducer(reducer,{
  count: 0,
  isAuth: true,
  todos: []
});
const [inputValue,setInputValue]=useState("")
const [inputValue2,setInputValue2]=useState("")
  return (
    <>
  
  <h1>Counter : {state.count}</h1>
  <input type="number" value={inputValue} onChange={(e)=>
    setInputValue(Number(e.target.value))}/>

 <input type="number" value={inputValue2} onChange={(e)=>
    setInputValue2(Number(e.target.value))}/>

  <button onClick={()=>dispatch(handleincrement)}>Increament</button>
  <button onClick={()=>dispatch(handledecrement)}>Decreament</button>
  <button onClick={()=>dispatch(resetAction)}>Reset</button>
  
  <button onClick={()=>dispatch(increamentByValue(inputValue))}>Increament by value</button>
  <button onClick={()=>dispatch(decreamentByValue(inputValue2))}>Decreament by value</button>
    </>
  )
}
export default Counter;

