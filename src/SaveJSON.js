import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SaveJSON = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve data from sessionStorage or localStorage
    const savedFormData = JSON.parse(sessionStorage.getItem('formData')); // Assuming data is saved in sessionStorage

    // Check if data exists
    if (savedFormData) {
      // Convert the data to JSON string
      const jsonData = JSON.stringify(savedFormData);

      // Create a Blob object containing the JSON data
      const blob = new Blob([jsonData], { type: 'application/json' });

      // Create a temporary anchor element to download the JSON file
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = 'savedFormData.json';

      // Trigger the download
      anchor.click();

      // Clean up
      URL.revokeObjectURL(anchor.href);

      // Optionally, clear the sessionStorage or localStorage after downloading
      sessionStorage.removeItem('formData');
      // localStorage.removeItem('formData'); // Uncomment this if using localStorage
    }

    // Navigate to the next page
    navigate('/next-page');
  }, [navigate]);

  return <div>Retrieving data and saving as JSON...</div>;
};

export default SaveJSON;
