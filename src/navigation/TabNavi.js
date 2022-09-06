import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import Ranking from '../Ranking';

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
