import React from 'react';

import './ErrorMessage.css';

export const ErrorMessage = ({ errorMessage }) => {
  return (
    <div id="error-message-container">
      <img
        className="space-broke"
        src={require('../../assets/space-broke.png')}
        alt="space-broke-icon"
      />
      <p className="message">{errorMessage}</p>
    </div>
  );
};
