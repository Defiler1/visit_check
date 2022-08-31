import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SubmitImage from '../SubmitImage';

const Stack = createStackNavigator();

const UploadStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="PenaltyList">
      <Stack.Screen
        name="PenaltyList"
        component={PenaltyList}
        options={{tabBarHideOnKeyboard: true, headerShown: false}}
      />
      <Stack.Screen
        name="SubmitImage"
        component={SubmitImage}
        options={{tabBarHideOnKeyboard: true, headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UploadStack;
