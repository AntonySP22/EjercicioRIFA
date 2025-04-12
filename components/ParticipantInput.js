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
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Agregar" 
          onPress={handleAdd} 
          color="#4287f5" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    borderRadius: 4,
    overflow: 'hidden',
  },
});

export default ParticipantInput;