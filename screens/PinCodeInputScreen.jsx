import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PinCodeInput from '../components/PinCodeInput';
import { AntDesign } from '@expo/vector-icons';

const PinCodeInputScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PinCodeInput navigation={navigation} />
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
  }
});

export default PinCodeInputScreen;
