import React from 'react';

// Getting the current time in HH:MM-format.
function getTime() {
  return new Date().toLocaleTimeString('en-GB', { hour: "numeric", 
      minute: "numeric"});
}

const Input = ({ setMessage, sendMessage, message, setTime }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value) + setTime(getTime())}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;