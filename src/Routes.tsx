import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MissionPage from './pages/Mission';
import StructurePage from './pages/Structure';
import JoinUsPage from './pages/JoinUs';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/structure" element={<StructurePage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;