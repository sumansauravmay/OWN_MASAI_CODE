import React from "react";

function App() {
  const [count,setCount]=React.useState(0);
  const [player,setPlayer]=React.useState(false);
  
 


const addSomething=(x)=>{
  setCount((prev)=>prev+x)

setPlayer(!player)

  

}


const handleReset=()=>{
  setCount(0);
  setPlayer(false)
  
}


  return (
    <div className="App">
<h1>Welcome to Reach Ten Mini-Game</h1>
      {/* Display Player Turn here */}
      <span data-testid="turn-container">{count<=9?(player?"Player 2":"Player 1"):(player?"Player 1":"Player 2")}</span>

      <br/>
      <br/>
      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button data-testid="add-one-btn" disabled={count===10} onClick={()=>addSomething(1)}>+1</button>
        <button data-testid="add-two-btn" disabled={count===9 || count===10} onClick={()=>addSomething(2)}>+2</button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{count}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">{count===10?(player?"Player 1":"Player 2"):" Still To Be Decided"}</span>
<br/>
<br/>
      {/* Reset the Game with this button */}
      <button data-testid="reset-btn" onClick={handleReset}>Reset Game</button>
    </div>
  );
}

export default App;
