import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioItem from './components/PortfolioItem';
import CursorLines from './CursorLines';
import NoiseImage from './NoiseImage';

import './styles.scss';
import './index.scss';
import './article.scss';

const About = () => {
  return (
    <div>
      <CursorLines />
      <NoiseImage />
      <Navbar openInitialState={false}/>
      <div className="main">
        <HeroSection />
      <section className="about-body">
      </section>
      <section className="splash-section">
        <div className="splash-container"> 
          <span className='splash-questionmark flip'>?</span>
          <span className='splash-questionmark'>?</span>
        </div></section>
      </div>
    </div>
  );
};

export default About;