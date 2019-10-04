import React from 'react';

const Message = ({ message: { username, message }, name }) => {
    let isSentByCurrentUser = false;

    if(username === name) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{name}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{message}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox BackgroundLight">
                    <p className="messageText colorDark">{message}</p>
                </div>
                <p className="sentText">{username}</p>
            </div>

        )
    )
}

export default Message;