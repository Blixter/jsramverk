import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Report from './Report';

const Weeks = () => {
  return (
      <main>
        <nav>
          <ul>
            <li><Link to="/reports/week/1">Week1</Link></li>
            <li><Link to="/reports/week/2">Week 2</Link></li>
            <li><Link to="/reports/week/3">Week 3</Link></li>
            <li><Link to="/reports/week/4">Week 4</Link></li>
            <li><Link to="/reports/week/5">Week 5</Link></li>
            <li><Link to="/reports/week/6">Week 6</Link></li>
          </ul>
        </nav>
      </main>
  )
}
export default Weeks;
