import React, { Component } from 'react';



class Me extends Component {

  constructor() {
    super();
    this.state = {message: ''};
  }

  componentDidMount() {
    // Get the contents from the Me-api put them in the React state, so we can reference it in render() below.
    fetch('http://me-api.blixter.me/')
    .then(res => res.json())
    .then(res => this.setState({ 
      message: res[0].description
      }))
  }
  render() {
  const { message } = this.state;
  return (
    <main>
      <h1>Me</h1>
      <html>{message}</html>
    </main>
    );
  }
}

export default Me;
