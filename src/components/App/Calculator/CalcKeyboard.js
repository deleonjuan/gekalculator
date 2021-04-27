import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {BKGROUND, BKGROUND2, GRAY, SECONDARY, WHITE} from '../../../utils/theme';

export default ({setState}) => {
  const buttons = [
    ['Clear', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['DEL', 0, '.', '='],
  ];

  return (
    <View style={{flex: 1}}>
      {buttons.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.map((button, buttonIndex) => (
            <TouchableNativeFeedback key={buttonIndex} onPress={() => setState(button)}>
              <View style={styles.button}>
                <Text
                  style={[
                    {color: typeof button == 'number' ? GRAY : SECONDARY},
                    styles.textbtn,
                    button == '=' ? styles.okbtn : {},
                  ]}>
                  {button}
                </Text>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbtn: {
    fontSize: 40,
  },
  okbtn: {
    color: WHITE,
    backgroundColor: SECONDARY,
    borderRadius: 50,
    width: 70,
    height: 70,
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
