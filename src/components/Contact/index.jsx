
import React from 'react';

import './style.scss';
import ContactForm from '../ContactForm';
import Socials from '../Socials';

class Contact extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h2 className="contact-title">Contact</h2>
        <ContactForm />

        <h3 className="social-title">Social media</h3>
        <Socials />
      </React.Fragment>
    );
  }
}

export default Contact;
