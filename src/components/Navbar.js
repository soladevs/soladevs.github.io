import React, { useEffect, useState } from 'react';

const Navbar = ({ openInitialState }) => {
  const [navEnabled, setNavEnabled] = useState(openInitialState);

  useEffect(() => {
    setNavEnabled(openInitialState);
  }, [openInitialState]);

  const handleNavToggle = () => {
    setNavEnabled(!navEnabled);
  }

  return (
    <div className='navbar'>
      <div />
      {openInitialState ? 
          <nav className='navigation'>
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/#writing">writing</a></li>
            <li><a href="/#about">about</a></li>
            <li><a href="/#contact">contact</a></li>
          </ul>
        </nav>
        :
        <div>
          <div className='nav-toggle' onClick={handleNavToggle}> 
            {navEnabled ? '>close' : '>menu'}
          </div>
        {navEnabled &&
        <nav className='navigation'>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/#writing">writing</a></li>
          <li><a href="/#about">about</a></li>
          <li><a href="/#contact">contact</a></li>
        </ul>
      </nav>}
      </div>
      }
    </div>
  );
};

export default Navbar;
