import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Test1 from './Test1';
import Test2 from './Test2';
import Ranking from './Ranking';
import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavi = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" size={size} color={color}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="list-outline" size={size} color={color}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavi;
