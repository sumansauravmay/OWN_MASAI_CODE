//enter code here
// Avatar should accept caption and image Url as props
// do default export

const style={
    borderRadius:"50%",
   
}

function Avatar(props){
const {caption,image}=props

return (
    <>
<img style={style} src={image} alt={caption}/>
<h2>{caption}</h2>
    </>
)
}
export default Avatar;

