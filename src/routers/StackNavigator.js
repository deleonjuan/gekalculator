import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import ReportScreen from '../components/App/Report/';
import CalculatorScreen from '../components/App/Calculator/';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      lazy={false}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Report" component={ReportScreen} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
    </Stack.Navigator>
  );
}
