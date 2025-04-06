// src/routes.js
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Services from './assets/pages/Services';
import Projects from './assets/pages/Contact';
import Team from './assets/pages/Team';
import Testimonials from './assets/pages/Testimonials';
import Contact from './assets/pages/projects';
import NotFound from './assets/pages/NotFound';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/projects', element: <Projects /> },
  { path: '/team', element: <Team /> },
  { path: '/testimonials', element: <Testimonials /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
];

export default routes;