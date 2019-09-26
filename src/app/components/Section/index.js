import React from 'react';

function Section(props) {
  return (
    <section className={props.className}>
      {props.title && <h3>{props.title}</h3>}
      {props.children}
    </section>
  );
}

export default Section;
