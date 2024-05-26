import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom'; // Import necessary hooks and components from React Router
import videoBg from "./components/bgvideo.mp4";
import './App.css';
import './styling/DemographicPage.css'; // Import CSS file for styling

// DemographicPage component
const DemographicPage = () => {
  // State to manage form data and validity
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    education: '',
    field: '',
    englishProficiency: '' // Add new state for English proficiency
  });
  const [formValid, setFormValid] = useState(false); // Track form validity
  const navigate = useNavigate();

  // Effect to check form validity on form data change
  useEffect(() => {
    // Check if all form fields are filled
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    setFormValid(isFormValid);
  }, [formData]);

  // Handler for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValid) {
      // Save form data to sessionStorage
      sessionStorage.setItem('formData', JSON.stringify(formData));

      // Create a Blob object containing the JSON data
      const blob = new Blob([JSON.stringify(formData)], { type: 'application/json' });

      // Create a temporary anchor element to download the JSON file
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = 'formData.json';

      // Trigger the download
      anchor.click();

      // Clean up
      URL.revokeObjectURL(anchor.href);

      navigate('/instructions'); // Navigate to the next page
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const randomId = searchParams.get('randomId');

  return (
    <div>
      <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: '0.8' }} playbackRate={0.25}>
        <source src={videoBg} type="video/mp4"></source>
      </video>

      {/* Participant ID */}
      <button className="user-id">{randomId}</button>

      {/* VibeVision text */}
      <div className="vibe-vision">VibeVision</div>

      {/* Container for elements */}
      <div className="container">
        {/* Welcome text */}
        <div className="demographics">Demographics</div>

        <div className="form-box">
          <div className='form'>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Individual form fields */}
              <div>
                <label htmlFor="age">Age: </label>
                <select id="age" name="age" value={formData.age} onChange={handleInputChange} className='dropdown'>
                  <option value="">Select</option>
                  <option value="underage">18 below</option>
                  <option value="young">18-25</option>
                  <option value="midage">26-40</option>
                  <option value="old">41 above</option>
                </select>
              </div>

              <div>
                <label htmlFor="gender">Gender: </label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} className='dropdown'>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label htmlFor="education">Education Level: </label>
                <select id="education" name="education" value={formData.education} onChange={handleInputChange} className='dropdown'>
                  <option value="">Select</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div>
                <label htmlFor="field">Field of Study: </label>
                <select id="field" name="field" value={formData.field} onChange={handleInputChange} className='dropdown'>
                  <option value="">Select</option>
                  <option value="cs">Computer Science</option>
                  <option value="finance">Finance</option>
                  <option value="psychology">Psychology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="englishProficiency">Understanding spoken English: </label>
                <select id="englishProficiency" name="englishProficiency" value={formData.englishProficiency} onChange={handleInputChange} className='dropdown'>
                  <option value="">Select</option>
                  <option value="bad">Bad</option>
                  <option value="good">Good</option>
                  <option value="veryGood">Very Good</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <button type="submit" className="form-button" disabled={!formValid} onClick={handleSubmit}>
          {/* Next */}
          {formValid ? (
            <Link to={`/instructions?randomId=${randomId}`} className='link'>Next</Link>
          ) : (
            <span className='disabled-link'>Next</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default DemographicPage;
