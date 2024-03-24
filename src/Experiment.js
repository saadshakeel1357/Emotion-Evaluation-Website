// Experiment.js
import React from 'react';

const Experiment = () => (
  <div>
    <p style={{ fontSize: '45px' }}>Timer here... </p>
    <div>
      <p></p>
      <button className="App-button" onClick={() => { window.location.href = "/instructions"; }}>
        Start
      </button>
    </div>
  </div>
);

export default Experiment;
