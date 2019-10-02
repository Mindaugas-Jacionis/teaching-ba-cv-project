import React from 'react';
import './index.css';

function TagList({ items = [] }) {
  return (
    <ul className="TagList">
      {items.map((item, index) => (
        <li key={index} className="TagList__item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
