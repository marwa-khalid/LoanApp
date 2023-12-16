import React from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ModalConfirm = ({  visible,onClose }) => {

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>

              <Image source={require('../images/success.jpg')} style={styles.successImage} />
              <Text style={styles.successMessage}>Request submitted</Text>
              <Text style={styles.successDescription}>Your request has been successfully submitted.</Text>
              <TouchableOpacity style={styles.doneButton} onPress={onClose}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );


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

  successImage: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  successDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: '#8E8E8E',
    width:230,
    textAlign:"center"
  },
  doneButton: {
    backgroundColor: '#216FF4',
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
    width: 263,
    height:45,
    justifyContent: 'center',
    marginBottom:24
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ModalConfirm;
