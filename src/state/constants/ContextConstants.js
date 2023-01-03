import { CAMERA_OPTIONS, DATE_TYPE, ROVER_OPTIONS } from '../../constants/AppConstants';
// import { getCurrentDate } from '../../utils/utils';

export const STATE = {
  DATE_TYPE: 'date_type',
  DATE: 'date',
  DATE_INPUT_ERROR: 'date_input_error',
  ROVER: 'rover',
  CAMERA: 'camera',
  LOADER: 'loader',
  ERROR: 'error',
  IMAGES: 'images',
  ERROR_MESSAGE: 'error_message'
};

export const INITIAL_STATE = {
  [STATE.DATE_TYPE]: DATE_TYPE.EARTH_DATE,
  [STATE.DATE]: '2015-06-03',
  [STATE.DATE_INPUT_ERROR]: false,
  [STATE.ROVER]: ROVER_OPTIONS[0],
  [STATE.CAMERA]: CAMERA_OPTIONS[0],
  [STATE.LOADER]: true,
  [STATE.ERROR]: false,
  [STATE.IMAGES]: [],
  [STATE.ERROR_MESSAGE]: ''
};

export const ACTIONS = {
  SET_DATE_TYPE: 'set_date_type',
  SET_DATE: 'set_date',
  SET_DATE_INPUT_ERROR: 'set_date_input_error',
  SET_ROVER: 'set_rover',
  SET_CAMERA: 'set_camera',
  SET_LOADER: 'set_loader',
  SET_ERROR: 'set_error',
  SET_IMAGES: 'set_images',
  SET_ERROR_MESSAGE: 'set_error_message'
};
