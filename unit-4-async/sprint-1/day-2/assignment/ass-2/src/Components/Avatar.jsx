import React from "react";

let avatar={
  width:"200px",
  color:"red",
  borderRadius:"500px"
}

function Avatar(){
  return (
    <div>
<img style={avatar} src="https://avatars.githubusercontent.com/u/101393663?v=4" alt="suman"/>
    </div>
  )
}
export default Avatar;