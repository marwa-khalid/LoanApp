import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, description, image }) => {
  const navigation = useNavigation();

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
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    height:110,
  },
  cardContent: {
    flexDirection: 'row', 
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
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
