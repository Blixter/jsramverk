import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      week: props.match.params.week,
      text: '',
      userData: JSON.parse(localStorage.getItem("user")),
      redirect: false
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
    .then(alert('Added to the database'))
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
            <h1>Add</h1>
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
