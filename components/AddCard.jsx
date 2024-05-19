import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AddCard = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddCard = () => {
    // Handle adding a new card logic
  };

  // State for storing the formatted expiration date
  const [expirationDate, setExpirationDate] = useState('');

  // Function to format the expiration date
  const formatExpirationDate = (input) => {
    // Remove any non-numeric characters from the input
    const numericValue = input.replace(/\D/g, '');

    // Format the input as MM/YY
    return numericValue
      .slice(0, 4) // Limit input to 4 characters
      .replace(/(\d{2})(\d{1,2})/, '$1/$2'); // Automatically insert "/" after the second digit
  };

  // Event handler for expiration date input change
  const handleExpirationDateChange = (input) => {
    const formattedDate = formatExpirationDate(input);
    setExpirationDate(formattedDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Add a new card</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Card number"
          placeholderTextColor="#888888"
          keyboardType="numeric"
        />
        <TextInput style={styles.input} placeholder="User Code" placeholderTextColor="#888888" />
        <View style={styles.inlineInputs}>
          <View style={[styles.inlineInputContainer, { width: '45%' }]}>
            <TextInput
              style={styles.input}
              placeholder="Expiration date"
              placeholderTextColor="#888888"
              keyboardType="numeric"
              onChangeText={handleExpirationDateChange}
              value={expirationDate}
              maxLength={5} // Limit input to 5 characters
            />
          </View>
          <View style={styles.spaceBetween}><Text>{' '}</Text></View>
          <View style={[styles.inlineInputContainer, { width: '45%' }]}>
            <TextInput
              style={styles.input}
              placeholder="CVC"
              placeholderTextColor="#888888"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
        <Text style={styles.addButtonText}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 5,
  },
  inlineInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inlineInputContainer: {
    flex: 1,
  },
  spaceBetween: {
    width: '5%',
  },
  addButton: {
    backgroundColor: '#8000FF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddCard;
