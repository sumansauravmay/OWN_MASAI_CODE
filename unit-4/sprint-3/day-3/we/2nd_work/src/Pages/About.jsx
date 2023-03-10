import React from "react";
import { Link, } from "react-router-dom";

function About() {
  return (
    <>
<h1>About Page</h1>
<Link to="/">
        <button>go back to Home</button>
      </Link>
    </>
    
  )
 
}

export default About;

