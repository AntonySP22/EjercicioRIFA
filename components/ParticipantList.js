import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal } from 'react-native';

const ParticipantList = ({ participants, winner, onSelectWinner, onResetRaffle }) => {
  const handleSelectWinner = () => {
    onSelectWinner();
    
    if (participants.length > 0 && winner) {
      alert(`Ganador seleccionado: ${winner.name}`);
    }
  };

  const renderItem = ({ item }) => (
    <View style={[
      styles.item,
      winner && winner.id === item.id && styles.winnerItem
    ]}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={participants}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay participantes aún</Text>
        }
      />
      
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Seleccionar ganador" 
            onPress={handleSelectWinner}
            disabled={participants.length === 0}
            color="#2a5c8d"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Reiniciar rifa" 
            onPress={onResetRaffle} 
            color="#e74c3c"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  item: {
    padding: 15,
    marginVertical: 6,
    backgroundColor: '#f0f7ff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c1d9f0',
  },
  winnerItem: {
    backgroundColor: '#d4e6ff',
    borderColor: '#2a5c8d',
    borderWidth: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#2a5c8d',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#6b8cae',
  },
  buttonsContainer: {
    marginTop: 20,
    gap: 12,
  },
  buttonWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  modalContent: {
    backgroundColor: '#e6f2ff',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#2a5c8d',
    borderWidth: 1,
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 12,
    color: '#2a5c8d',
    fontWeight: 'bold',
  },
  winnerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a4b8c',
    marginBottom: 25,
  },
  modalButton: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ParticipantList;