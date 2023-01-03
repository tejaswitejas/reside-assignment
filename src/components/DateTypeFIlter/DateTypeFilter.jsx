import React, { useContext } from 'react';
import { DATE_TYPE } from '../../constants/AppConstants';
import { ACTIONS, STATE } from '../../state/constants/ContextConstants';
import { AppContext } from '../../state/context/AppContext';

import './DateTypeFilter.css';

const PlanetIcon = () => {
  return <ion-icon id="planet-icon" name="planet-outline"></ion-icon>;
};

const EarthIcon = () => {
  return <ion-icon id="earth-icon" name="earth-outline"></ion-icon>;
};

const DateTypeButton = ({ icon, selected, buttonText, value }) => {
  const { dispatch } = useContext(AppContext);

  const buttonOnclick = () => {
    dispatch({ type: ACTIONS.SET_DATE_TYPE, payload: value });
    dispatch({ type: ACTIONS.SET_DATE, payload: '' });
  };
  return (
    <div className="date-type-container" onClick={buttonOnclick}>
      {icon}
      <div className={`date-type-text-container ${selected && 'selected'}`}>
        <p className={`date-type-text ${selected && 'selected'}`}>{buttonText}</p>
      </div>
    </div>
  );
};

export const DateTypeFilter = () => {
  const { data } = useContext(AppContext);

  return (
    <div id="date-type-filter-container">
      <DateTypeButton
        icon={<PlanetIcon />}
        selected={data[STATE.DATE_TYPE] === DATE_TYPE.SOL}
        buttonText="Sol Date"
        value={DATE_TYPE.SOL}
      />
      <DateTypeButton
        icon={<EarthIcon />}
        selected={data[STATE.DATE_TYPE] === DATE_TYPE.EARTH_DATE}
        buttonText="Earth Date"
        value={DATE_TYPE.EARTH_DATE}
      />
    </div>
  );
};
