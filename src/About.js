import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioItem from './components/PortfolioItem';
import ScanlineEffect from './ScanlineEffect';
import CursorLines from './CursorLines';
import NoiseImage from './NoiseImage';

import './styles.css';
import './index.css';
import './article.css';

const About = () => {
  return (
    <div>
      <CursorLines />
      <NoiseImage
        width={128}
        height={128}
        scale={50}
        octaves={5}
        persistence={0.5}
        lacunarity={1.0}
      />
      <Navbar />
      <div className="main">
        <HeroSection />
      <section className="about-body">
      </section>
      <section className="splash-section">
        <div className="splash-container"> 
          <span className='splash-questionmark flip'>?</span>
          <span className='splash-questionmark'>?</span>
        </div>
       <ScanlineEffect />
      </section>
      </div>
    </div>
  );
};

export default About;