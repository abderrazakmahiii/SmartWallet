import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SuccessTransfer = ({ navigation }) => {
  const handleGoHome = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Image source={require('../imgs/success_transfer.png')} style={styles.gif} />
      <Text style={styles.text}>We can't sing it yet, but your transfer just went through with flying colors!</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoHome}>
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8000FF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SuccessTransfer;
