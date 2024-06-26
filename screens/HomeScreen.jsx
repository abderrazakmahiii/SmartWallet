import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderHome from '../components/HeaderHome';
import SelectedCard from '../components/SelectedCard';
import CardCarousel from '../components/CardCarousel';
import NavigationBar from '../components/NavigationBar';
import HomeMenu from '../components/HomeMenu';
import cards from '../cards.json';
import SelectedHomeMenu from '../components/SelectedHomeMenu';

const HomeScreen = () => {
  const [selectedCard, setSelectedCard] = useState({
    balance: '$5000',
    lastRefresh: 'Today at 13:25',
  });

  return (
    <View>
      <ScrollView>
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <HeaderHome userName="John" />
      <SelectedCard balance={selectedCard.balance} lastRefresh={selectedCard.lastRefresh} />
      <CardCarousel cards={cards} setSelectedCard={setSelectedCard} />
      <HomeMenu />
      <SelectedHomeMenu />
    </View>
    </ScrollView>
      <NavigationBar />
    </View>

  );
};

export default HomeScreen;
