import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DatePicker from "@react-native-community/datetimepicker";

const SignUp = () => {
  const [certifyChecked, setCertifyChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

  const toggleCertifyCheckbox = () => {
    setCertifyChecked(!certifyChecked);
  };

  const toggleTermsCheckbox = () => {
    setTermsChecked(!termsChecked);
  };

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const getFormattedDate = (date) => {
    return date ? date.toLocaleDateString() : "Birthdate";
  };

  const handleSignUp = () => {
    if (!firstName.trim()) {
      setError('First name is required');
      return;
    }
    if (!lastName.trim()) {
      setError('Last name is required');
      return;
    }
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email address is not valid');
      return;
    }
    if (!phone.trim()) {
      setError('Phone number is required');
      return;
    }
    if (!address.trim()) {
      setError('Address is required');
      return;
    }
    if (getFormattedDate(date) === 'Birthdate') {
      setError('Birthdate is required');
      return;
    }
    if (!password.trim()) {
      setError('Password is required');
      return;
    }
    if (!/(?=.*\d)(?=.*[A-Z])(?=.*\W)/.test(password)) {
      setError('Password must contain at least one capital letter, one digit, and one special symbol');
      return;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setError('Passwords do not match');
      return;
    }
    if (!certifyChecked) {
      setError('Please certify that all information is accurate');
      return;
    }
    if (!termsChecked) {
      setError('Please agree to the terms and conditions');
      return;
    }
    // If all validations pass, proceed with signup
    setError('');
    // Implement your signup logic here
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const updateConfirmSecureTextEntry = () => {
    setConfirmSecureTextEntry(!confirmSecureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.startForFree}>START FOR FREE</Text>
      <Text style={styles.createNewAccount}>Create New Account</Text>
      <Text style={styles.signInText}>
        Already have an account? <Text style={styles.signInLink}>Sign in</Text>
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.nameContainer}>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#ccc"
            style={[styles.inputName, error !== '' && !firstName.trim() ? styles.errorBorder : null]}
            keyboardType="default"
            autoCapitalize="words"
            onChangeText={text => setFirstName(text)}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#ccc"
            style={[styles.inputName, error !== '' && !lastName.trim() ? styles.errorBorder : null]}
            keyboardType="default"
            autoCapitalize="words"
            onChangeText={text => setLastName(text)}
          />
          <MaterialIcons name="badge" size={24} color="white" style={styles.iconRight} />
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#ccc"
            style={[styles.fieldInput, error !== '' && (!email.trim() || !/\S+@\S+\.\S+/.test(email)) ? styles.errorBorder : null]}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
          />
          <MaterialIcons name="mail" size={24} color="white" style={styles.iconLeft} />
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder="Phone number"
            placeholderTextColor="#ccc"
            style={[styles.fieldInput, error !== '' && !phone.trim() ? styles.errorBorder : null]}
            keyboardType="number-pad"
            autoCapitalize="none"
            onChangeText={text => setPhone(text)}
          />
          <MaterialIcons name="phone" size={24} color="white" style={styles.iconLeft} />
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder="Address"
            placeholderTextColor="#ccc"
            style={[styles.fieldInput, error !== '' && !address.trim() ? styles.errorBorder : null]}
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={text => setAddress(text)}
          />
          <MaterialIcons name="location-on" size={24} color="white" style={styles.iconLeft} />
        </View>
        <View style={styles.fieldContainer}>
          <TouchableOpacity onPress={toggleDatePicker} style={[styles.datePicker, error !== '' && getFormattedDate(date) === 'Birthdate' ? styles.errorBorder : null]}>
            <Text style={{ color: "white" }}>{date ? getFormattedDate(date) : "Birthdate"}</Text>
            <MaterialIcons name="calendar-today" size={24} color="white" style={styles.iconLeft} />
          </TouchableOpacity>
          {showPicker && (
            <DatePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
              format="YYYY-MM-DD"
              // Additional props for datepicker
            />
          )}
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ccc"
            style={[styles.fieldInput, error !== '' && (!password.trim() || !/(?=.*\d)(?=.*[A-Z])(?=.*\W)/.test(password)) ? styles.errorBorder : null]}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry} style={styles.iconRight}>
            {secureTextEntry ?
              <MaterialIcons name="visibility-off" size={24} color="white" />
              :
              <MaterialIcons name="visibility" size={24} color="white" />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#ccc"
            style={[styles.fieldInput, error !== '' && (password.trim() !== confirmPassword.trim()) ? styles.errorBorder : null]}
            secureTextEntry={confirmSecureTextEntry}
            autoCapitalize="none"
            onChangeText={text => setConfirmPassword(text)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry} style={styles.iconRight}>
            {confirmSecureTextEntry ?
              <MaterialIcons name="visibility-off" size={24} color="white" />
              :
              <MaterialIcons name="visibility" size={24} color="white" />
            }
          </TouchableOpacity>
        </View>
        {/* Checkboxes for certification and terms */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, certifyChecked ? styles.checked : null]}
            onPress={toggleCertifyCheckbox}
          >
            {certifyChecked && <MaterialIcons name="check" size={20} color="#8000FF" />}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>I certify that all of the information I have entered is true and accurate to the best of my knowledge.</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, termsChecked ? styles.checked : null]}
            onPress={toggleTermsCheckbox}
          >
            {termsChecked && <MaterialIcons name="check" size={20} color="#8000FF" />}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>I agree to the terms and conditions</Text>
        </View>
        {error !== '' && <Text style={styles.errorText}>{error}</Text>}
        {/* Sign up button with arrow */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
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
  startForFree: {
    color: '#777', // Dark gray text color
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  createNewAccount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  signInText: {
    color: '#777', // Dark gray text color
    marginBottom: 10,
  },
  signInLink: {
    color: '#8000FF', // Purple text color
    fontSize: 15,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  nameContainer: {
    flexDirection: 'row', // Default for alignment
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10, // Maintain some space between fields
    marginRight: 10, // Small space between input fields
  },
  inputName: {
    flex: 1,
    height: 55,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#484747',
    color: 'white',
    marginRight: 5, // Small space between input fields
  },
  fieldContainer: {
    flexDirection: 'row', // Arrange email input and icon horizontally
    alignItems: 'center',
  },
  fieldInput: {
    flex: 1, // Take up remaining space in container
    height: 55,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#484747',
    color: 'white',
    marginRight: 15,
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#8000FF', // Purple button color
    borderRadius: 10,
    height: 55,
    marginTop: 20, // Add space between sign-up button and previous input field
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#484747',
    marginRight: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderColor: '#8000FF',
  },
  checkboxText: {
    color: 'white',
    fontSize: 12,
  },
  datePicker: {
    flex: 1,
    height: 55,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#484747',
    justifyContent: 'center',
    color: 'white',
    marginBottom: 10,
    marginRight: 15,
    position: 'relative',
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  iconRight: {
    position: 'absolute',
    right: 0,
    color: 'white',
    marginRight: 15,
  },
  iconLeft: {
    position: 'absolute',
    left: 0,
    color: 'white',
    marginLeft: 15,
  },
});

export default SignUp;
