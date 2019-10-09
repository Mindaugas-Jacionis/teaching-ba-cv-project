import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function ErrorMessage() {
  return <div style={{ textAlign: 'center', width: '100%' }}><h1>We're sorry we failed to load content! :(</h1></div>
}

function Main(props) {
  return (
    <main className="Main flex">
      <ErrorBoundary component={ErrorMessage}>{props.children}</ErrorBoundary>
    </main>
  );
}

export default Main;
