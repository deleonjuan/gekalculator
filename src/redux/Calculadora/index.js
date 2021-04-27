import {handleActions} from 'redux-actions';
// ------------------------------------
// Constants for ACTIONS TYPE
// ------------------------------------
const HISTORIAL = 'HISTORIAL';

// -----------------------------------
// Pure Actions
// -----------------------------------
const sethistorial = historial => ({
  type: HISTORIAL,
  historial,
});

// -----------------------------------
// Base Actions
// -----------------------------------
const AddToHistory = data => (dispatch, getStore) => {
  const historial = [...getStore().historial.historial];
  historial.push(data);
  dispatch(sethistorial(historial))
};

export const actions = {
  AddToHistory,
};

// -----------------------------------
// Base Reducers
// -----------------------------------
export const reducers = {
  [HISTORIAL]: (state, {historial}) => {
    return {
      ...state,
      historial,
    };
  },
};

export const initialState = {
  historial: [],
};

export default handleActions(reducers, initialState);
