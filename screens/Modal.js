import React,{useEffect, useState} from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity, StyleSheet,Dimensions} from 'react-native';
import OneMinuteTimer from './Timer';
import { AntDesign } from '@expo/vector-icons';

const CodeVerificationModal = ({ visible, phoneNumber, onClose, onResend, onSubmit }) => {
  const [enteredCode, setEnteredCode] = useState('');
  const codeInputs = Array.from({ length: 6 }, () => React.createRef());

  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

  useEffect(()=>{
    setEnteredCode('');
    const updateScreenHeight = () => {
      setScreenHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateScreenHeight);

    return () => {
      // Remove the event listener when the component is unmounted
      Dimensions.removeEventListener('change', updateScreenHeight);
    };
  },[])

    const handleCodeChange = (index, value) => {
    const newCodes = [...codes];
    newCodes[index] = value;

    // If backspace is pressed and the current input is empty,
    // move the focus to the previous input.
    if (value === '' && index > 0) {
      codeInputs[index - 1].focus();
    }

    setCodes(newCodes);
  };
  

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, screenHeight && screenHeight< 780 && styles.modalContentSmall]}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          <Text style={styles.title}>Verification </Text>
            
          <Text style={[styles.phoneNumberText,, screenHeight && screenHeight< 780 && styles.phoneNumberTextSmall]}>
          A verification code will be sent to your number 
          </Text>
          <Text style={styles.phoneNumber}>+91{phoneNumber}</Text>
          <View style={styles.codeContainer}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <TextInput
                key={index}
                style={styles.codeInput}
                value={enteredCode[index - 1]}
                ref={codeInputs[index - 1]}
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
  
    if (text !== '' && index < 6) {
      codeInputs[index].current.focus();
    }
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
  modalContentSmall: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 25,
    width:320,
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
  phoneNumberTextSmall: {
    fontSize: 13,
    marginBottom: 4,
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
