import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

const WinnerModal = ({ visible, winner, onClose, participantsRemaining }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Ganador</Text>
          <Text style={styles.winnerName}>{winner ? winner.name : ""}</Text>
          
          <Text style={styles.remainingInfo}>
            {participantsRemaining > 0 
              ? `Quedan ${participantsRemaining} participantes` 
              : "No quedan más participantes"}
          </Text>
          
          <View style={styles.buttonContainer}>
            <Button
              title="Aceptar"
              onPress={onClose}
              color="#4287f5"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    minWidth: 250,
  },
  modalTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  winnerName: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f44336',
  },
  remainingInfo: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    borderRadius: 4,
    overflow: 'hidden',
    width: '100%',
  },
});

export default WinnerModal;