// ContactTransferScreen.jsx
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ReceiverInfo from '../components/ReceiverInfo';
import SelectCard from '../components/SelectCard';
import AmountInput from '../components/AmountInput';
import NavigationBar from '../components/NavigationBar';

const ContactTransferScreen = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [amount, setAmount] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSend = () => {
    console.log(`Sending ${amount} from card ${selectedCard}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <AntDesign name="arrowleft" size={35} color="#FFFFFF" />
      </TouchableOpacity>
      <ReceiverInfo name="John Doe" phoneNumber="123-456-7890" />
      <SelectCard onCardSelect={setSelectedCard} />
      <AmountInput amount={amount} setAmount={setAmount} />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  sendButton: {
    backgroundColor: '#8000FF',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactTransferScreen;
