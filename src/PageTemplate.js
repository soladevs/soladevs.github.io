import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import './index.scss';
import './styles.scss';

const PageTemplate = () => {
  return (
    <div>
      <Navbar openInitialState={false}/>
      <div className="main">
        <HeroSection />
        <main>
        <h1 className='page-title'>page title </h1>
        </main>
        </div>
    </div>
  );
};

export default PageTemplate;
