// react libraries
import React, { useState, useEffect } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

// styles
import "./LoggedInPage.scss";

// components
import SideNav from "../../components/SideNav";
import LoggedInHeader from "../../components/LoggedInHeader";
import Dashboard from "../Dashboard";
import Trips from "./../Trips/index";

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

  return (
    <>
      <div className="logged-in-page">
        <SideNav
          showSideNav={showSideNav}
          handleShowSideNav={handleShowSideNav}
          handleNameChange={handleNameChange}
        />
        <div className="logged-in-page__content">
          <LoggedInHeader
            showSideNav={showSideNav}
            handleShowSideNav={handleShowSideNav}
            pageName={pageName}
          />
          <div className="logged-in-page__components">
            <>
              <Switch>
                <Route exact path="/dashboard/trips" component={Trips} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Redirect to="/404" />
              </Switch>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(LoggedInPage);
