import React, { Component } from 'react';
import axios from 'axios';
const ReactMarkdown = require('react-markdown/with-html')


class Me extends Component {

  constructor() {
    super();
    this.state = {message: ''};
  }


  componentDidMount() {
    axios.get('https://me-api.blixter.me/')
      .then(res => 
        this.setState({
          message: res.data[0].description
        }))
  }

  render() {
  const { message } = this.state;
  return (
    <main>
      <h1>Me</h1>
      <ReactMarkdown 
        source={message}
        escapeHtml={false}
      />
    </main>
    );
  }
}

export default Me;
