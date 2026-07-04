import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import CourtBackground from './components/CourtBackground';

// Scrolls to a hash section whenever the URL hash changes (e.g. after /#about redirect)
const HashScrollHandler: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      // Short delay so the DOM has time to render
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <HashScrollHandler />
      <ScrollProgressBar />
      <Navbar />
      
      {/* ── SIGNATURE VISUAL IDENTITY BACKGROUND ── */}
      <CourtBackground />

      <div className="pt-20 relative z-10"> {/* Offset for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
