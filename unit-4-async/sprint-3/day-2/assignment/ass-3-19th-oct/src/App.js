import "./styles.css";
import React, { useContext } from "react";

import { AppContext } from "./Context/AppContextProvider";

const style = {
  light: {
    color: "black",
    background: "#cecece",
    padding: "50px"
  },
  dark: {
    color: "white",
    background: "black",
    padding: "50px"
  }
};

export default function App() {
  const { theme, toggleTheme } = useContext(AppContext);





  return (
    <div className="App" style={theme === "dark" ? style.dark : style.light}>
      <div>
        <h1>Theme is {theme}</h1>
        <h3>Start editing to see more magic happen!</h3>
<img src="https://avatars.githubusercontent.com/u/101393663?v=4" alt="suman"/>

<br/>
        <button onClick={toggleTheme}
         style={{width:"20px",height:"20px",borderRadius:"10px",margin:"50px"}}
         ></button>
      </div>
    </div>
  );
}
