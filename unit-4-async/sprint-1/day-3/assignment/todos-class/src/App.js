import "./styles.css";
import Counter from "./Counter/Counter";
import Todo from "./Todo/Todo";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <hr />
      <Todo />
    </div>
  );
}
