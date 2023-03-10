// Write Code here
// do a default export
import React from "react";

export default function Image(props){
    const {src,alt,height,title,width}=props;

    return (
        <>
            <h2>{title}</h2>
            <img src={src} alt={alt} height={height} width={width}/>
        </>
       
    )
}
