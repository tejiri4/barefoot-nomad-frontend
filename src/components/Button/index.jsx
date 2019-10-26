// react libraries
import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

// external libraries
import PropTypes from "prop-types";

// styles
import "./Button.scss";

export const Button = ({ text, handleClick }) => (
  <div className="btn">
    <button className="btn__primary" type="submit" onClick={handleClick}>
      {text}
    </button>
  </div>
);

export const GoogleButton = () => (
  <div className="btn">
    <button className="btn__social google">
      <div className="icon">
        <FaGoogle />
      </div>
      <span className="text">Google</span>
    </button>
  </div>
);

export const FacebookButton = () => (
  <div className="btn">
    <button className="btn__social facebook">
      <div className="icon">
        <FaFacebook />
      </div>
      <span className="text">Facebook</span>
    </button>
  </div>
);

export const BasicButton = ({ text, handleClick }) => (
  <div className="btn">
    <button className="btn__basic" onClick={handleClick}>
      {text}
    </button>
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
};
