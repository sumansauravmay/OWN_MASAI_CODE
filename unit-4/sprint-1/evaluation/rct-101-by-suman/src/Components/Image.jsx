export default function Image(props){
  const {src,alt,title,height,width}=props;



  return (
<div>
<img src={src} alt={alt} height={height} width={width}/>
  <h2>{title}</h2>
  </div>
  )
}
