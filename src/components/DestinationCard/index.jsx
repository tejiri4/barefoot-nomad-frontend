// react libraries
import React from "react";

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
          <img
            src="https://res.cloudinary.com/store-manager/image/upload/v1571213301/barefoot-nomad/Location_Icon.svg"
            alt="location"
          />
          <p>{address}</p>
        </div>
        <div className="destination__content-like-rating">
          <div className="destination__content-rating">
            {[...Array(5)].map((_, index) => {
              if (index > ratingNo - 1) {
                return (
                  <img
                    src="https://res.cloudinary.com/store-manager/image/upload/v1571213978/barefoot-nomad/rating.svg"
                    alt="rating"
                    key={index}
                  />
                );
              }
              return (
                <img
                  src="https://res.cloudinary.com/store-manager/image/upload/v1571214291/barefoot-nomad/rating-checked.svg"
                  alt="rating"
                  key={index}
                />
              );
            })}
            <span>{ratingNo}</span>
          </div>
          <div className="destination__content-likes">
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1571213973/barefoot-nomad/like.svg"
              alt="like"
            />
            <span>{likesNo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
