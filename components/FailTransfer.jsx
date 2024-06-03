import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FailTransfer = ({ navigation }) => {
  const handleGoHome = () => {
    navigation.navigate('Home'); // Navigate to the Home screen
  };

  return (
    <View style={styles.container}>
      <Image source={require('../imgs/fail_transfer.png')} style={styles.gif} />
      <Text style={styles.text}>Hold on tight! Your transfer needs a quick refresh. Try again soon.</Text>
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

export default FailTransfer;
