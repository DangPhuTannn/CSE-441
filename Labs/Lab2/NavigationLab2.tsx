import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import LoginForm from './screens/LoginForm';
import TaxCalculation from './screens/TaxCalculation';
import Calculator from './screens/Calculator';

const Stack = createNativeStackNavigator();

export default function NavigationLab2() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="TaxCalculation" component={TaxCalculation} />
        <Stack.Screen name="Calculator" component={Calculator} />
        {/* <Stack.Screen name="EmployeeForm" component={EmployeeForm} />
        <Stack.Screen name="SumDigits" component={SumFirstLastDigit} />
        <Stack.Screen name="MinOfThree" component={FindMinOf3Numbers} />
        <Stack.Screen name="HailstoneSequence" component={HailstoneSequence} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
