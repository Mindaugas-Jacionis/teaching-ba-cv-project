import React from 'react';
import './index.css';

function Link({ children, href, shouldTargetBlank }) {
  const props = shouldTargetBlank
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <a className="Link" href={href} {...props}>
      {children}
    </a>
  );
}

export default Link;
