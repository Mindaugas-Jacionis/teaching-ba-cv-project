import React from 'react';

import './index.css';
import person from '../../../static/images/person.png';

function Header() {
  return (
    <header className="Header">
      <h1>Hello</h1>
      <div className="Header__title">
        <h3>Mindaugas Jačionis</h3>
        <hr />
        <h3>Software Engineer</h3>
      </div>
      <img className="Header__illustration" src={person} alt="person illustration" />
    </header>
  )
}

export default Header;
