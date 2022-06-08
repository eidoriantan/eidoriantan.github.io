
import React from 'react';

import './styles/app.scss';
import NotFound from './components/NotFound';

class PageNotFound extends React.Component {
  render () {
    return (
      <React.Fragment>
        <header>
          <a href={ process.env.PUBLIC_URL }><img src="/images/logo.png" alt="Website logo" width={32} height={32} /></a>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
        </header>

        <main>
          <NotFound />
        </main>

        <footer>
          <div className="mb-2">
            Copyright &copy; 2022 <a href={ process.env.PUBLIC_URL }>Adriane Justine Tan</a>
          </div>

          <div className="cc-license">
            <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" className="d-block">
              <img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Creative Commons License" />
            </a>

            This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default PageNotFound;
