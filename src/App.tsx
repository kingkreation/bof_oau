import React from 'react';
import Routes from './Routes';
import ErrorBoundary from './components/common/ErrorBoundary';

/**
 * Main App component that serves as the entry point for our application.
 * This component wraps the Routes component which handles all navigation.
 * 
 * @returns The main application component with routing configured
 */
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="app-container font-sans">
        <Routes />
      </div>
    </ErrorBoundary>
  );
};

export default App;
