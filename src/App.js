// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ConsentPage from './ConsentPage';  // Import the ConsentPage component
import HomePage from './HomePage';        // Import the HomePage component
import DemographicPage from './DemographicPage';  // Import the DemographicPage component
import Instructions from './Instructions';  // Import the Instructions component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/consent" element={<ConsentPage />} />
            <Route path="/demographic" element={<DemographicPage />} />
            <Route path="/instructions" element={<Instructions />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
