import React, { Component } from "react";

// styles
import AppModal from "./../../components/AppModal";

// components
import LoginNavigation from './../../components/LoginNavigation';
import SignUpForm from './../../components/SignUpForm';

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
