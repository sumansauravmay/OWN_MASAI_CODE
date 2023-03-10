import React from "react";

const image={
   padding:"10px",
   width:"200px"
}

function Avatar(props){
  const {src,name,rounded}=props;


  if(rounded)
  {
image.borderRadius="200px";
  }
  return (
    <>
<img style={image} src={src} alt="img" />
<h1>{name}</h1>
    </>
  )
}
export default Avatar;