import React from 'react';
import './index.scss';
import { HashRouter, useRoutes } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Home from './Home';
import ProjectPage from './ProjectPage';
import WritingPage from './WritingPage';
import Article from './Article';
import Contact from './Contact';
import About from './About';
import Project from './Project';
import LongformArticle from './LongformArticle';

const App = () => {
  let routes = useRoutes([
    { path: "/", index: true, element: <Home /> },
    { path: "/projects", element: <ProjectPage /> },
    { path: "/projects/:projectId", element: <Project /> },
    { path: "/writing", element: <WritingPage /> },
    { path: "/writing/:articleId", element: <Article /> },
    { path: "/gallery/:articleId", element: <LongformArticle /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    // // ...
  ]);
  return routes;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
