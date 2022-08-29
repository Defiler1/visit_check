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

const Login = ({navigation}) => {
  //   const [id, setId] = useState('');
  const id = useInput('');
  // {value : "", onChangeText : function(text)=>void}
  const [inputId, setInputId] = useState('');
  //   const [pwd, setPwd] = useState('');
  const pwd = useInput('');
  const [inputPwd, setInputPwd] = useState('');
  const submitBtn = () => {
    //  setId(inputId);
  };
  const onPress = () => {
    //  setId(inputId);
    navigation.navigate('TabNavi');
  };

  const createId = () => {
    navigation.navigate('SignUp');
  };

  const findPwd = () => {};
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
          <Pressable style={styles.submit} onPress={onPress}>
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
