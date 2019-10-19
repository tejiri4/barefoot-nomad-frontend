// import react libaries
import React from "react";
import { Link } from 'react-router-dom'

// styles
import './LoginForm.scss'

// import components
import { Button, FacebookButton, GoogleButton } from "../Button/index";
import Input from './../Input/index';

const LoginForm = () => {
    return(
        <div className="login-form">
          <div className="login-form__title">
            <h1>Login</h1>
          </div>
          <div className="login-form__social-login">
            <GoogleButton />
            <FacebookButton />
          </div>
          <div>
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
                <Button text="Login" />
            </form>
            <div className="login-form__text">
            <Link className="login-form__link" to="/forgot-password">
              <p>Forgot your password</p>
            </Link>
            <Link className="login-form__link" to="/signup">
              <p>Signup</p></Link>
            </div>
          </div>
        </div>
    )
}

export default LoginForm
