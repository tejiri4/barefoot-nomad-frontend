import React from 'react';

import NotificationCard from "../../components/NotificationCard";

import './Notification.scss'

const Notification = () => {
    return(
        <div className="notification-page">
          <NotificationCard
            profileImage="https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg"
            content="Sarah Conor replied to your comment"
            time="3 hours"
          />
          <NotificationCard
            profileImage="https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg"
            content="Request reject by line manager"
            time="1 hours"
          />
          <NotificationCard
            profileImage="https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg"
            content="Request accept by line manager"
            time="30 mins"
          />
          <NotificationCard
            profileImage="https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg"
            content="Sarah Conor replied to your comment"
            time="10 hours"
          />
          <NotificationCard
            profileImage="https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg"
            content="Sarah Conor replied to your comment"
            time="1 day"
          />
        </div>
    )
}

export default Notification
