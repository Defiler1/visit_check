import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import axios from 'axios';

const SubmitReason = ({navigation}) => {
  const [reason, setReason] = useState('');

  const onPress = () => {
    const callApi = async () => {
      const req = await axios.post(
        'http://attendenceProject.test/api/attendence/reason',
        {
          attendance_id: attendance_id,
          reason: reason,
        },
      );
    };
    //  navigation.navigate('HomeScreen')
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.headerText}>지각사유 제출</Text>
        <View style={styles.inputBox}>
          <TextInput style={styles.reasonInput} />
        </View>
        <View style={styles.submit}>
          <Pressable style={styles.submitBtn} onPress={onPress}>
            <Text style={{color: 'white'}}>제출</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    paddingTop: '15%',
    paddingLeft: '10%',
    paddingBottom: '7%',
  },
  inputBox: {
    flex: 1,
    alignItems: 'center',
  },
  reasonInput: {
    height: '100%',
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    fontSize: 17,
  },
  submit: {
    flex: 0.5,
    alignItems: 'center',
    paddingTop: '5%',
  },
  submitBtn: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    borderRadius: 5,
    backgroundColor: '#008BCF',
  },
});

export default SubmitReason;
