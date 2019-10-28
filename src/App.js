// react libraries
import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";

// styles
import "./App.css";

// components
import NotFound from "./pages/NotFound";
import LoggedInPage from "./pages/LoggedInPage";
import LoggedOutPage from "./pages/LoggedOutPage";

const App = ({ history }) => {
  return (
    <>
      <Switch>
        <Route
          exact={
            ![
              "/",
              "/signup",
              "/login",
              "/reset-password",
              "/forgot-password"
            ].includes(history.location.pathname)
          }
          path="/"
          component={LoggedOutPage}
        />
        <Route exact={false} path="/dashboard" component={LoggedInPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default withRouter(App);
