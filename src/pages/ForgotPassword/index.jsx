// react libraries
import React, { Component } from "react";

// componeents
import AppModal from "../../components/AppModal";
import LoginNavigation from "./../../components/LoginNavigation";
import ForgotPasswordForm from './../../components/ForgotPasswordForm';

export default class ForgotPassword extends Component {
  render() {
    return (
      <>
        <AppModal>
          <LoginNavigation />
          <ForgotPasswordForm />
        </AppModal>
      </>
    );
  }
}
