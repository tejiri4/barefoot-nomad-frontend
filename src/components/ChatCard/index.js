import React from 'react'
import Input from '../Input/index';
import ChatInfo from '../ChatInfo';

import './ChatCard.scss';

const ChatCard = () => {
    return(
      <div className="chat">
        <div className="chat__header">
          <h3>General Chat</h3>
          <p><span>2D</span>Talk about your travelling experience</p>
        </div>
        <div className="chat__section">
          <ChatInfo
            src="https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg"
            name="Michael Angelo"
            msg="Your return date is too far away... please give some tangible reasons why you would be away for this long."
          />
          <ChatInfo
            src="https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg"
            name="Sarah Conor"
            msg="It's personal"
          />
          <div className="chat__input-message">
            <Input
              type="textarea"
              placeholder="Enter your message..."
              className="chat__textarea"
              required={true}
            />
          </div>
        </div>
      </div>
    )
}

export default ChatCard;
