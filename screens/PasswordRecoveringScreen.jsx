import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PasswordRecovering from '../components/PasswordRecovering';
import { AntDesign } from '@expo/vector-icons';

const PasswordRecoveringScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <AntDesign name="arrowleft" size={35} color="#FFFFFF" />
      </TouchableOpacity>
      <Image source={require('../imgs/setpass.png')} style={styles.image} />
      <PasswordRecovering />
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
    top: 40,
    left: 20,
  },
  image: {
    width: 400,
    height: 250,
    marginBottom: 20,
  },
});

export default PasswordRecoveringScreen;
