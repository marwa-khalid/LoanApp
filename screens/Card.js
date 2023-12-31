import React , { useState ,useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, description, image }) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    // Update screenHeight when the screen size changes
    const updateScreenHeight = () => {
      setScreenHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateScreenHeight);

    return () => {
      // Remove the event listener when the component is unmounted
      Dimensions.removeEventListener('change', updateScreenHeight);
    };
  }, []);

  const handlePress = () => {
    switch (title) {
      case 'Personal Loan':
        navigation.navigate('PersonalLoan');
        break;
      case 'Home Loan':
        navigation.navigate('HomeLoan');
        break;
      case 'Business Loan':
        navigation.navigate('BusinessLoan');
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity 
    onPress={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}>
      <View style={[styles.card,  screenHeight && screenHeight< 780 && styles.smallScreenPadding, isPressed && styles.cardPressed,]}>
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
          </View>
          <Image source={image} style={styles.cardImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width:360,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000', 
    height:110,
  },
  smallScreenPadding:{
    width:320,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000', 
    height:110,
  },
  cardPressed: {
    elevation: 0,
    shadowColor: '#000', 
  },
  cardContent: {
    flexDirection: 'row', 
    backgroundColor: '#fff',
    borderRadius: 10,
    height:110,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    margin:10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"#0071BD"
  },
  cardDescription: {
    marginTop:10,
    color: '#98A0A0',
    width: 200,
    marginBottom:10,
    marginTop:10,
  },
  cardImage: {
    width: 100, 
    height: '100%', 
    resizeMode: 'contain',
    marginRight:20
  },
});

export default Card;
