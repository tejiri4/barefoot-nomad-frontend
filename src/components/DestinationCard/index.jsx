// react libraries
import React from "react";
import { FiMapPin, FiThumbsUp } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";

// external libraries
import PropTypes from 'prop-types';

// styles
import "./DestinationCard.scss";

const DestinationCard = ({
  title,
  address,
  likesNo,
  ratingNo,
  destinationImage
}) => {
  return (
    <div className="destination">
      <div className="destination__image">
        <img src={destinationImage} alt="destination" />
      </div>
      <div className="destination__content">
        <p className="destination__content-title">{title}</p>
        <div className="destination__content-address">
          <span className="icon" >
            <FiMapPin />
          </span>
          <p>{address}</p>
        </div>
        <div className="destination__content-like-rating">
          <div className="destination__content-rating">
            {[...Array(5)].map((_, index) => {
              if (index > ratingNo - 1) return <FaRegStar color="lightgrey" key={index} />;
              return <FaStar color="#ffc107" key={index} />;
            })}
            <span>{ratingNo}</span>
          </div>
          <div className="destination__content-likes">
            <FiThumbsUp color="purple" />
            <span>{likesNo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  destinationImage: PropTypes.string,
  likesNo: PropTypes.number,
  ratingNo: PropTypes.number
}

export default DestinationCard;
