function Image(prop){
  const {title,src}=prop;
  const style={
    width:"400px",
    height:"300px"
   
  }
  return (
    <div>
    <img src={src} alt="img" style={style}/>
    <h2>{title}</h2>
    </div>
  )
}
export default Image;