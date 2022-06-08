
import React from 'react';
import './style.scss';

class NotFound extends React.Component {
  render () {
    return (
      <section className="blankslate">
        <h1>Page was not found!</h1>
        <p className="mb-2">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to homepage.
        </p>

        <a href="/" className="btn">Homepage</a>
      </section>
    );
  }
}

export default NotFound;
