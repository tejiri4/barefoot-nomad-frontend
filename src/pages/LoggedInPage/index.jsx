// react libraries
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// styles
import "./LoggedInPage.scss";

// components
import SideNav from "../../components/SideNav";
import DashboardHeader from "../../components/DashboardHeader";
import Dashboard from "../Dashboard/index";

// fixtures
import dashboardLinks from "../../components/SideNav/fixtures";

const LoggedInPage = ({ history }) => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [pageName, setPageName] = useState("Dashboard");
  const [currentPath, setCurrentPath] = useState("/dashboard");

  useEffect(() => {
    const name = history.location.pathname.split("/")[2];

    setCurrentPath(history.location.pathname);

    setPageName(
      name ? `${name.charAt(0).toUpperCase()}${name.slice(1)}` : "Dashboard"
    );
  }, [currentPath, history.location.pathname]);

  const handleShowSideNav = () => setShowSideNav(!showSideNav);

  const handleNameChange = name => setPageName(name);

  const renderRedirect = () => {
    let isPathValid = false;
    dashboardLinks.forEach(({ path }) => {
      if (path.includes(history.location.pathname)) {
        isPathValid = true;
      }
    });
    if (!isPathValid) {
      history.push("/404");
    }
  };

  return (
    <>
      <div className="logged-in">
        {renderRedirect()}
        <SideNav
          showSideNav={showSideNav}
          handleShowSideNav={handleShowSideNav}
          handleNameChange={handleNameChange}
        />
        <div className="logged-in__content">
          <DashboardHeader
            showSideNav={showSideNav}
            handleShowSideNav={handleShowSideNav}
            pageName={pageName}
          />
          <div className="logged-in__dashboard">
            {currentPath === "/dashboard" && <Dashboard />}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(LoggedInPage);
