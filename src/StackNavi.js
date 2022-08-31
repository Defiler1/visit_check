import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ranking from './Ranking';
import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import SubmitReason from './SubmitReason';

const Stack = createStackNavigator();

const StackNavi = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeCom">
      <Stack.Screen
        name="HomeCom"
        component={Home}
        options={{tabBarHideOnKeyboard: true, headerShown: false}}
      />
      <Stack.Screen
        name="SubmitReason"
        component={SubmitReason}
        options={{tabBarHideOnKeyboard: true, headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavi;
