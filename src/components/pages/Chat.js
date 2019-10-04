// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import io from 'socket.io-client';

// import axios from 'axios';

// const socketUrl = "https://socket-server.blixter.me";

// function getTime() {
//   return new Date().toLocaleTimeString('en-GB', { hour: "numeric", 
//       minute: "numeric"});    
// }

// // Write users own message directly to chat.
// function addChatMessage(data) {
//   let addedMessage = document.createElement("p");

//   addedMessage.textContent = data.time + " " + data.username + ": " + data.message;

//   allMessages.appendChild(addedMessage);
// }

// class Chat extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       socket: null,
//       user: null,
//       participantsMessage: null,
//       chatMessages: null
//       }
//     };

//     componentDidMount() {
//       this.initSocket();
//     };

//   initSocket = () => {
//     const socket = io(socketUrl);
//     socket.on('connect', () => {
//       console.log("Connected");
//     })
//     this.setState({socket});
//   };

//   setParticipantsMessage = (participantsMessage) => {
//     const { socket } = this.state
//     socket.on('user joined', (data) => {
//       this.setState({user})
//       log(participantsMessage);
//     })
//   };

//   newMessage = (message) => {
//     this.setState(prevState => ({
//       messages: prevState.message, message
//     })
//   }


//   // handleSubmit = e => {
//   //   e.preventDefault();
//   //   axios.put('https://me-api.blixter.me/reports', {
//   //     id: this.state.week,
//   //     text: this.state.text,
//   //   },
//   //   { headers: {"x-access-token" : `${this.state.userData.token}`} })
//   //   .then(alert('Changes saved'))
//   //   .then(this.setState({
//   //     redirect: true
//   //   }))
//   //   .catch(error => console.error('Error:', error))
//   // };

//   // handleChange = e => {
//   //   e.preventDefault();

//   //   this.setState({text: e.target.value})

//   // };

//   render() {

//     return (
//       <div className="chat">
//         <h1>Websocket chatt</h1>

//         <h2>Messages:</h2>
//         <div id="all-messages" class="all-messages"></div>
    
//         <p><strong>Username:</strong></p>
//         <input id="user" class="user" value=""/>
    
//         <p><strong>Write new message:</strong></p>
//         <input id="new-message" class="new-message" value=""/>
//       </div>
//     );
//   }
// }

// export default Chat;
