import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const PenaltyList = ({navigation}) => {
  const [listdata, setListdata] = useState([]);

  const parsingDate = created_at => {
    const month = created_at.slice(5, 7);
    const day = created_at.slice(8, 9);
    const result = `${month}월 ${day}일`;
    return result;
  };

  let data = [
    {
      id: 4,
      user_id: '2101231',
      image: null,
      clear: 0,
      created_at: '2022-07-15',
      user: {
        studentID: '2101231',
        name: '진병언',
      },
    },
    {
      id: 15,
      user_id: '2101232',
      image: null,
      clear: 0,
      created_at: '2022-07-21',
      user: {
        studentID: '2101232',
        name: '진병온',
      },
    },
    {
      id: 18,
      user_id: '2101233',
      image: null,
      clear: 0,
      created_at: '2022-08-02',
      user: {
        studentID: '2101233',
        name: '진병연',
      },
    },
    {
      id: 20,
      user_id: '2101234',
      image: null,
      clear: 0,
      created_at: '2022-08-13',
      user: {
        studentID: '2101234',
        name: '진병언',
      },
    },
  ];

  useEffect(() => {
    setListdata(data);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>남은 운동 현황</Text>
      <ScrollView style={styles.listContainer}>
        <View style={styles.listBox}>
          {listdata.map((data, index) => {
            return (
              <TouchableOpacity
                style={styles.list}
                key={index}
                onPress={() => {
                  navigation.navigate('SubmitImage', {
                    title: parsingDate(data.created_at),
                  });
                  // navigation.navigate('', {penalty_id: data.id});
                }}>
                <Text style={{fontSize: 20}}>
                  {parsingDate(data.created_at)} 지각
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    paddingTop: '10%',
    paddingLeft: '10%',
    paddingBottom: '5%',
  },
  listContainer: {
    flex: 1,
  },
  listBox: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    borderTopColor: '#C2BFBF',
    borderTopWidth: 1,
    borderRadius: 5,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    width: '85%',
    backgroundColor: 'white',
    marginTop: '3%',
    borderRadius: 7,
    paddingLeft: '7%',
  },
});

export default PenaltyList;
