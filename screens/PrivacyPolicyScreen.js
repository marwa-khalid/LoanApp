import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navbarTitle}>Privacy Policy</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.subHeading}>1. Information Collection and Use</Text>
          <Text style={styles.paragraph}>
            We collect and use your personal information for the following purposes:
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeading}>2. Data Security</Text>
          <Text style={styles.paragraph}>
            Your data is stored securely and measures are taken to protect it from unauthorized access.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeading}>3. Cookies</Text>
          <Text style={styles.paragraph}>
            Our website uses cookies to improve your experience. By using our website, you agree to our use of cookies.
          </Text>
        </View>

        <View style={styles.agreementContainer}>
          <FontAwesome name="check-square" size={20} color="#4CAF50" style={styles.checkIcon} />
          <Text style={styles.agreementText}>
            By using our app, you agree to comply with and be bound by our Privacy Policy.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    color: '#98A0A0',
  },
  navbarTitle: {
    color: 'black',
    fontSize: 25,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  body: {
    padding: 30,
  },
  checkIcon: {
    marginRight: 10,
  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  agreementText: {
    marginRight: 20,
  },
});

export default PrivacyPolicyScreen;
