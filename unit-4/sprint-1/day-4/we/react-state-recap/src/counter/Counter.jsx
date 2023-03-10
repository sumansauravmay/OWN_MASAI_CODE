import React from "react";

export default function Counter() {
  let [counter, setCounter] = React.useState(5);

  const handleElement = (value) => {
    setCounter(counter + value);
  };

  return (
    <>
      <h1>counter : {counter}</h1>
      <button disabled={counter === 10} onClick={() => handleElement(1)}>
        Add
      </button>

      <button disabled={counter === 0} onClick={() => handleElement(-1)}>
        Reduce
      </button>
    </>
  );
}
