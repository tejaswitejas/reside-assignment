import React from 'react';
import './Overlay.css';

export const Overlay = ({ absolute }) => {
  return <div id="overlay-container" className={absolute ? 'absolute' : ''}></div>;
};
