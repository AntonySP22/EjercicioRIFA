import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import ParticipantInput from './components/ParticipantInput';
import ParticipantList from './components/ParticipantList';
import WinnerModal from './components/WinnerModal';

export default function App() {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addParticipant = (name) => {
    if (name.trim()) {
      setParticipants([...participants, { id: Date.now().toString(), name }]);
    }
  };

  const selectWinner = () => {
    let currentParticipants = [...participants];
    
    if (winner) {
      currentParticipants = currentParticipants.filter(
        participant => participant.id !== winner.id
      );
    }
    
    if (currentParticipants.length > 0) {
      if (currentParticipants.length === 1) {
        setWinner(currentParticipants[0]);
        setParticipants([]);
        setIsModalVisible(true);
        alert('Este es el último ganador. No quedan más participantes.');
      } else {
        const randomIndex = Math.floor(Math.random() * currentParticipants.length);
        setWinner(currentParticipants[randomIndex]);
        setParticipants(currentParticipants);
        setIsModalVisible(true);
      }
    } else {
      alert('No quedan más participantes disponibles');
      setWinner(null);
    }
  };

  const resetRaffle = () => {
    setParticipants([]);
    setWinner(null);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sorteo de Rifas</Text>
        <Text style={styles.headerSubtitle}>Selecciona un ganador al azar</Text>
      </View>
      
      <ParticipantInput onAddParticipant={addParticipant} />
      <ParticipantList 
        participants={participants} 
        winner={winner} 
        onSelectWinner={selectWinner} 
        onResetRaffle={resetRaffle} 
      />
      
      <WinnerModal 
        visible={isModalVisible}
        winner={winner}
        onClose={closeModal}
        participantsRemaining={participants.length}
      />
      
      <View style={styles.footerSpacer} />
      <View style={styles.footer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    marginBottom: 10,  
  },
  header: {
    backgroundColor: '#4287f5',
    padding: 15,
    paddingTop: 35,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    marginBottom: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#e8f4ff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  footerSpacer: {
    height: 20,
  },
  footer: {
    height: 20,
    backgroundColor: '#4287f5',
    borderTopWidth: 1,
    borderTopColor: '#3a75d8',
  }
});