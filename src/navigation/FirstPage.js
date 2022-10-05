import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../register/Login';
import SignUp from '../register/SignUp';
import FindPwd from '../register/FindPwd';
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
