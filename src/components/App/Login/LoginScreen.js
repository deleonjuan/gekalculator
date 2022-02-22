import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {BKGROUND, BKGROUND2, PRIMARY} from '../../../utils/theme';
import LoginButton from '../../Layout/buttons/LoginButton';
import TextInput from '../../Layout/inputs/TextInput';
// redux
import { setUserToken, logOuth } from '../../../store/auth';
import { useSelector, useDispatch } from 'react-redux';

const logo = require('../../../assets/images/logo.png');
const logo2 = require('../../../assets/images/logo2.png');

const LoginScreen = props => {

  const dispatch = useDispatch()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.inner}>
          <View style={style.form}>
            <View
              style={{width: '100%', alignItems: 'center', marginBottom: 35}}>
              <Image source={logo2} />
            </View>
            <View style={style.card}>
              <Image source={logo} style={{marginVertical: '17%'}}/>
              <View style={{paddingHorizontal: 40, width: '100%'}}>
                <TextInput placeholder="User" style={{marginBottom: 15}} />
                <TextInput placeholder="Password" style={{marginBottom: 30}} />
                <LoginButton title="Login" onPress={() => dispatch(setUserToken())}/>
              </View>
            </View>
          </View>
          <View style={{flex: 2, backgroundColor: PRIMARY}}></View>
          <View style={{flex: 1, backgroundColor: BKGROUND}}></View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  form: {
    zIndex: 1010,
    position: 'absolute',
    left: 23,
    right: 23,
    top: '8%',
  },
  card: {
    backgroundColor: BKGROUND2,
    alignItems: 'center',
    paddingBottom: 150,
  },
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-around"
  },
});
