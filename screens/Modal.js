import React,{useEffect, useState} from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import OneMinuteTimer from './Timer';
import { AntDesign } from '@expo/vector-icons';

const CodeVerificationModal = ({ visible, phoneNumber, onClose, onResend, onSubmit }) => {
  const [enteredCode, setEnteredCode] = useState('');

  useEffect(()=>{
    setEnteredCode(' ');
  },[])

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          <Text style={styles.title}>Verification </Text>
            
          <Text style={styles.phoneNumberText}>
          A verification code will be sent to your number 
          </Text>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
          <View style={styles.codeContainer}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <TextInput
                key={index}
                style={styles.codeInput}
                value={enteredCode[index - 1]}
                onChangeText={(text) => handleCodeInput(text, index)}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
          </View>
          <Text style={styles.resendText}>
          <OneMinuteTimer />
          </Text>
          <Text>
          <Text style={{ color: '#8E8E8E'}}>Didn't Receive Code? </Text>
          <Text style={{ color: '#216FF4', fontWeight: 'bold', fontSize:16 }} onPress={onResend}>
            Resend Code
          </Text>
        </Text>
          <TouchableOpacity style={styles.submitButton} onPress={() => onSubmit(enteredCode)}>
            <Text style={styles.submitButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  function handleCodeInput(text, index) {
    const updatedCode = [...enteredCode];
    updatedCode[index - 1] = text;
    setEnteredCode(updatedCode.join(''));
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 25,
    width:350,
    alignItems: 'center',
    justifyConten:"space-between"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phoneNumberText: {
    fontSize: 16,
    marginBottom: 5,
    color:"black",
    
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color:"#216FF4",
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#216FF4',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    marginLeft:10,
    fontWeight:"bold"
  },
  resendText: {
    marginBottom:8
  },
  submitButton: {
    backgroundColor: '#216FF4',
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
    height:45,
    width:300,
    justifyContent:"center"
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton:{
    marginLeft:250
  }
});

export default CodeVerificationModal;
