import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

// ConsentPage component
const ConsentPage = () => {
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
      navigate('/demographic');
    } else {
      // Display an alert or handle the case when checkbox is not checked
      alert('Please agree to the terms and conditions to proceed.');
    }
  };

  return (
    <div>
      {/* Terms and Conditions */}
      <p style={{ fontSize: '45px' }}>Terms and Conditions</p>
      <div style={{ height: '400px', overflowY: 'auto', border: '1px solid white', borderRadius: '5px', padding: '10px', width: '850px' }}>
        {/* Scrollable box for terms and conditions */}
        <p style={{ fontSize: '20px' }}>
          By using this website, you agree to the following terms and conditions:
        </p>
        {/* Individual terms */}
        <p style={{ fontSize: '14px' }}>
          1. Data Collection and Analysis: By using this website, you consent to the collection and analysis of your interaction data, including valence and arousal assessments, for research and analytical purposes. Your data will be securely stored and processed using data science techniques and backend technologies. Personal information will be kept confidential and used in accordance with our privacy policy.
        </p>
        <p style={{ fontSize: '14px' }}>
          2. Intellectual Property Rights: All multimedia stimuli, content, and features on this website are protected by intellectual property laws and belong to the respective owners. Users are prohibited from reproducing, distributing, or modifying any content without prior authorization from the owners.
        </p>
        <p style={{ fontSize: '14px' }}>
          3. User Responsibilities: Users are solely responsible for their interactions and activities on the website. Any misuse, unauthorized access, or attempt to disrupt the website's functionality is strictly prohibited.
        </p>
        <p style={{ fontSize: '14px' }}>
          4. Disclaimer of Warranties: This website is provided on an "as is" and "as available" basis without any warranties, express or implied. We do not guarantee the accuracy, reliability, or availability of the website or its content. Users access and use the website at their own risk.
        </p>
        <p style={{ fontSize: '14px' }}>
          5. Limitation of Liability: In no event shall the website owners, developers, or affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the website, even if advised of the possibility of such damages.
        </p>
        {/* Add more terms and conditions as needed */}
      </div>
      {/* Checkbox */}
      <div>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <label htmlFor="checkbox" style={{ fontSize: '20px' }}>I agree to the terms and conditions</label>
      </div>
      {/* Next button */}
      <button className="App-button" onClick={handleNextButtonClick} disabled={!isChecked}>
        Next
      </button>
    </div>
  );
};

export default ConsentPage;
