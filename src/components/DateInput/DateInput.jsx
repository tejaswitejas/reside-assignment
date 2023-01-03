import React, { useContext } from 'react';
import { DATE_TYPE } from '../../constants/AppConstants';
import { ACTIONS, STATE } from '../../state/constants/ContextConstants';
import { AppContext } from '../../state/context/AppContext';

import './DateInput.css';

export const DateInput = ({ dateType }) => {
  const { data, dispatch } = useContext(AppContext);

  const onSolDateChange = (e) => {
    const solRegex = /^[0-9]*$/g;
    const value = e.target.value;
    const isValid = solRegex.test(value);
    if (isValid) {
      dispatch({ type: ACTIONS.SET_DATE, payload: value });
      dispatch({ type: ACTIONS.SET_DATE_INPUT_ERROR, payload: false });
    } else {
      dispatch({ type: ACTIONS.SET_DATE_INPUT_ERROR, payload: true });
    }
  };
  const onEarthDateChange = (e) => {
    const earthDateRegex = /^\d{4}-\d{2}-\d{2}$/g;
    const value = e.target.value;
    const isValid = earthDateRegex.test(value);
    if (isValid) {
      dispatch({ type: ACTIONS.SET_DATE, payload: value });
      dispatch({ type: ACTIONS.SET_DATE_INPUT_ERROR, payload: false });
    } else {
      dispatch({ type: ACTIONS.SET_DATE_INPUT_ERROR, payload: true });
    }
  };
  return (
    <div id="date-input-container" data-testid="date-input-container">
      {dateType === DATE_TYPE.SOL && (
        <input
          id="date-input"
          className={`${data[STATE.DATE_INPUT_ERROR] && 'error'}`}
          type="number"
          placeholder="Enter sol date. Example 1000"
          onChange={onSolDateChange}
          data-testid="sol-date-input"
        />
      )}

      {dateType === DATE_TYPE.EARTH_DATE && (
        <input
          id="date-input"
          className={`${data[STATE.DATE_INPUT_ERROR] && 'error'}`}
          type="text"
          placeholder="YYYY-MM-DD"
          onChange={onEarthDateChange}
          data-testid="earth-date-input"
        />
      )}
    </div>
  );
};
