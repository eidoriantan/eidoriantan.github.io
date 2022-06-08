
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import './styles/app.scss';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <header>
          <Link to={ process.env.PUBLIC_URL }><img src="/images/logo.png" alt="Website logo" width={32} height={32} /></Link>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </header>

        <main>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
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

export default App;
