import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
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
      <Text style={styles.headerText}>지각사유 제출</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.reasonInput} />
      </View>
      <View style={styles.submit}>
        <Pressable style={styles.submitBtn} onPress={onPress}>
          <Text>제출</Text>
        </Pressable>
      </View>
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
    paddingBottom: '5%',
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
    //  backgroundColor: 'lightblue',
    paddingTop: '5%',
  },
  submitBtn: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: '30%',
    borderRadius: 5,
  },
});

export default SubmitReason;
