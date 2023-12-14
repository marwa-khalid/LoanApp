import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Modal from './Sidebar';
import CardComponent from './Card';
import { useNavigation } from '@react-navigation/native';

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
            
            <Modal isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Text style={styles.navbarTitle} >Dhani Faster Loan</Text> 
        </View>

        <View style={styles.imageContainer}>
            <Image source={require('../images/s4.jpg')} style={styles.sliderImage} />
        </View>

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
        color:"#98A0A0",
        marginTop:40
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

    getNowButton: {
      backgroundColor: '#3498db',
      padding: 16,
      borderRadius: 5,
      margin: 20,
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
    sliderImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius:30
      },
      imageContainer:{
        padding:10
      }
  });
  

export default Homepage;