// components/AmountInput.jsx
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const AmountInput = ({ amount, setAmount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        placeholderTextColor="#888888"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: 'white',
    marginBottom: 10,
  },
  input: {
    height: 55,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 5,
    borderColor: '#444',
    borderWidth: 1,
  },
});

export default AmountInput;
