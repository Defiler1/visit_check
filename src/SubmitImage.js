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
  ScrollView,
} from 'react-native';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

const SubmitImage = ({route}) => {
  const [imageSrc, setImageSrc] = useState('a');
  const [dateTitle, setDateTitle] = useState(route.params.title);
  const onPress = () => {
    // axios.post('http://attendenceProject.test/api/penalty/image', {
    //    penalty_id:penalty_id
    // })
  };

  const subImage = async () => {
    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
    });
    setImageSrc(result);
  };

  const uploadImg = async () => {
    if (!imageSrc) {
      console.log('img is not defined');
      return;
    }
    try {
      const res = await axios.post(
        'http://attendenceProject.test/api/penalty/image',
        {
          image: imageSrc,
          // penalty_id: route.params.penalty_id,
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.reasonInput}
            placeholder="제목"
            value={dateTitle}
          />
        </View>
        <View style={styles.imageBox}>
          <View style={styles.image} onPress={subImage}>
            <Image source={{uri: imageSrc}} />
          </View>
        </View>
        <View style={styles.submitbox}>
          <View style={styles.submit}>
            <TouchableOpacity style={styles.submitBtn} onPress={subImage}>
              <Text style={{color: 'white'}}>이미지 선택</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.submit}>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => {
                uploadImg();
              }}>
              <Text style={{color: 'white'}}>제출</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    flex: 0.15,
    alignItems: 'center',
    paddingTop: '5%',
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
    height: 350,
    alignItems: 'center',
    paddingTop: '7%',
    paddingBottom: '3%',
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
  submitbox: {
    height: 110,
  },
  submit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '2%',
  },
  submitBtn: {
    borderRadius: 5,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008BCF',
  },
});

export default SubmitImage;
