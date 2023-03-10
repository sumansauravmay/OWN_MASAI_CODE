import "./styles.css";
import React from "react";

// I want to use useSate which comes from react

export default function App() {
  const [count, setCount] = React.useState(0);
  // count=current value
  // setcount=updetefunc(function which update the count)==dispatach function
  // nobody should update count except setcount
  console.log(count);
  return (
    // we entering jsx line
    <div className="App">
      <h1>count is {count}</h1>
      <button disabled={count === 10} onClick={() => setCount(count + 1)}>
        Inc
      </button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        Dec
      </button>
      <button disabled={false} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
