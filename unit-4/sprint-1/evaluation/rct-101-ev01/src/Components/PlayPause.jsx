function PlayPause(prop){
  const {text,btnpause,onClick}=prop;

  return (
    <>
<h1>{text}</h1>
<button onClick={onClick}>{btnpause}</button>
    </>
  )
}
export default PlayPause;