import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {GRAY, SECONDARY, WHITE} from '../../../utils/theme';

export default ({item, index}) => {
  return (
    <View style={styles.container}>
      <View style={styles.index}>
        <Text style={{fontSize: 40, color: WHITE, fontWeight: 'bold'}}>{index+1}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodycontainer}>
          <Text style={{fontWeight: 'bold', color: GRAY}}>{item.type}</Text>
        </View>
        <View style={styles.bodycontainer}>
          <Text style={{fontWeight: 'bold', color: GRAY}}>{item.res}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  index: {
    backgroundColor: SECONDARY,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: GRAY,
    flex: 1,
    height: '100%',
  },
  bodycontainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
