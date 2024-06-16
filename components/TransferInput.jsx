import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TransferInput = () => {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="IBAN"
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      marginBottom: 50,
      width: '90%',
      alignSelf: 'center',
      padding: 10, 
    },
    input: {
      height: 55,
      backgroundColor: 'gray',
      marginBottom: 10,
      paddingLeft: 8,
      borderRadius: 5,
    },
    sendButton: {
    backgroundColor: '#8000FF', 
    borderRadius: 10,
    height: 55,
    width: '100%',
    marginTop: 20, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    },
    sendButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    },
  });
  
export default TransferInput;
