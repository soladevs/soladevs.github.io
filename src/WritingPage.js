import React from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioItem from './components/PortfolioItem';

import './index.scss';
import './styles.scss';
import articles from './content/articles.json';
import PromoCard from './components/promo-card/PromoCard';

const WritingPage = () => {
  const articlesBySection = articles.reduce((acc, article) => {
    const section = article.section || 'other'; 
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(article);
    return acc;
  }, {});

  return (
    <div>
      <Navbar openInitialState={false}/>
      <div className="main">
        <HeroSection />
        <main>
        <h1 className='page-title'>writing // </h1>
        {Object.entries(articlesBySection).map(([section, articlesInSection]) => (
          <section key={section} className="articles-section">
            <div className="articles-container-container">
              <h2 className="articles-section__title">{section.toLowerCase()} //</h2>
              <div className="articles-container">
                {articlesInSection.map((article) => (
                  <PromoCard
                    key={article.id} 
                    headline={article.heading}
                    summary={article.subheading}
                    destinationUrl={article['url-slug']}
                    imageSrc={article['promo-image']}
                    date={article['creation-date']}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
        </main>
        </div>
    </div>
  );
};

export default WritingPage;
