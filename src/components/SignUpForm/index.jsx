// react libraries
import React from "react";

// styles
import "./SignUpForm.scss";

// components
import { Button, FacebookButton, GoogleButton } from "../Button/index";
import Input from './../Input/index';

const SignUpForm = () => {
  return (
    <div className="sign-up-form">
      <div className="sign-up-form__title">
        <h1>SignUp</h1>
      </div>
      <div className="sign-up-form__social-login">
        <GoogleButton />
        <FacebookButton />
      </div>
      <div>
        <form action="">
          <div>
            <Input
              type="text"
              placeholder="First name"
              className="input"
              style={{ width: "5.25rem" }}
              required={true}
            />
            <Input
              type="text"
              placeholder="Last name"
              className="input"
              style={{ width: "5.25rem" }}
              required={true}
            />
          </div>
          <Input
            type="email"
            placeholder="Email address"
            className="input"
            required={true}
          />
          <Input
            type="number"
            placeholder="Phone number"
            className="input"
            required={true}
          />
          <Input
            type="text"
            placeholder="Password"
            className="input"
            required={true}
          />
          <Input
            type="text"
            placeholder="Confirm Password"
            className="input"
            required={true}
          />
          <Button text="Sign up" />
        </form>
        <p>Already have an account? Login here</p>
      </div>
    </div>
  );
};

export default SignUpForm;
