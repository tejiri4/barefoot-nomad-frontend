// react libraries
import React, { Component } from "react";

// styles
import "./NotFound.scss";
import { Button } from "../../components/Button";

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <div>Logo</div>
        <div className="not-found__content">
          <div className="not-found__content__left">
            <h1>404</h1>
            <p>Sorry, the page you are looking for does not exist</p>
            <Button text="Take me home" />
          </div>
          <div className="not-found__content__right">
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1571399073/not-found.svg"
              alt="not-found"
            />
          </div>
        </div>
      </div>
    );
  }
}
