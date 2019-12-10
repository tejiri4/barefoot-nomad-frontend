import React from "react";

import './ChatInfo.scss';

import PropTypes from 'prop-types'; 

const ChatInfo = ({ src, name, msg }) => {
  return (
    <div className="room">
      <img
        src={src}
        alt="user"
      />
      <div className="room__user-details">
        <h4 className="room__user-name">{name}</h4>
        <div className="room__user-message-container">
          <p className="room__user-message">
            {msg}
          </p>
        </div>
      </div>
    </div>
  );
};

ChatInfo.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  msg: PropTypes.string
}

export default ChatInfo;
