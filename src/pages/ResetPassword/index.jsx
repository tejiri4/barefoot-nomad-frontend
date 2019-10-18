// react libraries
import React, { Component } from "react";

// componeents
import AppModal from "../../components/AppModal";
import LoginNavigation from "./../../components/LoginNavigation";
import ResetPasswordForm from './../../components/ResetPasswordForm';

export default class ResetPassword extends Component {
  render() {
    return (
      <>
        <AppModal>
          <LoginNavigation />
          <ResetPasswordForm />
        </AppModal>
      </>
    );
  }
}
