function Avatar(properties) {
  const { src, name, rounded } = properties;
  const style = {
    width: "300px",
    marginTop: "50px"
  };
  if (rounded) {
    style.borderRadius = "1000px";
  }

  return (
    <div>
      <img src={src} alt="black2" style={style} />
      <h1>{name}</h1>
    </div>
  );
}
export default Avatar;
