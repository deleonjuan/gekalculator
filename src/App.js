import React from 'react';

import { store } from './store'
import { Provider } from 'react-redux'

import {NavigationContainer} from '@react-navigation/native';

import AuthScreen from './routers/Auth';

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthScreen />
      </NavigationContainer>
    </Provider>
  );
};
