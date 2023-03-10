// import { Component } from "react";
import Heading from "./Components/Heading";
import "./styles.css";
import Image from "./Components/Image";
import PlayPause from "./Components/PlayPause"
export default function App() {
  return (
    <div className="App">
      <Heading/>
      <Image
        src="https://yt3.ggpht.com/FnxgPA9Tcf85IuJFPA4vDoSB0jcqgEV8L34cGRaK9YQnrZa5VeZvTp6pHgcyBjITKJWX0lAJqQ=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="suman"
        height="200px"
        width="200px"
      />
      <PlayPause/>
    </div>
  );
};
