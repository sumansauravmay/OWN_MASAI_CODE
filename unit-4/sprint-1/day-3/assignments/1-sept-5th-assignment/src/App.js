import "./styles.css";
import Button from "./Button";

export default function App() {
  return (
    <div className="App">
      <Button onClick={() => alert("You clicked Masai!")} text="Masai"></Button>
    </div>
  );
}
