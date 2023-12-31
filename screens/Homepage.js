import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Sidebar from './Sidebar';
import CardComponent from './Card';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const Homepage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      
        <View style={styles.navbar}>
        
            <TouchableOpacity onPress={toggleSidebar}> 
                <FontAwesome name="bars" size={24} style={styles.icon} />
            </TouchableOpacity>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
           
            <Text style={styles.navbarTitle} >Dhani Finance</Text> 
        </View>

        <Swiper style={styles.sliderContainer} showsButtons={false} autoplay={true} data-bs-theme="light" loop={true}>
        {[1, 2, 3].map((index) => (
          <View key={index} style={styles.slide}>
            <Image source={require('../images/s4.jpg')} style={styles.sliderImage} />
          </View>
        ))}
      </Swiper>
        {/* Card Section */}
        <View style={styles.cardSection}>
        <CardComponent title="Personal Loan" description="Excel in sports with expert coaching." image={require('../images/s5.jpg')} />
        <CardComponent title="Home Loan" description="Boost grades with tutoring." image={require('../images/s6.jpg')} />
        <CardComponent title="Business Loan" description="Unleash musical talent professionally." image={require('../images/s7.jpg')} />
        </View>
</ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:10,
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF', 
        color:"#98A0A0"
    },
    navbarTitle: {
      color: 'black',
      fontSize: 25,
      marginLeft:20,
      fontWeight: 'bold',
    },

    icon:{
        color:"#98A0A0"
    },

    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
    cardSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    sliderContainer: {
      height: 260,
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sliderImage: {
      marginTop:10,
      width: '100%',
      height: 230,
      padding:30,
      resizeMode: 'contain',
      borderRadius: 30,
    },
    
      imageContainer:{
        padding:10
      }
  });
  

export default Homepage;