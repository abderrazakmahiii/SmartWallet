import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal } from 'react-native';
import cardData from '../cards.json';
import { AntDesign } from '@expo/vector-icons';

const cardLogos = {
  Mastercard: require('../imgs/mastercard.png'),
  Visa: require('../imgs/visa.png'),
};

const SelectCard = ({ onCardSelect }) => {
  const [selectedCard, setSelectedCard] = useState(cardData[0].number);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectCard = (card) => {
    setSelectedCard(card.number);
    onCardSelect(card.number);
    setModalVisible(false);
  };

  const maskCardNumber = (number) => {
    const visibleDigits = number.slice(-3);
    const maskedDigits = number.slice(0, -3).replace(/\d/g, '*');
    return maskedDigits + visibleDigits;
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity style={styles.cardItem} onPress={() => handleSelectCard(item)}>
      <Text style={styles.cardNumber}>{maskCardNumber(item.number)}</Text>
      <Image source={cardLogos[item.type]} style={styles.cardLogo} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Card</Text>
      <TouchableOpacity style={styles.pickerContainer} onPress={() => setModalVisible(true)}>
        <Text style={styles.selectedCardText}>{maskCardNumber(selectedCard)}</Text>
        <Image
          source={cardLogos[cardData.find(card => card.number === selectedCard).type]}
          style={styles.selectedCardLogo}
        />
        <AntDesign name="down" size={24} color="white" style={styles.dropdownArrow} />
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={cardData}
              renderItem={renderCardItem}
              keyExtractor={(item) => item.number}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: 'white',
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 5,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  selectedCardText: {
    color: 'white',
  },
  selectedCardLogo: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
  dropdownArrow: {
    marginLeft: 'auto',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#333',
    borderRadius: 5,
    width: '80%',
    maxHeight: '60%',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  cardNumber: {
    color: 'white',
  },
  cardLogo: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
});

export default SelectCard;
