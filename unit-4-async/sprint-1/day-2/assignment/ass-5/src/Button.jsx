import React from "react";

function Button(props){
const {name}=props;
  return (
    <>
<button onClick={()=>alert(" You clicked Masai!")}>
{name}
</button>
    </>
  )
}
export default Button;