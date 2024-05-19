// screens/ContactsScreen.jsx
import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Contacts from '../components/Contacts';
import ContactList from '../components/ContactList';
import contactsData from '../contacts.json';
import NavigationBar from '../components/NavigationBar';
import { AntDesign } from '@expo/vector-icons';

const ContactsScreen = ({ navigation }) => {
  // Sort contactsData by name
  const sortedContacts = contactsData.sort((a, b) => a.name.localeCompare(b.name));

  const handleAddContact = () => {
    // Navigate to add contact screen or perform necessary action
  };

  return (
    <View style={styles.container}>
      <Contacts navigation={navigation} />
      <FlatList
        data={sortedContacts}
        renderItem={({ item }) => <ContactList contact={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contactListContainer}
      />
      <NavigationBar />
      <TouchableOpacity style={styles.addButton} onPress={handleAddContact}>
        <AntDesign name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contactListContainer: {
    flexGrow: 1,
    paddingBottom: 100, // Adjust as needed
  },
  addButton: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    backgroundColor: '#8000FF',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ContactsScreen;
