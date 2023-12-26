import React, { useRef,useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign ,Ionicons,Foundation} from '@expo/vector-icons';
import CodeVerificationModal from './Modal';
import ModalConfirm from './ModalConfirm';
import {firebaseConfig} from '../config';
import firebase from 'firebase/compat/app';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const PersonalLoan = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [codeVerificationModalVisible, setCodeVerificationModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [verificationId,setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const handleFocus = (input) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmission = () => {
    // Validation checks
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }
  
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }
  
    if (!phoneNumber.trim()) {
      alert('Please enter your phone number');
      return;
    }
  
    if (!loanAmount.trim()) {
      alert('Please enter the loan amount');
      return;
    }

    const phoneProvider = new firebase.auth.PhoneAuthProvider();
  
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId)
      .catch((error) => {
        alert('Error sending SMS: ' + error.message);
      });

      if(phoneProvider){
        setCodeVerificationModalVisible(true);
      }
   
  };

  const handleCloseModal = () => {
    setCodeVerificationModalVisible(false);
  };

  
  const confirmCode = (code) => {
    // Ensure that name, email, phoneNumber, and loanAmount are defined
    if (!name || !email || !phoneNumber || !loanAmount) {
      console.error('One or more required variables are undefined.');
      return;
    }
  
    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      loan: loanAmount,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    };
  
    console.log(data);
  
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
  
    firebase.auth().signInWithCredential(credential)
    .then(() => {
      setCodeVerificationModalVisible(false);
      setConfirmModalVisible(true);

      const database = firebase.database();
      const loansRef = database.ref('loans');

      loansRef.push(data);

      setPhoneNumber('');
      setLoanAmount('');
      setName('');
      setEmail('');
    })
      .catch((error) => {
        alert(error);
      });
  };
  
  const handleCloseConfirmModal = () => {
    setConfirmModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.navbarTitle}>Personal Loan</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={[styles.inputWrapper, focusedInput === 'name' && styles.focusedInput]}>
        <Ionicons name="person" size={24} color={focusedInput === 'name' ? '#216FF4' : '#98A0A0'} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
          />
        </View>

        <View style={[styles.inputWrapper, focusedInput === 'email' && styles.focusedInput]}>
          <AntDesign name="mail" size={20} color={focusedInput === 'email' ? '#216FF4' : '#98A0A0'} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
          />
        </View>

        <View style={[styles.inputWrapper, focusedInput === 'phoneNumber' && styles.focusedInput]}>
        <Text style={[styles.icon, { color: focusedInput === 'phoneNumber' ? '#216FF4' : '#98A0A0' }]}>🇮🇳</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="phone-pad"
            onFocus={() => handleFocus('phoneNumber')}
            onBlur={handleBlur}
          />
        </View>

        <View style={[styles.inputWrapper, focusedInput === 'loanAmount' && styles.focusedInput]}>
        <Text style={[styles.icon, { color: focusedInput === 'loanAmount' ? '#216FF4' : '#98A0A0' }]} >₹ </Text>
          <TextInput
            style={styles.input}
            placeholder="Loan Amount"

            value={loanAmount}
            onChangeText={(text) => setLoanAmount(text)}
            keyboardType="numeric"
            onFocus={() => handleFocus('loanAmount')}
            onBlur={handleBlur}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmission}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <CodeVerificationModal
          visible={codeVerificationModalVisible}
          phoneNumber={phoneNumber}
          onClose={handleCloseModal}
          onSubmit={confirmCode}
        />

        <ModalConfirm
           visible={confirmModalVisible}
           onClose={handleCloseConfirmModal}
        />
        <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        />
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
  inputContainer: {
    marginTop: 40,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 20,
    backgroundColor: '#F7F8F8',
    borderWidth: 1,
    borderColor: 'white',
  },
  focusedInput: {
    borderColor: '#216FF4',
  },
  icon: {
    marginRight: 10,
    fontSize:20,
  },
  
  input: {
    flex: 1,
    fontSize: 16,
    color: '#216FF4',
  },
  submitButton: {
    backgroundColor: '#216FF4',
    padding: 16,
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 50,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PersonalLoan;
