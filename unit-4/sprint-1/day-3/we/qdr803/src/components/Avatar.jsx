function Avatar(properties) {
  const { src, name, rounded } = properties;

  const style = {
    width: "300px",
    marginTop: "50px"
  };
  if (rounded) {
    style.borderRadius = "500px";
  }
  return (
    <div>
      <img src={src} alt="a" style={style} />
      <h1>{name}</h1>
    </div>
  );
}
export default Avatar;
