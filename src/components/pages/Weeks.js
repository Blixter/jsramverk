import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Report from './Report';

const Weeks = () => {
  return (
      <main>
        <h1>Reports</h1>
        <p>Här samlar jag veckornas alla redovisningstexter, det är även här jag kan gå in och redigera samt lägga till nya texter.</p>
        <div class="row">
          <div class="col-sm-4">
            <h2>1: Frontend</h2>
            <p>Vi utvärderar frontend ramverk och skapar en me-applikation i det JavaScript ramverk du valde.</p>
            {/* <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a> */}
            <Link className="btn btn-primary btn-lg active" to="/reports/week/1">Week 1</Link>
          </div>
          <div class="col-sm-4">
            <h2>2: UX</h2>
            <Link to="/reports/week/2">Week 2</Link>
          </div>
          <div class="col-sm-4">
            <h2>3: Backend</h2>
            <Link to="/reports/week/3">Week 3</Link>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <h2>4: Test</h2>
            <Link to="/reports/week/4">Week 4</Link>
          </div>
          <div class="col-sm-4">
            <h2>5: Realtid</h2>
            <Link to="/reports/week/5">Week 5</Link>
          </div>
          <div class="col-sm-4">
            <h2>6: NoSQL</h2>
            <Link to="/reports/week/6">Week 6</Link>
          </div>
        </div>
      </main>
  )
}
export default Weeks;
