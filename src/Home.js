import React from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PromoCard from './components/promo-card/PromoCard';
import PortfolioItem from './components/PortfolioItem';
import Testimonial from './components/Testimonial';
import ProjectCard from './components/ProjectCard';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import SkillsSection from './components/SkillsSection';
import NoiseGenerator from './NoiseGenerator';

import './styles.scss';
import CursorLines from './CursorLines';

const App = () => {
  return (
    <div>
      <Navbar openInitialState={true} />
      <div className="main">
        <HeroSection hideSun />
        <img className="home-sun" src='./sun.gif' />
        <h2 style={{textAlign: 'center'}}>this site is under construction</h2>
      </div>
    </div>
  );
};

export default App;