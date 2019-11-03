// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./Comment.scss";

const Comment = ({ name, duration, imageSrc, comment }) => {
  return (
    <div className="comment__view category">
      <div className="comment__view category-photo">
        <img src={imageSrc} alt="profile" />
      </div>
      <div className="comment__view category-details">
        <h3>{name}</h3>
        <small>{comment}</small>
        <span>{duration}</span>
      </div>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string,
  duration: PropTypes.string,
  imageSrc: PropTypes.string,
  Comment: PropTypes.string
};

export default Comment;
