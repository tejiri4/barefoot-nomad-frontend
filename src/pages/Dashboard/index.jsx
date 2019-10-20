// react libraries
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// styles
import "./Dashboard.scss";

// components
import SideNav from "../../components/SideNav";
import DashboardHeader from "../../components/DashboardHeader";

// fixtures
import dashboardLinks from "../../components/SideNav/fixtures";

const Dashboard = ({ history }) => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [pageName, setPageName] = useState("Dashboard");

  useEffect(() => {
    const name = history.location.pathname.split("/")[2];

    setPageName(
      name ? `${name.charAt(0).toUpperCase()}${name.slice(1)}` : "Dashboard"
    );
  }, [history]);

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
      <div className="dashboard">
        {renderRedirect()}
        <SideNav
          showSideNav={showSideNav}
          handleShowSideNav={handleShowSideNav}
          handleNameChange={handleNameChange}
        />
        <DashboardHeader
          showSideNav={showSideNav}
          handleShowSideNav={handleShowSideNav}
          pageName={pageName}
        />
      </div>
    </>
  );
};

export default withRouter(Dashboard);
