// react libraries
import React, { Component } from "react";

//components
import Header from '../../components/Header';

// styles
import "./NotFound.scss";
import { Button } from "../../components/Button";

export default class NotFound extends Component {

  takeMeHome = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="not-found">
        <Header/>
        <div className="not-found__content">
          <div className="not-found__content__left">
            <h1>404</h1>
            <p>Sorry, the page you are looking <br/> for does not exist</p>
            <Button text="Take me home" handleClick={this.takeMeHome} />
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
