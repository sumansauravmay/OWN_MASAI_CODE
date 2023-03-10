import React from "react";
import {AppContext} from "../context/AuthContextProvider"

function Home(){
const {toggleAuth}=React.useContext(AppContext)
    return (
        <>
            <h2>Home</h2>
            <button onClick={toggleAuth}>Log Out</button>
        </>
    )
}
export default Home;