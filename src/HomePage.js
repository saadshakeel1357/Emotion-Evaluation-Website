// HomePage.js
import React from 'react';

const HomePage = () => (
  <div>
    <p style={{ fontSize: '45px' }}>Measuring Emotions During Multimedia Interaction</p>
    <div>
      <p></p>
      <button className="App-button" onClick={() => { window.location.href = "/consent"; }}>
        Start
      </button>
    </div>
  </div>
);

export default HomePage;
