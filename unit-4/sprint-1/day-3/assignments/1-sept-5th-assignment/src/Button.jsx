function Button(properties) {
  const { text, onClick } = properties;
  return <button onClick={onClick}>{text}</button>;
}
export default Button;
