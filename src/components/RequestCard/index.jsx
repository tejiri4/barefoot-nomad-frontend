import React from "react";
import { FiRepeat } from "react-icons/fi";
import { withRouter } from "react-router-dom";

// proptypes
import PropTypes from "prop-types";

// styles
import "./RequestCard.scss";

const RequestCard = ({
  type,
  origin,
  destination,
  date,
  user,
  status,
  id,
  history
}) => {
  const handleRedirect = () =>
    history.push(`${history.location.pathname}/request/${id}`);
  return (
    <div className="request" onClick={handleRedirect}>
      <div className="request__left">
        <div className="request__left__icon">
          <FiRepeat />
        </div>
        <div>
          <small className="request__left__subtext">{type}</small>
          <div>
            {origin} to {destination}
          </div>
        </div>
      </div>
      <div className="request__date">{date}</div>
      {user && (
        <div className="request__user">
          <img src={user.image} alt="profile" />
          <div>{user.name}</div>
        </div>
      )}
      <div className="request__status">{status}</div>
    </div>
  );
};

RequestCard.propTypes = {
  type: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string
  })
};

export default withRouter(RequestCard);
