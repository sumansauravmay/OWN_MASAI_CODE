import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


const name="Suman Saurav";
const currDate=new Date().toLocaleDateString()
const currTime=new Date().toLocaleTimeString()
const imagewomen1="https://masai-website-images.s3.ap-south-1.amazonaws.com/Sharda_Balaji_Novojuris_2a206f2f88.jpg";
const imagewomen2="https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg";
const imagewomen3="https://masai-website-images.s3.ap-south-1.amazonaws.com/Amit_Kumar_Agarwal_Nobroker_a8a279ad91.jpg";
const imagewomen4="https://masai-website-images.s3.ap-south-1.amazonaws.com/Anurag_Jain_Kredx_b6ed6a31c6.jpg";
const links="https://www.ratatype.com/u4457702/";
const imagewomen5="https://alumni.masaischool.com/storage/titans/Archana.png";

ReactDOM.render(
  <>
    <h1 className="heading">My name is {`${name}`}</h1>
    <p>current date is = {`${currDate}`}</p>
    <p>current date is = {`${currTime}`}</p>
<img src={imagewomen1} alt="Images"/>
<img src={imagewomen2} alt="Images"/>
<img src={imagewomen3} alt="Images"/>
<img src={imagewomen4} alt="Images"/>
<a href={links} target="_suman">
<img src={imagewomen5} alt="Images"/>
</a>
  </>,
  document.querySelector("#root")
)