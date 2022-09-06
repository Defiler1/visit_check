import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ranking from './Ranking';
import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavi from './StackNavi';
import SubmitReason from './SubmitReason';
import SubmitImage from './SubmitImage';
import PenaltyList from './PenaltyList';
import HomeStack from './navigation/HomeStack';

const TabNavi = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
