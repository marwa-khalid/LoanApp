import React from 'react';
import { View, ScrollView, Text, StyleSheet,TouchableOpacity, ViewBase } from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const TermsAndConditionsScreen = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>

        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
            <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.navbarTitle}>Terms and Conditions</Text>
        </View>


      <View style={styles.body}>

      

      <View style={styles.section}>
        <Text style={styles.subHeading}>1. General Information</Text>
        <Text style={styles.paragraph}>
          The content of the pages of this app is for your general information and use only. It is
          subject to change without notice.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>2. Warranty and Guarantee</Text>
        <Text style={styles.paragraph}>
          Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
          timeliness, performance, completeness, or suitability of the information and materials
          found or offered on this app for any particular purpose.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>3. Use at Your Own Risk</Text>
        <Text style={styles.paragraph}>
          Your use of any information or materials on this app is entirely at your own risk, for
          which we shall not be liable.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>4. Additional Conditions</Text>
        <Text style={styles.paragraph}>
        The Borrower shall, indemnify and keep the Lender harmless against any cost, loss, damages, 
        expenses, liability, interest, penalty or otherwise or third-party claims.
        </Text>
      </View>

      <View style={styles.agreementContainer}>
      <FontAwesome name="check-square" size={20} color="#4CAF50" style={styles.checkIcon} />
        <Text style={styles.agreementText}>
          By using our loan app, you agree to comply with and be bound by the following terms and
          conditions of use.
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
      body:{
        padding:30

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
  agreementText:{
    marginRight:20
  }
});

export default TermsAndConditionsScreen;
