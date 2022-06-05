
import React from 'react';
import { Link, Navigate, Routes, Route, useLocation } from 'react-router-dom';

import './styles/app.scss';
import Home from './components/Home';
import Contact from './components/Contact';

function App () {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const redirect = search.get('redirect');
  if (redirect !== null) return <Navigate to={redirect} />;

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

export default App;
