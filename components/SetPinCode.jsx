import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SetPinCodeScreen = ({ navigation }) => {
  const pinCode1Ref = useRef(null);
  const pinCode2Ref = useRef(null);
  const pinCode3Ref = useRef(null);
  const pinCode4Ref = useRef(null);
  const pinCode5Ref = useRef(null);
  const pinCode6Ref = useRef(null);
  const confirmPinCode1Ref = useRef(null);
  const confirmPinCode2Ref = useRef(null);
  const confirmPinCode3Ref = useRef(null);
  const confirmPinCode4Ref = useRef(null);
  const confirmPinCode5Ref = useRef(null);
  const confirmPinCode6Ref = useRef(null);

  const focusNextInput = (nextInputRef) => {
    nextInputRef.current.focus();
  };

  const focusPreviousInput = (prevInputRef) => {
    prevInputRef.current.focus();
  };

  const handleKeyPress = (index, inputRef, prevInputRef, event) => {
    if (event.nativeEvent.key === 'Backspace') {
      if (index > 1) {
        focusPreviousInput(prevInputRef);
        inputRef.current.clear();
      }
    }
  };

  const [error, setError] = useState('');
  const [borderColors, setBorderColors] = useState({
    pinCode1: '#484747',
    pinCode2: '#484747',
    pinCode3: '#484747',
    pinCode4: '#484747',
    pinCode5: '#484747',
    pinCode6: '#484747',
    confirmPinCode1: '#484747',
    confirmPinCode2: '#484747',
    confirmPinCode3: '#484747',
    confirmPinCode4: '#484747',
    confirmPinCode5: '#484747',
    confirmPinCode6: '#484747',
  });

  const handleChangeText = (index, text, nextInputRef) => {
    const newBorderColors = { ...borderColors };
    newBorderColors[`pinCode${index}`] = '#484747';
    newBorderColors[`confirmPinCode${index}`] = '#484747';
    setBorderColors(newBorderColors);

    if (error) {
      setError('');
    }

    if (text.length === 1 && nextInputRef) {
      focusNextInput(nextInputRef);
    }
  };

  const handleFinish = () => {
    let pinCode = '';
    let confirmPinCode = '';
    let pinCodeInputs = [
      pinCode1Ref.current,
      pinCode2Ref.current,
      pinCode3Ref.current,
      pinCode4Ref.current,
      pinCode5Ref.current,
      pinCode6Ref.current,
    ];
    let confirmPinCodeInputs = [
      confirmPinCode1Ref.current,
      confirmPinCode2Ref.current,
      confirmPinCode3Ref.current,
      confirmPinCode4Ref.current,
      confirmPinCode5Ref.current,
      confirmPinCode6Ref.current,
    ];

    pinCodeInputs.forEach((input, index) => {
      pinCode += input._lastNativeText;
    });

    confirmPinCodeInputs.forEach((input, index) => {
      confirmPinCode += input._lastNativeText;
    });

    if (!pinCode || !confirmPinCode) {
      setError('Please fill all fields.');
      setBorderColors({
        ...borderColors,
        pinCode1: '#FF0000',
        pinCode2: '#FF0000',
        pinCode3: '#FF0000',
        pinCode4: '#FF0000',
        pinCode5: '#FF0000',
        pinCode6: '#FF0000',
        confirmPinCode1: '#FF0000',
        confirmPinCode2: '#FF0000',
        confirmPinCode3: '#FF0000',
        confirmPinCode4: '#FF0000',
        confirmPinCode5: '#FF0000',
        confirmPinCode6: '#FF0000',
      });
      return;
    }

    if (pinCode !== confirmPinCode) {
      setError('Pin codes do not match.');
      setBorderColors({
        ...borderColors,
        pinCode1: '#FF0000',
        pinCode2: '#FF0000',
        pinCode3: '#FF0000',
        pinCode4: '#FF0000',
        pinCode5: '#FF0000',
        pinCode6: '#FF0000',
        confirmPinCode1: '#FF0000',
        confirmPinCode2: '#FF0000',
        confirmPinCode3: '#FF0000',
        confirmPinCode4: '#FF0000',
        confirmPinCode5: '#FF0000',
        confirmPinCode6: '#FF0000',
      });
      return;
    }

    console.log('Pin codes submitted:', pinCode);
    console.log('Confirm pin codes submitted:', confirmPinCode);
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
          <TextInput
            ref={pinCode1Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.pinCode1 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(1, text, pinCode2Ref)}
            onKeyPress={(event) => handleKeyPress(1, pinCode1Ref, null, event)}
            secureTextEntry={true}
          />
          <TextInput
            ref={pinCode2Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.pinCode2 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(2, text, pinCode3Ref)}
            onKeyPress={(event) => handleKeyPress(2, pinCode2Ref, pinCode1Ref, event)}
            secureTextEntry={true}
          />
          <TextInput
            ref={pinCode3Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.pinCode3 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(3, text, pinCode4Ref)}
            onKeyPress={(event) => handleKeyPress(3, pinCode3Ref, pinCode2Ref, event)}
            secureTextEntry={true}
          />
          <TextInput
            ref={pinCode4Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.pinCode4 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(4, text, pinCode5Ref)}
            onKeyPress={(event) => handleKeyPress(4, pinCode4Ref, pinCode3Ref, event)}
            secureTextEntry={true}
          />
          <TextInput
            ref={pinCode5Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.pinCode5 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(5, text, pinCode6Ref)}
            onKeyPress={(event) => handleKeyPress(5, pinCode5Ref, pinCode4Ref, event)}
            secureTextEntry={true}
          />
          <TextInput
            ref={pinCode6Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.pinCode6 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(6, text)}
            onKeyPress={(event) => handleKeyPress(6, pinCode6Ref, pinCode5Ref, event)}
            secureTextEntry={true}
          />
        </View>
      </View>
      <Text style={styles.description}>Please confirm your 6 digits security pin code below</Text>
      <View style={styles.pinContainer}>
        <View style={styles.pinCodeContainer}>
          <TextInput
            ref={confirmPinCode1Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.confirmPinCode1 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(1, text, confirmPinCode2Ref)}
            onKeyPress={(event) => handleKeyPress(1, confirmPinCode1Ref, null, event)}
            secureTextEntry={true}
          />
          <TextInput
            ref={confirmPinCode2Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.confirmPinCode2 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(2, text, confirmPinCode3Ref)}
            onKeyPress={(event) => handleKeyPress(2, confirmPinCode2Ref, confirmPinCode1Ref, event)}
            secureTextEntry={true}
          />
          <TextInput
            ref={confirmPinCode3Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.confirmPinCode3 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(3, text, confirmPinCode4Ref)}
            onKeyPress={(event) => handleKeyPress(3, confirmPinCode3Ref, confirmPinCode2Ref, event)}
            secureTextEntry={true}
          />
          <TextInput
            ref={confirmPinCode4Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.confirmPinCode4 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(4, text, confirmPinCode5Ref)}
            onKeyPress={(event) => handleKeyPress(4, confirmPinCode4Ref, confirmPinCode3Ref, event)}
            secureTextEntry={true}
          />
          <TextInput
            ref={confirmPinCode5Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.confirmPinCode5 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(5, text, confirmPinCode6Ref)}
            onKeyPress={(event) => handleKeyPress(5, confirmPinCode5Ref, confirmPinCode4Ref, event)}
            secureTextEntry={true}
          />
          <TextInput
            ref={confirmPinCode6Ref}
            style={[styles.pinCodeInput, { borderColor: borderColors.confirmPinCode6 }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(6, text)}
            onKeyPress={(event) => handleKeyPress(6, confirmPinCode6Ref, confirmPinCode5Ref, event)}
            secureTextEntry={true}
          />
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
