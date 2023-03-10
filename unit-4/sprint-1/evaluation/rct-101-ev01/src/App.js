import "./styles.css";
import Heading from "./Components/Heading";
import Image from "./Components/Image"
import PlayPause from "./Components/PlayPause"

export default function App() {
  
  return (
    <div className="App">
      <Heading text="Masai School"/>
      <Image src="https://avatars.githubusercontent.com/u/101393663?v=4" title="Suman Saurav"/>
  <PlayPause onClick={(text)=>alert("The state is playing")} text="The state is paused" btnpause="pause"/>
  
  </div>
  );
}
