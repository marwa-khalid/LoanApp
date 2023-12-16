import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const OneMinuteTimer = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let timer;

    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      // Cleanup interval when the component is unmounted
      clearInterval(timer);
    };
  }, [seconds]);

  // Format the remaining seconds as "mm:ss"
  const formattedTime = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

  return (
    <View>
      <Text style={styles.resendText}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resendText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OneMinuteTimer;
