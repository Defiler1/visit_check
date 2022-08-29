import React, {useState, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const WakeUp = () => {
  const [names, setNames] = useState(['신민규', '김동구', '진병언', '문석훈']);
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 17, padding: 15}}>조원깨우기</Text>
      </View>
      <View style={styles.wakeUp}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.person}>
            <Text style={styles.text}>{names[0]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.person}>
            <Text style={styles.text}>{names[1]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.person}>
            <Text style={styles.text}>{names[2]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.person}>
            <Text style={styles.text}>{names[3]}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wakeUp: {
    paddingBottom: 25,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  person: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    justifyContent: 'center',
    height: 62,
    width: 62,
  },
  text: {
    fontSize: 17,
  },
});

export default WakeUp;
