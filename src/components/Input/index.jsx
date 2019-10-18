// react libraries
import React from "react";

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

export default Input;
