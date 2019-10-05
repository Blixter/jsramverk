import React from 'react';

const Message = ({ message: { username, message, time }, name }) => {
    let isSentByCurrentUser = false;

    if(username === name) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ? (
            <div className="messageContainer d-flex justify-content-end">
                <div className="messageBox card message-card m-1">
                <p className="sentText">{name}</p>
                    <p className="messageText colorWhite">{message}</p>
                <span className="messageTime float-right mx-1">
                <small>
                    {time}
                </small>
                </span>
                </div>
            </div>
        )
        : (
            <div className="messageContainer d-flex justify-content-start">
                <div className="messageBox card message-card m-1">
                <p className="sentText">{username}</p>
                    <p className="messageText colorWhite">{message}</p>
                <span className="messageTime float-right mx-1">
                <small>
                    {time}
                </small>
                </span>
                </div>
            </div>
        )
    )
}

export default Message;