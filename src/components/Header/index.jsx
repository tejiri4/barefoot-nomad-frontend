import React from 'react';
import './Header.scss';

export default function index() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://res.cloudinary.com/store-manager/image/upload/v1571208724/barefoot-nomad/logo.svg"
          alt="logo"
        />
        <span>Barefoot Nomad</span>
      </div>
      <div className="header__login">
        <img
          src="https://res.cloudinary.com/store-manager/image/upload/v1571209634/barefoot-nomad/Login_Icon.svg"
          alt="login"
        />
        <span>Login</span>
      </div>
    </div>
  )
}
