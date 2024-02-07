import React from 'react';

const HeroSection = ({hideSun = false}) => {
  return (
    <a href="#" className='hero-link'>
      <div className="hero">
        <h1 className="hero-title">solapowered</h1>
        <p className="hero-catchphrase">developer, designer, artist</p>
        {!hideSun && <img className="hero-sun" src='./sun-200.gif' />}
    </div>
    </a>
  );
};

export default HeroSection;
