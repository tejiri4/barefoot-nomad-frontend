// react libraries
import React from "react";

// styles
import "./ForgotPasswordForm.scss";

// components
import Input from "./../Input/index";
import { Button } from "./../Button/index";

const ForgotPasswordForm = () => {
  return (
    <div className="forgot-password-form">
      <div className="forgot-password-form__title">
        <h1>Reset Password</h1>
      </div>
      <div>
        <form action="">
          <Input
            type="email"
            placeholder="Email address"
            className="input"
            required={true}
          />
          <Button text="Send Reset Link" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
