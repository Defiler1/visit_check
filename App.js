import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './src/SignUp';
import TabNavi from './src/TabNavi';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{tabBarHideOnKeyboard: true, headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{tabBarHideOnKeyboard: true, headerShown: false}}
        />
        <Stack.Screen
          name="TabNavi"
          component={TabNavi}
          options={{tabBarHideOnKeyboard: true, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
