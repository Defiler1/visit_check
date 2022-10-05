import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Pressable,
} from 'react-native';
import axios from 'axios';
import CustomInput from '../hooks/CustomInput';
import useInput from '../hooks/useInput';

const FindPwd = ({navigation}) => {
  const studentNumber = useInput('');

  const onPress = () => {
    //  axios.post('', {
    //    studentNumber: studentNumber,
    //  });
    Alert.alert('죄송합니다.', '기능 만들고 있습니다.');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>비밀번호 찾기</Text>
        </View>
        <View style={styles.inputBoxs}>
          <View style={styles.inputBox}>
            <Text>Student Number</Text>
            <CustomInput stateHandler={studentNumber} placeholder="학번" />
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
    flex: 0.4,
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

export default FindPwd;
