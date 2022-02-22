import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import {BKGROUND, PRIMARY, SECONDARY, WHITE} from '../../../utils/theme';
import CalcKeyboard from './CalcKeyboard';
// redux
import {useDispatch} from 'react-redux';
import {AddToHistory} from '../../../store/calculator';

const {width} = Dimensions.get('screen');
const logo = require('../../../assets/images/logo.png');
const back = require('../../../assets/images/back.png');

const CalculatorScreen = props => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('0');
  const [secondValue, setSecondValue] = useState('0');
  const [nextValue, setNextValue] = useState(false);
  const [isDotAllowed, setIsDotAllowed] = useState(true);
  const dispatch = useDispatch();

  const setState = val => {
    if (val == 'Clear') {
      setNextValue(false);
      setFirstValue('');
      setSecondValue('');
      setDisplayValue('0');
      setOperator(null);
    } else if (val == 'DEL')
      setDisplayValue(displayValue.substr(0, displayValue.length - 1));
    else if (val == '+' || val == '-' || val == 'X' || val == '/') {
      setDisplayValue(
        operator
          ? displayValue.substr(0, displayValue.length - 1) + `${val}`
          : `${displayValue}${val}`,
      );
      setNextValue(true);
      setOperator(val);
      setIsDotAllowed(true);
    } else if (val == '.') {
      let dot = displayValue.slice(-1);
      if (dot !== '.' && isDotAllowed) {
        setDisplayValue(`${displayValue}${val}`);
        //   aniadir el punto
        if (!nextValue) {
          setFirstValue(`${firstValue}${val}`);
        } else {
          setSecondValue(`${secondValue}${val}`);
        }
        setIsDotAllowed(false);
      }
    } else if (typeof val == 'number') {
      if (!nextValue) {
        setFirstValue(`${firstValue}${val}`);
      } else {
        setSecondValue(`${secondValue}${val}`);
      }
      setDisplayValue(displayValue == '0' ? `${val}` : `${displayValue}${val}`);
    } else if (val == '=') {
      let result = 0;

      if (operator == '+') {
        result = parseFloat(firstValue) + parseFloat(secondValue);
        dispatch(
          AddToHistory({
            type: 'suma',
            res:
              String(firstValue) +
              operator +
              String(secondValue) +
              '=' +
              String(result),
          }),
        );
      }
      if (operator == 'X') {
        result = parseFloat(firstValue) * parseFloat(secondValue);
        dispatch(
          AddToHistory({
            type: 'multiplicacion',
            res:
              String(firstValue) +
              operator +
              String(secondValue) +
              '=' +
              String(result),
          }),
        );
      }
      if (operator == '/') {
        result = parseFloat(firstValue) / parseFloat(secondValue);
        dispatch(
          AddToHistory({
            type: 'division',
            res:
              String(firstValue) +
              operator +
              String(secondValue) +
              '=' +
              String(result),
          }),
        );
      }
      if (operator == '-') {
        result = parseFloat(firstValue) - parseFloat(secondValue);
        dispatch(
          AddToHistory({
            type: 'resta',
            res:
              String(firstValue) +
              operator +
              String(secondValue) +
              '=' +
              String(result),
          }),
        );
      }

      setDisplayValue(String(result));
      setFirstValue(result);
      setSecondValue('');
      setOperator(null);
      setNextValue(true);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={{...styles.subheader, flex: 3}}>
          <View style={styles.circle}></View>
          <View style={styles.headerinfo}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Pressable hitSlop={20} onPress={() => props.navigation.goBack()}>
                <Image source={back} />
              </Pressable>
            </View>
            <View
              style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={logo} style={{marginBottom: 10}} />
              <Text
                style={{color: SECONDARY, fontWeight: 'bold', fontSize: 20}}>
                Calculator
              </Text>
            </View>
            <View style={{flex: 1}}></View>
          </View>
        </View>
        <View style={{...styles.subheader, flex: 2}}>
          <Text style={styles.text}>{displayValue}</Text>
        </View>
      </View>
      <View style={{flex: 3, backgroundColor: BKGROUND}}>
        <CalcKeyboard setState={setState} />
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: PRIMARY,
  },
  subheader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: WHITE,
    width: width * 1.5,
    height: width * 1.5,
    borderRadius: 1000,
    transform: [{translateY: -width / 2}],
    position: 'absolute',
  },
  text: {
    color: WHITE,
    fontSize: 60,
  },
  headerinfo: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
