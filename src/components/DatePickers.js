import React, { Component } from 'react';

class DatePicker extends Component {

  render() {
    const month = [
      "January",
      "February",
      "Mars",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    let currentYear =  new Date().getFullYear(); //Current Year
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="month">Birth month</label>
            <select
              name="month"
              // className="form-control"
              className={this.props.formErrors.month.length > 0 ? "error form-control" : this.props.sendState.month ? "correct form-control" : "form-control"}
              noValidate
              onChange={this.props.handleChange}>
              {/* This will be the placeholder, which wont show in the dropdown list. */}
              <option default value="0" hidden>Month</option>
              {/* Loop through the months array and add as options to the select. */}
              {month.map((value, index) => {
                return <option key={index} value={index + 1}>{value}</option>
              })}
            </select>
            {this.props.formErrors.month.length > 0 && (
            <span className="errorMessage">{this.props.formErrors.day}</span>
            )}
          </div>

        <div className="form-group">
          <label htmlFor="day">Birth day</label>
            <input
              type="number"
              className={this.props.formErrors.day.length > 0 ? "form-control error" : this.props.sendState.day ? "form-control correct" : "form-control"}
              placeholder="Day"
              name="day"
              min="1"
              max="31"
              noValidate
              onChange={this.props.handleChange}
            />
            {this.props.formErrors.day.length > 0 && (
            <span className="errorMessage">{this.props.formErrors.day}</span>
            )}
        </div>

        <div className="form-group">
          <label htmlFor="year">Birth year</label>
          <input
            type="number"
            className={this.props.formErrors.year.length > 0 ? "error form-control" : this.props.sendState.year ? "correct form-control" : "form-control"}
            placeholder="Year"
            name="year"
            min="1900"
            max={currentYear}
            noValidate
            onChange={this.props.handleChange}
          />
          {this.props.formErrors.year.length > 0 && (
          <span className="errorMessage">{this.props.formErrors.year}</span>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default DatePicker;