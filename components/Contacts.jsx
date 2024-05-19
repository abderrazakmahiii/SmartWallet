// components/Contacts.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Contacts = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <AntDesign name="arrowleft" size={35} color="#FFFFFF" />
          <Text style={styles.title}>Contacts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 20,
    marginBottom: 10,
  },
  component: {
    marginTop: 50,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Contacts;
