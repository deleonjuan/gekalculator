import {handleActions} from 'redux-actions';
// ------------------------------------
// Constants for ACTIONS TYPE
// ------------------------------------
const TOKEN = 'TOKEN';

// -----------------------------------
// Pure Actions
// -----------------------------------
const setToken = token => ({
  type: TOKEN,
  token,
});

// -----------------------------------
// Base Actions
// -----------------------------------
const setUserToken = () => (dispatch, getStore) => {
  dispatch(setToken('USER_TOKEN'))
};

const logOut = () => (dispatch, getStore) => {
  dispatch(setToken(null))
};

export const actions = {
    setUserToken,
    logOut
};

// -----------------------------------
// Base Reducers
// -----------------------------------
export const reducers = {
  [TOKEN]: (state, {token}) => {
    return {
      ...state,
      token,
    };
  },
};

export const initialState = {
  token: null,
};

export default handleActions(reducers, initialState);
