import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ParticipantInput = ({ onAddParticipant }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    onAddParticipant(name);
    setName('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del participante"
        placeholderTextColor="#6b8cae"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Agregar" 
          onPress={handleAdd} 
          color="#2a5c8d" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#2a5c8d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 45,
    borderColor: '#a3c4e8',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#2a5c8d',
    backgroundColor: '#f5f9ff',
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ParticipantInput;