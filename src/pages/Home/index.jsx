import React, { Component } from "react";
import { Link } from 'react-router-dom'

// styles
import "./Home.scss";

// external libraries
import PropTypes from 'prop-types'; 

// components
import DestinationCard from "../../components/DestinationCard";
import { Button } from "../../components/Button";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__header">
          <div className="home__header-logo">
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1571208724/barefoot-nomad/logo.svg"
              alt="logo"
            />
            <span>Barefoot Nomad</span>
          </div>
          <div className="home__header-login">
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1571209634/barefoot-nomad/Login_Icon.svg"
              alt="login"
            />
            <Link className="home__link" to="/login">
              <span>Login</span>
            </Link>
          </div>
        </div>
        <div className="home__description">
          <div className="home__description-left">
            <h1>Travel with ease</h1>
            <small>
              We understand that work could be hectic at times, but travelling
              should not, with barefoot nomad you can travel anywhere we're
              located all over the world.
            </small>
            <Button
              text="Get Started"
              handleClick={() => this.props.history.push("/signup")}
            />
          </div>
          <div className="home__description-right">
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1571210471/barefoot-nomad/landingpage-image.svg"
              alt="landing"
            />
          </div>
        </div>
        <div className="home__destination">
          <div className="home__destination-header">
            <h1>Most Travelled Destination</h1>
          </div>
          <div className="home__destination-collection">
            <DestinationCard
              title="Oba’s Hut"
              destinationImage="https://res.cloudinary.com/store-manager/image/upload/v1571213132/barefoot-nomad/destination-image-one.svg"
              address="St. George street, Kampala, Uganda"
              likesNo={34}
              ratingNo={4}
            />

            <DestinationCard
              title="Oba’s Hut"
              destinationImage="https://res.cloudinary.com/store-manager/image/upload/v1571222831/barefoot-nomad/destination-image-two.svg"
              address="St. George street, Kampala, Uganda"
              likesNo={34}
              ratingNo={3}
            />

            <DestinationCard
              title="Oba’s Hut"
              destinationImage="https://res.cloudinary.com/store-manager/image/upload/v1571222832/barefoot-nomad/destination-image-three.svg"
              address="St. George street, Kampala, Uganda"
              likesNo={34}
              ratingNo={2}
            />

            <DestinationCard
              title="Oba’s Hut"
              destinationImage="https://res.cloudinary.com/store-manager/image/upload/v1571222831/barefoot-nomad/destination-image-two.svg"
              address="St. George street, Kampala, Uganda"
              likesNo={34}
              ratingNo={3}
            />

            <DestinationCard
              title="Oba’s Hut"
              destinationImage="https://res.cloudinary.com/store-manager/image/upload/v1571222832/barefoot-nomad/destination-image-three.svg"
              address="St. George street, Kampala, Uganda"
              likesNo={34}
              ratingNo={2}
            />

            <DestinationCard
              title="Oba’s Hut"
              destinationImage="https://res.cloudinary.com/store-manager/image/upload/v1571222831/barefoot-nomad/destination-image-two.svg"
              address="St. George street, Kampala, Uganda"
              likesNo={34}
              ratingNo={3}
            />

            <DestinationCard
              title="Oba’s Hut"
              destinationImage="https://res.cloudinary.com/store-manager/image/upload/v1571222832/barefoot-nomad/destination-image-three.svg"
              address="St. George street, Kampala, Uganda"
              likesNo={34}
              ratingNo={2}
            />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
}

export default Home;
