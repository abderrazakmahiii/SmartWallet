import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PasswordRecovering = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const codeInputRefs = useRef([]);

  const handleCodeChange = (index, value) => {
    const updatedCode = [...code];
    updatedCode[index] = value;

    if (value.length === 1 && index < 5) {
      codeInputRefs.current[index + 1].focus();
    }

    if (value.length === 0 && index > 0) {
      codeInputRefs.current[index - 1].focus();
    }

    setCode(updatedCode);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Logic to handle password recovery
      console.log('Password recovery successful');
    }
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (code.some((digit) => digit === '')) {
      errors.code = 'Code must be 6 digits.';
      valid = false;
    }

    if (newPassword !== confirmPassword) {
      errors.password = 'Passwords do not match.';
      valid = false;
    } else if (!validatePassword(newPassword)) {
      errors.password = 'Password must have at least one capital letter, one digit, and one special character.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (codeInputRefs.current[index] = ref)}
            style={[styles.codeInput, errors.code && styles.errorInput]}
            value={digit}
            onChangeText={(value) => handleCodeChange(index, value)}
            keyboardType="numeric"
            maxLength={1}
            placeholder="-"
            placeholderTextColor="#888888"
          />
        ))}
      </View>
      {errors.code && <Text style={styles.errorText}>{errors.code}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.password && styles.errorInput]}
          placeholder="New Password"
          placeholderTextColor="#888888"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.password && styles.errorInput]}
          placeholder="Confirm Password"
          placeholderTextColor="#888888"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <FontAwesome name={showConfirmPassword ? 'eye' : 'eye-slash'} size={24} color="white" />
        </TouchableOpacity>
      </View>
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    width: '100%', // Adjust to fit the input fields properly
  },
  codeInput: {
    width: '14%', // Adjust to ensure all inputs fit within the container
    height: 55,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 5,
    borderColor: '#333',
    borderWidth: 1,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 5,
    borderColor: '#333',
    borderWidth: 1,
  },
  eyeIcon: {
    marginLeft: -40,
    marginRight: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#8000FF',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PasswordRecovering;
