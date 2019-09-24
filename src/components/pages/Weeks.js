import React from 'react';
import { Link } from 'react-router-dom';

const Weeks = () => {
  return (
      <main>
        <h1>Reports</h1>
        <p>Här samlar jag veckornas alla redovisningstexter, det är även här jag kan gå in och redigera samt lägga till nya texter.</p>
        <p>Kursen läses på Blekinge Tekniska Högskola, som ingår i programmet Webbprogrammering. <a href="https://jsramverk.me/">https://jsramverk.me/</a></p>
        <div className="row">
          <div className="col-sm-4">
            <h2>Kmom01</h2>
            <p>I det första kursmoment fokuserade vi på frontend.</p>
            <Link to="/reports/week/1">Länk till redovisningstexten</Link>
          </div>
          <div className="col-sm-4">
            <h2>Kmom02</h2>
            <p>Den andra veckan var det fokus på användaren upplevelse (UX).</p>
            <Link to="/reports/week/2">Länk till redovisningstexten</Link>
          </div>
          <div className="col-sm-4">
            <h2>Kmom03</h2>
            <p>Den tredje veckan var fokus på Backend. Vi kopplar samman frontend med backend.</p>
            <Link to="/reports/week/3">Länk till redovisningstexten</Link>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <h2>Kmom04</h2>
            <Link to="/reports/week/4">Länk till redovisningstexten</Link>
          </div>
          <div className="col-sm-4">
            <h2>Kmom05</h2>
            <Link to="/reports/week/5">Länk till redovisningstexten</Link>
          </div>
          <div className="col-sm-4">
            <h2>Kmom05</h2>
            <Link to="/reports/week/6">Länk till redovisningstexten</Link>
          </div>
        </div>
      </main>
  )
}
export default Weeks;
