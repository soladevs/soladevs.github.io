import React from 'react';

const Navbar = () => {
  const [navEnabled, setNavEnabled] = React.useState(false);

  const handleNavToggle = () => {
    setNavEnabled(!navEnabled);
  }

  return (
    <div className='navbar'>
    <div className='nav-toggle' onClick={handleNavToggle}> 
      {navEnabled ? '>close' : '>menu'}
    </div>
    { navEnabled ? <nav className='navigation'>
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="/projects">projects</a></li>
        <li><a href="/writing">writing</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/contact">contact</a></li>
      </ul>
    </nav> : null }
    </div>
  );
};

export default Navbar;
