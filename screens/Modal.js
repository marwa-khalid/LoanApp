import React from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CodeVerificationModal = ({ visible, phoneNumber, onClose, onResend, onSubmit }) => {
  const [enteredCode, setEnteredCode] = React.useState('');

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.phoneNumberText}>
            A verification code has been sent to your phone number {phoneNumber}
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
          <Text style={styles.resendText} onPress={onResend}>
            Didn't get the code? Resend it.
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phoneNumberText: {
    fontSize: 16,
    marginBottom: 5,
    color:"black"
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color:"black"
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
    fontSize: 14,
    marginBottom: 15,
    textDecorationLine: 'none',
    color: '#8E8E8E',
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
});

export default CodeVerificationModal;
