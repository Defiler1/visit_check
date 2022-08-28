import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HeaderCom from './HeaderCom';
import Clock from './Clock';
import WakeUp from './WakeUp';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderCom />
      </View>
      <View style={styles.clockApp}>
        <View style={styles.clock}>
          <Clock />
        </View>
        <View style={styles.wakeUp}>
          <WakeUp />
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
    borderColor: 'black',
  },
  clockApp: {
    flex: 3.6,
  },
  clock: {
    flex: 2.4,
    // borderColor: '#eee',
    borderWidth: 1,
    borderColor: 'black',
  },
  wakeUp: {
    flex: 1.2,
    borderWidth: 1,
    borderColor: 'black',
  },
  footer: {
    flex: 0.6,
    borderWidth: 1,
    borderColor: 'black',
  },
  ranking: {
    flex: 3.6,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Home;
