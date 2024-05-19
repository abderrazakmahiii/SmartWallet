import React from 'react';
import { View } from 'react-native';
import AddCard from '../components/AddCard';
import NavigationBar from '../components/NavigationBar';

const AddCardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <AddCard navigation={navigation} />
      <NavigationBar />
    </View>
  );
};

export default AddCardScreen;
