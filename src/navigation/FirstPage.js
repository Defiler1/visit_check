import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login';
import SignUp from '../SignUp';
import FindPwd from '../FindPwd';
import TabNavi from './TabNavi';

const Stack = createStackNavigator();

const FirstPage = () => {
  return (
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
        name="FindPwd"
        component={FindPwd}
        options={{tabBarHideOnKeyboard: true, headerShown: false}}
      />

      <Stack.Screen
        name="TabNavi"
        component={TabNavi}
        options={{tabBarHideOnKeyboard: true, headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default FirstPage;
