import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import axios from 'axios';
import {isUriAnAndroidResourceIdentifier} from 'react-native-svg/lib/typescript/LocalSvg';
import ImagePicker from 'react-native-image-picker';

const Reason = ({navigation}) => {
  const [reason, setReason] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const submitReason = () => {
    //  try {
    //    const callApi = async () => {
    //      const req = await axios.post(
    //        'http://attendenceProject.test/api/attendence/reason',
    //        {attendance_id: asdf, reason: reason},
    //      );
    //    };
    //  } catch (err) {}
    //  navigation.navigate('SubmitReason');
  };

  const submitImage = async () => {
    const grantedstorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: '카메라 사용 권한',
        message: '사용자의 앨범에 접근하려고 합니다.',
        buttonNeutral: '나중에 하기',
        buttonNegative: '아니요',
        buttonPositive: '네',
      },
    );

    if (grantedstorage === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('권한 허가 하면 구동되게 하는거');
    } else {
      console.log('denied');
    }

    const result = await ImagePicker.launchImageLibrary({
      mediaType: ImagePicker.mediaTypeOptions,
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={submitReason}>
        <Text>지각사유 제출</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={submitImage}>
        <Text>운동 이미지 제출</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    height: '50%',
  },
});

export default Reason;