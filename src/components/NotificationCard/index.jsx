import React from 'react'
import propType from 'prop-types'

import './NotificationCard.scss'

const NotificationCard = ({ profileImage, content, time }) => {
    return(
        <div className="notification">
          <div className="notification__profile-image">
            <img src={profileImage} alt="userImage"/>
          </div>
          <div className="notification__content-details">
            <p className="notification__content">{content}</p>
            <p className="notification__time">{time}</p>
          </div>
        </div>
      )
    }

NotificationCard.propType = {
  profileImage: propType.string,
  content: propType.string,
  time: propType.string
}

export default NotificationCard;
