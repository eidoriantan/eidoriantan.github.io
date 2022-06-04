
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import './styles/app.scss';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends React.Component {
  render () {
    return (
      <>
        <header>
          <Link to={ process.env.PUBLIC_URL }><img src="/images/logo.png" alt="Website logo" width={32} height={32} /></Link>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          Copyright &copy; 2022 <a href={ process.env.PUBLIC_URL }>Adriane Justine Tan</a>
        </footer>
      </>
    );
  }
}

export default App;
