import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import axios from 'axios';

const Chart = ({datas}) => {
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});

  useEffect(() => {
    //   const totalRank = datas;
    //   totalRank.sort((a, b) => {
    //     // 데이터 오름차순으로 정렬
    //     return b.total - a.total;
    //   });
    //   const topThree = totalRank.slice(0, 2)
    //   setFirst(topThree[0])
    //   setSecond(topThree[1])
    //   setThird(topThree[2])
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{margin: 7, fontSize: 20}}>지각랭킹</Text>
      <BarChart
        data={{
          labels: ['🥈', '🥇', '🥉'],
          datasets: [
            {
              data: [3, 10, 1],
            },
          ],
        }}
        fromZero={true}
        withInnerLines={true}
        width={Dimensions.get('window').width - 15} // from react-native
        height={220}
        yAxisSuffix="회"
        yAxisInterval={1} // optional, defaults to 1
        showBarTops={true}
        showValuesOnTopOfBars={true}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#0278bd',
          backgroundGradientTo: '#00a2ff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          //  color: (opacity = 1) => `rgba(245, 245, 245, 1)`,
          style: {
            borderRadius: 16,
          },
          barPercentage: 1.5,
          //  barRadius: 10,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          marginBottom: 10,
        }}
      />
    </View>
  );

  //   return (
  //     <View style={styles.container}>
  //       <Text style={{margin: 7, fontSize: 20}}>遅刻ランキング</Text>
  //       <BarChart
  //         data={{
  //           labels: [
  //             `${second.user.name}`,
  //             `${first.user.name}`,
  //             `${third.user.name}`,
  //           ],
  //           datasets: [
  //             {
  //               data: [`${second.total}`,`${first.total}`,`${third.total}`],
  //             },
  //           ],
  //         }}
  //         fromZero={true}
  //         withInnerLines={true}
  //         width={Dimensions.get('window').width - 15} // from react-native
  //         height={220}
  //         yAxisSuffix="回"
  //         yAxisInterval={1} // optional, defaults to 1
  //         showBarTops={true}
  //         showValuesOnTopOfBars={true}
  //         chartConfig={{
  //           backgroundColor: '#e26a00',
  //           backgroundGradientFrom: '#0278bd',
  //           backgroundGradientTo: '#00a2ff',
  //           decimalPlaces: 0, // optional, defaults to 2dp
  //           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  //           //  color: (opacity = 1) => `rgba(245, 245, 245, 1)`,
  //           style: {
  //             borderRadius: 16,
  //           },
  //           barPercentage: 1.5,
  //           //  barRadius: 10,
  //         }}
  //         style={{
  //           marginVertical: 8,
  //           borderRadius: 16,
  //           marginBottom: 10,
  //         }}
  //       />
  //     </View>
  //   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Chart;
