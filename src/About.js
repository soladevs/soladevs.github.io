import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import './styles.scss';
import './index.scss';
import './article.scss';
import Clouds from './Clouds';




const About = () => {
  const [content, setContent] = React.useState({});

  // load about-me.md 
  useEffect(() => {
      fetch("/content/about-me.md")
        .then(response => response.text())
        .then(text => {
          setContent(text);
    }, []);
  });

  return (
    <div>
      <Navbar openInitialState={false}/>
      <Clouds />
      <div className="main">
        <HeroSection />
      <section className="about-body">
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
      </div>
    </div>
  );
};

export default About;