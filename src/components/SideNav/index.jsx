// react libraries
import React from "react";
import { NavLink } from "react-router-dom";

// external libraries
import PropTypes from "prop-types";

// styles
import "./SideNav.scss";

// fixtures
import dashboardLinks from "./fixtures";

const SideNav = ({ showSideNav, handleNameChange }) => {
  return (
    <div
      className={`side-nav side-nav__${
        !showSideNav ? "translate-left" : "translate-right"
        }`}
    >
      <div className="side-nav__logo">
        <img
          src="https://res.cloudinary.com/store-manager/image/upload/v1571208724/barefoot-nomad/logo.svg"
          alt="logo"
        />
      </div>
      <div className="side-nav__links">
        {dashboardLinks.map(({ path, name, icon }, index) => (
          <NavLink
            key={index}
            exact
            to={path}
            activeClassName="active"
            onClick={() => handleNameChange(name)}
          >
            <span className="icon">{icon}</span>
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

SideNav.propTypes = {
  showSideNav: PropTypes.bool,
  handleNameChange: PropTypes.func
};

export default SideNav;
