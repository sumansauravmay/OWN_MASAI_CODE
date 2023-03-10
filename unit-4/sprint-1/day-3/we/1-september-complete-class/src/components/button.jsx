function Button(properties) {
  const { text, onClick } = properties;

  // return <button>{text}</button>;
  // const handleClick=()=>{
  //   alert("Button {text} clicked me!")
  // };
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
