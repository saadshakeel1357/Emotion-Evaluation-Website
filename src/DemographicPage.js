import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

// DemographicPage component
const DemographicPage = () => {
  // State to manage form data and validity
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    education: '',
    occupation: '',
    skincolor: ''
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
      navigate('/instructions');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div>
      {/* Demographics header */}
      <p style={{ fontSize: '45px' }}>Demographics</p>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ height: '180px', overflowY: 'auto', border: '1px solid white', borderRadius: '5px', padding: '10px', width: '450px' }}>
          {/* Individual form fields */}
          <div>
            <label htmlFor="age" style={{ fontSize: '18px' }}>Age:  </label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} style={{ fontSize: '10px' }} />
          </div>
          <div>
            <label htmlFor="gender" style={{ fontSize: '18px' }}>Gender:  </label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} style={{ fontSize: '10px' }}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="education" style={{ fontSize: '18px' }}>Education Level:  </label>
            <input type="text" id="education" name="education" value={formData.education} onChange={handleInputChange} style={{ fontSize: '10px' }} />
          </div>
          <div>
            <label htmlFor="occupation" style={{ fontSize: '18px' }}>Occupation:  </label>
            <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleInputChange} style={{ fontSize: '10px' }} />
          </div>
          <div>
            <label htmlFor="skincolor" style={{ fontSize: '18px' }}>Skin Color:  </label>
            <input type="text" id="skincolor" name="skincolor" value={formData.skincolor} onChange={handleInputChange} style={{ fontSize: '10px' }} />
          </div>
        </div>
        {/* Submit button */}
        <button type="submit" className="App-button" style={{ marginTop: '20px' }} disabled={!formValid}>
          Next
        </button>
      </form>
    </div>
  );
};

export default DemographicPage;
