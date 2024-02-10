import React from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioItem from './components/PortfolioItem';
import ArticleCards from './ArticleCards';
import './index.scss';
import './styles.scss';
import articles from './content/articles.json';
import PromoCard from './components/promo-card/PromoCard';
import Clouds from './Clouds';

const WritingPage = () => {
  return (
    <div className='writingpage'>
      <Clouds />
      <div className='writing'>
      <div className="main">
        <Navbar openInitialState={false} />
        <HeroSection />
        <main>
          <ArticleCards />
        </main>
        </div>
        </div>
    </div>
  );
};

export default WritingPage;
