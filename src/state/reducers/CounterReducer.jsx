import { COUNTER_ACTIONS } from '../constants/CounterConstants';

export const counterReducer = (state, action) => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case COUNTER_ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};
