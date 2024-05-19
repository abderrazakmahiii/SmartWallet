// components/ContactDetail.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const ContactDetail = ({ navigation }) => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123456789');

  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (validateForm()) {
      setIsEditing(false);
    }
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <AntDesign name="arrowleft" size={35} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.title}>John Doe</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
            <FontAwesome name="trash" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEdit} style={styles.iconButton} disabled={isEditing}>
            <FontAwesome name="pencil" size={24} color={isEditing ? 'gray' : 'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.inlineInputs}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, errors.firstName && styles.errorInput]}
              placeholder="First Name"
              placeholderTextColor="#888888"
              value={firstName}
              onChangeText={setFirstName}
              editable={isEditing}
            />
            {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, errors.lastName && styles.errorInput]}
              placeholder="Last Name"
              placeholderTextColor="#888888"
              value={lastName}
              onChangeText={setLastName}
              editable={isEditing}
            />
            {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
          </View>
        </View>
        <TextInput
          style={[styles.input, errors.email && styles.errorInput]}
          placeholder="Email Address"
          placeholderTextColor="#888888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          editable={isEditing}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        <TextInput
          style={[styles.input, errors.phone && styles.errorInput]}
          placeholder="Phone Number"
          placeholderTextColor="#888888"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
          editable={isEditing}
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            isEditing ? styles.saveButtonEnabled : styles.saveButtonDisabled,
          ]}
          onPress={handleSave}
          disabled={!isEditing}
        >
          <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Save'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isEditing ? styles.transferButtonDisabled : styles.transferButtonEnabled,
          ]}
          disabled={isEditing}
        >
          <Text style={styles.buttonText}>{isEditing ? 'Transfer' : 'Transfer'}</Text>
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
    justifyContent: 'space-between',
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
    flex: 1,
  },
  icons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  form: {
    marginTop: 20,
  },
  inlineInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '47.5%',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  saveButtonEnabled: {
    backgroundColor: '#8000FF',
    borderColor: '#8000FF',
    borderWidth: 1,
  },
  saveButtonDisabled: {
    backgroundColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
  },
  transferButtonEnabled: {
    backgroundColor: '#8000FF',
    borderColor: '#8000FF',
    borderWidth: 1,
  },
  transferButtonDisabled: {
    backgroundColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default ContactDetail;
