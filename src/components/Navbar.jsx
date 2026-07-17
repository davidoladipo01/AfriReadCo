import React from 'react'
import Logo from './Logo';

const Navbar = () => {

  return (
    <nav className="navbar">
      <Logo className="navbar-logo" width={170} height={80} />

      {/* other navbar items */}
    </nav>
  );
}

export default Navbar
