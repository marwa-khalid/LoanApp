import React , {useEffect,useState} from 'react';
import { View, TouchableOpacity, Text, Modal, Linking, TouchableWithoutFeedback, StyleSheet, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomSidebar = ({ isOpen, toggleSidebar }) => {

  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
  const navigation = useNavigation();

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

  const phoneNumber = '8981866869';

  const handleContactPress = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl);
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        toggleSidebar();
      }}
    >
      <TouchableWithoutFeedback onPress={toggleSidebar}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.sidebar}>
        <TouchableOpacity style={[styles.titleContainer, screenHeight && screenHeight< 780 && styles.titleContainerSmall]} onPress={toggleSidebar}>
          <AntDesign name="left" size={24} color="black" style={{ marginLeft: 20 }} />
          <Text style={[styles.title,screenHeight && screenHeight< 780 && styles.titleSmall]}>Dhani Finance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.options} onPress={()=>navigation.navigate('Terms')}>
          <Text style={styles.text}>Term And Condition</Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.options} onPress={()=>navigation.navigate('PrivacyPolicy')}>
          <Text style={styles.text}>Privacy Policy</Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.options} onPress={handleContactPress}>
          <Text style={styles.text}>Contact Us</Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    </Modal>
  );
};

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
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 40,
  },
  titleContainerSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    color: '#216FF4',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight:20
  },
  titleSmall: {
    color: '#216FF4',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'space-between',
    marginHorizontal: 20,
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
    marginLeft: 20,
  },
});

export default CustomSidebar;
