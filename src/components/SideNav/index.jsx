// react libraries
import React from "react";
import { NavLink, withRouter } from "react-router-dom";

// external libraries
import PropTypes from "prop-types";

// styles
import "./SideNav.scss";

// fixtures
import dashboardLinks from "./fixtures";

const SideNav = ({ showSideNav, handleNameChange, history }) => {
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
        {dashboardLinks(history).map(({ path, name, icon, exact }, index) => (
          <NavLink
            exact={exact}
            key={index}
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

export default withRouter(SideNav);
