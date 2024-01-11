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
import NoiseImage from './NoiseImage';

import './styles.scss';
import CursorLines from './CursorLines';

const App = () => {
  return (
    <div>
      <CursorLines />
      <NoiseImage />
      <Navbar openInitialState={true}/>
      <div className="main">
        <HeroSection />
        <h2 style={{textAlign: 'center'}}>this site is under construction</h2>
      <section className="splash-section">
        <div className="splash-container"> 
          <span className='splash-questionmark flip'>?</span>
          <span className='splash-questionmark'>?</span>
        </div></section>
      </div>
    </div>
  );
};

export default App;