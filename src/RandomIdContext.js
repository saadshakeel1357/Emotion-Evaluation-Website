import React, { createContext, useState } from 'react';

const RandomIdContext = createContext();

const RandomIdProvider = ({ children }) => {
  const [randomId, setRandomId] = useState(() => generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 90) + 10;
  }

  return (
    <RandomIdContext.Provider value={{ randomId, setRandomId }}>
      {children}
    </RandomIdContext.Provider>
  );
};

export { RandomIdContext, RandomIdProvider };
