import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Chart from './Chart';
import axios from 'axios';

const Ranking = () => {
  const asdf = [
    {
      ranking: 1,
      name: '문석훈',
      count: 3,
    },
    {
      ranking: 2,
      name: '신민규',
      count: 2,
    },
    {
      ranking: 3,
      name: '김동구',
      count: 1,
    },
    {
      ranking: 4,
      name: '진병언',
      count: 0,
    },
    {
      ranking: 1,
      name: '문석훈',
      count: 3,
    },
    {
      ranking: 2,
      name: '신민규',
      count: 2,
    },
    {
      ranking: 3,
      name: '김동구',
      count: 1,
    },
    {
      ranking: 4,
      name: '진병언',
      count: 0,
    },
  ];

  const [datas, setDatas] = useState([]);

  // useEffect(() => {
  //   const callApi = async () => {
  //     const res = await axios.get('');
  //     setDatas(res);
  //   };
  //   callApi();
  //   const sortedDatas = datas;
  //   sortedDatas.sort((a, b) => {
  //     // 오름차순 정렬
  //     return b.total - a.total;
  //   });
  // }, []);

  return (
    <ScrollView style={styles.container}>
      <Chart />
      <View style={styles.header}>
        <Text style={{fontSize: 15, paddingLeft: 17, flex: 1.1}}>랭킹</Text>
        <Text style={{fontSize: 15, flex: 1}}>이름</Text>
        <Text style={{fontSize: 15, paddingRight: 18}}>지각횟수</Text>
      </View>
      <View style={styles.content}>
        {/* <Text style={{fontSize: 40}}>Hi</Text> */}
        {asdf.map((data, i) => {
          return (
            <View style={styles.contentBox} key={i}>
              <Text style={{fontSize: 33, paddingLeft: 40, flex: 0.6}}>
                {data.ranking}
              </Text>
              <Text style={{fontSize: 33, flex: 1}}>{data.name}</Text>
              <Text style={{fontSize: 33, paddingRight: 40}}>{data.count}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );

  // return (
  //   <ScrollView style={styles.container}>
  //   <Chart datas={datas} />
  //   <View style={styles.header}>
  //     <Text style={{fontSize: 15, paddingLeft: 17, flex: 1.1}}>
  //       ランキング
  //     </Text>
  //     <Text style={{fontSize: 15, flex: 1}}>名前</Text>
  //     <Text style={{fontSize: 15, paddingRight: 18}}>遅刻回数</Text>
  //   </View>
  //   <View style={styles.content}>
  //     {/* <Text style={{fontSize: 40}}>Hi</Text> */}
  //     {datas.map((data, i) => {
  //       return (
  //         <View style={styles.contentBox} key={i}>
  //           <Text style={{fontSize: 33, paddingLeft: 40, flex: 0.6}}>
  //             {i+1}
  //           </Text>
  //           <Text style={{fontSize: 33, flex: 1}}>{data.user.name}</Text>
  //           <Text style={{fontSize: 33, paddingRight: 40}}>{data.total}</Text>
  //         </View>
  //       );
  //     })}
  //   </View>
  // </ScrollView>
  // )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.7,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  content: {
    flex: 11,
    alignItems: 'center',
  },
  contentBox: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,

    shadowOpacity: 0.3,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    elevation: 3,
  },
});

export default Ranking;
