/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ProductList from './components/ProductList';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddProductPage from './components/AddProductPage';
import SearchProductPage from './components/SearchProductPage';
import ProductDetail from './components/ProductDetail';
const Tab = createBottomTabNavigator();
export default function NavigationLab3() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ProductList"
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}>
        <Tab.Screen
          name="ProductList"
          component={ProductList}
          options={{
            tabBarLabel: 'Product List',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AddProductPage"
          component={AddProductPage}
          options={{
            tabBarLabel: 'Add Product',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="add-circle-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SearchProductPage"
          component={SearchProductPage}
          options={{
            tabBarLabel: 'Search ',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            tabBarLabel: 'Detail',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="book" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
