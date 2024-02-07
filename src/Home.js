import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './styles.scss';

const App = () => {
  return (
    <div>
      <Navbar openInitialState={false} />
      <div className="main">
        <HeroSection hideSun />
        <img className="home-sun" src='./sun.gif' alt="Spinning sun logo"/>
        <h2 style={{textAlign: 'center'}}>this site is under construction</h2>
      </div>
    </div>
  );
};

export default App;