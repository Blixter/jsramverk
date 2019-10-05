import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Messages from '../Messages';
import Input from '../Input';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const server = 'https://socket-server.blixter.me'
    const [message, setMessage] = useState('')
    const [time, setTime] = useState('')
    const [messages, setMessages] = useState([])
    const [nameSent, setNameSent] = useState(false);
    const [status, setStatus] = useState('')

    useEffect(() => {
        socket = io(server);

        socket.on('user joined', (data) => {
            setStatus(data.username + " joined")
            console.log(data.username + " joined");
            console.log("Users online: " + data.numUsers)
       })

        return () => {
            socket.on('disconnect', function() {
                console.info("Disconnected");
            });
        }
    }, [server]);

    useEffect( () => {
        // Receiving new message from the server.
        socket.on('new message', (message) => {
            setMessages([...messages, message]);
            console.log(message);
        });

        // User joined the server
        socket.on('user joined', (data) => {
            setStatus(data.username + " joined")
            console.log(data.username + " joined");
            console.log("Users online: " + data.numUsers)
       })
        return () => {
            socket.emit('disconnect');
        
            socket.off();
            }
    }, [messages]);

    // function for sending username
    const sendName = (event) => {
        event.preventDefault();
        setName(name);
        setNameSent(true);
        if(name) {
            socket.emit("add user", name);
        }
    }

    // function for sending messages
        const sendMessage = (event) => {
            event.preventDefault();
            if(message) {
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
        }

    // If name is not sent show this.
    if (!nameSent) {
        return (
        <div>
            <p><strong>Username:</strong></p>
                <input 
                id="user" 
                className="user"
                placeholder="Enter a username..."
                value={name}
                onChange={(event) => setName(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendName(event) : null }/>
        </div>
        )
    }
    // If name has been set, show this.
    return (
        <div>
            <div className="chat-messages">
            {status}
            <Messages messages={messages} name={name} time={time} />
            </div>

            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} setTime={setTime} />
        </div>
    )
}

export default Chat;