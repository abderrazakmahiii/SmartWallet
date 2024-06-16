import React, { useRef, useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const EmailPhoneConfirmation = ({ navigation }) => {
  const imagePath = require('../imgs/confirm.png');
  const emailCode1Ref = useRef(null);
  const emailCode2Ref = useRef(null);
  const emailCode3Ref = useRef(null);
  const emailCode4Ref = useRef(null);
  const phoneCode1Ref = useRef(null);
  const phoneCode2Ref = useRef(null);
  const phoneCode3Ref = useRef(null);
  const phoneCode4Ref = useRef(null);
  const [emailResendDisabled, setEmailResendDisabled] = useState(true);
  const [emailResendTimer, setEmailResendTimer] = useState(60);
  const [phoneResendDisabled, setPhoneResendDisabled] = useState(true);
  const [phoneResendTimer, setPhoneResendTimer] = useState(60);

  const handleOnChangeText = (text, inputRef, prevInputRef) => {
    if (text.length === 0 && prevInputRef && prevInputRef.current) {
      prevInputRef.current.focus();
    } else if (text.length === 1 && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleEmailResendCode = () => {
    setEmailResendDisabled(true);
    setEmailResendTimer(60);
    const emailResendInterval = setInterval(() => {
      setEmailResendTimer((prev) => {
        if (prev === 0) {
          clearInterval(emailResendInterval);
          setEmailResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handlePhoneResendCode = () => {
    setPhoneResendDisabled(true);
    setPhoneResendTimer(60);
    const phoneResendInterval = setInterval(() => {
      setPhoneResendTimer((prev) => {
        if (prev === 0) {
          clearInterval(phoneResendInterval);
          setPhoneResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    handleEmailResendCode();
    handlePhoneResendCode();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <Image source={imagePath} style={styles.image} />
      <Text style={styles.title}>Email and Phone Verification</Text>
      <Text style={styles.description}>
        Please enter the 4 digits codes sent to your email and phone number.
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email Code</Text>
        <View style={styles.codeContainer}>
          <TextInput
            ref={emailCode1Ref}
            style={[styles.codeInput, { fontWeight: 'bold' }]}
            placeholder='-'
            placeholderTextColor="white"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleOnChangeText(text, emailCode2Ref, null)}
          />
          <TextInput
            ref={emailCode2Ref}
            style={[styles.codeInput, { fontWeight: 'bold' }]}
            placeholder='-'
            placeholderTextColor="white"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleOnChangeText(text, emailCode3Ref, emailCode1Ref)}
          />
          <TextInput
            ref={emailCode3Ref}
            style={[styles.codeInput, { fontWeight: 'bold' }]}
            placeholder='-'
            placeholderTextColor="white"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleOnChangeText(text, emailCode4Ref, emailCode2Ref)}
          />
          <TextInput
            ref={emailCode4Ref}
            style={[styles.codeInput, { fontWeight: 'bold' }]}
            placeholder='-'
            placeholderTextColor="white"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleOnChangeText(text, null, emailCode3Ref)}
          />
        </View>
        <TouchableOpacity
          style={[styles.resendCodeContainer, emailResendDisabled ? styles.disabledButton : null]}
          disabled={emailResendDisabled}
          onPress={handleEmailResendCode}
        >
          <Text style={styles.resendCodeTimer}>
            {String(Math.floor(emailResendTimer / 60)).padStart(2, '0')}:
            {String(emailResendTimer % 60).padStart(2, '0')}
          </Text>
          <Text
            style={[
              styles.resendCodeText,
              emailResendDisabled ? styles.disabledText : null,
            ]}
          >
            Resend code
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone Code</Text>
        <View style={styles.codeContainer}>
          <TextInput
            ref={phoneCode1Ref}
            style={[styles.codeInput, { fontWeight: 'bold' }]}
            placeholder='-'
            placeholderTextColor="white"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleOnChangeText(text, phoneCode2Ref, null)}
          />
          <TextInput
            ref={phoneCode2Ref}
            style={[styles.codeInput, { fontWeight: 'bold' }]}
            placeholder='-'
            placeholderTextColor="white"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleOnChangeText(text, phoneCode3Ref, phoneCode1Ref)}
          />
          <TextInput
            ref={phoneCode3Ref}
            style={[styles.codeInput, { fontWeight: 'bold' }]}
            placeholder='-'
            placeholderTextColor="white"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleOnChangeText(text, phoneCode4Ref, phoneCode2Ref)}
          />
          <TextInput
            ref={phoneCode4Ref}
            style={[styles.codeInput, { fontWeight: 'bold' }]}
            placeholder='-'
            placeholderTextColor="white"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleOnChangeText(text, null, phoneCode3Ref)}
          />
        </View>
        <TouchableOpacity
          style={[styles.resendCodeContainer, phoneResendDisabled ? styles.disabledButton : null]}
          disabled={phoneResendDisabled}
          onPress={handlePhoneResendCode}
        >
          <Text style={styles.resendCodeTimer}>
            {String(Math.floor(phoneResendTimer / 60)).padStart(2, '0')}:
            {String(phoneResendTimer % 60).padStart(2, '0')}
          </Text>
          <Text
            style={[
              styles.resendCodeText,
              phoneResendDisabled ? styles.disabledText : null,
            ]}
          >
            Resend code
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
        <MaterialIcons name="arrow-forward" size={24} color="#8000FF" style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20, 
  },
  backButton: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
    top: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 230,
    color: 'white',
    marginBottom: 5,
  },
  codeContainer: {
    flexDirection: 'row',
  },
  codeInput: {
    backgroundColor: '#484747',
    color: 'white',
    textAlign: 'center',
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 230,
    justifyContent: 'space-between',
  },
  resendCodeText: {
    color: '#8000FF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  resendCodeTimer: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
  disabledText: {
    color: '#999999',
  },
  continueButton: {
    flexDirection: 'row',
    backgroundColor: '#8000FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: '90%',
    height: 50,
    bottom: 50,
    textAlign: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  arrowIcon: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EmailPhoneConfirmation;
