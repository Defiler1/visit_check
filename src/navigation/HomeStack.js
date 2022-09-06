import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SubmitImage from '../SubmitImage';
import PenaltyList from '../PenaltyList';
import Home from '../Home';
import SubmitReason from '../SubmitReason';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{tabBarHideOnKeyboard: true, headerShown: false}}
      />
      <Stack.Screen
        name="PenaltyList"
        component={PenaltyList}
        options={{tabBarHideOnKeyboard: true, headerShown: false}}
      />
      <Stack.Screen
        name="SubmitImage"
        component={SubmitImage}
        options={{
          tabBarHideOnKeyboard: false,
          headerShown: true,
          title: '운동 이미지 제출',
        }}
      />
      <Stack.Screen
        name="SubmitReason"
        component={SubmitReason}
        options={{
          tabBarHideOnKeyboard: false,
          headerShown: true,
          title: '지각사유 제출',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
