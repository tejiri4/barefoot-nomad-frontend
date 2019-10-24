// react libraries
import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from './LogoIcon';
import { FiLogIn } from "react-icons/fi";

// styles
import "./Header.scss";

export default function index() {
  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <div className="header__logo">
            <LogoIcon width={30} />
            <span>Barefoot Nomad</span>
          </div>
        </Link>
        <div className="header__login">
          <span className="icon">
            <FiLogIn />
          </span>
          <Link className="home__link" to="/login">
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
