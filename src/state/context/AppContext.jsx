import React, { useReducer } from 'react';
import { INITIAL_STATE } from '../constants/ContextConstants';
import { appReducer } from '../reducers/AppReducer';

export const AppContext = React.createContext(INITIAL_STATE);

export const AppContextProvider = (props) => {
  const [data, dispatch] = useReducer(appReducer, INITIAL_STATE);
  return <AppContext.Provider value={{ data, dispatch }}>{props.children}</AppContext.Provider>;
};
