import React, { Component } from 'react';

import DatePicker from './../DatePickers';
import axios from 'axios';

export function minTwoDigits(n) {
  if (n < 10 && n.length < 2) {
    return 0 + n;
  }
  return n;
}

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
    val === false && (valid = false);
  });

  return valid;
}

class ValidateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      month: null,
      day: null,
      year: null,
      gdpr: false,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        month: "",
        day: "",
        year: "",
        gdpr: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      this.setState(
        {
          month: minTwoDigits(this.state.month),
          day: minTwoDigits(this.state.day)
        }, () => 
        axios.post('https://me-api.blixter.me/auth/register', {
          firstname: this.state.firstName,
          lastname: this.state.lastName,
          birthdate: this.state.year + '/' + this.state.month + '/' + this.state.day,
          email: this.state.email,
          password: this.state.password
        })
        .then(res => console.log('Success:', JSON.stringify(res)))
        .catch(error => console.error('Error:', error))
      );
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    let currentYear =  new Date().getFullYear(); //Current Year

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 2 ? 'Minimum 2 characters required' : "";
        break;
      case 'lastName':
        formErrors.lastName = value.length < 2 ? 'Minimum 2 characters required' : "";
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Invalid email adress';
        break;
      case 'password':
        formErrors.password = value.length < 6 ? 'Minimum 6 characters required' : "";
        break;
      case 'month':
          formErrors.month = value === 0 ? 'Invalid month' : "";
          break;
      case 'day':
          formErrors.day = value < 1 || value > 31 ? 'Invalid day' : "";
          break;
      case 'year':
          formErrors.year = value < 1900 || value > currentYear ? 'Invalid year' : "";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  handleCheckBoxClick = e => {
    let formErrors = this.state.formErrors;
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    formErrors.gdpr = value === false ? 'Need to be checked' : "";
    this.setState({
      [name]: value
    }, () => console.log(this.state));
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div className="Wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={formErrors.firstName.length > 0 ? "error form-control" : this.state.firstName ? "correct form-control" : "form-control"}
                placeholder="First Name"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className={formErrors.lastName.length > 0 ? "error form-control" : this.state.lastName ? "correct form-control" : "form-control"}
                  placeholder="Last Name"
                  name="lastName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className={formErrors.email.length > 0 ? "error form-control" : this.state.email ? "correct form-control" : "form-control"}
                  placeholder="Email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
                < DatePicker 
                  handleChange={this.handleChange}
                  formErrors={formErrors}
                  sendState={this.state}
                />
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={formErrors.password.length > 0 ? "error form-control" : this.state.password ? "correct form-control" : "form-control"}
                  placeholder="Password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="checkbox">
                <label><input
                  type="checkbox"
                  name="gdpr"
                  onChange={this.handleCheckBoxClick}
                  checked={this.state.gdpr}
                />By checking this you agree that your personal data will be stored in our database.
                </label>
                </div>
                {formErrors.gdpr.length > 0 && (
                  <span className="errorMessage">{formErrors.gdpr}</span>
                )}
            <div className="createAccount">
              <button type="submit" className="btn btn-primary" disabled={!formValid(this.state)}>Create Account</button>
              {/* <small>Already Have an Account?</small> */}
            </div>
          </form>
        </div>
        );
      }
}

export default ValidateForm;
