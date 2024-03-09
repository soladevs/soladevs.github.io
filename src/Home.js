import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Clouds from './Clouds';
import ArticleCards from './ArticleCards';

import './index.scss';

import './styles.scss';

const App = () => {
  return (
    <div>
      <div className="main home">
      <Navbar openInitialState={false}/>
        <Clouds />
        <HeroSection hideSun />
        <img className="home-sun" alt="rotating sun logo" src='./sun.gif' />
        <div className="home-padding" />
        <ArticleCards />
        <Footer />
      </div>
    </div>
  );
};

export default App;