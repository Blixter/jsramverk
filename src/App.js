import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './components/pages/Me';
import Report from './components/pages/Report';
import ValidationForm from './components/pages/ValidationForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Me</Link></li>
              <li><Link to="/reports/week/1">Week 1</Link></li>
              <li><Link to="/reports/week/2">Week 2</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Me} />
          <Route path="/reports/week/:week" component={Report} />
          <Route path="/register" component={ValidationForm} />
        </div>
      </Router>
    );
  }
}

export default App;
