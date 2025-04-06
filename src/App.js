// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Spinner from './components/common/Spinner';
import BackToTop from './components/common/BackToTop';
import './assets/css/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Spinner />
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;