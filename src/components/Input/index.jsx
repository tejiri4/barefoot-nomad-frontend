// react libraries
import React from "react";

// external libraries
import PropTypes from 'prop-types'; 

// styles
import "./Input.scss";

const Input = ({ type, placeholder, style, required, handleOnChange }) => {
  return (
      <input
        type={type}
        placeholder={placeholder}
        className="input"
        style={style}
        required={required}
        onChange={handleOnChange}
      />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  required: PropTypes.bool,
  handleOnChange: PropTypes.func
}

export default Input;
