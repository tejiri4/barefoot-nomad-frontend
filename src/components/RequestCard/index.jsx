import React from 'react';
import PropTypes from 'prop-types';
import { FiRepeat } from "react-icons/fi";
import './RequestCard.scss';

const RequestCard = ({ type, origin, destination, date, user, status }) => {
    return (
        <div className="request">
            <div className="request__left">
                <div className="request__left__icon">
                    <FiRepeat />
                </div>
                <div>
                    <small className="request__left__subtext">{type}</small>
                    <div>{origin} to {destination}</div>
                </div>
            </div>
            <div className="request__date">{date}</div>
            {
                user && <div className="request__user">
                    <img src={user.image} alt="profile" />
                    <div>{user.name}</div>
                </div>
            }
            <div className="request__status">
                {status}
            </div>
        </div>
    )
}

RequestCard.propTypes = {
    type: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
    })
}

export default RequestCard
