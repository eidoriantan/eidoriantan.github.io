
import React from 'react';

import './style.scss';
import socials from '../../assets/socials.json';

class Socials extends React.Component {
  render () {
    const socialsEls = [];
    for (let i = 0; i < socials.length; i++) {
      const social = socials[i];
      socialsEls.push(
        <a href={ social.url } key={i}>
          <img src={ social.image } alt={ social.name } width={32} />
        </a>
      );
    }

    return (
      <div className="socials">
        { socialsEls }
      </div>
    );
  }
}

export default Socials;
