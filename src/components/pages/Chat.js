import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Messages from '../Messages';
import Input from '../Input';

import axios from 'axios';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const server = 'https://socket-server.blixter.me';
    const [message, setMessage] = useState('');
    const [time, setTime] = useState('');
    const [messages, setMessages] = useState([]);
    const [nameSent, setNameSent] = useState(false);

    const formValid = (name) => {
        let valid = true;

        // Validate form not being empty
        name.length > 0 && (valid = false);

        // Validate the form was filled out
        name === null && (valid = false);
        name === false && (valid = false);

        return valid;
    };

    useEffect(() => {
        socket = io(server);

        // TODO
        // - axios get all chat messages from mongoDB.
        // - Store them to messages.

        return () => {
            socket.emit('disconnect');

            socket.off();
        };
    }, [server]);

    useEffect(() => {
        // Receiving new message from the server.
        socket.on('new message', (message) => {
            setMessages([...messages, message]);

            // Save each new message to the database.
            axios.post('localhost:1337/chat', {
                name,
                time,
                message
            });
            console.log(messages);
        });
    }, [messages]);

    // function for sending username
    const sendName = (event) => {
        event.preventDefault();
        setName(name);
        setNameSent(true);
        if (name) {
            socket.emit("add user", name);
        }
    };

    // function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            setMessages([...messages, {
                username: name,
                time: time,
                message: message
            }]);
            socket.emit("new message", {
                username: name,
                time: time,
                message: message
            }, () => setMessage(''));
        }
    };

    // If name is not sent show this.
    if (!nameSent) {
        return (
            <div className="form-wrapper">
                <form onSubmit={sendName} noValidate>
                    <div className="form-group">
                        <h1>Chat</h1>
                        <label htmlFor="user">Username</label>
                        <input
                            name="user"
                            type="text"
                            className="form-control"
                            placeholder="Enter a username..."
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="send">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={formValid(name)}>Enter chat</button>
                        {/* onClick={e => sendName(e) */}
                    </div>
                </form>
            </div>
        );
    }
    // If name has been set, show this.
    return (
        <div>
            <div className="chat-messages bg-light">
                <Messages messages={messages} name={name} time={time} />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                    setTime={setTime}
                />
            </div>
        </div>
    );
};

export default Chat;
