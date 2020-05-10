import React from 'react';
import Link from './link';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to="/" className="home">
          Migrate WordPress to the Jamstack
        </Link>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
