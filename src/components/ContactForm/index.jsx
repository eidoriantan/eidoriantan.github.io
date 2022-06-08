
import React from 'react';
import './style.scss';

class ContactForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { submitMessage: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit (event) {
    event.preventDefault();
    this.setState({ submitMessage: 'Submitting...' });

    const action = event.target.action;
    const method = event.target.method;
    const data = JSON.stringify({
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      subject: document.querySelector('#subject').value,
      message: document.querySelector('#message').value
    });

    const response = await fetch(action, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    });

    const json = await response.json();
    let message = '';

    if (json.ok) {
      message = 'Thank you for sending me a message!';
      event.target.reset();
    } else {
      message = Object.hasOwn(json, 'errors')
        ? json.errors.map(error => error.message.join(', '))
        : 'There was a problem submitting your message.';
    }

    this.setState({ submitMessage: message });
  }

  render () {
    return (
      <div className={this.props.className}>
        <div className="contact-additional">
          <div>Email: <a href="mailto:admin@eidoriantan.tk">admin@eidoriantan.tk</a></div>
          <div>Mobile Number: <a href="tel://+639383983612">+639383983612</a></div>
          <p>You can also contact me through the form below!</p>
        </div>

        <form action="https://formspree.io/f/xwkyygaw" method="post" onSubmit={this.handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="form-group mb-2">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="name@example.com" required />
          </div>

          <div className="form-group mb-2">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
          </div>

          <div className="form-group mb-2">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
          </div>

          <button type="submit" className="btn">Send</button>
          <span className="submission-status">{ this.state.submitMessage }</span>
        </form>
      </div>
    );
  }
}

export default ContactForm;
