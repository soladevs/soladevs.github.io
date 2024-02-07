import React from 'react';

const HeroSection = ({hideSun = false}) => {
  return (
    <a href="#" className='hero-link'>
      <div className="hero">
        <h1 className="hero-title">solapowered</h1>
        {!hideSun && <img className="hero-sun" src='./sun-200.gif' />}
        <p className="hero-catchphrase">developer, designer, artist</p>
    </div>
    </a>
  );
};

export default HeroSection;
