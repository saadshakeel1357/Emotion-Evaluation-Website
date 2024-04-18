import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const SliderPage = () => {
  // Initialize necessary state variables
  const navigate = useNavigate();
  const [valence, setValence] = useState(4); // Initial value for valence slider
  const [arousal, setArousal] = useState(5); // Initial value for arousal slider
  const [clickCount, setClickCount] = useState(() => {
    // Retrieve click count from local storage or default to 0
    const storedClickCount = localStorage.getItem('clickCount');
    return storedClickCount ? parseInt(storedClickCount, 10) : 0;
  });
  const [valenceModified, setValenceModified] = useState(true); // Track if valence slider is modified
  const [arousalModified, setArousalModified] = useState(true); // Track if arousal slider is modified

  // Handler for valence slider change
  const handleValenceChange = (e) => {
    setValence(Number(e.target.value));
    setValenceModified(true); // Set valenceModified to true when valence slider is modified
  };

  // Handler for arousal slider change
  const handleArousalChange = (e) => {
    setArousal(Number(e.target.value));
    setArousalModified(true); // Set arousalModified to true when arousal slider is modified
  };

  // Handler for next button click
  const handleNextButtonClick = () => {
    // Check if both valence and arousal sliders are modified
    if (valenceModified && arousalModified) {
      // Increment click count
      const updatedClickCount = clickCount + 1;
      setClickCount(updatedClickCount);

      // Save click count to local storage
      localStorage.setItem('clickCount', updatedClickCount.toString());

      if (updatedClickCount >= 10) {
        // Redirect to thank you page if click count exceeds 10
        navigate('/thankyou');
      } else {
        // Redirect back to the timer page to restart the process
        navigate('/experiment');
      }
    } else {
      // Alert user if sliders are not both modified
      alert('Please modify both sliders before proceeding.');
    }
  };

  // Handler for reset button click
  const handleResetButtonClick = () => {
    // Clear click count from local storage
    localStorage.removeItem('clickCount');
    // Reset click count in the state
    setClickCount(0);
  };

  return (
    <div>
      {/* Header and instructions */}
      <p style={{ fontSize: '25px' }}>Arousal is an emotional dimension of musical energy level, while Valence is an emotional dimension of the comfort level of the listener</p>
      <p style={{ fontSize: '35px' }}>Please report the extent of what you feel about the valence and arousal of the audio played previously</p>

      {/* Valence slider */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="valenceSlider">Valence:</label>
        <input
          type="range"
          id="valenceSlider"
          name="valenceSlider"
          min="1"
          max="10"
          value={valence}
          onChange={handleValenceChange}
        />
        <span>{valence}</span>
      </div>

      {/* Arousal slider */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="arousalSlider">Arousal:</label>
        <input
          type="range"
          id="arousalSlider"
          name="arousalSlider"
          min="1"
          max="10"
          value={arousal}
          onChange={handleArousalChange}
        />
        <span>{arousal}</span>
      </div>

      {/* Next button */}
      <button className="App-button" onClick={handleNextButtonClick} disabled={!valenceModified || !arousalModified}>
        Next
      </button>

      {/* Reset button */}
      <button className="App-button" onClick={handleResetButtonClick}>
        Reset Click Count
      </button>
    </div>
  );
};

export default SliderPage;
