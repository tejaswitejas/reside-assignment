import { ACTIONS, STATE } from '../constants/ContextConstants';

export const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATE_TYPE: {
      return {
        ...state,
        [STATE.DATE_TYPE]: action.payload
      };
    }
    case ACTIONS.SET_DATE: {
      return {
        ...state,
        [STATE.DATE]: action.payload
      };
    }
    case ACTIONS.SET_DATE_INPUT_ERROR: {
      return {
        ...state,
        [STATE.DATE_INPUT_ERROR]: action.payload
      };
    }

    case ACTIONS.SET_ROVER: {
      return {
        ...state,
        [STATE.ROVER]: action.payload
      };
    }

    case ACTIONS.SET_CAMERA: {
      return {
        ...state,
        [STATE.CAMERA]: action.payload
      };
    }
    case ACTIONS.SET_IMAGES: {
      return {
        ...state,
        [STATE.IMAGES]: action.payload
      };
    }
    case ACTIONS.SET_LOADER: {
      return {
        ...state,
        [STATE.LOADER]: action.payload
      };
    }
    case ACTIONS.SET_ERROR: {
      return {
        ...state,
        [STATE.ERROR]: action.payload
      };
    }
    case ACTIONS.SET_ERROR_MESSAGE: {
      return {
        ...state,
        [STATE.ERROR_MESSAGE]: action.payload
      };
    }
    default:
      return state;
  }
};
