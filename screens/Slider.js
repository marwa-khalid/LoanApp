// components/SliderComponent.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Slider = () => {
  return (
    <View style={styles.sliderContainer}>
      <Image source={require('../images/s4.jpg')} style={styles.sliderImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  
  sliderImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  
});

export default Slider;
