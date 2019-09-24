import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      week: props.match.params.week,
      text: '',
      userData: JSON.parse(localStorage.getItem("user")),
      redirect: false
      }
    };

  componentDidMount() {
    axios.get(`https://me-api.blixter.me/reports/${this.state.week}`,
    { headers: {"x-access-token" : `${this.state.userData.token}`} })
      .then(res => this.setState({
        text: res.data.text,
        author: res.data.author
      }))
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.put('https://me-api.blixter.me/reports', {
      id: this.state.week,
      text: this.state.text,
    },
    { headers: {"x-access-token" : `${this.state.userData.token}`} })
    .then(alert('Changes saved'))
    .then(this.setState({
      redirect: true
    }))
    .catch(error => console.error('Error:', error))
  };

  handleChange = e => {
    e.preventDefault();

    this.setState({text: e.target.value})

  };

  render() {
    // When changes has been saved to the DB, redirect.
    if (this.state.redirect) {
      return (<Redirect to={`/reports/week/${this.state.week}`} />)
    }
    return (
      <main>
        <div className="wrapper">
          <div className="form-wrapper-edit">
            <h1>Edit</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
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
              <div className="form-group">
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
