import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
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
export default Counter;
