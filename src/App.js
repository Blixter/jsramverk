import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Me from './components/pages/Me';
import Report from './components/pages/Report';
import Edit from './components/pages/Edit';
import Add from './components/pages/Add';
import ValidationForm from './components/pages/ValidationForm';
import Login from './components/pages/Login';
import Weeks from './components/pages/Weeks';
import Chat from './components/pages/Chat';
import Menu from './components/Menu';

import './App.css';
import './input.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Menu/>
                <div className="row">
                    <div className="col-md"></div>
                    <div className="col-md-6">
                        <Route exact path="/" component={Me} />
                        <Route exact path="/reports" component={Weeks} />
                        <Route path="/register" component={ValidationForm} />
                        <Route path="/Login" component={Login} />
                        <Route path="/reports/week/:week" component={Report} />
                        <Route path="/edit/:week" component={Edit} />
                        <Route path="/add/:week" component={Add} />
                        <Route path="/chat" component={Chat} />
                    </div>
                    <div className="col-md"></div>
                </div>
            </Router>
        );
    }
}

export default App;
