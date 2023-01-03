import React from 'react';
import { Filters } from '../Filters/Filters';

import Title from '../Title/Title';

import './Header.css';

export const Header = () => {
  return (
    <div id="header-container" data-testid="header-container">
      <Title />
      <Filters />
    </div>
  );
};
