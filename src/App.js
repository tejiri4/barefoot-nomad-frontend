// react libraries
import React from "react";
import { Route } from "react-router-dom";

// styles
import "./App.css";

// routes
import routes from "./routes";

const App = () => {
  return (
    <>
      {routes.map(({ path, component, exact }, index) => (
        <Route exact={exact} path={path} component={component} key={index} />
      ))}
    </>
  );
};

export default App;
