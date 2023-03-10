import { useRef } from "react";
import './App.css';

function App() {

  const inputRef = useRef(null);
  const addTodo = () => {
    inputRef.current.focus();
  };
  console.log(inputRef);

  return (
    <div className="App">
      <input placeholder="enter sth" ref={inputRef} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default App;
