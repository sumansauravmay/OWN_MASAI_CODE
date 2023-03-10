import "./styles.css";
import Heading from "./Components/Heading";
import Image from "./Components/Image"
import PlayPause from "./Components/PlayPause"
export default function App() {
  return (
    <div className="App">
     <Heading/>
     <Image image="https://avatars.githubusercontent.com/u/101393663?v=4" alt="icon" height="200px" width="200px"  title="Suman Saurav"/>
    <PlayPause/>
    </div>
  );
};
