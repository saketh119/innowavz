// src/routes.js
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

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