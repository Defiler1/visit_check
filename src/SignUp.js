import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import CustomInput from './CustomInput';
import useInput from './hooks/useInput';

const SignUp = ({navigation}) => {
  // const [username, setUsername] = useState('');
  // const [studentNumber, setStudentNumber] = useState('');
  // const [pwd, setPwd] = useState('');
  // const [confirmPwd, setConfirmPwd] = useState('');
  const username = useInput('');
  const studentNumber = useInput('');
  const pwd = useInput('');
  const confirmPwd = useInput('');
  const onPress = () => {
    navigation.navigate('Login');
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
    // backgroundColor: 'grey',
  },
  headerText: {
    fontSize: 30,
  },
  inputBoxs: {
    flex: 1,
    // alignItems: 'center',
    // backgroundColor: 'lightgreen',
  },
  inputBox: {
    alignItems: 'center',
    // backgroundColor: 'lightblue',
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
