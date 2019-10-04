import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Messages from '../Messages';
import Input from '../Input';

let socket;

// // Getting the current time in HH:MM-format.
// function getTime() {
//     return new Date().toLocaleTimeString('en-GB', { hour: "numeric", 
//         minute: "numeric"});    
// }

const Chat = () => {
    const [name, setName] = useState('');
    const server = 'https://socket-server.blixter.me'
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {

        socket = io(server);

        socket.on('user joined', (data) => {
           console.log(data.username + " joined");
           console.log("Users online: " + data.numUsers)
       })

        // setUsername(username);
        
        
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

        return () => {
            socket.emit('disconnect');
        
            socket.off();
            }
    }, [messages]);

    // function for sending username
    const sendName = (event) => {
        event.preventDefault();
        console.log("username sent" + name);
        setName(name);
        if(name) {
            socket.emit("add user", name);
        }
    }

    // function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        console.log("message sent" + message);
        if(message) {
            setMessages([...messages, {
                username: name,
                time: '2019',
                message: message
            }]);
            socket.emit("new message", {
                username: name,
                time: '2019',
                message: message
            }, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div className="chat">
            <h1>Websocket chatt</h1>
            

            <Messages messages={messages} name={name} />



            {/* <h2>Messages:</h2>
            <div id="all-messages" className="all-messages">
                {messages}
            </div> */}
        
            <p><strong>Username:</strong></p>
            <input 
            id="user" 
            className="user" 
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendName(event) : null }/>

            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            />
        </div>
    )
}

export default Chat;