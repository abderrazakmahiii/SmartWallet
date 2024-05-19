// components/CardCarousel.jsx
import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import CardDetails from './CardDetails';
import CardIndicator from './CardIndicator';

const CardCarousel = ({ cards, setSelectedCard }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const flatListRef = useRef(null);

  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    setSelectedCard(cards[selectedCardIndex]);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: selectedCardIndex,
        viewPosition: 0.5,
      });
    }
  }, [selectedCardIndex]);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.round(contentOffsetX / 320); // Assuming each card is 320 in width
    setSelectedCardIndex(selectedIndex);
  };

  const renderItem = ({ item, index }) => <CardDetails card={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.number}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={320} // Assuming each card is 320 in width
        snapToAlignment={'center'}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        contentContainerStyle={{ alignItems: 'center' }}
      />
      <View style={styles.indicatorContainer}>
        {cards.map((_, index) => (
          <CardIndicator key={index} selected={index === selectedCardIndex} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: -50, // Adjust this value to change the vertical position of the indicators
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default CardCarousel;
