// react libraries
import React from "react";

// styles
import "./ResetPasswordForm.scss";

// components
import Input from "./../Input/index";
import { Button } from "./../Button/index";

const ResetPasswordForm = () => {
  return (
    <div className="reset-password-form">
      <div className="reset-password-form__title">
        <h1>Change Password</h1>
      </div>
      <div>
        <form action="">
          <div className="reset-password-form__input-group">
            <Input
              type="text"
              placeholder="New password"
              className="input"
              required={true}
            />
            <Input
              type="text"
              placeholder="Confirm new password"
              className="input"
              required={true}
            />
          </div>
          <Button text="Change password" />
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
