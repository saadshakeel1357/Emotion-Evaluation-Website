// Instructions.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

// ConsentPage component
const Instructions = () => {
  // State to manage checkbox status
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  // Handler for checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Handler for next button click
  const handleNextButtonClick = () => {
    if (isChecked) {
      // Navigate to the next page if checkbox is checked
      navigate('/experiment');
    } else {
      // Display an alert or handle the case when checkbox is not checked
      alert('Please agree to the terms and conditions to proceed.');
    }
  };
  return (
    <div>
      {/* Terms and Conditions */}
      <p style={{ fontSize: '45px' }}>Instructions</p>
      <div style={{ height: '400px', overflowY: 'auto', border: '1px solid white', borderRadius: '5px', padding: '10px', width: '850px' }}>
        {/* Scrollable box for terms and conditions */}
        <p style={{ fontSize: '20px' }}>
          Please read these instructions <b>carefully</b> to complete the experiment smoothly:
        </p>
        {/* Individual terms */}
        <p style={{ fontSize: '14px' }}>
          - When you click the "Next" button below, a timer will appear.
        </p>
        <p style={{ fontSize: '14px' }}>
          - When you start the timer, the experiment begins.
        </p>
        <p style={{ fontSize: '14px' }}>
          - When the timer hits zero, an audio file will play. 
        </p>
        <p style={{ fontSize: '14px' }}>
          - Please listen to the audio attentively.
        </p>
        <p style={{ fontSize: '14px' }}>
          - After the audio is finished playing, you will be asked to report how the audio changes your mood.
        </p>
        <p style={{ fontSize: '14px' }}>
          - <b>Valence</b> of an emotion refers to extent to which an emotion is positive or negative, and <b>arousal</b> refers to the intensity of the emotion.
        </p>
        <p style={{ fontSize: '14px' }}>
          - After reporting your emotion, the experiment will repeat. 
        </p>
        <p style={{ fontSize: '14px' }}>
          - That is you will see the timer again, and when you start the timer, the same process will repeat.
        </p>
        <p style={{ fontSize: '14px' }}>
          - You will be allowed between 5 to 15 repititions of the experiment.
        </p>
        <p style={{ fontSize: '14px' }}>
          - You can quit anytime after 5 repititions, by clicking the "Quit" button.
        </p>
        
        {/* Add more terms and conditions as needed */}
      </div>
      {/* Checkbox */}
      <div>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <label htmlFor="checkbox" style={{ fontSize: '20px' }}>I have read the instructions</label>
      </div>
      {/* Next button */}
      <button className="App-button" onClick={handleNextButtonClick} disabled={!isChecked}>
        Next
      </button>

    </div>
  );
};


export default Instructions;
