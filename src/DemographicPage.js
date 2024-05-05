import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// DemographicPage component
const DemographicPage = () => {
  // State to manage form data and validity
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    education: '',
    field: ''
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
      
      // // Create a Blob object containing the JSON data
      // const blob = new Blob([JSON.stringify(formData)], { type: 'application/json' });

      // // Create a temporary anchor element to download the JSON file
      // const anchor = document.createElement('a');
      // anchor.href = URL.createObjectURL(blob);
      // anchor.download = 'formData.json';

      // // Trigger the download
      // anchor.click();

      // // Clean up
      // URL.revokeObjectURL(anchor.href);

      navigate('/instructions'); // Navigate to the next page
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
        <div style={{ height: '150px', overflowY: 'auto', border: '1px solid white', borderRadius: '5px', padding: '10px', width: '450px' }}>
          {/* Individual form fields */}
          <div>
            <label htmlFor="age" style={{ fontSize: '18px' }}>Age:  </label>
            <select id="age" name="age" value={formData.age} onChange={handleInputChange} style={{ fontSize: '10px' }}>
              <option value="">Select</option>
              <option value="underage">18 below</option>
              <option value="young">18-25</option>
              <option value="midage">26-40</option>
              <option value="old">41 above</option>
              {/* <option value="other">Other</option> */}
            </select>
          </div>
          <div>
            <label htmlFor="gender" style={{ fontSize: '18px' }}>Gender:  </label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} style={{ fontSize: '10px' }}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              {/* <option value="other">Other</option> */}
            </select>
          </div>
          <div>
            <label htmlFor="education" style={{ fontSize: '18px' }}>Education Level:  </label>
            <select id="education" name="education" value={formData.education} onChange={handleInputChange} style={{ fontSize: '10px' }}>
              <option value="">Select</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          <div>
            <label htmlFor="field" style={{ fontSize: '18px' }}>Field of Study:  </label>
            <select id="field" name="field" value={formData.field} onChange={handleInputChange} style={{ fontSize: '10px' }}>
              <option value="">Select</option>
              <option value="cs">Computer Science</option>
              <option value="finance">Finance</option>
              <option value="psychology">Psychology</option>
              <option value="other">Other</option>
            </select>
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
