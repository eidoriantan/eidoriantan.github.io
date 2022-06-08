
import React from 'react';

import './styles/app.scss';
import NotFound from './components/NotFound';

function PageNotFound () {
  return (
    <>
      <header>
        <a href={ process.env.PUBLIC_URL }><img src="/images/logo.png" alt="Website logo" width={32} height={32} /></a>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
      </header>

      <main>
        <NotFound />
      </main>

      <footer>
        Copyright &copy; 2022 <a href={ process.env.PUBLIC_URL }>Adriane Justine Tan</a>
      </footer>
    </>
  );
}

export default PageNotFound;
