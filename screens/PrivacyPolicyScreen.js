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
        <Text style={styles.paragraph}>
          Thank you for choosing Dhani Finance, a loan application provided by us to you. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By using Dhani Finance, you agree to the terms and practices described in this policy.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Information We Collect</Text>
        
          <Text style={styles.paragraph}> - Name</Text>
          <Text style={styles.paragraph}> - Phone Number</Text>
          <Text style={styles.paragraph}> - Email Address</Text>
          <Text style={styles.paragraph}> - Loan Amount</Text>
        
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Data Security</Text>
        <Text style={styles.paragraph}>
          We take reasonable measures to safeguard your personal information from unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption and security protocols to protect your data.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>How We Use Your Information</Text>
        <Text style={styles.paragraph}>
          We use the collected information for the following purposes:
          - Loan Processing and Approval
          - Communication with Users
          - Service Improvement and Personalization
          - Compliance with Legal Requirements
          - Fraud Prevention and Security
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Information Sharing</Text>
        <Text style={styles.paragraph}>
          We may share your information with third parties for the following reasons:
          - Service Providers: We may engage third-party service providers to assist with loan processing, communication, and other related services.
          - Legal Compliance: We may disclose information in response to legal requests, court orders, or to comply with applicable laws and regulations.
          - Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Data Security</Text>
        <Text style={styles.paragraph}>
          We take reasonable measures to safeguard your personal information from unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption and security protocols to protect your data.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Your Choices</Text>
        <Text style={styles.paragraph}>
          You have the right to:
          - Access, correct, or delete your personal information.
          - Opt-out of marketing communications.
          - Request information about our data practices.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Updates to Privacy Policy</Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. Changes will be communicated through the Dhani Finance application. Please review the policy periodically for any updates.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at 8981866869 or dhanifastloan875@gmail.com.
        </Text>
      </View>
        <View style={styles.agreementContainer}>
          <FontAwesome name="check-square" size={20} color="#4CAF50" style={styles.checkIcon} />
          <Text style={styles.agreementText}>
            By using Dhani Finance, you agree to comply with and be bound by our Privacy Policy.
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
