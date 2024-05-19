// screens/ContactDetailScreen.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ContactDetail from '../components/ContactDetail';
import NavigationBar from '../components/NavigationBar';

const ContactDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ContactDetail navigation={navigation} />
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default ContactDetailScreen;
