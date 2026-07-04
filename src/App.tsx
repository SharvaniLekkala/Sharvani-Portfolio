import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import CourtBackground from './components/CourtBackground';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
