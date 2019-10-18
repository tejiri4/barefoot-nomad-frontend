import React, { Component } from "react";

// components
import LoginNavigation from './../../components/LoginNavigation';
import SignUpForm from './../../components/SignUpForm';
import AppModal from "./../../components/AppModal";

class SignUp extends Component {
  render() {
    return (
      <>
        <AppModal>
          <LoginNavigation />
          <SignUpForm />
        </AppModal>
      </>
    );
  }
}

export default SignUp;
