import "./styles.css";
import Button from "./components/Button";
import Avatar from "./components/Avatar";
export default function App() {
  return (
    <div className="App">
      <Button text="click me"></Button>
      <Avatar
        src="https://avatars.githubusercontent.com/u/101393663?v=4"
        name="Suman Saurav"
        rounded={true}
      />
    </div>
  );
}
