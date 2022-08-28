import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
// dayjs사용이유 moment.js는 업데이트 끝남, dayjs가 33배 가벼움
import dayjs from 'dayjs';

const Clock = () => {
  const [month, setMonth] = useState(''); // 월
  const [date, setDate] = useState(''); // 일
  const [amPm, setAmPm] = useState(''); // 오전, 오후
  const [time, setTime] = useState(''); // 보여주는 시계 시간
  const [dayOfWeek, setDayOfWeek] = useState(''); // 요일
  const [realTime, setRealTime] = useState(''); // 타이머 시작시키기 위한 시간
  const [timerOn, setTimerOn] = useState(false); // 타이머 스위치
  const [restartKey, setRestartKey] = useState(0); // 타이머 다시 시작 시키기위한 키
  const baseColor = '#D9D9D9'; // 시계컬러
  const floatColor = '#33668B'; // 타이머 컬러
  const [timerTime, setTimerTime] = useState(0); // 타이머 시간

  // 출췍 시간
  const checkTimeFunc = () => {
    const now = dayjs();
    // 체크시간
    const ymd = `${now.get('y')}-${now.get('month') + 1}-${now.get(
      'date',
    )} ${now.get('hour')}`;

    const morningCheck = dayjs(`${ymd}:50:59`);

    const selfStudyCheck = dayjs(`${ymd}:00:59`);

    const finishCheck = dayjs(`${ymd}:00:59`);

    // 이걸로 테스트
    const test = dayjs(
      `${now.get('y')}-${now.get('month') + 1}-${now.get('date')} 07:19:00`,
    );

    if (
      morningCheck.diff(realTime) <= 600000 &&
      morningCheck.diff(realTime) > 0
    ) {
      setTimerOn(true);
    } else if (
      selfStudyCheck.diff(realTime) <= 600000 &&
      selfStudyCheck.diff(realTime) > 0
    ) {
      setTimerOn(true);
    } else if (
      finishCheck.diff(realTime) <= 600000 &&
      finishCheck.diff(realTime) > 0
    ) {
      setTimerOn(true);
    } else if (test.diff(realTime) <= 600000 && test.diff(realTime) > 0) {
      setTimerOn(true);
      setTimerTime(Math.floor(test.diff(realTime) / 1000));
    } else {
      setTimerOn(false);
    }
  };

  useEffect(() => {
    const useEffectTimer = setInterval(checkTimeFunc, 1000);
    return () => {
      clearInterval(useEffectTimer);
    };
  }, [realTime]);

  useEffect(() => {
    setRestartKey(prevKey => prevKey + 1); // 이렇게 다시 시작 시킨다고 함
    console.log('restartKey : ', restartKey);
  }, [timerOn]);

  const currentTime = () => {
    const now = dayjs();

    // const dayOfWeekName = [
    //   '日曜日',
    //   '月曜日',
    //   '火曜日',
    //   '水曜日',
    //   '木曜日',
    //   '金曜日',
    //   '土曜日',
    // ];

    const dayOfWeekName = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    // const dayOfWeekName = [
    //   '일요일',
    //   '월요일',
    //   '화요일',
    //   '수요일',
    //   '목요일',
    //   '금요일',
    //   '토요일',
    // ];

    setAmPm(now.format('HH') >= 12 ? '오전' : '오후'); // 오전 오후
    setTime(now.format('h:mm')); // 시간 12:45 12시간 포맷
    setDayOfWeek(dayOfWeekName[now.get('day')]); // 요일
    setRealTime(prevState => {
      // 24시간 포맷
      return dayjs();
    });
  };

  // 시간렌더링시 useEffect 사용안하면 너무 많은 리렌더링 생겨서 성능저하
  useEffect(() => {
    const now = dayjs();
    setMonth(now.get('M') + 1 + '월'); // 월
    setDate(now.get('D') + '일'); // 일
    const useEffectTime = setInterval(currentTime, 1000);
    return () => {
      clearInterval(useEffectTime);
    };
  }, []);

  // CountdownCircleTimer에서 이렇게 쓰라함
  const children = ({remainingTime}) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds}`;
  };

  // CountdownCircleTimer에서 이렇게 쓰라함
  const startTimer = ({remainingTime}) => {
    // 누르면 카메라 켜지게 함
    const qrCheck = () => {};

    // 지각했을때 누르면 원래 화면으로
    const lateOnPress = () => {
      setTimerOn(false);

      // 추가해야하는거
      // 백에다가 지각했다는 데이터 전송
    };

    if (remainingTime === 0) {
      return (
        <TouchableOpacity onPress={lateOnPress}>
          <Text style={{fontSize: 43}}>지각</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={qrCheck}>
        <View style={styles.timer}>
          <Text style={{fontSize: 20}}>지각까지</Text>
          <Text style={{fontSize: 40}}>{children({remainingTime})}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  // 원안에 시간띄우는거임
  const renderTimeNow = () => {
    return (
      <View style={styles.timer}>
        <Text style={{fontSize: 20}}>{amPm}</Text>
        <Text style={{fontSize: 40}}>{time}</Text>
      </View>
    );
  };

  // 출첵 10분전부터 타이머 켜짐
  const renderTime = () => {
    // 주말제외
    // 토요일 5, 일요일 6
    if (dayOfWeek === 5 || dayOfWeek === 6) {
      return (
        <CountdownCircleTimer colors={floatColor}>
          {renderTimeNow}
        </CountdownCircleTimer>
      );
    } else {
      // 타이머 켜짐
      if (timerOn === true) {
        return (
          <CountdownCircleTimer
            key={restartKey}
            isPlaying
            duration={timerTime}
            colors={[floatColor, '#FF0000']}
            colorsTime={[10, 0]}
            trailColor={baseColor}
            onComplete={() => ({
              shouldRepeat: false,
            })}>
            {startTimer}
          </CountdownCircleTimer>
        );
      } else if (timerOn === false) {
        return (
          <CountdownCircleTimer colors={floatColor}>
            {renderTimeNow}
          </CountdownCircleTimer>
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, padding: 11}}>{`${month} ${date}`}</Text>
      <View style={styles.timerWrapper}>{renderTime()}</View>
      <Text style={{fontSize: 26, padding: 14}}>{dayOfWeek}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timer: {
    display: 'flex',
    alignItems: 'center',
  },
  timerWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default Clock;
