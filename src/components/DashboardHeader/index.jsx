// react libraries
import React from "react";

// external libraries
import PropTypes from "prop-types";

// styles
import "./DashboardHeader.scss";

const DashboardHeader = ({ showSideNav, handleShowSideNav, pageName }) => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header__title">{pageName}</div>
      <div className="dashboard-header__content">
        <div className="dashboard-header__content__search">
          <img
            src="https://res.cloudinary.com/store-manager/image/upload/v1571510758/barefoot-nomad/magnifying-glass.svg"
            alt="search"
          />
        </div>
        <div className="dashboard-header__content__notification">
          <div className="dashboard-header__content__notification-icon">
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1571531527/barefoot-nomad/notification.svg"
              alt="notification"
            />
          </div>
          <div className="dashboard-header__content__notification-count">
            <p>12</p>
          </div>
        </div>
        <div className="dashboard-header__content__profile_photo">
          <img
            src="https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg"
            alt="profile"
          />
        </div>
      </div>
      <div className="dashboard-header__hamburger" onClick={handleShowSideNav}>
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

DashboardHeader.propTypes = {
  showSideNav: PropTypes.bool,
  handleShowSideNav: PropTypes.func,
  pageName: PropTypes.string
};

export default DashboardHeader;
