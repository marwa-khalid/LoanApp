import * as React from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CodeVerificationModal = ({ visible, code, onClose, onSubmit }) => {
  const [enteredCode, setEnteredCode] = React.useState('');

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Enter the 6-digit code sent to your phone:</Text>
          <TextInput
            style={styles.codeInput}
            value={enteredCode}
            onChangeText={setEnteredCode}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.submitButton} onPress={() => onSubmit(enteredCode)}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// Add styles for the modal
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
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  codeInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#216FF4',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CodeVerificationModal;
