// react libraries
import React from "react";

// styles
import './LoginNavigation.scss';

const LoginNavigation = () => {
  return (
    <div className="login-navigation">
      <img
        src="https://res.cloudinary.com/store-manager/image/upload/v1571289814/barefoot-nomad/Globe.svg"
        alt="globe"
      />
      <h1>Travelling made easy</h1>
      <small>Login to access your account</small>
    </div>
  );
};

export default LoginNavigation;
