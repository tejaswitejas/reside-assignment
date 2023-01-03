import React, { useContext } from 'react';
import { ACTIONS } from '../../state/constants/ContextConstants';
import { AppContext } from '../../state/context/AppContext';

import './SelectInput.css';

export const SelectInput = ({ id, label, options, value, name, icon }) => {
  const { dispatch } = useContext(AppContext);
  const onChange = (e) => {
    dispatch({
      type: name === 'rover' ? ACTIONS.SET_ROVER : ACTIONS.SET_CAMERA,
      payload: e.target.value
    });
  };
  return (
    <div id="select-input-container" data-testid="select-input-container">
      <div className="label-container">
        {icon}
        <label className="label" htmlFor={name}>
          {label + ' :'}
        </label>
      </div>
      <select
        className="select"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        data-testid="select-options">
        {options.map((option, index) => {
          return (
            <option key={index.toString()} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
