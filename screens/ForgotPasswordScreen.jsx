import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ForgotPassword from '../components/ForgotPassword';
import { AntDesign } from '@expo/vector-icons';

const ForgotPasswordScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <AntDesign name="arrowleft" size={35} color="#FFFFFF" />
      </TouchableOpacity>
      <Image source={require('../imgs/forgotpass.png')} style={styles.image} />
      <ForgotPassword />
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
    top: 40, // Adjust as needed
    left: 20, // Adjust as needed
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default ForgotPasswordScreen;
