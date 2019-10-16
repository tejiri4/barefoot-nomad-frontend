// react libraries
import React from "react";

// styles
import "./Button.scss";

const Button = ({ text }) => {
  return (
    <div className="button">
      <button>{text}</button>
    </div>
  );
};

export default Button;
