import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginScreen from '../components/App/Login/';
import SplashScreen from '../components/App/Login/SplashScreen';
import MyStack from '../routers/StackNavigator';

import {connect} from 'react-redux';
import {actions} from '../redux/Auth';
import { BKGROUND } from '../utils/theme';

const AuthScreen = props => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 200);
    }, []);

  return (
    <View style={style.container}>
      {isLoading ? (
        <SplashScreen />
      ) : !props.token ? (
        <LoginScreen />
      ) : (
        <MyStack />
      )}
    </View>
  );
};

const mstp = state => ({
  ...state.auth,
});

const mdtp = {
  ...actions,
};

export default connect(mstp, mdtp)(AuthScreen);

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BKGROUND,
    },
  });
  
