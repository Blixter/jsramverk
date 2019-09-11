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
        <div className="month">
        <label htmlFor="month">Birthday: Month</label>
          <select
            name="month"
            className={this.props.formErrors.month.length > 0 ? "error" : this.props.sendState.month ? "correct" : null}
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

        <div className="day">
        <label htmlFor="day">Day</label>
          <input
            type="number"
            className={this.props.formErrors.day.length > 0 ? "error" : this.props.sendState.day ? "correct" : null}
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

        <div className="year">
        <label htmlFor="year">Year</label>
          <input
            type="number"
            className={this.props.formErrors.year.length > 0 ? "error" : this.props.sendState.year ? "correct" : null}
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