import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HeaderCom from './HeaderCom';
import Clock from './Clock';
import WakeUp from './WakeUp';
import Reason from './Reason';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderCom />
      </View>
      <View style={styles.clockApp}>
        <View style={styles.clock}>
          <Clock />
        </View>
        <View style={styles.reason}>
          <Reason />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.7,
    borderWidth: 1,
    borderColor: '#727272',
  },
  clockApp: {
    flex: 3.6,
  },
  clock: {
    flex: 2.4,
    borderWidth: 1,
    borderColor: '#727272',
  },
  reason: {
    flex: 1.2,
    borderWidth: 1,
    borderColor: '#727272',
  },
  footer: {
    flex: 0.6,
    borderWidth: 1,
    borderColor: '#727272',
  },
  ranking: {
    flex: 3.6,
    borderWidth: 1,
    borderColor: '#727272',
  },
});

export default Home;
