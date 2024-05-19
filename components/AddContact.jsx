// components/AddContact.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AddContact = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState({});

  const handleGoBack = () => {
    navigation.goBack();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (firstName.length < 2 || /\d/.test(firstName)) {
      errors.firstName = 'First name must be at least 2 characters and contain no digits.';
      valid = false;
    }

    if (lastName.length < 2 || /\d/.test(lastName)) {
      errors.lastName = 'Last name must be at least 2 characters and contain no digits.';
      valid = false;
    }

    if (!validateEmail(email)) {
      errors.email = 'Email address is invalid.';
      valid = false;
    }

    if (phone.length !== 9 || !/^\d+$/.test(phone)) {
      errors.phone = 'Phone number must be 9 digits.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Handle submit action
      // Add logic to save the new contact
      console.log('Form submitted successfully!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <AntDesign name="arrowleft" size={35} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Add a Contact</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, errors.firstName && styles.errorInput]}
          placeholder="First Name"
          placeholderTextColor="#888888"
          value={firstName}
          onChangeText={setFirstName}
        />
        {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

        <TextInput
          style={[styles.input, errors.lastName && styles.errorInput]}
          placeholder="Last Name"
          placeholderTextColor="#888888"
          value={lastName}
          onChangeText={setLastName}
        />
        {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

        <TextInput
          style={[styles.input, errors.email && styles.errorInput]}
          placeholder="Email Address"
          placeholderTextColor="#888888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          style={[styles.input, errors.phone && styles.errorInput]}
          placeholder="Phone Number"
          placeholderTextColor="#888888"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
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
  form: {
    marginTop: 20,
  },
  input: {
    height: 55,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 5,
    borderColor: '#333',
    borderWidth: 1,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#8000FF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddContact;
