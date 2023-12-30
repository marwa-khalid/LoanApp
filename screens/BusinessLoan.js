import React, { useEffect, useRef,useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign ,Ionicons,Foundation} from '@expo/vector-icons';
import ModalConfirm from './ModalConfirm';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBfP7hRKKLjiKeW7U2ScYIBH-vLaIYiFtI",
  authDomain: "phone-auth-42cba.firebaseapp.com",
  projectId: "phone-auth-42cba",
  storageBucket: "phone-auth-42cba.appspot.com",
  messagingSenderId: "125579364412",
  appId: "1:125579364412:web:9e604129a12c0d17a25b39"
}


const BusinessLoan = () => {
  const navigation = useNavigation();
  
  useEffect(()=>{
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }    
  },[])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

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

    if (phoneNumber.replace(/\D/g, '').length !== 10){
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    if (!loanAmount.trim()) {
      alert('Please enter the loan amount');
      return;
    }

    setConfirmModalVisible(true);
    const formattedPhoneNumber = `+91${phoneNumber}`;

    const data = {
          name: name,
          email: email,
          phoneNumber: formattedPhoneNumber,
          loan: loanAmount,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        };

    
      const database = firebase.database();
      const loansRef = database.ref('loans');

      loansRef.push(data);

      setPhoneNumber('');
      setLoanAmount('');
      setName('');
      setEmail('');
   
  };
  
  const handleCloseConfirmModal = () => {
    setConfirmModalVisible(false);
  };

  const formatPhoneNumber = (input) => {
    const cleaned = String(input).replace(/\D/g, ''); // Remove non-numeric characters

    if (cleaned.length <= 10) {
      // Apply the format based on the length of the cleaned input
      const formatted = cleaned.replace(/(\d{5})(\d{1,5})/, '$1 $2');
      setPhoneNumber(formatted);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.navbarTitle}>Business Loan</Text>
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
        <Text style={[styles.icon, { color: focusedInput === 'phoneNumber' ? '#216FF4' : '#98A0A0' }]}>+91</Text>
         <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={formatPhoneNumber}
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

        <ModalConfirm
           visible={confirmModalVisible}
           onClose={handleCloseConfirmModal}
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

export default BusinessLoan;
