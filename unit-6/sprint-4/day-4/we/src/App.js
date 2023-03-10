
// import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background:"grey",borderRadius:"50px",padding:"10px", display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",borderRadius:"50px",padding:"10px"}}
      onClick={onClick}
    />
  );
}

const App = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div>
       <Slider {...settings} style={{width:"50%",margin:"auto",marginLeft:"100px"}}>
       
       <div>
            <h3 style={{marginLeft:"50px"}}>1</h3>
          </div>
          <div>
            <h3 style={{marginLeft:"50px"}}>2</h3>
          </div>
          <div>
            <h3 style={{marginLeft:"50px"}}>3</h3>
          </div>
          <div>
            <h3 style={{marginLeft:"50px"}}>4</h3>
          </div>
          <div>
            <h3 style={{marginLeft:"50px"}}>5</h3>
          </div>
          <div>
            <h3 style={{marginLeft:"50px"}}>6</h3>
          </div>
     
         
        </Slider>
    </div>
  )
}

export default App
