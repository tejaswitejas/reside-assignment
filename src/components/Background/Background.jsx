import React from 'react';
import { Overlay } from '../Overlay/Overlay';
import './Background.css';

export const Background = () => {
  return (
    <div id="bg-container" data-testid="bg-container">
      <Overlay />
    </div>
  );
};
