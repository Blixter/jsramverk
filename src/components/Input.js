import React from 'react';

// Getting the current time in HH:MM-format.
function getTime() {
    return new Date().toLocaleTimeString('en-GB', {
        hour: "numeric",
        minute: "numeric"
    });
}

const Input = ({ setMessage, sendMessage, message, setTime }) => (
    <div classnam="row">
        <form className="form">
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value) + setTime(getTime())}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </div>
            <div className="send form-group">
                <button
                    className="btn btn-primary form-control"
                    onClick={e => sendMessage(e)}>Send
                </button>
            </div>
        </form>
    </div>
);

export default Input;
