import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
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
        style={[styles.textInput, error && !usernameOrEmail.trim() ? styles.errorBorder : null]}
      />
      <View style={[styles.passwordContainer, error && !password.trim() ? styles.errorBorder : null]}>
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
      <TouchableHighlight 
        style={styles.forgotPassword}
        onPress={() => console.log('Forgot Password')}
        underlayColor="transparent"
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableHighlight>
      <TouchableHighlight 
        style={styles.button}
        onPress={handleLogin}
        underlayColor="#6F00D2"
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableHighlight>
      <Text style={styles.signupText}>Don't have an account yet? <Text style={styles.registerText}>Register</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  subTitle : {
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
    color: 'white',
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
  },
  forgotPasswordText: {
    color: '#ccc',
    textAlign: 'right',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    height: 55,
    marginBottom: 10,
    backgroundColor: '#8000FF',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold', 
  },
  signupText: {
    color: 'white',
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
  },
});

export default Login;
