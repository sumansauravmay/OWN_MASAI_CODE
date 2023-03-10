import "./styles.css";
import Avatar from "./Avatar";

export default function App() {
  return (
    <div className="App">
      <Avatar rounded={true} src="https://avatars.githubusercontent.com/u/101393663?v=4"
      name="suman Saurav"
      />
      <button>click me</button>
    </div>
  );
}
