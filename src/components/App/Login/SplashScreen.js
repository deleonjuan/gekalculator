import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const logo = require('../../../assets/images/logo.png')

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={logo}/>
    </View>
  );
};

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})