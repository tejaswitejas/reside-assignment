import axios from 'axios';
import { CAMERA, DATE_TYPE, MESSAGES } from '../constants/AppConstants';
/**
 *
 * @param { string} rover Rover type, for Example Curiosity , Opportunity , Spirit
 * @param { string } camera Camera type like CHEMCAM , FHAZ , MARDI , RHAZ
 * @param { string } dateType Date type like Sol , earth_date
 * @param { number | string } dateValue For example 1000 , 2015-6-3
 * @param { number } page For example 1 , 2 and so on
 * @returns
 */
export default async function getImages(rover, camera, dateType, dateValue, page) {
  const getParams = () => {
    const params = {
      // eslint-disable-next-line no-undef
      api_key: process.env.REACT_APP_api_key,
      // api_key: 'DEMO_KEY',
      page
    };
    if (dateType == DATE_TYPE.SOL) {
      params[DATE_TYPE.SOL] = dateValue;
    } else {
      params[DATE_TYPE.EARTH_DATE] = dateValue;
    }

    if (camera != '') {
      params[CAMERA] = camera;
    }
    return params;
  };

  try {
    const response = await axios({
      method: 'GET',
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`,
      params: getParams()
    });
    return {
      success: true,
      data: response.data
    };
  } catch (err) {
    console.log(err);
    if (err.response.status === 429) {
      throw new Error(MESSAGES.EXHAUSTED_ERROR);
    } else {
      throw new Error(MESSAGES.ERROR);
    }
  }
}
