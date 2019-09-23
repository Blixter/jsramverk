import React, { Component } from 'react';

import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      week: props.match.params.week,
      text: '',
      userData: JSON.parse(localStorage.getItem("user"))
      }
    };

  componentDidMount() {
    console.log("week " + this.state.week)
    console.log("userData " + this.state.userData.token)
    axios.get(`https://me-api.blixter.me/reports/${this.state.week}`,
    { headers: {"x-access-token" : `${this.state.userData.token}`} })
      .then(res => this.setState({
        text: res.data.text,
        author: res.data.author
      }))
  }

  handleSubmit = e => {
    console.log(this.state.week, this.state.text);
    e.preventDefault();
    axios.put('https://me-api.blixter.me/reports', {
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
            <h1>Edit</h1>
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
              <div class="form-group">
              <label htmlFor="week">Week</label>
              <input
                value={this.state.week}
                type="number"
                name="week"
                onChange={this.handleChange}
                className="form-control"
                readOnly
                required
              />
              </div>
              <div className="createAccount">
                <button className="btn btn-primary" type="submit">Save changes</button>
              </div>
            </form>
          </div>
        </div>        
      </main>

    );
  }
}

export default Edit;
