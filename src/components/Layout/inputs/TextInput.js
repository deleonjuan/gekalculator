import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { GRAY_DARK, GRAY_LIGHT } from '../../../utils/theme';

export default props => {
  return (
    <View style={{...style.inputContainer, ...props.style}}>
        <TextInput {...props} style={style.input} placeholderTextColor='#8D8D8D'/>
    </View>
  );
};

const style = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: GRAY_LIGHT,
        width: '100%',
    },
    input:{
        color: GRAY_DARK
    }
})
