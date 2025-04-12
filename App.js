import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import ParticipantInput from './components/ParticipantInput';
import ParticipantList from './components/ParticipantList';
import WinnerModal from './components/WinnerModal';

export default function App() {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);

  const addParticipant = (name) => {
    if (name.trim()) {
      setParticipants([...participants, { id: Date.now().toString(), name }]);
    }
  };

  const selectWinner = () => {
    if (participants.length > 0) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      setWinner(participants[randomIndex]);
    }
  };

  const resetRaffle = () => {
    setParticipants([]);
    setWinner(null);
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
      
      <View style={styles.footer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
  },
  content: {
    flex: 1,
    marginBottom: 10,  
  },
  header: {
    backgroundColor: '#2a5c8d',
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    marginBottom: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#c1d9f0',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  footerContainer: {
    paddingTop: 10,  
    backgroundColor: '#e6f2ff', 
  },
  footer: {
    height: 25,
    backgroundColor: '#1a4b8c',
    borderTopWidth: 2,
    borderTopColor: '#3a6cad',
  }
});