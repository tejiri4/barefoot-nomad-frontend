// react libraries
import React from "react";
import { Switch, Route } from "react-router-dom";

// styles
import "./App.css";

// routes
import routes from "./routes";

const App = () => {
  return (
    <Switch>
      {routes.map(({ path, component }, index) => (
        <Route exact path={path} component={component} key={index} />
      ))}
    </Switch>
  );
};

export default App;
