// react libraries
import React from "react";

// external libraries
import PropTypes from 'prop-types'; 

// styles
import "./Button.scss";

export const Button = ({ text, handleClick }) => {
  return (
    <div className="btn">
      <button className="btn__primary" type="submit" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export const GoogleButton = () => {
  return (
    <div className="btn">
      <button className="btn__google">
        <div>
          <img
            src="https://res.cloudinary.com/store-manager/image/upload/v1571293525/barefoot-nomad/Google_Icon.svg"
            alt="google"
          />
        </div>
        <div>Google</div>
      </button>
    </div>
  );
};

export const FacebookButton = () => {
  return (
    <div className="btn">
      <button className="btn__facebook">
        <img
          src="https://res.cloudinary.com/store-manager/image/upload/v1571293525/barefoot-nomad/facebook.svg"
          alt="facebook"
        />
        Facebook
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
}
