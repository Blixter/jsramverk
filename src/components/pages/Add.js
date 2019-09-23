import React, { Component } from 'react';

import axios from 'axios';

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      week: props.match.params.week,
      text: '',
      userData: JSON.parse(localStorage.getItem("user"))
      }
    };

  handleSubmit = e => {
    console.log(this.state.week, this.state.text);
    e.preventDefault();
    axios.post('https://me-api.blixter.me/reports', {
      id: this.state.week,
      text: this.state.text,
    },
    { headers: {"x-access-token" : `${this.state.userData.token}`} })
    .then(res => console.log('Success:', JSON.stringify(res)))
    .catch(error => console.error('Error:', error))
  };

  handleChange = e => {
    e.preventDefault();

    this.setState({text: e.target.value})

  };

  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="form-wrapper-edit">
            <h1>Add</h1>
            <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label htmlFor="content">Content</label>
              <textarea 
                name="content" 
                value={this.state.text} 
                onChange={this.handleChange} 
                className="form-control"
                rows="10"
                required
              />
            </div>
              <div className="createAccount">
                <button className="btn btn-primary" type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>        
      </main>

    );
  }
}

export default Add;
