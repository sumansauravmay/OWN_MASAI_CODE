import React from 'react';
import PropTypes from 'prop-types';
 


const Navbar = ({ 
    links,
    logo,
    color="white",
    backgroundColor="black",
    userImage="https://lh3.googleusercontent.com/ogw/AOh-ky2tScHzoVefBBzujx0dX5snq654dVrVawQyjwGD=s32-c-mo"
 }) => {
 
  return (
    <nav style={{
        color,
        backgroundColor:backgroundColor,
        paddingTop:"5px",
        paddingBottom:"5px"
    }}
    >
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
    }}>
    <div>
      <img src={logo} alt="logo" style={{width:"30px",borderRadius:"50px"}} />
      </div>
      {
        links.map((link)=>(
            <div key={link}>{link}</div>
        ))
      }

      <div>
      <img src={userImage} alt="user_pic" style={{width:"50px",borderRadius:"50px"}} />
      </div>

    </div>
      
      
    </nav>
  );
};

Navbar.propTypes = {
    links:PropTypes.arrayOf(PropTypes.string).isRequired,
    logo:PropTypes.string.isRequired,
    color:PropTypes.string,
    backgroundColor:PropTypes.string,
    userImage:PropTypes.string,
};

Navbar.defaultProps = {
  backgroundColor: "black",
  color:"white",
  userImage:"https://lh3.googleusercontent.com/ogw/AOh-ky2tScHzoVefBBzujx0dX5snq654dVrVawQyjwGD=s32-c-mo"
};

export default Navbar;