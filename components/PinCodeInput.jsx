import React, { useRef } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Text } from 'react-native'; // Import Text
import { AntDesign } from '@expo/vector-icons';

const PinCodeInput = ({ navigation }) => {
  const pinInputRefs = Array(6).fill(0).map(() => useRef(null));

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangeText = (index, value) => {
    if (value && value.length === 1) {
      if (index < 5) {
        pinInputRefs[index + 1].current.focus();
      }
    } else if (value.length === 0 && index > 0) {
      pinInputRefs[index - 1].current.focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0) {
      pinInputRefs[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <AntDesign name="arrowleft" size={35} color="#FFFFFF" />
      </TouchableOpacity>
      <Image source={require('../imgs/pinCode.png')} style={styles.image} />
      <View style={styles.pinInputContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            ref={pinInputRefs[index]}
            placeholder="-"
            placeholderTextColor="#888888"
            style={styles.pinInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleChangeText(index, value)}
            onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
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
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  pinInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  pinInput: {
    width: 50,
    height: 50,
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: '#8000FF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 50,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PinCodeInput;
