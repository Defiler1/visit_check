import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

const SubmitImage = () => {
  const [imageSrc, setImageSrc] = useState('');
  const onPress = () => {
    // axios.post('http://attendenceProject.test/api/penalty/image', {
    //    penalty_id:penalty_id
    // })
  };

  const subImage = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>운동사진 올리기</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.reasonInput} placeholder="제목" />
      </View>
      <View style={styles.imageBox}>
        <Pressable style={styles.image} onPress={subImage}>
          <Text style={{fontSize: 20}}>이미지 선택</Text>
          <Image source={{uri: imageSrc}} />
        </Pressable>
      </View>
      <View style={styles.submit}>
        <TouchableOpacity style={styles.submitBtn}>
          <Text>제출</Text>
        </TouchableOpacity>
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
    flex: 0.15,
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
  imageBox: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '7%',
  },
  image: {
    borderWidth: 1,
    borderColor: 'black',
    height: '100%',
    width: '80%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    flex: 0.4,
    alignItems: 'center',
    paddingTop: '7%',
  },
  submitBtn: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    width: '80%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SubmitImage;
