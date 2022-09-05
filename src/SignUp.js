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
  ScrollView,
} from 'react-native';
import CustomInput from './CustomInput';
import useInput from './hooks/useInput';
import axios from 'axios';

const SignUp = ({navigation}) => {
  const username = useInput('');
  const studentNumber = useInput('');
  const pwd = useInput('');
  const confirmPwd = useInput('');

  const checkName = name => {
    const nameRegex = /^[가-힣]{3}$/; // 한글 3글자
    return nameRegex.test(name);
  };

  const checkStudentNumber = stnum => {
    const studentNumberRegex = /^[0-9]{7}$/; // 숫자만 7자리
    return studentNumberRegex.test(stnum);
  };

  const checkPwd = pwd => {
    const pwdRegex = /^.{8,20}$/; // 8자 이상 20자 이하
    return pwdRegex.test(pwd);
  };

  const checkPwdConfirm = (pwd, confirmPwd) => {
    if (pwd === confirmPwd) {
      return true;
    } else {
      return false;
    }
  };

  const onPress = () => {
    const results = [
      checkName(username.value),
      checkStudentNumber(studentNumber.value),
      checkPwd(pwd.value),
      checkPwdConfirm(pwd.value, confirmPwd.value),
    ];

    if (results[0] === false) {
      Alert.alert(
        '입력오류',
        '이름을 한글 3글자로 입력해주세요.',
        [
          {
            text: '확인',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    } else if (results[1] === false) {
      Alert.alert(
        '입력오류',
        '7자리 학번을 다시 입력해주세요.',
        [
          {
            text: '확인',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    } else if (results[2] === false) {
      Alert.alert(
        '입력오류',
        '비밀번호를 8글자 이상 20자 이하로 입력해주세요.',
        [
          {
            text: '확인',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    } else if (results[3] === false) {
      Alert.alert(
        '입력오류',
        '비밀번호와 비밀번호 확인이 다릅니다.',
        [
          {
            text: '확인',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    } else {
      // const callApi = async () => {
      //   const req = await axios.post(
      //     'http://attendenceProject.test/api/user/register',
      //     {
      //       name: username.value,
      //       studentID: studentNumber.value,
      //       password: pwd.value,
      //     },
      //   );
      // };
      // callApi();

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
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>회원가입</Text>
          </View>
          <View style={styles.inputBoxs}>
            <View style={styles.inputBox}>
              <Text>UserName</Text>
              <TextInput
                style={styles.input}
                {...username}
                placeholder="이름"
              />
            </View>
            <View style={styles.inputBox}>
              <Text>Student Number</Text>
              <TextInput
                style={styles.input}
                {...studentNumber}
                placeholder="학번"
              />
            </View>
            <View style={styles.inputBox}>
              <Text>Password</Text>
              <TextInput
                style={styles.input}
                {...pwd}
                placeholder="8자 이상 20자 이하"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.inputBox}>
              <Text>Confirm Password</Text>
              <TextInput
                style={styles.input}
                {...confirmPwd}
                placeholder="8자 이상 20자 이하"
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
      </ScrollView>
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
    paddingBottom: '7%',
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
  input: {
    height: 50,
    width: '80%',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: 'white',
    paddingLeft: 15,
  },
});

export default SignUp;
