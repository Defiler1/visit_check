import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import axios from 'axios';
import {PermissionsAndroid} from 'react-native';
import FirstPage from './src/navigation/FirstPage';
import {Slides} from './src/Slides';
import AsyncStorage from '@react-native-community/async-storage';

const App: () => Node = () => {
  const [showRealApp, setShowRealApp] = useState(true);
  const [firstLaunch, setFirstLaunch] = useState('');

  // 비콘
  useEffect(() => {
    const requestPermission = async () => {
      // 앱 구동 시 승인 처리 필요한 곳
      const scan = await PermissionsAndroid.check(
        'android.permission.BLUETOOTH_SCAN',
      );
      const connect = await PermissionsAndroid.check(
        'android.permission.BLUETOOTH_CONNECT',
      );
      const location = await PermissionsAndroid.check(
        'android.permission.ACCESS_FINE_LOCATION',
      );
      if (!scan) {
        const scanGrant = await PermissionsAndroid.request(
          'android.permission.BLUETOOTH_SCAN',
        );
      }
      if (!connect) {
        const connectGrant = await PermissionsAndroid.request(
          'android.permission.BLUETOOTH_CONNECT',
        );
      }
      if (!location) {
        const locationGrant = await PermissionsAndroid.request(
          'android.permission.ACCESS_FINE_LOCATION',
        );
      }
    };
    const setIntro = async () => {
      return await AsyncStorage.setItem('intro', '1', (err, result) => {});
    };

    // 로컬 스토리지의 데이터에따라 어플 처음 실행하는지에 따라서 인트로 출력
    const getIntro = async () => {
      await AsyncStorage.getItem('intro', async (err, result) => {
        setFirstLaunch(result);
        // 고쳐야함 저장안됨
        console.log('result : ', result);
        console.log('asdf : ', firstLaunch);
      });
    };

    requestPermission();
    setIntro();
    getIntro();
    if (firstLaunch === '1') {
      setShowRealApp(true);
    }
  }, []);

  const onDone = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <NavigationContainer>
          <FirstPage />
        </NavigationContainer>
      ) : (
        <AppIntroSlider
          data={Slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={false}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

export default App;
