import React from "react";
import { withRouter } from "react-router-dom";

// styles
import "./RequestPage.scss";

// components
import { BasicButton } from "../../components/Button";
import TextArea from "../../components/TextArea";
import Comment from "./../../components/Comment";

// fixtures
import { requestDetails } from "./fixtures";

const RequestPage = ({ history }) => {
  const goBack = () => history.goBack();
  const renderHeader = () => (
    <>
      <div className="request-page__header__back" onClick={goBack}>
        <img
          src="https://res.cloudinary.com/store-manager/image/upload/v1572495402/barefoot-nomad/arrow.svg"
          alt="arrow"
        />
      </div>
      <div>
        <BasicButton text="Edit" />
      </div>
    </>
  );

  const renderRequestDetails = (imagePath, name, content, showBorderRight) => (
    <div
      className={`request-page__details__card ${showBorderRight &&
        "border-right"}`}
    >
      <div className="request-page__details__card-flex-row">
        <img src={imagePath} alt={name} />
        <p>{name}</p>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );

  const renderAccomodation = () => (
    <>
      <div className="request-page__accomodation__title">
        <img
          src="https://res.cloudinary.com/store-manager/image/upload/v1572496868/barefoot-nomad/accomodation_purple.svg"
          alt="accomodation"
        />
        <p>Accomodation</p>
      </div>
      <div className="request-page__accomodation__content">
        <div>
          <p>Oba’s Hut</p>
          <small>371, Lord’s street, Abuja ,Nigeria</small>
        </div>
        <div>
          <BasicButton
            text="View in Map"
            borderColor="rgba(0, 0, 0, 0.6)"
            color="rgba(0, 0, 0, 0.6)"
          />
        </div>
      </div>
    </>
  );

  return (
    <div className="request-page">
      <div className="request-page__header">{renderHeader()}</div>
      <div className="request-page__details">
        {requestDetails.map(({ imagePath, name, content, showBorderRight }) =>
          renderRequestDetails(imagePath, name, content, showBorderRight)
        )}
      </div>
      <div className="request-page__accomodation">{renderAccomodation()}</div>
      <div className="request-page__comment">
        <div className="request-page__comment__title">
          <img
            src="https://res.cloudinary.com/store-manager/image/upload/v1572496730/barefoot-nomad/message-square.svg"
            alt="comment"
          />
          <p>Comments</p>
        </div>
        <div className="request-page__comment__section">
          <TextArea placeholder="Type your comment here.." />
          <BasicButton
            text="Post"
            borderColor="rgba(0, 0, 0, 0.6)"
            color="rgba(0, 0, 0, 0.6)"
          />
        </div>
        <div className="request-page__comment__view">
          <div className="request-page__comment__view categories">
            <Comment
              imageSrc="https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg"
              name="Michael Angelo"
              comment="Your return date is too far away.. please give some tangible reasons why you would be away for this long."
              duration="3 hours"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RequestPage);
