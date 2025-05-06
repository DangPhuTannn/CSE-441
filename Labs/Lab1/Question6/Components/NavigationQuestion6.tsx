import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeeForm from './EmployeeForm';
import FindMinOf3Numbers from './FindMinOf3Numbers';
import HailstoneSequence from './HailstoneSequence';
import Home from './Home';
import SumFirstLastDigit from './SumFirstLastDigit';

const Stack = createNativeStackNavigator();

export default function NavigationQuestion6() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EmployeeForm" component={EmployeeForm} />
        <Stack.Screen name="SumDigits" component={SumFirstLastDigit} />
        <Stack.Screen name="MinOfThree" component={FindMinOf3Numbers} />
        <Stack.Screen name="HailstoneSequence" component={HailstoneSequence} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
