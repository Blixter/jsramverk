import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const ReactMarkdown = require('react-markdown/with-html')

const Report = ({ match }) => {
  const week = match.params.week;
  const userData = JSON.parse(localStorage.getItem("user"));
  const [text, setText] = useState();

  useEffect(() => {
    axios.get(`https://me-api.blixter.me/reports/${week}`,
    { headers: {"x-access-token" : `${userData.token}`} })
      .then(res => setText(res.data.text));
  });

  function addOrEdit () {
    if (text) {
      return "edit"
    }
    return "add"
  }

  console.log(typeof text);
  return (
      <main>
        <Link to={ `/${addOrEdit()}/${week}`}>{addOrEdit().toUpperCase()}</Link>
        <ReactMarkdown 
          source={text}
          escapeHtml={false}
        />
      </main>
  )
}
export default Report;
