import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SECONDARY, WHITE } from '../../../utils/theme';

export default ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View style={style.button}>
            <Text style={style.title}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: SECONDARY,
        alignItems: 'center',
        paddingVertical: 5,
    },
    title: {
        color: WHITE,
        fontSize: 24
    }
})
