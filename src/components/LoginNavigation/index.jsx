// react libraries
import React from "react";
import { Link } from "react-router-dom";

// styles
import "./LoginNavigation.scss";

// components
import Logo from "../../assets/svg/Logo";

const LoginNavigation = () => {
  return (
    <div className="login-navigation">
      <div>
        <Logo />
      </div>
      <div className="login-navigation__title">Travelling made easy</div>
      <div className="login-navigation__subtitle">
        <Link className="login-navigation__link" to="/login">
          Login
        </Link>
        to access your account
      </div>
    </div>
  );
};

export default LoginNavigation;
