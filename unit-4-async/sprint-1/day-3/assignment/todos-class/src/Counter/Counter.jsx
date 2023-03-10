import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Counter : {count}</h1>
      <button disabled={count === 10} onClick={() => setCount(count + 1)}>
        Inc
      </button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        Dec
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
export default Counter;
