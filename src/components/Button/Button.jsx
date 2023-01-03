import React, { useContext } from 'react';
import { STATE } from '../../state/constants/ContextConstants';
import { AppContext } from '../../state/context/AppContext';
import './Button.css';

export const Button = ({ buttonText, iconName, onClick }) => {
  const { data } = useContext(AppContext);

  const isDisabled = () => {
    return data[STATE.DATE_INPUT_ERROR] || data[STATE.DATE] == '';
  };
  return (
    <div
      className={`button-container ${isDisabled() ? 'disabled' : ''}`}
      onClick={() => {
        onClick();
      }}>
      <ion-icon id={`${buttonText.split(' ').join('')}-${iconName}`} name={iconName}></ion-icon>
      <p className="button-text">{buttonText}</p>
    </div>
  );
};
