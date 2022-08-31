import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import Login from './src/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './src/SignUp';
import TabNavi from './src/TabNavi';
import FindPwd from './src/FindPwd';
import AppIntroSlider from 'react-native-app-intro-slider';
import axios from 'axios';
import {PermissionsAndroid} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: () => Node = () => {
  const [showRealApp, setShowRealApp] = useState(true);

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

  useEffect(() => {
    requestPermission();
  }, []);

  // useEffect(() => {
  //   const callApi = () => {
  //     const res = axios.get('')
  //   }
  //   callApi()
  // }, []);

  return (
    <>
      {showRealApp ? (
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
        </NavigationContainer>
      ) : (
        <AppIntroSlider
          data={slides}
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

const slides = [
  {
    key: 's1',
    text: '2WDJ 출첵체크 앱 입니다.',
    title: '환영합니다',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    text: '비콘 근처에서 어플의 원형안의 텍스트를\n 터치하면 출석체크가 됩니다.',
    title: '사용법',
    image: {
      uri: './src/assets/demo.PNG',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: '',
    text: '지각하지 맙시다!',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#22bcb5',
  },
];
