import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


class Weeks extends Component {

  constructor() {
    super();
    this.state = {
      userData: JSON.parse(localStorage.getItem("user")),
      redirect: false
    };
  }

    componentDidMount() {
        if (this.state.userData) {
            // Check if the stored token still is valid.
            // Remove the token and redirect to '/login' if it's not valid.
            axios.get(`https://me-api.blixter.me/auth/check`,
            { headers: {"x-access-token" : `${this.state.userData.token}`} })
            .then(res => {
                if (res.status === 200) {
                console.log(res.data.message)
                }
            })
            .catch(error => {
              console.error('Error:', error);
              localStorage.removeItem("user");
              this.setState({
                redirect: true
              })
            })
        } else {
          localStorage.removeItem("user");
          this.setState({
            redirect: true
          })
        }
      };

  render() {
    // If token not valid or token not found, redirect to '/login'
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }
  return (
    <main>
        <h1>Reports</h1>
        <p>Här samlar jag veckornas alla redovisningstexter, det är även här jag kan gå in och redigera samt lägga till nya texter.</p>
        <p>Kursen läses på Blekinge Tekniska Högskola, som ingår i programmet Webbprogrammering. <a href="https://jsramverk.me/">https://jsramverk.me/</a></p>
        <div className="row">
          <div className="col-lg-4">
            <h2>Kmom01</h2>
            <p>I det första kursmoment fokuserade vi på frontend.</p>
            <Link to="/reports/week/1">Länk till redovisningstexten</Link>
          </div>
          <div className="col-lg-4">
            <h2>Kmom02</h2>
            <p>Den andra veckan var det fokus på användaren upplevelse (UX).</p>
            <Link to="/reports/week/2">Länk till redovisningstexten</Link>
          </div>
          <div className="col-lg-4">
            <h2>Kmom03</h2>
            <p>Den tredje veckan var fokus på Backend. Vi kopplar samman frontend med backend.</p>
            <Link to="/reports/week/3">Länk till redovisningstexten</Link>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <h2>Kmom04</h2>
            <p>Vecka 4 fokuserar på testning, så som enhetstestning, intergrationstestning och funtkionstestning.</p>
            <Link to="/reports/week/4">Länk till redovisningstexten</Link>
          </div>
          <div className="col-lg-4">
            <h2>Kmom05</h2>
            <Link to="/reports/week/5">Länk till redovisningstexten</Link>
          </div>
          <div className="col-lg-4">
            <h2>Kmom06</h2>
            <Link to="/reports/week/6">Länk till redovisningstexten</Link>
          </div>
        </div>
      </main>
    )
    }
}
export default Weeks;
