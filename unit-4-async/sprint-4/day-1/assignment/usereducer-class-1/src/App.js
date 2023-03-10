import "./styles.css";
import { useReducer } from "react";
import reducer, { initialState } from "./reducer/reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //  console.log(state);
  return (
    <div className="App">
      <h1>count : {state.amount}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT_AMOUNT", amount: 500 })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_AMOUNT", amount: 500 })}>
        Reduce
      </button>
    </div>
  );
}
