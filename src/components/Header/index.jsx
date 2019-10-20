// react libraries
import React from "react";
import { Link } from "react-router-dom";

// styles
import "./Header.scss";

export default function index() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://res.cloudinary.com/store-manager/image/upload/v1571208724/barefoot-nomad/logo.svg"
          alt="logo"
        />
        <span>Barefoot Nomad</span>
      </div>
      <div className="header__login">
        <img
          src="https://res.cloudinary.com/store-manager/image/upload/v1571209634/barefoot-nomad/Login_Icon.svg"
          alt="login"
        />
        <Link className="home__link" to="/login">
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
}
