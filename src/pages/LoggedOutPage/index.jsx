// react libraries
import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// componeents
import AppModal from "../../components/AppModal";
import LoginNavigation from "../../components/LoginNavigation";
import ForgotPasswordForm from "../ForgotPasswordForm";
import LoginForm from "../LoginForm/index";
import SignUpForm from "../SignUpForm/index";
import ResetPasswordForm from "../ResetPasswordForm/index";
import Home from "../Home/index";

class LoggedOutPage extends Component {
  showModal = () =>
    ["/signup", "/login", "/reset-password", "/forgot-password"].includes(
      this.props.history.location.pathname
    );

  render() {
    return (
      <>
        <Route exact={!this.showModal()} path="/" component={Home} />
        {this.showModal() && (
          <AppModal maxWidth={670}>
            <LoginNavigation />
            <>
              <Switch>
                <Route
                  exact
                  path="/reset-password"
                  component={ResetPasswordForm}
                />
                <Route
                  exact
                  path="/forgot-password"
                  component={ForgotPasswordForm}
                />
                <Route exact path="/signup" component={SignUpForm} />
                <Route exact path="/login" component={LoginForm} />
                <Redirect to="/404" />
              </Switch>
            </>
          </AppModal>
        )}
      </>
    );
  }
}

export default withRouter(LoggedOutPage);
