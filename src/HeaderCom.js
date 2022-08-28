import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

const HeaderCom = ({data}) => {
  const [userName, setUserName] = useState('문석훈');
  const [ranking, setRanking] = useState(0); // 지각 랭킹
  const [lateCount, setLateCount] = useState(0); // 지각 횟수
  const [rate, setRate] = useState(0); // 출석률
  const [datas, setDatas] = useState([]);

  const setting = () => {
    setRanking(1);
    setLateCount(5);
    setRate(12);

    // setUserName(data.user.name);
  };

  // useEffect(() => {
  //   const callApi = async () => {
  //     const res = await axios.get('');
  //     setDatas(res);
  //   };
  //   callApi();
  //   setting();
  // }, []);

  return (
    <View style={styles.headerContainer}>
      <Text style={(styles.headerBigText, styles.headerName)}>{userName}</Text>
      <View style={styles.headerContent}>
        <View style={styles.headerContentBox}>
          <Text style={styles.headerBigText}>{ranking}</Text>
          <Text style={styles.headerSmallText}>지각랭킹</Text>
        </View>
        <View style={styles.headerContentBox}>
          <Text style={styles.headerBigText}>{lateCount}</Text>
          <Text style={styles.headerSmallText}>지각횟수</Text>
        </View>
        <View style={styles.headerContentBox}>
          <Text style={styles.headerBigText}>{rate}%</Text>
          <Text style={styles.headerSmallText}>출석률</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  headerName: {
    fontSize: 30,
    paddingTop: 25,
    paddingRight: 30,
    padding: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#eee',
    justifyContent: 'space-between',
    paddingRight: 20,
    flex: 1,
  },
  headerContentBox: {
    alignItems: 'center',
  },
  headerSmallText: {
    fontSize: 15,
  },
  headerBigText: {
    fontSize: 28,
  },
});

export default HeaderCom;
