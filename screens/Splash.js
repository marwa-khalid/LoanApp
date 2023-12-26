import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { useRef} from 'react';

const slides = [
  {
    key: 1,
    title: 'Welcome To Dhani Faster Loan',
    text: "We're here to assist you in your financial journey. To get started, we need some information from you. Let's make this quick and easy. Tap 'Next' to Begin.",
    image: require("../images/s1.png"),
  },
  {
    key: 2,
    title: 'Easy Instalment',
    text: "We're here to assist you in your financial journey. To get started, we need some information from you. Let's make this quick and easy. Tap 'Next' to Begin.",
    image: require("../images/s2.png"),
  },
  {
    key: 3,
    title: 'Secure Payment',
    text: "Experience peace of mind with our 'Secure Payment' feature. Your financial transactions are safeguarded through cutting-edge encryption, ensuring a secure and worry-free payment process.",
    image: require("../images/s3.png"),
  }
];

const Splash = () => {

  const navigation = useNavigation();
  const slider = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
          {(item.key==1 || item.key==2)  &&
            <TouchableOpacity style={styles.button}  onPress={() => slider.current.goToSlide(item.key, true)}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          }
          {item.key==3 &&
            <TouchableOpacity style={styles.button} onPress={() =>  {navigation.navigate('Homepage')}}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }

    return (
      <AppIntroSlider
        activeDotStyle={styles.activeDot}
        dotStyle={styles.inactiveDot}
        renderItem={renderItem}
        data={slides}
        ref={(ref) => (slider.current = ref)}
      />
    );
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor:"#F8F8F8",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    marginTop:50,
    width: 340,
    height: 380,
    resizeMode: 'contain',
  },
  bottomContainer: {
    backgroundColor:"#fff",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:"center",
    marginBottom: 80,
    width: 340,
    height:370,
    borderRadius:30,
    padding:25
  },
  title: {
    marginTop:20,
    fontSize: 26,
    width:290,
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',
    textAlign: 'center',
    color:"#434343"
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    color:"#949494"
  },
  button: {
    backgroundColor: '#216FF4',
    padding: 16,
    borderRadius: 5,
    width:290,
    height:53,
    borderRadius:16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign:"center"
  },
  activeDot: {
    backgroundColor: '#216FF4',
    width: 9,
    height: 9,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom:720
  },
  inactiveDot: {
    backgroundColor: '#D9D9D9',
    width: 9,
    height: 9,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom:720
  },
});

export default Splash;