// react libraries
import React from "react";

// external libraries
import PropTypes from "prop-types";

// styles
import "./LoggedInHeader.scss";

const LoggedInHeader = ({ showSideNav, handleShowSideNav, pageName }) => {
  return (
    <div className="logged-in-header">
      <div className="logged-in-header__title">{pageName}</div>
      <div className="logged-in-header__content">
        <div className="logged-in-header__content__search">
          <img
            src="https://res.cloudinary.com/store-manager/image/upload/v1571510758/barefoot-nomad/magnifying-glass.svg"
            alt="search"
          />
        </div>
        <div className="logged-in-header__content__notification">
          <div className="logged-in-header__content__notification-icon">
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1571531527/barefoot-nomad/notification.svg"
              alt="notification"
            />
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
  pageName: PropTypes.string
};

export default LoggedInHeader;
