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
import WritingPage from './WritingPage';
import Clouds from './Clouds';
import ArticleCards from './ArticleCards';
import CursorLines from './CursorLines';

import './styles.scss';

const App = () => {
  return (
    <div>
      <div className="main home">
      <Navbar openInitialState={false}/>
        <Clouds />
        <HeroSection hideSun />
        <img className="home-sun" src='./sun.gif' />
        <div className="home-padding" />
        <ArticleCards />
      </div>
    </div>
  );
};

export default App;