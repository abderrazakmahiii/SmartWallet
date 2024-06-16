import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddContact from '../components/AddContact';
import NavigationBar from '../components/NavigationBar';

const AddContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AddContact navigation={navigation} />
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

export default AddContactScreen;
