import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioItem from './components/PortfolioItem';

import './styles.scss';
import './index.scss';
import './article.scss';

const About = () => {
  return (
    <div>
      <Navbar openInitialState={false}/>
      <div className="main">
        <HeroSection />
      <section className="about-body">
      </section>
      </div>
    </div>
  );
};

export default About;