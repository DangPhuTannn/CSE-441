import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Labs/Lab1/Question6/Components/Home';
import EmployeeForm from './Labs/Lab1/Question6/Components/EmployeeForm';
import SumFirstLastDigit from './Labs/Lab1/Question6/Components/SumFirstLastDigit';
import FindMinOf3Numbers from './Labs/Lab1/Question6/Components/FindMinOf3Numbers';
import HailstoneSequence from './Labs/Lab1/Question6/Components/HailstoneSequence';

const Stack = createNativeStackNavigator();

export default function App() {
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
