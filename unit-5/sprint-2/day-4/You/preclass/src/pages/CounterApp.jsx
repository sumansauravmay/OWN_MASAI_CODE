import React from "react";
import {useDispatch,useSelector} from "react-redux";
import { decrement,increment } from "../redux/counter/counter.actions";

const CounterApp=()=>{
    console.log(CounterApp)
    const dispatch=useDispatch();

const count=useSelector((state)=>state.counterManager.count);


return (
    <div>
        <h1>CounterApp : {count}</h1>
        <div>
<button onClick={()=>dispatch(decrement())}>-</button>
<button onClick={()=>dispatch(increment())}>+</button>
        </div>
    </div>
)


}
export default CounterApp;

