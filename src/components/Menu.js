import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu });
    }

    render() {
        const show = (this.state.menu) ? "show" : "";

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse " + show}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Me</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reports">Reports</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chat">Chat</Link></li>
                    </ul>
                </div>
            </nav>

        );
    }
}
