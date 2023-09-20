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
import ScanlineEffect from './ScanlineEffect';
import NoiseImage from './NoiseImage';

import './styles.css';
import CursorLines from './CursorLines';

const App = () => {
  return (
    <div>
      <CursorLines />
      {/* <ReactMarkdown>{exampleMarkdown}</ReactMarkdown> */}
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

export default App;