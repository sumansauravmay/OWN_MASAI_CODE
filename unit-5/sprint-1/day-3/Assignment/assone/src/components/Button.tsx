import React from 'react'

type ButtonProps={
    color:"red"|"blue"|"green";
children:React.ReactNode;
handleClick?:()=>void;
}

const Button = (props:ButtonProps) => {
    // const {color,children,handleClick}=props
    //if we use destructure props(line no 10), we can remove props(line no 16)

  return (
    <div>
      <button style={{background:props.color}}
       onClick={()=>props.handleClick && props.handleClick()}>{props.children}</button>
    </div>
  )
}

export default Button
