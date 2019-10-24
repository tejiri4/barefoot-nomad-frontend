// react libraries
import React from "react";

//components
import Header from '../../components/Header';

// styles
import "./NotFound.scss";
import { Button } from "../../components/Button";

export default ({ history }) => {

  const redirect = () => history.push('/');

  return (
    <div className="not-found">
      <Header />
      <div className="container">
        <div className="not-found__content">
          <div className="not-found__content__left">
            <h1>404</h1>
            <p>Sorry, the page you are looking <br /> for does not exist</p>
            <Button text="Take me home" handleClick={redirect} />
          </div>
          <div className="not-found__content__right">
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1571399073/not-found.svg"
              alt="not-found"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
