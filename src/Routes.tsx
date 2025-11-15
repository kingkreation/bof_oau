import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * Page component imports
 * Each import represents a main page in our application
 */
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MissionPage from './pages/Mission';
import StructurePage from './pages/Structure';

/**
 * AppRoutes component that handles all application routing
 * This component defines the navigation structure of our application
 * and maps URL paths to their corresponding page components
 * 
 * Note: JoinUs page/route has been removed and join actions now point to an external link.
 */
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main application routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/structure" element={<StructurePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;