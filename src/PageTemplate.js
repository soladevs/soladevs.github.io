import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CursorLines from './CursorLines';
import NoiseImage from './NoiseImage';

import './index.scss';
import './styles.scss';

const PageTemplate = () => {
  return (
    <div>
      <CursorLines />
      <NoiseImage />
      <Navbar openInitialState={false}/>
      <div className="main">
        <HeroSection />
        <main>
        <h1 className='page-title'>page title </h1>
        </main>
        <section className="splash-section">
          <div className="splash-container">
            <span className="splash-questionmark flip">?</span>
            <span className="splash-questionmark">?</span>
          </div>
         
        </section>
      </div>
    </div>
  );
};

export default PageTemplate;
