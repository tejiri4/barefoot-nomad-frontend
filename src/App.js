// react libraries
import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";

// styles
import "./App.css";

// routes
import routes from "./routes";

// components
import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound/index";

const App = ({ history }) => {
  return (
    <>
      {routes.map(({ path, component, exact }, index) => (
        <Route exact={exact} path={path} component={component} key={index} />
      ))}
      <Switch>
        <Route
          exact={
            ![
              "/signup",
              "/login",
              "/reset-password",
              "/forgot-password"
            ].includes(history.location.pathname)
          }
          path="/"
          component={Home}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default withRouter(App);
