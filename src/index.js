import React from 'react';
import './index.css';
import { BrowserRouter, HashRouter, useRoutes } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Home from './Home';
import ProjectPage from './ProjectPage';
import WritingPage from './WritingPage';
import Article from './Article';
import Contact from './Contact';
import About from './About';
// import Item from './pages/Item';
// import Contact from './pages/Contact';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <ProjectPage /> },
    { path: "/writing", element: <WritingPage /> },
    { path: "/writing/:articleId", element: <Article /> },
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
  </HashRouter>,
  document.getElementById('root')
);
