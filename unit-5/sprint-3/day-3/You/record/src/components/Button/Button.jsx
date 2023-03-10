import React from 'react';
import PropTypes from 'prop-types';
 

const Button = ({
    label,
    backgroundColor="teal",
    size="medium",
    onClick,
 }) => {
  const paddingValue = 
  size=="medium" ? '10px' : size=="large"?"12px":"6px" ;
  return (
    <button
      type="button"
     
      style={{
        backgroundColor, 
        padding:paddingValue,
        border:"none",
        borderRadius:"5px",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
 label:PropTypes.string.isRequired,
 backgroundColor:PropTypes.string,
 size:PropTypes.oneOf(["small","medium","large"])
};

Button.defaultProps = {
  backgroundColor: "teal",
 
  size: 'medium',
  onClick: undefined,
};
export default Button;