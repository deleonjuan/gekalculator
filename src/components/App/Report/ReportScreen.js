import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, FlatList} from 'react-native';
import {BKGROUND, BKGROUND2, PRIMARY, SECONDARY, WHITE} from '../../../utils/theme';
import ItemReport from './ItemReport';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../store/auth';

const logo = require('../../../assets/images/logo.png');
const calculator = require('../../../assets/images/calculator.png');
const back = require('../../../assets/images/back.png');

const ReportScreen = props => {
  const {navigation} = props;
  const historial = useSelector((state) => state.calculator.historial)
  const dispatch = useDispatch()

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerinfo}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Pressable hitSlop={20} onPress={() => dispatch(logOut())}>
              <Image source={back} />
            </Pressable>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={logo} style={{marginBottom: 10}} />
            <Text style={{color: SECONDARY, fontWeight: 'bold', fontSize: 20}}>
              Calculator
            </Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyheader}>
          <Text style={styles.title}>Report</Text>
          <View style={{width: '50%', backgroundColor: 'red'}}>
            <Pressable onPress={() => navigation.navigate('Calculator')}>
              <View style={styles.button}>
                <Image
                  source={calculator}
                  style={{marginRight: 10, marginVertical: 10}}
                />
                <Text style={{color: WHITE, fontWeight: 'bold'}}>
                  Calculator
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        {/* lista */}
        <FlatList
          keyExtractor={(item, index) => index}
          data={historial}
          renderItem={(item, index) => (
            <ItemReport item={item.item} index={item.index} />
          )}
        />
      </View>
    </>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: BKGROUND2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerinfo: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  body: {
    flex: 5,
    backgroundColor: WHITE,
    paddingHorizontal: 28,
    paddingTop: 20,
  },
  bodyheader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: PRIMARY,
    fontSize: 50,
    fontWeight: 'bold',
    width: '50%',
  },
  button: {
    width: '100%',
    backgroundColor: PRIMARY,
    borderColor: WHITE,
    borderWidth: 2,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
