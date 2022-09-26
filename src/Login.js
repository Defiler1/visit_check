import React, {useState, useEffect} from 'react';
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
import CustomInput from './hooks/CustomInput';
import useInput from './hooks/useInput';
import axios from 'axios';

const Login = ({navigation}) => {
  const id = useInput('');
  // {value : "", onChangeText : function(text)=>void}
  const pwd = useInput('');

  const onPress = async (inputId, inputPwd) => {
    const idRegex = /^[0-9]{7}$/; // 숫자만 7자리
    const pwdRegex = /^.{8,20}$/; // 8자 이상 20자 이하

    if (idRegex.test(inputId) === false) {
      Alert.alert(
        '입력오류',
        'id는 7자의 숫자로 구성된 학번입니다.',
        [
          {
            text: '확인',
            onPress: () => {
              id.onChangeText('');
            },
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    } else if (pwdRegex.test(inputPwd) === false) {
      Alert.alert(
        '입력오류',
        '비밀번호는 8자이상 20자 이하입니다.',
        [
          {
            text: '확인',
            onPress: () => {
              id.onChangeText('');
            },
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
      //     'http://attendenceProject.test/api/user/login',
      //     {
      //       studentID: id,
      //       password: pwd,
      //     },
      //   );
      // };
      // callApi();
      await axios
        .post('http://attendenceProject.test/api/user/login', {
          studentID: id,
          password: pwd,
        })
        .then(res => {})
        .catch(err => {
          console.log(err);
        });
      navigation.navigate('TabNavi');
    }
    navigation.navigate('TabNavi');
  };

  const createId = () => {
    navigation.navigate('SignUp');
  };

  const findPwd = () => {
    navigation.navigate('FindPwd');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>안녕하세요,</Text>
          <Text style={styles.headerText}>2WDJ 출석체크 입니다.</Text>
        </View>
        <View style={styles.ipnutBox}>
          <CustomInput stateHandler={id} placeholder="id" />
          <CustomInput
            stateHandler={pwd}
            placeholder="pwd"
            secureTextEntry={true}
          />
          <Pressable
            style={styles.submit}
            onPress={e => {
              onPress(id.value, pwd.value);
            }}>
            <Text>Sign In</Text>
          </Pressable>
          <View style={styles.options}>
            <Pressable onPress={createId}>
              <Text>회원가입하기 </Text>
            </Pressable>
            <Text> | </Text>
            <Pressable onPress={findPwd}>
              <Text> 비밀번호 찾기</Text>
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
    backgroundColor: '#eee',
  },
  header: {
    flex: 0.5,
    paddingTop: '17%',
    paddingLeft: '9%',
  },
  headerText: {
    fontSize: 30,
  },
  ipnutBox: {
    alignItems: 'center',
    flex: 1,
  },
  idInput: {
    height: 50,
    width: '80%',
    borderRadius: 5,
    borderColor: 'black',
    marginBottom: 15,
    backgroundColor: 'white',
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
  options: {
    paddingTop: 10,
    flexDirection: 'row',
  },
});

export default Login;
