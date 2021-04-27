import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './redux/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import {NavigationContainer} from '@react-navigation/native';
import {BKGROUND} from './utils/theme';

import AuthScreen from './routers/Auth';

export default () => {
  const middlewares = [thunkMiddleware];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthScreen />
      </NavigationContainer>
    </Provider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BKGROUND,
  },
});
