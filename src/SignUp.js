import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import CustomInput from './CustomInput';
import useInput from './hooks/useInput';
import axios from 'axios';

const SignUp = ({navigation}) => {
  const username = useInput('');
  const studentNumber = useInput('');
  const pwd = useInput('');
  const confirmPwd = useInput('');

  const onPress = () => {
    const callApi = async () => {
      const req = await axios.post(
        'http://attendenceProject.test/api/user/register',
        {
          name: username,
          studentID: studentNumber,
          password: pwd,
        },
      );
    };
    callApi();

    Alert.alert(
      '회원가입',
      '회원가입이 완료되었습니다.',
      [
        {
          text: '확인',
          onPress: () => navigation.navigate('Login'),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>회원가입</Text>
        </View>
        <View style={styles.inputBoxs}>
          <View style={styles.inputBox}>
            <Text>UserName</Text>
            <CustomInput stateHandler={username} placeholder="이름" />
          </View>
          <View style={styles.inputBox}>
            <Text>Student Number</Text>
            <CustomInput stateHandler={studentNumber} placeholder="학번" />
          </View>
          <View style={styles.inputBox}>
            <Text>Password</Text>
            <CustomInput
              stateHandler={pwd}
              placeholder="8자 이상"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputBox}>
            <Text>Confirm Password</Text>
            <CustomInput
              stateHandler={confirmPwd}
              placeholder="8자 이상"
              secureTextEntry={true}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Pressable style={styles.submit} onPress={onPress}>
              <Text>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    paddingTop: '17%',
    paddingLeft: '9%',
  },
  headerText: {
    fontSize: 30,
  },
  inputBoxs: {
    flex: 1,
  },
  inputBox: {
    alignItems: 'center',
  },
  submit: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default SignUp;
