import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  return (
      <main>
        <ReactMarkdown 
          source={text}
          escapeHtml={false}
        />
        <Link to={ `/${addOrEdit()}/${week}`}>{addOrEdit().toUpperCase()}</Link>
      </main>
  )
}
export default Report;
