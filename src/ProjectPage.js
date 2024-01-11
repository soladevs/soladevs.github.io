import React from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioItem from './components/PortfolioItem';
import CursorLines from './CursorLines';
import NoiseImage from './NoiseImage';

import './index.scss';
import './styles.scss';
import projects from './content/projects.json';

const ProjectPage = () => {
  const projectsBySection = projects.reduce((acc, project) => {
    const section = project.section || 'other'; 
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(project);
    return acc;
  }, {});

  return (
    <div>
      <CursorLines />
      <NoiseImage />
      <Navbar openInitialState={false}/>
      <div className="main">
        <HeroSection />
        <main>
        <h1 className='page-title'>projects //</h1>
      <section className="projects-sections">
        {Object.entries(projectsBySection).map(([section, projectsInSection]) => (
          <section key={section} className={"project-section " + section.toLowerCase() + "-section"}>
            <div className="projects-container-container">
              <h2 className="projects-section__title">{section.toLowerCase()} //</h2>
              <div className="projects-container">
                {projectsInSection.map((project) => (
                  <PortfolioItem 
                  title={project.heading}
                  description={project.subheading}
                  image={project['promo-image']}
                  imageAlt={project['promo-image-alt']}
                  tech={project.tech}
                  date={project.creationDate}
                  projectUrl={project['project-url']}
                  articleUrl={"/#projects/" + project['url-slug']}
                  status={project.availability}
                />
                ))}
                </div>
              </div>
            </section>
          ))}
      </section>
      </main>
      <section className="splash-section">
        <div className="splash-container"> 
          <span className='splash-questionmark flip'>?</span>
          <span className='splash-questionmark'>?</span>
        </div></section>
      </div>
    </div>
  );
};

export default ProjectPage;