import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ReceiverInfo = ({ name, phoneNumber }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../imgs/profile.png')} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  phoneNumber: {
    color: 'gray',
  },
});

export default ReceiverInfo;
