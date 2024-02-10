import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import './styles.scss';
import './index.scss';
import './article.scss';
import './contact.scss';
import ContactForm from './components/ContactForm';
import Clouds from './Clouds';

const Contact = () => {
  return (
    <div>
      <Navbar openInitialState={false}/>
      <Clouds />
      <div className="main">
        <HeroSection />
      <section className="contact-body">
        <ContactForm />
      </section>
      </div>
    </div>
  );
};

export default Contact;