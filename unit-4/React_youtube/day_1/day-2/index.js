import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let bag="";
const cssStyle={

};
const divsty={
  width:"500px",
  height:"100px",
  border:"1px solid green",
  backgroundColor:"white",
  borderRadius:"20px"
}
// const timing=new Date(2022,8,6,22);
// const timing=new Date(year,month,day,hours);

let currdate=new Date();
currdate=currdate.getHours();
if(currdate>1 && currdate<12)
{
  bag="Good Morning";
  cssStyle.color="green";

}
else if(currdate>12 && currdate<16)
{
  bag="Good Afternoon";
  cssStyle.color="orange";
}
if(currdate>16 && currdate<19)
{
  currdate="Good evenning";
  cssStyle.color="red";
}
if(currdate>19 && currdate<24)
{
  bag="Good night";
  cssStyle.color="blue";
}



ReactDOM.render(
  <>
  <div style={divsty}>
  <h1>Hello sir,<span style={cssStyle}>{`${bag}`}</span></h1>
  </div>
 
  </>,
 document.querySelector("#root")
)

