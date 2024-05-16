import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SetPinCodeScreen = ({ navigation }) => {
  const pinCodeRefs = Array(6)
    .fill()
    .map((_, index) => useRef(null));
  const confirmPinCodeRefs = Array(6)
    .fill()
    .map((_, index) => useRef(null));

  const focusNextInput = (index, isConfirmPinCode = false) => {
    const refs = isConfirmPinCode ? confirmPinCodeRefs : pinCodeRefs;
    if (index < 5) refs[index + 1].current.focus();
  };

  const focusPreviousInput = (index, isConfirmPinCode = false) => {
    const refs = isConfirmPinCode ? confirmPinCodeRefs : pinCodeRefs;
    if (index > 0) refs[index - 1].current.focus();
  };

  const handleKeyPress = (index, isConfirmPinCode, event) => {
    if (event.nativeEvent.key === 'Backspace') {
      const refs = isConfirmPinCode ? confirmPinCodeRefs : pinCodeRefs;
      if (index > 0) {
        refs[index - 1].current.focus();
        refs[index - 1].current.clear();
      }
    }
  };

  const [error, setError] = useState('');
  const [pinCode, setPinCode] = useState(Array(6).fill(''));
  const [confirmPinCode, setConfirmPinCode] = useState(Array(6).fill(''));

  const handleChangeText = (index, text, isConfirmPinCode = false) => {
    const codes = isConfirmPinCode ? confirmPinCode : pinCode;
    codes[index] = text;
    if (error) setError('');
    if (text.length === 1) {
      focusNextInput(index, isConfirmPinCode);
    }
    if (text.length === 0) {
      focusPreviousInput(index, isConfirmPinCode);
    }
    if (index === 5 && !isConfirmPinCode) confirmPinCodeRefs[0].current.focus();
    if (index === 5 && isConfirmPinCode) handleFinish();
  };

  const handleFinish = () => {
    const pinCodeStr = pinCode.join('');
    const confirmPinCodeStr = confirmPinCode.join('');
    if (pinCodeStr !== confirmPinCodeStr) {
      setError('Pin codes do not match.');
      return;
    }
    console.log('Pin codes submitted:', pinCodeStr);
    console.log('Confirm pin codes submitted:', confirmPinCodeStr);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={40} color="white" />
      </TouchableOpacity>
      <Image source={require('../imgs/pin.png')} style={styles.pinImage} />
      <Text style={styles.title}>Set Pin Code</Text>
      <Text style={styles.description}>Please set your 6 digits security pin code below</Text>
      <View style={styles.pinContainer}>
        <View style={styles.pinCodeContainer}>
          {pinCode.map((value, index) => (
            <TextInput
              key={index}
              ref={pinCodeRefs[index]}
              style={[styles.pinCodeInput, error && { borderColor: '#FF0000' }]}
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleChangeText(index, text)}
              onKeyPress={(event) => handleKeyPress(index, false, event)}
              secureTextEntry={true}
            />
          ))}
        </View>
      </View>
      <Text style={styles.description}>Please confirm your 6 digits security pin code below</Text>
      <View style={styles.pinContainer}>
        <View style={styles.pinCodeContainer}>
          {confirmPinCode.map((value, index) => (
            <TextInput
              key={index}
              ref={confirmPinCodeRefs[index]}
              style={[styles.pinCodeInput, error && { borderColor: '#FF0000' }]}
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleChangeText(index, text, true)}
              onKeyPress={(event) => handleKeyPress(index, true, event)}
              secureTextEntry={true}
            />
          ))}
        </View>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>Finish</Text>
        <MaterialIcons name="arrow-forward" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  pinContainer: {
    alignItems: 'center',
  },
  pinImage: {
    width: 350,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
  },
  pinCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pinCodeInput: {
    backgroundColor: '#484747',
    color: 'white',
    textAlign: 'center',
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 10,
    fontFamily: 'Courier',
    fontSize: 20,
    borderWidth: 2,
  },
  finishButton: {
    backgroundColor: '#8000FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 90,
  },
  finishButtonText: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SetPinCodeScreen;
