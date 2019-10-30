import React from 'react'
import Input from '../Input/index';

const ChatCard = () => {
    return(
      <div className="chat">
        <div className="chat__header">
          <h3>General Chat</h3>
          <p>Talk about your travelling experience</p>
        </div>
        <div className="chat__section">
          <div className="chat__room">
            <img src="" alt="" />
            <div className="chat__user-details">
              <h4 className="chat__user-name">Michael Angelo</h4>
              <p className="chat__user-message">Your return date is too far away... please give some tangible reasons why you would be away for this long.</p>
            </div>
          </div>
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
