import "./styles.css";
import React from "react";

export default function App() {
  const useVid = React.useRef(null);

  const handleStart = () => {
    useVid.current.play();
  };

  const handleStop = () => {
    useVid.current.pause();
  };

  return (
    <div className="App">
      <video
        height="200px"
        ref={useVid}
        controls
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
