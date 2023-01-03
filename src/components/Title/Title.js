import React from 'react';
import './Title.css';

const Title = () => {
  return (
    <div id="title-container">
      <ion-icon id="planet-icon" name="planet-outline"></ion-icon>
      <div className="text-content">
        <p className="mars-text">Mars</p>
        <p className="sub-text" data-testid="sub-text">
          The red planet
        </p>
      </div>
    </div>
  );
};

export default Title;
