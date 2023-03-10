import React from "react";
import "./index.css";


const newDate=new Date();
let currdate=newDate.getHours();
let bag="";
let cssStyle={}

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


function Mini(){
    return <h1>Hi sir,<span style={cssStyle}>{`${bag}`}</span></h1>
}
export default Mini;