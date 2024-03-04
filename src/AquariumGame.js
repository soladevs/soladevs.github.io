import React from 'react';
import HeroSection from './components/HeroSection';
import './styles.scss';
import UnityComponent from './UnityComponent';

const AquariumGame = () => {
  return (
    <div>
      <div className="main home">
        <HeroSection hideSun />

        <UnityComponent />
      </div>
    </div>
  );
};

export default AquariumGame;