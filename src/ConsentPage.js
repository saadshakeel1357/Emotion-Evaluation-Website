import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const ConsentPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleNextButtonClick = () => {
    if (isChecked) {
      // Navigate to the next page if checkbox is checked
      navigate('/demographic');
    } else {
      // Display an alert or handle the case when checkbox is not checked
      alert('Please agree to the terms and conditions to proceed.');
    }
  };

  return (
    <div>
      <h1>Terms and Conditions</h1>
      <div style={{ height: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {/* Scrollable box for terms and conditions */}
        <p>
          Tick the box if you are not a pussy ( . )( . )
        </p>
        {/* Add more terms and conditions as needed */}
      </div>
      <div>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <label htmlFor="checkbox">I agree to the terms and conditions</label>
      </div>
      <button onClick={handleNextButtonClick} disabled={!isChecked}>
        Next
      </button>
    </div>
  );
};

export default ConsentPage;
