// react libraries
import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";

// external libraries
import PropTypes from "prop-types";

// styles
import "./LoggedInHeader.scss";

const LoggedInHeader = ({ showSideNav, handleShowSideNav, handleShowNotification, pageName }) => {
  return (
    <div className="logged-in-header">
      <div className="logged-in-header__title">{pageName}</div>
      <div className="logged-in-header__content">
        <div className="logged-in-header__content__search">
          <FiSearch />
        </div>
        <div className="logged-in-header__content__notification" onClick={handleShowNotification}>
          <div className="logged-in-header__content__notification-icon">
            <FiBell />
          </div>
          <div className="logged-in-header__content__notification-count">
            <p>12</p>
          </div>
        </div>
        <div className="logged-in-header__content__profile_photo">
          <img
            src="https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg"
            alt="profile"
          />
        </div>
      </div>
      <div className="logged-in-header__hamburger" onClick={handleShowSideNav}>
        {showSideNav ? (
          <img
            src="https://res.cloudinary.com/store-manager/image/upload/v1571566121/barefoot-nomad/close-side-nav.svg"
            alt="close"
          />
        ) : (
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1571556822/barefoot-nomad/menu.svg"
              alt="hamburger"
            />
          )}
      </div>
    </div>
  );
};

LoggedInHeader.propTypes = {
  showSideNav: PropTypes.bool,
  handleShowSideNav: PropTypes.func,
  pageName: PropTypes.string,
  handleShowNotification: PropTypes.func,
  showNotification: PropTypes.bool
};

export default LoggedInHeader;
