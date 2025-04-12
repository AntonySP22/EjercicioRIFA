import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ParticipantList = ({ participants, winner, onSelectWinner, onResetRaffle }) => {
  const handleSelectWinner = () => {
    onSelectWinner();
  };

  const renderItem = ({ item }) => (
    <View style={[
      styles.item,
      winner && winner.id === item.id && styles.winnerItem
    ]}>
      <Text style={styles.itemText}>{item.name}</Text>
      {winner && winner.id === item.id && (
        <Text style={styles.winnerBadge}>GANADOR</Text>
      )}
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
            color="#4287f5"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Reiniciar rifa" 
            onPress={onResetRaffle} 
            color="#7AC6D2"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  item: {
    padding: 12,
    marginVertical: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  winnerItem: {
    backgroundColor: '#e8f4ff',
    borderColor: '#4287f5',
    borderWidth: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  buttonsContainer: {
    marginTop: 20,
    marginBottom: 30,
    gap: 10,
  },
  buttonWrapper: {
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 5,
  },
  winnerBadge: {
    fontSize: 14,
    color: '#f44336',
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default ParticipantList;