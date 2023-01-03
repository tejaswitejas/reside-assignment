import React, { useContext } from 'react';
import { CAMERA_OPTIONS, ROVER_OPTIONS } from '../../constants/AppConstants';
import getImages from '../../services/marsRoverService';
import { STATE } from '../../state/constants/ContextConstants';
import { AppContext } from '../../state/context/AppContext';
import { Button } from '../Button/Button';
import { DateInput } from '../DateInput/DateInput';
import { DateTypeFilter } from '../DateTypeFIlter/DateTypeFilter';
import { SelectInput } from '../SelectInput/SelectInput';
import './Filters.css';
import { ACTIONS } from '../../state/constants/ContextConstants';

const CameraIcon = () => {
  return <ion-icon id="camera-icon" name="camera-outline"></ion-icon>;
};

const Rover = () => {
  return <ion-icon id="rover-icon" name="car-outline"></ion-icon>;
};

export const Filters = () => {
  const { data, dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: ACTIONS.SET_LOADER, payload: true });
    dispatch({ type: ACTIONS.SET_ERROR, payload: false });
    dispatch({ type: ACTIONS.SET_IMAGES, payload: [] });
    getImages(data.rover, data.camera, data.date_type, data.date, 1)
      .then((res) => {
        if (res.success === true) {
          dispatch({
            type: ACTIONS.SET_IMAGES,
            payload: [...res.data.photos]
          });
        } else {
          dispatch({ type: ACTIONS.SET_ERROR, payload: true });
        }
        dispatch({ type: ACTIONS.SET_LOADER, payload: false });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.SET_LOADER, payload: false });
        dispatch({ type: ACTIONS.SET_ERROR, payload: true });
        dispatch({ type: ACTIONS.SET_ERROR_MESSAGE, payload: err.message });
        console.log('@err', err.message);
      });
  };
  return (
    <div id="filters-container">
      <div id="filters-section">
        <div className="select-container">
          <SelectInput
            id={'rover'}
            label="Rover"
            options={ROVER_OPTIONS}
            name="rover"
            icon={<Rover />}
            value={data[STATE.ROVER]}
          />
          <SelectInput
            id={'Camera'}
            label="Camera"
            options={CAMERA_OPTIONS}
            name="camera"
            icon={<CameraIcon />}
            value={data[STATE.CAMERA]}
          />
        </div>
        <div className="date-type-section">
          <DateTypeFilter />
          <DateInput dateType={data[STATE.DATE_TYPE]} />
        </div>
      </div>
      <div className="get-images-container">
        <Button buttonText="Get Images" iconName="images-outline" onClick={handleClick} />
      </div>
    </div>
  );
};
