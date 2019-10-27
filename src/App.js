// react libraries
import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";

// styles
import "./App.css";

// components
import NotFound from "./pages/NotFound";
import LoggedInPage from "./pages/LoggedInPage";
import LoggedOutPage from "./pages/LoggedOutPage";

const App = () => {
  return (
    <>
      <Route path="/" component={LoggedOutPage} />
      <Switch>
        <Route exact={false} path="/dashboard" component={LoggedInPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default withRouter(App);
