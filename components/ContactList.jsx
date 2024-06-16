import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ContactList = ({ contact }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../imgs/profile.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 30,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 20,
    flex: 1, 
    justifyContent: 'center', 
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  phone: {
    fontSize: 16,
    color: '#BBBBBB', 
  },
});

export default ContactList;
