import React from 'react';
import Routes from './Routes';

/**
 * Main App component that serves as the entry point for our application.
 * This component wraps the Routes component which handles all navigation.
 * 
 * @returns The main application component with routing configured
 */
const App: React.FC = () => {
  return (
    <div className="app-container">
      <Routes />
    </div>
  );
};

export default App;
