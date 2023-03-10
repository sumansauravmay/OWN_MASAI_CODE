import "./styles.css";
import React, { useContext } from "react";
import { AppContext } from "./Context/AppContextProvider";
import LoginHeader from "./Context/LoginHeader";

export default function App() {
  const { authState } = useContext(AppContext);

  return (
    <div className="App">
      <h1>Context</h1>
      <LoginHeader />
      <h2>{authState.token}</h2>
    </div>
  );
}
