import React, { useRef,useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign ,Ionicons,Foundation} from '@expo/vector-icons';
import CodeVerificationModal from './Modal';
import ModalConfirm from './ModalConfirm';
import {firebaseConfig} from '../config';
import firebase from 'firebase/compat/app';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import axios from 'axios';

const HomeLoan = () => {
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

      setCodeVerificationModalVisible(true);
   
  };

  const handleCloseModal = () => {
    setCodeVerificationModalVisible(false);
  };

  
  const confirmCode = (code) =>{
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
    .then(() => {
      setCodeVerificationModalVisible(false);
      setConfirmModalVisible(true);

      axios.post("https://loanapp-server-production.up.railway.app/loans", data)
        .then((response) => {
          console.log(response.data.message);
          setPhoneNumber('');
          setLoanAmount('');
          setName('');
          setPhoneNumber('');
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    })
    .catch((error)=>{
      alert(error);
    })

  }

  const handleCloseConfirmModal = () => {
    setConfirmModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.navbarTitle}>Home Loan</Text>
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
          <Text style={styles.icon} >🇮🇳</Text>
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
        <Foundation name="dollar" size={24} color={focusedInput === 'loanAmount' ? '#216FF4' : '#98A0A0'} style={styles.icon} />
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
    marginTop: 40,
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
    fontSize:23
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

export default HomeLoan;
