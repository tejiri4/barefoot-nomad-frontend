// import react libaries
import React from "react";
import { Link } from "react-router-dom";

// styles
import "./LoginForm.scss";

// import components
import { Button, FacebookButton, GoogleButton } from "../../components/Button";
import Input from "../../components/Input/index";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="login-form__title">
        <h1>Login</h1>
      </div>
      <div className="login-form--col-2">
        <GoogleButton />
        <FacebookButton />
      </div>
      <form action="">
        <Input
          type="email"
          placeholder="Email Address"
          className="input"
          required={true}
        />
        <Input
          type="password"
          placeholder="Password"
          className="input"
          required={true}
        />
        <Link className="login-form__link" to="/forgot-password">
          <p className="info">Forgot your password?</p>
        </Link>
        <Button text="Login" />
      </form>

      <p className="info">
        Don't have an account?{" "}
        <Link className="sign-up-form__link" to="/signup">
          Signup here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
