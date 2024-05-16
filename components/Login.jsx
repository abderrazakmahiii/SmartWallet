import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    if (!usernameOrEmail.trim() || !password.trim()) {
      setError('Please enter your email or phone number and password.');
      return;
    }
    // Implement login logic here (placeholder for now)
    alert('Login functionality under development!');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's sign you in!</Text>
      <Text style={styles.subTitle}>Welcome Back!</Text>
      <TextInput
        value={usernameOrEmail}
        onChangeText={text => setUsernameOrEmail(text)}
        placeholder="Email or phone number"
        style={[styles.textInput, error && !usernameOrEmail.trim() && styles.errorBorder]}
      />
      <View style={[styles.passwordContainer, error && !password.trim() && styles.errorBorder]}>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.textInput}
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={22}
          color="#ccc"
          onPress={toggleShowPassword}
          style={styles.eyeIcon}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => console.log('Forgot Password')}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Don't have an account yet? 
        <Text style={styles.registerText}> Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#000', // Set background color to black
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  subTitle: {
    color: '#484747',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    height: 55,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#484747',
    color: 'white', // Set text color to white for all states
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  forgotPassword: {
    marginBottom: 20,
    alignSelf: 'flex-end', // Align the link to the right
  },
  forgotPasswordText: {
    color: '#ccc',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    height: 55,
    marginBottom: 10,
    backgroundColor: '#8000FF',
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: 'white', // Text color
    fontSize: 18, // Text size
    fontWeight: 'bold', // Text weight
  },
  signupText: {
    color: 'white',
    textAlign: 'center', // Center align the text
  },
  registerText: {
    color: '#8000FF',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default Login;
