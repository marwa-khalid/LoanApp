import React from 'react';
import { View,TouchableOpacity,Text ,Modal,TouchableWithoutFeedback, Animated } from 'react-native';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomSidebar = ({ isOpen, toggleSidebar }) => {

  const sidebarStyles = isOpen
  ? [styles.sidebar, styles.sidebarOpen]
  : [styles.sidebar, styles.sidebarClosed];

  return (
  <Modal
      animationType='slide'
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      transparent={true}
      animationInTiming={4}
      animationOutTiming={4}
      hardwareAccelerated ={true}
      visible={isOpen}
      onRequestClose={() => {
        toggleSidebar();
      }}
    >
      <TouchableWithoutFeedback onPress={toggleSidebar}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      
  <View style={ sidebarStyles} >

    <TouchableOpacity  style={styles.titleContainer} onPress={toggleSidebar}>
        <AntDesign name="left" size={24} color="black" style={{ marginLeft: 20 }} />
        <Text   style={styles.title}>Dhani Faster Loan</Text>
      </TouchableOpacity>
   

    <TouchableOpacity
      style={styles.options}
    >
      <Text style={styles.text}>Term And Condition</Text>
      <AntDesign name="right" size={24} color="black" />
      
    </TouchableOpacity>
    <View style={styles.line} />

    <TouchableOpacity
      style={styles.options}
    >
       <Text style={styles.text}>Privacy Policy</Text>
       <AntDesign name="right" size={24} color="black" />
     
    </TouchableOpacity>
    <View style={styles.line} />
    </View>
  </Modal>
 
  )};
  
  const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '80%',
    backgroundColor: 'white',
    zIndex: 1,
  },
  sidebarOpen: {
    transform: [{ translateX: 0 }],
  },
  sidebarClosed: {
    transform: [{ translateX: 100 }], 
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 1,
    marginBottom: 40,
  },
  title: {
    color: '#216FF4',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  options: {
    marginLeft: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'space-between',
    marginRight: 30,
    color: '#2A3333',
  },
  text: {
    fontSize: 18,
  },
  line: {
    width: '75%', // Adjust the width as needed
    height: 2,
    backgroundColor: '#F3F3F3',
    marginTop: 15,
    marginLeft: 50,
  },
});



export default CustomSidebar;