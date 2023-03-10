function Pagination({current,onChange,total=10}) {
  return (
  <div data-testid = "page-container">
  <button disabled={current===1} onClick={()=>onChange(-1)}>PREV</button>
  <button style={{border:"1px solid red",focus:"auto"}}>{current}</button>
  <button onClick={()=>onChange(1)}>NEXT</button>
<br/>
  <p>TotalPages:{total}</p>
  </div>
 
  );
}

export default Pagination;
