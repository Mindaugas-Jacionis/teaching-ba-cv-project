import React from 'react';

class ErrorBoundary extends React.Component {
  state = { error: false };

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log('componentDidCatch');
    console.log('info', info);
    console.log('error', error);
  }

  render() {
    const { error } = this.state;
    const { children, component: Component } = this.props;
    console.log('render err', error, children);

    if (error) {
      return Component ? <Component /> : <p>Oh Nooo!</p>;
    }

    return children;
  }
}

export default ErrorBoundary;