// react libraries
import React from "react";
import { Link } from 'react-router-dom'

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
      <div className="sign-up-form--col-2">
        <GoogleButton />
        <FacebookButton />
      </div>
      <div>
        <form action="">
          <div className="sign-up-form--col-2">
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
        <p className="info">Already have an account? <Link className="sign-up-form__link" to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default SignUpForm;
