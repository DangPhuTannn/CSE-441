import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import HomeTab from './HomeTab';
import AddService from './AddService';
import ServiceDetail from './ServiceDetail';
import {RootStackParamList} from './StackParamList';
import EditService from './EditService';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeTab"
          component={HomeTab}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Service',
            headerStyle: {
              backgroundColor: '#EF506B',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            },
            headerBackTitle: 'HomeTab',
          }}
          name="AddService"
          component={AddService}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerBackTitle: 'HomeTab',
            headerStyle: {
              backgroundColor: '#EF506B',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            },
          }}
          name="ServiceDetail"
          component={ServiceDetail}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerBackTitle: 'HomeTab',
            headerStyle: {
              backgroundColor: '#EF506B',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            },
          }}
          name="EditService"
          component={EditService}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
